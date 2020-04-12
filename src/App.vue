<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
      globalData:{
		  base:"www.goole.com"
      }
	}
</script>

<style lang="scss">
    @import "./static/styles/base.wxss";
    @import "./static/styles/iconfont.wxss";
	/*每个页面公共css */
    /* #ifdef APP-PLUS ||MP-WEIXIN */

    /* #endif */

</style>
