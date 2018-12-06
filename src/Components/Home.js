import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Hedgehog_logo from './../Images/HedgeHog Logo.png'
import HHE_solar_image from './../Images/hedgehog_solar.jpg'
// import Hedgehog_Res from './Images/hedgehog kitchen.jpg'
// import Hedgehog_Comm from './Images/Hedgehog_Comm.jpg'
import message_icon from './../Images/message_icon_white.svg'
import electrical_background from './../Images/electrical_background.jpg'

export default class  extends Component {
    render() {
        return (
            <div>
                <header className='header'>
                    <img alt='' src={Hedgehog_logo} className='HHE_logo'/>
                    <button className='button'>Schudule an Inspection</button>
                    <div style={{fontSize:'18px', margin:'0px', padding:'5px 5px 5px 30px'}}>
                        We cultivate leadership and excellence in everything we do.
                    </div> 
                </header> 
                <body className='body'>
                        <p style={{textAlign:'center'}}>What would you like to know more about?</p>
                    <div className='choiceboxmain'>
                        <div className='choicebox HHE_solar_image'>
                            <div className='choicebox_title'>Solar</div>
                        </div> 
                        <Link to ='/service' style={{textDecoration:'none'}}>
                            <div className='choicebox HHE_service_image'>
                                <div className='choicebox_title'>Residential</div>
                            </div>
                        </Link>
                        <div className='choicebox HHE_comm_image'>
                            <div className='choicebox_title'>Commercial</div>
                        </div> 
                    </div> 
                    <div className='message_icon_box bounce1'>
                        <img alt='' src={message_icon} className='messageicon'/>
                    </div>
                </body> 
                    <footer>
                        Copyright all rights reserved HedgeHog Electric 2018
                    </footer>
            </div>
        )
    }
}