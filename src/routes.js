import Layout from "./pages/Layout"
import Auth from "./pages/Auth"
import { AUTH_ROUTE, LAYOUT_ROUTE, DEALS_ROUTE, ORG_ROUTE, USERS_ROUTE, PRODUCTS_ROUTE, ANALITICS_ROUTE, SETTINGS_ROUTE } from "./utils/consts";

export const authRoutes = [
  {
    path: LAYOUT_ROUTE,
    component: <Layout />
  },
  {
    path: DEALS_ROUTE,
    component: <Layout />
  },
  {
    path: ORG_ROUTE,
    component: <Layout />
  },
  {
    path: USERS_ROUTE,
    component: <Layout />
  },
  {
    path: PRODUCTS_ROUTE,
    component: <Layout />
  },
  {
    path: ANALITICS_ROUTE,
    component: <Layout />
  },
  {
    path: SETTINGS_ROUTE,
    component: <Layout />
  }
]

export const publicRoutes = [
  {
    path: AUTH_ROUTE,
    component: <Auth />
  }
]