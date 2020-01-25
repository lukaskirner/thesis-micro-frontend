<template>
  <nav>
		<ul>
			<li>
				<a :href="HOME_URL + '/#/men'">Herren</a>
			</li>
			<li>
				<a :href="HOME_URL + '/#/woman'">Damen</a>
			</li>
			<li class="basket">
				<a href="https://www.inovex.de">Warenkorb: {{basketCount}}</a>
			</li>
		</ul>
	</nav>
</template>

<script>
import Api from '../core/api'
import { HOME_URL } from '../config'

export default {
	name: 'NavigationBar',
	data: function() {
		return {
			basketCount: 0,
			HOME_URL: HOME_URL
		}
	},
	created: async function() {
		this.fetchBasket()
		document.addEventListener("basket", () => this.fetchBasket())
	},
	methods: {
		fetchBasket: async function() {
			var resp = await Api.getFromServer("basket", true)
			if (resp.success) {
				this.basketCount = resp.data.content.length
			}
		}
	}
}
</script>

<style lang="scss">
nav {
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #003C7E;
  }

  li {
    float: left;
    border-right:1px solid #bbb;

    &.basket {
      float: right;
    }
  }

  li:last-child {
    border-right: none;
  }

  li {
    a {
      display: block;
      color: white;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
      border: none;
      background-color: transparent;
      cursor: pointer;

      &:focus {
        outline: none;
      }
    }

    &:hover:not(.active) {
      background-color: #111;
    }

    &.active {
      background-color: #2E7D32;
    }
  }
}
</style>
