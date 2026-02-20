export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["profile.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.DW73qlzh.js",app:"_app/immutable/entry/app.CtUUhAr-.js",imports:["_app/immutable/entry/start.DW73qlzh.js","_app/immutable/chunks/C46ecr9g.js","_app/immutable/chunks/JSsKUWjE.js","_app/immutable/chunks/Y67qjg9_.js","_app/immutable/entry/app.CtUUhAr-.js","_app/immutable/chunks/JSsKUWjE.js","_app/immutable/chunks/D8tkwMfV.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
