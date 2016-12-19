<!--template for clockpicker widget-->
<template>
  <input :value="value"/>
</template>

<script>
  import defaults from '../defaults'
  import clockpicker from 'clockpicker'

  export default{
      template: '#clockpicker',
      props: ['options', 'value'],
      mounted: function () {
          console.log(clockpicker)
          var vm = this
          var options = $.extend(defaults.clockpicker, this.options)

          $(this.$el)
          .val(this.value)
          // init clockpicker
          .clockpicker(options)
          // emit event on change.
          .on('change', function () {
              vm.$emit('input', this.value)
          })
      },
      watch: {
          value: function (value) {
              // update value
              $(this.$el).val(value)
          }
      },
      destroyed: function () {
          $(this.$el).off()
          $(this.$el).remove()
      }
  }
</script>