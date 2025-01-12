const {app, BrowserWindow,Notification} = require('electron');
const url = require('url');

const path = require("path");
const NOTIFICATION_TITLE = 'Reminder Notification';
const NOTIFICATION_BODY = 'get back on topic';
let count = 0;

function showNotification () {
    const notification = new Notification({ 
        title: NOTIFICATION_TITLE, 
        body: NOTIFICATION_BODY,
        icon: path.join(__dirname,'sonny.png'),
        actions: [
            {
              type: 'button',
              text: 'Open VSCode', // Action text
              click: () => {
                // Logic when button is clicked (could open VSCode or perform any action)
                require('child_process').exec('code');
                console.log('Opening VSCode...');
                // For example, you could open VSCode via a system command:
                // require('child_process').exec('code');
              }
            }
          ]
        })

    notification.show();
}

// Function to monitor active window
async function monitorActiveWindow() {
    const { activeWindow } = await import('get-windows'); // Dynamically import
    const activeWin = await activeWindow();
    if(activeWin?.owner?.name?.toLowerCase().includes("code")) {
        count = 0;
        console.log(`good`);
    }else{
        count++;
        console.log(`bad`);
        if (count > 5){ // 5 checks in a row on a different app(5 mins)
            showNotification();
        }
    }
}


let mainWindow;

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 3200,
    height: 2000,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
    },
  });
    mainWindow.loadURL('http://localhost:3000');
    setInterval(monitorActiveWindow, 60000); // Check every 1 min (60000secs)

}

app.whenReady().then(createMainWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
