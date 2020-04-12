<template>
    <view class="project_tab">
        <view class="tab_title">
            <uni-segmented-control :current="current" :values="items.map(v=>v.title)" @clickItem="onClickItem" style-type="text" active-color="#F7734F"></uni-segmented-control>
        </view>

        <view class="tab_content">
            <view v-show="current === 0">
                <project-all></project-all>
            </view>
            <view v-show="current === 1">
                <project-tobeconfirm></project-tobeconfirm>
            </view>
            <view v-show="current === 2">
                <project-tobeallocated></project-tobeallocated>
            </view>

            <view v-show="current === 3">
                <project-indesign></project-indesign>
            </view>
            <view v-show="current === 4">
                <project-tobeaccept></project-tobeaccept>
            </view>
            <view v-show="current === 5">
                <project-completed></project-completed>
            </view>
            <view v-show="current === 6">
                <project-tobeevaluate></project-tobeevaluate>
            </view>
        </view>





    </view>

</template>

<script>
  import projectAll from './project-all'
  import projectCompleted from './project-completed'
  import projectIndesign from './project-indesign'
  import projectTobeaccept from './project-tobeaccept'
  import projectTobeallocated from './project-tobeallocated'
  import projectTobeconfirm from './project-tobeconfirm'
  import projectTobeevaluate from './project-tobeevaluate'
  import {uniSegmentedControl} from '@dcloudio/uni-ui'
  export default {
    name: "project",
    data(){
      return{
        items: [
          {title:"全部"},
          {title:"待确认"},
          {title:"待分配"},
          {title:"设计中"},
          {title:"待验收"},
          {title:"已完成"},
          {title:"待评价"},
        ],
        current: 0
      }
    },
    components: {
      projectAll,
      projectCompleted,
      projectIndesign,
      projectTobeaccept,
      projectTobeallocated,
      projectTobeconfirm,
      projectTobeevaluate,
      uniSegmentedControl
    },
    methods:{
      onClickItem(e){
        if (this.current !== e.currentIndex) {
          this.current =e.currentIndex
        }
      }
    },
    onLoad(){
      // this.request({
      //   url:'http://157.122.54.189:9088/image/v3/homepage/vertical',
      // }).then(res=>{
      //   console.log(res);
      // })
    }
  }
</script>

<style lang="scss" scoped>

.project_tab{
    .tab_title{
        margin:20rpx;
        background-color:#FEE7E1;
        border-radius: 10rpx;
        padding: 10rpx 0;
    }
}


</style>
