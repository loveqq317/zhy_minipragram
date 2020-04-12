<template>
    <view class="form">
        <view class="form_title">我是标题</view>
        <view class="form_content">
           <slot></slot>
        </view>
    </view>
</template>

<script>
  export default {
    name: "my-form"
  }
</script>

<style scoped>

</style>
