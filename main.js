import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtener el directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Crear la ventana principal
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,  // Desactivar nodeIntegration por seguridad
      contextIsolation: true,  // Aislar el contexto entre renderer y main
      preload: path.join(__dirname, 'preload.js')  // Usar __dirname para cargar preload.js
    }
  });

  win.loadFile('index.html'); // Cargar archivo local o usar win.loadURL('https://www.google.com')
};

app.whenReady().then(() => {
  createWindow();

  ipcMain.on('abrir-url', () => {
    const url = 'https://www.google.com'; // Aquí puedes poner la URL que desees cargar
    const ventanaChrome = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: false,  // No permitir nodeIntegration
        contextIsolation: true,  // Aislar el contexto
      },
    });

    ventanaChrome.loadURL(url);  // Cargar la URL en la nueva ventana de Electron
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});