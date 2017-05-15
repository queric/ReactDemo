import React from 'react';
import PropTypes from 'prop-types';
import {Button, DatePicker } from 'antd';

class ProductBox extends React.Component{
    constructor(props) {
        super(props);
        //this.handleClick = this.handleClick.bind(this);
        this.state = {
            heihei:true
        }
    }
    onChange(date, dateString) {
        console.log(date, dateString);
    }
    handleClick(){
        //alert(this.state.heihei);
        this.setState({heihei:!this.state.heihei});
        //alert(this.refs.myid.value);

    }
    render() {
        var text = this.state.heihei ? 'like' : 'haven\'t liked';
        return (
            <div>{this.props.title}
2222
                <input type="text" ref="myid" />
                <ol>
                    {
                        React.Children.map(this.props.children, function (child) {
                            return <li>{child}</li>
                        })
                    }
                </ol>{text}
                <div>
                    <DatePicker onChange={this.onChange.bind(this)} />
                    <br />
                </div>
                <Button type="primary">Primardddddy</Button>
                <input type="button" value="点击" onClick={this.handleClick.bind(this)}/>
            </div>
        );
    }
};
ProductBox.propTypes = {
    title: PropTypes.string.isRequired,
};

export default  ProductBox;