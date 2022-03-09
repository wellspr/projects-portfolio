const fs = require("fs");

const file = require("./package.json");

file.scripts = {
    "start": "node build/js/server.js",
    "local": "node -r dotenv/config build/js/server.js dotenv_config_path=.env",
}

fs.writeFile("prod/package.json", JSON.stringify(file), err => {
    if (err) {
        console.log(err);
        return;
    }
});