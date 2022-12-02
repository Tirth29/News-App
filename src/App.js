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
        <Route exact path="/" element={<News pageSize={this.pageSize} country="in" category="General"/>}/>
          <Route exact path="/bussiness"    element={<News pageSize={this.pageSize} country="in" category="Bussiness" key="bussiness"/>}/>
          <Route exact path="/entertainment" element={<News pageSize={this.pageSize} country="in" category="Entertainment" key="entertainment"/>}/>
          <Route exact path="/general"      element={<News pageSize={this.pageSize} country="in" category="General" key="general"/>}/>
          <Route exact path="/health" element={<News pageSize={this.pageSize} country="in" category="Health" key="health"/>}/>
          <Route exact path="/science" element={<News pageSize={this.pageSize} country="in" category="Science" key="science"/>}/>
          <Route exact path="/sports" element={<News pageSize={this.pageSize} country="in" category="Sports" key="sports"/>}/>
          <Route exact path="/technology" element={<News pageSize={this.pageSize} country="in" category="Technology" key="technology"/>}/>
          </Routes>
      </div>
      </Router>
    )
  }
}
