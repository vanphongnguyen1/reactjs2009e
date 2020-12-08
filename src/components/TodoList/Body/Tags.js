import React from 'react';

class Tags extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tags: ['Home', 'Work', 'School']
    }
  }

  render() {
    const { tags } = this.state
    const { currentTag } = this.props

    return(
      <>
        <div className="box-todo__tags">
          <span className="box-todo__tags--title">
            Tags:
          </span>

          <span
            className={ !currentTag ? 'box-tag active' : 'box-tag'}
            onClick={ () => this.props.setCurrentTag('') }
          >
            <span className="fas fa-circle box-tag__dot-all" />
            <span className="box-tag__text">
              All
            </span>
          </span>

          {
            tags.map((tag, index) => {
              return (
                <span
                  className={ currentTag === tag ? 'box-tag active' : 'box-tag' }
                  key={ index }
                  onClick={ () => this.props.setCurrentTag(tag) }
                >

                  <span
                    className={ tag === 'Home'
                      ? 'fas fa-circle box-tag__dot-home'
                      : tag === 'Work'
                      ? 'fas fa-circle box-tag__dot-work'
                      : 'fas fa-circle box-tag__dot-school'}
                  />

                  <span className="box-tag__text">
                    { tag }
                  </span>
                </span>
              )
            })
          }

          <span className="box-tag__text">
            Reset
          </span>
        </div>
      </>
    )
  }
}

export default Tags;
