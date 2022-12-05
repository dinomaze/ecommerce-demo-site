var shell = require("shelljs");

shell.cp("-R", "build/*", "../public");
shell.cp("-R", "setupData/uploads/*", "../public");
shell.cp("-R", "build/index-testing.html", "../public/index.html");
shell.rm(["build/index-testing.html", "build/index-staging.html"]);
