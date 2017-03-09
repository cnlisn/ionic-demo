                                                                                                                                            import { Component , ViewChild, ElementRef} from '@angular/core';
// import { NavController } from 'ionic-angular'; 
import { Geolocation , Device } from 'ionic-native';
import { ResHelper } from '../../providers/r/R';

declare var BMap;
declare var baidu_location;

declare var map;

@Component({
  templateUrl: 'map.html'
})
export class Page_Map {

 @ViewChild('container') mapElement: ElementRef;

  container: any;
  plat:any;
  R:any;
  constructor() {
  	// alert(Device.device.platform)
  	// this.plat=Device.device.platform;
      this.plat=Device.platform; //获取设备平台信息
      console.log("-------"+this.plat);
	  this.R = new ResHelper();
  }
	addMarker(point, index){  // 创建图标对象   ion-location  markers.png
					var myIcon = new BMap.Icon("ion-location", new BMap.Size(23, 25), {    
					// 指定定位位置。   
					// 当标注显示在地图上时，其所指向的地理位置距离图标左上    
					// 角各偏移10像素和25像素。您可以看到在本例中该位置即是   
					// 图标中央下端的尖角位置。    
					offset: new BMap.Size(10, 25),    
					// 设置图片偏移。   
					// 当您需要从一幅较大的图片中截取某部分作为标注图标时，您   
					// 需要指定大图的偏移位置，此做法与css sprites技术类似。    
					imageOffset: new BMap.Size(0, 0 - index * 25)   // 设置图片偏移    
				});      
				// 创建标注对象并添加到地图   
				var marker = new BMap.Marker(point, {icon: myIcon});    
				map.addOverlay(marker);    
	}   

