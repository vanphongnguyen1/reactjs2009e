import React from 'react';

const grounds = ['Home', 'Work', 'School']

const Tags = props => {
  return(
    <>
      <div className="box-todo__tags">
        <span className="box-todo__tags--title">
          Tags:
        </span>

        <span
          className={
            !props.tag ? 'box-tag active' : 'box-tag'
          }
          onClick={() => props.setTag('')}
        >
          <span className="fas fa-circle box-tag__dot-all" />
          <span className="box-tag__text">
            All
          </span>
        </span>

        {
          grounds.map((ground, index) => (
            <span
              className={
                props.tag === ground ? 'box-tag active' : 'box-tag'
              }
              key={index}
              onClick={() => props.setTag(ground)}
            >
              <span
                className={
                  ground === 'Home' ? 'fas fa-circle box-tag__dot-home' :
                  ground === 'Work' ? 'fas fa-circle box-tag__dot-work' :
                  'fas fa-circle box-tag__dot-school'
                }
              />

              <span className="box-tag__text">
                { ground }
              </span>
            </span>
          ))
        }

        <span className="box-tag__text">
          Reset
        </span>
      </div>
    </>
  )
}

export default Tags;
