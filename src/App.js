import './App.css';

import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/news';

export default class App extends Component {
  c="john";
  render() {
    return (
      <div>
        <NavBar/>
        {/* Hello, My First Class Based Component {this.c} */}
        <News pageSize={6}/>
      </div>
    )
  }
}
