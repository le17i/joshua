import JoshuaButton from './Button'
import JoshuaFooter from './Footer'
import JoshuaToolbar from './Toolbar'

const Components = {
  JoshuaButton,
  JoshuaFooter,
  JoshuaToolbar
}

const install = function(Vue) {
  Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name])
  })
}

export default install
