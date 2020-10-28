const { app, BrowserWindow, Menu } = require("electron");
const url = require("url");
const path = require("path");
const { createPublicKey } = require("crypto");
const net = require("net");
const infoSensor = require("./models/infoSensor");


if (process.env.NODE_ENV !== "production") {
  require("electron-reload")(__dirname, {
    electron: path.join(__dirname, "../node_modules", ".bin", "electron"),
  });
}

let mainWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({});
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "views/index.html"),
      protocol: "file",
      slashes: true,
    })
  );

  const mainMenu = Menu.buildFromTemplate(templateMenu);
  Menu.setApplicationMenu(mainMenu);
});

//Aqui
const templateMenu = [
  {
    label: "File",
    submenu: [
      {
        label: "Configuración 1",
        acceletator: " Atajo",
        click() {},
      },
    ],
  },
];
var actualizacionSensor;

//Creo el server con su websocket.
const client = net.createConnection({port:9898}, () => {
    client.write('Del cliente: hola, este es el cliente');
});

var iterador = 1;

client.on('data', (data) => {
    console.log(data.toString());
    if(iterador > 5) client.end();
    iterador++;
});

client.on('end', () =>{
    console.log('Del cliente: me desconecté del servidor.');
})