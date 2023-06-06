// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onDecrease = () => {
    const {count} = this.state

    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  onIncrease = () => {
    const {count} = this.state

    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="speedometer-img"
          alt="speedometer"
        />
        <h1 className="speed">Speed is {count}mph</h1>
        <p className="speed">Min limit is 0mph, Max limit is 200mph</p>
        <div>
          <button type="button" onClick={this.onIncrease} className="incButton">
            Accelerate
          </button>
          <button type="button" onClick={this.onDecrease} className="decButton">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
