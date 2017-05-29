import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
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
    var {title, msg} = this.props

    var modalMarkup = (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{msg}</p>
        <p>
          <button className="expanded hollow button" data-close="">Okay</button>
        </p>
      </div>
    )

    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal);

    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  }



  render(){
    return(
      <div></div>
    )

  }
}
module.exports = ErrorModal
