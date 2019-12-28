import React from 'react';
import './App.css';
import AboutMe from './AboutMe.js'

//want scroll functionality

function App() {
  return (
    <div className='flexContainer'>
      <header className='header'>
        <h1>Hello World. Welcome to Ray's new and improved portfolio.</h1>
        <nav className='navigation'>Navigation links go here</nav>
      </header>
      <div className='carosoule'>
       <p>carosoule stuff here</p>
      </div>
      <body>
        <AboutMe className='aboutMe' />
      </body>
      <footer className='footer'>
        <p>Copyright Info. Quick Links. Email/Twitter Button/Etc</p>
      </footer>
    </div>
  );
}

export default App;
