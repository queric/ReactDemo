/**
 * Created by Queric on 17/4/19.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import ProductBox from './Components/ProductBox.js';
import ListView from './Components/ListView.js';
import Hello from './Components/Hello';
/*var data="888887777";
function listViewClick() {
    alert('dd')
}
ReactDOM.render(<ProductBox title={data}><span>acadmics</span><span>activist</span></ProductBox>
    , document.getElementById('content'));
ReactDOM.render(
    <ListView onClick={listViewClick}></ListView>
    , document.getElementById('content2'));
//ReactDOM.render(<Hello/>,document.getElementById("content"))
ReactDOM.render(<ListView><a href="dd">6666</a> <a href="dd">hhhhh</a></ListView>,document.getElementById("content"))
*/
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
