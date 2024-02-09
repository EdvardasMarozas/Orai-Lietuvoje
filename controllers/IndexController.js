const CityData = require("../models/index");

module.exports = {
  index: async function (req, res, next) {
    try {
      const city1data = await CityData.indexData("vilnius");
      const city2data = await CityData.indexData("kaunas");
      const city3data = await CityData.indexData("klaipeda");
      const city1 = {
        cityname: city1data[0],
        day1: {
          day: {
            Time: city1data[1][0].forecastTimeUtc,
            Temp: city1data[1][0].airTemperature,
            feelsTemp: city1data[1][0].feelsLikeTemperature,
            windSpeed: city1data[1][0].windSpeed,
            windDirection: city1data[1][0].windDirection,
            cloudCover: city1data[1][0].cloudCover,
            condition: city1data[1][0].conditionCode,
          },
          night: {
            Time: city1data[1][1].forecastTimeUtc,
            Temp: city1data[1][1].airTemperature,
            feelsTemp: city1data[1][1].feelsLikeTemperature,
            windSpeed: city1data[1][1].windSpeed,
            windDirection: city1data[1][1].windDirection,
            cloudCover: city1data[1][1].cloudCover,
            condition: city1data[1][1].conditionCode,
          },
        },
        day2: {
          day: {
            Time: city1data[2][0].forecastTimeUtc,
            Temp: city1data[2][0].airTemperature,
            feelsTemp: city1data[2][0].feelsLikeTemperature,
            windSpeed: city1data[2][0].windSpeed,
            windDirection: city1data[2][0].windDirection,
            cloudCover: city1data[2][0].cloudCover,
            condition: city1data[2][0].conditionCode,
          },
          night: {
            Time: city1data[2][1].forecastTimeUtc,
            Temp: city1data[2][1].airTemperature,
            feelsTemp: city1data[2][1].feelsLikeTemperature,
            windSpeed: city1data[2][1].windSpeed,
            windDirection: city1data[2][1].windDirection,
            cloudCover: city1data[2][1].cloudCover,
            condition: city1data[2][1].conditionCode,
          },
        },
        day3: {
          day: {
            Time: city1data[3][0].forecastTimeUtc,
            Temp: city1data[3][0].airTemperature,
            feelsTemp: city1data[3][0].feelsLikeTemperature,
            windSpeed: city1data[3][0].windSpeed,
            windDirection: city1data[3][0].windDirection,
            cloudCover: city1data[3][0].cloudCover,
            condition: city1data[3][0].conditionCode,
          },
          night: {
            Time: city1data[3][1].forecastTimeUtc,
            Temp: city1data[3][1].airTemperature,
            feelsTemp: city1data[3][1].feelsLikeTemperature,
            windSpeed: city1data[3][1].windSpeed,
            windDirection: city1data[3][1].windDirection,
            cloudCover: city1data[3][1].cloudCover,
            condition: city1data[3][1].conditionCode,
          },
        },
      };
      const city2 = {
        cityname: city2data[0],
        day1: {
          day: {
            Time: city2data[1][0].forecastTimeUtc,
            Temp: city2data[1][0].airTemperature,
            feelsTemp: city2data[1][0].feelsLikeTemperature,
            windSpeed: city2data[1][0].windSpeed,
            windDirection: city2data[1][0].windDirection,
            cloudCover: city2data[1][0].cloudCover,
            condition: city2data[1][0].conditionCode,
          },
          night: {
            Time: city2data[1][1].forecastTimeUtc,
            Temp: city2data[1][1].airTemperature,
            feelsTemp: city2data[1][1].feelsLikeTemperature,
            windSpeed: city2data[1][1].windSpeed,
            windDirection: city2data[1][1].windDirection,
            cloudCover: city2data[1][1].cloudCover,
            condition: city2data[1][1].conditionCode,
          },
        },
        day2: {
          day: {
            Time: city2data[2][0].forecastTimeUtc,
            Temp: city2data[2][0].airTemperature,
            feelsTemp: city2data[2][0].feelsLikeTemperature,
            windSpeed: city2data[2][0].windSpeed,
            windDirection: city2data[2][0].windDirection,
            cloudCover: city2data[2][0].cloudCover,
            condition: city2data[2][0].conditionCode,
          },
          night: {
            Time: city2data[2][1].forecastTimeUtc,
            Temp: city2data[2][1].airTemperature,
            feelsTemp: city2data[2][1].feelsLikeTemperature,
            windSpeed: city2data[2][1].windSpeed,
            windDirection: city2data[2][1].windDirection,
            cloudCover: city2data[2][1].cloudCover,
            condition: city2data[2][1].conditionCode,
          },
        },
        day3: {
          day: {
            Time: city2data[3][0].forecastTimeUtc,
            Temp: city2data[3][0].airTemperature,
            feelsTemp: city2data[3][0].feelsLikeTemperature,
            windSpeed: city2data[3][0].windSpeed,
            windDirection: city2data[3][0].windDirection,
            cloudCover: city2data[3][0].cloudCover,
            condition: city2data[3][0].conditionCode,
          },
          night: {
            Time: city2data[3][1].forecastTimeUtc,
            Temp: city2data[3][1].airTemperature,
            feelsTemp: city2data[3][1].feelsLikeTemperature,
            windSpeed: city2data[3][1].windSpeed,
            windDirection: city2data[3][1].windDirection,
            cloudCover: city2data[3][1].cloudCover,
            condition: city2data[3][1].conditionCode,
          },
        },
      };
      const city3 = {
        cityname: city3data[0],
        day1: {
          day: {
            Time: city3data[1][0].forecastTimeUtc,
            Temp: city3data[1][0].airTemperature,
            feelsTemp: city3data[1][0].feelsLikeTemperature,
            windSpeed: city3data[1][0].windSpeed,
            windDirection: city3data[1][0].windDirection,
            cloudCover: city3data[1][0].cloudCover,
            condition: city3data[1][0].conditionCode,
          },
          night: {
            Time: city3data[1][1].forecastTimeUtc,
            Temp: city3data[1][1].airTemperature,
            feelsTemp: city3data[1][1].feelsLikeTemperature,
            windSpeed: city3data[1][1].windSpeed,
            windDirection: city3data[1][1].windDirection,
            cloudCover: city3data[1][1].cloudCover,
            condition: city3data[1][1].conditionCode,
          },
        },
        day2: {
          day: {
            Time: city3data[2][0].forecastTimeUtc,
            Temp: city3data[2][0].airTemperature,
            feelsTemp: city3data[2][0].feelsLikeTemperature,
            windSpeed: city3data[2][0].windSpeed,
            windDirection: city3data[2][0].windDirection,
            cloudCover: city3data[2][0].cloudCover,
            condition: city3data[2][0].conditionCode,
          },
          night: {
            Time: city3data[2][1].forecastTimeUtc,
            Temp: city3data[2][1].airTemperature,
            feelsTemp: city3data[2][1].feelsLikeTemperature,
            windSpeed: city3data[2][1].windSpeed,
            windDirection: city3data[2][1].windDirection,
            cloudCover: city3data[2][1].cloudCover,
            condition: city3data[2][1].conditionCode,
          },
        },
        day3: {
          day: {
            Time: city3data[3][0].forecastTimeUtc,
            Temp: city3data[3][0].airTemperature,
            feelsTemp: city3data[3][0].feelsLikeTemperature,
            windSpeed: city3data[3][0].windSpeed,
            windDirection: city3data[3][0].windDirection,
            cloudCover: city3data[3][0].cloudCover,
            condition: city3data[3][0].conditionCode,
          },
          night: {
            Time: city3data[3][1].forecastTimeUtc,
            Temp: city3data[3][1].airTemperature,
            feelsTemp: city3data[3][1].feelsLikeTemperature,
            windSpeed: city3data[3][1].windSpeed,
            windDirection: city3data[3][1].windDirection,
            cloudCover: city3data[3][1].cloudCover,
            condition: city3data[3][1].conditionCode,
          },
        },
      };
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
