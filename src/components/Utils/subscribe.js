import React, { Component } from 'react';
import axios from 'axios'
import { URL_EMAIL } from '../Utils/paths';

class Subscribtions extends Component {

  state = {
    email: '',
    error: false,
    success: false,
    alreadyIn: false
  }

  clearMessages = () => {
    setTimeout(() => {
      this.setState({
        error: false,
        success: false,
        alreadyIn: false
      })
    }, 3000)
  }

  saveSubscribtion = (email) => {
    console.log(email);

    axios.get(`${URL_EMAIL}?email=${email}`)
    .then( response => {
      if (!response.data.length) {
        axios(URL_EMAIL, {
          method: 'POST',
          headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
          },
          data: JSON.stringify({email})
        }).then( response => {
          this.setState({
            email: '',
            success: true
          })
          this.clearMessages();
        })
      } else {
        this.setState({
          email: '',
          alreadyIn: true
        })
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let email = this.state.email;
    let regex = /\S+@\S+\.\S+/;

    if (regex.test(email)) {
      this.saveSubscribtion(email);
    } else {
      this.setState({
        error: true
      })
    }

    this.clearMessages();
  }

  onChangeInput = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  render() {
    const state = this.state;
    return (
      <div className="subcribe_panel">
        <h3>Subscribe to us</h3>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={state.email}
              placeholder="youremail@gmail.com"
              onChange={this.onChangeInput}
            />
            <div className={state.error ? "error show" : "error"}>Check your email</div>
            <div className={state.success ? "success show" : "success"}>Thank you</div>
            <div className={state.alreadyIn ? "success show" : "success"}>Your email is already on the DB</div>
          </form>
        </div>

        <small>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis lectus augue. Integer sit amet vulputate ipsum. Suspendisse metus sapien, dapibus non vehicula pretium, congue ac odio. In id elementum.
        </small>
      </div>
    )
  }
}

export default Subscribtions;