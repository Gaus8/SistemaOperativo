const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  abrirUrl: () => ipcRenderer.send('abrir-url') , 
  abrirBlock: () => ipcRenderer.send('abrir-block'),
  abrirTerminal: () => ipcRenderer.send('abrir-terminal')/// Llamar al evento que abre la URL
});