const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  abrirUrl: () => ipcRenderer.send('abrir-url'),  // Llamar al evento que abre la URL
  sendLoginSuccess: () => ipcRenderer.send('login-success') , // Login exitoso
  abrirBlock: () => ipcRenderer.send('abrir-block'),
  abrirTerminal: () => ipcRenderer.send('abrir-terminal'),
  abrirCalculadora: () => ipcRenderer.send('abrir-calculadora') 
});