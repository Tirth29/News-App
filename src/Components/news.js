import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
  render() {
    return (

        <div className="container my-3">
            <h2>NewsMonkey-Top Headlines</h2>
            <div className="row">
                <div    className="col-md-3">
                    <Newsitem title="myTitle" discription="mydis"/>
                </div>

                <div    className="col-md-3">
                    <Newsitem title="myTitle" discription="mydis"/>
                </div> 

                <div    className="col-md-3">
                    <Newsitem title="myTitle" discription="mydis"/>
                </div>
            </div>
        </div>
    )
  }
}

export default News