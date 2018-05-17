const titlebar = document.getElementById('titlebar');

/*
* Image control
*/
const imageControl = document.getElementById('imageControl');

const lockButton = document.getElementById('lockButton');
const openImageButton = document.getElementById('openImageButton');
const openUrlButton = document.getElementById('openUrlButton');
const deleteButton = document.getElementById('deleteButton');

/*
* Window control
*/
const windowControlWin = document.getElementById('windowControlWin');
const windowControlMac = document.getElementById('windowControlMac');

const minimizeButton = document.getElementById('minimizeButtonWin');
const closeButton = document.getElementById('closeButtonWin');

/*
* Other variables
*/
var locked = false;
var autoHideTitlebarInterval;

/*
* OS specific titlebar
*/
if (os.platform() === 'darwin') {
    imageControl.style.cssFloat = 'right';

    windowControlWin.style.display = 'none';
    windowControlMac.style.display = 'inline';
} else {
    imageControl.style.cssFloat = 'left';

    windowControlWin.style.display = 'inline';
    windowControlMac.style.display = 'none';
}

/*
* Showing & hiding the titlebar
*/
document.addEventListener('mousemove', (e) => {
    if (!locked) {
        clearInterval(autoHideTitlebarInterval);

        if (e.clientY <= titlebar.getBoundingClientRect().bottom + 5) {
            titlebar.style.opacity = 1;
            autoHideTitlebarInterval = setInterval(() => {
                if (!locked) {
                    titlebar.style.opacity = 0;
                }
            }, 10000);
        } else {
            titlebar.style.opacity = 0;
        }
    }
});

/*
* Image control functionality
*/
lockButton.addEventListener('click', () => {
    locked = !locked;

    if (locked) {
        lockButton.style.color = '#f8bd34';
        titlebar.style.opacity = 1;
    } else {
        lockButton.style.color = '#fff';
    }
});

openImageButton.addEventListener('click', showOpenImageDialog);

openUrlButton.addEventListener('click', () => {
    fadeToggle(urlTextbox, 250);
});

deleteButton.addEventListener('click', () => {
    deleteImage();
});

/*
* Window control functionality
*/
minimizeButton.addEventListener('click', () => {
    currentWindow.minimize();
});

closeButton.addEventListener('click', () => {
    currentWindow.close();
});