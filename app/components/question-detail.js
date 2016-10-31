import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('deleteQuestion', question);
      //we'll need to pass the action through the template in order to reach route handler by declaring deleteQuestion!  
      }
    },
    //also deleteAnswer here
    deleteAnswer(answer) {
      this.sendAction('deleteAnswer', answer);
      //next: add code for deleteAnswer in question.hbs at question-detail so that when the question is deleted, the answer will be deleted as well.
    }
  }
});
