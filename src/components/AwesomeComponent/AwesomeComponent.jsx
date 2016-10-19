import React from 'react';

import GuestComponent from '../GuestComponent/GuestComponent.jsx';

require('./AwesomeComponent.css');

const h1Style = {
    color: 'Blue'
}
class AwesomeComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            guests: [
                {
                    key: 1,
                    name: 'Batman',
                },
                {
                    key: 2,
                    name: 'Commissioner Gordon',
                },
                {
                    key: 3,
                    name: 'Ashleigh'
                },
                {
                    key: 4,
                    name: 'Pepperoni'
                }
            ]
        }
    }

     render() {
        const guests = this.state.guests.map(guest => (
            <GuestComponent
                key={guest.key}
                guest={guest.name}
            />
        ))
        return (
            <div>
                <h1 style={h1Style}>DM-13 IS AWESOME!</h1>
                <div className="row">
                    <div className="one-half column">
                    <h5>Guest List</h5>
                    </div>
                    <div className="one-half column">
                    <h5> Star Wars People</h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default AwesomeComponent