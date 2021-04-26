<template>
    <div>
        <div class="main">
            <div class="system-set-view" style="height: 100%;">
			<header class="header">
            	<div class="left">
                	<img @click="goBack"   src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA2CAMAAACRK2tAAAAAkFBMVEVHcEwcHBwZGhsaGhwZHBwqKioZGhv///8bGxs/Pz8ZGhseHh4eHh4cHBwZGxsaGhsZGxsfHx8ZGhwZGhsZGhsdHR0ZGhsZGhsaGhwbGxsZGhsbGxsZGxseHh4ZGxsZGhsaGhskJCQZGxsaGhwZGxsZGhwaGhwZGhwZGhsZHh4fHx8aGhsZGhsZGhsZGhsZGhteFmxMAAAAL3RSTlMAEv1YdgzJAUsE+hkhP5WksQi+0/c08uWGStxnZirs3c0HsoeWo4W91DMp6+T28faGh4gAAADjSURBVDjLxZXZkoJADEUbVxBQlG1AYRZ3Z/T8/9/5gK9JqgZL83puVVd3TjrO/bumfjVVA3PwNf4BVAofAXvliA2QBDIfDuD4LXN/BpOxzOMMUk/meQF1KPOmhb9I5lEJvxeZhzXczjL3UrjGMh9PYKZ0YLmCwVDmQQJsFAEWwEgXgIMhwNwQYNFTgNXyfQK4Lygj1yeQF/CpHeHiDE6elrCuaT+Uc2vgJ3A9mtW1e2f9GGzVP8dSrpN2rSUs7e3B6UYvi7VEWEORa4mohLbREk37HD3Sl+iRPEGPqtdCsVfSo+6AByDPg79r1AAAAABJRU5ErkJggg==" width="11px" height="18px" alt=""></div>  
            		<div class="title">设置</div> 
					<div class="right"><div class="" style="color: rgb(121, 125, 130);"></div>
				</div>
			</header> 
			<div class="setting-detail">
        		<div style="height: inherit;">
            		<div class="item-box">
                	<div class="common">
                    	<span class="label">账号ID</span> 
                    	<span class="text" style="color: rgb(121, 125, 130);">231170263</span>
                	</div>
            	</div> 
            	<div class="item-box">
            	<div class="common">
                	<span class="label">登录密码</span> 
                	<span class="text" style="color: rgb(121, 125, 130);">修改</span> 
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAkCAMAAABR74GsAAAAhFBMVEVHcEy+wMa+wcW9wMXQ0NDFxcW9wMW///+9wMW9wMW+wMW+wse+wMXBwca/wsW9wMW+wMa9wcW9wcW+wMa9wse9wMW9wcbAwMa/xsa9wMXAwMe9wMW9wcW/wca+wca9wMW9wsa+wMa9wMW9wMW9wcW/1NS+wMXHx8e/wcbCws6+wcW9wMXhD+L5AAAAK3RSTlMAgrXLCxblBPz1ZjfcNkzdnraBg2XPyk0k6iXrjXCd5HGLnLeADMwXZBVL0OsnaQAAAJJJREFUKM+t0EcSgzAMQFEDBmx6OiW9J//+98te8iqDlm80428ZM8ccslVATxDgC1AozWNwO8V2C75U/KlgGhX3A7QvxbWH50Px18EtV/wGOp19ByLN1xl+k1aw0doG1Cbga/naAlwjVztgLTEClhIL4CixcRDL65QeEitwnKBKA/VD/3/9PlRvskC9MecsMnPPD3MGEI/gd5ReAAAAAElFTkSuQmCC" width="7px" height="12px" alt="">
            </div> 
            <div class="common feedback">
                <span class="label">安全密码</span> 
                <span class="text" style="color: rgb(121, 125, 130);">未设置</span> 
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAkCAMAAABR74GsAAAAhFBMVEVHcEy+wMa+wcW9wMXQ0NDFxcW9wMW///+9wMW9wMW+wMW+wse+wMXBwca/wsW9wMW+wMa9wcW9wcW+wMa9wse9wMW9wcbAwMa/xsa9wMXAwMe9wMW9wcW/wca+wca9wMW9wsa+wMa9wMW9wMW9wcW/1NS+wMXHx8e/wcbCws6+wcW9wMXhD+L5AAAAK3RSTlMAgrXLCxblBPz1ZjfcNkzdnraBg2XPyk0k6iXrjXCd5HGLnLeADMwXZBVL0OsnaQAAAJJJREFUKM+t0EcSgzAMQFEDBmx6OiW9J//+98te8iqDlm80428ZM8ccslVATxDgC1AozWNwO8V2C75U/KlgGhX3A7QvxbWH50Px18EtV/wGOp19ByLN1xl+k1aw0doG1Cbga/naAlwjVztgLTEClhIL4CixcRDL65QeEitwnKBKA/VD/3/9PlRvskC9MecsMnPPD3MGEI/gd5ReAAAAAElFTkSuQmCC" width="7px" height="12px" alt="">
            </div>
        </div> 
        <div class="item-box">
            <div class="common">
                 <span class="label">软件版本</span> 
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAkCAMAAABR74GsAAAAhFBMVEVHcEy+wMa+wcW9wMXQ0NDFxcW9wMW///+9wMW9wMW+wMW+wse+wMXBwca/wsW9wMW+wMa9wcW9wcW+wMa9wse9wMW9wcbAwMa/xsa9wMXAwMe9wMW9wcW/wca+wca9wMW9wsa+wMa9wMW9wMW9wcW/1NS+wMXHx8e/wcbCws6+wcW9wMXhD+L5AAAAK3RSTlMAgrXLCxblBPz1ZjfcNkzdnraBg2XPyk0k6iXrjXCd5HGLnLeADMwXZBVL0OsnaQAAAJJJREFUKM+t0EcSgzAMQFEDBmx6OiW9J//+98te8iqDlm80428ZM8ccslVATxDgC1AozWNwO8V2C75U/KlgGhX3A7QvxbWH50Px18EtV/wGOp19ByLN1xl+k1aw0doG1Cbga/naAlwjVztgLTEClhIL4CixcRDL65QeEitwnKBKA/VD/3/9PlRvskC9MecsMnPPD3MGEI/gd5ReAAAAAElFTkSuQmCC" width="7px" height="12px" alt=""></div> 
                <div class="common feedback">
                    <span class="label">隐私政策</span> 
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAkCAMAAABR74GsAAAAhFBMVEVHcEy+wMa+wcW9wMXQ0NDFxcW9wMW///+9wMW9wMW+wMW+wse+wMXBwca/wsW9wMW+wMa9wcW9wcW+wMa9wse9wMW9wcbAwMa/xsa9wMXAwMe9wMW9wcW/wca+wca9wMW9wsa+wMa9wMW9wMW9wcW/1NS+wMXHx8e/wcbCws6+wcW9wMXhD+L5AAAAK3RSTlMAgrXLCxblBPz1ZjfcNkzdnraBg2XPyk0k6iXrjXCd5HGLnLeADMwXZBVL0OsnaQAAAJJJREFUKM+t0EcSgzAMQFEDBmx6OiW9J//+98te8iqDlm80428ZM8ccslVATxDgC1AozWNwO8V2C75U/KlgGhX3A7QvxbWH50Px18EtV/wGOp19ByLN1xl+k1aw0doG1Cbga/naAlwjVztgLTEClhIL4CixcRDL65QeEitwnKBKA/VD/3/9PlRvskC9MecsMnPPD3MGEI/gd5ReAAAAAElFTkSuQmCC" width="7px" height="12px" alt="">
                </div> 
                <div class="common feedback">
                    <span class="label">用户协议</span> 
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAkCAMAAABR74GsAAAAhFBMVEVHcEy+wMa+wcW9wMXQ0NDFxcW9wMW///+9wMW9wMW+wMW+wse+wMXBwca/wsW9wMW+wMa9wcW9wcW+wMa9wse9wMW9wcbAwMa/xsa9wMXAwMe9wMW9wcW/wca+wca9wMW9wsa+wMa9wMW9wMW9wcW/1NS+wMXHx8e/wcbCws6+wcW9wMXhD+L5AAAAK3RSTlMAgrXLCxblBPz1ZjfcNkzdnraBg2XPyk0k6iXrjXCd5HGLnLeADMwXZBVL0OsnaQAAAJJJREFUKM+t0EcSgzAMQFEDBmx6OiW9J//+98te8iqDlm80428ZM8ccslVATxDgC1AozWNwO8V2C75U/KlgGhX3A7QvxbWH50Px18EtV/wGOp19ByLN1xl+k1aw0doG1Cbga/naAlwjVztgLTEClhIL4CixcRDL65QeEitwnKBKA/VD/3/9PlRvskC9MecsMnPPD3MGEI/gd5ReAAAAAElFTkSuQmCC" width="7px" height="12px" alt="">
                </div> 
                <div class="common feedback">
                    <span class="label">意见反馈</span> 
                     <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAkCAMAAABR74GsAAAAhFBMVEVHcEy+wMa+wcW9wMXQ0NDFxcW9wMW///+9wMW9wMW+wMW+wse+wMXBwca/wsW9wMW+wMa9wcW9wcW+wMa9wse9wMW9wcbAwMa/xsa9wMXAwMe9wMW9wcW/wca+wca9wMW9wsa+wMa9wMW9wMW9wcW/1NS+wMXHx8e/wcbCws6+wcW9wMXhD+L5AAAAK3RSTlMAgrXLCxblBPz1ZjfcNkzdnraBg2XPyk0k6iXrjXCd5HGLnLeADMwXZBVL0OsnaQAAAJJJREFUKM+t0EcSgzAMQFEDBmx6OiW9J//+98te8iqDlm80428ZM8ccslVATxDgC1AozWNwO8V2C75U/KlgGhX3A7QvxbWH50Px18EtV/wGOp19ByLN1xl+k1aw0doG1Cbga/naAlwjVztgLTEClhIL4CixcRDL65QeEitwnKBKA/VD/3/9PlRvskC9MecsMnPPD3MGEI/gd5ReAAAAAElFTkSuQmCC" width="7px" height="12px" alt="">
                </div>
            </div> 
            <div class="item-box">
                <div class="common">
                    <span class="label">清除缓存</span> 
                     <span class="text">0.1 KB</span>
                </div>
            </div> 
            <div class="item-box">
                <div class="common">
                    <span class="label">注销账号</span> 
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAkCAMAAABR74GsAAAAhFBMVEVHcEy+wMa+wcW9wMXQ0NDFxcW9wMW///+9wMW9wMW+wMW+wse+wMXBwca/wsW9wMW+wMa9wcW9wcW+wMa9wse9wMW9wcbAwMa/xsa9wMXAwMe9wMW9wcW/wca+wca9wMW9wsa+wMa9wMW9wMW9wcW/1NS+wMXHx8e/wcbCws6+wcW9wMXhD+L5AAAAK3RSTlMAgrXLCxblBPz1ZjfcNkzdnraBg2XPyk0k6iXrjXCd5HGLnLeADMwXZBVL0OsnaQAAAJJJREFUKM+t0EcSgzAMQFEDBmx6OiW9J//+98te8iqDlm80428ZM8ccslVATxDgC1AozWNwO8V2C75U/KlgGhX3A7QvxbWH50Px18EtV/wGOp19ByLN1xl+k1aw0doG1Cbga/naAlwjVztgLTEClhIL4CixcRDL65QeEitwnKBKA/VD/3/9PlRvskC9MecsMnPPD3MGEI/gd5ReAAAAAElFTkSuQmCC" width="7px" height="12px" alt="">
            </div>
        </div> 
         <!-- <div class="logout-btn" @click="logout()" @>退出登录</div></div> 
        <div  style="padding:15px; background: rgb(255, 255, 255); height: 250px; display: none;">
            <textarea placeholder="请留下您的宝贵意见，我们将努力改进" class="feedback-area"></textarea> 
            <div class="textarea-length">0/500</div> -->
		</div>
			</div> 
			<!-- <div class="mint-actionsheet logout-box" v-if="show">
                    <ul class="mint-actionsheet-list" style="margin-bottom: 5px;">
                        <li class="mint-actionsheet-listitem">是否退出卖座电影</li>
                        <li class="mint-actionsheet-listitem" @click="exit">退出</li>
                    </ul> 
                    <a class="mint-actionsheet-button" @click="deselect">取消</a>
            </div>  -->
			<!-- <div class="mint-actionsheet localstore-box" style="display: none;">
            	<ul class="mint-actionsheet-list" style="margin-bottom: 5px;">
                    <li class="mint-actionsheet-listitem">是否确认清除缓存</li>
                    <li class="mint-actionsheet-listitem">清除</li>
                </ul> 
                <a class="mint-actionsheet-button">取消</a>
            </div> -->
			
			<van-cell is-link title="退出登录" @click="show = true" class="van-cell__title"/>
			<van-action-sheet @select="onSelect" v-model="show" :actions="actions" cancel-text="取消" description="是否退出卖座电影"  close-on-click-action/>
			<!-- <div @click="deselect" class="v-modal" style="z-index: 2004;" v-if="show"></div> -->
		
            </div>
			
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import "vant/lib/index.css"
import { ActionSheet,Cell } from 'vant';
Vue.use(ActionSheet)
Vue.use(Cell)

