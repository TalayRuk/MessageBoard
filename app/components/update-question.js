import Ember from 'ember';

export default Ember.Component.extend({
  //start w/false so the button will show
  updateQuestionForm: false,
  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
      //when clicked form show
    },
    update(question) {
      var params = {
        topic: this.get('topic'),
        name: this.get('name'),
        title: this.get('title'),
        detail: this.get('detail'),
      };
      //once save button is clicked set back to false;
      this.set('updateQuestionForm', false);

      this.sendAction('update', question, params);
      //also send all the arguments through question-tile.js once get action from update-question.js b/c question-tile.hbs is a parent of update-question.hbs.
      //**FInally this update action is actually move to question.hbs instead of question-tile.hbs
    }
  }
});
