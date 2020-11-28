import React from 'react'
import LiElement from './LiElement'

class Menu extends React.Component {

  render() {
    return(
      <>
        <div className="menu">
          <ul className="menu__list">
            <LiElement />
          </ul>
        </div>
      </>
    )
  }
}

export default Menu