import { Meteor } from 'meteor/meteor';
import { Ratings } from '../../api/rating/rating.js';

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('Rating', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Ratings.find({ rater: username });
  }
  return this.ready();
});

/** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
Meteor.publish('AllRatings', function publish() {
  if (this.userId) {
    return Ratings.find();
  }
  return this.ready();
});
