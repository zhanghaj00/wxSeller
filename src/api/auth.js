import base from './base'
import wepy from 'wepy';

export default class auth extends base {
  /**
   * 登录
   */
  static async login() {
    const login_code = await wepy.login();
    const url = `${this.baseUrl}/auth/login?code=`+login_code.code;
    const data = await this.get(url);
    this.setConfig("login_code",data.third_session);
    return data.third_session;
  }
  /**
   * 短信验证码
   */
  static async sms (phone) {
    const url = `${this.baseUrl}/auth/sms_code?phone=${phone}`
    const data = await this.get(url);
    return data.message;
  }

  /**
   * 检查登录情况
   */
  static async check(loginCode) {
    const url = `${this.baseUrl}/auth/check?third_session=${loginCode}`;
    const data = await this.get(url)
    return data;
  }

  /**
   * 设置权限值
   */
  static getConfig(key) {
    return wepy.$instance.globalData.auth[key];
  }

  /**
   * 读取权限值
   */
  static async setConfig(key, value) {
    await wepy.setStorage({key: key, data: value});
    wepy.$instance.globalData.auth[key] = value;
  }

  /**
   * 删除权限值
   */
  static async removeConfig(key) {
    wepy.$instance.globalData.auth[key] = null;
    await wepy.removeStorage({key: key});
  }
}
