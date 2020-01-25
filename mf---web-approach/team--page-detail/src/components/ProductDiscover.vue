<template>
  <div class="discover">
		<ul>
			<li v-for="item in items" :key="item.id">
				<router-link :to="'/detail/' + item.id">
					<div :style="{ backgroundImage: 'url(' + item.images[0] + ')' }">
						<p>{{item.name}}</p>
					</div>
				</router-link>
			</li>
		</ul>
  </div>
</template>

<script>
import Api from '../core/api'
export default {
	name: 'Discover',
	props: {
		id: String
	},
	data: function() {
		return {
			items: []
		}
	},
	created: async function() {
		var resp = await Api.getFromServer(`discover/${this.$props.id}`)
		if (resp.success) {
			this.items = resp.data
		}
	}
}
</script>

<style lang="scss">
.discover {
	margin-top: 50px;

	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;

		li {
			display: inline-block;
			
			a {
				color: black;

				div {
					width: 125px;
					height: 200px;
					margin: 3px;
					background-color: gray;
					overflow: hidden;
					background-size: cover;
					background-position: center;
					position: relative;

					p {
						background-color: white;
						position: absolute;
						bottom: 0;
					}
				}
			}
		}
	}
}
</style>
