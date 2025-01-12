const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  getTotalTime: () => ipcRenderer.invoke('total-time')
});