<h2 align="center">ZipCode</h2>
<h4 align="center">A CODE CHALLENGE THAT NEEDS YOUR ZIPCODE.</h4>


<p align="center">
  <a href="#getting-started">Getting Started</a> •
  <a href="#route-examples">Route Examples</a> •
  <a href="#tests">Tests</a> •
  <a href="#built-with">Built With</a> •
  <a href="#creators">Creators</a>
</p>

[![Build Status](https://travis-ci.org/Iamheathsmith/weather-by-zip.svg?branch=master)](https://travis-ci.org/Iamheathsmith/weather-by-zip)

<br>

### [Link to live site hosted on Heroku](https://zip-weather-frontend.herokuapp.com/)

## Overview
ZipCode is an Mobile First design application designed to aid users to find the Weather at locations based on Zip Codes. Just simple place your zip code in to the input fields with a optional country code (Example like US for United states) and we will get the weather for you at that location right now along with some other helpful items such as Elevation, Time Zone and a few other bits.  We want the user to see a familiar looking layout to what we all see in weather apps. A quick view with the basic items such as current temperatures along with a High and Low temperature with other items like a description of the weather.

## Getting Started
To use this application as a developer:

* Fork and clone this repository [GTFO](https://github.com/Get-the-flight-out/EJ-backend)
<!-- change this if we change the repo names -->
* NPM init your project
* Add .gitignore and .travis.yml files
* Add the following dependencies


```
"dependencies": {
    "cors": "^2.8.4",
    "dotenv": "^6.0.0",
    "eslint": "^4.17.0",
    "express": "^4.16.2",
    "jest": "^22.1.4",
    "superagent": "^3.8.2"
  },
```
* Add the following .env files

.env
```
PORT=3000
WEATHER_URL='api.openweathermap.org/data/2.5/weather?'
WEATHER_KEY="your own API KEY"
GOOGLE_TIME=https://maps.googleapis.com/maps/api/timezone/json?
GOOGLE_ELEVATION=https://maps.googleapis.com/maps/api/elevation/json?
GOOGLE_API="your own API KEY"
```
* Start your server using nodemon or npm run start:watch

* Add the following .test.env files
```
PORT=4000
WEATHER_URL='api.openweathermap.org/data/2.5/weather?'
WEATHER_KEY="your own API KEY"
GOOGLE_TIME=https://maps.googleapis.com/maps/api/timezone/json?
GOOGLE_ELEVATION=https://maps.googleapis.com/maps/api/elevation/json?
GOOGLE_API="your own API KEY"
```

## Route Examples

Enter this in the Command Line.
```
http GET http://localhost:3000/api/v1/Get-weather zip==98109
```
and you will get this info back

```javascript
{
    "elevation": {
        "results": [
            {
                "elevation": 6.962141513824463,
                "location": {
                    "lat": 47.62,
                    "lng": -122.36
                },
                "resolution": 76.35161590576172
            }
        ],
        "status": "OK"
    },
    "time": {
        "dstOffset": 3600,
        "rawOffset": -28800,
        "status": "OK",
        "timeZoneId": "America/Los_Angeles",
        "timeZoneName": "Pacific Daylight Time"
    },
    "weather": {
        "base": "stations",
        "clouds": {
            "all": 90
        },
        "cod": 200,
        "coord": {
            "lat": 47.62,
            "lon": -122.36
        },
        "dt": 1528480680,
        "id": 420040070,
        "main": {
            "humidity": 59,
            "pressure": 1017,
            "temp": 61.2,
            "temp_max": 64.4,
            "temp_min": 57.2
        },
        "name": "Seattle",
        "sys": {
            "country": "US",
            "id": 2949,
            "message": 0.0046,
            "sunrise": 1528459924,
            "sunset": 1528517140,
            "type": 1
        },
        "visibility": 16093,
        "weather": [
            {
                "description": "light rain",
                "icon": "10d",
                "id": 500,
                "main": "Rain"
            }
        ],
        "wind": {
            "speed": 6.93
        }
    }
}
```


#### GET:
* Retrieve a Weather, Time info and Elevation for a given Zip Code
  * Add appropriate endpoint: Get-weather


## Tests
This project uses Travis-CI for continuous integration. Every Pull Request to the master branch is initiated will launch travis, which in turn runs Jest tests. Pull requests are not merged until all travis-ci tests pass.

#### Test results

```javascript
-------------------|----------|----------|----------|----------|-------------------|
File               |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
-------------------|----------|----------|----------|----------|-------------------|
All files          |    94.12 |      100 |    84.21 |    95.83 |                   |
 lib               |    96.97 |      100 |     87.5 |      100 |                   |
  error-handler.js |      100 |      100 |      100 |      100 |                   |
  server.js        |     96.3 |      100 |    85.71 |      100 |                   |
 route             |    88.89 |      100 |    81.82 |    88.89 |                   |
  get-weather.js   |    88.89 |      100 |    81.82 |    88.89 |             32,46 |
-------------------|----------|----------|----------|----------|-------------------|
Test Suites: 2 passed, 2 total
Tests:       7 passed, 7 total
Snapshots:   0 total
Time:        1.609s, estimated 2s
```


## Built With

* [Javascript](https://www.javascript.com/)
* [npm](https://www.npmjs.com/)
* [Jest](https://www.npmjs.com/package/jest)
* [Cors](https://www.npmjs.com/package/cors)
* [Express](https://www.npmjs.com/package/express)
* [Superagent](https://www.npmjs.com/package/superagent)


## Creators
The Creators of ZipCode.

* [Heath Smith](https://github.com/Iamheathsmith)
