<template>
  <select multiple></select>
</template>
<script>
  export default {
      props: ['options', 'value', 'settings'],
      mounted: function () {
          var vm = this
          // var settings = this.settings ? JSON.parse(this.settings) : {allow_single_deselect: true}

          if (this.options) {
              var options = this.options.map((obj) => {
                  return { value: obj, text: obj }
              })
          }
          var settings = {
              options: options,
              items: this.value,
              persist: false,
              create: true
          }

          var $select = $(this.$el)
          .selectize(settings)
          // emit event on change.
          .on('change', function (e) {
              vm.$emit('input', vm.selectize.getValue())
          })

          // fetch the instance
          this.selectize = $select[0].selectize
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
                  return { value: obj, text: obj }
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
