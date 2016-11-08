import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  actions: {//not working!
    addToCart(product) {
      this.get('shoppingCart').add(product);
    }
  }
});
