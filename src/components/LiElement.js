import React from 'react'
import Link from './Link'

class LiElement extends React.Component {
  render() {
    const elementLis = this.props.data.map((ele, index) =>  {
        return (
          <li className={ ele.isActive ? "menu__item active" : "menu__item" }  key={ index }>
            <Link data={ ele } />
            { ele.children &&
              <ul className="menu__children">
              <LiElement data={ ele.children } />
              </ul>
            }
          </li>
        )
    })
    return(
      <>
        { elementLis }
      </>
    )
  }
}

export default LiElement
