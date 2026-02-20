

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.CbVndkbI.js","_app/immutable/chunks/BH6C4YgY.js","_app/immutable/chunks/DTRrj56r.js","_app/immutable/chunks/NLUwcYeL.js"];
export const stylesheets = ["_app/immutable/assets/2.BhMy-nkK.css"];
export const fonts = [];
