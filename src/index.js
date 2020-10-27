const { app, BrowserWindow, Menu } = require('electron');
const url = require('url');
const path = require('path');

if(process.env.NODE_ENV !== 'production'){
    require('electron-reload')(__dirname, {
    })
}


let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({});
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'views/index.html'),
        protocol: 'file',
        slashes: true
    }));

    Menu.buildFromTemplate();
});


const templateMenu = [
{
    label: 'File',
    submenu: [
        {
            label: 'Configuración 1',
            acceletator: ' Atajo'
        }
    ]
}
];