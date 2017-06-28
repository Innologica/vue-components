import Clockpicker from './components/Clockpicker.vue'
import Modal from './components/Modal.vue'
import ModalDialog from './components/ModalDialog.vue'
import Selectize from './components/Selectize.vue'
import Datepicker from './components/Datepicker.vue'
import IonRangeSlider from './components/IonRangeSlider.vue'
import Switchbox from './components/Switchbox.vue'
import ActivityTimeline from './components/ActivityTimeline.vue'
import defaults from './defaults'

export default {
    defaults,
    Clockpicker,
    Modal,
    ModalDialog,
    Selectize,
    Datepicker,
    IonRangeSlider,
    Switchbox,
    ActivityTimeline,

    install (Vue) {
        Vue.component('Clockpicker', Clockpicker)
        Vue.component('Modal', Modal)
        Vue.component('ModalDialog', ModalDialog)
        Vue.component('Selectize', Selectize)
        Vue.component('Datepicker', Datepicker)
        Vue.component('IonRangeSlider', IonRangeSlider)
        Vue.component('Switchbox', Switchbox)
        Vue.component('ActivityTimeline', ActivityTimeline)
    }
}

export { Clockpicker, Modal, ModalDialog, Selectize, Datepicker, IonRangeSlider, Switchbox, ActivityTimeline }
