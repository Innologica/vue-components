<template>
    <modal :show="show" :on-close="close" :transition="transition" :modal-class="modalClass">
        <div class="modal-dialog" @click.stop>
            <div class="modal-content">
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
    .modal-container.side-panel {
        border: none;
        position: fixed;
        top: 0;
        right: 0;
        z-index: 1051;
        /*width: 30%;*/
        border-radius: 0;
        margin: 0;
        height: 100%;
    }

    .modal-container.side-panel  .modal-dialog .modal-content {
        width: 100%;
        height: 100%;
        right: 0;
        margin: 0;
        padding-top: 50px;
        padding-bottom: 73px;
        border-radius: 0;
        border: none;
    }

    .modal-container.side-panel  .modal-dialog {
        position: absolute;
        right: 0;
        margin: 0;
        height: 100%;
        width: 100%;
    }

    .modal-container.side-panel  .modal-dialog .modal-header {
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

    .modal-container.side-panel .modal-dialog .modal-header .close {
        position: absolute;
        top: 20px;
        right: 15px;
    }

    .modal-container.side-panel .modal-dialog .modal-footer {
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
        height: 73px;
    }

    @media only screen and (max-width: 768px) {
        .modal-container.side-panel {
            width: 80%;
        }
    }
    @media only screen and (min-width: 768px) {
        .modal-container.side-panel.modal-lg {
            width: 65%;
        }

        .modal-container.side-panel {
            width: 40%;
        }
    }

    @media only screen and (min-width: 1170px) {
        .modal-container.side-panel.modal-lg {
            width: 50%;
        }

        .modal-container.side-panel {
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
    }

    .slide-enter-active .modal-container,
    .slide-leave-active .modal-container {
        transform: translateX(110%);
        transition: 0.3s ease-out;
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
