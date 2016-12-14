<template>
    <input :value="value" />
</template>

<script>
    export default {
      props: ['options', 'value'],
      mounted: function () {
        var vm = this

        $(this.$el)
          .ionRangeSlider(this.options)
          // emit event on change.
          .on('change', function () {
            vm.$emit('input', this.value)
          })

        this.$slider = $(this.$el).data('ionRangeSlider')
      },
      watch: {
        options: function (value) {
          this.$slider.update(value)
        }
      },
      destroyed: function () {
        this.$slider.destroy()
      }
    }
</script>