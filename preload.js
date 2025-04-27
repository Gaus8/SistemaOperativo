const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  abrirUrl: () => ipcRenderer.send('abrir-url'),  // Llamar al evento que abre la URL
  sendLoginSuccess: () => ipcRenderer.send('login-success') // Confirmacion de inicio exitoso de login 
    
});