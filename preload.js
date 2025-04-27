const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  abrirUrl: () => ipcRenderer.send('abrir-url') , 
  abrirBlock: () => ipcRenderer.send('abrir-block'),
  abrirTerminal: () => ipcRenderer.send('abrir-terminal'),
  abrirCalculadora: () => ipcRenderer.send('abrir-calculadora')
});