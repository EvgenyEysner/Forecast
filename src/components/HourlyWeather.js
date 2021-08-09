import React from "react";
import { Accordion } from "react-bootstrap";

export const HourlyWeather = (props) => {
  // прогноз 48 часов
  let hourlyData = props?.data?.hourly?.map((item) => {
    const options = { weekday: "short", month: "short", day: "numeric" };
    let hour = new Date(item.dt * 1000).getHours();
    let day = new Date(item.dt * 1000).toLocaleDateString("ru-Ru", options);
    let temp = Math.round(item.temp);
    let img = (
      <img
        src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
        alt={item.weather[0].description}
      />
    );
    return {
      hour,
      day,
      temp: temp,
      img: img,
    };
  });

  let forecastData = props?.forecast?.daily?.map((item) => {
    const options = { weekday: "short", month: "short", day: "numeric" };
    let day = new Date(item.dt * 1000).toLocaleDateString("ru-Ru", options);
    let temp_min = Math.round(item.temp.min);
    let temp_max = Math.round(item.temp.max);
    let img = (
      <img
        src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
        alt={item.weather[0].description}
      />
    );
    return {
      day,
      temp_min: temp_min,
      temp_max: temp_max,
      img: img,
    };
  });

  console.log("Array", forecastData);

  return (
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Погода на следующие 48 часов</Accordion.Header>
          <Accordion.Body>
            {hourlyData?.map((item) => (
              <ul className="list-group-flush d-inline-flex flex-wrap">
                <li className="list-group-item" key={item.hour.toString()}>
                  {item.day}&nbsp;&nbsp;{item.hour}:00&nbsp;&nbsp;{item.temp}
                  <sup>&deg;C</sup>&nbsp;&nbsp;<span>{item.img}</span>
                </li>
              </ul>
            ))}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>прогноз на неделю</Accordion.Header>
          <Accordion.Body>
          {forecastData?.map((item) => (
              <ul className="list-group-flush">
                <li className="list-group-item" key={item.day.toString()}>
                  {item.day}&nbsp;&nbsp;{item.temp_max}<sup>&deg;C</sup> / {item.temp_min}<sup>&deg;C</sup>
                  <sup>&deg;C</sup>&nbsp;&nbsp;<span>{item.img}</span>
                </li>
              </ul>
            ))}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
  );
};
