var shell = require("shelljs");

shell.cp("-R", "build/*", "../public");
