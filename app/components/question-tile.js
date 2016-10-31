import Ember from 'ember';

export default Ember.Component.extend({
  isDetailShowing: false,

  actions: {
    //button clicked
    detailShow: function() {
      this.set('isDetailShowing', true);
    },
    //hide the detailShow
    detailHide: function() {
      this.set('isDetailShowing', false);
    }
  }
});
