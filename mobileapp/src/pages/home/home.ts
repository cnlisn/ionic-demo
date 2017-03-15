import { Component } from '@angular/core';

// import { NavController } from 'ionic-angular';
// import { MyPlugin } from '../../../plugins/com.test.helloworld/www/MyPlugin';
// declare var MyPlugin: any;
// declare let cordova: any
// import {MyPlugin} from 'ionic-native';

declare var MyPlugin: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // constructor(public navCtrl: NavController) {

  // }
  testPlugin() {
    // alert("hhhhhhhhhh");
    MyPlugin.coolMethod("func传来的参数",
    function(msg){
      alert("成功了")
    },
    function(msg){
      alert("失败了")
    });

  }

  callFunc1() {
    // cordova.plugins.MyPlugin.func1("func传来的参数",
    // function(msg){
    //   alert("成功了")
    // },
    // function(msg){
    //   alert("失败了")
    // });
  }

  callFunc2() {

  }

  callFunc3() {

  }

}
