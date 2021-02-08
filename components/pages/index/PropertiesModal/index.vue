<template>
	<a-modal
		title="Properties"
		:visible="visible"
		@ok="handleOk"
		@cancel="handleCancel"
	>
		<a-space
			direction="vertical"
			style="width: 100%;"
		>
			<a-radio-group
				default-value="none"
				button-style="solid"
			>
				<a-radio-button
					v-for="v in radio_buttons"
					:key="v"
					:value="v"
				>
					{{ v }}
				</a-radio-button>
			</a-radio-group>
			<div>
				<a-input />
			</div>
		</a-space>
	</a-modal>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
	"props" : {
		"handleCancel" : {
			"default" : () => console.log("handleCancel",),
			"type" : Function,
		},
		"handleOk" : {
			"default" : () => console.log("handleOk",),
			"type" : Function,
		},
		"visible" : {
			"default" : false,
			"type" : Boolean,
		},
	},
	data () {
		return {
			"radio_buttons" : [
				"base64",
				"url",
				"none",
			],
		};
	},
},);
</script>
