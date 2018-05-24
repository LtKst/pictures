Mousetrap.bind(['mod+s'], () => {
    console.log('save');
});

Mousetrap.bind(['mod+o'], () => {
    showOpenImageDialog();
});

Mousetrap.bind(['mod+shift+o'], () => {
    openFolder();
});

Mousetrap.bind(['mod+n'], () => {
    ipcRenderer.send('new-window');
});

if (os.platform() != 'darwin') {
    Mousetrap.bind(['mod+q'], () => {
        currentWindow.close();
    });
}