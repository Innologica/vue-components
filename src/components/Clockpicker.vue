<!--template for clockpicker widget-->
<template>
  <input />
</template>

<script>
  import defaults from '../defaults'

  export default{
      template: '#clockpicker',
      props: ['options', 'value'],
      data () {
        return {
          param: null
        }
      },
      mounted: function () {
          var vm = this
          var options = Object.assign({}, defaults.clockpicker, this.options)

          if (this.value instanceof Date) {
            this.param = this.value
          }

          $(this.$el)
            .val(this.param ? this.param.getHours() + ':' + this.param.getMinutes() : this.value)
            // init clockpicker
            .clockpicker(options)
            // emit event on change.
            .on('change', function () {
                if (vm.param) {
                    var t = this.value.split(':')
                    vm.param.setHours(t[0])
                    vm.param.setMinutes(t[1])
                }
                vm.$emit('input', vm.param ? new Date(vm.param.getTime()) : this.value)
            })
      },
      watch: {
          value: function (value) {
              this.param = this.value instanceof Date ? this.value : null

              // update value
              $(this.$el).val(this.param ? this.param.getHours() + ':' + this.param.getMinutes() : value)
          }
      },
      destroyed: function () {
          $(this.$el).off()
          $(this.$el).remove()
      }
  }
</script>