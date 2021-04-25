/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 955:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ pagesComponent)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(103);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


const pagesComponent = {
  "/": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-8daa1a0e */ 509).then(__webpack_require__.bind(__webpack_require__, 977))),
  "/404.html": (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/* import() | v-3706649a */ 88).then(__webpack_require__.bind(__webpack_require__, 124))),
}


/***/ }),

/***/ 788:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "a": () => (/* binding */ createVueApp)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(103);
// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(615);
// EXTERNAL MODULE: ./node_modules/@vuepress/shared/lib/esm/index.js + 13 modules
var esm = __webpack_require__(736);
// EXTERNAL MODULE: ./node_modules/@vuepress/client/lib/index.js
var lib = __webpack_require__(621);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./node_modules/@vuepress/theme-default/lib/client/components/global/Badge.vue?vue&type=template&id=50695ba9



function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${(0,server_renderer_.ssrRenderAttrs)((0,external_vue_.mergeProps)({
    class: ["badge", _ctx.type],
    style: {
      verticalAlign: _ctx.vertical,
    }
  }, _attrs))}>`)
  ;(0,server_renderer_.ssrRenderSlot)(_ctx.$slots, "default", {}, () => {
    _push(`${(0,server_renderer_.ssrInterpolate)(_ctx.text)}`)
  }, _push, _parent)
  _push(`</span>`)
}
;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/components/global/Badge.vue?vue&type=template&id=50695ba9

;// CONCATENATED MODULE: ./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./node_modules/@vuepress/theme-default/lib/client/components/global/Badge.vue?vue&type=script&lang=js



/* harmony default export */ const Badgevue_type_script_lang_js = ((0,external_vue_.defineComponent)({
  name: 'Badge',

  props: {
    type: {
      type: String,
      required: false,
      default: 'tip',
    },
    text: {
      type: String,
      required: false,
      default: '',
    },
    vertical: {
      type: String,
      required: false,
      default: undefined,
    },
  },
}));

;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/components/global/Badge.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/components/global/Badge.vue



;
Badgevue_type_script_lang_js.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/mudssky.github.io/mudssky.github.io/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/mudssky.github.io/mudssky.github.io/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/mudssky.github.io/mudssky.github.io/node_modules/@vuepress/theme-default/lib/client/components/global/Badge.vue")
  return ssrRender(...args)
}


/* harmony default export */ const Badge = (Badgevue_type_script_lang_js);
;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/components/global/CodeGroup.js

/* harmony default export */ const CodeGroup = ((0,external_vue_.defineComponent)({
    name: 'CodeGroup',
    setup(_, { slots }) {
        // index of current active item
        const activeIndex = (0,external_vue_.ref)(-1);
        return () => {
            // NOTICE: here we put the `slots.default()` inside the render function to make
            // the slots reactive, otherwise the slot content won't be changed once the
            // `setup()` function of current component is called
            var _a;
            // get children code-group-item
            const items = (((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)) || [])
                .filter((vnode) => vnode.type.name === 'CodeGroupItem')
                .map((vnode) => {
                if (vnode.props === null) {
                    vnode.props = {};
                }
                return vnode;
            });
            // do not render anything if there is no code-group-item
            if (items.length === 0) {
                return null;
            }
            if (activeIndex.value === -1) {
                // initial state
                // find the index of the code-group-item with `active` props
                activeIndex.value = items.findIndex((vnode) => vnode.props.active === '' || vnode.props.active === true);
                // if there is no `active` props on code-group-item, set the first item active
                if (activeIndex.value === -1) {
                    activeIndex.value = 0;
                }
            }
            else {
                // re-render triggered by modifying `activeIndex` ref
                // set the active item
                items.forEach((vnode, i) => {
                    vnode.props.active = i === activeIndex.value;
                });
            }
            return (0,external_vue_.h)('div', { class: 'code-group' }, [
                (0,external_vue_.h)('div', { class: 'code-group__nav' }, (0,external_vue_.h)('ul', { class: 'code-group__ul' }, items.map((vnode, i) => (0,external_vue_.h)('li', { class: 'code-group__li' }, (0,external_vue_.h)('button', {
                    class: `code-group__nav-tab${i === activeIndex.value
                        ? ' code-group__nav-tab-active'
                        : ''}`,
                    onClick: () => (activeIndex.value = i),
                }, vnode.props.title))))),
                items,
            ]);
        };
    },
}));

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./node_modules/@vuepress/theme-default/lib/client/components/global/CodeGroupItem.vue?vue&type=template&id=d7c6020c



function CodeGroupItemvue_type_template_id_d7c6020c_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${(0,server_renderer_.ssrRenderAttrs)((0,external_vue_.mergeProps)({
    class: ["code-group-item", { 'code-group-item__active': _ctx.active }]
  }, _attrs))}>`)
  ;(0,server_renderer_.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</div>`)
}
;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/components/global/CodeGroupItem.vue?vue&type=template&id=d7c6020c

;// CONCATENATED MODULE: ./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./node_modules/@vuepress/theme-default/lib/client/components/global/CodeGroupItem.vue?vue&type=script&lang=js



/* harmony default export */ const CodeGroupItemvue_type_script_lang_js = ((0,external_vue_.defineComponent)({
  name: 'CodeGroupItem',

  props: {
    title: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
}));

;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/components/global/CodeGroupItem.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/components/global/CodeGroupItem.vue



;
CodeGroupItemvue_type_script_lang_js.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/mudssky.github.io/mudssky.github.io/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/mudssky.github.io/mudssky.github.io/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/mudssky.github.io/mudssky.github.io/node_modules/@vuepress/theme-default/lib/client/components/global/CodeGroupItem.vue")
  return CodeGroupItemvue_type_template_id_d7c6020c_ssrRender(...args)
}


/* harmony default export */ const CodeGroupItem = (CodeGroupItemvue_type_script_lang_js);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./node_modules/@vuepress/theme-default/lib/client/components/global/OutboundLink.vue?vue&type=template&id=e1e78c92



function OutboundLinkvue_type_template_id_e1e78c92_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_RawOutboundLink = (0,external_vue_.resolveComponent)("RawOutboundLink")

  _push((0,server_renderer_.ssrRenderComponent)(_component_RawOutboundLink, _attrs, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<span class="sr-only"${
          _scopeId
        }>${
          (0,server_renderer_.ssrInterpolate)(_ctx.themeLocale.openInNewWindow)
        }</span>`)
      } else {
        return [
          (0,external_vue_.createVNode)("span", { class: "sr-only" }, (0,external_vue_.toDisplayString)(_ctx.themeLocale.openInNewWindow), 1)
        ]
      }
    }),
    _: 1
  }, _parent))
}
;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/components/global/OutboundLink.vue?vue&type=template&id=e1e78c92

// EXTERNAL MODULE: ./node_modules/@vuepress/theme-default/lib/client/composables/index.js + 6 modules
var composables = __webpack_require__(319);
;// CONCATENATED MODULE: ./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./node_modules/@vuepress/theme-default/lib/client/components/global/OutboundLink.vue?vue&type=script&lang=js





/**
 * Override the built-in `<OutboundLink>` for a11y
 */
/* harmony default export */ const OutboundLinkvue_type_script_lang_js = ((0,external_vue_.defineComponent)({
  name: 'OutboundLink',

  components: {
    RawOutboundLink: lib/* OutboundLink */.MS,
  },

  setup() {
    const themeLocale = (0,composables/* useThemeLocaleData */.X6)()

    return {
      themeLocale,
    }
  },
}));

;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/components/global/OutboundLink.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/components/global/OutboundLink.vue



;
OutboundLinkvue_type_script_lang_js.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/mudssky.github.io/mudssky.github.io/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/mudssky.github.io/mudssky.github.io/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/mudssky.github.io/mudssky.github.io/node_modules/@vuepress/theme-default/lib/client/components/global/OutboundLink.vue")
  return OutboundLinkvue_type_template_id_e1e78c92_ssrRender(...args)
}


/* harmony default export */ const OutboundLink = (OutboundLinkvue_type_script_lang_js);
// EXTERNAL MODULE: ./node_modules/@vuepress/theme-default/lib/client/styles/index.scss
var styles = __webpack_require__(500);
;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/clientAppEnhance.js







/* harmony default export */ const clientAppEnhance = ((0,lib/* defineClientAppEnhance */.vW)(({ app, router }) => {
    app.component('Badge', Badge);
    app.component('CodeGroup', CodeGroup);
    app.component('CodeGroupItem', CodeGroupItem);
    // unregister the built-in `<OutboundLink>` to avoid warning
    delete app._context.components.OutboundLink;
    // override the built-in `<OutboundLink>`
    app.component('OutboundLink', OutboundLink);
    // docsearch feature might not be commonly used, so we don't put it
    // into dependencies of default theme, but it is supported
    if (typeof __DOCSEARCH_PROPS__ === 'undefined') {
        // register a mock `<Docsearch>` if docsearch plugin is not enabled
        app.component('Docsearch', () => null);
    }
    // handle scrollBehavior with transition
    const scrollBehavior = router.options.scrollBehavior;
    router.options.scrollBehavior = async (...args) => {
        await (0,composables/* useScrollPromise */.P$)().wait();
        return scrollBehavior(...args);
    };
}));

;// CONCATENATED MODULE: ./node_modules/medium-zoom/dist/medium-zoom.esm.js
/*! medium-zoom 1.0.6 | MIT License | https://github.com/francoischalifour/medium-zoom */
var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var isSupported = function isSupported(node) {
  return node.tagName === 'IMG';
};

/* eslint-disable-next-line no-prototype-builtins */
var isNodeList = function isNodeList(selector) {
  return NodeList.prototype.isPrototypeOf(selector);
};

var isNode = function isNode(selector) {
  return selector && selector.nodeType === 1;
};

var isSvg = function isSvg(image) {
  var source = image.currentSrc || image.src;
  return source.substr(-4).toLowerCase() === '.svg';
};

var getImagesFromSelector = function getImagesFromSelector(selector) {
  try {
    if (Array.isArray(selector)) {
      return selector.filter(isSupported);
    }

    if (isNodeList(selector)) {
      // Do not use spread operator or Array.from() for IE support
      return [].slice.call(selector).filter(isSupported);
    }

    if (isNode(selector)) {
      return [selector].filter(isSupported);
    }

    if (typeof selector === 'string') {
      // Do not use spread operator or Array.from() for IE support
      return [].slice.call(document.querySelectorAll(selector)).filter(isSupported);
    }

    return [];
  } catch (err) {
    throw new TypeError('The provided selector is invalid.\n' + 'Expects a CSS selector, a Node element, a NodeList or an array.\n' + 'See: https://github.com/francoischalifour/medium-zoom');
  }
};

var createOverlay = function createOverlay(background) {
  var overlay = document.createElement('div');
  overlay.classList.add('medium-zoom-overlay');
  overlay.style.background = background;

  return overlay;
};

var cloneTarget = function cloneTarget(template) {
  var _template$getBounding = template.getBoundingClientRect(),
      top = _template$getBounding.top,
      left = _template$getBounding.left,
      width = _template$getBounding.width,
      height = _template$getBounding.height;

  var clone = template.cloneNode();
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;

  clone.removeAttribute('id');
  clone.style.position = 'absolute';
  clone.style.top = top + scrollTop + 'px';
  clone.style.left = left + scrollLeft + 'px';
  clone.style.width = width + 'px';
  clone.style.height = height + 'px';
  clone.style.transform = '';

  return clone;
};

var createCustomEvent = function createCustomEvent(type, params) {
  var eventParams = _extends({
    bubbles: false,
    cancelable: false,
    detail: undefined
  }, params);

  if (typeof window.CustomEvent === 'function') {
    return new CustomEvent(type, eventParams);
  }

  var customEvent = document.createEvent('CustomEvent');
  customEvent.initCustomEvent(type, eventParams.bubbles, eventParams.cancelable, eventParams.detail);

  return customEvent;
};

var mediumZoom = function mediumZoom(selector) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  /**
   * Ensure the compatibility with IE11 if no Promise polyfill are used.
   */
  var Promise = window.Promise || function Promise(fn) {
    function noop() {}
    fn(noop, noop);
  };

  var _handleClick = function _handleClick(event) {
    var target = event.target;


    if (target === overlay) {
      close();
      return;
    }

    if (images.indexOf(target) === -1) {
      return;
    }

    toggle({ target: target });
  };

  var _handleScroll = function _handleScroll() {
    if (isAnimating || !active.original) {
      return;
    }

    var currentScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (Math.abs(scrollTop - currentScroll) > zoomOptions.scrollOffset) {
      setTimeout(close, 150);
    }
  };

  var _handleKeyUp = function _handleKeyUp(event) {
    var key = event.key || event.keyCode;

    // Close if escape key is pressed
    if (key === 'Escape' || key === 'Esc' || key === 27) {
      close();
    }
  };

  var update = function update() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var newOptions = options;

    if (options.background) {
      overlay.style.background = options.background;
    }

    if (options.container && options.container instanceof Object) {
      newOptions.container = _extends({}, zoomOptions.container, options.container);
    }

    if (options.template) {
      var template = isNode(options.template) ? options.template : document.querySelector(options.template);

      newOptions.template = template;
    }

    zoomOptions = _extends({}, zoomOptions, newOptions);

    images.forEach(function (image) {
      image.dispatchEvent(createCustomEvent('medium-zoom:update', {
        detail: { zoom: zoom }
      }));
    });

    return zoom;
  };

  var clone = function clone() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return mediumZoom(_extends({}, zoomOptions, options));
  };

  var attach = function attach() {
    for (var _len = arguments.length, selectors = Array(_len), _key = 0; _key < _len; _key++) {
      selectors[_key] = arguments[_key];
    }

    var newImages = selectors.reduce(function (imagesAccumulator, currentSelector) {
      return [].concat(imagesAccumulator, getImagesFromSelector(currentSelector));
    }, []);

    newImages.filter(function (newImage) {
      return images.indexOf(newImage) === -1;
    }).forEach(function (newImage) {
      images.push(newImage);
      newImage.classList.add('medium-zoom-image');
    });

    eventListeners.forEach(function (_ref) {
      var type = _ref.type,
          listener = _ref.listener,
          options = _ref.options;

      newImages.forEach(function (image) {
        image.addEventListener(type, listener, options);
      });
    });

    return zoom;
  };

  var detach = function detach() {
    for (var _len2 = arguments.length, selectors = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      selectors[_key2] = arguments[_key2];
    }

    if (active.zoomed) {
      close();
    }

    var imagesToDetach = selectors.length > 0 ? selectors.reduce(function (imagesAccumulator, currentSelector) {
      return [].concat(imagesAccumulator, getImagesFromSelector(currentSelector));
    }, []) : images;

    imagesToDetach.forEach(function (image) {
      image.classList.remove('medium-zoom-image');
      image.dispatchEvent(createCustomEvent('medium-zoom:detach', {
        detail: { zoom: zoom }
      }));
    });

    images = images.filter(function (image) {
      return imagesToDetach.indexOf(image) === -1;
    });

    return zoom;
  };

  var on = function on(type, listener) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    images.forEach(function (image) {
      image.addEventListener('medium-zoom:' + type, listener, options);
    });

    eventListeners.push({ type: 'medium-zoom:' + type, listener: listener, options: options });

    return zoom;
  };

  var off = function off(type, listener) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    images.forEach(function (image) {
      image.removeEventListener('medium-zoom:' + type, listener, options);
    });

    eventListeners = eventListeners.filter(function (eventListener) {
      return !(eventListener.type === 'medium-zoom:' + type && eventListener.listener.toString() === listener.toString());
    });

    return zoom;
  };

  var open = function open() {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        target = _ref2.target;

    var _animate = function _animate() {
      var container = {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      };
      var viewportWidth = void 0;
      var viewportHeight = void 0;

      if (zoomOptions.container) {
        if (zoomOptions.container instanceof Object) {
          // The container is given as an object with properties like width, height, left, top
          container = _extends({}, container, zoomOptions.container);

          // We need to adjust custom options like container.right or container.bottom
          viewportWidth = container.width - container.left - container.right - zoomOptions.margin * 2;
          viewportHeight = container.height - container.top - container.bottom - zoomOptions.margin * 2;
        } else {
          // The container is given as an element
          var zoomContainer = isNode(zoomOptions.container) ? zoomOptions.container : document.querySelector(zoomOptions.container);

          var _zoomContainer$getBou = zoomContainer.getBoundingClientRect(),
              _width = _zoomContainer$getBou.width,
              _height = _zoomContainer$getBou.height,
              _left = _zoomContainer$getBou.left,
              _top = _zoomContainer$getBou.top;

          container = _extends({}, container, {
            width: _width,
            height: _height,
            left: _left,
            top: _top
          });
        }
      }

      viewportWidth = viewportWidth || container.width - zoomOptions.margin * 2;
      viewportHeight = viewportHeight || container.height - zoomOptions.margin * 2;

      var zoomTarget = active.zoomedHd || active.original;
      var naturalWidth = isSvg(zoomTarget) ? viewportWidth : zoomTarget.naturalWidth || viewportWidth;
      var naturalHeight = isSvg(zoomTarget) ? viewportHeight : zoomTarget.naturalHeight || viewportHeight;

      var _zoomTarget$getBoundi = zoomTarget.getBoundingClientRect(),
          top = _zoomTarget$getBoundi.top,
          left = _zoomTarget$getBoundi.left,
          width = _zoomTarget$getBoundi.width,
          height = _zoomTarget$getBoundi.height;

      var scaleX = Math.min(naturalWidth, viewportWidth) / width;
      var scaleY = Math.min(naturalHeight, viewportHeight) / height;
      var scale = Math.min(scaleX, scaleY);
      var translateX = (-left + (viewportWidth - width) / 2 + zoomOptions.margin + container.left) / scale;
      var translateY = (-top + (viewportHeight - height) / 2 + zoomOptions.margin + container.top) / scale;
      var transform = 'scale(' + scale + ') translate3d(' + translateX + 'px, ' + translateY + 'px, 0)';

      active.zoomed.style.transform = transform;

      if (active.zoomedHd) {
        active.zoomedHd.style.transform = transform;
      }
    };

    return new Promise(function (resolve) {
      if (target && images.indexOf(target) === -1) {
        resolve(zoom);
        return;
      }

      var _handleOpenEnd = function _handleOpenEnd() {
        isAnimating = false;
        active.zoomed.removeEventListener('transitionend', _handleOpenEnd);
        active.original.dispatchEvent(createCustomEvent('medium-zoom:opened', {
          detail: { zoom: zoom }
        }));

        resolve(zoom);
      };

      if (active.zoomed) {
        resolve(zoom);
        return;
      }

      if (target) {
        // The zoom was triggered manually via a click
        active.original = target;
      } else if (images.length > 0) {
var _images = images;
        active.original = _images[0];
      } else {
        resolve(zoom);
        return;
      }

      active.original.dispatchEvent(createCustomEvent('medium-zoom:open', {
        detail: { zoom: zoom }
      }));

      scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      isAnimating = true;
      active.zoomed = cloneTarget(active.original);

      document.body.appendChild(overlay);

      if (zoomOptions.template) {
        var template = isNode(zoomOptions.template) ? zoomOptions.template : document.querySelector(zoomOptions.template);
        active.template = document.createElement('div');
        active.template.appendChild(template.content.cloneNode(true));

        document.body.appendChild(active.template);
      }

      document.body.appendChild(active.zoomed);

      window.requestAnimationFrame(function () {
        document.body.classList.add('medium-zoom--opened');
      });

      active.original.classList.add('medium-zoom-image--hidden');
      active.zoomed.classList.add('medium-zoom-image--opened');

      active.zoomed.addEventListener('click', close);
      active.zoomed.addEventListener('transitionend', _handleOpenEnd);

      if (active.original.getAttribute('data-zoom-src')) {
        active.zoomedHd = active.zoomed.cloneNode();

        // Reset the `scrset` property or the HD image won't load.
        active.zoomedHd.removeAttribute('srcset');
        active.zoomedHd.removeAttribute('sizes');

        active.zoomedHd.src = active.zoomed.getAttribute('data-zoom-src');

        active.zoomedHd.onerror = function () {
          clearInterval(getZoomTargetSize);
          console.warn('Unable to reach the zoom image target ' + active.zoomedHd.src);
          active.zoomedHd = null;
          _animate();
        };

        // We need to access the natural size of the full HD
        // target as fast as possible to compute the animation.
        var getZoomTargetSize = setInterval(function () {
          if ( active.zoomedHd.complete) {
            clearInterval(getZoomTargetSize);
            active.zoomedHd.classList.add('medium-zoom-image--opened');
            active.zoomedHd.addEventListener('click', close);
            document.body.appendChild(active.zoomedHd);
            _animate();
          }
        }, 10);
      } else if (active.original.hasAttribute('srcset')) {
        // If an image has a `srcset` attribuet, we don't know the dimensions of the
        // zoomed (HD) image (like when `data-zoom-src` is specified).
        // Therefore the approach is quite similar.
        active.zoomedHd = active.zoomed.cloneNode();

        // Resetting the sizes attribute tells the browser to load the
        // image best fitting the current viewport size, respecting the `srcset`.
        active.zoomedHd.removeAttribute('sizes');

        // In Firefox, the `loading` attribute needs to be set to `eager` (default
        // value) for the load event to be fired.
        active.zoomedHd.removeAttribute('loading');

        // Wait for the load event of the hd image. This will fire if the image
        // is already cached.
        var loadEventListener = active.zoomedHd.addEventListener('load', function () {
          active.zoomedHd.removeEventListener('load', loadEventListener);
          active.zoomedHd.classList.add('medium-zoom-image--opened');
          active.zoomedHd.addEventListener('click', close);
          document.body.appendChild(active.zoomedHd);
          _animate();
        });
      } else {
        _animate();
      }
    });
  };

  var close = function close() {
    return new Promise(function (resolve) {
      if (isAnimating || !active.original) {
        resolve(zoom);
        return;
      }

      var _handleCloseEnd = function _handleCloseEnd() {
        active.original.classList.remove('medium-zoom-image--hidden');
        document.body.removeChild(active.zoomed);
        if (active.zoomedHd) {
          document.body.removeChild(active.zoomedHd);
        }
        document.body.removeChild(overlay);
        active.zoomed.classList.remove('medium-zoom-image--opened');
        if (active.template) {
          document.body.removeChild(active.template);
        }

        isAnimating = false;
        active.zoomed.removeEventListener('transitionend', _handleCloseEnd);

        active.original.dispatchEvent(createCustomEvent('medium-zoom:closed', {
          detail: { zoom: zoom }
        }));

        active.original = null;
        active.zoomed = null;
        active.zoomedHd = null;
        active.template = null;

        resolve(zoom);
      };

      isAnimating = true;
      document.body.classList.remove('medium-zoom--opened');
      active.zoomed.style.transform = '';

      if (active.zoomedHd) {
        active.zoomedHd.style.transform = '';
      }

      // Fade out the template so it's not too abrupt
      if (active.template) {
        active.template.style.transition = 'opacity 150ms';
        active.template.style.opacity = 0;
      }

      active.original.dispatchEvent(createCustomEvent('medium-zoom:close', {
        detail: { zoom: zoom }
      }));

      active.zoomed.addEventListener('transitionend', _handleCloseEnd);
    });
  };

  var toggle = function toggle() {
    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        target = _ref3.target;

    if (active.original) {
      return close();
    }

    return open({ target: target });
  };

  var getOptions = function getOptions() {
    return zoomOptions;
  };

  var getImages = function getImages() {
    return images;
  };

  var getZoomedImage = function getZoomedImage() {
    return active.original;
  };

  var images = [];
  var eventListeners = [];
  var isAnimating = false;
  var scrollTop = 0;
  var zoomOptions = options;
  var active = {
    original: null,
    zoomed: null,
    zoomedHd: null,
    template: null

    // If the selector is omitted, it's replaced by the options
  };if (Object.prototype.toString.call(selector) === '[object Object]') {
    zoomOptions = selector;
  } else if (selector || typeof selector === 'string' // to process empty string as a selector
  ) {
      attach(selector);
    }

  // Apply the default option values
  zoomOptions = _extends({
    margin: 0,
    background: '#fff',
    scrollOffset: 40,
    container: null,
    template: null
  }, zoomOptions);

  var overlay = createOverlay(zoomOptions.background);

  document.addEventListener('click', _handleClick);
  document.addEventListener('keyup', _handleKeyUp);
  document.addEventListener('scroll', _handleScroll);
  window.addEventListener('resize', close);

  var zoom = {
    open: open,
    close: close,
    toggle: toggle,
    update: update,
    clone: clone,
    attach: attach,
    detach: detach,
    on: on,
    off: off,
    getOptions: getOptions,
    getImages: getImages,
    getZoomedImage: getZoomedImage
  };

  return zoom;
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";
styleInject(css);

