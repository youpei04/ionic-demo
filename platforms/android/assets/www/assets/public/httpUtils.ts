import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import {ToastController, App } from 'ionic-angular';
/**
 *
 * http请求工具
 * Created by youp on 2018/2/2.
 */
@Injectable()
export class HttpUtils {

  constructor(
    // public navCtrl: NavController,
    public app:App,
    public http:Http,
    private toast: ToastController
  ) {}
  /**
   * 序列化数据，生成formdata
   * @param data map对象
   */
  serializeData(data) {
    let formData = '';
    for (const key in data) {
      if (formData === '') {
        formData += key + '=' + data[key];
      } else {
        formData += '&' + key + '=' + data[key];
      }
    }
    return formData;
  }

  /**
   * 请求后台
   */
  ajaxPost (url, data, callback) {
    // let nav = this.navCtrl;
    const headers = new Headers();
    // headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    headers.append('Content-Type','application/json');
    this.http.post(url,data, {headers: headers}).subscribe(res =>{
       const resData = JSON.parse(res['_body']);
       if (resData.code === '99999') {
         this.openMessage(resData.message);
         localStorage.removeItem('token');
        //  let nav :NavController = this.app.getActiveNav();
        //  nav.push(LoginPage);
       } else {
         callback(resData.response);
       }
    })
  }
  openMessage(msg:any) {
    let toast = this.toast.create({
      message: msg,
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }
  /**
   * 获取成功的code值
   * @return {string}
   */
  success_code (): string {
    return '001000';
  }

  /**
   * 获取失败的code值
   * @return {string}
   */
   error_code (): string {
    return '001000';
  }
}
