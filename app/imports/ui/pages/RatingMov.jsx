import React from 'react';
import { Ratings } from '/imports/api/rating/rating';
// import { Bert } from 'meteor/themeteorchef:bert';
import {
  Grid,
  Header,
  Rating,
  Form,
  FormInput,
  FormButton,
  HeaderContent,
  Icon,
  GridRow,
  Input
} from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class RatingMov extends React.Component {

  /** Bind 'this' so that a ref to the Form can be saved in formRef and communicated between render() and submit(). */
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.handleChangeRate = this.handleChangeRate.bind(this);
    this.insertCallback = this.insertCallback.bind(this);
  }

  /** Notify the user of the results of the submit. If successful, clear the form. */
  insertCallback(error) {
    // const id = this.props.match.params._id;
    if (error) {
      Bert.alert({ type: 'danger', message: `Rating failed: ${error.message}` });
    } else {
      Bert.alert({ type: 'success', message: 'Rating succeeded' });
      window.setTimeout(function () {
        window.location.href = `/`;
      }, 1000);
    }
  }

  /** On submit, insert the data. */
  submit() {
    const user = Meteor.user().username;
    const movie = this.props.match.params.movie;
    if (this.state === null) {
      Bert.alert({ type: 'danger', message: 'Please enter a rating for this movie.' });
    }
    const rating = this.state.rating;
    const comment = this.state.comment;
    Ratings.insert({ user, movie, rating, comment }, this.insertCallback);
  }

  handleChangeRate(e, { name, rating }) {
    this.setState({ [name]: rating });
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    const mov = this.props.match.params.movie;
    return (
        <Grid container centered>
          <Grid.Column>
            <Header as="h2" textAlign="center">
              <HeaderContent>Flick Critik</HeaderContent>
            </Header>
            <Grid>
              <GridRow centered>
                <Icon name="thumbs up outline" color="green" size="big"/>
                <Icon name="thumbs down outline" color="green" size="big"/>
              </GridRow>
            </Grid>
            <br/>
            <Form onSubmit={this.submit}>
              <Header as="h3" >
                <Icon name="play" color="green"/>
                <HeaderContent>Movie:</HeaderContent>
              </Header>
              <FormInput required>
                <Input name="movie"></Input>
              </FormInput>
              <Header as="h3" >
                <Icon name="star" color="yellow"/>
                <HeaderContent>Rating: (1-5)</HeaderContent>
              </Header>
              <FormInput required>
                <Rating icon='star' name='rating' defaultRating={0} maxRating={5} size='massive'
                        onRate={this.handleChangeRate}/>
              </FormInput>
              <Header as="h3" >
                <Icon name="comments outline" color="black"/>
                <HeaderContent>Comments:</HeaderContent>
              </Header>
              <FormInput required>
                <Input name="comments"></Input>
              </FormInput>
              <br/>
              <FormButton content='Submit' value='Submit' color="blue"/>
              <br/>
            </Form>
          </Grid.Column>
        </Grid>
    );
  }
}

RatingMov.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      movie: PropTypes.string.isRequired,
      _id: PropTypes.string,
    }),
  }),
};

export default withRouter(RatingMov);