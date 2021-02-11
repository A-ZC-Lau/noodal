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
							File <a-icon type="down" />
						</a>
						<a-menu slot="overlay">
							<a-menu-item>
								<label>
									Import
									<input
										id="import"
										type="file"
										style="visibility: hidden; height: 0; width: 0;"
									>
								</label>
							</a-menu-item>
							<a-menu-item>
								Export
							</a-menu-item>
						</a-menu>
					</a-dropdown>
				</div>
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
						Point of interest
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
			<a-layout-sider
				v-model="collapsed"
				collapsed-width="40"
				collapsible
			>
				<a-collapse
					v-model="active_key"
					style="overflow: hidden;"
				>
					<a-collapse-panel
						key="1"
						header="Collections"
					>
						List of files
						<a-collapse v-model="collection_key">
							<a-collapse-panel
								key="1"
								header="Collections"
							>
								stuff
							</a-collapse-panel>
						</a-collapse>
						<ul>
							<li>
								Embolden the selected file name
							</li>
							<li>
								Add ability to "create new file"
							</li>
						</ul>
					</a-collapse-panel>
					<a-collapse-panel
						key="2"
						header="Nodes"
					>
						more data
					</a-collapse-panel>
					<a-collapse-panel
						key="3"
						header="History"
					>
						more data
					</a-collapse-panel>
				</a-collapse>
			</a-layout-sider>
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

import CardView from "@/components/pages/index/CardView/CardView.vue";
import PropertiesModal from "@/components/pages/index/PropertiesModal/index.vue";

export default Vue.extend({
	"components" : {
		CardView,
		PropertiesModal,
	},
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
			const file_name = window.prompt("Insert name",);
			if (!file_name) {
				return;
			}
			if (file_name in this.file_list) {
				window.alert("This file name is already in use",);
			}
			this.file_list[file_name] = {};
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