/* harmony default export */ const medium_zoom_esm = (mediumZoom);

;// CONCATENATED MODULE: ./node_modules/@vuepress/plugin-medium-zoom/lib/client/composables/useMediumZoom.js

const mediumZoomSymbol = Symbol('mediumZoom');
/**
 * Inject medium zoom instance
 */
const useMediumZoom = () => {
    const zoom = inject(mediumZoomSymbol);
    if (!zoom) {
        throw new Error('useMediumZoom() is called without provider.');
    }
    return zoom;
};

;// CONCATENATED MODULE: ./node_modules/@vuepress/plugin-medium-zoom/lib/client/composables/index.js


// EXTERNAL MODULE: ./node_modules/@vuepress/plugin-medium-zoom/lib/client/styles/medium-zoom.css
var medium_zoom = __webpack_require__(837);
;// CONCATENATED MODULE: ./node_modules/@vuepress/plugin-medium-zoom/lib/client/clientAppEnhance.js




const selector = ".theme-default-content > img, .theme-default-content :not(a) > img";
const zoomOptions = {};
const delay = 300;
/* harmony default export */ const client_clientAppEnhance = ((0,lib/* defineClientAppEnhance */.vW)(({ app, router }) => {
    if (true)
        return;
    // create zoom instance and provide it
    const zoom = medium_zoom_esm(zoomOptions);
    zoom.refresh = (sel = selector) => {
        zoom.detach();
        zoom.attach(sel);
    };
    app.provide(mediumZoomSymbol, zoom);
    router.afterEach(() => {
        setTimeout(() => zoom.refresh(), delay);
    });
}));

// EXTERNAL MODULE: ./node_modules/@vuepress/plugin-theme-data/lib/client/composables/index.js + 3 modules
var client_composables = __webpack_require__(958);
;// CONCATENATED MODULE: ./node_modules/@vuepress/plugin-theme-data/lib/client/clientAppEnhance.js



/* harmony default export */ const lib_client_clientAppEnhance = ((0,lib/* defineClientAppEnhance */.vW)(({ app }) => {
    // provide theme data & theme locale data
    const themeData = (0,client_composables/* useThemeData */.BV)();
    const routeLocale = app._context.provides[lib/* routeLocaleSymbol */.C3];
    const themeLocaleData = (0,external_vue_.computed)(() => (0,client_composables/* resolveThemeLocaleData */.g$)(themeData.value, routeLocale.value));
    app.provide(client_composables/* themeLocaleDataSymbol */.ZS, themeLocaleData);
    Object.defineProperties(app.config.globalProperties, {
        $theme: {
            get() {
                return themeData.value;
            },
        },
        $themeLocale: {
            get() {
                return themeLocaleData.value;
            },
        },
    });
}));

;// CONCATENATED MODULE: ./docs/.vuepress/.temp/internal/clientAppEnhances.js




const clientAppEnhances = [
  clientAppEnhance,
  client_clientAppEnhance,
  lib_client_clientAppEnhance,
]

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./node_modules/@vuepress/plugin-back-to-top/lib/client/BackToTop.vue?vue&type=template&id=137bc75f

function BackToTopvue_type_template_id_137bc75f_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if (_ctx.show) {
    _push(`<svg class="back-to-top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.484 28.284"><g transform="translate(-229 -126.358)"><rect fill="currentColor" width="35" height="5" rx="2" transform="translate(229 151.107) rotate(-45)"></rect><rect fill="currentColor" width="35" height="5" rx="2" transform="translate(274.949 154.642) rotate(-135)"></rect></g></svg>`)
  } else {
    _push(`<!---->`)
  }
}
;// CONCATENATED MODULE: ./node_modules/ts-debounce/dist/src/index.esm.js
function r(r,e,n){var i,t,o;void 0===e&&(e=50),void 0===n&&(n={});var a=null!=(i=n.isImmediate)&&i,u=null!=(t=n.callback)&&t,c=n.maxWait,v=Date.now(),l=[];function f(){if(void 0!==c){var r=Date.now()-v;if(r+e>=c)return c-r}return e}var d=function(){var e=[].slice.call(arguments),n=this;return new Promise(function(i,t){var c=a&&void 0===o;if(void 0!==o&&clearTimeout(o),o=setTimeout(function(){if(o=void 0,v=Date.now(),!a){var i=r.apply(n,e);u&&u(i),l.forEach(function(r){return(0,r.resolve)(i)}),l=[]}},f()),c){var d=r.apply(n,e);return u&&u(d),i(d)}l.push({resolve:i,reject:t})})};return d.cancel=function(r){void 0!==o&&clearTimeout(o),l.forEach(function(e){return(0,e.reject)(r)}),l=[]},d}
//# sourceMappingURL=index.esm.js.map

;// CONCATENATED MODULE: ./node_modules/esbuild-loader/dist/index.js??clonedRuleSet-30.use[0]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./node_modules/@vuepress/plugin-back-to-top/lib/client/BackToTop.vue?vue&type=script&lang=ts


const getScrollTop = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
const scrollToTop = () => window.scrollTo({top: 0, behavior: "smooth"});
/* harmony default export */ const BackToTopvue_type_script_lang_ts = ((0,external_vue_.defineComponent)({
  name: "BackToTop",
  setup() {
    const scrollTop = (0,external_vue_.ref)(0);
    const show = (0,external_vue_.computed)(() => scrollTop.value > 300);
    (0,external_vue_.onMounted)(() => {
      scrollTop.value = getScrollTop();
      window.addEventListener("scroll", r(() => {
        scrollTop.value = getScrollTop();
      }, 100));
    });
    return {
      show,
      scrollToTop
    };
  }
}));

;// CONCATENATED MODULE: ./node_modules/@vuepress/plugin-back-to-top/lib/client/BackToTop.vue?vue&type=script&lang=ts
 
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-33.use[0]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-33.use[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./node_modules/@vuepress/plugin-back-to-top/lib/client/BackToTop.vue?vue&type=style&index=0&id=137bc75f&lang=css
var BackToTopvue_type_style_index_0_id_137bc75f_lang_css = __webpack_require__(709);
;// CONCATENATED MODULE: ./node_modules/@vuepress/plugin-back-to-top/lib/client/BackToTop.vue?vue&type=style&index=0&id=137bc75f&lang=css

;// CONCATENATED MODULE: ./node_modules/@vuepress/plugin-back-to-top/lib/client/BackToTop.vue




;

BackToTopvue_type_script_lang_ts.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/mudssky.github.io/mudssky.github.io/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/mudssky.github.io/mudssky.github.io/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/mudssky.github.io/mudssky.github.io/node_modules/@vuepress/plugin-back-to-top/lib/client/BackToTop.vue")
  return BackToTopvue_type_template_id_137bc75f_ssrRender(...args)
}


/* harmony default export */ const BackToTop = (BackToTopvue_type_script_lang_ts);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/internal/clientAppRootComponents.js


const clientAppRootComponents = [
  BackToTop,
]

;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/clientAppSetup.js



/* harmony default export */ const clientAppSetup = ((0,lib/* defineClientAppSetup */.F2)(() => {
    // we need to access sidebar items in multiple components
    // so we make it global computed
    const themeLocale = (0,composables/* useThemeLocaleData */.X6)();
    const frontmatter = (0,lib/* usePageFrontmatter */.I2)();
    const sidebarItems = (0,external_vue_.computed)(() => (0,composables/* resolveSidebarItems */.T4)(frontmatter.value, themeLocale.value));
    (0,external_vue_.provide)(composables/* sidebarItemsSymbol */.Vc, sidebarItems);
}));

;// CONCATENATED MODULE: ./node_modules/@vuepress/plugin-active-header-links/lib/client/composables/useActiveHeaderLinks.js




const useActiveHeaderLinks = ({ headerLinkSelector, headerAnchorSelector, delay, offset = 5, }) => {
    const router = (0,external_vue_router_.useRouter)();
    const page = (0,lib/* usePageData */.Vi)();
    const setActiveRouteHash = () => {
        var _a, _b, _c, _d;
        // get all header links
        const headerLinks = Array.from(document.querySelectorAll(headerLinkSelector));
        // get all header anchors
        const headerAnchors = Array.from(document.querySelectorAll(headerAnchorSelector));
        // filter anchors that do not have corresponding links
        const existedHeaderAnchors = headerAnchors.filter((anchor) => headerLinks.some((link) => link.hash === anchor.hash));
        // get current scrollTop
        const scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
        // get current scrollBottom
        const scrollBottom = window.innerHeight + scrollTop;
        // get the total scroll length of current page
        const scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
        // check if we have reached page bottom
        // notice the `scrollBottom` might not be exactly equal to `scrollHeight`, so we add offset here
        const isAtPageBottom = Math.abs(scrollHeight - scrollBottom) < offset;
        for (let i = 0; i < existedHeaderAnchors.length; i++) {
            const anchor = existedHeaderAnchors[i];
            const nextAnchor = existedHeaderAnchors[i + 1];
            // if this is the first anchor and now it's on the top of the page
            const isTheFirstAnchorActive = i === 0 && scrollTop === 0;
            // notice the `scrollTop` might not be exactly equal to `offsetTop` after clicking the anchor
            // so we add offset
            // if has scrolled past this anchor
            const hasPassedCurrentAnchor = scrollTop >= ((_b = (_a = anchor.parentElement) === null || _a === void 0 ? void 0 : _a.offsetTop) !== null && _b !== void 0 ? _b : 0) - offset;
            // if has not scrolled past next anchor
            const hasNotPassedNextAnchor = !nextAnchor ||
                scrollTop < ((_d = (_c = nextAnchor.parentElement) === null || _c === void 0 ? void 0 : _c.offsetTop) !== null && _d !== void 0 ? _d : 0) - offset;
            // if this anchor is the active anchor
            const isActive = isTheFirstAnchorActive ||
                (hasPassedCurrentAnchor && hasNotPassedNextAnchor);
            // continue to find the active anchor
            if (!isActive)
                continue;
            const routeHash = decodeURIComponent(router.currentRoute.value.hash);
            const anchorHash = decodeURIComponent(anchor.hash);
            // if the active anchor hash is current route hash, do nothing
            if (routeHash === anchorHash)
                return;
            // check if anchor is at the bottom of the page to keep hash consistent
            if (isAtPageBottom) {
                for (let j = i + 1; j < existedHeaderAnchors.length; j++) {
                    // if current route hash is below the active hash, do nothing
                    if (routeHash === decodeURIComponent(existedHeaderAnchors[j].hash)) {
                        return;
                    }
                }
            }
            // replace current route hash with the active anchor hash
            replaceWithoutScrollBehavior(router, {
                hash: anchorHash,
                force: true,
            });
            return;
        }
    };
    const onScroll = r(() => setActiveRouteHash(), delay);
    (0,external_vue_.onMounted)(() => {
        onScroll();
        window.addEventListener('scroll', onScroll);
    });
    (0,external_vue_.onBeforeUnmount)(() => {
        window.removeEventListener('scroll', onScroll);
    });
    (0,external_vue_.watch)(() => page.value.path, onScroll);
};
/**
 * Call `router.replace()` and do not trigger `scrollBehavior`
 */
const replaceWithoutScrollBehavior = async (router, ...args) => {
    // temporarily disable `scrollBehavior`
    // restore it after navigation
    const { scrollBehavior } = router.options;
    router.options.scrollBehavior = undefined;
    await router
        .replace(...args)
        .finally(() => (router.options.scrollBehavior = scrollBehavior));
};

;// CONCATENATED MODULE: ./node_modules/@vuepress/plugin-active-header-links/lib/client/composables/index.js


;// CONCATENATED MODULE: ./node_modules/@vuepress/plugin-active-header-links/lib/client/clientAppSetup.js


const headerLinkSelector = ".sidebar-link";
const headerAnchorSelector = ".header-anchor";
const clientAppSetup_delay = 200;
const offset = 5;
/* harmony default export */ const client_clientAppSetup = ((0,lib/* defineClientAppSetup */.F2)(() => {
    if (true)
        return;
    useActiveHeaderLinks({
        headerLinkSelector,
        headerAnchorSelector,
        delay: clientAppSetup_delay,
        offset,
    });
}));

// EXTERNAL MODULE: ./node_modules/nprogress/nprogress.js
var nprogress = __webpack_require__(865);
// EXTERNAL MODULE: ./node_modules/@vuepress/plugin-nprogress/lib/client/styles/nprogress.css
var styles_nprogress = __webpack_require__(359);
;// CONCATENATED MODULE: ./node_modules/@vuepress/plugin-nprogress/lib/client/composables/useNprogress.js




const useNprogress = () => {
    (0,external_vue_.onMounted)(() => {
        // get vue-router instance
        const router = (0,external_vue_router_.useRouter)();
        // record which pages have been loaded
        const loadedPages = new Set();
        // add path of current page as initial value
        loadedPages.add(router.currentRoute.value.path);
        // set nprogress config
        nprogress.configure({ showSpinner: false });
        // show progress bar before navigation
        router.beforeEach((to) => {
            if (!loadedPages.has(to.path)) {
                nprogress.start();
            }
        });
        // hide progress bar after navigation
        router.afterEach((to) => {
            loadedPages.add(to.path);
            nprogress.done();
        });
    });
};

;// CONCATENATED MODULE: ./node_modules/@vuepress/plugin-nprogress/lib/client/composables/index.js


;// CONCATENATED MODULE: ./node_modules/@vuepress/plugin-nprogress/lib/client/clientAppSetup.js


/* harmony default export */ const lib_client_clientAppSetup = ((0,lib/* defineClientAppSetup */.F2)(() => {
    useNprogress();
}));

;// CONCATENATED MODULE: ./docs/.vuepress/.temp/internal/clientAppSetups.js




const clientAppSetups = [
  clientAppSetup,
  client_clientAppSetup,
  lib_client_clientAppSetup,
]

