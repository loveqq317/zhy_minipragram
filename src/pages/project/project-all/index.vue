<template>
    <view>
        <text v-show="false">全部</text>
        <view class="project_wrap">
            <view class="project_item" v-for="(item,index) in projects" :key="item.id">
                <view class="project_title">雄安某景区投标项目</view>
                <img :src="item.thumb" alt="" mode="widthFix">
                <view class="project_info">30亩/庭院景观/公园景观设计</view>
            </view>
        </view>

    </view>
</template>

<script>
  export default {
    name: "index",
    props:{
      state:''
    },

    data(){
      return{
        projects:[]
      }
    },
    mounted(){
      this.request({
        url:"http://157.122.54.189:9088/image/v3/homepage/vertical",
        data:{
          state:this.state,
          limit:30,
          order:"hot",
          skip:0
        }
      }).then(result=>{
        this.projects=result.res.homepage[1].items
      })
    }
  }
</script>

<style scoped lang="scss">
.project_wrap{
    display: flex;
    flex-wrap: wrap;
    .project_item{
        width:100%;
        margin:20rpx;
        .project_title{
            font-size: 16px;
            padding-left: 20rpx;
            background-color:#F2F2F2;
            height:80rpx;
            line-height: 80rpx;
            color:#000;
        }
        .project_info{
            background-color:#F2F2F2;
            color:#666;
            height:60rpx;
            line-height: 60rpx;
            padding-left:20rpx;
        }


    }

}
</style>
