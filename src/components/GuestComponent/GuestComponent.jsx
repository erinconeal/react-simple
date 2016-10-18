import React from 'react';

class GuestComponent extends React.Component{
    render() {
        return <p>{this.props.guest}</p>
    }
}

export default GuestComponent;