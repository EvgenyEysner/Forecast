import React from "react";

export const CurrentWeather = (props) => {

  let icon = props?.data?.weather?.map((item) => item.icon);
  return (
    <div className="card-body">
      <h5 className="card-title">
        {props.data.name}
        <span></span>
      </h5>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
        alt={props?.data?.weather?.map((item) => item.description)}
      />
      <h4 className="card-text">
        {Math.round(props.data.main?.temp)}
        <sup>&deg;C</sup> /&nbsp;
        {Math.round(props.data.main?.temp_max)}
        <sup>&deg;C</sup>
      </h4>
      <h5 className="card-title text-start">
        Описание: {props?.data?.weather?.map((item) => item.description)}
      </h5>
      <h5 className="card-title text-start">
        Ощущается как: {Math.round(props.data.main?.feels_like)}
        <sup>&deg;C</sup>
      </h5>
      <h5 className="card-title text-start">
        Давление: {Math.round(props.data.main?.pressure)}
      </h5>
      <h5 className="card-title text-start">
        Влажность: {Math.round(props.data.main?.humidity)}&#37;
      </h5>
      <h5 className="card-title text-start">
        Ветер: {Math.round(props.data.wind?.speed)}м/с
      </h5>

    </div>
  );
};
