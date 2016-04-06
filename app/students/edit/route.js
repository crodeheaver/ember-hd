import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('student', params.id);
  },

  setupController: function (controller, model) {
    this._super(controller, model);

    controller.set('title', 'Edit Student Information');
    controller.set('buttonLabel', 'Update');
  },

  renderTemplate() {
    this.render('students/form');
  },

  actions: {

    saveStudent(newStudent) {
      newStudent.save().then(() => this.transitionTo('students.index'));
    },
    addGpa(student) {
      let srecord = this.store.peekRecord('student', student);
      let gpa = this.store.createRecord('gpa', { studentId: student});
      srecord.get('gpa').pushObject(gpa)
      srecord.save();
    },
    deleteGpa(student, gpa) {
      student.get('gpa').removeObject(gpa)
      student.save();
    },

    willTransition(transition) {

      let model = this.controller.get('model');

      if (model.get('hasDirtyAttributes')) {
        let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");

        if (confirmation) {
          model.rollbackAttributes();
        } else {
          transition.abort();
        }
      }
    }
  }
});
