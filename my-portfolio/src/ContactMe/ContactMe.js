import React from 'react';
import { Link } from "react-router-dom";
import './ContactMe.css';

function ContactMe() {

    return (
        <>
            <ul className='body'>
                <li><a href="mailto:raymondlevengood@gmail.com">Gmail</a></li>
                <li>Phone</li>
                <li>GitHub</li>
                <li><a href="https://www.linkedin.com/in/raymond-levengood-04ab64b3">LinkedIn</a></li>
                <li>Twitter</li>
                <li><a href="https://twitter.com/intent/tweet?screen_name=IntegerZeroSF&ref_src=twsrc%5Etfw" class="twitter-mention-button" data-show-count="false">Tweet to @TwitterDev</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></li>
            </ul>
        </>

    )
}

export default ContactMe;