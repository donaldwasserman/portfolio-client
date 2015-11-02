import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('posts', function() {
    this.route('post', {path: '/:slug'});
  });

  this.route('projects');
  this.route('about');
  this.route('home', {path: '/'});
});

export default Router;
