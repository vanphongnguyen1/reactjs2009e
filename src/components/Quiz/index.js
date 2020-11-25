import React, { Component } from 'react'
import './style.css'

class Quiz extends Component {
  render() {
    return (
      <>
        <div className="quiz">
          <div className="box_quiz">
            <div className="quiz_head">
              <h2 className="quiz_heading">
                Reactjs Quiz
              </h2>
              <span className="complate_bg"/>
              <span className="quiz_sub-heading">
                0% complate
              </span>
            </div>
            <div className="question">
              <h3 className="question_thread">
                What is the full form of HTTP
              </h3>
              <ul className="answer_list">
                <li className="answer_item">
                  a. Hyper text transfer package
                </li>
                <li className="answer_item">
                  b. Hyper text transfer protocol
                </li>
                <li className="answer_item">
                  c. Hyphenation text test program
                </li>
                <li className="answer_item">
                  d. None of the above
                </li>
              </ul>
            </div>
            <div className="arrow">
              <button className="arrow-back">Back</button>
              <button className="arrow-next">Skip</button>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Quiz
