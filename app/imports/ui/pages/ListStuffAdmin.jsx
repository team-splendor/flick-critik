import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Table, Header, Loader, GridRow, Icon, Grid } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Ratings } from '/imports/api/rating/rating';
import StuffItemAdmin from '../components/StuffItemAdmin';
import RatingsAdmin from '../components/RatingsAdmin';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListStuffAdmin extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (

        <Container>
          <Header as="h1" textAlign="center">Admin</Header>
          <Grid>
              <GridRow centered>
                <Icon name="archive" size="big"/>
              </GridRow>
            </Grid>
          <Header as="h2" textAlign="center">Users</Header>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Username</Table.HeaderCell>
                <Table.HeaderCell>Remove A User</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.props.users.map((user) => <StuffItemAdmin key={user._id} currentUser={user} />)}
            </Table.Body>
          </Table>

          <Header as="h2" textAlign="center">Ratings</Header>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Username</Table.HeaderCell>
                <Table.HeaderCell>Movie</Table.HeaderCell>
                <Table.HeaderCell>Rating</Table.HeaderCell>
                <Table.HeaderCell>Comment</Table.HeaderCell>
                <Table.HeaderCell>Remove A Rating</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.props.ratings.map((rating) => <RatingsAdmin key={rating._id} currentRating={rating} />)}
            </Table.Body>
          </Table>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListStuffAdmin.propTypes = {
  users: PropTypes.array.isRequired,
  ratings: PropTypes.array.isRequired,
  ready: PropTypes.bool,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  const subscription = Meteor.subscribe('userList');
  const subscription2 = Meteor.subscribe('AllRatings');
  return {
    users: Meteor.users.find({}, { fields: { username: 1, profile: 1 } }).fetch(),
    ratings: Ratings.find({}).fetch(),
    ready: subscription.ready() && subscription2.ready(),
  };
})(ListStuffAdmin);