// EXTERNAL MODULE: ./docs/.vuepress/.temp/internal/pagesComponent.js
var pagesComponent = __webpack_require__(955);
// EXTERNAL MODULE: ./node_modules/@vuepress/client/lib/components/Vuepress.js + 1 modules
var Vuepress = __webpack_require__(663);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/internal/pageRoutes/v-8daa1a0e.js


/* harmony default export */ const v_8daa1a0e = ([
  {
    name: "v-8daa1a0e",
    path: "/",
    component: Vuepress/* Vuepress */.Y,
    meta: { title: "" },
  },
  {
    path: "/index.html",
    redirect: "/",
  },
  {
    path: "/README.md",
    redirect: "/",
  },
]);

;// CONCATENATED MODULE: ./docs/.vuepress/.temp/internal/pageRoutes/v-3706649a.js


/* harmony default export */ const v_3706649a = ([
  {
    name: "v-3706649a",
    path: "/404.html",
    component: Vuepress/* Vuepress */.Y,
    meta: { title: "" },
  },
]);

;// CONCATENATED MODULE: ./docs/.vuepress/.temp/internal/pagesRoutes.js




const pagesRoutes = [
  ...v_8daa1a0e,
  ...v_3706649a,
  {
    name: "404",
    path: "/:catchAll(.*)",
    component: Vuepress/* Vuepress */.Y,
  },
]

// EXTERNAL MODULE: ./node_modules/@vuepress/client/lib/injections/index.js + 12 modules
var injections = __webpack_require__(34);
// EXTERNAL MODULE: ./node_modules/@vuepress/client/lib/components/index.js + 1 modules
var components = __webpack_require__(10);
// EXTERNAL MODULE: ./node_modules/@vuepress/client/lib/utils/index.js + 3 modules
var utils = __webpack_require__(447);
;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/app.js











/**
 * Create a vue app
 *
 * Accepting different app creator and history creator, so it
 * can be reused for both client side and server side
 */
const createVueApp = async ({ appCreator, historyCreator, }) => {
    // options to create vue app
    const appOptions = {
        setup() {
            // auto update head
            (0,injections/* useUpdateHead */.l1)();
            // invoke all clientAppSetups
            for (const clientAppSetup of clientAppSetups) {
                clientAppSetup();
            }
            return () => [
                (0,external_vue_.h)(external_vue_router_.RouterView),
                ...clientAppRootComponents.map((comp) => (0,external_vue_.h)(comp)),
            ];
        },
    };
    // create vue app
    const app = appCreator(appOptions);
    // create vue-router
    const router = (0,external_vue_router_.createRouter)({
        // TODO: it might be an issue of vue-router that have to remove the ending slash
        history: historyCreator((0,esm/* removeEndingSlash */.U1)(injections/* siteData.value.base */.HM.value.base)),
        routes: pagesRoutes,
        scrollBehavior: (to, from, savedPosition) => {
            if (savedPosition) {
                return savedPosition;
            }
            if (to.hash) {
                return { el: to.hash };
            }
            return { top: 0 };
        },
    });
    router.beforeResolve(async (to, from) => {
        var _a;
        if (to.path !== from.path || from === external_vue_router_.START_LOCATION) {
            // ensure page data and page component have been loaded
            ;
            [injections/* pageData.value */.Xp.value] = await Promise.all([
                (0,injections/* resolvePageData */.C4)(to.path),
                (_a = pagesComponent/* pagesComponent */.S[to.path]) === null || _a === void 0 ? void 0 : _a.__asyncLoader(),
            ]);
        }
    });
    // create global computed
    const routeLocale = (0,external_vue_.computed)(() => (0,injections/* resolveRouteLocale */.S)(injections/* siteData.value.locales */.HM.value.locales, router.currentRoute.value.path));
    const siteLocaleData = (0,external_vue_.computed)(() => (0,injections/* resolveSiteLocaleData */.kY)(injections/* siteData.value */.HM.value, routeLocale.value));
    const pageFrontmatter = (0,external_vue_.computed)(() => (0,injections/* resolvePageFrontmatter */.hN)(injections/* pageData.value */.Xp.value));
    const pageHeadTitle = (0,external_vue_.computed)(() => (0,injections/* resolvePageHeadTitle */.lp)(injections/* pageData.value */.Xp.value, siteLocaleData.value));
    const pageHead = (0,external_vue_.computed)(() => (0,injections/* resolvePageHead */.nl)(pageHeadTitle.value, pageFrontmatter.value, siteLocaleData.value));
    const pageLang = (0,external_vue_.computed)(() => (0,injections/* resolvePageLang */.Vo)(injections/* pageData.value */.Xp.value));
    // provide global computed
    app.provide(injections/* routeLocaleSymbol */.C3, routeLocale);
    app.provide(injections/* siteLocaleDataSymbol */.AE, siteLocaleData);
    app.provide(injections/* pageFrontmatterSymbol */.PY, pageFrontmatter);
    app.provide(injections/* pageHeadTitleSymbol */.et, pageHeadTitle);
    app.provide(injections/* pageHeadSymbol */.VV, pageHead);
    app.provide(injections/* pageLangSymbol */.b5, pageLang);
    // provide global data & helpers
    Object.defineProperties(app.config.globalProperties, {
        $routeLocale: {
            get() {
                return routeLocale.value;
            },
        },
        $site: {
            get() {
                return injections/* siteData.value */.HM.value;
            },
        },
        $siteLocale: {
            get() {
                return siteLocaleData.value;
            },
        },
        $page: {
            get() {
                return injections/* pageData.value */.Xp.value;
            },
        },
        $frontmatter: {
            get() {
                return pageFrontmatter.value;
            },
        },
        $lang: {
            get() {
                return pageLang.value;
            },
        },
        $headTitle: {
            get() {
                return pageHeadTitle.value;
            },
        },
        $withBase: {
            get() {
                return utils/* withBase */.pJ;
            },
        },
    });
    // register built-in components
    /* eslint-disable vue/match-component-file-name */
    app.component('ClientOnly',  true ? () => null : 0);
    app.component('Content', components/* Content */.VY);
    app.component('OutboundLink', components/* OutboundLink */.MS);
    /* eslint-enable vue/match-component-file-name */
    // invoke all clientAppEnhances
    for (const clientAppEnhance of clientAppEnhances) {
        await clientAppEnhance({ app, router, siteData: injections/* siteData */.HM });
    }
    // vue-router will start to initialize once it is installed
    // via `app.use()`, but users might make some modifications
    // to router in `clientAppEnhance`, so we install it after
    // that. This can also avoid the `scrollBehavior` issue on
    // initial navigation.
    app.use(router);
    return {
        app,
        router,
    };
};


/***/ }),

/***/ 807:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ Content)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(103);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _internal_pagesComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(955);
/* harmony import */ var _injections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);



/**
 * Markdown rendered content
 */
const Content = (props) => {
    let key;
    // use the page key from props directly
    if (props.pagePath) {
        key = props.pagePath;
    }
    else {
        // get current page key from page data
        const page = (0,_injections__WEBPACK_IMPORTED_MODULE_2__/* .usePageData */ .Vi)();
        key = page.value.path;
    }
    const component = _internal_pagesComponent__WEBPACK_IMPORTED_MODULE_1__/* .pagesComponent */ .S[key];
    // use page component
    if (component) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(component);
    }
    // fallback
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('div',  false
        ? 0
        : '404 Not Found');
};
Content.displayName = 'Content';
Content.props = {
    pagePath: {
        type: String,
        required: false,
    },
};


/***/ }),

/***/ 663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Y": () => (/* binding */ Vuepress)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(103);
// EXTERNAL MODULE: ./node_modules/@vuepress/shared/lib/esm/index.js + 13 modules
var esm = __webpack_require__(736);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/internal/layoutComponents.js


const layoutComponents = {
  "404": (0,external_vue_.defineAsyncComponent)(() => __webpack_require__.e(/* import() | layout-404 */ 663).then(__webpack_require__.bind(__webpack_require__, 495))),
  "Layout": (0,external_vue_.defineAsyncComponent)(() => __webpack_require__.e(/* import() | layout-Layout */ 832).then(__webpack_require__.bind(__webpack_require__, 768))),
}

// EXTERNAL MODULE: ./node_modules/@vuepress/client/lib/injections/index.js + 12 modules
var injections = __webpack_require__(34);
// EXTERNAL MODULE: ./node_modules/@vuepress/client/lib/components/Content.js
var Content = __webpack_require__(807);
;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/components/Vuepress.js





/**
 * Global Layout
 */
const Vuepress = () => {
    // get layout of current page
    let layoutName = '404';
    const page = (0,injections/* usePageData */.Vi)();
    if (page.value.path) {
        // if current page exists
        // use layout from frontmatter
        const frontmatterLayout = page.value.frontmatter.layout;
        if ((0,esm/* isString */.HD)(frontmatterLayout)) {
            layoutName = frontmatterLayout;
        }
        else {
            // fallback to Layout component
            layoutName = 'Layout';
        }
    }
    const layoutComponent = layoutComponents[layoutName];
    // use layout component
    if (layoutComponent) {
        return (0,external_vue_.h)(layoutComponent);
    }
    // fallback to Content
    return (0,external_vue_.h)(Content/* Content */.V);
};
Vuepress.displayName = 'Vuepress';


/***/ }),

/***/ 10:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "VY": () => (/* reexport */ Content/* Content */.V),
  "MS": () => (/* reexport */ OutboundLink_OutboundLink)
});

// UNUSED EXPORTS: Vuepress

// EXTERNAL MODULE: ./node_modules/@vuepress/client/lib/components/Content.js
var Content = __webpack_require__(807);
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(103);
// EXTERNAL MODULE: ./node_modules/@vuepress/client/lib/components/OutboundLink.css
var OutboundLink = __webpack_require__(53);
;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/components/OutboundLink.js


const svg = (0,external_vue_.h)('svg', {
    class: 'icon outbound',
    xmlns: 'http://www.w3.org/2000/svg',
    ariaHidden: 'true',
    focusable: 'false',
    x: '0px',
    y: '0px',
    viewBox: '0 0 100 100',
    width: '15',
    height: '15',
}, [
    (0,external_vue_.h)('path', {
        fill: 'currentColor',
        d: 'M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z',
    }),
    (0,external_vue_.h)('polygon', {
        fill: 'currentColor',
        points: '45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9',
    }),
]);
const OutboundLink_OutboundLink = (_, { slots }) => { var _a; return (0,external_vue_.h)('span', [svg, (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]); };
OutboundLink_OutboundLink.displayName = 'OutboundLink';

// EXTERNAL MODULE: ./node_modules/@vuepress/client/lib/components/Vuepress.js + 1 modules
var Vuepress = __webpack_require__(663);
;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/components/index.js





/***/ }),

/***/ 621:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MS": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__.MS),
/* harmony export */   "C3": () => (/* reexport safe */ _injections__WEBPACK_IMPORTED_MODULE_2__.C3),
/* harmony export */   "Vi": () => (/* reexport safe */ _injections__WEBPACK_IMPORTED_MODULE_2__.Vi),
/* harmony export */   "I2": () => (/* reexport safe */ _injections__WEBPACK_IMPORTED_MODULE_2__.I2),
/* harmony export */   "I": () => (/* reexport safe */ _injections__WEBPACK_IMPORTED_MODULE_2__.I),
/* harmony export */   "WF": () => (/* reexport safe */ _injections__WEBPACK_IMPORTED_MODULE_2__.WF),
/* harmony export */   "I5": () => (/* reexport safe */ _injections__WEBPACK_IMPORTED_MODULE_2__.I5),
/* harmony export */   "vW": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.vW),
/* harmony export */   "F2": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.F2),
/* harmony export */   "pJ": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.pJ)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(788);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _injections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(447);







/***/ }),

/***/ 34:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Xp": () => (/* reexport */ pageData),
  "PY": () => (/* reexport */ pageFrontmatterSymbol),
  "VV": () => (/* reexport */ pageHeadSymbol),
  "et": () => (/* reexport */ pageHeadTitleSymbol),
  "b5": () => (/* reexport */ pageLangSymbol),
  "C4": () => (/* reexport */ resolvePageData),
  "hN": () => (/* reexport */ resolvePageFrontmatter),
  "nl": () => (/* reexport */ resolvePageHead),
  "lp": () => (/* reexport */ resolvePageHeadTitle),
  "Vo": () => (/* reexport */ resolvePageLang),
  "S": () => (/* reexport */ resolveRouteLocale),
  "kY": () => (/* reexport */ resolveSiteLocaleData),
  "C3": () => (/* reexport */ routeLocaleSymbol),
  "HM": () => (/* reexport */ siteData_siteData),
  "AE": () => (/* reexport */ siteLocaleDataSymbol),
  "Vi": () => (/* reexport */ usePageData),
  "I2": () => (/* reexport */ usePageFrontmatter),
  "I": () => (/* reexport */ useRouteLocale),
  "WF": () => (/* reexport */ useSiteData),
  "I5": () => (/* reexport */ useSiteLocaleData),
  "l1": () => (/* reexport */ useUpdateHead)
});

// UNUSED EXPORTS: createHeadTag, pagesData, queryHeadTag, usePageHead, usePageHeadTitle, usePageLang, usePagesData

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(103);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/internal/pagesData.js
const pagesData = {
  "/": () => __webpack_require__.e(/* import() | v-8daa1a0e */ 509).then(__webpack_require__.bind(__webpack_require__, 422)).then(({ data }) => data),
  "/404.html": () => __webpack_require__.e(/* import() | v-3706649a */ 88).then(__webpack_require__.bind(__webpack_require__, 38)).then(({ data }) => data),
}

;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/injections/pagesData.js


const pagesData_pagesData = (0,external_vue_.ref)(pagesData);
const usePagesData = () => {
    return pagesData_pagesData;
};

;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/injections/pageData.js


const pageDataEmpty = (0,external_vue_.readonly)({
    key: '',
    path: '',
    title: '',
    lang: '',
    frontmatter: {},
    excerpt: '',
    headers: [],
});
const pageData = (0,external_vue_.ref)(pageDataEmpty);
const usePageData = () => {
    return pageData;
};
const resolvePageData = async (routePath) => {
    const pageDataResolver = pagesData_pagesData.value[routePath];
    if (!pageDataResolver) {
        return pageDataEmpty;
    }
    const pageData = await pageDataResolver();
    return pageData !== null && pageData !== void 0 ? pageData : pageDataEmpty;
};
if (false) {}

;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/injections/pageFrontmatter.js

const pageFrontmatterSymbol = Symbol( false ? 0 : '');
const usePageFrontmatter = () => {
    const pageFrontmatter = (0,external_vue_.inject)(pageFrontmatterSymbol);
    if (!pageFrontmatter) {
        throw new Error('usePageFrontmatter() is called without provider.');
    }
    return pageFrontmatter;
};
const resolvePageFrontmatter = (pageData) => pageData.frontmatter;

// EXTERNAL MODULE: ./node_modules/@vuepress/shared/lib/esm/index.js + 13 modules
var esm = __webpack_require__(736);
;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/injections/pageHead.js


const pageHeadSymbol = Symbol( false ? 0 : '');
const usePageHead = () => {
    const pageHead = (0,external_vue_.inject)(pageHeadSymbol);
    if (!pageHead) {
        throw new Error('usePageHead() is called without provider.');
    }
    return pageHead;
};
/**
 * Merge the head config in frontmatter and site locale
 *
 * Frontmatter should take priority over site locale
 */
const resolvePageHead = (headTitle, frontmatter, siteLocale) => {
    const description = (0,esm/* isString */.HD)(frontmatter.description)
        ? frontmatter.description
        : siteLocale.description;
    const head = [
        ...((0,esm/* isArray */.kJ)(frontmatter.head) ? frontmatter.head : []),
        ...siteLocale.head,
        ['title', {}, headTitle],
        ['meta', { name: 'description', content: description }],
        ['meta', { charset: 'utf-8' }],
        [
            'meta',
            { name: 'viewport', content: 'width=device-width,initial-scale=1' },
        ],
        ['meta', { name: 'generator', content: `VuePress ${"2.0.0-beta.9"}` }],
    ];
    return (0,esm/* dedupeHead */.H7)(head);
};

;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/injections/pageHeadTitle.js

const pageHeadTitleSymbol = Symbol( false ? 0 : '');
const usePageHeadTitle = () => {
    const pageHeadTitle = inject(pageHeadTitleSymbol);
    if (!pageHeadTitle) {
        throw new Error('usePageHeadTitle() is called without provider.');
    }
    return pageHeadTitle;
};
/**
 * Title to displayed in `<head>` tag
 */
const resolvePageHeadTitle = (page, siteLocale) => `${page.title ? `${page.title} | ` : ``}${siteLocale.title}`;

;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/injections/pageLang.js

const pageLangSymbol = Symbol( false ? 0 : '');
const usePageLang = () => {
    const pageLang = (0,external_vue_.inject)(pageLangSymbol);
    if (!pageLang) {
        throw new Error('usePageLang() is called without provider.');
    }
    return pageLang;
};
/**
 * Resolve language of current page
 *
 * It's mainly used for the `lang` attribute of `<html>` tag,
 * which should not be empty
 */
const resolvePageLang = (pageData) => pageData.lang || 'en';

;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/injections/routeLocale.js


const routeLocaleSymbol = Symbol( false ? 0 : '');
const useRouteLocale = () => {
    const routeLocale = (0,external_vue_.inject)(routeLocaleSymbol);
    if (!routeLocale) {
        throw new Error('useRouteLocale() is called without provider.');
    }
    return routeLocale;
};
/**
 * Resolve locale path of the route path
 */
const resolveRouteLocale = (locales, routePath) => (0,esm/* resolveLocalePath */.gb)(locales, routePath);

;// CONCATENATED MODULE: ./docs/.vuepress/.temp/internal/siteData.js
const siteData = {
  "base": "/",
  "lang": "zh-CN",
  "title": "blog",
  "description": "这是我的第一个 VuePress 站点",
  "head": [],
  "locales": {}
}

;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/injections/siteData.js


const siteData_siteData = (0,external_vue_.ref)(siteData);
const useSiteData = () => siteData_siteData;
if (false) {}

;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/injections/siteLocaleData.js

const siteLocaleDataSymbol = Symbol( false ? 0 : '');
const useSiteLocaleData = () => {
    const siteLocaleData = (0,external_vue_.inject)(siteLocaleDataSymbol);
    if (!siteLocaleData) {
        throw new Error('useSiteLocaleData() is called without provider.');
    }
    return siteLocaleData;
};
/**
 * Merge the locales fields to the root fields
 * according to the route path
 */
const resolveSiteLocaleData = (site, routeLocale) => ({
    ...site,
    ...site.locales[routeLocale],
});

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(615);
;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/injections/updateHead.js





/**
 * Query the matched head tag of head config
 */
const queryHeadTag = ([tagName, attrs, content = '',]) => {
    const attrsSelector = Object.entries(attrs).map(([key, value]) => {
        if ((0,esm/* isString */.HD)(value)) {
            return `[${key}="${value}"]`;
        }
        if (value === true) {
            return `[${key}]`;
        }
        return '';
    });
    const selector = `head > ${tagName}${attrsSelector}`;
    const tags = Array.from(document.querySelectorAll(selector));
    const matchedTag = tags.find((item) => item.innerText === content);
    return matchedTag || null;
};
/**
 * Create head tag from head config
 */
