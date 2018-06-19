import { Component, ViewChild, ElementRef  } from '@angular/core';
import { NavController ,ToastController} from "ionic-angular";

import {HttpUtils,DataUtils,CommonUrl} from '../../assets/public/utils';
declare var BMap;
@Component({
    selector: 'page-map',
    templateUrl: 'map.html',
    providers:[HttpUtils,DataUtils,CommonUrl]
  })
export class MapPage{
    public map: any;
    public lat: any;
    public lng: any;
    @ViewChild('map') mapElement: ElementRef;
    constructor(public nav :NavController,
        public httpUtils:HttpUtils,
        public commonUrl:CommonUrl,
        public toast: ToastController ){

    }

    ionViewDidLoad() {
        this.initMap();
    }
    
    initMap(){
        this.map = new BMap.Map(this.mapElement.nativeElement, { enableMapClick: true });//创建地图实例
        this.map.enableScrollWheelZoom(true);//启动滚轮放大缩小，默认禁用
        this.map.enableContinuousZoom(true);//连续缩放效果，默认禁用
        let point = new BMap.Point(108.36827, 37.549284);//坐标可以通过百度地图坐标拾取器获取
        this.map.centerAndZoom(point, 15);
        this.getLocation();
    }

    getLocation(){
        let bMap  = this.map;
        let that = this;
        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function(r){
            var mk = new BMap.Marker(r.point);
            bMap.addOverlay(mk);
            bMap.panTo(r.point);    
            that.lng =r.longitude;
            that.lat = r.latitude;
            that.list();
        },{enableHighAccuracy: true})
    }
    list(){
        let bMap  = this.map;
        this.httpUtils.ajaxPost(this.commonUrl.dustbin,{
            lat:this.lat,lng:this.lng,distance:2000
        },function(res){
            res.forEach(p => {
                let point = new BMap.Point(p.lng, p.lat);
                var mk = new BMap.Marker(point);
                bMap.addOverlay(mk);
            });
        })
    }
}