<template>
  <div class="detail">
    <div class="scroll">
    <div class="img">
      <img v-lazy="film.poster"/>
      <div class="goBack" @click="goBack">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAt1BMVEVHcEz///////////////////////////////////////////////////////////////////////////////////97e3saGxyIiYnW1tYdHh9UVVUpKiulpaXLy8s6OzyysrIiIyPx8fEeHyC/v7/5+fklJihCQ0Ntb28bHB1hYWKXl5c0NTZLS0xAQUI4ODk3ODjh4eHr6+s2Nzfq6uptbm5gYGIbHB39/f2VlZdLS0wzNDUZGhs8UYRWAAAAPHRSTlMAGHpLE3cKgEdgVnJfNBZ+cBx9A28js/6sjPvK7p+Q3pn1g/iUgfLYuvzCpeTR2eHiiIXihrvD/YCl0uTUXbEtAAABd0lEQVRIx91W13KDQAw0xnCHARuDe+/dKY7T9f/flTzghCLdMaMXj/eRnZ0T0qqUSveBim96gRWGVuCZfqW4zpCuSMGVRiFhwxEInIY+0qogUFXHHcm6IFGXEa20HaGEY1PKWlNo0KzhylZZaFFuoW8WUP5qkXdtMtrnx4dkzLn/jcgMXY7wlMpVNs+SUs4nMOylvsiME6h6rjawHmfqm/YG6aETzJY5X6V8SykHsJjmvyb9TOVoD/0R5qpElxHKLewOKGHo0tuGThdn/pPsony3A20iHPevMih92MGW9OO1Pj5Gjvqwp63sx1IT4aYLGCi6wIylXp5azuCkaiAvlgY5ZryGzUolDWKplSV6Q5jMlW1rxdIwS7zA8azu+JCWfl+KSRkBM9KEF+fro0BxGJagjPimNyJp/1et/RlNx2l1esC8f2oGDGOscYYpY4RzFgdjXSmW5Fm3JBmrmXMQcM4QzvHDObk4hx7nvGQdtaxTmnXA3zR+AH8JUdNL967cAAAAAElFTkSuQmCC"
          alt=""
        />
      </div>
    </div>
    <div class="film-detail">
      <div class="film-name">
        <span class="name">{{ film.name }}</span>
        <span class="item">{{film.filmType.name}}</span></div>
      <div class="category">{{ film.category }}</div>
      <div class="premiereAt">{{ film.premiereAt | parsePremiereAt }}上映</div>
      <div class="nation">{{ film.nation }} | {{ film.runtime }} 分钟</div>
      <div :class="tagactive ? 'synopsis' : 'synopsisb'">
        {{ film.synopsis }}
      </div>
      <div class="toggle">
        <img
          @click="tagAcctive"
          :class="tagactive ? '' : 'uper'"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAMAAADHqI+lAAAAOVBMVEVHcEy9xcW9wMW9wcW////Bwca9wcW9wMW9wMW+wMW+wcW9wcXMzMy+wMa+wce9wMe9wca9wMW9wMWKU/2FAAAAEnRSTlMAH+jGBDa6/vaatcIPdlNSdckJHB8JAAAASUlEQVQIHQXBhwGDMAADMCVksQr4/2MrObYCQNkOZ2oH6DWna2Q9wG9lXLQ984V3Zm/gntlb2zNvgN/KGFkPAL0mtQNA+b4C/AGl4gJfgEWzrAAAAABJRU5ErkJggg=="
        />
      </div>
    </div>
    <div class="actors">
        <div class="actors-title-bar">
            <div class="actors-title">
            <span>演职人员</span>
      </div></div>
      
      <div class="actors-list">
        <Swiper :key="'actors_' + film.actors.length">
          <div
            class="swiper-slide"
            v-for="(item, index) in film.actors"
            :key="index"
          >
            <div class="actors-img">
              <img :src="item.avatarAddress"/>
            </div>
            <span class="actor-name">{{ item.name }}</span>
            <span class="actor-role">{{ item.role }}</span>
          </div>
        </Swiper>
      </div>
    </div>
    <div class="photos">
      <div class="photo-tittle">
        <span class="photo-tit">剧照</span>
        <span class="photo-all">全部({{ film.photos.length }})></span>
      </div>
      <div class="photo-list">
        <Swiper :key="'photos_' + film.photos.length">
          <div
            class="swiper-slide"
            v-for="(item, index) in film.photos"
            :key="index"
          >
            <div class="photo-img">
              <img :src="item" alt="" />
            </div>
          </div>
        </Swiper>
      </div>
       <a href="#/film/5384/cinemas" class="" style="height: 49px; position: fixed; bottom: 0px; width: 100%; z-index: 1;">
        <div class="goSchedule"> 选座购票 </div>
    </a>
    </div>
    </div>
  </div>