const createHeadTag = ([tagName, attrs, content,]) => {
    if (!(0,esm/* isString */.HD)(tagName)) {
        return null;
    }
    // create element
    const tag = document.createElement(tagName);
    // set attributes
    if ((0,esm/* isPlainObject */.PO)(attrs)) {
        Object.entries(attrs).forEach(([key, value]) => {
            if ((0,esm/* isString */.HD)(value)) {
                tag.setAttribute(key, value);
            }
            else if (value === true) {
                tag.setAttribute(key, '');
            }
        });
    }
    // set content
    if ((0,esm/* isString */.HD)(content)) {
        tag.appendChild(document.createTextNode(content));
    }
    return tag;
};
/**
 * Auto update head
 *
 * This composable function should be used only once in the root app
 */
const useUpdateHead = () => {
    const route = (0,external_vue_router_.useRoute)();
    const head = usePageHead();
    const lang = usePageLang();
    // ssr-only, extract page meta info to ssrContext
    if (true) {
        const ssrContext = (0,external_vue_.useSSRContext)();
        if (ssrContext) {
            ssrContext.head = head.value;
            ssrContext.lang = lang.value;
        }
        return;
    }
    const headTags = (0,external_vue_.ref)([]);
    // load current head tags from DOM
    const loadHead = () => {
        head.value.forEach((item) => {
            const tag = queryHeadTag(item);
            if (tag) {
                headTags.value.push(tag);
            }
        });
    };
    // update html lang attribute and head tags to DOM
    const updateHead = () => {
        document.documentElement.lang = lang.value;
        headTags.value.forEach((item) => {
            if (item.parentNode === document.head) {
                document.head.removeChild(item);
            }
        });
        headTags.value.splice(0, headTags.value.length);
        head.value.forEach((item) => {
            const tag = createHeadTag(item);
            if (tag !== null) {
                document.head.appendChild(tag);
                headTags.value.push(tag);
            }
        });
    };
    (0,external_vue_.onMounted)(() => {
        loadHead();
        updateHead();
        (0,external_vue_.watch)(() => route.path, () => updateHead());
    });
};

;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/injections/index.js












/***/ }),

/***/ 447:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "vW": () => (/* reexport */ defineClientAppEnhance),
  "F2": () => (/* reexport */ defineClientAppSetup),
  "pJ": () => (/* reexport */ withBase)
});

;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/utils/defineClientAppEnhance.js
const defineClientAppEnhance = (clientAppEnhance) => clientAppEnhance;

;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/utils/defineClientAppSetup.js
const defineClientAppSetup = (clientAppSetup) => clientAppSetup;

// EXTERNAL MODULE: ./node_modules/@vuepress/shared/lib/esm/index.js + 13 modules
var esm = __webpack_require__(736);
// EXTERNAL MODULE: ./node_modules/@vuepress/client/lib/injections/index.js + 12 modules
var injections = __webpack_require__(34);
;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/utils/withBase.js


/**
 * Prefix url with site base
 */
const withBase = (url) => {
    if ((0,esm/* isLinkHttp */.ak)(url))
        return url;
    const base = (0,injections/* useSiteData */.WF)().value.base;
    return `${base}${url}`.replace(/\/+/, '/');
};

;// CONCATENATED MODULE: ./node_modules/@vuepress/client/lib/utils/index.js





/***/ }),

/***/ 958:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "g$": () => (/* reexport */ resolveThemeLocaleData),
  "ZS": () => (/* reexport */ themeLocaleDataSymbol),
  "BV": () => (/* reexport */ useThemeData),
  "X6": () => (/* reexport */ useThemeLocaleData)
});

// UNUSED EXPORTS: themeData

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(103);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/internal/themeData.js
const themeData = {
  "navbar": [
    {
      "text": "常用工具配置",
      "children": [
        {
          "text": "代码检查&格式化",
          "children": [
            {
              "text": "prettier使用指南",
              "link": "/prettier使用指南.md"
            }
          ]
        }
      ]
    },
    {
      "text": "Group",
      "children": [
        {
          "text": "SubGroup",
          "children": [
            "/group/sub/foo.md",
            "/group/sub/bar.md"
          ]
        },
        {
          "text": "SubGroup2",
          "children": [
            "/group/sub/foo.md",
            "/group/sub/bar.md"
          ]
        }
      ]
    },
    {
      "text": "Foo",
      "link": "/foo/"
    }
  ],
  "logo": "https://vuejs.org/images/logo.png",
  "repo": "mudssky/mudssky.github.io",
  "repoLabel": "GitHub",
  "editLink": false,
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "tip": "TIP",
  "warning": "WARNING",
  "danger": "WARNING",
  "notFound": [
    "Not Found"
  ],
  "backToHome": "Back to home",
  "openInNewWindow": "open in new window",
  "locales": {
    "/": {
      "selectLanguageName": "English",
      "danger": "WARNING"
    }
  },
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebar": "auto",
  "editLinkText": "Edit this page"
}

;// CONCATENATED MODULE: ./node_modules/@vuepress/plugin-theme-data/lib/client/composables/useThemeData.js


const useThemeData_themeData = (0,external_vue_.ref)(themeData);
const useThemeData = () => useThemeData_themeData;
if (false) {}

;// CONCATENATED MODULE: ./node_modules/@vuepress/plugin-theme-data/lib/client/composables/useThemeLocaleData.js

const themeLocaleDataSymbol = Symbol( false ? 0 : '');
const useThemeLocaleData = () => {
    const themeLocaleData = (0,external_vue_.inject)(themeLocaleDataSymbol);
    if (!themeLocaleData) {
        throw new Error('useThemeLocaleData() is called without provider.');
    }
    return themeLocaleData;
};
/**
 * Merge the locales fields to the root fields
 * according to the route path
 */
const resolveThemeLocaleData = (theme, routeLocale) => {
    var _a;
    return ({
        ...theme,
        ...(_a = theme.locales) === null || _a === void 0 ? void 0 : _a[routeLocale],
    });
};

;// CONCATENATED MODULE: ./node_modules/@vuepress/plugin-theme-data/lib/client/composables/index.js




/***/ }),

/***/ 736:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "H7": () => (/* reexport */ dedupeHead),
  "kJ": () => (/* reexport */ shared_namespaceObject.isArray),
  "mf": () => (/* reexport */ shared_namespaceObject.isFunction),
  "ak": () => (/* reexport */ isLinkHttp),
  "B2": () => (/* reexport */ isLinkMailto),
  "R5": () => (/* reexport */ isLinkTel),
  "PO": () => (/* reexport */ isPlainObject),
  "HD": () => (/* reexport */ shared_namespaceObject.isString),
  "U1": () => (/* reexport */ removeEndingSlash),
  "FY": () => (/* reexport */ removeLeadingSlash),
  "gb": () => (/* reexport */ resolveLocalePath)
});

// UNUSED EXPORTS: ensureEndingSlash, ensureLeadingSlash, formatDateString, htmlEscape, htmlUnescape, isLinkExternal, isPromise, normalizePackageName, resolveHeadIdentifier, resolveRoutePathFromUrl

;// CONCATENATED MODULE: external "@vue/shared"
const shared_namespaceObject = require("@vue/shared");;
;// CONCATENATED MODULE: ./node_modules/@vuepress/shared/lib/esm/utils/resolveHeadIdentifier.js
/**
 * Resolve identifier of a tag, to avoid duplicated tags in `<head>`
 */
const resolveHeadIdentifier = ([tag, attrs, content,]) => {
    // avoid duplicated `<meta>` with same `name`
    if (tag === 'meta' && attrs.name) {
        return `${tag}.${attrs.name}`;
    }
    // there should be only one `<title>` or `<base>`
    if (['title', 'base'].includes(tag)) {
        return tag;
    }
    // avoid duplicated `<template>` with same `id`
    if (tag === 'template' && attrs.id) {
        return `${tag}.${attrs.id}`;
    }
    return JSON.stringify([tag, attrs, content]);
};

;// CONCATENATED MODULE: ./node_modules/@vuepress/shared/lib/esm/utils/dedupeHead.js

/**
 * Dedupe head config with identifier
 *
 * Items that appear earlier have higher priority
 */
const dedupeHead = (head) => {
    const identifierSet = new Set();
    const result = [];
    head.forEach((item) => {
        const identifier = resolveHeadIdentifier(item);
        if (!identifierSet.has(identifier)) {
            identifierSet.add(identifier);
            result.push(item);
        }
    });
    return result;
};

;// CONCATENATED MODULE: ./node_modules/@vuepress/shared/lib/esm/utils/htmlEscape.js
const htmlEscapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;',
};
const htmlEscapeRegexp = /[&<>'"]/g;
/**
 * Escape html chars
 */
const htmlEscape = (str) => str.replace(htmlEscapeRegexp, (char) => htmlEscapeMap[char]);

;// CONCATENATED MODULE: ./node_modules/@vuepress/shared/lib/esm/utils/htmlUnescape.js
const htmlUnescapeMap = {
    '&amp;': '&',
    '&#38;': '&',
    '&lt;': '<',
    '&#60;': '<',
    '&gt;': '>',
    '&#62;': '>',
    '&apos;': "'",
    '&#39;': "'",
    '&quot;': '"',
    '&#34;': '"',
};
const htmlUnescapeRegexp = /&(amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g;
/**
 * Unescape html chars
 */
const htmlUnescape = (str) => str.replace(htmlUnescapeRegexp, (char) => htmlUnescapeMap[char]);

;// CONCATENATED MODULE: ./node_modules/@vuepress/shared/lib/esm/utils/isLinkHttp.js
/**
 * Determine a link is http link or not
 *
 * - http://github.com
 * - https://github.com
 * - //github.com
 */
const isLinkHttp = (link) => /^(https?:)?\/\//.test(link);

;// CONCATENATED MODULE: ./node_modules/@vuepress/shared/lib/esm/utils/isLinkMailto.js
/**
 * Determine a link is a mailto: address or not
 */
const isLinkMailto = (link) => /^mailto:/.test(link);

;// CONCATENATED MODULE: ./node_modules/@vuepress/shared/lib/esm/utils/isLinkTel.js
/**
 * Determine a link is a tel: address or not
 */
const isLinkTel = (link) => /^tel:/.test(link);

;// CONCATENATED MODULE: ./node_modules/@vuepress/shared/lib/esm/utils/isPlainObject.js
/**
 * Check if a value is plain object, with generic type support
 */
const isPlainObject = (val) => Object.prototype.toString.call(val) === '[object Object]';

;// CONCATENATED MODULE: ./node_modules/@vuepress/shared/lib/esm/utils/removeEndingSlash.js
/**
 * Remove ending slash / from a string
 */
const removeEndingSlash = (str) => str.replace(/\/$/, '');

;// CONCATENATED MODULE: ./node_modules/@vuepress/shared/lib/esm/utils/removeLeadingSlash.js
/**
 * Remove leading slash / from a string
 */
const removeLeadingSlash = (str) => str.replace(/^\//, '');

;// CONCATENATED MODULE: ./node_modules/@vuepress/shared/lib/esm/utils/resolveLocalePath.js
/**
 * Resolve the matched locale path of route path
 */
const resolveLocalePath = (locales, routePath) => {
    const localePaths = Object.keys(locales).sort((a, b) => {
        const levelDelta = b.split('/').length - a.split('/').length;
        if (levelDelta !== 0) {
            return levelDelta;
        }
        return b.length - a.length;
    });
    for (const localePath of localePaths) {
        if (routePath.startsWith(localePath)) {
            return localePath;
        }
    }
    return '/';
};

;// CONCATENATED MODULE: ./node_modules/@vuepress/shared/lib/esm/utils/index.js



















;// CONCATENATED MODULE: ./node_modules/@vuepress/shared/lib/esm/index.js




/***/ }),

/***/ 319:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "T4": () => (/* reexport */ resolveSidebarItems),
  "Vc": () => (/* reexport */ sidebarItemsSymbol),
  "sC": () => (/* reexport */ useNavLink),
  "P$": () => (/* reexport */ useScrollPromise),
  "VU": () => (/* reexport */ useSidebarItems),
  "X6": () => (/* reexport */ useThemeLocaleData)
});

// UNUSED EXPORTS: headerToSidebarItem, resolveArraySidebarItems, resolveAutoSidebarItems, resolveMultiSidebarItems, useResolveRouteWithRedirect, useThemeData

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(615);
// EXTERNAL MODULE: ./node_modules/@vuepress/shared/lib/esm/index.js + 13 modules
var esm = __webpack_require__(736);
;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/composables/useResolveRouteWithRedirect.js


/**
 * Resolve a route with redirection
 */
const useResolveRouteWithRedirect = (...args) => {
    const router = (0,external_vue_router_.useRouter)();
    const route = router.resolve(...args);
    const lastMatched = route.matched[route.matched.length - 1];
    if (!(lastMatched === null || lastMatched === void 0 ? void 0 : lastMatched.redirect)) {
        return route;
    }
    const { redirect } = lastMatched;
    const resolvedRedirect = (0,esm/* isFunction */.mf)(redirect) ? redirect(route) : redirect;
    const resolvedRedirectObj = (0,esm/* isString */.HD)(resolvedRedirect)
        ? { path: resolvedRedirect }
        : resolvedRedirect;
    return useResolveRouteWithRedirect({
        hash: route.hash,
        query: route.query,
        params: route.params,
        ...resolvedRedirectObj,
    });
};

;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/composables/useNavLink.js

/**
 * Resolve NavLink props from string
 *
 * @example
 * - Input: '/README.md'
 * - Output: { text: 'Home', link: '/' }
 */
const useNavLink = (item) => {
    const resolved = useResolveRouteWithRedirect(item);
    return {
        text: resolved.meta.title || item,
        link: resolved.name === '404' ? item : resolved.fullPath,
    };
};

;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/composables/useScrollPromise.js
let promise = null;
let promiseResolve = null;
const scrollPromise = {
    wait: () => promise,
    pending: () => {
        promise = new Promise((resolve) => (promiseResolve = resolve));
    },
    resolve: () => {
        promiseResolve === null || promiseResolve === void 0 ? void 0 : promiseResolve();
        promise = null;
        promiseResolve = null;
    },
};
const useScrollPromise = () => scrollPromise;

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(103);
// EXTERNAL MODULE: ./node_modules/@vuepress/client/lib/index.js
var lib = __webpack_require__(621);
;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/composables/useSidebarItems.js





const sidebarItemsSymbol = Symbol('sidebarItems');
/**
 * Inject sidebar items global computed
 */
const useSidebarItems = () => {
    const sidebarItems = (0,external_vue_.inject)(sidebarItemsSymbol);
    if (!sidebarItems) {
        throw new Error('useSidebarItems() is called without provider.');
    }
    return sidebarItems;
};
/**
 * Resolve sidebar items global computed
 *
 * It should only be resolved and provided once
 */
const resolveSidebarItems = (frontmatter, themeLocale) => {
    var _a, _b;
    // get sidebar config from frontmatter > themeConfig
    const sidebarConfig = (_b = (_a = frontmatter.sidebar) !== null && _a !== void 0 ? _a : themeLocale.sidebar) !== null && _b !== void 0 ? _b : 'auto';
    // resolve sidebar items according to the config
    if (frontmatter.home === true || sidebarConfig === false) {
        return [];
    }
    if (sidebarConfig === 'auto') {
        return resolveAutoSidebarItems();
    }
    if ((0,esm/* isArray */.kJ)(sidebarConfig)) {
        return resolveArraySidebarItems(sidebarConfig);
    }
    if ((0,esm/* isPlainObject */.PO)(sidebarConfig)) {
        return resolveMultiSidebarItems(sidebarConfig);
    }
    return [];
};
/**
 * Util to transform page header to sidebar item
 */
const headerToSidebarItem = (header) => ({
    text: header.title,
    link: `#${header.slug}`,
    children: header.children.map(headerToSidebarItem),
});
/**
 * Resolve sidebar items if the config is `auto`
 */
const resolveAutoSidebarItems = () => {
    const page = (0,lib/* usePageData */.Vi)();
    return [
        {
            isGroup: true,
            text: page.value.title,
            children: page.value.headers.map(headerToSidebarItem),
        },
    ];
};
/**
 * Resolve sidebar items if the config is an array
 */
const resolveArraySidebarItems = (sidebarConfig) => {
    const route = (0,external_vue_router_.useRoute)();
    const page = (0,lib/* usePageData */.Vi)();
    const handleChildItem = (item) => {
        let childItem;
        if ((0,esm/* isString */.HD)(item)) {
            childItem = useNavLink(item);
        }
        else {
            childItem = item;
        }
        if (childItem.isGroup && childItem.children) {
            return {
                ...childItem,
                children: childItem.children.map(handleChildItem),
            };
        }
        // if the sidebar item is current page and children is not set
        // use headers of current page as children
        if (childItem.link === route.path && childItem.children === undefined) {
            return {
                ...childItem,
                children: page.value.headers.map(headerToSidebarItem),
            };
        }
        return childItem;
    };
    return sidebarConfig.map((item) => {
        if ((0,esm/* isString */.HD)(item)) {
            return useNavLink(item);
        }
        if (!item.isGroup) {
            return item;
        }
        return {
            ...item,
            children: item.children.map(handleChildItem),
        };
    });
};
/**
 * Resolve sidebar items if the config is a key -> value (path-prefix -> array) object
 */
const resolveMultiSidebarItems = (sidebarConfig) => {
    var _a;
    const route = (0,external_vue_router_.useRoute)();
    const sidebarPath = (0,esm/* resolveLocalePath */.gb)(sidebarConfig, route.path);
    const matchedSidebarConfig = (_a = sidebarConfig[sidebarPath]) !== null && _a !== void 0 ? _a : [];
    return resolveArraySidebarItems(matchedSidebarConfig);
};

// EXTERNAL MODULE: ./node_modules/@vuepress/plugin-theme-data/lib/client/composables/index.js + 3 modules
var composables = __webpack_require__(958);
;// CONCATENATED MODULE: ./node_modules/@vuepress/plugin-theme-data/lib/client/index.js


;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/composables/useThemeData.js

const useThemeData = () => _useThemeData();
const useThemeLocaleData = () => (0,composables/* useThemeLocaleData */.X6)();

;// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/lib/client/composables/index.js







/***/ }),

/***/ 53:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".icon.outbound{position:relative;display:inline-block;color:#aaa;vertical-align:middle;top:-1px}", "",{"version":3,"sources":["webpack://./node_modules/@vuepress/client/lib/components/OutboundLink.css"],"names":[],"mappings":"AAAA,eACE,iBAAkB,CAClB,oBAAqB,CACrB,UAAW,CACX,qBAAsB,CACtB,QACF","sourcesContent":[".icon.outbound {\n  position: relative;\n  display: inline-block;\n  color: #aaa;\n  vertical-align: middle;\n  top: -1px;\n}\n"],"sourceRoot":""}]);
// Exports
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (___CSS_LOADER_EXPORT___)));


/***/ }),

