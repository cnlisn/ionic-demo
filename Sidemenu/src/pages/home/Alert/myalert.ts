import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AlertController } from 'ionic-angular';

@Component({
    templateUrl: 'myalert.html'
})
export class Page_home_myalert {

    constructor(public nav: NavController,
        public alertCtrl: AlertController) {

    }

    showBaseAlert() {
        let alert = this.alertCtrl.create({
            title: "标题",
            subTitle: "内容。。。。。。。。。。。。",
            buttons: ['OK']
        });
        alert.present();
    }

    presentConfirm() {
        let alert = this.alertCtrl.create({
            title: 'Confirm purchase',
            message: 'Do you want to buy this book?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Buy',
                    handler: () => {
                        console.log('Buy clicked');
                    }
                }
            ]
        });
        alert.present();
    }


    presentPrompt() {
        let alert = this.alertCtrl.create({
            title: 'Login',
            inputs: [
                {
                    name: 'username',
                    placeholder: 'Username'
                },
                {
                    name: 'password',
                    placeholder: 'Password',
                    type: 'password'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Login',
                    handler: data => {
                        //登录判断换 
                        console.log("data.username="+data.username+"  data.password="+data.password);
                        // if (User.isValid(data.username, data.password)) {
                        //     // logged in!
                        // } else {
                        //     // invalid login
                        //     return false;
                        // }
                    }
                }
            ]
        });
        alert.present();
    }
    //========================
}