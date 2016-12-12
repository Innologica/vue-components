import Clockpicker from './components/Clockpicker.vue'

const SmartAdminComponents = {
  Clockpicker,

  install (Vue) {
    Vue.components('clockpicker', Clockpicker)
  }
}

module.exports = SmartAdminComponents
