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

            this.param = this.value instanceof Date ? this.value : null

            // init datepicker
            el.datepicker(options)
                .datepicker('setDate', this.value)
                // emit event on change.
                .on('change', function () {
                    // preserve time part
                    if (vm.param) {
                        var date = new Date(this.value)
                        date.setHours(vm.param.getHours())
                        date.setMinutes(vm.param.getMinutes())
                        date.setSeconds(vm.param.getSeconds())
                        date.setMilliseconds(vm.param.getMilliseconds())
                        vm.$emit('input', date)
                    } else {
                        vm.$emit('input', this.value)
                    }
                })
        },
        destroyed: function () {
            $(this.$el).datepicker('destroy')
        },
        watch: {
            value (value) {
                this.param = this.value instanceof Date ? this.value : null
                $(this.$el).datepicker('setDate', value)
            }
        }
    }
</script>