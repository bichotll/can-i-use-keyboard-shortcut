import React from 'react'

import KeysPressed from './../../services/keys-pressed'

import CurrentKeys from './CurrentKeys/CurrentKeys'
import WhereUsed from './WhereUsed/WhereUsed'

import './Index.scss'

export default React.createClass({
  componentWillMount () {
    KeysPressed.startListener(this.setPressedKeys)
  },

  getInitialState () {
    return {
      pressedKeys: [
        'ctrl',
        'c'
      ]
    }
  },

  setPressedKeys (pressedKeys) {
    this.setState({
      pressedKeys: pressedKeys
    })
  },

  clearPressedKeys () {
    KeysPressed.clearCurrentPressedKeys()
    this.setState({
      pressedKeys: []
    })
  },

  render: function () {
    return (<div>
      <CurrentKeys pressedKeys={this.state.pressedKeys} clearPressedKeys={this.clearPressedKeys} />
      <hr />
      <WhereUsed pressedKeys={this.state.pressedKeys} />
    </div>)
  }
})
