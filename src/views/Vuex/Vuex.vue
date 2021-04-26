<template>
    <div>
        {{num}}
        {{city}}
        {{getCount}}
        <br>
        <button @click="haderle1()">点我+13</button>
        <button @click="haderle5()">获取总数</button>
    </div>
</template>
<script>
import {mapState} from 'vuex'
import  {mapMutations} from 'vuex'
import {mapActions} from 'vuex'
import {mapGetters} from 'vuex'

export default {
    data() {
        return {
            num:1
        }
    },
    mounted() {
        console.log(this.$store.count);   
        console.log(this.$store.city); 
    },
    computed:{
        ...mapState(["count","city"]),
        ...mapGetters(["getCount"])
    },
    methods: {
        ...mapMutations(["add"]),
        ...mapActions(['addAsync']),
        haderle1:function(){
            this.$store.commit('add',13)
        },
        headerle2:function(){
           this.add(13) 
        },
        headerle3:function(){
           this.$store.dispatch('addAsync',31) 
        },
         headerle4:function(){
           this.addAsync.dispatch(31) 
        },
         headerle5:function(){
          console.log(this.$store.getters.getCount);
        }
    },
}
</script>