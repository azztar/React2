import React, { useState } from 'react'

const WeatherCard = ({ weather, temp }) => {
    const [celcius, setCelcius] = useState(true)
    const handleClick = () => setCelcius(!celcius)

    return (
        <article className='card'>
            <header className='card__header'>
                <h1 className='card__tittle'>Weather App</h1>
                <h2 className='card__subtitle'>{weather?.name}, {weather?.sys.country}</h2>
            </header>
            <section className='card__icon-container'>
                <img className='card__icon' src={weather && `http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
                
            </section>
            <section className='card__info'>
                <h3 className='card_deescription'>"{weather?.weather[0].description}"</h3>
                <ul className='card__list'>
                    <li className='card__item'>
                        <span className='card__span'>Wind Speed</span>  {weather?.wind.speed} M/s
                    </li>
                    <li className='card__item'>
                        <span className='card__span'>Clouds</span>  {weather?.clouds.all} %
                    </li>
                    <li className='card__item'>
                        <span className='card__span'>Pressure</span> {weather?.main.pressure} hPa
                    </li>
                </ul>
            </section>
            <h3 className='card__temp'> {celcius ?
                    `${temp?.celcius} ºC`
                    : `${temp?.farenheit} ºF`}</h3>
            <footer className='card__footer'>
                <button onClick={handleClick} className='card__btn'>Change ºF / ºC</button>
            </footer>
        </article>
    )
}

export default WeatherCard