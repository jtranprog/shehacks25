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
        if (count > 0){
            showNotification();
        }
    }
}


function createMainWindow(){
    const mainWindow = new BrowserWindow({
        title: 'Electron',
        width: 3200,
        height: 2000,
        backgroundColor:'#FEE1E8' 
    });

    const startUrl = url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
    });

    mainWindow.loadURL('http://localhost:3000');
    setInterval(monitorActiveWindow, 60000); // Check every 1 min (60000secs)
}

app.whenReady().then(createMainWindow);