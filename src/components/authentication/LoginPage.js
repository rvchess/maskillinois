import React, { Component } from 'react';
import './LoginPage.css';
import { Link } from "react-router-dom";
import axios from 'axios';
import qs from 'qs';
import { Redirect } from 'react-router-dom';
import { wait } from '@testing-library/react';
import Edit from './Edit.js';
import { useHistory } from 'react-router-dom';



class Login extends Component {
  constructor(props) {
    super(props);
    if(sessionStorage.getItem('current-user-email') != null) this.props.history.push('/edit')
    this.state = {
        email: '',
        password: '',
        logged_in: '',
        check_exist: false,
        successful_login: false,
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({[name]: value});
  }
  
  get_check_exist = (email) => {
    return axios.get('/check-exist', {
                params: {email: email, }
            }).then(function(response) {
                      if (response.data === 'email exists') return true
                      else return false
            })
  }

  check_login = (email, password) => {
    return axios.get('/login', {
                params: {email: email, password: password, }
    }).then(function(response) {
              if(response.data === 'not verified') return 1;
              else if(response.data === 'yes') return 2;
              else return 3;
    })
  }

  handleSubmit = async(event) => {
    event.preventDefault();
    const userData = {
        email: this.state.email,
        password: this.state.password,
    };

    var check_exist_promise = this.get_check_exist(this.state.email).then(data => {
      if(data === true) this.setState({ check_exist: true })
      else this.setState({ check_exist: false })
    })
    await check_exist_promise;

    if(!this.state.check_exist) {
      alert('Email does not exist')
    }

    else {
      var login_promise = this.check_login(this.state.email, this.state.password).then(data => {
        if(data === 1) this.setState({ logged_in: 'Email not verified' })
        else if(data === 2) this.setState({ logged_in: 'Login successful' })
        else this.setState({ logged_in: 'Incorrect email or password' })
      })
      await login_promise;

      if(this.state.logged_in === 'Email not verified') alert('Email not verified')
      else if(this.state.logged_in === 'Incorrect email or password') alert('Incorrect email or password')
      else {
        sessionStorage.setItem('current-user-email', this.state.email);
        sessionStorage.setItem('current-password', this.state.password);
        window.location.reload()
        this.props.history.push('/edit');
      }
    }  
  }

  render() {
    return (
      <div className='wrapper-login'>
        <div className='form-wrapper-login'>
          <h2>Log in</h2> <br />
          <center> <p> Don't have an account? <Link to="/register"> <u> Register </u></Link> </p> </center> <br />
          <form onSubmit={this.handleSubmit} className = 'login-form' noValidate>
            <div className='email-login'>
              <label htmlFor="email-login" className = 'label-login'>Email</label>
              <input type='email' name='email' onChange={this.handleChange} noValidate />
            </div>
            <div className='password-login'>
              <label htmlFor="password-login" className = 'password-login'>Password</label>
              <input type='password' name='password' onChange={this.handleChange} noValidate />
            </div>
            <span> <small> <Link to="/getcode"> <u> Forgot Password? </u> </Link> </small> </span>
            <div className='submit-login'>
              <button className = 'sign-in-login'> Sign in </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;