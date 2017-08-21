<template>
    <modal :show="show" :on-close="close" :transition="transition" :modal-class="modalClass">
        <div class="modal-dialog" @click.stop :class="modalClass" v-show="show">
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
                        <button type="button" class="btn btn-primary" @click="save" v-show="onSave != null">
                            Save
                        </button>
                    </div>
                </slot>
            </div>
        </div>
    </modal>
</template>

<script>
    import Modal from './Modal.vue'

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
                this.onSave && this.onSave()
            }
        }
    }
</script>

<style>
    .modal {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        transition: opacity .2s ease;
        overflow: auto;
    }

    .modal-header h3 {
        margin-top: 0;
        color: #42b983;
    }

    .modal-body {
        overflow: auto;
        height: 100%;
    }

    /*Side panel*/
    .modal-dialog.side-panel {
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

    .modal-dialog.side-panel .modal-content {
        width: 100%;
        height: 100%;
        right: 0;
        margin: 0;
        padding-top: 50px;
        padding-bottom: 73px;
        border-radius: 0;
        border: none;
    }

    .side-panel.modal-dialog {
        position: absolute;
        right: 0;
        left: auto;
        visibility: visible;
        margin: 0;
        height: 100%;
        width: 100%;
    }

    .side-panel.modal-dialog .modal-header {
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

    .side-panel.modal-dialog .modal-header .close {
        position: absolute;
        top: 20px;
        right: 15px;
    }

    .side-panel.modal-dialog .modal-footer {
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
        height: 73px;
        background-color: white;
        z-index: 100;
    }

    @media only screen and (max-width: 768px) {
        .modal-dialog.side-panel {
            width: 80%;
        }
    }
    @media only screen and (min-width: 768px) {
        .modal-dialog.side-panel.modal-lg {
            width: 65%;
        }

        .modal-dialog.side-panel {
            width: 40%;
        }
    }

    @media only screen and (min-width: 1170px) {
        .modal-dialog.side-panel.modal-lg {
            width: 50%;
        }

        .modal-dialog.side-panel {
            width: 30%;
        }
    }

</style>
