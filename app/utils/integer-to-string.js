import Ember from 'ember';

const { computed } = Ember;

export default function integerToString(attribute) {
  return computed(attribute, {
    get() {
      return this.get(attribute).toString();
    },

    set(key, value) {
      this.set(attribute, parseInt(value, 10));

      return value;
    }
  });
}
