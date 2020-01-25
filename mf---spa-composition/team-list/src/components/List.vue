<template>
  <div class="list">
		<ListItem v-for="item in items" :key="item.id" :item="item" />
  </div>
</template>

<script>
import Api from '../core/api'
import ListItem from './ListItem'

export default {
	name: 'list',
	props: {
		gender: String
	},
	components: {
		ListItem
	},
	data: function() {
		return {
			items: Object
		}
	},
	created: function() {
		this.fetchItems()
	},
	methods: {
		fetchItems: async function() {
			const resp = await Api.getFromServer(this.$props.gender)
			if (resp.success) {
				this.$data.items = resp.data
			}
		}
	}
}
</script>

<style lang="scss">
.list {
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
  //align-content: flex-start;

  .list-item {
    width: 250px;
    height: 400px;
    margin: 3px;
  }
}
</style>
