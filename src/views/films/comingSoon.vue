<template>
    <div>
       <filmsList :list='list' :type="type" :key="'films'+list.length"></filmsList>
    </div>
</template>
<script>
// 导入正在热映请求方法
import {comingSoonListData} from '@/api/api'
// 导入电影列表
import filmsList from '@/components/filmsList'
// // 导入loading
// import loading from "@/components/loading"
export default {
    data() {
        return {
            pageNum:1,
            list:[],
            type:2 //当前传递的数据为即将上映的数据
        }
    },
    async mounted() {
        let ret=await comingSoonListData(this.pageNum)
        this.list=ret.data.data.films;
    },
    components:{
        // loading
        filmsList
    }
}
</script>