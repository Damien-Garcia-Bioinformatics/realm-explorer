// Importing modules :
// app controls the application's event lifecycle,
// BrowserWindow creates and manages app windows.
const { app, BrowserWindow } = require('electron');

// Function to instantiate windows
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  win.loadFile('assets/html/index.html');
};

// Calls the function when the app is ready
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Closes the application whenever all windows are closed
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

