<template>
    <input :value="value" type="text"/>
</template>

<script type="">
    import defaults from '../defaults'

    export default {
        props: ['options', 'value'],
        mounted: function () {
            var vm = this
            var el = $(this.$el)
            var options = Object.assign({}, defaults.datepicker, this.options)

            // init datepicker
            el.datepicker(options)
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