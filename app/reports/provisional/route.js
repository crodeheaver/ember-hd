import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.query('student', { report: 'provisional' });
    //return this.store.findAll('student', 'report/provisional');
  }
});
