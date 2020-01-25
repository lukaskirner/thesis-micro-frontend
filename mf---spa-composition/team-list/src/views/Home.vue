<template>
	<List :gender="gender" />
</template>

<script>
import List from '../components/List'

export default {
	name: 'home',
	props: {
		gender: String
	},
	components: {
		List
	}
}
</script>
