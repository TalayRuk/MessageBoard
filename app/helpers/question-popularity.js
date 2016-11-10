import Ember from 'ember';

export function questionPopularity(params/*, hash*/) {
  var question = params[0];

  if (question.get('answers').get('length') >= 10) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-heart"></span>');
  }
  else if (question.get('answers').get('length') >= 5) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span>')
  }
  else if (question.get('answers').get('length') >= 3) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star-empty"></span>')
  }
}

export default Ember.Helper.helper(questionPopularity);
