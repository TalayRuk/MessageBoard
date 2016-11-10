import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('question', {path: '/question/:question_id'});
  //path id = dynamic segment
  this.route('store', function() {
    //add nested child route product = child
    this.route('product', {path: '/:product_id'});
  });
});

export default Router;
