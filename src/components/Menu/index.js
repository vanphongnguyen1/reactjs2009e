import React from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class Menu extends React.Component {
  render() {
    return (
      <>
        <div className="menu">
          <ul className="menu_list">
            <li className="menu_item">
              <a className="menu_link" href="#a">
                <span className="menu_icon">
                  <FontAwesomeIcon icon="home"/>
                </span>
              </a>
            </li>
            <li className="menu_item">
              <a className="menu_link" href="#a">
                <span className="menu_icon">
                  <FontAwesomeIcon icon="cube"/>
                </span>
                Project
              </a>
            </li>
            <li className="menu_item">
              <a className="menu_link" href="#a">
                <span className="menu_icon">
                  <FontAwesomeIcon icon="angle-double-right"/>
                </span>
                Breadcrumb
              </a>
            </li>
            <li className="menu_item">
              <a className="menu_link" href="#a">
                <span className="menu_icon">
                  <FontAwesomeIcon icon="rocket"/>
                </span>
                Getting started
              </a>
            </li>
            <li className="menu_item">
              <a className="menu_link" href="#a">
                <span className="menu_icon">
                  <FontAwesomeIcon icon="arrow-down"/>
                </span>
                Download
              </a>
            </li>
          </ul>
        </div>
      </>
    )
  }
}

export default Menu