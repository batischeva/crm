import React from 'react'
import { Link } from 'react-router-dom'
import classes from './SidebarNavItem.module.css'

export default function SidebarNavItem({name, link, icon}) {
  return (
    <li className={classes.sidebarNavItem}>
      <Link to={link} className={classes.sidebarNavItemLink}>
        {icon}
        {name}
      </Link>
    </li>
  )
}
