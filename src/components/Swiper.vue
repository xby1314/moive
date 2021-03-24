<template>
    <div class="swiper-container" >
        <div class="swiper-wrapper">
             <slot></slot>
        </div>
    </div>
</template>
<script>
// 导入 spiper 
import Swiper from "swiper"
import "swiper/swiper-bundle.css"
export default {
    mounted() {
        this.$nextTick(()=>{
            new Swiper(".swiper-container",{
                 slidesPerView:3,
                 breakpoints: {
                    640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                    },
                    768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                    },
                    1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                    },
                }
            })
        })
    },
}
</script>