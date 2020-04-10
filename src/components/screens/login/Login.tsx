import * as React from 'react';
import { Component } from 'react';
import { Row, Col , Input, Button , Form} from 'antd';



class Login extends Component{

    state = {
        username : "",
        password : ""
    }
    

    handleSubmit = (v:Object) =>{
            console.log(this.state)
            this.setState({
                    username : "",
                    password : ""   
            })
            
    }


    render(){
    return (  
           
                <Col xs={ {span:24}} lg={{ offset:9 , span:6}} >
                    <Row style={{padding:"5px"}}> 
                        <Col style={{height:"250px"}} span={24}>     
                            <Row>   
                                <Col style={{top:"100px"}} offset={8} span={8}>
                                    <img alt="logo" style={{width:"100px"}}  src="logo.svg" /> 
                                    <div style={{fontSize:"10px" , fontStyle:"italic"}}>Connecting Wants</div>
                                </Col>  
                            </Row>  
                        </Col>       
                    </Row>
                    <Form onFinish={this.handleSubmit} >
                        <Row style={{padding:"5px"}}>
                            <Input value={this.state.username} onChange={e=> this.setState({username:e.target.value})} size="large" placeholder="username"></Input>
                        </Row>
                        <Row style={{padding:"5px"}}>
                            <Input value={this.state.password} onChange={e=> this.setState({password:e.target.value})} size="large" type="password" placeholder="password"></Input>
                        </Row>
                        <Row style={{padding:"5px"}}>
                            <Button htmlType="submit" size="large" block style={{color:"black"}} type="primary">Login</Button>
                        </Row>
                        <Row style={{padding:"5px" , }}>
                            <Button size="large" block style={{backgroundColor:"#7B7935", color:"white"}} >Create An Account</Button>
                        </Row>
                    </Form>
                    <Row style={{top:"200px"}}>
                        <Col offset={4} span={16}> Forget password?<Button style={{color:"#7B7935"}} type="link">Click here</Button> </Col>
                    </Row>
                </Col>
            
        )
    }
}


export default Login