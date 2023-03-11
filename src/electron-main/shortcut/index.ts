// @ts-ignore
const { app, globalShortcut } = require("electron");

// @ts-ignore
const initShortCut = () => {
  // globalShortcut.register('CommandOrControl+X', () => {
  //     console.log('CommandOrControl+X is pressed')
  // })
  // globalShortcut.register('g', () => {
  //     console.log('g')
  //     if(global.mainWindow){
  //         global.mainWindow.webContents.send('on-shortcut-event','g')
  //     }
  //
  // })
};
// @ts-ignore
const unInstallShortCut = () => {
  // 注销快捷键
  globalShortcut.unregister("CommandOrControl+X");
  globalShortcut.unregister("g");
  // 注销所有快捷键
  globalShortcut.unregisterAll();
};
module.exports = {
  initShortCut,
  unInstallShortCut,
};
