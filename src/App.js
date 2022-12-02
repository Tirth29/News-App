import './App.css';

import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/news';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


export default class App extends Component {
  pageSize=16;
  c="john";
  render() {
    return (
      <Router>

      <div>
        <NavBar/>
        {/* Hello, My First Class Based Component {this.c} */}
          <Routes>
        <Route exact path="/" element={<News pageSize={this.pageSize} country="in" category="general"/>}/>
          <Route exact path="/bussiness"    element={<News pageSize={this.pageSize} country="in" category="bussiness" key="bussiness"/>}/>
          <Route exact path="/entertainment" element={<News pageSize={this.pageSize} country="in" category="entertainment" key="entertainment"/>}/>
          <Route exact path="/general"      element={<News pageSize={this.pageSize} country="in" category="general" key="general"/>}/>
          <Route exact path="/health" element={<News pageSize={this.pageSize} country="in" category="health" key="health"/>}/>
          <Route exact path="/science" element={<News pageSize={this.pageSize} country="in" category="science" key="science"/>}/>
          <Route exact path="/sports" element={<News pageSize={this.pageSize} country="in" category="sports" key="sports"/>}/>
          <Route exact path="/technology" element={<News pageSize={this.pageSize} country="in" category="technology" key="technology"/>}/>
          </Routes>
      </div>
      </Router>
    )
  }
}
