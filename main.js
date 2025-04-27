import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";
import { fileURLToPath } from "url";
import { spawn } from "child_process";

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
      nodeIntegration: false, // Desactivar nodeIntegration por seguridad
      contextIsolation: true, // Aislar el contexto entre renderer y main
      preload: path.join(__dirname, "preload.js"), // Usar __dirname para cargar preload.js
    },
  });

  mainWindow.loadFile(path.join(__dirname, 'index.html')); // Abrir ventana principal al login exitoso
};

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

    ventanaChrome.loadURL(url); // Cargar la URL en la nueva ventana de Electron
  });

  ipcMain.on("abrir-block", () => {
    const rutaBlockNotas = "C:\\Users\\Asus\\Documents\\SISTEMAS\\Notepad\\notepad++.exe"; // Ruta al Bloc de Notas Portable
    spawn(rutaBlockNotas, {
      detached: true,
      stdio: "ignore",
    }).unref(); // Ejecuta el archivo sin esperar que termine
  });

  ipcMain.on("abrir-terminal", () => {
    const rutaTerminal = "C:\\Users\\Asus\\Documents\\SISTEMAS\\CommandPromptPortable\\CommandPromptPortable.exe"; // Ruta al Bloc de Notas Portable
    spawn(rutaTerminal, {
      detached: true,
      stdio: "ignore",
    }).unref(); // Ejecuta el archivo sin esperar que termine
  });

  ipcMain.on("abrir-terminal", () => {
    const rutaTerminal = "C:\\Users\\Asus\\Documents\\SISTEMAS\\CommandPromptPortable\\CommandPromptPortable.exe"; // Ruta al Bloc de Notas Portable
    spawn(rutaTerminal, {
      detached: true,
      stdio: "ignore",
    }).unref(); // Ejecuta el archivo sin esperar que termine
  });

  ipcMain.on("abrir-calculadora", () => {
    const rutaCalculadora = "C:\\Users\\Asus\\Documents\\SISTEMAS\\QalculatePortable\\QalculatePortable.exe"; // Ruta al Bloc de Notas Portable
    spawn(rutaCalculadora, {
      detached: true,
      stdio: "ignore",
    }).unref(); // Ejecuta el archivo sin esperar que termine
  });
});


app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
