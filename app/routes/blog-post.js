import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveComment(commentContent) {
      let blogPost = this.controller.get('model');
      this.store.createRecord('comment', {
        blogPost: blogPost,
        content: commentContent
      }).save();
    }
  }
});
