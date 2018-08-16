<template>
	<div>
		<div class="center">
			<router-link class="tab_items" to="/goods">商品</router-link>
			<router-link class="tab_items" to="/rig">评价</router-link>
			<router-link class="tab_items" to="/seller">商家</router-link>
		</div>
		<router-view></router-view>
	</div>
</template>

<script type="text/ecmascript-6"></script>

<style lang="stylus" rel="stylesheel/stylus" type="text/css">
.center
	display:flex
	.tab_items
		display:block
		height:40px
		line-height:40px
		flex:1
		text-align:center
		color:#333
</style>
