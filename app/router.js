import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('students', function() {
    this.route('new');
    this.route('edit', { path: "/:id/edit" });
  });
  this.route('reports', function() {
    this.route('provisional', {path: "/report/:type"});
  });
});

export default Router;
