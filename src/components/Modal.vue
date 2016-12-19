<template>
  <transition name="modal">
    <div class="modal-mask" @click="close" v-show="show">
      <div class="modal-container" @click.stop>
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
  export default{
      template: '#modal-template',
      props: ['show', 'onClose'],
      methods: {
          close: function () {
              this.onClose()
          }
      },
      mounted: function () {
          document.addEventListener('keydown', function (e) {
              if (this.show && e.keyCode === 27) {
                  this.onClose()
              }
          }.bind(this))
      }
  }

</script>
