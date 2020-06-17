import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Dropdown, Icon, Button } from 'semantic-ui-react';
import { Roles } from 'meteor/alanning:roles';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class NavBar extends React.Component {
  render() {
    return (
        /* <div className='menu'> */
        <Menu borderless>
          <Menu.Item as={NavLink} activeClassName="" exact to="/">
            <Button color='green' circular compact size='mini'>
              <Button.Content>
                <Icon name='home' color='black' size='big'/>Home
              </Button.Content>
            </Button>
          </Menu.Item>
          {this.props.currentUser ? (
          [<Menu.Item as={NavLink} activeClassName="active" exact to="/list" key='list'>
            <Button color='blue' circular compact size='mini'>
              <Button.Content>
                View Movies
              </Button.Content>
            </Button>
          </Menu.Item>]
          ) : ''}
          {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
          <Menu.Item as={NavLink} activeClassName="active" exact to="/admin" key='admin'>
            <Button color='red' circular compact size='mini'>
            <Button.Content>
              Admin
            </Button.Content>
          </Button>
          </Menu.Item>
          ) : ''}
          <Menu.Item position="right">
            <Button color='pink' circular compact size='mini'>
              <Button.Content>
                {this.props.currentUser === '' ? (
                <Dropdown text="Login" pointing="top right" icon={'user outline'}>
                  <Dropdown.Menu>
                    <Dropdown.Item icon="sign in" text="Sign In" as={NavLink} exact to="/signin"/>
                    <Dropdown.Item icon="add user" text="Sign Up" as={NavLink} exact to="/signup"/>
                  </Dropdown.Menu>
                </Dropdown>
            ) : (
                <Dropdown text={this.props.currentUser} pointing="top right" icon={'user'}>
                  <Dropdown.Menu>
                    <Dropdown.Item icon="sign out" text="Sign Out" as={NavLink} exact to="/signout"/>
                  </Dropdown.Menu>
                </Dropdown>
            )}
              </Button.Content>
            </Button>
          </Menu.Item>
        </Menu>
    );
  }
}

/** Declare the types of all properties. */
NavBar.propTypes = {
  currentUser: PropTypes.string,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
const NavBarContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(NavBar);

/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */
export default withRouter(NavBarContainer);
