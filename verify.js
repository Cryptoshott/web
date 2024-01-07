// ==ClosureCompiler==
// @output_file_name default.js
// @compilation_level SIMPLE_OPTIMIZATIONS
// @formatting pretty_print
// ==/ClosureCompiler==

!(function (t) {
  var e = {};
  function n(o) {
    if (e[o]) return e[o].exports;
    var i = (e[o] = { i: o, l: !1, exports: {} });
    return t[o].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function (t, e, o) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o });
    }),
    (n.r = function (t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
      var o = Object.create(null);
      if (
        (n.r(o),
        Object.defineProperty(o, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var i in t)
          n.d(
            o,
            i,
            function (e) {
              return t[e];
            }.bind(null, i)
          );
      return o;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, 'a', e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = 'https://web-button.getmati.com/'),
    n((n.s = 2));
})([
  function (t, e, n) {
    'use strict';
    n.r(e),
      n.d(e, 'MetaMapButton', function () {
        return Ot;
      }),
      n.d(e, 'MatiButton', function () {
        return It;
      });
    /**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const o =
        window.ShadowRoot &&
        (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) &&
        'adoptedStyleSheets' in Document.prototype &&
        'replace' in CSSStyleSheet.prototype,
      i = Symbol(),
      s = new Map();
    class r {
      constructor(t, e) {
        if (((this._$cssResult$ = !0), e !== i))
          throw Error(
            'CSSResult is not constructable. Use `unsafeCSS` or `css` instead.'
          );
        this.cssText = t;
      }
      get styleSheet() {
        let t = s.get(this.cssText);
        return (
          o &&
            void 0 === t &&
            (s.set(this.cssText, (t = new CSSStyleSheet())),
            t.replaceSync(this.cssText)),
          t
        );
      }
      toString() {
        return this.cssText;
      }
    }
    const a = (t, ...e) => {
        const n =
          1 === t.length
            ? t[0]
            : e.reduce(
                (e, n, o) =>
                  e +
                  ((t) => {
                    if (!0 === t._$cssResult$) return t.cssText;
                    if ('number' == typeof t) return t;
                    throw Error(
                      "Value passed to 'css' function must be a 'css' function result: " +
                        t +
                        ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security."
                    );
                  })(n) +
                  t[o + 1],
                t[0]
              );
        return new r(n, i);
      },
      l = o
        ? (t) => t
        : (t) =>
            t instanceof CSSStyleSheet
              ? ((t) => {
                  let e = '';
                  for (const n of t.cssRules) e += n.cssText;
                  return ((t) => new r('string' == typeof t ? t : t + '', i))(
                    e
                  );
                })(t)
              : t;
    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */ var d, c;
    const h = {
        toAttribute(t, e) {
          switch (e) {
            case Boolean:
              t = t ? '' : null;
              break;
            case Object:
            case Array:
              t = null == t ? t : JSON.stringify(t);
          }
          return t;
        },
        fromAttribute(t, e) {
          let n = t;
          switch (e) {
            case Boolean:
              n = null !== t;
              break;
            case Number:
              n = null === t ? null : Number(t);
              break;
            case Object:
            case Array:
              try {
                n = JSON.parse(t);
              } catch (t) {
                n = null;
              }
          }
          return n;
        },
      },
      u = (t, e) => e !== t && (e == e || t == t),
      p = {
        attribute: !0,
        type: String,
        converter: h,
        reflect: !1,
        hasChanged: u,
      };
    class m extends HTMLElement {
      constructor() {
        super(),
          (this._$Et = new Map()),
          (this.isUpdatePending = !1),
          (this.hasUpdated = !1),
          (this._$Ei = null),
          this.o();
      }
      static addInitializer(t) {
        var e;
        (null !== (e = this.l) && void 0 !== e) || (this.l = []),
          this.l.push(t);
      }
      static get observedAttributes() {
        this.finalize();
        const t = [];
        return (
          this.elementProperties.forEach((e, n) => {
            const o = this._$Eh(n, e);
            void 0 !== o && (this._$Eu.set(o, n), t.push(o));
          }),
          t
        );
      }
      static createProperty(t, e = p) {
        if (
          (e.state && (e.attribute = !1),
          this.finalize(),
          this.elementProperties.set(t, e),
          !e.noAccessor && !this.prototype.hasOwnProperty(t))
        ) {
          const n = 'symbol' == typeof t ? Symbol() : '__' + t,
            o = this.getPropertyDescriptor(t, n, e);
          void 0 !== o && Object.defineProperty(this.prototype, t, o);
        }
      }
      static getPropertyDescriptor(t, e, n) {
        return {
          get() {
            return this[e];
          },
          set(o) {
            const i = this[t];
            (this[e] = o), this.requestUpdate(t, i, n);
          },
          configurable: !0,
          enumerable: !0,
        };
      }
      static getPropertyOptions(t) {
        return this.elementProperties.get(t) || p;
      }
      static finalize() {
        if (this.hasOwnProperty('finalized')) return !1;
        this.finalized = !0;
        const t = Object.getPrototypeOf(this);
        if (
          (t.finalize(),
          (this.elementProperties = new Map(t.elementProperties)),
          (this._$Eu = new Map()),
          this.hasOwnProperty('properties'))
        ) {
          const t = this.properties,
            e = [
              ...Object.getOwnPropertyNames(t),
              ...Object.getOwnPropertySymbols(t),
            ];
          for (const n of e) this.createProperty(n, t[n]);
        }
        return (this.elementStyles = this.finalizeStyles(this.styles)), !0;
      }
      static finalizeStyles(t) {
        const e = [];
        if (Array.isArray(t)) {
          const n = new Set(t.flat(1 / 0).reverse());
          for (const t of n) e.unshift(l(t));
        } else void 0 !== t && e.push(l(t));
        return e;
      }
      static _$Eh(t, e) {
        const n = e.attribute;
        return !1 === n
          ? void 0
          : 'string' == typeof n
          ? n
          : 'string' == typeof t
          ? t.toLowerCase()
          : void 0;
      }
      o() {
        var t;
        (this._$Ev = new Promise((t) => (this.enableUpdating = t))),
          (this._$AL = new Map()),
          this._$Ep(),
          this.requestUpdate(),
          null === (t = this.constructor.l) ||
            void 0 === t ||
            t.forEach((t) => t(this));
      }
      addController(t) {
        var e, n;
        (null !== (e = this._$Em) && void 0 !== e ? e : (this._$Em = [])).push(
          t
        ),
          void 0 !== this.renderRoot &&
            this.isConnected &&
            (null === (n = t.hostConnected) || void 0 === n || n.call(t));
      }
      removeController(t) {
        var e;
        null === (e = this._$Em) ||
          void 0 === e ||
          e.splice(this._$Em.indexOf(t) >>> 0, 1);
      }
      _$Ep() {
        this.constructor.elementProperties.forEach((t, e) => {
          this.hasOwnProperty(e) && (this._$Et.set(e, this[e]), delete this[e]);
        });
      }
      createRenderRoot() {
        var t;
        const e =
          null !== (t = this.shadowRoot) && void 0 !== t
            ? t
            : this.attachShadow(this.constructor.shadowRootOptions);
        return (
          (n = e),
          (i = this.constructor.elementStyles),
          o
            ? (n.adoptedStyleSheets = i.map((t) =>
                t instanceof CSSStyleSheet ? t : t.styleSheet
              ))
            : i.forEach((t) => {
                const e = document.createElement('style'),
                  o = window.litNonce;
                void 0 !== o && e.setAttribute('nonce', o),
                  (e.textContent = t.cssText),
                  n.appendChild(e);
              }),
          e
        );
        var n, i;
      }
      connectedCallback() {
        var t;
        void 0 === this.renderRoot &&
          (this.renderRoot = this.createRenderRoot()),
          this.enableUpdating(!0),
          null === (t = this._$Em) ||
            void 0 === t ||
            t.forEach((t) => {
              var e;
              return null === (e = t.hostConnected) || void 0 === e
                ? void 0
                : e.call(t);
            });
      }
      enableUpdating(t) {}
      disconnectedCallback() {
        var t;
        null === (t = this._$Em) ||
          void 0 === t ||
          t.forEach((t) => {
            var e;
            return null === (e = t.hostDisconnected) || void 0 === e
              ? void 0
              : e.call(t);
          });
      }
      attributeChangedCallback(t, e, n) {
        this._$AK(t, n);
      }
      _$Eg(t, e, n = p) {
        var o, i;
        const s = this.constructor._$Eh(t, n);
        if (void 0 !== s && !0 === n.reflect) {
          const r = (
            null !==
              (i =
                null === (o = n.converter) || void 0 === o
                  ? void 0
                  : o.toAttribute) && void 0 !== i
              ? i
              : h.toAttribute
          )(e, n.type);
          (this._$Ei = t),
            null == r ? this.removeAttribute(s) : this.setAttribute(s, r),
            (this._$Ei = null);
        }
      }
      _$AK(t, e) {
        var n, o, i;
        const s = this.constructor,
          r = s._$Eu.get(t);
        if (void 0 !== r && this._$Ei !== r) {
          const t = s.getPropertyOptions(r),
            a = t.converter,
            l =
              null !==
                (i =
                  null !==
                    (o =
                      null === (n = a) || void 0 === n
                        ? void 0
                        : n.fromAttribute) && void 0 !== o
                    ? o
                    : 'function' == typeof a
                    ? a
                    : null) && void 0 !== i
                ? i
                : h.fromAttribute;
          (this._$Ei = r), (this[r] = l(e, t.type)), (this._$Ei = null);
        }
      }
      requestUpdate(t, e, n) {
        let o = !0;
        void 0 !== t &&
          (((n = n || this.constructor.getPropertyOptions(t)).hasChanged || u)(
            this[t],
            e
          )
            ? (this._$AL.has(t) || this._$AL.set(t, e),
              !0 === n.reflect &&
                this._$Ei !== t &&
                (void 0 === this._$ES && (this._$ES = new Map()),
                this._$ES.set(t, n)))
            : (o = !1)),
          !this.isUpdatePending && o && (this._$Ev = this._$EC());
      }
      async _$EC() {
        this.isUpdatePending = !0;
        try {
          await this._$Ev;
        } catch (t) {
          Promise.reject(t);
        }
        const t = this.scheduleUpdate();
        return null != t && (await t), !this.isUpdatePending;
      }
      scheduleUpdate() {
        return this.performUpdate();
      }
      performUpdate() {
        var t;
        if (!this.isUpdatePending) return;
        this.hasUpdated,
          this._$Et &&
            (this._$Et.forEach((t, e) => (this[e] = t)), (this._$Et = void 0));
        let e = !1;
        const n = this._$AL;
        try {
          (e = this.shouldUpdate(n)),
            e
              ? (this.willUpdate(n),
                null === (t = this._$Em) ||
                  void 0 === t ||
                  t.forEach((t) => {
                    var e;
                    return null === (e = t.hostUpdate) || void 0 === e
                      ? void 0
                      : e.call(t);
                  }),
                this.update(n))
              : this._$ET();
        } catch (t) {
          throw ((e = !1), this._$ET(), t);
        }
        e && this._$AE(n);
      }
      willUpdate(t) {}
      _$AE(t) {
        var e;
        null === (e = this._$Em) ||
          void 0 === e ||
          e.forEach((t) => {
            var e;
            return null === (e = t.hostUpdated) || void 0 === e
              ? void 0
              : e.call(t);
          }),
          this.hasUpdated || ((this.hasUpdated = !0), this.firstUpdated(t)),
          this.updated(t);
      }
      _$ET() {
        (this._$AL = new Map()), (this.isUpdatePending = !1);
      }
      get updateComplete() {
        return this.getUpdateComplete();
      }
      getUpdateComplete() {
        return this._$Ev;
      }
      shouldUpdate(t) {
        return !0;
      }
      update(t) {
        void 0 !== this._$ES &&
          (this._$ES.forEach((t, e) => this._$Eg(e, this[e], t)),
          (this._$ES = void 0)),
          this._$ET();
      }
      updated(t) {}
      firstUpdated(t) {}
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    var f, g;
    (m.finalized = !0),
      (m.elementProperties = new Map()),
      (m.elementStyles = []),
      (m.shadowRootOptions = { mode: 'open' }),
      null === (d = globalThis.reactiveElementPolyfillSupport) ||
        void 0 === d ||
        d.call(globalThis, { ReactiveElement: m }),
      (null !== (c = globalThis.reactiveElementVersions) && void 0 !== c
        ? c
        : (globalThis.reactiveElementVersions = [])
      ).push('1.0.0');
    const v = globalThis.trustedTypes,
      y = v ? v.createPolicy('lit-html', { createHTML: (t) => t }) : void 0,
      b = `lit$${(Math.random() + '').slice(9)}$`,
      w = '?' + b,
      $ = `<${w}>`,
      _ = document,
      A = (t = '') => _.createComment(t),
      E = (t) => null === t || ('object' != typeof t && 'function' != typeof t),
      S = Array.isArray,
      C = (t) => {
        var e;
        return (
          S(t) ||
          'function' ==
            typeof (null === (e = t) || void 0 === e
              ? void 0
              : e[Symbol.iterator])
        );
      },
      x = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
      T = /-->/g,
      k = />/g,
      M =
        />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,
      P = /'/g,
      O = /"/g,
      I = /^(?:script|style|textarea)$/i,
      H =
        (t) =>
        (e, ...n) => ({ _$litType$: t, strings: e, values: n }),
      U = H(1),
      L = (H(2), Symbol.for('lit-noChange')),
      N = Symbol.for('lit-nothing'),
      R = new WeakMap(),
      j = _.createTreeWalker(_, 129, null, !1),
      B = (t, e) => {
        const n = t.length - 1,
          o = [];
        let i,
          s = 2 === e ? '<svg>' : '',
          r = x;
        for (let e = 0; e < n; e++) {
          const n = t[e];
          let a,
            l,
            d = -1,
            c = 0;
          for (
            ;
            c < n.length && ((r.lastIndex = c), (l = r.exec(n)), null !== l);

          )
            (c = r.lastIndex),
              r === x
                ? '!--' === l[1]
                  ? (r = T)
                  : void 0 !== l[1]
                  ? (r = k)
                  : void 0 !== l[2]
                  ? (I.test(l[2]) && (i = RegExp('</' + l[2], 'g')), (r = M))
                  : void 0 !== l[3] && (r = M)
                : r === M
                ? '>' === l[0]
                  ? ((r = null != i ? i : x), (d = -1))
                  : void 0 === l[1]
                  ? (d = -2)
                  : ((d = r.lastIndex - l[2].length),
                    (a = l[1]),
                    (r = void 0 === l[3] ? M : '"' === l[3] ? O : P))
                : r === O || r === P
                ? (r = M)
                : r === T || r === k
                ? (r = x)
                : ((r = M), (i = void 0));
          const h = r === M && t[e + 1].startsWith('/>') ? ' ' : '';
          s +=
            r === x
              ? n + $
              : d >= 0
              ? (o.push(a), n.slice(0, d) + '$lit$' + n.slice(d) + b + h)
              : n + b + (-2 === d ? (o.push(void 0), e) : h);
        }
        const a = s + (t[n] || '<?>') + (2 === e ? '</svg>' : '');
        return [void 0 !== y ? y.createHTML(a) : a, o];
      };
    class W {
      constructor({ strings: t, _$litType$: e }, n) {
        let o;
        this.parts = [];
        let i = 0,
          s = 0;
        const r = t.length - 1,
          a = this.parts,
          [l, d] = B(t, e);
        if (
          ((this.el = W.createElement(l, n)),
          (j.currentNode = this.el.content),
          2 === e)
        ) {
          const t = this.el.content,
            e = t.firstChild;
          e.remove(), t.append(...e.childNodes);
        }
        for (; null !== (o = j.nextNode()) && a.length < r; ) {
          if (1 === o.nodeType) {
            if (o.hasAttributes()) {
              const t = [];
              for (const e of o.getAttributeNames())
                if (e.endsWith('$lit$') || e.startsWith(b)) {
                  const n = d[s++];
                  if ((t.push(e), void 0 !== n)) {
                    const t = o
                        .getAttribute(n.toLowerCase() + '$lit$')
                        .split(b),
                      e = /([.?@])?(.*)/.exec(n);
                    a.push({
                      type: 1,
                      index: i,
                      name: e[2],
                      strings: t,
                      ctor:
                        '.' === e[1]
                          ? V
                          : '?' === e[1]
                          ? J
                          : '@' === e[1]
                          ? Y
                          : q,
                    });
                  } else a.push({ type: 6, index: i });
                }
              for (const e of t) o.removeAttribute(e);
            }
            if (I.test(o.tagName)) {
              const t = o.textContent.split(b),
                e = t.length - 1;
              if (e > 0) {
                o.textContent = v ? v.emptyScript : '';
                for (let n = 0; n < e; n++)
                  o.append(t[n], A()),
                    j.nextNode(),
                    a.push({ type: 2, index: ++i });
                o.append(t[e], A());
              }
            }
          } else if (8 === o.nodeType)
            if (o.data === w) a.push({ type: 2, index: i });
            else {
              let t = -1;
              for (; -1 !== (t = o.data.indexOf(b, t + 1)); )
                a.push({ type: 7, index: i }), (t += b.length - 1);
            }
          i++;
        }
      }
      static createElement(t, e) {
        const n = _.createElement('template');
        return (n.innerHTML = t), n;
      }
    }
    function D(t, e, n = t, o) {
      var i, s, r, a;
      if (e === L) return e;
      let l =
        void 0 !== o
          ? null === (i = n._$Cl) || void 0 === i
            ? void 0
            : i[o]
          : n._$Cu;
      const d = E(e) ? void 0 : e._$litDirective$;
      return (
        (null == l ? void 0 : l.constructor) !== d &&
          (null === (s = null == l ? void 0 : l._$AO) ||
            void 0 === s ||
            s.call(l, !1),
          void 0 === d ? (l = void 0) : ((l = new d(t)), l._$AT(t, n, o)),
          void 0 !== o
            ? ((null !== (r = (a = n)._$Cl) && void 0 !== r
                ? r
                : (a._$Cl = []))[o] = l)
            : (n._$Cu = l)),
        void 0 !== l && (e = D(t, l._$AS(t, e.values), l, o)),
        e
      );
    }
    class F {
      constructor(t, e) {
        (this.v = []), (this._$AN = void 0), (this._$AD = t), (this._$AM = e);
      }
      get parentNode() {
        return this._$AM.parentNode;
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      p(t) {
        var e;
        const {
            el: { content: n },
            parts: o,
          } = this._$AD,
          i = (
            null !== (e = null == t ? void 0 : t.creationScope) && void 0 !== e
              ? e
              : _
          ).importNode(n, !0);
        j.currentNode = i;
        let s = j.nextNode(),
          r = 0,
          a = 0,
          l = o[0];
        for (; void 0 !== l; ) {
          if (r === l.index) {
            let e;
            2 === l.type
              ? (e = new z(s, s.nextSibling, this, t))
              : 1 === l.type
              ? (e = new l.ctor(s, l.name, l.strings, this, t))
              : 6 === l.type && (e = new G(s, this, t)),
              this.v.push(e),
              (l = o[++a]);
          }
          r !== (null == l ? void 0 : l.index) && ((s = j.nextNode()), r++);
        }
        return i;
      }
      m(t) {
        let e = 0;
        for (const n of this.v)
          void 0 !== n &&
            (void 0 !== n.strings
              ? (n._$AI(t, n, e), (e += n.strings.length - 2))
              : n._$AI(t[e])),
            e++;
      }
    }
    class z {
      constructor(t, e, n, o) {
        var i;
        (this.type = 2),
          (this._$AH = N),
          (this._$AN = void 0),
          (this._$AA = t),
          (this._$AB = e),
          (this._$AM = n),
          (this.options = o),
          (this._$Cg =
            null === (i = null == o ? void 0 : o.isConnected) ||
            void 0 === i ||
            i);
      }
      get _$AU() {
        var t, e;
        return null !==
          (e = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) &&
          void 0 !== e
          ? e
          : this._$Cg;
      }
      get parentNode() {
        let t = this._$AA.parentNode;
        const e = this._$AM;
        return void 0 !== e && 11 === t.nodeType && (t = e.parentNode), t;
      }
      get startNode() {
        return this._$AA;
      }
      get endNode() {
        return this._$AB;
      }
      _$AI(t, e = this) {
        (t = D(this, t, e)),
          E(t)
            ? t === N || null == t || '' === t
              ? (this._$AH !== N && this._$AR(), (this._$AH = N))
              : t !== this._$AH && t !== L && this.$(t)
            : void 0 !== t._$litType$
            ? this.T(t)
            : void 0 !== t.nodeType
            ? this.S(t)
            : C(t)
            ? this.M(t)
            : this.$(t);
      }
      A(t, e = this._$AB) {
        return this._$AA.parentNode.insertBefore(t, e);
      }
      S(t) {
        this._$AH !== t && (this._$AR(), (this._$AH = this.A(t)));
      }
      $(t) {
        this._$AH !== N && E(this._$AH)
          ? (this._$AA.nextSibling.data = t)
          : this.S(_.createTextNode(t)),
          (this._$AH = t);
      }
      T(t) {
        var e;
        const { values: n, _$litType$: o } = t,
          i =
            'number' == typeof o
              ? this._$AC(t)
              : (void 0 === o.el && (o.el = W.createElement(o.h, this.options)),
                o);
        if ((null === (e = this._$AH) || void 0 === e ? void 0 : e._$AD) === i)
          this._$AH.m(n);
        else {
          const t = new F(i, this),
            e = t.p(this.options);
          t.m(n), this.S(e), (this._$AH = t);
        }
      }
      _$AC(t) {
        let e = R.get(t.strings);
        return void 0 === e && R.set(t.strings, (e = new W(t))), e;
      }
      M(t) {
        S(this._$AH) || ((this._$AH = []), this._$AR());
        const e = this._$AH;
        let n,
          o = 0;
        for (const i of t)
          o === e.length
            ? e.push((n = new z(this.A(A()), this.A(A()), this, this.options)))
            : (n = e[o]),
            n._$AI(i),
            o++;
        o < e.length && (this._$AR(n && n._$AB.nextSibling, o), (e.length = o));
      }
      _$AR(t = this._$AA.nextSibling, e) {
        var n;
        for (
          null === (n = this._$AP) || void 0 === n || n.call(this, !1, !0, e);
          t && t !== this._$AB;

        ) {
          const e = t.nextSibling;
          t.remove(), (t = e);
        }
      }
      setConnected(t) {
        var e;
        void 0 === this._$AM &&
          ((this._$Cg = t),
          null === (e = this._$AP) || void 0 === e || e.call(this, t));
      }
    }
    class q {
      constructor(t, e, n, o, i) {
        (this.type = 1),
          (this._$AH = N),
          (this._$AN = void 0),
          (this.element = t),
          (this.name = e),
          (this._$AM = o),
          (this.options = i),
          n.length > 2 || '' !== n[0] || '' !== n[1]
            ? ((this._$AH = Array(n.length - 1).fill(new String())),
              (this.strings = n))
            : (this._$AH = N);
      }
      get tagName() {
        return this.element.tagName;
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      _$AI(t, e = this, n, o) {
        const i = this.strings;
        let s = !1;
        if (void 0 === i)
          (t = D(this, t, e, 0)),
            (s = !E(t) || (t !== this._$AH && t !== L)),
            s && (this._$AH = t);
        else {
          const o = t;
          let r, a;
          for (t = i[0], r = 0; r < i.length - 1; r++)
            (a = D(this, o[n + r], e, r)),
              a === L && (a = this._$AH[r]),
              s || (s = !E(a) || a !== this._$AH[r]),
              a === N
                ? (t = N)
                : t !== N && (t += (null != a ? a : '') + i[r + 1]),
              (this._$AH[r] = a);
        }
        s && !o && this.k(t);
      }
      k(t) {
        t === N
          ? this.element.removeAttribute(this.name)
          : this.element.setAttribute(this.name, null != t ? t : '');
      }
    }
    class V extends q {
      constructor() {
        super(...arguments), (this.type = 3);
      }
      k(t) {
        this.element[this.name] = t === N ? void 0 : t;
      }
    }
    class J extends q {
      constructor() {
        super(...arguments), (this.type = 4);
      }
      k(t) {
        t && t !== N
          ? this.element.setAttribute(this.name, '')
          : this.element.removeAttribute(this.name);
      }
    }
    class Y extends q {
      constructor(t, e, n, o, i) {
        super(t, e, n, o, i), (this.type = 5);
      }
      _$AI(t, e = this) {
        var n;
        if ((t = null !== (n = D(this, t, e, 0)) && void 0 !== n ? n : N) === L)
          return;
        const o = this._$AH,
          i =
            (t === N && o !== N) ||
            t.capture !== o.capture ||
            t.once !== o.once ||
            t.passive !== o.passive,
          s = t !== N && (o === N || i);
        i && this.element.removeEventListener(this.name, this, o),
          s && this.element.addEventListener(this.name, this, t),
          (this._$AH = t);
      }
      handleEvent(t) {
        var e, n;
        'function' == typeof this._$AH
          ? this._$AH.call(
              null !==
                (n =
                  null === (e = this.options) || void 0 === e
                    ? void 0
                    : e.host) && void 0 !== n
                ? n
                : this.element,
              t
            )
          : this._$AH.handleEvent(t);
      }
    }
    class G {
      constructor(t, e, n) {
        (this.element = t),
          (this.type = 6),
          (this._$AN = void 0),
          (this._$AM = e),
          (this.options = n);
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      _$AI(t) {
        D(this, t);
      }
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    var K, Z, X;
    null === (f = globalThis.litHtmlPolyfillSupport) ||
      void 0 === f ||
      f.call(globalThis, W, z),
      (null !== (g = globalThis.litHtmlVersions) && void 0 !== g
        ? g
        : (globalThis.litHtmlVersions = [])
      ).push('2.0.0');
    class Q extends m {
      constructor() {
        super(...arguments),
          (this.renderOptions = { host: this }),
          (this._$Dt = void 0);
      }
      createRenderRoot() {
        var t, e;
        const n = super.createRenderRoot();
        return (
          (null !== (t = (e = this.renderOptions).renderBefore) &&
            void 0 !== t) ||
            (e.renderBefore = n.firstChild),
          n
        );
      }
      update(t) {
        const e = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
          super.update(t),
          (this._$Dt = ((t, e, n) => {
            var o, i;
            const s =
              null !== (o = null == n ? void 0 : n.renderBefore) && void 0 !== o
                ? o
                : e;
            let r = s._$litPart$;
            if (void 0 === r) {
              const t =
                null !== (i = null == n ? void 0 : n.renderBefore) &&
                void 0 !== i
                  ? i
                  : null;
              s._$litPart$ = r = new z(
                e.insertBefore(A(), t),
                t,
                void 0,
                null != n ? n : {}
              );
            }
            return r._$AI(t), r;
          })(e, this.renderRoot, this.renderOptions));
      }
      connectedCallback() {
        var t;
        super.connectedCallback(),
          null === (t = this._$Dt) || void 0 === t || t.setConnected(!0);
      }
      disconnectedCallback() {
        var t;
        super.disconnectedCallback(),
          null === (t = this._$Dt) || void 0 === t || t.setConnected(!1);
      }
      render() {
        return L;
      }
    }
    (Q.finalized = !0),
      (Q._$litElement$ = !0),
      null === (K = globalThis.litElementHydrateSupport) ||
        void 0 === K ||
        K.call(globalThis, { LitElement: Q }),
      null === (Z = globalThis.litElementPolyfillSupport) ||
        void 0 === Z ||
        Z.call(globalThis, { LitElement: Q });
    function tt(t) {
      this.message = t;
    }
    (null !== (X = globalThis.litElementVersions) && void 0 !== X
      ? X
      : (globalThis.litElementVersions = [])
    ).push('3.0.0'),
      (tt.prototype = new Error()),
      (tt.prototype.name = 'InvalidCharacterError');
    var et =
      ('undefined' != typeof window &&
        window.atob &&
        window.atob.bind(window)) ||
      function (t) {
        var e = String(t).replace(/=+$/, '');
        if (e.length % 4 == 1)
          throw new tt(
            "'atob' failed: The string to be decoded is not correctly encoded."
          );
        for (
          var n, o, i = 0, s = 0, r = '';
          (o = e.charAt(s++));
          ~o && ((n = i % 4 ? 64 * n + o : o), i++ % 4)
            ? (r += String.fromCharCode(255 & (n >> ((-2 * i) & 6))))
            : 0
        )
          o =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.indexOf(
              o
            );
        return r;
      };
    function nt(t) {
      this.message = t;
    }
    (nt.prototype = new Error()), (nt.prototype.name = 'InvalidTokenError');
    var ot = function (t, e) {
      if ('string' != typeof t) throw new nt('Invalid token specified');
      var n = !0 === (e = e || {}).header ? 0 : 1;
      try {
        return JSON.parse(
          (function (t) {
            var e = t.replace(/-/g, '+').replace(/_/g, '/');
            switch (e.length % 4) {
              case 0:
                break;
              case 2:
                e += '==';
                break;
              case 3:
                e += '=';
                break;
              default:
                throw 'Illegal base64url string!';
            }
            try {
              return (function (t) {
                return decodeURIComponent(
                  et(t).replace(/(.)/g, function (t, e) {
                    var n = e.charCodeAt(0).toString(16).toUpperCase();
                    return n.length < 2 && (n = '0' + n), '%' + n;
                  })
                );
              })(e);
            } catch (t) {
              return et(e);
            }
          })(t.split('.')[n])
        );
      } catch (t) {
        throw new nt('Invalid token specified: ' + t.message);
      }
    };
    function it(t, e, n) {
      var o, i, s, r, a, l;
      if (
        ((t /= 255),
        (e /= 255),
        (n /= 255),
        (i = 0),
        (l = 0),
        (s = ((r = Math.max(t, e, n)) + (a = Math.min(t, e, n))) / 2),
        r === a)
      )
        i = l = 0;
      else {
        switch (
          ((o = r - a), (l = s > 0.5 ? o / (2 - r - a) : o / (r + a)), r)
        ) {
          case t:
            i = (e - n) / o + (e < n ? 6 : 0);
            break;
          case e:
            i = (n - t) / o + 2;
            break;
          case n:
            i = (t - e) / o + 4;
        }
        i /= 6;
      }
      return [
        (i = Math.ceil(360 * i)),
        (l = Math.ceil(100 * l) + '%'),
        (s = Math.ceil(100 * s) + '%'),
      ];
    }
    var st = function (t) {
      const [e, n, o] = it.apply(
        it,
        (function (t) {
          t.charAt &&
            '#' === t.charAt(0) &&
            (t = (function (t) {
              var e = t.split('');
              return e.shift(), e.join('');
            })(t)),
            3 === t.length &&
              (t = (function (t) {
                return t
                  .split('')
                  .reduce(function (t, e) {
                    return t.concat([e, e]);
                  }, [])
                  .join('');
              })(t));
          var e = parseInt(t, 16);
          return [(e >> 16) & 255, (e >> 8) & 255, 255 & e];
        })(t)
      );
      return [e, parseInt(n, 10), parseInt(o, 10)];
    };
    customElements.define(
      'metamap-spinner',
      class extends Q {
        static get properties() {
          return { color: { type: String } };
        }
        static get styles() {
          return a`
      :host {
        display: inline-block;
        width: 1.5em;
        height: 1.5em;
      }

      svg {
        width: 100%;
        heigth: 100%;
        animation: rotate 2s linear infinite;
        transform-origin: center center;
      }

      circle {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
        animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
        stroke-linecap: round;
        stroke-width: 5px;
      }

      @keyframes rotate {
        100% {
          transform: rotate(360deg);
        }
      }

      @keyframes dash {
        0% {
          stroke-dasharray: 1, 200;
          stroke-dashoffset: 0;
        }
        50% {
          stroke-dasharray: 89, 200;
          stroke-dashoffset: -35px;
        }
        100% {
          stroke-dasharray: 89, 200;
          stroke-dashoffset: -124px;
        }
      }
    `;
        }
        render() {
          return U`
      <svg viewBox="25 25 50 50">
        <circle
          cx="50"
          cy="50"
          r="20"
          fill="none"
          stroke="${this.color}"
          strokewidth="2"
          strokemiterlimit="10"
        />
      </svg>
    `;
        }
      }
    );
    var rt = n(1),
      at = n.n(rt);
    const lt = {
        blue: '#507DED',
        green: '#00B257',
        red: '#EB5757',
        pink: '#FF527E',
        orange: '#F2994A',
        yellow: '#FFBD00',
      },
      dt = {
        en: { verify: 'Verify now' },
        es: { verify: 'VerifÃ­came' },
        fr: { verify: 'VÃ©rifie moi' },
        pt: { verify: 'Me confirma' },
      };
    function ct(t) {
      const [, , e] = st(t);
      return e < 70;
    }
    customElements.define(
      'metamap-button-element',
      class extends Q {
        static get properties() {
          return {
            role: { type: String, reflect: !0 },
            tabindex: { type: Number, reflect: !0 },
            ariaPressed: {
              type: String,
              reflect: !0,
              attribute: 'aria-pressed',
            },
            disabled: { type: Boolean },
            loading: { type: Boolean, reflect: !0 },
            language: { type: String },
            color: { type: String },
            textColor: { type: String },
          };
        }
        static get styles() {
          return a`
      :host {
        position: relative;
        width: 100%;
        display: inline-flex;
        align-items: stretch;
        height: 43px;
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
        transition: box-shadow 200ms ease-in-out;
        border-radius: 4px;
        outline: 0;
        overflow: hidden;
        font-family: sans-serif;
        font-size: 15px;
        letter-spacing: 0.8px;
        white-space: nowrap;
        user-select: none;
      }

      :host(:not([disabled])) {
        cursor: pointer;
      }

      :host([disabled]) main {
        background: #eee;
        cursor: default;
      }

      :host(:active:not([disabled])) {
        box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);
      }

      figure {
        margin: 0;
        padding: 0 15px;
        background: white;
        display: flex;
        align-items: center;
      }

      figure svg,
      figure img {
        width: 24px;
      }

      main {
        transition: background-color 100ms linear;
        padding: 0 40px;
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      :host([loading]) label {
        visibility: hidden;
      }

      label {
        cursor: pointer;
      }

      metamap-spinner {
        position: absolute;
      }
    `;
        }
        constructor() {
          super(),
            (this.role = 'button'),
            (this.tabindex = 0),
            (this.ariaPressed = 'false'),
            (this.color = 'blue'),
            (this.textColor = ct('blue') ? 'white' : 'black'),
            (this.defaultLanguage = 'en'),
            (this.language = this.defaultLanguage);
        }
        set color(t) {
          const e = this.color;
          (this._color = t), this.requestUpdate('color', e);
        }
        get color() {
          let t = this._color;
          return (
            (t &&
              (Object.keys(lt).includes(t) ||
                t.match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/))) ||
              (t = 'blue'),
            lt[t] || t
          );
        }
        set textColor(t) {
          const e = this.textColor;
          (this._textColor = t), this.requestUpdate('textColor', e);
        }
        get textColor() {
          return lt[this._textColor] || this._textColor;
        }
        get translations() {
          return dt[this.language] || dt[this.defaultLanguage];
        }
        render() {
          return U`
      <main>
        ${
          this.loading
            ? U`
              <metamap-spinner
                isLoading="${this.loading}"
                color="${this.textColor || (ct(this.color) ? 'white' : 'black')}
              "/>
            `
            : null
        }
        <label>${this.translations.verify} &rarr;</label>
      </main>
    `;
        }
        updateStyles() {
          (this.shadowRoot.querySelector('main').style.backgroundColor =
            this.color),
            (this.shadowRoot.querySelector('main').style.color =
              this.textColor || (ct(this.color) ? 'white' : 'black'));
        }
        firstUpdated() {
          this.updateStyles();
        }
        updated(t) {
          (t.has('color') || t.has('textColor')) && this.updateStyles();
        }
      }
    );
    var ht = !1;
    if ('undefined' != typeof window) {
      var ut = {
        get passive() {
          ht = !0;
        },
      };
      window.addEventListener('testPassive', null, ut),
        window.removeEventListener('testPassive', null, ut);
    }
    var pt =
        'undefined' != typeof window &&
        window.navigator &&
        window.navigator.platform &&
        (/iP(ad|hone|od)/.test(window.navigator.platform) ||
          ('MacIntel' === window.navigator.platform &&
            window.navigator.maxTouchPoints > 1)),
      mt = [],
      ft = !1,
      gt = -1,
      vt = void 0,
      yt = void 0,
      bt = void 0,
      wt = function (t) {
        return mt.some(function (e) {
          return !(!e.options.allowTouchMove || !e.options.allowTouchMove(t));
        });
      },
      $t = function (t) {
        var e = t || window.event;
        return (
          !!wt(e.target) ||
          e.touches.length > 1 ||
          (e.preventDefault && e.preventDefault(), !1)
        );
      },
      _t = function () {
        void 0 !== bt &&
          ((document.body.style.paddingRight = bt), (bt = void 0)),
          void 0 !== vt && ((document.body.style.overflow = vt), (vt = void 0));
      },
      At = function () {
        if (void 0 !== yt) {
          var t = -parseInt(document.body.style.top, 10),
            e = -parseInt(document.body.style.left, 10);
          (document.body.style.position = yt.position),
            (document.body.style.top = yt.top),
            (document.body.style.left = yt.left),
            window.scrollTo(e, t),
            (yt = void 0);
        }
      },
      Et = function (t, e) {
        if (t) {
          if (
            !mt.some(function (e) {
              return e.targetElement === t;
            })
          ) {
            var n = { targetElement: t, options: e || {} };
            (mt = [].concat(
              (function (t) {
                if (Array.isArray(t)) {
                  for (var e = 0, n = Array(t.length); e < t.length; e++)
                    n[e] = t[e];
                  return n;
                }
                return Array.from(t);
              })(mt),
              [n]
            )),
              pt
                ? window.requestAnimationFrame(function () {
                    if (void 0 === yt) {
                      yt = {
                        position: document.body.style.position,
                        top: document.body.style.top,
                        left: document.body.style.left,
                      };
                      var t = window,
                        e = t.scrollY,
                        n = t.scrollX,
                        o = t.innerHeight;
                      (document.body.style.position = 'fixed'),
                        (document.body.style.top = -e),
                        (document.body.style.left = -n),
                        setTimeout(function () {
                          return window.requestAnimationFrame(function () {
                            var t = o - window.innerHeight;
                            t && e >= o && (document.body.style.top = -(e + t));
                          });
                        }, 300);
                    }
                  })
                : (function (t) {
                    if (void 0 === bt) {
                      var e = !!t && !0 === t.reserveScrollBarGap,
                        n =
                          window.innerWidth -
                          document.documentElement.clientWidth;
                      if (e && n > 0) {
                        var o = parseInt(
                          window
                            .getComputedStyle(document.body)
                            .getPropertyValue('padding-right'),
                          10
                        );
                        (bt = document.body.style.paddingRight),
                          (document.body.style.paddingRight = o + n + 'px');
                      }
                    }
                    void 0 === vt &&
                      ((vt = document.body.style.overflow),
                      (document.body.style.overflow = 'hidden'));
                  })(e),
              pt &&
                ((t.ontouchstart = function (t) {
                  1 === t.targetTouches.length &&
                    (gt = t.targetTouches[0].clientY);
                }),
                (t.ontouchmove = function (e) {
                  1 === e.targetTouches.length &&
                    (function (t, e) {
                      var n = t.targetTouches[0].clientY - gt;
                      !wt(t.target) &&
                        ((e && 0 === e.scrollTop && n > 0) ||
                        ((function (t) {
                          return (
                            !!t &&
                            t.scrollHeight - t.scrollTop <= t.clientHeight
                          );
                        })(e) &&
                          n < 0)
                          ? $t(t)
                          : t.stopPropagation());
                    })(e, t);
                }),
                ft ||
                  (document.addEventListener(
                    'touchmove',
                    $t,
                    ht ? { passive: !1 } : void 0
                  ),
                  (ft = !0)));
          }
        } else
          console.error(
            'disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.'
          );
      };
    customElements.define(
      'metamap-frame',
      class extends Q {
        static get properties() {
          return {
            clientId: { type: String },
            disabled: { type: Boolean, reflect: !0 },
            metadata: { type: String },
            color: { type: String },
            textColor: { type: String },
            flowId: { type: String },
            identityId: { type: String },
            configurationId: { type: String },
            encryptionConfigurationId: { type: String },
            nopersist: { type: Boolean },
            signupHost: { type: String },
            debug: { type: Boolean },
          };
        }
        static get styles() {
          return a`
      iframe {
        z-index: 2147483647;
        background: rgba(0, 0, 0, 0.004);
        border: 0px none transparent;
        overflow: hidden auto;
        visibility: visible;
        margin: 0px;
        padding: 0px;
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        -webkit-tap-highlight-color: transparent;
      }
    `;
        }
        constructor() {
          super(), (this.metadata = null);
        }
        connectedCallback() {
          super.connectedCallback(), Et(this.renderRoot);
        }
        disconnectedCallback() {
          var t;
          super.disconnectedCallback(),
            (t = this.renderRoot)
              ? ((mt = mt.filter(function (e) {
                  return e.targetElement !== t;
                })),
                pt &&
                  ((t.ontouchstart = null),
                  (t.ontouchmove = null),
                  ft &&
                    0 === mt.length &&
                    (document.removeEventListener(
                      'touchmove',
                      $t,
                      ht ? { passive: !1 } : void 0
                    ),
                    (ft = !1))),
                pt ? At() : _t())
              : console.error(
                  'enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.'
                );
        }
        createColorForSearchParam(t) {
          return (t || '').replace('#', '');
        }
        render() {
          const t = new URL(this.signupHost);
          return (
            [
              ['merchantToken', this.clientId],
              ['metadata', this.metadata],
              ['flowId', this.flowId],
              ['identityId', this.identityId],
              ['configurationId', this.configurationId],
              ['encryptionConfigurationId', this.encryptionConfigurationId],
              ['color', this.createColorForSearchParam(this.color)],
              ['textColor', this.createColorForSearchParam(this.textColor)],
              ['nopersist', this.nopersist],
              ['debug', this.debug],
            ]
              .filter((t) => {
                let [e, n] = t;
                return n && 'null' !== n;
              })
              .forEach((e) => {
                let [n, o] = e;
                return t.searchParams.append(n, o);
              }),
            U`
      <iframe
        frameborder="0"
        src="${t}"
        allow="geolocation; microphone; camera; midi; encrypted-media;"
      ></iframe>
    `
          );
        }
      }
    );
    const St = 'loaded',
      Ct = 'errorSdk',
      xt = 'exitedSdk',
      Tt = 'userFinishedSdk';
    function kt(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(t);
        e &&
          (o = o.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, o);
      }
      return n;
    }
    function Mt(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? kt(Object(n), !0).forEach(function (e) {
              Pt(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : kt(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function Pt(t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      );
    }
    console.info('[METAMAP] MetaMap Button version:', '1.2.0');
    class Ot extends Q {
      static get properties() {
        return {
          clientId: { type: String },
          disabled: { type: Boolean },
          loading: { type: Boolean },
          color: { type: String },
          textColor: { type: String },
          language: { type: String },
          metadata: { type: String },
          flowId: { type: String },
          identityId: { type: String },
          configurationId: { type: String },
          encryptionConfigurationId: { type: String },
          nopersist: { type: Boolean },
          signupHost: { type: String },
          apiHost: { type: String },
          debug: { type: Boolean },
        };
      }
      static get styles() {
        return a`
      :host {
        display: inline-block;
      }
    `;
      }
      constructor() {
        super(),
          (this.disabled = !0),
          (this.loading = !0),
          (this.apiHost = 'https://api.getmati.com'),
          (this.signupHost = 'https://signup.getmati.com'),
          ([this.language] = navigator.language.split('-')),
          (this.metadata = null),
          (this.debug = !1),
          this.addEventListener('click', this.openIframe),
          window.addEventListener(
            'message',
            this.handleFrameMessages.bind(this)
          );
      }
      get metadata() {
        return this._metadata
          ? (function (t) {
              const e = document.createElement('textarea');
              return (
                (e.innerHTML = t),
                0 === e.childNodes.length ? '' : e.childNodes[0].nodeValue
              );
            })(this._metadata)
          : this._metadata;
      }
      set metadata(t) {
        this._metadata = t;
      }
      handleFrameMessages(t) {
        let { origin: e, data: n } = t;
        if (e === this.signupHost)
          try {
            const { action: t, payload: e } = JSON.parse(n),
              [, o] = (t || '').split('::');
            switch (o) {
              case St:
                (this.disabled = !1), (this.loading = !1);
                break;
              case xt:
              case Tt:
                this.removeFrame();
            }
            this.emitEvent(o, e);
          } catch (t) {
            console.error(
              '[METAMAP] unable to read info from metamap popup',
              t
            ),
              this.emitEvent(Ct, t);
          }
      }
      emitEvent(t, e) {
        const n = new CustomEvent('metamap:' + t, { detail: Mt({}, e) });
        this.dispatchEvent(n);
      }
      removeFrame() {
        const t = document.querySelector('metamap-frame');
        t && t.remove();
      }
      openIframe() {
        (this.disabled = !0), (this.loading = !0), this.removeFrame();
        const t = document.createElement('metamap-frame');
        t.setAttribute('data-qa', 'metamap-frame');
        for (const e of [
          'signupHost',
          'clientId',
          'metadata',
          'flowId',
          'identityId',
          'configurationId',
          'encryptionConfigurationId',
          'color',
          'textColor',
          'nopersist',
          'debug',
        ])
          this[e] && t.setAttribute(e, this[e]);
        window.document.body.appendChild(t),
          setTimeout(() => {
            (this.disabled = !1), (this.loading = !1);
          }, 2e3);
      }
      async fetch(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : 'GET';
        return (
          await fetch(t, {
            headers: {
              authorization: 'Basic ' + btoa(this.clientId + ':'),
              'Content-Type': 'application/x-www-form-urlencoded',
              'x-mati-app': 'platform=web_desktop; version=1.2.0',
            },
            method: e,
            body: new URLSearchParams({
              scope: 'openid verification_flow',
              grant_type: 'application_key',
              application_key: this.clientId,
              flow_id: this.flowId,
              identity_id: this.identityId,
            }),
          })
        ).json();
      }
      parseAuthToken(t) {
        try {
          const e = ot(t);
          return (
            this.debug && console.info('[METAMAP] Auth token payload:', e), e
          );
        } catch (t) {
          console.error('[METAMAP] MetaMapButton: JWT is invalid');
        }
      }
      async fetchMerchantInfo() {
        const t = this.apiHost,
          { id_token: e } = await this.fetch(t + '/oauth/token', 'POST');
        return this.parseAuthToken(e);
      }
      async fetchFlow() {
        const { flow: t } = await this.fetchMerchantInfo();
        return t;
      }
      async firstUpdated() {
        if (this.color) return (this.disabled = !1), void (this.loading = !1);
        try {
          const t = await this.fetchFlow();
          (this.color = t.style && t.style.color),
            (this.disabled = !1),
            (this.loading = !1);
        } catch (t) {
          console.error(
            '[METAMAP] MetaMap: unable to read data for the client'
          );
        }
      }
      render() {
        return U`
      <metamap-button-element
        ?disabled="${this.disabled}"
        ?loading="${this.loading}"
        color="${this.color}"
        textColor="${this.textColor}"
        language="${this.language}"
        data-qa="button"
      ></metamap-button-element>
    `;
      }
    }
    class It extends Ot {
      emitEvent(t, e) {
        const n = new CustomEvent('mati:' + t, { detail: Mt({}, e) });
        this.dispatchEvent(n);
      }
    }
    customElements.define('mati-button', It),
      customElements.define('metamap-button', Ot);
  },
  function (t, e, n) {
    t.exports = n.p + 'metamap-logo.748ae640.svg';
  },
  function (t, e, n) {
    (window.WebComponents = window.WebComponents || {}),
      (window.WebComponents.root =
        window.WebComponents.root ||
        'https://unpkg.com/@webcomponents/webcomponentsjs@2.4.3/'),
      n(3),
      WebComponents.ready
        ? n(0)
        : addEventListener('WebComponentsReady', () => n(0));
  },
  function (t, e) {
    /**
     * @license
     * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
     */
    !(function () {
      'use strict';
      var t,
        e = !1,
        n = [],
        o = !1;
      function i() {
        (window.WebComponents.ready = !0),
          document.dispatchEvent(
            new CustomEvent('WebComponentsReady', { bubbles: !0 })
          );
      }
      function s() {
        window.customElements &&
          customElements.polyfillWrapFlushCallback &&
          customElements.polyfillWrapFlushCallback(function (e) {
            (t = e), o && t();
          });
      }
      function r() {
        window.HTMLTemplateElement &&
          HTMLTemplateElement.bootstrap &&
          HTMLTemplateElement.bootstrap(window.document),
          (e = !0),
          a().then(i);
      }
      function a() {
        o = !1;
        var e = n.map(function (t) {
          return t instanceof Function ? t() : t;
        });
        return (
          (n = []),
          Promise.all(e)
            .then(function () {
              (o = !0), t && t();
            })
            .catch(function (t) {
              console.error(t);
            })
        );
      }
      (window.WebComponents = window.WebComponents || {}),
        (window.WebComponents.ready = window.WebComponents.ready || !1),
        (window.WebComponents.waitFor =
          window.WebComponents.waitFor ||
          function (t) {
            t && (n.push(t), e && a());
          }),
        (window.WebComponents._batchCustomElements = s);
      var l = 'webcomponents-loader.js',
        d = [];
      (!('attachShadow' in Element.prototype) ||
        !('getRootNode' in Element.prototype) ||
        (window.ShadyDOM && window.ShadyDOM.force)) &&
        d.push('sd'),
        (window.customElements && !window.customElements.forcePolyfill) ||
          d.push('ce');
      var c = (function () {
        var t = document.createElement('template');
        if (!('content' in t)) return !0;
        if (!(t.content.cloneNode() instanceof DocumentFragment)) return !0;
        var e = document.createElement('template');
        e.content.appendChild(document.createElement('div')),
          t.content.appendChild(e);
        var n = t.cloneNode(!0);
        return (
          0 === n.content.childNodes.length ||
          0 === n.content.firstChild.content.childNodes.length
        );
      })();
      if (
        ((window.Promise && Array.from && window.URL && window.Symbol && !c) ||
          (d = ['sd-ce-pf']),
        d.length)
      ) {
        var h,
          u = 'bundles/webcomponents-' + d.join('-') + '.js';
        if (window.WebComponents.root) h = window.WebComponents.root + u;
        else {
          var p = document.querySelector('script[src*="' + l + '"]');
          h = p.src.replace(l, u);
        }
        var m = document.createElement('script');
        (m.src = h),
          'loading' === document.readyState
            ? (m.setAttribute(
                'onload',
                'window.WebComponents._batchCustomElements()'
              ),
              document.write(m.outerHTML),
              document.addEventListener('DOMContentLoaded', r))
            : (m.addEventListener('load', function () {
                s(), r();
              }),
              m.addEventListener('error', function () {
                throw new Error('Could not load polyfill bundle' + h);
              }),
              document.head.appendChild(m));
      } else
        'complete' === document.readyState
          ? ((e = !0), i())
          : (window.addEventListener('load', r),
            window.addEventListener('DOMContentLoaded', function () {
              window.removeEventListener('load', r), r();
            }));
    })();
  },
]);
