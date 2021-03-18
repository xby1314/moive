// 发送具体的请求

// 导入需要使用的模块
import http from '@/api/http'
import { nowPlayingListUrl, comingSoonListUrl } from '@/config/url' 
// 请求正在热映列表数据
export const nowPalyingListData  = (pageNum) => {
    return http.get(nowPlayingListUrl + pageNum)
}
// 请求即将上映
export const comingSoonListData  = (pageNum) => {
    return http.get(comingSoonListUrl + pageNum)
}