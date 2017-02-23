<template>
  <div>
	<div class="smart-timeline" v-if="items.length > 0">
	  <ul class="smart-timeline-list">
		<li v-for="item in items">
          <div class="smart-timeline-icon"><i :class="['fa ' + icon]"></i></div>
		  <div class="smart-timeline-time" v-html="item.time"></div>
		  <div class="smart-timeline-content" v-html="item.content"></div>
		</li>
	  </ul>
	</div>
	<p :class="emptyTextClass" v-else>{{ emptyText }}</p>
  </div>
</template>
<script>
  export default {
      props: {
        items: {
          default: []
        },
        icon: {
          default: 'fa-user'
        },
        emptyText: {
          default: 'No activity data to show'
        },
        emptyTextClass: {}
      }
  }
</script>

<style>
  .smart-timeline {
	position: relative;
  }

  .smart-timeline-content {
	margin-left: 123px;
  }

  .smart-timeline-list {
	list-style: none;
	margin: 0;
	padding: 0;
  }
  
  .smart-timeline-list:after {
    content: " ";
    background-color: #eee;
    position: absolute;
    display: block;
    width: 2px;
    top: 0;
    left: 95px;
    bottom: 0;
    z-index: 1;
  }

  .smart-timeline-list li {
    position: relative;
    margin: 0;
    padding: 15px 0;
  }

  .smart-timeline-icon {
    background: #3276B1;
    color: #ffffff;
    border-radius: 50%;
    position: absolute;
    width: 32px;
    height: 32px;
    line-height: 28px;
    font-size: 15px;
    text-align: center;
    left: 80px;
    top: 10px;
    z-index: 100;
    padding: 2px;
  }

  .smart-timeline-time {
    float: left;
    width: 70px;
    text-align: right;
  }
</style>