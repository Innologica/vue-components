<template>
    <transition :name="transition">
        <div class="modal-mask" @click="close" v-show="show">
            <div class="modal-container" :class="[ modalClass ]">
                <slot></slot>
            </div>
        </div>
    </transition>
</template>

<script>
    import {addClass, removeClass} from '../helpers/css.js'

    export default{
        template: '#modal-template',
        props: {
            show: Boolean,
            onClose: Function,
            transition: {
                type: String,
                default: 'scale'
            },
            modalClass: String
        },
        methods: {
            close () {
                this.onClose()
            }
        },
        mounted () {
            document.addEventListener('keydown', function (e) {
                if (this.show && e.keyCode === 27) {
                    this.onClose()
                }
            }.bind(this))
        },
        watch: {
            show (value) {
                if (value) {
                    addClass('modal-open')
                } else {
                    removeClass('modal-open')
                }
            }
        }
    }

</script>
