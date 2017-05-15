/**
 * Created by Queric on 2017/5/12.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Layout,Carousel,Spin } from 'antd';
const { Header, Footer , Content } = Layout;
class Hello extends React.Component{
    render() {
        return (
            <Layout>
                <Header>
                    <Carousel autoplay>
                        <div><h3>1</h3></div>
                        <div><h3>2</h3></div>
                        <div><h3>3</h3></div>
                        <div><h3>4</h3></div>
                    </Carousel>
                </Header>
                <Content><Spin></Spin></Content>
                <Footer>Footer</Footer>
            </Layout>
        )
    }
}
export default Hello;