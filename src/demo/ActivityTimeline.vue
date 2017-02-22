<template>
    <div>
        <h2 class="page-header">Activity Timeline</h2>
        <p>A component that shows a timeline with user actions (users fontawesome for event icons):</p>
        <activity-timeline :items="items" :icon="icon"></activity-timeline>
		<br />
		<p>Default empty timeline message:</p>
        <activity-timeline emptyTextCssClass="text-css"></activity-timeline>
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
                  {time: '30 minutes ago', user: 'You', content: 'Updated the email address of James to james123@innologica.com.'},
                  {time: '1 hour ago', user: 'Sam Wilson', content: 'Updated the description of event "Christmas Party".'},
                  {time: 'today', user: 'John Welch', content: 'Accepted invitation to party.'}
                ],
                icon: 'fa-users'
            }
        }
    }
</script>