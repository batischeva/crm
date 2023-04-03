import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes'
import NotFound from '../pages/NotFound'

export default function AppRouter() {
  const isAuth = true
  return (
    <Routes>
      {isAuth && authRoutes.map(({path, component}) =>
        <Route key={path} path={path} element={component} />
      )}
      {isAuth === false && publicRoutes.map(({path, component}) =>
        <Route key={path} path={path} element={component} />
      )}
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
