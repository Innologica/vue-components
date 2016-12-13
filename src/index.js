import Clockpicker from './components/Clockpicker.vue'
import Modal from './components/Modal.vue'
import ModalDialog from './components/ModalDialog.vue'
import TagSelect from './components/TagSelect.vue'

const SmartAdminComponents = {
  Clockpicker,
  Modal,
  ModalDialog,
  TagSelect,

  install (Vue) {
    Vue.component('Clockpicker', Clockpicker)
    Vue.component('Modal', Modal)
    Vue.component('ModalDialog', ModalDialog)
    Vue.component('TagSelect', TagSelect)
  }
}

module.exports = SmartAdminComponents
