import Ember from 'ember';

export default Ember.Service.extend({
  questions: [],

  add(question) {
    //add question to the array
    this.get('questions').pushObject(question);
  }
});
