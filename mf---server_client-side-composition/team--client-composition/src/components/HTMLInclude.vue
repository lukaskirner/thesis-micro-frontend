<template>
	<div>
		<div v-html="respondedHTML"></div>
		<div v-html="respondedCSS"></div>
		<div v-html="respondedJS"></div>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	name: 'HTMLInclude',
	props: {
		src: String
	},
	data: function() {
		return {
			respondedHTML: '',
			respondedCSS: '',
			respondedJS: ''
		}
	},
	created: function() {
		this.fetchHTML()
	},
	methods: {
		fetchHTML: function() {
			axios.get(this.$props.src).then(resp => {
				this.respondedHTML = resp.data
				const linkArray = resp.headers['link'].split(',')	

				if (linkArray.length > 0) {
					const cssLink = linkArray[0]
					const cssURL = cssLink.substring(cssLink.lastIndexOf("<") + 1, cssLink.lastIndexOf(">"));
					this.respondedCSS = `<link rel="stylesheet" href="${cssURL}">`

					if (linkArray.length > 1) {
						const jsLink = linkArray[1]
						const jsURL = jsLink.substring(jsLink.lastIndexOf("<") + 1, jsLink.lastIndexOf(">"));
						let script = document.createElement('script')
						script.setAttribute('src', jsURL)
						document.head.appendChild(script)
					}
				}
			})
			.catch(error => {
				console.log(error)
			})
		}
	}
}
</script>
