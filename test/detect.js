var assert = require('assert');
var fs = require('fs');
var path = require('path');
var licenses = require('../lib');

describe('Detect', function () {
    it('should detect from string', function() {
        assert((licenses.detect(fs.readFileSync(path.join(__dirname, "./fixtures/mit/LICENSE")).toString()).id == "mit"));
    });

    it('should detect from folder', function(done) {
        licenses.detectFolder(path.join(__dirname, "./fixtures/mit"), function(err, license) {
            if (err) throw err;

            if (license.id != "mit") {
                throw "Invalid license";
            }

            done();
        });
    });
});