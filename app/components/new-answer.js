import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,

  actions: {
    showAnswerform(){
      this.set('addNewAnswer', true);
    },
    //save answer
    saveAnswer() {
      var params = {
        author: this.get('author'),
        reply: this.get('reply'),
        image: this.get('image'),
        //add question as a joint table
        question: this.get('question')
        //(one to many relationship but don't need to add answer to newquestionForm b/c the question MODEL is already in the answerModel & in question.hbs that's why we add question=model to the saveAnswer in question.hbs)

      };
      //reset addNewAnswer back to false;
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer', params);
      //send it up to route handler (index)
    }
  }
});
