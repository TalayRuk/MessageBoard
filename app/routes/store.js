import Ember from 'ember';

export default Ember.Route.extend({
  // model() { //nested route doesn't like this 
  //   return this.store.findAll('product');
  // },
  // actions: {
  //   addToCart(pararms) {
  //     var newProduct = this.store.createRecord('product', params);
  //     this.transitionTo('store/product/product_id');
  //   }
  // }
});
