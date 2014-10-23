'use strict';

var server;

describe('app', function() {
  beforeEach(function() {
    App.reset();
  });

  describe('when logged in', function() {
    before(function() {
      server = sinon.fakeServer.create();
      server.autoRespond = true;
    });

    after(function() {
      server.restore();
    });

    beforeEach(function() {
      var container = applicationContainer();
        var session = container.lookup('auth-session:main');
        session.set('content', {
        username: 'fake-username',
        token: 'fake-token'
      });
    });

    it('#profile', function() {
      visit('/profile');
      expect(currentRouteName()).to.eql('profile');
    });

    it('#profile', function() {
      visit('/profile');
      andThen(function() {
        expect(find('input').length).to.eql(2);
      });
    });

    it('#profile', function() {
      var postBody = 'Look at me with my fancy post!';
      var responseJSON = { post: { id: 12, post: postBody } };
      var responseBody = JSON.stringify(responseJSON);

      server.respondWith("POST", "/api/posts",
        [200, { "Content-Type": "application/json" }, responseBody]);

      visit('/profile');
      fillIn('input.post', postBody);
      click('input.submit');
      andThen(function() {
        expect(server.requests.length).to.eql(1)
        var requestJSON = JSON.parse(server.requests[0].requestBody);
        expect(requestJSON).to.eql({
          post: {
            post: postBody
          }
        });
        // good expectations:
        // that you ended up on another page
        // that some content appeared somewhere
        // expect('something').text().to.eql('Look at me with my fancy post!');
      });
    });
  });
});
