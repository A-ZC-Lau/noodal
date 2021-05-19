
export const state = () => ({
	"converted" : [] as string[],
});

export const mutations = {
	ADD (_state : ReturnType<typeof state>, data : string,) {
		_state.converted.push(data,);
	},
	CLEAR (_state : ReturnType<typeof state>,) {
		_state.converted = [];
	},
	REMOVE (_state : ReturnType<typeof state>, index : number,) {
		_state.converted.splice(index, 1,);
	},
};
