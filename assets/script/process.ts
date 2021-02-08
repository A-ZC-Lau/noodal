export namespace Types {
	export type node = {
		children : string[] // id of nodes
		description : string // display some under title, rest is popup
		links : string[] // used for urls
		image ?: {
			data : string,
			type : "url"|"base64"
		},
		points_of_interest : {
			left : number,
			top : number,
			x : number,
			y : number,
			to ?: string
		}[] // rectangles on the image that can be used to navigate to other places in lieu of viewing it in the boxes i.e. children
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
