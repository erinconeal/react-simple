import React from 'react';
import AddGuest from './AddGuest.jsx'
import GuestList from './GuestList.jsx'


class PartyList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      guests: ['Batman', 'Superman', 'Supergirl']
    }
    this.addGuest = this.addGuest.bind(this)
  }

  shouldComponentUpdate(nextProps, nextState) {
    let shouldRender = true
    const guests = nextState.guests;
      for (var i = 0; i < guests.length; i++) {
        for (var j = i+1; j < guests.length; j++) {
          if (guests[i] === guests[j]) {
            shouldRender = false
            guests.splice(--j, 1)
          }
        }
      }
    this.setState({
      guests: guests
    })

    return shouldRender  
  }

  addGuest(newGuest) {
    const newGuestList = this.state.guests;
    newGuestList.push(newGuest)
    this.setState({
      guests: newGuestList
    })
  }

  render() {

    return (
      <div>
        <h1>Party List!</h1>
        <GuestList guests={this.state.guests} />
        <AddGuest addGuest={this.addGuest}/>
      </div>
    )
  }
}

export default PartyList
