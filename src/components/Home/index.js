import React, { Component } from 'react';
import axios from 'axios';

import { URL_HOME } from '../Utils/paths';

import SliderWidget from '../Utils/slider';
import Subscribtions from '../Utils/subscribe';
import Blocks from "./blocks";
import Poll from "./poll";

class Home extends Component {

  state = {
    home: ''
  }

  componentDidMount(){
    axios.get(URL_HOME)
    .then(response => {
      console.log(response.data);
      this.setState({home: response.data})
    })
  }

  render() {
    return (
       <>
        <SliderWidget slides={this.state.home.slider} />
        <Subscribtions/>
        <Blocks blocks={this.state.home.blocks}/>
        <Poll/>
       </>
    );
  }
};

export default Home;