import React, { Component } from 'react';



import HHE_LOGO_WHITE from './../Images/HHE_LOGO_WHITE.png'

export default class Nav extends Component {
    render() {
        return (
            <header className='Nav'>
                <img alt='' src={HHE_LOGO_WHITE} className='HHE_logo'/>
                <div id='navbuttons'>
                    <button className='navbutton'>Home</button>
                    <button className='navbutton'>Services</button>
                    <button className='navbutton'>About</button>
                    <button className='navbutton'>Questions</button>
                    <button className='navbutton'>(866) 471-9471</button>
                    <button id='schedule_button'>Schudule an Inspection</button>
                </div>
                <p>We cultivate leadership and excellence in everything we do.</p> 
            </header>
        )
    }
}