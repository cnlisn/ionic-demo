import { Geolocation, Device } from 'ionic-native';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ResMobileLawHelper } from '../_r/R.MobileLaw';

declare var BMap;
declare var baidu_location;

declare var map;

@Component({
    templateUrl: 'baiduMap.html'
})
export class Page_BaiDu_Map {

    @ViewChild('container') mapElement: ElementRef;

    R_MobileLaw: any;
    //   container: any;
    plat: any;
    constructor(public navParams: NavParams) {
        // this.plat=Device.device.platform;
        this.plat = Device.platform; //获取设备平台信息
        console.log("-------" + this.plat);

        this.R_MobileLaw = new ResMobileLawHelper();
        
    }

    GetParams(key){
        return this.navParams.get(key);
    }

    ionViewDidLoad() {
        console.log("----------WeiDu----------"+ this.GetParams('WeiDu'));
        console.log("----------JingDu----------"+ this.GetParams('JingDu'));
        console.log("----------MingCheng----------"+ this.GetParams('MingCheng'));
        console.log("----------DanWeiDiZhi----------"+ this.GetParams('DanWeiDiZhi'));
        console.log("----------QiYeJianJie----------"+ this.GetParams('QiYeJianJie'));

        var WeiDu=this.GetParams('WeiDu');
        var JingDu= this.GetParams('JingDu');
        var MingCheng= this.GetParams('MingCheng');
        var DanWeiDiZhi= this.GetParams('DanWeiDiZhi');
        var QiYeJianJie= this.GetParams('QiYeJianJie');

        this.LoadingMap(WeiDu,JingDu,MingCheng,DanWeiDiZhi,QiYeJianJie);
        // this.loadingMapAll() ;

        if (this.plat == "Android") {
            console.log(" Android");
        } else {
            console.log("no Android");
        }


    }

    LoadingMap(WeiDu,JingDu,MingCheng,DanWeiDiZhi,QiYeJianJie) {
        // 百度地图API功能
        var map = new BMap.Map("container");    // 创建Map实例
        // map.centerAndZoom(new BMap.Point(118.787081, 32.060573), 13);  // 初始化地图,设置中心点坐标和地图级别
        map.centerAndZoom(new BMap.Point(JingDu, WeiDu), 13);  // 初始化地图,设置中心点坐标和地图级别
        // map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
        map.setCurrentCity("南京");          // 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

        var point = new BMap.Point(JingDu, WeiDu);
         map.panTo(point);  
        var opts = {    
			width : 250,     // 信息窗口宽度    
			height: 100,     // 信息窗口高度    
			title : MingCheng // 信息窗口标题   
			}    
			var infoWindow = new BMap.InfoWindow("单位地址："+DanWeiDiZhi+"<br/>", opts);  // 创建信息窗口对象   
            var marker2 = new BMap.Marker(point);  	// 创建标注
		    map.addOverlay(marker2);                // 将标注添加到地图中
            
			marker2.addEventListener("click", function(){    

				// map.openInfoWindow(infoWindow, map.getCenter());      // 打开信息窗口
                var point1 = new BMap.Point(JingDu, WeiDu-(-0.01));
                map.openInfoWindow(infoWindow, point1);      // 打开信息窗口
			});

        // // 编写自定义函数,创建标注
        // function addMarker(point, label) {
        //     // var myIcon = new BMap.Icon("https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1488268657&di=33fee78fff8b83d11a5bbfb1d1532f58&src=http://img49.nipic.com/20131019/10262474_122700418000_1.gif",new BMap.Size(30,20));
        //     // var marker = new BMap.Marker(point,{icon:myIcon});
        //     var marker = new BMap.Marker(point);
        //     map.addOverlay(marker);
        //     marker.setLabel(label);
        //     // marker.addEventListener("click", attribute);
        // }

        // //获取覆盖物位置
        // function attribute(e) {
        //     var p = e.target;
        //     alert("marker的位置是" + p.getPosition().lng + "," + p.getPosition().lat);

        //     //纯文字信息窗口
        //     var opts = {
        //         width: 180,     // 信息窗口宽度
        //         height: 90,     // 信息窗口高度
        //         title: MingCheng, // 信息窗口标题
        //     }
        //     var infoWindow = new BMap.InfoWindow(DanWeiDiZhi, opts);  // 创建信息窗口对象 
        //     var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat + 0.02);
        //     map.openInfoWindow(infoWindow, point); //开启信息窗口 
        //     //  map.panTo(point);    
        // }
    }

