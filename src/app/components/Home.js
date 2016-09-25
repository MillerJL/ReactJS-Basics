import React from 'react'

export class Home extends React.Component {
  constructor (props) {
    super()
    this.age = props.user.age
  }

  onMakeOlder () {
    this.age++
  }

  render () {
    return(
      <div>
        <hr/>
        <p>Your name is { this.props.user.name }, your age is {this.age}</p>
        <div>
          <h4>Hobbies</h4>
          <ul>
            { this.props.user.hobbies.map((hobby, index) => <li key={index}>{hobby}</li>) }
          </ul>
        </div>
        <button onClick={ () => this.onMakeOlder() } className="btn btn-primary">Make me older!</button>
        <hr/>
      </div>
    )
  }
}

Home.propTypes = {
  user: React.PropTypes.shape({
    name: React.PropTypes.string,
    age: React.PropTypes.number
  })
}
