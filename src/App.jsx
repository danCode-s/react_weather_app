import React, {useState} from "react";
import axios from "axios";
import Header from "./Header";
import SearchBar from "./SearchBar";
import WeatherCard from "./WeatherCard";
import Footer from "./Footer";

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  
  const [isClicked, setClick] = useState(false);
  
  const [weatherData, setData] = useState({});
  async function showWeather(click, inputText){
    try {
      const result = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${inputText}`)
      setData(result.data);
      setClick(click);
      
    } catch (error) {
      alert(error)
      
    }
    

  }
  
  console.log(weatherData)
  return (
    <div className="main">
      <Header />
      <div className="body">
        <h1 className="main_title">Weather App</h1>
        <SearchBar onAdd={showWeather}/>
        {/* <WeatherCard /> */}
        {isClicked && <WeatherCard 
          city={weatherData.location.name}
          country={weatherData.location.country}
          current_temp={weatherData.current.temp_c}
          imgURL={weatherData.current.condition.icon}
          weather_name={weatherData.current.condition.text}
          wind={weatherData.current.wind_kph}
          real_feel={weatherData.current.feelslike_c}
          pressure={weatherData.current.pressure_mb}

        />}


      <Footer/>

      </div>

    </div>
    
  );
}

export default App;
