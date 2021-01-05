import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import { routers} from '../../Router'


const Pages = () => {
  return (
    <>
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>

        <Switch>
          {
            routers.map((item, index) => {
              const {Component} = item
              return (
                <Route path={item.path} exact={item.exact} key={index}>
                  <Component />
                </Route>
              )
            })
          }
        </Switch>
      </Router>
    </>
  )
}

export default Pages
