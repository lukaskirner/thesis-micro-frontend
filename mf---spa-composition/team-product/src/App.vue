<template>
	<div>
		<div v-if="item">
			<Detail :item="item" />
		</div>
	</div>
</template>

<script>
import Detail from './components/Detail.vue'
import Api from './core/api'

export default {
	name: 'app',
	props: {
		id: String
	},
	data: function() {
		return {
			item: null
		}
	},
	components: {
		Detail
	},
	created: function() {
		this.fetchDetails(this.$props.id)
	},
	watch: {
		id: function(newVal) {
			// console.log('Prop changed: ', newVal, ' | was: ', oldVal)
			this.fetchDetails(newVal)
		}
	},
	methods: {
		fetchDetails: async function(id) {
			if (id) {
				var resp = await Api.getFromServer(`products/${id}`)
				if (resp.success) {
					// console.log(resp.data)
					this.item = resp.data
				}
			}
		}
	}
}
</script>
