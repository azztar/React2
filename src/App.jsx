import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css'
import WeatherCard from './components/Card';
import Loading from './components/Loading';

function App() {


  const [coords, setCoords] = useState()
  const [weather, setweather] = useState()
  const [temp, setTemp] = useState()

  const success = pos => {
    setCoords({
      lat: pos.coords.latitude,
      lon: pos.coords.longitude
    })
  }



  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  useEffect(() => {
    if (coords) {
      const apiKey = '6073ed1a27b42ba63f63738cfceae1ad'
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${apiKey}`
      axios.get(URL)
        .then(res => {
          setweather(res.data)
          console.log(res.data)
          const celcius = (res.data.main.temp - 273.15).toFixed(1)
          const farenheit = (celcius * 9 / 5 + 32).toFixed(1)
          setTemp({ celcius, farenheit })
        })
        .catch(err => console.log(err))

    }
  }, [coords])


  return (
    <div className="App">
      {
        weather ?
          <WeatherCard
            weather={weather}
            temp={temp}
          />
          :
          <Loading />
      }
    </div>
  )
}

export default App
