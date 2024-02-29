import { c as create_ssr_component, d as compute_rest_props, e as spread, f as escape_attribute_value, g as escape_object, b as add_attribute, a as compute_slots, i as getContext, k as createEventDispatcher, h as escape, v as validate_component, j as subscribe, l as each } from "../../../chunks/ssr.js";
import { w as writable } from "../../../chunks/index.js";
import { twMerge } from "tailwind-merge";
import { I as Input } from "../../../chunks/Input.js";
import { S as SearchOutline } from "../../../chunks/SearchOutline.js";
import { B as Button } from "../../../chunks/Button.js";
const Breadcrumb = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["solid", "navClass", "solidClass", "olClass", "ariaLabel"]);
  let { solid = false } = $$props;
  let { navClass = "flex" } = $$props;
  let { solidClass = "flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700" } = $$props;
  let { olClass = "inline-flex items-center space-x-1 rtl:space-x-reverse md:space-x-3 rtl:space-x-reverse" } = $$props;
  let { ariaLabel = "Breadcrumb" } = $$props;
  let classNav = solid ? solidClass : navClass;
  if ($$props.solid === void 0 && $$bindings.solid && solid !== void 0)
    $$bindings.solid(solid);
  if ($$props.navClass === void 0 && $$bindings.navClass && navClass !== void 0)
    $$bindings.navClass(navClass);
  if ($$props.solidClass === void 0 && $$bindings.solidClass && solidClass !== void 0)
    $$bindings.solidClass(solidClass);
  if ($$props.olClass === void 0 && $$bindings.olClass && olClass !== void 0)
    $$bindings.olClass(olClass);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  return `<nav${spread(
    [
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(classNav, $$props.class))
      }
    ],
    {}
  )}><ol${add_attribute("class", twMerge(olClass, $$props.classOl), 0)}>${slots.default ? slots.default({}) : ``}</ol></nav> `;
});
const BreadcrumbItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["home", "href", "linkClass", "spanClass", "homeClass"]);
  let $$slots = compute_slots(slots);
  let { home = false } = $$props;
  let { href = void 0 } = $$props;
  let { linkClass = "ms-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ms-2 dark:text-gray-400 dark:hover:text-white" } = $$props;
  let { spanClass = "ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400" } = $$props;
  let { homeClass = "inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" } = $$props;
  if ($$props.home === void 0 && $$bindings.home && home !== void 0)
    $$bindings.home(home);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.linkClass === void 0 && $$bindings.linkClass && linkClass !== void 0)
    $$bindings.linkClass(linkClass);
  if ($$props.spanClass === void 0 && $$bindings.spanClass && spanClass !== void 0)
    $$bindings.spanClass(spanClass);
  if ($$props.homeClass === void 0 && $$bindings.homeClass && homeClass !== void 0)
    $$bindings.homeClass(homeClass);
  return `<li${spread(
    [
      {
        class: escape_attribute_value(twMerge("inline-flex items-center", $$props.class))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${home ? `<a${add_attribute("class", twMerge(homeClass, $$props.classHome), 0)}${add_attribute("href", href, 0)}>${$$slots.icon ? `${slots.icon ? slots.icon({}) : ``}` : `<svg class="w-4 h-4 me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>`} ${slots.default ? slots.default({}) : ``}</a>` : `${$$slots.icon ? `${slots.icon ? slots.icon({}) : ``}` : `<svg class="w-6 h-6 text-gray-400 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>`} ${href ? `<a${add_attribute("class", twMerge(linkClass, $$props.classLink), 0)}${add_attribute("href", href, 0)}>${slots.default ? slots.default({}) : ``}</a>` : `<span${add_attribute("class", twMerge(spanClass, $$props.classSpan), 0)}>${slots.default ? slots.default({}) : ``}</span>`}`}</li> `;
});
const ChevronRightOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "strokeLinecap", "strokeLinejoin", "strokeWidth", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { strokeLinecap = ctx.strokeLinecap || "round" } = $$props;
  let { strokeLinejoin = ctx.strokeLinejoin || "round" } = $$props;
  let { strokeWidth = ctx.strokeWidth || "2" } = $$props;
  let { ariaLabel = "chevron right outline" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.strokeLinecap === void 0 && $$bindings.strokeLinecap && strokeLinecap !== void 0)
    $$bindings.strokeLinecap(strokeLinecap);
  if ($$props.strokeLinejoin === void 0 && $$bindings.strokeLinejoin && strokeLinejoin !== void 0)
    $$bindings.strokeLinejoin(strokeLinejoin);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}><path stroke="currentColor"${add_attribute("stroke-linecap", strokeLinecap, 0)}${add_attribute("stroke-linejoin", strokeLinejoin, 0)}${add_attribute("stroke-width", strokeWidth, 0)} d="m10 16 4-4-4-4"></path></svg> `;
});
const DotsVerticalOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "strokeLinecap", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { strokeLinecap = ctx.strokeLinecap || "round" } = $$props;
  let { ariaLabel = "dots vertical outline" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.strokeLinecap === void 0 && $$bindings.strokeLinecap && strokeLinecap !== void 0)
    $$bindings.strokeLinecap(strokeLinecap);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}><path stroke="currentColor"${add_attribute("stroke-linecap", strokeLinecap, 0)} stroke-width="3" d="M12 6h0m0 6h0m0 6h0"></path></svg> `;
});
const FileOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "strokeLinejoin", "strokeWidth", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { strokeLinejoin = ctx.strokeLinejoin || "round" } = $$props;
  let { strokeWidth = ctx.strokeWidth || "2" } = $$props;
  let { ariaLabel = "file outline" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.strokeLinejoin === void 0 && $$bindings.strokeLinejoin && strokeLinejoin !== void 0)
    $$bindings.strokeLinejoin(strokeLinejoin);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}><path stroke="currentColor"${add_attribute("stroke-linejoin", strokeLinejoin, 0)}${add_attribute("stroke-width", strokeWidth, 0)} d="M10 3v4c0 .6-.4 1-1 1H5m14-4v16c0 .6-.4 1-1 1H6a1 1 0 0 1-1-1V8c0-.4.1-.6.3-.8l4-4 .6-.2H18c.6 0 1 .4 1 1Z"></path></svg> `;
});
const ListItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isSelected = false } = $$props;
  let { item = {
    "name": "",
    "type": "",
    "mDate": "",
    "size": "",
    "children": []
  } } = $$props;
  createEventDispatcher();
  if ($$props.isSelected === void 0 && $$bindings.isSelected && isSelected !== void 0)
    $$bindings.isSelected(isSelected);
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  return `<button class="${"flex flex-row items-center justify-start gap-2 p-1 hover:bg-gray-100 rounded-lg " + escape(isSelected ? "bg-gray-100" : "", true)}">${item.type === "directory" ? `${validate_component(ChevronRightOutline, "ChevronRightOutline").$$render($$result, { class: "w-5 h-5 text-gray-500" }, {}, {})} <img src="/images/folder-icon-mac.png" alt="Descriptive alt text" class="shrink-0 object-contain h-5">` : `<div class="w-5 h-5"></div> ${validate_component(FileOutline, "FileOutline").$$render($$result, { class: "w-5 h-5 text-gray-500" }, {}, {})}`} <p class="justify-start grow text-left text-sm">${escape(item.name)}</p> <div class="inline-flex shrink gap-6 items-center"><p class="text-xs font-light text-gray-500">${escape(item.size)}</p> <p class="text-xs font-light text-gray-500">${escape(item.mDate)}</p> ${validate_component(Button, "Button").$$render(
    $$result,
    {
      size: "xs",
      class: "!p-2 hover:bg-light transition duration-200",
      pill: true,
      color: "light"
    },
    {},
    {
      default: () => {
        return `${validate_component(DotsVerticalOutline, "DotsVerticalOutline").$$render($$result, { class: "w-3 h-3" }, {}, {})}`;
      }
    }
  )}</div></button>`;
});
const SidebarMetadata = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { selectedItem = {
    "name": "SHUTTLE_01",
    "type": "directory",
    "mDate": "2021-10-01",
    "size": "835 MB",
    "fileHash": "d0acf005c5802aba34b32a0bf8e3822f"
  } } = $$props;
  if ($$props.selectedItem === void 0 && $$bindings.selectedItem && selectedItem !== void 0)
    $$bindings.selectedItem(selectedItem);
  return `<div class="flex flex-col gap-2 h-full w-[400px] bg-white shadow p-4"><img src="/images/thumbnail.jpg" alt="Descriptive alt text" class="shadow-lg rounded-lg object-contain"> <h3 class="font-semibold text-lg">${escape(selectedItem.name)}</h3> <h4 class="text-sm font-medium font-light text-gray-500" data-svelte-h="svelte-8cspzh">File Information:</h4> <p class="text-xs font-light text-gray-500">Size: ${escape(selectedItem.size)}</p> <p class="text-xs font-light text-gray-500">Last Modified: ${escape(selectedItem.mDate)}</p></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selectedItem, $$unsubscribe_selectedItem;
  let selectedItem = writable(void 0);
  $$unsubscribe_selectedItem = subscribe(selectedItem, (value) => $selectedItem = value);
  let listContainer;
  let drive = {
    "name": "SHUTTLE_01",
    "type": "directory",
    "mDate": "2021-10-01",
    "size": "835 MB",
    "fileHash": "d0acf005c5802aba34b32a0bf8e3822f",
    "children": [
      {
        "name": "00_PROJECTS",
        "type": "directory",
        "mDate": "2021-10-01 1:15 PM",
        "size": "835 MB",
        "fileHash": "d0acf005c5802aba34b32a0bf8e3822f",
        "children": []
      },
      {
        "name": "01_FOOTAGE",
        "type": "directory",
        "mDate": "2021-10-01 1:15 PM",
        "size": "835 MB",
        "fileHash": "d0acf005c5802aba34b32a0bf8e3822f",
        "children": []
      },
      {
        "name": "Circle.png",
        "type": "file",
        "mDate": "2021-10-01 1:15 PM",
        "size": "835 MB",
        "fileHash": "d0acf005c5802aba34b32a0bf8e3822f",
        children: []
      }
    ]
  };
  $$unsubscribe_selectedItem();
  return `<div class="flex flex-row w-full h-full"><div class="flex p-4 w-full"><div class="flex flex-col w-full bg-white shadow rounded-lg px-3 py-6 gap-4"><div class="flex flex-row items-center justify-start gap-2"><img src="/images/generic-drive-icon-mac.webp" alt="Descriptive alt text" class="shrink-0 object-contain h-5"> <h3 class="text-md font-semibold">${escape(drive.name)}</h3></div> ${validate_component(Input, "Input").$$render(
    $$result,
    {
      size: "sm",
      placeholder: "Search " + drive.name + "..."
    },
    {},
    {
      left: () => {
        return `${validate_component(SearchOutline, "SearchOutline").$$render(
          $$result,
          {
            slot: "left",
            class: "w-4 h-4 text-gray-500"
          },
          {},
          {}
        )}`;
      }
    }
  )} ${validate_component(Breadcrumb, "Breadcrumb").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, { href: "/", home: true }, {}, {
        default: () => {
          return `${escape(drive.name)}`;
        }
      })}`;
    }
  })} <div class="border-t border-dotted border-gray-300 w-full"></div> <div class="flex flex-col gap-0.5"${add_attribute("this", listContainer, 0)}>${each(drive.children, (item) => {
    return `${validate_component(ListItem, "ListItem").$$render(
      $$result,
      {
        item,
        isSelected: $selectedItem && item.name === $selectedItem.name
      },
      {},
      {}
    )}`;
  })}</div></div></div> ${$selectedItem?.type === "file" ? `${validate_component(SidebarMetadata, "SidebarMetadata").$$render($$result, { selectedItem: $selectedItem }, {}, {})}` : ``}</div>`;
});
export {
  Page as default
};
