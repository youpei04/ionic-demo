import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MapPage} from '../map/map';
import {PayPage} from '../pay/pay';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  toMap(){
    this.navCtrl.push(MapPage);  
  }
  toAliPay(){
    this.navCtrl.push(PayPage);  
  }
}
