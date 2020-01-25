<template>
  <div class="home">
		<Header :gender="this.$props.gender" />
		<HTMLInclude :src="'https://server-rendered-list-fragment.lukaskirner.now.sh/' + this.$props.gender" />
  </div>
</template>

<script>
import Header from '../components/Header'
import HTMLInclude from '../components/HTMLInclude'

export default {
	name: 'home',
	props: {
		gender: String
	},
	components: {
		Header,
		HTMLInclude
	}
}
</script>
