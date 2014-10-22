'use strict';

var JsiMicroblog = Ember.Application.create();

JsiMicroblog.Router.reopen({
  location: 'history'
});

JsiMicroblog.ApplicationAdapter = DS.RESTAdapter.extend({
  namespace: 'api/v1'
});

// expose JsiMicroblog globally
window.JsiMicroblog = JsiMicroblog;

JsiMicroblog.Router.map(function() {
  this.route('signIn');
  this.route('signUp');
});

//extending routes
JsiMicroblog.SignInRoute = Ember.Route.extend({
  actions: {
    signIn: function() {
      console.log('hi');
    }
  }
});

JsiMicroblog.SignUpRoute = Ember.Route.extend({
  actions: {
    signUp: function() {
      console.log('hi');
    }
  }
});