    ionViewDidLoad() {
        // this.demoBaiduMap();
		// if(this.plat=="Android") {
		// 	console.log(" Android");
		// 	alert("android");
		// 	map = new BMap.Map("container");          // 创建地图实例
    	// 	var point = new BMap.Point(118.734, 32.007);  // 创建点坐标
    	// 	map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别
		// 	var marker2 = new BMap.Marker(point);  	// 创建标注
		//     map.addOverlay(marker2);                // 将标注添加到地图中

		// 	//等待两秒钟后，它会移动到新中心点
		// 	window.setTimeout(function(){  
		// 	    map.panTo(new BMap.Point(118.734, 32.015));    
		// 	}, 2000);

		// 	map.addControl(new BMap.NavigationControl());    //地图平移缩放控件
		// 	map.addControl(new BMap.ScaleControl());    
		// 	map.addControl(new BMap.OverviewMapControl());    
		// 	map.addControl(new BMap.MapTypeControl());    
		// 	map.setCurrentCity("北京"); // 仅当设置城市信息时，MapTypeControl的切换功能才能可用
		// }else{
			// console.log("no Android");
			// alert("no android ");
			// var map = new BMap.Map("container");          // 创建地图实例
			var map = new BMap.Map(this.mapElement.nativeElement);          // 创建地图实例
   			var point = new BMap.Point(118.734, 32.007);  // 创建点坐标
			map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别

			map.enableScrollWheelZoom();   //启用滚轮放大缩小，默认禁用
			map.enableContinuousZoom();    //启用地图惯性拖拽，默认禁用

			//单击获取点击的地址
			// var geoc = new BMap.Geocoder(); 
			// map.addEventListener("click", function(e){        
			// 	var pt = e.point;
			// 	geoc.getLocation(pt, function(rs){
			// 		var address = rs.address;
			// 		alert("当前点击地址信息="+address);
			// 	});        
			// }); 

			//信息窗口在地图上方的浮动显示HTML内容。信息窗口可直接在地图上的任意位置打开，
			//也可以在标注对象上打开（此时信息窗口的坐标与标注的坐标一致）。 
			//您可以使用InfoWindow来创建一个信息窗实例，注意同一时刻地图上只能有一个信息窗口处于打开状态。
			var opts = {    
			width : 250,     // 信息窗口宽度    
			height: 100,     // 信息窗口高度    
			title : "Hello"  // 信息窗口标题   
			}    
			var infoWindow = new BMap.InfoWindow("World", opts);  // 创建信息窗口对象    
			// map.openInfoWindow(infoWindow, map.getCenter());      // 打开信息窗口

			var marker2 = new BMap.Marker(point);  	// 创建标注
			// var icon1 = new BMap.Icon("../../assets/icon/map.png", new BMap.Size(20, 30), {
				var icon1 = new BMap.Icon(this.R.Image.mapimg, new BMap.Size(20, 30), {
                anchor: new BMap.Size(10, 30)
            });
            marker2.setIcon(icon1);
		    map.addOverlay(marker2);                // 将标注添加到地图中
			marker2.addEventListener("click", function(){    
				// alert("您点击了标注");    
				map.openInfoWindow(infoWindow, map.getCenter());      // 打开信息窗口
			});

			//可托拽的标注
			marker2.enableDragging();    
			marker2.addEventListener("dragend", function(e){    
			alert("当前位置：" + e.point.lng + ", " + e.point.lat);    
			});
			
			//内存释放
			// map.removeOverlay(marker2);    
			// marker2.dispose(); // 1.1 版本不需要这样调用


				var point1 = new BMap.Point(118.734, 32.022);  // 创建点坐标
				var myIcon = new BMap.Icon("markers.png", new BMap.Size(23, 25), {      
					offset: new BMap.Size(10, 25),        
					imageOffset: new BMap.Size(0, 0 - 1 * 25)   // 设置图片偏移    
				});      
				// 创建标注对象并添加到地图   
				var marker = new BMap.Marker(point1, {icon: myIcon});    
				map.addOverlay(marker);  



			//等待两秒钟后，它会移动到新中心点
			window.setTimeout(function(){  
			    map.panTo(new BMap.Point(118.734, 32.015));    
			}, 2000);

			//在地图上添加控件
			// map.addControl(new BMap.NavigationControl());    //地图平移缩放控件
			// map.addControl(new BMap.ScaleControl());   //比例尺控件 
			// map.addControl(new BMap.OverviewMapControl());    //缩略地图控件
			// map.addControl(new BMap.MapTypeControl());    //地图类型控件
			// map.setCurrentCity("南京"); // 仅当设置城市信息时，MapTypeControl的切换功能才能可用
			 
			// map.addControl( new BMap.GeolocationControl()); //定位控件

			//定义标注图标
			//通过Icon类可实现自定义标注的图标，下面示例通过参数MarkerOptions的icon属性进行设置，您也可以使用marker.setIcon()方法。
 
			 
			// 随机向地图添加10个标注    
			var bounds = map.getBounds();    
			var lngSpan = bounds.maxX - bounds.minX;    
			var latSpan = bounds.maxY - bounds.minY;    
			for (var i = 0; i < 10; i ++) {    
			var point1 = new BMap.Point(bounds.minX + lngSpan * (Math.random() * 0.7 + 0.15),    
										bounds.minY + latSpan * (Math.random() * 0.7 + 0.15));    
			this.addMarker(point1, i);    
			}


			Geolocation.getCurrentPosition().then(pos =>{
				console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
			});
		}
    // }

	

