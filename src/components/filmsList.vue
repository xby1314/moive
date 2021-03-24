<template>
    <div class="list scroll" :style="{height:height+'px'}">
       <loading v-if="loading"></loading> 
       <!-- 展示数据 -->
        <div>
            <div class="item" v-for="(item,index) in data" @click="goDetail(item.filmId)" :key="index">
            <div class="left">
                <img v-lazy="item.poster"/>
            </div>
             <div class="middle">
                <div class="info-col">
                    <span class="name">{{ item.name }}</span>
                    <span class="item">{{item.filmType.name}}</span>
                </div>
                <div v-if="type == 1 && item.grade!=undefined">
                    <span>观众评分 </span>
                    <span class="grade">{{ item.grade }}</span>
                </div>
                <div class="info-col">主演：{{ item.actors | parseActors }}</div>
                <div v-if="type == 1">{{ item.nation }} | {{ item.runtime }}分钟</div>
                <div v-else>上映日期：{{item.premiereAt | parsePremiereAt}} </div>
            </div>
            <div class="right">
                <div class="nowPlayingFilm-buy" v-if="type==1">购票</div>
                <div class="comingSoonFilm-buy" v-else>预购</div> 
            </div>
        </div>
        </div>
    </div>
</template>
<script>
// loading 导入
import loading from '@/components/loading'
import BetterScroll from 'better-scroll'
import moment from 'moment'
// 导入请求方法
import {nowPalyingListData,comingSoonListData} from '@/api/api'

moment.locale('zh-cn')
export default {
    data() {
        return {
           
            loading:true,
            height:0,
            // 保存better-scroll实例
            bs:null,
            pageNum:1,
            flag:true, //控制是否可以继续加载更多
             data:[],//拼数据
        }
    },
    props:['list','type'],
    components:{
        loading,
        
    },
    created() {
        // 当进入页面后需要将父传子的数据list转交给data
        this.data=this.list
        if(this.data.length>0){
            this.loading=false
        }else{
            this.loading=true
        }
    },
    // 过滤器
    filters:{
        // 处理演员的数据,将主演的从数组形式转成字符串形式以便输出
        parseActors:function(value){
            let actors=''
            value.forEach(element => {
                actors += element.name + ' '
            });
            return actors
            
        },
        parsePremiereAt:function(value){
            return moment(value*1000).format('ddd MM月DD日')
        }
    },
    methods: {
        goDetail:function(filmId){
            this.$router.push({name:'detail',params:{filmId}})
        },
        getData:async function(){
           if(this.flag){
            this.pageNum++
            if(this.type==1){
                // 正在热映
                var ret =await nowPalyingListData(this.pageNum)
            }else{
                // 即将上映
                  var ret =await comingSoonListData(this.pageNum)
            }
            // 如果当前请求到的数据数量少于10,则说明后面已经没有数据可以被请求，此时需要将标志设置成false
            if(ret.data.data.films.length<10){
                this.flag=false
            }
            // 将数据处理好新增到列表中
            this.data=this.data.concat(ret.data.data.films)
           }
            
        }
    },
    mounted() {
            // 获取可是高度
        this.height=document.documentElement.clientHeight-100
    },
    updated() {
       this.$nextTick(()=>{
        this.bs=new BetterScroll('.scroll',{
            //激活上滑的事件监听    
            pullUpLoad:true,
            // 监听下滑的事件监听
            pullDownRefresh:true,
            // 默认情况下使用bs后,他会禁止浏览器的点击事件
            click:true
        })
        this.bs.on("pullingUp",()=>{
            // 获取数据
            this.getData()
            this.bs.finishPullUp()
        })
        this.bs.on('pullingDown',()=>{
             // 获取数据
             this.getData()
            this.bs.finishPullDown()
        })
       })
    },
    beforeDestroy() {
        this.bs=null
    },
        
    
}
</script>
<style lang="scss" scoped>
  .scroll {
		overflow: hidden;
}
.list{
    margin-bottom: 50px;
   

    .item {
    margin-top: 15px;
    padding-bottom: 15px;
    display: flex;
    color: #797d82;
    font-size: 13px;
    border-bottom: 1px solid #ededed;

    .left {
        width: 77px;
        height: 100px;
        margin-left: 20px;
        img {
            width: 66px;
            height: 100%;
        }
    }

   .info-col {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	width: 100%;
    }
 
    .middle {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 55%;
        

        div:nth-of-type(1) {
            color: #191a1b;
            font-size: 16px;
        }

        div:nth-of-type(3) {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    .name {
	max-width: calc(100% - 25px);
	color: #191a1b;
	font-size: 16px;
	height: 22px;
	line-height: 22px;
	margin-right: 5px;
	overflow: hidden;
	-o-text-overflow: ellipsis;
	text-overflow: ellipsis;
	white-space: nowrap;
}
    .item{
	font-size: 9px;
	color: #fff;
    display: inline-block;
	background-color: #d2d6dc;
	height: 14px;
	line-height: 14px;
	padding: 0 2px;
	border-radius: 2px;
}
       
    }
     .grade {
	    color: #ffb232;
	    font-size: 14px;
        }

    .right {
        width: 15%;
        display: flex;
        align-items: center;
        margin-right: 20px;

        .nowPlayingFilm-buy {
            border: 1px solid #ff5f16;
            background: white;
            color: #ff5f16;
            border-radius: 2px;
            height: 25px;
            line-height: 25px;
            font-size: 13px;
            width: 50px;
            text-align: center;
        }
        .comingSoonFilm-buy{
             border: 1px solid #ffb232;
            background: white;
            color: #ffb232;
            border-radius: 2px;
            height: 25px;
            line-height: 25px;
            font-size: 13px;
            width: 50px;
            text-align: center;
        }
    }
    }
  }
</style>