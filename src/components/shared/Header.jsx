import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
  const icon = props.theme === 'light' ? '🔦' : '💡'
  return (
    <nav className="custom-nav">
      <ul className="list-inline">
        <li className="list-inline-item">
          <NavLink exact activeClassName="nav-active" to="/">Popular</NavLink>
        </li>
        <li className="list-inline-item">
          <NavLink activeClassName="nav-active" to="/battle">Battle</NavLink>
        </li>
        <li style={{ float: 'right' }} className="list-inline-item">
          <button className='btn-clear theme-btn' onClick={props.onChange}><span>{icon}</span></button>
        </li>
      </ul>
    </nav>
  )
}

export default Header