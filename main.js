const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let mainWindow;

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 400,
    height: 600,
    frame: false, // remove a barra padrão do Windows
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true, // mais seguro
      nodeIntegration: false
    }
  });

  mainWindow.loadFile('index.html');
});

// Eventos de controle da janela
ipcMain.on('minimize', () => mainWindow.minimize());
ipcMain.on('close', () => {
  if (mainWindow) mainWindow.close();
  console.log("Recebi o close!")
});
