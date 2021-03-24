<template>
  <div id="app">
      <footerNav v-if="is_show"/>
    <router-view/>
  </div>
</template>
<script>
import footerNav from "@/components/footerNav"
export default {
  data() {
    return {
      is_show:true
    }
  },
    components:{
      footerNav
    },
    created() {
      this.eventBus.$on("footerNav",(flag)=>{
        this.is_show=flag
      })
    },

}
</script>
<style lang="scss">
* {
    margin: 0;
    padding: 0;
}
html,
body {
    touch-action: none;
    height: 100%;
    ul,
    li {
        list-style: none;
    }
}
</style>
