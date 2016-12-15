<template>
    <div id="app" class="container">
        <div class="row">
            <div class="col-md-4" style="text-align: right">
                <img src="./assets/logo.png">
            </div>
            <div class="col-md-8" style="text-align: left;">
                <h1>Vue JS component collection</h1>
                <h3 class="text-muted">(Almost) All of the components used in SmartAdmin template</h3>
            </div>
        </div>

        <div class="row" id="clockpicker">
            <h2 class="page-header">Clockpicker</h2>
            <p>Clockpicker component wrapper of <a href="https://github.com/weareoutman/clockpicker" target="_blank">
                https://github.com/weareoutman/clockpicker</a></p>

            <clockpicker data-autoclose="true"></clockpicker>

            <h2 class="page-header">Datepicker</h2>
            <datepicker></datepicker>

            <h2 class="page-header">Tag select (selectize)</h2>
            <tag-select :options="options"></tag-select>

            <h2 class="page-header">Modal</h2>
            <modal-dialog :show="dialog" :onClose="close">

                <div>
                    <h1>TEST</h1>
                </div>
            </modal-dialog>
            <button @click="openDialog">OPEN DIALOG</button>

            <h2 class="page-header">IonRangeSlider</h2>
            <div class="well well-lg">
                <ion-range-slider></ion-range-slider>
            </div>
        </div>
    </div>
</template>

<script>
    import Clockpicker from './components/Clockpicker'
    import ModalDialog from './components/ModalDialog'
    import TagSelect from './components/TagSelect'
    import Datepicker from './components/Datepicker'
    import IonRangeSlider from './components/IonRangeSlider'

    export default {
        name: 'app',
        components: {
            Clockpicker,
            ModalDialog,
            TagSelect,
            Datepicker,
            IonRangeSlider
        },
        data: () => {
            return {
                dialog: false,
                options: [
                    'nikola',
                    'kostadinov'
                ]
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
        /*text-align: center;*/
        color: #2c3e50;
        margin-top: 60px;
    }

</style>
