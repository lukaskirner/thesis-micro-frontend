<template>
	<HTMLInclude :src="'https://server-rendered-header-fragment.lukaskirner.now.sh/' + this.$props.gender" />
</template>

<script>
import HTMLInclude from '../components/HTMLInclude'

export default {
	name: 'header',
	props: {
		gender: { type: String, default: '' }
	},
	components: {
		HTMLInclude
	}
}
</script>
