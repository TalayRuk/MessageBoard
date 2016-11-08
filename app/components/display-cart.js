import Ember from 'ember';
//short hands w/o have to repeat Ember. & Ember.computed.
const {
  Component,
  inject,
  computed: { alias, mapBy, sum},
} = Ember;

export default Component.extend({
  shoppingCart: inject.service(),
  //set up products as shoppingCart
  products: alias('shoppingCart.products'),

  //to get array of each product's cost in shoppingCart
  productPriceArray: mapBy('products', 'cost'),
  //each array of product cost in the cart was created as user add the product to the cart by using mapping. In this case products is an alias of shoppingCart.products

  //Calculate the total price .. have to use together with mapBy
  totalPrice: sum('productPriceArray')
  //add all the costs in the array together.

  // actions: {
  //   remove(product) {
  //     this.get('shoppingCart').remove(product);
  //   }
  // }
});
