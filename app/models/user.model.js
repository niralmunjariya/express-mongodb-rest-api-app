'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var Schema = mongoose.Schema;

var User = new Schema({
    firstName: String,
    lastName: String,
    mobileNumber: String,
    email: String
}, { timestamps: true });

module.exports = mongoose.model('User', User);