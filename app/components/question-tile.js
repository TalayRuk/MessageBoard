import Ember from 'ember';

export default Ember.Component.extend({
  isQuestionShowing: false,

  actions: {
    //button clicked
    questionShow: function() {
      this.set('isQuestionShowing', true);
    },
    //hide the detailShow
    questionHide: function() {
      this.set('isQuestionShowing', false);
    }
  }
});
