var fs = require('fs');

fs.readdir("./", function (err, files) {
    if (err) {
        console.log(err);
    }

    console.log(files);
});

console.log("Verzeichnis auslesen");