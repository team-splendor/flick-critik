import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Table, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import swal from '@sweetalert/with-react';


/** Renders a single row in the Admin table. See pages/ListStuffAdmin.jsx. */
class StuffItemAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, User will not be in Flick Critik.',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
        .then((willDelete) => {
          if (willDelete) {
            Meteor.users.remove({ _id: this.props.currentUser._id }, this.deleteCallback);
          } else {
            swal('You chose to not delete the User.');
          }
        });
  }

  deleteCallback(error) {
    if (!error) {
      swal({
        title: 'You Removed the User.',
        text: 'New User must register a new account.',
        icon: 'success',
        button: 'Okay.',
      });
      this.formRef.reset();
    } else {
      swal({
        title: 'User Not Successfully Removed!',
        text: 'There might be an error on our end, we will fix this.',
        icon: 'error',
        button: 'Okay.',
      });
    }
  }

  render() {
    return (
        <Table.Row>
          <Table.Cell>{this.props.currentUser.username}</Table.Cell>
          <Table.Cell ><Button fluid color='red' onClick={this.onClick}>Delete</Button></Table.Cell>
        </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
StuffItemAdmin.propTypes = {
  currentUser: PropTypes.object,
};

export default withRouter(StuffItemAdmin);
