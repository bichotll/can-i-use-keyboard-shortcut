import React from 'react'

import './CurrentKeys.scss'

let Key = React.createClass({
  render: function () {
    return (
      <div className='key'>{this.props.keyPressed}</div>
    )
  }
})

export default React.createClass({
  handleClearCombination () {
    this.props.clearPressedKeys()
  },

  render: function () {
    let keysNode = this.props.pressedKeys.map((key) =>
      <Key keyPressed={key} />
    )

    return (<div className='current-keys'>
      <h2>Current keys pressed</h2>
      <div className='current-keys-pressed'>
        {keysNode}
      </div>
      <div className='text-muted'>
        <strong>Make it work:</strong> You can either type combination (holding) <br />
        or press the keys one after the other (so you don't fire a shortcut event).
      </div>
      <br />
      <div onClick={this.handleClearCombination} className='btn btn-secondary'>CLEAR COMBINATION</div>
    </div>)
  }
})
