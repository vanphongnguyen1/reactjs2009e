import React from 'react'

class Link extends React.Component {

  render() {
    const eleLink = this.props.data
    const subTitle = this.props.data.subTitle
      ? <span className="menu__link--boxtext-subtitle">
          { eleLink.subTitle }
        </span>
      : ''

    return (
      <>
        <a className="menu__link" href={ eleLink.link }>
          <span className="menu__link--icon">
            <i className={ eleLink.icon } />
          </span>

          <span className="menu__link--boxtext">
            <span className="menu__link--boxtext-title">{ eleLink.title }</span>

            { subTitle }
          </span>
        </a>
      </>
    )
  }
}

export default Link