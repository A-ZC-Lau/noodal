<template>
	<a-layout style="height: 100%; max-height: 100%;" theme="light">
		<a-layout-header style="background-color: white;">
			<div
				class="flex"
			>
				<div>
					<a-dropdown>
						<a class="ant-dropdown-link" @click="e => e.preventDefault()">
							File <a-icon type="down" />
						</a>
						<a-menu slot="overlay">
							<a-menu-item>
								Import
							</a-menu-item>
							<a-menu-item>
								Export
							</a-menu-item>
						</a-menu>
					</a-dropdown>
				</div>
				<div>
					<a-dropdown>
						<a class="ant-dropdown-link" @click="e => e.preventDefault()">
							Create <a-icon type="down" />
						</a>
						<a-menu slot="overlay">
							<a-menu-item>
								New
							</a-menu-item>
							<a-menu-item>
								Child
							</a-menu-item>
						</a-menu>
					</a-dropdown>
				</div>
				<div>
					<a-button type="primary" @click="showModal">
						Change image
					</a-button>
				</div>
				<div>
					<a-button type="primary" @click="showModal">
						Add links
					</a-button>
				</div>
				<div>
					<a-button type="primary" @click="showModal">
						Point of interest
					</a-button>
				</div>
				<div>
					<a-button type="primary" @click="showModal">
						Properties
					</a-button>
				</div>
			</div>
		</a-layout-header>
		<a-layout>
			<a-layout-sider>
				stuff
			</a-layout-sider>
			<a-layout>
				<a-layout-content>
					<div class="body">
						<div class="card">
							card
						</div>
					</div>
					<a-modal
						title="Image"
						:visible="visible"
						@ok="handleOk"
						@cancel="handleCancel"
					>
						<a-radio-group default-value="none" button-style="solid">
							<a-radio-button value="base64">
								base64
							</a-radio-button>
							<a-radio-button value="url">
								url
							</a-radio-button>
							<a-radio-button value="none">
								None
							</a-radio-button>
						</a-radio-group>
					</a-modal>
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
			"selected" : null,
			"image" : {
				"data" : "",
				"type" : "",
			},
			"visible" : false,
		};
	},
	"methods" : {
		createOne () {
			const id = nanoid.nanoid();
		},
		deleteOne () {
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
