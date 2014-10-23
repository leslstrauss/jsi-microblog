'use strict';

describe('app', function() {
  beforeEach(function() {
    App.reset();
  });

  it('has one passing test', function() {});
  it('will have more tests');

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
  });
});