/***/ 837:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{--medium-zoom-z-index:100}.medium-zoom-overlay{z-index:var(--medium-zoom-z-index)}.medium-zoom-overlay~img{z-index:calc(var(--medium-zoom-z-index) + 1)}", "",{"version":3,"sources":["webpack://./node_modules/@vuepress/plugin-medium-zoom/lib/client/styles/medium-zoom.css"],"names":[],"mappings":"AAAA,MACE,yBACF,CAEA,qBACE,kCACF,CAEA,yBACE,4CACF","sourcesContent":[":root {\n  --medium-zoom-z-index: 100;\n}\n\n.medium-zoom-overlay {\n  z-index: var(--medium-zoom-z-index);\n}\n\n.medium-zoom-overlay ~ img {\n  z-index: calc(var(--medium-zoom-z-index) + 1);\n}\n"],"sourceRoot":""}]);
// Exports
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (___CSS_LOADER_EXPORT___)));


/***/ }),

/***/ 359:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{--nprogress-color:#29d}#nprogress{pointer-events:none}#nprogress .bar{background:var(--nprogress-color);position:fixed;z-index:1031;top:0;left:0;width:100%;height:2px}#nprogress .peg{display:block;position:absolute;right:0;width:100px;height:100%;box-shadow:0 0 10px var(--nprogress-color),0 0 5px var(--nprogress-color);opacity:1;transform:rotate(3deg) translate(0,-4px)}", "",{"version":3,"sources":["webpack://./node_modules/@vuepress/plugin-nprogress/lib/client/styles/nprogress.css"],"names":[],"mappings":"AAAA,MACE,sBACF,CAEA,WACE,mBACF,CAEA,gBACE,iCAAkC,CAClC,cAAe,CACf,YAAa,CACb,KAAM,CACN,MAAO,CACP,UAAW,CACX,UACF,CAEA,gBACE,aAAc,CACd,iBAAkB,CAClB,OAAU,CACV,WAAY,CACZ,WAAY,CACZ,yEAA2E,CAC3E,SAAU,CACV,wCACF","sourcesContent":[":root {\n  --nprogress-color: #29d;\n}\n\n#nprogress {\n  pointer-events: none;\n}\n\n#nprogress .bar {\n  background: var(--nprogress-color);\n  position: fixed;\n  z-index: 1031;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 2px;\n}\n\n#nprogress .peg {\n  display: block;\n  position: absolute;\n  right: 0px;\n  width: 100px;\n  height: 100%;\n  box-shadow: 0 0 10px var(--nprogress-color), 0 0 5px var(--nprogress-color);\n  opacity: 1;\n  transform: rotate(3deg) translate(0px, -4px);\n}\n"],"sourceRoot":""}]);
// Exports
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (___CSS_LOADER_EXPORT___)));


/***/ }),

/***/ 709:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{--back-to-top-color:#3eaf7c;--back-to-top-color-hover:#71cda3}.back-to-top{cursor:pointer;position:fixed;bottom:2rem;right:2.5rem;width:2rem;color:var(--back-to-top-color);z-index:1}.back-to-top:hover{color:var(--back-to-top-color-hover)}@media (max-width:959px){.back-to-top{display:none}}.back-to-top-enter-active,.back-to-top-leave-active{transition:opacity .3s}.back-to-top-enter-from,.back-to-top-leave-to{opacity:0}", "",{"version":3,"sources":["webpack://./node_modules/@vuepress/plugin-back-to-top/lib/client/BackToTop.vue"],"names":[],"mappings":"AACA,MACE,2BAA4B,CAC5B,iCACF,CAEA,aACE,cAAe,CACf,cAAe,CACf,WAAY,CACZ,YAAa,CACb,UAAW,CACX,8BAA+B,CAC/B,SACF,CAEA,mBACE,oCACF,CAEA,yBACE,aACE,YACF,CACF,CAEA,oDAEE,sBACF,CAEA,8CAEE,SACF","sourcesContent":["\n:root {\n  --back-to-top-color: #3eaf7c;\n  --back-to-top-color-hover: #71cda3;\n}\n\n.back-to-top {\n  cursor: pointer;\n  position: fixed;\n  bottom: 2rem;\n  right: 2.5rem;\n  width: 2rem;\n  color: var(--back-to-top-color);\n  z-index: 1;\n}\n\n.back-to-top:hover {\n  color: var(--back-to-top-color-hover);\n}\n\n@media (max-width: 959px) {\n  .back-to-top {\n    display: none;\n  }\n}\n\n.back-to-top-enter-active,\n.back-to-top-leave-active {\n  transition: opacity 0.3s;\n}\n\n.back-to-top-enter-from,\n.back-to-top-leave-to {\n  opacity: 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (___CSS_LOADER_EXPORT___)));


/***/ }),

