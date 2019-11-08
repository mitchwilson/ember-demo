import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    addTask: function() {
      var title = this.get('title');
      var description = this.get('description');
      var date = this.get('date');
      
    }
  }
});
