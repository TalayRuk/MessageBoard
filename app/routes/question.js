import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    //Dynamic segment(id)
    return this.store.findRecord('question', params.question_id);
    //go up & fetch the specific question using Id
    //findRecord using 2 arguments 1)question 2) specific id using (params)
    //once the specific question is found, the route will render the question.hbs 
  },
  actions: {
    update(question, params) {
      debugger;
      //add update()code using keys to find question that need to be update
      Object.keys(params).forEach(function(key) {
        if(params[key] !== underfined) {
          question.set(key, params[key]);
          //take the question & set the property that matches the current key to the value of the current key,
          //To ensure that the property that the user has updated will be changed, but the properties that user hasn't update will stay the same. That's why we using undefined. saying if it's undefined leave it be.
        }
      });
      //save the update to database
      question.save();
      //then send it to index
      this.transitionTo('index');
    },

    deleteQuestion(question) {
      //add delete the child answers of a question before delete question. Define all the question's answer, and delete them all
      var answer_deletions = question.get('answers').map(fnction(answer) {
        return answer.destroyRecord();
      });
      Ember.RSVP.all(answer_deletions).then(function() {
        return question.destroyRecord();
      //this is saying to delete all the answers. Once all r deleted, Then the database can delete the question!
      //Ember.RSVP.all = 'pkges' of multiple promises into one. The one promis is only resolved when each of its promises are fulfilled!
      });
      this.transitionTo('index');
    },
  }
});
