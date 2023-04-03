import React from 'react'
import org_logo from "../img/org_logo.png"
import user_logo from "../img/user_logo.png"
import header_arrow_down from "../icon/header_arrow_down.svg"
import header_signout from "../icon/header_signout.svg"

export default function Header() {
  return (
    <header>
      <div className='header-org-logo'>
        <a href="#">
          <img className='header-logo-img' src={org_logo} />
          <span className='logo'>ООО “Ромашка”</span>
        </a>
      </div>
      <div className='header-user-logo'>
        <a href="#">
          <img className='header-logo-img' src={user_logo} />
          <img src={header_arrow_down} />
        </a>
      </div>
      <ul className='header-menu-list'>
        <li className='header-menu-first-item'>
          <span>Иванов Иван Иванович</span>
        </li>
        <li className='header-menu-item'>
          <a href="#" className='header-menu-link'>
            <img className='header-menu-icon' src={header_signout} />
            Выйти
          </a>
        </li>
      </ul>
    </header>
  )
}