export default {
	data(){
		return{
		show:false,
		actions: [
        { name: '退出' },
      ],
    }
	},
	methods: {
    goBack: function() {
      this.$router.go(-1);
    },
    // exit: function () {
    //   this.$router.push("/center");
    //   this.$router.go("0");
    //   window.localStorage.removeItem("_token");
    //   this.show = false;
    // },
    // logout : function () {
    //   this.show = true;
    // },
    // deselect: function () {
    //   this.show = false;
	// },
	onSelect(item){
	this.$router.push("/center");
	localStorage.removeItem('_token')
	this.$router.go(0);	
},
  },

	created() {
    //发起通知,通知app.vue组件移除底部菜单
    this.eventBus.$emit("footerNav", false);
  },
  beforeDestroy() {
    //发起通知,通知app.vue组件恢复底部菜单
    this.eventBus.$emit("footerNav", true);
  },
  
   
}
</script>
<style lang="scss">
body{
	background-color: #f4f4f4;
}
.van-popup--bottom.van-popup--round{
	border-radius: 0;
}
.van-action-sheet__description{
	height: 30px;
	line-height: 30px;
	font-size: 13px;
	color: #bdc0c5;
	padding: 0;
}
.van-action-sheet__name{
	color: #ff5f16;
}
.van-cell__title{
    padding: 0;
	position: fixed;
	bottom: 0;
	width: 100%;
	text-align: center;
	color: #ff5f16;
	height: 49px;
	line-height: 49px;
	background: #fff;
}.van-icon-arrow::before {
	display: none;
}
.van-cell__right-icon {
	display: none;
}
    .main{
        height: 100%;
    }
	.system-set-view {
	position: relative;
	left: 0;
	right: 0;
	bottom: 0;
	font-size: 15px;
	background: #f4f4f4;
	padding-top: 54px;
    }
    header {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 44px;
	line-height: 44px;
	overflow: hidden;
	margin: 0;
	padding: 0;
	z-index: 300;
	background-color: #fff;
	display: flex;
}
header .left {
	min-width: 15%;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-left: 15px;
}
header .title {
	text-align: center;
	font-size: 17px;
	color: #191a1b;
	flex: 1;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
header .right {
	width: 15%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 15px;
}
header:after {
	content: " ";
	position: absolute;
	left: 0;
	bottom: 0;
	right: 0;
	height: 1px;
	border-bottom: 1px solid #ededed;
	color: #ededed;
	transform-origin: 0 100%;
	transform: scaleY(.5);
}
.setting-detail {
	height: 100%;
}
.item-box {
	background: #fff;
	margin-bottom: 10px;
}   
.common {
	padding: 0 14px 0 15px;
	height: 49px;
	line-height: 49px;
	background: #fff;
	color: #191a1b;
	display: flex;
	align-items: center;
}
.label {
	flex: 1;
}
.text {
	font-size: 13px;
	color: #bdc0c5;
}
.common img {
	padding-left: 14px;
}
.feedback {
	position: relative;
}
 .feedback:before {
	content: " ";
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	height: 1px;
	border-top: 1px solid #ededed;
	color: #ededed;
	transform-origin: 0 0;
	transform: scaleY(.5);
	left: 4%;
}
.mint-actionsheet {
	position: fixed;
	background: #e0e0e0;
	width: 100%;
	text-align: center;
	bottom: 0;
	left: 50%;
	transform: translate3d(-50%,0,0);
	transition: transform .3s ease-out;
	backface-visibility: hidden;
	
}
.logout-box {
	background: #f4f4f4;
    z-index: 2001; 
  
}
.v-modal {
	z-index: 3001!important;
	opacity: .6;

} 


.mint-actionsheet-listitem {
	display: block;
	width: 100%;
	height: 49px;
	line-height: 49px;
	background-color: #fff;
	border-bottom: 1px solid #ededed;
}

.mint-actionsheet-listitem:first-child {
	height: 30px;
	line-height: 30px;
	font-size: 13px;
	color: #bdc0c5;
	border-bottom: 1px solid #ededed;
}
.mint-actionsheet-listitem:last-child {
	color: #ff5f16;
}
.mint-actionsheet {
	z-index: 3002!important;

}
.mint-actionsheet-list {
margin-bottom: 5px;
list-style: none;
padding: 0;
margin: 0;
}
 .mint-actionsheet-listitem {
	height: 49px;
	line-height: 49px;
}
.mint-actionsheet-button {
height: 49px;
line-height: 49px;
display: block;
width: 100%;
color: #333;
background-color: #fff;
}
.logout-btn {
position: fixed;
bottom: 0;
width: 100%;
text-align: center;
color: #ff5f16;
height: 49px;
line-height: 49px;
background: #fff;
}
 .logout-box {
	background: #f4f4f4;
}
.feedback-area {
	width: 100%;
	height: 200px;
	max-height: 200px;
	resize: none;
	border: none;
	font-size: 14px;
	color: #191a1b;
}
.textarea-length {
	text-align: right;
	color: #bdc0c5;
}
</style>