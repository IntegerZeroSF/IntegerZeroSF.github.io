import React from 'react';
import { Link } from "react-router-dom";
import Selfie from './selfie.jpg';
import './AboutMe.css';

function AboutMe() {
  return (
      <div className='body'>
          <article>
              <p className="AboutMe"><img className="selfie" src={Selfie} alt="Self Image"></img>My passion for technology began when I was little. I have been using computers since I was little
              and I have always been a gamer at heart. Growing up, my abilities to use computers only got better
              and by time I was a teeneager, I was already the "tech guy" within my family. Entering high school,
              I was certain that my path would be in tech. I ended up going to a trade school my junior year,
              and in 2009, I graduated from both Reynoldsburg High School, and Eastland Career Center. Unfortunantly,
              I was unable too pursue further eductaion at the time due to personal reasons. Post graduation,
              I entered the workforce, working for a retail chain, Miejerm for about a year. I then had a short stint
              with a small startup, Husky Games, that did not really pan anywhere. And up to recently, I have been
              working a grunt job for FedEx Ground.<br></br>
              <br></br>
              My hobbies are diverse and wide. Tech aside, gaming has been one of my defining calling cards all my life, starting
              with the Sega Genesis and Windows 95. Now a days, I play primarily PC and mobile, but really wish to 
              purchase a Switch at some point. Anime and manga are another huge defining trait of mine. I could go on
              and on about my favorite works, and with my background, I have a unique take on both aspects. And being a 
              huge manga nerd, I also similary love reading comics, and books as I see ones catch my eye. The story that
              got me into reading was the "Hobbit," and I have never looked back. My last big primary hobby is that I love
              to travel. Seeing both sides of the US, as well as traveling to the UK during my high school life and Japan
              recently, traveling is something I love to plan and do. It is something that I take large pride in and love
              to talk about and share experiences. I wish to travel to many, many more countries.<br></br>
              <br></br>
              Growing now, I want to pivot into the tech industy properly, and set my first foot into this wild open world.
              Skills that travel with me, that let me go and not only pursue a career I can be passionate about, but also
              allow myself to make new experiences and chase my hobbies. I see myself, driven, excited, passionate, and
              hopefully funny. </p>
            </article>
      </div>
  )
}

  export default AboutMe;
