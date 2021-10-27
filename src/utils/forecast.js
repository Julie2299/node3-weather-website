const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=fd94ac280cc14a672cbe474c5f95a093&query=" +
    latitude +
    "," +
    longitude +
    "&units=f";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          " is observed as of " +
          body.current.observation_time +
          ". It is currently " +
          body.current.temperature +
          " degres Farenheit out. There is a " +
          body.current.precip +
          "% chance of rain. It feels like " +
          body.current.feelslike +
          " degree Farenheit out. The humidity is " +
          body.current.humidity +
          ". The wind speed is " +
          body.current.wind_speed +
          ", and the pressure is " +
          body.current.pressure +
          "."
      );
    }
  });
};

module.exports = forecast;
