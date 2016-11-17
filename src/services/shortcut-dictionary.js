import shortcutLibrary from './../resources/keyboard-shortcuts/index'

const ShortcutDictionary = function () {
  this.getUses = function (shortcut) {
    let shortcutString = shortcut.join(' ')
    let uses = []

    shortcutLibrary.forEach((shortcutBook) => {
      shortcutBook.shortcuts.forEach((shortcutBookShortcut) => {
        let hasShortcut = shortcutBookShortcut.keys.find((shortcutBookShortcutKey) => {
          return shortcutBookShortcutKey === shortcutString
        })

        if (hasShortcut) {
          uses.push({
            platform: shortcutBook.platform,
            name: shortcutBook.name,
            link: shortcutBook.link,
            shortcut: shortcutBookShortcut
          })
        }
      })
    })

    console.debug('uses', uses)

    return uses
  }
}

export default new ShortcutDictionary()