/***/ 500:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body,html{padding:0;margin:0;background-color:#fff}body{font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Fira Sans\",\"Droid Sans\",\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-size:16px;color:#2c3e50}a,p a code{font-weight:500;color:#3eaf7c}p a code{font-weight:400}kbd{background:#eee;border:solid .15rem #ddd;border-bottom:solid .25rem #ddd;border-radius:.15rem;padding:0 .15em}blockquote{color:#999;border-left:.2rem solid #dfe2e5;margin:1rem 0;padding:.25rem 0 .25rem 1rem}blockquote>p{margin:0}ol,ul{padding-left:1.2em}strong{font-weight:600}h1,h2,h3,h4,h5,h6{font-weight:600;line-height:1.25}h1:hover .header-anchor,h2:hover .header-anchor,h3:hover .header-anchor,h4:hover .header-anchor,h5:hover .header-anchor,h6:hover .header-anchor{opacity:1}h1{font-size:2.2rem}h2{font-size:1.65rem;padding-bottom:.3rem;border-bottom:1px solid #eaecef}h3{font-size:1.35rem}h4{font-size:1.15rem}h5{font-size:1.05rem}blockquote,h6{font-size:1rem}a.header-anchor{font-size:.85em;float:left;margin-left:-.87em;padding-right:.23em;margin-top:.125em;opacity:0}a,a.header-anchor:hover{text-decoration:none}code,kbd{font-family:source-code-pro,Menlo,Monaco,Consolas,\"Courier New\",monospace}ol,p,ul{line-height:1.7}hr{border:0;border-top:1px solid #eaecef}table{border-collapse:collapse;margin:1rem 0;display:block;overflow-x:auto}tr{border-top:1px solid #dfe2e5}tr:nth-child(2n){background-color:#f6f8fa}td,th{border:1px solid #dfe2e5;padding:.6em 1em}.arrow,.badge{display:inline-block}.arrow{width:0;height:0}.arrow.down,.arrow.up{border-left:4px solid transparent;border-right:4px solid transparent}.arrow.up{border-bottom:6px solid #ccc}.arrow.down{border-top:6px solid #ccc}.arrow.left,.arrow.right{border-top:4px solid transparent;border-bottom:4px solid transparent}.arrow.right{border-left:6px solid #ccc}.arrow.left{border-right:6px solid #ccc}.badge{font-size:14px;height:18px;line-height:18px;border-radius:3px;padding:0 6px;color:#fff;vertical-align:top}.badge,.badge.tip{background-color:#42b983}.badge.warning{background-color:#e7c000}.badge.danger{background-color:#c00}.badge+.badge{margin-left:5px}code[class*=language-],pre[class*=language-]{color:#ccc;background:0 0;font-family:Consolas,Monaco,\"Andale Mono\",\"Ubuntu Mono\",monospace;font-size:1em;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-ms-hyphens:none;hyphens:none}pre[class*=language-]{padding:1em;margin:.5em 0;overflow:auto}:not(pre)>code[class*=language-],pre[class*=language-]{background:#2d2d2d}:not(pre)>code[class*=language-]{padding:.1em;border-radius:.3em;white-space:normal}.token.block-comment,.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#999}.token.punctuation{color:#ccc}.token.attr-name,.token.deleted,.token.namespace,.token.tag{color:#ec5975}.token.function-name{color:#6196cc}.token.boolean,.token.function,.token.number{color:#f08d49}.token.class-name,.token.constant,.token.property,.token.symbol{color:#f8c555}.token.atrule,.token.builtin,.token.important,.token.keyword,.token.selector{color:#cc99cd}.token.attr-value,.token.char,.token.regex,.token.string,.token.variable{color:#7ec699}.token.entity,.token.operator,.token.url{color:#67cdcc}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}.dropdown-wrapper .mobile-dropdown-title font-size inherit:hover,.token.inserted{color:#3eaf7c}.theme-default-content code{color:#476582;padding:.25rem .5rem;margin:0;font-size:.85em;background-color:rgba(27,31,35,.05);border-radius:3px}.theme-default-content pre,.theme-default-content pre[class*=language-]{line-height:1.4;padding:1.25rem 1.5rem;margin:.85rem 0;border-radius:6px;overflow:auto}.theme-default-content pre code,.theme-default-content pre[class*=language-] code{color:#fff;padding:0;background-color:transparent;border-radius:0;-webkit-font-smoothing:auto;-moz-osx-font-smoothing:auto}.theme-default-content .line-number{font-family:source-code-pro,Menlo,Monaco,Consolas,\"Courier New\",monospace}div[class*=language-]{position:relative;background-color:#282c34;border-radius:6px}div[class*=language-]::before{position:absolute;z-index:3;top:.8em;right:1em;font-size:.75rem;color:rgba(255,255,255,.3)}div[class*=language-] pre,div[class*=language-] pre[class*=language-]{background:0 0!important;position:relative;z-index:1}div[class*=language-] .highlight-lines{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding-top:1.3rem;position:absolute;top:0;left:0;width:100%;line-height:1.4}div[class*=language-] .highlight-lines .highlight-line{background-color:rgba(0,0,0,.66)}div[class*=language-]:not(.line-numbers-mode) .line-numbers{display:none}div[class*=language-].line-numbers-mode .highlight-lines .highlight-line{position:relative}div[class*=language-].line-numbers-mode .highlight-lines .highlight-line::before{content:\" \";position:absolute;z-index:2;left:0;top:0;display:block;width:3.5rem;height:100%}div[class*=language-].line-numbers-mode pre{margin-left:3.5rem;padding-left:1rem;vertical-align:middle}div[class*=language-].line-numbers-mode .line-numbers{position:absolute;top:0;width:3.5rem;text-align:center;color:rgba(255,255,255,.3);padding-top:1.25rem;line-height:1.4}div[class*=language-].line-numbers-mode .line-numbers .line-number,div[class*=language-].line-numbers-mode .line-numbers br{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}div[class*=language-].line-numbers-mode .line-numbers .line-number{position:relative;z-index:3;font-size:.85em}div[class*=language-].line-numbers-mode::after{content:\"\";position:absolute;top:0;left:0;width:3.5rem;height:100%;border-radius:6px 0 0 6px;border-right:1px solid rgba(0,0,0,.66)}div[class*=language-].ext-c:before{content:\"c\"}div[class*=language-].ext-cpp:before{content:\"cpp\"}div[class*=language-].ext-cs:before{content:\"cs\"}div[class*=language-].ext-css:before{content:\"css\"}div[class*=language-].ext-dart:before{content:\"dart\"}div[class*=language-].ext-docker:before{content:\"docker\"}div[class*=language-].ext-fs:before{content:\"fs\"}div[class*=language-].ext-go:before{content:\"go\"}div[class*=language-].ext-html:before{content:\"html\"}div[class*=language-].ext-java:before{content:\"java\"}div[class*=language-].ext-js:before{content:\"js\"}div[class*=language-].ext-json:before{content:\"json\"}div[class*=language-].ext-kt:before{content:\"kt\"}div[class*=language-].ext-less:before{content:\"less\"}div[class*=language-].ext-makefile:before{content:\"makefile\"}div[class*=language-].ext-md:before{content:\"md\"}div[class*=language-].ext-php:before{content:\"php\"}div[class*=language-].ext-py:before{content:\"py\"}div[class*=language-].ext-rb:before{content:\"rb\"}div[class*=language-].ext-rs:before{content:\"rs\"}div[class*=language-].ext-sass:before{content:\"sass\"}div[class*=language-].ext-scss:before{content:\"scss\"}div[class*=language-].ext-sh:before{content:\"sh\"}div[class*=language-].ext-styl:before{content:\"styl\"}div[class*=language-].ext-ts:before{content:\"ts\"}div[class*=language-].ext-toml:before{content:\"toml\"}div[class*=language-].ext-vue:before{content:\"vue\"}div[class*=language-].ext-yml:before{content:\"yml\"}@media (max-width:419px){.theme-default-content div[class*=language-]{margin:.85rem -1.5rem;border-radius:0}}.code-group__nav{margin-top:.85rem;margin-bottom:calc(-1.7rem - 6px);padding-bottom:calc(1.7rem - 6px);padding-left:10px;padding-top:10px;border-top-left-radius:6px;border-top-right-radius:6px;background-color:#282c34}.code-group__ul{margin:auto 0;padding-left:0;display:inline-flex;list-style:none}.code-group__nav-tab{border:0;padding:5px;cursor:pointer;background-color:transparent;font-size:.85em;line-height:1.4;color:rgba(255,255,255,.9);font-weight:600}.code-group__nav-tab:focus{outline:0}.code-group__nav-tab-active{border-bottom:#3eaf7c 1px solid}@media (max-width:419px){.code-group__nav{margin-left:-1.5rem;margin-right:-1.5rem;border-radius:0}}.code-group-item,.dropdown-wrapper .nav-dropdown .dropdown-item .dropdown-subtitle>a.router-link-active::after{display:none}.code-group-item__active{display:block}.code-group-item>pre{background-color:orange}.custom-container .custom-container-title{font-weight:600;margin-bottom:-.4rem}.custom-container.danger,.custom-container.tip,.custom-container.warning{padding:.1rem 1.5rem;border-left-width:.5rem;border-left-style:solid;margin:1rem 0}.custom-container.tip{background-color:#f3f5f7;border-color:#42b983}.custom-container.warning{background-color:#fffae3;border-color:#e7c000;color:#746000}.custom-container.warning .custom-container-title{color:#ad9000}.custom-container.danger a,.custom-container.warning a{color:#2c3e50}.custom-container.danger{background-color:#ffe0e0;border-color:#c00;color:#600}.custom-container.danger .custom-container-title{color:#900}.custom-container.details{display:block;position:relative;border-radius:2px;margin:1.6em 0;padding:1.6em;background-color:#eee}.custom-container.details h4{margin-top:0}.custom-container.details figure:last-child,.custom-container.details p:last-child{margin-bottom:0;padding-bottom:0}.custom-container.details summary{outline:0;cursor:pointer}.dropdown-wrapper{cursor:pointer}.dropdown-wrapper .dropdown-title,.dropdown-wrapper .mobile-dropdown-title{display:block;font-size:.9rem;font-family:inherit;cursor:inherit;padding:inherit;line-height:1.4rem;background:0 0;border:0;font-weight:500;color:#2c3e50}.dropdown-wrapper .mobile-dropdown-title{display:none;font-weight:600}.dropdown-wrapper .dropdown-title:hover,.dropdown-wrapper .mobile-dropdown-title:hover{border-color:transparent}.dropdown-wrapper .dropdown-title .arrow,.dropdown-wrapper .mobile-dropdown-title .arrow{vertical-align:middle;margin-top:-1px;margin-left:.4rem}.dropdown-wrapper .nav-dropdown .dropdown-item{color:inherit;line-height:1.7rem}.dropdown-wrapper .nav-dropdown .dropdown-item .dropdown-subtitle{margin:.45rem 0 0;border-top:1px solid #eee;padding:1rem 0 .45rem;font-size:.9rem}.dropdown-wrapper .nav-dropdown .dropdown-item .dropdown-subtitle>span{padding:0 1.5rem 0 1.25rem}.dropdown-wrapper .nav-dropdown .dropdown-item .dropdown-subtitle>a{font-weight:inherit}.dropdown-wrapper .nav-dropdown .dropdown-item .dropdown-subitem-wrapper{padding:0;list-style:none}.dropdown-wrapper .nav-dropdown .dropdown-item .dropdown-subitem-wrapper .dropdown-subitem{font-size:.9em}.dropdown-wrapper .nav-dropdown .dropdown-item a{display:block;line-height:1.7rem;position:relative;border-bottom:none;font-weight:400;margin-bottom:0;padding:0 1.5rem 0 1.25rem}.dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active,.dropdown-wrapper .nav-dropdown .dropdown-item a:hover,.navbar-links a.router-link-active,.navbar-links a:hover{color:#3eaf7c}.dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active::after{content:\"\";width:0;height:0;border-left:5px solid #3eaf7c;border-top:3px solid transparent;border-bottom:3px solid transparent;position:absolute;top:calc(50% - 2px);left:9px}.dropdown-wrapper .nav-dropdown .dropdown-item:first-child .dropdown-subtitle{margin-top:0;padding-top:0;border-top:0}@media (max-width:719px){.dropdown-wrapper.open .dropdown-title,.dropdown-wrapper.open .mobile-dropdown-title{margin-bottom:.5rem}.dropdown-wrapper .dropdown-title{display:none}.dropdown-wrapper .mobile-dropdown-title{display:block}.dropdown-wrapper .nav-dropdown{transition:height .1s ease-out;overflow:hidden}.dropdown-wrapper .nav-dropdown .dropdown-item .dropdown-subtitle{border-top:0;margin-top:0;padding-top:0;padding-bottom:0;font-size:15px;line-height:2rem}.dropdown-wrapper .nav-dropdown .dropdown-item>a{font-size:15px;line-height:2rem}.dropdown-wrapper .nav-dropdown .dropdown-item .dropdown-subitem{font-size:14px;padding-left:1rem}}@media (min-width:719px){.dropdown-wrapper{height:1.8rem}.dropdown-wrapper.open .nav-dropdown,.dropdown-wrapper:hover .nav-dropdown{display:block!important}.dropdown-wrapper.open:blur{display:none}.dropdown-wrapper .nav-dropdown{display:none;height:auto!important;box-sizing:border-box;max-height:calc(100vh - 2.7rem);overflow-y:auto;position:absolute;top:100%;right:0;background-color:#fff;padding:.6rem 0;border:1px solid #ddd;border-bottom-color:#ccc;text-align:left;border-radius:.25rem;white-space:nowrap;margin:0}}.dropdown-enter-from,.dropdown-leave-to{height:0!important}.home{padding:3.6rem 2rem 0;max-width:960px;margin:0 auto;display:block}.home .hero{text-align:center}.home .hero img{max-width:100%;max-height:280px;display:block;margin:3rem auto 1.5rem}.home .hero h1{font-size:3rem}.home .hero .actions,.home .hero .description,.home .hero h1{margin:1.8rem auto}.home .hero .description{max-width:35rem;font-size:1.6rem;line-height:1.3;color:#6a8bad}.home .hero .action-button{display:inline-block;font-size:1.2rem;padding:.8rem 1.6rem;border-width:2px;border-style:solid;border-radius:4px;transition:background-color .1s ease;box-sizing:border-box}.home .hero .action-button:not(:first-child){margin-left:1.5rem}.home .hero .action-button.primary{color:#fff;background-color:#3eaf7c;border-color:#3eaf7c}.home .hero .action-button.primary:hover{background-color:#4abf8a}.home .hero .action-button.secondary{color:#3eaf7c;background-color:#fff;border-color:#3eaf7c}.home .hero .action-button.secondary:hover{color:#fff;background-color:#4abf8a}.home .features{border-top:1px solid #eaecef;padding:1.2rem 0;margin-top:2.5rem;display:flex;flex-wrap:wrap;align-items:flex-start;align-content:stretch;justify-content:space-between}.home .feature{flex-grow:1;flex-basis:30%;max-width:30%}.home .feature h2{font-size:1.4rem;font-weight:500;border-bottom:none;padding-bottom:0;color:#3a5169}.home .feature p{color:#4e6e8e}.home .footer{padding:2.5rem;border-top:1px solid #eaecef;text-align:center;color:#4e6e8e}@media (max-width:719px){.home .features{flex-direction:column}.home .feature{max-width:100%;padding:0 2.5rem}}@media (max-width:419px){.home{padding-left:1.5rem;padding-right:1.5rem}.home .hero img{max-height:210px;margin:2rem auto 1.2rem}.home .hero h1{font-size:2rem}.home .hero .actions,.home .hero .description,.home .hero h1{margin:1.2rem auto}.home .hero .description{font-size:1.2rem}.home .hero .action-button{font-size:1rem;padding:.6rem 1.2rem}.home .feature h2{font-size:1.25rem}}.theme-default-content:not(.custom){max-width:740px;margin:0 auto;padding:2rem 2.5rem}@media (max-width:959px){.theme-default-content:not(.custom){padding:2rem}}@media (max-width:419px){.theme-default-content:not(.custom){padding:1.5rem}}.page{padding-left:20rem}.navbar,.sidebar{background-color:#fff;position:fixed;left:0;box-sizing:border-box}.navbar{z-index:20;top:0;right:0;height:3.6rem;border-bottom:1px solid #eaecef}.sidebar{font-size:16px;width:20rem;z-index:10;margin:0;top:3.6rem;bottom:0;border-right:1px solid #eaecef;overflow-y:auto;scrollbar-width:thin;scrollbar-color:#3eaf7c #eaecef}.sidebar::-webkit-scrollbar{width:7px}.sidebar::-webkit-scrollbar-track{background-color:#eaecef}.sidebar::-webkit-scrollbar-thumb{background-color:#3eaf7c}.sidebar-mask{position:fixed;z-index:9;top:0;left:0;width:100vw;height:100vh;display:none}.theme-container.sidebar-open .sidebar-mask{display:block}.theme-container.no-navbar .theme-default-content:not(.custom)>h1,.theme-container.no-navbar h2,.theme-container.no-navbar h3,.theme-container.no-navbar h4,.theme-container.no-navbar h5,.theme-container.no-navbar h6{margin-top:1.5rem;padding-top:0}.theme-container.no-navbar .sidebar{top:0}@media (min-width:720px){.theme-container.no-sidebar .sidebar{display:none}.theme-container.no-sidebar .page{padding-left:0}}.theme-default-content:not(.custom)>h1,.theme-default-content:not(.custom)>h2,.theme-default-content:not(.custom)>h3,.theme-default-content:not(.custom)>h4,.theme-default-content:not(.custom)>h5,.theme-default-content:not(.custom)>h6{margin-top:-3.1rem;padding-top:4.6rem;margin-bottom:0}.theme-default-content:not(.custom)>h1:first-child,.theme-default-content:not(.custom)>h2:first-child,.theme-default-content:not(.custom)>h3:first-child,.theme-default-content:not(.custom)>h4:first-child,.theme-default-content:not(.custom)>h5:first-child,.theme-default-content:not(.custom)>h6:first-child{margin-top:-1.5rem;margin-bottom:1rem}.theme-default-content:not(.custom)>h1:first-child+.custom-container,.theme-default-content:not(.custom)>h1:first-child+p,.theme-default-content:not(.custom)>h1:first-child+pre,.theme-default-content:not(.custom)>h2:first-child+.custom-container,.theme-default-content:not(.custom)>h2:first-child+p,.theme-default-content:not(.custom)>h2:first-child+pre,.theme-default-content:not(.custom)>h3:first-child+.custom-container,.theme-default-content:not(.custom)>h3:first-child+p,.theme-default-content:not(.custom)>h3:first-child+pre,.theme-default-content:not(.custom)>h4:first-child+.custom-container,.theme-default-content:not(.custom)>h4:first-child+p,.theme-default-content:not(.custom)>h4:first-child+pre,.theme-default-content:not(.custom)>h5:first-child+.custom-container,.theme-default-content:not(.custom)>h5:first-child+p,.theme-default-content:not(.custom)>h5:first-child+pre,.theme-default-content:not(.custom)>h6:first-child+.custom-container,.theme-default-content:not(.custom)>h6:first-child+p,.theme-default-content:not(.custom)>h6:first-child+pre{margin-top:2rem}.theme-default-content:not(.custom)>:first-child{margin-top:3.6rem}.theme-default-content:not(.custom) a:hover{text-decoration:underline}.theme-default-content:not(.custom) p.demo{padding:1rem 1.5rem;border:1px solid #ddd;border-radius:4px}.theme-default-content:not(.custom) img{max-width:100%}.theme-default-content.custom{padding:0;margin:0}.theme-default-content.custom img{max-width:100%}@media (max-width:959px){.sidebar{font-size:15px;width:16.4rem}.page{padding-left:16.4rem}}@media (max-width:719px){.sidebar{top:0;padding-top:3.6rem;transform:translateX(-100%);transition:transform .2s ease}.page{padding-left:0}.theme-container.sidebar-open .sidebar{transform:translateX(0)}.theme-container.no-navbar .sidebar{padding-top:0}}@media (max-width:419px){h1{font-size:1.9rem}}.navbar{padding:.7rem 1.5rem;line-height:2.2rem}.navbar .logo{height:2.2rem;min-width:2.2rem;margin-right:.8rem;vertical-align:top}.navbar .site-name{font-size:1.3rem;font-weight:600;color:#2c3e50;position:relative}.navbar .navbar-links-wrapper{padding-left:1.5rem;box-sizing:border-box;background-color:#fff;white-space:nowrap;font-size:.9rem;position:absolute;right:1.5rem;top:.7rem;display:flex}.navbar .navbar-links-wrapper .search-box{flex:0 0 auto;vertical-align:top}@media (max-width:719px){.navbar{padding-left:4rem}.navbar .can-hide{display:none}.navbar .navbar-links-wrapper{padding-left:1.5rem}.navbar .site-name{width:calc(100vw - 9.4rem);overflow:hidden;white-space:nowrap;text-overflow:ellipsis}}.navbar-links,.navbar-links a{display:inline-block}.navbar-links a{line-height:1.4rem;color:inherit}.navbar-links .navbar-links-item{position:relative;display:inline-block;margin-left:1.5rem;line-height:2rem}.navbar-links .navbar-links-item:first-child{margin-left:0}@media (max-width:719px){.navbar-links .navbar-links-item{margin-left:0}}@media (min-width:719px){.navbar-links a.router-link-active,.navbar-links a:hover{color:#2c3e50}.navbar-links-item>a:not(.external).router-link-active,.navbar-links-item>a:not(.external):hover{margin-bottom:-2px;border-bottom:2px solid #46bd87}}.toggle-sidebar-button{position:absolute;top:.6rem;left:1rem;display:none;padding:.6rem;cursor:pointer}.toggle-sidebar-button .icon{display:block;width:1.25rem;height:1.25rem}@media screen and (max-width:719px){.toggle-sidebar-button{display:block}}.page-meta,.page-nav{max-width:740px;margin:0 auto;padding:2rem 2.5rem}@media (max-width:959px){.page-meta,.page-nav{padding:2rem}}@media (max-width:419px){.page-meta,.page-nav{padding:1.5rem}}.page{padding-bottom:2rem;display:block}.page-meta{padding-top:1rem;padding-bottom:1rem;overflow:auto}.page-meta .meta-item{cursor:default;margin-top:.8rem}.page-meta .meta-item .meta-item-label{font-weight:500;color:#4e6e8e}.page-meta .meta-item .meta-item-info{font-weight:400;color:#767676}.page-meta .edit-link{display:inline-block;margin-right:.25rem}.page-meta .last-updated{float:right}@media (max-width:719px){.page-meta .last-updated{font-size:.8em;float:none}.page-meta .contributors{font-size:.8em}}.page-nav{padding-top:1rem;padding-bottom:0}.page-nav .inner{min-height:2rem;margin-top:0;border-top:1px solid #eaecef;padding-top:1rem;overflow:auto}.page-nav .next{float:right}.back-to-top{--back-to-top-color:#3eaf7c;--back-to-top-color-hover:#72cda4}#nprogress{--nprogress-color:#3eaf7c}.DocSearch{--docsearch-primary-color:#3eaf7c;--docsearch-highlight-color:var(--docsearch-primary-color);--docsearch-searchbox-shadow:inset 0 0 0 2px var(--docsearch-primary-color)}.sidebar ul{padding:0;margin:0;list-style-type:none}.sidebar a{display:inline-block}.sidebar .navbar-links{display:none;border-bottom:1px solid #eaecef;padding:.5rem 0 .75rem}.sidebar .navbar-links a{font-weight:600}.sidebar .navbar-links .navbar-links-item{display:block;line-height:1.25rem;font-size:1.1em;padding:.5rem 0 .5rem 1.5rem}.sidebar>.sidebar-links{padding:1.5rem 0}.sidebar>.sidebar-links>li>a.sidebar-link{font-size:1.1em;line-height:1.7;font-weight:700}.sidebar-links>.sidebar-group:not(:first-child),.sidebar>.sidebar-links>li:not(:first-child){margin-top:.75rem}@media (max-width:719px){.sidebar .navbar-links{display:block}.sidebar .navbar-links .dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active::after{top:calc(1rem - 2px)}.sidebar>.sidebar-links{padding:1rem 0}}.sidebar-group .sidebar-group>.sidebar-heading{opacity:.5;font-size:.95em;line-height:1.4;font-weight:400;padding-left:2rem}.sidebar-heading,.sidebar-link{color:#2c3e50;border-left:.25rem solid transparent;margin:0;width:100%;box-sizing:border-box}.sidebar-heading{transition:color .15s ease;cursor:default;font-size:1.1em;font-weight:700;padding:.35rem 1.5rem .35rem 1.25rem}.sidebar-heading.open,.sidebar-heading:hover{color:inherit}.sidebar-heading .arrow{position:relative;top:-.12em;left:.5em}.sidebar .sidebar-sub-headers{padding-left:1rem;font-size:.95em}.sidebar-link{font-size:1em;font-weight:400;display:inline-block;padding:.35rem 1rem .35rem 1.25rem;line-height:1.4}.sidebar-group .sidebar-link{padding-left:2rem}.sidebar-sub-headers .sidebar-link{padding-top:.25rem;padding-bottom:.25rem;border-left:none}.sidebar-sub-headers .sidebar-link.active{font-weight:500}a.sidebar-heading,a.sidebar-link{cursor:pointer}a.sidebar-heading.active,a.sidebar-link.active{font-weight:600;color:#3eaf7c;border-left-color:#3eaf7c}a.sidebar-heading:hover,a.sidebar-link:hover{color:#3eaf7c}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.table-of-contents .badge{vertical-align:middle}.fade-slide-y-enter-active{transition:all .3s ease}.fade-slide-y-leave-active{transition:all .3s cubic-bezier(1,.5,.8,1)}.fade-slide-y-enter-from,.fade-slide-y-leave-to{transform:translateY(10px);opacity:0}", "",{"version":3,"sources":["webpack://./node_modules/@vuepress/theme-default/lib/client/styles/_normalize.scss","webpack://./node_modules/@vuepress/theme-default/lib/client/styles/_variables.scss","<no source>","webpack://./node_modules/@vuepress/theme-default/lib/client/styles/badge.scss","webpack://./node_modules/@vuepress/theme-default/lib/client/styles/arrow.scss","webpack://./node_modules/@vuepress/theme-default/lib/client/styles/code.scss","webpack://./node_modules/@vuepress/theme-default/lib/client/styles/code-group.scss","webpack://./node_modules/@vuepress/theme-default/lib/client/styles/custom-container.scss","webpack://./node_modules/@vuepress/theme-default/lib/client/styles/dropdown.scss","webpack://./node_modules/@vuepress/theme-default/lib/client/styles/home.scss","webpack://./node_modules/@vuepress/theme-default/lib/client/styles/_wrapper.scss","webpack://./node_modules/@vuepress/theme-default/lib/client/styles/layout.scss","webpack://./node_modules/@vuepress/theme-default/lib/client/styles/navbar.scss","webpack://./node_modules/@vuepress/theme-default/lib/client/styles/page.scss","webpack://./node_modules/@vuepress/theme-default/lib/client/styles/plugins.scss","webpack://./node_modules/@vuepress/theme-default/lib/client/styles/sidebar.scss","webpack://./node_modules/@vuepress/theme-default/lib/client/styles/sr-only.scss","webpack://./node_modules/@vuepress/theme-default/lib/client/styles/toc.scss","webpack://./node_modules/@vuepress/theme-default/lib/client/styles/transitions.scss"],"names":[],"mappings":"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","sourcesContent":["@import '_variables';\n\nhtml,\nbody {\n  padding: 0;\n  margin: 0;\n  background-color: #fff;\n}\n\nbody {\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\n    Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-size: 16px;\n  color: $textColor;\n}\n\na {\n  font-weight: 500;\n  color: $accentColor;\n  text-decoration: none;\n}\n\np a code {\n  font-weight: 400;\n  color: $accentColor;\n}\n\nkbd {\n  background: #eee;\n  border: solid 0.15rem #ddd;\n  border-bottom: solid 0.25rem #ddd;\n  border-radius: 0.15rem;\n  padding: 0 0.15em;\n}\n\nblockquote {\n  font-size: 1rem;\n  color: #999;\n  border-left: 0.2rem solid #dfe2e5;\n  margin: 1rem 0;\n  padding: 0.25rem 0 0.25rem 1rem;\n\n  & > p {\n    margin: 0;\n  }\n}\n\nul,\nol {\n  padding-left: 1.2em;\n}\n\nstrong {\n  font-weight: 600;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: 600;\n  line-height: 1.25;\n\n  &:hover .header-anchor {\n    opacity: 1;\n  }\n}\n\nh1 {\n  font-size: 2.2rem;\n}\n\nh2 {\n  font-size: 1.65rem;\n  padding-bottom: 0.3rem;\n  border-bottom: 1px solid $borderColor;\n}\n\nh3 {\n  font-size: 1.35rem;\n}\n\nh4 {\n  font-size: 1.15rem;\n}\n\nh5 {\n  font-size: 1.05rem;\n}\n\nh6 {\n  font-size: 1rem;\n}\n\na.header-anchor {\n  font-size: 0.85em;\n  float: left;\n  margin-left: -0.87em;\n  padding-right: 0.23em;\n  margin-top: 0.125em;\n  opacity: 0;\n\n  &:hover {\n    text-decoration: none;\n  }\n}\n\ncode,\nkbd {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n\np,\nul,\nol {\n  line-height: 1.7;\n}\n\nhr {\n  border: 0;\n  border-top: 1px solid $borderColor;\n}\n\ntable {\n  border-collapse: collapse;\n  margin: 1rem 0;\n  display: block;\n  overflow-x: auto;\n}\n\ntr {\n  border-top: 1px solid #dfe2e5;\n\n  &:nth-child(2n) {\n    background-color: #f6f8fa;\n  }\n}\n\nth,\ntd {\n  border: 1px solid #dfe2e5;\n  padding: 0.6em 1em;\n}\n","@import '@vuepress/plugin-palette/palette';\n\n// colors\n$accentColor: #3eaf7c !default;\n$textColor: #2c3e50 !default;\n$borderColor: #eaecef !default;\n$arrowBgColor: #ccc !default;\n$tipColor: #42b983 !default;\n$warningColor: #e7c000 !default;\n$dangerColor: #cc0000 !default;\n\n// code colors\n$codeBgColor: #282c34 !default;\n$highlightLineBgColor: rgba(0, 0, 0, 66%) !default;\n$lineNumbersColor: rgba(255, 255, 255, 0.3) !default;\n\n// badge component colors\n$badgeTipColor: $tipColor !default;\n$badgeWarningColor: $warningColor !default;\n$badgeDangerColor: $dangerColor !default;\n\n// layout\n$navbarHeight: 3.6rem !default;\n$sidebarWidth: 20rem !default;\n$contentWidth: 740px !default;\n$homePageWidth: 960px !default;\n\n// responsive breakpoints\n$MQNarrow: 959px !default;\n$MQMobile: 719px !default;\n$MQMobileNarrow: 419px !default;\n\n// code\n$lineNumbersWrapperWidth: 3.5rem !default;\n$codeLang: 'c' 'cpp' 'cs' 'css' 'dart' 'docker' 'fs' 'go' 'html' 'java' 'js'\n  'json' 'kt' 'less' 'makefile' 'md' 'php' 'py' 'rb' 'rs' 'sass' 'scss' 'sh'\n  'styl' 'ts' 'toml' 'vue' 'yml' !default;\n\n// other\n$contentClass: '.theme-default-content' !default;\n",null,"@import '_variables';\n\n.badge {\n  display: inline-block;\n  font-size: 14px;\n  height: 18px;\n  line-height: 18px;\n  border-radius: 3px;\n  padding: 0 6px;\n  color: white;\n  background-color: #42b983;\n  vertical-align: top;\n\n  .table-of-contents & {\n    vertical-align: middle;\n  }\n\n  &.tip {\n    background-color: $badgeTipColor;\n  }\n\n  &.warning {\n    background-color: $badgeWarningColor;\n  }\n\n  &.danger {\n    background-color: $badgeDangerColor;\n  }\n\n  & + & {\n    margin-left: 5px;\n  }\n}\n","@import '_variables';\n\n.arrow {\n  display: inline-block;\n  width: 0;\n  height: 0;\n\n  &.up {\n    border: {\n      left: 4px solid transparent;\n      right: 4px solid transparent;\n      bottom: 6px solid $arrowBgColor;\n    }\n  }\n\n  &.down {\n    border: {\n      left: 4px solid transparent;\n      right: 4px solid transparent;\n      top: 6px solid $arrowBgColor;\n    }\n  }\n\n  &.right {\n    border: {\n      top: 4px solid transparent;\n      bottom: 4px solid transparent;\n      left: 6px solid $arrowBgColor;\n    }\n  }\n\n  &.left {\n    border: {\n      top: 4px solid transparent;\n      bottom: 4px solid transparent;\n      right: 6px solid $arrowBgColor;\n    }\n  }\n}\n","@use 'sass:color';\n\n@import '_variables';\n\n// ===============================\n// Forked and modified from prismjs/themes/prism-tomorrow.css\n\ncode[class*='language-'],\npre[class*='language-'] {\n  color: #ccc;\n  background: none;\n  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n  font-size: 1em;\n  text-align: left;\n  white-space: pre;\n  word-spacing: normal;\n  word-break: normal;\n  word-wrap: normal;\n  line-height: 1.5;\n\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n\n  -webkit-hyphens: none;\n  -moz-hyphens: none;\n  -ms-hyphens: none;\n  hyphens: none;\n}\n\n/* Code blocks */\npre[class*='language-'] {\n  padding: 1em;\n  margin: 0.5em 0;\n  overflow: auto;\n}\n\n:not(pre) > code[class*='language-'],\npre[class*='language-'] {\n  background: #2d2d2d;\n}\n\n/* Inline code */\n:not(pre) > code[class*='language-'] {\n  padding: 0.1em;\n  border-radius: 0.3em;\n  white-space: normal;\n}\n\n.token.comment,\n.token.block-comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n  color: #999;\n}\n\n.token.punctuation {\n  color: #ccc;\n}\n\n.token.tag,\n.token.attr-name,\n.token.namespace,\n.token.deleted {\n  color: #ec5975;\n}\n\n.token.function-name {\n  color: #6196cc;\n}\n\n.token.boolean,\n.token.number,\n.token.function {\n  color: #f08d49;\n}\n\n.token.property,\n.token.class-name,\n.token.constant,\n.token.symbol {\n  color: #f8c555;\n}\n\n.token.selector,\n.token.important,\n.token.atrule,\n.token.keyword,\n.token.builtin {\n  color: #cc99cd;\n}\n\n.token.string,\n.token.char,\n.token.attr-value,\n.token.regex,\n.token.variable {\n  color: #7ec699;\n}\n\n.token.operator,\n.token.entity,\n.token.url {\n  color: #67cdcc;\n}\n\n.token.important,\n.token.bold {\n  font-weight: bold;\n}\n.token.italic {\n  font-style: italic;\n}\n\n.token.entity {\n  cursor: help;\n}\n\n.token.inserted {\n  color: $accentColor;\n}\n\n// ===============================\n\n#{$contentClass} {\n  code {\n    color: color.scale($textColor, $lightness: 20%);\n    padding: 0.25rem 0.5rem;\n    margin: 0;\n    font-size: 0.85em;\n    background-color: rgba(27, 31, 35, 0.05);\n    border-radius: 3px;\n  }\n}\n\n#{$contentClass} {\n  pre,\n  pre[class*='language-'] {\n    line-height: 1.4;\n    padding: 1.25rem 1.5rem;\n    margin: 0.85rem 0;\n    border-radius: 6px;\n    overflow: auto;\n\n    code {\n      color: #fff;\n      padding: 0;\n      background-color: transparent;\n      border-radius: 0;\n      -webkit-font-smoothing: auto;\n      -moz-osx-font-smoothing: auto;\n    }\n  }\n\n  .line-number {\n    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n      monospace;\n  }\n}\n\ndiv[class*='language-'] {\n  position: relative;\n  background-color: $codeBgColor;\n  border-radius: 6px;\n\n  &::before {\n    position: absolute;\n    z-index: 3;\n    top: 0.8em;\n    right: 1em;\n    font-size: 0.75rem;\n    color: $lineNumbersColor;\n  }\n\n  pre,\n  pre[class*='language-'] {\n    // force override the background color to be compatible with shiki\n    background: transparent !important;\n    position: relative;\n    z-index: 1;\n  }\n\n  .highlight-lines {\n    user-select: none;\n    padding-top: 1.3rem;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    line-height: 1.4;\n\n    .highlight-line {\n      background-color: $highlightLineBgColor;\n    }\n  }\n\n  &:not(.line-numbers-mode) {\n    .line-numbers {\n      display: none;\n    }\n  }\n\n  &.line-numbers-mode {\n    .highlight-lines .highlight-line {\n      position: relative;\n\n      &::before {\n        content: ' ';\n        position: absolute;\n        z-index: 2;\n        left: 0;\n        top: 0;\n        display: block;\n        width: $lineNumbersWrapperWidth;\n        height: 100%;\n      }\n    }\n\n    pre {\n      margin-left: $lineNumbersWrapperWidth;\n      padding-left: 1rem;\n      vertical-align: middle;\n    }\n\n    .line-numbers {\n      position: absolute;\n      top: 0;\n      width: $lineNumbersWrapperWidth;\n      text-align: center;\n      color: $lineNumbersColor;\n      padding-top: 1.25rem;\n      line-height: 1.4;\n\n      br {\n        user-select: none;\n      }\n\n      .line-number {\n        position: relative;\n        z-index: 3;\n        user-select: none;\n        font-size: 0.85em;\n      }\n    }\n\n    &::after {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: $lineNumbersWrapperWidth;\n      height: 100%;\n      border-radius: 6px 0 0 6px;\n      border-right: 1px solid $highlightLineBgColor;\n    }\n  }\n}\n\n@each $lang in $codeLang {\n  div[class*='language-'].ext-#{$lang} {\n    &:before {\n      content: '' + $lang;\n    }\n  }\n}\n\n// narrow mobile\n@media (max-width: $MQMobileNarrow) {\n  #{$contentClass} {\n    div[class*='language-'] {\n      margin: 0.85rem -1.5rem;\n      border-radius: 0;\n    }\n  }\n}\n","@import '_variables';\n\n.code-group__nav {\n  margin-top: 0.85rem;\n  // 2 * margin + border-radius of <pre> tag\n  margin-bottom: calc(-1.7rem - 6px);\n  padding-bottom: calc(1.7rem - 6px);\n  padding-left: 10px;\n  padding-top: 10px;\n  border-top-left-radius: 6px;\n  border-top-right-radius: 6px;\n  background-color: $codeBgColor;\n}\n\n.code-group__ul {\n  margin: auto 0;\n  padding-left: 0;\n  display: inline-flex;\n  list-style: none;\n}\n\n.code-group__nav-tab {\n  border: 0;\n  padding: 5px;\n  cursor: pointer;\n  background-color: transparent;\n  font-size: 0.85em;\n  line-height: 1.4;\n  color: rgba(255, 255, 255, 0.9);\n  font-weight: 600;\n}\n\n.code-group__nav-tab:focus {\n  outline: none;\n}\n\n.code-group__nav-tab-active {\n  border-bottom: $accentColor 1px solid;\n}\n\n@media (max-width: $MQMobileNarrow) {\n  .code-group__nav {\n    margin-left: -1.5rem;\n    margin-right: -1.5rem;\n    border-radius: 0;\n  }\n}\n\n/**\n * code-group-item\n */\n.code-group-item {\n  display: none;\n}\n\n.code-group-item__active {\n  display: block;\n}\n\n.code-group-item > pre {\n  background-color: orange;\n}\n","@use 'sass:color';\n\n@import '_variables';\n\n.custom-container {\n  .custom-container-title {\n    font-weight: 600;\n    margin-bottom: -0.4rem;\n  }\n\n  &.tip,\n  &.warning,\n  &.danger {\n    padding: 0.1rem 1.5rem;\n    border-left-width: 0.5rem;\n    border-left-style: solid;\n    margin: 1rem 0;\n  }\n\n  &.tip {\n    background-color: #f3f5f7;\n    border-color: $tipColor;\n  }\n\n  &.warning {\n    background-color: color.scale($warningColor, $lightness: 90%);\n    border-color: $warningColor;\n    color: color.scale($warningColor, $lightness: -50%);\n\n    .custom-container-title {\n      color: color.scale($warningColor, $lightness: -25%);\n    }\n\n    a {\n      color: $textColor;\n    }\n  }\n\n  &.danger {\n    background-color: color.scale($dangerColor, $lightness: 90%);\n    border-color: $dangerColor;\n    color: color.scale($dangerColor, $lightness: -50%);\n\n    .custom-container-title {\n      color: color.scale($dangerColor, $lightness: -25%);\n    }\n\n    a {\n      color: $textColor;\n    }\n  }\n\n  &.details {\n    display: block;\n    position: relative;\n    border-radius: 2px;\n    margin: 1.6em 0;\n    padding: 1.6em;\n    background-color: #eee;\n\n    h4 {\n      margin-top: 0;\n    }\n\n    figure,\n    p {\n      &:last-child {\n        margin-bottom: 0;\n        padding-bottom: 0;\n      }\n    }\n\n    summary {\n      outline: none;\n      cursor: pointer;\n    }\n  }\n}\n","@import '_variables';\n\n.dropdown-wrapper {\n  cursor: pointer;\n\n  .dropdown-title {\n    display: block;\n    font-size: 0.9rem;\n    font-family: inherit;\n    cursor: inherit;\n    padding: inherit;\n    line-height: 1.4rem;\n    background: transparent;\n    border: none;\n    font-weight: 500;\n    color: $textColor;\n\n    &:hover {\n      border-color: transparent;\n    }\n\n    .arrow {\n      vertical-align: middle;\n      margin-top: -1px;\n      margin-left: 0.4rem;\n    }\n  }\n\n  .mobile-dropdown-title {\n    @extend .dropdown-title;\n    display: none;\n    font-weight: 600;\n\n    font-size inherit {\n      &:hover {\n        color: $accentColor;\n      }\n    }\n  }\n\n  .nav-dropdown {\n    .dropdown-item {\n      color: inherit;\n      line-height: 1.7rem;\n\n      .dropdown-subtitle {\n        margin: 0.45rem 0 0;\n        border-top: 1px solid #eee;\n        padding: 1rem 0 0.45rem 0;\n        font-size: 0.9rem;\n\n        & > span {\n          padding: 0 1.5rem 0 1.25rem;\n        }\n\n        & > a {\n          font-weight: inherit;\n          &.router-link-active {\n            &::after {\n              display: none;\n            }\n          }\n        }\n      }\n\n      .dropdown-subitem-wrapper {\n        padding: 0;\n        list-style: none;\n\n        .dropdown-subitem {\n          font-size: 0.9em;\n        }\n      }\n\n      a {\n        display: block;\n        line-height: 1.7rem;\n        position: relative;\n        border-bottom: none;\n        font-weight: 400;\n        margin-bottom: 0;\n        padding: 0 1.5rem 0 1.25rem;\n\n        &:hover {\n          color: $accentColor;\n        }\n\n        &.router-link-active {\n          color: $accentColor;\n\n          &::after {\n            content: '';\n            width: 0;\n            height: 0;\n            border-left: 5px solid $accentColor;\n            border-top: 3px solid transparent;\n            border-bottom: 3px solid transparent;\n            position: absolute;\n            top: calc(50% - 2px);\n            left: 9px;\n          }\n        }\n      }\n\n      &:first-child .dropdown-subtitle {\n        margin-top: 0;\n        padding-top: 0;\n        border-top: 0;\n      }\n    }\n  }\n}\n\n@media (max-width: $MQMobile) {\n  .dropdown-wrapper {\n    &.open .dropdown-title {\n      margin-bottom: 0.5rem;\n    }\n\n    .dropdown-title {\n      display: none;\n    }\n\n    .mobile-dropdown-title {\n      display: block;\n    }\n\n    .nav-dropdown {\n      transition: height 0.1s ease-out;\n      overflow: hidden;\n\n      .dropdown-item {\n        .dropdown-subtitle {\n          border-top: 0;\n          margin-top: 0;\n          padding-top: 0;\n          padding-bottom: 0;\n        }\n\n        .dropdown-subtitle,\n        & > a {\n          font-size: 15px;\n          line-height: 2rem;\n        }\n\n        .dropdown-subitem {\n          font-size: 14px;\n          padding-left: 1rem;\n        }\n      }\n    }\n  }\n}\n\n@media (min-width: $MQMobile) {\n  .dropdown-wrapper {\n    height: 1.8rem;\n\n    &:hover .nav-dropdown,\n    &.open .nav-dropdown {\n      // override the inline style.\n      display: block !important;\n    }\n\n    &.open:blur {\n      display: none;\n    }\n\n    .nav-dropdown {\n      display: none;\n      // Avoid height shaked by clicking\n      height: auto !important;\n      box-sizing: border-box;\n      max-height: calc(100vh - 2.7rem);\n      overflow-y: auto;\n      position: absolute;\n      top: 100%;\n      right: 0;\n      background-color: #fff;\n      padding: 0.6rem 0;\n      border: 1px solid #ddd;\n      border-bottom-color: #ccc;\n      text-align: left;\n      border-radius: 0.25rem;\n      white-space: nowrap;\n      margin: 0;\n    }\n  }\n}\n\n/**\n * transition\n */\n.dropdown-enter-from,\n.dropdown-leave-to {\n  height: 0 !important;\n}\n","@use 'sass:color';\n\n@import '_variables';\n\n.home {\n  padding: $navbarHeight 2rem 0;\n  max-width: $homePageWidth;\n  margin: 0px auto;\n  display: block;\n\n  .hero {\n    text-align: center;\n\n    img {\n      max-width: 100%;\n      max-height: 280px;\n      display: block;\n      margin: 3rem auto 1.5rem;\n    }\n\n    h1 {\n      font-size: 3rem;\n    }\n\n    h1,\n    .description,\n    .actions {\n      margin: 1.8rem auto;\n    }\n\n    .description {\n      max-width: 35rem;\n      font-size: 1.6rem;\n      line-height: 1.3;\n      color: color.scale($textColor, $lightness: 40%);\n    }\n\n    .action-button {\n      display: inline-block;\n      font-size: 1.2rem;\n      padding: 0.8rem 1.6rem;\n      border-width: 2px;\n      border-style: solid;\n      border-radius: 4px;\n      transition: background-color 0.1s ease;\n      box-sizing: border-box;\n\n      &:not(:first-child) {\n        margin-left: 1.5rem;\n      }\n\n      &.primary {\n        color: #fff;\n        background-color: $accentColor;\n        border-color: $accentColor;\n        &:hover {\n          background-color: color.scale($accentColor, $lightness: 10%);\n        }\n      }\n\n      &.secondary {\n        color: $accentColor;\n        background-color: #fff;\n        border-color: $accentColor;\n        &:hover {\n          color: #fff;\n          background-color: color.scale($accentColor, $lightness: 10%);\n        }\n      }\n    }\n  }\n\n  .features {\n    border-top: 1px solid $borderColor;\n    padding: 1.2rem 0;\n    margin-top: 2.5rem;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: flex-start;\n    align-content: stretch;\n    justify-content: space-between;\n  }\n\n  .feature {\n    flex-grow: 1;\n    flex-basis: 30%;\n    max-width: 30%;\n\n    h2 {\n      font-size: 1.4rem;\n      font-weight: 500;\n      border-bottom: none;\n      padding-bottom: 0;\n      color: color.scale($textColor, $lightness: 10%);\n    }\n\n    p {\n      color: color.scale($textColor, $lightness: 25%);\n    }\n  }\n\n  .footer {\n    padding: 2.5rem;\n    border-top: 1px solid $borderColor;\n    text-align: center;\n    color: color.scale($textColor, $lightness: 25%);\n  }\n}\n\n@media (max-width: $MQMobile) {\n  .home {\n    .features {\n      flex-direction: column;\n    }\n\n    .feature {\n      max-width: 100%;\n      padding: 0 2.5rem;\n    }\n  }\n}\n\n@media (max-width: $MQMobileNarrow) {\n  .home {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n\n    .hero {\n      img {\n        max-height: 210px;\n        margin: 2rem auto 1.2rem;\n      }\n\n      h1 {\n        font-size: 2rem;\n      }\n\n      h1,\n      .description,\n      .actions {\n        margin: 1.2rem auto;\n      }\n\n      .description {\n        font-size: 1.2rem;\n      }\n\n      .action-button {\n        font-size: 1rem;\n        padding: 0.6rem 1.2rem;\n      }\n    }\n\n    .feature {\n      h2 {\n        font-size: 1.25rem;\n      }\n    }\n  }\n}\n","@import '_variables';\n\n%wrapper {\n  max-width: $contentWidth;\n  margin: 0 auto;\n  padding: 2rem 2.5rem;\n\n  @media (max-width: $MQNarrow) {\n    padding: 2rem;\n  }\n\n  @media (max-width: $MQMobileNarrow) {\n    padding: 1.5rem;\n  }\n}\n","@import '_variables';\n@import '_wrapper';\n\n$mobileSidebarWidth: $sidebarWidth * 0.82;\n\n.page {\n  padding-left: $sidebarWidth;\n}\n\n.navbar {\n  position: fixed;\n  z-index: 20;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: $navbarHeight;\n  background-color: #fff;\n  box-sizing: border-box;\n  border-bottom: 1px solid $borderColor;\n}\n\n.sidebar {\n  font-size: 16px;\n  background-color: #fff;\n  width: $sidebarWidth;\n  position: fixed;\n  z-index: 10;\n  margin: 0;\n  top: $navbarHeight;\n  left: 0;\n  bottom: 0;\n  box-sizing: border-box;\n  border-right: 1px solid $borderColor;\n  overflow-y: auto;\n  scrollbar-width: thin;\n  scrollbar-color: $accentColor $borderColor;\n  &::-webkit-scrollbar {\n    width: 7px;\n  }\n  &::-webkit-scrollbar-track {\n    background-color: $borderColor;\n  }\n  &::-webkit-scrollbar-thumb {\n    background-color: $accentColor;\n  }\n}\n\n.sidebar-mask {\n  position: fixed;\n  z-index: 9;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: none;\n}\n\n.theme-container {\n  &.sidebar-open {\n    .sidebar-mask {\n      display: block;\n    }\n  }\n\n  &.no-navbar {\n    #{$contentClass}:not(.custom) > h1,\n    h2,\n    h3,\n    h4,\n    h5,\n    h6 {\n      margin-top: 1.5rem;\n      padding-top: 0;\n    }\n\n    .sidebar {\n      top: 0;\n    }\n  }\n}\n\n@media (min-width: ($MQMobile + 1px)) {\n  .theme-container.no-sidebar {\n    .sidebar {\n      display: none;\n    }\n\n    .page {\n      padding-left: 0;\n    }\n  }\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  #{$contentClass}:not(.custom) > & {\n    margin-top: 0.5rem - $navbarHeight;\n    padding-top: ($navbarHeight + 1rem);\n    margin-bottom: 0;\n\n    &:first-child {\n      margin-top: -1.5rem;\n      margin-bottom: 1rem;\n\n      + p,\n      + pre,\n      + .custom-container {\n        margin-top: 2rem;\n      }\n    }\n  }\n}\n\n#{$contentClass}:not(.custom) {\n  @extend %wrapper;\n\n  > *:first-child {\n    margin-top: $navbarHeight;\n  }\n\n  a:hover {\n    text-decoration: underline;\n  }\n\n  p.demo {\n    padding: 1rem 1.5rem;\n    border: 1px solid #ddd;\n    border-radius: 4px;\n  }\n\n  img {\n    max-width: 100%;\n  }\n}\n\n#{$contentClass}.custom {\n  padding: 0;\n  margin: 0;\n\n  img {\n    max-width: 100%;\n  }\n}\n\n// narrow desktop / iPad\n@media (max-width: $MQNarrow) {\n  .sidebar {\n    font-size: 15px;\n    width: $mobileSidebarWidth;\n  }\n\n  .page {\n    padding-left: $mobileSidebarWidth;\n  }\n}\n\n// wide mobile\n@media (max-width: $MQMobile) {\n  .sidebar {\n    top: 0;\n    padding-top: $navbarHeight;\n    transform: translateX(-100%);\n    transition: transform 0.2s ease;\n  }\n\n  .page {\n    padding-left: 0;\n  }\n\n  .theme-container {\n    &.sidebar-open {\n      .sidebar {\n        transform: translateX(0);\n      }\n    }\n\n    &.no-navbar {\n      .sidebar {\n        padding-top: 0;\n      }\n    }\n  }\n}\n\n// narrow mobile\n@media (max-width: $MQMobileNarrow) {\n  h1 {\n    font-size: 1.9rem;\n  }\n}\n","@use 'sass:color';\n\n@import '_variables';\n\n$navbar-vertical-padding: 0.7rem;\n$navbar-horizontal-padding: 1.5rem;\n\n.navbar {\n  padding: $navbar-vertical-padding $navbar-horizontal-padding;\n  line-height: $navbarHeight - 1.4rem;\n\n  .logo {\n    height: $navbarHeight - 1.4rem;\n    min-width: $navbarHeight - 1.4rem;\n    margin-right: 0.8rem;\n    vertical-align: top;\n  }\n\n  .site-name {\n    font-size: 1.3rem;\n    font-weight: 600;\n    color: $textColor;\n    position: relative;\n  }\n\n  .navbar-links-wrapper {\n    padding-left: 1.5rem;\n    box-sizing: border-box;\n    background-color: white;\n    white-space: nowrap;\n    font-size: 0.9rem;\n    position: absolute;\n    right: $navbar-horizontal-padding;\n    top: $navbar-vertical-padding;\n    display: flex;\n\n    .search-box {\n      flex: 0 0 auto;\n      vertical-align: top;\n    }\n  }\n}\n\n@media (max-width: $MQMobile) {\n  .navbar {\n    padding-left: 4rem;\n\n    .can-hide {\n      display: none;\n    }\n\n    .navbar-links-wrapper {\n      padding-left: 1.5rem;\n    }\n\n    .site-name {\n      width: calc(100vw - 9.4rem);\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n    }\n  }\n}\n\n/**\n * navbar-links\n */\n.navbar-links {\n  display: inline-block;\n\n  a {\n    display: inline-block;\n    line-height: 1.4rem;\n    color: inherit;\n\n    &:hover,\n    &.router-link-active {\n      color: $accentColor;\n    }\n  }\n\n  .navbar-links-item {\n    position: relative;\n    display: inline-block;\n    margin-left: 1.5rem;\n    line-height: 2rem;\n\n    &:first-child {\n      margin-left: 0;\n    }\n  }\n}\n\n@media (max-width: $MQMobile) {\n  .navbar-links {\n    .navbar-links-item {\n      margin-left: 0;\n    }\n  }\n}\n\n@media (min-width: $MQMobile) {\n  .navbar-links a {\n    &:hover,\n    &.router-link-active {\n      color: $textColor;\n    }\n  }\n\n  .navbar-links-item > a:not(.external) {\n    &:hover,\n    &.router-link-active {\n      margin-bottom: -2px;\n      border-bottom: 2px solid color.scale($accentColor, $lightness: 8%);\n    }\n  }\n}\n\n/**\n * toggle sidebar button\n */\n.toggle-sidebar-button {\n  position: absolute;\n  top: 0.6rem;\n  left: 1rem;\n  display: none;\n  padding: 0.6rem;\n  cursor: pointer;\n}\n\n.toggle-sidebar-button .icon {\n  display: block;\n  width: 1.25rem;\n  height: 1.25rem;\n}\n\n@media screen and (max-width: $MQMobile) {\n  .toggle-sidebar-button {\n    display: block;\n  }\n}\n","@use 'sass:color';\n\n@import '_variables';\n@import '_wrapper';\n\n.page {\n  padding-bottom: 2rem;\n  display: block;\n}\n\n.page-meta {\n  @extend %wrapper;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  overflow: auto;\n\n  .meta-item {\n    cursor: default;\n    margin-top: 0.8rem;\n\n    .meta-item-label {\n      font-weight: 500;\n      color: color.scale($textColor, $lightness: 25%);\n    }\n\n    .meta-item-info {\n      font-weight: 400;\n      color: #767676;\n    }\n  }\n\n  .edit-link {\n    display: inline-block;\n    margin-right: 0.25rem;\n  }\n\n  .last-updated {\n    float: right;\n  }\n}\n\n@media (max-width: $MQMobile) {\n  .page-meta {\n    .last-updated {\n      font-size: 0.8em;\n      float: none;\n    }\n\n    .contributors {\n      font-size: 0.8em;\n    }\n  }\n}\n\n.page-nav {\n  @extend %wrapper;\n  padding-top: 1rem;\n  padding-bottom: 0;\n\n  .inner {\n    min-height: 2rem;\n    margin-top: 0;\n    border-top: 1px solid $borderColor;\n    padding-top: 1rem;\n    overflow: auto;\n  }\n\n  .next {\n    float: right;\n  }\n}\n","@use 'sass:color';\n\n@import '_variables';\n\n.back-to-top {\n  --back-to-top-color: #{$accentColor};\n  --back-to-top-color-hover: #{color.scale($accentColor, $lightness: 30%)};\n}\n\n#nprogress {\n  --nprogress-color: #{$accentColor};\n}\n\n.DocSearch {\n  --docsearch-primary-color: #{$accentColor};\n  --docsearch-highlight-color: var(--docsearch-primary-color);\n  --docsearch-searchbox-shadow: inset 0 0 0 2px var(--docsearch-primary-color);\n}\n","@import '_variables';\n\n.sidebar {\n  ul {\n    padding: 0;\n    margin: 0;\n    list-style-type: none;\n  }\n\n  a {\n    display: inline-block;\n  }\n\n  .navbar-links {\n    display: none;\n    border-bottom: 1px solid $borderColor;\n    padding: 0.5rem 0 0.75rem 0;\n\n    a {\n      font-weight: 600;\n    }\n\n    .navbar-links-item {\n      display: block;\n      line-height: 1.25rem;\n      font-size: 1.1em;\n      padding: 0.5rem 0 0.5rem 1.5rem;\n    }\n  }\n\n  & > .sidebar-links {\n    padding: 1.5rem 0;\n\n    & > li > a.sidebar-link {\n      font-size: 1.1em;\n      line-height: 1.7;\n      font-weight: bold;\n    }\n\n    & > li:not(:first-child) {\n      margin-top: 0.75rem;\n    }\n  }\n}\n\n@media (max-width: $MQMobile) {\n  .sidebar {\n    .navbar-links {\n      display: block;\n\n      .dropdown-wrapper\n        .nav-dropdown\n        .dropdown-item\n        a.router-link-active::after {\n        top: calc(1rem - 2px);\n      }\n    }\n\n    & > .sidebar-links {\n      padding: 1rem 0;\n    }\n  }\n}\n\n/**\n * sidebar child\n */\n.sidebar-group {\n  .sidebar-links > &:not(:first-child) {\n    margin-top: 0.75rem;\n  }\n  .sidebar-group {\n    & > .sidebar-heading {\n      opacity: 0.5;\n      font-size: 0.95em;\n      line-height: 1.4;\n      font-weight: normal;\n      padding-left: 2rem;\n    }\n  }\n}\n\n.sidebar-heading {\n  color: $textColor;\n  transition: color 0.15s ease;\n  cursor: default;\n  font-size: 1.1em;\n  font-weight: bold;\n  padding: 0.35rem 1.5rem 0.35rem 1.25rem;\n  width: 100%;\n  box-sizing: border-box;\n  margin: 0;\n  border-left: 0.25rem solid transparent;\n\n  &.open,\n  &:hover {\n    color: inherit;\n  }\n\n  .arrow {\n    position: relative;\n    top: -0.12em;\n    left: 0.5em;\n  }\n}\n\n.sidebar .sidebar-sub-headers {\n  padding-left: 1rem;\n  font-size: 0.95em;\n}\n\n.sidebar-link {\n  font-size: 1em;\n  font-weight: 400;\n  display: inline-block;\n  color: $textColor;\n  border-left: 0.25rem solid transparent;\n  margin: 0;\n  padding: 0.35rem 1rem 0.35rem 1.25rem;\n  line-height: 1.4;\n  width: 100%;\n  box-sizing: border-box;\n\n  .sidebar-group & {\n    padding-left: 2rem;\n  }\n\n  .sidebar-sub-headers & {\n    padding-top: 0.25rem;\n    padding-bottom: 0.25rem;\n    border-left: none;\n\n    &.active {\n      font-weight: 500;\n    }\n  }\n}\n\na.sidebar-heading,\na.sidebar-link {\n  cursor: pointer;\n\n  &.active {\n    font-weight: 600;\n    color: $accentColor;\n    border-left-color: $accentColor;\n  }\n\n  &:hover {\n    color: $accentColor;\n  }\n}\n",".sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n  user-select: none;\n}\n",".table-of-contents {\n  .badge {\n    vertical-align: middle;\n  }\n}\n",".fade-slide-y-enter-active {\n  transition: all 0.3s ease;\n}\n\n.fade-slide-y-leave-active {\n  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);\n}\n\n.fade-slide-y-enter-from,\n.fade-slide-y-leave-to {\n  transform: translateY(10px);\n  opacity: 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (___CSS_LOADER_EXPORT___)));


/***/ }),

