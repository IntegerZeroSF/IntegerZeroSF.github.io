import React from 'react';
import { Link } from "react-router-dom";
import './ContactMe.css';

function ContactMe() {

    return (
        <>
            <ul className='body'>
                <p className="explain" >Down below are various ways to contact me. I am generally availale Monday thru Friday, 8 AM to 5 PM EST.</p>
                <li><a className="contactButton" href="mailto:raymondlevengood@gmail.com">Gmail</a></li>
                <li><a className="contactButton">Phone</a></li>
                <li><a className="contactButton" href="https://www.linkedin.com/in/raymond-levengood-04ab64b3">LinkedIn</a></li>
                <li><a href="https://twitter.com/intent/tweet?screen_name=IntegerZeroSF&ref_src=twsrc%5Etfw" className="contactButton" data-show-count="false">Twitter</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></li>
            </ul>
        </>

    )
}

export default ContactMe;