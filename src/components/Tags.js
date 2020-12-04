import React from 'react';

class Tags extends React.Component {

  componentDidMount () {
    const tags = document.querySelectorAll('.box-todo__tags .box-tag')

    tags[0].classList.add('active')
    for (let i = 1; i < tags.length; i++ ) {
      tags[i].classList.remove('active')
    }
  }

  onClick = e => {
    const tags = document.querySelectorAll('.box-todo__tags .box-tag')
    const tabs = document.querySelectorAll('.tab-bottom__box-tab .tab-group')

    for (let i = 0; i < tabs.length; i++ ) {
      tabs[i].classList.remove('active')
    }

    for (let i = 0; i < tags.length; i++ ) {
      tags[i].classList.remove('active')
    }
    e.currentTarget.classList.add('active')
  }

   onClickTags = e => {
    this.onClick(e)
    this.props.onClickTags(e.currentTarget.innerText)
  }

  render() {
    return(
      <>
        <div className="box-todo__tags">
          <span className="box-todo__tags--title">
            Tags
          </span>

          <span className="box-tag active" onClick={ this.onClickTags }>
            <span className="fas fa-circle box-tag__dot-all" />
            <span className="box-tag__all">
              All
            </span>
          </span>

          <span className="box-tag" onClick={ this.onClickTags }>
            <span className="fas fa-circle box-tag__dot-home" />
            <span className="box-tag__home">
              Home
            </span>
          </span>

          <span className="box-tag" onClick={ this.onClickTags }>
            <span className="fas fa-circle box-tag__dot-work" />
            <span className="box-tag__work">
              Work
            </span>
          </span>

          <span className="box-tag" onClick={ this.onClickTags }>
            <span className="fas fa-circle box-tag__dot-school" />
            <span className="box-tag__school">
              School
            </span>
          </span>

          <span className="box-tag">
            <span className="box-tag__reset">
              Reset
            </span>
          </span>
        </div>
      </>
    )
  }
}

export default Tags;
