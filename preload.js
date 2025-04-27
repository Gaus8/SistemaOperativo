const { contextBridge, ipcRenderer } = require('electron');

// Exponer solo las funciones que quieres que el renderer use
contextBridge.exposeInMainWorld('electron', {
  abrirChromePortable: () => ipcRenderer.send('abrir-chrome-portable'),
  
});