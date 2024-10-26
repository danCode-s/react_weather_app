import React from "react";

export default function WeatherCard(props){
    return (
        <div className="container">
            <div className="card">
                <h1 className="city_name">{props.city}, {props.country}</h1>
                <p className="current_temp">{props.current_temp}C</p>
                <img src={props.imgURL} alt="weatherIMg" className="weather_img"/>
                <p className="weather_name">{props.weather_name}</p>
                <div className="sm_details">
                    <div className="small_data">
                        <div className="wind small"><p>Wind speed</p>{props.wind}Kph</div>
                        <div className="real_feel small"><p>Real Feel</p>{props.real_feel}C</div>
                        <div className="pressure small"><p>Pressure</p>{props.pressure} Mb</div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}