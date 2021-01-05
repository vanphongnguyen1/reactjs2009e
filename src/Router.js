

import Home from './components/pages/Home'
import About from './components/pages/About'
import Users from './components/pages/Users'
import User from './components/pages/User'

export const routers = [
  { path: '/', exact: true, Component: Home},
  { path: '/about', exact: true, Component: About},
  { path: '/users', exact: true, Component: Users},
  { path: '/users/:id', exact: true, Component: User},
]


// 1 tháng làm project
// SCSS, BEM,
// js
