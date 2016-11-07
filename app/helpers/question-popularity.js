import Ember from 'ember';

const {
  Helper,
  String
} = Ember;

export function questionPopularity(params/*, hash*/) {
  var question = param[0];

  if(question.get('answers').get('length' >= 3)) {
    return String.htmlSafe('<span class="glyphicon glyphicon-star"></span>');
  }
}

export default Helper.helper(questionPopularity);
