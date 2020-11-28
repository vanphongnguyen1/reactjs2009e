import React from 'react'
import Link from './Link'
import MenuChild2 from './MenuChild2'

class MenuChild1 extends React.Component {

  render() {
    const data = this.props.child
    const li = data.map((ele, index) =>  {
      if (ele.children) {
        return  <li className="menu__item relative" key={ index }>
                  <Link data={ ele } />
                  <MenuChild2 child={ ele.children }/>
                </li>

      } else {
        return  <li className="menu__item" key={ index }>
                  <Link data={ ele } />
                </li>
      }
    })

    return(
      <>
        <ul className="menu__children">
          { li }
        </ul>
      </>
    )
  }
}

export default MenuChild1