</template>
<script>
import Swiper from "@/components/Swiper"
import {movieDetailData} from '@/api/api'
import moment from "moment"
moment.locale("zh-cn")
export default {
    data() {
        return {
            film:{actors:[],photos:[],name:[]}
        }
    },
    async mounted() {
        let ret= await movieDetailData(this.$route.params.filmId)
        this.film=ret.data.data.film
    },
    components:{
        Swiper
    },
    filters:{
        parsePremiereAt:function(value){
            return moment(value*1000).format('YYYY-MM-DD')
        }
    },
    created() {
      this.eventBus.$emit("footerNav",false)
    },
    destroyd() {
      this.eventBus.$emit("footerNav",true)
    },
}
</script>
<style lang="scss" scoped>
.detail {
  .scroll{
    overflow-x: hidden;
  }
  .img {
    width: 100%;
    height: 210px;

    img {
      width: 100%;
      height: 100%;
    }
    .goBack {
      height: 30px;
      position: absolute;
      top: 5px;
      left: 5px;
      img {
        width: 30px;
      }
    }
  }
.film-detail {
  padding: 15px;
  padding-top: 12px;
  background-color: #fff;
  border-bottom: 10px solid rgb(244, 244, 244);
.film-name {
	width: 256px;
}
  .item {
  font-size: 9px;
	color: #fff;
	background-color: #d2d6dc;
	height: 14px;
	line-height: 14px;
	padding: 0 2px;
	border-radius: 2px;
	display: inline-block;
}

    .name {
      color: #191a1b;
      font-size: 18px;
      height: 24px;
      line-height: 24px;
      margin-right: 7px;
     
    }
    .category {
      font-size: 13px;
      color: #797d82;
      margin-top: 4px;
    }
    .premiereAt {
      font-size: 13px;
      color: #797d82;
      margin-top: 4px;
    }
    .nation {
      font-size: 13px;
      color: #797d82;
      margin-top: 4px;
    }
    .synopsis {
      margin-top: 12px;
      height: 36px;
      overflow: hidden;
      font-size: 13px;
      color: #797d82;
      transition: height 0.3s ease;
    }
    .synopsisb {
      margin-top: 12px;
      height: 72px;
      overflow: hidden;
      font-size: 13px;
      color: #797d82;
      transition: height 0.3s ease;
    }
    .toggle {
      text-align: center;
      line-height: normal;
      img {
        width: 8px;
        margin: auto;
      }
      .uper {
        transform: rotate(180deg);
      }
    }
  }
.actors-title-bar {
	padding: 15px;
}
  .actors-title {
    left: 15px;
    span {
      font-size: 16px;
      text-align: left;
      color: #191a1b;
    }
  }
  .actors {
    border-bottom: 10px solid rgb(244, 244, 244);
    .actors-list {
      height: 140px;
      margin-left: 15px;
      .swiper-slide {
        width: 85px !important;
        height: 140px;
        margin-right: 10px;
    .actors-img {
        position: relative;
        overflow: hidden;
        height: 85px;
          
        img {
            position: absolute;
            top: 50%;
            left: 0;
            width: 100%;
            transform: translateY(-50%);
          }
        }
        span {
          display: block;
          text-align: center;
        }
        .actor-name {
          padding-top: 10px;
          font-size: 12px;
          color: #191a1b;
          width: 85px;
          height: 18px;
        }
        .actor-role {
          font-size: 10px;
          color: #797d82;
        }
      }
    }
  }
  .photos {
    width: 100%;
    .photo-tittle {
      height: 32px;
      padding: 15px;
      .photo-tit {
        font-size: 16px;
        text-align: left;
        color: #191a1b;
      }
      .photo-all {
        float: right;
        display: inline-block;
        height: 22.5px;
        line-height: 22px;
        font-size: 13px;
        color: #797d82;
      }
    }
   .photo-list {
      padding-left: 15px;
      height: 115px;
      .swiper-slide {
        width: 150px !important;
        height: 100px;
        margin-right: 10px;
        .photo-img {
          overflow: hidden;
          img {
            width: 100%;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
          }
        }
      }
    }
     .goSchedule {
	position: fixed;
	bottom: 0;
	left: 0;
	height: 49px;
	width: 100%;
	text-align: center;
	background-color: #ff5f16;
	color: #fff;
	font-size: 16px;
	line-height: 49px;
   
}
  }
}
</style>