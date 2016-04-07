import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  actions:{
    addClicked(tests){
      let exp = this.get('store').createRecord('teaching', {});
      tests.pushObject(exp);
    },
    deleteClicked(tests, test) {
      tests.removeObject(test);
    }
  }
});
