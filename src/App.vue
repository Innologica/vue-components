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
            <modal-demo></modal-demo>

            <clockpicker-demo></clockpicker-demo>

            <datepicker-demo></datepicker-demo>

            <h2 class="page-header">Tag select (selectize)</h2>
            <tag-select :options="options"></tag-select>

            <h2 class="page-header">IonRangeSlider</h2>
            <div class="well well-lg">
                <ion-range-slider v-model="progress"></ion-range-slider>
            </div>
			
			<switchbox-demo></switchbox-demo>
			
			<activity-timeline></activity-timeline>
        </div>
    </div>
</template>

<script>
    import TagSelect from './components/TagSelect'
    import IonRangeSlider from './components/IonRangeSlider'
    import ModalDemo from './demo/Modal.vue'
    import ClockpickerDemo from './demo/Clockpicker.vue'
    import SwitchboxDemo from './demo/Switchbox.vue'
    import DatepickerDemo from './demo/Datepicker.vue'
    import ActivityTimeline from './demo/ActivityTimeline'

    export default {
        name: 'app',
        components: {
            TagSelect,
            IonRangeSlider,
            ActivityTimeline,

            ModalDemo,
            ClockpickerDemo,
            SwitchboxDemo,
            DatepickerDemo
        },
        data: () => {
            return {
                options: [
                    'nikola',
                    'kostadinov'
                ],
                progress: 51
            }
        }
    }

</script>

