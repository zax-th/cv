

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.gnXAM6q3.js","_app/immutable/chunks/JSsKUWjE.js","_app/immutable/chunks/D8tkwMfV.js","_app/immutable/chunks/Y67qjg9_.js"];
export const stylesheets = ["_app/immutable/assets/2.BhMy-nkK.css"];
export const fonts = [];
