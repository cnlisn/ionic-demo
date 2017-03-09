import { Component } from '@angular/core';
import { NavController,NavParams} from 'ionic-angular';

import { ResMobileLawHelper } from '../_r/R.MobileLaw';

import {Page_home} from '../home/home';
import {Page_todo} from '../todo/todo';
import {Page_warning} from '../warning/warning';
import {Page_user} from '../user/user';


// import { StorageHelper } from '../../providers/db/StorageHelper';
 

@Component({
    templateUrl: 'page3.html'
})
export class Page3{
    
    pageHome:any =Page_home;
    pageTodo:any =Page_todo;
    pageUser:any =Page_user;
    pageWarning:any =Page_warning;

    mySelectedIndex:number;
    R_MobileLaw: any;

    // constructor(public nav:NavController,public navParams:NavParams){
    constructor(public nav:NavController,public navParams:NavParams){
        // this.mySelectedIndex = navParams.data.tabIndex ||0;
        this.mySelectedIndex = 2;
        this.R_MobileLaw=new ResMobileLawHelper();
    }

    click(){
        // alert("fffffff");
         
    }


       
    ionViewDidLoad(){
		console.log("1.0 ionViewDidLoad 当页面加载的时候触发，仅在页面创建的时候触发一次，如果被缓存了，那么下次再打开这个页面则不会触发");
	}
	ionViewWillEnter(){
		console.log("2.0 ionViewWillEnter 顾名思义，当将要进入页面时触发");

        // this.storage.GET("userinfo","json").then(data =>{
        //     let userinfo = data;
        //     console.log("userinfo="+userinfo);   
        //     alert("userinfo="+userinfo);                    
        // });

        // this.storage.GET("userinfo", "json").then(data => {
        //     let userinfo = data;
        //     console.log("userinfo======="+userinfo);
        //     if (userinfo == "" || userinfo == null || userinfo.BiaoShi == 0) {
        //         // this.nav.push(Page_UserAuthen_Login);
        //     }
        // });
	}
	ionViewDidEnter(){
		console.log("3.0 ionViewDidEnter 当进入页面时触发");
	}
	ionViewWillLeave(){
		console.log("4.0 ionViewWillLeave 当将要从页面离开时触发");
	}
	ionViewDidLeave(){
		console.log("5.0 ionViewDidLeave 离开页面时触发");
	}
	ionViewWillUnload(){
		console.log("6.0 ionViewWillUnload 当页面将要销毁同时页面上元素移除时触发");
	}

    ionViewCanEnter(){
        console.log("ionViewCanEnter");
    }

    ionViewCanLeave(){
        console.log("ionViewCanLeave");
    }
    
}