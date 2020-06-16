import { Meteor } from 'meteor/meteor';
import { Ratings } from '../../api/rating/rating.js';

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.movie} ${data.user} ${data.rating} ${data.comment}`);
  Ratings.insert(data);
}

/** Initialize the collection if empty. */
if (Ratings.find().count() === 0) {
  if (Meteor.settings.defaultRatings) {
    console.log('Creating default ratings.');
    Meteor.settings.defaultRatings.map(data => addData(data));
  }
}

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
