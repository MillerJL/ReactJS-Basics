import React from 'react'
import { render } from 'react-dom'

import { Header } from "./components/Header"
import { Home } from "./components/Home"

class App extends React.Component {
  onGreet () {
    alert("Hello!")
  }

  render() {
    let user = {
      name: "Anna",
      initialAge: 24,
      hobbies: ["Sports", "Ayy Lmao", "Reading"]
    }
    return (
      <div className="container">
        <div className="row">
          <Header/>
        </div>
        <div className="row">
          <Home user={ user } greet={ this.onGreet }/>
        </div>
      </div>
    )
  }
}

render(<App />, window.document.getElementById('app'))
