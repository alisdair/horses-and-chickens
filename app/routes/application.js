import Ember from 'ember';
import Model from '../models/model';

const { Route } = Ember;

export default Route.extend({
  model() {
    return Model.create({ horses: 6, chickens: 1 });
  },

  actions: {
    refresh() {
      this.refresh();
    }
  }
});
