/* empty css                          */
import 'debug';
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, i as addAttribute, j as renderComponent, u as unescapeHTML, k as Fragment, l as renderHead, n as renderSlot } from '../astro_BkDUK3IN.mjs';

const icons = {"local":{"prefix":"local","lastModified":1709414520,"icons":{"discord":{"body":"<path fill=\"#FFF\" d=\"M25.12 6.946c-2.424-1.948-6.257-2.278-6.419-2.292a.608.608 0 0 0-.604.357c-.004.008-.218.629-.425 1.228 2.817.493 4.731 1.587 4.833 1.647A.999.999 0 0 1 22 9.75a.99.99 0 0 1-.501-.135C21.471 9.598 18.663 8 15.002 8 11.34 8 8.531 9.599 8.503 9.615a1 1 0 0 1-1.006-1.729c.102-.06 2.023-1.158 4.848-1.65-.218-.606-.438-1.217-.442-1.225a.6.6 0 0 0-.604-.357c-.162.013-3.995.343-6.451 2.318C3.564 8.158 1 15.092 1 21.087a.6.6 0 0 0 .08.301c1.771 3.11 6.599 3.924 7.699 3.959a.61.61 0 0 0 .511-.249l1.19-1.612c-2.61-.629-3.99-1.618-4.073-1.679a1 1 0 0 1 1.181-1.614C7.625 20.217 10.172 22 15 22c4.847 0 7.387-1.79 7.412-1.808a1.001 1.001 0 0 1 1.183 1.613c-.083.061-1.456 1.048-4.06 1.677l1.175 1.615c.115.158.298.25.492.25l.019-.001c1.101-.035 5.929-.849 7.699-3.959a.6.6 0 0 0 .08-.301c0-5.994-2.564-12.928-3.88-14.14zM11 19c-1.105 0-2-1.119-2-2.5s.895-2.5 2-2.5 2 1.119 2 2.5-.895 2.5-2 2.5zm8 0c-1.105 0-2-1.119-2-2.5s.895-2.5 2-2.5 2 1.119 2 2.5-.895 2.5-2 2.5z\"/>","width":30,"height":30},"github":{"body":"<path fill=\"#fff\" d=\"M91.09 239.8a10.234 10.234 0 0 0 6.19-9.4v-27.648c0-1.009.082-2.058.21-3.123a3.13 3.13 0 0 1-.21.051H78.848c-7.68 0-14.336-3.072-17.408-9.216-3.584-6.656-5.12-17.92-14.336-24.064-1.536-1.024-.512-2.56 2.56-2.56 3.072.512 9.728 4.608 13.824 10.24 4.608 5.632 9.216 10.24 17.408 10.24 12.733 0 19.558-.64 23.665-2.842 4.782-7.111 11.402-12.518 18.319-12.518v-.128c-29.02-.932-47.56-10.578-56.192-25.472-18.765.215-35.103 2.074-44.426 3.62a110.27 110.27 0 0 1-.773-5.054c9.2-1.515 24.796-3.312 42.726-3.655a41.791 41.791 0 0 1-1.49-4.347c-17.976-.912-33.49-.2-41.917.496-.103-1.7-.241-3.394-.261-5.114 8.442-.692 23.536-1.383 41.052-.569-.405-2.56-.666-5.176-.666-7.9 0-8.704 3.072-17.92 8.704-25.6-2.56-8.704-6.144-27.136 1.024-33.792 13.824 0 23.552 6.656 28.16 10.752 8.699-3.589 18.427-5.637 29.179-5.637 10.752 0 20.48 2.048 28.672 5.632 4.608-4.096 14.336-10.752 28.16-10.752 7.68 7.168 3.584 25.6 1.024 33.792 5.632 7.68 8.704 16.384 8.192 25.6 0 2.478-.23 4.87-.563 7.214 17.915-.88 33.418-.174 42.004.522-.01 1.726-.169 3.41-.26 5.115-8.556-.706-24.449-1.433-42.799-.455a42.353 42.353 0 0 1-1.664 5.017c18.156.236 34.125 1.992 43.766 3.528-.22 1.7-.476 3.384-.773 5.053-9.79-1.566-26.476-3.4-45.46-3.492-8.526 14.736-26.727 24.346-55.179 25.467v.159c13.312 0 25.6 19.968 25.6 33.792V230.4c0 4.214 2.55 7.834 6.19 9.4 46.904-15.524 80.85-59.76 80.85-111.8 0-64.932-52.823-117.76-117.76-117.76C63.063 10.24 10.24 63.068 10.24 128c0 52.04 33.946 96.276 80.85 111.8z\"/>","width":255,"height":255},"instagram":{"body":"<path fill=\"#FFF\" d=\"M16 3C8.832 3 3 8.832 3 16v18c0 7.168 5.832 13 13 13h18c7.168 0 13-5.832 13-13V16c0-7.168-5.832-13-13-13H16zm0 2h18c6.086 0 11 4.914 11 11v18c0 6.086-4.914 11-11 11H16C9.914 45 5 40.086 5 34V16C5 9.914 9.914 5 16 5zm21 6a2 2 0 0 0-2 2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0-2-2zm-12 3c-6.063 0-11 4.937-11 11s4.937 11 11 11 11-4.937 11-11-4.937-11-11-11zm0 2c4.982 0 9 4.018 9 9s-4.018 9-9 9-9-4.018-9-9 4.018-9 9-9z\"/>"},"twitter":{"body":"<path fill=\"#FFF\" d=\"m5.92 6 14.662 21.375L6.23 44h3.18l12.576-14.578 10 14.578H44L28.682 21.67 42.199 6h-3.17L27.275 19.617 17.934 6H5.92zm3.797 2h7.164l23.322 34H33.04L9.717 8z\"/>"}},"width":50,"height":50}};

