import DS from 'ember-data';

export default DS.Model.extend({
  "semester" : DS.attr('string'),
  "gpa"      : DS.attr('number')
});
