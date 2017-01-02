<!--template for switchbox widget-->
<template>
  <label class="toggle">
	<input type="checkbox" :checked="checked">
	<i :data-swchon-text="switchOnTxt" :data-swchoff-text="switchOffTxt"></i>
	{{ label }}
  </label>
</template>

<script>
  export default {
    props: {
      checked: {
        default: true
      },
      switchOnTxt: {
        default: 'YES'
      },
      switchOffTxt: {
        default: 'NO'
      },
      label: {
        default: ''
      }
    }
  }
</script>

<style>
  .toggle {
	position: relative;
	display: block;
	font-weight: 400;
	margin-bottom: 4px;
	padding-right: 61px;
	font-size: 15px;
	line-height: 25px;
	color: #404040;
	cursor: pointer;
  }
  .toggle:last-child {
	margin-bottom: 0;
  }
  .toggle input {
	  position: absolute;
	  left: -9999px;
  }
  .toggle i {
	content: '';
	position: absolute;
	top: 4px;
	right: 0;
	display: block;
	width: 49px;
	height: 17px;
	border-width: 1px;
	border-style: solid;
	border-radius: 12px;
	background: #fff;
  }
  .toggle i:after {
	content: attr(data-swchoff-text);
	position: absolute;
	top: 2px;
	right: 8px;
	left: 8px;
	font-style: normal;
	font-size: 9px;
	line-height: 13px;
	font-weight: 700;
	text-align: left;
	color: #5f5f5f;
  }
  .toggle i:before {
	content: '';
	position: absolute;
	z-index: 1;
	top: 4px;
	right: 4px;
	display: block;
	width: 9px;
	height: 9px;
	border-radius: 50%;
	opacity: 1;
	transition: right 0.2s;
	-o-transition: right 0.2s;
	-ms-transition: right 0.2s;
	-moz-transition: right 0.2s;
	-webkit-transition: right 0.2s;
  }
  .toggle input:checked + i:after {
	  content: attr(data-swchon-text);
	  text-align: right;
  }
  .toggle input:checked + i:before {
	  right: 36px;
  }
  .toggle i {
	border-color: #BDBDBD;
	transition: border-color 0.3s;
	-o-transition: border-color 0.3s;
	-ms-transition: border-color 0.3s;
	-moz-transition: border-color 0.3s;
	-webkit-transition: border-color 0.3s;
  }
  .toggle i:before {
	background-color: #3276B1;
  }
   .toggle:hover i {
		-webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1);
		box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1);
	}

	/*
	 * radio/toggle/checkbox active state
	 */
	.toggle:active i {
		background: #F0F0F0;
		-webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1);
		box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1);
	}
	
	.toggle input:focus + i {
		border-color: #3276B11;
	}
	.toggle input:checked + i {
		border-color: #3276B1;
	}
	.toggle.state-error i {
		background: #fff0f0;
		border-color: #A90329;
	}

	.toggle.state-error input:checked + i {
		background: #fff0f0;
	}
	.toggle.state-success input:checked + i {
		background: #f0fff0;
	}
	.toggle.state-disabled {
		cursor: default !important;
		opacity: 0.6 !important;
	}
	.toggle.state-disabled:hover i {
		border-color: #e5e5e5 !important;
	}
	.smart-form .state-disabled.toggle input:checked + i {
	  border-color: #e5e5e5 !important;
	  color: #333 !important;
	}
	.toggle input:checked + input[type=hidden] + i:after {
		content: attr(data-swchon-text);
		text-align: right;
	}
	.toggle input:checked + input[type=hidden] + i:before {
		right: 36px;
	}
	.toggle :after, .toggle :before { 
     box-sizing: content-box; 
	}
</style>