const defaultIconDimensions = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
);
const defaultIconTransformations = Object.freeze({
  rotate: 0,
  vFlip: false,
  hFlip: false
});
const defaultIconProps = Object.freeze({
  ...defaultIconDimensions,
  ...defaultIconTransformations
});
const defaultExtendedIconProps = Object.freeze({
  ...defaultIconProps,
  body: "",
  hidden: false
});

const defaultIconSizeCustomisations = Object.freeze({
  width: null,
  height: null
});
const defaultIconCustomisations = Object.freeze({
  // Dimensions
  ...defaultIconSizeCustomisations,
  // Transformations
  ...defaultIconTransformations
});

function mergeIconTransformations(obj1, obj2) {
  const result = {};
  if (!obj1.hFlip !== !obj2.hFlip) {
    result.hFlip = true;
  }
  if (!obj1.vFlip !== !obj2.vFlip) {
    result.vFlip = true;
  }
  const rotate = ((obj1.rotate || 0) + (obj2.rotate || 0)) % 4;
  if (rotate) {
    result.rotate = rotate;
  }
  return result;
}

function mergeIconData(parent, child) {
  const result = mergeIconTransformations(parent, child);
  for (const key in defaultExtendedIconProps) {
    if (key in defaultIconTransformations) {
      if (key in parent && !(key in result)) {
        result[key] = defaultIconTransformations[key];
      }
    } else if (key in child) {
      result[key] = child[key];
    } else if (key in parent) {
      result[key] = parent[key];
    }
  }
  return result;
}

function getIconsTree(data, names) {
  const icons = data.icons;
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  const resolved = /* @__PURE__ */ Object.create(null);
  function resolve(name) {
    if (icons[name]) {
      return resolved[name] = [];
    }
    if (!(name in resolved)) {
      resolved[name] = null;
      const parent = aliases[name] && aliases[name].parent;
      const value = parent && resolve(parent);
      if (value) {
        resolved[name] = [parent].concat(value);
      }
    }
    return resolved[name];
  }
  (names || Object.keys(icons).concat(Object.keys(aliases))).forEach(resolve);
  return resolved;
}

function internalGetIconData(data, name, tree) {
  const icons = data.icons;
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  let currentProps = {};
  function parse(name2) {
    currentProps = mergeIconData(
      icons[name2] || aliases[name2],
      currentProps
    );
  }
  parse(name);
  tree.forEach(parse);
  return mergeIconData(data, currentProps);
}
function getIconData(data, name) {
  if (data.icons[name]) {
    return internalGetIconData(data, name, []);
  }
  const tree = getIconsTree(data, [name])[name];
  return tree ? internalGetIconData(data, name, tree) : null;
}

