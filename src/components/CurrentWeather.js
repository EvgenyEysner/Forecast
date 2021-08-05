import React from "react";

export const CurrentWeather = (props) => {

  return (
    <div className="card-body">
      <h5 className="card-title">Это название города{console.log('Data props:', props) }</h5>
      <p className="card-text">
        With supporting text below as a natural lead-in to additional content.
      </p>
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
    </div>
  );
}

