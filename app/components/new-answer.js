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
        image: this.get('image')
      };
      //reset addNewAnswer back to false;
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer', params);
      //send it up to route handler (index)
    }
  }
});