const unitsSplit = /(-?[0-9.]*[0-9]+[0-9.]*)/g;
const unitsTest = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function calculateSize(size, ratio, precision) {
  if (ratio === 1) {
    return size;
  }
  precision = precision || 100;
  if (typeof size === "number") {
    return Math.ceil(size * ratio * precision) / precision;
  }
  if (typeof size !== "string") {
    return size;
  }
  const oldParts = size.split(unitsSplit);
  if (oldParts === null || !oldParts.length) {
    return size;
  }
  const newParts = [];
  let code = oldParts.shift();
  let isNumber = unitsTest.test(code);
  while (true) {
    if (isNumber) {
      const num = parseFloat(code);
      if (isNaN(num)) {
        newParts.push(code);
      } else {
        newParts.push(Math.ceil(num * ratio * precision) / precision);
      }
    } else {
      newParts.push(code);
    }
    code = oldParts.shift();
    if (code === void 0) {
      return newParts.join("");
    }
    isNumber = !isNumber;
  }
}

function splitSVGDefs(content, tag = "defs") {
  let defs = "";
  const index = content.indexOf("<" + tag);
  while (index >= 0) {
    const start = content.indexOf(">", index);
    const end = content.indexOf("</" + tag);
    if (start === -1 || end === -1) {
      break;
    }
    const endEnd = content.indexOf(">", end);
    if (endEnd === -1) {
      break;
    }
    defs += content.slice(start + 1, end).trim();
    content = content.slice(0, index).trim() + content.slice(endEnd + 1);
  }
  return {
    defs,
    content
  };
}
function mergeDefsAndContent(defs, content) {
  return defs ? "<defs>" + defs + "</defs>" + content : content;
}
function wrapSVGContent(body, start, end) {
  const split = splitSVGDefs(body);
  return mergeDefsAndContent(split.defs, start + split.content + end);
}

const isUnsetKeyword = (value) => value === "unset" || value === "undefined" || value === "none";
function iconToSVG(icon, customisations) {
  const fullIcon = {
    ...defaultIconProps,
    ...icon
  };
  const fullCustomisations = {
    ...defaultIconCustomisations,
    ...customisations
  };
  const box = {
    left: fullIcon.left,
    top: fullIcon.top,
    width: fullIcon.width,
    height: fullIcon.height
  };
  let body = fullIcon.body;
  [fullIcon, fullCustomisations].forEach((props) => {
    const transformations = [];
    const hFlip = props.hFlip;
    const vFlip = props.vFlip;
    let rotation = props.rotate;
    if (hFlip) {
      if (vFlip) {
        rotation += 2;
      } else {
        transformations.push(
          "translate(" + (box.width + box.left).toString() + " " + (0 - box.top).toString() + ")"
        );
        transformations.push("scale(-1 1)");
        box.top = box.left = 0;
      }
    } else if (vFlip) {
      transformations.push(
        "translate(" + (0 - box.left).toString() + " " + (box.height + box.top).toString() + ")"
      );
      transformations.push("scale(1 -1)");
      box.top = box.left = 0;
    }
    let tempValue;
    if (rotation < 0) {
      rotation -= Math.floor(rotation / 4) * 4;
    }
    rotation = rotation % 4;
    switch (rotation) {
      case 1:
        tempValue = box.height / 2 + box.top;
        transformations.unshift(
          "rotate(90 " + tempValue.toString() + " " + tempValue.toString() + ")"
        );
        break;
      case 2:
        transformations.unshift(
          "rotate(180 " + (box.width / 2 + box.left).toString() + " " + (box.height / 2 + box.top).toString() + ")"
        );
        break;
      case 3:
        tempValue = box.width / 2 + box.left;
        transformations.unshift(
          "rotate(-90 " + tempValue.toString() + " " + tempValue.toString() + ")"
        );
        break;
    }
    if (rotation % 2 === 1) {
      if (box.left !== box.top) {
        tempValue = box.left;
        box.left = box.top;
        box.top = tempValue;
      }
      if (box.width !== box.height) {
        tempValue = box.width;
        box.width = box.height;
        box.height = tempValue;
      }
    }
    if (transformations.length) {
      body = wrapSVGContent(
        body,
        '<g transform="' + transformations.join(" ") + '">',
        "</g>"
      );
    }
  });
  const customisationsWidth = fullCustomisations.width;
  const customisationsHeight = fullCustomisations.height;
  const boxWidth = box.width;
  const boxHeight = box.height;
  let width;
  let height;
  if (customisationsWidth === null) {
    height = customisationsHeight === null ? "1em" : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
    width = calculateSize(height, boxWidth / boxHeight);
  } else {
    width = customisationsWidth === "auto" ? boxWidth : customisationsWidth;
    height = customisationsHeight === null ? calculateSize(width, boxHeight / boxWidth) : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
  }
  const attributes = {};
  const setAttr = (prop, value) => {
    if (!isUnsetKeyword(value)) {
      attributes[prop] = value.toString();
    }
  };
  setAttr("width", width);
  setAttr("height", height);
  const viewBox = [box.left, box.top, boxWidth, boxHeight];
  attributes.viewBox = viewBox.join(" ");
  return {
    attributes,
    viewBox,
    body
  };
}

