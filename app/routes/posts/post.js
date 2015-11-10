import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.store.findRecord('post', params.slug);
  },
  setupController(controller, model) {
    this._super(controller, model);
    this.controllerFor('posts').set('showSummary', false);
  },
  resetController(controller, isExiting) {
    if (isExiting) {
      this.controllerFor('posts').set('showSummary', true);
    }
  }
});
