import Ember from 'ember';

export default Ember.Component.extend({
  //start with no form if questionFormShow btn clicked .. show form
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },
    //add save
    saveQuestion1() {
      var params = {
        topic: this.get('topic'),
        name: this.get('name'),
        title: this.get('title'),
        detail: this.get('detail'),
      };
      //after each value is collected, form is hidden again
      this.set('addNewQuestion', false);

      this.sendAction('saveQuestion2', params);
      //saveQuestion1 = the action that exist in new-rental;Job=to collects & save data & set them in a hash of keys w/the same name in firebase
      //saveQuestion2 = a path =action up to route handler (in this case index.hbs)

    }
  }
});
