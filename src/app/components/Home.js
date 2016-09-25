import React from 'react'

export class Home extends React.Component {
  render () {
    return(
      <div>
        <p>In a new Component!</p>
        <p>Your name is { this.props.user.name }</p>
        <div>
          <h4>Hobbies</h4>
          <ul>
            { this.props.user.hobbies.map((hobby, index) => <li key={index}>{hobby}</li>) }
          </ul>
        </div>
      </div>
    )
  }
}
