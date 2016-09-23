import React from 'react'
import { render } from 'react-dom'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-2">
            <h1>Ayy Lmao!</h1>
          </div>
        </div>
      </div>
    )
  }
}

render(<App />, window.document.getElementById('app'))
