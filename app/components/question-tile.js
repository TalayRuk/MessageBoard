import Ember from 'ember';

export default Ember.Component.extend({
  isQuestionShowing: false,

  actions: {
    //button clicked
    detailShow: function() {
      this.set('isDetailShow', true);
    },
    //hide the detailShow
    detailHide: function() {
      this.set('isDetailShow', false);
    }
  }
});
