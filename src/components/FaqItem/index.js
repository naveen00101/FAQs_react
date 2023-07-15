// Write your code here.
import './index.css'
import {Component} from 'react'

class FaqItem extends Component {
  state = {
    active: false,
  }

  showAnswer = () => {
    const {item} = this.props
    const {answerText} = item
    const {active} = this.state

    if (active) {
      return (
        <div className="answer-container">
          <hr className="line" />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  buttonActive = () => {
    this.setState(prevState => ({active: !prevState.active}))
  }

  render() {
    const {item} = this.props
    const {questionText} = item
    const {active} = this.state
    const imgSrc = active
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const altText = active ? 'minus' : 'plus'
    return (
      <li className="faq-container">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          <button type="button" className="btn" onClick={this.buttonActive}>
            <img src={imgSrc} alt={altText} />
          </button>
        </div>
        {this.showAnswer()}
      </li>
    )
  }
}

export default FaqItem
