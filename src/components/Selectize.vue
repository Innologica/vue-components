<template>
    <select :multiple="multi"></select>
</template>
<script>
    export default {
        props: {
            options: {
                type: Array
            },
            value: [String, Array, Number],
            settings: {
                type: Object,
                default () {
                    return {
                        persist: false,
                        create: true
                    }
                }
            },
            tags: Array,
            multi: {
                type: Boolean,
                default: false
            }
        },
        mounted: function () {
            let vm = this

            let options = []
            if (this.tags) {
                options = this.tags.map((obj) => {
                    return {value: obj, text: obj}
                })
            } else {
                options = this.options
            }
            let settings = {
                options: options,
                items: this.value,
                persist: this.settings.persist,
                create: this.settings.create
            }

            let $select = $(this.$el)
                .selectize(settings)
                // emit event on change.
                .on('change', function (e) {
                    vm.$emit('input', vm.selectize.getValue())
                })

            // fetch the instance
            this.selectize = $select[0].selectize
            this.selectize.setValue(this.value, true)
        },
        watch: {
            value: function (value) {
                var vm = this
                // update value
                this.selectize.off('change')
                this.selectize.setValue(value, true)
                this.selectize.on('change', function (e) {
                    vm.$emit('input', vm.selectize.getValue())
                })
            },
            options: function (options) {
                var newOptions = options.map((obj) => {
                    return {value: obj, text: obj}
                })
                this.selectize.clearOptions()
                this.selectize.addOption(newOptions)
                this.selectize.refreshOptions()
            }
        },
        destroyed: function () {
            $(this.$el).off()
            this.selectize.destroy()
        }
    }

</script>
