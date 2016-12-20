<template>
    <modal :show="show" :on-close="close">
        <div class="modal side-panel">
            <div class="modal-dialog" :class="[ modalClass ]">
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
        width: 600px;
        margin: 40px auto 0;
        /*padding: 20px 30px;*/
        background-color: #fff;
        border-radius: 6px;
        /*box-shadow: 0 2px 8px rgba(0, 0, 0, .33);*/
        transition: all .2s ease;
        /*font-family: Helvetica, Arial, sans-serif;*/
    }

    .modal-header h3 {
        margin-top: 0;
        color: #42b983;
    }

    .modal-body {
        margin: 20px 0;
    }


    .modal-enter, .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }


</style>

<script>
import Modal from './Modal.vue'
// import '../assets/slide-panel.css'

export default {
    components: { Modal },

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
        }
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
