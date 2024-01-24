// Write your code here
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timerValue: 25 * 60,
      isTimerRunning: false,
      timerLimit: 25,
    }
  }

  componentDidMount() {
    // Start the timer when the component mounts
    this.startTimer()
  }

  componentWillUnmount() {
    clearInterval(this.timerInterval)
  }

  startTimer = () => {
    this.timerInterval = setInterval(() => {
      this.setState(prevState => {
        if (prevState.isTimerRunning && prevState.timerValue > 0) {
          return {timerValue: prevState.timerValue - 1}
        }
        this.endTimer()
        return null
      })
    }, 1000)
  }

  handleStartPauseClick = () => {
    console.log('Start/Pause button clicked')
    this.setState(prevState => ({
      isTimerRunning: !prevState.isTimerRunning,
    }))
  }

  handleResetClick = () => {
    this.setState(prevState => ({
      isTimerRunning: false,
      timerValue: prevState.timerLimit * 60,
    }))
  }

  handleIncrementClick = () => {
    this.setState(prevState => ({
      timerLimit: prevState.timerLimit + 1,
      timerValue: (prevState.timerLimit + 1) * 60,
    }))
  }

  handleDecrementClick = () => {
    this.setState(prevState => ({
      timerLimit: Math.max(1, prevState.timerLimit - 1),
      timerValue: Math.max(60, (prevState.timerLimit - 1) * 60),
    }))
  }

  endTimer = () => {
    clearInterval(this.timerInterval)
    // Handle other end timer actions
  }

  render() {
    const {timerValue, isTimerRunning, timerLimit} = this.state

    const minutes = Math.floor(timerValue / 60)
    const seconds = timerValue % 60

    return (
      <div className="app-container">
        <h1 className="heading">Digital Timer</h1>
        <div className="card">
          <div className="timer">
            <p className="time">{`${String(minutes).padStart(2, '0')}:${String(
              seconds,
            ).padStart(2, '0')}`}</p>
          </div>
          {isTimerRunning ? <p>Running</p> : <p>Set Timer limit</p>}v
          <button onClick={this.handleStartPauseClick} className="button">
            {isTimerRunning ? (
              <>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
                  alt="pause icon"
                  className="button"
                />
                Pause
              </>
            ) : (
              <>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                  alt="play icon"
                  className="button"
                />
                Start
              </>
            )}
          </button>
          <button onClick={this.handleResetClick} className="button">
            <>
              <img
                src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                alt="reset icon"
                className="button"
              />
              Reset
            </>
          </button>
          <p className="limit">set time limit</p>
          <button onClick={this.handleIncrementClick} className="button">
            +
          </button>
          <p className="para">{timerLimit}</p>
          <button onClick={this.handleDecrementClick} className="button">
            -
          </button>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
