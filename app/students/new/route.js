import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('student');
  },
  renderTemplate() {
    this.render('students/form');
  },

  setupController: function (controller, model) {
    this._super(controller, model);

    controller.set('title', 'Add New Student');
    controller.set('buttonLabel', 'Save');
  },

  actions: {
    saveStudent(newStudent) {
      newStudent.save().then(() => this.transitionTo('students.index'));
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    },
  }
});
