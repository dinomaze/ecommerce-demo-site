var shell = require("shelljs");

shell.cp("-R", "build/setupData/htmlFiles/index-testing.html", "public/index.html");
