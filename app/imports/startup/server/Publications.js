import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';

/** This subscription publishes all users documents */
Meteor.publish('userList', function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Meteor.users.find({}, { fields: { username: 1, profile: 1 } });
  }
  return this.ready();
});
