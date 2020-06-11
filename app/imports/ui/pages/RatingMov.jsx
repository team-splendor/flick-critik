import React from 'react';
import { Ratings } from '/imports/api/rating/rating';
// import { Bert } from 'meteor/themeteorchef:bert';
import swal from '@sweetalert/with-react';
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
  TextArea, Dropdown,
} from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class RatingMov extends React.Component {

  /** Bind 'this' so that a ref to the Form can be saved in formRef and communicated between render() and submit(). */
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeRate = this.handleChangeRate.bind(this);
    this.insertCallback = this.insertCallback.bind(this);
  }

  /** Notify the user of the results of the submit. If successful, clear the form. */
  insertCallback(error) {
    if (error) {
      swal({
        title: 'Rating failed!',
        text: 'There was an error with your rating!',
        icon: 'error',
      });
      // Bert.alert({ type: 'danger', message: `Rating failed: ${error.message}` });
    } else {
      swal({
        title: 'Rating succeeded!',
        text: 'Your rating was successfully input!',
        icon: 'success',
      }).then(function () {
        window.location.href = '/';
      });
      // Bert.alert({ type: 'success', message: 'Rating succeeded' });
    //   window.setTimeout(function () {
    //     window.location.href = '/';
    //   }, 1000);
    }
  }

  /** On submit, insert the data. */
  submit() {
    const user = Meteor.user().username;
    const movie = this.state.movie;
    // if (this.state === null) {
    //   swal({
    //     title: 'No rating!',
    //     text: 'Please enter a rating for your review!',
    //     icon: 'error',
    //   });
    // }
    const rating = this.state.rating;
    const comment = this.state.comment;
    Ratings.insert({ user, movie, rating, comment }, this.insertCallback);
  }

  handleChangeRate(e, { name, rating }) {
    this.setState({ [name]: rating });
  }

  handleChange(e, { name, value }) {
    this.setState({ [name]: value });
  }

  // handleDropChange = (event, data) => {
  //   this.setState({
  //     [data.name]: data.value,
  //   });
  // };

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    const movOpt = [
      {
        key: 'Uncut Gems',
        text: 'Uncut Gems',
        value: 'Uncut Gems',
      },
      {
        key: 'The Grey Fox',
        text: 'The Grey Fox',
        value: 'The Grey Fox',
      },
      {
        key: 'The Vast of Night',
        text: 'The Vast of Night',
        value: 'The Vast of Night',
      },
      {
        key: 'Judy Punch',
        text: 'Judy Punch',
        value: 'Judy Punch',
      },
    ];

    return (
        <Grid container centered>
          <Grid.Column>
            <Header as="h2" textAlign="center">
              <HeaderContent>Flick Critik</HeaderContent>
            </Header>
            <Grid>
              <GridRow centered>
                <Icon name="thumbs up outline" color="green" size="big"/>
                <Icon name="thumbs down outline" color="red" size="big"/>
              </GridRow>
            </Grid>
            <br/>
            <Form onSubmit={this.submit}>
              <Header as="h3" >
                <Icon name="play" color="green"/>
                <HeaderContent>Movie:</HeaderContent>
              </Header>
              <FormInput required>
                <Dropdown name='movie' onChange={this.handleChange}
                    placeholder='Select a Movie'
                    fluid
                    selection
                    options={movOpt}
                />
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
                <TextArea name="comment" onChange={this.handleChange}></TextArea>
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
      movie: PropTypes.string,
      _id: PropTypes.string,
    }),
  }),
};

export default withRouter(RatingMov);
