import React from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class Menu extends React.Component {
  render() {
    return (
      <>
        <div className="menu">
          <ul className="menu__list">
            <li className="menu__item">
              <a className="menu__link" href="#a">
                <span className="menu__icon">
                  <FontAwesomeIcon icon="home"/>
                </span>
              </a>
            </li>

            <li className="menu__item">
              <a className="menu__link" href="#a">
                <span className="menu__icon">
                  <FontAwesomeIcon icon="cube"/>
                </span>
                Project
              </a>
            </li>

            <li className="menu__item">
              <a className="menu__link" href="#a">
                <span className="menu__icon">
                  <FontAwesomeIcon icon="angle-double-right"/>
                </span>
                Breadcrumb
              </a>
            </li>

            <li className="menu__item">
              <a className="menu__link" href="#a">
                <span className="menu__icon">
                  <FontAwesomeIcon icon="rocket"/>
                </span>
                Getting started
              </a>
            </li>
            
            <li className="menu__item">
              <a className="menu__link" href="#a">
                <span className="menu__icon">
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
