export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["profile-1.png","profile-2.png","profile-3.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.BXgpO6Wo.js",app:"_app/immutable/entry/app.BFE_g-Aw.js",imports:["_app/immutable/entry/start.BXgpO6Wo.js","_app/immutable/chunks/BY_KPu8c.js","_app/immutable/chunks/BH6C4YgY.js","_app/immutable/chunks/NLUwcYeL.js","_app/immutable/entry/app.BFE_g-Aw.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/BH6C4YgY.js","_app/immutable/chunks/DTRrj56r.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
