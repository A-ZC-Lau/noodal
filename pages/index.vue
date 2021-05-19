<template>
	<a-layout
		style="height: 100%; max-height: 100%;"
		theme="light"
	>
		<a-layout-header style="background-color: white;">
			<div
				class="flex"
			>
				<div>
					<a-dropdown>
						<a
							class="ant-dropdown-link"
							@click="e => e.preventDefault()"
						>
							Create <a-icon type="down" />
						</a>
						<a-menu slot="overlay">
							<a-menu-item>
								New
							</a-menu-item>
							<a-menu-item :disabled="current_node === null">
								Child
							</a-menu-item>
						</a-menu>
					</a-dropdown>
				</div>
				<div>
					<a-button
						type="primary"
						@click="showModal"
					>
						Image
					</a-button>
				</div>
				<div>
					<a-button
						type="primary"
						@click="showModal"
					>
						Properties
					</a-button>
				</div>
				<div>
					<b>Current:</b>
				</div>
			</div>
		</a-layout-header>
		<a-layout>
			<a-layout>
				<a-layout-content>
					<div class="body">
						<CardView></CardView>
					</div>
					<PropertiesModal
						:visible="visible"
						:handle-cancel="handleCancel"
						:handle-ok="handleOk"
					></PropertiesModal>
				</a-layout-content>
			</a-layout>
		</a-layout>
	</a-layout>
</template>

<script lang="ts">
import Vue from "vue";
import * as nanoid from "nanoid";

export default Vue.extend({
	data () {
		return {
			"active_key" : [],
			"collapsed" : true,
			"current_node" : null,
			"file_list" : {

			},
			"collection_key" : [],
			"image" : {
				"data" : "",
				"type" : "",
			},
			"radio_buttons" : [
				"base64",
				"url",
				"none",
			],
			"selected" : null,
			"sidebar" : [],
			"visible" : false,
		};
	},
	"methods" : {
		createCollection () {
			const fileName = window.prompt("Insert title",);
		},
		deleteCollection () {

		},
		createNode () {
			const id = nanoid.nanoid();
		},
		deleteNode () {
		},
		handleCancel () {
			this.visible = false;
		},
		handleOk () {
			this.visible = false;
		},
		handleImageType (e : Event,) {
			const target = e.target as HTMLSelectElement;
			this.image.type = target.value;
		},
		showModal () {
			this.visible = true;
		},
	},
},);
</script>

<style>
	* {
		font-size: initial;
	}

	.body {
		padding: 1rem;
	}
	.card {
		border: 0.25rem solid rgb(95, 146, 204);
		padding: 0.5rem;
	}
</style>
<style lang="scss" src="~/assets/scss/global.scss" scoped>
</style>
