import React, { Component } from 'react';
import './LoginPage.css';
import { Link } from "react-router-dom";
import axios from 'axios';
import qs from 'qs';
import { Redirect } from 'react-router-dom';

class EnterCode extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
        code: '',
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({[name]: value});
  }
  

  handleSubmit = async(event) => {
    event.preventDefault();
    const verificationCode = {
        code: this.state.code,
    };
    // console.log(this.props.location)
    const reset_password_value = axios.get('/reset-password', {
      params: { 
        key: this.state.code,
        email: this.props.location.state.email_for_code.email,
      }
    }).then(function(response) {
        if(response === 'yes') return true;
        else return false;
    })
    await reset_password_value

    if(reset_password_value) this.props.history.push('/newpassword', {email_for_reset: this.props.location.state.email_for_code.email});
    else alert('The code you entered is incorrect. Please contact us to recover your account.')
  }

  render() {
    return (
      <div className='wrapper-login'>
        <div className='form-wrapper-get-code'>
          <h2>Enter the verification code sent to your email</h2> <br />
          <form onSubmit={this.handleSubmit} className = 'login-form' noValidate>
            <div className='email-login'>
              <label htmlFor="email-login" className = 'label-login'>Verification code</label>
              <input type='email' name='email-login' onChange={this.handleChange} noValidate />
            </div>
            <div className='submit-login'>
              <button className = 'sign-in-login'>Submit verification code</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default EnterCode;