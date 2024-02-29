

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/team/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.ed4ckEx3.js","_app/immutable/chunks/scheduler.BE9y5TJt.js","_app/immutable/chunks/index.OWThEkx3.js"];
export const stylesheets = [];
export const fonts = [];
