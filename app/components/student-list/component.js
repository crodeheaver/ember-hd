import Ember from 'ember';

export default Ember.Component.extend({
  actions: {

    deleteButton(param) {
      this.sendAction('action', param);
    }

  }
});
