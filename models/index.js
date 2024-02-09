const { json } = require("stream/consumers");

module.exports = {
  indexData: async function (city) {
    await fetch(
      "https://api.meteo.lt/v1/places/" + city + "/forecasts/long-term"
    )
      .then((response) => response.json())
      .then((data) => (cityname = data.place.name))
      .catch((error) => console.error("Error:", error));

    await fetch(
      "https://api.meteo.lt/v1/places/" + city + "/forecasts/long-term"
    )
      .then((response) => response.json())
      .then(
        (data) =>
          (day1 = [data.forecastTimestamps[4], data.forecastTimestamps[16]])
      )
      .catch((error) => console.error("Error:", error));

    await fetch(
      "https://api.meteo.lt/v1/places/" + city + "/forecasts/long-term"
    )
      .then((response) => response.json())
      .then(
        (data) =>
          (day2 = [data.forecastTimestamps[28], data.forecastTimestamps[40]])
      )
      .catch((error) => console.error("Error:", error));

    await fetch(
      "https://api.meteo.lt/v1/places/" + city + "/forecasts/long-term"
    )
      .then((response) => response.json())
      .then(
        (data) =>
          (day3 = [data.forecastTimestamps[52], data.forecastTimestamps[64]])
      )
      .catch((error) => console.error("Error:", error));

    return await [cityname, day1, day2, day3];
  },
  cityData: async function (city) {
    await fetch(
      "https://api.meteo.lt/v1/places/" + city + "/forecasts/long-term"
    )
      .then((response) => response.json())
      .then((data) => (weather = data.forecastTimestamps))
      .catch((error) => console.error("Error:", error));
    return weather;
  },
};
