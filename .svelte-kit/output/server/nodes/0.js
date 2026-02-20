

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const universal = {
  "prerender": true,
  "ssr": false
};
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.C8qaNA5j.js","_app/immutable/chunks/JSsKUWjE.js","_app/immutable/chunks/D8tkwMfV.js"];
export const stylesheets = ["_app/immutable/assets/0.Dcui-nNB.css"];
export const fonts = [];
