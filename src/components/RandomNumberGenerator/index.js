import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1 // Generates a random number between 1 and 100
    this.setState({
      count: randomNumber,
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random Number in the range of 0 to 100
          </p>
          <button className="button" onClick={this.onRandomNumber}>
            Generate
          </button>
          <p>{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
