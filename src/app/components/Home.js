import React from 'react'

export class Home extends React.Component {
  constructor (props) {
    super()
    this.state = {
      age: props.user.initialAge,
      status: 0
    }
  }

  onMakeOlder () {
    this.setState({
      age: this.state.age += 3
    })

    setTimeout(() => {
      this.setState({
        status: 1
      })
    }, 3000)
  }

  render () {
    return(
      <div>
        <hr/>
        <p>Your name is { this.props.user.name }, your age is { this.state.age }</p>
        <p>Status: { this.state.status } </p>
        <div>
          <h4>Hobbies</h4>
          <ul>
            { this.props.user.hobbies.map((hobby, index) => <li key={index}>{hobby}</li>) }
          </ul>
        </div>
        <button onClick={ () => this.onMakeOlder() } className="btn btn-primary">Make me older!</button>
        <hr/>
        <button onClick={ this.props.greet } className="btn btn-default">Greet</button>
      </div>
    )
  }
}

Home.propTypes = {
  user: React.PropTypes.shape({
    name: React.PropTypes.string,
    initialAge: React.PropTypes.number
  }),
  greet: React.PropTypes.func
}
