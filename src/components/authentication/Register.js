import React, { Component } from 'react';
import { render } from 'react-dom';
import './Register.css';
import { Link } from "react-router-dom";
import axios from 'axios';
import qs from 'qs';

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

class Register extends Component {
  constructor(props) {
    super(props);
    if(sessionStorage.getItem('current-user-email') != null) this.props.history.push('/edit')
    this.state = {
        first_name: '',
        last_name:'',
        email: '',
        phone_number: '',
        number_masks: '',
        type_masks: 'Cotton',
        preferred_exchange: 'Drop off',
        additional_information: '',
        password: '',
        account: 'Public',
        confirm_password: '',
        location: 'South Campus - South of Gregory',
        profile_picture:'',
      errors: {
        first_name: '',
        last_name:'',
        email: '',
        phone_number: '',
        number_masks: '',
        type_masks: '',
        preferred_exchange: '',
        additional_information: '',
        password: '',
        account: '',
        confirm_password: '',
        location: '',
        profile_picture:'',
      }
    };
  }

  isalpha = (c) => {
    for(var i=0; i<c.length; i++) {
      if ( ( (c[i] < 'a') && (c[i] > 'Z') ) || (c[i] < 'A') || (c[i] > 'z') ) return false
    }
    return true
  }

  isdigit = (c) => {
    for(var i=0; i<c.length; i++) {
      if ( (c[i] < '0') || (c[i] > '9') ) return false
    }
    return true
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    switch (name) {
        case 'first_name': 
          errors.first_name = 
            !this.isalpha(value)
              ? 'This field only accepts alphabetic characters'
              : ''
        break;

        case 'last_name': 
          errors.last_name = 
            !this.isalpha(value)
              ? 'This field only accepts alphabetic characters'
              : '';
        break;

        case 'email': 
          errors.email = 
            validEmailRegex.test(value)
                ? ''
                : 'Email is not valid!';
        break;

        case 'number_masks': 
          errors.number_masks = 
            !this.isdigit(value)
              ? 'This field only accepts an integer value'
              : '';
        break;  

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

      const newUser = {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        phone_number: this.state.phone_number,
        number_masks: this.state.number_masks,
        user_location: this.state.location,
        type_masks: this.state.type_masks,
        preferred_exchange: this.state.preferred_exchange,
        additional_information: this.state.additional_information,
        password: this.state.password,
        profile_visibility: this.state.account,
        profile_picture: this.state.profile_picture,
      };

      console.log(newUser);

      axios({
        method: 'post',
        url: '/insert',
        data: qs.stringify(newUser),
        headers: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
      }).then(function(res) {
        console.log(res)
        if(res.data === 'Email already exists') alert('Email already exists')
        else alert('Thank you for signing up. Please verify your email.')
      }).catch(function(err) {console.log(err)})



    } else{
      alert('Invalid Form')
    }
  }

  _handleImageChange = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        profile_picture: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  remove_pic = (e) => {
    this.setState({profile_picture: ''})
  }

