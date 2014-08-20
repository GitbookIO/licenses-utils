var assert = require('assert');
var fs = require('fs');
var path = require('path');
var licenses = require('../lib');


var testFolder = function(folder, result, done) {
    licenses.detectFolder(folder, function(err, license) {
        if (err) throw err;

        if (!license || license.id != result) {
            throw "Invalid license";
        }

        done();
    });
}

describe('Detect', function () {
    it('should detect from string', function() {
        assert((licenses.detect(fs.readFileSync(path.join(__dirname, "./fixtures/mit/LICENSE")).toString()).id == "mit"));
    });

    it('should detect MIT', function(done) {
        testFolder(path.join(__dirname, "./fixtures/mit"), "mit", done);
    });

    it('should detect Apache', function(done) {
        testFolder(path.join(__dirname, "./fixtures/apache"), "apache-2", done);
    });
});