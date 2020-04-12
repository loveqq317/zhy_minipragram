<template>
    <view class="project_wrap">
        <view class="project_item" v-for="(item,index) in list" :key="item.id">
            <view class="project_title">{{item.title}}</view>
            <img :src="item.thumb" alt="" mode="widthFix" class="project_img">
            <view class="project_info">{{item.info}}</view>
        </view>
    </view>
</template>

<script>
  export default {
    name: "my-card",
    props:{
      list:[]
    },
    data(){
      return{

      }
    },
  }
</script>

<style scoped lang="scss">
.project_wrap{
    display: flex;
    flex-wrap: wrap;

    .project_item{
        width:100%;
        margin:20rpx;
        background-color:#F2F2F2;
        .project_title{
            font-size: 16px;
            padding-left: 20rpx;
            background-color:#F2F2F2;
            height:80rpx;
            line-height: 80rpx;
            color:#000;
        }
        .project_img{
            width:96%;
            margin:0 auto;
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
