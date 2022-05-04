
import React, { useState } from 'react';
import '../stylesheets/Home.css';
import {Link, withRouter} from 'react-router-dom';

export default withRouter(function Home() {

    const [city, setCity] = useState('');

    return (
        <div className="flex-container">
            <div className="title">
                <h1 className="forecast">The Forecast</h1>
                <h1 className="weatherapp">Weather App</h1>
            </div>
            <form className="search">
                <input type="search" placeholder="Search" className='city' onChange={(e) => setCity(e.target.value)}/>
                <Link to={`/weather/${city}`} className='search-icon'>
                    <button type="submit">
                        Search
                    </button>
                </Link>          
            </form>
        </div>
    )
})