<template>
    <input :value="value" type="text"/>
</template>

<script>
//    import defaults from '../defaults'

    export default {
        props: ['options', 'value'],
        mounted: function () {
            var vm = this
            var el = $(this.$el)
//            var options = $.extend(defaults.datepicker, this.options)

            // init datepicker
            el.datepicker(this.options)
            .datepicker('setDate', this.value)
            // emit event on change.
            .on('change', function () {
                vm.$emit('input', this.value)
            })
        },
        watch: {
            value: function (value) {
                // update valu
                $(this.$el).val(value)
            }
        },
        destroyed: function () {
            $(this.$el).datepicker('destroy')
        }
    }
</script>