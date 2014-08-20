var _ = require("lodash");
var fs = require("fs");
var path = require("path");
var LICENSES = require("./licenses.json");

var utils = require("./utils");

// Detect license in a content (LICENSE file)
var detect = function(content) {
    var sorted = _.chain(LICENSES)
    .map(function(lsc) {
        return {
            license: lsc,
            score: utils.score(content, lsc.title)
        }
    })
    .sortBy("score")
    .reverse()
    .first()
    .value();

    if (sorted.score < 0.3) return;
    return sorted.license;
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
