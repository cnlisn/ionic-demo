
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// declare var baidu_location;
declare var DiyiPlugin;
declare var LsPlugin;
declare var cordova;
@Component({
    templateUrl: 'testPlugin.html'
})
export class testPlugin {
    constructor(public nav: NavController) {

    }
    callFunc1() {
        cordova.plugins.LsPlugin.func1("callFunc1msg", function (msg1) {
            alert("callFunc1==" + msg1);
        }, function (msg2) {
            alert("callFunc1--" + msg2);
        });
    }
    callFunc2() {
        cordova.plugins.LsPlugin.func2("callFunc2msg1", "callFunc2msg2", function (msg3) {
            alert("callFunc2==" + msg3);
        }, function (msg4) {
            alert("callFunc2--" + msg4);
        });
    }
    callFunc3() {
        cordova.plugins.LsPlugin.func3("callFunc3msg", function (msg) {
            alert("callFunc3==" + msg);
        }, function (msg) {
            alert("callFunc3--" + msg);
        });
    }
    callFunc4() {
         cordova.plugins.LsPlugin.func2("callFunc2msg1", function (msg) {
            alert("callFunc2==" + msg);
        }, function (msg) {
            alert("callFunc2--" + msg);
        });
    }
    callFunc5() {
        cordova.plugins.LsPlugin.func5("callFunc5msg", function (msg) {
            alert("callFunc5==" + msg);
        }, function (msg) {
            alert("callFunc5--" + msg);
        });
    }

    lsFangFa1() {
        cordova.plugins.LsPlugin.FangFa1Method("eeeeeeeeeeee", function (msg) {
            alert("222222" + msg);
        }, function (msg) {
            alert("ssssss" + msg);
        });
    }
    calldiyi() {
        DiyiPlugin.diyiciFangFaMing("hhhhhhh", function (msg) {
            alert("00000" + msg);
        }, function (msg) {
            alert("1111" + msg);
        });
    }
}