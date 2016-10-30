import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  reply: DS.attr(),
  image: DS.attr(),
  questions: DS.belongTo('question', { async: true }),
});
