'use strict'
const app = require('app')
const BrowserWindow = require('browser-window')

require('crash-reporter').start()

let mainWindow = null

app.on('window-all-closed', function () {
  app.quit()
})

app.on('ready', function () {
  const Screen = require('screen')

  const size = Screen.getPrimaryDisplay().size

  mainWindow = new BrowserWindow({
    x: 0,
    y: 0,
    width: size.width,
    height: size.height,
    frame: false,
    show: true,
    transparent: true,
    resizable: false,
    'always-on-top': true
  })

  mainWindow.maximize()

  mainWindow.loadUrl(`file://${__dirname}/index.html`)
  mainWindow.on('closed', function () {
    mainWindow = null
  })
})
