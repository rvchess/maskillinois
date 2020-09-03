import React, { Component } from 'react';
import './LoginPage.css';
import { Link } from "react-router-dom";
import axios from 'axios';
import qs from 'qs';
import { Redirect } from 'react-router-dom';

class GetCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: '',
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

  handleSubmit = async(event) => {
    event.preventDefault();
    const email_for_code = {
        email: this.state.email,
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
      axios({
        method: 'post',
        url: '/forgot',
        data: qs.stringify(email_for_code),
        headers: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
      })

      this.props.history.push('/entercode', {email_for_code: email_for_code})
    }
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

  render() {
    return (
      <div className='wrapper-login'>
        <div className='form-wrapper-get-code'>
          <h2>Enter email address to recover password</h2> <br />
          <form onSubmit={this.handleSubmit} className = 'login-form' noValidate>
            <div className='email-login'>
              <label htmlFor="email-login" className = 'label-login'>Email</label>
              <input type='email' name='email' onChange={this.handleChange} noValidate />
            </div>
            <div className='submit-login'>
              <button className = 'sign-in-login'>Get verification code</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default GetCode;