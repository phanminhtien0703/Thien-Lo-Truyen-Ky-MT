!function(t) {
    function e(e) {
        for (var a, r, s = e[0], l = e[1], c = e[2], f = 0, d = []; f < s.length; f++)
            r = s[f],
            Object.prototype.hasOwnProperty.call(n, r) && n[r] && d.push(n[r][0]),
            n[r] = 0;
        for (a in l)
            Object.prototype.hasOwnProperty.call(l, a) && (t[a] = l[a]);
        for (p && p(e); d.length; )
            d.shift()();
        return o.push.apply(o, c || []),
        i()
    }
    function i() {
        for (var t, e = 0; e < o.length; e++) {
            for (var i = o[e], a = !0, s = 1; s < i.length; s++) {
                var l = i[s];
                0 !== n[l] && (a = !1)
            }
            a && (o.splice(e--, 1),
            t = r(r.s = i[0]))
        }
        return t
    }
    var a = {}
      , n = {
        0: 0
    }
      , o = [];
    function r(e) {
        if (a[e])
            return a[e].exports;
        var i = a[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(i.exports, i, i.exports, r),
        i.l = !0,
        i.exports
    }
    r.m = t,
    r.c = a,
    r.d = function(t, e, i) {
        r.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }
    ,
    r.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    r.t = function(t, e) {
        if (1 & e && (t = r(t)),
        8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var i = Object.create(null);
        if (r.r(i),
        Object.defineProperty(i, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var a in t)
                r.d(i, a, function(e) {
                    return t[e]
                }
                .bind(null, a));
        return i
    }
    ,
    r.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return r.d(e, "a", e),
        e
    }
    ,
    r.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    r.p = "";
    var s = window.webpackJsonp = window.webpackJsonp || []
      , l = s.push.bind(s);
    s.push = e,
    s = s.slice();
    for (var c = 0; c < s.length; c++)
        e(s[c]);
    var p = l;
    o.push([3, 1]),
    i()
}([, , , function(t, e, i) {
    t.exports = i(18)
}
, function(t, e, i) {
    "use strict";
    (function(t) {
        i(8),
        i(9),
        i(10),
        i(11),
        i(12),
        i(13),
        i(15);
        t((function() {
            t("#asideRightToggle").toggleClassname({
                toggle: [{
                    el: t("#asideRight"),
                    className: "active"
                }]
            }),
            t("#topnavBurger").toggleClassname({
                toggle: [{
                    el: t("#topnavBurger + ul"),
                    className: "active"
                }, {
                    el: t("#topnavBurger"),
                    className: "is-active"
                }]
            }),
            t("#wrapper").scalePlatform();
            var a = !1;
            t(".opennav").on("click", (function(e) {
                e.preventDefault(),
                a ? (t(".sub-nav-mb").removeClass("Open"),
                t(".opennav").removeClass("toclose is-active"),
                a = !1) : (t(".sub-nav-mb").addClass("Open"),
                t(".opennav").addClass("toclose is-active"),
                a = !0)
            }
            )),
            t("[data-lightbox]").length > 0 && t("[data-lightbox]").each((function() {
                t(this).lightBox({
                    objLightBox: t(this).attr("href"),
                    type: t(this).data("lightbox-type")
                })
            }
            )),
            t(".scrolltop").click((function() {
                return t("html, body").animate({
                    scrollTop: 0
                }, "slow"),
                !1
            }
            ));
            var n = new (i(16))(window.navigator.userAgent);
            function o(t, e, i) {
                if (e.files && e.files[0]) {
                    var a = new FileReader;
                    a.onload = function(e) {
                        t.eq(i).children("img").attr("src", e.target.result),
                        t.eq(i).children("img").show()
                    }
                    ,
                    a.readAsDataURL(e.files[0])
                }
            }
            t(".osdetect").length > 0 && t(".osdetect").each((function() {
                var e = t(this).attr("data-app")
                  , i = t(this).attr("data-goo");
                "iOS" === n.os() ? t(".osdetect").attr("href", e) : t(".osdetect").attr("href", i)
            }
            )),
            t("#img-user li .upload").on("change", (function() {
                o(t("#img-user li"), this, t(this).parent().index())
            }
            )),
            t("#img-avatar li .upload").on("change", (function() {
                o(t("#img-avatar li"), this, t(this).parent().index())
            }
            )),
            t("#img-ingame li .upload").on("change", (function() {
                o(t("#img-ingame li"), this, t(this).parent().index())
            }
            )),
            t(".prizes").length > 0 && t(".prize__thumb").on("click", (function() {
                t(".prize__thumb").removeClass("active"),
                t(this).addClass("active");
                var e = t(this).attr("data-thumbdesktop")
                  , i = t(this).attr("data-thumbmobile");
                t("#fullPrizeDesktop").attr("src", e),
                t("#fullPrizeMobile").attr("src", i)
            }
            )),
            t((function() {
                t(".tab-wrapper").each((function(e, i) {
                    t(this).children().closest(".tab").find(".tab-name").first().trigger("click")
                }
                ))
            }
            )),
            t(".tab li").click((function() {
                return !!(t(this).is(":last-child") && t(this).parents(".pet-container").length > 0) || (function(e) {
                    t(e).closest(".tab").find("li").removeClass("active"),
                    t(e).addClass("active");
                    var i = t(e).find("a").attr("href");
                    t(e).closest(".tab-wrapper").find(".tab-item").hide(),
                    t(i).show(),
                    t(e).closest(".tab-wrapper").find(".tab-wrapper").each((function(e, i) {
                        t(this).children().closest(".tab").find(".tab-name").first().trigger("click")
                    }
                    ))
                }(this),
                !1)
            }
            )),
            t(document).scroll((function() {
                e.any() || (t(this).scrollTop() > 700 ? t(".aside_right").show() : t(".aside_right").hide())
            }
            ))
        }
        ));
        var e = {
            Android: function() {
                return navigator.userAgent.match(/Android/i)
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i)
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i)
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i)
            },
            Desktop: function() {
                return navigator.userAgent.match(/Windows NT/i)
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i)
            },
            any: function() {
                return e.Android() || e.BlackBerry() || e.iOS() || e.Opera() || e.Windows()
            }
        }
    }
    ).call(this, i(0))
}
, , , , function(t, e, i) {
    (function(t) {
        t.fn.toggleClassname = function(e) {
            var i = {
                obj: t(this),
                toggle: [{
                    el: t(this).parent(),
                    className: "active"
                }],
                before: () => {}
                ,
                after: () => {}
            }
              , a = t.extend(i, e);
            a.obj.on("click", t => {
                t.preventDefault(),
                a.before(),
                a.toggle.forEach((function(t) {
                    t.el.hasClass(t.className) ? t.el.removeClass(t.className) : t.el.addClass(t.className)
                }
                )),
                a.after()
            }
            )
        }
    }
    ).call(this, i(0))
}
, function(t, e, i) {
    (function(t) {
        t.fn.scalePlatform = function(e) {
            var i = {
                obj: t(this),
                designSafe: {
                    desktop: 1200,
                    mobile: 588
                },
                designWidth: {
                    desktop: 1920,
                    mobile: 768
                },
                designHeight: {
                    desktop: 1e3,
                    mobile: 1e3
                },
                mode: "",
                elScale: {
                    desktop: {
                        topLeft: ".floatingDesktopTopLeft",
                        topCenter: ".floatingDesktopTopCenter",
                        topRight: ".floatingDesktopTopRight",
                        midLeft: ".floatingDesktopMidLeft",
                        midCenter: ".floatingDesktopMidCenter",
                        midRight: ".floatingDesktopMidRight",
                        botLeft: ".floatingDesktopBotLeft",
                        botCenter: ".floatingDesktopBotCenter",
                        botRight: ".floatingDesktopBotRight"
                    },
                    mobile: {
                        topLeft: ".floatingMobileTopLeft",
                        topCenter: ".floatingMobileTopCenter",
                        topRight: ".floatingMobileTopRight",
                        midLeft: ".floatingMobileMidLeft",
                        midCenter: ".floatingMobileMidCenter",
                        midRight: ".floatingMobileMidRight",
                        botLeft: ".floatingMobileBotLeft",
                        botCenter: ".floatingMobileBotCenter",
                        botRight: ".floatingMobileBotRight"
                    }
                },
                elSpecial: {
                    rescaleHeight: ".floatingRescaleHeight",
                    rescaleMaxHeight: ".floatingRescaleMaxHeight"
                }
            }
              , a = t.extend(i, e);
            t(window).on("resize", (function() {
                var e = t(window).innerWidth()
                  , i = t(window).innerHeight()
                  , n = a.obj.outerHeight()
                  , o = (t=e, a=i) => t <= 700 || t < a
                  , r = 1
                  , s = 0;
                !o && e > a.designSafe.desktop ? ("margin",
                s = -1 * (e - a.designSafe) / 2) : ("scale",
                r = o() ? e / a.designWidth.mobile : e / a.designWidth.desktop);
                var l = n * r;
                a.obj.css({
                    display: "block",
                    transform: "scale(" + r + ")",
                    marginLeft: s + "px"
                }),
                a.obj.parent().css({
                    height: l + "px",
                    width: e + "px"
                });
                var c = "center center"
                  , p = o() ? "mobile" : "desktop";
                for (const [e,i] of Object.entries(a.elScale))
                    for (const [n,o] of Object.entries(i)) {
                        c = "";
                        switch (n) {
                        case "topLeft":
                            c = "top left";
                            break;
                        case "topCenter":
                            c = "top center";
                            break;
                        case "topRight":
                            c = "top right";
                            break;
                        case "midLeft":
                            c = "center left";
                            break;
                        case "midCenter":
                            c = "center center";
                            break;
                        case "midRight":
                            c = "center right";
                            break;
                        case "botLeft":
                            c = "bottom left";
                            break;
                        case "botCenter":
                            c = "bottom center";
                            break;
                        case "botRight":
                            c = "bottom right"
                        }
                        p === e && t(a.elScale[e][n]).length > 0 && t(o).css({
                            transformOrigin: c,
                            transform: "scale(" + r + ")",
                            marginLeft: s + "px"
                        })
                    }
            }
            )).resize()
        }
    }
    ).call(this, i(0))
}
, function(t, e, i) {
    (function(t) {
        function e() {
            return Math.random().toString(36).substring(2, 8)
        }
        t.fn.lightBox = function(i) {
            var a = {
                obj: t(this),
                type: "",
                objLightBox: "",
                animate: {},
                animateToggle: {},
                backgroundClickToClose: !0,
                floatEl: t("#floatLightbox"),
                objClose: ".close"
            }
              , n = t.extend(a, i);
            let o, r, s = '\n    <div class="popup__toolbar">\n      <span class="close hamburger hamburger--emphatic is-active">\n            <span class="hamburger-box">\n                <span class="hamburger-inner"></span>\n            </span>\n        </span>\n    </div>';
            switch (n.type) {
            case "youtube":
                o = e();
                var l = n.obj.attr("href").split("=")[1];
                n.obj.attr("href", "#" + o),
                r = `\n                <div id="${o}" class="popup popup--open-video">\n                    <div class="popup__background"></div>\n                    <div class="popup__content">\n                        <div class="embed"><div id="${o}_embed" data-youtube-id="${l}"></div></div>\n                    </div>\n                    ${s}\n                </div>\n            `,
                n.floatEl.append(r);
                break;
            case "image":
                o = e();
                let t = n.obj.attr("href");
                n.obj.attr("href", "#" + o),
                r = `\n                <div id="${o}" class="popup popup--open-image">\n                    <div class="popup__background"></div>\n                    <div class="popup__content">\n                        <div class="image"><img src="${t}" /></div>\n                    </div>\n                    ${s}\n                </div>\n            `,
                n.floatEl.append(r)
            }
            n.obj.on("click", e => {
                e.preventDefault(),
                t("html").addClass("popup-opened"),
                "youtube" == t(this).data("lightbox-type") && null == ytPlayer[t(this).attr("href")] && (ytPlayer[t(this).attr("href")] = YoutubePlayer(t(this).attr("href").substring(1) + "_embed", {
                    videoId: t(t(this).attr("href") + "_embed").data("youtube-id"),
                    playerVars: {
                        rel: 0,
                        autoplay: 1,
                        color: "white"
                    }
                })),
                t(t(this).attr("href")),
                t(t(this).attr("href")).addClass("active"),
                t(t(this).attr("href")).animate(n.animate),
                "youtube" == t(this).data("lightbox-type") && ytPlayer[t(this).attr("href")].playVideo()
            }
            )
        }
        ,
        t("body").on("click", ".close", (function() {
            t("html").removeClass("popup-opened"),
            t(this).parents(".popup").removeClass("active"),
            t(this).parent().parent().removeClass("active"),
            t(this).parent().removeClass("active"),
            t(this).parent().parent().hasClass("popup--open-video") && ytPlayer["#" + t(this).parent().parent().attr("id")].pauseVideo()
        }
        )),
        t("body").on("click", ".popup__background", (function() {
            t("html").removeClass("popup-opened"),
            t(this).parent().removeClass("active"),
            t(this).parent().hasClass("popup--open-video") && ytPlayer["#" + t(this).parent().attr("id")].pauseVideo()
        }
        ))
    }
    ).call(this, i(0))
}
, function(t, e, i) {
    "use strict";
    (function(t) {
        var e = i(2)
          , a = i.n(e);
        t.fn.scrollWatch = function(e) {
            var i = {
                before: () => {}
                ,
                options: {
                    watchOnce: !1,
                    watch: "#frame1",
                    scrollThrottle: 20,
                    onElementInView: function() {
                        t(".topfloat").removeClass("fixed")
                    },
                    onElementOutOfView: function() {
                        t(".topfloat").addClass("fixed")
                    }
                },
                after: () => {}
            }
              , n = t.extend(i, e);
            n.before();
            new a.a(n.options);
            n.after()
        }
    }
    ).call(this, i(0))
}
, , function(t, e, i) {
    "use strict";
    (function(t) {
        i(14)
    }
    ).call(this, i(0))
}
, , , , , function(t, e, i) {
    "use strict";
    i.r(e);
    i(4)
}
]);
