<template>
	<div class="detail">
		<div class="product-info-wrapper">
			<div class="image-viewer">
				<div class="image" :style="{ backgroundImage: 'url(' + item.images[imageIndex] + ')' }">
					<button @click="back" class="btn-left">prev</button>
					<button @click="next" class="btn-right">next</button>
				</div>
			</div>
			<div class="info-board">
				<h2>{{item.name}}</h2>
				<div class="collection">Collection: {{item.info.collection}}</div>
				<div class="color">Farbe: {{item.info.color}}</div>
				<div class="price"><b>{{pricetoEuro(item.price)}}</b> inkl. MwSt.</div>
				<div class="basket"><team-basket-add-btn :productid="item.id" /></div>
				<div class="shipping-info"><b>Standard Lieferung:</b> <i>Kostenlos</i></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'detail',
	props: {
		item: Object
	},
	data: function() {
		return {
			imageIndex: 0,
		}
	},
	methods: {
		pricetoEuro: function(price) {
			const formatter = new Intl.NumberFormat('de-DE', {
				style: 'currency',
				currency: 'EUR'
			})
			return formatter.format(price/100)
		},
		back: function() {
			const imgArrayLen = this.item.images.length
			if (this.imageIndex > 0) {
				this.imageIndex -=1
			} else {
				this.imageIndex = imgArrayLen - 1
			}
		},
		next: function() {
			const imgArrayLen = this.item.images.length
			if (this.imageIndex < imgArrayLen - 1) {
				this.imageIndex +=1
			} else {
				this.imageIndex = 0
			}
		},
		// basketAdd: async function(id) {
		// 	let resp = await Api.postToServer("basket", [id.toString()])
		// 	if (resp.success) {
		// 		document.dispatchEvent(new CustomEvent("basket"));
		// 	}
		// }
	}
}
</script>

<style lang="scss">
.detail {
	padding: 16px;

	.image-viewer {
		.image {
			width: 250px;
			height: 400px;
			overflow: hidden;
			background-size: cover;
			background-position: center;
			background-color: gray;
			position: relative;
			margin: 0 auto;

			button {
				position: absolute;
				cursor: pointer;
				bottom: 0;

				&.btn-left {
					left: 0;
				}

				&.btn-right {
					right: 0;
				}
			}
		}
	}

	.product-info-wrapper {
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-around;
		align-items: center;

		.image-viewer {
			flex: 1;
		}

		.info-board {
			flex: 1;

			.basket {
				margin-top: 10px;

				button {
					border: none;
					padding: 10px;
					background-color: #003C7E;
					color: white;
					cursor: pointer;
				}
			}

			.shipping-info {
				font-size: 12px;
			}
		}
	}
}
</style>
