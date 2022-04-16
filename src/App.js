import './App.css';
import React, { useState} from "react";

function App() {
    const apiKey = 'f8e109c6bb43bea8bdc7773508600066'
    const [weatherData, setWeatherData] = useState([{}])
    const [city, setCity] = useState("")

    const getWeater = (event) => {
      if(event.key === "Enter"){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`)
        .then(response => response.json()
        ).then(data => {
          setWeatherData(data)
          setCity("")
        })
      }
    }

    return (
        <div className="container">
            <input 
            className="input" 
            placeholder="Enter city..."
            onChange={e => setCity(e.target.value)}
            value={city}
            onKeyPress={getWeater}
            />
            {typeof weatherData.main === 'undefined' ? (
              <div>
                <p>Welcome to weather app! Enter a city name. </p>
              </div>
            ): (
              <div className='weather-data'>
                <p className='city-name'>{ weatherData.name } </p>
                <p className='city-temp'>{ Math.round(weatherData.main.temp)} 🌡️</p>
                <p className='city-hum'>{ Math.round(weatherData.main.humidity)}</p>
                <p className='cloud'>{weatherData.weather[0].main}</p>
              </div>
            )}
        </div>
    );
}

export default App;
