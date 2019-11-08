import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | tasks/new', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:tasks/new');
    assert.ok(route);
  });
});
