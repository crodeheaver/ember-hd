import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addGpa(student){
      this.sendAction('addGpa', student);
    },
    deleteGpa(student, gpa){
      this.sendAction('deleteGpa', student, gpa);
    },
    buttonClicked(param) {
      this.sendAction('action', param);
    }

  }
});
