<template>
    <div class="nav">
        <ul>
            <router-link to="/films" active-class="active" tag="li">
                <i class="iconfont icondianying"></i>
                <span>电影</span>
            </router-link >
            <router-link to="/cinema" active-class="active" tag="li">
                <i class="iconfont iconyingyuan"></i>
                <span>影院</span>
            </router-link >
            <router-link to="/center" active-class="active" tag="li">
                <i class="iconfont icongeren"></i>
                <span>我的</span>
            </router-link>
        </ul>
    </div>
</template>
<script>
// import导入样式
import "@/assets/iconfont/iconfont.css";

export default {
    
}
</script>
<style lang="scss" scoped>
.nav {
    position: fixed;
    bottom: 0;
    left: 0;
    border-top: 1px solid #ccc;
    height: 50px;
    text-align: center;
    background: #fff;
    color: #7a7e83;
    width: 100%;
    z-index: 10;

    ul {
        display: flex;
        align-items: center;
        li {
            margin-top: 5px;
            flex: 1;
            height: 43px;
            &.active {
                color: #fe5100;
            }
            span {
                margin-top: 2px;
                display: block;
            }
            i {
                font-size: 20px;
            }
        }
    }
}
</style>