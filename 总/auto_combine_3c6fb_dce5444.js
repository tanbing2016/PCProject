var Index = function () {
    function t() {
        var t = $(".con-wrap4 .center-show"), e = 100 / t.length;
        t.each(function () {
            $(this).width(e + "%")
        }), $(".con-wrap4 .center-show:last").addClass("last-child"), $(".rw-nav a").click(function () {
            var t = $(this), e = t.attr("data-id"), i = $(".rw-box-show.cur");
            t.hasClass("cur") || ($(".rw-nav").find(".cur").removeClass("cur"), t.addClass("cur"), i.removeClass("cur"), $("#" + e).css("display", "block"), setTimeout(function () {
                i.css("display", "none"), $("#" + e).addClass("cur")
            }, 500))
        }), $("#gameHot .o-link").click(function () {
            var t = $(this);
            if (!t.hasClass("active")) {
                var e = t.index(), i = $("#gameHot .g-hot-wrap");
                $("#gameHot .o-link").removeClass("active"), i.removeClass("active"), t.addClass("active"), i.eq(e).addClass("active");
                var a = i.eq(e).find(".cur-hot-box.cur").length;
                if (0 == a) {
                    var n = i.eq(e).find(".cur-hot-box").eq(0);
                    n.css("display", "block").addClass("cur");
                    for (var s = n.find(".hot-bg-img"), c = 0, r = s.length; r > c; c++)o(s.eq(c));
                    f(n.find(".ilikeSet"))
                }
            }
        }), $("#mobileGameHot .hot-box .hot-link").each(function () {
            var t = $(this);
            t.one("mouseover", function () {
                o(t.find(".font-qr"))
            })
        })
    }

    function e() {
        var t = x.length, e = $(".head-wrap .head-ctrl");
        if (t > 1) {
            for (var n = "", o = 0; t > o; o++)n += 0 == o ? '<a href="javascript:;" class="cur"></a>' : '<a href="javascript:;"></a>';
            if (e.html(n), x.eq(0).addClass("cur").css("display", "block"), i(t - 1), b)return;
            {
                new a(x, e.find("a"), !0)
            }
        } else $(".head-ctrl-box,.head-sel").css("display", "none")
    }

    function i(t) {
        var e = x.eq(1), i = x.eq(t), a = '<span class="s-img"><img ></span><h2>' + e.find("h2").html() + "</h2><p>" + e.find("h3").html() + "</p>";
        y.find(".sel-box").html(a), a = '<span class="s-img"><img ></span><h2>' + i.find("h2").html() + "</h2><p>" + i.find("h3").html() + "</p>", T.find(".sel-box").html(a)
    }

    function a(t, e, i) {
        function a(t) {
            i && (g = setTimeout(function () {
                r.eq(t).click()
            }, 4500))
        }

        function o(e) {
            l = !0, r.removeClass("cur"), r.eq(e).addClass("cur");
            var i = t, o = c;
            s(e), n(x.eq(e)), i.eq(c).css("display", "block").removeClass("cur"), i.eq(e).css({
                opacity: "0",
                filter: "alpha(opacity=0)",
                display: "block"
            }).addClass("cur").animate({opacity: "1", filter: "alpha(opacity=100)"}, 800), setTimeout(function () {
                l = !1, i.eq(o).css({opacity: "0", filter: "alpha(opacity=0)", display: "none"})
            }, 800), c = e;
            var d = c + 1;
            c == r.length - 1 && (d = 0), a(d)
        }

        function s(e) {
            if (S) {
                var i = t, a = e + 1, n = e - 1;
                a == i.length && (a = 0), d.find("img").attr("src", i.eq(a).attr("data-img")), d.find("h2").html(i.eq(a).find("h2").html()), d.find("p").html(i.eq(a).find("h3").html()), 0 > n && (n = i.length - 1), f.find("img").attr("src", i.eq(n).attr("data-img")), f.find("h2").html(i.eq(n).find("h2").html()), f.find("p").html(i.eq(n).find("h3").html())
            }
        }

        var c = 0, r = e, l = !1, d = y, f = T;
        d.click(function () {
            if (!l) {
                var t = c + 1;
                t >= r.length && (t = 0), i && clearTimeout(g), o(t)
            }
        }), d.bind("mouseenter", function () {
            S = !0, s(c)
        }).bind("mouseleave", function () {
            S = !1
        }), f.bind("mouseenter", function () {
            S = !0, s(c)
        }).bind("mouseleave", function () {
            S = !1
        }), f.click(function () {
            if (!l) {
                var t = c - 1;
                0 > t && (t = r.length - 1), i && clearTimeout(g), o(t)
            }
        }), r.click(function () {
            var t = $(this).index();
            t == c || l || (i && clearTimeout(g), o(t))
        }), a(1), n(x.eq(0))
    }

    function n(t) {
        t.each(function () {
            var t = $(this), e = t.attr("data-img");
            e && t.css("background-image", "url(" + e + ")")
        })
    }

    function o(t) {
        t.each(function () {
            var t = $(this), e = t.attr("data-src");
            e && (t.attr("src", e), t.removeAttr("data-src"))
        })
    }

    function s() {
        for (var t = $(".carouse-box").length, e = "", i = 0; t > i; i++)e += '<a href="javascript:;"></a>';
        $(".g-banBox .ctrl").html(e);
        new c($(".g-banBox .carouse-box"), $(".g-banBox .ctrl a"))
    }

    function c(t, e) {
        function i(e) {
            s = !0, o.removeClass("cur"), o.eq(e).addClass("cur");
            var i = t;
            n(t.eq(e).find(".car-bg-img")), f(t.eq(e).find(".ilikeSet")), e > a ? (i.eq(e).css({left: "100%"}).stop().animate({left: 0}, 800), i.eq(a).stop().animate({left: "-100%"}, 800)) : (i.eq(e).css({left: "-100%"}).stop().animate({left: 0}, 800), i.eq(a).stop().animate({left: "100%"}, 800)), a = e, setTimeout(function () {
                s = !1
            }, 800)
        }

        var a = 0;
        t.eq(0).css({left: "0px"}), f(t.eq(0).find(".ilikeSet")), e.eq(0).addClass("cur"), n(t.eq(0).find(".car-bg-img"));
        var o = e, s = !1;
        o.click(function () {
            var t = $(this).index();
            t == a || s || i(t)
        })
    }

    function r(t) {
        function e(t, e, a) {
            if (0 != e) {
                var n = a.eq(e).find(".hot-bg-img");
                o(n), f(a.eq(e).find(".ilikeSet"))
            }
            s = !0, a.eq(t).css("display", "block"), a.eq(e).css("display", "block"), i ? (a.eq(t).removeClass("cur").css("display", "none"), a.eq(e).addClass("cur").css("display", "block"), s = !1) : (setTimeout(function () {
                a.eq(t).removeClass("cur").addClass("hideing"), a.eq(e).addClass("cur").addClass("showing")
            }, 50), setTimeout(function () {
                a.eq(t).css("display", "none").removeClass("hideing"), a.eq(e).css("display", "block").removeClass("showing"), s = !1
            }, 1e3))
        }

        var i = l(), a = t.find(".reload"), n = t.find(".g-hot-wrap"), s = !1;
        n.each(function () {
            var t = $(this);
            t.hasClass("active") && e(0, 0, t.find(".cur-hot-box"))
        }), a.click(function () {
            if (!s) {
                var i = t.find(".g-hot-wrap.active").find(".cur-hot-box"), a = i.length, n = t.find(".g-hot-wrap.active").find(".cur").index(), o = n + 1;
                n == a - 1 && (o = 0), e(n, o, i)
            }
        })
    }

    function l() {
        var t = navigator.appName;
        if ("Microsoft Internet Explorer" == t) {
            var e = navigator.appVersion, i = e.split(";"), a = i[1].replace(/[ ]/g, "");
            return "MSIE7.0" == a || "MSIE8.0" == a || "MSIE9.0" == a ? !0 : !1
        }
        return !1
    }

    function d() {
        var t = ["JAN", "FEB", "MAR", "APR", "MAY", "JUNE", "JULY", "AUG", "SEPT", "OCT", "NOV", "DEC"], e = new Date, i = parseInt(e.getMonth());
        $(".ctrl-mon").html(t[i]), $(".ctrl-mon-mun").html(i + 1), $(".dayslef").each(function () {
            var t = $(this).attr("data-day");
            if ("" != t && null != t && "<!--udf1-->" != t) {
                t = t.replace(/\-|\./g, "/");
                var i = new Date(t), a = parseInt((i - e) / 864e5);
                0 > a && (a = 0), $(this).css("display", "block").find("span").html(a)
            }
        })
    }

    function f(t) {
        t.each(function () {
            var t = $(this), e = t.attr("data-ilike");
            if (e && "" != e) {
                {
                    new iLike({id: e, parent: t, style: 2})
                }
                t.removeAttr("data-ilike")
            }
        })
    }

    function h() {
        $("#mobileGameHot .score").find("em").each(function () {
            var t = parseInt($(this).attr("data-star"));
            $(this).width(20 * t + "%")
        })
    }

    function u() {
        m("hasReadVideo");
        b = !1
    }

    function m(t) {
        if (document.cookie.length > 0) {
            var e = document.cookie.indexOf(t + "=");
            if (-1 != e) {
                e = e + t.length + 1;
                var i = document.cookie.indexOf(";", e);
                return -1 == i && (i = document.cookie.length), unescape(document.cookie.substring(e, i))
            }
        }
        return ""
    }

    function p() {
        function t() {
            a >= v && (o(p), f(m)), a >= b && n(q), a >= d && (o(l), f(r))
        }

        var e = $(window), i = e.height() + 100, a = e.scrollTop(), s = $("#gameHot"), c = s.find(".g-hot-wrap").eq(0).find(".cur-hot-box").eq(0), r = c.find(".ilikeSet"), l = c.find(".hot-bg-img"), d = s.offset().top - i, h = $("#mobileGameHot"), u = h.find(".cur-hot-box").eq(0), m = u.find(".ilikeSet"), p = u.find(".hot-bg-img"), v = h.find(".g-hot-all").offset().top - i, g = $(".con-wrap4 .con-box"), b = g.offset().top - i, q = g.find("a .show-bg"), k = !1;
        t(), e.bind("scroll", function () {
            k || (k = !0, setTimeout(function () {
                a = e.scrollTop(), t(), k = !1
            }, 300))
        })
    }

    function v() {
        u(), s(), e(), h(), d(), r($("#mobileGameHot")), r($("#gameHot")), t(), p()
    }

    var g = null, b = !0, q = (!!document.createElement("video").canPlayType, getGlobalNews()), k = $(".con-wrap1 .newsBoxlist").find('li:not(".all-news"):last'), w = q.ShowTime.split("-"), C = $("#Jheadwrap"), x = C.find(".head-box"), y = C.find(".head-next"), T = C.find(".head-prev"), S = !1;
    w.shift();
    var I = '<a href="' + q.NewsUrl + '" title="' + q.ShortTitle + '" target="_blank">[' + q.KindShortName + "]" + q.ShortTitle + "</a><span>" + w.join("-") + "</span>";
    return k.html(I), nie.config.copyRight.setWhite(), {Init: v}
}();
Index.Init();
;nie.define("TOPBAR", function () {
    var barlist = {
        topbar: [function (_template_object) {
            var _template_fun_array = [], fn = function (__data__) {
                var _template_varName = "";
                for (var name in __data__)_template_varName += "var " + name + '=__data__["' + name + '"];';
                if (eval(_template_varName), _template_fun_array.push(""), ranks.length > 0) {
                    _template_fun_array.push("    ");
                    for (var a = 0, len = ranks.length; len > a; a++)_template_fun_array.push('        <li><a target="_blank" href="', "undefined" == typeof ranks[a][0] ? "" : baidu.template._encodeHTML(ranks[a][0]), '">', "undefined" == typeof ranks[a][1] ? "" : baidu.template._encodeHTML(ranks[a][1]), '</a><em class="', "undefined" == typeof ranks[a][2] ? "" : baidu.template._encodeHTML(ranks[a][2]), '"></em></li>    ');
                    _template_fun_array.push("")
                } else _template_fun_array.push("    ");
                _template_fun_array.push(""), _template_varName = null
            }(_template_object);
            return fn = null, _template_fun_array.join("")
        }][0]
    }, init = function () {
        $(".nav-li-box1 ul").html(getTopbarCon($("#NIE-topBar-menu .NIE-list li:first p:first").nextUntil("p"))), $(".nav-li-box2 ul").html(getTopbarCon($("#NIE-topBar-menu .NIE-list li:first p").eq(1).nextUntil("p"))), $(".nav-li-box3 ul").html(getTopbarCon($("#NIE-topBar-menu .NIE-list .hot a"))), $(".nav-li-box4 ul").html(getTopbarCon($("#NIE-list-news a"))), topNav()
    }, getTopbarCon = function (a) {
        var e, t = [], n = [], r = [], l = [];
        a.each(function (a) {
            var e = $(this), o = "";
            t[a] = e.attr("href"), 0 == e.children("em").length ? (n[a] = e.html(), r[a] = "") : (n[a] = e.children("em").html(), o = e.children("em").attr("class"), r[a] = "NIE-topBar-new" == o ? "icon-N" : "icon-H"), l[a] = [t[a], n[a], r[a]]
        });
        for (var o = 0, i = l.length - 1; i > o; o++)for (var p = 0, _ = l.length - o - 1; _ > p; p++)l[p][2] < l[p + 1][2] && "icon-H" != l[p][2] && (e = l[p], l[p] = l[p + 1], l[p + 1] = e);
        var s = barlist.topbar({ranks: l});
        return s
    }, topNav = function () {
        var a = $("#topNav");
        $("#topOpen").click(function () {
            $(this).hasClass("open") ? ($(this).removeClass("open"), a.slideUp(300)) : ($(this).addClass("open"), a.slideDown(300))
        }), $("#topClose").click(function () {
            $("#topOpen").removeClass("open"), a.slideUp(300)
        })
    };
    init()
});