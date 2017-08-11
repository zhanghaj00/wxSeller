
import base from './base';
import wepy from 'wepy'

export default class shop extends base {

  static async list() {
    const url = `${this.baseUrl}/shops_list`;
    return await this.get(url);
  }
  static async create(param) {
    const url = `${this.baseUrl}/shops`;
    return await this.post(url,param);
  }
  static async info() {
    const shop_id = wepy.$instance.globalData.auth.shop_id;
    const url = `${this.baseUrl}/shops?shop_id=`+shop_id;
    return await this.get(url);
  }
}
