<template>
    <div>
       <filmsListTopNav></filmsListTopNav>
       <router-view></router-view>
    </div>
</template>
<script>
import filmsListTopNav from '@/components/filmsListTopNav'
export default {
    components:{
        filmsListTopNav,
    }
}
</script>