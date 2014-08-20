var _ = require("lodash");
var fs = require("fs");
var path = require("path");
var LICENSES = require("./licenses.json");

// Detect license in a content (LICENSE file)
var detect = function(content) {
    return _.find(LICENSES, function(lsc) {
        return (content.indexOf(lsc.title) > -1);
    });
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

// Return license infos by id
var get = function(id) {
    return _.find(LICENSES, {'id': id})
};

module.exports = {
    IDS: _.pluck(LICENSES, "id"),
    get: get,
    list: list,
    detectFolder: detectFolder,
    detect: detect
};
