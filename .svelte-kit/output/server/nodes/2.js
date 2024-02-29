

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/activity/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.ed4ckEx3.js","_app/immutable/chunks/scheduler.BE9y5TJt.js","_app/immutable/chunks/index.OWThEkx3.js"];
export const stylesheets = [];
export const fonts = [];
