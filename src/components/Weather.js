import { weatherApi } from "../api/Api";
import { useState, useEffect } from "react";
import Loader from "../loader/Loader";
import Clock from "react-live-clock";
import "bootstrap/dist/css/bootstrap.min.css";
import {CurrentWeather} from "./CurrentWeather";

function Weather() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  let [currentWeather, setWeather] = useState([]);
  // const [cityWeather, setCityWeather] = useState([]);
  const [hourly, setHourly] = useState([]);
  // const [forecast, setForecast] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const currentWeather = weatherApi.byCoord(
        pos.coords.latitude,
        pos.coords.longitude
      )
      const hourlyWeather = weatherApi.getHourly(
        pos.coords.latitude,
        pos.coords.longitude
      );
      setWeather(currentWeather);
      setHourly(hourlyWeather);
      setIsLoaded(true);
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
    console.log('Data Api:', currentWeather)
    return (
      <div className="container">
        <div className="card text-center">
          <div className="card-header">Featured</div>
          <CurrentWeather currentWeather={currentWeather}/>
          <div className="card-footer text-muted">
            <Clock format={"HH:mm:ss"} ticking={true} />
            &nbsp;&nbsp;
            <Clock format={"DD MMMM YYYY"} date={""} />
          </div>
        </div>
      </div>
    );
  }
}

export default Weather;
