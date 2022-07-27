import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-dark fixed-top">
  <div className="container-fluid">
    <p className="navbar-brand text-light">VGB</p>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active b text-light" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item b">
          <Link className="nav-link text-light" to="/about">About US</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle text-light" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Project
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/appdev">App development</Link></li>
            <li><Link className="dropdown-item" to="/WebDev">web development</Link></li>
            <li><Link className="dropdown-item" to="/dsa">c &c++ &java(DSA)</Link></li>
            {/* <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li> */}
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" aria-current="page" to="/help">Help</Link>
        </li>
      </ul>
      <form>
        
      </form>
      
    </div>
  </div>
</nav>
    </div>
  )
}
