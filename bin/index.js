#!/usr/bin/env node

if(process.argv.includes("--version")||process.argv.includes("-v")) {
    console.log(require("../package.json").version);
} else {
    console.log(`nodejs_install_test v${require("../package.json").version} - started!`);
    const Mocha = require("mocha");
    const mocha = new Mocha({});
    mocha.addFile("./better_sqlite3.test.js");
    mocha.run();
}

