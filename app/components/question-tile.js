import Ember from 'ember';

export default Ember.Component.extend({
  favoriteQuestions: Ember.inject.service(),
  isQuestionShowing: false,

  actions: {
    //add favorite question to index
    addFavoriteQ(question) {
      this.get('favoriteQuestions').add(question);
    //add property is undefine!
    },
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
