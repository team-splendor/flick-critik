import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';


/** Renders a single row in the Admin table. See pages/ListStuffAdmin.jsx. */
class Movie4Comp extends React.Component {

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
Movie4Comp.propTypes = {
  currentRating: PropTypes.object.isRequired,
};

export default withRouter(Movie4Comp);
