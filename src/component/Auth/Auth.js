import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getUserInfo} from '../../ducks/reducer';
import axios from 'axios';


class Auth extends Component {
  constructor(){
    super();

    this.state = {
      username: '',
      password: ''
    }
  }

  
  handleRegister(){
    axios.post('/api/auth/register', {getUserInfo})
    .then( response => { 
      window.location = `http://localhost:3000/#/dashboard`
    })
  }

  handleLogin(){
    axios.post('api/auth/login', {getUserInfo})
    .then( response => response.data )
    .then(window.location = `http://localhost:3000/#/dashboard`)
  }

  changeHandler = ( prop, val) => {
    this.setState({[prop]: val})
  }

  
  // usernameHandler = ( value ) => {
  //   this.setState({ username: value})
  //   console.log(this.state);
  // }
  
  // passwordHandler = ( value ) => {
  //   this.setState({ password: value})
  //   console.log(this.state);
  // }
  
  

  render() {
    return (
      <div >
        <form>
          <p>
            Username:
            </p><input
            value={this.state.username}
            onChange={ (e) => this.changeHandler( 'username' , e.target.value) } 
            type='text' 
            placeholder='username' />
          <p>
            Password:
            </p><input 
            value={this.state.password}
            onChange={ (e) => this.changeHandler( 'password' , e.target.value) } 
            type='text' 
            placeholder='password' />
          <button onClick={this.handlelogin}>Login</button>
          <button onClick={this.handleRegister}>Register</button>
        </form>
      </div>
    );
  }
}




export default connect( null, { getUserInfo } )( Auth);
