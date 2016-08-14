import Ember from 'ember';

const { Object: EmberObject, computed } = Ember;

export default EmberObject.extend({
  horses: 0,
  chickens: 0,

  total: computed('horses', 'chickens', function() {
    return this.get('horses') + this.get('chickens');
  })
});
