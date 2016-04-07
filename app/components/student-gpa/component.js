import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  actions: {
    addClicked(student){
      let gpa = this.get('store').createRecord('gpa', {});
      student.get('gpa').pushObject(gpa);
    },
    deleteClicked(student, gpa) {
      student.get('gpa').removeObject(gpa);
    }
  }
});
