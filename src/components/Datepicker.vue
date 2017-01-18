<template>
    <input type="text"/>
</template>

<script>
    import defaults from '../defaults'

    export default {
        props: ['options', 'value'],
        data: () => {
            return {
                param: null
            }
        },
        mounted: function () {
            var vm = this
            var el = $(this.$el)
            var options = Object.assign({}, defaults.datepicker, this.options)

            this.param = this.value

            // init datepicker
            el.datepicker(options)
                .datepicker('setDate', this.value)
                // emit event on change.
                .on('change', function () {
                    let date = new Date(this.value)
                    date.setHours(vm.param.getHours())
                    date.setMinutes(vm.param.getMinutes())
                    date.setSeconds(vm.param.getSeconds())
                    vm.$emit('input', date)
                })
        },
        destroyed: function () {
            $(this.$el).datepicker('destroy')
        },
        watch: {
            value (value) {
                this.param = value
                $(this.$el).datepicker('setDate', value)
            }
        }
    }
</script>