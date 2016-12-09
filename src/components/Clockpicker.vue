<!--template for clockpicker widget-->
<template>
  <input :value="value"/>
</template>

<script>
  export default{
    template: '#clockpicker',
    props: ['options', 'value'],
    mounted: function () {
      var vm = this
      $(this.$el)
        .val(this.value)
        // init clockpicker
        .clockpicker({ data: this.options })
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