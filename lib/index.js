var fs = require("fs");
var path = require("path");
var LICENSES = require("./licenses.json");

// Detect license in a content (LICENSE file)
var detect = function(content) {
    var license = null;

    for (var i in LICENSES) {
        var lsc = LICENSES[i];

        if (content.indexOf(lsc.title) > -1) {
            license = lsc;
        }
    }

    return license;
};

// Try to detect license in a project
//
var detectFolder = function(folder, callback) {
    fs.readFile(path.resolve(folder, "LICENSE"), function(err, content) {
        if (err) return callback(err);

        callback(null, detect(content.toString()));
    });
};

// Return list of all licenses
var list = function() {
    return LICENSES
};

module.exports = {
    list: list,
    detectFolder: detectFolder,
    detect: detect
};
