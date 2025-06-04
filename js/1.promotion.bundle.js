(window.webpackJsonp = window.webpackJsonp || []).push([[1], [function(e, t, n) {
    var i = n(5)
      , o = n(1);
    void 0 === o.jQuery && (o.jQuery = i),
    e.exports = i
}
, function(e, t, n) {
    "use strict";
    (function(t) {
        e.exports = function() {
            if ("object" == typeof globalThis)
                return globalThis;
            var e;
            try {
                e = this || new Function("return this")()
            } catch (e) {
                if ("object" == typeof window)
                    return window;
                if ("object" == typeof self)
                    return self;
                if (void 0 !== t)
                    return t
            }
            return e
        }()
    }
    ).call(this, n(7))
}
, function(e, t, n) {
    var i, o, r;
    /*! scrollwatch v2.0.1 | (c) Mon Jan 01 2018 14:27:45 GMT-0500 (EST) Evan Dull <evandull@gmail.com> | License: MIT | https://github.com/edull24/ScrollWatch.git*/
    o = [],
    void 0 === (r = "function" == typeof (i = function() {
        "use strict";
        var e = 0
          , t = {}
          , n = {
            container: window.document.documentElement,
            watch: "[data-scroll-watch]",
            watchOnce: !0,
            inViewClass: "scroll-watch-in-view",
            ignoreClass: "scroll-watch-ignore",
            debounce: !1,
            debounceTriggerLeading: !1,
            scrollDebounce: 250,
            resizeDebounce: 250,
            scrollThrottle: 250,
            resizeThrottle: 250,
            watchOffsetXLeft: 0,
            watchOffsetXRight: 0,
            watchOffsetYTop: 0,
            watchOffsetYBottom: 0,
            infiniteScroll: !1,
            infiniteOffset: 0,
            onElementInView: function() {},
            onElementOutOfView: function() {},
            onInfiniteXInView: function() {},
            onInfiniteYInView: function() {}
        }
          , i = "scrollwatchinit"
          , o = function(e, t, n) {
            var i, o;
            return t = t || 250,
            function() {
                var r = n || this
                  , s = +new Date
                  , a = arguments;
                i && i + t > s ? (window.clearTimeout(o),
                o = setTimeout((function() {
                    i = s,
                    e.apply(r, a)
                }
                ), t)) : (i = s,
                e.apply(r, a))
            }
        }
          , r = function(e, t, n) {
            var i, o, r, s, a, l = function() {
                var c = (new Date).getTime() - s;
                t > c && c >= 0 ? i = setTimeout(l, t - c) : (i = null,
                n || (a = e.apply(r, o),
                i || (r = o = null)))
            };
            return function() {
                var c = n && !i;
                return r = this,
                o = arguments,
                s = (new Date).getTime(),
                i || (i = setTimeout(l, t)),
                c && (a = e.apply(r, o),
                r = o = null),
                a
            }
        }
          , s = function() {
            var e = t[this._id].config;
            "string" == typeof e.container && (e.container = document.querySelector(e.container))
        }
          , a = function() {
            t[this._id].elements = Array.prototype.slice.call(document.querySelectorAll(t[this._id].config.watch + ":not(." + t[this._id].config.ignoreClass + ")"))
        }
          , l = function() {
            t[this._id].lastScrollPosition = g.call(this)
        }
          , c = function(e) {
            u.call(this, e),
            d.call(this, e),
            e !== i && l.call(this)
        }
          , u = function(e) {
            var n, o, r = t[this._id], s = r.elements.length, a = r.config, l = a.inViewClass, c = {
                eventType: e
            };
            for (o = 0; s > o; o++)
                n = r.elements[o],
                c.el = n,
                "scroll" === e && (c.direction = S.call(this, v.call(this))),
                x.call(this, n) ? n.classList.contains(l) || (n.classList.add(l),
                a.onElementInView.call(this, c),
                a.watchOnce && (r.elements.splice(o, 1),
                s--,
                o--,
                n.classList.add(a.ignoreClass))) : (n.classList.contains(l) || e === i) && (n.classList.remove(l),
                a.onElementOutOfView.call(this, c))
        }
          , d = function(e) {
            var n, o, r, s, a, l, c, u = t[this._id], d = u.config;
            if (d.infiniteScroll && !u.isInfiniteScrollPaused)
                for (o = ["x", "y"],
                l = ["onInfiniteXInView", "onInfiniteYInView"],
                r = d.container,
                s = T.call(this),
                a = [r.scrollWidth, r.scrollHeight],
                c = {},
                n = 0; 2 > n; n++)
                    ("scroll" === e && y.call(this, o[n]) || "resize" === e || "refresh" === e || e === i) && s[o[n]].end + d.infiniteOffset >= a[n] && (c.eventType = e,
                    "scroll" === e && (c.direction = S.call(this, o[n])),
                    d[l[n]].call(this, c))
        }
          , f = function() {
            var e = t[this._id]
              , n = p.call(this);
            n.addEventListener("scroll", e.scrollHandler, !1),
            n.addEventListener("resize", e.resizeHandler, !1)
        }
          , h = function() {
            var e = t[this._id]
              , n = p.call(this);
            n.removeEventListener("scroll", e.scrollHandler),
            n.removeEventListener("resize", e.resizeHandler)
        }
          , p = function() {
            return M.call(this) ? window : t[this._id].config.container
        }
          , b = function() {
            return {
                w: t[this._id].config.container.clientWidth,
                h: t[this._id].config.container.clientHeight
            }
        }
          , g = function() {
            var e, n = {};
            return M.call(this) ? (n.left = window.pageXOffset,
            n.top = window.pageYOffset) : (e = t[this._id].config.container,
            n.left = e.scrollLeft,
            n.top = e.scrollTop),
            n
        }
          , T = function() {
            var e = {
                x: {},
                y: {}
            }
              , t = g.call(this)
              , n = b.call(this);
            return e.x.start = t.left,
            e.x.end = e.x.start + n.w,
            e.x.size = e.x.end - e.x.start,
            e.y.start = t.top,
            e.y.end = e.y.start + n.h,
            e.y.size = e.y.end - e.y.start,
            e
        }
          , m = function(e) {
            var n, i = {
                x: {},
                y: {}
            }, o = T.call(this), r = e.getBoundingClientRect();
            return M.call(this) ? (i.x.start = r.left + o.x.start,
            i.x.end = r.right + o.x.start,
            i.y.start = r.top + o.y.start,
            i.y.end = r.bottom + o.y.start) : (n = t[this._id].config.container.getBoundingClientRect(),
            i.x.start = r.left - n.left + o.x.start,
            i.x.end = i.x.start + r.width,
            i.y.start = r.top - n.top + o.y.start,
            i.y.end = i.y.start + r.height),
            i.x.size = i.x.end - i.x.start,
            i.y.size = i.y.end - i.y.start,
            i
        }
          , v = function() {
            return y.call(this, "x") ? "x" : y.call(this, "y") ? "y" : void 0
        }
          , S = function(e) {
            var n = {
                x: ["right", "left"],
                y: ["down", "up"]
            }
              , i = {
                x: "left",
                y: "top"
            }
              , o = t[this._id].lastScrollPosition;
            return g.call(this)[i[e]] > o[i[e]] ? n[e][0] : n[e][1]
        }
          , y = function(e) {
            var n = {
                x: "left",
                y: "top"
            }
              , i = t[this._id].lastScrollPosition;
            return g.call(this)[n[e]] !== i[n[e]]
        }
          , x = function(e) {
            var t = T.call(this)
              , n = m.call(this, e);
            return P.call(this, n, t) && A.call(this, n, t)
        }
          , P = function(e, n) {
            var i = t[this._id].config;
            return e.y.start < n.y.end + i.watchOffsetYBottom && e.y.end > n.y.start - i.watchOffsetYTop
        }
          , A = function(e, n) {
            var i = t[this._id].config;
            return e.x.start < n.x.end + i.watchOffsetXRight && e.x.end > n.x.start - i.watchOffsetXLeft
        }
          , M = function() {
            return t[this._id].config.container === window.document.documentElement
        }
          , w = function(e) {
            !function(e) {
                var t, n, i, o = arguments.length;
                for (e = e || {},
                t = 1; o > t; t++)
                    if (i = arguments[t])
                        for (n in i)
                            i.hasOwnProperty(n) && (e[n] = i[n])
            }(t[this._id].config, n, e)
        }
          , C = function(e) {
            var n = e.type;
            t[this._id] && ("resize" === n || y.call(this, "x") || y.call(this, "y")) && c.call(this, n)
        }
          , G = function(n) {
            var l;
            return this instanceof G ? (Object.defineProperty(this, "_id", {
                value: e++
            }),
            l = t[this._id] = {
                config: {},
                elements: [],
                lastScrollPosition: {
                    top: 0,
                    left: 0
                },
                isInfiniteScrollPaused: !1
            },
            w.call(this, n),
            l.config.debounce ? (l.scrollHandler = r(C.bind(this), l.config.scrollDebounce, l.config.debounceTriggerLeading),
            l.resizeHandler = r(C.bind(this), l.config.resizeDebounce, l.config.debounceTriggerLeading)) : (l.scrollHandler = o(C.bind(this), l.config.scrollThrottle, this),
            l.resizeHandler = o(C.bind(this), l.config.resizeThrottle, this)),
            s.call(this),
            f.call(this),
            a.call(this),
            void c.call(this, i)) : new G(n)
        };
        return G.prototype = {
            refresh: function() {
                a.call(this),
                c.call(this, "refresh")
            },
            destroy: function() {
                h.call(this),
                delete t[this._id]
            },
            updateWatchOffsetXLeft: function(e) {
                t[this._id].config.watchOffsetXLeft = e
            },
            updateWatchOffsetXRight: function(e) {
                t[this._id].config.watchOffsetXRight = e
            },
            updateWatchOffsetYTop: function(e) {
                t[this._id].config.watchOffsetYTop = e
            },
            updateWatchOffsetYBottom: function(e) {
                t[this._id].config.watchOffsetYBottom = e
            },
            pauseInfiniteScroll: function() {
                t[this._id].isInfiniteScrollPaused = !0
            },
            resumeInfiniteScroll: function() {
                t[this._id].isInfiniteScrollPaused = !1
            }
        },
        G
    }
    ) ? i.apply(t, o) : i) || (e.exports = r)
}
, , , function(e, t, n) {
    var i = n(6)
      , o = n(1);
    void 0 === o.$ && (o.$ = i),
    e.exports = i
}
, function(e, t, n) {
    var i;
    /*!
 * jQuery JavaScript Library v3.6.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-03-02T17:08Z
 */
    !function(t, n) {
        "use strict";
        "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
            if (!e.document)
                throw new Error("jQuery requires a window with a document");
            return n(e)
        }
        : n(t)
    }("undefined" != typeof window ? window : this, (function(n, o) {
        "use strict";
        var r = []
          , s = Object.getPrototypeOf
          , a = r.slice
          , l = r.flat ? function(e) {
            return r.flat.call(e)
        }
        : function(e) {
            return r.concat.apply([], e)
        }
          , c = r.push
          , u = r.indexOf
          , d = {}
          , f = d.toString
          , h = d.hasOwnProperty
          , p = h.toString
          , b = p.call(Object)
          , g = {}
          , T = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
        }
          , m = function(e) {
            return null != e && e === e.window
        }
          , v = n.document
          , S = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };
        function y(e, t, n) {
            var i, o, r = (n = n || v).createElement("script");
            if (r.text = e,
            t)
                for (i in S)
                    (o = t[i] || t.getAttribute && t.getAttribute(i)) && r.setAttribute(i, o);
            n.head.appendChild(r).parentNode.removeChild(r)
        }
        function x(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[f.call(e)] || "object" : typeof e
        }
        var P = function(e, t) {
            return new P.fn.init(e,t)
        };
        function A(e) {
            var t = !!e && "length"in e && e.length
              , n = x(e);
            return !T(e) && !m(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }
        P.fn = P.prototype = {
            jquery: "3.6.0",
            constructor: P,
            length: 0,
            toArray: function() {
                return a.call(this)
            },
            get: function(e) {
                return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function(e) {
                var t = P.merge(this.constructor(), e);
                return t.prevObject = this,
                t
            },
            each: function(e) {
                return P.each(this, e)
            },
            map: function(e) {
                return this.pushStack(P.map(this, (function(t, n) {
                    return e.call(t, n, t)
                }
                )))
            },
            slice: function() {
                return this.pushStack(a.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            even: function() {
                return this.pushStack(P.grep(this, (function(e, t) {
                    return (t + 1) % 2
                }
                )))
            },
            odd: function() {
                return this.pushStack(P.grep(this, (function(e, t) {
                    return t % 2
                }
                )))
            },
            eq: function(e) {
                var t = this.length
                  , n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: c,
            sort: r.sort,
            splice: r.splice
        },
        P.extend = P.fn.extend = function() {
            var e, t, n, i, o, r, s = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
            for ("boolean" == typeof s && (c = s,
            s = arguments[a] || {},
            a++),
            "object" == typeof s || T(s) || (s = {}),
            a === l && (s = this,
            a--); a < l; a++)
                if (null != (e = arguments[a]))
                    for (t in e)
                        i = e[t],
                        "__proto__" !== t && s !== i && (c && i && (P.isPlainObject(i) || (o = Array.isArray(i))) ? (n = s[t],
                        r = o && !Array.isArray(n) ? [] : o || P.isPlainObject(n) ? n : {},
                        o = !1,
                        s[t] = P.extend(c, r, i)) : void 0 !== i && (s[t] = i));
            return s
        }
        ,
        P.extend({
            expando: "jQuery" + ("3.6.0" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isPlainObject: function(e) {
                var t, n;
                return !(!e || "[object Object]" !== f.call(e)) && (!(t = s(e)) || "function" == typeof (n = h.call(t, "constructor") && t.constructor) && p.call(n) === b)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e)
                    return !1;
                return !0
            },
            globalEval: function(e, t, n) {
                y(e, {
                    nonce: t && t.nonce
                }, n)
            },
            each: function(e, t) {
                var n, i = 0;
                if (A(e))
                    for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++)
                        ;
                else
                    for (i in e)
                        if (!1 === t.call(e[i], i, e[i]))
                            break;
                return e
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (A(Object(e)) ? P.merge(n, "string" == typeof e ? [e] : e) : c.call(n, e)),
                n
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : u.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, i = 0, o = e.length; i < n; i++)
                    e[o++] = t[i];
                return e.length = o,
                e
            },
            grep: function(e, t, n) {
                for (var i = [], o = 0, r = e.length, s = !n; o < r; o++)
                    !t(e[o], o) !== s && i.push(e[o]);
                return i
            },
            map: function(e, t, n) {
                var i, o, r = 0, s = [];
                if (A(e))
                    for (i = e.length; r < i; r++)
                        null != (o = t(e[r], r, n)) && s.push(o);
                else
                    for (r in e)
                        null != (o = t(e[r], r, n)) && s.push(o);
                return l(s)
            },
            guid: 1,
            support: g
        }),
        "function" == typeof Symbol && (P.fn[Symbol.iterator] = r[Symbol.iterator]),
        P.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
            d["[object " + t + "]"] = t.toLowerCase()
        }
        ));
        var M = /*!
 * Sizzle CSS Selector Engine v2.3.6
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2021-02-16
 */
        function(e) {
            var t, n, i, o, r, s, a, l, c, u, d, f, h, p, b, g, T, m, v, S = "sizzle" + 1 * new Date, y = e.document, x = 0, P = 0, A = le(), M = le(), w = le(), C = le(), G = function(e, t) {
                return e === t && (d = !0),
                0
            }, E = {}.hasOwnProperty, H = [], B = H.pop, D = H.push, I = H.push, L = H.slice, N = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t)
                        return n;
                return -1
            }, O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", k = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\[\\da-fA-F]{1,6}" + k + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", F = "\\[" + k + "*(" + R + ")(?:" + k + "*([*^$|!~]?=)" + k + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + k + "*\\]", V = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|.*)\\)|)", $ = new RegExp(k + "+","g"), X = new RegExp("^" + k + "+|((?:^|[^\\\\])(?:\\\\.)*)" + k + "+$","g"), W = new RegExp("^" + k + "*," + k + "*"), z = new RegExp("^" + k + "*([>+~]|" + k + ")" + k + "*"), j = new RegExp(k + "|>"), _ = new RegExp(V), q = new RegExp("^" + R + "$"), U = {
                ID: new RegExp("^#(" + R + ")"),
                CLASS: new RegExp("^\\.(" + R + ")"),
                TAG: new RegExp("^(" + R + "|[*])"),
                ATTR: new RegExp("^" + F),
                PSEUDO: new RegExp("^" + V),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + k + "*(even|odd|(([+-]|)(\\d*)n|)" + k + "*(?:([+-]|)" + k + "*(\\d+)|))" + k + "*\\)|)","i"),
                bool: new RegExp("^(?:" + O + ")$","i"),
                needsContext: new RegExp("^" + k + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + k + "*((?:-\\d)?\\d*)" + k + "*\\)|)(?=[^-]|$)","i")
            }, K = /HTML$/i, Y = /^(?:input|select|textarea|button)$/i, Q = /^h\d$/i, Z = /^[^{]+\{\s*\[native \w/, J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\[\\da-fA-F]{1,6}" + k + "?|\\\\([^\\r\\n\\f])","g"), ne = function(e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
            }, ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, oe = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            }, re = function() {
                f()
            }, se = Se((function(e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }
            ), {
                dir: "parentNode",
                next: "legend"
            });
            try {
                I.apply(H = L.call(y.childNodes), y.childNodes),
                H[y.childNodes.length].nodeType
            } catch (e) {
                I = {
                    apply: H.length ? function(e, t) {
                        D.apply(e, L.call(t))
                    }
                    : function(e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++]; )
                            ;
                        e.length = n - 1
                    }
                }
            }
            function ae(e, t, i, o) {
                var r, a, c, u, d, p, T, m = t && t.ownerDocument, y = t ? t.nodeType : 9;
                if (i = i || [],
                "string" != typeof e || !e || 1 !== y && 9 !== y && 11 !== y)
                    return i;
                if (!o && (f(t),
                t = t || h,
                b)) {
                    if (11 !== y && (d = J.exec(e)))
                        if (r = d[1]) {
                            if (9 === y) {
                                if (!(c = t.getElementById(r)))
                                    return i;
                                if (c.id === r)
                                    return i.push(c),
                                    i
                            } else if (m && (c = m.getElementById(r)) && v(t, c) && c.id === r)
                                return i.push(c),
                                i
                        } else {
                            if (d[2])
                                return I.apply(i, t.getElementsByTagName(e)),
                                i;
                            if ((r = d[3]) && n.getElementsByClassName && t.getElementsByClassName)
                                return I.apply(i, t.getElementsByClassName(r)),
                                i
                        }
                    if (n.qsa && !C[e + " "] && (!g || !g.test(e)) && (1 !== y || "object" !== t.nodeName.toLowerCase())) {
                        if (T = e,
                        m = t,
                        1 === y && (j.test(e) || z.test(e))) {
                            for ((m = ee.test(e) && Te(t.parentNode) || t) === t && n.scope || ((u = t.getAttribute("id")) ? u = u.replace(ie, oe) : t.setAttribute("id", u = S)),
                            a = (p = s(e)).length; a--; )
                                p[a] = (u ? "#" + u : ":scope") + " " + ve(p[a]);
                            T = p.join(",")
                        }
                        try {
                            return I.apply(i, m.querySelectorAll(T)),
                            i
                        } catch (t) {
                            C(e, !0)
                        } finally {
                            u === S && t.removeAttribute("id")
                        }
                    }
                }
                return l(e.replace(X, "$1"), t, i, o)
            }
            function le() {
                var e = [];
                return function t(n, o) {
                    return e.push(n + " ") > i.cacheLength && delete t[e.shift()],
                    t[n + " "] = o
                }
            }
            function ce(e) {
                return e[S] = !0,
                e
            }
            function ue(e) {
                var t = h.createElement("fieldset");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t),
                    t = null
                }
            }
            function de(e, t) {
                for (var n = e.split("|"), o = n.length; o--; )
                    i.attrHandle[n[o]] = t
            }
            function fe(e, t) {
                var n = t && e
                  , i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (i)
                    return i;
                if (n)
                    for (; n = n.nextSibling; )
                        if (n === t)
                            return -1;
                return e ? 1 : -1
            }
            function he(e) {
                return function(t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }
            function pe(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }
            function be(e) {
                return function(t) {
                    return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && se(t) === e : t.disabled === e : "label"in t && t.disabled === e
                }
            }
            function ge(e) {
                return ce((function(t) {
                    return t = +t,
                    ce((function(n, i) {
                        for (var o, r = e([], n.length, t), s = r.length; s--; )
                            n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                    }
                    ))
                }
                ))
            }
            function Te(e) {
                return e && void 0 !== e.getElementsByTagName && e
            }
            for (t in n = ae.support = {},
            r = ae.isXML = function(e) {
                var t = e && e.namespaceURI
                  , n = e && (e.ownerDocument || e).documentElement;
                return !K.test(t || n && n.nodeName || "HTML")
            }
            ,
            f = ae.setDocument = function(e) {
                var t, o, s = e ? e.ownerDocument || e : y;
                return s != h && 9 === s.nodeType && s.documentElement ? (p = (h = s).documentElement,
                b = !r(h),
                y != h && (o = h.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", re, !1) : o.attachEvent && o.attachEvent("onunload", re)),
                n.scope = ue((function(e) {
                    return p.appendChild(e).appendChild(h.createElement("div")),
                    void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                }
                )),
                n.attributes = ue((function(e) {
                    return e.className = "i",
                    !e.getAttribute("className")
                }
                )),
                n.getElementsByTagName = ue((function(e) {
                    return e.appendChild(h.createComment("")),
                    !e.getElementsByTagName("*").length
                }
                )),
                n.getElementsByClassName = Z.test(h.getElementsByClassName),
                n.getById = ue((function(e) {
                    return p.appendChild(e).id = S,
                    !h.getElementsByName || !h.getElementsByName(S).length
                }
                )),
                n.getById ? (i.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }
                ,
                i.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && b) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }
                ) : (i.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }
                ,
                i.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && b) {
                        var n, i, o, r = t.getElementById(e);
                        if (r) {
                            if ((n = r.getAttributeNode("id")) && n.value === e)
                                return [r];
                            for (o = t.getElementsByName(e),
                            i = 0; r = o[i++]; )
                                if ((n = r.getAttributeNode("id")) && n.value === e)
                                    return [r]
                        }
                        return []
                    }
                }
                ),
                i.find.TAG = n.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                }
                : function(e, t) {
                    var n, i = [], o = 0, r = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = r[o++]; )
                            1 === n.nodeType && i.push(n);
                        return i
                    }
                    return r
                }
                ,
                i.find.CLASS = n.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && b)
                        return t.getElementsByClassName(e)
                }
                ,
                T = [],
                g = [],
                (n.qsa = Z.test(h.querySelectorAll)) && (ue((function(e) {
                    var t;
                    p.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                    e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + k + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length || g.push("\\[" + k + "*(?:value|" + O + ")"),
                    e.querySelectorAll("[id~=" + S + "-]").length || g.push("~="),
                    (t = h.createElement("input")).setAttribute("name", ""),
                    e.appendChild(t),
                    e.querySelectorAll("[name='']").length || g.push("\\[" + k + "*name" + k + "*=" + k + "*(?:''|\"\")"),
                    e.querySelectorAll(":checked").length || g.push(":checked"),
                    e.querySelectorAll("a#" + S + "+*").length || g.push(".#.+[+~]"),
                    e.querySelectorAll("\\\f"),
                    g.push("[\\r\\n\\f]")
                }
                )),
                ue((function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = h.createElement("input");
                    t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("name", "D"),
                    e.querySelectorAll("[name=d]").length && g.push("name" + k + "*[*^$|!~]?="),
                    2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"),
                    p.appendChild(e).disabled = !0,
                    2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    g.push(",.*:")
                }
                ))),
                (n.matchesSelector = Z.test(m = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ue((function(e) {
                    n.disconnectedMatch = m.call(e, "*"),
                    m.call(e, "[s!='']:x"),
                    T.push("!=", V)
                }
                )),
                g = g.length && new RegExp(g.join("|")),
                T = T.length && new RegExp(T.join("|")),
                t = Z.test(p.compareDocumentPosition),
                v = t || Z.test(p.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e
                      , i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                }
                : function(e, t) {
                    if (t)
                        for (; t = t.parentNode; )
                            if (t === e)
                                return !0;
                    return !1
                }
                ,
                G = t ? function(e, t) {
                    if (e === t)
                        return d = !0,
                        0;
                    var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return i || (1 & (i = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e == h || e.ownerDocument == y && v(y, e) ? -1 : t == h || t.ownerDocument == y && v(y, t) ? 1 : u ? N(u, e) - N(u, t) : 0 : 4 & i ? -1 : 1)
                }
                : function(e, t) {
                    if (e === t)
                        return d = !0,
                        0;
                    var n, i = 0, o = e.parentNode, r = t.parentNode, s = [e], a = [t];
                    if (!o || !r)
                        return e == h ? -1 : t == h ? 1 : o ? -1 : r ? 1 : u ? N(u, e) - N(u, t) : 0;
                    if (o === r)
                        return fe(e, t);
                    for (n = e; n = n.parentNode; )
                        s.unshift(n);
                    for (n = t; n = n.parentNode; )
                        a.unshift(n);
                    for (; s[i] === a[i]; )
                        i++;
                    return i ? fe(s[i], a[i]) : s[i] == y ? -1 : a[i] == y ? 1 : 0
                }
                ,
                h) : h
            }
            ,
            ae.matches = function(e, t) {
                return ae(e, null, null, t)
            }
            ,
            ae.matchesSelector = function(e, t) {
                if (f(e),
                n.matchesSelector && b && !C[t + " "] && (!T || !T.test(t)) && (!g || !g.test(t)))
                    try {
                        var i = m.call(e, t);
                        if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                            return i
                    } catch (e) {
                        C(t, !0)
                    }
                return ae(t, h, null, [e]).length > 0
            }
            ,
            ae.contains = function(e, t) {
                return (e.ownerDocument || e) != h && f(e),
                v(e, t)
            }
            ,
            ae.attr = function(e, t) {
                (e.ownerDocument || e) != h && f(e);
                var o = i.attrHandle[t.toLowerCase()]
                  , r = o && E.call(i.attrHandle, t.toLowerCase()) ? o(e, t, !b) : void 0;
                return void 0 !== r ? r : n.attributes || !b ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }
            ,
            ae.escape = function(e) {
                return (e + "").replace(ie, oe)
            }
            ,
            ae.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }
            ,
            ae.uniqueSort = function(e) {
                var t, i = [], o = 0, r = 0;
                if (d = !n.detectDuplicates,
                u = !n.sortStable && e.slice(0),
                e.sort(G),
                d) {
                    for (; t = e[r++]; )
                        t === e[r] && (o = i.push(r));
                    for (; o--; )
                        e.splice(i[o], 1)
                }
                return u = null,
                e
            }
            ,
            o = ae.getText = function(e) {
                var t, n = "", i = 0, r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent)
                            return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling)
                            n += o(e)
                    } else if (3 === r || 4 === r)
                        return e.nodeValue
                } else
                    for (; t = e[i++]; )
                        n += o(t);
                return n
            }
            ,
            (i = ae.selectors = {
                cacheLength: 50,
                createPseudo: ce,
                match: U,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(te, ne),
                        e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne),
                        "~=" === e[2] && (e[3] = " " + e[3] + " "),
                        e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(),
                        "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]),
                        e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                        e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]),
                        e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return U.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && _.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                        e[2] = n.slice(0, t)),
                        e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        }
                        : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = A[e + " "];
                        return t || (t = new RegExp("(^|" + k + ")" + e + "(" + k + "|$)")) && A(e, (function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        }
                        ))
                    },
                    ATTR: function(e, t, n) {
                        return function(i) {
                            var o = ae.attr(i, e);
                            return null == o ? "!=" === t : !t || (o += "",
                            "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? (" " + o.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(e, t, n, i, o) {
                        var r = "nth" !== e.slice(0, 3)
                          , s = "last" !== e.slice(-4)
                          , a = "of-type" === t;
                        return 1 === i && 0 === o ? function(e) {
                            return !!e.parentNode
                        }
                        : function(t, n, l) {
                            var c, u, d, f, h, p, b = r !== s ? "nextSibling" : "previousSibling", g = t.parentNode, T = a && t.nodeName.toLowerCase(), m = !l && !a, v = !1;
                            if (g) {
                                if (r) {
                                    for (; b; ) {
                                        for (f = t; f = f[b]; )
                                            if (a ? f.nodeName.toLowerCase() === T : 1 === f.nodeType)
                                                return !1;
                                        p = b = "only" === e && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [s ? g.firstChild : g.lastChild],
                                s && m) {
                                    for (v = (h = (c = (u = (d = (f = g)[S] || (f[S] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === x && c[1]) && c[2],
                                    f = h && g.childNodes[h]; f = ++h && f && f[b] || (v = h = 0) || p.pop(); )
                                        if (1 === f.nodeType && ++v && f === t) {
                                            u[e] = [x, h, v];
                                            break
                                        }
                                } else if (m && (v = h = (c = (u = (d = (f = t)[S] || (f[S] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === x && c[1]),
                                !1 === v)
                                    for (; (f = ++h && f && f[b] || (v = h = 0) || p.pop()) && ((a ? f.nodeName.toLowerCase() !== T : 1 !== f.nodeType) || !++v || (m && ((u = (d = f[S] || (f[S] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] = [x, v]),
                                    f !== t)); )
                                        ;
                                return (v -= o) === i || v % i == 0 && v / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, o = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                        return o[S] ? o(t) : o.length > 1 ? (n = [e, e, "", t],
                        i.setFilters.hasOwnProperty(e.toLowerCase()) ? ce((function(e, n) {
                            for (var i, r = o(e, t), s = r.length; s--; )
                                e[i = N(e, r[s])] = !(n[i] = r[s])
                        }
                        )) : function(e) {
                            return o(e, 0, n)
                        }
                        ) : o
                    }
                },
                pseudos: {
                    not: ce((function(e) {
                        var t = []
                          , n = []
                          , i = a(e.replace(X, "$1"));
                        return i[S] ? ce((function(e, t, n, o) {
                            for (var r, s = i(e, null, o, []), a = e.length; a--; )
                                (r = s[a]) && (e[a] = !(t[a] = r))
                        }
                        )) : function(e, o, r) {
                            return t[0] = e,
                            i(t, null, r, n),
                            t[0] = null,
                            !n.pop()
                        }
                    }
                    )),
                    has: ce((function(e) {
                        return function(t) {
                            return ae(e, t).length > 0
                        }
                    }
                    )),
                    contains: ce((function(e) {
                        return e = e.replace(te, ne),
                        function(t) {
                            return (t.textContent || o(t)).indexOf(e) > -1
                        }
                    }
                    )),
                    lang: ce((function(e) {
                        return q.test(e || "") || ae.error("unsupported lang: " + e),
                        e = e.replace(te, ne).toLowerCase(),
                        function(t) {
                            var n;
                            do {
                                if (n = b ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                    return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                    }
                    )),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === p
                    },
                    focus: function(e) {
                        return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: be(!1),
                    disabled: be(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex,
                        !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6)
                                return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !i.pseudos.empty(e)
                    },
                    header: function(e) {
                        return Q.test(e.nodeName)
                    },
                    input: function(e) {
                        return Y.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: ge((function() {
                        return [0]
                    }
                    )),
                    last: ge((function(e, t) {
                        return [t - 1]
                    }
                    )),
                    eq: ge((function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }
                    )),
                    even: ge((function(e, t) {
                        for (var n = 0; n < t; n += 2)
                            e.push(n);
                        return e
                    }
                    )),
                    odd: ge((function(e, t) {
                        for (var n = 1; n < t; n += 2)
                            e.push(n);
                        return e
                    }
                    )),
                    lt: ge((function(e, t, n) {
                        for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0; )
                            e.push(i);
                        return e
                    }
                    )),
                    gt: ge((function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t; )
                            e.push(i);
                        return e
                    }
                    ))
                }
            }).pseudos.nth = i.pseudos.eq,
            {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            })
                i.pseudos[t] = he(t);
            for (t in {
                submit: !0,
                reset: !0
            })
                i.pseudos[t] = pe(t);
            function me() {}
            function ve(e) {
                for (var t = 0, n = e.length, i = ""; t < n; t++)
                    i += e[t].value;
                return i
            }
            function Se(e, t, n) {
                var i = t.dir
                  , o = t.next
                  , r = o || i
                  , s = n && "parentNode" === r
                  , a = P++;
                return t.first ? function(t, n, o) {
                    for (; t = t[i]; )
                        if (1 === t.nodeType || s)
                            return e(t, n, o);
                    return !1
                }
                : function(t, n, l) {
                    var c, u, d, f = [x, a];
                    if (l) {
                        for (; t = t[i]; )
                            if ((1 === t.nodeType || s) && e(t, n, l))
                                return !0
                    } else
                        for (; t = t[i]; )
                            if (1 === t.nodeType || s)
                                if (u = (d = t[S] || (t[S] = {}))[t.uniqueID] || (d[t.uniqueID] = {}),
                                o && o === t.nodeName.toLowerCase())
                                    t = t[i] || t;
                                else {
                                    if ((c = u[r]) && c[0] === x && c[1] === a)
                                        return f[2] = c[2];
                                    if (u[r] = f,
                                    f[2] = e(t, n, l))
                                        return !0
                                }
                    return !1
                }
            }
            function ye(e) {
                return e.length > 1 ? function(t, n, i) {
                    for (var o = e.length; o--; )
                        if (!e[o](t, n, i))
                            return !1;
                    return !0
                }
                : e[0]
            }
            function xe(e, t, n, i, o) {
                for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++)
                    (r = e[a]) && (n && !n(r, i, o) || (s.push(r),
                    c && t.push(a)));
                return s
            }
            function Pe(e, t, n, i, o, r) {
                return i && !i[S] && (i = Pe(i)),
                o && !o[S] && (o = Pe(o, r)),
                ce((function(r, s, a, l) {
                    var c, u, d, f = [], h = [], p = s.length, b = r || function(e, t, n) {
                        for (var i = 0, o = t.length; i < o; i++)
                            ae(e, t[i], n);
                        return n
                    }(t || "*", a.nodeType ? [a] : a, []), g = !e || !r && t ? b : xe(b, f, e, a, l), T = n ? o || (r ? e : p || i) ? [] : s : g;
                    if (n && n(g, T, a, l),
                    i)
                        for (c = xe(T, h),
                        i(c, [], a, l),
                        u = c.length; u--; )
                            (d = c[u]) && (T[h[u]] = !(g[h[u]] = d));
                    if (r) {
                        if (o || e) {
                            if (o) {
                                for (c = [],
                                u = T.length; u--; )
                                    (d = T[u]) && c.push(g[u] = d);
                                o(null, T = [], c, l)
                            }
                            for (u = T.length; u--; )
                                (d = T[u]) && (c = o ? N(r, d) : f[u]) > -1 && (r[c] = !(s[c] = d))
                        }
                    } else
                        T = xe(T === s ? T.splice(p, T.length) : T),
                        o ? o(null, s, T, l) : I.apply(s, T)
                }
                ))
            }
            function Ae(e) {
                for (var t, n, o, r = e.length, s = i.relative[e[0].type], a = s || i.relative[" "], l = s ? 1 : 0, u = Se((function(e) {
                    return e === t
                }
                ), a, !0), d = Se((function(e) {
                    return N(t, e) > -1
                }
                ), a, !0), f = [function(e, n, i) {
                    var o = !s && (i || n !== c) || ((t = n).nodeType ? u(e, n, i) : d(e, n, i));
                    return t = null,
                    o
                }
                ]; l < r; l++)
                    if (n = i.relative[e[l].type])
                        f = [Se(ye(f), n)];
                    else {
                        if ((n = i.filter[e[l].type].apply(null, e[l].matches))[S]) {
                            for (o = ++l; o < r && !i.relative[e[o].type]; o++)
                                ;
                            return Pe(l > 1 && ye(f), l > 1 && ve(e.slice(0, l - 1).concat({
                                value: " " === e[l - 2].type ? "*" : ""
                            })).replace(X, "$1"), n, l < o && Ae(e.slice(l, o)), o < r && Ae(e = e.slice(o)), o < r && ve(e))
                        }
                        f.push(n)
                    }
                return ye(f)
            }
            return me.prototype = i.filters = i.pseudos,
            i.setFilters = new me,
            s = ae.tokenize = function(e, t) {
                var n, o, r, s, a, l, c, u = M[e + " "];
                if (u)
                    return t ? 0 : u.slice(0);
                for (a = e,
                l = [],
                c = i.preFilter; a; ) {
                    for (s in n && !(o = W.exec(a)) || (o && (a = a.slice(o[0].length) || a),
                    l.push(r = [])),
                    n = !1,
                    (o = z.exec(a)) && (n = o.shift(),
                    r.push({
                        value: n,
                        type: o[0].replace(X, " ")
                    }),
                    a = a.slice(n.length)),
                    i.filter)
                        !(o = U[s].exec(a)) || c[s] && !(o = c[s](o)) || (n = o.shift(),
                        r.push({
                            value: n,
                            type: s,
                            matches: o
                        }),
                        a = a.slice(n.length));
                    if (!n)
                        break
                }
                return t ? a.length : a ? ae.error(e) : M(e, l).slice(0)
            }
            ,
            a = ae.compile = function(e, t) {
                var n, o = [], r = [], a = w[e + " "];
                if (!a) {
                    for (t || (t = s(e)),
                    n = t.length; n--; )
                        (a = Ae(t[n]))[S] ? o.push(a) : r.push(a);
                    (a = w(e, function(e, t) {
                        var n = t.length > 0
                          , o = e.length > 0
                          , r = function(r, s, a, l, u) {
                            var d, p, g, T = 0, m = "0", v = r && [], S = [], y = c, P = r || o && i.find.TAG("*", u), A = x += null == y ? 1 : Math.random() || .1, M = P.length;
                            for (u && (c = s == h || s || u); m !== M && null != (d = P[m]); m++) {
                                if (o && d) {
                                    for (p = 0,
                                    s || d.ownerDocument == h || (f(d),
                                    a = !b); g = e[p++]; )
                                        if (g(d, s || h, a)) {
                                            l.push(d);
                                            break
                                        }
                                    u && (x = A)
                                }
                                n && ((d = !g && d) && T--,
                                r && v.push(d))
                            }
                            if (T += m,
                            n && m !== T) {
                                for (p = 0; g = t[p++]; )
                                    g(v, S, s, a);
                                if (r) {
                                    if (T > 0)
                                        for (; m--; )
                                            v[m] || S[m] || (S[m] = B.call(l));
                                    S = xe(S)
                                }
                                I.apply(l, S),
                                u && !r && S.length > 0 && T + t.length > 1 && ae.uniqueSort(l)
                            }
                            return u && (x = A,
                            c = y),
                            v
                        };
                        return n ? ce(r) : r
                    }(r, o))).selector = e
                }
                return a
            }
            ,
            l = ae.select = function(e, t, n, o) {
                var r, l, c, u, d, f = "function" == typeof e && e, h = !o && s(e = f.selector || e);
                if (n = n || [],
                1 === h.length) {
                    if ((l = h[0] = h[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && b && i.relative[l[1].type]) {
                        if (!(t = (i.find.ID(c.matches[0].replace(te, ne), t) || [])[0]))
                            return n;
                        f && (t = t.parentNode),
                        e = e.slice(l.shift().value.length)
                    }
                    for (r = U.needsContext.test(e) ? 0 : l.length; r-- && (c = l[r],
                    !i.relative[u = c.type]); )
                        if ((d = i.find[u]) && (o = d(c.matches[0].replace(te, ne), ee.test(l[0].type) && Te(t.parentNode) || t))) {
                            if (l.splice(r, 1),
                            !(e = o.length && ve(l)))
                                return I.apply(n, o),
                                n;
                            break
                        }
                }
                return (f || a(e, h))(o, t, !b, n, !t || ee.test(e) && Te(t.parentNode) || t),
                n
            }
            ,
            n.sortStable = S.split("").sort(G).join("") === S,
            n.detectDuplicates = !!d,
            f(),
            n.sortDetached = ue((function(e) {
                return 1 & e.compareDocumentPosition(h.createElement("fieldset"))
            }
            )),
            ue((function(e) {
                return e.innerHTML = "<a href='#'></a>",
                "#" === e.firstChild.getAttribute("href")
            }
            )) || de("type|href|height|width", (function(e, t, n) {
                if (!n)
                    return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }
            )),
            n.attributes && ue((function(e) {
                return e.innerHTML = "<input/>",
                e.firstChild.setAttribute("value", ""),
                "" === e.firstChild.getAttribute("value")
            }
            )) || de("value", (function(e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase())
                    return e.defaultValue
            }
            )),
            ue((function(e) {
                return null == e.getAttribute("disabled")
            }
            )) || de(O, (function(e, t, n) {
                var i;
                if (!n)
                    return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }
            )),
            ae
        }(n);
        P.find = M,
        P.expr = M.selectors,
        P.expr[":"] = P.expr.pseudos,
        P.uniqueSort = P.unique = M.uniqueSort,
        P.text = M.getText,
        P.isXMLDoc = M.isXML,
        P.contains = M.contains,
        P.escapeSelector = M.escape;
        var w = function(e, t, n) {
            for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                if (1 === e.nodeType) {
                    if (o && P(e).is(n))
                        break;
                    i.push(e)
                }
            return i
        }
          , C = function(e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        }
          , G = P.expr.match.needsContext;
        function E(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }
        var H = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function B(e, t, n) {
            return T(t) ? P.grep(e, (function(e, i) {
                return !!t.call(e, i, e) !== n
            }
            )) : t.nodeType ? P.grep(e, (function(e) {
                return e === t !== n
            }
            )) : "string" != typeof t ? P.grep(e, (function(e) {
                return u.call(t, e) > -1 !== n
            }
            )) : P.filter(t, e, n)
        }
        P.filter = function(e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === i.nodeType ? P.find.matchesSelector(i, e) ? [i] : [] : P.find.matches(e, P.grep(t, (function(e) {
                return 1 === e.nodeType
            }
            )))
        }
        ,
        P.fn.extend({
            find: function(e) {
                var t, n, i = this.length, o = this;
                if ("string" != typeof e)
                    return this.pushStack(P(e).filter((function() {
                        for (t = 0; t < i; t++)
                            if (P.contains(o[t], this))
                                return !0
                    }
                    )));
                for (n = this.pushStack([]),
                t = 0; t < i; t++)
                    P.find(e, o[t], n);
                return i > 1 ? P.uniqueSort(n) : n
            },
            filter: function(e) {
                return this.pushStack(B(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(B(this, e || [], !0))
            },
            is: function(e) {
                return !!B(this, "string" == typeof e && G.test(e) ? P(e) : e || [], !1).length
            }
        });
        var D, I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (P.fn.init = function(e, t, n) {
            var i, o;
            if (!e)
                return this;
            if (n = n || D,
            "string" == typeof e) {
                if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : I.exec(e)) || !i[1] && t)
                    return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (i[1]) {
                    if (t = t instanceof P ? t[0] : t,
                    P.merge(this, P.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : v, !0)),
                    H.test(i[1]) && P.isPlainObject(t))
                        for (i in t)
                            T(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    return this
                }
                return (o = v.getElementById(i[2])) && (this[0] = o,
                this.length = 1),
                this
            }
            return e.nodeType ? (this[0] = e,
            this.length = 1,
            this) : T(e) ? void 0 !== n.ready ? n.ready(e) : e(P) : P.makeArray(e, this)
        }
        ).prototype = P.fn,
        D = P(v);
        var L = /^(?:parents|prev(?:Until|All))/
          , N = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        function O(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; )
                ;
            return e
        }
        P.fn.extend({
            has: function(e) {
                var t = P(e, this)
                  , n = t.length;
                return this.filter((function() {
                    for (var e = 0; e < n; e++)
                        if (P.contains(this, t[e]))
                            return !0
                }
                ))
            },
            closest: function(e, t) {
                var n, i = 0, o = this.length, r = [], s = "string" != typeof e && P(e);
                if (!G.test(e))
                    for (; i < o; i++)
                        for (n = this[i]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && P.find.matchesSelector(n, e))) {
                                r.push(n);
                                break
                            }
                return this.pushStack(r.length > 1 ? P.uniqueSort(r) : r)
            },
            index: function(e) {
                return e ? "string" == typeof e ? u.call(P(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(P.uniqueSort(P.merge(this.get(), P(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }),
        P.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return w(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return w(e, "parentNode", n)
            },
            next: function(e) {
                return O(e, "nextSibling")
            },
            prev: function(e) {
                return O(e, "previousSibling")
            },
            nextAll: function(e) {
                return w(e, "nextSibling")
            },
            prevAll: function(e) {
                return w(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return w(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return w(e, "previousSibling", n)
            },
            siblings: function(e) {
                return C((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return C(e.firstChild)
            },
            contents: function(e) {
                return null != e.contentDocument && s(e.contentDocument) ? e.contentDocument : (E(e, "template") && (e = e.content || e),
                P.merge([], e.childNodes))
            }
        }, (function(e, t) {
            P.fn[e] = function(n, i) {
                var o = P.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n),
                i && "string" == typeof i && (o = P.filter(i, o)),
                this.length > 1 && (N[e] || P.uniqueSort(o),
                L.test(e) && o.reverse()),
                this.pushStack(o)
            }
        }
        ));
        var k = /[^\x20\t\r\n\f]+/g;
        function R(e) {
            return e
        }
        function F(e) {
            throw e
        }
        function V(e, t, n, i) {
            var o;
            try {
                e && T(o = e.promise) ? o.call(e).done(t).fail(n) : e && T(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i))
            } catch (e) {
                n.apply(void 0, [e])
            }
        }
        P.Callbacks = function(e) {
            e = "string" == typeof e ? function(e) {
                var t = {};
                return P.each(e.match(k) || [], (function(e, n) {
                    t[n] = !0
                }
                )),
                t
            }(e) : P.extend({}, e);
            var t, n, i, o, r = [], s = [], a = -1, l = function() {
                for (o = o || e.once,
                i = t = !0; s.length; a = -1)
                    for (n = s.shift(); ++a < r.length; )
                        !1 === r[a].apply(n[0], n[1]) && e.stopOnFalse && (a = r.length,
                        n = !1);
                e.memory || (n = !1),
                t = !1,
                o && (r = n ? [] : "")
            }, c = {
                add: function() {
                    return r && (n && !t && (a = r.length - 1,
                    s.push(n)),
                    function t(n) {
                        P.each(n, (function(n, i) {
                            T(i) ? e.unique && c.has(i) || r.push(i) : i && i.length && "string" !== x(i) && t(i)
                        }
                        ))
                    }(arguments),
                    n && !t && l()),
                    this
                },
                remove: function() {
                    return P.each(arguments, (function(e, t) {
                        for (var n; (n = P.inArray(t, r, n)) > -1; )
                            r.splice(n, 1),
                            n <= a && a--
                    }
                    )),
                    this
                },
                has: function(e) {
                    return e ? P.inArray(e, r) > -1 : r.length > 0
                },
                empty: function() {
                    return r && (r = []),
                    this
                },
                disable: function() {
                    return o = s = [],
                    r = n = "",
                    this
                },
                disabled: function() {
                    return !r
                },
                lock: function() {
                    return o = s = [],
                    n || t || (r = n = ""),
                    this
                },
                locked: function() {
                    return !!o
                },
                fireWith: function(e, n) {
                    return o || (n = [e, (n = n || []).slice ? n.slice() : n],
                    s.push(n),
                    t || l()),
                    this
                },
                fire: function() {
                    return c.fireWith(this, arguments),
                    this
                },
                fired: function() {
                    return !!i
                }
            };
            return c
        }
        ,
        P.extend({
            Deferred: function(e) {
                var t = [["notify", "progress", P.Callbacks("memory"), P.Callbacks("memory"), 2], ["resolve", "done", P.Callbacks("once memory"), P.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", P.Callbacks("once memory"), P.Callbacks("once memory"), 1, "rejected"]]
                  , i = "pending"
                  , o = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments),
                        this
                    },
                    catch: function(e) {
                        return o.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return P.Deferred((function(n) {
                            P.each(t, (function(t, i) {
                                var o = T(e[i[4]]) && e[i[4]];
                                r[i[1]]((function() {
                                    var e = o && o.apply(this, arguments);
                                    e && T(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, o ? [e] : arguments)
                                }
                                ))
                            }
                            )),
                            e = null
                        }
                        )).promise()
                    },
                    then: function(e, i, o) {
                        var r = 0;
                        function s(e, t, i, o) {
                            return function() {
                                var a = this
                                  , l = arguments
                                  , c = function() {
                                    var n, c;
                                    if (!(e < r)) {
                                        if ((n = i.apply(a, l)) === t.promise())
                                            throw new TypeError("Thenable self-resolution");
                                        c = n && ("object" == typeof n || "function" == typeof n) && n.then,
                                        T(c) ? o ? c.call(n, s(r, t, R, o), s(r, t, F, o)) : (r++,
                                        c.call(n, s(r, t, R, o), s(r, t, F, o), s(r, t, R, t.notifyWith))) : (i !== R && (a = void 0,
                                        l = [n]),
                                        (o || t.resolveWith)(a, l))
                                    }
                                }
                                  , u = o ? c : function() {
                                    try {
                                        c()
                                    } catch (n) {
                                        P.Deferred.exceptionHook && P.Deferred.exceptionHook(n, u.stackTrace),
                                        e + 1 >= r && (i !== F && (a = void 0,
                                        l = [n]),
                                        t.rejectWith(a, l))
                                    }
                                }
                                ;
                                e ? u() : (P.Deferred.getStackHook && (u.stackTrace = P.Deferred.getStackHook()),
                                n.setTimeout(u))
                            }
                        }
                        return P.Deferred((function(n) {
                            t[0][3].add(s(0, n, T(o) ? o : R, n.notifyWith)),
                            t[1][3].add(s(0, n, T(e) ? e : R)),
                            t[2][3].add(s(0, n, T(i) ? i : F))
                        }
                        )).promise()
                    },
                    promise: function(e) {
                        return null != e ? P.extend(e, o) : o
                    }
                }
                  , r = {};
                return P.each(t, (function(e, n) {
                    var s = n[2]
                      , a = n[5];
                    o[n[1]] = s.add,
                    a && s.add((function() {
                        i = a
                    }
                    ), t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock),
                    s.add(n[3].fire),
                    r[n[0]] = function() {
                        return r[n[0] + "With"](this === r ? void 0 : this, arguments),
                        this
                    }
                    ,
                    r[n[0] + "With"] = s.fireWith
                }
                )),
                o.promise(r),
                e && e.call(r, r),
                r
            },
            when: function(e) {
                var t = arguments.length
                  , n = t
                  , i = Array(n)
                  , o = a.call(arguments)
                  , r = P.Deferred()
                  , s = function(e) {
                    return function(n) {
                        i[e] = this,
                        o[e] = arguments.length > 1 ? a.call(arguments) : n,
                        --t || r.resolveWith(i, o)
                    }
                };
                if (t <= 1 && (V(e, r.done(s(n)).resolve, r.reject, !t),
                "pending" === r.state() || T(o[n] && o[n].then)))
                    return r.then();
                for (; n--; )
                    V(o[n], s(n), r.reject);
                return r.promise()
            }
        });
        var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        P.Deferred.exceptionHook = function(e, t) {
            n.console && n.console.warn && e && $.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        }
        ,
        P.readyException = function(e) {
            n.setTimeout((function() {
                throw e
            }
            ))
        }
        ;
        var X = P.Deferred();
        function W() {
            v.removeEventListener("DOMContentLoaded", W),
            n.removeEventListener("load", W),
            P.ready()
        }
        P.fn.ready = function(e) {
            return X.then(e).catch((function(e) {
                P.readyException(e)
            }
            )),
            this
        }
        ,
        P.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(e) {
                (!0 === e ? --P.readyWait : P.isReady) || (P.isReady = !0,
                !0 !== e && --P.readyWait > 0 || X.resolveWith(v, [P]))
            }
        }),
        P.ready.then = X.then,
        "complete" === v.readyState || "loading" !== v.readyState && !v.documentElement.doScroll ? n.setTimeout(P.ready) : (v.addEventListener("DOMContentLoaded", W),
        n.addEventListener("load", W));
        var z = function(e, t, n, i, o, r, s) {
            var a = 0
              , l = e.length
              , c = null == n;
            if ("object" === x(n))
                for (a in o = !0,
                n)
                    z(e, t, a, n[a], !0, r, s);
            else if (void 0 !== i && (o = !0,
            T(i) || (s = !0),
            c && (s ? (t.call(e, i),
            t = null) : (c = t,
            t = function(e, t, n) {
                return c.call(P(e), n)
            }
            )),
            t))
                for (; a < l; a++)
                    t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
            return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
        }
          , j = /^-ms-/
          , _ = /-([a-z])/g;
        function q(e, t) {
            return t.toUpperCase()
        }
        function U(e) {
            return e.replace(j, "ms-").replace(_, q)
        }
        var K = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
        function Y() {
            this.expando = P.expando + Y.uid++
        }
        Y.uid = 1,
        Y.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                return t || (t = {},
                K(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))),
                t
            },
            set: function(e, t, n) {
                var i, o = this.cache(e);
                if ("string" == typeof t)
                    o[U(t)] = n;
                else
                    for (i in t)
                        o[U(i)] = t[i];
                return o
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][U(t)]
            },
            access: function(e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
                void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, i = e[this.expando];
                if (void 0 !== i) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(U) : (t = U(t))in i ? [t] : t.match(k) || []).length;
                        for (; n--; )
                            delete i[t[n]]
                    }
                    (void 0 === t || P.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return void 0 !== t && !P.isEmptyObject(t)
            }
        };
        var Q = new Y
          , Z = new Y
          , J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
          , ee = /[A-Z]/g;
        function te(e, t, n) {
            var i;
            if (void 0 === n && 1 === e.nodeType)
                if (i = "data-" + t.replace(ee, "-$&").toLowerCase(),
                "string" == typeof (n = e.getAttribute(i))) {
                    try {
                        n = function(e) {
                            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : J.test(e) ? JSON.parse(e) : e)
                        }(n)
                    } catch (e) {}
                    Z.set(e, t, n)
                } else
                    n = void 0;
            return n
        }
        P.extend({
            hasData: function(e) {
                return Z.hasData(e) || Q.hasData(e)
            },
            data: function(e, t, n) {
                return Z.access(e, t, n)
            },
            removeData: function(e, t) {
                Z.remove(e, t)
            },
            _data: function(e, t, n) {
                return Q.access(e, t, n)
            },
            _removeData: function(e, t) {
                Q.remove(e, t)
            }
        }),
        P.fn.extend({
            data: function(e, t) {
                var n, i, o, r = this[0], s = r && r.attributes;
                if (void 0 === e) {
                    if (this.length && (o = Z.get(r),
                    1 === r.nodeType && !Q.get(r, "hasDataAttrs"))) {
                        for (n = s.length; n--; )
                            s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = U(i.slice(5)),
                            te(r, i, o[i]));
                        Q.set(r, "hasDataAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof e ? this.each((function() {
                    Z.set(this, e)
                }
                )) : z(this, (function(t) {
                    var n;
                    if (r && void 0 === t)
                        return void 0 !== (n = Z.get(r, e)) || void 0 !== (n = te(r, e)) ? n : void 0;
                    this.each((function() {
                        Z.set(this, e, t)
                    }
                    ))
                }
                ), null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each((function() {
                    Z.remove(this, e)
                }
                ))
            }
        }),
        P.extend({
            queue: function(e, t, n) {
                var i;
                if (e)
                    return t = (t || "fx") + "queue",
                    i = Q.get(e, t),
                    n && (!i || Array.isArray(n) ? i = Q.access(e, t, P.makeArray(n)) : i.push(n)),
                    i || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = P.queue(e, t)
                  , i = n.length
                  , o = n.shift()
                  , r = P._queueHooks(e, t);
                "inprogress" === o && (o = n.shift(),
                i--),
                o && ("fx" === t && n.unshift("inprogress"),
                delete r.stop,
                o.call(e, (function() {
                    P.dequeue(e, t)
                }
                ), r)),
                !i && r && r.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return Q.get(e, n) || Q.access(e, n, {
                    empty: P.Callbacks("once memory").add((function() {
                        Q.remove(e, [t + "queue", n])
                    }
                    ))
                })
            }
        }),
        P.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e,
                e = "fx",
                n--),
                arguments.length < n ? P.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                    var n = P.queue(this, e, t);
                    P._queueHooks(this, e),
                    "fx" === e && "inprogress" !== n[0] && P.dequeue(this, e)
                }
                ))
            },
            dequeue: function(e) {
                return this.each((function() {
                    P.dequeue(this, e)
                }
                ))
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, i = 1, o = P.Deferred(), r = this, s = this.length, a = function() {
                    --i || o.resolveWith(r, [r])
                };
                for ("string" != typeof e && (t = e,
                e = void 0),
                e = e || "fx"; s--; )
                    (n = Q.get(r[s], e + "queueHooks")) && n.empty && (i++,
                    n.empty.add(a));
                return a(),
                o.promise(t)
            }
        });
        var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
          , ie = new RegExp("^(?:([+-])=|)(" + ne + ")([a-z%]*)$","i")
          , oe = ["Top", "Right", "Bottom", "Left"]
          , re = v.documentElement
          , se = function(e) {
            return P.contains(e.ownerDocument, e)
        }
          , ae = {
            composed: !0
        };
        re.getRootNode && (se = function(e) {
            return P.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument
        }
        );
        var le = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && se(e) && "none" === P.css(e, "display")
        };
        function ce(e, t, n, i) {
            var o, r, s = 20, a = i ? function() {
                return i.cur()
            }
            : function() {
                return P.css(e, t, "")
            }
            , l = a(), c = n && n[3] || (P.cssNumber[t] ? "" : "px"), u = e.nodeType && (P.cssNumber[t] || "px" !== c && +l) && ie.exec(P.css(e, t));
            if (u && u[3] !== c) {
                for (l /= 2,
                c = c || u[3],
                u = +l || 1; s--; )
                    P.style(e, t, u + c),
                    (1 - r) * (1 - (r = a() / l || .5)) <= 0 && (s = 0),
                    u /= r;
                u *= 2,
                P.style(e, t, u + c),
                n = n || []
            }
            return n && (u = +u || +l || 0,
            o = n[1] ? u + (n[1] + 1) * n[2] : +n[2],
            i && (i.unit = c,
            i.start = u,
            i.end = o)),
            o
        }
        var ue = {};
        function de(e) {
            var t, n = e.ownerDocument, i = e.nodeName, o = ue[i];
            return o || (t = n.body.appendChild(n.createElement(i)),
            o = P.css(t, "display"),
            t.parentNode.removeChild(t),
            "none" === o && (o = "block"),
            ue[i] = o,
            o)
        }
        function fe(e, t) {
            for (var n, i, o = [], r = 0, s = e.length; r < s; r++)
                (i = e[r]).style && (n = i.style.display,
                t ? ("none" === n && (o[r] = Q.get(i, "display") || null,
                o[r] || (i.style.display = "")),
                "" === i.style.display && le(i) && (o[r] = de(i))) : "none" !== n && (o[r] = "none",
                Q.set(i, "display", n)));
            for (r = 0; r < s; r++)
                null != o[r] && (e[r].style.display = o[r]);
            return e
        }
        P.fn.extend({
            show: function() {
                return fe(this, !0)
            },
            hide: function() {
                return fe(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                    le(this) ? P(this).show() : P(this).hide()
                }
                ))
            }
        });
        var he, pe, be = /^(?:checkbox|radio)$/i, ge = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, Te = /^$|^module$|\/(?:java|ecma)script/i;
        he = v.createDocumentFragment().appendChild(v.createElement("div")),
        (pe = v.createElement("input")).setAttribute("type", "radio"),
        pe.setAttribute("checked", "checked"),
        pe.setAttribute("name", "t"),
        he.appendChild(pe),
        g.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked,
        he.innerHTML = "<textarea>x</textarea>",
        g.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue,
        he.innerHTML = "<option></option>",
        g.option = !!he.lastChild;
        var me = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        function ve(e, t) {
            var n;
            return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
            void 0 === t || t && E(e, t) ? P.merge([e], n) : n
        }
        function Se(e, t) {
            for (var n = 0, i = e.length; n < i; n++)
                Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"))
        }
        me.tbody = me.tfoot = me.colgroup = me.caption = me.thead,
        me.th = me.td,
        g.option || (me.optgroup = me.option = [1, "<select multiple='multiple'>", "</select>"]);
        var ye = /<|&#?\w+;/;
        function xe(e, t, n, i, o) {
            for (var r, s, a, l, c, u, d = t.createDocumentFragment(), f = [], h = 0, p = e.length; h < p; h++)
                if ((r = e[h]) || 0 === r)
                    if ("object" === x(r))
                        P.merge(f, r.nodeType ? [r] : r);
                    else if (ye.test(r)) {
                        for (s = s || d.appendChild(t.createElement("div")),
                        a = (ge.exec(r) || ["", ""])[1].toLowerCase(),
                        l = me[a] || me._default,
                        s.innerHTML = l[1] + P.htmlPrefilter(r) + l[2],
                        u = l[0]; u--; )
                            s = s.lastChild;
                        P.merge(f, s.childNodes),
                        (s = d.firstChild).textContent = ""
                    } else
                        f.push(t.createTextNode(r));
            for (d.textContent = "",
            h = 0; r = f[h++]; )
                if (i && P.inArray(r, i) > -1)
                    o && o.push(r);
                else if (c = se(r),
                s = ve(d.appendChild(r), "script"),
                c && Se(s),
                n)
                    for (u = 0; r = s[u++]; )
                        Te.test(r.type || "") && n.push(r);
            return d
        }
        var Pe = /^([^.]*)(?:\.(.+)|)/;
        function Ae() {
            return !0
        }
        function Me() {
            return !1
        }
        function we(e, t) {
            return e === function() {
                try {
                    return v.activeElement
                } catch (e) {}
            }() == ("focus" === t)
        }
        function Ce(e, t, n, i, o, r) {
            var s, a;
            if ("object" == typeof t) {
                for (a in "string" != typeof n && (i = i || n,
                n = void 0),
                t)
                    Ce(e, a, n, i, t[a], r);
                return e
            }
            if (null == i && null == o ? (o = n,
            i = n = void 0) : null == o && ("string" == typeof n ? (o = i,
            i = void 0) : (o = i,
            i = n,
            n = void 0)),
            !1 === o)
                o = Me;
            else if (!o)
                return e;
            return 1 === r && (s = o,
            (o = function(e) {
                return P().off(e),
                s.apply(this, arguments)
            }
            ).guid = s.guid || (s.guid = P.guid++)),
            e.each((function() {
                P.event.add(this, t, o, i, n)
            }
            ))
        }
        function Ge(e, t, n) {
            n ? (Q.set(e, t, !1),
            P.event.add(e, t, {
                namespace: !1,
                handler: function(e) {
                    var i, o, r = Q.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                        if (r.length)
                            (P.event.special[t] || {}).delegateType && e.stopPropagation();
                        else if (r = a.call(arguments),
                        Q.set(this, t, r),
                        i = n(this, t),
                        this[t](),
                        r !== (o = Q.get(this, t)) || i ? Q.set(this, t, !1) : o = {},
                        r !== o)
                            return e.stopImmediatePropagation(),
                            e.preventDefault(),
                            o && o.value
                    } else
                        r.length && (Q.set(this, t, {
                            value: P.event.trigger(P.extend(r[0], P.Event.prototype), r.slice(1), this)
                        }),
                        e.stopImmediatePropagation())
                }
            })) : void 0 === Q.get(e, t) && P.event.add(e, t, Ae)
        }
        P.event = {
            global: {},
            add: function(e, t, n, i, o) {
                var r, s, a, l, c, u, d, f, h, p, b, g = Q.get(e);
                if (K(e))
                    for (n.handler && (n = (r = n).handler,
                    o = r.selector),
                    o && P.find.matchesSelector(re, o),
                    n.guid || (n.guid = P.guid++),
                    (l = g.events) || (l = g.events = Object.create(null)),
                    (s = g.handle) || (s = g.handle = function(t) {
                        return void 0 !== P && P.event.triggered !== t.type ? P.event.dispatch.apply(e, arguments) : void 0
                    }
                    ),
                    c = (t = (t || "").match(k) || [""]).length; c--; )
                        h = b = (a = Pe.exec(t[c]) || [])[1],
                        p = (a[2] || "").split(".").sort(),
                        h && (d = P.event.special[h] || {},
                        h = (o ? d.delegateType : d.bindType) || h,
                        d = P.event.special[h] || {},
                        u = P.extend({
                            type: h,
                            origType: b,
                            data: i,
                            handler: n,
                            guid: n.guid,
                            selector: o,
                            needsContext: o && P.expr.match.needsContext.test(o),
                            namespace: p.join(".")
                        }, r),
                        (f = l[h]) || ((f = l[h] = []).delegateCount = 0,
                        d.setup && !1 !== d.setup.call(e, i, p, s) || e.addEventListener && e.addEventListener(h, s)),
                        d.add && (d.add.call(e, u),
                        u.handler.guid || (u.handler.guid = n.guid)),
                        o ? f.splice(f.delegateCount++, 0, u) : f.push(u),
                        P.event.global[h] = !0)
            },
            remove: function(e, t, n, i, o) {
                var r, s, a, l, c, u, d, f, h, p, b, g = Q.hasData(e) && Q.get(e);
                if (g && (l = g.events)) {
                    for (c = (t = (t || "").match(k) || [""]).length; c--; )
                        if (h = b = (a = Pe.exec(t[c]) || [])[1],
                        p = (a[2] || "").split(".").sort(),
                        h) {
                            for (d = P.event.special[h] || {},
                            f = l[h = (i ? d.delegateType : d.bindType) || h] || [],
                            a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                            s = r = f.length; r--; )
                                u = f[r],
                                !o && b !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (f.splice(r, 1),
                                u.selector && f.delegateCount--,
                                d.remove && d.remove.call(e, u));
                            s && !f.length && (d.teardown && !1 !== d.teardown.call(e, p, g.handle) || P.removeEvent(e, h, g.handle),
                            delete l[h])
                        } else
                            for (h in l)
                                P.event.remove(e, h + t[c], n, i, !0);
                    P.isEmptyObject(l) && Q.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                var t, n, i, o, r, s, a = new Array(arguments.length), l = P.event.fix(e), c = (Q.get(this, "events") || Object.create(null))[l.type] || [], u = P.event.special[l.type] || {};
                for (a[0] = l,
                t = 1; t < arguments.length; t++)
                    a[t] = arguments[t];
                if (l.delegateTarget = this,
                !u.preDispatch || !1 !== u.preDispatch.call(this, l)) {
                    for (s = P.event.handlers.call(this, l, c),
                    t = 0; (o = s[t++]) && !l.isPropagationStopped(); )
                        for (l.currentTarget = o.elem,
                        n = 0; (r = o.handlers[n++]) && !l.isImmediatePropagationStopped(); )
                            l.rnamespace && !1 !== r.namespace && !l.rnamespace.test(r.namespace) || (l.handleObj = r,
                            l.data = r.data,
                            void 0 !== (i = ((P.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a)) && !1 === (l.result = i) && (l.preventDefault(),
                            l.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, l),
                    l.result
                }
            },
            handlers: function(e, t) {
                var n, i, o, r, s, a = [], l = t.delegateCount, c = e.target;
                if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                    for (; c !== this; c = c.parentNode || this)
                        if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                            for (r = [],
                            s = {},
                            n = 0; n < l; n++)
                                void 0 === s[o = (i = t[n]).selector + " "] && (s[o] = i.needsContext ? P(o, this).index(c) > -1 : P.find(o, this, null, [c]).length),
                                s[o] && r.push(i);
                            r.length && a.push({
                                elem: c,
                                handlers: r
                            })
                        }
                return c = this,
                l < t.length && a.push({
                    elem: c,
                    handlers: t.slice(l)
                }),
                a
            },
            addProp: function(e, t) {
                Object.defineProperty(P.Event.prototype, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: T(t) ? function() {
                        if (this.originalEvent)
                            return t(this.originalEvent)
                    }
                    : function() {
                        if (this.originalEvent)
                            return this.originalEvent[e]
                    }
                    ,
                    set: function(t) {
                        Object.defineProperty(this, e, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: t
                        })
                    }
                })
            },
            fix: function(e) {
                return e[P.expando] ? e : new P.Event(e)
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    setup: function(e) {
                        var t = this || e;
                        return be.test(t.type) && t.click && E(t, "input") && Ge(t, "click", Ae),
                        !1
                    },
                    trigger: function(e) {
                        var t = this || e;
                        return be.test(t.type) && t.click && E(t, "input") && Ge(t, "click"),
                        !0
                    },
                    _default: function(e) {
                        var t = e.target;
                        return be.test(t.type) && t.click && E(t, "input") && Q.get(t, "click") || E(t, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        },
        P.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }
        ,
        P.Event = function(e, t) {
            if (!(this instanceof P.Event))
                return new P.Event(e,t);
            e && e.type ? (this.originalEvent = e,
            this.type = e.type,
            this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ae : Me,
            this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
            this.currentTarget = e.currentTarget,
            this.relatedTarget = e.relatedTarget) : this.type = e,
            t && P.extend(this, t),
            this.timeStamp = e && e.timeStamp || Date.now(),
            this[P.expando] = !0
        }
        ,
        P.Event.prototype = {
            constructor: P.Event,
            isDefaultPrevented: Me,
            isPropagationStopped: Me,
            isImmediatePropagationStopped: Me,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = Ae,
                e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = Ae,
                e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = Ae,
                e && !this.isSimulated && e.stopImmediatePropagation(),
                this.stopPropagation()
            }
        },
        P.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: !0
        }, P.event.addProp),
        P.each({
            focus: "focusin",
            blur: "focusout"
        }, (function(e, t) {
            P.event.special[e] = {
                setup: function() {
                    return Ge(this, e, we),
                    !1
                },
                trigger: function() {
                    return Ge(this, e),
                    !0
                },
                _default: function() {
                    return !0
                },
                delegateType: t
            }
        }
        )),
        P.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, (function(e, t) {
            P.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, i = this, o = e.relatedTarget, r = e.handleObj;
                    return o && (o === i || P.contains(i, o)) || (e.type = r.origType,
                    n = r.handler.apply(this, arguments),
                    e.type = t),
                    n
                }
            }
        }
        )),
        P.fn.extend({
            on: function(e, t, n, i) {
                return Ce(this, e, t, n, i)
            },
            one: function(e, t, n, i) {
                return Ce(this, e, t, n, i, 1)
            },
            off: function(e, t, n) {
                var i, o;
                if (e && e.preventDefault && e.handleObj)
                    return i = e.handleObj,
                    P(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                    this;
                if ("object" == typeof e) {
                    for (o in e)
                        this.off(o, t, e[o]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t,
                t = void 0),
                !1 === n && (n = Me),
                this.each((function() {
                    P.event.remove(this, e, n, t)
                }
                ))
            }
        });
        var Ee = /<script|<style|<link/i
          , He = /checked\s*(?:[^=]|=\s*.checked.)/i
          , Be = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        function De(e, t) {
            return E(e, "table") && E(11 !== t.nodeType ? t : t.firstChild, "tr") && P(e).children("tbody")[0] || e
        }
        function Ie(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
            e
        }
        function Le(e) {
            return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
            e
        }
        function Ne(e, t) {
            var n, i, o, r, s, a;
            if (1 === t.nodeType) {
                if (Q.hasData(e) && (a = Q.get(e).events))
                    for (o in Q.remove(t, "handle events"),
                    a)
                        for (n = 0,
                        i = a[o].length; n < i; n++)
                            P.event.add(t, o, a[o][n]);
                Z.hasData(e) && (r = Z.access(e),
                s = P.extend({}, r),
                Z.set(t, s))
            }
        }
        function Oe(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && be.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }
        function ke(e, t, n, i) {
            t = l(t);
            var o, r, s, a, c, u, d = 0, f = e.length, h = f - 1, p = t[0], b = T(p);
            if (b || f > 1 && "string" == typeof p && !g.checkClone && He.test(p))
                return e.each((function(o) {
                    var r = e.eq(o);
                    b && (t[0] = p.call(this, o, r.html())),
                    ke(r, t, n, i)
                }
                ));
            if (f && (r = (o = xe(t, e[0].ownerDocument, !1, e, i)).firstChild,
            1 === o.childNodes.length && (o = r),
            r || i)) {
                for (a = (s = P.map(ve(o, "script"), Ie)).length; d < f; d++)
                    c = o,
                    d !== h && (c = P.clone(c, !0, !0),
                    a && P.merge(s, ve(c, "script"))),
                    n.call(e[d], c, d);
                if (a)
                    for (u = s[s.length - 1].ownerDocument,
                    P.map(s, Le),
                    d = 0; d < a; d++)
                        c = s[d],
                        Te.test(c.type || "") && !Q.access(c, "globalEval") && P.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? P._evalUrl && !c.noModule && P._evalUrl(c.src, {
                            nonce: c.nonce || c.getAttribute("nonce")
                        }, u) : y(c.textContent.replace(Be, ""), c, u))
            }
            return e
        }
        function Re(e, t, n) {
            for (var i, o = t ? P.filter(t, e) : e, r = 0; null != (i = o[r]); r++)
                n || 1 !== i.nodeType || P.cleanData(ve(i)),
                i.parentNode && (n && se(i) && Se(ve(i, "script")),
                i.parentNode.removeChild(i));
            return e
        }
        P.extend({
            htmlPrefilter: function(e) {
                return e
            },
            clone: function(e, t, n) {
                var i, o, r, s, a = e.cloneNode(!0), l = se(e);
                if (!(g.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || P.isXMLDoc(e)))
                    for (s = ve(a),
                    i = 0,
                    o = (r = ve(e)).length; i < o; i++)
                        Oe(r[i], s[i]);
                if (t)
                    if (n)
                        for (r = r || ve(e),
                        s = s || ve(a),
                        i = 0,
                        o = r.length; i < o; i++)
                            Ne(r[i], s[i]);
                    else
                        Ne(e, a);
                return (s = ve(a, "script")).length > 0 && Se(s, !l && ve(e, "script")),
                a
            },
            cleanData: function(e) {
                for (var t, n, i, o = P.event.special, r = 0; void 0 !== (n = e[r]); r++)
                    if (K(n)) {
                        if (t = n[Q.expando]) {
                            if (t.events)
                                for (i in t.events)
                                    o[i] ? P.event.remove(n, i) : P.removeEvent(n, i, t.handle);
                            n[Q.expando] = void 0
                        }
                        n[Z.expando] && (n[Z.expando] = void 0)
                    }
            }
        }),
        P.fn.extend({
            detach: function(e) {
                return Re(this, e, !0)
            },
            remove: function(e) {
                return Re(this, e)
            },
            text: function(e) {
                return z(this, (function(e) {
                    return void 0 === e ? P.text(this) : this.empty().each((function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    }
                    ))
                }
                ), null, e, arguments.length)
            },
            append: function() {
                return ke(this, arguments, (function(e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || De(this, e).appendChild(e)
                }
                ))
            },
            prepend: function() {
                return ke(this, arguments, (function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = De(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                }
                ))
            },
            before: function() {
                return ke(this, arguments, (function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                }
                ))
            },
            after: function() {
                return ke(this, arguments, (function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                }
                ))
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++)
                    1 === e.nodeType && (P.cleanData(ve(e, !1)),
                    e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null != e && e,
                t = null == t ? e : t,
                this.map((function() {
                    return P.clone(this, e, t)
                }
                ))
            },
            html: function(e) {
                return z(this, (function(e) {
                    var t = this[0] || {}
                      , n = 0
                      , i = this.length;
                    if (void 0 === e && 1 === t.nodeType)
                        return t.innerHTML;
                    if ("string" == typeof e && !Ee.test(e) && !me[(ge.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = P.htmlPrefilter(e);
                        try {
                            for (; n < i; n++)
                                1 === (t = this[n] || {}).nodeType && (P.cleanData(ve(t, !1)),
                                t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }
                ), null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return ke(this, arguments, (function(t) {
                    var n = this.parentNode;
                    P.inArray(this, e) < 0 && (P.cleanData(ve(this)),
                    n && n.replaceChild(t, this))
                }
                ), e)
            }
        }),
        P.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, (function(e, t) {
            P.fn[e] = function(e) {
                for (var n, i = [], o = P(e), r = o.length - 1, s = 0; s <= r; s++)
                    n = s === r ? this : this.clone(!0),
                    P(o[s])[t](n),
                    c.apply(i, n.get());
                return this.pushStack(i)
            }
        }
        ));
        var Fe = new RegExp("^(" + ne + ")(?!px)[a-z%]+$","i")
          , Ve = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = n),
            t.getComputedStyle(e)
        }
          , $e = function(e, t, n) {
            var i, o, r = {};
            for (o in t)
                r[o] = e.style[o],
                e.style[o] = t[o];
            for (o in i = n.call(e),
            t)
                e.style[o] = r[o];
            return i
        }
          , Xe = new RegExp(oe.join("|"),"i");
        function We(e, t, n) {
            var i, o, r, s, a = e.style;
            return (n = n || Ve(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || se(e) || (s = P.style(e, t)),
            !g.pixelBoxStyles() && Fe.test(s) && Xe.test(t) && (i = a.width,
            o = a.minWidth,
            r = a.maxWidth,
            a.minWidth = a.maxWidth = a.width = s,
            s = n.width,
            a.width = i,
            a.minWidth = o,
            a.maxWidth = r)),
            void 0 !== s ? s + "" : s
        }
        function ze(e, t) {
            return {
                get: function() {
                    if (!e())
                        return (this.get = t).apply(this, arguments);
                    delete this.get
                }
            }
        }
        !function() {
            function e() {
                if (u) {
                    c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                    u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                    re.appendChild(c).appendChild(u);
                    var e = n.getComputedStyle(u);
                    i = "1%" !== e.top,
                    l = 12 === t(e.marginLeft),
                    u.style.right = "60%",
                    s = 36 === t(e.right),
                    o = 36 === t(e.width),
                    u.style.position = "absolute",
                    r = 12 === t(u.offsetWidth / 3),
                    re.removeChild(c),
                    u = null
                }
            }
            function t(e) {
                return Math.round(parseFloat(e))
            }
            var i, o, r, s, a, l, c = v.createElement("div"), u = v.createElement("div");
            u.style && (u.style.backgroundClip = "content-box",
            u.cloneNode(!0).style.backgroundClip = "",
            g.clearCloneStyle = "content-box" === u.style.backgroundClip,
            P.extend(g, {
                boxSizingReliable: function() {
                    return e(),
                    o
                },
                pixelBoxStyles: function() {
                    return e(),
                    s
                },
                pixelPosition: function() {
                    return e(),
                    i
                },
                reliableMarginLeft: function() {
                    return e(),
                    l
                },
                scrollboxSize: function() {
                    return e(),
                    r
                },
                reliableTrDimensions: function() {
                    var e, t, i, o;
                    return null == a && (e = v.createElement("table"),
                    t = v.createElement("tr"),
                    i = v.createElement("div"),
                    e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate",
                    t.style.cssText = "border:1px solid",
                    t.style.height = "1px",
                    i.style.height = "9px",
                    i.style.display = "block",
                    re.appendChild(e).appendChild(t).appendChild(i),
                    o = n.getComputedStyle(t),
                    a = parseInt(o.height, 10) + parseInt(o.borderTopWidth, 10) + parseInt(o.borderBottomWidth, 10) === t.offsetHeight,
                    re.removeChild(e)),
                    a
                }
            }))
        }();
        var je = ["Webkit", "Moz", "ms"]
          , _e = v.createElement("div").style
          , qe = {};
        function Ue(e) {
            var t = P.cssProps[e] || qe[e];
            return t || (e in _e ? e : qe[e] = function(e) {
                for (var t = e[0].toUpperCase() + e.slice(1), n = je.length; n--; )
                    if ((e = je[n] + t)in _e)
                        return e
            }(e) || e)
        }
        var Ke = /^(none|table(?!-c[ea]).+)/
          , Ye = /^--/
          , Qe = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }
          , Ze = {
            letterSpacing: "0",
            fontWeight: "400"
        };
        function Je(e, t, n) {
            var i = ie.exec(t);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
        }
        function et(e, t, n, i, o, r) {
            var s = "width" === t ? 1 : 0
              , a = 0
              , l = 0;
            if (n === (i ? "border" : "content"))
                return 0;
            for (; s < 4; s += 2)
                "margin" === n && (l += P.css(e, n + oe[s], !0, o)),
                i ? ("content" === n && (l -= P.css(e, "padding" + oe[s], !0, o)),
                "margin" !== n && (l -= P.css(e, "border" + oe[s] + "Width", !0, o))) : (l += P.css(e, "padding" + oe[s], !0, o),
                "padding" !== n ? l += P.css(e, "border" + oe[s] + "Width", !0, o) : a += P.css(e, "border" + oe[s] + "Width", !0, o));
            return !i && r >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - a - .5)) || 0),
            l
        }
        function tt(e, t, n) {
            var i = Ve(e)
              , o = (!g.boxSizingReliable() || n) && "border-box" === P.css(e, "boxSizing", !1, i)
              , r = o
              , s = We(e, t, i)
              , a = "offset" + t[0].toUpperCase() + t.slice(1);
            if (Fe.test(s)) {
                if (!n)
                    return s;
                s = "auto"
            }
            return (!g.boxSizingReliable() && o || !g.reliableTrDimensions() && E(e, "tr") || "auto" === s || !parseFloat(s) && "inline" === P.css(e, "display", !1, i)) && e.getClientRects().length && (o = "border-box" === P.css(e, "boxSizing", !1, i),
            (r = a in e) && (s = e[a])),
            (s = parseFloat(s) || 0) + et(e, t, n || (o ? "border" : "content"), r, i, s) + "px"
        }
        function nt(e, t, n, i, o) {
            return new nt.prototype.init(e,t,n,i,o)
        }
        P.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = We(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function(e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o, r, s, a = U(t), l = Ye.test(t), c = e.style;
                    if (l || (t = Ue(a)),
                    s = P.cssHooks[t] || P.cssHooks[a],
                    void 0 === n)
                        return s && "get"in s && void 0 !== (o = s.get(e, !1, i)) ? o : c[t];
                    "string" === (r = typeof n) && (o = ie.exec(n)) && o[1] && (n = ce(e, t, o),
                    r = "number"),
                    null != n && n == n && ("number" !== r || l || (n += o && o[3] || (P.cssNumber[a] ? "" : "px")),
                    g.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                    s && "set"in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
                }
            },
            css: function(e, t, n, i) {
                var o, r, s, a = U(t);
                return Ye.test(t) || (t = Ue(a)),
                (s = P.cssHooks[t] || P.cssHooks[a]) && "get"in s && (o = s.get(e, !0, n)),
                void 0 === o && (o = We(e, t, i)),
                "normal" === o && t in Ze && (o = Ze[t]),
                "" === n || n ? (r = parseFloat(o),
                !0 === n || isFinite(r) ? r || 0 : o) : o
            }
        }),
        P.each(["height", "width"], (function(e, t) {
            P.cssHooks[t] = {
                get: function(e, n, i) {
                    if (n)
                        return !Ke.test(P.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, t, i) : $e(e, Qe, (function() {
                            return tt(e, t, i)
                        }
                        ))
                },
                set: function(e, n, i) {
                    var o, r = Ve(e), s = !g.scrollboxSize() && "absolute" === r.position, a = (s || i) && "border-box" === P.css(e, "boxSizing", !1, r), l = i ? et(e, t, i, a, r) : 0;
                    return a && s && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(r[t]) - et(e, t, "border", !1, r) - .5)),
                    l && (o = ie.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n,
                    n = P.css(e, t)),
                    Je(0, n, l)
                }
            }
        }
        )),
        P.cssHooks.marginLeft = ze(g.reliableMarginLeft, (function(e, t) {
            if (t)
                return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - $e(e, {
                    marginLeft: 0
                }, (function() {
                    return e.getBoundingClientRect().left
                }
                ))) + "px"
        }
        )),
        P.each({
            margin: "",
            padding: "",
            border: "Width"
        }, (function(e, t) {
            P.cssHooks[e + t] = {
                expand: function(n) {
                    for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++)
                        o[e + oe[i] + t] = r[i] || r[i - 2] || r[0];
                    return o
                }
            },
            "margin" !== e && (P.cssHooks[e + t].set = Je)
        }
        )),
        P.fn.extend({
            css: function(e, t) {
                return z(this, (function(e, t, n) {
                    var i, o, r = {}, s = 0;
                    if (Array.isArray(t)) {
                        for (i = Ve(e),
                        o = t.length; s < o; s++)
                            r[t[s]] = P.css(e, t[s], !1, i);
                        return r
                    }
                    return void 0 !== n ? P.style(e, t, n) : P.css(e, t)
                }
                ), e, t, arguments.length > 1)
            }
        }),
        P.Tween = nt,
        nt.prototype = {
            constructor: nt,
            init: function(e, t, n, i, o, r) {
                this.elem = e,
                this.prop = n,
                this.easing = o || P.easing._default,
                this.options = t,
                this.start = this.now = this.cur(),
                this.end = i,
                this.unit = r || (P.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = nt.propHooks[this.prop];
                return e && e.get ? e.get(this) : nt.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = nt.propHooks[this.prop];
                return this.options.duration ? this.pos = t = P.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                this.now = (this.end - this.start) * t + this.start,
                this.options.step && this.options.step.call(this.elem, this.now, this),
                n && n.set ? n.set(this) : nt.propHooks._default.set(this),
                this
            }
        },
        nt.prototype.init.prototype = nt.prototype,
        nt.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = P.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                },
                set: function(e) {
                    P.fx.step[e.prop] ? P.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !P.cssHooks[e.prop] && null == e.elem.style[Ue(e.prop)] ? e.elem[e.prop] = e.now : P.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        },
        nt.propHooks.scrollTop = nt.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        },
        P.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        },
        P.fx = nt.prototype.init,
        P.fx.step = {};
        var it, ot, rt = /^(?:toggle|show|hide)$/, st = /queueHooks$/;
        function at() {
            ot && (!1 === v.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(at) : n.setTimeout(at, P.fx.interval),
            P.fx.tick())
        }
        function lt() {
            return n.setTimeout((function() {
                it = void 0
            }
            )),
            it = Date.now()
        }
        function ct(e, t) {
            var n, i = 0, o = {
                height: e
            };
            for (t = t ? 1 : 0; i < 4; i += 2 - t)
                o["margin" + (n = oe[i])] = o["padding" + n] = e;
            return t && (o.opacity = o.width = e),
            o
        }
        function ut(e, t, n) {
            for (var i, o = (dt.tweeners[t] || []).concat(dt.tweeners["*"]), r = 0, s = o.length; r < s; r++)
                if (i = o[r].call(n, t, e))
                    return i
        }
        function dt(e, t, n) {
            var i, o, r = 0, s = dt.prefilters.length, a = P.Deferred().always((function() {
                delete l.elem
            }
            )), l = function() {
                if (o)
                    return !1;
                for (var t = it || lt(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), r = 0, s = c.tweens.length; r < s; r++)
                    c.tweens[r].run(i);
                return a.notifyWith(e, [c, i, n]),
                i < 1 && s ? n : (s || a.notifyWith(e, [c, 1, 0]),
                a.resolveWith(e, [c]),
                !1)
            }, c = a.promise({
                elem: e,
                props: P.extend({}, t),
                opts: P.extend(!0, {
                    specialEasing: {},
                    easing: P.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: it || lt(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = P.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(i),
                    i
                },
                stop: function(t) {
                    var n = 0
                      , i = t ? c.tweens.length : 0;
                    if (o)
                        return this;
                    for (o = !0; n < i; n++)
                        c.tweens[n].run(1);
                    return t ? (a.notifyWith(e, [c, 1, 0]),
                    a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]),
                    this
                }
            }), u = c.props;
            for (!function(e, t) {
                var n, i, o, r, s;
                for (n in e)
                    if (o = t[i = U(n)],
                    r = e[n],
                    Array.isArray(r) && (o = r[1],
                    r = e[n] = r[0]),
                    n !== i && (e[i] = r,
                    delete e[n]),
                    (s = P.cssHooks[i]) && "expand"in s)
                        for (n in r = s.expand(r),
                        delete e[i],
                        r)
                            n in e || (e[n] = r[n],
                            t[n] = o);
                    else
                        t[i] = o
            }(u, c.opts.specialEasing); r < s; r++)
                if (i = dt.prefilters[r].call(c, e, u, c.opts))
                    return T(i.stop) && (P._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)),
                    i;
            return P.map(u, ut, c),
            T(c.opts.start) && c.opts.start.call(e, c),
            c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
            P.fx.timer(P.extend(l, {
                elem: e,
                anim: c,
                queue: c.opts.queue
            })),
            c
        }
        P.Animation = P.extend(dt, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return ce(n.elem, e, ie.exec(t), n),
                    n
                }
                ]
            },
            tweener: function(e, t) {
                T(e) ? (t = e,
                e = ["*"]) : e = e.match(k);
                for (var n, i = 0, o = e.length; i < o; i++)
                    n = e[i],
                    dt.tweeners[n] = dt.tweeners[n] || [],
                    dt.tweeners[n].unshift(t)
            },
            prefilters: [function(e, t, n) {
                var i, o, r, s, a, l, c, u, d = "width"in t || "height"in t, f = this, h = {}, p = e.style, b = e.nodeType && le(e), g = Q.get(e, "fxshow");
                for (i in n.queue || (null == (s = P._queueHooks(e, "fx")).unqueued && (s.unqueued = 0,
                a = s.empty.fire,
                s.empty.fire = function() {
                    s.unqueued || a()
                }
                ),
                s.unqueued++,
                f.always((function() {
                    f.always((function() {
                        s.unqueued--,
                        P.queue(e, "fx").length || s.empty.fire()
                    }
                    ))
                }
                ))),
                t)
                    if (o = t[i],
                    rt.test(o)) {
                        if (delete t[i],
                        r = r || "toggle" === o,
                        o === (b ? "hide" : "show")) {
                            if ("show" !== o || !g || void 0 === g[i])
                                continue;
                            b = !0
                        }
                        h[i] = g && g[i] || P.style(e, i)
                    }
                if ((l = !P.isEmptyObject(t)) || !P.isEmptyObject(h))
                    for (i in d && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY],
                    null == (c = g && g.display) && (c = Q.get(e, "display")),
                    "none" === (u = P.css(e, "display")) && (c ? u = c : (fe([e], !0),
                    c = e.style.display || c,
                    u = P.css(e, "display"),
                    fe([e]))),
                    ("inline" === u || "inline-block" === u && null != c) && "none" === P.css(e, "float") && (l || (f.done((function() {
                        p.display = c
                    }
                    )),
                    null == c && (u = p.display,
                    c = "none" === u ? "" : u)),
                    p.display = "inline-block")),
                    n.overflow && (p.overflow = "hidden",
                    f.always((function() {
                        p.overflow = n.overflow[0],
                        p.overflowX = n.overflow[1],
                        p.overflowY = n.overflow[2]
                    }
                    ))),
                    l = !1,
                    h)
                        l || (g ? "hidden"in g && (b = g.hidden) : g = Q.access(e, "fxshow", {
                            display: c
                        }),
                        r && (g.hidden = !b),
                        b && fe([e], !0),
                        f.done((function() {
                            for (i in b || fe([e]),
                            Q.remove(e, "fxshow"),
                            h)
                                P.style(e, i, h[i])
                        }
                        ))),
                        l = ut(b ? g[i] : 0, i, f),
                        i in g || (g[i] = l.start,
                        b && (l.end = l.start,
                        l.start = 0))
            }
            ],
            prefilter: function(e, t) {
                t ? dt.prefilters.unshift(e) : dt.prefilters.push(e)
            }
        }),
        P.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? P.extend({}, e) : {
                complete: n || !n && t || T(e) && e,
                duration: e,
                easing: n && t || t && !T(t) && t
            };
            return P.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in P.fx.speeds ? i.duration = P.fx.speeds[i.duration] : i.duration = P.fx.speeds._default),
            null != i.queue && !0 !== i.queue || (i.queue = "fx"),
            i.old = i.complete,
            i.complete = function() {
                T(i.old) && i.old.call(this),
                i.queue && P.dequeue(this, i.queue)
            }
            ,
            i
        }
        ,
        P.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(le).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(e, t, n, i) {
                var o = P.isEmptyObject(e)
                  , r = P.speed(t, n, i)
                  , s = function() {
                    var t = dt(this, P.extend({}, e), r);
                    (o || Q.get(this, "finish")) && t.stop(!0)
                };
                return s.finish = s,
                o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
            },
            stop: function(e, t, n) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop,
                    t(n)
                };
                return "string" != typeof e && (n = t,
                t = e,
                e = void 0),
                t && this.queue(e || "fx", []),
                this.each((function() {
                    var t = !0
                      , o = null != e && e + "queueHooks"
                      , r = P.timers
                      , s = Q.get(this);
                    if (o)
                        s[o] && s[o].stop && i(s[o]);
                    else
                        for (o in s)
                            s[o] && s[o].stop && st.test(o) && i(s[o]);
                    for (o = r.length; o--; )
                        r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n),
                        t = !1,
                        r.splice(o, 1));
                    !t && n || P.dequeue(this, e)
                }
                ))
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"),
                this.each((function() {
                    var t, n = Q.get(this), i = n[e + "queue"], o = n[e + "queueHooks"], r = P.timers, s = i ? i.length : 0;
                    for (n.finish = !0,
                    P.queue(this, e, []),
                    o && o.stop && o.stop.call(this, !0),
                    t = r.length; t--; )
                        r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0),
                        r.splice(t, 1));
                    for (t = 0; t < s; t++)
                        i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                }
                ))
            }
        }),
        P.each(["toggle", "show", "hide"], (function(e, t) {
            var n = P.fn[t];
            P.fn[t] = function(e, i, o) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ct(t, !0), e, i, o)
            }
        }
        )),
        P.each({
            slideDown: ct("show"),
            slideUp: ct("hide"),
            slideToggle: ct("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, (function(e, t) {
            P.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i)
            }
        }
        )),
        P.timers = [],
        P.fx.tick = function() {
            var e, t = 0, n = P.timers;
            for (it = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || P.fx.stop(),
            it = void 0
        }
        ,
        P.fx.timer = function(e) {
            P.timers.push(e),
            P.fx.start()
        }
        ,
        P.fx.interval = 13,
        P.fx.start = function() {
            ot || (ot = !0,
            at())
        }
        ,
        P.fx.stop = function() {
            ot = null
        }
        ,
        P.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        P.fn.delay = function(e, t) {
            return e = P.fx && P.fx.speeds[e] || e,
            t = t || "fx",
            this.queue(t, (function(t, i) {
                var o = n.setTimeout(t, e);
                i.stop = function() {
                    n.clearTimeout(o)
                }
            }
            ))
        }
        ,
        function() {
            var e = v.createElement("input")
              , t = v.createElement("select").appendChild(v.createElement("option"));
            e.type = "checkbox",
            g.checkOn = "" !== e.value,
            g.optSelected = t.selected,
            (e = v.createElement("input")).value = "t",
            e.type = "radio",
            g.radioValue = "t" === e.value
        }();
        var ft, ht = P.expr.attrHandle;
        P.fn.extend({
            attr: function(e, t) {
                return z(this, P.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each((function() {
                    P.removeAttr(this, e)
                }
                ))
            }
        }),
        P.extend({
            attr: function(e, t, n) {
                var i, o, r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r)
                    return void 0 === e.getAttribute ? P.prop(e, t, n) : (1 === r && P.isXMLDoc(e) || (o = P.attrHooks[t.toLowerCase()] || (P.expr.match.bool.test(t) ? ft : void 0)),
                    void 0 !== n ? null === n ? void P.removeAttr(e, t) : o && "set"in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""),
                    n) : o && "get"in o && null !== (i = o.get(e, t)) ? i : null == (i = P.find.attr(e, t)) ? void 0 : i)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!g.radioValue && "radio" === t && E(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t),
                            n && (e.value = n),
                            t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, i = 0, o = t && t.match(k);
                if (o && 1 === e.nodeType)
                    for (; n = o[i++]; )
                        e.removeAttribute(n)
            }
        }),
        ft = {
            set: function(e, t, n) {
                return !1 === t ? P.removeAttr(e, n) : e.setAttribute(n, n),
                n
            }
        },
        P.each(P.expr.match.bool.source.match(/\w+/g), (function(e, t) {
            var n = ht[t] || P.find.attr;
            ht[t] = function(e, t, i) {
                var o, r, s = t.toLowerCase();
                return i || (r = ht[s],
                ht[s] = o,
                o = null != n(e, t, i) ? s : null,
                ht[s] = r),
                o
            }
        }
        ));
        var pt = /^(?:input|select|textarea|button)$/i
          , bt = /^(?:a|area)$/i;
        function gt(e) {
            return (e.match(k) || []).join(" ")
        }
        function Tt(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }
        function mt(e) {
            return Array.isArray(e) ? e : "string" == typeof e && e.match(k) || []
        }
        P.fn.extend({
            prop: function(e, t) {
                return z(this, P.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each((function() {
                    delete this[P.propFix[e] || e]
                }
                ))
            }
        }),
        P.extend({
            prop: function(e, t, n) {
                var i, o, r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r)
                    return 1 === r && P.isXMLDoc(e) || (t = P.propFix[t] || t,
                    o = P.propHooks[t]),
                    void 0 !== n ? o && "set"in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get"in o && null !== (i = o.get(e, t)) ? i : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = P.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : pt.test(e.nodeName) || bt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }),
        g.optSelected || (P.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex,
                null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex,
                t.parentNode && t.parentNode.selectedIndex)
            }
        }),
        P.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
            P.propFix[this.toLowerCase()] = this
        }
        )),
        P.fn.extend({
            addClass: function(e) {
                var t, n, i, o, r, s, a, l = 0;
                if (T(e))
                    return this.each((function(t) {
                        P(this).addClass(e.call(this, t, Tt(this)))
                    }
                    ));
                if ((t = mt(e)).length)
                    for (; n = this[l++]; )
                        if (o = Tt(n),
                        i = 1 === n.nodeType && " " + gt(o) + " ") {
                            for (s = 0; r = t[s++]; )
                                i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                            o !== (a = gt(i)) && n.setAttribute("class", a)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, i, o, r, s, a, l = 0;
                if (T(e))
                    return this.each((function(t) {
                        P(this).removeClass(e.call(this, t, Tt(this)))
                    }
                    ));
                if (!arguments.length)
                    return this.attr("class", "");
                if ((t = mt(e)).length)
                    for (; n = this[l++]; )
                        if (o = Tt(n),
                        i = 1 === n.nodeType && " " + gt(o) + " ") {
                            for (s = 0; r = t[s++]; )
                                for (; i.indexOf(" " + r + " ") > -1; )
                                    i = i.replace(" " + r + " ", " ");
                            o !== (a = gt(i)) && n.setAttribute("class", a)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e
                  , i = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : T(e) ? this.each((function(n) {
                    P(this).toggleClass(e.call(this, n, Tt(this), t), t)
                }
                )) : this.each((function() {
                    var t, o, r, s;
                    if (i)
                        for (o = 0,
                        r = P(this),
                        s = mt(e); t = s[o++]; )
                            r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                    else
                        void 0 !== e && "boolean" !== n || ((t = Tt(this)) && Q.set(this, "__className__", t),
                        this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Q.get(this, "__className__") || ""))
                }
                ))
            },
            hasClass: function(e) {
                var t, n, i = 0;
                for (t = " " + e + " "; n = this[i++]; )
                    if (1 === n.nodeType && (" " + gt(Tt(n)) + " ").indexOf(t) > -1)
                        return !0;
                return !1
            }
        });
        var vt = /\r/g;
        P.fn.extend({
            val: function(e) {
                var t, n, i, o = this[0];
                return arguments.length ? (i = T(e),
                this.each((function(n) {
                    var o;
                    1 === this.nodeType && (null == (o = i ? e.call(this, n, P(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = P.map(o, (function(e) {
                        return null == e ? "" : e + ""
                    }
                    ))),
                    (t = P.valHooks[this.type] || P.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                }
                ))) : o ? (t = P.valHooks[o.type] || P.valHooks[o.nodeName.toLowerCase()]) && "get"in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(vt, "") : null == n ? "" : n : void 0
            }
        }),
        P.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = P.find.attr(e, "value");
                        return null != t ? t : gt(P.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, i, o = e.options, r = e.selectedIndex, s = "select-one" === e.type, a = s ? null : [], l = s ? r + 1 : o.length;
                        for (i = r < 0 ? l : s ? r : 0; i < l; i++)
                            if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !E(n.parentNode, "optgroup"))) {
                                if (t = P(n).val(),
                                s)
                                    return t;
                                a.push(t)
                            }
                        return a
                    },
                    set: function(e, t) {
                        for (var n, i, o = e.options, r = P.makeArray(t), s = o.length; s--; )
                            ((i = o[s]).selected = P.inArray(P.valHooks.option.get(i), r) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1),
                        r
                    }
                }
            }
        }),
        P.each(["radio", "checkbox"], (function() {
            P.valHooks[this] = {
                set: function(e, t) {
                    if (Array.isArray(t))
                        return e.checked = P.inArray(P(e).val(), t) > -1
                }
            },
            g.checkOn || (P.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            }
            )
        }
        )),
        g.focusin = "onfocusin"in n;
        var St = /^(?:focusinfocus|focusoutblur)$/
          , yt = function(e) {
            e.stopPropagation()
        };
        P.extend(P.event, {
            trigger: function(e, t, i, o) {
                var r, s, a, l, c, u, d, f, p = [i || v], b = h.call(e, "type") ? e.type : e, g = h.call(e, "namespace") ? e.namespace.split(".") : [];
                if (s = f = a = i = i || v,
                3 !== i.nodeType && 8 !== i.nodeType && !St.test(b + P.event.triggered) && (b.indexOf(".") > -1 && (g = b.split("."),
                b = g.shift(),
                g.sort()),
                c = b.indexOf(":") < 0 && "on" + b,
                (e = e[P.expando] ? e : new P.Event(b,"object" == typeof e && e)).isTrigger = o ? 2 : 3,
                e.namespace = g.join("."),
                e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                e.result = void 0,
                e.target || (e.target = i),
                t = null == t ? [e] : P.makeArray(t, [e]),
                d = P.event.special[b] || {},
                o || !d.trigger || !1 !== d.trigger.apply(i, t))) {
                    if (!o && !d.noBubble && !m(i)) {
                        for (l = d.delegateType || b,
                        St.test(l + b) || (s = s.parentNode); s; s = s.parentNode)
                            p.push(s),
                            a = s;
                        a === (i.ownerDocument || v) && p.push(a.defaultView || a.parentWindow || n)
                    }
                    for (r = 0; (s = p[r++]) && !e.isPropagationStopped(); )
                        f = s,
                        e.type = r > 1 ? l : d.bindType || b,
                        (u = (Q.get(s, "events") || Object.create(null))[e.type] && Q.get(s, "handle")) && u.apply(s, t),
                        (u = c && s[c]) && u.apply && K(s) && (e.result = u.apply(s, t),
                        !1 === e.result && e.preventDefault());
                    return e.type = b,
                    o || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(p.pop(), t) || !K(i) || c && T(i[b]) && !m(i) && ((a = i[c]) && (i[c] = null),
                    P.event.triggered = b,
                    e.isPropagationStopped() && f.addEventListener(b, yt),
                    i[b](),
                    e.isPropagationStopped() && f.removeEventListener(b, yt),
                    P.event.triggered = void 0,
                    a && (i[c] = a)),
                    e.result
                }
            },
            simulate: function(e, t, n) {
                var i = P.extend(new P.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                P.event.trigger(i, null, t)
            }
        }),
        P.fn.extend({
            trigger: function(e, t) {
                return this.each((function() {
                    P.event.trigger(e, t, this)
                }
                ))
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n)
                    return P.event.trigger(e, t, n, !0)
            }
        }),
        g.focusin || P.each({
            focus: "focusin",
            blur: "focusout"
        }, (function(e, t) {
            var n = function(e) {
                P.event.simulate(t, e.target, P.event.fix(e))
            };
            P.event.special[t] = {
                setup: function() {
                    var i = this.ownerDocument || this.document || this
                      , o = Q.access(i, t);
                    o || i.addEventListener(e, n, !0),
                    Q.access(i, t, (o || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this.document || this
                      , o = Q.access(i, t) - 1;
                    o ? Q.access(i, t, o) : (i.removeEventListener(e, n, !0),
                    Q.remove(i, t))
                }
            }
        }
        ));
        var xt = n.location
          , Pt = {
            guid: Date.now()
        }
          , At = /\?/;
        P.parseXML = function(e) {
            var t, i;
            if (!e || "string" != typeof e)
                return null;
            try {
                t = (new n.DOMParser).parseFromString(e, "text/xml")
            } catch (e) {}
            return i = t && t.getElementsByTagName("parsererror")[0],
            t && !i || P.error("Invalid XML: " + (i ? P.map(i.childNodes, (function(e) {
                return e.textContent
            }
            )).join("\n") : e)),
            t
        }
        ;
        var Mt = /\[\]$/
          , wt = /\r?\n/g
          , Ct = /^(?:submit|button|image|reset|file)$/i
          , Gt = /^(?:input|select|textarea|keygen)/i;
        function Et(e, t, n, i) {
            var o;
            if (Array.isArray(t))
                P.each(t, (function(t, o) {
                    n || Mt.test(e) ? i(e, o) : Et(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i)
                }
                ));
            else if (n || "object" !== x(t))
                i(e, t);
            else
                for (o in t)
                    Et(e + "[" + o + "]", t[o], n, i)
        }
        P.param = function(e, t) {
            var n, i = [], o = function(e, t) {
                var n = T(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
            if (null == e)
                return "";
            if (Array.isArray(e) || e.jquery && !P.isPlainObject(e))
                P.each(e, (function() {
                    o(this.name, this.value)
                }
                ));
            else
                for (n in e)
                    Et(n, e[n], t, o);
            return i.join("&")
        }
        ,
        P.fn.extend({
            serialize: function() {
                return P.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map((function() {
                    var e = P.prop(this, "elements");
                    return e ? P.makeArray(e) : this
                }
                )).filter((function() {
                    var e = this.type;
                    return this.name && !P(this).is(":disabled") && Gt.test(this.nodeName) && !Ct.test(e) && (this.checked || !be.test(e))
                }
                )).map((function(e, t) {
                    var n = P(this).val();
                    return null == n ? null : Array.isArray(n) ? P.map(n, (function(e) {
                        return {
                            name: t.name,
                            value: e.replace(wt, "\r\n")
                        }
                    }
                    )) : {
                        name: t.name,
                        value: n.replace(wt, "\r\n")
                    }
                }
                )).get()
            }
        });
        var Ht = /%20/g
          , Bt = /#.*$/
          , Dt = /([?&])_=[^&]*/
          , It = /^(.*?):[ \t]*([^\r\n]*)$/gm
          , Lt = /^(?:GET|HEAD)$/
          , Nt = /^\/\//
          , Ot = {}
          , kt = {}
          , Rt = "*/".concat("*")
          , Ft = v.createElement("a");
        function Vt(e) {
            return function(t, n) {
                "string" != typeof t && (n = t,
                t = "*");
                var i, o = 0, r = t.toLowerCase().match(k) || [];
                if (T(n))
                    for (; i = r[o++]; )
                        "+" === i[0] ? (i = i.slice(1) || "*",
                        (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }
        function $t(e, t, n, i) {
            var o = {}
              , r = e === kt;
            function s(a) {
                var l;
                return o[a] = !0,
                P.each(e[a] || [], (function(e, a) {
                    var c = a(t, n, i);
                    return "string" != typeof c || r || o[c] ? r ? !(l = c) : void 0 : (t.dataTypes.unshift(c),
                    s(c),
                    !1)
                }
                )),
                l
            }
            return s(t.dataTypes[0]) || !o["*"] && s("*")
        }
        function Xt(e, t) {
            var n, i, o = P.ajaxSettings.flatOptions || {};
            for (n in t)
                void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
            return i && P.extend(!0, e, i),
            e
        }
        Ft.href = xt.href,
        P.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: xt.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(xt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Rt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": P.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? Xt(Xt(e, P.ajaxSettings), t) : Xt(P.ajaxSettings, e)
            },
            ajaxPrefilter: Vt(Ot),
            ajaxTransport: Vt(kt),
            ajax: function(e, t) {
                "object" == typeof e && (t = e,
                e = void 0),
                t = t || {};
                var i, o, r, s, a, l, c, u, d, f, h = P.ajaxSetup({}, t), p = h.context || h, b = h.context && (p.nodeType || p.jquery) ? P(p) : P.event, g = P.Deferred(), T = P.Callbacks("once memory"), m = h.statusCode || {}, S = {}, y = {}, x = "canceled", A = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (c) {
                            if (!s)
                                for (s = {}; t = It.exec(r); )
                                    s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = s[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return c ? r : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == c && (e = y[e.toLowerCase()] = y[e.toLowerCase()] || e,
                        S[e] = t),
                        this
                    },
                    overrideMimeType: function(e) {
                        return null == c && (h.mimeType = e),
                        this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (c)
                                A.always(e[A.status]);
                            else
                                for (t in e)
                                    m[t] = [m[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || x;
                        return i && i.abort(t),
                        M(0, t),
                        this
                    }
                };
                if (g.promise(A),
                h.url = ((e || h.url || xt.href) + "").replace(Nt, xt.protocol + "//"),
                h.type = t.method || t.type || h.method || h.type,
                h.dataTypes = (h.dataType || "*").toLowerCase().match(k) || [""],
                null == h.crossDomain) {
                    l = v.createElement("a");
                    try {
                        l.href = h.url,
                        l.href = l.href,
                        h.crossDomain = Ft.protocol + "//" + Ft.host != l.protocol + "//" + l.host
                    } catch (e) {
                        h.crossDomain = !0
                    }
                }
                if (h.data && h.processData && "string" != typeof h.data && (h.data = P.param(h.data, h.traditional)),
                $t(Ot, h, t, A),
                c)
                    return A;
                for (d in (u = P.event && h.global) && 0 == P.active++ && P.event.trigger("ajaxStart"),
                h.type = h.type.toUpperCase(),
                h.hasContent = !Lt.test(h.type),
                o = h.url.replace(Bt, ""),
                h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Ht, "+")) : (f = h.url.slice(o.length),
                h.data && (h.processData || "string" == typeof h.data) && (o += (At.test(o) ? "&" : "?") + h.data,
                delete h.data),
                !1 === h.cache && (o = o.replace(Dt, "$1"),
                f = (At.test(o) ? "&" : "?") + "_=" + Pt.guid++ + f),
                h.url = o + f),
                h.ifModified && (P.lastModified[o] && A.setRequestHeader("If-Modified-Since", P.lastModified[o]),
                P.etag[o] && A.setRequestHeader("If-None-Match", P.etag[o])),
                (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && A.setRequestHeader("Content-Type", h.contentType),
                A.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : h.accepts["*"]),
                h.headers)
                    A.setRequestHeader(d, h.headers[d]);
                if (h.beforeSend && (!1 === h.beforeSend.call(p, A, h) || c))
                    return A.abort();
                if (x = "abort",
                T.add(h.complete),
                A.done(h.success),
                A.fail(h.error),
                i = $t(kt, h, t, A)) {
                    if (A.readyState = 1,
                    u && b.trigger("ajaxSend", [A, h]),
                    c)
                        return A;
                    h.async && h.timeout > 0 && (a = n.setTimeout((function() {
                        A.abort("timeout")
                    }
                    ), h.timeout));
                    try {
                        c = !1,
                        i.send(S, M)
                    } catch (e) {
                        if (c)
                            throw e;
                        M(-1, e)
                    }
                } else
                    M(-1, "No Transport");
                function M(e, t, s, l) {
                    var d, f, v, S, y, x = t;
                    c || (c = !0,
                    a && n.clearTimeout(a),
                    i = void 0,
                    r = l || "",
                    A.readyState = e > 0 ? 4 : 0,
                    d = e >= 200 && e < 300 || 304 === e,
                    s && (S = function(e, t, n) {
                        for (var i, o, r, s, a = e.contents, l = e.dataTypes; "*" === l[0]; )
                            l.shift(),
                            void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (i)
                            for (o in a)
                                if (a[o] && a[o].test(i)) {
                                    l.unshift(o);
                                    break
                                }
                        if (l[0]in n)
                            r = l[0];
                        else {
                            for (o in n) {
                                if (!l[0] || e.converters[o + " " + l[0]]) {
                                    r = o;
                                    break
                                }
                                s || (s = o)
                            }
                            r = r || s
                        }
                        if (r)
                            return r !== l[0] && l.unshift(r),
                            n[r]
                    }(h, A, s)),
                    !d && P.inArray("script", h.dataTypes) > -1 && P.inArray("json", h.dataTypes) < 0 && (h.converters["text script"] = function() {}
                    ),
                    S = function(e, t, n, i) {
                        var o, r, s, a, l, c = {}, u = e.dataTypes.slice();
                        if (u[1])
                            for (s in e.converters)
                                c[s.toLowerCase()] = e.converters[s];
                        for (r = u.shift(); r; )
                            if (e.responseFields[r] && (n[e.responseFields[r]] = t),
                            !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                            l = r,
                            r = u.shift())
                                if ("*" === r)
                                    r = l;
                                else if ("*" !== l && l !== r) {
                                    if (!(s = c[l + " " + r] || c["* " + r]))
                                        for (o in c)
                                            if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                                !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0],
                                                u.unshift(a[1]));
                                                break
                                            }
                                    if (!0 !== s)
                                        if (s && e.throws)
                                            t = s(t);
                                        else
                                            try {
                                                t = s(t)
                                            } catch (e) {
                                                return {
                                                    state: "parsererror",
                                                    error: s ? e : "No conversion from " + l + " to " + r
                                                }
                                            }
                                }
                        return {
                            state: "success",
                            data: t
                        }
                    }(h, S, A, d),
                    d ? (h.ifModified && ((y = A.getResponseHeader("Last-Modified")) && (P.lastModified[o] = y),
                    (y = A.getResponseHeader("etag")) && (P.etag[o] = y)),
                    204 === e || "HEAD" === h.type ? x = "nocontent" : 304 === e ? x = "notmodified" : (x = S.state,
                    f = S.data,
                    d = !(v = S.error))) : (v = x,
                    !e && x || (x = "error",
                    e < 0 && (e = 0))),
                    A.status = e,
                    A.statusText = (t || x) + "",
                    d ? g.resolveWith(p, [f, x, A]) : g.rejectWith(p, [A, x, v]),
                    A.statusCode(m),
                    m = void 0,
                    u && b.trigger(d ? "ajaxSuccess" : "ajaxError", [A, h, d ? f : v]),
                    T.fireWith(p, [A, x]),
                    u && (b.trigger("ajaxComplete", [A, h]),
                    --P.active || P.event.trigger("ajaxStop")))
                }
                return A
            },
            getJSON: function(e, t, n) {
                return P.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return P.get(e, void 0, t, "script")
            }
        }),
        P.each(["get", "post"], (function(e, t) {
            P[t] = function(e, n, i, o) {
                return T(n) && (o = o || i,
                i = n,
                n = void 0),
                P.ajax(P.extend({
                    url: e,
                    type: t,
                    dataType: o,
                    data: n,
                    success: i
                }, P.isPlainObject(e) && e))
            }
        }
        )),
        P.ajaxPrefilter((function(e) {
            var t;
            for (t in e.headers)
                "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
        }
        )),
        P._evalUrl = function(e, t, n) {
            return P.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function() {}
                },
                dataFilter: function(e) {
                    P.globalEval(e, t, n)
                }
            })
        }
        ,
        P.fn.extend({
            wrapAll: function(e) {
                var t;
                return this[0] && (T(e) && (e = e.call(this[0])),
                t = P(e, this[0].ownerDocument).eq(0).clone(!0),
                this[0].parentNode && t.insertBefore(this[0]),
                t.map((function() {
                    for (var e = this; e.firstElementChild; )
                        e = e.firstElementChild;
                    return e
                }
                )).append(this)),
                this
            },
            wrapInner: function(e) {
                return T(e) ? this.each((function(t) {
                    P(this).wrapInner(e.call(this, t))
                }
                )) : this.each((function() {
                    var t = P(this)
                      , n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                }
                ))
            },
            wrap: function(e) {
                var t = T(e);
                return this.each((function(n) {
                    P(this).wrapAll(t ? e.call(this, n) : e)
                }
                ))
            },
            unwrap: function(e) {
                return this.parent(e).not("body").each((function() {
                    P(this).replaceWith(this.childNodes)
                }
                )),
                this
            }
        }),
        P.expr.pseudos.hidden = function(e) {
            return !P.expr.pseudos.visible(e)
        }
        ,
        P.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }
        ,
        P.ajaxSettings.xhr = function() {
            try {
                return new n.XMLHttpRequest
            } catch (e) {}
        }
        ;
        var Wt = {
            0: 200,
            1223: 204
        }
          , zt = P.ajaxSettings.xhr();
        g.cors = !!zt && "withCredentials"in zt,
        g.ajax = zt = !!zt,
        P.ajaxTransport((function(e) {
            var t, i;
            if (g.cors || zt && !e.crossDomain)
                return {
                    send: function(o, r) {
                        var s, a = e.xhr();
                        if (a.open(e.type, e.url, e.async, e.username, e.password),
                        e.xhrFields)
                            for (s in e.xhrFields)
                                a[s] = e.xhrFields[s];
                        for (s in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType),
                        e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"),
                        o)
                            a.setRequestHeader(s, o[s]);
                        t = function(e) {
                            return function() {
                                t && (t = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null,
                                "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(Wt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                    binary: a.response
                                } : {
                                    text: a.responseText
                                }, a.getAllResponseHeaders()))
                            }
                        }
                        ,
                        a.onload = t(),
                        i = a.onerror = a.ontimeout = t("error"),
                        void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                            4 === a.readyState && n.setTimeout((function() {
                                t && i()
                            }
                            ))
                        }
                        ,
                        t = t("abort");
                        try {
                            a.send(e.hasContent && e.data || null)
                        } catch (e) {
                            if (t)
                                throw e
                        }
                    },
                    abort: function() {
                        t && t()
                    }
                }
        }
        )),
        P.ajaxPrefilter((function(e) {
            e.crossDomain && (e.contents.script = !1)
        }
        )),
        P.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return P.globalEval(e),
                    e
                }
            }
        }),
        P.ajaxPrefilter("script", (function(e) {
            void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET")
        }
        )),
        P.ajaxTransport("script", (function(e) {
            var t, n;
            if (e.crossDomain || e.scriptAttrs)
                return {
                    send: function(i, o) {
                        t = P("<script>").attr(e.scriptAttrs || {}).prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function(e) {
                            t.remove(),
                            n = null,
                            e && o("error" === e.type ? 404 : 200, e.type)
                        }
                        ),
                        v.head.appendChild(t[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
        }
        ));
        var jt, _t = [], qt = /(=)\?(?=&|$)|\?\?/;
        P.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = _t.pop() || P.expando + "_" + Pt.guid++;
                return this[e] = !0,
                e
            }
        }),
        P.ajaxPrefilter("json jsonp", (function(e, t, i) {
            var o, r, s, a = !1 !== e.jsonp && (qt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && qt.test(e.data) && "data");
            if (a || "jsonp" === e.dataTypes[0])
                return o = e.jsonpCallback = T(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
                a ? e[a] = e[a].replace(qt, "$1" + o) : !1 !== e.jsonp && (e.url += (At.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
                e.converters["script json"] = function() {
                    return s || P.error(o + " was not called"),
                    s[0]
                }
                ,
                e.dataTypes[0] = "json",
                r = n[o],
                n[o] = function() {
                    s = arguments
                }
                ,
                i.always((function() {
                    void 0 === r ? P(n).removeProp(o) : n[o] = r,
                    e[o] && (e.jsonpCallback = t.jsonpCallback,
                    _t.push(o)),
                    s && T(r) && r(s[0]),
                    s = r = void 0
                }
                )),
                "script"
        }
        )),
        g.createHTMLDocument = ((jt = v.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
        2 === jt.childNodes.length),
        P.parseHTML = function(e, t, n) {
            return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
            t = !1),
            t || (g.createHTMLDocument ? ((i = (t = v.implementation.createHTMLDocument("")).createElement("base")).href = v.location.href,
            t.head.appendChild(i)) : t = v),
            r = !n && [],
            (o = H.exec(e)) ? [t.createElement(o[1])] : (o = xe([e], t, r),
            r && r.length && P(r).remove(),
            P.merge([], o.childNodes)));
            var i, o, r
        }
        ,
        P.fn.load = function(e, t, n) {
            var i, o, r, s = this, a = e.indexOf(" ");
            return a > -1 && (i = gt(e.slice(a)),
            e = e.slice(0, a)),
            T(t) ? (n = t,
            t = void 0) : t && "object" == typeof t && (o = "POST"),
            s.length > 0 && P.ajax({
                url: e,
                type: o || "GET",
                dataType: "html",
                data: t
            }).done((function(e) {
                r = arguments,
                s.html(i ? P("<div>").append(P.parseHTML(e)).find(i) : e)
            }
            )).always(n && function(e, t) {
                s.each((function() {
                    n.apply(this, r || [e.responseText, t, e])
                }
                ))
            }
            ),
            this
        }
        ,
        P.expr.pseudos.animated = function(e) {
            return P.grep(P.timers, (function(t) {
                return e === t.elem
            }
            )).length
        }
        ,
        P.offset = {
            setOffset: function(e, t, n) {
                var i, o, r, s, a, l, c = P.css(e, "position"), u = P(e), d = {};
                "static" === c && (e.style.position = "relative"),
                a = u.offset(),
                r = P.css(e, "top"),
                l = P.css(e, "left"),
                ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1 ? (s = (i = u.position()).top,
                o = i.left) : (s = parseFloat(r) || 0,
                o = parseFloat(l) || 0),
                T(t) && (t = t.call(e, n, P.extend({}, a))),
                null != t.top && (d.top = t.top - a.top + s),
                null != t.left && (d.left = t.left - a.left + o),
                "using"in t ? t.using.call(e, d) : u.css(d)
            }
        },
        P.fn.extend({
            offset: function(e) {
                if (arguments.length)
                    return void 0 === e ? this : this.each((function(t) {
                        P.offset.setOffset(this, e, t)
                    }
                    ));
                var t, n, i = this[0];
                return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(),
                n = i.ownerDocument.defaultView,
                {
                    top: t.top + n.pageYOffset,
                    left: t.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, n, i = this[0], o = {
                        top: 0,
                        left: 0
                    };
                    if ("fixed" === P.css(i, "position"))
                        t = i.getBoundingClientRect();
                    else {
                        for (t = this.offset(),
                        n = i.ownerDocument,
                        e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === P.css(e, "position"); )
                            e = e.parentNode;
                        e && e !== i && 1 === e.nodeType && ((o = P(e).offset()).top += P.css(e, "borderTopWidth", !0),
                        o.left += P.css(e, "borderLeftWidth", !0))
                    }
                    return {
                        top: t.top - o.top - P.css(i, "marginTop", !0),
                        left: t.left - o.left - P.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map((function() {
                    for (var e = this.offsetParent; e && "static" === P.css(e, "position"); )
                        e = e.offsetParent;
                    return e || re
                }
                ))
            }
        }),
        P.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, (function(e, t) {
            var n = "pageYOffset" === t;
            P.fn[e] = function(i) {
                return z(this, (function(e, i, o) {
                    var r;
                    if (m(e) ? r = e : 9 === e.nodeType && (r = e.defaultView),
                    void 0 === o)
                        return r ? r[t] : e[i];
                    r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o
                }
                ), e, i, arguments.length)
            }
        }
        )),
        P.each(["top", "left"], (function(e, t) {
            P.cssHooks[t] = ze(g.pixelPosition, (function(e, n) {
                if (n)
                    return n = We(e, t),
                    Fe.test(n) ? P(e).position()[t] + "px" : n
            }
            ))
        }
        )),
        P.each({
            Height: "height",
            Width: "width"
        }, (function(e, t) {
            P.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, (function(n, i) {
                P.fn[i] = function(o, r) {
                    var s = arguments.length && (n || "boolean" != typeof o)
                      , a = n || (!0 === o || !0 === r ? "margin" : "border");
                    return z(this, (function(t, n, o) {
                        var r;
                        return m(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement,
                        Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === o ? P.css(t, n, a) : P.style(t, n, o, a)
                    }
                    ), t, s ? o : void 0, s)
                }
            }
            ))
        }
        )),
        P.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
            P.fn[t] = function(e) {
                return this.on(t, e)
            }
        }
        )),
        P.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            },
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }),
        P.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
            P.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }
        ));
        var Ut = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        P.proxy = function(e, t) {
            var n, i, o;
            if ("string" == typeof t && (n = e[t],
            t = e,
            e = n),
            T(e))
                return i = a.call(arguments, 2),
                (o = function() {
                    return e.apply(t || this, i.concat(a.call(arguments)))
                }
                ).guid = e.guid = e.guid || P.guid++,
                o
        }
        ,
        P.holdReady = function(e) {
            e ? P.readyWait++ : P.ready(!0)
        }
        ,
        P.isArray = Array.isArray,
        P.parseJSON = JSON.parse,
        P.nodeName = E,
        P.isFunction = T,
        P.isWindow = m,
        P.camelCase = U,
        P.type = x,
        P.now = Date.now,
        P.isNumeric = function(e) {
            var t = P.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }
        ,
        P.trim = function(e) {
            return null == e ? "" : (e + "").replace(Ut, "")
        }
        ,
        void 0 === (i = function() {
            return P
        }
        .apply(t, [])) || (e.exports = i);
        var Kt = n.jQuery
          , Yt = n.$;
        return P.noConflict = function(e) {
            return n.$ === P && (n.$ = Yt),
            e && n.jQuery === P && (n.jQuery = Kt),
            P
        }
        ,
        void 0 === o && (n.jQuery = n.$ = P),
        P
    }
    ))
}
, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}
, , , , , function(e, t, n) {
    !function(t, n) {
        var i = function(e, t, n) {
            "use strict";
            var i, o;
            if (function() {
                var t, n = {
                    lazyClass: "lazyload",
                    loadedClass: "lazyloaded",
                    loadingClass: "lazyloading",
                    preloadClass: "lazypreload",
                    errorClass: "lazyerror",
                    autosizesClass: "lazyautosizes",
                    fastLoadedClass: "ls-is-cached",
                    iframeLoadMode: 0,
                    srcAttr: "data-src",
                    srcsetAttr: "data-srcset",
                    sizesAttr: "data-sizes",
                    minSize: 40,
                    customMedia: {},
                    init: !0,
                    expFactor: 1.5,
                    hFac: .8,
                    loadMode: 2,
                    loadHidden: !0,
                    ricTimeout: 0,
                    throttleDelay: 125
                };
                for (t in o = e.lazySizesConfig || e.lazysizesConfig || {},
                n)
                    t in o || (o[t] = n[t])
            }(),
            !t || !t.getElementsByClassName)
                return {
                    init: function() {},
                    cfg: o,
                    noSupport: !0
                };
            var r = t.documentElement
              , s = e.HTMLPictureElement
              , a = e.addEventListener.bind(e)
              , l = e.setTimeout
              , c = e.requestAnimationFrame || l
              , u = e.requestIdleCallback
              , d = /^picture$/i
              , f = ["load", "error", "lazyincluded", "_lazyloaded"]
              , h = {}
              , p = Array.prototype.forEach
              , b = function(e, t) {
                return h[t] || (h[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")),
                h[t].test(e.getAttribute("class") || "") && h[t]
            }
              , g = function(e, t) {
                b(e, t) || e.setAttribute("class", (e.getAttribute("class") || "").trim() + " " + t)
            }
              , T = function(e, t) {
                var n;
                (n = b(e, t)) && e.setAttribute("class", (e.getAttribute("class") || "").replace(n, " "))
            }
              , m = function(e, t, n) {
                var i = n ? "addEventListener" : "removeEventListener";
                n && m(e, t),
                f.forEach((function(n) {
                    e[i](n, t)
                }
                ))
            }
              , v = function(e, n, o, r, s) {
                var a = t.createEvent("Event");
                return o || (o = {}),
                o.instance = i,
                a.initEvent(n, !r, !s),
                a.detail = o,
                e.dispatchEvent(a),
                a
            }
              , S = function(t, n) {
                var i;
                !s && (i = e.picturefill || o.pf) ? (n && n.src && !t.getAttribute("srcset") && t.setAttribute("srcset", n.src),
                i({
                    reevaluate: !0,
                    elements: [t]
                })) : n && n.src && (t.src = n.src)
            }
              , y = function(e, t) {
                return (getComputedStyle(e, null) || {})[t]
            }
              , x = function(e, t, n) {
                for (n = n || e.offsetWidth; n < o.minSize && t && !e._lazysizesWidth; )
                    n = t.offsetWidth,
                    t = t.parentNode;
                return n
            }
              , P = (he = [],
            pe = [],
            be = he,
            ge = function() {
                var e = be;
                for (be = he.length ? pe : he,
                de = !0,
                fe = !1; e.length; )
                    e.shift()();
                de = !1
            }
            ,
            Te = function(e, n) {
                de && !n ? e.apply(this, arguments) : (be.push(e),
                fe || (fe = !0,
                (t.hidden ? l : c)(ge)))
            }
            ,
            Te._lsFlush = ge,
            Te)
              , A = function(e, t) {
                return t ? function() {
                    P(e)
                }
                : function() {
                    var t = this
                      , n = arguments;
                    P((function() {
                        e.apply(t, n)
                    }
                    ))
                }
            }
              , M = function(e) {
                var t, i, o = function() {
                    t = null,
                    e()
                }, r = function() {
                    var e = n.now() - i;
                    e < 99 ? l(r, 99 - e) : (u || o)(o)
                };
                return function() {
                    i = n.now(),
                    t || (t = l(r, 99))
                }
            }
              , w = (j = /^img$/i,
            _ = /^iframe$/i,
            q = "onscroll"in e && !/(gle|ing)bot/.test(navigator.userAgent),
            U = 0,
            K = 0,
            Y = -1,
            Q = function(e) {
                K--,
                (!e || K < 0 || !e.target) && (K = 0)
            }
            ,
            Z = function(e) {
                return null == z && (z = "hidden" == y(t.body, "visibility")),
                z || !("hidden" == y(e.parentNode, "visibility") && "hidden" == y(e, "visibility"))
            }
            ,
            J = function(e, n) {
                var i, o = e, s = Z(e);
                for (V -= n,
                W += n,
                $ -= n,
                X += n; s && (o = o.offsetParent) && o != t.body && o != r; )
                    (s = (y(o, "opacity") || 1) > 0) && "visible" != y(o, "overflow") && (i = o.getBoundingClientRect(),
                    s = X > i.left && $ < i.right && W > i.top - 1 && V < i.bottom + 1);
                return s
            }
            ,
            ee = function() {
                var e, n, s, a, l, c, u, d, f, h, p, b, g = i.elements;
                if ((O = o.loadMode) && K < 8 && (e = g.length)) {
                    for (n = 0,
                    Y++; n < e; n++)
                        if (g[n] && !g[n]._lazyRace)
                            if (!q || i.prematureUnveil && i.prematureUnveil(g[n]))
                                ae(g[n]);
                            else if ((d = g[n].getAttribute("data-expand")) && (c = 1 * d) || (c = U),
                            h || (h = !o.expand || o.expand < 1 ? r.clientHeight > 500 && r.clientWidth > 500 ? 500 : 370 : o.expand,
                            i._defEx = h,
                            p = h * o.expFactor,
                            b = o.hFac,
                            z = null,
                            U < p && K < 1 && Y > 2 && O > 2 && !t.hidden ? (U = p,
                            Y = 0) : U = O > 1 && Y > 1 && K < 6 ? h : 0),
                            f !== c && (R = innerWidth + c * b,
                            F = innerHeight + c,
                            u = -1 * c,
                            f = c),
                            s = g[n].getBoundingClientRect(),
                            (W = s.bottom) >= u && (V = s.top) <= F && (X = s.right) >= u * b && ($ = s.left) <= R && (W || X || $ || V) && (o.loadHidden || Z(g[n])) && (L && K < 3 && !d && (O < 3 || Y < 4) || J(g[n], c))) {
                                if (ae(g[n]),
                                l = !0,
                                K > 9)
                                    break
                            } else
                                !l && L && !a && K < 4 && Y < 4 && O > 2 && (I[0] || o.preloadAfterLoad) && (I[0] || !d && (W || X || $ || V || "auto" != g[n].getAttribute(o.sizesAttr))) && (a = I[0] || g[n]);
                    a && !l && ae(a)
                }
            }
            ,
            te = function(e) {
                var t, i = 0, r = o.throttleDelay, s = o.ricTimeout, a = function() {
                    t = !1,
                    i = n.now(),
                    e()
                }, c = u && s > 49 ? function() {
                    u(a, {
                        timeout: s
                    }),
                    s !== o.ricTimeout && (s = o.ricTimeout)
                }
                : A((function() {
                    l(a)
                }
                ), !0);
                return function(e) {
                    var o;
                    (e = !0 === e) && (s = 33),
                    t || (t = !0,
                    (o = r - (n.now() - i)) < 0 && (o = 0),
                    e || o < 9 ? c() : l(c, o))
                }
            }(ee),
            ne = function(e) {
                var t = e.target;
                t._lazyCache ? delete t._lazyCache : (Q(e),
                g(t, o.loadedClass),
                T(t, o.loadingClass),
                m(t, oe),
                v(t, "lazyloaded"))
            }
            ,
            ie = A(ne),
            oe = function(e) {
                ie({
                    target: e.target
                })
            }
            ,
            re = function(e) {
                var t, n = e.getAttribute(o.srcsetAttr);
                (t = o.customMedia[e.getAttribute("data-media") || e.getAttribute("media")]) && e.setAttribute("media", t),
                n && e.setAttribute("srcset", n)
            }
            ,
            se = A((function(e, t, n, i, r) {
                var s, a, c, u, f, h;
                (f = v(e, "lazybeforeunveil", t)).defaultPrevented || (i && (n ? g(e, o.autosizesClass) : e.setAttribute("sizes", i)),
                a = e.getAttribute(o.srcsetAttr),
                s = e.getAttribute(o.srcAttr),
                r && (u = (c = e.parentNode) && d.test(c.nodeName || "")),
                h = t.firesLoad || "src"in e && (a || s || u),
                f = {
                    target: e
                },
                g(e, o.loadingClass),
                h && (clearTimeout(N),
                N = l(Q, 2500),
                m(e, oe, !0)),
                u && p.call(c.getElementsByTagName("source"), re),
                a ? e.setAttribute("srcset", a) : s && !u && (_.test(e.nodeName) ? function(e, t) {
                    var n = e.getAttribute("data-load-mode") || o.iframeLoadMode;
                    0 == n ? e.contentWindow.location.replace(t) : 1 == n && (e.src = t)
                }(e, s) : e.src = s),
                r && (a || u) && S(e, {
                    src: s
                })),
                e._lazyRace && delete e._lazyRace,
                T(e, o.lazyClass),
                P((function() {
                    var t = e.complete && e.naturalWidth > 1;
                    h && !t || (t && g(e, o.fastLoadedClass),
                    ne(f),
                    e._lazyCache = !0,
                    l((function() {
                        "_lazyCache"in e && delete e._lazyCache
                    }
                    ), 9)),
                    "lazy" == e.loading && K--
                }
                ), !0)
            }
            )),
            ae = function(e) {
                if (!e._lazyRace) {
                    var t, n = j.test(e.nodeName), i = n && (e.getAttribute(o.sizesAttr) || e.getAttribute("sizes")), r = "auto" == i;
                    (!r && L || !n || !e.getAttribute("src") && !e.srcset || e.complete || b(e, o.errorClass) || !b(e, o.lazyClass)) && (t = v(e, "lazyunveilread").detail,
                    r && C.updateElem(e, !0, e.offsetWidth),
                    e._lazyRace = !0,
                    K++,
                    se(e, t, r, i, n))
                }
            }
            ,
            le = M((function() {
                o.loadMode = 3,
                te()
            }
            )),
            ce = function() {
                3 == o.loadMode && (o.loadMode = 2),
                le()
            }
            ,
            ue = function() {
                L || (n.now() - k < 999 ? l(ue, 999) : (L = !0,
                o.loadMode = 3,
                te(),
                a("scroll", ce, !0)))
            }
            ,
            {
                _: function() {
                    k = n.now(),
                    i.elements = t.getElementsByClassName(o.lazyClass),
                    I = t.getElementsByClassName(o.lazyClass + " " + o.preloadClass),
                    a("scroll", te, !0),
                    a("resize", te, !0),
                    a("pageshow", (function(e) {
                        if (e.persisted) {
                            var n = t.querySelectorAll("." + o.loadingClass);
                            n.length && n.forEach && c((function() {
                                n.forEach((function(e) {
                                    e.complete && ae(e)
                                }
                                ))
                            }
                            ))
                        }
                    }
                    )),
                    e.MutationObserver ? new MutationObserver(te).observe(r, {
                        childList: !0,
                        subtree: !0,
                        attributes: !0
                    }) : (r.addEventListener("DOMNodeInserted", te, !0),
                    r.addEventListener("DOMAttrModified", te, !0),
                    setInterval(te, 999)),
                    a("hashchange", te, !0),
                    ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach((function(e) {
                        t.addEventListener(e, te, !0)
                    }
                    )),
                    /d$|^c/.test(t.readyState) ? ue() : (a("load", ue),
                    t.addEventListener("DOMContentLoaded", te),
                    l(ue, 2e4)),
                    i.elements.length ? (ee(),
                    P._lsFlush()) : te()
                },
                checkElems: te,
                unveil: ae,
                _aLSL: ce
            })
              , C = (H = A((function(e, t, n, i) {
                var o, r, s;
                if (e._lazysizesWidth = i,
                i += "px",
                e.setAttribute("sizes", i),
                d.test(t.nodeName || ""))
                    for (r = 0,
                    s = (o = t.getElementsByTagName("source")).length; r < s; r++)
                        o[r].setAttribute("sizes", i);
                n.detail.dataAttr || S(e, n.detail)
            }
            )),
            B = function(e, t, n) {
                var i, o = e.parentNode;
                o && (n = x(e, o, n),
                (i = v(e, "lazybeforesizes", {
                    width: n,
                    dataAttr: !!t
                })).defaultPrevented || (n = i.detail.width) && n !== e._lazysizesWidth && H(e, o, i, n))
            }
            ,
            D = M((function() {
                var e, t = E.length;
                if (t)
                    for (e = 0; e < t; e++)
                        B(E[e])
            }
            )),
            {
                _: function() {
                    E = t.getElementsByClassName(o.autosizesClass),
                    a("resize", D)
                },
                checkElems: D,
                updateElem: B
            })
              , G = function() {
                !G.i && t.getElementsByClassName && (G.i = !0,
                C._(),
                w._())
            };
            var E, H, B, D;
            var I, L, N, O, k, R, F, V, $, X, W, z, j, _, q, U, K, Y, Q, Z, J, ee, te, ne, ie, oe, re, se, ae, le, ce, ue;
            var de, fe, he, pe, be, ge, Te;
            return l((function() {
                o.init && G()
            }
            )),
            i = {
                cfg: o,
                autoSizer: C,
                loader: w,
                init: G,
                uP: S,
                aC: g,
                rC: T,
                hC: b,
                fire: v,
                gW: x,
                rAF: P
            }
        }(t, t.document, Date);
        t.lazySizes = i,
        e.exports && (e.exports = i)
    }("undefined" != typeof window ? window : {})
}
, , function(e, t, n) {
    var i, o, r;
    /*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 */
    o = [n(0)],
    void 0 === (r = "function" == typeof (i = function(e) {
        var t, n, i = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], o = "onwheel"in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], r = Array.prototype.slice;
        if (e.event.fixHooks)
            for (var s = i.length; s; )
                e.event.fixHooks[i[--s]] = e.event.mouseHooks;
        var a = e.event.special.mousewheel = {
            version: "3.1.12",
            setup: function() {
                if (this.addEventListener)
                    for (var t = o.length; t; )
                        this.addEventListener(o[--t], l, !1);
                else
                    this.onmousewheel = l;
                e.data(this, "mousewheel-line-height", a.getLineHeight(this)),
                e.data(this, "mousewheel-page-height", a.getPageHeight(this))
            },
            teardown: function() {
                if (this.removeEventListener)
                    for (var t = o.length; t; )
                        this.removeEventListener(o[--t], l, !1);
                else
                    this.onmousewheel = null;
                e.removeData(this, "mousewheel-line-height"),
                e.removeData(this, "mousewheel-page-height")
            },
            getLineHeight: function(t) {
                var n = e(t)
                  , i = n["offsetParent"in e.fn ? "offsetParent" : "parent"]();
                return i.length || (i = e("body")),
                parseInt(i.css("fontSize"), 10) || parseInt(n.css("fontSize"), 10) || 16
            },
            getPageHeight: function(t) {
                return e(t).height()
            },
            settings: {
                adjustOldDeltas: !0,
                normalizeOffset: !0
            }
        };
        function l(i) {
            var o = i || window.event
              , s = r.call(arguments, 1)
              , l = 0
              , d = 0
              , f = 0
              , h = 0
              , p = 0
              , b = 0;
            if ((i = e.event.fix(o)).type = "mousewheel",
            "detail"in o && (f = -1 * o.detail),
            "wheelDelta"in o && (f = o.wheelDelta),
            "wheelDeltaY"in o && (f = o.wheelDeltaY),
            "wheelDeltaX"in o && (d = -1 * o.wheelDeltaX),
            "axis"in o && o.axis === o.HORIZONTAL_AXIS && (d = -1 * f,
            f = 0),
            l = 0 === f ? d : f,
            "deltaY"in o && (l = f = -1 * o.deltaY),
            "deltaX"in o && (d = o.deltaX,
            0 === f && (l = -1 * d)),
            0 !== f || 0 !== d) {
                if (1 === o.deltaMode) {
                    var g = e.data(this, "mousewheel-line-height");
                    l *= g,
                    f *= g,
                    d *= g
                } else if (2 === o.deltaMode) {
                    var T = e.data(this, "mousewheel-page-height");
                    l *= T,
                    f *= T,
                    d *= T
                }
                if (h = Math.max(Math.abs(f), Math.abs(d)),
                (!n || h < n) && (n = h,
                u(o, h) && (n /= 40)),
                u(o, h) && (l /= 40,
                d /= 40,
                f /= 40),
                l = Math[l >= 1 ? "floor" : "ceil"](l / n),
                d = Math[d >= 1 ? "floor" : "ceil"](d / n),
                f = Math[f >= 1 ? "floor" : "ceil"](f / n),
                a.settings.normalizeOffset && this.getBoundingClientRect) {
                    var m = this.getBoundingClientRect();
                    p = i.clientX - m.left,
                    b = i.clientY - m.top
                }
                return i.deltaX = d,
                i.deltaY = f,
                i.deltaFactor = n,
                i.offsetX = p,
                i.offsetY = b,
                i.deltaMode = 0,
                s.unshift(i, l, d, f),
                t && clearTimeout(t),
                t = setTimeout(c, 200),
                (e.event.dispatch || e.event.handle).apply(this, s)
            }
        }
        function c() {
            n = null
        }
        function u(e, t) {
            return a.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 == 0
        }
        e.fn.extend({
            mousewheel: function(e) {
                return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
            },
            unmousewheel: function(e) {
                return this.unbind("mousewheel", e)
            }
        })
    }
    ) ? i.apply(t, o) : i) || (e.exports = r)
}
, function(e, t) {
    !function(e, t, n, i) {
        "use strict";
        if (e.console = e.console || {
            info: function(e) {}
        },
        n)
            if (n.fn.fancybox)
                console.info("fancyBox already initialized");
            else {
                var o, r, s = {
                    closeExisting: !1,
                    loop: !1,
                    gutter: 50,
                    keyboard: !0,
                    preventCaptionOverlap: !0,
                    arrows: !0,
                    infobar: !0,
                    smallBtn: "auto",
                    toolbar: "auto",
                    buttons: ["zoom", "slideShow", "thumbs", "close"],
                    idleTime: 3,
                    protect: !1,
                    modal: !1,
                    image: {
                        preload: !1
                    },
                    ajax: {
                        settings: {
                            data: {
                                fancybox: !0
                            }
                        }
                    },
                    iframe: {
                        tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
                        preload: !0,
                        css: {},
                        attr: {
                            scrolling: "auto"
                        }
                    },
                    video: {
                        tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
                        format: "",
                        autoStart: !0
                    },
                    defaultType: "image",
                    animationEffect: "zoom",
                    animationDuration: 366,
                    zoomOpacity: "auto",
                    transitionEffect: "fade",
                    transitionDuration: 366,
                    slideClass: "",
                    baseClass: "",
                    baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
                    spinnerTpl: '<div class="fancybox-loading"></div>',
                    errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
                    btnTpl: {
                        download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
                        zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
                        close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
                        arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
                        arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
                        smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'
                    },
                    parentEl: "body",
                    hideScrollbar: !0,
                    autoFocus: !0,
                    backFocus: !0,
                    trapFocus: !0,
                    fullScreen: {
                        autoStart: !1
                    },
                    touch: {
                        vertical: !0,
                        momentum: !0
                    },
                    hash: null,
                    media: {},
                    slideShow: {
                        autoStart: !1,
                        speed: 3e3
                    },
                    thumbs: {
                        autoStart: !1,
                        hideOnClose: !0,
                        parentEl: ".fancybox-container",
                        axis: "y"
                    },
                    wheel: "auto",
                    onInit: n.noop,
                    beforeLoad: n.noop,
                    afterLoad: n.noop,
                    beforeShow: n.noop,
                    afterShow: n.noop,
                    beforeClose: n.noop,
                    afterClose: n.noop,
                    onActivate: n.noop,
                    onDeactivate: n.noop,
                    clickContent: function(e, t) {
                        return "image" === e.type && "zoom"
                    },
                    clickSlide: "close",
                    clickOutside: "close",
                    dblclickContent: !1,
                    dblclickSlide: !1,
                    dblclickOutside: !1,
                    mobile: {
                        preventCaptionOverlap: !1,
                        idleTime: !1,
                        clickContent: function(e, t) {
                            return "image" === e.type && "toggleControls"
                        },
                        clickSlide: function(e, t) {
                            return "image" === e.type ? "toggleControls" : "close"
                        },
                        dblclickContent: function(e, t) {
                            return "image" === e.type && "zoom"
                        },
                        dblclickSlide: function(e, t) {
                            return "image" === e.type && "zoom"
                        }
                    },
                    lang: "en",
                    i18n: {
                        en: {
                            CLOSE: "Close",
                            NEXT: "Next",
                            PREV: "Previous",
                            ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                            PLAY_START: "Start slideshow",
                            PLAY_STOP: "Pause slideshow",
                            FULL_SCREEN: "Full screen",
                            THUMBS: "Thumbnails",
                            DOWNLOAD: "Download",
                            SHARE: "Share",
                            ZOOM: "Zoom"
                        },
                        de: {
                            CLOSE: "Schlie&szlig;en",
                            NEXT: "Weiter",
                            PREV: "Zur&uuml;ck",
                            ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
                            PLAY_START: "Diaschau starten",
                            PLAY_STOP: "Diaschau beenden",
                            FULL_SCREEN: "Vollbild",
                            THUMBS: "Vorschaubilder",
                            DOWNLOAD: "Herunterladen",
                            SHARE: "Teilen",
                            ZOOM: "Vergr&ouml;&szlig;ern"
                        }
                    }
                }, a = n(e), l = n(t), c = 0, u = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || function(t) {
                    return e.setTimeout(t, 1e3 / 60)
                }
                , d = e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.mozCancelAnimationFrame || e.oCancelAnimationFrame || function(t) {
                    e.clearTimeout(t)
                }
                , f = function() {
                    var e, n = t.createElement("fakeelement"), i = {
                        transition: "transitionend",
                        OTransition: "oTransitionEnd",
                        MozTransition: "transitionend",
                        WebkitTransition: "webkitTransitionEnd"
                    };
                    for (e in i)
                        if (void 0 !== n.style[e])
                            return i[e];
                    return "transitionend"
                }(), h = function(e) {
                    return e && e.length && e[0].offsetHeight
                }, p = function(e, t) {
                    var i = n.extend(!0, {}, e, t);
                    return n.each(t, (function(e, t) {
                        n.isArray(t) && (i[e] = t)
                    }
                    )),
                    i
                }, b = function(e, t, i) {
                    this.opts = p({
                        index: i
                    }, n.fancybox.defaults),
                    n.isPlainObject(t) && (this.opts = p(this.opts, t)),
                    n.fancybox.isMobile && (this.opts = p(this.opts, this.opts.mobile)),
                    this.id = this.opts.id || ++c,
                    this.currIndex = parseInt(this.opts.index, 10) || 0,
                    this.prevIndex = null,
                    this.prevPos = null,
                    this.currPos = 0,
                    this.firstRun = !0,
                    this.group = [],
                    this.slides = {},
                    this.addContent(e),
                    this.group.length && this.init()
                };
                n.extend(b.prototype, {
                    init: function() {
                        var i, o, r = this, s = r.group[r.currIndex].opts;
                        s.closeExisting && n.fancybox.close(!0),
                        n("body").addClass("fancybox-active"),
                        !n.fancybox.getInstance() && !1 !== s.hideScrollbar && !n.fancybox.isMobile && t.body.scrollHeight > e.innerHeight && (n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (e.innerWidth - t.documentElement.clientWidth) + "px;}</style>"),
                        n("body").addClass("compensate-for-scrollbar")),
                        o = "",
                        n.each(s.buttons, (function(e, t) {
                            o += s.btnTpl[t] || ""
                        }
                        )),
                        i = n(r.translate(r, s.baseTpl.replace("{{buttons}}", o).replace("{{arrows}}", s.btnTpl.arrowLeft + s.btnTpl.arrowRight))).attr("id", "fancybox-container-" + r.id).addClass(s.baseClass).data("FancyBox", r).appendTo(s.parentEl),
                        r.$refs = {
                            container: i
                        },
                        ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach((function(e) {
                            r.$refs[e] = i.find(".fancybox-" + e)
                        }
                        )),
                        r.trigger("onInit"),
                        r.activate(),
                        r.jumpTo(r.currIndex)
                    },
                    translate: function(e, t) {
                        var n = e.opts.i18n[e.opts.lang] || e.opts.i18n.en;
                        return t.replace(/\{\{(\w+)\}\}/g, (function(e, t) {
                            return void 0 === n[t] ? e : n[t]
                        }
                        ))
                    },
                    addContent: function(e) {
                        var t, i = this, o = n.makeArray(e);
                        n.each(o, (function(e, t) {
                            var o, r, s, a, l, c = {}, u = {};
                            n.isPlainObject(t) ? (c = t,
                            u = t.opts || t) : "object" === n.type(t) && n(t).length ? (u = (o = n(t)).data() || {},
                            (u = n.extend(!0, {}, u, u.options)).$orig = o,
                            c.src = i.opts.src || u.src || o.attr("href"),
                            c.type || c.src || (c.type = "inline",
                            c.src = t)) : c = {
                                type: "html",
                                src: t + ""
                            },
                            c.opts = n.extend(!0, {}, i.opts, u),
                            n.isArray(u.buttons) && (c.opts.buttons = u.buttons),
                            n.fancybox.isMobile && c.opts.mobile && (c.opts = p(c.opts, c.opts.mobile)),
                            r = c.type || c.opts.type,
                            a = c.src || "",
                            !r && a && ((s = a.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (r = "video",
                            c.opts.video.format || (c.opts.video.format = "video/" + ("ogv" === s[1] ? "ogg" : s[1]))) : a.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? r = "image" : a.match(/\.(pdf)((\?|#).*)?$/i) ? (r = "iframe",
                            c = n.extend(!0, c, {
                                contentType: "pdf",
                                opts: {
                                    iframe: {
                                        preload: !1
                                    }
                                }
                            })) : "#" === a.charAt(0) && (r = "inline")),
                            r ? c.type = r : i.trigger("objectNeedsType", c),
                            c.contentType || (c.contentType = n.inArray(c.type, ["html", "inline", "ajax"]) > -1 ? "html" : c.type),
                            c.index = i.group.length,
                            "auto" == c.opts.smallBtn && (c.opts.smallBtn = n.inArray(c.type, ["html", "inline", "ajax"]) > -1),
                            "auto" === c.opts.toolbar && (c.opts.toolbar = !c.opts.smallBtn),
                            c.$thumb = c.opts.$thumb || null,
                            c.opts.$trigger && c.index === i.opts.index && (c.$thumb = c.opts.$trigger.find("img:first"),
                            c.$thumb.length && (c.opts.$orig = c.opts.$trigger)),
                            c.$thumb && c.$thumb.length || !c.opts.$orig || (c.$thumb = c.opts.$orig.find("img:first")),
                            c.$thumb && !c.$thumb.length && (c.$thumb = null),
                            c.thumb = c.opts.thumb || (c.$thumb ? c.$thumb[0].src : null),
                            "function" === n.type(c.opts.caption) && (c.opts.caption = c.opts.caption.apply(t, [i, c])),
                            "function" === n.type(i.opts.caption) && (c.opts.caption = i.opts.caption.apply(t, [i, c])),
                            c.opts.caption instanceof n || (c.opts.caption = void 0 === c.opts.caption ? "" : c.opts.caption + ""),
                            "ajax" === c.type && (l = a.split(/\s+/, 2)).length > 1 && (c.src = l.shift(),
                            c.opts.filter = l.shift()),
                            c.opts.modal && (c.opts = n.extend(!0, c.opts, {
                                trapFocus: !0,
                                infobar: 0,
                                toolbar: 0,
                                smallBtn: 0,
                                keyboard: 0,
                                slideShow: 0,
                                fullScreen: 0,
                                thumbs: 0,
                                touch: 0,
                                clickContent: !1,
                                clickSlide: !1,
                                clickOutside: !1,
                                dblclickContent: !1,
                                dblclickSlide: !1,
                                dblclickOutside: !1
                            })),
                            i.group.push(c)
                        }
                        )),
                        Object.keys(i.slides).length && (i.updateControls(),
                        (t = i.Thumbs) && t.isActive && (t.create(),
                        t.focus()))
                    },
                    addEvents: function() {
                        var t = this;
                        t.removeEvents(),
                        t.$refs.container.on("click.fb-close", "[data-fancybox-close]", (function(e) {
                            e.stopPropagation(),
                            e.preventDefault(),
                            t.close(e)
                        }
                        )).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", (function(e) {
                            e.stopPropagation(),
                            e.preventDefault(),
                            t.previous()
                        }
                        )).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", (function(e) {
                            e.stopPropagation(),
                            e.preventDefault(),
                            t.next()
                        }
                        )).on("click.fb", "[data-fancybox-zoom]", (function(e) {
                            t[t.isScaledDown() ? "scaleToActual" : "scaleToFit"]()
                        }
                        )),
                        a.on("orientationchange.fb resize.fb", (function(e) {
                            e && e.originalEvent && "resize" === e.originalEvent.type ? (t.requestId && d(t.requestId),
                            t.requestId = u((function() {
                                t.update(e)
                            }
                            ))) : (t.current && "iframe" === t.current.type && t.$refs.stage.hide(),
                            setTimeout((function() {
                                t.$refs.stage.show(),
                                t.update(e)
                            }
                            ), n.fancybox.isMobile ? 600 : 250))
                        }
                        )),
                        l.on("keydown.fb", (function(e) {
                            var i = (n.fancybox ? n.fancybox.getInstance() : null).current
                              , o = e.keyCode || e.which;
                            if (9 != o) {
                                if (!(!i.opts.keyboard || e.ctrlKey || e.altKey || e.shiftKey || n(e.target).is("input,textarea,video,audio,select")))
                                    return 8 === o || 27 === o ? (e.preventDefault(),
                                    void t.close(e)) : 37 === o || 38 === o ? (e.preventDefault(),
                                    void t.previous()) : 39 === o || 40 === o ? (e.preventDefault(),
                                    void t.next()) : void t.trigger("afterKeydown", e, o)
                            } else
                                i.opts.trapFocus && t.focus(e)
                        }
                        )),
                        t.group[t.currIndex].opts.idleTime && (t.idleSecondsCounter = 0,
                        l.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", (function(e) {
                            t.idleSecondsCounter = 0,
                            t.isIdle && t.showControls(),
                            t.isIdle = !1
                        }
                        )),
                        t.idleInterval = e.setInterval((function() {
                            t.idleSecondsCounter++,
                            t.idleSecondsCounter >= t.group[t.currIndex].opts.idleTime && !t.isDragging && (t.isIdle = !0,
                            t.idleSecondsCounter = 0,
                            t.hideControls())
                        }
                        ), 1e3))
                    },
                    removeEvents: function() {
                        a.off("orientationchange.fb resize.fb"),
                        l.off("keydown.fb .fb-idle"),
                        this.$refs.container.off(".fb-close .fb-prev .fb-next"),
                        this.idleInterval && (e.clearInterval(this.idleInterval),
                        this.idleInterval = null)
                    },
                    previous: function(e) {
                        return this.jumpTo(this.currPos - 1, e)
                    },
                    next: function(e) {
                        return this.jumpTo(this.currPos + 1, e)
                    },
                    jumpTo: function(e, t) {
                        var i, o, r, s, a, l, c, u, d, f = this, p = f.group.length;
                        if (!(f.isDragging || f.isClosing || f.isAnimating && f.firstRun)) {
                            if (e = parseInt(e, 10),
                            !(r = f.current ? f.current.opts.loop : f.opts.loop) && (e < 0 || e >= p))
                                return !1;
                            if (i = f.firstRun = !Object.keys(f.slides).length,
                            a = f.current,
                            f.prevIndex = f.currIndex,
                            f.prevPos = f.currPos,
                            s = f.createSlide(e),
                            p > 1 && ((r || s.index < p - 1) && f.createSlide(e + 1),
                            (r || s.index > 0) && f.createSlide(e - 1)),
                            f.current = s,
                            f.currIndex = s.index,
                            f.currPos = s.pos,
                            f.trigger("beforeShow", i),
                            f.updateControls(),
                            s.forcedDuration = void 0,
                            n.isNumeric(t) ? s.forcedDuration = t : t = s.opts[i ? "animationDuration" : "transitionDuration"],
                            t = parseInt(t, 10),
                            o = f.isMoved(s),
                            s.$slide.addClass("fancybox-slide--current"),
                            i)
                                return s.opts.animationEffect && t && f.$refs.container.css("transition-duration", t + "ms"),
                                f.$refs.container.addClass("fancybox-is-open").trigger("focus"),
                                f.loadSlide(s),
                                void f.preload("image");
                            l = n.fancybox.getTranslate(a.$slide),
                            c = n.fancybox.getTranslate(f.$refs.stage),
                            n.each(f.slides, (function(e, t) {
                                n.fancybox.stop(t.$slide, !0)
                            }
                            )),
                            a.pos !== s.pos && (a.isComplete = !1),
                            a.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"),
                            o ? (d = l.left - (a.pos * l.width + a.pos * a.opts.gutter),
                            n.each(f.slides, (function(e, i) {
                                i.$slide.removeClass("fancybox-animated").removeClass((function(e, t) {
                                    return (t.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                                }
                                ));
                                var o = i.pos * l.width + i.pos * i.opts.gutter;
                                n.fancybox.setTranslate(i.$slide, {
                                    top: 0,
                                    left: o - c.left + d
                                }),
                                i.pos !== s.pos && i.$slide.addClass("fancybox-slide--" + (i.pos > s.pos ? "next" : "previous")),
                                h(i.$slide),
                                n.fancybox.animate(i.$slide, {
                                    top: 0,
                                    left: (i.pos - s.pos) * l.width + (i.pos - s.pos) * i.opts.gutter
                                }, t, (function() {
                                    i.$slide.css({
                                        transform: "",
                                        opacity: ""
                                    }).removeClass("fancybox-slide--next fancybox-slide--previous"),
                                    i.pos === f.currPos && f.complete()
                                }
                                ))
                            }
                            ))) : t && s.opts.transitionEffect && (u = "fancybox-animated fancybox-fx-" + s.opts.transitionEffect,
                            a.$slide.addClass("fancybox-slide--" + (a.pos > s.pos ? "next" : "previous")),
                            n.fancybox.animate(a.$slide, u, t, (function() {
                                a.$slide.removeClass(u).removeClass("fancybox-slide--next fancybox-slide--previous")
                            }
                            ), !1)),
                            s.isLoaded ? f.revealContent(s) : f.loadSlide(s),
                            f.preload("image")
                        }
                    },
                    createSlide: function(e) {
                        var t, i;
                        return i = (i = e % this.group.length) < 0 ? this.group.length + i : i,
                        !this.slides[e] && this.group[i] && (t = n('<div class="fancybox-slide"></div>').appendTo(this.$refs.stage),
                        this.slides[e] = n.extend(!0, {}, this.group[i], {
                            pos: e,
                            $slide: t,
                            isLoaded: !1
                        }),
                        this.updateSlide(this.slides[e])),
                        this.slides[e]
                    },
                    scaleToActual: function(e, t, i) {
                        var o, r, s, a, l, c = this, u = c.current, d = u.$content, f = n.fancybox.getTranslate(u.$slide).width, h = n.fancybox.getTranslate(u.$slide).height, p = u.width, b = u.height;
                        c.isAnimating || c.isMoved() || !d || "image" != u.type || !u.isLoaded || u.hasError || (c.isAnimating = !0,
                        n.fancybox.stop(d),
                        e = void 0 === e ? .5 * f : e,
                        t = void 0 === t ? .5 * h : t,
                        (o = n.fancybox.getTranslate(d)).top -= n.fancybox.getTranslate(u.$slide).top,
                        o.left -= n.fancybox.getTranslate(u.$slide).left,
                        a = p / o.width,
                        l = b / o.height,
                        r = .5 * f - .5 * p,
                        s = .5 * h - .5 * b,
                        p > f && ((r = o.left * a - (e * a - e)) > 0 && (r = 0),
                        r < f - p && (r = f - p)),
                        b > h && ((s = o.top * l - (t * l - t)) > 0 && (s = 0),
                        s < h - b && (s = h - b)),
                        c.updateCursor(p, b),
                        n.fancybox.animate(d, {
                            top: s,
                            left: r,
                            scaleX: a,
                            scaleY: l
                        }, i || 366, (function() {
                            c.isAnimating = !1
                        }
                        )),
                        c.SlideShow && c.SlideShow.isActive && c.SlideShow.stop())
                    },
                    scaleToFit: function(e) {
                        var t, i = this, o = i.current, r = o.$content;
                        i.isAnimating || i.isMoved() || !r || "image" != o.type || !o.isLoaded || o.hasError || (i.isAnimating = !0,
                        n.fancybox.stop(r),
                        t = i.getFitPos(o),
                        i.updateCursor(t.width, t.height),
                        n.fancybox.animate(r, {
                            top: t.top,
                            left: t.left,
                            scaleX: t.width / r.width(),
                            scaleY: t.height / r.height()
                        }, e || 366, (function() {
                            i.isAnimating = !1
                        }
                        )))
                    },
                    getFitPos: function(e) {
                        var t, i, o, r, s = e.$content, a = e.$slide, l = e.width || e.opts.width, c = e.height || e.opts.height, u = {};
                        return !!(e.isLoaded && s && s.length) && (t = n.fancybox.getTranslate(this.$refs.stage).width,
                        i = n.fancybox.getTranslate(this.$refs.stage).height,
                        t -= parseFloat(a.css("paddingLeft")) + parseFloat(a.css("paddingRight")) + parseFloat(s.css("marginLeft")) + parseFloat(s.css("marginRight")),
                        i -= parseFloat(a.css("paddingTop")) + parseFloat(a.css("paddingBottom")) + parseFloat(s.css("marginTop")) + parseFloat(s.css("marginBottom")),
                        l && c || (l = t,
                        c = i),
                        (l *= o = Math.min(1, t / l, i / c)) > t - .5 && (l = t),
                        (c *= o) > i - .5 && (c = i),
                        "image" === e.type ? (u.top = Math.floor(.5 * (i - c)) + parseFloat(a.css("paddingTop")),
                        u.left = Math.floor(.5 * (t - l)) + parseFloat(a.css("paddingLeft"))) : "video" === e.contentType && (c > l / (r = e.opts.width && e.opts.height ? l / c : e.opts.ratio || 16 / 9) ? c = l / r : l > c * r && (l = c * r)),
                        u.width = l,
                        u.height = c,
                        u)
                    },
                    update: function(e) {
                        var t = this;
                        n.each(t.slides, (function(n, i) {
                            t.updateSlide(i, e)
                        }
                        ))
                    },
                    updateSlide: function(e, t) {
                        var i = e && e.$content
                          , o = e.width || e.opts.width
                          , r = e.height || e.opts.height
                          , s = e.$slide;
                        this.adjustCaption(e),
                        i && (o || r || "video" === e.contentType) && !e.hasError && (n.fancybox.stop(i),
                        n.fancybox.setTranslate(i, this.getFitPos(e)),
                        e.pos === this.currPos && (this.isAnimating = !1,
                        this.updateCursor())),
                        this.adjustLayout(e),
                        s.length && (s.trigger("refresh"),
                        e.pos === this.currPos && this.$refs.toolbar.add(this.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", s.get(0).scrollHeight > s.get(0).clientHeight)),
                        this.trigger("onUpdate", e, t)
                    },
                    centerSlide: function(e) {
                        var t = this
                          , i = t.current
                          , o = i.$slide;
                        !t.isClosing && i && (o.siblings().css({
                            transform: "",
                            opacity: ""
                        }),
                        o.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"),
                        n.fancybox.animate(o, {
                            top: 0,
                            left: 0,
                            opacity: 1
                        }, void 0 === e ? 0 : e, (function() {
                            o.css({
                                transform: "",
                                opacity: ""
                            }),
                            i.isComplete || t.complete()
                        }
                        ), !1))
                    },
                    isMoved: function(e) {
                        var t, i, o = e || this.current;
                        return !!o && (i = n.fancybox.getTranslate(this.$refs.stage),
                        t = n.fancybox.getTranslate(o.$slide),
                        !o.$slide.hasClass("fancybox-animated") && (Math.abs(t.top - i.top) > .5 || Math.abs(t.left - i.left) > .5))
                    },
                    updateCursor: function(e, t) {
                        var i, o, r = this.current, s = this.$refs.container;
                        r && !this.isClosing && this.Guestures && (s.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"),
                        o = !!(i = this.canPan(e, t)) || this.isZoomable(),
                        s.toggleClass("fancybox-is-zoomable", o),
                        n("[data-fancybox-zoom]").prop("disabled", !o),
                        i ? s.addClass("fancybox-can-pan") : o && ("zoom" === r.opts.clickContent || n.isFunction(r.opts.clickContent) && "zoom" == r.opts.clickContent(r)) ? s.addClass("fancybox-can-zoomIn") : r.opts.touch && (r.opts.touch.vertical || this.group.length > 1) && "video" !== r.contentType && s.addClass("fancybox-can-swipe"))
                    },
                    isZoomable: function() {
                        var e, t = this.current;
                        if (t && !this.isClosing && "image" === t.type && !t.hasError) {
                            if (!t.isLoaded)
                                return !0;
                            if ((e = this.getFitPos(t)) && (t.width > e.width || t.height > e.height))
                                return !0
                        }
                        return !1
                    },
                    isScaledDown: function(e, t) {
                        var i = !1
                          , o = this.current
                          , r = o.$content;
                        return void 0 !== e && void 0 !== t ? i = e < o.width && t < o.height : r && (i = (i = n.fancybox.getTranslate(r)).width < o.width && i.height < o.height),
                        i
                    },
                    canPan: function(e, t) {
                        var i = this.current
                          , o = null
                          , r = !1;
                        return "image" === i.type && (i.isComplete || e && t) && !i.hasError && (r = this.getFitPos(i),
                        void 0 !== e && void 0 !== t ? o = {
                            width: e,
                            height: t
                        } : i.isComplete && (o = n.fancybox.getTranslate(i.$content)),
                        o && r && (r = Math.abs(o.width - r.width) > 1.5 || Math.abs(o.height - r.height) > 1.5)),
                        r
                    },
                    loadSlide: function(e) {
                        var t, i, o, r = this;
                        if (!e.isLoading && !e.isLoaded) {
                            if (e.isLoading = !0,
                            !1 === r.trigger("beforeLoad", e))
                                return e.isLoading = !1,
                                !1;
                            switch (t = e.type,
                            (i = e.$slide).off("refresh").trigger("onReset").addClass(e.opts.slideClass),
                            t) {
                            case "image":
                                r.setImage(e);
                                break;
                            case "iframe":
                                r.setIframe(e);
                                break;
                            case "html":
                                r.setContent(e, e.src || e.content);
                                break;
                            case "video":
                                r.setContent(e, e.opts.video.tpl.replace(/\{\{src\}\}/gi, e.src).replace("{{format}}", e.opts.videoFormat || e.opts.video.format || "").replace("{{poster}}", e.thumb || ""));
                                break;
                            case "inline":
                                n(e.src).length ? r.setContent(e, n(e.src)) : r.setError(e);
                                break;
                            case "ajax":
                                r.showLoading(e),
                                o = n.ajax(n.extend({}, e.opts.ajax.settings, {
                                    url: e.src,
                                    success: function(t, n) {
                                        "success" === n && r.setContent(e, t)
                                    },
                                    error: function(t, n) {
                                        t && "abort" !== n && r.setError(e)
                                    }
                                })),
                                i.one("onReset", (function() {
                                    o.abort()
                                }
                                ));
                                break;
                            default:
                                r.setError(e)
                            }
                            return !0
                        }
                    },
                    setImage: function(e) {
                        var i, o = this;
                        setTimeout((function() {
                            var t = e.$image;
                            o.isClosing || !e.isLoading || t && t.length && t[0].complete || e.hasError || o.showLoading(e)
                        }
                        ), 50),
                        o.checkSrcset(e),
                        e.$content = n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(e.$slide.addClass("fancybox-slide--image")),
                        !1 !== e.opts.preload && e.opts.width && e.opts.height && e.thumb && (e.width = e.opts.width,
                        e.height = e.opts.height,
                        (i = t.createElement("img")).onerror = function() {
                            n(this).remove(),
                            e.$ghost = null
                        }
                        ,
                        i.onload = function() {
                            o.afterLoad(e)
                        }
                        ,
                        e.$ghost = n(i).addClass("fancybox-image").appendTo(e.$content).attr("src", e.thumb)),
                        o.setBigImage(e)
                    },
                    checkSrcset: function(t) {
                        var n, i, o, r, s = t.opts.srcset || t.opts.image.srcset;
                        if (s) {
                            o = e.devicePixelRatio || 1,
                            r = e.innerWidth * o,
                            (i = s.split(",").map((function(e) {
                                var t = {};
                                return e.trim().split(/\s+/).forEach((function(e, n) {
                                    var i = parseInt(e.substring(0, e.length - 1), 10);
                                    if (0 === n)
                                        return t.url = e;
                                    i && (t.value = i,
                                    t.postfix = e[e.length - 1])
                                }
                                )),
                                t
                            }
                            ))).sort((function(e, t) {
                                return e.value - t.value
                            }
                            ));
                            for (var a = 0; a < i.length; a++) {
                                var l = i[a];
                                if ("w" === l.postfix && l.value >= r || "x" === l.postfix && l.value >= o) {
                                    n = l;
                                    break
                                }
                            }
                            !n && i.length && (n = i[i.length - 1]),
                            n && (t.src = n.url,
                            t.width && t.height && "w" == n.postfix && (t.height = t.width / t.height * n.value,
                            t.width = n.value),
                            t.opts.srcset = s)
                        }
                    },
                    setBigImage: function(e) {
                        var i = this
                          , o = t.createElement("img")
                          , r = n(o);
                        e.$image = r.one("error", (function() {
                            i.setError(e)
                        }
                        )).one("load", (function() {
                            var t;
                            e.$ghost || (i.resolveImageSlideSize(e, this.naturalWidth, this.naturalHeight),
                            i.afterLoad(e)),
                            i.isClosing || (e.opts.srcset && ((t = e.opts.sizes) && "auto" !== t || (t = (e.width / e.height > 1 && a.width() / a.height() > 1 ? "100" : Math.round(e.width / e.height * 100)) + "vw"),
                            r.attr("sizes", t).attr("srcset", e.opts.srcset)),
                            e.$ghost && setTimeout((function() {
                                e.$ghost && !i.isClosing && e.$ghost.hide()
                            }
                            ), Math.min(300, Math.max(1e3, e.height / 1600))),
                            i.hideLoading(e))
                        }
                        )).addClass("fancybox-image").attr("src", e.src).appendTo(e.$content),
                        (o.complete || "complete" == o.readyState) && r.naturalWidth && r.naturalHeight ? r.trigger("load") : o.error && r.trigger("error")
                    },
                    resolveImageSlideSize: function(e, t, n) {
                        var i = parseInt(e.opts.width, 10)
                          , o = parseInt(e.opts.height, 10);
                        e.width = t,
                        e.height = n,
                        i > 0 && (e.width = i,
                        e.height = Math.floor(i * n / t)),
                        o > 0 && (e.width = Math.floor(o * t / n),
                        e.height = o)
                    },
                    setIframe: function(e) {
                        var t, i = this, o = e.opts.iframe, r = e.$slide;
                        e.$content = n('<div class="fancybox-content' + (o.preload ? " fancybox-is-hidden" : "") + '"></div>').css(o.css).appendTo(r),
                        r.addClass("fancybox-slide--" + e.contentType),
                        e.$iframe = t = n(o.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(o.attr).appendTo(e.$content),
                        o.preload ? (i.showLoading(e),
                        t.on("load.fb error.fb", (function(t) {
                            this.isReady = 1,
                            e.$slide.trigger("refresh"),
                            i.afterLoad(e)
                        }
                        )),
                        r.on("refresh.fb", (function() {
                            var n, i = e.$content, s = o.css.width, a = o.css.height;
                            if (1 === t[0].isReady) {
                                try {
                                    n = t.contents().find("body")
                                } catch (e) {}
                                n && n.length && n.children().length && (r.css("overflow", "visible"),
                                i.css({
                                    width: "100%",
                                    "max-width": "100%",
                                    height: "9999px"
                                }),
                                void 0 === s && (s = Math.ceil(Math.max(n[0].clientWidth, n.outerWidth(!0)))),
                                i.css("width", s || "").css("max-width", ""),
                                void 0 === a && (a = Math.ceil(Math.max(n[0].clientHeight, n.outerHeight(!0)))),
                                i.css("height", a || ""),
                                r.css("overflow", "auto")),
                                i.removeClass("fancybox-is-hidden")
                            }
                        }
                        ))) : i.afterLoad(e),
                        t.attr("src", e.src),
                        r.one("onReset", (function() {
                            try {
                                n(this).find("iframe").hide().unbind().attr("src", "//about:blank")
                            } catch (e) {}
                            n(this).off("refresh.fb").empty(),
                            e.isLoaded = !1,
                            e.isRevealed = !1
                        }
                        ))
                    },
                    setContent: function(e, t) {
                        var i;
                        this.isClosing || (this.hideLoading(e),
                        e.$content && n.fancybox.stop(e.$content),
                        e.$slide.empty(),
                        (i = t) && i.hasOwnProperty && i instanceof n && t.parent().length ? ((t.hasClass("fancybox-content") || t.parent().hasClass("fancybox-content")) && t.parents(".fancybox-slide").trigger("onReset"),
                        e.$placeholder = n("<div>").hide().insertAfter(t),
                        t.css("display", "inline-block")) : e.hasError || ("string" === n.type(t) && (t = n("<div>").append(n.trim(t)).contents()),
                        e.opts.filter && (t = n("<div>").html(t).find(e.opts.filter))),
                        e.$slide.one("onReset", (function() {
                            n(this).find("video,audio").trigger("pause"),
                            e.$placeholder && (e.$placeholder.after(t.removeClass("fancybox-content").hide()).remove(),
                            e.$placeholder = null),
                            e.$smallBtn && (e.$smallBtn.remove(),
                            e.$smallBtn = null),
                            e.hasError || (n(this).empty(),
                            e.isLoaded = !1,
                            e.isRevealed = !1)
                        }
                        )),
                        n(t).appendTo(e.$slide),
                        n(t).is("video,audio") && (n(t).addClass("fancybox-video"),
                        n(t).wrap("<div></div>"),
                        e.contentType = "video",
                        e.opts.width = e.opts.width || n(t).attr("width"),
                        e.opts.height = e.opts.height || n(t).attr("height")),
                        e.$content = e.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(),
                        e.$content.siblings().hide(),
                        e.$content.length || (e.$content = e.$slide.wrapInner("<div></div>").children().first()),
                        e.$content.addClass("fancybox-content"),
                        e.$slide.addClass("fancybox-slide--" + e.contentType),
                        this.afterLoad(e))
                    },
                    setError: function(e) {
                        e.hasError = !0,
                        e.$slide.trigger("onReset").removeClass("fancybox-slide--" + e.contentType).addClass("fancybox-slide--error"),
                        e.contentType = "html",
                        this.setContent(e, this.translate(e, e.opts.errorTpl)),
                        e.pos === this.currPos && (this.isAnimating = !1)
                    },
                    showLoading: function(e) {
                        (e = e || this.current) && !e.$spinner && (e.$spinner = n(this.translate(this, this.opts.spinnerTpl)).appendTo(e.$slide).hide().fadeIn("fast"))
                    },
                    hideLoading: function(e) {
                        (e = e || this.current) && e.$spinner && (e.$spinner.stop().remove(),
                        delete e.$spinner)
                    },
                    afterLoad: function(e) {
                        this.isClosing || (e.isLoading = !1,
                        e.isLoaded = !0,
                        this.trigger("afterLoad", e),
                        this.hideLoading(e),
                        !e.opts.smallBtn || e.$smallBtn && e.$smallBtn.length || (e.$smallBtn = n(this.translate(e, e.opts.btnTpl.smallBtn)).appendTo(e.$content)),
                        e.opts.protect && e.$content && !e.hasError && (e.$content.on("contextmenu.fb", (function(e) {
                            return 2 == e.button && e.preventDefault(),
                            !0
                        }
                        )),
                        "image" === e.type && n('<div class="fancybox-spaceball"></div>').appendTo(e.$content)),
                        this.adjustCaption(e),
                        this.adjustLayout(e),
                        e.pos === this.currPos && this.updateCursor(),
                        this.revealContent(e))
                    },
                    adjustCaption: function(e) {
                        var t, n = e || this.current, i = n.opts.caption, o = n.opts.preventCaptionOverlap, r = this.$refs.caption, s = !1;
                        r.toggleClass("fancybox-caption--separate", o),
                        o && i && i.length && (n.pos !== this.currPos ? ((t = r.clone().appendTo(r.parent())).children().eq(0).empty().html(i),
                        s = t.outerHeight(!0),
                        t.empty().remove()) : this.$caption && (s = this.$caption.outerHeight(!0)),
                        n.$slide.css("padding-bottom", s || ""))
                    },
                    adjustLayout: function(e) {
                        var t, n, i, o, r = e || this.current;
                        r.isLoaded && !0 !== r.opts.disableLayoutFix && (r.$content.css("margin-bottom", ""),
                        r.$content.outerHeight() > r.$slide.height() + .5 && (i = r.$slide[0].style["padding-bottom"],
                        o = r.$slide.css("padding-bottom"),
                        parseFloat(o) > 0 && (t = r.$slide[0].scrollHeight,
                        r.$slide.css("padding-bottom", 0),
                        Math.abs(t - r.$slide[0].scrollHeight) < 1 && (n = o),
                        r.$slide.css("padding-bottom", i))),
                        r.$content.css("margin-bottom", n))
                    },
                    revealContent: function(e) {
                        var t, i, o, r, s = this, a = e.$slide, l = !1, c = !1, u = s.isMoved(e), d = e.isRevealed;
                        return e.isRevealed = !0,
                        t = e.opts[s.firstRun ? "animationEffect" : "transitionEffect"],
                        o = e.opts[s.firstRun ? "animationDuration" : "transitionDuration"],
                        o = parseInt(void 0 === e.forcedDuration ? o : e.forcedDuration, 10),
                        !u && e.pos === s.currPos && o || (t = !1),
                        "zoom" === t && (e.pos === s.currPos && o && "image" === e.type && !e.hasError && (c = s.getThumbPos(e)) ? l = s.getFitPos(e) : t = "fade"),
                        "zoom" === t ? (s.isAnimating = !0,
                        l.scaleX = l.width / c.width,
                        l.scaleY = l.height / c.height,
                        "auto" == (r = e.opts.zoomOpacity) && (r = Math.abs(e.width / e.height - c.width / c.height) > .1),
                        r && (c.opacity = .1,
                        l.opacity = 1),
                        n.fancybox.setTranslate(e.$content.removeClass("fancybox-is-hidden"), c),
                        h(e.$content),
                        void n.fancybox.animate(e.$content, l, o, (function() {
                            s.isAnimating = !1,
                            s.complete()
                        }
                        ))) : (s.updateSlide(e),
                        t ? (n.fancybox.stop(a),
                        i = "fancybox-slide--" + (e.pos >= s.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + t,
                        a.addClass(i).removeClass("fancybox-slide--current"),
                        e.$content.removeClass("fancybox-is-hidden"),
                        h(a),
                        "image" !== e.type && e.$content.hide().show(0),
                        void n.fancybox.animate(a, "fancybox-slide--current", o, (function() {
                            a.removeClass(i).css({
                                transform: "",
                                opacity: ""
                            }),
                            e.pos === s.currPos && s.complete()
                        }
                        ), !0)) : (e.$content.removeClass("fancybox-is-hidden"),
                        d || !u || "image" !== e.type || e.hasError || e.$content.hide().fadeIn("fast"),
                        void (e.pos === s.currPos && s.complete())))
                    },
                    getThumbPos: function(e) {
                        var i, o, r, s, a, l, c = e.$thumb;
                        return !(!c || !function(e) {
                            var i, o;
                            return !(!e || e.ownerDocument !== t) && (n(".fancybox-container").css("pointer-events", "none"),
                            i = {
                                x: e.getBoundingClientRect().left + e.offsetWidth / 2,
                                y: e.getBoundingClientRect().top + e.offsetHeight / 2
                            },
                            o = t.elementFromPoint(i.x, i.y) === e,
                            n(".fancybox-container").css("pointer-events", ""),
                            o)
                        }(c[0])) && (o = n.fancybox.getTranslate(c),
                        r = parseFloat(c.css("border-top-width") || 0),
                        s = parseFloat(c.css("border-right-width") || 0),
                        a = parseFloat(c.css("border-bottom-width") || 0),
                        l = parseFloat(c.css("border-left-width") || 0),
                        i = {
                            top: o.top + r,
                            left: o.left + l,
                            width: o.width - s - l,
                            height: o.height - r - a,
                            scaleX: 1,
                            scaleY: 1
                        },
                        o.width > 0 && o.height > 0 && i)
                    },
                    complete: function() {
                        var e, t = this, i = t.current, o = {};
                        !t.isMoved() && i.isLoaded && (i.isComplete || (i.isComplete = !0,
                        i.$slide.siblings().trigger("onReset"),
                        t.preload("inline"),
                        h(i.$slide),
                        i.$slide.addClass("fancybox-slide--complete"),
                        n.each(t.slides, (function(e, i) {
                            i.pos >= t.currPos - 1 && i.pos <= t.currPos + 1 ? o[i.pos] = i : i && (n.fancybox.stop(i.$slide),
                            i.$slide.off().remove())
                        }
                        )),
                        t.slides = o),
                        t.isAnimating = !1,
                        t.updateCursor(),
                        t.trigger("afterShow"),
                        i.opts.video.autoStart && i.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended", (function() {
                            Document.exitFullscreen ? Document.exitFullscreen() : this.webkitExitFullscreen && this.webkitExitFullscreen(),
                            t.next()
                        }
                        )),
                        i.opts.autoFocus && "html" === i.contentType && ((e = i.$content.find("input[autofocus]:enabled:visible:first")).length ? e.trigger("focus") : t.focus(null, !0)),
                        i.$slide.scrollTop(0).scrollLeft(0))
                    },
                    preload: function(e) {
                        var t, n;
                        this.group.length < 2 || (n = this.slides[this.currPos + 1],
                        (t = this.slides[this.currPos - 1]) && t.type === e && this.loadSlide(t),
                        n && n.type === e && this.loadSlide(n))
                    },
                    focus: function(e, i) {
                        var o, r, s = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'].join(",");
                        this.isClosing || ((o = (o = !e && this.current && this.current.isComplete ? this.current.$slide.find("*:visible" + (i ? ":not(.fancybox-close-small)" : "")) : this.$refs.container.find("*:visible")).filter(s).filter((function() {
                            return "hidden" !== n(this).css("visibility") && !n(this).hasClass("disabled")
                        }
                        ))).length ? (r = o.index(t.activeElement),
                        e && e.shiftKey ? (r < 0 || 0 == r) && (e.preventDefault(),
                        o.eq(o.length - 1).trigger("focus")) : (r < 0 || r == o.length - 1) && (e && e.preventDefault(),
                        o.eq(0).trigger("focus"))) : this.$refs.container.trigger("focus"))
                    },
                    activate: function() {
                        var e = this;
                        n(".fancybox-container").each((function() {
                            var t = n(this).data("FancyBox");
                            t && t.id !== e.id && !t.isClosing && (t.trigger("onDeactivate"),
                            t.removeEvents(),
                            t.isVisible = !1)
                        }
                        )),
                        e.isVisible = !0,
                        (e.current || e.isIdle) && (e.update(),
                        e.updateControls()),
                        e.trigger("onActivate"),
                        e.addEvents()
                    },
                    close: function(e, t) {
                        var i, o, r, s, a, l, c, d = this, f = d.current, p = function() {
                            d.cleanUp(e)
                        };
                        return !d.isClosing && (d.isClosing = !0,
                        !1 === d.trigger("beforeClose", e) ? (d.isClosing = !1,
                        u((function() {
                            d.update()
                        }
                        )),
                        !1) : (d.removeEvents(),
                        r = f.$content,
                        i = f.opts.animationEffect,
                        o = n.isNumeric(t) ? t : i ? f.opts.animationDuration : 0,
                        f.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),
                        !0 !== e ? n.fancybox.stop(f.$slide) : i = !1,
                        f.$slide.siblings().trigger("onReset").remove(),
                        o && d.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration", o + "ms"),
                        d.hideLoading(f),
                        d.hideControls(!0),
                        d.updateCursor(),
                        "zoom" !== i || r && o && "image" === f.type && !d.isMoved() && !f.hasError && (c = d.getThumbPos(f)) || (i = "fade"),
                        "zoom" === i ? (n.fancybox.stop(r),
                        l = {
                            top: (s = n.fancybox.getTranslate(r)).top,
                            left: s.left,
                            scaleX: s.width / c.width,
                            scaleY: s.height / c.height,
                            width: c.width,
                            height: c.height
                        },
                        "auto" == (a = f.opts.zoomOpacity) && (a = Math.abs(f.width / f.height - c.width / c.height) > .1),
                        a && (c.opacity = 0),
                        n.fancybox.setTranslate(r, l),
                        h(r),
                        n.fancybox.animate(r, c, o, p),
                        !0) : (i && o ? n.fancybox.animate(f.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + i, o, p) : !0 === e ? setTimeout(p, o) : p(),
                        !0)))
                    },
                    cleanUp: function(t) {
                        var i, o, r, s = this.current.opts.$orig;
                        this.current.$slide.trigger("onReset"),
                        this.$refs.container.empty().remove(),
                        this.trigger("afterClose", t),
                        this.current.opts.backFocus && (s && s.length && s.is(":visible") || (s = this.$trigger),
                        s && s.length && (o = e.scrollX,
                        r = e.scrollY,
                        s.trigger("focus"),
                        n("html, body").scrollTop(r).scrollLeft(o))),
                        this.current = null,
                        (i = n.fancybox.getInstance()) ? i.activate() : (n("body").removeClass("fancybox-active compensate-for-scrollbar"),
                        n("#fancybox-style-noscroll").remove())
                    },
                    trigger: function(e, t) {
                        var i, o = Array.prototype.slice.call(arguments, 1), r = this, s = t && t.opts ? t : r.current;
                        if (s ? o.unshift(s) : s = r,
                        o.unshift(r),
                        n.isFunction(s.opts[e]) && (i = s.opts[e].apply(s, o)),
                        !1 === i)
                            return i;
                        "afterClose" !== e && r.$refs ? r.$refs.container.trigger(e + ".fb", o) : l.trigger(e + ".fb", o)
                    },
                    updateControls: function() {
                        var e = this.current
                          , i = e.index
                          , o = this.$refs.container
                          , r = this.$refs.caption
                          , s = e.opts.caption;
                        e.$slide.trigger("refresh"),
                        s && s.length ? (this.$caption = r,
                        r.children().eq(0).html(s)) : this.$caption = null,
                        this.hasHiddenControls || this.isIdle || this.showControls(),
                        o.find("[data-fancybox-count]").html(this.group.length),
                        o.find("[data-fancybox-index]").html(i + 1),
                        o.find("[data-fancybox-prev]").prop("disabled", !e.opts.loop && i <= 0),
                        o.find("[data-fancybox-next]").prop("disabled", !e.opts.loop && i >= this.group.length - 1),
                        "image" === e.type ? o.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", e.opts.image.src || e.src).show() : e.opts.toolbar && o.find("[data-fancybox-download],[data-fancybox-zoom]").hide(),
                        n(t.activeElement).is(":hidden,[disabled]") && this.$refs.container.trigger("focus")
                    },
                    hideControls: function(e) {
                        var t = ["infobar", "toolbar", "nav"];
                        !e && this.current.opts.preventCaptionOverlap || t.push("caption"),
                        this.$refs.container.removeClass(t.map((function(e) {
                            return "fancybox-show-" + e
                        }
                        )).join(" ")),
                        this.hasHiddenControls = !0
                    },
                    showControls: function() {
                        var e = this.current ? this.current.opts : this.opts
                          , t = this.$refs.container;
                        this.hasHiddenControls = !1,
                        this.idleSecondsCounter = 0,
                        t.toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons)).toggleClass("fancybox-show-infobar", !!(e.infobar && this.group.length > 1)).toggleClass("fancybox-show-caption", !!this.$caption).toggleClass("fancybox-show-nav", !!(e.arrows && this.group.length > 1)).toggleClass("fancybox-is-modal", !!e.modal)
                    },
                    toggleControls: function() {
                        this.hasHiddenControls ? this.showControls() : this.hideControls()
                    }
                }),
                n.fancybox = {
                    version: "3.5.7",
                    defaults: s,
                    getInstance: function(e) {
                        var t = n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox")
                          , i = Array.prototype.slice.call(arguments, 1);
                        return t instanceof b && ("string" === n.type(e) ? t[e].apply(t, i) : "function" === n.type(e) && e.apply(t, i),
                        t)
                    },
                    open: function(e, t, n) {
                        return new b(e,t,n)
                    },
                    close: function(e) {
                        var t = this.getInstance();
                        t && (t.close(),
                        !0 === e && this.close(e))
                    },
                    destroy: function() {
                        this.close(!0),
                        l.add("body").off("click.fb-start", "**")
                    },
                    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                    use3d: (o = t.createElement("div"),
                    e.getComputedStyle && e.getComputedStyle(o) && e.getComputedStyle(o).getPropertyValue("transform") && !(t.documentMode && t.documentMode < 11)),
                    getTranslate: function(e) {
                        var t;
                        return !(!e || !e.length) && {
                            top: (t = e[0].getBoundingClientRect()).top || 0,
                            left: t.left || 0,
                            width: t.width,
                            height: t.height,
                            opacity: parseFloat(e.css("opacity"))
                        }
                    },
                    setTranslate: function(e, t) {
                        var n = ""
                          , i = {};
                        if (e && t)
                            return void 0 === t.left && void 0 === t.top || (n = (void 0 === t.left ? e.position().left : t.left) + "px, " + (void 0 === t.top ? e.position().top : t.top) + "px",
                            n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"),
                            void 0 !== t.scaleX && void 0 !== t.scaleY ? n += " scale(" + t.scaleX + ", " + t.scaleY + ")" : void 0 !== t.scaleX && (n += " scaleX(" + t.scaleX + ")"),
                            n.length && (i.transform = n),
                            void 0 !== t.opacity && (i.opacity = t.opacity),
                            void 0 !== t.width && (i.width = t.width),
                            void 0 !== t.height && (i.height = t.height),
                            e.css(i)
                    },
                    animate: function(e, t, i, o, r) {
                        var s, a = this;
                        n.isFunction(i) && (o = i,
                        i = null),
                        a.stop(e),
                        s = a.getTranslate(e),
                        e.on(f, (function(l) {
                            (!l || !l.originalEvent || e.is(l.originalEvent.target) && "z-index" != l.originalEvent.propertyName) && (a.stop(e),
                            n.isNumeric(i) && e.css("transition-duration", ""),
                            n.isPlainObject(t) ? void 0 !== t.scaleX && void 0 !== t.scaleY && a.setTranslate(e, {
                                top: t.top,
                                left: t.left,
                                width: s.width * t.scaleX,
                                height: s.height * t.scaleY,
                                scaleX: 1,
                                scaleY: 1
                            }) : !0 !== r && e.removeClass(t),
                            n.isFunction(o) && o(l))
                        }
                        )),
                        n.isNumeric(i) && e.css("transition-duration", i + "ms"),
                        n.isPlainObject(t) ? (void 0 !== t.scaleX && void 0 !== t.scaleY && (delete t.width,
                        delete t.height,
                        e.parent().hasClass("fancybox-slide--image") && e.parent().addClass("fancybox-is-scaling")),
                        n.fancybox.setTranslate(e, t)) : e.addClass(t),
                        e.data("timer", setTimeout((function() {
                            e.trigger(f)
                        }
                        ), i + 33))
                    },
                    stop: function(e, t) {
                        e && e.length && (clearTimeout(e.data("timer")),
                        t && e.trigger(f),
                        e.off(f).css("transition-duration", ""),
                        e.parent().removeClass("fancybox-is-scaling"))
                    }
                },
                n.fn.fancybox = function(e) {
                    var t;
                    return (t = (e = e || {}).selector || !1) ? n("body").off("click.fb-start", t).on("click.fb-start", t, {
                        options: e
                    }, g) : this.off("click.fb-start").on("click.fb-start", {
                        items: this,
                        options: e
                    }, g),
                    this
                }
                ,
                l.on("click.fb-start", "[data-fancybox]", g),
                l.on("click.fb-start", "[data-fancybox-trigger]", (function(e) {
                    n('[data-fancybox="' + n(this).attr("data-fancybox-trigger") + '"]').eq(n(this).attr("data-fancybox-index") || 0).trigger("click.fb-start", {
                        $trigger: n(this)
                    })
                }
                )),
                r = null,
                l.on("mousedown mouseup focus blur", ".fancybox-button", (function(e) {
                    switch (e.type) {
                    case "mousedown":
                        r = n(this);
                        break;
                    case "mouseup":
                        r = null;
                        break;
                    case "focusin":
                        n(".fancybox-button").removeClass("fancybox-focus"),
                        n(this).is(r) || n(this).is("[disabled]") || n(this).addClass("fancybox-focus");
                        break;
                    case "focusout":
                        n(".fancybox-button").removeClass("fancybox-focus")
                    }
                }
                ))
            }
        function g(e, t) {
            var i, o, r, s = [], a = 0;
            e && e.isDefaultPrevented() || (e.preventDefault(),
            t = t || {},
            e && e.data && (t = p(e.data.options, t)),
            i = t.$target || n(e.currentTarget).trigger("blur"),
            (r = n.fancybox.getInstance()) && r.$trigger && r.$trigger.is(i) || (s = t.selector ? n(t.selector) : (o = i.attr("data-fancybox") || "") ? (s = e.data ? e.data.items : []).length ? s.filter('[data-fancybox="' + o + '"]') : n('[data-fancybox="' + o + '"]') : [i],
            (a = n(s).index(i)) < 0 && (a = 0),
            (r = n.fancybox.open(s, t, a)).$trigger = i))
        }
    }(window, document, jQuery),
    function(e) {
        "use strict";
        var t = {
            youtube: {
                matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
                params: {
                    autoplay: 1,
                    autohide: 1,
                    fs: 1,
                    rel: 0,
                    hd: 1,
                    wmode: "transparent",
                    enablejsapi: 1,
                    html5: 1
                },
                paramPlace: 8,
                type: "iframe",
                url: "https://www.youtube-nocookie.com/embed/$4",
                thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg"
            },
            vimeo: {
                matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
                params: {
                    autoplay: 1,
                    hd: 1,
                    show_title: 1,
                    show_byline: 1,
                    show_portrait: 0,
                    fullscreen: 1
                },
                paramPlace: 3,
                type: "iframe",
                url: "//player.vimeo.com/video/$2"
            },
            instagram: {
                matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
                type: "image",
                url: "//$1/p/$2/media/?size=l"
            },
            gmap_place: {
                matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
                type: "iframe",
                url: function(e) {
                    return "//maps.google." + e[2] + "/?ll=" + (e[9] ? e[9] + "&z=" + Math.floor(e[10]) + (e[12] ? e[12].replace(/^\//, "&") : "") : e[12] + "").replace(/\?/, "&") + "&output=" + (e[12] && e[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
                }
            },
            gmap_search: {
                matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
                type: "iframe",
                url: function(e) {
                    return "//maps.google." + e[2] + "/maps?q=" + e[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
                }
            }
        }
          , n = function(t, n, i) {
            if (t)
                return i = i || "",
                "object" === e.type(i) && (i = e.param(i, !0)),
                e.each(n, (function(e, n) {
                    t = t.replace("$" + e, n || "")
                }
                )),
                i.length && (t += (t.indexOf("?") > 0 ? "&" : "?") + i),
                t
        };
        e(document).on("objectNeedsType.fb", (function(i, o, r) {
            var s, a, l, c, u, d, f, h = r.src || "", p = !1;
            s = e.extend(!0, {}, t, r.opts.media),
            e.each(s, (function(t, i) {
                if (l = h.match(i.matcher)) {
                    if (p = i.type,
                    f = t,
                    d = {},
                    i.paramPlace && l[i.paramPlace]) {
                        "?" == (u = l[i.paramPlace])[0] && (u = u.substring(1)),
                        u = u.split("&");
                        for (var o = 0; o < u.length; ++o) {
                            var s = u[o].split("=", 2);
                            2 == s.length && (d[s[0]] = decodeURIComponent(s[1].replace(/\+/g, " ")))
                        }
                    }
                    return c = e.extend(!0, {}, i.params, r.opts[t], d),
                    h = "function" === e.type(i.url) ? i.url.call(this, l, c, r) : n(i.url, l, c),
                    a = "function" === e.type(i.thumb) ? i.thumb.call(this, l, c, r) : n(i.thumb, l),
                    "youtube" === t ? h = h.replace(/&t=((\d+)m)?(\d+)s/, (function(e, t, n, i) {
                        return "&start=" + ((n ? 60 * parseInt(n, 10) : 0) + parseInt(i, 10))
                    }
                    )) : "vimeo" === t && (h = h.replace("&%23", "#")),
                    !1
                }
            }
            )),
            p ? (r.opts.thumb || r.opts.$thumb && r.opts.$thumb.length || (r.opts.thumb = a),
            "iframe" === p && (r.opts = e.extend(!0, r.opts, {
                iframe: {
                    preload: !1,
                    attr: {
                        scrolling: "no"
                    }
                }
            })),
            e.extend(r, {
                type: p,
                src: h,
                origSrc: r.src,
                contentSource: f,
                contentType: "image" === p ? "image" : "gmap_place" == f || "gmap_search" == f ? "map" : "video"
            })) : h && (r.type = r.opts.defaultType)
        }
        ));
        var i = {
            youtube: {
                src: "https://www.youtube.com/iframe_api",
                class: "YT",
                loading: !1,
                loaded: !1
            },
            vimeo: {
                src: "https://player.vimeo.com/api/player.js",
                class: "Vimeo",
                loading: !1,
                loaded: !1
            },
            load: function(e) {
                var t, n = this;
                this[e].loaded ? setTimeout((function() {
                    n.done(e)
                }
                )) : this[e].loading || (this[e].loading = !0,
                (t = document.createElement("script")).type = "text/javascript",
                t.src = this[e].src,
                "youtube" === e ? window.onYouTubeIframeAPIReady = function() {
                    n[e].loaded = !0,
                    n.done(e)
                }
                : t.onload = function() {
                    n[e].loaded = !0,
                    n.done(e)
                }
                ,
                document.body.appendChild(t))
            },
            done: function(t) {
                var n, i;
                "youtube" === t && delete window.onYouTubeIframeAPIReady,
                (n = e.fancybox.getInstance()) && (i = n.current.$content.find("iframe"),
                "youtube" === t && void 0 !== YT && YT ? new YT.Player(i.attr("id"),{
                    events: {
                        onStateChange: function(e) {
                            0 == e.data && n.next()
                        }
                    }
                }) : "vimeo" === t && void 0 !== Vimeo && Vimeo && new Vimeo.Player(i).on("ended", (function() {
                    n.next()
                }
                )))
            }
        };
        e(document).on({
            "afterShow.fb": function(e, t, n) {
                t.group.length > 1 && ("youtube" === n.contentSource || "vimeo" === n.contentSource) && i.load(n.contentSource)
            }
        })
    }(jQuery),
    function(e, t, n) {
        "use strict";
        var i = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || function(t) {
            return e.setTimeout(t, 1e3 / 60)
        }
          , o = e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.mozCancelAnimationFrame || e.oCancelAnimationFrame || function(t) {
            e.clearTimeout(t)
        }
          , r = function(t) {
            var n = [];
            for (var i in t = (t = t.originalEvent || t || e.e).touches && t.touches.length ? t.touches : t.changedTouches && t.changedTouches.length ? t.changedTouches : [t])
                t[i].pageX ? n.push({
                    x: t[i].pageX,
                    y: t[i].pageY
                }) : t[i].clientX && n.push({
                    x: t[i].clientX,
                    y: t[i].clientY
                });
            return n
        }
          , s = function(e, t, n) {
            return t && e ? "x" === n ? e.x - t.x : "y" === n ? e.y - t.y : Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)) : 0
        }
          , a = function(e) {
            if (e.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || n.isFunction(e.get(0).onclick) || e.data("selectable"))
                return !0;
            for (var t = 0, i = e[0].attributes, o = i.length; t < o; t++)
                if ("data-fancybox-" === i[t].nodeName.substr(0, 14))
                    return !0;
            return !1
        }
          , l = function(t) {
            for (var n, i, o, r, s, a = !1; n = t.get(0),
            i = void 0,
            o = void 0,
            r = void 0,
            s = void 0,
            i = e.getComputedStyle(n)["overflow-y"],
            o = e.getComputedStyle(n)["overflow-x"],
            r = ("scroll" === i || "auto" === i) && n.scrollHeight > n.clientHeight,
            s = ("scroll" === o || "auto" === o) && n.scrollWidth > n.clientWidth,
            !(a = r || s) && (t = t.parent()).length && !t.hasClass("fancybox-stage") && !t.is("body"); )
                ;
            return a
        }
          , c = function(e) {
            this.instance = e,
            this.$bg = e.$refs.bg,
            this.$stage = e.$refs.stage,
            this.$container = e.$refs.container,
            this.destroy(),
            this.$container.on("touchstart.fb.touch mousedown.fb.touch", n.proxy(this, "ontouchstart"))
        };
        c.prototype.destroy = function() {
            this.$container.off(".fb.touch"),
            n(t).off(".fb.touch"),
            this.requestId && (o(this.requestId),
            this.requestId = null),
            this.tapped && (clearTimeout(this.tapped),
            this.tapped = null)
        }
        ,
        c.prototype.ontouchstart = function(i) {
            var o = n(i.target)
              , c = this.instance
              , u = c.current
              , d = u.$slide
              , f = u.$content
              , h = "touchstart" == i.type;
            if (h && this.$container.off("mousedown.fb.touch"),
            (!i.originalEvent || 2 != i.originalEvent.button) && d.length && o.length && !a(o) && !a(o.parent()) && (o.is("img") || !(i.originalEvent.clientX > o[0].clientWidth + o.offset().left))) {
                if (!u || c.isAnimating || u.$slide.hasClass("fancybox-animated"))
                    return i.stopPropagation(),
                    void i.preventDefault();
                this.realPoints = this.startPoints = r(i),
                this.startPoints.length && (u.touch && i.stopPropagation(),
                this.startEvent = i,
                this.canTap = !0,
                this.$target = o,
                this.$content = f,
                this.opts = u.opts.touch,
                this.isPanning = !1,
                this.isSwiping = !1,
                this.isZooming = !1,
                this.isScrolling = !1,
                this.canPan = c.canPan(),
                this.startTime = (new Date).getTime(),
                this.distanceX = this.distanceY = this.distance = 0,
                this.canvasWidth = Math.round(d[0].clientWidth),
                this.canvasHeight = Math.round(d[0].clientHeight),
                this.contentLastPos = null,
                this.contentStartPos = n.fancybox.getTranslate(this.$content) || {
                    top: 0,
                    left: 0
                },
                this.sliderStartPos = n.fancybox.getTranslate(d),
                this.stagePos = n.fancybox.getTranslate(c.$refs.stage),
                this.sliderStartPos.top -= this.stagePos.top,
                this.sliderStartPos.left -= this.stagePos.left,
                this.contentStartPos.top -= this.stagePos.top,
                this.contentStartPos.left -= this.stagePos.left,
                n(t).off(".fb.touch").on(h ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", n.proxy(this, "ontouchend")).on(h ? "touchmove.fb.touch" : "mousemove.fb.touch", n.proxy(this, "ontouchmove")),
                n.fancybox.isMobile && t.addEventListener("scroll", this.onscroll, !0),
                ((this.opts || this.canPan) && (o.is(this.$stage) || this.$stage.find(o).length) || (o.is(".fancybox-image") && i.preventDefault(),
                n.fancybox.isMobile && o.parents(".fancybox-caption").length)) && (this.isScrollable = l(o) || l(o.parent()),
                n.fancybox.isMobile && this.isScrollable || i.preventDefault(),
                (1 === this.startPoints.length || u.hasError) && (this.canPan ? (n.fancybox.stop(this.$content),
                this.isPanning = !0) : this.isSwiping = !0,
                this.$container.addClass("fancybox-is-grabbing")),
                2 === this.startPoints.length && "image" === u.type && (u.isLoaded || u.$ghost) && (this.canTap = !1,
                this.isSwiping = !1,
                this.isPanning = !1,
                this.isZooming = !0,
                n.fancybox.stop(this.$content),
                this.centerPointStartX = .5 * (this.startPoints[0].x + this.startPoints[1].x) - n(e).scrollLeft(),
                this.centerPointStartY = .5 * (this.startPoints[0].y + this.startPoints[1].y) - n(e).scrollTop(),
                this.percentageOfImageAtPinchPointX = (this.centerPointStartX - this.contentStartPos.left) / this.contentStartPos.width,
                this.percentageOfImageAtPinchPointY = (this.centerPointStartY - this.contentStartPos.top) / this.contentStartPos.height,
                this.startDistanceBetweenFingers = s(this.startPoints[0], this.startPoints[1]))))
            }
        }
        ,
        c.prototype.onscroll = function(e) {
            this.isScrolling = !0,
            t.removeEventListener("scroll", this.onscroll, !0)
        }
        ,
        c.prototype.ontouchmove = function(e) {
            void 0 === e.originalEvent.buttons || 0 !== e.originalEvent.buttons ? this.isScrolling ? this.canTap = !1 : (this.newPoints = r(e),
            (this.opts || this.canPan) && this.newPoints.length && this.newPoints.length && (this.isSwiping && !0 === this.isSwiping || e.preventDefault(),
            this.distanceX = s(this.newPoints[0], this.startPoints[0], "x"),
            this.distanceY = s(this.newPoints[0], this.startPoints[0], "y"),
            this.distance = s(this.newPoints[0], this.startPoints[0]),
            this.distance > 0 && (this.isSwiping ? this.onSwipe(e) : this.isPanning ? this.onPan() : this.isZooming && this.onZoom()))) : this.ontouchend(e)
        }
        ,
        c.prototype.onSwipe = function(t) {
            var r, s = this, a = s.instance, l = s.isSwiping, c = s.sliderStartPos.left || 0;
            if (!0 !== l)
                "x" == l && (s.distanceX > 0 && (s.instance.group.length < 2 || 0 === s.instance.current.index && !s.instance.current.opts.loop) ? c += Math.pow(s.distanceX, .8) : s.distanceX < 0 && (s.instance.group.length < 2 || s.instance.current.index === s.instance.group.length - 1 && !s.instance.current.opts.loop) ? c -= Math.pow(-s.distanceX, .8) : c += s.distanceX),
                s.sliderLastPos = {
                    top: "x" == l ? 0 : s.sliderStartPos.top + s.distanceY,
                    left: c
                },
                s.requestId && (o(s.requestId),
                s.requestId = null),
                s.requestId = i((function() {
                    s.sliderLastPos && (n.each(s.instance.slides, (function(e, t) {
                        var i = t.pos - s.instance.currPos;
                        n.fancybox.setTranslate(t.$slide, {
                            top: s.sliderLastPos.top,
                            left: s.sliderLastPos.left + i * s.canvasWidth + i * t.opts.gutter
                        })
                    }
                    )),
                    s.$container.addClass("fancybox-is-sliding"))
                }
                ));
            else if (Math.abs(s.distance) > 10) {
                if (s.canTap = !1,
                a.group.length < 2 && s.opts.vertical ? s.isSwiping = "y" : a.isDragging || !1 === s.opts.vertical || "auto" === s.opts.vertical && n(e).width() > 800 ? s.isSwiping = "x" : (r = Math.abs(180 * Math.atan2(s.distanceY, s.distanceX) / Math.PI),
                s.isSwiping = r > 45 && r < 135 ? "y" : "x"),
                "y" === s.isSwiping && n.fancybox.isMobile && s.isScrollable)
                    return void (s.isScrolling = !0);
                a.isDragging = s.isSwiping,
                s.startPoints = s.newPoints,
                n.each(a.slides, (function(e, t) {
                    var i, o;
                    n.fancybox.stop(t.$slide),
                    i = n.fancybox.getTranslate(t.$slide),
                    o = n.fancybox.getTranslate(a.$refs.stage),
                    t.$slide.css({
                        transform: "",
                        opacity: "",
                        "transition-duration": ""
                    }).removeClass("fancybox-animated").removeClass((function(e, t) {
                        return (t.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                    }
                    )),
                    t.pos === a.current.pos && (s.sliderStartPos.top = i.top - o.top,
                    s.sliderStartPos.left = i.left - o.left),
                    n.fancybox.setTranslate(t.$slide, {
                        top: i.top - o.top,
                        left: i.left - o.left
                    })
                }
                )),
                a.SlideShow && a.SlideShow.isActive && a.SlideShow.stop()
            }
        }
        ,
        c.prototype.onPan = function() {
            var e = this;
            s(e.newPoints[0], e.realPoints[0]) < (n.fancybox.isMobile ? 10 : 5) ? e.startPoints = e.newPoints : (e.canTap = !1,
            e.contentLastPos = e.limitMovement(),
            e.requestId && o(e.requestId),
            e.requestId = i((function() {
                n.fancybox.setTranslate(e.$content, e.contentLastPos)
            }
            )))
        }
        ,
        c.prototype.limitMovement = function() {
            var e, t, n, i, o, r, s = this.canvasWidth, a = this.canvasHeight, l = this.distanceX, c = this.distanceY, u = this.contentStartPos, d = u.left, f = u.top, h = u.width, p = u.height;
            return o = h > s ? d + l : d,
            r = f + c,
            e = Math.max(0, .5 * s - .5 * h),
            t = Math.max(0, .5 * a - .5 * p),
            n = Math.min(s - h, .5 * s - .5 * h),
            i = Math.min(a - p, .5 * a - .5 * p),
            l > 0 && o > e && (o = e - 1 + Math.pow(-e + d + l, .8) || 0),
            l < 0 && o < n && (o = n + 1 - Math.pow(n - d - l, .8) || 0),
            c > 0 && r > t && (r = t - 1 + Math.pow(-t + f + c, .8) || 0),
            c < 0 && r < i && (r = i + 1 - Math.pow(i - f - c, .8) || 0),
            {
                top: r,
                left: o
            }
        }
        ,
        c.prototype.limitPosition = function(e, t, n, i) {
            var o = this.canvasWidth
              , r = this.canvasHeight;
            return e = n > o ? (e = e > 0 ? 0 : e) < o - n ? o - n : e : Math.max(0, o / 2 - n / 2),
            {
                top: t = i > r ? (t = t > 0 ? 0 : t) < r - i ? r - i : t : Math.max(0, r / 2 - i / 2),
                left: e
            }
        }
        ,
        c.prototype.onZoom = function() {
            var t = this
              , r = t.contentStartPos
              , a = r.width
              , l = r.height
              , c = r.left
              , u = r.top
              , d = s(t.newPoints[0], t.newPoints[1]) / t.startDistanceBetweenFingers
              , f = Math.floor(a * d)
              , h = Math.floor(l * d)
              , p = (a - f) * t.percentageOfImageAtPinchPointX
              , b = (l - h) * t.percentageOfImageAtPinchPointY
              , g = (t.newPoints[0].x + t.newPoints[1].x) / 2 - n(e).scrollLeft()
              , T = (t.newPoints[0].y + t.newPoints[1].y) / 2 - n(e).scrollTop()
              , m = g - t.centerPointStartX
              , v = {
                top: u + (b + (T - t.centerPointStartY)),
                left: c + (p + m),
                scaleX: d,
                scaleY: d
            };
            t.canTap = !1,
            t.newWidth = f,
            t.newHeight = h,
            t.contentLastPos = v,
            t.requestId && o(t.requestId),
            t.requestId = i((function() {
                n.fancybox.setTranslate(t.$content, t.contentLastPos)
            }
            ))
        }
        ,
        c.prototype.ontouchend = function(e) {
            var i = this.isSwiping
              , s = this.isPanning
              , a = this.isZooming
              , l = this.isScrolling;
            if (this.endPoints = r(e),
            this.dMs = Math.max((new Date).getTime() - this.startTime, 1),
            this.$container.removeClass("fancybox-is-grabbing"),
            n(t).off(".fb.touch"),
            t.removeEventListener("scroll", this.onscroll, !0),
            this.requestId && (o(this.requestId),
            this.requestId = null),
            this.isSwiping = !1,
            this.isPanning = !1,
            this.isZooming = !1,
            this.isScrolling = !1,
            this.instance.isDragging = !1,
            this.canTap)
                return this.onTap(e);
            this.speed = 100,
            this.velocityX = this.distanceX / this.dMs * .5,
            this.velocityY = this.distanceY / this.dMs * .5,
            s ? this.endPanning() : a ? this.endZooming() : this.endSwiping(i, l)
        }
        ,
        c.prototype.endSwiping = function(e, t) {
            var i = !1
              , o = this.instance.group.length
              , r = Math.abs(this.distanceX)
              , s = "x" == e && o > 1 && (this.dMs > 130 && r > 10 || r > 50);
            this.sliderLastPos = null,
            "y" == e && !t && Math.abs(this.distanceY) > 50 ? (n.fancybox.animate(this.instance.current.$slide, {
                top: this.sliderStartPos.top + this.distanceY + 150 * this.velocityY,
                opacity: 0
            }, 200),
            i = this.instance.close(!0, 250)) : s && this.distanceX > 0 ? i = this.instance.previous(300) : s && this.distanceX < 0 && (i = this.instance.next(300)),
            !1 !== i || "x" != e && "y" != e || this.instance.centerSlide(200),
            this.$container.removeClass("fancybox-is-sliding")
        }
        ,
        c.prototype.endPanning = function() {
            var e, t, i;
            this.contentLastPos && (!1 === this.opts.momentum || this.dMs > 350 ? (e = this.contentLastPos.left,
            t = this.contentLastPos.top) : (e = this.contentLastPos.left + 500 * this.velocityX,
            t = this.contentLastPos.top + 500 * this.velocityY),
            (i = this.limitPosition(e, t, this.contentStartPos.width, this.contentStartPos.height)).width = this.contentStartPos.width,
            i.height = this.contentStartPos.height,
            n.fancybox.animate(this.$content, i, 366))
        }
        ,
        c.prototype.endZooming = function() {
            var e, t, i, o, r = this.instance.current, s = this.newWidth, a = this.newHeight;
            this.contentLastPos && (e = this.contentLastPos.left,
            o = {
                top: t = this.contentLastPos.top,
                left: e,
                width: s,
                height: a,
                scaleX: 1,
                scaleY: 1
            },
            n.fancybox.setTranslate(this.$content, o),
            s < this.canvasWidth && a < this.canvasHeight ? this.instance.scaleToFit(150) : s > r.width || a > r.height ? this.instance.scaleToActual(this.centerPointStartX, this.centerPointStartY, 150) : (i = this.limitPosition(e, t, s, a),
            n.fancybox.animate(this.$content, i, 150)))
        }
        ,
        c.prototype.onTap = function(t) {
            var i, o = this, s = n(t.target), a = o.instance, l = a.current, c = t && r(t) || o.startPoints, u = c[0] ? c[0].x - n(e).scrollLeft() - o.stagePos.left : 0, d = c[0] ? c[0].y - n(e).scrollTop() - o.stagePos.top : 0, f = function(e) {
                var i = l.opts[e];
                if (n.isFunction(i) && (i = i.apply(a, [l, t])),
                i)
                    switch (i) {
                    case "close":
                        a.close(o.startEvent);
                        break;
                    case "toggleControls":
                        a.toggleControls();
                        break;
                    case "next":
                        a.next();
                        break;
                    case "nextOrClose":
                        a.group.length > 1 ? a.next() : a.close(o.startEvent);
                        break;
                    case "zoom":
                        "image" == l.type && (l.isLoaded || l.$ghost) && (a.canPan() ? a.scaleToFit() : a.isScaledDown() ? a.scaleToActual(u, d) : a.group.length < 2 && a.close(o.startEvent))
                    }
            };
            if ((!t.originalEvent || 2 != t.originalEvent.button) && (s.is("img") || !(u > s[0].clientWidth + s.offset().left))) {
                if (s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"))
                    i = "Outside";
                else if (s.is(".fancybox-slide"))
                    i = "Slide";
                else {
                    if (!a.current.$content || !a.current.$content.find(s).addBack().filter(s).length)
                        return;
                    i = "Content"
                }
                if (o.tapped) {
                    if (clearTimeout(o.tapped),
                    o.tapped = null,
                    Math.abs(u - o.tapX) > 50 || Math.abs(d - o.tapY) > 50)
                        return this;
                    f("dblclick" + i)
                } else
                    o.tapX = u,
                    o.tapY = d,
                    l.opts["dblclick" + i] && l.opts["dblclick" + i] !== l.opts["click" + i] ? o.tapped = setTimeout((function() {
                        o.tapped = null,
                        a.isAnimating || f("click" + i)
                    }
                    ), 500) : f("click" + i);
                return this
            }
        }
        ,
        n(t).on("onActivate.fb", (function(e, t) {
            t && !t.Guestures && (t.Guestures = new c(t))
        }
        )).on("beforeClose.fb", (function(e, t) {
            t && t.Guestures && t.Guestures.destroy()
        }
        ))
    }(window, document, jQuery),
    function(e, t) {
        "use strict";
        t.extend(!0, t.fancybox.defaults, {
            btnTpl: {
                slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'
            },
            slideShow: {
                autoStart: !1,
                speed: 3e3,
                progress: !0
            }
        });
        var n = function(e) {
            this.instance = e,
            this.init()
        };
        t.extend(n.prototype, {
            timer: null,
            isActive: !1,
            $button: null,
            init: function() {
                var e = this
                  , n = e.instance
                  , i = n.group[n.currIndex].opts.slideShow;
                e.$button = n.$refs.toolbar.find("[data-fancybox-play]").on("click", (function() {
                    e.toggle()
                }
                )),
                n.group.length < 2 || !i ? e.$button.hide() : i.progress && (e.$progress = t('<div class="fancybox-progress"></div>').appendTo(n.$refs.inner))
            },
            set: function(e) {
                var n = this.instance
                  , i = n.current;
                i && (!0 === e || i.opts.loop || n.currIndex < n.group.length - 1) ? this.isActive && "video" !== i.contentType && (this.$progress && t.fancybox.animate(this.$progress.show(), {
                    scaleX: 1
                }, i.opts.slideShow.speed),
                this.timer = setTimeout((function() {
                    n.current.opts.loop || n.current.index != n.group.length - 1 ? n.next() : n.jumpTo(0)
                }
                ), i.opts.slideShow.speed)) : (this.stop(),
                n.idleSecondsCounter = 0,
                n.showControls())
            },
            clear: function() {
                clearTimeout(this.timer),
                this.timer = null,
                this.$progress && this.$progress.removeAttr("style").hide()
            },
            start: function() {
                var e = this.instance.current;
                e && (this.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"),
                this.isActive = !0,
                e.isComplete && this.set(!0),
                this.instance.trigger("onSlideShowChange", !0))
            },
            stop: function() {
                var e = this.instance.current;
                this.clear(),
                this.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"),
                this.isActive = !1,
                this.instance.trigger("onSlideShowChange", !1),
                this.$progress && this.$progress.removeAttr("style").hide()
            },
            toggle: function() {
                this.isActive ? this.stop() : this.start()
            }
        }),
        t(e).on({
            "onInit.fb": function(e, t) {
                t && !t.SlideShow && (t.SlideShow = new n(t))
            },
            "beforeShow.fb": function(e, t, n, i) {
                var o = t && t.SlideShow;
                i ? o && n.opts.slideShow.autoStart && o.start() : o && o.isActive && o.clear()
            },
            "afterShow.fb": function(e, t, n) {
                var i = t && t.SlideShow;
                i && i.isActive && i.set()
            },
            "afterKeydown.fb": function(n, i, o, r, s) {
                var a = i && i.SlideShow;
                !a || !o.opts.slideShow || 80 !== s && 32 !== s || t(e.activeElement).is("button,a,input") || (r.preventDefault(),
                a.toggle())
            },
            "beforeClose.fb onDeactivate.fb": function(e, t) {
                var n = t && t.SlideShow;
                n && n.stop()
            }
        }),
        t(e).on("visibilitychange", (function() {
            var n = t.fancybox.getInstance()
              , i = n && n.SlideShow;
            i && i.isActive && (e.hidden ? i.clear() : i.set())
        }
        ))
    }(document, jQuery),
    function(e, t) {
        "use strict";
        var n = function() {
            for (var t = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], n = {}, i = 0; i < t.length; i++) {
                var o = t[i];
                if (o && o[1]in e) {
                    for (var r = 0; r < o.length; r++)
                        n[t[0][r]] = o[r];
                    return n
                }
            }
            return !1
        }();
        if (n) {
            var i = {
                request: function(t) {
                    (t = t || e.documentElement)[n.requestFullscreen](t.ALLOW_KEYBOARD_INPUT)
                },
                exit: function() {
                    e[n.exitFullscreen]()
                },
                toggle: function(t) {
                    t = t || e.documentElement,
                    this.isFullscreen() ? this.exit() : this.request(t)
                },
                isFullscreen: function() {
                    return Boolean(e[n.fullscreenElement])
                },
                enabled: function() {
                    return Boolean(e[n.fullscreenEnabled])
                }
            };
            t.extend(!0, t.fancybox.defaults, {
                btnTpl: {
                    fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'
                },
                fullScreen: {
                    autoStart: !1
                }
            }),
            t(e).on(n.fullscreenchange, (function() {
                var e = i.isFullscreen()
                  , n = t.fancybox.getInstance();
                n && (n.current && "image" === n.current.type && n.isAnimating && (n.isAnimating = !1,
                n.update(!0, !0, 0),
                n.isComplete || n.complete()),
                n.trigger("onFullscreenChange", e),
                n.$refs.container.toggleClass("fancybox-is-fullscreen", e),
                n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !e).toggleClass("fancybox-button--fsexit", e))
            }
            ))
        }
        t(e).on({
            "onInit.fb": function(e, t) {
                n ? t && t.group[t.currIndex].opts.fullScreen ? (t.$refs.container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", (function(e) {
                    e.stopPropagation(),
                    e.preventDefault(),
                    i.toggle()
                }
                )),
                t.opts.fullScreen && !0 === t.opts.fullScreen.autoStart && i.request(),
                t.FullScreen = i) : t && t.$refs.toolbar.find("[data-fancybox-fullscreen]").hide() : t.$refs.toolbar.find("[data-fancybox-fullscreen]").remove()
            },
            "afterKeydown.fb": function(e, t, n, i, o) {
                t && t.FullScreen && 70 === o && (i.preventDefault(),
                t.FullScreen.toggle())
            },
            "beforeClose.fb": function(e, t) {
                t && t.FullScreen && t.$refs.container.hasClass("fancybox-is-fullscreen") && i.exit()
            }
        })
    }(document, jQuery),
    function(e, t) {
        "use strict";
        var n = "fancybox-thumbs";
        t.fancybox.defaults = t.extend(!0, {
            btnTpl: {
                thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'
            },
            thumbs: {
                autoStart: !1,
                hideOnClose: !0,
                parentEl: ".fancybox-container",
                axis: "y"
            }
        }, t.fancybox.defaults);
        var i = function(e) {
            this.init(e)
        };
        t.extend(i.prototype, {
            $button: null,
            $grid: null,
            $list: null,
            isVisible: !1,
            isActive: !1,
            init: function(e) {
                var t = this
                  , n = e.group
                  , i = 0;
                t.instance = e,
                t.opts = n[e.currIndex].opts.thumbs,
                e.Thumbs = t,
                t.$button = e.$refs.toolbar.find("[data-fancybox-thumbs]");
                for (var o = 0, r = n.length; o < r && (n[o].thumb && i++,
                !(i > 1)); o++)
                    ;
                i > 1 && t.opts ? (t.$button.removeAttr("style").on("click", (function() {
                    t.toggle()
                }
                )),
                t.isActive = !0) : t.$button.hide()
            },
            create: function() {
                var e, i = this.instance, o = this.opts.parentEl, r = [];
                this.$grid || (this.$grid = t('<div class="' + n + " " + n + "-" + this.opts.axis + '"></div>').appendTo(i.$refs.container.find(o).addBack().filter(o)),
                this.$grid.on("click", "a", (function() {
                    i.jumpTo(t(this).attr("data-index"))
                }
                ))),
                this.$list || (this.$list = t('<div class="' + n + '__list">').appendTo(this.$grid)),
                t.each(i.group, (function(t, n) {
                    (e = n.thumb) || "image" !== n.type || (e = n.src),
                    r.push('<a href="javascript:;" tabindex="0" data-index="' + t + '"' + (e && e.length ? ' style="background-image:url(' + e + ')"' : 'class="fancybox-thumbs-missing"') + "></a>")
                }
                )),
                this.$list[0].innerHTML = r.join(""),
                "x" === this.opts.axis && this.$list.width(parseInt(this.$grid.css("padding-right"), 10) + i.group.length * this.$list.children().eq(0).outerWidth(!0))
            },
            focus: function(e) {
                var t, n, i = this.$list, o = this.$grid;
                this.instance.current && (n = (t = i.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + this.instance.current.index + '"]').addClass("fancybox-thumbs-active")).position(),
                "y" === this.opts.axis && (n.top < 0 || n.top > i.height() - t.outerHeight()) ? i.stop().animate({
                    scrollTop: i.scrollTop() + n.top
                }, e) : "x" === this.opts.axis && (n.left < o.scrollLeft() || n.left > o.scrollLeft() + (o.width() - t.outerWidth())) && i.parent().stop().animate({
                    scrollLeft: n.left
                }, e))
            },
            update: function() {
                this.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible),
                this.isVisible ? (this.$grid || this.create(),
                this.instance.trigger("onThumbsShow"),
                this.focus(0)) : this.$grid && this.instance.trigger("onThumbsHide"),
                this.instance.update()
            },
            hide: function() {
                this.isVisible = !1,
                this.update()
            },
            show: function() {
                this.isVisible = !0,
                this.update()
            },
            toggle: function() {
                this.isVisible = !this.isVisible,
                this.update()
            }
        }),
        t(e).on({
            "onInit.fb": function(e, t) {
                var n;
                t && !t.Thumbs && (n = new i(t)).isActive && !0 === n.opts.autoStart && n.show()
            },
            "beforeShow.fb": function(e, t, n, i) {
                var o = t && t.Thumbs;
                o && o.isVisible && o.focus(i ? 0 : 250)
            },
            "afterKeydown.fb": function(e, t, n, i, o) {
                var r = t && t.Thumbs;
                r && r.isActive && 71 === o && (i.preventDefault(),
                r.toggle())
            },
            "beforeClose.fb": function(e, t) {
                var n = t && t.Thumbs;
                n && n.isVisible && !1 !== n.opts.hideOnClose && n.$grid.hide()
            }
        })
    }(document, jQuery),
    function(e, t) {
        "use strict";
        t.extend(!0, t.fancybox.defaults, {
            btnTpl: {
                share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'
            },
            share: {
                url: function(e, t) {
                    return !e.currentHash && "inline" !== t.type && "html" !== t.type && (t.origSrc || t.src) || window.location
                },
                tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'
            }
        }),
        t(e).on("click", "[data-fancybox-share]", (function() {
            var e, n, i, o, r = t.fancybox.getInstance(), s = r.current || null;
            s && ("function" === t.type(s.opts.share.url) && (e = s.opts.share.url.apply(s, [r, s])),
            n = s.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === s.type ? encodeURIComponent(s.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(e)).replace(/\{\{url_raw\}\}/g, (i = e,
            o = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;",
                "`": "&#x60;",
                "=": "&#x3D;"
            },
            String(i).replace(/[&<>"'`=\/]/g, (function(e) {
                return o[e]
            }
            )))).replace(/\{\{descr\}\}/g, r.$caption ? encodeURIComponent(r.$caption.text()) : ""),
            t.fancybox.open({
                src: r.translate(r, n),
                type: "html",
                opts: {
                    touch: !1,
                    animationEffect: !1,
                    afterLoad: function(e, t) {
                        r.$refs.container.one("beforeClose.fb", (function() {
                            e.close(null, 0)
                        }
                        )),
                        t.$content.find(".fancybox-share__button").click((function() {
                            return window.open(this.href, "Share", "width=550, height=450"),
                            !1
                        }
                        ))
                    },
                    mobile: {
                        autoFocus: !1
                    }
                }
            }))
        }
        ))
    }(document, jQuery),
    function(e, t, n) {
        "use strict";
        function i() {
            var t = e.location.hash.substr(1)
              , n = t.split("-")
              , i = n.length > 1 && /^\+?\d+$/.test(n[n.length - 1]) && parseInt(n.pop(-1), 10) || 1;
            return {
                hash: t,
                index: i < 1 ? 1 : i,
                gallery: n.join("-")
            }
        }
        function o(e) {
            "" !== e.gallery && n("[data-fancybox='" + n.escapeSelector(e.gallery) + "']").eq(e.index - 1).focus().trigger("click.fb-start")
        }
        function r(e) {
            var t, n;
            return !!e && ("" !== (n = (t = e.current ? e.current.opts : e.opts).hash || (t.$orig ? t.$orig.data("fancybox") || t.$orig.data("fancybox-trigger") : "")) && n)
        }
        n.escapeSelector || (n.escapeSelector = function(e) {
            return (e + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, (function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            }
            ))
        }
        ),
        n((function() {
            !1 !== n.fancybox.defaults.hash && (n(t).on({
                "onInit.fb": function(e, t) {
                    var n, o;
                    !1 !== t.group[t.currIndex].opts.hash && (n = i(),
                    (o = r(t)) && n.gallery && o == n.gallery && (t.currIndex = n.index - 1))
                },
                "beforeShow.fb": function(n, i, o, s) {
                    var a;
                    o && !1 !== o.opts.hash && (a = r(i)) && (i.currentHash = a + (i.group.length > 1 ? "-" + (o.index + 1) : ""),
                    e.location.hash !== "#" + i.currentHash && (s && !i.origHash && (i.origHash = e.location.hash),
                    i.hashTimer && clearTimeout(i.hashTimer),
                    i.hashTimer = setTimeout((function() {
                        "replaceState"in e.history ? (e.history[s ? "pushState" : "replaceState"]({}, t.title, e.location.pathname + e.location.search + "#" + i.currentHash),
                        s && (i.hasCreatedHistory = !0)) : e.location.hash = i.currentHash,
                        i.hashTimer = null
                    }
                    ), 300)))
                },
                "beforeClose.fb": function(n, i, o) {
                    o && !1 !== o.opts.hash && (clearTimeout(i.hashTimer),
                    i.currentHash && i.hasCreatedHistory ? e.history.back() : i.currentHash && ("replaceState"in e.history ? e.history.replaceState({}, t.title, e.location.pathname + e.location.search + (i.origHash || "")) : e.location.hash = i.origHash),
                    i.currentHash = null)
                }
            }),
            n(e).on("hashchange.fb", (function() {
                var e = i()
                  , t = null;
                n.each(n(".fancybox-container").get().reverse(), (function(e, i) {
                    var o = n(i).data("FancyBox");
                    if (o && o.currentHash)
                        return t = o,
                        !1
                }
                )),
                t ? t.currentHash === e.gallery + "-" + e.index || 1 === e.index && t.currentHash == e.gallery || (t.currentHash = null,
                t.close()) : "" !== e.gallery && o(e)
            }
            )),
            setTimeout((function() {
                n.fancybox.getInstance() || o(i())
            }
            ), 50))
        }
        ))
    }(window, document, jQuery),
    function(e, t) {
        "use strict";
        var n = (new Date).getTime();
        t(e).on({
            "onInit.fb": function(e, t, i) {
                t.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", (function(e) {
                    var i = t.current
                      , o = (new Date).getTime();
                    t.group.length < 2 || !1 === i.opts.wheel || "auto" === i.opts.wheel && "image" !== i.type || (e.preventDefault(),
                    e.stopPropagation(),
                    i.$slide.hasClass("fancybox-animated") || (e = e.originalEvent || e,
                    o - n < 250 || (n = o,
                    t[(-e.deltaY || -e.deltaX || e.wheelDelta || -e.detail) < 0 ? "next" : "previous"]())))
                }
                ))
            }
        })
    }(document, jQuery)
}
, function(e, t, n) {
    (e.exports ? function(t) {
        e.exports = t()
    }
    : n(17))((function() {
        "use strict";
        var e, t = {
            mobileDetectRules: {
                phones: {
                    iPhone: "\\biPhone\\b|\\biPod\\b",
                    BlackBerry: "BlackBerry|\\bBB10\\b|rim[0-9]+|\\b(BBA100|BBB100|BBD100|BBE100|BBF100|STH100)\\b-[0-9]+",
                    Pixel: "; \\bPixel\\b",
                    HTC: "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m|Android [0-9.]+; Pixel",
                    Nexus: "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 5X|Nexus 6",
                    Dell: "Dell[;]? (Streak|Aero|Venue|Venue Pro|Flash|Smoke|Mini 3iX)|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
                    Motorola: "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b|XT1068|XT1092|XT1052",
                    Samsung: "\\bSamsung\\b|SM-G950F|SM-G955F|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|SM-N910C|SM-A310F|GT-I9190|SM-J500FN|SM-G903F|SM-J330F|SM-G610F|SM-G981B|SM-G892A|SM-A530F",
                    LG: "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323|M257)|LM-G710",
                    Sony: "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533|SOV34|601SO|F8332",
                    Asus: "Asus.*Galaxy|PadFone.*Mobile",
                    Xiaomi: "^(?!.*\\bx11\\b).*xiaomi.*$|POCOPHONE F1|MI 8|Redmi Note 9S|Redmi Note 5A Prime|N2G47H|M2001J2G|M2001J2I|M1805E10A|M2004J11G|M1902F1G|M2002J9G|M2004J19G|M2003J6A1G",
                    NokiaLumia: "Lumia [0-9]{3,4}",
                    Micromax: "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
                    Palm: "PalmSource|Palm",
                    Vertu: "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
                    Pantech: "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
                    Fly: "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
                    Wiko: "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
                    iMobile: "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
                    SimValley: "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
                    Wolfgang: "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
                    Alcatel: "Alcatel",
                    Nintendo: "Nintendo (3DS|Switch)",
                    Amoi: "Amoi",
                    INQ: "INQ",
                    OnePlus: "ONEPLUS",
                    GenericPhone: "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"
                },
                tablets: {
                    iPad: "iPad|iPad.*Mobile",
                    NexusTablet: "Android.*Nexus[\\s]+(7|9|10)",
                    GoogleTablet: "Android.*Pixel C",
                    SamsungTablet: "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y?|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|SM-P555M|SM-P355M|SM-T113NU|SM-T815Y|SM-T585|SM-T285|SM-T825|SM-W708|SM-T835|SM-T830|SM-T837V|SM-T720|SM-T510|SM-T387V|SM-P610|SM-T290|SM-T515|SM-T590|SM-T595|SM-T725|SM-T817P|SM-P585N0|SM-T395|SM-T295|SM-T865|SM-P610N|SM-P615|SM-T970|SM-T380|SM-T5950|SM-T905|SM-T231|SM-T500|SM-T860",
                    Kindle: "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk/[0-9.]+ like Chrome/[0-9.]+ (?!Mobile)",
                    SurfaceTablet: "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
                    HPTablet: "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
                    AsusTablet: "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b|\\bP024\\b|\\bP00C\\b",
                    BlackBerryTablet: "PlayBook|RIM Tablet",
                    HTCtablet: "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
                    MotorolaTablet: "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
                    NookTablet: "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
                    AcerTablet: "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30|A3-A40",
                    ToshibaTablet: "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
                    LGTablet: "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
                    FujitsuTablet: "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
                    PrestigioTablet: "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",
                    LenovoTablet: "Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)|TB-X103F|TB-X304X|TB-X304F|TB-X304L|TB-X505F|TB-X505L|TB-X505X|TB-X605F|TB-X605L|TB-8703F|TB-8703X|TB-8703N|TB-8704N|TB-8704F|TB-8704X|TB-8704V|TB-7304F|TB-7304I|TB-7304X|Tab2A7-10F|Tab2A7-20F|TB2-X30L|YT3-X50L|YT3-X50F|YT3-X50M|YT-X705F|YT-X703F|YT-X703L|YT-X705L|YT-X705X|TB2-X30F|TB2-X30L|TB2-X30M|A2107A-F|A2107A-H|TB3-730F|TB3-730M|TB3-730X|TB-7504F|TB-7504X|TB-X704F|TB-X104F|TB3-X70F|TB-X705F|TB-8504F|TB3-X70L|TB3-710F|TB-X704L",
                    DellTablet: "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
                    YarvikTablet: "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
                    MedionTablet: "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
                    ArnovaTablet: "97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
                    IntensoTablet: "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
                    IRUTablet: "M702pro",
                    MegafonTablet: "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
                    EbodaTablet: "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
                    AllViewTablet: "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
                    ArchosTablet: "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
                    AinolTablet: "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
                    NokiaLumiaTablet: "Lumia 2520",
                    SonyTablet: "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP641|SGP612|SOT31|SGP771|SGP611|SGP612|SGP712",
                    PhilipsTablet: "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
                    CubeTablet: "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
                    CobyTablet: "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
                    MIDTablet: "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",
                    MSITablet: "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
                    SMiTTablet: "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
                    RockChipTablet: "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
                    FlyTablet: "IQ310|Fly Vision",
                    bqTablet: "Android.*(bq)?.*\\b(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris ([E|M]10|M8))\\b|Maxwell.*Lite|Maxwell.*Plus",
                    HuaweiTablet: "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim|M2-A01L|BAH-L09|BAH-W09|AGS-L09|CMR-AL19",
                    NecTablet: "\\bN-06D|\\bN-08D",
                    PantechTablet: "Pantech.*P4100",
                    BronchoTablet: "Broncho.*(N701|N708|N802|a710)",
                    VersusTablet: "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
                    ZyncTablet: "z1000|Z99 2G|z930|z990|z909|Z919|z900",
                    PositivoTablet: "TB07STA|TB10STA|TB07FTA|TB10FTA",
                    NabiTablet: "Android.*\\bNabi",
                    KoboTablet: "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
                    DanewTablet: "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
                    TexetTablet: "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
                    PlaystationTablet: "Playstation.*(Portable|Vita)",
                    TrekstorTablet: "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
                    PyleAudioTablet: "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
                    AdvanTablet: "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
                    DanyTechTablet: "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
                    GalapadTablet: "Android [0-9.]+; [a-z-]+; \\bG1\\b",
                    MicromaxTablet: "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
                    KarbonnTablet: "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
                    AllFineTablet: "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
                    PROSCANTablet: "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
                    YONESTablet: "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
                    ChangJiaTablet: "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
                    GUTablet: "TX-A1301|TX-M9002|Q702|kf026",
                    PointOfViewTablet: "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
                    OvermaxTablet: "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)|Qualcore 1027",
                    HCLTablet: "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
                    DPSTablet: "DPS Dream 9|DPS Dual 7",
                    VistureTablet: "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
                    CrestaTablet: "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
                    MediatekTablet: "\\bMT8125|MT8389|MT8135|MT8377\\b",
                    ConcordeTablet: "Concorde([ ]+)?Tab|ConCorde ReadMan",
                    GoCleverTablet: "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
                    ModecomTablet: "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
                    VoninoTablet: "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
                    ECSTablet: "V07OT2|TM105A|S10OT1|TR10CS1",
                    StorexTablet: "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
                    VodafoneTablet: "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497|VFD 1400",
                    EssentielBTablet: "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
                    RossMoorTablet: "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
                    iMobileTablet: "i-mobile i-note",
                    TolinoTablet: "tolino tab [0-9.]+|tolino shine",
                    AudioSonicTablet: "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
                    AMPETablet: "Android.* A78 ",
                    SkkTablet: "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
                    TecnoTablet: "TECNO P9|TECNO DP8D",
                    JXDTablet: "Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
                    iJoyTablet: "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
                    FX2Tablet: "FX2 PAD7|FX2 PAD10",
                    XoroTablet: "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
                    ViewsonicTablet: "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
                    VerizonTablet: "QTAQZ3|QTAIR7|QTAQTZ3|QTASUN1|QTASUN2|QTAXIA1",
                    OdysTablet: "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
                    CaptivaTablet: "CAPTIVA PAD",
                    IconbitTablet: "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
                    TeclastTablet: "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
                    OndaTablet: "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+|V10 \\b4G\\b",
                    JaytechTablet: "TPC-PA762",
                    BlaupunktTablet: "Endeavour 800NG|Endeavour 1010",
                    DigmaTablet: "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
                    EvolioTablet: "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
                    LavaTablet: "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",
                    AocTablet: "MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",
                    MpmanTablet: "MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",
                    CelkonTablet: "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
                    WolderTablet: "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
                    MediacomTablet: "M-MPI10C3G|M-SP10EG|M-SP10EGP|M-SP10HXAH|M-SP7HXAH|M-SP10HXBH|M-SP8HXAH|M-SP8MXA",
                    MiTablet: "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
                    NibiruTablet: "Nibiru M1|Nibiru Jupiter One",
                    NexoTablet: "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
                    LeaderTablet: "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",
                    UbislateTablet: "UbiSlate[\\s]?7C",
                    PocketBookTablet: "Pocketbook",
                    KocasoTablet: "\\b(TB-1207)\\b",
                    HisenseTablet: "\\b(F5281|E2371)\\b",
                    Hudl: "Hudl HT7S3|Hudl 2",
                    TelstraTablet: "T-Hub2",
                    GenericTablet: "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b|WVT101|TM1088|KT107"
                },
                oss: {
                    AndroidOS: "Android",
                    BlackBerryOS: "blackberry|\\bBB10\\b|rim tablet os",
                    PalmOS: "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
                    SymbianOS: "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
                    WindowsMobileOS: "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Windows Mobile|Windows Phone [0-9.]+|WCE;",
                    WindowsPhoneOS: "Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
                    iOS: "\\biPhone.*Mobile|\\biPod|\\biPad|AppleCoreMedia",
                    iPadOS: "CPU OS 13",
                    SailfishOS: "Sailfish",
                    MeeGoOS: "MeeGo",
                    MaemoOS: "Maemo",
                    JavaOS: "J2ME/|\\bMIDP\\b|\\bCLDC\\b",
                    webOS: "webOS|hpwOS",
                    badaOS: "\\bBada\\b",
                    BREWOS: "BREW"
                },
                uas: {
                    Chrome: "\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?",
                    Dolfin: "\\bDolfin\\b",
                    Opera: "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+$|Coast/[0-9.]+",
                    Skyfire: "Skyfire",
                    Edge: "\\bEdgiOS\\b|Mobile Safari/[.0-9]* Edge",
                    IE: "IEMobile|MSIEMobile",
                    Firefox: "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS",
                    Bolt: "bolt",
                    TeaShark: "teashark",
                    Blazer: "Blazer",
                    Safari: "Version((?!\\bEdgiOS\\b).)*Mobile.*Safari|Safari.*Mobile|MobileSafari",
                    WeChat: "\\bMicroMessenger\\b",
                    UCBrowser: "UC.*Browser|UCWEB",
                    baiduboxapp: "baiduboxapp",
                    baidubrowser: "baidubrowser",
                    DiigoBrowser: "DiigoBrowser",
                    Mercury: "\\bMercury\\b",
                    ObigoBrowser: "Obigo",
                    NetFront: "NF-Browser",
                    GenericBrowser: "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",
                    PaleMoon: "Android.*PaleMoon|Mobile.*PaleMoon"
                },
                props: {
                    Mobile: "Mobile/[VER]",
                    Build: "Build/[VER]",
                    Version: "Version/[VER]",
                    VendorID: "VendorID/[VER]",
                    iPad: "iPad.*CPU[a-z ]+[VER]",
                    iPhone: "iPhone.*CPU[a-z ]+[VER]",
                    iPod: "iPod.*CPU[a-z ]+[VER]",
                    Kindle: "Kindle/[VER]",
                    Chrome: ["Chrome/[VER]", "CriOS/[VER]", "CrMo/[VER]"],
                    Coast: ["Coast/[VER]"],
                    Dolfin: "Dolfin/[VER]",
                    Firefox: ["Firefox/[VER]", "FxiOS/[VER]"],
                    Fennec: "Fennec/[VER]",
                    Edge: "Edge/[VER]",
                    IE: ["IEMobile/[VER];", "IEMobile [VER]", "MSIE [VER];", "Trident/[0-9.]+;.*rv:[VER]"],
                    NetFront: "NetFront/[VER]",
                    NokiaBrowser: "NokiaBrowser/[VER]",
                    Opera: [" OPR/[VER]", "Opera Mini/[VER]", "Version/[VER]"],
                    "Opera Mini": "Opera Mini/[VER]",
                    "Opera Mobi": "Version/[VER]",
                    UCBrowser: ["UCWEB[VER]", "UC.*Browser/[VER]"],
                    MQQBrowser: "MQQBrowser/[VER]",
                    MicroMessenger: "MicroMessenger/[VER]",
                    baiduboxapp: "baiduboxapp/[VER]",
                    baidubrowser: "baidubrowser/[VER]",
                    SamsungBrowser: "SamsungBrowser/[VER]",
                    Iron: "Iron/[VER]",
                    Safari: ["Version/[VER]", "Safari/[VER]"],
                    Skyfire: "Skyfire/[VER]",
                    Tizen: "Tizen/[VER]",
                    Webkit: "webkit[ /][VER]",
                    PaleMoon: "PaleMoon/[VER]",
                    SailfishBrowser: "SailfishBrowser/[VER]",
                    Gecko: "Gecko/[VER]",
                    Trident: "Trident/[VER]",
                    Presto: "Presto/[VER]",
                    Goanna: "Goanna/[VER]",
                    iOS: " \\bi?OS\\b [VER][ ;]{1}",
                    Android: "Android [VER]",
                    Sailfish: "Sailfish [VER]",
                    BlackBerry: ["BlackBerry[\\w]+/[VER]", "BlackBerry.*Version/[VER]", "Version/[VER]"],
                    BREW: "BREW [VER]",
                    Java: "Java/[VER]",
                    "Windows Phone OS": ["Windows Phone OS [VER]", "Windows Phone [VER]"],
                    "Windows Phone": "Windows Phone [VER]",
                    "Windows CE": "Windows CE/[VER]",
                    "Windows NT": "Windows NT [VER]",
                    Symbian: ["SymbianOS/[VER]", "Symbian/[VER]"],
                    webOS: ["webOS/[VER]", "hpwOS/[VER];"]
                },
                utils: {
                    Bot: "Googlebot|facebookexternalhit|Google-AMPHTML|s~amp-validator|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom|contentkingapp|AspiegelBot",
                    MobileBot: "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2",
                    DesktopMode: "WPDesktop",
                    TV: "SonyDTV|HbbTV",
                    WebKit: "(webkit)[ /]([\\w.]+)",
                    Console: "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|Nintendo Switch|PLAYSTATION|Xbox)\\b",
                    Watch: "SM-V700"
                }
            },
            detectMobileBrowsers: {
                fullPattern: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                shortPattern: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                tabletPattern: /android|ipad|playbook|silk/i
            }
        }, n = Object.prototype.hasOwnProperty;
        function i(e, t) {
            return null != e && null != t && e.toLowerCase() === t.toLowerCase()
        }
        function o(e, t) {
            var n, i, o = e.length;
            if (!o || !t)
                return !1;
            for (n = t.toLowerCase(),
            i = 0; i < o; ++i)
                if (n === e[i].toLowerCase())
                    return !0;
            return !1
        }
        function r(e) {
            for (var t in e)
                n.call(e, t) && (e[t] = new RegExp(e[t],"i"))
        }
        function s(e, t) {
            this.ua = function(e) {
                return (e || "").substr(0, 500)
            }(e),
            this._cache = {},
            this.maxPhoneWidth = t || 600
        }
        return t.FALLBACK_PHONE = "UnknownPhone",
        t.FALLBACK_TABLET = "UnknownTablet",
        t.FALLBACK_MOBILE = "UnknownMobile",
        e = "isArray"in Array ? Array.isArray : function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }
        ,
        function() {
            var i, o, s, a, l, c, u = t.mobileDetectRules;
            for (i in u.props)
                if (n.call(u.props, i)) {
                    for (o = u.props[i],
                    e(o) || (o = [o]),
                    l = o.length,
                    a = 0; a < l; ++a)
                        (c = (s = o[a]).indexOf("[VER]")) >= 0 && (s = s.substring(0, c) + "([\\w._\\+]+)" + s.substring(c + 5)),
                        o[a] = new RegExp(s,"i");
                    u.props[i] = o
                }
            r(u.oss),
            r(u.phones),
            r(u.tablets),
            r(u.uas),
            r(u.utils),
            u.oss0 = {
                WindowsPhoneOS: u.oss.WindowsPhoneOS,
                WindowsMobileOS: u.oss.WindowsMobileOS
            }
        }(),
        t.findMatch = function(e, t) {
            for (var i in e)
                if (n.call(e, i) && e[i].test(t))
                    return i;
            return null
        }
        ,
        t.findMatches = function(e, t) {
            var i = [];
            for (var o in e)
                n.call(e, o) && e[o].test(t) && i.push(o);
            return i
        }
        ,
        t.getVersionStr = function(e, i) {
            var o, r, s, a, l = t.mobileDetectRules.props;
            if (n.call(l, e))
                for (s = (o = l[e]).length,
                r = 0; r < s; ++r)
                    if (null !== (a = o[r].exec(i)))
                        return a[1];
            return null
        }
        ,
        t.getVersion = function(e, n) {
            var i = t.getVersionStr(e, n);
            return i ? t.prepareVersionNo(i) : NaN
        }
        ,
        t.prepareVersionNo = function(e) {
            var t;
            return 1 === (t = e.split(/[a-z._ \/\-]/i)).length && (e = t[0]),
            t.length > 1 && (e = t[0] + ".",
            t.shift(),
            e += t.join("")),
            Number(e)
        }
        ,
        t.isMobileFallback = function(e) {
            return t.detectMobileBrowsers.fullPattern.test(e) || t.detectMobileBrowsers.shortPattern.test(e.substr(0, 4))
        }
        ,
        t.isTabletFallback = function(e) {
            return t.detectMobileBrowsers.tabletPattern.test(e)
        }
        ,
        t.prepareDetectionCache = function(e, n, i) {
            if (/*!mobile-detect v1.4.5 2021-03-13*/
            /*!@license Copyright 2013, Heinrich Goebl, License: MIT, see https://github.com/hgoebl/mobile-detect.js*/
            void 0 === e.mobile) {
                var o, r, a;
                if (r = t.findMatch(t.mobileDetectRules.tablets, n))
                    return e.mobile = e.tablet = r,
                    void (e.phone = null);
                if (o = t.findMatch(t.mobileDetectRules.phones, n))
                    return e.mobile = e.phone = o,
                    void (e.tablet = null);
                t.isMobileFallback(n) ? void 0 === (a = s.isPhoneSized(i)) ? (e.mobile = t.FALLBACK_MOBILE,
                e.tablet = e.phone = null) : a ? (e.mobile = e.phone = t.FALLBACK_PHONE,
                e.tablet = null) : (e.mobile = e.tablet = t.FALLBACK_TABLET,
                e.phone = null) : t.isTabletFallback(n) ? (e.mobile = e.tablet = t.FALLBACK_TABLET,
                e.phone = null) : e.mobile = e.tablet = e.phone = null
            }
        }
        ,
        t.mobileGrade = function(e) {
            var t = null !== e.mobile();
            return e.os("iOS") && e.version("iPad") >= 4.3 || e.os("iOS") && e.version("iPhone") >= 3.1 || e.os("iOS") && e.version("iPod") >= 3.1 || e.version("Android") > 2.1 && e.is("Webkit") || e.version("Windows Phone OS") >= 7 || e.is("BlackBerry") && e.version("BlackBerry") >= 6 || e.match("Playbook.*Tablet") || e.version("webOS") >= 1.4 && e.match("Palm|Pre|Pixi") || e.match("hp.*TouchPad") || e.is("Firefox") && e.version("Firefox") >= 12 || e.is("Chrome") && e.is("AndroidOS") && e.version("Android") >= 4 || e.is("Skyfire") && e.version("Skyfire") >= 4.1 && e.is("AndroidOS") && e.version("Android") >= 2.3 || e.is("Opera") && e.version("Opera Mobi") > 11 && e.is("AndroidOS") || e.is("MeeGoOS") || e.is("Tizen") || e.is("Dolfin") && e.version("Bada") >= 2 || (e.is("UC Browser") || e.is("Dolfin")) && e.version("Android") >= 2.3 || e.match("Kindle Fire") || e.is("Kindle") && e.version("Kindle") >= 3 || e.is("AndroidOS") && e.is("NookTablet") || e.version("Chrome") >= 11 && !t || e.version("Safari") >= 5 && !t || e.version("Firefox") >= 4 && !t || e.version("MSIE") >= 7 && !t || e.version("Opera") >= 10 && !t ? "A" : e.os("iOS") && e.version("iPad") < 4.3 || e.os("iOS") && e.version("iPhone") < 3.1 || e.os("iOS") && e.version("iPod") < 3.1 || e.is("Blackberry") && e.version("BlackBerry") >= 5 && e.version("BlackBerry") < 6 || e.version("Opera Mini") >= 5 && e.version("Opera Mini") <= 6.5 && (e.version("Android") >= 2.3 || e.is("iOS")) || e.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3") || e.version("Opera Mobi") >= 11 && e.is("SymbianOS") ? "B" : (e.version("BlackBerry") < 5 || e.match("MSIEMobile|Windows CE.*Mobile") || e.version("Windows Mobile"),
            "C")
        }
        ,
        t.detectOS = function(e) {
            return t.findMatch(t.mobileDetectRules.oss0, e) || t.findMatch(t.mobileDetectRules.oss, e)
        }
        ,
        t.getDeviceSmallerSide = function() {
            return window.screen.width < window.screen.height ? window.screen.width : window.screen.height
        }
        ,
        s.prototype = {
            constructor: s,
            mobile: function() {
                return t.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth),
                this._cache.mobile
            },
            phone: function() {
                return t.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth),
                this._cache.phone
            },
            tablet: function() {
                return t.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth),
                this._cache.tablet
            },
            userAgent: function() {
                return void 0 === this._cache.userAgent && (this._cache.userAgent = t.findMatch(t.mobileDetectRules.uas, this.ua)),
                this._cache.userAgent
            },
            userAgents: function() {
                return void 0 === this._cache.userAgents && (this._cache.userAgents = t.findMatches(t.mobileDetectRules.uas, this.ua)),
                this._cache.userAgents
            },
            os: function() {
                return void 0 === this._cache.os && (this._cache.os = t.detectOS(this.ua)),
                this._cache.os
            },
            version: function(e) {
                return t.getVersion(e, this.ua)
            },
            versionStr: function(e) {
                return t.getVersionStr(e, this.ua)
            },
            is: function(e) {
                return o(this.userAgents(), e) || i(e, this.os()) || i(e, this.phone()) || i(e, this.tablet()) || o(t.findMatches(t.mobileDetectRules.utils, this.ua), e)
            },
            match: function(e) {
                return e instanceof RegExp || (e = new RegExp(e,"i")),
                e.test(this.ua)
            },
            isPhoneSized: function(e) {
                return s.isPhoneSized(e || this.maxPhoneWidth)
            },
            mobileGrade: function() {
                return void 0 === this._cache.grade && (this._cache.grade = t.mobileGrade(this)),
                this._cache.grade
            }
        },
        "undefined" != typeof window && window.screen ? s.isPhoneSized = function(e) {
            return e < 0 ? void 0 : t.getDeviceSmallerSide() <= e
        }
        : s.isPhoneSized = function() {}
        ,
        s._impl = t,
        s.version = "1.4.5 2021-03-13",
        s
    }
    ))
}
, function(e, t) {
    e.exports = function() {
        throw new Error("define cannot be used indirect")
    }
}
]]);
