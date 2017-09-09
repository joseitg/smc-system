const ipcRenderer = require('electron').ipcRenderer;
const $= require('jquery');


$('#btn-minimize').click((e)=>{
    e.preventDefault();
    ipcRenderer.send('btn-minimize');
});

$('#btn-maximize').click((e)=>{
    e.preventDefault();
    ipcRenderer.send('btn-maximize');
});

$('#btn-close').click((e)=>{
    e.preventDefault();
    ipcRenderer.send('btn-close');
});

