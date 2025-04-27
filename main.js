import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtener el directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ventanas
let mainWindow;
let loginWindow;

// Crear la ventana login
const createLoginWindow = () => {
  loginWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,  // Desactivar nodeIntegration por seguridad
      contextIsolation: true,  
      preload: path.join(__dirname, 'preload.js')  
    }
  });

  loginWindow.loadFile(path.join(__dirname, 'login.html')); // Cargar el archivo HTML para la ventana de login

  loginWindow.on('closed', () => {
    loginWindow = null;
  });
};

// Crear la ventana principal
const createMainWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,  // Desactivar nodeIntegration por seguridad
      contextIsolation: true,  // Aislar el contexto entre renderer y main
      preload: path.join(__dirname, 'preload.js')  // Usar __dirname para cargar preload.js
    }
  });


  mainWindow.loadFile(path.join(__dirname, 'index.html')); // Cargar archivo para la ventana principal

  mainWindow.on('closed', () => {
  mainWindow = null;
  });
};


// Al iniciar la aplicación, primero se muestra la ventana de login
app.whenReady().then(() => {
  createLoginWindow();  // Crear la ventana de login

   // Cuando es exitoso el login, envia a la ventana principal
   ipcMain.on('login-success', () => {
    loginWindow.close();  // Cerrar la ventana de login
    createMainWindow();   // Crear la ventana principal
  });


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