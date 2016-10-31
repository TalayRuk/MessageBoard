import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(answer) {
      if (confirm('Are you sure you want to delte this answer?')) {
        this.sendAction('deleteAnswer', answer);
      }
    }
  }
});
//next need to add deleteAnswer action in question-detail.hbs to pass it up to the route handler (in this case routes/question.js)
