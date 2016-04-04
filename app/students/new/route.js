import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('student');
  },
  actions: {
    addStudent(newStudent) {
      newStudent.save().then(() => this.transitionTo('students.index'));
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});
