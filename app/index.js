/**
 * Created by Queric on 17/4/19.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom';
import ProductBox from './Components/ProductBox.js';
import ListView from './Components/ListView.js';
import Home from './Components/Home';
ReactDOM.render(
    <BrowserRouter>
        <div>
        <Route path="/home" component={Home} />
        <Route path="/box" component={ProductBox} />
        </div>
    </BrowserRouter>
,document.getElementById("content"))
