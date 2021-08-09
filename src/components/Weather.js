import { weatherApi } from "../api/Api";
import { useState, useEffect } from "react";
import Loader from "../loader/Loader";
import Clock from "react-live-clock";
import "bootstrap/dist/css/bootstrap.min.css";
import {CurrentWeather} from "./CurrentWeather";
import {HourlyWeather} from "./HourlyWeather"
import {Form} from "./Form"
// import {Forecast} from "./Forecast"

function Weather() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentWeather, setWeather] = useState({});
  const [hourly, setHourly] = useState({});
  const [forecast, setForecast] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      weatherApi.byCoord(
        pos.coords.latitude,
        pos.coords.longitude
      ).then(data => setWeather(data))
      weatherApi.getHourly(
           pos.coords.latitude,
          pos.coords.longitude
         ).then(data => setHourly(data))
      weatherApi.getForecast(
        pos.coords.latitude,
       pos.coords.longitude
      ).then(data => setForecast(data))
   setIsLoaded(true)
    });
  }, []);
  
  if (error) {
    setError(error);
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <div>
        <Loader />
      </div>
    );
  } else {

    return (
        <div className="card text-center">
          <div className="card-header">
          <Form />
          </div>
          <CurrentWeather data={currentWeather}/>
          <div className="text">
          <HourlyWeather data={hourly} forecast={forecast}/>
          </div>
          <div className="card-footer text-muted">
            <Clock format={"HH:mm:ss"} ticking={true} />
            &nbsp;&nbsp;
            <Clock format={"DD MMMM YYYY"} date={""} />
          </div>
        </div>
    );
  }
}

export default Weather;