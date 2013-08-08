var attr = DS.attr;

App.Project = DS.Model.extend({
  title: attr('string'),
  author: attr('string'),
  intro: attr('string'),
  extended: attr('string'),
  publishedAt: attr('date')
});

var showdown = new Showdown.converter();

Ember.Handlebars.registerBoundHelper('markdown', function(input) {
  return new Handlebars.SafeString(showdown.makeHtml(input));
});

Ember.Handlebars.registerBoundHelper('date', function(date) {
  return moment(date).fromNow();
});

// ... additional lines truncated for brevity ...
App.Project.FIXTURES = [
  {
    id: 1,
    title: 'MetalMan Project',
    author: 'Jesse Arnold',
    intro: 'I need a crew to help me complete project MetalMan.',
    extended: 'We\'ve been working on development of a new app for about 2 months and we\'re in need of a css expert to help us finish MetalMan.',
    publishedAt: '2013-07-15'
  },
  {
    id: 2,
    title: 'Skillcult',
    author: 'Michael Enslow',
    intro: 'You cannot understand recursion without first understanding recursion.',
    extended: 'This is the first attempt at creating a rapid prototype engine with ember.js',
    publishedAt: '2013-08-01'
  },
  {
    id: 3,
    title: 'Incubator',
    author: 'Jesse Arnold & Michael Enslow',
    intro: 'Incubate your project.',
    extended: 'Incubator works to incubate your ideas with people who have skills that you need.',
    publishedAt: '2013-08-07'
  }
];