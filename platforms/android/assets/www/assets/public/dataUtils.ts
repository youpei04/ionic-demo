/**
 * Created by youp on 2018/2/5.
 */
import {Injectable} from '@angular/core';
@Injectable()
export class DataUtils {
  constructor() {}

  public getStatus(status) {
    switch (status) {
      case 'Y': return '启用';
      default: return '禁用';
    }
  }

  /**
   * 获取数组对象中的id字符串
   * @param data
   * @return {string}
   */
  public getDataIds(data) {
    let ids = '';
    for (const i in data) {
      if (ids === '') {
        ids += data[i].id;
      } else {
        ids += ',' + data[i].id;
      }
    }
    return ids;
  }
  /**
   * 生成下拉框的数据
   * @param data
   */
  getSelectData(data, name, code) {
    const select = [];
    data.forEach(function(i){
      select.push({label: i[name], value: i[code]});
    })
    return select;
  }

  /**
   * 获取下拉框的值对应名称
   * @param code
   * @param array
   * @return {string}
   */
  getValueBySelectData(code, array) {
    for (const i in array) {
      if (code === array[i].value) {
        return array[i].label;
      }
    }
    return '';
  }
}
