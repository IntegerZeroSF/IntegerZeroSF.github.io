import React from 'react';
import { Link } from "react-router-dom";
import './Projects.css';

function Projects() {

    return (
        <>
            <div>JavaScript Tic-Tac-Toe</div>
                <p>A basic tic-tac-toe game built using JS and HTML5</p>
            <div>Basic Triva Game</div>
                <p>A trivia game featuring data pulled from the Trivia API. Built using JS and HTML5</p>
            <div>Audobon Website</div>
                <p>A Audobon Website mockup built using React</p>
            <div>Film Website</div>
                <p>A website using data from the TVDB API. Built using React</p>

        </>

    )
}

export default Projects;