import React from 'react';


class GuestList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      guests: this.props.guests
    }
  }

  componentWillUpdate() {
     console.log('guest list mounting');
  }

  render() {
    const guestList = this.props.guests.map((guest, i) => {
      return <ul><li key={i}>{guest}</li></ul>
    })

    return (
      <ul>
        <li>{guestList}</li>
      </ul>
    )
  }

  componentDidMount() {
    console.log('guest list just finished mounting');
  }
}

export default GuestList
