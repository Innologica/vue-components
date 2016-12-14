<template>
    <input :value="value" type="text"/>
</template>

<script>
    export default {
      props: ['options', 'value'],
      mounted: function () {
        var vm = this
        var el = $(this.$el)
        options = {
          dateFormat: 'yy-mm-dd',
          prevText: '<i class="fa fa-chevron-left"></i>',
          nextText: '<i class="fa fa-chevron-right"></i>'
        }

        var options = {}
        if (this.options) {
          options = $.extend(options, this.options)
        }

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