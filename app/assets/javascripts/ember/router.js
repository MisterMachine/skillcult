App.Router.map(function() {
	this.resource('about');
  this.resource('projects', function() {
    this.resource('project', { path: ':project_id' });
  });
});

App.ProjectsRoute = Ember.Route.extend({
  model: function () {
    return App.Project.find();
  }
});