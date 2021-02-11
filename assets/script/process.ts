export namespace Types {
	export type node = {
		description : string // display some under title, rest is popup
		edges : string[] // id of nodes
		links : {
			title : string,
			url : string
		}[] // used for urls
		image ?: {
			data : string
			type : "base64"|"svg"|"url"
		},
		points_of_interest : {
			left : number,
			top : number,
			x : number,
			y : number,
			to ?: string
		}[] // rectangles on the image that can be used to navigate to other places in lieu of viewing it in the boxes i.e. children
		summary : string
		title : string // BBL big bold letters
	}
}

export namespace File {
	export type node = Map<string, Types.node>
	export type settings = {
		history : string[] // just save id as user clicks along
		pinned : string[], // each id will serve as the starting point, which will stay up
		nesting : number, // how much nested boxes will show, default 3
	}
}

export function createOne () {
	const output : Types.node = {
		"description" : "",
		"edges" : [],
		"image" : {
			"data" : "",
			"type" : "url",
		},
		"links" : [],
		"points_of_interest" : [],
		"summary" : "Summary",
		"title" : "New",
	};
	return output;
}
