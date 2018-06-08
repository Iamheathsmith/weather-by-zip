'use strict';

const server = require('../lib/server');
require('jest');

describe('server unit test', () => {
  beforeEach(server.start);
  afterEach(server.stop);

  describe('server unit test on', () => {
    it('should return a promise rejection if the server is already running when started', () => {
      server.start()
        .catch(err => {
          expect(err.message).toMatch(/Server Error/i);
        });
    });
  });

  describe('server unit test off', () => {
    it('should return a promise rejection if the server is already turn off.', () => {
      server.stop()
        .then(() => {
          expect(server.isOn).toBeFalsy();
        })
        .then(() => {
          server.stop()
            .catch(err => {
              expect(err.message).toMatch(/Server Error/i);
            });
        });
    });
  });

});
