import Vue from 'vue'
import wrap from '@vue/web-component-wrapper'
import Home from './views/Home.vue'

const HomeElement = wrap(Vue, Home)
window.customElements.define('team-list', HomeElement)
