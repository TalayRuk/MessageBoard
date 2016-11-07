import DS from 'ember-data';

export default DS.Model.extend({
  topic: DS.attr(),
  userName: DS.attr(),
  title: DS.attr(),
  detail: DS.attr(),
  answers: DS.hasMany('answer', { async: true})
  //add one to many relationship. Just like a joint table .. model/answer.js willneed to add questions also
});
