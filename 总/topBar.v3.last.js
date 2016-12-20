;/*!/src/js/v3/topBar.last.source.js*/
var TopBarConfig = {
    isAutoShow: !1,
    isAutoShowBan: {
        "nc.163.com": 1,
        "my.163.com": 1,
        "em.163.com": 1,
        "xyf.163.com": 1,
        "zlj.163.com": 1,
        "dpsg.163.com": 1,
        "tfmz.163.com": 1,
        "ssqq.163.com": 1,
        "sq.163.com": 1,
        "ltzs.163.com": 1,
        "yhl.163.com": 1,
        "mxxc.163.com": 1,
        "xsd.163.com": 1,
        "mtj.163.com": 1,
        "zzz.163.com": 1,
        "yj.163.com": 1,
        "f1racestars.163.com": 1
    },
    isAutoShowTime: 5e3,
    isAllHide: !1,
    pvList: [{
        name: "\u7f51\u6613\u79c0\u54c1\u5546\u57ce",
        link: "http://rd.da.netease.com/redirect?t=ZvrEmJ&p=pgvG0L&proId=1140&target=http%3A%2F%2Fwww.xiupin.com%2F%3Futm_source%3Dyouxi%26utm_medium%3Dguding%26utm_campaign%3Dxp"
    }, {
        name: "\u5b89\u5353\u5145\u503c9.8\u6298",
        link: "http://rd.da.netease.com/redirect?t=zPJ3p1rAsE&p=MmVZMh&proId=1024&target=http%3A%2F%2Fwww.kaola.com%2Factivity%2Fdetail%2F11835.shtml%3Ftag%3D7cc46fc8c91a33ec9aa62298347b4ede"
    }, {name: "\u7f51\u6613\u4e25\u9009\u5927\u724c\u76f4\u4f9b", link: "http://you.163.com/?from=web_rk_game_wz_0"}],
    payWordList: {
        "xyq.163.com": 1,
        "tx3.163.com": 1,
        "xy2.163.com": 1,
        "ty.163.com": 1,
        "tianyu.163.com": 1,
        "dh2.163.com": 1,
        "bw.163.com": 1,
        "xy3.163.com": 1,
        "qn2.163.com": 1,
        "x3.163.com": 1,
        "zmq.163.com": 1,
        "xdw.163.com": 1,
        "dtws2.163.com": 1,
        "dtws.163.com": 1,
        "lj.163.com": 1,
        "wh.163.com": 1,
        "wh2.163.com": 1,
        "jl.163.com": 1,
        "zh.163.com": 1,
        "ff.163.com": 1,
        "www.warcraftchina.com": 1,
        "www.diablo3.com.cn": 1,
        "tuji.163.com": 1,
        "db.163.com": 1,
        "www.battlenet.com.cn": 1,
        "www.heroesofthestorm.com.cn": 1,
        "www.starcraft2.com.cn": 1,
        "y3.163.com": 1,
        "wf.163.com": 1,
        "www.hearthstone.com.cn": 1,
        "xc.163.com": 1,
        "xqn.163.com": 1
    },
    piaoLeftList: {
        "xyq.163.com": 1,
        "dh2.163.com": 1,
        "dtws.163.com": 1,
        "lj.163.com": 1,
        "ff.163.com": 1,
        "jl.163.com": 1,
        "zh.163.com": 1,
        "em.163.com": 1,
        "sm.163.com": 1,
        "zlj.163.com": 1,
        "ssqq.163.com": 1,
        "xy3.163.com": 1,
        "xy2.163.com": 1,
        "mhws.163.com": 1,
        "gfxm.163.com": 1,
        "bjx.163.com": 1,
        "hxjt.163.com": 1,
        "dhrx.163.com": 1,
        "mgzz.163.com": 1,
        "jlhx.163.com": 1,
        "pkzj.163.com": 1,
        "y3.163.com": 1
    }
};
!function () {
    var t = function (t) {
        return document.getElementById(t)
    }, o = function (o, e) {
        var n = t(o), c = e, i = !1, a = 180, m = 350, s = null;
        n.onmouseover = function () {
            i = !0, clearTimeout(s), s = setTimeout(function () {
                i && (n.className = c)
            }, a)
        }, n.onmouseout = function () {
            i = !1, clearTimeout(s), s = setTimeout(function () {
                i || (n.className = "")
            }, m)
        }
    }, e = function (t) {
        return t.replace(/(^\s*)|(\s*$)/g, "")
    }, n = function (t, o, n) {
        if ("undefined" == typeof o) {
            var c = null;
            if (document.cookie && "" != document.cookie)for (var i = document.cookie.split(";"), a = 0; a < i.length; a++) {
                var m = e(i[a]);
                if (m.substring(0, t.length + 1) == t + "=") {
                    c = decodeURIComponent(m.substring(t.length + 1));
                    break
                }
            }
            return c
        }
        n = n || {}, null === o && (o = "", n.expires = -1);
        var s = "";
        if (n.expires && ("number" == typeof n.expires || n.expires.toUTCString)) {
            var r;
            "number" == typeof n.expires ? (r = new Date, r.setTime(r.getTime() + 24 * n.expires * 60 * 60 * 1e3)) : r = n.expires, s = "; expires=" + r.toUTCString()
        }
        var l = n.path ? "; path=" + n.path : "", p = n.domain ? "; domain=" + n.domain : "", d = n.secure ? "; secure" : "";
        document.cookie = [t, "=", encodeURIComponent(o), s, l, p, d].join("")
    }, c = function (o, e, c) {
        var i = t(o), a = t(c), m = e, s = !1, r = 180, l = 1, p = null;
        !function () {
            function o(t) {
                "undefined" == typeof ADBase ? window.onload = function () {
                    e(t)
                } : e(t)
            }

            function e(t) {
                t ? jQuery.ajax({
                    url: "/boot.html", success: function () {
                        c()
                    }, error: function () {
                        a.push(h), s[l] && a.push(s[l]), c()
                    }
                }) : c()
            }

            function c() {
                return a.length && ADBase ? void ADBase.config({
                    pos: a.join(","),
                    noCache: !0,
                    callback: function (o, e) {
                        if (!o)return !1;
                        var c = e[d], a = e[h], r = e[s[l]];
                        if (c && c[0] ? (c = c[0], t("NIE-topBar-news-link").href = c.url, t("NIE-topBar-abc-b").src = c.src, t("NIE-topBar-abc-s").src = c.thumbsrc, 1 != n("topbarnewsshow") && TopBarConfig.isAutoShow && !TopBarConfig.isAutoShowBan[window.location.host] && (i.className = m, p = setTimeout(function () {
                                i.className = ""
                            }, TopBarConfig.isAutoShowTime)), document.getElementById("NIE-topBar-news").style.display = "block", n("topbarnewsshow", "1", {expires: 1})) : document.getElementById("NIE-topBar-news").style.display = "none", a && a[0]) {
                            a = a[0];
                            var g = '<div id="js_piaochuang_left" style="position:fixed;_position:absolute;' + (TopBarConfig.piaoLeftList[l] ? "left" : "right") + ':0;bottom:0;z-index:9999;"><a href="' + a.url + '" title="' + a.title + '" target="_blank" style="display:block;line-height:0;"><img src="' + a.src + '" /></a>                    <a href="javascript:void(0)" title="\u5173\u95ed" onclick="this.parentNode.style.display=\'none\';" style="position: absolute;right: 0;top: 0;color: white;font-weight: bolder;font-size: 14px;text-decoration: none;display: block;width: 20px;height: 20px;text-align: center;line-height: 20px;background: #444;">&times;</a></div>';
                            jQuery(document.body).append(g)
                        }
                        if (r && r[0]) {
                            r = r[0];
                            var g = '<div id="js_piaochuang_right" style="position:fixed;_position:absolute;right:0;bottom:0;z-index:9999;"><a href="' + r.url + '" title="' + r.title + '" target="_blank" style="display:block;line-height:0;"><img src="' + r.src + '" /></a>                    <a href="javascript:void(0)" title="\u5173\u95ed" onclick="this.parentNode.style.display=\'none\';" style="position: absolute;right: 0;top: 0;color: white;font-weight: bolder;font-size: 14px;text-decoration: none;display: block;width: 20px;height: 20px;text-align: center;line-height: 20px;background: #444;">&times;</a></div>';
                            jQuery(document.body).append(g)
                        }
                    }
                }) : !1
            }

            var a = [], s = {
                "xy2.163.com": "xindahuaxiyou2-piaochuang-3987",
                "dh2.163.com": "dahuaxiyou2_mianfeiban-changgui-4587"
            }, r = {
                "my.163.com": {
                    dingtiaoPos: "menghuanxiyoushouyou(g18)-changgui-434751",
                    piaochuangPos: "menghuanxiyoushouyou(g18)-piaochuang-290966"
                }
            }, l = window.location.hostname, d = "tongyong-dingtiao-8379", h = "tongyong-piaochuang-9781";
            r[l] && (d = r[l].dingtiaoPos, h = r[l].piaochuangPos), TopBarConfig.isAllHide ? document.getElementById("NIE-topBar-news").style.display = "none" : a.push(d);
            var g = window.location.pathname, u = (document.documentElement || document.body).clientWidth;
            "/" == g || "/index.html" == g ? 1200 > u ? o() : "/index.html" == g ? (a.push(h), s[l] && a.push(s[l]), o()) : o(!0) : o()
        }(), i.onmouseover = function () {
            s = !0, clearTimeout(p), p = setTimeout(function () {
                s && (i.className = m)
            }, r)
        }, i.onmouseout = function () {
            s = !1, clearTimeout(p), p = setTimeout(function () {
                s || (i.className = "")
            }, l)
        }, a.onclick = function () {
            s = !1, clearTimeout(p), i.className = ""
        }
    }, i = {
        xyq: "http://xyq.163.com/download/index.html",
        tx2: "http://tx2.163.com/reg/finish.html",
        pet: "http://pet.163.com/download/",
        csxy: "http://csxy.163.com/reg/client/",
        dt: "http://dt.163.com/download/",
        dt2: "http://dt2.163.com/download/",
        dtw: "http://dtw.163.com/download.html",
        xy2: "http://xy2.163.com/download/",
        xy3: "http://xy3.163.com/download/download.html",
        xdw: "http://xdw.163.com/download/",
        ff: "http://ff.163.com/download/",
        qn: "http://qn2.163.com/reg/client/",
        qn2: "http://qn2.163.com/reg/client/",
        jl: "http://jl.163.com/download/",
        fj: "http://fj.163.com/download.html",
        st: "http://st.163.com/yxxz/yxxz01.html",
        ball: "http://ball.163.com/",
        xyc: "http://xyc.netease.com/viewthread.php?tid=7666",
        rich: "http://rich.163.com/",
        ysg: "http://ysg.163.com/download/",
        zg: "http://server.zg.163.com/serverlist.php?from=niebar",
        sg: "http://client.sg.163.com/server_list.html",
        xjc: "http://game.xjc.163.com/",
        wh: "http://wh.163.com/download/",
        zh: "http://zh.163.com/download/"
    }, a = {
        pet: "cwwg",
        jl: "jlmc",
        dt2: "dtws",
        sg: "sgtx_web",
        zg: "ch",
        ff: "newff",
        pk: "xyw",
        tx3: "tx2",
        mkey: "mtoken",
        dtws2: "dtws",
        qn2: "qn",
        xqn: "qn",
        tianyu: "ty",
        xdw: "xyw",
        y3: "dota",
        wf: "x9"
    }, m = function () {
        for (var t = arguments, o = 0, e = t.length; e > o; o++)if ("undefined" == typeof t[o])return !1;
        return !0
    }, s = function () {
        var t = document.body.offsetWidth, o = document.getElementById("NIE-topBar-main"), e = o.getElementsByTagName("li")[5], n = o.getElementsByTagName("li")[1];
        t > 1680 ? (o.className = "NIE-topBar-main w1680", e.style.cssText = "width:676px;", n.style.cssText = "width:1012px;") : (o.className = "NIE-topBar-main", e.style.cssText = "width:416px;", n.style.cssText = "width:603px;")
    }, r = "undefined" != typeof nie && m(nie.config, nie.config.site) ? nie.config.site : window.location.href.replace(/^http:\/\/(.*)\.163\.com.*$/, "$1"), l = {
        xy2: "20100105dh2",
        tx3: "20110329tx2",
        qn: 1,
        zg: "canghai",
        dt: 1,
        xy3: 1,
        fkmm: 1,
        xyq: 1,
        zh: 1,
        lj: "ds",
        dota: "yxsg"
    }, p = {
        xy2: "http://xy2.163.com/reg/",
        tx3: "http://tx3.163.com/reg/",
        xdw: "http://xdw.163.com/reg/",
        dtws2: "http://dtws2.163.com/reg/",
        wh: "http://wh.163.com/reg/",
        xyq: "http://xyq.163.com/reg/",
        y3: "http://y3.163.com/reg/",
        lj: "http://lj.163.com/reg/",
        x3: "http://x3.163.com/reg/",
        zd: "http://zd.163.com/reg/",
        zdcq: "http://zdcq.163.com/reg/",
        zmq: "http://zmq.163.com/reg/",
        xy3: "http://xy3.163.com/reg/",
        zh: "http://zh.163.com/reg/",
        xc: "http://xc.163.com/reg/",
        jl: "http://jl.163.com/reg/",
        ff: "http://ff.163.com/reg/",
        wf: "http://wf.163.com/reg/"
    }, d = {xy2: "http://zs.163.com/xy2/"}, h = {xy2: "\u65b0\u5927\u8bdd2\u52a9\u624b"}, g = "http://ecard.163.com/script/index" + (m(l[r]) ? "?platform=" + (1 == l[r] ? r : l[r]) : ""), u = m(a[r]) ? a[r] : r, f = encodeURIComponent(m(i[r]) ? i[r] : "http://" + r + ".163.com"), w = p[r] ? p[r] : "http://reg.163.com/reg/reg.jsp?product=" + u + "&url=" + f + "&loginurl=" + f, x = d[r] ? d[r] : "http://zs.163.com/app/index.html", y = h[r] ? h[r] : "\u6e38\u620f\u4e91\u52a9\u624b";
    !new function () {
        t("global_gp_reg").href = w, t("global_gp_card").href = g, t("global_gp_zs").href = x, t("global_gp_zs").innerHTML = y;
        var o = "\u5b89\u5353\u5145\u503c";
        TopBarConfig.payWordList[window.location.host] && (o = "\u8d2d\u5361\u5145\u503c", TopBarConfig.pvList[1].name = "\u6e38\u620f\u5145\u503c9.8\u6298"), document.getElementById("global_gp_card").innerHTML = o, t("global_gp_mid").style.display = "block";
        var e = Math.floor(Math.random() * TopBarConfig.pvList.length), n = t("NIE-topBar-right").getElementsByTagName("a")[0];
        n.href = TopBarConfig.pvList[e].link, n.innerHTML = TopBarConfig.pvList[e].name, setInterval(function () {
            n.className = "fadeUp", e = (e + 1) % TopBarConfig.pvList.length, setTimeout(function () {
                n.className = "none", n.href = TopBarConfig.pvList[e].link, n.innerHTML = TopBarConfig.pvList[e].name, setTimeout(function () {
                    n.className = "fadeUp2"
                }, 50)
            }, 400)
        }, 5e3), s(), window.addEventListener ? window.addEventListener("resize", s, !1) : window.attachEvent("onresize", s), t("NIE-topBar-more").onclick = function () {
            t("NIE-table").className.indexOf("moreAni") < 0 ? (t("NIE-table").className += " moreAni", t("NIE-topBar-more").innerHTML = ">>") : (t("NIE-table").className = "NIE-table", t("NIE-topBar-more").innerHTML = "\u66f4\u591a\u70ed\u95e8\u624b\u6e38")
        }
    }, new o("NIE-topBar-menu", "NIE-topBar-menu-hover"), new c("NIE-topBar-news", "NIE-topBar-news-hover", "NIE-topBar-news-close"), i = p = a = l = w = f = u = null
}();