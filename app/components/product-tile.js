import Ember from 'ember';

export default Ember.Component.extend({

  shoppingCart: Ember.inject.service(),

  actions: {
    addToCart(product) {
      this.get('shoppingCart').add(product);
    },//only the COMMA was missing so action wasn't working!!!!
    // this.sendAction('addToCart', product):
  }
});
