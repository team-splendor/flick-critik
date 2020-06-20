import { Meteor } from 'meteor/meteor';
import { Ratings } from '../../api/rating/rating.js';

/* eslint-disable no-console */

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
