var shell = require("shelljs");

shell.mkdir("../public");
shell.cp("-R", "build/*", "../public");
shell.cp("-R", "setupData/uploads", "../public");
