<template>
    <modal :show="show" :on-close="close" :transition="'slide'">
        <div class="modal-dialog" :class="[ modalClass ]">
            <transition name="slide" >
                <div class="modal-content" v-show="show">
                    <slot name="modal-header">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true" @click="close">
                                ×
                            </button>
                            <h4 class="modal-title">{{title}}</h4>
                        </div>
                    </slot>
                    <div class="modal-body">
                        <slot></slot>
                    </div>
                    <slot name="modal-footer">
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal" @click="close">
                                Cancel
                            </button>
                            <button type="button" class="btn btn-primary" @click="save">
                                Save
                            </button>
                        </div>
                    </slot>
                </div>
            </transition>
        </div>
    </modal>
</template>

<style>
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        transition: opacity .2s ease;
    }

    .modal-container {
        /*width: 600px;*/
        margin: 40px auto 0;
        /*padding: 20px 30px;*/
        /*background-color: #fff;*/
        border-radius: 6px;
        /*box-shadow: 0 2px 8px rgba(0, 0, 0, .33);*/
        transition: all .2s ease;
    }

    .modal-header h3 {
        margin-top: 0;
        color: #42b983;
    }

    .modal-body {
        margin: 20px 0;
    }

    /*Side panel*/
    .modal-dialog.side-panel .modal-content {
        border: none;
        position: fixed;
        height: 100%;
        top: 0;
        right: 0;
        z-index: 1051;
        /*width: 30%;*/
        padding-top: 50px;
        padding-bottom: 73px;
        border-radius: 0;
    }

    .modal-dialog.side-panel .modal-header {
        position: absolute;
        width: 100%;
        height: 50px;
        line-height: 50px;
        background: rgba(255, 255, 255, 0.96);
        z-index: 1050;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08);
        top: 0;
        right: 0;
        left: 0;
    }

    .modal-dialog.side-panel .modal-header .close {
        position: absolute;
        top: 20px;
        right: 15px;
    }

    .modal-dialog.side-panel .modal-footer {
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
        height: 73px;
    }

    @media only screen and (min-width: 768px) {
        .side-panel-container, .modal-dialog.side-panel .modal-lg .modal-content {
            width: 70%;
        }

        .side-panel-container, .modal-dialog.side-panel .modal-content {
            width: 40%;
        }
    }

    @media only screen and (min-width: 1170px) {
        .side-panel-container, .modal-dialog.side-panel .modal-lg .modal-content {
            width: 50%;
        }

        .side-panel-container, .modal-dialog.side-panel .modal-content {
            width: 30%;
        }
    }

    /*Scale in*/
    .scale-enter, .scale-leave-active {
        opacity: 0;
    }

    .scale-enter .modal-container,
    .scale-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }

    /*Fade in*/
    .fade-enter, .fade-leave-active {
        opacity: 0
    }

    .fade-enter-active .modal-container,
    .fade-leave-active .modal-container {
        transition: opacity .5s
    }

    /*Slide in*/
    .slide-enter, .slide-leave-active {
        transform: translateX(0);
        /*visibility: hidden;*/
        height: 100%;
    }

    .slide-enter-active .modal-content,
    .slide-leave-active .modal-content {
        transform: translateX(100%);
        visibility: visible;
        height: 100%;
    }

</style>

<script>
    import Modal from './Modal.vue'
    // import '../assets/slide-panel.css'

    export default {
        components: {Modal},

        props: {
            show: Boolean,
            onClose: Function,
            onSave: Function,
            title: {
                type: String,
                default: 'Dialog title'
            },
            modalClass: {
                type: String,
                default: 'modal-xs'
            },
            transition: String
        },
        methods: {
            close: function () {
                this.onClose && this.onClose()
            },
            save: function () {
                if (!this.onSave) {
                    console.warn('No callback for onSave event in modal!')
                }
                this.onSave && this.onSave()
            }
        }
    }

</script>
