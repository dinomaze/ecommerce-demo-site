var shell = require("shelljs");

shell.rm("-rf", "build");
shell.rm("-rf", "../public/*.js");
shell.rm("-rf", "../public/*.css");
shell.rm("-rf", "../public/*.html");
shell.rm("-rf", "../public/*.json");
shell.rm("-rf", "../public/static");
