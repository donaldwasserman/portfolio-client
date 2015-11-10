import Ember from 'ember';

export default Ember.Controller.extend({
  sortProperties: ['shortDate:desc'],
  sortedPosts: Ember.computed.sort('model', 'sortProperties'),
  showSummary: true
});
