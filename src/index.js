import Clockpicker from './components/Clockpicker.vue'
import ModalDialog from './components/ModalDialog.vue'
import TagSelect from './components/TagSelect.vue'

const SmartAdminComponents = {
  Clockpicker,
  ModalDialog,
  TagSelect,

  install (Vue) {
    Vue.components('Clockpicker', Clockpicker)
    Vue.components('ModalDialog', ModalDialog)
    Vue.components('TagSelect', TagSelect)
  }
}

module.exports = SmartAdminComponents
