import Ember from 'ember';
import integerToString from '../utils/integer-to-string';

const { Controller } = Ember;

export default Controller.extend({
  horses: integerToString('model.horses'),
  chickens: integerToString('model.chickens')
});