   demoBaiduMap() {
   	// alert(this.plat)
   	if(this.plat=="Android") {
   		var map = new BMap.Map(this.mapElement.nativeElement);          // 创建地图实例
	    var point = new BMap.Point(118.73400739999998,32.00764639999998);  // 创建点坐标
   		(<any>baidu_location).getCurrentPosition((successCallback) => {
   			// alert(successCallback.longitude)
	   	//	let data=JSON.parse(successCallback);
	   		let lon=successCallback.longitude;
	   		let lat=successCallback.latitude;
		    var pt = new BMap.Point(lon, lat);
		    map.centerAndZoom(pt,15);               // 初始化地图，设置中心点坐标和地图级别
		    var marker2 = new BMap.Marker(pt);  	// 创建标注
		    map.addOverlay(marker2);                // 将标注添加到地图中

	   	}, (failedCallback) => {
	   		// alert(failedCallback)
	   		console.log('failed');
	   	});
   	}else{
   		//地图初始化
		var map = new BMap.Map(this.mapElement.nativeElement);
		var point = new BMap.Point(118.73400739999998,32.00764639999998);  // 创建点坐标
    	map.centerAndZoom(point, 13);
  		Geolocation.getCurrentPosition().then(pos => {
	    	console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
	    	var lat = pos.coords.latitude;
	    	var lon = pos.coords.longitude;
	    	var ggPoint = new BMap.Point(lon,lat);
	    	//坐标转换完之后的回调函数
			var translateCallback = function (data){
			    if(data.status === 0) {
			        var marker = new BMap.Marker(data.points[0]);
			        map.addOverlay(marker);
			        // var label = new BMap.Label("转换后的百度坐标（正确）",{offset:new BMap.Size(20,-10)});
			        // marker.setLabel(label); //添加百度label
			        map.setCenter(data.points[0]);
			    }
			}

			setTimeout(function(){
			    var convertor = new BMap.Convertor();
			    var pointArr = [];
			      pointArr.push(ggPoint);
			      convertor.translate(pointArr, 1, 5, translateCallback)
			}, 1000);
  		});
   	}


  }
  // dingwei(){
  // 	var map = new BMap.Map(this.mapElement.nativeElement);          // 创建地图实例
  //   var point = new BMap.Point(120.77212439999998, 31.310937799999998);  // 创建点坐标
  //   map.centerAndZoom(point, 15);
  //    	Geolocation.getCurrentPosition().then(pos => {
	 //    	console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
	 //    	var lat = pos.coords.latitude;
	 //    	var lon = pos.coords.longitude;
	 //    	console.log(lat);
		// 	var new_point = new BMap.Point(lon,lat);
		// 	 map.centerAndZoom(new_point,12);
		// 	var marker = new BMap.Marker(new_point);  // 创建标注
		// 	map.addOverlay(marker);              // 将标注添加到地图中
		// 	map.panTo(new_point);

  // 		});

  // }
  // zhuan(){
	 //  	//地图初始化
		// var map = new BMap.Map(this.mapElement.nativeElement);
		// var point = new BMap.Point(120.77212439999998, 31.310937799999998);  // 创建点坐标
  //   	map.centerAndZoom(point, 15);
  // 		Geolocation.getCurrentPosition().then(pos => {
	 //    	console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
	 //    	var lat = pos.coords.latitude;
	 //    	var lon = pos.coords.longitude;
	 //    	 var ggPoint = new BMap.Point(lon,lat);

	 //   //  	 	map.centerAndZoom(ggPoint, 15);
		// 		// map.addControl(new BMap.NavigationControl());
		// 	 //    //添加gps marker和label
		// 	 //    var markergg = new BMap.Marker(ggPoint);
		// 	 //    map.addOverlay(markergg); //添加GPS marker
		// 	 //    var labelgg = new BMap.Label("未转换的GPS坐标（错误）",{offset:new BMap.Size(20,-10)});
		// 	 //    markergg.setLabel(labelgg); //添加GPS label

		// 	    //坐标转换完之后的回调函数
		// 	    var translateCallback = function (data){
		// 	      if(data.status === 0) {
		// 	        var marker = new BMap.Marker(data.points[0]);
		// 	        map.addOverlay(marker);
		// 	        // var label = new BMap.Label("转换后的百度坐标（正确）",{offset:new BMap.Size(20,-10)});
		// 	        // marker.setLabel(label); //添加百度label
		// 	        map.setCenter(data.points[0]);
		// 	      }
		// 	    }

		// 	    setTimeout(function(){
		// 	        var convertor = new BMap.Convertor();
		// 	        var pointArr = [];
		// 	        pointArr.push(ggPoint);
		// 	        convertor.translate(pointArr, 1, 5, translateCallback)
		// 	    }, 1000);
  // 		});

  // }

}
