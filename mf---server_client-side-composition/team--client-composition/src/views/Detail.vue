<template>
  <div>
		<Header />
    <HTMLInclude :src="'https://server-rendered-detail-fragment.lukaskirner.now.sh/detail/' + $route.params.id" />
  </div>
</template>

<script>
import Header from '../components/Header'
import HTMLInclude from '../components/HTMLInclude'

export default {
	name: 'detail',
	components: {
		Header,
		HTMLInclude
	}	
}
</script>
