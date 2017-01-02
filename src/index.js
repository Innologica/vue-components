import Clockpicker from './components/Clockpicker.vue'
import Modal from './components/Modal.vue'
import ModalDialog from './components/ModalDialog.vue'
import TagSelect from './components/TagSelect.vue'
import Datepicker from './components/Datepicker.vue'
import IonRangeSlider from './components/IonRangeSlider.vue'
import Switchbox from './components/Switchbox.vue'
import defaults from './defaults'

const SmartAdminComponents = {
    defaults,
    Clockpicker,
    Modal,
    ModalDialog,
    TagSelect,
    Datepicker,
    IonRangeSlider,
    Switchbox,

    install (Vue) {
        Vue.component('Clockpicker', Clockpicker)
        Vue.component('Modal', Modal)
        Vue.component('ModalDialog', ModalDialog)
        Vue.component('TagSelect', TagSelect)
        Vue.component('Datepicker', Datepicker)
        Vue.component('IonRangeSlider', IonRangeSlider)
        Vue.component('Switchbox', Switchbox)
    }
}

module.exports = SmartAdminComponents
