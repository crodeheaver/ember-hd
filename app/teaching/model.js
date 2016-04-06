import DS from 'ember-data';

export default DS.Model.extend({
  'student': DS.belongsTo('student'),
  'schoolName': DS.attr('string'),
  'teacherName': DS.attr('string'),
  'beginDate': DS.attr('date'),
  'endDate': DS.attr('date'),
  'contract': DS.attr('boolean'),
  'practicum': DS.attr('boolean'),
  'ctEval': DS.attr('boolean'),
  'ctRefQuestions':DS.attr('boolean')
});
