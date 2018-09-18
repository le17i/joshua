import Vue from 'vue'
import Footer from './Footer'
import Toolbar from './Toolbar'

const Components = {
  Footer,
  Toolbar
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components
