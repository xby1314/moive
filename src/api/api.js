// 发送具体的请求

// 导入需要使用的模块
import http from '@/api/http'
import { nowPlayingListUrl, comingSoonListUrl,movieDetailUrl,cityListUrl,gatewayUrl,theatreUrl,loginUrl,centerUrl} from '@/config/url' 
// 请求正在热映列表数据
export const nowPalyingListData  = (pageNum) => {
    http.defaults.headers.authorization = ''
    http.defaults.headers.info=''
    return http.get(nowPlayingListUrl + pageNum)
}
// 请求即将上映
export const comingSoonListData = (pageNum) => {
    http.defaults.headers.authorization = ''
    http.defaults.headers.info=''
    return http.get(comingSoonListUrl + pageNum)
}
// 请求电影详情
export const movieDetailData = (filmID) => {
    // 给axios设置请求头
    http.defaults.headers.info = 'info'
    http.defaults.headers.authorization=''
    return http.get(movieDetailUrl+filmID)
}
export const gatewayData = (cityId) => {
    http.defaults.headers.info = "banners";
    http.defaults.headers.authorization = ""
    return http.get(gatewayUrl + cityId)
}
export const cinemaData = (cityId) => {
    http.defaults.headers.info = "cinema";
    http.defaults.headers.authorization = ""
    return http.get(theatreUrl + cityId)
}

// 城市列表数据
export const cityListData = async () => {
     http.defaults.headers.authorization = ""
    http.defaults.headers.info = 'city'
    let ret = await http.get(cityListUrl)
    let cities = ret.data.data.cities
    let codeList = [] //'A','B','C'... (完整的26个字母)
    let dataList = [] //城市信息
    let indexList = []  //'A','B','C'...(筛选好的字母)
    for (let i = 65; i <= 90; i++){
       codeList.push(String.fromCharCode(i)) 
    }
    // 开始处理
    codeList.forEach((element) => {
        let tempArr= cities.filter((item)=>element.toLowerCase()==item.pinyin.substr(0,1))
        if (tempArr.length > 0) {
            indexList.push(element)
            dataList.push({
                index: element,
                data:tempArr
            })
       }
    })
    // 返回数据
    return Promise.resolve([dataList,indexList])
}
// 登录
export const userLogin = (data) => {
    return http.post(loginUrl,data)
}
// 获取用户个人信息
export const userInfo = (_token) => {
    http.defaults.headers.authorization=_token
    return http.get(centerUrl)
}