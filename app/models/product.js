import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  image: DS.attr(),
  description: DS.attr(),
  cost: DS.attr(),
  favorites: DS.attr(),
});
