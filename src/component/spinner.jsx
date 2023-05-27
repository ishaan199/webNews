import React, { Component } from 'react'
import Loading from '../component/loading.gif'
export class spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={Loading} alt="Loading" />
      </div>
    )
  }
}

export default spinner
