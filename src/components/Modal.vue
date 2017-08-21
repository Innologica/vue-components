<template>
    <transition name="fade">
        <div class="modal" @click="close" v-show="show">
            <transition :name="transition">
                <slot></slot>
            </transition>
        </div>
    </transition>
</template>

<script>
    import {addClass, removeClass} from '../helpers/css.js'

    export default {
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

<style>
    .modal {
        display: block;
        transition: opacity .2s ease;
    }

    .modal-dialog  {
        transition: all .2s ease;
    }

    /*Scale in*/
    .scale-enter, .scale-leave-active {
        opacity: 0;
    }

    .scale-enter,
    .scale-leave-active {
        transform: scale(1.1);
    }

    /*Fade in*/
    .fade-enter, .fade-leave-active {
        opacity: 0
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .2s
    }

    /*Slide in*/
    .slide-enter, .slide-leave {
        transform: translateX(100%);
    }

    .slide-enter .modal-dialog,
    .slide-leave-active .modal-dialog {
        transform: translateX(0);
        transition: all .2s ease;
    }
</style>