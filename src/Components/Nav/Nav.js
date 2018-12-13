import React, { Component } from 'react';

import './Nav.css'

import HHE_LOGO_WHITE from './../../Images/HHE_LOGO_WHITE.png'
import SMALL_HHE_LOGO_WHITE from './../../Images/SMALL_HHE_LOGO_WHITE 2.png'




export default class Nav extends Component {
    constructor(){
        super()

        this.state={
            active: false
        }
    }

    scrollFunction() {
        if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            document.getElementById('nav_leftside_id').classList.add('nav_leftside_active')
            document.getElementById('nav_leftside_id').classList.remove('nav_leftside')
            document.getElementById('nav_rightside_id').classList.add('nav_rightside_active')
            document.getElementById('nav_rightside_id').classList.remove('nav_rightside')
            this.setState({active: true})
        } 
        else {
            document.getElementById("nav_rightside_id").classList = 'nav_rightside';
            document.getElementById("nav_leftside_id").classList = 'nav_leftside';
            this.setState({active: false})
        }
    }

    render() {
        return (
            <header className='Nav'>
                <div id='nav_leftside_id' className='nav_leftside'>
                    {this.state.active ?
                        <img alt='' src={SMALL_HHE_LOGO_WHITE} style={{height:'30px'}}/>
                    :
                        <div>
                            <img alt='' src={HHE_LOGO_WHITE} style={{height:'70px'}}/>
                            <p style={{fontStyle:'italic',fontSize:'15px'}}>We cultivate leadership and excellence in everything we do.</p> 
                        </div> 
                    }
                </div>
                {this.state.active ?
                    <div id='nav_rightside_id' className='nav_rightside'>
                        <button className='nav_button_active'>Home</button>
                        <button className='nav_button_active'>Services</button>
                        <button className='nav_button_active'>About</button>
                        <button className='nav_button_active'>Questions</button>
                        <button className='nav_button_active'>(866) 471-9471</button>
                        <button className='nav_schudule_button_active'>Schudule an Inspection</button>
                    </div> 
                
                :
                    <div id='nav_rightside_id' className='nav_rightside'>
                        <button className='nav_button'>Home</button>
                        <button className='nav_button'>Services</button>
                        <button className='nav_button'>About</button>
                        <button className='nav_button'>Questions</button>
                        <button className='nav_button'>(866) 471-9471</button>
                        <button className='nav_schudule_button'>Schudule an Inspection</button>
                    </div> 
                }
                {window.onscroll = () => {this.scrollFunction()}}
            </header>
        )
    }
}