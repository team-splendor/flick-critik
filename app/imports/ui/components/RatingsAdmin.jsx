import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import swal from '@sweetalert/with-react';


/** Renders a single row in the Admin table. See pages/ListStuffAdmin.jsx. */
class RatingsAdmin extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.onClick = this.onClick.bind(this);
  // }
  //
  // onClick() {
  //   swal({
  //     title: 'Are you sure?',
  //     text: 'Once deleted, User will not be in Flick-Critik.',
  //     icon: 'warning',
  //     buttons: true,
  //     dangerMode: true,
  //   })
  //       .then((willDelete) => {
  //         if (willDelete) {
  //           Meteor.users.remove({ _id: this.props.currentUser._id }, this.deleteCallback);
  //         } else {
  //           swal('You chose to not delete the User.');
  //         }
  //       });
  // }
  //
  // deleteCallback(error) {
  //   if (!error) {
  //     swal({
  //       title: 'You Removed the User.',
  //       text: 'New User must register a new account.',
  //       icon: 'success',
  //       button: 'Okay.',
  //     });
  //     this.formRef.reset();
  //   } else {
  //     swal({
  //       title: 'User Not Successfully Removed!',
  //       text: 'There might be an error on our end, we will fix this.',
  //       icon: 'error',
  //       button: 'Okay.',
  //     });
  //   }
  // }

  render() {
    return (
        <Table.Row>
          <Table.Cell>{this.props.currentRating.user}</Table.Cell>
          <Table.Cell>{this.props.currentRating.movie}</Table.Cell>
          <Table.Cell>{this.props.currentRating.rating}</Table.Cell>
          <Table.Cell>{this.props.currentRating.comment}</Table.Cell>
        </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
RatingsAdmin.propTypes = {
  currentRating: PropTypes.object.isRequired,
};

export default withRouter(RatingsAdmin);
