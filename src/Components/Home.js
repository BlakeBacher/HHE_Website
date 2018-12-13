import React, { Component } from 'react';


import Nav from './Nav/Nav'


// import Hedgehog_logo from './../Images/HedgeHog Logo.png'
import message_icon from './../Images/message_icon_white.svg'
import facebook_icon from './../Images/facebook_icon.svg'
import twitter_icon from './../Images/twitter_icon.svg'
import instagram_icon from './../Images/instagram_icon.svg'
import Hedgehog_logo from './../Images/HedgeHog Logo black letter.png'
import Christmas_Lights_Picture from './../Images/christmas_lights_picture.jpg'




export default class  extends Component {
    constructor(){
        super()

        this.state={


        }
        // this.trackScroll=this.trackScroll.bind(this)
    }


    
    render() {
        return (
            <div>
                <Nav/>
                <body className='body' onScroll={()=>{this.trackScroll()}}>
                    {/* <div id='HHE_picture'> */}
                        <img alt='' src={Christmas_Lights_Picture} id='HHE_picture'/>
                    {/* </div>  */}
                    <div id='HHE_news'>
                        <p>HELLOOOOOOO</p>
                    </div>
                </body> 
                    <div className='message_icon_box bounce1'>
                        <img alt='' src={message_icon} className='messageicon'/>
                    </div>
                    <footer>
                        <img alt='' src={Hedgehog_logo} style={{height:'100px'}}/>
                        <br/>
                        <img alt='' src={facebook_icon} className='socail_icon' style={{height: '60px'}}/>
                        <img alt='' src={instagram_icon} className='socail_icon' style={{height: '54px', padding:'2px'}}/>
                        <img alt='' src={twitter_icon} className='socail_icon' style={{height: '60px'}}/>
                        <p>© HedgeHog Electric 2018 | Terms & Conditions</p>
                    </footer>
            </div>
        )
    }
}