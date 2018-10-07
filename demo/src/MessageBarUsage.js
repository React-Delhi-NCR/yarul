import React, { Component } from 'react'
import { MessageBar } from '../../src';

export default class MessageBarUsage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMessage: false,
            messagePosition: ''
        }
        this.openMessageBox = this.openMessageBox.bind(this);
        this.closeMessageBox = this.closeMessageBox.bind(this);
    }
  openMessageBox(messagePos) {
      return () => {
        this.setState({
            showMessage: true,
            messagePosition: messagePos
        })
      }
  }
  closeMessageBox() {
      this.setState({
          showMessage: false,
          messagePosition: ''
      })
  }
  render() {
    return (
      <div>
        <button onClick={this.openMessageBox('bottomRight')}>Bottom Right</button>
        <button onClick={this.openMessageBox('topLeft')}>Top Left</button>
        <MessageBar autoHideDuration={5000} onClose={this.closeMessageBox}  position={this.state.messagePosition} isOpen={this.state.showMessage} message='Hey World'   />
      </div>
    )
  }
}
