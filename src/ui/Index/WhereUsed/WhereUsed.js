import React from 'react'

import ShortcutDictionary from './../../../services/shortcut-dictionary'

import './WhereUsed.scss'

export default React.createClass({
  render () {
    let keyboardShortcutsUses = ShortcutDictionary.getUses(this.props.pressedKeys)
    let keyboardShortcutsUsesNode

    if (!keyboardShortcutsUses.length) {
      keyboardShortcutsUsesNode = (
        <div className='use list-group-item list-group-item-action'>
          <h5 className='list-group-item-heading text-center'>
            Not shortcuts found.
          </h5>
        </div>
      )
    } else {
      keyboardShortcutsUsesNode = keyboardShortcutsUses.map((keyboardShortcutsUse) => {
        return (
          <div className='use list-group-item list-group-item-action'>
            <h5 className='list-group-item-heading'>
              <div className='platform'>
                {keyboardShortcutsUse.platform}
              </div>
              {keyboardShortcutsUse.name}
            </h5>
            <p className='list-group-item-text'>
              {keyboardShortcutsUse.shortcut.description}
            </p>
          </div>
        )
      })
    }

    return (<div className='where-used'>
      <h2>Where this shortcut is used</h2>
      <div className='use-list list-group'>
        {keyboardShortcutsUsesNode}
      </div>

    </div>)
  }
})
