import DS from 'ember-data';

export default DS.Model.extend({
  topic: DS.attr(),
  name: DS.attr(),
  title: DS.attr(),
  detail: DS.attr(),
  answers: DS.hasMany('answer', { async: true})
});
