Router.configure({ layoutTemplate: 'layout'});
//Router.route('/bCard', {name: 'bCard'});
Router.route('/new', {name: "newForm"});
Router.route('/:name', {name: "bCard"});