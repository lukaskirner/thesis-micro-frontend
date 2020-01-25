<template>
  <a v-if="item" :href="'#/detail/' + item.id" class="list-item">
		<div class="list-item--item" :style="{ backgroundImage: 'url(' + item.images[0] + ')' }">
			<div class="item-info">
				{{item.name}} - {{item.price}}
			</div>
		</div>
	</a>
</template>

<script>
export default {
	name: 'list-item',
	props: {
		item: Object
	},
}
</script>

<style lang="scss">
.list-item {
	color: black;
	
	.list-item--item {
		width: 100%;
		height: 100%;
		overflow: hidden;
		background-size: cover;
		background-position: center;
		position: relative;
	
		.item-info {
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			height: 50px;
			text-align: center;
			background-color: white;
		}
	}
}
</style>
