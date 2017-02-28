<template>
    <div>
        <h2 class="page-header">Activity Timeline</h2>
        <p>A component that shows a timeline with user actions (users fontawesome for event icons):</p>
        <activity-timeline :items="items" :icon="icon"></activity-timeline>
		<br />
		<p>Default empty timeline message:</p>
        <activity-timeline :items="emptyItems"></activity-timeline>
    </div>
</template>

<script>
    import ActivityTimeline from '../components/ActivityTimeline'

    export default {
        components: {
            ActivityTimeline
        },
        data () {
            return {
                items: [
                  {time: '30 minutes ago', content: '<p><strong>You</strong></p>Updated the email address of James to james123@innologica.com.'},
                  {time: '1 hour ago', content: '<p><strong>Tom Cruise</strong></p>Updated the description of event "Christmas Party".'},
                  {time: 'today', content: '<p><strong>Samuel Jackson</strong></p>Accepted invitation to party.'},
                  {time: 'yesterday', content: '<p><strong>Anna Kournikova</strong></p>Accepted the date invitation (woo hoo).'}
                ],
                icon: 'fa-users',
                emptyItems: []
            }
        }
    }
</script>