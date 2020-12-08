import React from 'react'

class Tags extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tags: ['Home', 'Work', 'School'],
    }
  }

  render() {
    const { currentTag } = this.props
    const { tags } = this.state

    return (
      <>
        <div className="tags">
          Tags:
          <span
            onClick={ () => this.props.setCurrentTag('') }
            className={ !currentTag ? 'tag-active': ''}
          >
            All
          </span>

          {
            tags.map((tag, index) => {
              return(
                <span
                  className={ currentTag === tag ? 'tag-active': ''}
                  key={ index }
                  onClick={ () => this.props.setCurrentTag(tag) }
                >
                  { tag }
                </span>
              )
            })
          }
        </div>
      </>
    )
  }
}

export default Tags
