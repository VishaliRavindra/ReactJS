import {Component} from 'react'
import './index.css'

class Counter extends Component {
  state = {count: 0}
  onIncreement = () => {
    this.setState(prevState => {
      console.log(`previous State Value ${prevState.count}`)
      return {count: prevState.count + 1}
    })
  }
  onDecreement = () => {
    this.setState(prevState => {
      console.log(`prev State value ${prevState.count}`)
      return {count: prevState.count - 1}
    })
  }
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">Counter</h1>
        <p className="count">{count}</p>
        <div>
          <button className="button" onClick={this.onIncreement}>
            Increase
          </button>
          <button className="button" onClick={this.onDecreement}>
            Decrease
          </button>
        </div>
      </div>
    )
  }
}
export default Counter
