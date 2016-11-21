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

      <div className='current-keys-pressed'>
        <h1>Can I use...this keyboard shortcut?</h1>
        <div className='pressed-keys'>
          {keysNode}
        </div>
        <h5>(Press one key after another)</h5>
      </div>
      <br />
      <div onClick={this.handleClearCombination} className='btn btn-secondary'>CLEAR COMBINATION</div>
    </div>)
  }
})
