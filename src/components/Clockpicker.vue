<!--template for clockpicker widget-->
<template>
  <input :value="value"/>
</template>

<script>
  import defaults from '../defaults'

  export default{
      template: '#clockpicker',
      props: ['options', 'value'],
      mounted: function () {
          var vm = this
          var options = Object.assign({}, defaults.clockpicker, this.options)

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