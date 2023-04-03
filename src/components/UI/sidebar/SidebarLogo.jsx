import React from 'react'
import classes from './SidebarLogo.module.css'

export default function SidebarLogo() {
  return (
    <div className={classes.sidebarLogoBlock}>
      <a className={classes.sidebarLogoLink} href='/'>
        Petrocollege <span className={classes.sidebarLogoLinkAccent}>CRM</span>
      </a>
    </div>
  )
}
