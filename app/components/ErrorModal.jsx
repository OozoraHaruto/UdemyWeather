import React from 'react';
import PropTypes from 'prop-types';

class ErrorModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'Error'
    }
  }

  PropTypes = {
    title: PropTypes.string,
    msg: PropTypes.string.isRequired
  }

  componentDidMount(){
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  }

  render(){
    var {title, msg} = this.props

    return(
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{msg}</p>
        <p>
          <button className="expanded hollow button" data-close="">Okay</button>
        </p>
      </div>
    )
  }
}
module.exports = ErrorModal
