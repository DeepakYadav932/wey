const gui = require('gui')

const ChatBox = require('./chat-box')

const windowManager = require('../controller/window-manager')

class ChatWindow {
  constructor(channel, thread, bounds) {
    this.window = gui.Window.create({})
    this.window.setTitle(`${channel.account.name} | ${channel.name}`)
    this.chatBox = new ChatBox(this)
    this.window.setContentView(this.chatBox.view)
    this.window.setContentSize(bounds)

    this.chatBox.loadChannel(channel)

    windowManager.addWindow(this)
  }

  initWithConfig(config) {
    this.window.center()
    this.window.activate()
  }

  getConfig() {
    return {}
  }

  unload() {
    this.chatBox.unload()
  }
}

module.exports = ChatWindow
