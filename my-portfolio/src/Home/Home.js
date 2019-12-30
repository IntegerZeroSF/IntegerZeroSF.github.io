import React from 'react';
import { Link } from "react-router-dom";
import bg1 from './bg1.jpg'
import './Home.css';

function Home() {
    return (
        <div>
            <img className="homePageImage" src={bg1} alt="test Image"></img>
        </div>
    )
}

export default Home;