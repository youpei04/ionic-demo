import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
@Component({
  selector: 'page-paye',
  templateUrl: 'pay.html'
})
export class PayPage {

  constructor(public navCtrl: NavController) {

  }
  toPay(){
    alert("pay"); 
  }
 
}
