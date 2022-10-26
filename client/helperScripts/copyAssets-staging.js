var shell = require("shelljs");

shell.cp("-R", "build/*", "../public");
shell.cp("-R", "build/index-staging.html", "../public/index.html");
