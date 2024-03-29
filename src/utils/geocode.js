const request = require('request');
const geocode = (address, callback) => {
  const url =
    'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
    encodeURIComponent(address) +
    '.json?access_token=pk.eyJ1IjoiZ3ZzcGF2YW4xOTk2IiwiYSI6ImNsMGZqaXNhYjA4b2ozaXA0ajBta21saXAifQ.NQIO5aiuTGAHF2x09f4k-Q&limit=1';

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to location services!', undefined);
    } else if (response.body.features.length === 0) {
      callback('Unable to connect to location services!', undefined);
    } else {
      const latitude = response.body.features[0].center[1];
      const longitude = response.body.features[0].center[0];
      const location = response.body.features[0].place_name;

      callback(undefined, {
        latitude: latitude,
        longitude: longitude,
        location: location,
      });
    }
  });
};

module.exports = geocode;
