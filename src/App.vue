<template>
  <div id="app">
      <footerNav/>
    <router-view/>
  </div>
</template>
<script>
import footerNav from "@/components/footerNav"
export default {
    components:{
      footerNav
    }
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
