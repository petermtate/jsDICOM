
var assert = require('assert');
var fs = require('fs');

function DicomReader(buf){
    if(!(this instanceof DicomReader)){
        return new DicomReader(buf);
    }
    this.buf = buf;
    this.position = 0;
}

exports.DicomReader = DicomReader;

DicomReader.prototype = {
    readPrefix: function() {
        // Read DICM
        this.buf.readUInt8(128);
        this.buf.readUInt8(129);
        this.buf.readUInt8(130);
        this.buf.readUInt8(131);
        this.position = 132;
        
    },

    readHeader: function() {
        var group = this.buf.readUInt16LE(this.position);
    },

    readAttribute: function(){
        
    },

    readTag: function(){
        var group = readUInt16();
        var element = readUInt16();
        
    },

    readVR: function(){
        var s = buf.toString('ascii', this.position, this.position + 2);
        this.position += 2;
        return s;
    },

    readValueLength: function(){
        
    },

    readValue: function(){
        
    },

    readUInt16: function(){
        var n = this.buf.readUInt16LE(this.position);
        this.position += 2;
        return n;
    }

}
