<template>
    <img @click="handleClickImg" class="img-border" :src="src" alt="">
</template>

<script>
  export default {
    name: "img-border",
    props:{
      src:String
    },
    methods:{
      handleClickImg(){
        console.log('hh');
        this.$emit("srcChange",this.src)
      }
    }
  }
</script>

<style scoped>
.img-border{
    border-radius: 50px;
}
</style>
