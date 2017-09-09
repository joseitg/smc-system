const electron = require('electron');
const {app, BrowserWindow} = electron;
app.on('ready', ()=>{
    var mainWindow = new BrowserWindow({
        show: true,
        // transparent: true
    })

    mainWindow.loadURL('file://'+__dirname + '/src/client/index.html');
});