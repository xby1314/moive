// 封装axios,添加请求拦截器(2个请求头)
import axios from 'axios'

// 设置基础域名(请求地址)
axios.defaults.baseURL = "https://m.maizuo.com";
// 请求拦截器处理,添加2个请求头
axios.interceptors.request.use(
    function (config) {
        let host = "mall.film-ticket.film.list"
        let info = config.headers.info
        // 电影列表
        // if (info == "films") {
        //     host="mall.film-ticket.film.list"
        // }
        // 电影详情
        if (info == "info") {
            host="mall.film-ticket.film.info"
        }
        // 影院
        if (info == "cinema") {
            host="mall.film-ticket.cinema.list"
        }
        // 影院详情
        // if (info = 'cinemaShow') {
        //     host="mall.film-ticket.film.cinema-show-film"
        // }
        // if (info = 'city') {
        //     host = "mall.cfg.cinema.banners";
        // }
        config.headers = {
            "X-Client-Info":'{"a":"3000","ch":"1002","v":"5.0.4","e":"1602854376219502893596675","bc":"310100"}',
            "X-Host":host
    }
    return config
}, function (err) {
    // 错误处理
        return Promise.reject(err)
})
// 导出封装奥的axios
export default  axios