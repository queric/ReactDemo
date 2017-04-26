import React from 'react';
var names = ['Alice', 'Emily', 'Kate'];
class ProductBox extends React.Component{

    render () {
        return (
            <ol>{
                React.Children.map(this.props.children,function (child) {
                    return <li>{child}</li>
                })
            }
            </ol>
        );
    }
};

export default  ProductBox;