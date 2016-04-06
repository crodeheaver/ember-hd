import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('student-gpa', 'Integration | Component | student gpa', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{student-gpa}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#student-gpa}}
      template block text
    {{/student-gpa}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
