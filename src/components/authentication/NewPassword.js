import React, { Component } from 'react';
import './LoginPage.css';
import { Link } from "react-router-dom";
import axios from 'axios';
import qs from 'qs';
import { Redirect } from 'react-router-dom';


const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}
class NewPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      confirm_password: '',
    errors: {
      password: '',
      confirm_password: '',
    }
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    switch (name) {
        case 'password': 
          errors.password = 
            value.length < 8
              ? 'Password must be 8 characters long!'
              : '';
        break;

        case 'confirm_password':
          errors.confirm_password = 
            value !== this.state.password 
            ? 'Passwords do not match'
            : '';
        default:
        break;
    }

    this.setState({errors, [name]: value});
  }
  

  handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm(this.state.errors)) {
      alert('Your password has been changed.')
      const user_password = {
        email: this.props.location.state.email_for_reset,
        password: this.state.password,
      }
      axios({
        method: 'post',
        url: '/update',
        data: qs.stringify(user_password),
        headers: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
      })
      this.props.history.push('/login')
    }

    else {
      alert('Invalid form. Please enter your password again.')
    } 
  }

  render() {
    const {errors} = this.state;
    return (
      <div className='wrapper-login'>
        <div className='form-wrapper-new-password'>
          <h2>Enter new password</h2> <br />
          <form onSubmit={this.handleSubmit} className = 'login-form' noValidate>
            <div className='password-login'>
              <label htmlFor="password-login" className = 'password-login'>New Password</label>
              <input type='password' name='password' onChange={this.handleChange} noValidate />
            </div>
            {errors.password.length > 0 && 
                  <span className='error'>{errors.password}</span>}
            <div className='password-login'>
              <label htmlFor="password-login" className = 'password-login'>Confirm Password</label>
              <input type='password' name='confirm_password' onChange={this.handleChange} noValidate />
            </div>
            {errors.confirm_password.length > 0 && 
                  <span className='error'>{errors.confirm_password}</span>}
            <div className='submit-login'>
              <button className = 'sign-in-login'> Submit new password </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default NewPassword;