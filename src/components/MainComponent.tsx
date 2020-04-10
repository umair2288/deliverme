import * as React from 'react';
import { Component } from 'react';
import {Row} from 'antd'
import Login from './screens/login/Login';

class MainComponent extends Component {
    
    render() { 
        return (
            <Row style={{padding:"2%" , height:"100vh"}}>
                <Login></Login>
            </Row>
            
            );
    }
}
 
export default MainComponent;