

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.B8XsMsIb.js","_app/immutable/chunks/CZmuBx9L.js","_app/immutable/chunks/COZIsmp9.js","_app/immutable/chunks/CA-z1gfv.js"];
export const stylesheets = [];
export const fonts = [];
