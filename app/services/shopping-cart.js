import Ember from 'ember';

export default Ember.Service.extend({
  products: [],

  add(product) {
    this.get('products').pushObject(product);
  },
  remove(product) {
    this.get('products').removeObject(product);
  }
});
