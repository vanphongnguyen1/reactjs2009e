import React from 'react'

class Search extends React.Component {
  render() {
    return(
      <>
        <li className="menu__item">
          <div className="box__search">
            <input type="text" className="box__search--input" placeholder="Search...."/>
            <span className="box__search--icon">
              <i className="fas fa-search" />
            </span>
          </div>
        </li>
      </>
    )
  }
}

export default Search