

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.BafOvRrL.js","_app/immutable/chunks/scheduler.BE9y5TJt.js","_app/immutable/chunks/index.OWThEkx3.js"];
export const stylesheets = [];
export const fonts = [];
