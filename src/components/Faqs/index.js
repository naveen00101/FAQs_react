// Write your code here.
import './index.css'
import {Component} from 'react'
import FaqItem from '../FaqItem/index'

class Faqs extends Component {
  state = {
    faqs: this.props,
  }

  render() {
    const {faqs} = this.state
    const {faqsList} = faqs
    return (
      <div className="main-container">
        <div className="bg-container">
          <h1 className="heading">FAQs</h1>
          <ul className="faqs-container">
            {faqsList.map(eachItem => (
              <FaqItem item={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
