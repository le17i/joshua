import JoshuaFooter from './Footer'
import JoshuaToolbar from './Toolbar'

const Components = {
  JoshuaFooter,
  JoshuaToolbar
}

const install = function(Vue) {
  Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name])
  })
}

export default install
