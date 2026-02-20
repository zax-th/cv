

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.C9kSxldq.js","_app/immutable/chunks/CZmuBx9L.js","_app/immutable/chunks/COZIsmp9.js"];
export const stylesheets = ["_app/immutable/assets/2.DzeH6Unh.css"];
export const fonts = [];