    loadingMapAll() {
        // 百度地图API功能
        var map = new BMap.Map("container");    // 创建Map实例
        //  var map = new BMap.Map(this.mapElement.nativeElement);    // 创建Map实例
        map.centerAndZoom(new BMap.Point(118.787081, 32.060573), 11);  // 初始化地图,设置中心点坐标和地图级别

        map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
        map.setCurrentCity("南京");          // 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

        //获取覆盖物位置
        function attribute(e) {
            var p = e.target;
            // alert("marker的位置是" + p.getPosition().lng + "," + p.getPosition().lat);

            //纯文字信息窗口
            // var opts = {
            // width : 180,     // 信息窗口宽度
            // height: 90,     // 信息窗口高度
            // title : "海底捞王府井店" , // 信息窗口标题
            // // enableMessage:true,//设置允许信息窗发送短息
            // // message:"亲耐滴，晚上一起吃个饭吧？戳下面的链接看下地址喔~"
            // }
            // var infoWindow = new BMap.InfoWindow("地址：北京市东城区王府井大街88号乐天银泰百货八层", opts);  // 创建信息窗口对象  

            //图文混合信息窗口
            var sContent =
                "<h4 style='margin:0 0 5px 0;padding:0.2em 0'>天安门</h4>" +
                "<img style='float:right;margin:4px' id='imgDemo' src='http://n1.itc.cn/img8/wb/recom/2015/12/15/145014777550462464.jpeg' width='139' height='104' title='天安门'/>" +
                "<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>天安门坐落在中国北京市中心,故宫的南侧,与天安门广场隔长安街相望,是清朝皇城的大门...</p>" +
                "</div>";

            var infoWindow = new BMap.InfoWindow(sContent);  // 创建信息窗口对象   

            var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat + 0.02);
            map.openInfoWindow(infoWindow, point); //开启信息窗口

            //图片加载完毕重绘infowindow
            document.getElementById('imgDemo').onload = function () {
                infoWindow.redraw();   //防止在网速较慢，图片未加载时，生成的信息框高度比图片的总高度小，导致图片部分被隐藏
            }
        }

        // 编写自定义函数,创建标注
        function addMarker(point, label) {
            // var myIcon = new BMap.Icon("https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1488268657&di=33fee78fff8b83d11a5bbfb1d1532f58&src=http://img49.nipic.com/20131019/10262474_122700418000_1.gif",new BMap.Size(30,20));
            // var marker = new BMap.Marker(point,{icon:myIcon});
            var marker = new BMap.Marker(point);
            map.addOverlay(marker);
            marker.setLabel(label);
            marker.addEventListener("click", attribute);


        }

        var pointArray = new Array();

        // 随机向地图添加9个标注
        var bounds = map.getBounds();
        var sw = bounds.getSouthWest();
        var ne = bounds.getNorthEast();
        var lngSpan = Math.abs(sw.lng - ne.lng);
        var latSpan = Math.abs(ne.lat - sw.lat);
        for (var i = 0; i < 10; i++) {
            var point = new BMap.Point(sw.lng + lngSpan * (Math.random() * 0.7), ne.lat - latSpan * (Math.random() * 0.7));
            var label = new BMap.Label("我是id=" + i, { offset: new BMap.Size(20, -10) });
            pointArray[i] = point;
            addMarker(point, label);
        }

        //让所有点在视野范围内
        map.setViewport(pointArray);
    }
}