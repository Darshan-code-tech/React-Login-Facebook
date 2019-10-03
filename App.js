import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
/*import GoogleLogin from 'react-google-login';
import {Postdata} from '/src/Postdata';
import {Redirect} from 'react-router-dom'
import FacebookLogin from 'react-facebook-login';
import { FacebookLogininButton } from 'react-social-login-buttons';*/
//import facebook from './Component/facebook';
import Facebook from './Component/facebook';



export default class App extends Component {

   /* constructor(props){
      super(props);
      this.stats={
        redirect: false
      }
        this.signup = this.signup.bind(this);
    }

    signup(res,type){
      Postdata('login', Postdata).then((result) => {
        let responseJson = result;
        if(responseJson = result){
        sessionStorage.setItem("userData", JSON.stringify(responseJson));
        this.setState({redirect: true});
        }
     });

    }*/

  render() {


    /*const responseFacebook = (response) => {
      console.log(response);
      this.signup(response,'facebook')
    }*/
    

    return (
      <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="email" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="password" />
            </FormGroup>
         </Col>
         </Row>
         <FormGroup>
              <Label for="examplePassword">Re-enterPassword</Label>
              <Input type="password" name="Re-enterpassword" id="Re-enterpassword" placeholder="Re-enterpassword" />
            </FormGroup>  
        <FormGroup>
          <Label for="exampleAddress">Address</Label>
          <Input type="text" name="address" id="exampleAddress" placeholder="Enter address"/>
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="City1">City</Label>
              <Input type="text" name="city" id="City1"/>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="State1">State</Label>
              <Input type="text" name="state" id="State1"/>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="Zip1">Zip</Label>
              <Input type="text" name="zip" id="Zip1"/>
            </FormGroup>  
          </Col>
        </Row>
        <Button>Sign in</Button>
        &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
        <Button>Register</Button>
        <div className="text-center pt-3">
        Or continue with social login
          <FormGroup>
            <div classname = "App">
              <header className="App-header">
                </header>
              <p className="App-intro">Lets get started</p>
            </div>
            <Facebook/>
            </FormGroup>
            
        </div>   
        
      </Form>
    );
  }
}


