<template>
    <div>
        <h2 class="page-header">Clockpicker</h2>
        <p>Clockpicker component wrapper of <a href="https://github.com/weareoutman/clockpicker" target="_blank">
            https://github.com/weareoutman/clockpicker</a></p>

        <clockpicker v-model="time" data-autoclose="true"></clockpicker>
    </div>
</template>

<script>
    import Clockpicker from '../components/Clockpicker'

    export default {
        components: {
            Clockpicker
        },
        data () {
            return {
                time: new Date(2017, 1, 1, 8, 5)
            }
        }
    }
</script>