export namespace Types {
	export type node = {
		description : string
		children : string[]
		links : string[]
	}
}

export namespace File {
	export type node = Map<string, Types.node>
	// export type settings
}