const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$6 = createAstro();
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
    }
  }
  const req = Astro2.request;
  const { name = "", title, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "xlink:href")}></use> ` })}`} </svg>`;
}, "C:/Users/EQUIPO/Desktop/Proyectos/astro/time-master/node_modules/.pnpm/astro-icon@1.1.0/node_modules/astro-icon/components/Icon.astro", void 0);

const $$Astro$5 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Footer;
  console.log("Javascript");
  return renderTemplate`${maybeRenderHead()}<footer class="text-white bg-[#000] py-8 px-9 text-center"> <div class="flex sm:flex-row sm:items-end items-center flex-col"> <div class="bg-white sm:h-[1px] h-0 w-full"></div> <ul class="flex xs:flex-row mx-5"> <li class="mx-3"> <a href="https://github.com/obed-tc"> ${renderComponent($$result, "Icon", $$Icon, { "name": "github", "class": "text-4xl" })} </a> </li> <li class="mx-3"> <a href="https://www.instagram.com/obed717"> ${renderComponent($$result, "Icon", $$Icon, { "name": "instagram", "class": "text-4xl" })} </a> </li> <li class="mx-3"> <a href="https://twitter.com/ObedCT_"> ${renderComponent($$result, "Icon", $$Icon, { "name": "twitter", "class": "text-4xl" })} </a> </li> <li class="mx-3"> <a href="https://discord.com/invite/CVYArP4T"> ${renderComponent($$result, "Icon", $$Icon, { "name": "discord", "class": "text-4xl" })} </a> </li> </ul> <div class="bg-white sm:h-[1px] h-0 w-full"></div> </div> <div class="mt-10">Time master</div> <p class="text-gray-300 text-xs">Copyright @ 2024 TimeMaster, Inc</p> <div class="flex flex-row justify-center my-5"> <a>Información legal</a> <div class="bg-white w-[1px] mx-4"></div> <a>Politica de privacidad</a> </div> </footer>`;
}, "C:/Users/EQUIPO/Desktop/Proyectos/astro/time-master/src/sections/Footer.astro", void 0);

const $$Astro$4 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/public/logo.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="flex flex-col"> <div class="min-h-[100vh]"> ${renderSlot($$result, $$slots["default"])} </div> <footer> ${renderComponent($$result, "Footer", $$Footer, {})} </footer>  </body></html>`;
}, "C:/Users/EQUIPO/Desktop/Proyectos/astro/time-master/src/layouts/Layout.astro", void 0);

const $$Astro$3 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Header;
  console.log("Javascript");
  return renderTemplate`${maybeRenderHead()}<header class="py-4 px-4 mx-auto max-w-xl lg:py-3 ld:px-6 text-center"> <h1 class="text-3xl my-5">
Calculadora del <span class="font-bold">tiempo</span> </h1> <p class="font-light text-gray-300">
Calculadora del tiempo en JavaScript para realizar cálculos de horas,
    minutos y segundos. ¡Simplifica tus cálculos temporales!
</p> </header>`;
}, "C:/Users/EQUIPO/Desktop/Proyectos/astro/time-master/src/sections/Header.astro", void 0);

