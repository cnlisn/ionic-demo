import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { StorageHelper } from '../../providers/db/StorageHelper';

import { Page_Map } from '../map/map';
import { Page_BaiDu_Map } from '../baiduMap/baiduMap';

import { ResMobileLawHelper } from '../_r/R.MobileLaw';
import { WebApiHelper } from '../../providers/helper/WebApiHelper';
import { ResHelper } from '../../providers/r/R';
import { HttpHelper } from '../../providers/helper/HttpHelper';
import { Http } from '@angular/http';
import {Page_home_myalert} from '../home/Alert/myalert';



declare var BMap;
declare var baidu_location;

declare var map;

@Component({
    templateUrl: 'home.html'
})
export class Page_home {
    R_MobileLaw: any;
    R: any;


    constructor(public nav: NavController,
        public actionSheetCtrl: ActionSheetController,
        public alertCtrl: AlertController,
        public storage: StorageHelper,
        public http: Http) {
        this.R_MobileLaw = new ResMobileLawHelper();
        this.R = new ResHelper();
    }
    click1() {
        // this.storage.GET("userinfo", "json").then(data => {
        this.storage.GET("userinfo", "").then(data => {
            let userinfo = data;
            alert("get=" + userinfo)
            console.log("userinfo=======" + userinfo);
            if (userinfo == "" || userinfo == null || userinfo.BiaoShi == 0) {
                // this.nav.push(Page_UserAuthen_Login);
            }
        });
    }

    click2() {
        this.storage.SET("userinfo", "123456789123456789");
        alert("set");
        console.log("set====123456789123456789");
    }

    click3() {
        this.storage.Remove("userinfo");
        alert("remove");
    }

    Map() {
        this.nav.push(Page_Map);
    }

    GetData() {
        console.log("GetData()");
        // this.nav.push(Page_BaiDu_Map);
        // console.log("url==" + WebApiHelper.GetUrl(this.R_MobileLaw.Api.UserService, "GetBasicInfo"));
        this.GetBasicInfo();
    }

    /**
    * 获取企业基本信息
    * @memberOf Page_user
    */
    GetBasicInfo() {
        let T = this;
        let options = {
            url: WebApiHelper.GetUrl(T.R_MobileLaw.Api.UserService, "GetBasicInfo"),
            data: {
                id: 1
            },
            success: function (data) {
                var json = data.json();


                if (json.Code == "1") {

                    console.log("JingDu==" + json.Message.JingDu);
                    console.log("WeiDu==" + json.Message.WeiDu);
                    var WeiDu = json.Message.WeiDu;
                    var JingDu = json.Message.JingDu;
                    var WeiDu1 = WeiDu.replace(/度/, ".").replace(/分/, "").replace(/秒/, "");
                    var JingDu1 = JingDu.replace(/度/, ".").replace(/分/, "").replace(/秒/, "");
                    var MingCheng = json.Message.MingCheng;

                    var Message = json.Message;
                    var DanWeiDiZhi = Message.DanWeiDiZhi;
                    var QiYeJianJie = Message.QiYeJianJie;

                    console.log("WeiDu==" + WeiDu1);
                    console.log("JingDu1==" + JingDu1);
                    console.log("MingCheng==" + MingCheng);
                    console.log("DanWeiDiZhi==" + DanWeiDiZhi);
                    console.log("QiYeJianJie==" + QiYeJianJie);

                    T.nav.push(Page_BaiDu_Map, { "WeiDu": WeiDu1, "JingDu": JingDu1, "MingCheng": MingCheng, "DanWeiDiZhi": DanWeiDiZhi, "QiYeJianJie": QiYeJianJie });
                }
                else {
                    alert("失败：" + json.Message);
                }
            }
        };

        HttpHelper.GET(T.http, options);
    }

    GetLocation() {
        // var map = new BMap.Map("containerh");
        // var point = new BMap.Point(116.331398, 39.897445);
        // map.centerAndZoom(point, 12);

        // var geolocation = new BMap.Geolocation();

        // geolocation.getCurrentPosition(function (r) {
        //     //todo
        //     var myIcon = new BMap.Icon("../../assets/icon/favicon.ico",new BMap.Size(30,20));
        //     var mk = new BMap.Marker(point,{icon:myIcon});

        //     // var mk = new BMap.Marker(r.point);
        //     map.addOverlay(mk);
        //     map.panTo(r.point);
        //     mk.addEventListener("click", function () {
        //         var opts = {
        //             width: 250,     // 信息窗口宽度    
        //             height: 100,     // 信息窗口高度    
        //             title: "位置信息" // 信息窗口标题   
        //         }
        //         var infoWindow = new BMap.InfoWindow("当前坐标：" + r.point.lng + ',' + r.point.lat, opts);  // 创建信息窗口对象   
        //         var point1 = new BMap.Point(r.point.lng, r.point.lat - (-0.01));
        //         map.openInfoWindow(infoWindow, point1);      // 打开信息窗口

        //     });

        // }, { enableHighAccuracy: true });

        //定位  
        // var geolocation = new BMap.Geolocation();
        // geolocation.getCurrentPosition(function (result) {

        //         var mk = new BMap.Marker(result.point);//创建一个覆盖物  
        //         map.addOverlay(mk);//增加一个标示到地图上  
        //         map.panTo(result.point);
        //         var latitude = result.point.lat;//获取到的纬度  
        //         var longitude = result.point.lng;//获取到的经度  

        //         alert("当前坐标："+latitude+","+longitude);

        // });
        this.dingwei();

    }

    dingwei() {
        var T = this;
        var map = new BMap.Map("containerh");          // 创建地图实例
        var point = new BMap.Point(120.77212439999998, 31.310937799999998);  // 创建点坐标
        map.centerAndZoom(point, 15);

        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function (pos) {
            console.log('lat: ' + pos.point.lat + ', lon: ' + pos.point.lng);
            var lat = pos.point.lat;
            var lon = pos.point.lng;
            console.log(lat);
            var new_point = new BMap.Point(lon, lat);
            map.centerAndZoom(new_point, 12);
            var marker = new BMap.Marker(new_point);  // 创建标注
            var icon1 = new BMap.Icon(T.R.Image.mapimg, new BMap.Size(20, 30), {
                // var icon1 = new BMap.Icon("../../assets/icon/map.png", new BMap.Size(20, 30), {
                anchor: new BMap.Size(10, 30)
            });
            marker.setIcon(icon1);
            map.addOverlay(marker);              // 将标注添加到地图中
            map.panTo(new_point);

        });
    }


    //上拉菜单
    presentActionSheet() {
        let actionSheet = this.actionSheetCtrl.create({
            title: '标题',
            buttons: [
                {
                    text: '删除',
                    role: 'destructive',
                    handler: () => {
                        console.log('删除 clicked');
                    }
                }, {
                    text: '分享',
                    handler: () => {
                        console.log('分享 clicked');
                    }
                }, {
                    text: '收藏',
                    role: 'cancel',
                    handler: () => {
                        console.log('收藏 clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    }

    showBaseAlert() {
        this.nav.push(Page_home_myalert);
        // this.presentConfirm();
    }

    

    //==============================
    

}