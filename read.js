const fs = require("fs");

fs.readFile("./readme.md",(err, content) => {
    if(err) {
        throw err;

        return;
    }

    console.log(content);
} );

console.log("Auslesen einer Datei");    