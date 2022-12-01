import React, { Component } from 'react'
import PropTypes from 'prop-types'
export class NavBar extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general"
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-info">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><h3>News-Monkey</h3></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/"><h5>Home</h5></a>
        </li>
        <li className="nav-item"><a className="nav-link" href="/about"><h5>About</h5></a></li>

        <li className="nav-item"><a className="nav-link" href="/about"><h5>bussiness</h5></a></li>
        <li className="nav-item"><a className="nav-link" href="/about"><h5>entertainment</h5></a></li>
        <li className="nav-item"><a className="nav-link" href="/about"><h5>general</h5></a></li>
        <li className="nav-item"><a className="nav-link" href="/about"><h5>health</h5></a></li>
        <li className="nav-item"><a className="nav-link" href="/about"><h5>science</h5></a></li>
        <li className="nav-item"><a className="nav-link" href="/about"><h5>sports</h5></a></li>
        <li className="nav-item"><a className="nav-link" href="/about"><h5>technology</h5></a></li>

        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>  */}
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-dark" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default NavBar
