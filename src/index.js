import Clockpicker from './components/Clockpicker.vue'
import Modal from './components/Modal.vue'
import ModalDialog from './components/ModalDialog.vue'
import TagSelect from './components/TagSelect.vue'
import Datepicker from './components/Datepicker.vue'
import IonRangeSlider from './components/IonRangeSlider.vue'

const SmartAdminComponents = {
  Clockpicker,
  Modal,
  ModalDialog,
  TagSelect,
  Datepicker,
  IonRangeSlider,

  install (Vue) {
    Vue.component('Clockpicker', Clockpicker)
    Vue.component('Modal', Modal)
    Vue.component('ModalDialog', ModalDialog)
    Vue.component('TagSelect', TagSelect)
    Vue.component('Datepicker', Datepicker)
    Vue.component('IonRangeSlider', IonRangeSlider)
  }
}

module.exports = SmartAdminComponents
