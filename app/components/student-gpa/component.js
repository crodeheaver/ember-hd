import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addClicked(student){
      this.sendAction('addGpa', student);
    },
    deleteClicked(studentId, gpa) {
      this.sendAction('deleteGpa', studentId, gpa);
    }

  }
});
