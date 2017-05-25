import React from 'react';

class AddGuest extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      newGuest: 'Put new guest in here'
    }

    this.changeGuestName = this.changeGuestName.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.addGuest(this.state.newGuest);
    this.setState({
      newGuest: ''
    })
  }

  changeGuestName(event) {
    this.setState({
      newGuest: event.target.value
    })
  }

  render() {
    return (
      <div>
        <input value={this.state.newGuest}
          onChange={this.changeGuestName}/>
        <button onClick={this.handleClick}>Add Guest</button>
      </div>
    )
  }
}

export default AddGuest
