import { Component } from '@angular/core';
import { Http } from '@angular/http';
import {HttpHelper} from '../../providers/helper/HttpHelper';
import {WebApiHelper} from '../../providers/helper/WebApiHelper';
import { ResMobileLawHelper } from '../_r/R.MobileLaw';


import { ResHelper } from '../../providers/r/R';
import { AppVersion } from 'ionic-native';

@Component({
    templateUrl: 'user.html'
})
export class Page_user{
    R_MobileLaw :any;
    R: any;
     ApkInfo: any = {};

    constructor(public http:Http){
        
        this.R_MobileLaw=new ResMobileLawHelper();
        this.R = new ResHelper();

         console.log("url=="+ WebApiHelper.GetUrl(this.R_MobileLaw.Api.UserService, "apkinfo"));


        // this.GetApkInfo();
    }
    click1(){
        alert("click1-------------")
    }
    click2(){
        alert("click2-------------")
    }

    ionViewDidLoad(){
        // this.GetApkInfo();
    }

    click(){
        this.GetApkInfo();
    }
    /**
     * 获取apkInfo
     * @memberOf Page_user
     */
    GetApkInfo(){
        let T=this;
        let options = {
            url: WebApiHelper.GetUrl(T.R_MobileLaw.Api.UserService, "apkinfo"),
            data: {
                appId: T.R.String.App.AppId
            },
            success: function (data) {
                var json = data.json();

               
                if (json.Code == "1") {    
                    //  alert("成功："+json.Message);     
                    T.ApkInfo = json.Message;
                    let serverAppVersion = json.Message.AppVersion; //从服务端获取最新版本

                    //获取版本
                    AppVersion.getVersionNumber().then(function (version) {
                        //如果本地于服务端的APP版本不符合
                        if (version != serverAppVersion) {
                           alert("当前版本="+version+"  服务端版本="+serverAppVersion );
                        }
                        else {
                            alert("当前版本="+version+"  服务端版本="+serverAppVersion);
                        }
                    });
                    
                    //获取App名称
                    AppVersion.getAppName().then(function(name){
                        alert("AppName="+name);
                    });

                    //获取PackageName
                    AppVersion.getPackageName().then(function(packageName){
                        alert("PackageName="+packageName);
                    });

                    //获取VersionCode
                    AppVersion.getVersionCode().then(function(VersionCode){
                        alert("VersionCode="+VersionCode);
                    });
                }
                else {                 
                       alert("失败："+json.Message);
                }
            }
        };

        HttpHelper.GET(T.http, options);
    }
}