import base from './base';
import Page from '../utils/Page';

export default class supplier extends base {
    /**
     * 分页方法
     */
    static page () {
        const url = `${this.baseUrl}/supplier`;
        return new Page(url);
    }

    /**
     * 全部方法
     */
    static list () {
        const url = `${this.baseUrl}/supplier`;
        return this.get(url);
    }
    /**
     * 创建
     */
    static create(supplier) {
        const url = `${this.baseUrl}/supplier`;
        return this.post(url, supplier);
    }

    /**
     * 删除
     */
    static remove(id) {
        const url = `${this.baseUrl}/supplier/${id}`;
        return this.delete(url);
    }

    /**
     * 更新
     */
    static update(id, supplier) {
        const url = `${this.baseUrl}/supplier/${id}`;
        return this.put(url, supplier);
    }
}