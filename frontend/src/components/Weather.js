import React, { useState, useEffect } from 'react';
import '../stylesheets/Home.css';
import { Link, withRouter, useParams } from 'react-router-dom';

export default withRouter(function Home() {

    let { city } = useParams();

    // useEffect(() => {
    //     const weatherData= async() => {
    //         await fetch(`/users/wishlist?token=${props.token}`)
    //         .then(response => response.json())
    //         .then(json => { 
    //             console.log(`json.wishlist: ${json.wishlist}`);
    //             setWishlist(json.wishlist) });   
    //     }
    //     weatherData()
    // }, [props.token])

    return (
        <div className="flex-container">
            <div className="left-panel">
                <h1 className="forecast">Wooop</h1>
                <h1 className="weatherapp">Weather App</h1>
            </div>
            <div className='right-panel'>

            </div>
        </div>
    )
})