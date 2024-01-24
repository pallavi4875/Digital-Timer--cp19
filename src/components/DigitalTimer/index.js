// Write your code here
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()}
  }

  componentDidMount() {
    this.timerID = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick = () => {
    this.setState({
      date: new Date(),
    })
  }

  render() {
    const {date} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">Digital Timer</h1>
        <div className="card">
          <div className="timer">
            <p className="time">{date.toLocaleTimeString()}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
