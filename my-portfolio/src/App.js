import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import './App.css';
import AboutMe from './AboutMe/AboutMe.js';
import Home from './Home/Home.js';
import Projects from './Projects/Projects.js';
import ContactMe  from './ContactMe/ContactMe.js';

//want scroll functionality maybe

function App() {
  return (
    <div className='flexContainer'>
      <Router>
        <header className='header'>
          <h1>Hello World. Welcome to Ray's new and improved portfolio.</h1>
            <nav className='navigation'>
               <Link to="/Home"> Home </Link>||  
               <Link to="/AboutMe"> About Me </Link>||
               <Link to="/Projects"> Projects </Link>||
               <Link to="/ContactMe"> Contact Me </Link> 
            </nav>
        </header>

        <div className='body'>
          <Switch>
            {/* <Home /> */}
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/aboutMe">
              <AboutMe />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contactMe">
              <ContactMe />
            </Route>
          </Switch>
        </div>

        <footer className='footer'>
          <p>Copyright Info. Quick Links. Email/Twitter Button/Etc</p>
        </footer>
      </Router>
    </div>
  );
}

export default App;
