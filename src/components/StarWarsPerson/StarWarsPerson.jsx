import React from 'react';

class StarWarsPerson extends React.Component {
    render() {
        console.log(this.props.params);
        
        return (
            <p>Star Wars Person Component!</p>
        )
    }
}

export default StarWarsPerson