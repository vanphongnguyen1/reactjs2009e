import React from 'react'
import Link from './Link'
import MenuChild1 from './MenuChild1'


class Menud extends React.Component {

  render() {
    const data = this.props.child
    const li = data.map((ele, index) =>  {
      if (ele.children) {
        return  <li className="menu__item relative" key={ index }>
                  <Link data={ ele } />
                  <MenuChild1 child={ ele.children }/>
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

export default Menud