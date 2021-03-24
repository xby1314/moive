<template>
    <div>
       <filmsListTopNav :class="fixed ?'fixed': ''"></filmsListTopNav>
       <router-view></router-view>
    </div>
</template>
<script>
import filmsListTopNav from '@/components/filmsListTopNav'
export default {
    data() {
        return {
            // 默认不吸顶
            fixed:false
        }
    },
    components:{
        filmsListTopNav,
    },
    mounted() {
        // 事件监听
        window.addEventListener('scroll',(e)=>{
            let top=document.documentElement.scrollTop
            if(top>66*2){
                this.fixed=true
            }else{
                this.fixed=false
            }
        },true)
    },
    
}
</script>
<style lang="scss" scoped>
    .fixed {
  position: fixed;
  top: 0;
  background: #ffffff;
}
</style>