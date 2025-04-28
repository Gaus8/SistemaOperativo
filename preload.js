const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  abrirUrl: () => ipcRenderer.send('abrir-url'),  // Llamar al evento que abre la URL
  sendLoginSuccess: () => ipcRenderer.send('login-success') , // Login exitoso
  abrirBlock: () => ipcRenderer.send('abrir-block'),
  abrirTerminal: () => ipcRenderer.send('abrir-terminal'),
  abrirCalculadora: () => ipcRenderer.send('abrir-calculadora'),
  apagarSO: () =>ipcRenderer.send('apagar-sistema'),
  cerrarSO: () =>ipcRenderer.send('cerrar-sesion'),

});