

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const universal = {
  "prerender": true,
  "ssr": false
};
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.C3M5i_fr.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/BH6C4YgY.js","_app/immutable/chunks/DTRrj56r.js"];
export const stylesheets = ["_app/immutable/assets/0.DClVztLK.css"];
export const fonts = [];
