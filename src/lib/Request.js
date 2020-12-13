import axios from 'axios'
class Request {
    constructor(baseURL) {
            this.pending = {}
            this.config = {...this.config,
                ... {
                    baseURL,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                        'Accept': 'application/json',
                    },
                    timeout: 10000
                }
            }
        }
        /**
         * 得到AXIOS实例
         */
    getInstance() {
            let instance = axios.create(this.config)
            this.setInterceptors(instance);
            return instance
        }
        /**
         * 
         *取消重复请求 
         */
    removePending(key, isRequest = false) {
            if (this.pending[key] && isRequest) {
                this.pending[key]()
            }
            delete this.pending[key]
        }
        /**
         * 设置拦截器
         */
    setInterceptors(instance) {
            // 添加请求拦截器
            instance.interceptors.request.use(config => {
                return config;
            }, function(error) {
                // 对请求错误做些什么
                return Promise.reject(error);
            });
            // 添加响应拦截器
            instance.interceptors.response.use(response => {
               return  response.data.code == 200 ? Promise.resolve(response.data):Promise.reject(response.data.msg)       
            }, function(error) {
                // 对响应错误做点什么
                return Promise.reject(error);
            });
        }
        /**
         * GET请求
         */
    get(url) {
           return this.getInstance().request({
                method: 'get',
                url: url
            })
        }
        /**
         * POST请求
         */
    post(url, params) {
        return this.getInstance().request({
            method: 'post',
            url: url,
            data: params
        })
    }
    /**
     * 加密
     * @param {} param 
     */
    encryption(param){
        return param
    }
    /**
     * 解密
     * @param {} data 
     */
    decrypt(data){
        return data
    }
}

export default Request