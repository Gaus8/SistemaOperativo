import { app, BrowserWindow, ipcMain } from 'electron';
import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtener el directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

  win.loadFile('index.html');
};

app.whenReady().then(() => {
  createWindow();

  ipcMain.on('abrir-chrome-portable', () => {
    const rutaChromePortable = 'C:\\Users\\Asus\\Documents\\SISTEMAS\\GoogleChromePortable\\GoogleChromePortable.exe';
    spawn(rutaChromePortable, {
      detached: true,
      stdio: 'ignore'
    }).unref();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});