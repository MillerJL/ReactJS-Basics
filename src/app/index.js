import React from 'react'
import { render } from 'react-dom'

import { Header } from "./components/Header"
import { Home } from "./components/Home"

class App extends React.Component {
  render() {
    let user = {
      name: "Anna",
      hobbies: ["Sports", "Ayy Lmao", "Reading"]
    }
    return (
      <div className="container">
        <div className="row">
          <Header/>
        </div>
        <div className="row">
          <Home user={user}>
            <p>That's it, that's everything</p>
          </Home>
        </div>
      </div>
    )
  }
}

render(<App />, window.document.getElementById('app'))
