import { app, BrowserWindow, ipcMain } from 'electron';

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences:{
      nodeIntegration: true,     // Permite usar require, import, etc.
      contextIsolation: false, 
    }
  });

  win.loadFile('index.html');
};

app.whenReady().then(() => {
  createWindow();

  // Escucha el mensaje desde renderer.js para abrir la calculadora
  ipcMain.on('abrir-calculadora', () => {
    abrirCalculadora();
  });
});

// Función para abrir la ventana de la calculadora
function abrirCalculadora() {
  const ventanaCalculadora = new BrowserWindow({
    width: 400,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
    }
  });

  ventanaCalculadora.loadURL('https://midu.dev');
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
