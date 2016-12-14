<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <clockpicker data-autoclose="true"></clockpicker>
    <modal-dialog :show="dialog" :onClose="close">

      <div>
        <h1>TEST</h1>
      </div>
    </modal-dialog>
    <button @click="openDialog">OPEN DIALOG</button>

    <tag-select v-model="options"></tag-select>
    <hr/>
    <datepicker></datepicker>
    <br/>
    <div class="well">
      <div class="col-md-6 col-md-offset-1">
        <ion-range-slider></ion-range-slider>
      </div>
    </div>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Clockpicker from './components/Clockpicker'
import ModalDialog from './components/ModalDialog'
import TagSelect from './components/TagSelect'
import Datepicker from './components/Datepicker'
import IonRangeSlider from './components/IonRangeSlider'

export default {
  name: 'app',
  components: {
    Hello,
    Clockpicker,
    ModalDialog,
    TagSelect,
    Datepicker,
    IonRangeSlider
  },
  data: () => {
    return {
      dialog: false,
      options: {}
    }
  },
  methods: {
    openDialog () {
      this.dialog = true
    },
    close () {
      this.dialog = false
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