const $$Astro$2 = createAstro();
const $$TextField = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TextField;
  const { title, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<textfield class=""${addAttribute(id, "id")} data-astro-cid-m6yxyk6s> <p class="text-sm" data-astro-cid-m6yxyk6s>${title}</p> <input class="time" maxlength="2" data-astro-cid-m6yxyk6s> </textfield> `;
}, "C:/Users/EQUIPO/Desktop/Proyectos/astro/time-master/src/components/TextField.astro", void 0);

const $$Astro$1 = createAstro();
const $$Container = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Container;
  return renderTemplate`${maybeRenderHead()}<container class="" data-astro-cid-vypryjev> <div class="flex flex-row justify-center mb-10" data-astro-cid-vypryjev>
Operación
<select class="content bg-transparent flex justify-end" id="operacion" data-astro-cid-vypryjev> <option class="bg-black" data-astro-cid-vypryjev>Sumar</option> <option class="bg-black" data-astro-cid-vypryjev>Dividir</option> <option class="bg-black" data-astro-cid-vypryjev>Restar</option> <option class="bg-black" data-astro-cid-vypryjev>Multiplicar</option> </select> </div> <div class="flex flex-row items-center justify-center" data-astro-cid-vypryjev> <div class="content text-4xl" id="sign" data-astro-cid-vypryjev>+</div> <div class="content" data-astro-cid-vypryjev> <!-- <p class="date">DIGITAL CLOCK with Vue.js</p> --> <div class="flex flex-row text-5xl items-center content-a" data-astro-cid-vypryjev> ${renderComponent($$result, "TextField", $$TextField, { "title": "Dias", "id": "dia_a", "data-astro-cid-vypryjev": true })}:
${renderComponent($$result, "TextField", $$TextField, { "title": "Hora", "id": "hora_a", "data-astro-cid-vypryjev": true })}:
${renderComponent($$result, "TextField", $$TextField, { "title": "Minutos", "id": "minuto_a", "data-astro-cid-vypryjev": true })}:
${renderComponent($$result, "TextField", $$TextField, { "title": "Segundo", "id": "segundo_a", "data-astro-cid-vypryjev": true })} </div> <div class="flex flex-row text-5xl items-center content-b" data-astro-cid-vypryjev> ${renderComponent($$result, "TextField", $$TextField, { "title": "Dias", "id": "dia_b", "data-astro-cid-vypryjev": true })}:
${renderComponent($$result, "TextField", $$TextField, { "title": "Hora", "id": "hora_b", "data-astro-cid-vypryjev": true })}:
${renderComponent($$result, "TextField", $$TextField, { "title": "Minutos", "id": "minuto_b", "data-astro-cid-vypryjev": true })}:
${renderComponent($$result, "TextField", $$TextField, { "title": "Segundo", "id": "segundo_b", "data-astro-cid-vypryjev": true })} </div> </div> </div> <div class="flex flex-col items-center" data-astro-cid-vypryjev> <div class="bg-[#daf6ff] w-[40vw] h-[2px]" data-astro-cid-vypryjev></div> <div class="content flex flex-row text-5xl items-center" data-astro-cid-vypryjev> ${renderComponent($$result, "TextField", $$TextField, { "title": "", "id": "resultado_dia", "data-astro-cid-vypryjev": true })}:
${renderComponent($$result, "TextField", $$TextField, { "title": "", "id": "resultado_hora", "data-astro-cid-vypryjev": true })}:
${renderComponent($$result, "TextField", $$TextField, { "title": "", "id": "resultado_minuto", "data-astro-cid-vypryjev": true })}:
${renderComponent($$result, "TextField", $$TextField, { "title": "", "id": "resultado_segundo", "data-astro-cid-vypryjev": true })} </div> </div> </container>  `;
}, "C:/Users/EQUIPO/Desktop/Proyectos/astro/time-master/src/sections/Container.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Time master" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="text-white"> ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Container", $$Container, {})} </main> ` })}`;
}, "C:/Users/EQUIPO/Desktop/Proyectos/astro/time-master/src/pages/index.astro", void 0);

const $$file = "C:/Users/EQUIPO/Desktop/Proyectos/astro/time-master/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
