<template>
    <div>
        <h2 class="page-header">Selectize widget</h2>
        <p>A component that wraps selectize.js :</p>
        <h4>Tag select</h4>

        <selectize :tags="tags" :multi="true" v-model="select_tags"></selectize>
        <h4>Autocomplete</h4>
        <selectize :options="options" v-model="select_item"></selectize>
    </div>


</template>

<script>
    import selectize from '../components/Selectize'

    export default {
        components: {selectize},
        data () {
            return {
                select_tags: ['nikola'],
                select_item: '2',
                options: [
                    {value: 1, text: 'First item'},
                    {value: 2, text: 'Item 2'}
                ],
                tags: [
                    'nikola',
                    'kostadinov'
                ]
            }
        }
    }
</script>