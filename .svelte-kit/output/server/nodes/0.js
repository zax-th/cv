

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const universal = {
  "prerender": true,
  "ssr": false
};
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.C6FXOv15.js","_app/immutable/chunks/CZmuBx9L.js","_app/immutable/chunks/COZIsmp9.js"];
export const stylesheets = ["_app/immutable/assets/0.CbSN6LjS.css"];
export const fonts = [];
