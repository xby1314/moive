<template>
    <div>
        <h1>正在热映</h1>
    </div>
</template>
<script>
// 导入正在热映请求方法
import {nowPalyingListData} from '@/api/api'
export default {
    data() {
        return {
            pageNum:1,
            list:[]
        }
    },
    async mounted() {
        let ret=await nowPalyingListData(this.pageNum)
        this.list=ret.data.data.films;
    },
}
</script>