/***/ 645:
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 15:
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ 865:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */

;(function(root, factory) {

  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

})(this, function() {
  var NProgress = {};

  NProgress.version = '0.2.0';

  var Settings = NProgress.settings = {
    minimum: 0.08,
    easing: 'ease',
    positionUsing: '',
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    showSpinner: true,
    barSelector: '[role="bar"]',
    spinnerSelector: '[role="spinner"]',
    parent: 'body',
    template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  };

  /**
   * Updates configuration.
   *
   *     NProgress.configure({
   *       minimum: 0.1
   *     });
   */
  NProgress.configure = function(options) {
    var key, value;
    for (key in options) {
      value = options[key];
      if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value;
    }

    return this;
  };

  /**
   * Last number.
   */

  NProgress.status = null;

  /**
   * Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
   *
   *     NProgress.set(0.4);
   *     NProgress.set(1.0);
   */

  NProgress.set = function(n) {
    var started = NProgress.isStarted();

    n = clamp(n, Settings.minimum, 1);
    NProgress.status = (n === 1 ? null : n);

    var progress = NProgress.render(!started),
        bar      = progress.querySelector(Settings.barSelector),
        speed    = Settings.speed,
        ease     = Settings.easing;

    progress.offsetWidth; /* Repaint */

    queue(function(next) {
      // Set positionUsing if it hasn't already been set
      if (Settings.positionUsing === '') Settings.positionUsing = NProgress.getPositioningCSS();

      // Add transition
      css(bar, barPositionCSS(n, speed, ease));

      if (n === 1) {
        // Fade out
        css(progress, { 
          transition: 'none', 
          opacity: 1 
        });
        progress.offsetWidth; /* Repaint */

        setTimeout(function() {
          css(progress, { 
            transition: 'all ' + speed + 'ms linear', 
            opacity: 0 
          });
          setTimeout(function() {
            NProgress.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(next, speed);
      }
    });

    return this;
  };

  NProgress.isStarted = function() {
    return typeof NProgress.status === 'number';
  };

  /**
   * Shows the progress bar.
   * This is the same as setting the status to 0%, except that it doesn't go backwards.
   *
   *     NProgress.start();
   *
   */
  NProgress.start = function() {
    if (!NProgress.status) NProgress.set(0);

    var work = function() {
      setTimeout(function() {
        if (!NProgress.status) return;
        NProgress.trickle();
        work();
      }, Settings.trickleSpeed);
    };

    if (Settings.trickle) work();

    return this;
  };

  /**
   * Hides the progress bar.
   * This is the *sort of* the same as setting the status to 100%, with the
   * difference being `done()` makes some placebo effect of some realistic motion.
   *
   *     NProgress.done();
   *
   * If `true` is passed, it will show the progress bar even if its hidden.
   *
   *     NProgress.done(true);
   */

  NProgress.done = function(force) {
    if (!force && !NProgress.status) return this;

    return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
  };

  /**
   * Increments by a random amount.
   */

  NProgress.inc = function(amount) {
    var n = NProgress.status;

    if (!n) {
      return NProgress.start();
    } else {
      if (typeof amount !== 'number') {
        amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
      }

      n = clamp(n + amount, 0, 0.994);
      return NProgress.set(n);
    }
  };

  NProgress.trickle = function() {
    return NProgress.inc(Math.random() * Settings.trickleRate);
  };

  /**
   * Waits for all supplied jQuery promises and
   * increases the progress as the promises resolve.
   *
   * @param $promise jQUery Promise
   */
  (function() {
    var initial = 0, current = 0;

    NProgress.promise = function($promise) {
      if (!$promise || $promise.state() === "resolved") {
        return this;
      }

      if (current === 0) {
        NProgress.start();
      }

      initial++;
      current++;

      $promise.always(function() {
        current--;
        if (current === 0) {
            initial = 0;
            NProgress.done();
        } else {
            NProgress.set((initial - current) / initial);
        }
      });

      return this;
    };

  })();

  /**
   * (Internal) renders the progress bar markup based on the `template`
   * setting.
   */

  NProgress.render = function(fromStart) {
    if (NProgress.isRendered()) return document.getElementById('nprogress');

    addClass(document.documentElement, 'nprogress-busy');
    
    var progress = document.createElement('div');
    progress.id = 'nprogress';
    progress.innerHTML = Settings.template;

    var bar      = progress.querySelector(Settings.barSelector),
        perc     = fromStart ? '-100' : toBarPerc(NProgress.status || 0),
        parent   = document.querySelector(Settings.parent),
        spinner;
    
    css(bar, {
      transition: 'all 0 linear',
      transform: 'translate3d(' + perc + '%,0,0)'
    });

    if (!Settings.showSpinner) {
      spinner = progress.querySelector(Settings.spinnerSelector);
      spinner && removeElement(spinner);
    }

    if (parent != document.body) {
      addClass(parent, 'nprogress-custom-parent');
    }

    parent.appendChild(progress);
    return progress;
  };

  /**
   * Removes the element. Opposite of render().
   */

  NProgress.remove = function() {
    removeClass(document.documentElement, 'nprogress-busy');
    removeClass(document.querySelector(Settings.parent), 'nprogress-custom-parent');
    var progress = document.getElementById('nprogress');
    progress && removeElement(progress);
  };

  /**
   * Checks if the progress bar is rendered.
   */

  NProgress.isRendered = function() {
    return !!document.getElementById('nprogress');
  };

  /**
   * Determine which positioning CSS rule to use.
   */

  NProgress.getPositioningCSS = function() {
    // Sniff on document.body.style
    var bodyStyle = document.body.style;

    // Sniff prefixes
    var vendorPrefix = ('WebkitTransform' in bodyStyle) ? 'Webkit' :
                       ('MozTransform' in bodyStyle) ? 'Moz' :
                       ('msTransform' in bodyStyle) ? 'ms' :
                       ('OTransform' in bodyStyle) ? 'O' : '';

    if (vendorPrefix + 'Perspective' in bodyStyle) {
      // Modern browsers with 3D support, e.g. Webkit, IE10
      return 'translate3d';
    } else if (vendorPrefix + 'Transform' in bodyStyle) {
      // Browsers without 3D support, e.g. IE9
      return 'translate';
    } else {
      // Browsers without translate() support, e.g. IE7-8
      return 'margin';
    }
  };

  /**
   * Helpers
   */

  function clamp(n, min, max) {
    if (n < min) return min;
    if (n > max) return max;
    return n;
  }

  /**
   * (Internal) converts a percentage (`0..1`) to a bar translateX
   * percentage (`-100%..0%`).
   */

  function toBarPerc(n) {
    return (-1 + n) * 100;
  }


  /**
   * (Internal) returns the correct CSS for changing the bar's
   * position given an n percentage, and speed and ease from Settings
   */

  function barPositionCSS(n, speed, ease) {
    var barCSS;

    if (Settings.positionUsing === 'translate3d') {
      barCSS = { transform: 'translate3d('+toBarPerc(n)+'%,0,0)' };
    } else if (Settings.positionUsing === 'translate') {
      barCSS = { transform: 'translate('+toBarPerc(n)+'%,0)' };
    } else {
      barCSS = { 'margin-left': toBarPerc(n)+'%' };
    }

    barCSS.transition = 'all '+speed+'ms '+ease;

    return barCSS;
  }

  /**
   * (Internal) Queues a function to be executed.
   */

  var queue = (function() {
    var pending = [];
    
    function next() {
      var fn = pending.shift();
      if (fn) {
        fn(next);
      }
    }

    return function(fn) {
      pending.push(fn);
      if (pending.length == 1) next();
    };
  })();

  /**
   * (Internal) Applies css properties to an element, similar to the jQuery 
   * css method.
   *
   * While this helper does assist with vendor prefixed property names, it 
   * does not perform any manipulation of values prior to setting styles.
   */

  var css = (function() {
    var cssPrefixes = [ 'Webkit', 'O', 'Moz', 'ms' ],
        cssProps    = {};

    function camelCase(string) {
      return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function(match, letter) {
        return letter.toUpperCase();
      });
    }

    function getVendorProp(name) {
      var style = document.body.style;
      if (name in style) return name;

      var i = cssPrefixes.length,
          capName = name.charAt(0).toUpperCase() + name.slice(1),
          vendorName;
      while (i--) {
        vendorName = cssPrefixes[i] + capName;
        if (vendorName in style) return vendorName;
      }

      return name;
    }

    function getStyleProp(name) {
      name = camelCase(name);
      return cssProps[name] || (cssProps[name] = getVendorProp(name));
    }

    function applyCss(element, prop, value) {
      prop = getStyleProp(prop);
      element.style[prop] = value;
    }

    return function(element, properties) {
      var args = arguments,
          prop, 
          value;

      if (args.length == 2) {
        for (prop in properties) {
          value = properties[prop];
          if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
        }
      } else {
        applyCss(element, args[1], args[2]);
      }
    }
  })();

  /**
   * (Internal) Determines if an element or space separated list of class names contains a class name.
   */

  function hasClass(element, name) {
    var list = typeof element == 'string' ? element : classList(element);
    return list.indexOf(' ' + name + ' ') >= 0;
  }

  /**
   * (Internal) Adds a class to an element.
   */

  function addClass(element, name) {
    var oldList = classList(element),
        newList = oldList + name;

    if (hasClass(oldList, name)) return; 

    // Trim the opening space.
    element.className = newList.substring(1);
  }

  /**
   * (Internal) Removes a class from an element.
   */

  function removeClass(element, name) {
    var oldList = classList(element),
        newList;

    if (!hasClass(element, name)) return;

    // Replace the class name.
    newList = oldList.replace(' ' + name + ' ', ' ');

    // Trim the opening and closing spaces.
    element.className = newList.substring(1, newList.length - 1);
  }

  /**
   * (Internal) Gets a space separated list of the class names on the element. 
   * The list is wrapped with a single space on each end to facilitate finding 
   * matches within the list.
   */

  function classList(element) {
    return (' ' + (element.className || '') + ' ').replace(/\s+/gi, ' ');
  }

  /**
   * (Internal) Removes an element from the DOM.
   */

  function removeElement(element) {
    element && element.parentNode && element.parentNode.removeChild(element);
  }

  return NProgress;
});



/***/ }),

/***/ 745:
/***/ ((module) => {

"use strict";
module.exports = require("@vue/server-renderer");;

/***/ }),

/***/ 103:
/***/ ((module) => {

"use strict";
module.exports = require("vue");;

/***/ }),

/***/ 615:
/***/ ((module) => {

"use strict";
module.exports = require("vue-router");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".app.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			143: 1
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 		
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("./" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createServerApp": () => (/* binding */ createServerApp)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(103);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(615);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(788);



/**
 * Server entry point, used for SSR
 */
const createServerApp = async () => (0,_app__WEBPACK_IMPORTED_MODULE_2__/* .createVueApp */ .a)({
    appCreator: vue__WEBPACK_IMPORTED_MODULE_0__.createSSRApp,
    historyCreator: vue_router__WEBPACK_IMPORTED_MODULE_1__.createMemoryHistory,
});

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=app.js.map