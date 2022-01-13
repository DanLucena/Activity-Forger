'use strict'

import { app, protocol, BrowserWindow, screen, globalShortcut } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer'
import os from 'os';

const isDevelopment = process.env.NODE_ENV !== 'production'
const size = 540;
const animationSpeed = 15;
let isOpen = true;

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])

async function createWindow() {
  // Create the browser window.
  const {height, width} = screen.getPrimaryDisplay().workAreaSize;
  let isHide = false;

  const win = new BrowserWindow({
    width: size,
    height: height,
    x: width - size,
    y: 0,
    alwaysOnTop: true,
    frame: false,
    resizable: false,
    skipTaskbar: true,
    webPreferences: {
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION
    }
  })

  globalShortcut.register('F11', () => {
    if(os.platform() === 'win32') {
      animationInWindowsOS();
      win.blur();
    }else{
      isOpen ? win.hide() : win.show();
    }
    isOpen = !isOpen;
  });

  function animationInWindowsOS(){
    if(isOpen){
      let animationClose = setInterval(() => { 
        (win.getPosition()[0] < width && !isOpen)
          ? win.setPosition(win.getPosition()[0] + animationSpeed, 0, true)
          : hideWindow(animationClose);
      }, 1);
    } else {
      showWindow();
      let animationOpen = setInterval(() => {
        (win.getPosition()[0] > width - size && isOpen)
          ? win.setPosition(win.getPosition()[0] - animationSpeed, 0, true) 
          : clearInterval(animationOpen);
      }, 1);
    }
  }

  function hideWindow(animationClose){
    if(!isHide && !isOpen){
      isHide = true;
      win.hide();
    }
    clearInterval(animationClose); 
  }

  function showWindow(){
    if(isHide){
      isHide = false;
      win.show();
    }
  }

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
  }
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installExtension(VUEJS_DEVTOOLS)
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }
  createWindow()
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}
