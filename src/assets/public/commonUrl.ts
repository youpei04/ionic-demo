/**
 * Created by youp on 2018/2/2.
 */
import {Injectable} from '@angular/core';
@Injectable()
export class CommonUrl {

  private token = localStorage.getItem('token');
  /**请求ip*/
  public ip = 'http://192.168.1.107:8080/web';
  /**上传*/
  public upload = this.packingUrl(this.ip + '/upload/upload.action');
  /**登录*/
  public login = this.packingUrl(this.ip + '/api/login/login.action');
  public dustbin = this.packingUrl(this.ip + '/api/equ/dustbinList.action');
  /**请求参数包装*/
  private packingUrl(url) {
    if (url.indexOf('?') > -1) {
      return url + '&token=' + this.token;
    }
    return url + '?token=' + this.token;
  }
}
