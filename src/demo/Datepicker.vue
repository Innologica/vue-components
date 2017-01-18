<template>
    <div>
        <h2 class="page-header">Datepicker</h2>
        <datepicker v-model="value"></datepicker>
    </div>
</template>

<script>
    import Datepicker from '../components/Datepicker'

    export default{
        components: {
            Datepicker
        },
        data () {
            return {
                value: new Date()
            }
        }
    }

</script>
