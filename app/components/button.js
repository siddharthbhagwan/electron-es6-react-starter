import React from 'react';

class Button extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <button type='button' className='btn btn-success' onClick={this.props.onClick} >Connect to Server</button>
    )
  }

}

export default Button;