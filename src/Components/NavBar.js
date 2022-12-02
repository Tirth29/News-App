import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
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
        <nav className="navbar fixed-top navbar-expand-lg bg-info">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><h3>News-Monkey</h3></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/"><h5>Home</h5></Link>
        </li>
        <li className="nav-item"><Link className="nav-link" to="/about"><h5>About</h5></Link></li>
        {/* <li className="nav-item"><Link className="nav-link" to="/bussiness"><h5>bussiness</h5></Link></li> */}
        <li className="nav-item"><Link className="nav-link" to="/entertainment"><h5>Entertainment</h5></Link></li>
        <li className="nav-item"><Link className="nav-link" to="/general"><h5>General</h5></Link></li>
        <li className="nav-item"><Link className="nav-link" to="/health"><h5>Health</h5></Link></li>
        <li className="nav-item"><Link className="nav-link" to="/science"><h5>Science</h5></Link></li>
        <li className="nav-item"><Link className="nav-link" to="/sports"><h5>Sports</h5></Link></li>
        <li className="nav-item"><Link className="nav-link" to="/technology"><h5>Technology</h5></Link></li>

        {/* <li className="nav-item dropdown">
          <link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </link>
          <ul className="dropdown-menu">
            <li><link className="dropdown-item" to="/">Action</link></li>
            <li><link className="dropdown-item" to="/">Another action</link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><link className="dropdown-item" to="/">Something else here</link></li>
          </ul>
        </li>
        <li className="nav-item">
          <link className="nav-link disabled">Disabled</link>
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
