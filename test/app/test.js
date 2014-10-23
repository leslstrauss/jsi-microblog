'use strict';

describe('app', function() {
  beforeEach(function() {
    App.reset();
  });

  describe('when logged in', function() {
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
      visit('/profile')
      andThen(function() {
        expect(find('input').length).to.eql(2);
      });
    });
  });
});
