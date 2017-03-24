const fs = require("fs");

fs.readFile('./readme.md',(err, content) => {
    if(err) {
        console.error(err.message);

        return;
    }

    console.log(content.toString("utf-8"));
});

console.log("Auslesen einer Datei");    
