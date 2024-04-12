const CityData = require("../models/index");

function createCityObject(cityData) {
  return {
    cityname: cityData[0],
    day1: createDayObject(cityData[1][0], cityData[1][1]),
    day2: createDayObject(cityData[2][0], cityData[2][1]),
    day3: createDayObject(cityData[3][0], cityData[3][1])
  };
}

function createDayObject(dayData1, dayData2) {
  return {
    day: createWeatherObject(dayData1),
    night: createWeatherObject(dayData2)
  };
}

function createWeatherObject(weatherData) {
  return {
    Time: weatherData.forecastTimeUtc,
    Temp: weatherData.airTemperature,
    feelsTemp: weatherData.feelsLikeTemperature,
    windSpeed: weatherData.windSpeed,
    windDirection: weatherData.windDirection,
    cloudCover: weatherData.cloudCover,
    condition: weatherData.conditionCode
  };
}

module.exports = {
  index: async function (req, res, next) {
    try {
      const city1data = await CityData.indexData("vilnius");
      const city2data = await CityData.indexData("kaunas");
      const city3data = await CityData.indexData("klaipeda");

      const city1 = createCityObject(city1data);
      const city2 = createCityObject(city2data);
      const city3 = createCityObject(city3data);
      
      res.render("index", {
        title: "Orai Lietuvoje",
        cities: [city1, city2, city3],
      });
    } catch (err) {
      console.log(err);
      res.status(500).send("Server failure");
    }
  },
  City: async function (req, res, next) {
    const city = req.params.city;
    try {
      cityData = await CityData.cityData(city);

      res.render("City", { title: city, data: cityData });
    } catch (err) {
      console.log(err);
      res.status(500).send("Server failure");
    }
  },
};
