import React, {useState} from 'react'
import classes from '../style/Sidebar.module.css'
import SidebarLogo from './UI/sidebar/SidebarLogo'
import SidebarNavItem from './UI/sidebar/SidebarNavItem'

import {ReactComponent as SidebarBriefcase} from "../icon/sidebar_briefcase.svg"
import {ReactComponent as SidebarHandshake} from "../icon/sidebar_handshake.svg"
import {ReactComponent as SidebarUsers} from "../icon/sidebar_users.svg"
import {ReactComponent as SidebarBoxes} from "../icon/sidebar_boxes.svg"
import {ReactComponent as SidebarAnalitics} from "../icon/sidebar_analitics.svg"
import {ReactComponent as SidebarSettings} from "../icon/sidebar_settings.svg"

import { DEALS_ROUTE, ORG_ROUTE, USERS_ROUTE, PRODUCTS_ROUTE, ANALITICS_ROUTE, SETTINGS_ROUTE } from "../utils/consts";

export default function Sidebar() {
  const initNavItems = [
    {id: 1, name: 'Сделки', link: DEALS_ROUTE, icon: <SidebarBriefcase className={classes.sidebarNavItemIcon} />},
    {id: 2, name: 'Контрагенты', link: ORG_ROUTE, icon: <SidebarHandshake className={classes.sidebarNavItemIcon} />},
    {id: 3, name: 'Сотрудники', link: USERS_ROUTE, icon: <SidebarUsers className={classes.sidebarNavItemIcon} />},
    {id: 4, name: 'Товары', link: PRODUCTS_ROUTE, icon: <SidebarBoxes className={classes.sidebarNavItemIcon} />},
    {id: 5, name: 'Аналитика', link: ANALITICS_ROUTE, icon: <SidebarAnalitics className={classes.sidebarNavItemIcon} />},
    {id: 6, name: 'Настройки', link: SETTINGS_ROUTE, icon: <SidebarSettings className={classes.sidebarNavItemIcon} />}
  ];

  const [navItems, setNavItems] = useState(initNavItems);

  const navList = navItems.map(navItem => {
		return <SidebarNavItem
      key={navItem.id}
      name={navItem.name}
      link={navItem.link}
      icon={navItem.icon}
    />;
	});
  
  return (
    <div className={classes.sidebar}>
      <SidebarLogo/>
      <nav>
        <ul>
          {navList}
        </ul>
      </nav>
    </div>
  )
}
