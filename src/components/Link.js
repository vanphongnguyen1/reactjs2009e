import React from 'react'

class Link extends React.Component {

  render() {
    const { data } = this.props
    const subTitle = data.subTitle
      ? <span className="menu__link--boxtext-subtitle">
          { data.subTitle }
        </span>
      : ''

    return (
      <>
        <a className="menu__link" href={ data.link }>
          <span className="menu__link--icon">
            <i className={ data.icon } />
          </span>

          <span className="menu__link--boxtext">
            <span className="menu__link--boxtext-title">{ data.title }</span>

            { subTitle }
          </span>
        </a>
      </>
    )
  }
}

export default Link
