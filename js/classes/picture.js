class Picture {
    constructor(picturePath) {
        this.path = path.resolve(picturePath);
    }

    isLocal() {
        return fs.existsSync(this.path);
    }

    isAsset() {
        let assetDirectory =  path.normalize(__dirname + '/assets');

        return this.path.startsWith(assetDirectory);
    }

    revealInFolder() {
        shell.showItemInFolder(this.path);
    }

    moveToTrash() {
        if (this.isLocal() && !this.isAsset()) {
            shell.moveItemToTrash(this.path);

            return true;
        } else {
            alert("This file doesn't exist or isn't local, cannot delete");

            return false;
        }
    }

    permaDelete() {
        if (this.isLocal() && !this.isAsset()) {
            fs.unlink(this.path, (err) => {
                if (err) {
                    alert("An error ocurred updating the file" + err.message);
                    console.log(err);
                    return false;
                }

                return true;
            });
        } else {
            alert("This file doesn't exist or isn't local, cannot delete");
            return false;
        }
    }

    copyPicture() {
        let image = nativeImage.createFromPath(this.path);

        clipboard.writeImage(image);
    }

    copyPicturePath() {
        clipboard.writeText(this.path);
    }
}