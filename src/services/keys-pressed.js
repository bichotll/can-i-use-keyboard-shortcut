const KeyPressed = function () {
  this.currentPressedKeys = []

  this.lastTimeStamp = undefined

  this.startListener = function (callback) {
    document.addEventListener('keydown', (event) => {
      this.setCurrentPressedKey(event.key)

      callback(this.currentPressedKeys)
    })
  }

  this.setCurrentPressedKey = function (key) {
    if (((new Date() - this.lastTimeStamp) / 1000) > 1 ||
    this.currentPressedKeys.length > 5) {
      this.currentPressedKeys = []
      this.lastTimeStamp = new Date()
    }

    this.lastTimeStamp = new Date()

    this.currentPressedKeys.push(key.toString().toLowerCase())
  }

  this.clearCurrentPressedKeys = function () {
    this.currentPressedKeys = []
  }
}

export default new KeyPressed()
