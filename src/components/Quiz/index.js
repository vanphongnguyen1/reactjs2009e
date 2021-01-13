import React, { Component } from 'react'
import './style.css'

class Quiz extends Component {
  render() {
    return (
      <>
        <div className="quiz">
          <div className="box__quiz">

            <div className="quiz__head">
              <h2 className="quiz__heading">
                Reactjs Quiz
              </h2>
              <span className="complate__bg"/>
              <span className="quiz__sub-heading">
                0% complate
              </span>
            </div>

            <div className="question">
              <h3 className="question__thread">
                What is the full form of HTTP
              </h3>

              <ul className="answer__list">
                <li className="answer__item">
                  a. Hyper text transfer package
                </li>

                <li className="answer__item">
                  b. Hyper text transfer protocol
                </li>

                <li className="answer__item">
                  c. Hyphenation text test program
                </li>

                <li className="answer__item">
                  d. None of the above
                </li>
              </ul>
            </div>

            <div className="arrow">
              <button className="arrow--back">Back</button>
              <button className="arrow--next">Skip</button>
            </div>

          </div>
        </div>
      </>
    )
  }
}

export default Quiz
