import { useState } from 'react';
import './App.css';
import Search from './Components/Search/Search';
import Weather from './Components/Weather/Weather';
import { WEATHER_API_KEY, WEATHER_API_URL } from './Api/api';
import Forecast from './Components/Forecast/Forecast';

function App() {
  const [weather , setWeather] = useState(null);
  const [forecast , setForecast] = useState(null)

  const onSearchChange =(searchData)=>{
    const [lat , lon] = searchData.value.split(' ')
    console.log(lat , lon);

    const weatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);


    Promise.all([weatherFetch , forecastFetch])
    .then( async(response) => {
      const weatherRes = await response[0].json();
      const forecastRes =await response[1].json();

      setWeather({city : searchData.label ,...weatherRes})
      setForecast({city : searchData.label , ...forecastRes})

      console.log(weather);
      console.log(forecast);
    })
    .catch(err=>console.log(err))

  }
  return (
    <div className="container">
       <Search onSearchChange={onSearchChange} />
       {weather && <Weather data={weather} />}
       {forecast && <Forecast data={forecast} />}
    </div>
    
  );
}

export default App;
