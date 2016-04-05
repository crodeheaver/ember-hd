import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('student');
  },
  actions: {
    deleteStudent(student) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        student.destroyRecord();
      }
    }
  }
});
