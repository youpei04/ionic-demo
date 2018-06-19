import { Component } from '@angular/core';
import { Platform,NavController,ToastController   } from 'ionic-angular';
import { HomePage } from '../home/home';
import { JPushService } from 'ionic2-jpush/dist'  
import {HttpUtils,DataUtils,CommonUrl} from '../../assets/public/utils';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers:[JPushService,HttpUtils,DataUtils,CommonUrl]
})
export class LoginPage {
  private account:any;
  private password:any;
  constructor(
    public navCtrl: NavController,
    public platform:Platform,
    public httpUtils:HttpUtils,
    public commonUrl:CommonUrl,
    private jPushPlugin: JPushService,
    public toast: ToastController ) {
     
  }
  /**
   * 初始化方法
   */
  ionViewWillEnter(){
      this.init();
      this.getRegistrationID();
      let phone = localStorage.getItem('phone');
      let code = localStorage.getItem('code');
      if(phone&&code){
          this.account=phone;
          this.password = code;
          this.login();
      }
  }
  /**
   * 登录
   */
  login(){
    console.log(this.account);
    console.log(this.password);
    // if(this.account=="admin"&&this.password=="123456"){
      let data = {
        phone:this.account,
        code:this.password,
        alias:'',
        platform:'android',
        type:'login'
      }
      let nav = this.navCtrl;
      this.httpUtils.ajaxPost(this.commonUrl.login,data,function(res){
        localStorage.setItem('token',res.token);
        localStorage.setItem('id',res.id);
        localStorage.setItem('phone',res.phone);
        localStorage.setItem('code','123456');
        console.log("登陆成功");
        nav.push(HomePage);
      })
     
  //  }else{
  //     this.httpUtils.openMessage("账号密码错误!");
  //  }
  }
  /**
   * jpush初始化
   */
  init() {  
    this.jPushPlugin.init()  
    .then(res => this.httpUtils.openMessage(res))  
    .catch(err => this.httpUtils.openMessage(err))  
  }
   
    /** 
    * 获取注册ID 
    */  
  getRegistrationID() {
     this.jPushPlugin.getRegistrationID()
     .then(res => this.httpUtils.openMessage(res))
     .catch(err => this.httpUtils.openMessage(err))
  }
  
  // jdpush(){
  //   let openNotification = this.jPushPlugin.openNotification()  
  //   .subscribe( res => {  
  //     this.httpUtils.openMessage(res);  
  //     console.log('收到点击通知事件');  
  //   })  


  // let receiveNotification = this.jPushPlugin.receiveNotification()  
  //   .subscribe( res => {  
  //     this.httpUtils.openMessage(res);  
  //     console.log('收到通知')  
  //   })  

  // let receiveMessage = this.jPushPlugin.receiveMessage()  
  //   .subscribe( res => {  
  //     this.httpUtils.openMessage(res);  
  //     console.log('收到自定义消息');  
  //   })  

  // let backgroundNotification = this.jPushPlugin.backgroundNotification()  
  //   .subscribe( res => {  
  //     this.httpUtils.openMessage(res); 
  //     console.log('收到后台通知');  
  //   })  
  // }
}
