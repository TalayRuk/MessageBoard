import Ember from 'ember';

export function productCost(params/*, hash*/) {
  var productPrice = params[0].get('cost');

  if (productPrice >= 70){
    return 'HARD TO FIND!';
  } else if (productPrice >= 30){
    return 'EXCELLENT VALUE!';
  } else if (productPrice < 30) {
    return 'HOT DEAL!!';
  }
}

export default Ember.Helper.helper(productCost);
