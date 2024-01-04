import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return <div>
  <ul id="navbar">
    <li><Link to='/all' href="">ALL</Link></li>
    <li><Link to='/fsd'  href="">FULLSTACK DEVELOPMENT</Link></li>
    <li><Link to='/datascience' href="">DATA SCIENCE</Link></li>
    <li><Link to='/cybersecurity' href="">CYBER SECURITY</Link></li>
    <li><Link to='/career' href="">CAREER</Link></li>
  </ul>
</div>
}

export default NavBar