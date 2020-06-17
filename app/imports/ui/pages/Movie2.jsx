import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Table, Header, Loader, GridRow, Icon, Grid } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Ratings } from '/imports/api/rating/rating';
import Movie2Comp from '../components/Movie2Comp';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class Movie2 extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (

        <Container>
          <Header as="h1" textAlign="center">The Grey Fox</Header>
          <Grid>
              <GridRow centered>
                <Icon name="film" size="big"/>
              </GridRow>
            </Grid>

          <Header as="h2" textAlign="center">Ratings</Header>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Username</Table.HeaderCell>
                <Table.HeaderCell>Movie</Table.HeaderCell>
                <Table.HeaderCell>Rating</Table.HeaderCell>
                <Table.HeaderCell>Comment</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.props.ratings.map((rating) => <Movie2Comp key={rating._id} currentRating={rating} />)}
            </Table.Body>
          </Table>
        </Container>
    );
  }
}

/** Require an array of Ratings documents in the props. */
Movie2.propTypes = {
  ratings: PropTypes.array.isRequired,
  ready: PropTypes.bool,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Ratings documents.
  const subscription = Meteor.subscribe('AllRatings');
  const movieName = 'The Grey Fox';
  return {
    ratings: Ratings.find({ movie: movieName }).fetch(),
    ready: subscription.ready(),
  };
})(Movie2);
