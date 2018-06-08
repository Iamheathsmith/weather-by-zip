'use strict';

const superagent = require('superagent');
const server = require('../lib/server');
require('jest');

describe('GET api/v1/Get-weather', function() {
  beforeAll(server.start);
  afterAll(server.stop);

  describe('Valid request', () => {
    let testData;
    beforeAll(() => {
      let zipCode= {
        zip: '98109',
      };
      return superagent.get(`:${process.env.PORT}/api/v1/Get-weather`)
        .query(zipCode)
        .then(res => {
          testData = res;
        });
    });

    it('should return 200 status code', () => {
      expect(testData.status).toEqual(200);
    });
    it('should return a object with 3 properties', () => {
      expect(testData.body.time).toBeInstanceOf(Object);
      expect(testData.body.weather).toBeInstanceOf(Object);
      expect(testData.body.elevation).toBeInstanceOf(Object);
    });
    it('3 properties be called "weather","time" and "elvation" ', () => {
      expect(testData.body).toHaveProperty('time');
      expect(testData.body).toHaveProperty('weather');
      expect(testData.body).toHaveProperty('elevation');
    });

  });


  describe('Invalid request', () => {
    it('should return 404 status code if no zip code is found', () => {
      let zipCode= {
        zip: '99999',
      };
      return superagent.get(`:${process.env.PORT}/api/v1/Get-weather`)
        .query(zipCode)
        .catch(err => {
          expect(err.status).toEqual(404);
        });
    });
    it('should return 500 status code if nothing was entered', () => {
      let zipCode= {
        zip: '',
      };
      return superagent.get(`:${process.env.PORT}/api/v1/Get-weather`)
        .query(zipCode)
        .catch(err => {
          expect(err.status).toEqual(500);
        });
    });
  });
});
