import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, imageUrl,newsUrl, author ,date, source} = this.props;
    return (
      <div>
        <div className="card" >
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title} <span className="position-absolute top-0 translate-middle round-pill bg-danger" style={{left:'90%', zIndex:1 }}>{source}</span></h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {date} </small></p>
            <a href={newsUrl} target="blank" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
