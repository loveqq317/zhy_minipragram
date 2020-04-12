<template>
    <view class="home">
        <view class="action_wrap">
            <view class="action_item">
                <img src="../../static/images/card.png" alt="" class="action_img" mode="widthFix">
                <text class="action_title">发送名片</text>
            </view>
            <view class="action_item">
                <img src="../../static/images/publish.png" alt="" class="action_img" mode="widthFix">
                <text class="action_title">发表项目</text>
            </view>

            <view class="action_item">
                <img src="../../static/images/accept.png" alt="" class="action_img" mode="widthFix">
                <text class="action_title">承接项目</text>
            </view>
            <view class="action_item">
                <img src="../../static/images/designer.png" alt="" class="action_img" mode="widthFix">
                <text class="action_title">成为设计师</text>
            </view>
        </view>
        <view class="project_swiper">
            <swiper class="swiper" :indicator-dots="indicatorDots"
                    :autoplay="autoplay" :interval="interval" :duration="duration"
                    :indicator-active-color="activeDotColor">
                <swiper-item class="swiper_item" v-for="item in projects" :key="item.id">
                    <img :src="item.thumb" alt="" class="project_img" mode="widthFix" >
                </swiper-item>

            </swiper>
        </view>
        <view class="project_list">
            <my-card :list="projectList"></my-card>
        </view>

    </view>

</template>

<script>
  // import {swiper} from '@dcloudio/uni-ui'
  import myCard from "@/components/my-card";
  export default {
    name: "home",
    data(){
      return {
        indicatorDots: true,
        autoplay: true,
        interval: 2000,
        duration: 500,
        activeDotColor:'#F7734F',
        projects:[
          {id:0,title:'雄安某景区投标项目',thumb:'/static/images/park.jpeg',info:'30亩/庭院景观/公园景观设计'},
          {id:1,title:'雄安某景区投标项目',thumb:'/static/images/park1.jpeg',info:'30亩/庭院景观/公园景观设计'},
          {id:2,title:'雄安某景区投标项目',thumb:'/static/images/park2.jpeg',info:'30亩/庭院景观/公园景观设计'},
          {id:3,title:'雄安某景区投标项目',thumb:'/static/images/park3.jpeg',info:'30亩/庭院景观/公园景观设计'},
          {id:4,title:'雄安某景区投标项目',thumb:'/static/images/park4.jpeg',info:'30亩/庭院景观/公园景观设计'},
          {id:5,title:'雄安某景区投标项目',thumb:'/static/images/park5.jpeg',info:'30亩/庭院景观/公园景观设计'},
          {id:6,title:'雄安某景区投标项目',thumb:'/static/images/park.jpeg',info:'30亩/庭院景观/公园景观设计'}
        ],
        projectList:[
          {id:0,title:'雄安某景区投标项目',thumb:'/static/images/park.jpeg',info:'30亩/庭院景观/公园景观设计'},
          {id:1,title:'雄安某景区投标项目',thumb:'/static/images/park1.jpeg',info:'30亩/庭院景观/公园景观设计'},
          {id:2,title:'雄安某景区投标项目',thumb:'/static/images/park2.jpeg',info:'30亩/庭院景观/公园景观设计'},
          {id:3,title:'雄安某景区投标项目',thumb:'/static/images/park3.jpeg',info:'30亩/庭院景观/公园景观设计'},
          {id:4,title:'雄安某景区投标项目',thumb:'/static/images/park4.jpeg',info:'30亩/庭院景观/公园景观设计'},
          {id:5,title:'雄安某景区投标项目',thumb:'/static/images/park5.jpeg',info:'30亩/庭院景观/公园景观设计'},
          {id:6,title:'雄安某景区投标项目',thumb:'/static/images/park.jpeg',info:'30亩/庭院景观/公园景观设计'}
        ]
      }
    },
    components:{
      myCard
    },
    onLoad(){
      // wx.request({
      //   url:'http://157.122.54.189:9088/image/v3/homepage/vertical',
      //   success(res){
      //     console.log(res);
      //   }
      // })
      // this.request({
      //   url:"http://157.122.54.189:9088/image/v3/homepage/vertical",
      //   data:{
      //     state:this.state,
      //     limit:30,
      //     order:"hot",
      //     skip:0
      //   }
      // }).then(result=>{
      //   this.projects=result.res.homepage[1].items
      // })
    }
  }
</script>

<style scoped lang="scss">
.swiper{
    height: 400rpx;
    margin:20rpx;
    .swiper_item{
        background-color:#F2F2F2;
        .project_img{
            height: 400rpx;
        }
    }

}
.action_wrap{
    background-color:#F7734F;
    display: flex;
    flex-direction: row;
    text-align: center;
    .action_img{
        width:70rpx;
        height: 70rpx;
        margin:4rpx auto;
    }
    .action_item{
        width:25%;
        height: 160rpx;
        .action_title{
            color:#ffffff;
            font-size: 14px;
        }
    }

}
</style>
