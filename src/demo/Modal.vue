<template>
    <div>
        <h2 class="page-header">Modal</h2>
        <p>
            Vue JS implementation of bootstrap modal dialogs. Added side panel version.
        </p>
        <modal-dialog :show="dialog" :onClose="close" transition="slide" modal-class="side-panel">
            <div>
                <h1>TEST</h1>
            </div>
        </modal-dialog>
        <button @click="openDialog">OPEN DIALOG</button>

        <h2>API</h2>
        <ul class="nav nav-tabs" role="tablist">
            <li role="presentation" class="active">
                <a href="#">Props</a>
            </li>
            <li role="presentation">
                <a href="#">Slots</a>
            </li>
            <li role="presentation">
                <a href="#">Events</a>
            </li>
        </ul>

        <div class="tab-content">
            <div role="tabpanel" class="tab-pane active" id="props">
                <table class="table ">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>show</td>
                        <td>Boolean</td>
                        <td><code>false</code></td>
                        <td>Determines whether or not the modal is shown.

                            Changing this value will show/hide the modal.
                        </td>
                    </tr>
                    <tr>
                        <td>onClose</td>
                        <td>Function</td>
                        <td class="text-muted">null</td>
                        <td>Specify a callback function when the user wants to close the dialog. You should change <code>"show"</code> to false here in order to close the modal.</td>
                    </tr>
                    <tr>
                        <td>onSave</td>
                        <td>Function</td>
                        <td class="text-muted">null</td>
                        <td>Specify a callback function when the user clicks the save button of the dialog. You can perform save action here, unless you have overridden the <code>footer</code> slot. If no callback function given, the 'Save' button won't be shown.</td>
                    </tr>
                    <tr>
                        <td>title</td>
                        <td>String</td>
                        <td nowrap><code>"Dialog title"</code></td>
                        <td>The title of the modal that shows in the header when used default <code>header</code> slot.</td>
                    </tr>
                    <tr>
                        <td>modalClass</td>
                        <td>String</td>
                        <td nowrap><code>"modal-xs"</code></td>
                        <td>The class to be applied to the modal container. Can be <code>"modal-lg"</code>, <code>"modal-xs"</code> for size or the special class
                            <code>"side-panel"</code> specifying the modal to open from the side</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import ModalDialog from '../components/ModalDialog'

    export default {
        components: {
            ModalDialog
        },
        data: () => {
            return {
                dialog: false
            }
        },
        methods: {
            openDialog () {
                this.dialog = true
            },
            close () {
                this.dialog = false
            }
        }
    }
</script>