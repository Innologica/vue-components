<template>
    <div>
        <h2 class="page-header">Modal</h2>
        <p>
            Vue JS implementation of bootstrap modal dialogs. Added side panel version.
        </p>
        <modal-dialog :show="dialog" :onClose="close" :transition="transition" :modal-class="getClass">
            <div>
                <h1>TEST HEADER</h1>

                <div id="lipsum">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacus felis, suscipit ac tellus quis, ultrices porta orci. Maecenas congue turpis quis ex placerat, in vestibulum nibh efficitur. Nullam dictum semper quam vitae imperdiet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus massa nulla, scelerisque sit amet ornare vitae, fermentum quis sapien. Nullam in lacus sagittis, iaculis nisl ac, vulputate ex. Aliquam congue ligula a tincidunt eleifend. Pellentesque elit quam, pellentesque in dapibus a, commodo ut sapien.
                    </p>
                    <p>
                        Proin risus justo, egestas at elementum ac, aliquet vel lorem. Curabitur tempus non felis in fringilla. Mauris mattis quam id purus imperdiet, ut imperdiet odio sollicitudin. Vivamus sit amet nibh est. Ut quis justo viverra, mollis sem et, laoreet felis. Proin facilisis pellentesque purus, sed euismod ex pretium gravida. Curabitur consectetur imperdiet mi, sit amet dictum nibh facilisis et. Aliquam rutrum dolor pulvinar, pulvinar neque a, gravida mauris. Aenean bibendum elit a mi pellentesque, volutpat semper lorem cursus. Nam pulvinar condimentum elit vel eleifend. Sed non augue viverra purus volutpat luctus.
                    </p>
                    <p>
                        Nunc scelerisque semper mollis. Sed tempus, massa vel finibus dictum, nisi leo suscipit diam, at hendrerit ligula lorem nec tellus. Integer nisl libero, sagittis eu libero in, ultrices pellentesque magna. Cras commodo dignissim fringilla. Cras at lacus in est hendrerit accumsan. Integer molestie nunc sit amet tellus porta, id imperdiet est facilisis. Curabitur sit amet nulla molestie lorem ullamcorper vulputate ac vitae ex. Donec et turpis velit. Nunc luctus odio odio, non congue mauris pulvinar nec.
                    </p>
                    <p>
                        Aenean non velit sit amet lorem fermentum mollis. Ut non tortor eu quam varius feugiat id in tellus. Sed mattis turpis ac eros tincidunt tempor. Ut vitae magna nec nisi pellentesque dictum. Suspendisse egestas, mi nec malesuada condimentum, diam diam bibendum nibh, et hendrerit velit felis eu eros. Vestibulum lobortis libero sem, eget vehicula nulla porta aliquet. Suspendisse varius massa a nibh rutrum, ut convallis dolor ultricies. Maecenas tincidunt lacinia mauris, ut tempus enim finibus eu. Nulla in mi nulla. Morbi placerat mi eu nulla consequat pharetra. Vivamus placerat interdum lacinia. Donec bibendum magna nulla, a luctus urna consectetur sit amet. Curabitur pellentesque dui in pretium ultricies. Sed sed metus velit.
                    </p>
                    <p>
                        In consectetur vel velit sit amet dictum. Pellentesque lacinia neque eget odio placerat rhoncus. Phasellus id augue fringilla, egestas libero nec, pellentesque dolor. Curabitur ut mauris est. Duis varius vestibulum massa sed iaculis. Donec ut turpis in est ultricies laoreet. Morbi dui nisl, aliquam in varius quis, posuere et felis. Nunc ipsum metus, commodo eget lacinia non, mollis suscipit ex. Etiam bibendum vel tortor ac iaculis. Donec maximus tincidunt sem, in dapibus mauris ultricies id. Duis bibendum mattis orci sed elementum. In sed efficitur velit.
                    </p></div>

            </div>
        </modal-dialog>

        <div>
            <label class="radio-inline">
                <input type="radio" name="inlineRadioOptions" value="" v-model="transition"> <i>none</i>
            </label>
            <label class="radio-inline">
                <input type="radio" name="inlineRadioOptions" value="slide" v-model="transition"> slide
            </label>
            <label class="radio-inline">
                <input type="radio" name="inlineRadioOptions" value="fade" v-model="transition"> fade
            </label>
            <label class="radio-inline">
                <input type="radio" name="inlineRadioOptions" value="scale" v-model="transition"> scale
            </label>
        </div>

        <div>
            <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox1" value="side-panel" v-model="side_panel"> Side panel
            </label>
        </div>

        <button @click="openDialog">Open dialog</button>
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
                dialog: false,
                transition: 'slide',
                side_panel: true
            }
        },
        methods: {
            openDialog () {
                this.dialog = true
            },
            close () {
                this.dialog = false
            }
        },
        computed: {
            getClass () {
                return this.side_panel ? 'side-panel' : ''
            }
        }
    }

</script>