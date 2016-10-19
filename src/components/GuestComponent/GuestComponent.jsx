import React from 'react';

class GuestComponent extends React.Component{
    shouldComponentUpdate(nextProps) {
      if (this.props.guest !== nextProps.guest) {
          return true;
      }
      return false;
    }


    render() {
        return <p>{this.props.guest}</p>
    }
}

export default GuestComponent;