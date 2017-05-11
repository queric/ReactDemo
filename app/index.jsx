/**
 * Created by Queric on 17/4/19.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import ProductBox from './Components/ProductBox.jsx';
import ListView from './Components/ListView.jsx';
var data="888887777";
ReactDOM.render(<ProductBox title={data}><span>acadmics</span><span>activist</span></ProductBox>
    , document.getElementById('content'));
ReactDOM.render(
    <ListView></ListView>
    , document.getElementById('content2'));