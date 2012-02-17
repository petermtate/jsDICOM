var assert = require('assert');
var dicom = require('../');

describe("readFile", function() {
    it("shoud read without error", function() {
    	dicom.readFile("./data/dcm")
       assert.ok(true, "OK");
    });
});