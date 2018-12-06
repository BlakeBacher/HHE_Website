import React, { Component } from 'react';


import Nav from './Nav'


// import Hedgehog_logo from './../Images/HedgeHog Logo.png'
import message_icon from './../Images/message_icon_white.svg'
import facebook_icon from './../Images/facebook_icon.svg'
import twitter_icon from './../Images/twitter_icon.svg'
import youtube_icon from './../Images/youtube_icon.svg'
import Hedgehog_logo from './../Images/HedgeHog Logo black letter.png'




export default class  extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <body className='body HHE_background'>

                </body> 
                    <div className='message_icon_box bounce1'>
                        <img alt='' src={message_icon} className='messageicon'/>
                    </div>
                    <footer>
                        <img alt='' src={Hedgehog_logo} className='HHE_logo'/>
                        <br/>
                        <img alt='' src={facebook_icon} className='socail_icon'/>
                        <img alt='' src={youtube_icon} className='socail_icon'/>
                        <img alt='' src={twitter_icon} className='socail_icon'/>
                        <p>© HedgeHog Electric 2018 | Terms & Conditions</p>
                    </footer>
            </div>
        )
    }
}