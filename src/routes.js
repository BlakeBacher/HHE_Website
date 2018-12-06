import React from 'react';
import {Switch, Route} from 'react-router-dom'
// import axios from 'axios'

import Home from './Components/Home'
import Service from "./Components/Service";

export default(
    <Switch>
        <Route exact path='/' component={Home}/>
		<Route path='/service' component={Service}/>
    </Switch>
)