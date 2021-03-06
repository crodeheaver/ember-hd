import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  actions:{
    addClicked(student){
      let exp = this.get('store').createRecord('teaching', {});
      student.get('stTeaching').pushObject(exp);
    },
    deleteClicked(student, exp) {
      student.get('stTeaching').removeObject(exp);
    }
  }
});
