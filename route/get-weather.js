'use strict';

const superagent = require('superagent');
const errorHandler = require('../lib/error-handler');


module.exports = function(router) {
  let returnObj = {};
  router.get('/Get-weather', (request, response) => {
    let zipCode= {
      zip: request.query.zip,
      units: 'imperial',
      APPID: `${process.env.WEATHER_KEY}`,
    };
    return superagent.get(`${process.env.WEATHER_URL}`)
      .query(zipCode)
      .then(mainObj => {
        returnObj.weather = mainObj.body;
      })
      .then(() => {
        let time = {
          location: `${returnObj.weather.coord.lat}, ${returnObj.weather.coord.lon}`,
          key: `${process.env.GOOGLE_API}`,
          timestamp: returnObj.weather.dt,
        };
        return superagent.get(`${process.env.GOOGLE_TIME}`)
          .query(time)
          .then(timeRes => {
            returnObj.time = timeRes.body;
          })
          .catch(err => {
            errorHandler(err, response);
          });
      })
      .then(() => {
        let elevation = {
          locations: `${returnObj.weather.coord.lat}, ${returnObj.weather.coord.lon}`,
          key: `${process.env.GOOGLE_API}`,
        };
        return superagent.get(`${process.env.GOOGLE_ELEVATION}`)
          .query(elevation)
          .then(elevationRes => {
            returnObj.elevation = elevationRes.body;
          })
          .catch(err => {
            errorHandler(err, response);
          });
      })
      .then(()=> response.status(200).send(returnObj))
      .catch(err => {
        errorHandler(err, response);
      });
  });
};
