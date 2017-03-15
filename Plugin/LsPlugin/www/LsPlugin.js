var exec = require('cordova/exec');
var LsPlugin = function() {};
// LsPlugin.prototype.FangFa1Method = function(arg0, success, error) {
LsPlugin.prototype.FangFa1Method = function(arg0, success, error) {
    exec(success, error, "LsPlugin", "FangFa1Method", [arg0]);
};

LsPlugin.prototype.func1 = function(arg0, success, error) {

    exec(success, error, "LsPlugin", "func1", [arg0]);
};

LsPlugin.prototype.func2 = function(arg0, arg1, success, error) {

    exec(success, error, "LsPlugin", "func2", [arg0, arg1]);
};

LsPlugin.prototype.func3 = function(success, error) {

    exec(success, error, "LsPlugin", "func3", []);
};

var lsPlugin = new LsPlugin();
module.exports = lsPlugin;