var shell = require("shelljs");

shell.cp("-R", "build/setupData/htmlFiles/index.html", "public/index.html");