  render() {
    const {errors} = this.state;
    let {profile_picture} = this.state;
      let $profile_picture = null;
      if (profile_picture) {
        $profile_picture = (<img className="profile_image" src={profile_picture} />);
      } else {
        $profile_picture = (<div className="previewText">Upload profile picture</div>);
      }
    return (
      <div className='wrapper'>
        <div className='form-wrapper'>
          <h2>Create Account</h2> <br /> 
          <center> <p > Already have an account? <Link to="/login"> <u> Log in </u> </Link> </p> </center> <br />
          <form onSubmit={this.handleSubmit}>
            <div className = "left-column">
              <div className="previewComponent">
                <input id="fileInput" 
                  type="file" 
                  onChange={this._handleImageChange} />
                <label htmlFor="fileInput" className="label">  
                    <div className="imgPreview">
                        {$profile_picture}
                    </div>
                </label>
                <button type="button" onClick = {this.remove_pic}> Remove Profile Picture </button>
              </div> <br />
              <div className='first_name'>
                <label htmlFor="first_name">First Name <b className = 'red'> * </b> </label>
                <input type='text' name='first_name' onChange={this.handleChange} required />
                {errors.first_name.length > 0 && 
                <span className='error'>{errors.first_name}</span>}
              </div>
              <div className='last_name'>
                <label htmlFor="last_name">Last Name <b className = 'red'> * </b> </label>
                <input type='text' name='last_name' onChange={this.handleChange} required />
                {errors.last_name.length > 0 && 
                <span className='error'>{errors.last_name}</span>}
              </div>
              <div className='email'>
                <label htmlFor="email">Email <b className = 'red'> * </b> </label>
                <input type='email' name='email' onChange={this.handleChange} required />
                {errors.email.length > 0 && 
                  <span className='error'>{errors.email}</span>}
              </div>
              <div className='phone_number'>
                <label htmlFor="phone_number">Phone Number</label>
                <input type='email' name='phone_number' onChange={this.handleChange} noValidate />
              </div>
              <div className='password'>
                <label htmlFor="password">Password <b className = 'red'> * </b> </label>
                <input type='password' name='password' onChange={this.handleChange} required />
                {errors.password.length > 0 && 
                  <span className='error'>{errors.password}</span>}
              </div>
              <div className='confirm_password'>
                <label htmlFor="confirm_password">Confirm Password <b className = 'red'> * </b> </label>
                <input type='password' name='confirm_password' onChange={this.handleChange} required />
                {errors.confirm_password.length > 0 && 
                  <span className='error'>{errors.confirm_password}</span>}
              </div>
            </div>
            
            <div className = "right-column"> 
              <div className='location'>
                <label htmlFor="location">Location <b className = 'red'> * </b></label>
                <select name='location' onChange={this.handleChange} noValidate>
                  <option disabled> -- University Locations -- </option>
                  <option> South Campus - South of Gregory </option>
                  <option> South Farms </option>
                  <option> Central Campus </option>
                  <option> Engineering Campus - North of Green </option>
                  <option> Off Campus </option>
                  <option disabled></option>
                  <option disabled> -- Non University Locations -- </option>
                  <option> Campus Town </option>
                  <option> Champaign - Non-Campus Town </option>
                  <option> North Prospect / Market Place </option>
                  <option> Urbana - Non-Campus Town </option>
                  <option> Savoy </option>
                </select>
              </div>
              <div className='number_masks'>
                <label htmlFor="number_masks">Number of Masks Available <b className = 'red'> * </b> </label>
                <input type='text' name='number_masks' onChange={this.handleChange} required />
                {errors.number_masks.length > 0 && 
                  <span className='error'>{errors.number_masks}</span>}
              </div>
              <div className='type_masks'>
                <label htmlFor="type_masks">Type of Mask(s) available <b className = 'red'> * </b> </label>
                {/* <input type='text' name='type_masks' onChange={this.handleChange} noValidate /> */}
                <select name='type_masks' onChange={this.handleChange} noValidate>
                  <option> Cotton </option>
                  <option> N-95 </option>
                  <option> Surgical </option>
                  <option> PolyProp </option>
                  <option> Other </option>
                </select>
              </div>
              <div className='preferred_exchange'>
                <label htmlFor="preferred_exchange">Preferred Exchange <b className = 'red'> * </b> </label>
                <select name='preferred_exchange' onChange={this.handleChange} noValidate>
                  <option> Drop off </option>
                  <option> Pick up </option>
                </select>
              </div>
              <div className='account'>
                <label htmlFor="account">Account <b className = 'red'> * </b> </label>
                <select name='account' onChange={this.handleChange} noValidate>
                  <option> Public </option>
                  <option> Private </option>
                </select>
              </div>
              <div className='additional_information'>
                <label htmlFor="additional_information">Additional Info</label>
                <input type='text' name='additional_information' onChange={this.handleChange} noValidate />
              </div>
            </div>
            <div className='submit'>
              <button className='button'>Create</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;