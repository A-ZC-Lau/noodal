<template>
	<a-modal
		:destroy-on-close="true"
		:mask-closable="false"
		title="Properties"
		:visible="visible"
		:width="800"
		@ok="handleOk"
		@cancel="handleCancel"
	>
		<a-space
			direction="vertical"
			style="width: 100%;"
		>
			<!-- Title -->
			<div>
				<h1>Title</h1>
				<a-input v-model="my_data.title" />
			</div>
			<a-divider></a-divider>
			<!-- Summary -->
			<div>
				<h1>Summary</h1>
				<a-input v-model="my_data.summary" />
			</div>
			<a-divider></a-divider>
			<!-- Description -->
			<a-space
				direction="vertical"
				style="width: 100%;"
			>
				<h1>Description</h1>
				<a-radio-group
					v-model="description_view"
					button-style="solid"
				>
					<a-radio-button value="text">
						Text
					</a-radio-button>
					<a-radio-button value="markdown">
						Markdown
					</a-radio-button>
				</a-radio-group>
				<a-textarea
					v-if="description_view === 'text'"
					v-model="my_data.description"
					:autosize="true"
					:rows="5"
				/>
				<div
					v-else
					class="markdown"
					v-html="markdown"
				>
				</div>
			</a-space>
			<a-divider></a-divider>
			<!-- Edges -->
			<a-space
				direction="vertical"
				style="width: 100%;"
			>
				<h1>Edges</h1>
				<div>
					<a-select
						show-search
						placeholder="Select a node"
						option-filter-prop="children"
						style="width: 80%;"
						:filter-option="true"
					>
						<a-select-option value="1">
							Jack
						</a-select-option>
						<a-select-option value="2">
							Lucy
						</a-select-option>
						<a-select-option value="3">
							Tom
						</a-select-option>
					</a-select>
					<a-button type="primary">
						Add
					</a-button>
				</div>
				<a-list
					bordered
					:data-source="converted_edges"
				>
					<a-list-item
						v-if="converted_edges.length"
						slot="renderItem"
						slot-scope="item"
					>
						<!-- style="overflow: hidden; text-overflow: ellipsis;" -->
						<a-tooltip style="word-break: break-all;">
							<template slot="title">
								{{ item.id }}
							</template>
							<div>
								{{ item.title }}
							</div>
						</a-tooltip>
						<a-button
							slot="actions"
							type="danger"
						>
							Delete
						</a-button>
					</a-list-item>
				</a-list>
			</a-space>
			<a-divider></a-divider>
			<!-- Links -->
			<div>
				<h1>Links</h1>
				<a-space
					direction="vertical"
					style="width: 100%;"
				>
					<div>Title</div>
					<a-input v-model="link.title" />
					<div>Url</div>
					<a-input v-model="link.url" />
					<a-button
						type="primary"
						@click="createLink"
					>
						Create
					</a-button>
				</a-space>
				<br><br>
				<a-list
					bordered
					:data-source="my_data.links"
				>
					<a-list-item
						slot="renderItem"
						slot-scope="item, index"
					>
						<!-- style="overflow: hidden; text-overflow: ellipsis;" -->
						<a-tooltip style="word-break: break-all;">
							<template slot="title">
								{{ item.url }}
							</template>
							<a
								:href="item.url"
								rel="noopener noreferrer"
								target="_blank"
							>
								{{ item.title }}
							</a>
						</a-tooltip>
						<a-button
							slot="actions"
							type="danger"
							@click="deleteLink(index)"
						>
							Delete
						</a-button>
					</a-list-item>
				</a-list>
			</div>
			<a-divider></a-divider>
			<!-- Image -->
			<a-space
				direction="vertical"
				style="width: 100%;"
			>
				<h1>Image</h1>
				<a-radio-group
					v-model="my_data.image.type"
					button-style="solid"
				>
					<a-radio-button value="base64">
						base64
					</a-radio-button>
					<a-radio-button value="url">
						url
					</a-radio-button>
					<a-radio-button value="svg">
						svg
					</a-radio-button>
				</a-radio-group>
				<div>
					<a-input v-model="my_data.image.data" />
				</div>
				<div
					v-if="my_data.image === 'svg'"
					v-html="my_data.image.data"
				></div>
				<img
					v-else
					:src="my_data.image"
					style="max-width: 100%;"
				>
			</a-space>
		</a-space>
	</a-modal>
</template>

<script lang="ts">
import Vue from "vue";
import marked from "marked";

import { createOne, Types, } from "@/assets/script/process";

type converted = {
	id : string,
	title : string
}

export default Vue.extend({
	"props" : {
		"data" : {
			"default" : () => (createOne()),
			"type" : Object,
		},
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
			"my_data" : JSON.parse(JSON.stringify(this.data,),) as Types.node,
			"link" : {
				"title" : "",
				"url" : "",
			},
			"description_view" : "text",
		};
	},
	"computed" : {
		markdown () : string {
			return marked(this.my_data.description,);
		},
		converted_edges () : converted[] {
			const output = [];
			for (const node_id of this.my_data.edges) {
				output.push({
					"id" : node_id,
					"title" : "test",
				},);
			}
			return output;
		},
	},
	"watch" : {
		data (new_value,) {
			this.my_data = JSON.parse(JSON.stringify(new_value,),);
		},
	},
	"methods" : {
		createLink () {
			const obj = {
				"title" : this.link.title,
				"url" : this.link.url,
			};
			this.my_data.links.push(obj,);

			this.link.title = "";
			this.link.url = "";
		},
		deleteLink (index : number,) {
			this.my_data.links.splice(index, 1,);
		},
	},
},);
</script>

<style lang="scss" scoped>
	.markdown {
		border: 1px solid darkgrey;
		border-radius: 5px;
		padding: 0.5rem;
	}
</style>
