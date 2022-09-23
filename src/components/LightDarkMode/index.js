// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {status: true}

  onStatus = () => {
    this.setState(prevState => ({status: !prevState.status}))
  }

  render() {
    const {status} = this.state
    return (
      <div className="container">
        {status ? (
          <div className="lightContainer">
            <p>Click To Change Mode</p>
            <button className="button" type="button" onClick={this.onStatus}>
              Light Mode
            </button>
          </div>
        ) : (
          <div className="darkContainer">
            <p>Click To Change Mode</p>
            <button className="button" type="button" onClick={this.onStatus}>
              Dark Mode
            </button>
          </div>
        )}
      </div>
    )
  }
}
export default LightDarkMode
