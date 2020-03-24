(function() {
    var oa, aa = "Expected a function",
        ua = "__lodash_hash_undefined__",
        sa = "__lodash_placeholder__",
        la = 16,
        ca = 32,
        fa = 64,
        pa = 128,
        ha = 256,
        da = 1 / 0,
        ga = 9007199254740991,
        va = NaN,
        ya = 4294967295,
        ma = [
            ["ary", pa],
            ["bind", 1],
            ["bindKey", 2],
            ["curry", 8],
            ["curryRight", la],
            ["flip", 512],
            ["partial", ca],
            ["partialRight", fa],
            ["rearg", ha]
        ],
        ba = "[object Arguments]",
        xa = "[object Array]",
        _a = "[object Boolean]",
        wa = "[object Date]",
        Sa = "[object Error]",
        Ta = "[object Function]",
        Ca = "[object GeneratorFunction]",
        ka = "[object Map]",
        Ea = "[object Number]",
        Aa = "[object Object]",
        ja = "[object Promise]",
        Na = "[object RegExp]",
        Pa = "[object Set]",
        La = "[object String]",
        Fa = "[object Symbol]",
        Da = "[object WeakMap]",
        Oa = "[object ArrayBuffer]",
        Ra = "[object DataView]",
        qa = "[object Float32Array]",
        Ia = "[object Float64Array]",
        Ha = "[object Int8Array]",
        za = "[object Int16Array]",
        Ma = "[object Int32Array]",
        Va = "[object Uint8Array]",
        $a = "[object Uint8ClampedArray]",
        Wa = "[object Uint16Array]",
        Ba = "[object Uint32Array]",
        Ua = /\b__p \+= '';/g,
        Xa = /\b(__p \+=) '' \+/g,
        Ga = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
        Ya = /&(?:amp|lt|gt|quot|#39);/g,
        Qa = /[&<>"']/g,
        Za = RegExp(Ya.source),
        Ja = RegExp(Qa.source),
        Ka = /<%-([\s\S]+?)%>/g,
        eu = /<%([\s\S]+?)%>/g,
        tu = /<%=([\s\S]+?)%>/g,
        nu = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        ru = /^\w*$/,
        iu = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        ou = /[\\^$.*+?()[\]{}|]/g,
        au = RegExp(ou.source),
        uu = /^\s+|\s+$/g,
        su = /^\s+/,
        lu = /\s+$/,
        cu = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
        fu = /\{\n\/\* \[wrapped with (.+)\] \*/,
        pu = /,? & /,
        hu = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
        du = /\\(\\)?/g,
        gu = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
        vu = /\w*$/,
        yu = /^[-+]0x[0-9a-f]+$/i,
        mu = /^0b[01]+$/i,
        bu = /^\[object .+?Constructor\]$/,
        xu = /^0o[0-7]+$/i,
        _u = /^(?:0|[1-9]\d*)$/,
        wu = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
        Su = /($^)/,
        Tu = /['\n\r\u2028\u2029\\]/g,
        e = "\\ud800-\\udfff",
        t = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
        n = "\\u2700-\\u27bf",
        r = "a-z\\xdf-\\xf6\\xf8-\\xff",
        i = "A-Z\\xc0-\\xd6\\xd8-\\xde",
        o = "\\ufe0e\\ufe0f",
        a = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
        u = "['’]",
        s = "[" + e + "]",
        l = "[" + a + "]",
        c = "[" + t + "]",
        f = "\\d+",
        p = "[" + n + "]",
        h = "[" + r + "]",
        d = "[^" + e + a + f + n + r + i + "]",
        g = "\\ud83c[\\udffb-\\udfff]",
        v = "[^" + e + "]",
        y = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        m = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        b = "[" + i + "]",
        x = "\\u200d",
        _ = "(?:" + h + "|" + d + ")",
        w = "(?:" + b + "|" + d + ")",
        S = "(?:['’](?:d|ll|m|re|s|t|ve))?",
        T = "(?:['’](?:D|LL|M|RE|S|T|VE))?",
        C = "(?:" + c + "|" + g + ")" + "?",
        k = "[" + o + "]?",
        E = k + C + ("(?:" + x + "(?:" + [v, y, m].join("|") + ")" + k + C + ")*"),
        A = "(?:" + [p, y, m].join("|") + ")" + E,
        j = "(?:" + [v + c + "?", c, y, m, s].join("|") + ")",
        Cu = RegExp(u, "g"),
        ku = RegExp(c, "g"),
        N = RegExp(g + "(?=" + g + ")|" + j + E, "g"),
        Eu = RegExp([b + "?" + h + "+" + S + "(?=" + [l, b, "$"].join("|") + ")", w + "+" + T + "(?=" + [l, b + _, "$"].join("|") + ")", b + "?" + _ + "+" + S, b + "+" + T, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", f, A].join("|"), "g"),
        P = RegExp("[" + x + e + t + o + "]"),
        Au = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
        ju = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
        Nu = -1,
        Pu = {};
    Pu[qa] = Pu[Ia] = Pu[Ha] = Pu[za] = Pu[Ma] = Pu[Va] = Pu[$a] = Pu[Wa] = Pu[Ba] = !0, Pu[ba] = Pu[xa] = Pu[Oa] = Pu[_a] = Pu[Ra] = Pu[wa] = Pu[Sa] = Pu[Ta] = Pu[ka] = Pu[Ea] = Pu[Aa] = Pu[Na] = Pu[Pa] = Pu[La] = Pu[Da] = !1;
    var Lu = {};
    Lu[ba] = Lu[xa] = Lu[Oa] = Lu[Ra] = Lu[_a] = Lu[wa] = Lu[qa] = Lu[Ia] = Lu[Ha] = Lu[za] = Lu[Ma] = Lu[ka] = Lu[Ea] = Lu[Aa] = Lu[Na] = Lu[Pa] = Lu[La] = Lu[Fa] = Lu[Va] = Lu[$a] = Lu[Wa] = Lu[Ba] = !0, Lu[Sa] = Lu[Ta] = Lu[Da] = !1;
    var L = {
            "\\": "\\",
            "'": "'",
            "\n": "n",
            "\r": "r",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        Fu = parseFloat,
        Du = parseInt,
        F = "object" == typeof global && global && global.Object === Object && global,
        D = "object" == typeof self && self && self.Object === Object && self,
        Ou = F || D || Function("return this")(),
        O = "object" == typeof exports && exports && !exports.nodeType && exports,
        R = O && "object" == typeof module && module && !module.nodeType && module,
        Ru = R && R.exports === O,
        q = Ru && F.process,
        I = function() {
            try {
                var e = R && R.require && R.require("util").types;
                return e ? e : q && q.binding && q.binding("util")
            } catch (e) {}
        }(),
        qu = I && I.isArrayBuffer,
        Iu = I && I.isDate,
        Hu = I && I.isMap,
        zu = I && I.isRegExp,
        Mu = I && I.isSet,
        Vu = I && I.isTypedArray;

    function $u(e, t, n) {
        switch (n.length) {
            case 0:
                return e.call(t);
            case 1:
                return e.call(t, n[0]);
            case 2:
                return e.call(t, n[0], n[1]);
            case 3:
                return e.call(t, n[0], n[1], n[2])
        }
        return e.apply(t, n)
    }

    function Wu(e, t, n, r) {
        for (var i = -1, o = null == e ? 0 : e.length; ++i < o;) {
            var a = e[i];
            t(r, a, n(a), e)
        }
        return r
    }

    function Bu(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length; ++n < r && !1 !== t(e[n], n, e););
        return e
    }

    function Uu(e, t) {
        for (var n = null == e ? 0 : e.length; n-- && !1 !== t(e[n], n, e););
        return e
    }

    function Xu(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length; ++n < r;)
            if (!t(e[n], n, e)) return !1;
        return !0
    }

    function Gu(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length, i = 0, o = []; ++n < r;) {
            var a = e[n];
            t(a, n, e) && (o[i++] = a)
        }
        return o
    }

    function Yu(e, t) {
        return !!(null == e ? 0 : e.length) && -1 < is(e, t, 0)
    }

    function Qu(e, t, n) {
        for (var r = -1, i = null == e ? 0 : e.length; ++r < i;)
            if (n(t, e[r])) return !0;
        return !1
    }

    function Zu(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
        return i
    }

    function Ju(e, t) {
        for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
        return e
    }

    function Ku(e, t, n, r) {
        var i = -1,
            o = null == e ? 0 : e.length;
        for (r && o && (n = e[++i]); ++i < o;) n = t(n, e[i], i, e);
        return n
    }

    function es(e, t, n, r) {
        var i = null == e ? 0 : e.length;
        for (r && i && (n = e[--i]); i--;) n = t(n, e[i], i, e);
        return n
    }

    function ts(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length; ++n < r;)
            if (t(e[n], n, e)) return !0;
        return !1
    }
    var H = ss("length");

    function ns(e, r, t) {
        var i;
        return t(e, function(e, t, n) {
            if (r(e, t, n)) return i = t, !1
        }), i
    }

    function rs(e, t, n, r) {
        for (var i = e.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i;)
            if (t(e[o], o, e)) return o;
        return -1
    }

    function is(e, t, n) {
        return t == t ? function(e, t, n) {
            var r = n - 1,
                i = e.length;
            for (; ++r < i;)
                if (e[r] === t) return r;
            return -1
        }(e, t, n) : rs(e, as, n)
    }

    function os(e, t, n, r) {
        for (var i = n - 1, o = e.length; ++i < o;)
            if (r(e[i], t)) return i;
        return -1
    }

    function as(e) {
        return e != e
    }

    function us(e, t) {
        var n = null == e ? 0 : e.length;
        return n ? cs(e, t) / n : va
    }

    function ss(t) {
        return function(e) {
            return null == e ? oa : e[t]
        }
    }

    function z(t) {
        return function(e) {
            return null == t ? oa : t[e]
        }
    }

    function ls(e, r, i, o, t) {
        return t(e, function(e, t, n) {
            i = o ? (o = !1, e) : r(i, e, t, n)
        }), i
    }

    function cs(e, t) {
        for (var n, r = -1, i = e.length; ++r < i;) {
            var o = t(e[r]);
            o !== oa && (n = n === oa ? o : n + o)
        }
        return n
    }

    function fs(e, t) {
        for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
        return r
    }

    function ps(t) {
        return function(e) {
            return t(e)
        }
    }

    function hs(t, e) {
        return Zu(e, function(e) {
            return t[e]
        })
    }

    function ds(e, t) {
        return e.has(t)
    }

    function gs(e, t) {
        for (var n = -1, r = e.length; ++n < r && -1 < is(t, e[n], 0););
        return n
    }

    function vs(e, t) {
        for (var n = e.length; n-- && -1 < is(t, e[n], 0););
        return n
    }
    var ys = z({
            "À": "A",
            "Á": "A",
            "Â": "A",
            "Ã": "A",
            "Ä": "A",
            "Å": "A",
            "à": "a",
            "á": "a",
            "â": "a",
            "ã": "a",
            "ä": "a",
            "å": "a",
            "Ç": "C",
            "ç": "c",
            "Ð": "D",
            "ð": "d",
            "È": "E",
            "É": "E",
            "Ê": "E",
            "Ë": "E",
            "è": "e",
            "é": "e",
            "ê": "e",
            "ë": "e",
            "Ì": "I",
            "Í": "I",
            "Î": "I",
            "Ï": "I",
            "ì": "i",
            "í": "i",
            "î": "i",
            "ï": "i",
            "Ñ": "N",
            "ñ": "n",
            "Ò": "O",
            "Ó": "O",
            "Ô": "O",
            "Õ": "O",
            "Ö": "O",
            "Ø": "O",
            "ò": "o",
            "ó": "o",
            "ô": "o",
            "õ": "o",
            "ö": "o",
            "ø": "o",
            "Ù": "U",
            "Ú": "U",
            "Û": "U",
            "Ü": "U",
            "ù": "u",
            "ú": "u",
            "û": "u",
            "ü": "u",
            "Ý": "Y",
            "ý": "y",
            "ÿ": "y",
            "Æ": "Ae",
            "æ": "ae",
            "Þ": "Th",
            "þ": "th",
            "ß": "ss",
            "Ā": "A",
            "Ă": "A",
            "Ą": "A",
            "ā": "a",
            "ă": "a",
            "ą": "a",
            "Ć": "C",
            "Ĉ": "C",
            "Ċ": "C",
            "Č": "C",
            "ć": "c",
            "ĉ": "c",
            "ċ": "c",
            "č": "c",
            "Ď": "D",
            "Đ": "D",
            "ď": "d",
            "đ": "d",
            "Ē": "E",
            "Ĕ": "E",
            "Ė": "E",
            "Ę": "E",
            "Ě": "E",
            "ē": "e",
            "ĕ": "e",
            "ė": "e",
            "ę": "e",
            "ě": "e",
            "Ĝ": "G",
            "Ğ": "G",
            "Ġ": "G",
            "Ģ": "G",
            "ĝ": "g",
            "ğ": "g",
            "ġ": "g",
            "ģ": "g",
            "Ĥ": "H",
            "Ħ": "H",
            "ĥ": "h",
            "ħ": "h",
            "Ĩ": "I",
            "Ī": "I",
            "Ĭ": "I",
            "Į": "I",
            "İ": "I",
            "ĩ": "i",
            "ī": "i",
            "ĭ": "i",
            "į": "i",
            "ı": "i",
            "Ĵ": "J",
            "ĵ": "j",
            "Ķ": "K",
            "ķ": "k",
            "ĸ": "k",
            "Ĺ": "L",
            "Ļ": "L",
            "Ľ": "L",
            "Ŀ": "L",
            "Ł": "L",
            "ĺ": "l",
            "ļ": "l",
            "ľ": "l",
            "ŀ": "l",
            "ł": "l",
            "Ń": "N",
            "Ņ": "N",
            "Ň": "N",
            "Ŋ": "N",
            "ń": "n",
            "ņ": "n",
            "ň": "n",
            "ŋ": "n",
            "Ō": "O",
            "Ŏ": "O",
            "Ő": "O",
            "ō": "o",
            "ŏ": "o",
            "ő": "o",
            "Ŕ": "R",
            "Ŗ": "R",
            "Ř": "R",
            "ŕ": "r",
            "ŗ": "r",
            "ř": "r",
            "Ś": "S",
            "Ŝ": "S",
            "Ş": "S",
            "Š": "S",
            "ś": "s",
            "ŝ": "s",
            "ş": "s",
            "š": "s",
            "Ţ": "T",
            "Ť": "T",
            "Ŧ": "T",
            "ţ": "t",
            "ť": "t",
            "ŧ": "t",
            "Ũ": "U",
            "Ū": "U",
            "Ŭ": "U",
            "Ů": "U",
            "Ű": "U",
            "Ų": "U",
            "ũ": "u",
            "ū": "u",
            "ŭ": "u",
            "ů": "u",
            "ű": "u",
            "ų": "u",
            "Ŵ": "W",
            "ŵ": "w",
            "Ŷ": "Y",
            "ŷ": "y",
            "Ÿ": "Y",
            "Ź": "Z",
            "Ż": "Z",
            "Ž": "Z",
            "ź": "z",
            "ż": "z",
            "ž": "z",
            "Ĳ": "IJ",
            "ĳ": "ij",
            "Œ": "Oe",
            "œ": "oe",
            "ŉ": "'n",
            "ſ": "s"
        }),
        ms = z({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        });

    function bs(e) {
        return "\\" + L[e]
    }

    function xs(e) {
        return P.test(e)
    }

    function _s(e) {
        var n = -1,
            r = Array(e.size);
        return e.forEach(function(e, t) {
            r[++n] = [t, e]
        }), r
    }

    function ws(t, n) {
        return function(e) {
            return t(n(e))
        }
    }

    function Ss(e, t) {
        for (var n = -1, r = e.length, i = 0, o = []; ++n < r;) {
            var a = e[n];
            a !== t && a !== sa || (e[n] = sa, o[i++] = n)
        }
        return o
    }

    function Ts(e) {
        var t = -1,
            n = Array(e.size);
        return e.forEach(function(e) {
            n[++t] = e
        }), n
    }

    function Cs(e) {
        return (xs(e) ? function(e) {
            var t = N.lastIndex = 0;
            for (; N.test(e);) ++t;
            return t
        } : H)(e)
    }

    function ks(e) {
        return xs(e) ? e.match(N) || [] : e.split("")
    }
    var Es = z({
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
    });
    var As = function e(t) {
        var n, C = (t = null == t ? Ou : As.defaults(Ou.Object(), t, As.pick(Ou, ju))).Array,
            r = t.Date,
            i = t.Error,
            v = t.Function,
            o = t.Math,
            _ = t.Object,
            y = t.RegExp,
            c = t.String,
            b = t.TypeError,
            a = C.prototype,
            u = v.prototype,
            f = _.prototype,
            s = t["__core-js_shared__"],
            l = u.toString,
            w = f.hasOwnProperty,
            p = 0,
            h = (n = /[^.]+$/.exec(s && s.keys && s.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "",
            d = f.toString,
            g = l.call(_),
            m = Ou._,
            x = y("^" + l.call(w).replace(ou, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
            S = Ru ? t.Buffer : oa,
            T = t.Symbol,
            k = t.Uint8Array,
            E = S ? S.allocUnsafe : oa,
            A = ws(_.getPrototypeOf, _),
            j = _.create,
            N = f.propertyIsEnumerable,
            P = a.splice,
            L = T ? T.isConcatSpreadable : oa,
            F = T ? T.iterator : oa,
            D = T ? T.toStringTag : oa,
            O = function() {
                try {
                    var e = $n(_, "defineProperty");
                    return e({}, "", {}), e
                } catch (e) {}
            }(),
            R = t.clearTimeout !== Ou.clearTimeout && t.clearTimeout,
            q = r && r.now !== Ou.Date.now && r.now,
            I = t.setTimeout !== Ou.setTimeout && t.setTimeout,
            H = o.ceil,
            z = o.floor,
            M = _.getOwnPropertySymbols,
            V = S ? S.isBuffer : oa,
            $ = t.isFinite,
            W = a.join,
            B = ws(_.keys, _),
            U = o.max,
            X = o.min,
            G = r.now,
            Y = t.parseInt,
            Q = o.random,
            Z = a.reverse,
            J = $n(t, "DataView"),
            K = $n(t, "Map"),
            ee = $n(t, "Promise"),
            te = $n(t, "Set"),
            ne = $n(t, "WeakMap"),
            re = $n(_, "create"),
            ie = ne && new ne,
            oe = {},
            ae = yr(J),
            ue = yr(K),
            se = yr(ee),
            le = yr(te),
            ce = yr(ne),
            fe = T ? T.prototype : oa,
            pe = fe ? fe.valueOf : oa,
            he = fe ? fe.toString : oa;

        function de(e) {
            if (Di(e) && !Si(e) && !(e instanceof be)) {
                if (e instanceof me) return e;
                if (w.call(e, "__wrapped__")) return mr(e)
            }
            return new me(e)
        }
        var ge = function(e) {
            if (!Fi(e)) return {};
            if (j) return j(e);
            ve.prototype = e;
            var t = new ve;
            return ve.prototype = oa, t
        };

        function ve() {}

        function ye() {}

        function me(e, t) {
            this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = oa
        }

        function be(e) {
            this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = ya, this.__views__ = []
        }

        function xe(e) {
            var t = -1,
                n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }

        function _e(e) {
            var t = -1,
                n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }

        function we(e) {
            var t = -1,
                n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }

        function Se(e) {
            var t = -1,
                n = null == e ? 0 : e.length;
            for (this.__data__ = new we; ++t < n;) this.add(e[t])
        }

        function Te(e) {
            var t = this.__data__ = new _e(e);
            this.size = t.size
        }

        function Ce(e, t) {
            var n = Si(e),
                r = !n && wi(e),
                i = !n && !r && Ei(e),
                o = !n && !r && !i && Vi(e),
                a = n || r || i || o,
                u = a ? fs(e.length, c) : [],
                s = u.length;
            for (var l in e) !t && !w.call(e, l) || a && ("length" == l || i && ("offset" == l || "parent" == l) || o && ("buffer" == l || "byteLength" == l || "byteOffset" == l) || Qn(l, s)) || u.push(l);
            return u
        }

        function ke(e) {
            var t = e.length;
            return t ? e[St(0, t - 1)] : oa
        }

        function Ee(e, t) {
            return pr(on(e), Re(t, 0, e.length))
        }

        function Ae(e) {
            return pr(on(e))
        }

        function je(e, t, n) {
            (n === oa || bi(e[t], n)) && (n !== oa || t in e) || De(e, t, n)
        }

        function Ne(e, t, n) {
            var r = e[t];
            w.call(e, t) && bi(r, n) && (n !== oa || t in e) || De(e, t, n)
        }

        function Pe(e, t) {
            for (var n = e.length; n--;)
                if (bi(e[n][0], t)) return n;
            return -1
        }

        function Le(e, r, i, o) {
            return Me(e, function(e, t, n) {
                r(o, e, i(e), n)
            }), o
        }

        function Fe(e, t) {
            return e && an(t, co(t), e)
        }

        function De(e, t, n) {
            "__proto__" == t && O ? O(e, t, {
                configurable: !0,
                enumerable: !0,
                value: n,
                writable: !0
            }) : e[t] = n
        }

        function Oe(e, t) {
            for (var n = -1, r = t.length, i = C(r), o = null == e; ++n < r;) i[n] = o ? oa : oo(e, t[n]);
            return i
        }

        function Re(e, t, n) {
            return e == e && (n !== oa && (e = e <= n ? e : n), t !== oa && (e = t <= e ? e : t)), e
        }

        function qe(n, r, i, e, t, o) {
            var a, u = 1 & r,
                s = 2 & r,
                l = 4 & r;
            if (i && (a = t ? i(n, e, t, o) : i(n)), a !== oa) return a;
            if (!Fi(n)) return n;
            var c, f, p, h, d, g, v = Si(n);
            if (v) {
                if (a = function(e) {
                        var t = e.length,
                            n = new e.constructor(t);
                        t && "string" == typeof e[0] && w.call(e, "index") && (n.index = e.index, n.input = e.input);
                        return n
                    }(n), !u) return on(n, a)
            } else {
                var y = Un(n),
                    m = y == Ta || y == Ca;
                if (Ei(n)) return Jt(n, u);
                if (y == Aa || y == ba || m && !t) {
                    if (a = s || m ? {} : Gn(n), !u) return s ? (g = p = n, h = (d = a) && an(g, fo(g), d), an(p, Bn(p), h)) : (f = Fe(a, c = n), an(c, Wn(c), f))
                } else {
                    if (!Lu[y]) return t ? n : {};
                    a = function(e, t, n) {
                        var r = e.constructor;
                        switch (t) {
                            case Oa:
                                return Kt(e);
                            case _a:
                            case wa:
                                return new r(+e);
                            case Ra:
                                return function(e, t) {
                                    var n = t ? Kt(e.buffer) : e.buffer;
                                    return new e.constructor(n, e.byteOffset, e.byteLength)
                                }(e, n);
                            case qa:
                            case Ia:
                            case Ha:
                            case za:
                            case Ma:
                            case Va:
                            case $a:
                            case Wa:
                            case Ba:
                                return en(e, n);
                            case ka:
                                return new r;
                            case Ea:
                            case La:
                                return new r(e);
                            case Na:
                                return function(e) {
                                    var t = new e.constructor(e.source, vu.exec(e));
                                    return t.lastIndex = e.lastIndex, t
                                }(e);
                            case Pa:
                                return new r;
                            case Fa:
                                return function(e) {
                                    return pe ? _(pe.call(e)) : {}
                                }(e)
                        }
                    }(n, y, u)
                }
            }
            var b = (o = o || new Te).get(n);
            if (b) return b;
            o.set(n, a), Hi(n) ? n.forEach(function(e) {
                a.add(qe(e, r, i, e, n, o))
            }) : Oi(n) && n.forEach(function(e, t) {
                a.set(t, qe(e, r, i, t, n, o))
            });
            var x = v ? oa : (l ? s ? Rn : On : s ? fo : co)(n);
            return Bu(x || n, function(e, t) {
                x && (e = n[t = e]), Ne(a, t, qe(e, r, i, t, n, o))
            }), a
        }

        function Ie(e, t, n) {
            var r = n.length;
            if (null == e) return !r;
            for (e = _(e); r--;) {
                var i = n[r],
                    o = t[i],
                    a = e[i];
                if (a === oa && !(i in e) || !o(a)) return !1
            }
            return !0
        }

        function He(e, t, n) {
            if ("function" != typeof e) throw new b(aa);
            return sr(function() {
                e.apply(oa, n)
            }, t)
        }

        function ze(e, t, n, r) {
            var i = -1,
                o = Yu,
                a = !0,
                u = e.length,
                s = [],
                l = t.length;
            if (!u) return s;
            n && (t = Zu(t, ps(n))), r ? (o = Qu, a = !1) : 200 <= t.length && (o = ds, a = !1, t = new Se(t));
            e: for (; ++i < u;) {
                var c = e[i],
                    f = null == n ? c : n(c);
                if (c = r || 0 !== c ? c : 0, a && f == f) {
                    for (var p = l; p--;)
                        if (t[p] === f) continue e;
                    s.push(c)
                } else o(t, f, r) || s.push(c)
            }
            return s
        }
        de.templateSettings = {
            escape: Ka,
            evaluate: eu,
            interpolate: tu,
            variable: "",
            imports: {
                _: de
            }
        }, (de.prototype = ye.prototype).constructor = de, (me.prototype = ge(ye.prototype)).constructor = me, (be.prototype = ge(ye.prototype)).constructor = be, xe.prototype.clear = function() {
            this.__data__ = re ? re(null) : {}, this.size = 0
        }, xe.prototype.delete = function(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0, t
        }, xe.prototype.get = function(e) {
            var t = this.__data__;
            if (re) {
                var n = t[e];
                return n === ua ? oa : n
            }
            return w.call(t, e) ? t[e] : oa
        }, xe.prototype.has = function(e) {
            var t = this.__data__;
            return re ? t[e] !== oa : w.call(t, e)
        }, xe.prototype.set = function(e, t) {
            var n = this.__data__;
            return this.size += this.has(e) ? 0 : 1, n[e] = re && t === oa ? ua : t, this
        }, _e.prototype.clear = function() {
            this.__data__ = [], this.size = 0
        }, _e.prototype.delete = function(e) {
            var t = this.__data__,
                n = Pe(t, e);
            return !(n < 0) && (n == t.length - 1 ? t.pop() : P.call(t, n, 1), --this.size, !0)
        }, _e.prototype.get = function(e) {
            var t = this.__data__,
                n = Pe(t, e);
            return n < 0 ? oa : t[n][1]
        }, _e.prototype.has = function(e) {
            return -1 < Pe(this.__data__, e)
        }, _e.prototype.set = function(e, t) {
            var n = this.__data__,
                r = Pe(n, e);
            return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this
        }, we.prototype.clear = function() {
            this.size = 0, this.__data__ = {
                hash: new xe,
                map: new(K || _e),
                string: new xe
            }
        }, we.prototype.delete = function(e) {
            var t = Mn(this, e).delete(e);
            return this.size -= t ? 1 : 0, t
        }, we.prototype.get = function(e) {
            return Mn(this, e).get(e)
        }, we.prototype.has = function(e) {
            return Mn(this, e).has(e)
        }, we.prototype.set = function(e, t) {
            var n = Mn(this, e),
                r = n.size;
            return n.set(e, t), this.size += n.size == r ? 0 : 1, this
        }, Se.prototype.add = Se.prototype.push = function(e) {
            return this.__data__.set(e, ua), this
        }, Se.prototype.has = function(e) {
            return this.__data__.has(e)
        }, Te.prototype.clear = function() {
            this.__data__ = new _e, this.size = 0
        }, Te.prototype.delete = function(e) {
            var t = this.__data__,
                n = t.delete(e);
            return this.size = t.size, n
        }, Te.prototype.get = function(e) {
            return this.__data__.get(e)
        }, Te.prototype.has = function(e) {
            return this.__data__.has(e)
        }, Te.prototype.set = function(e, t) {
            var n = this.__data__;
            if (n instanceof _e) {
                var r = n.__data__;
                if (!K || r.length < 199) return r.push([e, t]), this.size = ++n.size, this;
                n = this.__data__ = new we(r)
            }
            return n.set(e, t), this.size = n.size, this
        };
        var Me = ln(Ye),
            Ve = ln(Qe, !0);

        function $e(e, r) {
            var i = !0;
            return Me(e, function(e, t, n) {
                return i = !!r(e, t, n)
            }), i
        }

        function We(e, t, n) {
            for (var r = -1, i = e.length; ++r < i;) {
                var o = e[r],
                    a = t(o);
                if (null != a && (u === oa ? a == a && !Mi(a) : n(a, u))) var u = a,
                    s = o
            }
            return s
        }

        function Be(e, r) {
            var i = [];
            return Me(e, function(e, t, n) {
                r(e, t, n) && i.push(e)
            }), i
        }

        function Ue(e, t, n, r, i) {
            var o = -1,
                a = e.length;
            for (n = n || Yn, i = i || []; ++o < a;) {
                var u = e[o];
                0 < t && n(u) ? 1 < t ? Ue(u, t - 1, n, r, i) : Ju(i, u) : r || (i[i.length] = u)
            }
            return i
        }
        var Xe = cn(),
            Ge = cn(!0);

        function Ye(e, t) {
            return e && Xe(e, t, co)
        }

        function Qe(e, t) {
            return e && Ge(e, t, co)
        }

        function Ze(t, e) {
            return Gu(e, function(e) {
                return Ni(t[e])
            })
        }

        function Je(e, t) {
            for (var n = 0, r = (t = Gt(t, e)).length; null != e && n < r;) e = e[vr(t[n++])];
            return n && n == r ? e : oa
        }

        function Ke(e, t, n) {
            var r = t(e);
            return Si(e) ? r : Ju(r, n(e))
        }

        function et(e) {
            return null == e ? e === oa ? "[object Undefined]" : "[object Null]" : D && D in _(e) ? function(e) {
                var t = w.call(e, D),
                    n = e[D];
                try {
                    e[D] = oa;
                    var r = !0
                } catch (e) {}
                var i = d.call(e);
                r && (t ? e[D] = n : delete e[D]);
                return i
            }(e) : (t = e, d.call(t));
            var t
        }

        function tt(e, t) {
            return t < e
        }

        function nt(e, t) {
            return null != e && w.call(e, t)
        }

        function rt(e, t) {
            return null != e && t in _(e)
        }

        function it(e, t, n) {
            for (var r = n ? Qu : Yu, i = e[0].length, o = e.length, a = o, u = C(o), s = 1 / 0, l = []; a--;) {
                var c = e[a];
                a && t && (c = Zu(c, ps(t))), s = X(c.length, s), u[a] = !n && (t || 120 <= i && 120 <= c.length) ? new Se(a && c) : oa
            }
            c = e[0];
            var f = -1,
                p = u[0];
            e: for (; ++f < i && l.length < s;) {
                var h = c[f],
                    d = t ? t(h) : h;
                if (h = n || 0 !== h ? h : 0, !(p ? ds(p, d) : r(l, d, n))) {
                    for (a = o; --a;) {
                        var g = u[a];
                        if (!(g ? ds(g, d) : r(e[a], d, n))) continue e
                    }
                    p && p.push(d), l.push(h)
                }
            }
            return l
        }

        function ot(e, t, n) {
            var r = null == (e = or(e, t = Gt(t, e))) ? e : e[vr(jr(t))];
            return null == r ? oa : $u(r, e, n)
        }

        function at(e) {
            return Di(e) && et(e) == ba
        }

        function ut(e, t, n, r, i) {
            return e === t || (null == e || null == t || !Di(e) && !Di(t) ? e != e && t != t : function(e, t, n, r, i, o) {
                var a = Si(e),
                    u = Si(t),
                    s = a ? xa : Un(e),
                    l = u ? xa : Un(t),
                    c = (s = s == ba ? Aa : s) == Aa,
                    f = (l = l == ba ? Aa : l) == Aa,
                    p = s == l;
                if (p && Ei(e)) {
                    if (!Ei(t)) return !1;
                    c = !(a = !0)
                }
                if (p && !c) return o = o || new Te, a || Vi(e) ? Fn(e, t, n, r, i, o) : function(e, t, n, r, i, o, a) {
                    switch (n) {
                        case Ra:
                            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                            e = e.buffer, t = t.buffer;
                        case Oa:
                            return e.byteLength == t.byteLength && o(new k(e), new k(t)) ? !0 : !1;
                        case _a:
                        case wa:
                        case Ea:
                            return bi(+e, +t);
                        case Sa:
                            return e.name == t.name && e.message == t.message;
                        case Na:
                        case La:
                            return e == t + "";
                        case ka:
                            var u = _s;
                        case Pa:
                            var s = 1 & r;
                            if (u = u || Ts, e.size != t.size && !s) return !1;
                            var l = a.get(e);
                            if (l) return l == t;
                            r |= 2, a.set(e, t);
                            var c = Fn(u(e), u(t), r, i, o, a);
                            return a.delete(e), c;
                        case Fa:
                            if (pe) return pe.call(e) == pe.call(t)
                    }
                    return !1
                }(e, t, s, n, r, i, o);
                if (!(1 & n)) {
                    var h = c && w.call(e, "__wrapped__"),
                        d = f && w.call(t, "__wrapped__");
                    if (h || d) {
                        var g = h ? e.value() : e,
                            v = d ? t.value() : t;
                        return o = o || new Te, i(g, v, n, r, o)
                    }
                }
                return p && (o = o || new Te, function(e, t, n, r, i, o) {
                    var a = 1 & n,
                        u = On(e),
                        s = u.length,
                        l = On(t).length;
                    if (s != l && !a) return !1;
                    var c = s;
                    for (; c--;) {
                        var f = u[c];
                        if (!(a ? f in t : w.call(t, f))) return !1
                    }
                    var p = o.get(e);
                    if (p && o.get(t)) return p == t;
                    var h = !0;
                    o.set(e, t), o.set(t, e);
                    var d = a;
                    for (; ++c < s;) {
                        f = u[c];
                        var g = e[f],
                            v = t[f];
                        if (r) var y = a ? r(v, g, f, t, e, o) : r(g, v, f, e, t, o);
                        if (!(y === oa ? g === v || i(g, v, n, r, o) : y)) {
                            h = !1;
                            break
                        }
                        d = d || "constructor" == f
                    }
                    if (h && !d) {
                        var m = e.constructor,
                            b = t.constructor;
                        m != b && "constructor" in e && "constructor" in t && !("function" == typeof m && m instanceof m && "function" == typeof b && b instanceof b) && (h = !1)
                    }
                    return o.delete(e), o.delete(t), h
                }(e, t, n, r, i, o))
            }(e, t, n, r, ut, i))
        }

        function st(e, t, n, r) {
            var i = n.length,
                o = i,
                a = !r;
            if (null == e) return !o;
            for (e = _(e); i--;) {
                var u = n[i];
                if (a && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1
            }
            for (; ++i < o;) {
                var s = (u = n[i])[0],
                    l = e[s],
                    c = u[1];
                if (a && u[2]) {
                    if (l === oa && !(s in e)) return !1
                } else {
                    var f = new Te;
                    if (r) var p = r(l, c, s, e, t, f);
                    if (!(p === oa ? ut(c, l, 3, r, f) : p)) return !1
                }
            }
            return !0
        }

        function lt(e) {
            return !(!Fi(e) || (t = e, h && h in t)) && (Ni(e) ? x : bu).test(yr(e));
            var t
        }

        function ct(e) {
            return "function" == typeof e ? e : null == e ? qo : "object" == typeof e ? Si(e) ? vt(e[0], e[1]) : gt(e) : Uo(e)
        }

        function ft(e) {
            if (!tr(e)) return B(e);
            var t = [];
            for (var n in _(e)) w.call(e, n) && "constructor" != n && t.push(n);
            return t
        }

        function pt(e) {
            if (!Fi(e)) return function(e) {
                var t = [];
                if (null != e)
                    for (var n in _(e)) t.push(n);
                return t
            }(e);
            var t = tr(e),
                n = [];
            for (var r in e)("constructor" != r || !t && w.call(e, r)) && n.push(r);
            return n
        }

        function ht(e, t) {
            return e < t
        }

        function dt(e, r) {
            var i = -1,
                o = Ci(e) ? C(e.length) : [];
            return Me(e, function(e, t, n) {
                o[++i] = r(e, t, n)
            }), o
        }

        function gt(t) {
            var n = Vn(t);
            return 1 == n.length && n[0][2] ? rr(n[0][0], n[0][1]) : function(e) {
                return e === t || st(e, t, n)
            }
        }

        function vt(n, r) {
            return Jn(n) && nr(r) ? rr(vr(n), r) : function(e) {
                var t = oo(e, n);
                return t === oa && t === r ? ao(e, n) : ut(r, t, 3)
            }
        }

        function yt(r, i, o, a, u) {
            r !== i && Xe(i, function(e, t) {
                if (u = u || new Te, Fi(e)) ! function(e, t, n, r, i, o, a) {
                    var u = ar(e, n),
                        s = ar(t, n),
                        l = a.get(s);
                    if (l) return je(e, n, l);
                    var c = o ? o(u, s, n + "", e, t, a) : oa,
                        f = c === oa;
                    if (f) {
                        var p = Si(s),
                            h = !p && Ei(s),
                            d = !p && !h && Vi(s);
                        c = s, p || h || d ? c = Si(u) ? u : ki(u) ? on(u) : h ? Jt(s, !(f = !1)) : d ? en(s, !(f = !1)) : [] : qi(s) || wi(s) ? wi(c = u) ? c = Qi(u) : Fi(u) && !Ni(u) || (c = Gn(s)) : f = !1
                    }
                    f && (a.set(s, c), i(c, s, r, o, a), a.delete(s));
                    je(e, n, c)
                }(r, i, t, o, yt, a, u);
                else {
                    var n = a ? a(ar(r, t), e, t + "", r, i, u) : oa;
                    n === oa && (n = e), je(r, t, n)
                }
            }, fo)
        }

        function mt(e, t) {
            var n = e.length;
            if (n) return Qn(t += t < 0 ? n : 0, n) ? e[t] : oa
        }

        function bt(e, r, n) {
            var i = -1;
            return r = Zu(r.length ? r : [qo], ps(zn())),
                function(e, t) {
                    var n = e.length;
                    for (e.sort(t); n--;) e[n] = e[n].value;
                    return e
                }(dt(e, function(t, e, n) {
                    return {
                        criteria: Zu(r, function(e) {
                            return e(t)
                        }),
                        index: ++i,
                        value: t
                    }
                }), function(e, t) {
                    return function(e, t, n) {
                        var r = -1,
                            i = e.criteria,
                            o = t.criteria,
                            a = i.length,
                            u = n.length;
                        for (; ++r < a;) {
                            var s = tn(i[r], o[r]);
                            if (s) {
                                if (u <= r) return s;
                                var l = n[r];
                                return s * ("desc" == l ? -1 : 1)
                            }
                        }
                        return e.index - t.index
                    }(e, t, n)
                })
        }

        function xt(e, t, n) {
            for (var r = -1, i = t.length, o = {}; ++r < i;) {
                var a = t[r],
                    u = Je(e, a);
                n(u, a) && At(o, Gt(a, e), u)
            }
            return o
        }

        function _t(e, t, n, r) {
            var i = r ? os : is,
                o = -1,
                a = t.length,
                u = e;
            for (e === t && (t = on(t)), n && (u = Zu(e, ps(n))); ++o < a;)
                for (var s = 0, l = t[o], c = n ? n(l) : l; - 1 < (s = i(u, c, s, r));) u !== e && P.call(u, s, 1), P.call(e, s, 1);
            return e
        }

        function wt(e, t) {
            for (var n = e ? t.length : 0, r = n - 1; n--;) {
                var i = t[n];
                if (n == r || i !== o) {
                    var o = i;
                    Qn(i) ? P.call(e, i, 1) : zt(e, i)
                }
            }
            return e
        }

        function St(e, t) {
            return e + z(Q() * (t - e + 1))
        }

        function Tt(e, t) {
            var n = "";
            if (!e || t < 1 || ga < t) return n;
            for (; t % 2 && (n += e), (t = z(t / 2)) && (e += e), t;);
            return n
        }

        function Ct(e, t) {
            return lr(ir(e, t, qo), e + "")
        }

        function kt(e) {
            return ke(xo(e))
        }

        function Et(e, t) {
            var n = xo(e);
            return pr(n, Re(t, 0, n.length))
        }

        function At(e, t, n, r) {
            if (!Fi(e)) return e;
            for (var i = -1, o = (t = Gt(t, e)).length, a = o - 1, u = e; null != u && ++i < o;) {
                var s = vr(t[i]),
                    l = n;
                if (i != a) {
                    var c = u[s];
                    (l = r ? r(c, s, u) : oa) === oa && (l = Fi(c) ? c : Qn(t[i + 1]) ? [] : {})
                }
                Ne(u, s, l), u = u[s]
            }
            return e
        }
        var jt = ie ? function(e, t) {
                return ie.set(e, t), e
            } : qo,
            Nt = O ? function(e, t) {
                return O(e, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: Do(t),
                    writable: !0
                })
            } : qo;

        function Pt(e) {
            return pr(xo(e))
        }

        function Lt(e, t, n) {
            var r = -1,
                i = e.length;
            t < 0 && (t = i < -t ? 0 : i + t), (n = i < n ? i : n) < 0 && (n += i), i = n < t ? 0 : n - t >>> 0, t >>>= 0;
            for (var o = C(i); ++r < i;) o[r] = e[r + t];
            return o
        }

        function Ft(e, r) {
            var i;
            return Me(e, function(e, t, n) {
                return !(i = r(e, t, n))
            }), !!i
        }

        function Dt(e, t, n) {
            var r = 0,
                i = null == e ? r : e.length;
            if ("number" == typeof t && t == t && i <= 2147483647) {
                for (; r < i;) {
                    var o = r + i >>> 1,
                        a = e[o];
                    null !== a && !Mi(a) && (n ? a <= t : a < t) ? r = 1 + o : i = o
                }
                return i
            }
            return Ot(e, t, qo, n)
        }

        function Ot(e, t, n, r) {
            t = n(t);
            for (var i = 0, o = null == e ? 0 : e.length, a = t != t, u = null === t, s = Mi(t), l = t === oa; i < o;) {
                var c = z((i + o) / 2),
                    f = n(e[c]),
                    p = f !== oa,
                    h = null === f,
                    d = f == f,
                    g = Mi(f);
                if (a) var v = r || d;
                else v = l ? d && (r || p) : u ? d && p && (r || !h) : s ? d && p && !h && (r || !g) : !h && !g && (r ? f <= t : f < t);
                v ? i = c + 1 : o = c
            }
            return X(o, 4294967294)
        }

        function Rt(e, t) {
            for (var n = -1, r = e.length, i = 0, o = []; ++n < r;) {
                var a = e[n],
                    u = t ? t(a) : a;
                if (!n || !bi(u, s)) {
                    var s = u;
                    o[i++] = 0 === a ? 0 : a
                }
            }
            return o
        }

        function qt(e) {
            return "number" == typeof e ? e : Mi(e) ? va : +e
        }

        function It(e) {
            if ("string" == typeof e) return e;
            if (Si(e)) return Zu(e, It) + "";
            if (Mi(e)) return he ? he.call(e) : "";
            var t = e + "";
            return "0" == t && 1 / e == -da ? "-0" : t
        }

        function Ht(e, t, n) {
            var r = -1,
                i = Yu,
                o = e.length,
                a = !0,
                u = [],
                s = u;
            if (n) a = !1, i = Qu;
            else if (200 <= o) {
                var l = t ? null : En(e);
                if (l) return Ts(l);
                a = !1, i = ds, s = new Se
            } else s = t ? [] : u;
            e: for (; ++r < o;) {
                var c = e[r],
                    f = t ? t(c) : c;
                if (c = n || 0 !== c ? c : 0, a && f == f) {
                    for (var p = s.length; p--;)
                        if (s[p] === f) continue e;
                    t && s.push(f), u.push(c)
                } else i(s, f, n) || (s !== u && s.push(f), u.push(c))
            }
            return u
        }

        function zt(e, t) {
            return null == (e = or(e, t = Gt(t, e))) || delete e[vr(jr(t))]
        }

        function Mt(e, t, n, r) {
            return At(e, t, n(Je(e, t)), r)
        }

        function Vt(e, t, n, r) {
            for (var i = e.length, o = r ? i : -1;
                (r ? o-- : ++o < i) && t(e[o], o, e););
            return n ? Lt(e, r ? 0 : o, r ? o + 1 : i) : Lt(e, r ? o + 1 : 0, r ? i : o)
        }

        function $t(e, t) {
            var n = e;
            return n instanceof be && (n = n.value()), Ku(t, function(e, t) {
                return t.func.apply(t.thisArg, Ju([e], t.args))
            }, n)
        }

        function Wt(e, t, n) {
            var r = e.length;
            if (r < 2) return r ? Ht(e[0]) : [];
            for (var i = -1, o = C(r); ++i < r;)
                for (var a = e[i], u = -1; ++u < r;) u != i && (o[i] = ze(o[i] || a, e[u], t, n));
            return Ht(Ue(o, 1), t, n)
        }

        function Bt(e, t, n) {
            for (var r = -1, i = e.length, o = t.length, a = {}; ++r < i;) {
                var u = r < o ? t[r] : oa;
                n(a, e[r], u)
            }
            return a
        }

        function Ut(e) {
            return ki(e) ? e : []
        }

        function Xt(e) {
            return "function" == typeof e ? e : qo
        }

        function Gt(e, t) {
            return Si(e) ? e : Jn(e, t) ? [e] : gr(Zi(e))
        }
        var Yt = Ct;

        function Qt(e, t, n) {
            var r = e.length;
            return n = n === oa ? r : n, !t && r <= n ? e : Lt(e, t, n)
        }
        var Zt = R || function(e) {
            return Ou.clearTimeout(e)
        };

        function Jt(e, t) {
            if (t) return e.slice();
            var n = e.length,
                r = E ? E(n) : new e.constructor(n);
            return e.copy(r), r
        }

        function Kt(e) {
            var t = new e.constructor(e.byteLength);
            return new k(t).set(new k(e)), t
        }

        function en(e, t) {
            var n = t ? Kt(e.buffer) : e.buffer;
            return new e.constructor(n, e.byteOffset, e.length)
        }

        function tn(e, t) {
            if (e !== t) {
                var n = e !== oa,
                    r = null === e,
                    i = e == e,
                    o = Mi(e),
                    a = t !== oa,
                    u = null === t,
                    s = t == t,
                    l = Mi(t);
                if (!u && !l && !o && t < e || o && a && s && !u && !l || r && a && s || !n && s || !i) return 1;
                if (!r && !o && !l && e < t || l && n && i && !r && !o || u && n && i || !a && i || !s) return -1
            }
            return 0
        }

        function nn(e, t, n, r) {
            for (var i = -1, o = e.length, a = n.length, u = -1, s = t.length, l = U(o - a, 0), c = C(s + l), f = !r; ++u < s;) c[u] = t[u];
            for (; ++i < a;)(f || i < o) && (c[n[i]] = e[i]);
            for (; l--;) c[u++] = e[i++];
            return c
        }

        function rn(e, t, n, r) {
            for (var i = -1, o = e.length, a = -1, u = n.length, s = -1, l = t.length, c = U(o - u, 0), f = C(c + l), p = !r; ++i < c;) f[i] = e[i];
            for (var h = i; ++s < l;) f[h + s] = t[s];
            for (; ++a < u;)(p || i < o) && (f[h + n[a]] = e[i++]);
            return f
        }

        function on(e, t) {
            var n = -1,
                r = e.length;
            for (t = t || C(r); ++n < r;) t[n] = e[n];
            return t
        }

        function an(e, t, n, r) {
            var i = !n;
            n = n || {};
            for (var o = -1, a = t.length; ++o < a;) {
                var u = t[o],
                    s = r ? r(n[u], e[u], u, n, e) : oa;
                s === oa && (s = e[u]), (i ? De : Ne)(n, u, s)
            }
            return n
        }

        function un(i, o) {
            return function(e, t) {
                var n = Si(e) ? Wu : Le,
                    r = o ? o() : {};
                return n(e, i, zn(t, 2), r)
            }
        }

        function sn(u) {
            return Ct(function(e, t) {
                var n = -1,
                    r = t.length,
                    i = 1 < r ? t[r - 1] : oa,
                    o = 2 < r ? t[2] : oa;
                for (i = 3 < u.length && "function" == typeof i ? (r--, i) : oa, o && Zn(t[0], t[1], o) && (i = r < 3 ? oa : i, r = 1), e = _(e); ++n < r;) {
                    var a = t[n];
                    a && u(e, a, n, i)
                }
                return e
            })
        }

        function ln(o, a) {
            return function(e, t) {
                if (null == e) return e;
                if (!Ci(e)) return o(e, t);
                for (var n = e.length, r = a ? n : -1, i = _(e);
                    (a ? r-- : ++r < n) && !1 !== t(i[r], r, i););
                return e
            }
        }

        function cn(s) {
            return function(e, t, n) {
                for (var r = -1, i = _(e), o = n(e), a = o.length; a--;) {
                    var u = o[s ? a : ++r];
                    if (!1 === t(i[u], u, i)) break
                }
                return e
            }
        }

        function fn(i) {
            return function(e) {
                var t = xs(e = Zi(e)) ? ks(e) : oa,
                    n = t ? t[0] : e.charAt(0),
                    r = t ? Qt(t, 1).join("") : e.slice(1);
                return n[i]() + r
            }
        }

        function pn(t) {
            return function(e) {
                return Ku(Po(So(e).replace(Cu, "")), t, "")
            }
        }

        function hn(r) {
            return function() {
                var e = arguments;
                switch (e.length) {
                    case 0:
                        return new r;
                    case 1:
                        return new r(e[0]);
                    case 2:
                        return new r(e[0], e[1]);
                    case 3:
                        return new r(e[0], e[1], e[2]);
                    case 4:
                        return new r(e[0], e[1], e[2], e[3]);
                    case 5:
                        return new r(e[0], e[1], e[2], e[3], e[4]);
                    case 6:
                        return new r(e[0], e[1], e[2], e[3], e[4], e[5]);
                    case 7:
                        return new r(e[0], e[1], e[2], e[3], e[4], e[5], e[6])
                }
                var t = ge(r.prototype),
                    n = r.apply(t, e);
                return Fi(n) ? n : t
            }
        }

        function dn(a, u, s) {
            var l = hn(a);
            return function e() {
                for (var t = arguments.length, n = C(t), r = t, i = Hn(e); r--;) n[r] = arguments[r];
                var o = t < 3 && n[0] !== i && n[t - 1] !== i ? [] : Ss(n, i);
                return (t -= o.length) < s ? Cn(a, u, yn, e.placeholder, oa, n, o, oa, oa, s - t) : $u(this && this !== Ou && this instanceof e ? l : a, this, n)
            }
        }

        function gn(a) {
            return function(e, t, n) {
                var r = _(e);
                if (!Ci(e)) {
                    var i = zn(t, 3);
                    e = co(e), t = function(e) {
                        return i(r[e], e, r)
                    }
                }
                var o = a(e, t, n);
                return -1 < o ? r[i ? e[o] : o] : oa
            }
        }

        function vn(s) {
            return Dn(function(i) {
                var o = i.length,
                    e = o,
                    t = me.prototype.thru;
                for (s && i.reverse(); e--;) {
                    var n = i[e];
                    if ("function" != typeof n) throw new b(aa);
                    if (t && !a && "wrapper" == In(n)) var a = new me([], !0)
                }
                for (e = a ? e : o; ++e < o;) {
                    var r = In(n = i[e]),
                        u = "wrapper" == r ? qn(n) : oa;
                    a = u && Kn(u[0]) && 424 == u[1] && !u[4].length && 1 == u[9] ? a[In(u[0])].apply(a, u[3]) : 1 == n.length && Kn(n) ? a[r]() : a.thru(n)
                }
                return function() {
                    var e = arguments,
                        t = e[0];
                    if (a && 1 == e.length && Si(t)) return a.plant(t).value();
                    for (var n = 0, r = o ? i[n].apply(this, e) : t; ++n < o;) r = i[n].call(this, r);
                    return r
                }
            })
        }

        function yn(l, c, f, p, h, d, g, v, y, m) {
            var b = c & pa,
                x = 1 & c,
                _ = 2 & c,
                w = 24 & c,
                S = 512 & c,
                T = _ ? oa : hn(l);
            return function e() {
                for (var t = arguments.length, n = C(t), r = t; r--;) n[r] = arguments[r];
                if (w) var i = Hn(e),
                    o = function(e, t) {
                        for (var n = e.length, r = 0; n--;) e[n] === t && ++r;
                        return r
                    }(n, i);
                if (p && (n = nn(n, p, h, w)), d && (n = rn(n, d, g, w)), t -= o, w && t < m) {
                    var a = Ss(n, i);
                    return Cn(l, c, yn, e.placeholder, f, n, a, v, y, m - t)
                }
                var u = x ? f : this,
                    s = _ ? u[l] : l;
                return t = n.length, v ? n = function(e, t) {
                    for (var n = e.length, r = X(t.length, n), i = on(e); r--;) {
                        var o = t[r];
                        e[r] = Qn(o, n) ? i[o] : oa
                    }
                    return e
                }(n, v) : S && 1 < t && n.reverse(), b && y < t && (n.length = y), this && this !== Ou && this instanceof e && (s = T || hn(s)), s.apply(u, n)
            }
        }

        function mn(a, u) {
            return function(e, t) {
                return n = e, r = a, i = u(t), o = {}, Ye(n, function(e, t, n) {
                    r(o, i(e), t, n)
                }), o;
                var n, r, i, o
            }
        }

        function bn(r, i) {
            return function(e, t) {
                var n;
                if (e === oa && t === oa) return i;
                if (e !== oa && (n = e), t !== oa) {
                    if (n === oa) return t;
                    t = "string" == typeof e || "string" == typeof t ? (e = It(e), It(t)) : (e = qt(e), qt(t)), n = r(e, t)
                }
                return n
            }
        }

        function xn(r) {
            return Dn(function(e) {
                return e = Zu(e, ps(zn())), Ct(function(t) {
                    var n = this;
                    return r(e, function(e) {
                        return $u(e, n, t)
                    })
                })
            })
        }

        function _n(e, t) {
            var n = (t = t === oa ? " " : It(t)).length;
            if (n < 2) return n ? Tt(t, e) : t;
            var r = Tt(t, H(e / Cs(t)));
            return xs(t) ? Qt(ks(r), 0, e).join("") : r.slice(0, e)
        }

        function wn(u, e, s, l) {
            var c = 1 & e,
                f = hn(u);
            return function e() {
                for (var t = -1, n = arguments.length, r = -1, i = l.length, o = C(i + n), a = this && this !== Ou && this instanceof e ? f : u; ++r < i;) o[r] = l[r];
                for (; n--;) o[r++] = arguments[++t];
                return $u(a, c ? s : this, o)
            }
        }

        function Sn(r) {
            return function(e, t, n) {
                return n && "number" != typeof n && Zn(e, t, n) && (t = n = oa), e = Ui(e), t === oa ? (t = e, e = 0) : t = Ui(t),
                    function(e, t, n, r) {
                        for (var i = -1, o = U(H((t - e) / (n || 1)), 0), a = C(o); o--;) a[r ? o : ++i] = e, e += n;
                        return a
                    }(e, t, n = n === oa ? e < t ? 1 : -1 : Ui(n), r)
            }
        }

        function Tn(n) {
            return function(e, t) {
                return "string" == typeof e && "string" == typeof t || (e = Yi(e), t = Yi(t)), n(e, t)
            }
        }

        function Cn(e, t, n, r, i, o, a, u, s, l) {
            var c = 8 & t;
            t |= c ? ca : fa, 4 & (t &= ~(c ? fa : ca)) || (t &= -4);
            var f = [e, t, i, c ? o : oa, c ? a : oa, c ? oa : o, c ? oa : a, u, s, l],
                p = n.apply(oa, f);
            return Kn(e) && ur(p, f), p.placeholder = r, cr(p, e, t)
        }

        function kn(e) {
            var r = o[e];
            return function(e, t) {
                if (e = Yi(e), (t = null == t ? 0 : X(Xi(t), 292)) && $(e)) {
                    var n = (Zi(e) + "e").split("e");
                    return +((n = (Zi(r(n[0] + "e" + (+n[1] + t))) + "e").split("e"))[0] + "e" + (n[1] - t))
                }
                return r(e)
            }
        }
        var En = te && 1 / Ts(new te([, -0]))[1] == da ? function(e) {
            return new te(e)
        } : Vo;

        function An(a) {
            return function(e) {
                var t, n, r, i, o = Un(e);
                return o == ka ? _s(e) : o == Pa ? (t = e, n = -1, r = Array(t.size), t.forEach(function(e) {
                    r[++n] = [e, e]
                }), r) : Zu(a(i = e), function(e) {
                    return [e, i[e]]
                })
            }
        }

        function jn(e, t, n, r, i, o, a, u) {
            var s = 2 & t;
            if (!s && "function" != typeof e) throw new b(aa);
            var l = r ? r.length : 0;
            if (l || (t &= -97, r = i = oa), a = a === oa ? a : U(Xi(a), 0), u = u === oa ? u : Xi(u), l -= i ? i.length : 0, t & fa) {
                var c = r,
                    f = i;
                r = i = oa
            }
            var p, h, d, g, v = s ? oa : qn(e),
                y = [e, t, n, r, i, c, f, o, a, u];
            if (v && function(e, t) {
                    var n = e[1],
                        r = t[1],
                        i = n | r,
                        o = i < 131,
                        a = r == pa && 8 == n || r == pa && n == ha && e[7].length <= t[8] || 384 == r && t[7].length <= t[8] && 8 == n;
                    if (!o && !a) return;
                    1 & r && (e[2] = t[2], i |= 1 & n ? 0 : 4);
                    var u = t[3];
                    if (u) {
                        var s = e[3];
                        e[3] = s ? nn(s, u, t[4]) : u, e[4] = s ? Ss(e[3], sa) : t[4]
                    }(u = t[5]) && (s = e[5], e[5] = s ? rn(s, u, t[6]) : u, e[6] = s ? Ss(e[5], sa) : t[6]);
                    (u = t[7]) && (e[7] = u);
                    r & pa && (e[8] = null == e[8] ? t[8] : X(e[8], t[8]));
                    null == e[9] && (e[9] = t[9]);
                    e[0] = t[0], e[1] = i
                }(y, v), e = y[0], t = y[1], n = y[2], r = y[3], i = y[4], !(u = y[9] = y[9] === oa ? s ? 0 : e.length : U(y[9] - l, 0)) && 24 & t && (t &= -25), t && 1 != t) m = 8 == t || t == la ? dn(e, t, u) : t != ca && 33 != t || i.length ? yn.apply(oa, y) : wn(e, t, n, r);
            else var m = (h = n, d = 1 & t, g = hn(p = e), function e() {
                return (this && this !== Ou && this instanceof e ? g : p).apply(d ? h : this, arguments)
            });
            return cr((v ? jt : ur)(m, y), e, t)
        }

        function Nn(e, t, n, r) {
            return e === oa || bi(e, f[n]) && !w.call(r, n) ? t : e
        }

        function Pn(e, t, n, r, i, o) {
            return Fi(e) && Fi(t) && (o.set(t, e), yt(e, t, oa, Pn, o), o.delete(t)), e
        }

        function Ln(e) {
            return qi(e) ? oa : e
        }

        function Fn(e, t, n, r, i, o) {
            var a = 1 & n,
                u = e.length,
                s = t.length;
            if (u != s && !(a && u < s)) return !1;
            var l = o.get(e);
            if (l && o.get(t)) return l == t;
            var c = -1,
                f = !0,
                p = 2 & n ? new Se : oa;
            for (o.set(e, t), o.set(t, e); ++c < u;) {
                var h = e[c],
                    d = t[c];
                if (r) var g = a ? r(d, h, c, t, e, o) : r(h, d, c, e, t, o);
                if (g !== oa) {
                    if (g) continue;
                    f = !1;
                    break
                }
                if (p) {
                    if (!ts(t, function(e, t) {
                            return !ds(p, t) && (h === e || i(h, e, n, r, o)) && p.push(t)
                        })) {
                        f = !1;
                        break
                    }
                } else if (h !== d && !i(h, d, n, r, o)) {
                    f = !1;
                    break
                }
            }
            return o.delete(e), o.delete(t), f
        }

        function Dn(e) {
            return lr(ir(e, oa, Tr), e + "")
        }

        function On(e) {
            return Ke(e, co, Wn)
        }

        function Rn(e) {
            return Ke(e, fo, Bn)
        }
        var qn = ie ? function(e) {
            return ie.get(e)
        } : Vo;

        function In(e) {
            for (var t = e.name + "", n = oe[t], r = w.call(oe, t) ? n.length : 0; r--;) {
                var i = n[r],
                    o = i.func;
                if (null == o || o == e) return i.name
            }
            return t
        }

        function Hn(e) {
            return (w.call(de, "placeholder") ? de : e).placeholder
        }

        function zn() {
            var e = de.iteratee || Io;
            return e = e === Io ? ct : e, arguments.length ? e(arguments[0], arguments[1]) : e
        }

        function Mn(e, t) {
            var n, r, i = e.__data__;
            return ("string" == (r = typeof(n = t)) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== n : null === n) ? i["string" == typeof t ? "string" : "hash"] : i.map
        }

        function Vn(e) {
            for (var t = co(e), n = t.length; n--;) {
                var r = t[n],
                    i = e[r];
                t[n] = [r, i, nr(i)]
            }
            return t
        }

        function $n(e, t) {
            var n, r, i = (r = t, null == (n = e) ? oa : n[r]);
            return lt(i) ? i : oa
        }
        var Wn = M ? function(t) {
                return null == t ? [] : (t = _(t), Gu(M(t), function(e) {
                    return N.call(t, e)
                }))
            } : Yo,
            Bn = M ? function(e) {
                for (var t = []; e;) Ju(t, Wn(e)), e = A(e);
                return t
            } : Yo,
            Un = et;

        function Xn(e, t, n) {
            for (var r = -1, i = (t = Gt(t, e)).length, o = !1; ++r < i;) {
                var a = vr(t[r]);
                if (!(o = null != e && n(e, a))) break;
                e = e[a]
            }
            return o || ++r != i ? o : !!(i = null == e ? 0 : e.length) && Li(i) && Qn(a, i) && (Si(e) || wi(e))
        }

        function Gn(e) {
            return "function" != typeof e.constructor || tr(e) ? {} : ge(A(e))
        }

        function Yn(e) {
            return Si(e) || wi(e) || !!(L && e && e[L])
        }

        function Qn(e, t) {
            var n = typeof e;
            return !!(t = null == t ? ga : t) && ("number" == n || "symbol" != n && _u.test(e)) && -1 < e && e % 1 == 0 && e < t
        }

        function Zn(e, t, n) {
            if (Fi(n)) {
                var r = typeof t;
                return ("number" == r ? Ci(n) && Qn(t, n.length) : "string" == r && t in n) && bi(n[t], e)
            }
        }

        function Jn(e, t) {
            if (!Si(e)) {
                var n = typeof e;
                return "number" == n || "symbol" == n || "boolean" == n || null == e || Mi(e) || (ru.test(e) || !nu.test(e) || null != t && e in _(t))
            }
        }

        function Kn(e) {
            var t = In(e),
                n = de[t];
            if ("function" == typeof n && t in be.prototype) {
                if (e === n) return 1;
                var r = qn(n);
                return r && e === r[0]
            }
        }(J && Un(new J(new ArrayBuffer(1))) != Ra || K && Un(new K) != ka || ee && Un(ee.resolve()) != ja || te && Un(new te) != Pa || ne && Un(new ne) != Da) && (Un = function(e) {
            var t = et(e),
                n = t == Aa ? e.constructor : oa,
                r = n ? yr(n) : "";
            if (r) switch (r) {
                case ae:
                    return Ra;
                case ue:
                    return ka;
                case se:
                    return ja;
                case le:
                    return Pa;
                case ce:
                    return Da
            }
            return t
        });
        var er = s ? Ni : Qo;

        function tr(e) {
            var t = e && e.constructor;
            return e === ("function" == typeof t && t.prototype || f)
        }

        function nr(e) {
            return e == e && !Fi(e)
        }

        function rr(t, n) {
            return function(e) {
                return null != e && (e[t] === n && (n !== oa || t in _(e)))
            }
        }

        function ir(o, a, u) {
            return a = U(a === oa ? o.length - 1 : a, 0),
                function() {
                    for (var e = arguments, t = -1, n = U(e.length - a, 0), r = C(n); ++t < n;) r[t] = e[a + t];
                    t = -1;
                    for (var i = C(a + 1); ++t < a;) i[t] = e[t];
                    return i[a] = u(r), $u(o, this, i)
                }
        }

        function or(e, t) {
            return t.length < 2 ? e : Je(e, Lt(t, 0, -1))
        }

        function ar(e, t) {
            if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t]
        }
        var ur = fr(jt),
            sr = I || function(e, t) {
                return Ou.setTimeout(e, t)
            },
            lr = fr(Nt);

        function cr(e, t, n) {
            var r, i, o, a = t + "";
            return lr(e, function(e, t) {
                var n = t.length;
                if (!n) return e;
                var r = n - 1;
                return t[r] = (1 < n ? "& " : "") + t[r], t = t.join(2 < n ? ", " : " "), e.replace(cu, "{\n/* [wrapped with " + t + "] */\n")
            }(a, (o = a.match(fu), r = o ? o[1].split(pu) : [], i = n, Bu(ma, function(e) {
                var t = "_." + e[0];
                i & e[1] && !Yu(r, t) && r.push(t)
            }), r.sort())))
        }

        function fr(n) {
            var r = 0,
                i = 0;
            return function() {
                var e = G(),
                    t = 16 - (e - i);
                if (i = e, 0 < t) {
                    if (800 <= ++r) return arguments[0]
                } else r = 0;
                return n.apply(oa, arguments)
            }
        }

        function pr(e, t) {
            var n = -1,
                r = e.length,
                i = r - 1;
            for (t = t === oa ? r : t; ++n < t;) {
                var o = St(n, i),
                    a = e[o];
                e[o] = e[n], e[n] = a
            }
            return e.length = t, e
        }
        var hr, dr, gr = (dr = (hr = hi(function(e) {
            var i = [];
            return 46 === e.charCodeAt(0) && i.push(""), e.replace(iu, function(e, t, n, r) {
                i.push(n ? r.replace(du, "$1") : t || e)
            }), i
        }, function(e) {
            return 500 === dr.size && dr.clear(), e
        })).cache, hr);

        function vr(e) {
            if ("string" == typeof e || Mi(e)) return e;
            var t = e + "";
            return "0" == t && 1 / e == -da ? "-0" : t
        }

        function yr(e) {
            if (null != e) {
                try {
                    return l.call(e)
                } catch (e) {}
                try {
                    return e + ""
                } catch (e) {}
            }
            return ""
        }

        function mr(e) {
            if (e instanceof be) return e.clone();
            var t = new me(e.__wrapped__, e.__chain__);
            return t.__actions__ = on(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
        }
        var br = Ct(function(e, t) {
                return ki(e) ? ze(e, Ue(t, 1, ki, !0)) : []
            }),
            xr = Ct(function(e, t) {
                var n = jr(t);
                return ki(n) && (n = oa), ki(e) ? ze(e, Ue(t, 1, ki, !0), zn(n, 2)) : []
            }),
            _r = Ct(function(e, t) {
                var n = jr(t);
                return ki(n) && (n = oa), ki(e) ? ze(e, Ue(t, 1, ki, !0), oa, n) : []
            });

        function wr(e, t, n) {
            var r = null == e ? 0 : e.length;
            if (!r) return -1;
            var i = null == n ? 0 : Xi(n);
            return i < 0 && (i = U(r + i, 0)), rs(e, zn(t, 3), i)
        }

        function Sr(e, t, n) {
            var r = null == e ? 0 : e.length;
            if (!r) return -1;
            var i = r - 1;
            return n !== oa && (i = Xi(n), i = n < 0 ? U(r + i, 0) : X(i, r - 1)), rs(e, zn(t, 3), i, !0)
        }

        function Tr(e) {
            return (null == e ? 0 : e.length) ? Ue(e, 1) : []
        }

        function Cr(e) {
            return e && e.length ? e[0] : oa
        }
        var kr = Ct(function(e) {
                var t = Zu(e, Ut);
                return t.length && t[0] === e[0] ? it(t) : []
            }),
            Er = Ct(function(e) {
                var t = jr(e),
                    n = Zu(e, Ut);
                return t === jr(n) ? t = oa : n.pop(), n.length && n[0] === e[0] ? it(n, zn(t, 2)) : []
            }),
            Ar = Ct(function(e) {
                var t = jr(e),
                    n = Zu(e, Ut);
                return (t = "function" == typeof t ? t : oa) && n.pop(), n.length && n[0] === e[0] ? it(n, oa, t) : []
            });

        function jr(e) {
            var t = null == e ? 0 : e.length;
            return t ? e[t - 1] : oa
        }
        var Nr = Ct(Pr);

        function Pr(e, t) {
            return e && e.length && t && t.length ? _t(e, t) : e
        }
        var Lr = Dn(function(e, t) {
            var n = null == e ? 0 : e.length,
                r = Oe(e, t);
            return wt(e, Zu(t, function(e) {
                return Qn(e, n) ? +e : e
            }).sort(tn)), r
        });

        function Fr(e) {
            return null == e ? e : Z.call(e)
        }
        var Dr = Ct(function(e) {
                return Ht(Ue(e, 1, ki, !0))
            }),
            Or = Ct(function(e) {
                var t = jr(e);
                return ki(t) && (t = oa), Ht(Ue(e, 1, ki, !0), zn(t, 2))
            }),
            Rr = Ct(function(e) {
                var t = jr(e);
                return t = "function" == typeof t ? t : oa, Ht(Ue(e, 1, ki, !0), oa, t)
            });

        function qr(t) {
            if (!t || !t.length) return [];
            var n = 0;
            return t = Gu(t, function(e) {
                return ki(e) && (n = U(e.length, n), 1)
            }), fs(n, function(e) {
                return Zu(t, ss(e))
            })
        }

        function Ir(e, t) {
            if (!e || !e.length) return [];
            var n = qr(e);
            return null == t ? n : Zu(n, function(e) {
                return $u(t, oa, e)
            })
        }
        var Hr = Ct(function(e, t) {
                return ki(e) ? ze(e, t) : []
            }),
            zr = Ct(function(e) {
                return Wt(Gu(e, ki))
            }),
            Mr = Ct(function(e) {
                var t = jr(e);
                return ki(t) && (t = oa), Wt(Gu(e, ki), zn(t, 2))
            }),
            Vr = Ct(function(e) {
                var t = jr(e);
                return t = "function" == typeof t ? t : oa, Wt(Gu(e, ki), oa, t)
            }),
            $r = Ct(qr);
        var Wr = Ct(function(e) {
            var t = e.length,
                n = 1 < t ? e[t - 1] : oa;
            return n = "function" == typeof n ? (e.pop(), n) : oa, Ir(e, n)
        });

        function Br(e) {
            var t = de(e);
            return t.__chain__ = !0, t
        }

        function Ur(e, t) {
            return t(e)
        }
        var Xr = Dn(function(t) {
            function e(e) {
                return Oe(e, t)
            }
            var n = t.length,
                r = n ? t[0] : 0,
                i = this.__wrapped__;
            return !(1 < n || this.__actions__.length) && i instanceof be && Qn(r) ? ((i = i.slice(r, +r + (n ? 1 : 0))).__actions__.push({
                func: Ur,
                args: [e],
                thisArg: oa
            }), new me(i, this.__chain__).thru(function(e) {
                return n && !e.length && e.push(oa), e
            })) : this.thru(e)
        });
        var Gr = un(function(e, t, n) {
            w.call(e, n) ? ++e[n] : De(e, n, 1)
        });
        var Yr = gn(wr),
            Qr = gn(Sr);

        function Zr(e, t) {
            return (Si(e) ? Bu : Me)(e, zn(t, 3))
        }

        function Jr(e, t) {
            return (Si(e) ? Uu : Ve)(e, zn(t, 3))
        }
        var Kr = un(function(e, t, n) {
            w.call(e, n) ? e[n].push(t) : De(e, n, [t])
        });
        var ei = Ct(function(e, t, n) {
                var r = -1,
                    i = "function" == typeof t,
                    o = Ci(e) ? C(e.length) : [];
                return Me(e, function(e) {
                    o[++r] = i ? $u(t, e, n) : ot(e, t, n)
                }), o
            }),
            ti = un(function(e, t, n) {
                De(e, n, t)
            });

        function ni(e, t) {
            return (Si(e) ? Zu : dt)(e, zn(t, 3))
        }
        var ri = un(function(e, t, n) {
            e[n ? 0 : 1].push(t)
        }, function() {
            return [
                [],
                []
            ]
        });
        var ii = Ct(function(e, t) {
                if (null == e) return [];
                var n = t.length;
                return 1 < n && Zn(e, t[0], t[1]) ? t = [] : 2 < n && Zn(t[0], t[1], t[2]) && (t = [t[0]]), bt(e, Ue(t, 1), [])
            }),
            oi = q || function() {
                return Ou.Date.now()
            };

        function ai(e, t, n) {
            return t = n ? oa : t, t = e && null == t ? e.length : t, jn(e, pa, oa, oa, oa, oa, t)
        }

        function ui(e, t) {
            var n;
            if ("function" != typeof t) throw new b(aa);
            return e = Xi(e),
                function() {
                    return 0 < --e && (n = t.apply(this, arguments)), e <= 1 && (t = oa), n
                }
        }
        var si = Ct(function(e, t, n) {
                var r = 1;
                if (n.length) {
                    var i = Ss(n, Hn(si));
                    r |= ca
                }
                return jn(e, r, t, n, i)
            }),
            li = Ct(function(e, t, n) {
                var r = 3;
                if (n.length) {
                    var i = Ss(n, Hn(li));
                    r |= ca
                }
                return jn(t, r, e, n, i)
            });

        function ci(r, i, e) {
            var o, a, u, s, l, c, f = 0,
                p = !1,
                h = !1,
                t = !0;
            if ("function" != typeof r) throw new b(aa);

            function d(e) {
                var t = o,
                    n = a;
                return o = a = oa, f = e, s = r.apply(n, t)
            }

            function g(e) {
                var t = e - c;
                return c === oa || i <= t || t < 0 || h && u <= e - f
            }

            function v() {
                var e, t, n = oi();
                if (g(n)) return y(n);
                l = sr(v, (t = i - ((e = n) - c), h ? X(t, u - (e - f)) : t))
            }

            function y(e) {
                return l = oa, t && o ? d(e) : (o = a = oa, s)
            }

            function n() {
                var e, t = oi(),
                    n = g(t);
                if (o = arguments, a = this, c = t, n) {
                    if (l === oa) return f = e = c, l = sr(v, i), p ? d(e) : s;
                    if (h) return Zt(l), l = sr(v, i), d(c)
                }
                return l === oa && (l = sr(v, i)), s
            }
            return i = Yi(i) || 0, Fi(e) && (p = !!e.leading, u = (h = "maxWait" in e) ? U(Yi(e.maxWait) || 0, i) : u, t = "trailing" in e ? !!e.trailing : t), n.cancel = function() {
                l !== oa && Zt(l), f = 0, o = c = a = l = oa
            }, n.flush = function() {
                return l === oa ? s : y(oi())
            }, n
        }
        var fi = Ct(function(e, t) {
                return He(e, 1, t)
            }),
            pi = Ct(function(e, t, n) {
                return He(e, Yi(t) || 0, n)
            });

        function hi(i, o) {
            if ("function" != typeof i || null != o && "function" != typeof o) throw new b(aa);
            var a = function() {
                var e = arguments,
                    t = o ? o.apply(this, e) : e[0],
                    n = a.cache;
                if (n.has(t)) return n.get(t);
                var r = i.apply(this, e);
                return a.cache = n.set(t, r) || n, r
            };
            return a.cache = new(hi.Cache || we), a
        }

        function di(t) {
            if ("function" != typeof t) throw new b(aa);
            return function() {
                var e = arguments;
                switch (e.length) {
                    case 0:
                        return !t.call(this);
                    case 1:
                        return !t.call(this, e[0]);
                    case 2:
                        return !t.call(this, e[0], e[1]);
                    case 3:
                        return !t.call(this, e[0], e[1], e[2])
                }
                return !t.apply(this, e)
            }
        }
        hi.Cache = we;
        var gi = Yt(function(r, i) {
                var o = (i = 1 == i.length && Si(i[0]) ? Zu(i[0], ps(zn())) : Zu(Ue(i, 1), ps(zn()))).length;
                return Ct(function(e) {
                    for (var t = -1, n = X(e.length, o); ++t < n;) e[t] = i[t].call(this, e[t]);
                    return $u(r, this, e)
                })
            }),
            vi = Ct(function(e, t) {
                var n = Ss(t, Hn(vi));
                return jn(e, ca, oa, t, n)
            }),
            yi = Ct(function(e, t) {
                var n = Ss(t, Hn(yi));
                return jn(e, fa, oa, t, n)
            }),
            mi = Dn(function(e, t) {
                return jn(e, ha, oa, oa, oa, t)
            });

        function bi(e, t) {
            return e === t || e != e && t != t
        }
        var xi = Tn(tt),
            _i = Tn(function(e, t) {
                return t <= e
            }),
            wi = at(function() {
                return arguments
            }()) ? at : function(e) {
                return Di(e) && w.call(e, "callee") && !N.call(e, "callee")
            },
            Si = C.isArray,
            Ti = qu ? ps(qu) : function(e) {
                return Di(e) && et(e) == Oa
            };

        function Ci(e) {
            return null != e && Li(e.length) && !Ni(e)
        }

        function ki(e) {
            return Di(e) && Ci(e)
        }
        var Ei = V || Qo,
            Ai = Iu ? ps(Iu) : function(e) {
                return Di(e) && et(e) == wa
            };

        function ji(e) {
            if (!Di(e)) return !1;
            var t = et(e);
            return t == Sa || "[object DOMException]" == t || "string" == typeof e.message && "string" == typeof e.name && !qi(e)
        }

        function Ni(e) {
            if (!Fi(e)) return !1;
            var t = et(e);
            return t == Ta || t == Ca || "[object AsyncFunction]" == t || "[object Proxy]" == t
        }

        function Pi(e) {
            return "number" == typeof e && e == Xi(e)
        }

        function Li(e) {
            return "number" == typeof e && -1 < e && e % 1 == 0 && e <= ga
        }

        function Fi(e) {
            var t = typeof e;
            return null != e && ("object" == t || "function" == t)
        }

        function Di(e) {
            return null != e && "object" == typeof e
        }
        var Oi = Hu ? ps(Hu) : function(e) {
            return Di(e) && Un(e) == ka
        };

        function Ri(e) {
            return "number" == typeof e || Di(e) && et(e) == Ea
        }

        function qi(e) {
            if (!Di(e) || et(e) != Aa) return !1;
            var t = A(e);
            if (null === t) return !0;
            var n = w.call(t, "constructor") && t.constructor;
            return "function" == typeof n && n instanceof n && l.call(n) == g
        }
        var Ii = zu ? ps(zu) : function(e) {
            return Di(e) && et(e) == Na
        };
        var Hi = Mu ? ps(Mu) : function(e) {
            return Di(e) && Un(e) == Pa
        };

        function zi(e) {
            return "string" == typeof e || !Si(e) && Di(e) && et(e) == La
        }

        function Mi(e) {
            return "symbol" == typeof e || Di(e) && et(e) == Fa
        }
        var Vi = Vu ? ps(Vu) : function(e) {
            return Di(e) && Li(e.length) && !!Pu[et(e)]
        };
        var $i = Tn(ht),
            Wi = Tn(function(e, t) {
                return e <= t
            });

        function Bi(e) {
            if (!e) return [];
            if (Ci(e)) return (zi(e) ? ks : on)(e);
            if (F && e[F]) return function(e) {
                for (var t, n = []; !(t = e.next()).done;) n.push(t.value);
                return n
            }(e[F]());
            var t = Un(e);
            return (t == ka ? _s : t == Pa ? Ts : xo)(e)
        }

        function Ui(e) {
            return e ? (e = Yi(e)) !== da && e !== -da ? e == e ? e : 0 : 17976931348623157e292 * (e < 0 ? -1 : 1) : 0 === e ? e : 0
        }

        function Xi(e) {
            var t = Ui(e),
                n = t % 1;
            return t == t ? n ? t - n : t : 0
        }

        function Gi(e) {
            return e ? Re(Xi(e), 0, ya) : 0
        }

        function Yi(e) {
            if ("number" == typeof e) return e;
            if (Mi(e)) return va;
            if (Fi(e)) {
                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = Fi(t) ? t + "" : t
            }
            if ("string" != typeof e) return 0 === e ? e : +e;
            e = e.replace(uu, "");
            var n = mu.test(e);
            return n || xu.test(e) ? Du(e.slice(2), n ? 2 : 8) : yu.test(e) ? va : +e
        }

        function Qi(e) {
            return an(e, fo(e))
        }

        function Zi(e) {
            return null == e ? "" : It(e)
        }
        var Ji = sn(function(e, t) {
                if (tr(t) || Ci(t)) an(t, co(t), e);
                else
                    for (var n in t) w.call(t, n) && Ne(e, n, t[n])
            }),
            Ki = sn(function(e, t) {
                an(t, fo(t), e)
            }),
            eo = sn(function(e, t, n, r) {
                an(t, fo(t), e, r)
            }),
            to = sn(function(e, t, n, r) {
                an(t, co(t), e, r)
            }),
            no = Dn(Oe);
        var ro = Ct(function(e, t) {
                e = _(e);
                var n = -1,
                    r = t.length,
                    i = 2 < r ? t[2] : oa;
                for (i && Zn(t[0], t[1], i) && (r = 1); ++n < r;)
                    for (var o = t[n], a = fo(o), u = -1, s = a.length; ++u < s;) {
                        var l = a[u],
                            c = e[l];
                        (c === oa || bi(c, f[l]) && !w.call(e, l)) && (e[l] = o[l])
                    }
                return e
            }),
            io = Ct(function(e) {
                return e.push(oa, Pn), $u(ho, oa, e)
            });

        function oo(e, t, n) {
            var r = null == e ? oa : Je(e, t);
            return r === oa ? n : r
        }

        function ao(e, t) {
            return null != e && Xn(e, t, rt)
        }
        var uo = mn(function(e, t, n) {
                null != t && "function" != typeof t.toString && (t = d.call(t)), e[t] = n
            }, Do(qo)),
            so = mn(function(e, t, n) {
                null != t && "function" != typeof t.toString && (t = d.call(t)), w.call(e, t) ? e[t].push(n) : e[t] = [n]
            }, zn),
            lo = Ct(ot);

        function co(e) {
            return (Ci(e) ? Ce : ft)(e)
        }

        function fo(e) {
            return Ci(e) ? Ce(e, !0) : pt(e)
        }
        var po = sn(function(e, t, n) {
                yt(e, t, n)
            }),
            ho = sn(function(e, t, n, r) {
                yt(e, t, n, r)
            }),
            go = Dn(function(t, e) {
                var n = {};
                if (null == t) return n;
                var r = !1;
                e = Zu(e, function(e) {
                    return e = Gt(e, t), r = r || 1 < e.length, e
                }), an(t, Rn(t), n), r && (n = qe(n, 7, Ln));
                for (var i = e.length; i--;) zt(n, e[i]);
                return n
            });
        var vo = Dn(function(e, t) {
            return null == e ? {} : xt(n = e, t, function(e, t) {
                return ao(n, t)
            });
            var n
        });

        function yo(e, n) {
            if (null == e) return {};
            var t = Zu(Rn(e), function(e) {
                return [e]
            });
            return n = zn(n), xt(e, t, function(e, t) {
                return n(e, t[0])
            })
        }
        var mo = An(co),
            bo = An(fo);

        function xo(e) {
            return null == e ? [] : hs(e, co(e))
        }
        var _o = pn(function(e, t, n) {
            return t = t.toLowerCase(), e + (n ? wo(t) : t)
        });

        function wo(e) {
            return No(Zi(e).toLowerCase())
        }

        function So(e) {
            return (e = Zi(e)) && e.replace(wu, ys).replace(ku, "")
        }
        var To = pn(function(e, t, n) {
                return e + (n ? "-" : "") + t.toLowerCase()
            }),
            Co = pn(function(e, t, n) {
                return e + (n ? " " : "") + t.toLowerCase()
            }),
            ko = fn("toLowerCase");
        var Eo = pn(function(e, t, n) {
            return e + (n ? "_" : "") + t.toLowerCase()
        });
        var Ao = pn(function(e, t, n) {
            return e + (n ? " " : "") + No(t)
        });
        var jo = pn(function(e, t, n) {
                return e + (n ? " " : "") + t.toUpperCase()
            }),
            No = fn("toUpperCase");

        function Po(e, t, n) {
            return e = Zi(e), (t = n ? oa : t) === oa ? (r = e, Au.test(r) ? e.match(Eu) || [] : e.match(hu) || []) : e.match(t) || [];
            var r
        }
        var Lo = Ct(function(e, t) {
                try {
                    return $u(e, oa, t)
                } catch (e) {
                    return ji(e) ? e : new i(e)
                }
            }),
            Fo = Dn(function(t, e) {
                return Bu(e, function(e) {
                    e = vr(e), De(t, e, si(t[e], t))
                }), t
            });

        function Do(e) {
            return function() {
                return e
            }
        }
        var Oo = vn(),
            Ro = vn(!0);

        function qo(e) {
            return e
        }

        function Io(e) {
            return ct("function" == typeof e ? e : qe(e, 1))
        }
        var Ho = Ct(function(t, n) {
                return function(e) {
                    return ot(e, t, n)
                }
            }),
            zo = Ct(function(t, n) {
                return function(e) {
                    return ot(t, e, n)
                }
            });

        function Mo(r, t, e) {
            var n = co(t),
                i = Ze(t, n);
            null != e || Fi(t) && (i.length || !n.length) || (e = t, t = r, r = this, i = Ze(t, co(t)));
            var o = !(Fi(e) && "chain" in e && !e.chain),
                a = Ni(r);
            return Bu(i, function(e) {
                var n = t[e];
                r[e] = n, a && (r.prototype[e] = function() {
                    var e = this.__chain__;
                    if (o || e) {
                        var t = r(this.__wrapped__);
                        return (t.__actions__ = on(this.__actions__)).push({
                            func: n,
                            args: arguments,
                            thisArg: r
                        }), t.__chain__ = e, t
                    }
                    return n.apply(r, Ju([this.value()], arguments))
                })
            }), r
        }

        function Vo() {}
        var $o = xn(Zu),
            Wo = xn(Xu),
            Bo = xn(ts);

        function Uo(e) {
            return Jn(e) ? ss(vr(e)) : (t = e, function(e) {
                return Je(e, t)
            });
            var t
        }
        var Xo = Sn(),
            Go = Sn(!0);

        function Yo() {
            return []
        }

        function Qo() {
            return !1
        }
        var Zo = bn(function(e, t) {
                return e + t
            }, 0),
            Jo = kn("ceil"),
            Ko = bn(function(e, t) {
                return e / t
            }, 1),
            ea = kn("floor");
        var ta, na = bn(function(e, t) {
                return e * t
            }, 1),
            ra = kn("round"),
            ia = bn(function(e, t) {
                return e - t
            }, 0);
        return de.after = function(e, t) {
            if ("function" != typeof t) throw new b(aa);
            return e = Xi(e),
                function() {
                    if (--e < 1) return t.apply(this, arguments)
                }
        }, de.ary = ai, de.assign = Ji, de.assignIn = Ki, de.assignInWith = eo, de.assignWith = to, de.at = no, de.before = ui, de.bind = si, de.bindAll = Fo, de.bindKey = li, de.castArray = function() {
            if (!arguments.length) return [];
            var e = arguments[0];
            return Si(e) ? e : [e]
        }, de.chain = Br, de.chunk = function(e, t, n) {
            t = (n ? Zn(e, t, n) : t === oa) ? 1 : U(Xi(t), 0);
            var r = null == e ? 0 : e.length;
            if (!r || t < 1) return [];
            for (var i = 0, o = 0, a = C(H(r / t)); i < r;) a[o++] = Lt(e, i, i += t);
            return a
        }, de.compact = function(e) {
            for (var t = -1, n = null == e ? 0 : e.length, r = 0, i = []; ++t < n;) {
                var o = e[t];
                o && (i[r++] = o)
            }
            return i
        }, de.concat = function() {
            var e = arguments.length;
            if (!e) return [];
            for (var t = C(e - 1), n = arguments[0], r = e; r--;) t[r - 1] = arguments[r];
            return Ju(Si(n) ? on(n) : [n], Ue(t, 1))
        }, de.cond = function(r) {
            var i = null == r ? 0 : r.length,
                t = zn();
            return r = i ? Zu(r, function(e) {
                if ("function" != typeof e[1]) throw new b(aa);
                return [t(e[0]), e[1]]
            }) : [], Ct(function(e) {
                for (var t = -1; ++t < i;) {
                    var n = r[t];
                    if ($u(n[0], this, e)) return $u(n[1], this, e)
                }
            })
        }, de.conforms = function(e) {
            return t = qe(e, 1), n = co(t),
                function(e) {
                    return Ie(e, t, n)
                };
            var t, n
        }, de.constant = Do, de.countBy = Gr, de.create = function(e, t) {
            var n = ge(e);
            return null == t ? n : Fe(n, t)
        }, de.curry = function e(t, n, r) {
            var i = jn(t, 8, oa, oa, oa, oa, oa, n = r ? oa : n);
            return i.placeholder = e.placeholder, i
        }, de.curryRight = function e(t, n, r) {
            var i = jn(t, la, oa, oa, oa, oa, oa, n = r ? oa : n);
            return i.placeholder = e.placeholder, i
        }, de.debounce = ci, de.defaults = ro, de.defaultsDeep = io, de.defer = fi, de.delay = pi, de.difference = br, de.differenceBy = xr, de.differenceWith = _r, de.drop = function(e, t, n) {
            var r = null == e ? 0 : e.length;
            return r ? Lt(e, (t = n || t === oa ? 1 : Xi(t)) < 0 ? 0 : t, r) : []
        }, de.dropRight = function(e, t, n) {
            var r = null == e ? 0 : e.length;
            return r ? Lt(e, 0, (t = r - (t = n || t === oa ? 1 : Xi(t))) < 0 ? 0 : t) : []
        }, de.dropRightWhile = function(e, t) {
            return e && e.length ? Vt(e, zn(t, 3), !0, !0) : []
        }, de.dropWhile = function(e, t) {
            return e && e.length ? Vt(e, zn(t, 3), !0) : []
        }, de.fill = function(e, t, n, r) {
            var i = null == e ? 0 : e.length;
            return i ? (n && "number" != typeof n && Zn(e, t, n) && (n = 0, r = i), function(e, t, n, r) {
                var i = e.length;
                for ((n = Xi(n)) < 0 && (n = i < -n ? 0 : i + n), (r = r === oa || i < r ? i : Xi(r)) < 0 && (r += i), r = r < n ? 0 : Gi(r); n < r;) e[n++] = t;
                return e
            }(e, t, n, r)) : []
        }, de.filter = function(e, t) {
            return (Si(e) ? Gu : Be)(e, zn(t, 3))
        }, de.flatMap = function(e, t) {
            return Ue(ni(e, t), 1)
        }, de.flatMapDeep = function(e, t) {
            return Ue(ni(e, t), da)
        }, de.flatMapDepth = function(e, t, n) {
            return n = n === oa ? 1 : Xi(n), Ue(ni(e, t), n)
        }, de.flatten = Tr, de.flattenDeep = function(e) {
            return (null == e ? 0 : e.length) ? Ue(e, da) : []
        }, de.flattenDepth = function(e, t) {
            return (null == e ? 0 : e.length) ? Ue(e, t = t === oa ? 1 : Xi(t)) : []
        }, de.flip = function(e) {
            return jn(e, 512)
        }, de.flow = Oo, de.flowRight = Ro, de.fromPairs = function(e) {
            for (var t = -1, n = null == e ? 0 : e.length, r = {}; ++t < n;) {
                var i = e[t];
                r[i[0]] = i[1]
            }
            return r
        }, de.functions = function(e) {
            return null == e ? [] : Ze(e, co(e))
        }, de.functionsIn = function(e) {
            return null == e ? [] : Ze(e, fo(e))
        }, de.groupBy = Kr, de.initial = function(e) {
            return (null == e ? 0 : e.length) ? Lt(e, 0, -1) : []
        }, de.intersection = kr, de.intersectionBy = Er, de.intersectionWith = Ar, de.invert = uo, de.invertBy = so, de.invokeMap = ei, de.iteratee = Io, de.keyBy = ti, de.keys = co, de.keysIn = fo, de.map = ni, de.mapKeys = function(e, r) {
            var i = {};
            return r = zn(r, 3), Ye(e, function(e, t, n) {
                De(i, r(e, t, n), e)
            }), i
        }, de.mapValues = function(e, r) {
            var i = {};
            return r = zn(r, 3), Ye(e, function(e, t, n) {
                De(i, t, r(e, t, n))
            }), i
        }, de.matches = function(e) {
            return gt(qe(e, 1))
        }, de.matchesProperty = function(e, t) {
            return vt(e, qe(t, 1))
        }, de.memoize = hi, de.merge = po, de.mergeWith = ho, de.method = Ho, de.methodOf = zo, de.mixin = Mo, de.negate = di, de.nthArg = function(t) {
            return t = Xi(t), Ct(function(e) {
                return mt(e, t)
            })
        }, de.omit = go, de.omitBy = function(e, t) {
            return yo(e, di(zn(t)))
        }, de.once = function(e) {
            return ui(2, e)
        }, de.orderBy = function(e, t, n, r) {
            return null == e ? [] : (Si(t) || (t = null == t ? [] : [t]), Si(n = r ? oa : n) || (n = null == n ? [] : [n]), bt(e, t, n))
        }, de.over = $o, de.overArgs = gi, de.overEvery = Wo, de.overSome = Bo, de.partial = vi, de.partialRight = yi, de.partition = ri, de.pick = vo, de.pickBy = yo, de.property = Uo, de.propertyOf = function(t) {
            return function(e) {
                return null == t ? oa : Je(t, e)
            }
        }, de.pull = Nr, de.pullAll = Pr, de.pullAllBy = function(e, t, n) {
            return e && e.length && t && t.length ? _t(e, t, zn(n, 2)) : e
        }, de.pullAllWith = function(e, t, n) {
            return e && e.length && t && t.length ? _t(e, t, oa, n) : e
        }, de.pullAt = Lr, de.range = Xo, de.rangeRight = Go, de.rearg = mi, de.reject = function(e, t) {
            return (Si(e) ? Gu : Be)(e, di(zn(t, 3)))
        }, de.remove = function(e, t) {
            var n = [];
            if (!e || !e.length) return n;
            var r = -1,
                i = [],
                o = e.length;
            for (t = zn(t, 3); ++r < o;) {
                var a = e[r];
                t(a, r, e) && (n.push(a), i.push(r))
            }
            return wt(e, i), n
        }, de.rest = function(e, t) {
            if ("function" != typeof e) throw new b(aa);
            return Ct(e, t = t === oa ? t : Xi(t))
        }, de.reverse = Fr, de.sampleSize = function(e, t, n) {
            return t = (n ? Zn(e, t, n) : t === oa) ? 1 : Xi(t), (Si(e) ? Ee : Et)(e, t)
        }, de.set = function(e, t, n) {
            return null == e ? e : At(e, t, n)
        }, de.setWith = function(e, t, n, r) {
            return r = "function" == typeof r ? r : oa, null == e ? e : At(e, t, n, r)
        }, de.shuffle = function(e) {
            return (Si(e) ? Ae : Pt)(e)
        }, de.slice = function(e, t, n) {
            var r = null == e ? 0 : e.length;
            return r ? (n = n && "number" != typeof n && Zn(e, t, n) ? (t = 0, r) : (t = null == t ? 0 : Xi(t), n === oa ? r : Xi(n)), Lt(e, t, n)) : []
        }, de.sortBy = ii, de.sortedUniq = function(e) {
            return e && e.length ? Rt(e) : []
        }, de.sortedUniqBy = function(e, t) {
            return e && e.length ? Rt(e, zn(t, 2)) : []
        }, de.split = function(e, t, n) {
            return n && "number" != typeof n && Zn(e, t, n) && (t = n = oa), (n = n === oa ? ya : n >>> 0) ? (e = Zi(e)) && ("string" == typeof t || null != t && !Ii(t)) && !(t = It(t)) && xs(e) ? Qt(ks(e), 0, n) : e.split(t, n) : []
        }, de.spread = function(r, i) {
            if ("function" != typeof r) throw new b(aa);
            return i = null == i ? 0 : U(Xi(i), 0), Ct(function(e) {
                var t = e[i],
                    n = Qt(e, 0, i);
                return t && Ju(n, t), $u(r, this, n)
            })
        }, de.tail = function(e) {
            var t = null == e ? 0 : e.length;
            return t ? Lt(e, 1, t) : []
        }, de.take = function(e, t, n) {
            return e && e.length ? Lt(e, 0, (t = n || t === oa ? 1 : Xi(t)) < 0 ? 0 : t) : []
        }, de.takeRight = function(e, t, n) {
            var r = null == e ? 0 : e.length;
            return r ? Lt(e, (t = r - (t = n || t === oa ? 1 : Xi(t))) < 0 ? 0 : t, r) : []
        }, de.takeRightWhile = function(e, t) {
            return e && e.length ? Vt(e, zn(t, 3), !1, !0) : []
        }, de.takeWhile = function(e, t) {
            return e && e.length ? Vt(e, zn(t, 3)) : []
        }, de.tap = function(e, t) {
            return t(e), e
        }, de.throttle = function(e, t, n) {
            var r = !0,
                i = !0;
            if ("function" != typeof e) throw new b(aa);
            return Fi(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), ci(e, t, {
                leading: r,
                maxWait: t,
                trailing: i
            })
        }, de.thru = Ur, de.toArray = Bi, de.toPairs = mo, de.toPairsIn = bo, de.toPath = function(e) {
            return Si(e) ? Zu(e, vr) : Mi(e) ? [e] : on(gr(Zi(e)))
        }, de.toPlainObject = Qi, de.transform = function(e, r, i) {
            var t = Si(e),
                n = t || Ei(e) || Vi(e);
            if (r = zn(r, 4), null == i) {
                var o = e && e.constructor;
                i = n ? t ? new o : [] : Fi(e) && Ni(o) ? ge(A(e)) : {}
            }
            return (n ? Bu : Ye)(e, function(e, t, n) {
                return r(i, e, t, n)
            }), i
        }, de.unary = function(e) {
            return ai(e, 1)
        }, de.union = Dr, de.unionBy = Or, de.unionWith = Rr, de.uniq = function(e) {
            return e && e.length ? Ht(e) : []
        }, de.uniqBy = function(e, t) {
            return e && e.length ? Ht(e, zn(t, 2)) : []
        }, de.uniqWith = function(e, t) {
            return t = "function" == typeof t ? t : oa, e && e.length ? Ht(e, oa, t) : []
        }, de.unset = function(e, t) {
            return null == e || zt(e, t)
        }, de.unzip = qr, de.unzipWith = Ir, de.update = function(e, t, n) {
            return null == e ? e : Mt(e, t, Xt(n))
        }, de.updateWith = function(e, t, n, r) {
            return r = "function" == typeof r ? r : oa, null == e ? e : Mt(e, t, Xt(n), r)
        }, de.values = xo, de.valuesIn = function(e) {
            return null == e ? [] : hs(e, fo(e))
        }, de.without = Hr, de.words = Po, de.wrap = function(e, t) {
            return vi(Xt(t), e)
        }, de.xor = zr, de.xorBy = Mr, de.xorWith = Vr, de.zip = $r, de.zipObject = function(e, t) {
            return Bt(e || [], t || [], Ne)
        }, de.zipObjectDeep = function(e, t) {
            return Bt(e || [], t || [], At)
        }, de.zipWith = Wr, de.entries = mo, de.entriesIn = bo, de.extend = Ki, de.extendWith = eo, Mo(de, de), de.add = Zo, de.attempt = Lo, de.camelCase = _o, de.capitalize = wo, de.ceil = Jo, de.clamp = function(e, t, n) {
            return n === oa && (n = t, t = oa), n !== oa && (n = (n = Yi(n)) == n ? n : 0), t !== oa && (t = (t = Yi(t)) == t ? t : 0), Re(Yi(e), t, n)
        }, de.clone = function(e) {
            return qe(e, 4)
        }, de.cloneDeep = function(e) {
            return qe(e, 5)
        }, de.cloneDeepWith = function(e, t) {
            return qe(e, 5, t = "function" == typeof t ? t : oa)
        }, de.cloneWith = function(e, t) {
            return qe(e, 4, t = "function" == typeof t ? t : oa)
        }, de.conformsTo = function(e, t) {
            return null == t || Ie(e, t, co(t))
        }, de.deburr = So, de.defaultTo = function(e, t) {
            return null == e || e != e ? t : e
        }, de.divide = Ko, de.endsWith = function(e, t, n) {
            e = Zi(e), t = It(t);
            var r = e.length,
                i = n = n === oa ? r : Re(Xi(n), 0, r);
            return 0 <= (n -= t.length) && e.slice(n, i) == t
        }, de.eq = bi, de.escape = function(e) {
            return (e = Zi(e)) && Ja.test(e) ? e.replace(Qa, ms) : e
        }, de.escapeRegExp = function(e) {
            return (e = Zi(e)) && au.test(e) ? e.replace(ou, "\\$&") : e
        }, de.every = function(e, t, n) {
            var r = Si(e) ? Xu : $e;
            return n && Zn(e, t, n) && (t = oa), r(e, zn(t, 3))
        }, de.find = Yr, de.findIndex = wr, de.findKey = function(e, t) {
            return ns(e, zn(t, 3), Ye)
        }, de.findLast = Qr, de.findLastIndex = Sr, de.findLastKey = function(e, t) {
            return ns(e, zn(t, 3), Qe)
        }, de.floor = ea, de.forEach = Zr, de.forEachRight = Jr, de.forIn = function(e, t) {
            return null == e ? e : Xe(e, zn(t, 3), fo)
        }, de.forInRight = function(e, t) {
            return null == e ? e : Ge(e, zn(t, 3), fo)
        }, de.forOwn = function(e, t) {
            return e && Ye(e, zn(t, 3))
        }, de.forOwnRight = function(e, t) {
            return e && Qe(e, zn(t, 3))
        }, de.get = oo, de.gt = xi, de.gte = _i, de.has = function(e, t) {
            return null != e && Xn(e, t, nt)
        }, de.hasIn = ao, de.head = Cr, de.identity = qo, de.includes = function(e, t, n, r) {
            e = Ci(e) ? e : xo(e), n = n && !r ? Xi(n) : 0;
            var i = e.length;
            return n < 0 && (n = U(i + n, 0)), zi(e) ? n <= i && -1 < e.indexOf(t, n) : !!i && -1 < is(e, t, n)
        }, de.indexOf = function(e, t, n) {
            var r = null == e ? 0 : e.length;
            if (!r) return -1;
            var i = null == n ? 0 : Xi(n);
            return i < 0 && (i = U(r + i, 0)), is(e, t, i)
        }, de.inRange = function(e, t, n) {
            return t = Ui(t), n === oa ? (n = t, t = 0) : n = Ui(n), e = Yi(e), (r = e) >= X(i = t, o = n) && r < U(i, o);
            var r, i, o
        }, de.invoke = lo, de.isArguments = wi, de.isArray = Si, de.isArrayBuffer = Ti, de.isArrayLike = Ci, de.isArrayLikeObject = ki, de.isBoolean = function(e) {
            return !0 === e || !1 === e || Di(e) && et(e) == _a
        }, de.isBuffer = Ei, de.isDate = Ai, de.isElement = function(e) {
            return Di(e) && 1 === e.nodeType && !qi(e)
        }, de.isEmpty = function(e) {
            if (null == e) return !0;
            if (Ci(e) && (Si(e) || "string" == typeof e || "function" == typeof e.splice || Ei(e) || Vi(e) || wi(e))) return !e.length;
            var t = Un(e);
            if (t == ka || t == Pa) return !e.size;
            if (tr(e)) return !ft(e).length;
            for (var n in e)
                if (w.call(e, n)) return !1;
            return !0
        }, de.isEqual = function(e, t) {
            return ut(e, t)
        }, de.isEqualWith = function(e, t, n) {
            var r = (n = "function" == typeof n ? n : oa) ? n(e, t) : oa;
            return r === oa ? ut(e, t, oa, n) : !!r
        }, de.isError = ji, de.isFinite = function(e) {
            return "number" == typeof e && $(e)
        }, de.isFunction = Ni, de.isInteger = Pi, de.isLength = Li, de.isMap = Oi, de.isMatch = function(e, t) {
            return e === t || st(e, t, Vn(t))
        }, de.isMatchWith = function(e, t, n) {
            return n = "function" == typeof n ? n : oa, st(e, t, Vn(t), n)
        }, de.isNaN = function(e) {
            return Ri(e) && e != +e
        }, de.isNative = function(e) {
            if (er(e)) throw new i("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
            return lt(e)
        }, de.isNil = function(e) {
            return null == e
        }, de.isNull = function(e) {
            return null === e
        }, de.isNumber = Ri, de.isObject = Fi, de.isObjectLike = Di, de.isPlainObject = qi, de.isRegExp = Ii, de.isSafeInteger = function(e) {
            return Pi(e) && -ga <= e && e <= ga
        }, de.isSet = Hi, de.isString = zi, de.isSymbol = Mi, de.isTypedArray = Vi, de.isUndefined = function(e) {
            return e === oa
        }, de.isWeakMap = function(e) {
            return Di(e) && Un(e) == Da
        }, de.isWeakSet = function(e) {
            return Di(e) && "[object WeakSet]" == et(e)
        }, de.join = function(e, t) {
            return null == e ? "" : W.call(e, t)
        }, de.kebabCase = To, de.last = jr, de.lastIndexOf = function(e, t, n) {
            var r = null == e ? 0 : e.length;
            if (!r) return -1;
            var i = r;
            return n !== oa && (i = (i = Xi(n)) < 0 ? U(r + i, 0) : X(i, r - 1)), t == t ? function(e, t, n) {
                for (var r = n + 1; r--;)
                    if (e[r] === t) return r;
                return r
            }(e, t, i) : rs(e, as, i, !0)
        }, de.lowerCase = Co, de.lowerFirst = ko, de.lt = $i, de.lte = Wi, de.max = function(e) {
            return e && e.length ? We(e, qo, tt) : oa
        }, de.maxBy = function(e, t) {
            return e && e.length ? We(e, zn(t, 2), tt) : oa
        }, de.mean = function(e) {
            return us(e, qo)
        }, de.meanBy = function(e, t) {
            return us(e, zn(t, 2))
        }, de.min = function(e) {
            return e && e.length ? We(e, qo, ht) : oa
        }, de.minBy = function(e, t) {
            return e && e.length ? We(e, zn(t, 2), ht) : oa
        }, de.stubArray = Yo, de.stubFalse = Qo, de.stubObject = function() {
            return {}
        }, de.stubString = function() {
            return ""
        }, de.stubTrue = function() {
            return !0
        }, de.multiply = na, de.nth = function(e, t) {
            return e && e.length ? mt(e, Xi(t)) : oa
        }, de.noConflict = function() {
            return Ou._ === this && (Ou._ = m), this
        }, de.noop = Vo, de.now = oi, de.pad = function(e, t, n) {
            e = Zi(e);
            var r = (t = Xi(t)) ? Cs(e) : 0;
            if (!t || t <= r) return e;
            var i = (t - r) / 2;
            return _n(z(i), n) + e + _n(H(i), n)
        }, de.padEnd = function(e, t, n) {
            e = Zi(e);
            var r = (t = Xi(t)) ? Cs(e) : 0;
            return t && r < t ? e + _n(t - r, n) : e
        }, de.padStart = function(e, t, n) {
            e = Zi(e);
            var r = (t = Xi(t)) ? Cs(e) : 0;
            return t && r < t ? _n(t - r, n) + e : e
        }, de.parseInt = function(e, t, n) {
            return t = n || null == t ? 0 : t && +t, Y(Zi(e).replace(su, ""), t || 0)
        }, de.random = function(e, t, n) {
            if (n && "boolean" != typeof n && Zn(e, t, n) && (t = n = oa), n === oa && ("boolean" == typeof t ? (n = t, t = oa) : "boolean" == typeof e && (n = e, e = oa)), e === oa && t === oa ? (e = 0, t = 1) : (e = Ui(e), t === oa ? (t = e, e = 0) : t = Ui(t)), t < e) {
                var r = e;
                e = t, t = r
            }
            if (n || e % 1 || t % 1) {
                var i = Q();
                return X(e + i * (t - e + Fu("1e-" + ((i + "").length - 1))), t)
            }
            return St(e, t)
        }, de.reduce = function(e, t, n) {
            var r = Si(e) ? Ku : ls,
                i = arguments.length < 3;
            return r(e, zn(t, 4), n, i, Me)
        }, de.reduceRight = function(e, t, n) {
            var r = Si(e) ? es : ls,
                i = arguments.length < 3;
            return r(e, zn(t, 4), n, i, Ve)
        }, de.repeat = function(e, t, n) {
            return t = (n ? Zn(e, t, n) : t === oa) ? 1 : Xi(t), Tt(Zi(e), t)
        }, de.replace = function() {
            var e = arguments,
                t = Zi(e[0]);
            return e.length < 3 ? t : t.replace(e[1], e[2])
        }, de.result = function(e, t, n) {
            var r = -1,
                i = (t = Gt(t, e)).length;
            for (i || (i = 1, e = oa); ++r < i;) {
                var o = null == e ? oa : e[vr(t[r])];
                o === oa && (r = i, o = n), e = Ni(o) ? o.call(e) : o
            }
            return e
        }, de.round = ra, de.runInContext = e, de.sample = function(e) {
            return (Si(e) ? ke : kt)(e)
        }, de.size = function(e) {
            if (null == e) return 0;
            if (Ci(e)) return zi(e) ? Cs(e) : e.length;
            var t = Un(e);
            return t == ka || t == Pa ? e.size : ft(e).length
        }, de.snakeCase = Eo, de.some = function(e, t, n) {
            var r = Si(e) ? ts : Ft;
            return n && Zn(e, t, n) && (t = oa), r(e, zn(t, 3))
        }, de.sortedIndex = function(e, t) {
            return Dt(e, t)
        }, de.sortedIndexBy = function(e, t, n) {
            return Ot(e, t, zn(n, 2))
        }, de.sortedIndexOf = function(e, t) {
            var n = null == e ? 0 : e.length;
            if (n) {
                var r = Dt(e, t);
                if (r < n && bi(e[r], t)) return r
            }
            return -1
        }, de.sortedLastIndex = function(e, t) {
            return Dt(e, t, !0)
        }, de.sortedLastIndexBy = function(e, t, n) {
            return Ot(e, t, zn(n, 2), !0)
        }, de.sortedLastIndexOf = function(e, t) {
            if (null == e ? 0 : e.length) {
                var n = Dt(e, t, !0) - 1;
                if (bi(e[n], t)) return n
            }
            return -1
        }, de.startCase = Ao, de.startsWith = function(e, t, n) {
            return e = Zi(e), n = null == n ? 0 : Re(Xi(n), 0, e.length), t = It(t), e.slice(n, n + t.length) == t
        }, de.subtract = ia, de.sum = function(e) {
            return e && e.length ? cs(e, qo) : 0
        }, de.sumBy = function(e, t) {
            return e && e.length ? cs(e, zn(t, 2)) : 0
        }, de.template = function(a, e, t) {
            var n = de.templateSettings;
            t && Zn(a, e, t) && (e = oa), a = Zi(a), e = eo({}, e, n, Nn);
            var u, s, r = eo({}, e.imports, n.imports, Nn),
                i = co(r),
                o = hs(r, i),
                l = 0,
                c = e.interpolate || Su,
                f = "__p += '",
                p = y((e.escape || Su).source + "|" + c.source + "|" + (c === tu ? gu : Su).source + "|" + (e.evaluate || Su).source + "|$", "g"),
                h = "//# sourceURL=" + (w.call(e, "sourceURL") ? (e.sourceURL + "").replace(/[\r\n]/g, " ") : "lodash.templateSources[" + ++Nu + "]") + "\n";
            a.replace(p, function(e, t, n, r, i, o) {
                return n = n || r, f += a.slice(l, o).replace(Tu, bs), t && (u = !0, f += "' +\n__e(" + t + ") +\n'"), i && (s = !0, f += "';\n" + i + ";\n__p += '"), n && (f += "' +\n((__t = (" + n + ")) == null ? '' : __t) +\n'"), l = o + e.length, e
            }), f += "';\n";
            var d = w.call(e, "variable") && e.variable;
            d || (f = "with (obj) {\n" + f + "\n}\n"), f = (s ? f.replace(Ua, "") : f).replace(Xa, "$1").replace(Ga, "$1;"), f = "function(" + (d || "obj") + ") {\n" + (d ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (u ? ", __e = _.escape" : "") + (s ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + f + "return __p\n}";
            var g = Lo(function() {
                return v(i, h + "return " + f).apply(oa, o)
            });
            if (g.source = f, ji(g)) throw g;
            return g
        }, de.times = function(e, t) {
            if ((e = Xi(e)) < 1 || ga < e) return [];
            var n = ya,
                r = X(e, ya);
            t = zn(t), e -= ya;
            for (var i = fs(r, t); ++n < e;) t(n);
            return i
        }, de.toFinite = Ui, de.toInteger = Xi, de.toLength = Gi, de.toLower = function(e) {
            return Zi(e).toLowerCase()
        }, de.toNumber = Yi, de.toSafeInteger = function(e) {
            return e ? Re(Xi(e), -ga, ga) : 0 === e ? e : 0
        }, de.toString = Zi, de.toUpper = function(e) {
            return Zi(e).toUpperCase()
        }, de.trim = function(e, t, n) {
            if ((e = Zi(e)) && (n || t === oa)) return e.replace(uu, "");
            if (!e || !(t = It(t))) return e;
            var r = ks(e),
                i = ks(t);
            return Qt(r, gs(r, i), vs(r, i) + 1).join("")
        }, de.trimEnd = function(e, t, n) {
            if ((e = Zi(e)) && (n || t === oa)) return e.replace(lu, "");
            if (!e || !(t = It(t))) return e;
            var r = ks(e);
            return Qt(r, 0, vs(r, ks(t)) + 1).join("")
        }, de.trimStart = function(e, t, n) {
            if ((e = Zi(e)) && (n || t === oa)) return e.replace(su, "");
            if (!e || !(t = It(t))) return e;
            var r = ks(e);
            return Qt(r, gs(r, ks(t))).join("")
        }, de.truncate = function(e, t) {
            var n = 30,
                r = "...";
            if (Fi(t)) {
                var i = "separator" in t ? t.separator : i;
                n = "length" in t ? Xi(t.length) : n, r = "omission" in t ? It(t.omission) : r
            }
            var o = (e = Zi(e)).length;
            if (xs(e)) {
                var a = ks(e);
                o = a.length
            }
            if (o <= n) return e;
            var u = n - Cs(r);
            if (u < 1) return r;
            var s = a ? Qt(a, 0, u).join("") : e.slice(0, u);
            if (i === oa) return s + r;
            if (a && (u += s.length - u), Ii(i)) {
                if (e.slice(u).search(i)) {
                    var l, c = s;
                    for (i.global || (i = y(i.source, Zi(vu.exec(i)) + "g")), i.lastIndex = 0; l = i.exec(c);) var f = l.index;
                    s = s.slice(0, f === oa ? u : f)
                }
            } else if (e.indexOf(It(i), u) != u) {
                var p = s.lastIndexOf(i); - 1 < p && (s = s.slice(0, p))
            }
            return s + r
        }, de.unescape = function(e) {
            return (e = Zi(e)) && Za.test(e) ? e.replace(Ya, Es) : e
        }, de.uniqueId = function(e) {
            var t = ++p;
            return Zi(e) + t
        }, de.upperCase = jo, de.upperFirst = No, de.each = Zr, de.eachRight = Jr, de.first = Cr, Mo(de, (ta = {}, Ye(de, function(e, t) {
            w.call(de.prototype, t) || (ta[t] = e)
        }), ta), {
            chain: !1
        }), de.VERSION = "4.17.15", Bu(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
            de[e].placeholder = de
        }), Bu(["drop", "take"], function(n, r) {
            be.prototype[n] = function(e) {
                e = e === oa ? 1 : U(Xi(e), 0);
                var t = this.__filtered__ && !r ? new be(this) : this.clone();
                return t.__filtered__ ? t.__takeCount__ = X(e, t.__takeCount__) : t.__views__.push({
                    size: X(e, ya),
                    type: n + (t.__dir__ < 0 ? "Right" : "")
                }), t
            }, be.prototype[n + "Right"] = function(e) {
                return this.reverse()[n](e).reverse()
            }
        }), Bu(["filter", "map", "takeWhile"], function(e, t) {
            var n = t + 1,
                r = 1 == n || 3 == n;
            be.prototype[e] = function(e) {
                var t = this.clone();
                return t.__iteratees__.push({
                    iteratee: zn(e, 3),
                    type: n
                }), t.__filtered__ = t.__filtered__ || r, t
            }
        }), Bu(["head", "last"], function(e, t) {
            var n = "take" + (t ? "Right" : "");
            be.prototype[e] = function() {
                return this[n](1).value()[0]
            }
        }), Bu(["initial", "tail"], function(e, t) {
            var n = "drop" + (t ? "" : "Right");
            be.prototype[e] = function() {
                return this.__filtered__ ? new be(this) : this[n](1)
            }
        }), be.prototype.compact = function() {
            return this.filter(qo)
        }, be.prototype.find = function(e) {
            return this.filter(e).head()
        }, be.prototype.findLast = function(e) {
            return this.reverse().find(e)
        }, be.prototype.invokeMap = Ct(function(t, n) {
            return "function" == typeof t ? new be(this) : this.map(function(e) {
                return ot(e, t, n)
            })
        }), be.prototype.reject = function(e) {
            return this.filter(di(zn(e)))
        }, be.prototype.slice = function(e, t) {
            e = Xi(e);
            var n = this;
            return n.__filtered__ && (0 < e || t < 0) ? new be(n) : (e < 0 ? n = n.takeRight(-e) : e && (n = n.drop(e)), t !== oa && (n = (t = Xi(t)) < 0 ? n.dropRight(-t) : n.take(t - e)), n)
        }, be.prototype.takeRightWhile = function(e) {
            return this.reverse().takeWhile(e).reverse()
        }, be.prototype.toArray = function() {
            return this.take(ya)
        }, Ye(be.prototype, function(f, e) {
            var p = /^(?:filter|find|map|reject)|While$/.test(e),
                h = /^(?:head|last)$/.test(e),
                d = de[h ? "take" + ("last" == e ? "Right" : "") : e],
                g = h || /^find/.test(e);
            d && (de.prototype[e] = function() {
                function e(e) {
                    var t = d.apply(de, Ju([e], n));
                    return h && a ? t[0] : t
                }
                var t = this.__wrapped__,
                    n = h ? [1] : arguments,
                    r = t instanceof be,
                    i = n[0],
                    o = r || Si(t);
                o && p && "function" == typeof i && 1 != i.length && (r = o = !1);
                var a = this.__chain__,
                    u = !!this.__actions__.length,
                    s = g && !a,
                    l = r && !u;
                if (g || !o) return s && l ? f.apply(this, n) : (c = this.thru(e), s ? h ? c.value()[0] : c.value() : c);
                t = l ? t : new be(this);
                var c = f.apply(t, n);
                return c.__actions__.push({
                    func: Ur,
                    args: [e],
                    thisArg: oa
                }), new me(c, a)
            })
        }), Bu(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
            var n = a[e],
                r = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                i = /^(?:pop|shift)$/.test(e);
            de.prototype[e] = function() {
                var t = arguments;
                if (!i || this.__chain__) return this[r](function(e) {
                    return n.apply(Si(e) ? e : [], t)
                });
                var e = this.value();
                return n.apply(Si(e) ? e : [], t)
            }
        }), Ye(be.prototype, function(e, t) {
            var n = de[t];
            if (n) {
                var r = n.name + "";
                w.call(oe, r) || (oe[r] = []), oe[r].push({
                    name: t,
                    func: n
                })
            }
        }), oe[yn(oa, 2).name] = [{
            name: "wrapper",
            func: oa
        }], be.prototype.clone = function() {
            var e = new be(this.__wrapped__);
            return e.__actions__ = on(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = on(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = on(this.__views__), e
        }, be.prototype.reverse = function() {
            if (this.__filtered__) {
                var e = new be(this);
                e.__dir__ = -1, e.__filtered__ = !0
            } else(e = this.clone()).__dir__ *= -1;
            return e
        }, be.prototype.value = function() {
            var e = this.__wrapped__.value(),
                t = this.__dir__,
                n = Si(e),
                r = t < 0,
                i = n ? e.length : 0,
                o = function(e, t, n) {
                    var r = -1,
                        i = n.length;
                    for (; ++r < i;) {
                        var o = n[r],
                            a = o.size;
                        switch (o.type) {
                            case "drop":
                                e += a;
                                break;
                            case "dropRight":
                                t -= a;
                                break;
                            case "take":
                                t = X(t, e + a);
                                break;
                            case "takeRight":
                                e = U(e, t - a)
                        }
                    }
                    return {
                        start: e,
                        end: t
                    }
                }(0, i, this.__views__),
                a = o.start,
                u = o.end,
                s = u - a,
                l = r ? u : a - 1,
                c = this.__iteratees__,
                f = c.length,
                p = 0,
                h = X(s, this.__takeCount__);
            if (!n || !r && i == s && h == s) return $t(e, this.__actions__);
            var d = [];
            e: for (; s-- && p < h;) {
                for (var g = -1, v = e[l += t]; ++g < f;) {
                    var y = c[g],
                        m = y.iteratee,
                        b = y.type,
                        x = m(v);
                    if (2 == b) v = x;
                    else if (!x) {
                        if (1 == b) continue e;
                        break e
                    }
                }
                d[p++] = v
            }
            return d
        }, de.prototype.at = Xr, de.prototype.chain = function() {
            return Br(this)
        }, de.prototype.commit = function() {
            return new me(this.value(), this.__chain__)
        }, de.prototype.next = function() {
            this.__values__ === oa && (this.__values__ = Bi(this.value()));
            var e = this.__index__ >= this.__values__.length;
            return {
                done: e,
                value: e ? oa : this.__values__[this.__index__++]
            }
        }, de.prototype.plant = function(e) {
            for (var t, n = this; n instanceof ye;) {
                var r = mr(n);
                r.__index__ = 0, r.__values__ = oa, t ? i.__wrapped__ = r : t = r;
                var i = r;
                n = n.__wrapped__
            }
            return i.__wrapped__ = e, t
        }, de.prototype.reverse = function() {
            var e = this.__wrapped__;
            if (e instanceof be) {
                var t = e;
                return this.__actions__.length && (t = new be(this)), (t = t.reverse()).__actions__.push({
                    func: Ur,
                    args: [Fr],
                    thisArg: oa
                }), new me(t, this.__chain__)
            }
            return this.thru(Fr)
        }, de.prototype.toJSON = de.prototype.valueOf = de.prototype.value = function() {
            return $t(this.__wrapped__, this.__actions__)
        }, de.prototype.first = de.prototype.head, F && (de.prototype[F] = function() {
            return this
        }), de
    }();
    "function" == typeof define && "object" == typeof define.amd && define.amd ? (Ou._ = As, define(function() {
        return As
    })) : R ? ((R.exports = As)._ = As, O._ = As) : Ou._ = As
}).call(this),
    function(e, t) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e)
        } : t(e)
    }("undefined" != typeof window ? window : this, function(S, e) {
        function t(e, t) {
            return t.toUpperCase()
        }
        var n = [],
            T = S.document,
            c = n.slice,
            g = n.concat,
            u = n.push,
            i = n.indexOf,
            r = {},
            o = r.toString,
            d = r.hasOwnProperty,
            v = {},
            C = function(e, t) {
                return new C.fn.init(e, t)
            },
            a = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            s = /^-ms-/,
            l = /-([\da-z])/gi;

        function f(e) {
            var t = !!e && "length" in e && e.length,
                n = C.type(e);
            return "function" !== n && !C.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
        }
        C.fn = C.prototype = {
            jquery: "2.2.1",
            constructor: C,
            selector: "",
            length: 0,
            toArray: function() {
                return c.call(this)
            },
            get: function(e) {
                return null != e ? e < 0 ? this[e + this.length] : this[e] : c.call(this)
            },
            pushStack: function(e) {
                var t = C.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function(e) {
                return C.each(this, e)
            },
            map: function(n) {
                return this.pushStack(C.map(this, function(e, t) {
                    return n.call(e, t, e)
                }))
            },
            slice: function() {
                return this.pushStack(c.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(0 <= n && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: u,
            sort: n.sort,
            splice: n.splice
        }, C.extend = C.fn.extend = function() {
            var e, t, n, r, i, o, a = arguments[0] || {},
                u = 1,
                s = arguments.length,
                l = !1;
            for ("boolean" == typeof a && (l = a, a = arguments[u] || {}, u++), "object" == typeof a || C.isFunction(a) || (a = {}), u === s && (a = this, u--); u < s; u++)
                if (null != (e = arguments[u]))
                    for (t in e) n = a[t], a !== (r = e[t]) && (l && r && (C.isPlainObject(r) || (i = C.isArray(r))) ? (o = i ? (i = !1, n && C.isArray(n) ? n : []) : n && C.isPlainObject(n) ? n : {}, a[t] = C.extend(l, o, r)) : void 0 !== r && (a[t] = r));
            return a
        }, C.extend({
            expando: "jQuery" + ("2.2.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === C.type(e)
            },
            isArray: Array.isArray,
            isWindow: function(e) {
                return null != e && e === e.window
            },
            isNumeric: function(e) {
                var t = e && e.toString();
                return !C.isArray(e) && 0 <= t - parseFloat(t) + 1
            },
            isPlainObject: function(e) {
                return "object" === C.type(e) && !e.nodeType && !C.isWindow(e) && !(e.constructor && !d.call(e.constructor.prototype, "isPrototypeOf"))
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? r[o.call(e)] || "object" : typeof e
            },
            globalEval: function(e) {
                var t, n = eval;
                (e = C.trim(e)) && (1 === e.indexOf("use strict") ? ((t = T.createElement("script")).text = e, T.head.appendChild(t).parentNode.removeChild(t)) : n(e))
            },
            camelCase: function(e) {
                return e.replace(s, "ms-").replace(l, t)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t) {
                var n, r = 0;
                if (f(e))
                    for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                else
                    for (r in e)
                        if (!1 === t.call(e[r], r, e[r])) break;
                return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(a, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (f(Object(e)) ? C.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : i.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                return e.length = i, e
            },
            grep: function(e, t, n) {
                for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) != a && r.push(e[i]);
                return r
            },
            map: function(e, t, n) {
                var r, i, o = 0,
                    a = [];
                if (f(e))
                    for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
                else
                    for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
                return g.apply([], a)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, r, i;
                return "string" == typeof t && (n = e[t], t = e, e = n), C.isFunction(e) ? (r = c.call(arguments, 2), (i = function() {
                    return e.apply(t || this, r.concat(c.call(arguments)))
                }).guid = e.guid = e.guid || C.guid++, i) : void 0
            },
            now: Date.now,
            support: v
        }), "function" == typeof Symbol && (C.fn[Symbol.iterator] = n[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            r["[object " + t + "]"] = t.toLowerCase()
        });
        var p = function(n) {
            function f(e, t, n) {
                var r = "0x" + t - 65536;
                return r != r || n ? t : r < 0 ? String.fromCharCode(65536 + r) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            }

            function i() {
                w()
            }
            var e, d, x, o, a, g, p, v, _, s, l, w, S, u, T, y, c, h, m, C = "sizzle" + +new Date,
                b = n.document,
                k = 0,
                r = 0,
                E = ie(),
                A = ie(),
                j = ie(),
                N = function(e, t) {
                    return e === t && (l = !0), 0
                },
                P = {}.hasOwnProperty,
                t = [],
                L = t.pop,
                F = t.push,
                D = t.push,
                O = t.slice,
                R = function(e, t) {
                    for (var n = 0, r = e.length; n < r; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                q = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                I = "[\\x20\\t\\r\\n\\f]",
                H = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                z = "\\[" + I + "*(" + H + ")(?:" + I + "*([*^$|!~]?=)" + I + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + I + "*\\]",
                M = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + z + ")*)|.*)\\)|)",
                V = new RegExp(I + "+", "g"),
                $ = new RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$", "g"),
                W = new RegExp("^" + I + "*," + I + "*"),
                B = new RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"),
                U = new RegExp("=" + I + "*([^\\]'\"]*?)" + I + "*\\]", "g"),
                X = new RegExp(M),
                G = new RegExp("^" + H + "$"),
                Y = {
                    ID: new RegExp("^#(" + H + ")"),
                    CLASS: new RegExp("^\\.(" + H + ")"),
                    TAG: new RegExp("^(" + H + "|[*])"),
                    ATTR: new RegExp("^" + z),
                    PSEUDO: new RegExp("^" + M),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + I + "*(even|odd|(([+-]|)(\\d*)n|)" + I + "*(?:([+-]|)" + I + "*(\\d+)|))" + I + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + q + ")$", "i"),
                    needsContext: new RegExp("^" + I + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + I + "*((?:-\\d)?\\d*)" + I + "*\\)|)(?=[^-]|$)", "i")
                },
                Q = /^(?:input|select|textarea|button)$/i,
                Z = /^h\d$/i,
                J = /^[^{]+\{\s*\[native \w/,
                K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ee = /[+~]/,
                te = /'|\\/g,
                ne = new RegExp("\\\\([\\da-f]{1,6}" + I + "?|(" + I + ")|.)", "ig");
            try {
                D.apply(t = O.call(b.childNodes), b.childNodes), t[b.childNodes.length].nodeType
            } catch (e) {
                D = {
                    apply: t.length ? function(e, t) {
                        F.apply(e, O.call(t))
                    } : function(e, t) {
                        for (var n = e.length, r = 0; e[n++] = t[r++];);
                        e.length = n - 1
                    }
                }
            }

            function re(e, t, n, r) {
                var i, o, a, u, s, l, c, f, p = t && t.ownerDocument,
                    h = t ? t.nodeType : 9;
                if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
                if (!r && ((t ? t.ownerDocument || t : b) !== S && w(t), t = t || S, T)) {
                    if (11 !== h && (l = K.exec(e)))
                        if (i = l[1]) {
                            if (9 === h) {
                                if (!(a = t.getElementById(i))) return n;
                                if (a.id === i) return n.push(a), n
                            } else if (p && (a = p.getElementById(i)) && m(t, a) && a.id === i) return n.push(a), n
                        } else {
                            if (l[2]) return D.apply(n, t.getElementsByTagName(e)), n;
                            if ((i = l[3]) && d.getElementsByClassName && t.getElementsByClassName) return D.apply(n, t.getElementsByClassName(i)), n
                        } if (d.qsa && !j[e + " "] && (!y || !y.test(e))) {
                        if (1 !== h) p = t, f = e;
                        else if ("object" !== t.nodeName.toLowerCase()) {
                            for ((u = t.getAttribute("id")) ? u = u.replace(te, "\\$&") : t.setAttribute("id", u = C), o = (c = g(e)).length, s = G.test(u) ? "#" + u : "[id='" + u + "']"; o--;) c[o] = s + " " + de(c[o]);
                            f = c.join(","), p = ee.test(e) && pe(t.parentNode) || t
                        }
                        if (f) try {
                            return D.apply(n, p.querySelectorAll(f)), n
                        } catch (e) {} finally {
                            u === C && t.removeAttribute("id")
                        }
                    }
                }
                return v(e.replace($, "$1"), t, n, r)
            }

            function ie() {
                var r = [];
                return function e(t, n) {
                    return r.push(t + " ") > x.cacheLength && delete e[r.shift()], e[t + " "] = n
                }
            }

            function oe(e) {
                return e[C] = !0, e
            }

            function ae(e) {
                var t = S.createElement("div");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function ue(e, t) {
                for (var n = e.split("|"), r = n.length; r--;) x.attrHandle[n[r]] = t
            }

            function se(e, t) {
                var n = t && e,
                    r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
                if (r) return r;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function le(t) {
                return function(e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }

            function ce(n) {
                return function(e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t || "button" === t) && e.type === n
                }
            }

            function fe(a) {
                return oe(function(o) {
                    return o = +o, oe(function(e, t) {
                        for (var n, r = a([], e.length, o), i = r.length; i--;) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                    })
                })
            }

            function pe(e) {
                return e && void 0 !== e.getElementsByTagName && e
            }
            for (e in d = re.support = {}, a = re.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return !!t && "HTML" !== t.nodeName
                }, w = re.setDocument = function(e) {
                    var t, n, r = e ? e.ownerDocument || e : b;
                    return r !== S && 9 === r.nodeType && r.documentElement && (u = (S = r).documentElement, T = !a(S), (n = S.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", i, !1) : n.attachEvent && n.attachEvent("onunload", i)), d.attributes = ae(function(e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), d.getElementsByTagName = ae(function(e) {
                        return e.appendChild(S.createComment("")), !e.getElementsByTagName("*").length
                    }), d.getElementsByClassName = J.test(S.getElementsByClassName), d.getById = ae(function(e) {
                        return u.appendChild(e).id = C, !S.getElementsByName || !S.getElementsByName(C).length
                    }), d.getById ? (x.find.ID = function(e, t) {
                        if (void 0 !== t.getElementById && T) {
                            var n = t.getElementById(e);
                            return n ? [n] : []
                        }
                    }, x.filter.ID = function(e) {
                        var t = e.replace(ne, f);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }) : (delete x.find.ID, x.filter.ID = function(e) {
                        var n = e.replace(ne, f);
                        return function(e) {
                            var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                            return t && t.value === n
                        }
                    }), x.find.TAG = d.getElementsByTagName ? function(e, t) {
                        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
                    } : function(e, t) {
                        var n, r = [],
                            i = 0,
                            o = t.getElementsByTagName(e);
                        if ("*" !== e) return o;
                        for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                        return r
                    }, x.find.CLASS = d.getElementsByClassName && function(e, t) {
                        return void 0 !== t.getElementsByClassName && T ? t.getElementsByClassName(e) : void 0
                    }, c = [], y = [], (d.qsa = J.test(S.querySelectorAll)) && (ae(function(e) {
                        u.appendChild(e).innerHTML = "<a id='" + C + "'></a><select id='" + C + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + I + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + I + "*(?:value|" + q + ")"), e.querySelectorAll("[id~=" + C + "-]").length || y.push("~="), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + C + "+*").length || y.push(".#.+[+~]")
                    }), ae(function(e) {
                        var t = S.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + I + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:")
                    })), (d.matchesSelector = J.test(h = u.matches || u.webkitMatchesSelector || u.mozMatchesSelector || u.oMatchesSelector || u.msMatchesSelector)) && ae(function(e) {
                        d.disconnectedMatch = h.call(e, "div"), h.call(e, "[s!='']:x"), c.push("!=", M)
                    }), y = y.length && new RegExp(y.join("|")), c = c.length && new RegExp(c.join("|")), t = J.test(u.compareDocumentPosition), m = t || J.test(u.contains) ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                    } : function(e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1
                    }, N = t ? function(e, t) {
                        if (e === t) return l = !0, 0;
                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e === S || e.ownerDocument === b && m(b, e) ? -1 : t === S || t.ownerDocument === b && m(b, t) ? 1 : s ? R(s, e) - R(s, t) : 0 : 4 & n ? -1 : 1)
                    } : function(e, t) {
                        if (e === t) return l = !0, 0;
                        var n, r = 0,
                            i = e.parentNode,
                            o = t.parentNode,
                            a = [e],
                            u = [t];
                        if (!i || !o) return e === S ? -1 : t === S ? 1 : i ? -1 : o ? 1 : s ? R(s, e) - R(s, t) : 0;
                        if (i === o) return se(e, t);
                        for (n = e; n = n.parentNode;) a.unshift(n);
                        for (n = t; n = n.parentNode;) u.unshift(n);
                        for (; a[r] === u[r];) r++;
                        return r ? se(a[r], u[r]) : a[r] === b ? -1 : u[r] === b ? 1 : 0
                    }), S
                }, re.matches = function(e, t) {
                    return re(e, null, null, t)
                }, re.matchesSelector = function(e, t) {
                    if ((e.ownerDocument || e) !== S && w(e), t = t.replace(U, "='$1']"), d.matchesSelector && T && !j[t + " "] && (!c || !c.test(t)) && (!y || !y.test(t))) try {
                        var n = h.call(e, t);
                        if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                    } catch (e) {}
                    return 0 < re(t, S, null, [e]).length
                }, re.contains = function(e, t) {
                    return (e.ownerDocument || e) !== S && w(e), m(e, t)
                }, re.attr = function(e, t) {
                    (e.ownerDocument || e) !== S && w(e);
                    var n = x.attrHandle[t.toLowerCase()],
                        r = n && P.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !T) : void 0;
                    return void 0 !== r ? r : d.attributes || !T ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }, re.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, re.uniqueSort = function(e) {
                    var t, n = [],
                        r = 0,
                        i = 0;
                    if (l = !d.detectDuplicates, s = !d.sortStable && e.slice(0), e.sort(N), l) {
                        for (; t = e[i++];) t === e[i] && (r = n.push(i));
                        for (; r--;) e.splice(n[r], 1)
                    }
                    return s = null, e
                }, o = re.getText = function(e) {
                    var t, n = "",
                        r = 0,
                        i = e.nodeType;
                    if (i) {
                        if (1 === i || 9 === i || 11 === i) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                        } else if (3 === i || 4 === i) return e.nodeValue
                    } else
                        for (; t = e[r++];) n += o(t);
                    return n
                }, (x = re.selectors = {
                    cacheLength: 50,
                    createPseudo: oe,
                    match: Y,
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
                            return e[1] = e[1].replace(ne, f), e[3] = (e[3] || e[4] || e[5] || "").replace(ne, f), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || re.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && re.error(e[0]), e
                        },
                        PSEUDO: function(e) {
                            var t, n = !e[6] && e[2];
                            return Y.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = g(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(ne, f).toLowerCase();
                            return "*" === e ? function() {
                                return !0
                            } : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function(e) {
                            var t = E[e + " "];
                            return t || (t = new RegExp("(^|" + I + ")" + e + "(" + I + "|$)")) && E(e, function(e) {
                                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(n, r, i) {
                            return function(e) {
                                var t = re.attr(e, n);
                                return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(V, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                            }
                        },
                        CHILD: function(d, e, t, g, v) {
                            var y = "nth" !== d.slice(0, 3),
                                m = "last" !== d.slice(-4),
                                b = "of-type" === e;
                            return 1 === g && 0 === v ? function(e) {
                                return !!e.parentNode
                            } : function(e, t, n) {
                                var r, i, o, a, u, s, l = y != m ? "nextSibling" : "previousSibling",
                                    c = e.parentNode,
                                    f = b && e.nodeName.toLowerCase(),
                                    p = !n && !b,
                                    h = !1;
                                if (c) {
                                    if (y) {
                                        for (; l;) {
                                            for (a = e; a = a[l];)
                                                if (b ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                            s = l = "only" === d && !s && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (s = [m ? c.firstChild : c.lastChild], m && p) {
                                        for (h = (u = (r = (i = (o = (a = c)[C] || (a[C] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[d] || [])[0] === k && r[1]) && r[2], a = u && c.childNodes[u]; a = ++u && a && a[l] || (h = u = 0) || s.pop();)
                                            if (1 === a.nodeType && ++h && a === e) {
                                                i[d] = [k, u, h];
                                                break
                                            }
                                    } else if (p && (h = u = (r = (i = (o = (a = e)[C] || (a[C] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[d] || [])[0] === k && r[1]), !1 === h)
                                        for (;
                                            (a = ++u && a && a[l] || (h = u = 0) || s.pop()) && ((b ? a.nodeName.toLowerCase() !== f : 1 !== a.nodeType) || !++h || (p && ((i = (o = a[C] || (a[C] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[d] = [k, h]), a !== e)););
                                    return (h -= v) === g || h % g == 0 && 0 <= h / g
                                }
                            }
                        },
                        PSEUDO: function(e, o) {
                            var t, a = x.pseudos[e] || x.setFilters[e.toLowerCase()] || re.error("unsupported pseudo: " + e);
                            return a[C] ? a(o) : 1 < a.length ? (t = [e, e, "", o], x.setFilters.hasOwnProperty(e.toLowerCase()) ? oe(function(e, t) {
                                for (var n, r = a(e, o), i = r.length; i--;) e[n = R(e, r[i])] = !(t[n] = r[i])
                            }) : function(e) {
                                return a(e, 0, t)
                            }) : a
                        }
                    },
                    pseudos: {
                        not: oe(function(e) {
                            var r = [],
                                i = [],
                                u = p(e.replace($, "$1"));
                            return u[C] ? oe(function(e, t, n, r) {
                                for (var i, o = u(e, null, r, []), a = e.length; a--;)(i = o[a]) && (e[a] = !(t[a] = i))
                            }) : function(e, t, n) {
                                return r[0] = e, u(r, null, n, i), r[0] = null, !i.pop()
                            }
                        }),
                        has: oe(function(t) {
                            return function(e) {
                                return 0 < re(t, e).length
                            }
                        }),
                        contains: oe(function(t) {
                            return t = t.replace(ne, f),
                                function(e) {
                                    return -1 < (e.textContent || e.innerText || o(e)).indexOf(t)
                                }
                        }),
                        lang: oe(function(n) {
                            return G.test(n || "") || re.error("unsupported lang: " + n), n = n.replace(ne, f).toLowerCase(),
                                function(e) {
                                    var t;
                                    do {
                                        if (t = T ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                    } while ((e = e.parentNode) && 1 === e.nodeType);
                                    return !1
                                }
                        }),
                        target: function(e) {
                            var t = n.location && n.location.hash;
                            return t && t.slice(1) === e.id
                        },
                        root: function(e) {
                            return e === u
                        },
                        focus: function(e) {
                            return e === S.activeElement && (!S.hasFocus || S.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: function(e) {
                            return !1 === e.disabled
                        },
                        disabled: function(e) {
                            return !0 === e.disabled
                        },
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(e) {
                            return !x.pseudos.empty(e)
                        },
                        header: function(e) {
                            return Z.test(e.nodeName)
                        },
                        input: function(e) {
                            return Q.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        },
                        first: fe(function() {
                            return [0]
                        }),
                        last: fe(function(e, t) {
                            return [t - 1]
                        }),
                        eq: fe(function(e, t, n) {
                            return [n < 0 ? n + t : n]
                        }),
                        even: fe(function(e, t) {
                            for (var n = 0; n < t; n += 2) e.push(n);
                            return e
                        }),
                        odd: fe(function(e, t) {
                            for (var n = 1; n < t; n += 2) e.push(n);
                            return e
                        }),
                        lt: fe(function(e, t, n) {
                            for (var r = n < 0 ? n + t : n; 0 <= --r;) e.push(r);
                            return e
                        }),
                        gt: fe(function(e, t, n) {
                            for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                            return e
                        })
                    }
                }).pseudos.nth = x.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) x.pseudos[e] = le(e);
            for (e in {
                    submit: !0,
                    reset: !0
                }) x.pseudos[e] = ce(e);

            function he() {}

            function de(e) {
                for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                return r
            }

            function ge(u, e, t) {
                var s = e.dir,
                    l = t && "parentNode" === s,
                    c = r++;
                return e.first ? function(e, t, n) {
                    for (; e = e[s];)
                        if (1 === e.nodeType || l) return u(e, t, n)
                } : function(e, t, n) {
                    var r, i, o, a = [k, c];
                    if (n) {
                        for (; e = e[s];)
                            if ((1 === e.nodeType || l) && u(e, t, n)) return !0
                    } else
                        for (; e = e[s];)
                            if (1 === e.nodeType || l) {
                                if ((r = (i = (o = e[C] || (e[C] = {}))[e.uniqueID] || (o[e.uniqueID] = {}))[s]) && r[0] === k && r[1] === c) return a[2] = r[2];
                                if ((i[s] = a)[2] = u(e, t, n)) return !0
                            }
                }
            }

            function ve(i) {
                return 1 < i.length ? function(e, t, n) {
                    for (var r = i.length; r--;)
                        if (!i[r](e, t, n)) return !1;
                    return !0
                } : i[0]
            }

            function ye(e, t, n, r, i) {
                for (var o, a = [], u = 0, s = e.length, l = null != t; u < s; u++) !(o = e[u]) || n && !n(o, r, i) || (a.push(o), l && t.push(u));
                return a
            }

            function me(h, d, g, v, y, e) {
                return v && !v[C] && (v = me(v)), y && !y[C] && (y = me(y, e)), oe(function(e, t, n, r) {
                    var i, o, a, u = [],
                        s = [],
                        l = t.length,
                        c = e || function(e, t, n) {
                            for (var r = 0, i = t.length; r < i; r++) re(e, t[r], n);
                            return n
                        }(d || "*", n.nodeType ? [n] : n, []),
                        f = !h || !e && d ? c : ye(c, u, h, n, r),
                        p = g ? y || (e ? h : l || v) ? [] : t : f;
                    if (g && g(f, p, n, r), v)
                        for (i = ye(p, s), v(i, [], n, r), o = i.length; o--;)(a = i[o]) && (p[s[o]] = !(f[s[o]] = a));
                    if (e) {
                        if (y || h) {
                            if (y) {
                                for (i = [], o = p.length; o--;)(a = p[o]) && i.push(f[o] = a);
                                y(null, p = [], i, r)
                            }
                            for (o = p.length; o--;)(a = p[o]) && -1 < (i = y ? R(e, a) : u[o]) && (e[i] = !(t[i] = a))
                        }
                    } else p = ye(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : D.apply(t, p)
                })
            }

            function be(e) {
                for (var i, t, n, r = e.length, o = x.relative[e[0].type], a = o || x.relative[" "], u = o ? 1 : 0, s = ge(function(e) {
                        return e === i
                    }, a, !0), l = ge(function(e) {
                        return -1 < R(i, e)
                    }, a, !0), c = [function(e, t, n) {
                        var r = !o && (n || t !== _) || ((i = t).nodeType ? s : l)(e, t, n);
                        return i = null, r
                    }]; u < r; u++)
                    if (t = x.relative[e[u].type]) c = [ge(ve(c), t)];
                    else {
                        if ((t = x.filter[e[u].type].apply(null, e[u].matches))[C]) {
                            for (n = ++u; n < r && !x.relative[e[n].type]; n++);
                            return me(1 < u && ve(c), 1 < u && de(e.slice(0, u - 1).concat({
                                value: " " === e[u - 2].type ? "*" : ""
                            })).replace($, "$1"), t, u < n && be(e.slice(u, n)), n < r && be(e = e.slice(n)), n < r && de(e))
                        }
                        c.push(t)
                    } return ve(c)
            }

            function xe(v, y) {
                function e(e, t, n, r, i) {
                    var o, a, u, s = 0,
                        l = "0",
                        c = e && [],
                        f = [],
                        p = _,
                        h = e || b && x.find.TAG("*", i),
                        d = k += null == p ? 1 : Math.random() || .1,
                        g = h.length;
                    for (i && (_ = t === S || t || i); l !== g && null != (o = h[l]); l++) {
                        if (b && o) {
                            for (a = 0, t || o.ownerDocument === S || (w(o), n = !T); u = v[a++];)
                                if (u(o, t || S, n)) {
                                    r.push(o);
                                    break
                                } i && (k = d)
                        }
                        m && ((o = !u && o) && s--, e && c.push(o))
                    }
                    if (s += l, m && l !== s) {
                        for (a = 0; u = y[a++];) u(c, f, t, n);
                        if (e) {
                            if (0 < s)
                                for (; l--;) c[l] || f[l] || (f[l] = L.call(r));
                            f = ye(f)
                        }
                        D.apply(r, f), i && !e && 0 < f.length && 1 < s + y.length && re.uniqueSort(r)
                    }
                    return i && (k = d, _ = p), c
                }
                var m = 0 < y.length,
                    b = 0 < v.length;
                return m ? oe(e) : e
            }
            return he.prototype = x.filters = x.pseudos, x.setFilters = new he, g = re.tokenize = function(e, t) {
                var n, r, i, o, a, u, s, l = A[e + " "];
                if (l) return t ? 0 : l.slice(0);
                for (a = e, u = [], s = x.preFilter; a;) {
                    for (o in n && !(r = W.exec(a)) || (r && (a = a.slice(r[0].length) || a), u.push(i = [])), n = !1, (r = B.exec(a)) && (n = r.shift(), i.push({
                            value: n,
                            type: r[0].replace($, " ")
                        }), a = a.slice(n.length)), x.filter) !(r = Y[o].exec(a)) || s[o] && !(r = s[o](r)) || (n = r.shift(), i.push({
                        value: n,
                        type: o,
                        matches: r
                    }), a = a.slice(n.length));
                    if (!n) break
                }
                return t ? a.length : a ? re.error(e) : A(e, u).slice(0)
            }, p = re.compile = function(e, t) {
                var n, r = [],
                    i = [],
                    o = j[e + " "];
                if (!o) {
                    for (n = (t = t || g(e)).length; n--;)(o = be(t[n]))[C] ? r.push(o) : i.push(o);
                    (o = j(e, xe(i, r))).selector = e
                }
                return o
            }, v = re.select = function(e, t, n, r) {
                var i, o, a, u, s, l = "function" == typeof e && e,
                    c = !r && g(e = l.selector || e);
                if (n = n || [], 1 === c.length) {
                    if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && d.getById && 9 === t.nodeType && T && x.relative[o[1].type]) {
                        if (!(t = (x.find.ID(a.matches[0].replace(ne, f), t) || [])[0])) return n;
                        l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                    }
                    for (i = Y.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !x.relative[u = a.type]);)
                        if ((s = x.find[u]) && (r = s(a.matches[0].replace(ne, f), ee.test(o[0].type) && pe(t.parentNode) || t))) {
                            if (o.splice(i, 1), !(e = r.length && de(o))) return D.apply(n, r), n;
                            break
                        }
                }
                return (l || p(e, c))(r, t, !T, n, !t || ee.test(e) && pe(t.parentNode) || t), n
            }, d.sortStable = C.split("").sort(N).join("") === C, d.detectDuplicates = !!l, w(), d.sortDetached = ae(function(e) {
                return 1 & e.compareDocumentPosition(S.createElement("div"))
            }), ae(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || ue("type|href|height|width", function(e, t, n) {
                return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), d.attributes && ae(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || ue("value", function(e, t, n) {
                return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
            }), ae(function(e) {
                return null == e.getAttribute("disabled")
            }) || ue(q, function(e, t, n) {
                var r;
                return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }), re
        }(S);
        C.find = p, C.expr = p.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = p.uniqueSort, C.text = p.getText, C.isXMLDoc = p.isXML, C.contains = p.contains;

        function h(e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && C(e).is(n)) break;
                    r.push(e)
                } return r
        }

        function y(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
        var m = C.expr.match.needsContext,
            b = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            x = /^.[^:#\[\.,]*$/;

        function _(e, n, r) {
            if (C.isFunction(n)) return C.grep(e, function(e, t) {
                return !!n.call(e, t, e) !== r
            });
            if (n.nodeType) return C.grep(e, function(e) {
                return e === n !== r
            });
            if ("string" == typeof n) {
                if (x.test(n)) return C.filter(n, e, r);
                n = C.filter(n, e)
            }
            return C.grep(e, function(e) {
                return -1 < i.call(n, e) !== r
            })
        }
        C.filter = function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? C.find.matchesSelector(r, e) ? [r] : [] : C.find.matches(e, C.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }, C.fn.extend({
            find: function(e) {
                var t, n = this.length,
                    r = [],
                    i = this;
                if ("string" != typeof e) return this.pushStack(C(e).filter(function() {
                    for (t = 0; t < n; t++)
                        if (C.contains(i[t], this)) return !0
                }));
                for (t = 0; t < n; t++) C.find(e, i[t], r);
                return (r = this.pushStack(1 < n ? C.unique(r) : r)).selector = this.selector ? this.selector + " " + e : e, r
            },
            filter: function(e) {
                return this.pushStack(_(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(_(this, e || [], !0))
            },
            is: function(e) {
                return !!_(this, "string" == typeof e && m.test(e) ? C(e) : e || [], !1).length
            }
        });
        var w, k = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
        (C.fn.init = function(e, t, n) {
            var r, i;
            if (!e) return this;
            if (n = n || w, "string" != typeof e) return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : C.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(C) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), C.makeArray(e, this));
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : k.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : T, !0)), b.test(r[1]) && C.isPlainObject(t))
                    for (r in t) C.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = T.getElementById(r[2])) && i.parentNode && (this.length = 1, this[0] = i), this.context = T, this.selector = e, this
        }).prototype = C.fn, w = C(T);
        var E = /^(?:parents|prev(?:Until|All))/,
            A = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };

        function j(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        }
        C.fn.extend({
            has: function(e) {
                var t = C(e, this),
                    n = t.length;
                return this.filter(function() {
                    for (var e = 0; e < n; e++)
                        if (C.contains(this, t[e])) return !0
                })
            },
            closest: function(e, t) {
                for (var n, r = 0, i = this.length, o = [], a = m.test(e) || "string" != typeof e ? C(e, t || this.context) : 0; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        } return this.pushStack(1 < o.length ? C.uniqueSort(o) : o)
            },
            index: function(e) {
                return e ? "string" == typeof e ? i.call(C(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), C.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return h(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return h(e, "parentNode", n)
            },
            next: function(e) {
                return j(e, "nextSibling")
            },
            prev: function(e) {
                return j(e, "previousSibling")
            },
            nextAll: function(e) {
                return h(e, "nextSibling")
            },
            prevAll: function(e) {
                return h(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return h(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return h(e, "previousSibling", n)
            },
            siblings: function(e) {
                return y((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return y(e.firstChild)
            },
            contents: function(e) {
                return e.contentDocument || C.merge([], e.childNodes)
            }
        }, function(r, i) {
            C.fn[r] = function(e, t) {
                var n = C.map(this, i, e);
                return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = C.filter(t, n)), 1 < this.length && (A[r] || C.uniqueSort(n), E.test(r) && n.reverse()), this.pushStack(n)
            }
        });
        var N, P = /\S+/g;

        function L() {
            T.removeEventListener("DOMContentLoaded", L), S.removeEventListener("load", L), C.ready()
        }
        C.Callbacks = function(r) {
            var e, n;
            r = "string" == typeof r ? (e = r, n = {}, C.each(e.match(P) || [], function(e, t) {
                n[t] = !0
            }), n) : C.extend({}, r);

            function i() {
                for (u = r.once, a = o = !0; l.length; c = -1)
                    for (t = l.shift(); ++c < s.length;) !1 === s[c].apply(t[0], t[1]) && r.stopOnFalse && (c = s.length, t = !1);
                r.memory || (t = !1), o = !1, u && (s = t ? [] : "")
            }
            var o, t, a, u, s = [],
                l = [],
                c = -1,
                f = {
                    add: function() {
                        return s && (t && !o && (c = s.length - 1, l.push(t)), function n(e) {
                            C.each(e, function(e, t) {
                                C.isFunction(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== C.type(t) && n(t)
                            })
                        }(arguments), t && !o && i()), this
                    },
                    remove: function() {
                        return C.each(arguments, function(e, t) {
                            for (var n; - 1 < (n = C.inArray(t, s, n));) s.splice(n, 1), n <= c && c--
                        }), this
                    },
                    has: function(e) {
                        return e ? -1 < C.inArray(e, s) : 0 < s.length
                    },
                    empty: function() {
                        return s = s && [], this
                    },
                    disable: function() {
                        return u = l = [], s = t = "", this
                    },
                    disabled: function() {
                        return !s
                    },
                    lock: function() {
                        return u = l = [], t || (s = t = ""), this
                    },
                    locked: function() {
                        return !!u
                    },
                    fireWith: function(e, t) {
                        return u || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), o || i()), this
                    },
                    fire: function() {
                        return f.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!a
                    }
                };
            return f
        }, C.extend({
            Deferred: function(e) {
                var o = [
                        ["resolve", "done", C.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", C.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", C.Callbacks("memory")]
                    ],
                    i = "pending",
                    a = {
                        state: function() {
                            return i
                        },
                        always: function() {
                            return u.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var i = arguments;
                            return C.Deferred(function(r) {
                                C.each(o, function(e, t) {
                                    var n = C.isFunction(i[e]) && i[e];
                                    u[t[1]](function() {
                                        var e = n && n.apply(this, arguments);
                                        e && C.isFunction(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this === a ? r.promise() : this, n ? [e] : arguments)
                                    })
                                }), i = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? C.extend(e, a) : a
                        }
                    },
                    u = {};
                return a.pipe = a.then, C.each(o, function(e, t) {
                    var n = t[2],
                        r = t[3];
                    a[t[1]] = n.add, r && n.add(function() {
                        i = r
                    }, o[1 ^ e][2].disable, o[2][2].lock), u[t[0]] = function() {
                        return u[t[0] + "With"](this === u ? a : this, arguments), this
                    }, u[t[0] + "With"] = n.fireWith
                }), a.promise(u), e && e.call(u, u), u
            },
            when: function(e) {
                function t(t, n, r) {
                    return function(e) {
                        n[t] = this, r[t] = 1 < arguments.length ? c.call(arguments) : e, r === i ? l.notifyWith(n, r) : --s || l.resolveWith(n, r)
                    }
                }
                var i, n, r, o = 0,
                    a = c.call(arguments),
                    u = a.length,
                    s = 1 !== u || e && C.isFunction(e.promise) ? u : 0,
                    l = 1 === s ? e : C.Deferred();
                if (1 < u)
                    for (i = new Array(u), n = new Array(u), r = new Array(u); o < u; o++) a[o] && C.isFunction(a[o].promise) ? a[o].promise().progress(t(o, n, i)).done(t(o, r, a)).fail(l.reject) : --s;
                return s || l.resolveWith(r, a), l.promise()
            }
        }), C.fn.ready = function(e) {
            return C.ready.promise().done(e), this
        }, C.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? C.readyWait++ : C.ready(!0)
            },
            ready: function(e) {
                (!0 === e ? --C.readyWait : C.isReady) || ((C.isReady = !0) !== e && 0 < --C.readyWait || (N.resolveWith(T, [C]), C.fn.triggerHandler && (C(T).triggerHandler("ready"), C(T).off("ready"))))
            }
        }), C.ready.promise = function(e) {
            return N || (N = C.Deferred(), "complete" === T.readyState || "loading" !== T.readyState && !T.documentElement.doScroll ? S.setTimeout(C.ready) : (T.addEventListener("DOMContentLoaded", L), S.addEventListener("load", L))), N.promise(e)
        }, C.ready.promise();

        function F(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        }
        var D = function(e, t, n, r, i, o, a) {
            var u = 0,
                s = e.length,
                l = null == n;
            if ("object" === C.type(n))
                for (u in i = !0, n) D(e, t, u, n[u], !0, o, a);
            else if (void 0 !== r && (i = !0, C.isFunction(r) || (a = !0), l && (t = a ? (t.call(e, r), null) : (l = t, function(e, t, n) {
                    return l.call(C(e), n)
                })), t))
                for (; u < s; u++) t(e[u], n, a ? r : r.call(e[u], u, t(e[u], n)));
            return i ? e : l ? t.call(e) : s ? t(e[0], n) : o
        };

        function O() {
            this.expando = C.expando + O.uid++
        }
        O.uid = 1, O.prototype = {
            register: function(e, t) {
                var n = t || {};
                return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
                    value: n,
                    writable: !0,
                    configurable: !0
                }), e[this.expando]
            },
            cache: function(e) {
                if (!F(e)) return {};
                var t = e[this.expando];
                return t || (t = {}, F(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            },
            set: function(e, t, n) {
                var r, i = this.cache(e);
                if ("string" == typeof t) i[t] = n;
                else
                    for (r in t) i[r] = t[r];
                return i
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
            },
            access: function(e, t, n) {
                var r;
                return void 0 === t || t && "string" == typeof t && void 0 === n ? void 0 !== (r = this.get(e, t)) ? r : this.get(e, C.camelCase(t)) : (this.set(e, t, n), void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, r, i, o = e[this.expando];
                if (void 0 !== o) {
                    if (void 0 === t) this.register(e);
                    else {
                        n = (r = C.isArray(t) ? t.concat(t.map(C.camelCase)) : (i = C.camelCase(t), t in o ? [t, i] : (r = i) in o ? [r] : r.match(P) || [])).length;
                        for (; n--;) delete o[r[n]]
                    }
                    void 0 !== t && !C.isEmptyObject(o) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return void 0 !== t && !C.isEmptyObject(t)
            }
        };
        var R = new O,
            q = new O,
            I = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            H = /[A-Z]/g;

        function z(e, t, n) {
            var r;
            if (void 0 === n && 1 === e.nodeType)
                if (r = "data-" + t.replace(H, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : I.test(n) ? C.parseJSON(n) : n)
                    } catch (e) {}
                    q.set(e, t, n)
                } else n = void 0;
            return n
        }
        C.extend({
            hasData: function(e) {
                return q.hasData(e) || R.hasData(e)
            },
            data: function(e, t, n) {
                return q.access(e, t, n)
            },
            removeData: function(e, t) {
                q.remove(e, t)
            },
            _data: function(e, t, n) {
                return R.access(e, t, n)
            },
            _removeData: function(e, t) {
                R.remove(e, t)
            }
        }), C.fn.extend({
            data: function(r, e) {
                var t, n, i, o = this[0],
                    a = o && o.attributes;
                if (void 0 !== r) return "object" == typeof r ? this.each(function() {
                    q.set(this, r)
                }) : D(this, function(t) {
                    var e, n;
                    if (o && void 0 === t) {
                        if (void 0 !== (e = q.get(o, r) || q.get(o, r.replace(H, "-$&").toLowerCase()))) return e;
                        if (n = C.camelCase(r), void 0 !== (e = q.get(o, n))) return e;
                        if (void 0 !== (e = z(o, n, void 0))) return e
                    } else n = C.camelCase(r), this.each(function() {
                        var e = q.get(this, n);
                        q.set(this, n, t), -1 < r.indexOf("-") && void 0 !== e && q.set(this, r, t)
                    })
                }, null, e, 1 < arguments.length, null, !0);
                if (this.length && (i = q.get(o), 1 === o.nodeType && !R.get(o, "hasDataAttrs"))) {
                    for (t = a.length; t--;) a[t] && (0 === (n = a[t].name).indexOf("data-") && (n = C.camelCase(n.slice(5)), z(o, n, i[n])));
                    R.set(o, "hasDataAttrs", !0)
                }
                return i
            },
            removeData: function(e) {
                return this.each(function() {
                    q.remove(this, e)
                })
            }
        }), C.extend({
            queue: function(e, t, n) {
                var r;
                return e ? (t = (t || "fx") + "queue", r = R.get(e, t), n && (!r || C.isArray(n) ? r = R.access(e, t, C.makeArray(n)) : r.push(n)), r || []) : void 0
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = C.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    o = C._queueHooks(e, t);
                "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                    C.dequeue(e, t)
                }, o)), !r && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return R.get(e, n) || R.access(e, n, {
                    empty: C.Callbacks("once memory").add(function() {
                        R.remove(e, [t + "queue", n])
                    })
                })
            }
        }), C.fn.extend({
            queue: function(t, n) {
                var e = 2;
                return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? C.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                    var e = C.queue(this, t, n);
                    C._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && C.dequeue(this, t)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    C.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                function n() {
                    --i || o.resolveWith(a, [a])
                }
                var r, i = 1,
                    o = C.Deferred(),
                    a = this,
                    u = this.length;
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; u--;)(r = R.get(a[u], e + "queueHooks")) && r.empty && (i++, r.empty.add(n));
                return n(), o.promise(t)
            }
        });

        function M(e, t) {
            return e = t || e, "none" === C.css(e, "display") || !C.contains(e.ownerDocument, e)
        }
        var V = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            $ = new RegExp("^(?:([+-])=|)(" + V + ")([a-z%]*)$", "i"),
            W = ["Top", "Right", "Bottom", "Left"];

        function B(e, t, n, r) {
            var i, o = 1,
                a = 20,
                u = r ? function() {
                    return r.cur()
                } : function() {
                    return C.css(e, t, "")
                },
                s = u(),
                l = n && n[3] || (C.cssNumber[t] ? "" : "px"),
                c = (C.cssNumber[t] || "px" !== l && +s) && $.exec(C.css(e, t));
            if (c && c[3] !== l)
                for (l = l || c[3], n = n || [], c = +s || 1; c /= o = o || ".5", C.style(e, t, c + l), o !== (o = u() / s) && 1 !== o && --a;);
            return n && (c = +c || +s || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
        }
        var U = /^(?:checkbox|radio)$/i,
            X = /<([\w:-]+)/,
            G = /^$|\/(?:java|ecma)script/i,
            Y = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };

        function Q(e, t) {
            var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
            return void 0 === t || t && C.nodeName(e, t) ? C.merge([e], n) : n
        }

        function Z(e, t) {
            for (var n = 0, r = e.length; n < r; n++) R.set(e[n], "globalEval", !t || R.get(t[n], "globalEval"))
        }
        Y.optgroup = Y.option, Y.tbody = Y.tfoot = Y.colgroup = Y.caption = Y.thead, Y.th = Y.td;
        var J, K, ee = /<|&#?\w+;/;

        function te(e, t, n, r, i) {
            for (var o, a, u, s, l, c, f = t.createDocumentFragment(), p = [], h = 0, d = e.length; h < d; h++)
                if ((o = e[h]) || 0 === o)
                    if ("object" === C.type(o)) C.merge(p, o.nodeType ? [o] : o);
                    else if (ee.test(o)) {
                for (a = a || f.appendChild(t.createElement("div")), u = (X.exec(o) || ["", ""])[1].toLowerCase(), s = Y[u] || Y._default, a.innerHTML = s[1] + C.htmlPrefilter(o) + s[2], c = s[0]; c--;) a = a.lastChild;
                C.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
            } else p.push(t.createTextNode(o));
            for (f.textContent = "", h = 0; o = p[h++];)
                if (r && -1 < C.inArray(o, r)) i && i.push(o);
                else if (l = C.contains(o.ownerDocument, o), a = Q(f.appendChild(o), "script"), l && Z(a), n)
                for (c = 0; o = a[c++];) G.test(o.type || "") && n.push(o);
            return f
        }
        J = T.createDocumentFragment().appendChild(T.createElement("div")), (K = T.createElement("input")).setAttribute("type", "radio"), K.setAttribute("checked", "checked"), K.setAttribute("name", "t"), J.appendChild(K), v.checkClone = J.cloneNode(!0).cloneNode(!0).lastChild.checked, J.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!J.cloneNode(!0).lastChild.defaultValue;
        var ne = /^key/,
            re = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            ie = /^([^.]*)(?:\.(.+)|)/;

        function oe() {
            return !0
        }

        function ae() {
            return !1
        }

        function ue() {
            try {
                return T.activeElement
            } catch (e) {}
        }

        function se(e, t, n, r, i, o) {
            var a, u;
            if ("object" == typeof t) {
                for (u in "string" != typeof n && (r = r || n, n = void 0), t) se(e, u, n, r, t[u], o);
                return e
            }
            if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ae;
            else if (!i) return e;
            return 1 === o && (a = i, (i = function(e) {
                return C().off(e), a.apply(this, arguments)
            }).guid = a.guid || (a.guid = C.guid++)), e.each(function() {
                C.event.add(this, t, i, r, n)
            })
        }
        C.event = {
            global: {},
            add: function(t, e, n, r, i) {
                var o, a, u, s, l, c, f, p, h, d, g, v = R.get(t);
                if (v)
                    for (n.handler && (n = (o = n).handler, i = o.selector), n.guid || (n.guid = C.guid++), (s = v.events) || (s = v.events = {}), (a = v.handle) || (a = v.handle = function(e) {
                            return void 0 !== C && C.event.triggered !== e.type ? C.event.dispatch.apply(t, arguments) : void 0
                        }), l = (e = (e || "").match(P) || [""]).length; l--;) h = g = (u = ie.exec(e[l]) || [])[1], d = (u[2] || "").split(".").sort(), h && (f = C.event.special[h] || {}, h = (i ? f.delegateType : f.bindType) || h, f = C.event.special[h] || {}, c = C.extend({
                        type: h,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && C.expr.match.needsContext.test(i),
                        namespace: d.join(".")
                    }, o), (p = s[h]) || ((p = s[h] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, d, a) || t.addEventListener && t.addEventListener(h, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), C.event.global[h] = !0)
            },
            remove: function(e, t, n, r, i) {
                var o, a, u, s, l, c, f, p, h, d, g, v = R.hasData(e) && R.get(e);
                if (v && (s = v.events)) {
                    for (l = (t = (t || "").match(P) || [""]).length; l--;)
                        if (h = g = (u = ie.exec(t[l]) || [])[1], d = (u[2] || "").split(".").sort(), h) {
                            for (f = C.event.special[h] || {}, p = s[h = (r ? f.delegateType : f.bindType) || h] || [], u = u[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || u && !u.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                            a && !p.length && (f.teardown && !1 !== f.teardown.call(e, d, v.handle) || C.removeEvent(e, h, v.handle), delete s[h])
                        } else
                            for (h in s) C.event.remove(e, h + t[l], n, r, !0);
                    C.isEmptyObject(s) && R.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                e = C.event.fix(e);
                var t, n, r, i, o, a = [],
                    u = c.call(arguments),
                    s = (R.get(this, "events") || {})[e.type] || [],
                    l = C.event.special[e.type] || {};
                if ((u[0] = e).delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, e)) {
                    for (a = C.event.handlers.call(this, e, s), t = 0;
                        (i = a[t++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = i.elem, n = 0;
                            (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, void 0 !== (r = ((C.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (e.result = r) && (e.preventDefault(), e.stopPropagation()));
                    return l.postDispatch && l.postDispatch.call(this, e), e.result
                }
            },
            handlers: function(e, t) {
                var n, r, i, o, a = [],
                    u = t.delegateCount,
                    s = e.target;
                if (u && s.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                    for (; s !== this; s = s.parentNode || this)
                        if (1 === s.nodeType && (!0 !== s.disabled || "click" !== e.type)) {
                            for (r = [], n = 0; n < u; n++) void 0 === r[i = (o = t[n]).selector + " "] && (r[i] = o.needsContext ? -1 < C(i, this).index(s) : C.find(i, this, null, [s]).length), r[i] && r.push(o);
                            r.length && a.push({
                                elem: s,
                                handlers: r
                            })
                        } return u < t.length && a.push({
                    elem: this,
                    handlers: t.slice(u)
                }), a
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, t) {
                    var n, r, i, o = t.button;
                    return null == e.pageX && null != t.clientX && (r = (n = e.target.ownerDocument || T).documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
                }
            },
            fix: function(e) {
                if (e[C.expando]) return e;
                var t, n, r, i = e.type,
                    o = e,
                    a = this.fixHooks[i];
                for (a || (this.fixHooks[i] = a = re.test(i) ? this.mouseHooks : ne.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new C.Event(o), t = r.length; t--;) e[n = r[t]] = o[n];
                return e.target || (e.target = T), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, o) : e
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        return this !== ue() && this.focus ? (this.focus(), !1) : void 0
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === ue() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return "checkbox" === this.type && this.click && C.nodeName(this, "input") ? (this.click(), !1) : void 0
                    },
                    _default: function(e) {
                        return C.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        }, C.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }, C.Event = function(e, t) {
            return this instanceof C.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? oe : ae) : this.type = e, t && C.extend(this, t), this.timeStamp = e && e.timeStamp || C.now(), void(this[C.expando] = !0)) : new C.Event(e, t)
        }, C.Event.prototype = {
            constructor: C.Event,
            isDefaultPrevented: ae,
            isPropagationStopped: ae,
            isImmediatePropagationStopped: ae,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = oe, e && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = oe, e && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = oe, e && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, C.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, i) {
            C.event.special[e] = {
                delegateType: i,
                bindType: i,
                handle: function(e) {
                    var t, n = e.relatedTarget,
                        r = e.handleObj;
                    return n && (n === this || C.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
                }
            }
        }), C.fn.extend({
            on: function(e, t, n, r) {
                return se(this, e, t, n, r)
            },
            one: function(e, t, n, r) {
                return se(this, e, t, n, r, 1)
            },
            off: function(e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj) return r = e.handleObj, C(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ae), this.each(function() {
                    C.event.remove(this, e, n, t)
                });
                for (i in e) this.off(i, t, e[i]);
                return this
            }
        });
        var le = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            ce = /<script|<style|<link/i,
            fe = /checked\s*(?:[^=]|=\s*.checked.)/i,
            pe = /^true\/(.*)/,
            he = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function de(e, t) {
            return C.nodeName(e, "table") && C.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function ge(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function ve(e) {
            var t = pe.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function ye(e, t) {
            var n, r, i, o, a, u, s, l;
            if (1 === t.nodeType) {
                if (R.hasData(e) && (o = R.access(e), a = R.set(t, o), l = o.events))
                    for (i in delete a.handle, a.events = {}, l)
                        for (n = 0, r = l[i].length; n < r; n++) C.event.add(t, i, l[i][n]);
                q.hasData(e) && (u = q.access(e), s = C.extend({}, u), q.set(t, s))
            }
        }

        function me(n, r, i, o) {
            r = g.apply([], r);
            var e, t, a, u, s, l, c = 0,
                f = n.length,
                p = f - 1,
                h = r[0],
                d = C.isFunction(h);
            if (d || 1 < f && "string" == typeof h && !v.checkClone && fe.test(h)) return n.each(function(e) {
                var t = n.eq(e);
                d && (r[0] = h.call(this, e, t.html())), me(t, r, i, o)
            });
            if (f && (t = (e = te(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
                for (u = (a = C.map(Q(e, "script"), ge)).length; c < f; c++) s = e, c !== p && (s = C.clone(s, !0, !0), u && C.merge(a, Q(s, "script"))), i.call(n[c], s, c);
                if (u)
                    for (l = a[a.length - 1].ownerDocument, C.map(a, ve), c = 0; c < u; c++) s = a[c], G.test(s.type || "") && !R.access(s, "globalEval") && C.contains(l, s) && (s.src ? C._evalUrl && C._evalUrl(s.src) : C.globalEval(s.textContent.replace(he, "")))
            }
            return n
        }

        function be(e, t, n) {
            for (var r, i = t ? C.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || C.cleanData(Q(r)), r.parentNode && (n && C.contains(r.ownerDocument, r) && Z(Q(r, "script")), r.parentNode.removeChild(r));
            return e
        }
        C.extend({
            htmlPrefilter: function(e) {
                return e.replace(le, "<$1></$2>")
            },
            clone: function(e, t, n) {
                var r, i, o, a, u, s, l, c = e.cloneNode(!0),
                    f = C.contains(e.ownerDocument, e);
                if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e)))
                    for (a = Q(c), r = 0, i = (o = Q(e)).length; r < i; r++) u = o[r], s = a[r], "input" === (l = s.nodeName.toLowerCase()) && U.test(u.type) ? s.checked = u.checked : "input" !== l && "textarea" !== l || (s.defaultValue = u.defaultValue);
                if (t)
                    if (n)
                        for (o = o || Q(e), a = a || Q(c), r = 0, i = o.length; r < i; r++) ye(o[r], a[r]);
                    else ye(e, c);
                return 0 < (a = Q(c, "script")).length && Z(a, !f && Q(e, "script")), c
            },
            cleanData: function(e) {
                for (var t, n, r, i = C.event.special, o = 0; void 0 !== (n = e[o]); o++)
                    if (F(n)) {
                        if (t = n[R.expando]) {
                            if (t.events)
                                for (r in t.events) i[r] ? C.event.remove(n, r) : C.removeEvent(n, r, t.handle);
                            n[R.expando] = void 0
                        }
                        n[q.expando] && (n[q.expando] = void 0)
                    }
            }
        }), C.fn.extend({
            domManip: me,
            detach: function(e) {
                return be(this, e, !0)
            },
            remove: function(e) {
                return be(this, e)
            },
            text: function(e) {
                return D(this, function(e) {
                    return void 0 === e ? C.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return me(this, arguments, function(e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || de(this, e).appendChild(e)
                })
            },
            prepend: function() {
                return me(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = de(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return me(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return me(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (C.cleanData(Q(e, !1)), e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function() {
                    return C.clone(this, e, t)
                })
            },
            html: function(e) {
                return D(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        r = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !ce.test(e) && !Y[(X.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = C.htmlPrefilter(e);
                        try {
                            for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (C.cleanData(Q(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var n = [];
                return me(this, arguments, function(e) {
                    var t = this.parentNode;
                    C.inArray(this, n) < 0 && (C.cleanData(Q(this)), t && t.replaceChild(e, this))
                }, n)
            }
        }), C.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, a) {
            C.fn[e] = function(e) {
                for (var t, n = [], r = C(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), C(r[o])[a](t), u.apply(n, t.get());
                return this.pushStack(n)
            }
        });
        var xe, _e = {
            HTML: "block",
            BODY: "block"
        };

        function we(e, t) {
            var n = C(t.createElement(e)).appendTo(t.body),
                r = C.css(n[0], "display");
            return n.detach(), r
        }

        function Se(e) {
            var t = T,
                n = _e[e];
            return n || ("none" !== (n = we(e, t)) && n || ((t = (xe = (xe || C("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(), t.close(), n = we(e, t), xe.detach()), _e[e] = n), n
        }

        function Te(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            for (o in i = n.apply(e, r || []), t) e.style[o] = a[o];
            return i
        }
        var Ce = /^margin/,
            ke = new RegExp("^(" + V + ")(?!px)[a-z%]+$", "i"),
            Ee = function(e) {
                var t = e.ownerDocument.defaultView;
                return t && t.opener || (t = S), t.getComputedStyle(e)
            },
            Ae = T.documentElement;

        function je(e, t, n) {
            var r, i, o, a, u = e.style;
            return "" !== (a = (n = n || Ee(e)) ? n.getPropertyValue(t) || n[t] : void 0) && void 0 !== a || C.contains(e.ownerDocument, e) || (a = C.style(e, t)), n && !v.pixelMarginRight() && ke.test(a) && Ce.test(t) && (r = u.width, i = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, a = n.width, u.width = r, u.minWidth = i, u.maxWidth = o), void 0 !== a ? a + "" : a
        }

        function Ne(e, t) {
            return {
                get: function() {
                    return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }! function() {
            var t, n, r, i, o = T.createElement("div"),
                a = T.createElement("div");
            if (a.style) {
                function e() {
                    a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Ae.appendChild(o);
                    var e = S.getComputedStyle(a);
                    t = "1%" !== e.top, i = "2px" === e.marginLeft, n = "4px" === e.width, a.style.marginRight = "50%", r = "4px" === e.marginRight, Ae.removeChild(o)
                }
                a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === a.style.backgroundClip, o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", o.appendChild(a), C.extend(v, {
                    pixelPosition: function() {
                        return e(), t
                    },
                    boxSizingReliable: function() {
                        return null == n && e(), n
                    },
                    pixelMarginRight: function() {
                        return null == n && e(), r
                    },
                    reliableMarginLeft: function() {
                        return null == n && e(), i
                    },
                    reliableMarginRight: function() {
                        var e, t = a.appendChild(T.createElement("div"));
                        return t.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", a.style.width = "1px", Ae.appendChild(o), e = !parseFloat(S.getComputedStyle(t).marginRight), Ae.removeChild(o), a.removeChild(t), e
                    }
                })
            }
        }();
        var Pe = /^(none|table(?!-c[ea]).+)/,
            Le = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Fe = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            De = ["Webkit", "O", "Moz", "ms"],
            Oe = T.createElement("div").style;

        function Re(e) {
            if (e in Oe) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = De.length; n--;)
                if ((e = De[n] + t) in Oe) return e
        }

        function qe(e, t, n) {
            var r = $.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
        }

        function Ie(e, t, n, r, i) {
            for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2) "margin" === n && (a += C.css(e, n + W[o], !0, i)), r ? ("content" === n && (a -= C.css(e, "padding" + W[o], !0, i)), "margin" !== n && (a -= C.css(e, "border" + W[o] + "Width", !0, i))) : (a += C.css(e, "padding" + W[o], !0, i), "padding" !== n && (a += C.css(e, "border" + W[o] + "Width", !0, i)));
            return a
        }

        function He(e, t, n) {
            var r = !0,
                i = "width" === t ? e.offsetWidth : e.offsetHeight,
                o = Ee(e),
                a = "border-box" === C.css(e, "boxSizing", !1, o);
            if (T.msFullscreenElement && S.top !== S && e.getClientRects().length && (i = Math.round(100 * e.getBoundingClientRect()[t])), i <= 0 || null == i) {
                if (((i = je(e, t, o)) < 0 || null == i) && (i = e.style[t]), ke.test(i)) return i;
                r = a && (v.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
            }
            return i + Ie(e, t, n || (a ? "border" : "content"), r, o) + "px"
        }

        function ze(e, t) {
            for (var n, r, i, o = [], a = 0, u = e.length; a < u; a++)(r = e[a]).style && (o[a] = R.get(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && M(r) && (o[a] = R.access(r, "olddisplay", Se(r.nodeName)))) : (i = M(r), "none" === n && i || R.set(r, "olddisplay", i ? n : C.css(r, "display"))));
            for (a = 0; a < u; a++)(r = e[a]).style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
            return e
        }

        function Me(e, t, n, r, i) {
            return new Me.prototype.init(e, t, n, r, i)
        }
        C.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = je(e, "opacity");
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
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: "cssFloat"
            },
            style: function(e, t, n, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var i, o, a, u = C.camelCase(t),
                        s = e.style;
                    return t = C.cssProps[u] || (C.cssProps[u] = Re(u) || u), a = C.cssHooks[t] || C.cssHooks[u], void 0 === n ? a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : s[t] : ("string" === (o = typeof n) && (i = $.exec(n)) && i[1] && (n = B(e, t, i), o = "number"), void(null != n && n == n && ("number" === o && (n += i && i[3] || (C.cssNumber[u] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (s[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (s[t] = n))))
                }
            },
            css: function(e, t, n, r) {
                var i, o, a, u = C.camelCase(t);
                return t = C.cssProps[u] || (C.cssProps[u] = Re(u) || u), (a = C.cssHooks[t] || C.cssHooks[u]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = je(e, t, r)), "normal" === i && t in Fe && (i = Fe[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
            }
        }), C.each(["height", "width"], function(e, a) {
            C.cssHooks[a] = {
                get: function(e, t, n) {
                    return t ? Pe.test(C.css(e, "display")) && 0 === e.offsetWidth ? Te(e, Le, function() {
                        return He(e, a, n)
                    }) : He(e, a, n) : void 0
                },
                set: function(e, t, n) {
                    var r, i = n && Ee(e),
                        o = n && Ie(e, a, n, "border-box" === C.css(e, "boxSizing", !1, i), i);
                    return o && (r = $.exec(t)) && "px" !== (r[3] || "px") && (e.style[a] = t, t = C.css(e, a)), qe(0, t, o)
                }
            }
        }), C.cssHooks.marginLeft = Ne(v.reliableMarginLeft, function(e, t) {
            return t ? (parseFloat(je(e, "marginLeft")) || e.getBoundingClientRect().left - Te(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px" : void 0
        }), C.cssHooks.marginRight = Ne(v.reliableMarginRight, function(e, t) {
            return t ? Te(e, {
                display: "inline-block"
            }, je, [e, "marginRight"]) : void 0
        }), C.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(i, o) {
            C.cssHooks[i + o] = {
                expand: function(e) {
                    for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + W[t] + o] = r[t] || r[t - 2] || r[0];
                    return n
                }
            }, Ce.test(i) || (C.cssHooks[i + o].set = qe)
        }), C.fn.extend({
            css: function(e, t) {
                return D(this, function(e, t, n) {
                    var r, i, o = {},
                        a = 0;
                    if (C.isArray(t)) {
                        for (r = Ee(e), i = t.length; a < i; a++) o[t[a]] = C.css(e, t[a], !1, r);
                        return o
                    }
                    return void 0 !== n ? C.style(e, t, n) : C.css(e, t)
                }, e, t, 1 < arguments.length)
            },
            show: function() {
                return ze(this, !0)
            },
            hide: function() {
                return ze(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    M(this) ? C(this).show() : C(this).hide()
                })
            }
        }), ((C.Tween = Me).prototype = {
            constructor: Me,
            init: function(e, t, n, r, i, o) {
                this.elem = e, this.prop = n, this.easing = i || C.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (C.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = Me.propHooks[this.prop];
                return e && e.get ? e.get(this) : Me.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = Me.propHooks[this.prop];
                return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Me.propHooks._default.set(this), this
            }
        }).init.prototype = Me.prototype, (Me.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                },
                set: function(e) {
                    C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[C.cssProps[e.prop]] && !C.cssHooks[e.prop] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }).scrollTop = Me.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, C.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        }, C.fx = Me.prototype.init, C.fx.step = {};
        var Ve, $e, We, Be, Ue, Xe = /^(?:toggle|show|hide)$/,
            Ge = /queueHooks$/;

        function Ye() {
            return S.setTimeout(function() {
                Ve = void 0
            }), Ve = C.now()
        }

        function Qe(e, t) {
            var n, r = 0,
                i = {
                    height: e
                };
            for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = W[r])] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i
        }

        function Ze(e, t, n) {
            for (var r, i = (Je.tweeners[t] || []).concat(Je.tweeners["*"]), o = 0, a = i.length; o < a; o++)
                if (r = i[o].call(n, t, e)) return r
        }

        function Je(o, e, t) {
            var n, a, r = 0,
                i = Je.prefilters.length,
                u = C.Deferred().always(function() {
                    delete s.elem
                }),
                s = function() {
                    if (a) return !1;
                    for (var e = Ve || Ye(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
                    return u.notifyWith(o, [l, n, t]), n < 1 && i ? t : (u.resolveWith(o, [l]), !1)
                },
                l = u.promise({
                    elem: o,
                    props: C.extend({}, e),
                    opts: C.extend(!0, {
                        specialEasing: {},
                        easing: C.easing._default
                    }, t),
                    originalProperties: e,
                    originalOptions: t,
                    startTime: Ve || Ye(),
                    duration: t.duration,
                    tweens: [],
                    createTween: function(e, t) {
                        var n = C.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                        return l.tweens.push(n), n
                    },
                    stop: function(e) {
                        var t = 0,
                            n = e ? l.tweens.length : 0;
                        if (a) return this;
                        for (a = !0; t < n; t++) l.tweens[t].run(1);
                        return e ? (u.notifyWith(o, [l, 1, 0]), u.resolveWith(o, [l, e])) : u.rejectWith(o, [l, e]), this
                    }
                }),
                c = l.props;
            for (function(e, t) {
                    var n, r, i, o, a;
                    for (n in e)
                        if (i = t[r = C.camelCase(n)], o = e[n], C.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = C.cssHooks[r]) && "expand" in a)
                            for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                        else t[r] = i
                }(c, l.opts.specialEasing); r < i; r++)
                if (n = Je.prefilters[r].call(l, o, c, l.opts)) return C.isFunction(n.stop) && (C._queueHooks(l.elem, l.opts.queue).stop = C.proxy(n.stop, n)), n;
            return C.map(c, Ze, l), C.isFunction(l.opts.start) && l.opts.start.call(o, l), C.fx.timer(C.extend(s, {
                elem: o,
                anim: l,
                queue: l.opts.queue
            })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
        }
        C.Animation = C.extend(Je, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return B(n.elem, e, $.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                for (var n, r = 0, i = (e = C.isFunction(e) ? (t = e, ["*"]) : e.match(P)).length; r < i; r++) n = e[r], Je.tweeners[n] = Je.tweeners[n] || [], Je.tweeners[n].unshift(t)
            },
            prefilters: [function(t, e, n) {
                var r, i, o, a, u, s, l, c = this,
                    f = {},
                    p = t.style,
                    h = t.nodeType && M(t),
                    d = R.get(t, "fxshow");
                for (r in n.queue || (null == (u = C._queueHooks(t, "fx")).unqueued && (u.unqueued = 0, s = u.empty.fire, u.empty.fire = function() {
                        u.unqueued || s()
                    }), u.unqueued++, c.always(function() {
                        c.always(function() {
                            u.unqueued--, C.queue(t, "fx").length || u.empty.fire()
                        })
                    })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === ("none" === (l = C.css(t, "display")) ? R.get(t, "olddisplay") || Se(t.nodeName) : l) && "none" === C.css(t, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", c.always(function() {
                        p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                    })), e)
                    if (i = e[r], Xe.exec(i)) {
                        if (delete e[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
                            if ("show" !== i || !d || void 0 === d[r]) continue;
                            h = !0
                        }
                        f[r] = d && d[r] || C.style(t, r)
                    } else l = void 0;
                if (C.isEmptyObject(f)) "inline" === ("none" === l ? Se(t.nodeName) : l) && (p.display = l);
                else
                    for (r in d ? "hidden" in d && (h = d.hidden) : d = R.access(t, "fxshow", {}), o && (d.hidden = !h), h ? C(t).show() : c.done(function() {
                            C(t).hide()
                        }), c.done(function() {
                            var e;
                            for (e in R.remove(t, "fxshow"), f) C.style(t, e, f[e])
                        }), f) a = Ze(h ? d[r] : 0, r, c), r in d || (d[r] = a.start, h && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
            }],
            prefilter: function(e, t) {
                t ? Je.prefilters.unshift(e) : Je.prefilters.push(e)
            }
        }), C.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? C.extend({}, e) : {
                complete: n || !n && t || C.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !C.isFunction(t) && t
            };
            return r.duration = C.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in C.fx.speeds ? C.fx.speeds[r.duration] : C.fx.speeds._default, null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                C.isFunction(r.old) && r.old.call(this), r.queue && C.dequeue(this, r.queue)
            }, r
        }, C.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(M).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(t, e, n, r) {
                function i() {
                    var e = Je(this, C.extend({}, t), a);
                    (o || R.get(this, "finish")) && e.stop(!0)
                }
                var o = C.isEmptyObject(t),
                    a = C.speed(e, n, r);
                return i.finish = i, o || !1 === a.queue ? this.each(i) : this.queue(a.queue, i)
            },
            stop: function(i, e, o) {
                function a(e) {
                    var t = e.stop;
                    delete e.stop, t(o)
                }
                return "string" != typeof i && (o = e, e = i, i = void 0), e && !1 !== i && this.queue(i || "fx", []), this.each(function() {
                    var e = !0,
                        t = null != i && i + "queueHooks",
                        n = C.timers,
                        r = R.get(this);
                    if (t) r[t] && r[t].stop && a(r[t]);
                    else
                        for (t in r) r[t] && r[t].stop && Ge.test(t) && a(r[t]);
                    for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                    !e && o || C.dequeue(this, i)
                })
            },
            finish: function(a) {
                return !1 !== a && (a = a || "fx"), this.each(function() {
                    var e, t = R.get(this),
                        n = t[a + "queue"],
                        r = t[a + "queueHooks"],
                        i = C.timers,
                        o = n ? n.length : 0;
                    for (t.finish = !0, C.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                    for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                    delete t.finish
                })
            }
        }), C.each(["toggle", "show", "hide"], function(e, r) {
            var i = C.fn[r];
            C.fn[r] = function(e, t, n) {
                return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(Qe(r, !0), e, t, n)
            }
        }), C.each({
            slideDown: Qe("show"),
            slideUp: Qe("hide"),
            slideToggle: Qe("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, r) {
            C.fn[e] = function(e, t, n) {
                return this.animate(r, e, t, n)
            }
        }), C.timers = [], C.fx.tick = function() {
            var e, t = 0,
                n = C.timers;
            for (Ve = C.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || C.fx.stop(), Ve = void 0
        }, C.fx.timer = function(e) {
            C.timers.push(e), e() ? C.fx.start() : C.timers.pop()
        }, C.fx.interval = 13, C.fx.start = function() {
            $e = $e || S.setInterval(C.fx.tick, C.fx.interval)
        }, C.fx.stop = function() {
            S.clearInterval($e), $e = null
        }, C.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, C.fn.delay = function(r, e) {
            return r = C.fx && C.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
                var n = S.setTimeout(e, r);
                t.stop = function() {
                    S.clearTimeout(n)
                }
            })
        }, We = T.createElement("input"), Be = T.createElement("select"), Ue = Be.appendChild(T.createElement("option")), We.type = "checkbox", v.checkOn = "" !== We.value, v.optSelected = Ue.selected, Be.disabled = !0, v.optDisabled = !Ue.disabled, (We = T.createElement("input")).value = "t", We.type = "radio", v.radioValue = "t" === We.value;
        var Ke, et = C.expr.attrHandle;
        C.fn.extend({
            attr: function(e, t) {
                return D(this, C.attr, e, t, 1 < arguments.length)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    C.removeAttr(this, e)
                })
            }
        }), C.extend({
            attr: function(e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? C.prop(e, t, n) : (1 === o && C.isXMLDoc(e) || (t = t.toLowerCase(), i = C.attrHooks[t] || (C.expr.match.bool.test(t) ? Ke : void 0)), void 0 !== n ? null === n ? void C.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = C.find.attr(e, t)) ? void 0 : r)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!v.radioValue && "radio" === t && C.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, r, i = 0,
                    o = t && t.match(P);
                if (o && 1 === e.nodeType)
                    for (; n = o[i++];) r = C.propFix[n] || n, C.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
            }
        }), Ke = {
            set: function(e, t, n) {
                return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, C.each(C.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var o = et[t] || C.find.attr;
            et[t] = function(e, t, n) {
                var r, i;
                return n || (i = et[t], et[t] = r, r = null != o(e, t, n) ? t.toLowerCase() : null, et[t] = i), r
            }
        });
        var tt = /^(?:input|select|textarea|button)$/i,
            nt = /^(?:a|area)$/i;
        C.fn.extend({
            prop: function(e, t) {
                return D(this, C.prop, e, t, 1 < arguments.length)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[C.propFix[e] || e]
                })
            }
        }), C.extend({
            prop: function(e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return 1 === o && C.isXMLDoc(e) || (t = C.propFix[t] || t, i = C.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = C.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : tt.test(e.nodeName) || nt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), v.optSelected || (C.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            }
        }), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            C.propFix[this.toLowerCase()] = this
        });
        var rt = /[\t\r\n\f]/g;

        function it(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }
        C.fn.extend({
            addClass: function(t) {
                var e, n, r, i, o, a, u, s = 0;
                if (C.isFunction(t)) return this.each(function(e) {
                    C(this).addClass(t.call(this, e, it(this)))
                });
                if ("string" == typeof t && t)
                    for (e = t.match(P) || []; n = this[s++];)
                        if (i = it(n), r = 1 === n.nodeType && (" " + i + " ").replace(rt, " ")) {
                            for (a = 0; o = e[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                            i !== (u = C.trim(r)) && n.setAttribute("class", u)
                        } return this
            },
            removeClass: function(t) {
                var e, n, r, i, o, a, u, s = 0;
                if (C.isFunction(t)) return this.each(function(e) {
                    C(this).removeClass(t.call(this, e, it(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof t && t)
                    for (e = t.match(P) || []; n = this[s++];)
                        if (i = it(n), r = 1 === n.nodeType && (" " + i + " ").replace(rt, " ")) {
                            for (a = 0; o = e[a++];)
                                for (; - 1 < r.indexOf(" " + o + " ");) r = r.replace(" " + o + " ", " ");
                            i !== (u = C.trim(r)) && n.setAttribute("class", u)
                        } return this
            },
            toggleClass: function(i, t) {
                var o = typeof i;
                return "boolean" == typeof t && "string" == o ? t ? this.addClass(i) : this.removeClass(i) : C.isFunction(i) ? this.each(function(e) {
                    C(this).toggleClass(i.call(this, e, it(this), t), t)
                }) : this.each(function() {
                    var e, t, n, r;
                    if ("string" == o)
                        for (t = 0, n = C(this), r = i.match(P) || []; e = r[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                    else void 0 !== i && "boolean" != o || ((e = it(this)) && R.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", !e && !1 !== i && R.get(this, "__className__") || ""))
                })
            },
            hasClass: function(e) {
                var t, n, r = 0;
                for (t = " " + e + " "; n = this[r++];)
                    if (1 === n.nodeType && -1 < (" " + it(n) + " ").replace(rt, " ").indexOf(t)) return !0;
                return !1
            }
        });
        var ot = /\r/g;
        C.fn.extend({
            val: function(n) {
                var r, e, i, t = this[0];
                return arguments.length ? (i = C.isFunction(n), this.each(function(e) {
                    var t;
                    1 === this.nodeType && (null == (t = i ? n.call(this, e, C(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : C.isArray(t) && (t = C.map(t, function(e) {
                        return null == e ? "" : e + ""
                    })), (r = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
                })) : t ? (r = C.valHooks[t.type] || C.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(ot, "") : null == e ? "" : e : void 0
            }
        }), C.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        return C.trim(e.value)
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, a = o ? null : [], u = o ? i + 1 : r.length, s = i < 0 ? u : o ? i : 0; s < u; s++)
                            if (((n = r[s]).selected || s === i) && (v.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !C.nodeName(n.parentNode, "optgroup"))) {
                                if (t = C(n).val(), o) return t;
                                a.push(t)
                            } return a
                    },
                    set: function(e, t) {
                        for (var n, r, i = e.options, o = C.makeArray(t), a = i.length; a--;)((r = i[a]).selected = -1 < C.inArray(C.valHooks.option.get(r), o)) && (n = !0);
                        return n || (e.selectedIndex = -1), o
                    }
                }
            }
        }), C.each(["radio", "checkbox"], function() {
            C.valHooks[this] = {
                set: function(e, t) {
                    return C.isArray(t) ? e.checked = -1 < C.inArray(C(e).val(), t) : void 0
                }
            }, v.checkOn || (C.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var at = /^(?:focusinfocus|focusoutblur)$/;
        C.extend(C.event, {
            trigger: function(e, t, n, r) {
                var i, o, a, u, s, l, c, f = [n || T],
                    p = d.call(e, "type") ? e.type : e,
                    h = d.call(e, "namespace") ? e.namespace.split(".") : [];
                if (o = a = n = n || T, 3 !== n.nodeType && 8 !== n.nodeType && !at.test(p + C.event.triggered) && (-1 < p.indexOf(".") && (p = (h = p.split(".")).shift(), h.sort()), s = p.indexOf(":") < 0 && "on" + p, (e = e[C.expando] ? e : new C.Event(p, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : C.makeArray(t, [e]), c = C.event.special[p] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                    if (!r && !c.noBubble && !C.isWindow(n)) {
                        for (u = c.delegateType || p, at.test(u + p) || (o = o.parentNode); o; o = o.parentNode) f.push(o), a = o;
                        a === (n.ownerDocument || T) && f.push(a.defaultView || a.parentWindow || S)
                    }
                    for (i = 0;
                        (o = f[i++]) && !e.isPropagationStopped();) e.type = 1 < i ? u : c.bindType || p, (l = (R.get(o, "events") || {})[e.type] && R.get(o, "handle")) && l.apply(o, t), (l = s && o[s]) && l.apply && F(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                    return e.type = p, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(f.pop(), t) || !F(n) || s && C.isFunction(n[p]) && !C.isWindow(n) && ((a = n[s]) && (n[s] = null), n[C.event.triggered = p](), C.event.triggered = void 0, a && (n[s] = a)), e.result
                }
            },
            simulate: function(e, t, n) {
                var r = C.extend(new C.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                C.event.trigger(r, null, t), r.isDefaultPrevented() && n.preventDefault()
            }
        }), C.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    C.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                return n ? C.event.trigger(e, t, n, !0) : void 0
            }
        }), C.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, n) {
            C.fn[n] = function(e, t) {
                return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
            }
        }), C.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), v.focusin = "onfocusin" in S, v.focusin || C.each({
            focus: "focusin",
            blur: "focusout"
        }, function(n, r) {
            function i(e) {
                C.event.simulate(r, e.target, C.event.fix(e))
            }
            C.event.special[r] = {
                setup: function() {
                    var e = this.ownerDocument || this,
                        t = R.access(e, r);
                    t || e.addEventListener(n, i, !0), R.access(e, r, (t || 0) + 1)
                },
                teardown: function() {
                    var e = this.ownerDocument || this,
                        t = R.access(e, r) - 1;
                    t ? R.access(e, r, t) : (e.removeEventListener(n, i, !0), R.remove(e, r))
                }
            }
        });
        var ut = S.location,
            st = C.now(),
            lt = /\?/;
        C.parseJSON = function(e) {
            return JSON.parse(e + "")
        }, C.parseXML = function(e) {
            var t;
            if (!e || "string" != typeof e) return null;
            try {
                t = (new S.DOMParser).parseFromString(e, "text/xml")
            } catch (e) {
                t = void 0
            }
            return t && !t.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + e), t
        };
        var ct = /#.*$/,
            ft = /([?&])_=[^&]*/,
            pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            ht = /^(?:GET|HEAD)$/,
            dt = /^\/\//,
            gt = {},
            vt = {},
            yt = "*/".concat("*"),
            mt = T.createElement("a");

        function bt(o) {
            return function(e, t) {
                "string" != typeof e && (t = e, e = "*");
                var n, r = 0,
                    i = e.toLowerCase().match(P) || [];
                if (C.isFunction(t))
                    for (; n = i[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
            }
        }

        function xt(t, i, o, a) {
            var u = {},
                s = t === vt;

            function l(e) {
                var r;
                return u[e] = !0, C.each(t[e] || [], function(e, t) {
                    var n = t(i, o, a);
                    return "string" != typeof n || s || u[n] ? s ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
                }), r
            }
            return l(i.dataTypes[0]) || !u["*"] && l("*")
        }

        function _t(e, t) {
            var n, r, i = C.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((i[n] ? e : r = r || {})[n] = t[n]);
            return r && C.extend(!0, e, r), e
        }
        mt.href = ut.href, C.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: ut.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ut.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": yt,
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
                    "text json": C.parseJSON,
                    "text xml": C.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? _t(_t(e, C.ajaxSettings), t) : _t(C.ajaxSettings, e)
            },
            ajaxPrefilter: bt(gt),
            ajaxTransport: bt(vt),
            ajax: function(e, t) {
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var c, f, p, n, h, r, d, i, g = C.ajaxSetup({}, t),
                    v = g.context || g,
                    y = g.context && (v.nodeType || v.jquery) ? C(v) : C.event,
                    m = C.Deferred(),
                    b = C.Callbacks("once memory"),
                    x = g.statusCode || {},
                    o = {},
                    a = {},
                    _ = 0,
                    u = "canceled",
                    w = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (2 === _) {
                                if (!n)
                                    for (n = {}; t = pt.exec(p);) n[t[1].toLowerCase()] = t[2];
                                t = n[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === _ ? p : null
                        },
                        setRequestHeader: function(e, t) {
                            var n = e.toLowerCase();
                            return _ || (e = a[n] = a[n] || e, o[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return _ || (g.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (_ < 2)
                                    for (t in e) x[t] = [x[t], e[t]];
                                else w.always(e[w.status]);
                            return this
                        },
                        abort: function(e) {
                            var t = e || u;
                            return c && c.abort(t), s(0, t), this
                        }
                    };
                if (m.promise(w).complete = b.add, w.success = w.done, w.error = w.fail, g.url = ((e || g.url || ut.href) + "").replace(ct, "").replace(dt, ut.protocol + "//"), g.type = t.method || t.type || g.method || g.type, g.dataTypes = C.trim(g.dataType || "*").toLowerCase().match(P) || [""], null == g.crossDomain) {
                    r = T.createElement("a");
                    try {
                        r.href = g.url, r.href = r.href, g.crossDomain = mt.protocol + "//" + mt.host != r.protocol + "//" + r.host
                    } catch (e) {
                        g.crossDomain = !0
                    }
                }
                if (g.data && g.processData && "string" != typeof g.data && (g.data = C.param(g.data, g.traditional)), xt(gt, g, t, w), 2 === _) return w;
                for (i in (d = C.event && g.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), g.type = g.type.toUpperCase(), g.hasContent = !ht.test(g.type), f = g.url, g.hasContent || (g.data && (f = g.url += (lt.test(f) ? "&" : "?") + g.data, delete g.data), !1 === g.cache && (g.url = ft.test(f) ? f.replace(ft, "$1_=" + st++) : f + (lt.test(f) ? "&" : "?") + "_=" + st++)), g.ifModified && (C.lastModified[f] && w.setRequestHeader("If-Modified-Since", C.lastModified[f]), C.etag[f] && w.setRequestHeader("If-None-Match", C.etag[f])), (g.data && g.hasContent && !1 !== g.contentType || t.contentType) && w.setRequestHeader("Content-Type", g.contentType), w.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + yt + "; q=0.01" : "") : g.accepts["*"]), g.headers) w.setRequestHeader(i, g.headers[i]);
                if (g.beforeSend && (!1 === g.beforeSend.call(v, w, g) || 2 === _)) return w.abort();
                for (i in u = "abort", {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) w[i](g[i]);
                if (c = xt(vt, g, t, w)) {
                    if (w.readyState = 1, d && y.trigger("ajaxSend", [w, g]), 2 === _) return w;
                    g.async && 0 < g.timeout && (h = S.setTimeout(function() {
                        w.abort("timeout")
                    }, g.timeout));
                    try {
                        _ = 1, c.send(o, s)
                    } catch (e) {
                        if (!(_ < 2)) throw e;
                        s(-1, e)
                    }
                } else s(-1, "No Transport");

                function s(e, t, n, r) {
                    var i, o, a, u, s, l = t;
                    2 !== _ && (_ = 2, h && S.clearTimeout(h), c = void 0, p = r || "", w.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (u = function(e, t, n) {
                        for (var r, i, o, a, u = e.contents, s = e.dataTypes;
                            "*" === s[0];) s.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (r)
                            for (i in u)
                                if (u[i] && u[i].test(r)) {
                                    s.unshift(i);
                                    break
                                } if (s[0] in n) o = s[0];
                        else {
                            for (i in n) {
                                if (!s[0] || e.converters[i + " " + s[0]]) {
                                    o = i;
                                    break
                                }
                                a = a || i
                            }
                            o = o || a
                        }
                        return o ? (o !== s[0] && s.unshift(o), n[o]) : void 0
                    }(g, w, n)), u = function(e, t, n, r) {
                        var i, o, a, u, s, l = {},
                            c = e.dataTypes.slice();
                        if (c[1])
                            for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                        for (o = c.shift(); o;)
                            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !s && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), s = o, o = c.shift())
                                if ("*" === o) o = s;
                                else if ("*" !== s && s !== o) {
                            if (!(a = l[s + " " + o] || l["* " + o]))
                                for (i in l)
                                    if ((u = i.split(" "))[1] === o && (a = l[s + " " + u[0]] || l["* " + u[0]])) {
                                        !0 === a ? a = l[i] : !0 !== l[i] && (o = u[0], c.unshift(u[1]));
                                        break
                                    } if (!0 !== a)
                                if (a && e.throws) t = a(t);
                                else try {
                                    t = a(t)
                                } catch (e) {
                                    return {
                                        state: "parsererror",
                                        error: a ? e : "No conversion from " + s + " to " + o
                                    }
                                }
                        }
                        return {
                            state: "success",
                            data: t
                        }
                    }(g, u, w, i), i ? (g.ifModified && ((s = w.getResponseHeader("Last-Modified")) && (C.lastModified[f] = s), (s = w.getResponseHeader("etag")) && (C.etag[f] = s)), 204 === e || "HEAD" === g.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = u.state, o = u.data, i = !(a = u.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), w.status = e, w.statusText = (t || l) + "", i ? m.resolveWith(v, [o, l, w]) : m.rejectWith(v, [w, l, a]), w.statusCode(x), x = void 0, d && y.trigger(i ? "ajaxSuccess" : "ajaxError", [w, g, i ? o : a]), b.fireWith(v, [w, l]), d && (y.trigger("ajaxComplete", [w, g]), --C.active || C.event.trigger("ajaxStop")))
                }
                return w
            },
            getJSON: function(e, t, n) {
                return C.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return C.get(e, void 0, t, "script")
            }
        }), C.each(["get", "post"], function(e, i) {
            C[i] = function(e, t, n, r) {
                return C.isFunction(t) && (r = r || n, n = t, t = void 0), C.ajax(C.extend({
                    url: e,
                    type: i,
                    dataType: r,
                    data: t,
                    success: n
                }, C.isPlainObject(e) && e))
            }
        }), C._evalUrl = function(e) {
            return C.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0
            })
        }, C.fn.extend({
            wrapAll: function(t) {
                var e;
                return C.isFunction(t) ? this.each(function(e) {
                    C(this).wrapAll(t.call(this, e))
                }) : (this[0] && (e = C(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                }).append(this)), this)
            },
            wrapInner: function(n) {
                return C.isFunction(n) ? this.each(function(e) {
                    C(this).wrapInner(n.call(this, e))
                }) : this.each(function() {
                    var e = C(this),
                        t = e.contents();
                    t.length ? t.wrapAll(n) : e.append(n)
                })
            },
            wrap: function(t) {
                var n = C.isFunction(t);
                return this.each(function(e) {
                    C(this).wrapAll(n ? t.call(this, e) : t)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    C.nodeName(this, "body") || C(this).replaceWith(this.childNodes)
                }).end()
            }
        }), C.expr.filters.hidden = function(e) {
            return !C.expr.filters.visible(e)
        }, C.expr.filters.visible = function(e) {
            return 0 < e.offsetWidth || 0 < e.offsetHeight || 0 < e.getClientRects().length
        };
        var wt = /%20/g,
            St = /\[\]$/,
            Tt = /\r?\n/g,
            Ct = /^(?:submit|button|image|reset|file)$/i,
            kt = /^(?:input|select|textarea|keygen)/i;

        function Et(n, e, r, i) {
            var t;
            if (C.isArray(e)) C.each(e, function(e, t) {
                r || St.test(n) ? i(n, t) : Et(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
            });
            else if (r || "object" !== C.type(e)) i(n, e);
            else
                for (t in e) Et(n + "[" + t + "]", e[t], r, i)
        }
        C.param = function(e, t) {
            function n(e, t) {
                t = C.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            }
            var r, i = [];
            if (void 0 === t && (t = C.ajaxSettings && C.ajaxSettings.traditional), C.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, function() {
                n(this.name, this.value)
            });
            else
                for (r in e) Et(r, e[r], t, n);
            return i.join("&").replace(wt, "+")
        }, C.fn.extend({
            serialize: function() {
                return C.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = C.prop(this, "elements");
                    return e ? C.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !C(this).is(":disabled") && kt.test(this.nodeName) && !Ct.test(e) && (this.checked || !U.test(e))
                }).map(function(e, t) {
                    var n = C(this).val();
                    return null == n ? null : C.isArray(n) ? C.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(Tt, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(Tt, "\r\n")
                    }
                }).get()
            }
        }), C.ajaxSettings.xhr = function() {
            try {
                return new S.XMLHttpRequest
            } catch (e) {}
        };
        var At = {
                0: 200,
                1223: 204
            },
            jt = C.ajaxSettings.xhr();
        v.cors = !!jt && "withCredentials" in jt, v.ajax = jt = !!jt, C.ajaxTransport(function(i) {
            var o, a;
            return v.cors || jt && !i.crossDomain ? {
                send: function(e, t) {
                    var n, r = i.xhr();
                    if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                        for (n in i.xhrFields) r[n] = i.xhrFields[n];
                    for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                    o = function(e) {
                        return function() {
                            o && (o = a = r.onload = r.onerror = r.onabort = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(At[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                binary: r.response
                            } : {
                                text: r.responseText
                            }, r.getAllResponseHeaders()))
                        }
                    }, r.onload = o(), a = r.onerror = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                        4 === r.readyState && S.setTimeout(function() {
                            o && a()
                        })
                    }, o = o("abort");
                    try {
                        r.send(i.hasContent && i.data || null)
                    } catch (e) {
                        if (o) throw e
                    }
                },
                abort: function() {
                    o && o()
                }
            } : void 0
        }), C.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return C.globalEval(e), e
                }
            }
        }), C.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), C.ajaxTransport("script", function(n) {
            var r, i;
            if (n.crossDomain) return {
                send: function(e, t) {
                    r = C("<script>").prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", i = function(e) {
                        r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
                    }), T.head.appendChild(r[0])
                },
                abort: function() {
                    i && i()
                }
            }
        });
        var Nt, Pt = [],
            Lt = /(=)\?(?=&|$)|\?\?/;
        C.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Pt.pop() || C.expando + "_" + st++;
                return this[e] = !0, e
            }
        }), C.ajaxPrefilter("json jsonp", function(e, t, n) {
            var r, i, o, a = !1 !== e.jsonp && (Lt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Lt.test(e.data) && "data");
            return a || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = C.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Lt, "$1" + r) : !1 !== e.jsonp && (e.url += (lt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
                return o || C.error(r + " was not called"), o[0]
            }, e.dataTypes[0] = "json", i = S[r], S[r] = function() {
                o = arguments
            }, n.always(function() {
                void 0 === i ? C(S).removeProp(r) : S[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Pt.push(r)), o && C.isFunction(i) && i(o[0]), o = i = void 0
            }), "script") : void 0
        }), v.createHTMLDocument = ((Nt = T.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Nt.childNodes.length), C.parseHTML = function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || (v.createHTMLDocument ? T.implementation.createHTMLDocument("") : T);
            var r = b.exec(e),
                i = !n && [];
            return r ? [t.createElement(r[1])] : (r = te([e], t, i), i && i.length && C(i).remove(), C.merge([], r.childNodes))
        };
        var Ft = C.fn.load;

        function Dt(e) {
            return C.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
        }
        C.fn.load = function(e, t, n) {
            if ("string" != typeof e && Ft) return Ft.apply(this, arguments);
            var r, i, o, a = this,
                u = e.indexOf(" ");
            return -1 < u && (r = C.trim(e.slice(u)), e = e.slice(0, u)), C.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && C.ajax({
                url: e,
                type: i || "GET",
                dataType: "html",
                data: t
            }).done(function(e) {
                o = arguments, a.html(r ? C("<div>").append(C.parseHTML(e)).find(r) : e)
            }).always(n && function(e, t) {
                a.each(function() {
                    n.apply(a, o || [e.responseText, t, e])
                })
            }), this
        }, C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            C.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), C.expr.filters.animated = function(t) {
            return C.grep(C.timers, function(e) {
                return t === e.elem
            }).length
        }, C.offset = {
            setOffset: function(e, t, n) {
                var r, i, o, a, u, s, l = C.css(e, "position"),
                    c = C(e),
                    f = {};
                "static" === l && (e.style.position = "relative"), u = c.offset(), o = C.css(e, "top"), s = C.css(e, "left"), i = ("absolute" === l || "fixed" === l) && -1 < (o + s).indexOf("auto") ? (a = (r = c.position()).top, r.left) : (a = parseFloat(o) || 0, parseFloat(s) || 0), C.isFunction(t) && (t = t.call(e, n, C.extend({}, u))), null != t.top && (f.top = t.top - u.top + a), null != t.left && (f.left = t.left - u.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
            }
        }, C.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                    C.offset.setOffset(this, t, e)
                });
                var e, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    },
                    o = r && r.ownerDocument;
                return o ? (e = o.documentElement, C.contains(e, r) ? (i = r.getBoundingClientRect(), n = Dt(o), {
                    top: i.top + n.pageYOffset - e.clientTop,
                    left: i.left + n.pageXOffset - e.clientLeft
                }) : i) : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = this[0],
                        r = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === C.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), C.nodeName(e[0], "html") || (r = e.offset()), r.top += C.css(e[0], "borderTopWidth", !0), r.left += C.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - r.top - C.css(n, "marginTop", !0),
                        left: t.left - r.left - C.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && "static" === C.css(e, "position");) e = e.offsetParent;
                    return e || Ae
                })
            }
        }), C.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, i) {
            var o = "pageYOffset" === i;
            C.fn[t] = function(e) {
                return D(this, function(e, t, n) {
                    var r = Dt(e);
                    return void 0 === n ? r ? r[i] : e[t] : void(r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n)
                }, t, e, arguments.length)
            }
        }), C.each(["top", "left"], function(e, n) {
            C.cssHooks[n] = Ne(v.pixelPosition, function(e, t) {
                return t ? (t = je(e, n), ke.test(t) ? C(e).position()[n] + "px" : t) : void 0
            })
        }), C.each({
            Height: "height",
            Width: "width"
        }, function(o, a) {
            C.each({
                padding: "inner" + o,
                content: a,
                "": "outer" + o
            }, function(r, e) {
                C.fn[e] = function(e, t) {
                    var n = arguments.length && (r || "boolean" != typeof e),
                        i = r || (!0 === e || !0 === t ? "margin" : "border");
                    return D(this, function(e, t, n) {
                        var r;
                        return C.isWindow(e) ? e.document.documentElement["client" + o] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + o], r["scroll" + o], e.body["offset" + o], r["offset" + o], r["client" + o])) : void 0 === n ? C.css(e, t, i) : C.style(e, t, n, i)
                    }, a, n ? e : void 0, n, null)
                }
            })
        }), C.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            },
            size: function() {
                return this.length
            }
        }), C.fn.andSelf = C.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return C
        });
        var Ot = S.jQuery,
            Rt = S.$;
        return C.noConflict = function(e) {
            return S.$ === C && (S.$ = Rt), e && S.jQuery === C && (S.jQuery = Ot), C
        }, e || (S.jQuery = S.$ = C), C
    }),
    function(t) {
        if (!t.jQuery) {
            var c = function(e, t) {
                return new c.fn.init(e, t)
            };
            c.isWindow = function(e) {
                return null != e && e == e.window
            }, c.type = function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[i.call(e)] || "object" : typeof e
            }, c.isArray = Array.isArray || function(e) {
                return "array" === c.type(e)
            }, c.isPlainObject = function(e) {
                var t;
                if (!e || "object" !== c.type(e) || e.nodeType || c.isWindow(e)) return !1;
                try {
                    if (e.constructor && !r.call(e, "constructor") && !r.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (e) {
                    return !1
                }
                for (t in e);
                return void 0 === t || r.call(e, t)
            }, c.each = function(e, t, n) {
                var r = 0,
                    i = e.length,
                    o = u(e);
                if (n) {
                    if (o)
                        for (; r < i && !1 !== t.apply(e[r], n); r++);
                    else
                        for (r in e)
                            if (!1 === t.apply(e[r], n)) break
                } else if (o)
                    for (; r < i && !1 !== t.call(e[r], r, e[r]); r++);
                else
                    for (r in e)
                        if (!1 === t.call(e[r], r, e[r])) break;
                return e
            }, c.data = function(e, t, n) {
                if (void 0 === n) {
                    var r = (i = e[c.expando]) && o[i];
                    if (void 0 === t) return r;
                    if (r && t in r) return r[t]
                } else if (void 0 !== t) {
                    var i = e[c.expando] || (e[c.expando] = ++c.uuid);
                    return o[i] = o[i] || {}, o[i][t] = n
                }
            }, c.removeData = function(e, t) {
                var n = e[c.expando],
                    r = n && o[n];
                r && c.each(t, function(e, t) {
                    delete r[t]
                })
            }, c.extend = function() {
                var e, t, n, r, i, o, a = arguments[0] || {},
                    u = 1,
                    s = arguments.length,
                    l = !1;
                for ("boolean" == typeof a && (l = a, a = arguments[u] || {}, u++), "object" != typeof a && "function" !== c.type(a) && (a = {}), u === s && (a = this, u--); u < s; u++)
                    if (null != (i = arguments[u]))
                        for (r in i) e = a[r], a !== (n = i[r]) && (l && n && (c.isPlainObject(n) || (t = c.isArray(n))) ? (o = t ? (t = !1, e && c.isArray(e) ? e : []) : e && c.isPlainObject(e) ? e : {}, a[r] = c.extend(l, o, n)) : void 0 !== n && (a[r] = n));
                return a
            }, c.queue = function(e, t, n) {
                if (e) {
                    t = (t || "fx") + "queue";
                    var r, i, o, a = c.data(e, t);
                    return n ? (!a || c.isArray(n) ? a = c.data(e, t, (o = i || [], null != (r = n) && (u(Object(r)) ? function(e, t) {
                        for (var n = +t.length, r = 0, i = e.length; r < n;) e[i++] = t[r++];
                        if (n != n)
                            for (; void 0 !== t[r];) e[i++] = t[r++];
                        e.length = i
                    }(o, "string" == typeof r ? [r] : r) : [].push.call(o, r)), o)) : a.push(n), a) : a || []
                }
            }, c.dequeue = function(e, i) {
                c.each(e.nodeType ? [e] : e, function(e, t) {
                    i = i || "fx";
                    var n = c.queue(t, i),
                        r = n.shift();
                    "inprogress" === r && (r = n.shift()), r && ("fx" === i && n.unshift("inprogress"), r.call(t, function() {
                        c.dequeue(t, i)
                    }))
                })
            }, c.fn = c.prototype = {
                init: function(e) {
                    if (e.nodeType) return this[0] = e, this;
                    throw new Error("Not a DOM node.")
                },
                offset: function() {
                    var e = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                        top: 0,
                        left: 0
                    };
                    return {
                        top: e.top + (t.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                        left: e.left + (t.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                    }
                },
                position: function() {
                    function e() {
                        for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position;) e = e.offsetParent;
                        return e || document
                    }
                    var t = this[0],
                        e = e.apply(t),
                        n = this.offset(),
                        r = /^(?:body|html)$/i.test(e.nodeName) ? {
                            top: 0,
                            left: 0
                        } : c(e).offset();
                    return n.top -= parseFloat(t.style.marginTop) || 0, n.left -= parseFloat(t.style.marginLeft) || 0, e.style && (r.top += parseFloat(e.style.borderTopWidth) || 0, r.left += parseFloat(e.style.borderLeftWidth) || 0), {
                        top: n.top - r.top,
                        left: n.left - r.left
                    }
                }
            };
            var o = {};
            c.expando = "velocity" + (new Date).getTime(), c.uuid = 0;
            for (var n = {}, r = n.hasOwnProperty, i = n.toString, e = "Boolean Number String Function Array Date RegExp Object Error".split(" "), a = 0; a < e.length; a++) n["[object " + e[a] + "]"] = e[a].toLowerCase();
            c.fn.init.prototype = c.fn, t.Velocity = {
                Utilities: c
            }
        }

        function u(e) {
            var t = e.length,
                n = c.type(e);
            return "function" !== n && !c.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e))
        }
    }(window),
    function(e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e()
    }(function() {
        return function(e, q, I, H) {
            var r, f = function() {
                    if (I.documentMode) return I.documentMode;
                    for (var e = 7; 4 < e; e--) {
                        var t = I.createElement("div");
                        if (t.innerHTML = "\x3c!--[if IE " + e + "]><span></span><![endif]--\x3e", t.getElementsByTagName("span").length) return t = null, e
                    }
                    return H
                }(),
                t = (r = 0, q.webkitRequestAnimationFrame || q.mozRequestAnimationFrame || function(e) {
                    var t, n = (new Date).getTime();
                    return t = Math.max(0, 16 - (n - r)), r = n + t, setTimeout(function() {
                        e(n + t)
                    }, t)
                });

            function d(e) {
                return M.isWrapped(e) ? e = [].slice.call(e) : M.isNode(e) && (e = [e]), e
            }
            var z, M = {
                    isString: function(e) {
                        return "string" == typeof e
                    },
                    isArray: Array.isArray || function(e) {
                        return "[object Array]" === Object.prototype.toString.call(e)
                    },
                    isFunction: function(e) {
                        return "[object Function]" === Object.prototype.toString.call(e)
                    },
                    isNode: function(e) {
                        return e && e.nodeType
                    },
                    isNodeList: function(e) {
                        return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== H && (0 === e.length || "object" == typeof e[0] && 0 < e[0].nodeType)
                    },
                    isWrapped: function(e) {
                        return e && (e.jquery || q.Zepto && q.Zepto.zepto.isZ(e))
                    },
                    isSVG: function(e) {
                        return q.SVGElement && e instanceof q.SVGElement
                    },
                    isEmptyObject: function(e) {
                        for (var t in e) return !1;
                        return !0
                    }
                },
                n = !1;
            if (e.fn && e.fn.jquery ? (z = e, n = !0) : z = q.Velocity.Utilities, f <= 8 && !n) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
            if (!(f <= 7)) {
                var i = "swing",
                    V = {
                        State: {
                            isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                            isAndroid: /Android/i.test(navigator.userAgent),
                            isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                            isChrome: q.chrome,
                            isFirefox: /Firefox/i.test(navigator.userAgent),
                            prefixElement: I.createElement("div"),
                            prefixMatches: {},
                            scrollAnchor: null,
                            scrollPropertyLeft: null,
                            scrollPropertyTop: null,
                            isTicking: !1,
                            calls: []
                        },
                        CSS: {},
                        Utilities: z,
                        Redirects: {},
                        Easings: {},
                        Promise: q.Promise,
                        defaults: {
                            queue: "",
                            duration: 400,
                            easing: i,
                            begin: H,
                            complete: H,
                            progress: H,
                            display: H,
                            visibility: H,
                            loop: !1,
                            delay: !1,
                            mobileHA: !0,
                            _cacheValues: !0
                        },
                        init: function(e) {
                            z.data(e, "velocity", {
                                isSVG: M.isSVG(e),
                                isAnimating: !1,
                                computedStyle: null,
                                tweensContainer: null,
                                rootPropertyValueCache: {},
                                transformCache: {}
                            })
                        },
                        hook: null,
                        mock: !1,
                        version: {
                            major: 1,
                            minor: 2,
                            patch: 2
                        },
                        debug: !1
                    };
                q.pageYOffset !== H ? (V.State.scrollAnchor = q, V.State.scrollPropertyLeft = "pageXOffset", V.State.scrollPropertyTop = "pageYOffset") : (V.State.scrollAnchor = I.documentElement || I.body.parentNode || I.body, V.State.scrollPropertyLeft = "scrollLeft", V.State.scrollPropertyTop = "scrollTop");
                var o = function e(t, n, r) {
                    var i, o, a, u, s, l, c, f, p, h, d, g = {
                            x: -1,
                            v: 0,
                            tension: null,
                            friction: null
                        },
                        v = [0],
                        y = 0;
                    for (t = parseFloat(t) || 500, n = parseFloat(n) || 20, r = r || null, g.tension = t, g.friction = n, o = (i = null !== r) ? (y = e(t, n)) / r * .016 : .016; s = o, l = {
                            dx: (u = a || g).v,
                            dv: m(u)
                        }, c = b(u, .5 * s, l), f = b(u, .5 * s, c), p = b(u, s, f), h = 1 / 6 * (l.dx + 2 * (c.dx + f.dx) + p.dx), d = 1 / 6 * (l.dv + 2 * (c.dv + f.dv) + p.dv), u.x = u.x + h * s, u.v = u.v + d * s, a = u, v.push(1 + a.x), y += 16, 1e-4 < Math.abs(a.x) && 1e-4 < Math.abs(a.v););
                    return i ? function(e) {
                        return v[e * (v.length - 1) | 0]
                    } : y
                };
                V.Easings = {
                    linear: function(e) {
                        return e
                    },
                    swing: function(e) {
                        return .5 - Math.cos(e * Math.PI) / 2
                    },
                    spring: function(e) {
                        return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
                    }
                }, z.each([
                    ["ease", [.25, .1, .25, 1]],
                    ["ease-in", [.42, 0, 1, 1]],
                    ["ease-out", [0, 0, .58, 1]],
                    ["ease-in-out", [.42, 0, .58, 1]],
                    ["easeInSine", [.47, 0, .745, .715]],
                    ["easeOutSine", [.39, .575, .565, 1]],
                    ["easeInOutSine", [.445, .05, .55, .95]],
                    ["easeInQuad", [.55, .085, .68, .53]],
                    ["easeOutQuad", [.25, .46, .45, .94]],
                    ["easeInOutQuad", [.455, .03, .515, .955]],
                    ["easeInCubic", [.55, .055, .675, .19]],
                    ["easeOutCubic", [.215, .61, .355, 1]],
                    ["easeInOutCubic", [.645, .045, .355, 1]],
                    ["easeInQuart", [.895, .03, .685, .22]],
                    ["easeOutQuart", [.165, .84, .44, 1]],
                    ["easeInOutQuart", [.77, 0, .175, 1]],
                    ["easeInQuint", [.755, .05, .855, .06]],
                    ["easeOutQuint", [.23, 1, .32, 1]],
                    ["easeInOutQuint", [.86, 0, .07, 1]],
                    ["easeInExpo", [.95, .05, .795, .035]],
                    ["easeOutExpo", [.19, 1, .22, 1]],
                    ["easeInOutExpo", [1, 0, 0, 1]],
                    ["easeInCirc", [.6, .04, .98, .335]],
                    ["easeOutCirc", [.075, .82, .165, 1]],
                    ["easeInOutCirc", [.785, .135, .15, .86]]
                ], function(e, t) {
                    V.Easings[t[0]] = a.apply(null, t[1])
                });
                var $ = V.CSS = {
                    RegEx: {
                        isHex: /^#([A-f\d]{3}){1,2}$/i,
                        valueUnwrap: /^[A-z]+\((.*)\)$/i,
                        wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                        valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
                    },
                    Lists: {
                        colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                        transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                        transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
                    },
                    Hooks: {
                        templates: {
                            textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                            boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                            clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                            backgroundPosition: ["X Y", "0% 0%"],
                            transformOrigin: ["X Y Z", "50% 50% 0px"],
                            perspectiveOrigin: ["X Y", "50% 50%"]
                        },
                        registered: {},
                        register: function() {
                            for (var e = 0; e < $.Lists.colors.length; e++) {
                                var t = "color" === $.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";
                                $.Hooks.templates[$.Lists.colors[e]] = ["Red Green Blue Alpha", t]
                            }
                            var n, r, i;
                            if (f)
                                for (n in $.Hooks.templates) {
                                    i = (r = $.Hooks.templates[n])[0].split(" ");
                                    var o = r[1].match($.RegEx.valueSplit);
                                    "Color" === i[0] && (i.push(i.shift()), o.push(o.shift()), $.Hooks.templates[n] = [i.join(" "), o.join(" ")])
                                }
                            for (n in $.Hooks.templates)
                                for (var e in i = (r = $.Hooks.templates[n])[0].split(" ")) {
                                    var a = n + i[e],
                                        u = e;
                                    $.Hooks.registered[a] = [n, u]
                                }
                        },
                        getRoot: function(e) {
                            var t = $.Hooks.registered[e];
                            return t ? t[0] : e
                        },
                        cleanRootPropertyValue: function(e, t) {
                            return $.RegEx.valueUnwrap.test(t) && (t = t.match($.RegEx.valueUnwrap)[1]), $.Values.isCSSNullValue(t) && (t = $.Hooks.templates[e][1]), t
                        },
                        extractValue: function(e, t) {
                            var n = $.Hooks.registered[e];
                            if (n) {
                                var r = n[0],
                                    i = n[1];
                                return (t = $.Hooks.cleanRootPropertyValue(r, t)).toString().match($.RegEx.valueSplit)[i]
                            }
                            return t
                        },
                        injectValue: function(e, t, n) {
                            var r = $.Hooks.registered[e];
                            if (r) {
                                var i, o = r[0],
                                    a = r[1];
                                return (i = (n = $.Hooks.cleanRootPropertyValue(o, n)).toString().match($.RegEx.valueSplit))[a] = t, i.join(" ")
                            }
                            return n
                        }
                    },
                    Normalizations: {
                        registered: {
                            clip: function(e, t, n) {
                                switch (e) {
                                    case "name":
                                        return "clip";
                                    case "extract":
                                        var r;
                                        return r = !$.RegEx.wrappedValueAlreadyExtracted.test(n) && (r = n.toString().match($.RegEx.valueUnwrap)) ? r[1].replace(/,(\s+)?/g, " ") : n;
                                    case "inject":
                                        return "rect(" + n + ")"
                                }
                            },
                            blur: function(e, t, n) {
                                switch (e) {
                                    case "name":
                                        return V.State.isFirefox ? "filter" : "-webkit-filter";
                                    case "extract":
                                        var r = parseFloat(n);
                                        if (!r && 0 !== r) {
                                            var i = n.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                            r = i ? i[1] : 0
                                        }
                                        return r;
                                    case "inject":
                                        return parseFloat(n) ? "blur(" + n + ")" : "none"
                                }
                            },
                            opacity: function(e, t, n) {
                                if (f <= 8) switch (e) {
                                    case "name":
                                        return "filter";
                                    case "extract":
                                        var r = n.toString().match(/alpha\(opacity=(.*)\)/i);
                                        return n = r ? r[1] / 100 : 1;
                                    case "inject":
                                        return (t.style.zoom = 1) <= parseFloat(n) ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(n), 10) + ")"
                                } else switch (e) {
                                    case "name":
                                        return "opacity";
                                    case "extract":
                                    case "inject":
                                        return n
                                }
                            }
                        },
                        register: function() {
                            f <= 9 || V.State.isGingerbread || ($.Lists.transformsBase = $.Lists.transformsBase.concat($.Lists.transforms3D));
                            for (var e = 0; e < $.Lists.transformsBase.length; e++) ! function() {
                                var i = $.Lists.transformsBase[e];
                                $.Normalizations.registered[i] = function(e, t, n) {
                                    switch (e) {
                                        case "name":
                                            return "transform";
                                        case "extract":
                                            return W(t) === H || W(t).transformCache[i] === H ? /^scale/i.test(i) ? 1 : 0 : W(t).transformCache[i].replace(/[()]/g, "");
                                        case "inject":
                                            var r = !1;
                                            switch (i.substr(0, i.length - 1)) {
                                                case "translate":
                                                    r = !/(%|px|em|rem|vw|vh|\d)$/i.test(n);
                                                    break;
                                                case "scal":
                                                case "scale":
                                                    V.State.isAndroid && W(t).transformCache[i] === H && n < 1 && (n = 1), r = !/(\d)$/i.test(n);
                                                    break;
                                                case "skew":
                                                case "rotate":
                                                    r = !/(deg|\d)$/i.test(n)
                                            }
                                            return r || (W(t).transformCache[i] = "(" + n + ")"), W(t).transformCache[i]
                                    }
                                }
                            }();
                            for (e = 0; e < $.Lists.colors.length; e++) ! function() {
                                var a = $.Lists.colors[e];
                                $.Normalizations.registered[a] = function(e, t, n) {
                                    switch (e) {
                                        case "name":
                                            return a;
                                        case "extract":
                                            var r;
                                            if ($.RegEx.wrappedValueAlreadyExtracted.test(n)) r = n;
                                            else {
                                                var i, o = {
                                                    black: "rgb(0, 0, 0)",
                                                    blue: "rgb(0, 0, 255)",
                                                    gray: "rgb(128, 128, 128)",
                                                    green: "rgb(0, 128, 0)",
                                                    red: "rgb(255, 0, 0)",
                                                    white: "rgb(255, 255, 255)"
                                                };
                                                /^[A-z]+$/i.test(n) ? i = o[n] !== H ? o[n] : o.black : $.RegEx.isHex.test(n) ? i = "rgb(" + $.Values.hexToRgb(n).join(" ") + ")" : /^rgba?\(/i.test(n) || (i = o.black), r = (i || n).toString().match($.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                            }
                                            return f <= 8 || 3 !== r.split(" ").length || (r += " 1"), r;
                                        case "inject":
                                            return f <= 8 ? 4 === n.split(" ").length && (n = n.split(/\s+/).slice(0, 3).join(" ")) : 3 === n.split(" ").length && (n += " 1"), (f <= 8 ? "rgb" : "rgba") + "(" + n.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                                    }
                                }
                            }()
                        }
                    },
                    Names: {
                        camelCase: function(e) {
                            return e.replace(/-(\w)/g, function(e, t) {
                                return t.toUpperCase()
                            })
                        },
                        SVGAttribute: function(e) {
                            var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                            return (f || V.State.isAndroid && !V.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e)
                        },
                        prefixCheck: function(e) {
                            if (V.State.prefixMatches[e]) return [V.State.prefixMatches[e], !0];
                            for (var t = ["", "Webkit", "Moz", "ms", "O"], n = 0, r = t.length; n < r; n++) {
                                var i;
                                if (i = 0 === n ? e : t[n] + e.replace(/^\w/, function(e) {
                                        return e.toUpperCase()
                                    }), M.isString(V.State.prefixElement.style[i])) return [V.State.prefixMatches[e] = i, !0]
                            }
                            return [e, !1]
                        }
                    },
                    Values: {
                        hexToRgb: function(e) {
                            var t;
                            return e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, n, r) {
                                return t + t + n + n + r + r
                            }), (t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e)) ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0]
                        },
                        isCSSNullValue: function(e) {
                            return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
                        },
                        getUnitType: function(e) {
                            return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
                        },
                        getDisplayType: function(e) {
                            var t = e && e.tagName.toString().toLowerCase();
                            return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block"
                        },
                        addClass: function(e, t) {
                            e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t
                        },
                        removeClass: function(e, t) {
                            e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                        }
                    },
                    getPropertyValue: function(e, t, n, l) {
                        function c(e, t) {
                            var n = 0;
                            if (f <= 8) n = z.css(e, t);
                            else {
                                var r, i = !1;

                                function o() {
                                    i && $.setPropertyValue(e, "display", "none")
                                }
                                if (/^(width|height)$/.test(t) && 0 === $.getPropertyValue(e, "display") && (i = !0, $.setPropertyValue(e, "display", $.Values.getDisplayType(e))), !l) {
                                    if ("height" === t && "border-box" !== $.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                        var a = e.offsetHeight - (parseFloat($.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat($.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat($.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat($.getPropertyValue(e, "paddingBottom")) || 0);
                                        return o(), a
                                    }
                                    if ("width" === t && "border-box" !== $.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                        var u = e.offsetWidth - (parseFloat($.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat($.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat($.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat($.getPropertyValue(e, "paddingRight")) || 0);
                                        return o(), u
                                    }
                                }
                                r = W(e) === H ? q.getComputedStyle(e, null) : W(e).computedStyle ? W(e).computedStyle : W(e).computedStyle = q.getComputedStyle(e, null), "borderColor" === t && (t = "borderTopColor"), "" !== (n = 9 === f && "filter" === t ? r.getPropertyValue(t) : r[t]) && null !== n || (n = e.style[t]), o()
                            }
                            if ("auto" === n && /^(top|right|bottom|left)$/i.test(t)) {
                                var s = c(e, "position");
                                ("fixed" === s || "absolute" === s && /top|left/i.test(t)) && (n = z(e).position()[t] + "px")
                            }
                            return n
                        }
                        var r;
                        if ($.Hooks.registered[t]) {
                            var i = t,
                                o = $.Hooks.getRoot(i);
                            n === H && (n = $.getPropertyValue(e, $.Names.prefixCheck(o)[0])), $.Normalizations.registered[o] && (n = $.Normalizations.registered[o]("extract", e, n)), r = $.Hooks.extractValue(i, n)
                        } else if ($.Normalizations.registered[t]) {
                            var a, u;
                            "transform" !== (a = $.Normalizations.registered[t]("name", e)) && (u = c(e, $.Names.prefixCheck(a)[0]), $.Values.isCSSNullValue(u) && $.Hooks.templates[t] && (u = $.Hooks.templates[t][1])), r = $.Normalizations.registered[t]("extract", e, u)
                        }
                        if (!/^[\d-]/.test(r))
                            if (W(e) && W(e).isSVG && $.Names.SVGAttribute(t))
                                if (/^(height|width)$/i.test(t)) try {
                                    r = e.getBBox()[t]
                                } catch (e) {
                                    r = 0
                                } else r = e.getAttribute(t);
                                else r = c(e, $.Names.prefixCheck(t)[0]);
                        return $.Values.isCSSNullValue(r) && (r = 0), 2 <= V.debug && console.log("Get " + t + ": " + r), r
                    },
                    setPropertyValue: function(e, t, n, r, i) {
                        var o = t;
                        if ("scroll" === t) i.container ? i.container["scroll" + i.direction] = n : "Left" === i.direction ? q.scrollTo(n, i.alternateValue) : q.scrollTo(i.alternateValue, n);
                        else if ($.Normalizations.registered[t] && "transform" === $.Normalizations.registered[t]("name", e)) $.Normalizations.registered[t]("inject", e, n), o = "transform", n = W(e).transformCache[t];
                        else {
                            if ($.Hooks.registered[t]) {
                                var a = t,
                                    u = $.Hooks.getRoot(t);
                                r = r || $.getPropertyValue(e, u), n = $.Hooks.injectValue(a, n, r), t = u
                            }
                            if ($.Normalizations.registered[t] && (n = $.Normalizations.registered[t]("inject", e, n), t = $.Normalizations.registered[t]("name", e)), o = $.Names.prefixCheck(t)[0], f <= 8) try {
                                e.style[o] = n
                            } catch (e) {
                                V.debug && console.log("Browser does not support [" + n + "] for [" + o + "]")
                            } else W(e) && W(e).isSVG && $.Names.SVGAttribute(t) ? e.setAttribute(t, n) : e.style[o] = n;
                            2 <= V.debug && console.log("Set " + t + " (" + o + "): " + n)
                        }
                        return [o, n]
                    },
                    flushTransformCache: function(t) {
                        var n = "";
                        if ((f || V.State.isAndroid && !V.State.isChrome) && W(t).isSVG) {
                            function e(e) {
                                return parseFloat($.getPropertyValue(t, e))
                            }
                            var r = {
                                translate: [e("translateX"), e("translateY")],
                                skewX: [e("skewX")],
                                skewY: [e("skewY")],
                                scale: 1 !== e("scale") ? [e("scale"), e("scale")] : [e("scaleX"), e("scaleY")],
                                rotate: [e("rotateZ"), 0, 0]
                            };
                            z.each(W(t).transformCache, function(e) {
                                /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), r[e] && (n += e + "(" + r[e].join(" ") + ") ", delete r[e])
                            })
                        } else {
                            var i, o;
                            z.each(W(t).transformCache, function(e) {
                                if (i = W(t).transformCache[e], "transformPerspective" === e) return o = i, !0;
                                9 === f && "rotateZ" === e && (e = "rotate"), n += e + i + " "
                            }), o && (n = "perspective" + o + " " + n)
                        }
                        $.setPropertyValue(t, "transform", n)
                    }
                };
                $.Hooks.register(), $.Normalizations.register(), V.hook = function(e, r, i) {
                    var o = H;
                    return e = d(e), z.each(e, function(e, t) {
                        if (W(t) === H && V.init(t), i === H) o === H && (o = V.CSS.getPropertyValue(t, r));
                        else {
                            var n = V.CSS.setPropertyValue(t, r, i);
                            "transform" === n[0] && V.CSS.flushTransformCache(t), o = n
                        }
                    }), o
                };
                var g = function() {
                    function e() {
                        return t ? D.promise || null : n
                    }
                    var t, n, r, A, j, N, i = arguments[0] && (arguments[0].p || z.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || M.isString(arguments[0].properties));
                    if (M.isWrapped(this) ? (t = !1, r = 0, n = A = this) : (t = !0, r = 1, A = i ? arguments[0].elements || arguments[0].e : arguments[0]), A = d(A)) {
                        N = i ? (j = arguments[0].properties || arguments[0].p, arguments[0].options || arguments[0].o) : (j = arguments[r], arguments[r + 1]);
                        var P = A.length,
                            L = 0;
                        if (!/^(stop|finish|finishAll)$/i.test(j) && !z.isPlainObject(N)) {
                            N = {};
                            for (var o = r + 1; o < arguments.length; o++) M.isArray(arguments[o]) || !/^(fast|normal|slow)$/i.test(arguments[o]) && !/^\d/.test(arguments[o]) ? M.isString(arguments[o]) || M.isArray(arguments[o]) ? N.easing = arguments[o] : M.isFunction(arguments[o]) && (N.complete = arguments[o]) : N.duration = arguments[o]
                        }
                        var F, D = {
                            promise: null,
                            resolver: null,
                            rejecter: null
                        };
                        switch (t && V.Promise && (D.promise = new V.Promise(function(e, t) {
                            D.resolver = e, D.rejecter = t
                        })), j) {
                            case "scroll":
                                F = "scroll";
                                break;
                            case "reverse":
                                F = "reverse";
                                break;
                            case "finish":
                            case "finishAll":
                            case "stop":
                                z.each(A, function(e, t) {
                                    W(t) && W(t).delayTimer && (clearTimeout(W(t).delayTimer.setTimeout), W(t).delayTimer.next && W(t).delayTimer.next(), delete W(t).delayTimer), "finishAll" !== j || !0 !== N && !M.isString(N) || (z.each(z.queue(t, M.isString(N) ? N : ""), function(e, t) {
                                        M.isFunction(t) && t()
                                    }), z.queue(t, M.isString(N) ? N : "", []))
                                });
                                var a = [];
                                return z.each(V.State.calls, function(i, o) {
                                    o && z.each(o[1], function(e, n) {
                                        var r = N === H ? "" : N;
                                        if (!0 !== r && o[2].queue !== r && (N !== H || !1 !== o[2].queue)) return !0;
                                        z.each(A, function(e, t) {
                                            t === n && (!0 !== N && !M.isString(N) || (z.each(z.queue(t, M.isString(N) ? N : ""), function(e, t) {
                                                M.isFunction(t) && t(null, !0)
                                            }), z.queue(t, M.isString(N) ? N : "", [])), "stop" === j ? (W(t) && W(t).tweensContainer && !1 !== r && z.each(W(t).tweensContainer, function(e, t) {
                                                t.endValue = t.currentValue
                                            }), a.push(i)) : "finish" !== j && "finishAll" !== j || (o[2].duration = 1))
                                        })
                                    })
                                }), "stop" === j && (z.each(a, function(e, t) {
                                    C(t, !0)
                                }), D.promise && D.resolver(A)), e();
                            default:
                                if (!z.isPlainObject(j) || M.isEmptyObject(j)) {
                                    if (M.isString(j) && V.Redirects[j]) {
                                        var u = (c = z.extend({}, N)).duration,
                                            s = c.delay || 0;
                                        return !0 === c.backwards && (A = z.extend(!0, [], A).reverse()), z.each(A, function(e, t) {
                                            parseFloat(c.stagger) ? c.delay = s + parseFloat(c.stagger) * e : M.isFunction(c.stagger) && (c.delay = s + c.stagger.call(t, e, P)), c.drag && (c.duration = parseFloat(u) || (/^(callout|transition)/.test(j) ? 1e3 : 400), c.duration = Math.max(c.duration * (c.backwards ? 1 - e / P : (e + 1) / P), .75 * c.duration, 200)), V.Redirects[j].call(t, t, c || {}, e, P, A, D.promise ? D : H)
                                        }), e()
                                    }
                                    var l = "Velocity: First argument (" + j + ") was not a property map, a known action, or a registered redirect. Aborting.";
                                    return D.promise ? D.rejecter(new Error(l)) : console.log(l), e()
                                }
                                F = "start"
                        }
                        var c, f, O = {
                                lastParent: null,
                                lastPosition: null,
                                lastFontSize: null,
                                lastPercentToPxWidth: null,
                                lastPercentToPxHeight: null,
                                lastEmToPx: null,
                                remToPx: null,
                                vwToPx: null,
                                vhToPx: null
                            },
                            R = [];
                        if (z.each(A, function(e, t) {
                                M.isNode(t) && function() {
                                    var T, C = this,
                                        k = z.extend({}, V.defaults, N),
                                        E = {};
                                    switch (W(C) === H && V.init(C), parseFloat(k.delay) && !1 !== k.queue && z.queue(C, k.queue, function(e) {
                                        V.velocityQueueEntryFlag = !0, W(C).delayTimer = {
                                            setTimeout: setTimeout(e, parseFloat(k.delay)),
                                            next: e
                                        }
                                    }), k.duration.toString().toLowerCase()) {
                                        case "fast":
                                            k.duration = 200;
                                            break;
                                        case "normal":
                                            k.duration = 400;
                                            break;
                                        case "slow":
                                            k.duration = 600;
                                            break;
                                        default:
                                            k.duration = parseFloat(k.duration) || 1
                                    }

                                    function n(e) {
                                        if (k.begin && 0 === L) try {
                                            k.begin.call(A, A)
                                        } catch (e) {
                                            setTimeout(function() {
                                                throw e
                                            }, 1)
                                        }
                                        if ("scroll" === F) {
                                            var t, n, r, i = /^x$/i.test(k.axis) ? "Left" : "Top",
                                                o = parseFloat(k.offset) || 0;
                                            k.container ? M.isWrapped(k.container) || M.isNode(k.container) ? (k.container = k.container[0] || k.container, r = (t = k.container["scroll" + i]) + z(C).position()[i.toLowerCase()] + o) : k.container = null : (t = V.State.scrollAnchor[V.State["scrollProperty" + i]], n = V.State.scrollAnchor[V.State["scrollProperty" + ("Left" === i ? "Top" : "Left")]], r = z(C).offset()[i.toLowerCase()] + o), E = {
                                                scroll: {
                                                    rootPropertyValue: !1,
                                                    startValue: t,
                                                    currentValue: t,
                                                    endValue: r,
                                                    unitType: "",
                                                    easing: k.easing,
                                                    scrollData: {
                                                        container: k.container,
                                                        direction: i,
                                                        alternateValue: n
                                                    }
                                                },
                                                element: C
                                            }, V.debug && console.log("tweensContainer (scroll): ", E.scroll, C)
                                        } else if ("reverse" === F) {
                                            if (!W(C).tweensContainer) return void z.dequeue(C, k.queue);
                                            "none" === W(C).opts.display && (W(C).opts.display = "auto"), "hidden" === W(C).opts.visibility && (W(C).opts.visibility = "visible"), W(C).opts.loop = !1, W(C).opts.begin = null, W(C).opts.complete = null, N.easing || delete k.easing, N.duration || delete k.duration, k = z.extend({}, W(C).opts, k);
                                            var a = z.extend(!0, {}, W(C).tweensContainer);
                                            for (var u in a)
                                                if ("element" !== u) {
                                                    var s = a[u].startValue;
                                                    a[u].startValue = a[u].currentValue = a[u].endValue, a[u].endValue = s, M.isEmptyObject(N) || (a[u].easing = k.easing), V.debug && console.log("reverse tweensContainer (" + u + "): " + JSON.stringify(a[u]), C)
                                                } E = a
                                        } else if ("start" === F) {
                                            function f(e, t) {
                                                var n = H,
                                                    r = H,
                                                    i = H;
                                                return M.isArray(e) ? (n = e[0], !M.isArray(e[1]) && /^[\d-]/.test(e[1]) || M.isFunction(e[1]) || $.RegEx.isHex.test(e[1]) ? i = e[1] : (M.isString(e[1]) && !$.RegEx.isHex.test(e[1]) || M.isArray(e[1])) && (r = t ? e[1] : B(e[1], k.duration), e[2] !== H && (i = e[2]))) : n = e, t || (r = r || k.easing), M.isFunction(n) && (n = n.call(C, L, P)), M.isFunction(i) && (i = i.call(C, L, P)), [n || 0, r, i]
                                            }
                                            for (var l in W(C).tweensContainer && !0 === W(C).isAnimating && (a = W(C).tweensContainer), z.each(j, function(e, t) {
                                                    if (RegExp("^" + $.Lists.colors.join("$|^") + "$").test(e)) {
                                                        var n = f(t, !0),
                                                            r = n[0],
                                                            i = n[1],
                                                            o = n[2];
                                                        if ($.RegEx.isHex.test(r)) {
                                                            for (var a = ["Red", "Green", "Blue"], u = $.Values.hexToRgb(r), s = o ? $.Values.hexToRgb(o) : H, l = 0; l < a.length; l++) {
                                                                var c = [u[l]];
                                                                i && c.push(i), s !== H && c.push(s[l]), j[e + a[l]] = c
                                                            }
                                                            delete j[e]
                                                        }
                                                    }
                                                }), j) {
                                                var c = f(j[l]),
                                                    p = c[0],
                                                    h = c[1],
                                                    d = c[2];
                                                l = $.Names.camelCase(l);
                                                var g = $.Hooks.getRoot(l),
                                                    v = !1;
                                                if (W(C).isSVG || "tween" === g || !1 !== $.Names.prefixCheck(g)[1] || $.Normalizations.registered[g] !== H) {
                                                    (k.display !== H && null !== k.display && "none" !== k.display || k.visibility !== H && "hidden" !== k.visibility) && /opacity|filter/.test(l) && !d && 0 !== p && (d = 0), k._cacheValues && a && a[l] ? (d === H && (d = a[l].endValue + a[l].unitType), v = W(C).rootPropertyValueCache[g]) : $.Hooks.registered[l] ? d === H ? (v = $.getPropertyValue(C, g), d = $.getPropertyValue(C, l, v)) : v = $.Hooks.templates[g][1] : d === H && (d = $.getPropertyValue(C, l));
                                                    var y, m, b, x = !1;
                                                    if (d = (y = w(l, d))[0], b = y[1], p = (y = w(l, p))[0].replace(/^([+-\/*])=/, function(e, t) {
                                                            return x = t, ""
                                                        }), m = y[1], d = parseFloat(d) || 0, p = parseFloat(p) || 0, "%" === m && (/^(fontSize|lineHeight)$/.test(l) ? (p /= 100, m = "em") : /^scale/.test(l) ? (p /= 100, m = "") : /(Red|Green|Blue)$/i.test(l) && (p = p / 100 * 255, m = "")), /[\/*]/.test(x)) m = b;
                                                    else if (b !== m && 0 !== d)
                                                        if (0 === p) m = b;
                                                        else {
                                                            T = T || S();
                                                            var _ = /margin|padding|left|right|width|text|word|letter/i.test(l) || /X$/.test(l) || "x" === l ? "x" : "y";
                                                            switch (b) {
                                                                case "%":
                                                                    d *= "x" == _ ? T.percentToPxWidth : T.percentToPxHeight;
                                                                    break;
                                                                case "px":
                                                                    break;
                                                                default:
                                                                    d *= T[b + "ToPx"]
                                                            }
                                                            switch (m) {
                                                                case "%":
                                                                    d *= 1 / ("x" == _ ? T.percentToPxWidth : T.percentToPxHeight);
                                                                    break;
                                                                case "px":
                                                                    break;
                                                                default:
                                                                    d *= 1 / T[m + "ToPx"]
                                                            }
                                                        } switch (x) {
                                                        case "+":
                                                            p = d + p;
                                                            break;
                                                        case "-":
                                                            p = d - p;
                                                            break;
                                                        case "*":
                                                            p *= d;
                                                            break;
                                                        case "/":
                                                            p = d / p
                                                    }
                                                    E[l] = {
                                                        rootPropertyValue: v,
                                                        startValue: d,
                                                        currentValue: d,
                                                        endValue: p,
                                                        unitType: m,
                                                        easing: h
                                                    }, V.debug && console.log("tweensContainer (" + l + "): " + JSON.stringify(E[l]), C)
                                                } else V.debug && console.log("Skipping [" + g + "] due to a lack of browser support.");

                                                function w(e, t) {
                                                    var n;
                                                    return [(t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(e) {
                                                        return n = e, ""
                                                    }), n = n || $.Values.getUnitType(e)]
                                                }

                                                function S() {
                                                    var e = {
                                                            myParent: C.parentNode || I.body,
                                                            position: $.getPropertyValue(C, "position"),
                                                            fontSize: $.getPropertyValue(C, "fontSize")
                                                        },
                                                        t = e.position === O.lastPosition && e.myParent === O.lastParent,
                                                        n = e.fontSize === O.lastFontSize;
                                                    O.lastParent = e.myParent, O.lastPosition = e.position, O.lastFontSize = e.fontSize;
                                                    var r = {};
                                                    if (n && t) r.emToPx = O.lastEmToPx, r.percentToPxWidth = O.lastPercentToPxWidth, r.percentToPxHeight = O.lastPercentToPxHeight;
                                                    else {
                                                        var i = W(C).isSVG ? I.createElementNS("http://www.w3.org/2000/svg", "rect") : I.createElement("div");
                                                        V.init(i), e.myParent.appendChild(i), z.each(["overflow", "overflowX", "overflowY"], function(e, t) {
                                                            V.CSS.setPropertyValue(i, t, "hidden")
                                                        }), V.CSS.setPropertyValue(i, "position", e.position), V.CSS.setPropertyValue(i, "fontSize", e.fontSize), V.CSS.setPropertyValue(i, "boxSizing", "content-box"), z.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(e, t) {
                                                            V.CSS.setPropertyValue(i, t, "100%")
                                                        }), V.CSS.setPropertyValue(i, "paddingLeft", "100em"), r.percentToPxWidth = O.lastPercentToPxWidth = (parseFloat($.getPropertyValue(i, "width", null, !0)) || 1) / 100, r.percentToPxHeight = O.lastPercentToPxHeight = (parseFloat($.getPropertyValue(i, "height", null, !0)) || 1) / 100, r.emToPx = O.lastEmToPx = (parseFloat($.getPropertyValue(i, "paddingLeft")) || 1) / 100, e.myParent.removeChild(i)
                                                    }
                                                    return null === O.remToPx && (O.remToPx = parseFloat($.getPropertyValue(I.body, "fontSize")) || 16), null === O.vwToPx && (O.vwToPx = parseFloat(q.innerWidth) / 100, O.vhToPx = parseFloat(q.innerHeight) / 100), r.remToPx = O.remToPx, r.vwToPx = O.vwToPx, r.vhToPx = O.vhToPx, 1 <= V.debug && console.log("Unit ratios: " + JSON.stringify(r), C), r
                                                }
                                            }
                                            E.element = C
                                        }
                                        E.element && ($.Values.addClass(C, "velocity-animating"), R.push(E), "" === k.queue && (W(C).tweensContainer = E, W(C).opts = k), W(C).isAnimating = !0, L === P - 1 ? (V.State.calls.push([R, A, k, null, D.resolver]), !1 === V.State.isTicking && (V.State.isTicking = !0, U())) : L++)
                                    }!1 !== V.mock && (!0 === V.mock ? k.duration = k.delay = 1 : (k.duration *= parseFloat(V.mock) || 1, k.delay *= parseFloat(V.mock) || 1)), k.easing = B(k.easing, k.duration), k.begin && !M.isFunction(k.begin) && (k.begin = null), k.progress && !M.isFunction(k.progress) && (k.progress = null), k.complete && !M.isFunction(k.complete) && (k.complete = null), k.display !== H && null !== k.display && (k.display = k.display.toString().toLowerCase(), "auto" === k.display && (k.display = V.CSS.Values.getDisplayType(C))), k.visibility !== H && null !== k.visibility && (k.visibility = k.visibility.toString().toLowerCase()), k.mobileHA = k.mobileHA && V.State.isMobile && !V.State.isGingerbread, !1 === k.queue ? k.delay ? setTimeout(n, k.delay) : n() : z.queue(C, k.queue, function(e, t) {
                                        if (!0 === t) return D.promise && D.resolver(A), !0;
                                        V.velocityQueueEntryFlag = !0, n()
                                    }), "" !== k.queue && "fx" !== k.queue || "inprogress" === z.queue(C)[0] || z.dequeue(C)
                                }.call(t)
                            }), (c = z.extend({}, V.defaults, N)).loop = parseInt(c.loop), f = 2 * c.loop - 1, c.loop)
                            for (var p = 0; p < f; p++) {
                                var h = {
                                    delay: c.delay,
                                    progress: c.progress
                                };
                                p === f - 1 && (h.display = c.display, h.visibility = c.visibility, h.complete = c.complete), g(A, "reverse", h)
                            }
                        return e()
                    }
                };
                (V = z.extend(g, V)).animate = g;
                var T = q.requestAnimationFrame || t;
                return V.State.isMobile || I.hidden === H || I.addEventListener("visibilitychange", function() {
                    I.hidden ? (T = function(e) {
                        return setTimeout(function() {
                            e(!0)
                        }, 16)
                    }, U()) : T = q.requestAnimationFrame || t
                }), e.Velocity = V, e !== q && (e.fn.velocity = g, e.fn.velocity.defaults = V.defaults), z.each(["Down", "Up"], function(e, f) {
                    V.Redirects["slide" + f] = function(n, e, t, r, i, o) {
                        var a = z.extend({}, e),
                            u = a.begin,
                            s = a.complete,
                            l = {
                                height: "",
                                marginTop: "",
                                marginBottom: "",
                                paddingTop: "",
                                paddingBottom: ""
                            },
                            c = {};
                        a.display === H && (a.display = "Down" === f ? "inline" === V.CSS.Values.getDisplayType(n) ? "inline-block" : "block" : "none"), a.begin = function() {
                            for (var e in u && u.call(i, i), l) {
                                c[e] = n.style[e];
                                var t = V.CSS.getPropertyValue(n, e);
                                l[e] = "Down" === f ? [t, 0] : [0, t]
                            }
                            c.overflow = n.style.overflow, n.style.overflow = "hidden"
                        }, a.complete = function() {
                            for (var e in c) n.style[e] = c[e];
                            s && s.call(i, i), o && o.resolver(i)
                        }, V(n, l, a)
                    }
                }), z.each(["In", "Out"], function(e, l) {
                    V.Redirects["fade" + l] = function(e, t, n, r, i, o) {
                        var a = z.extend({}, t),
                            u = {
                                opacity: "In" === l ? 1 : 0
                            },
                            s = a.complete;
                        a.complete = n !== r - 1 ? a.begin = null : function() {
                            s && s.call(i, i), o && o.resolver(i)
                        }, a.display === H && (a.display = "In" === l ? "auto" : "none"), V(this, u, a)
                    }
                }), V
            }

            function W(e) {
                var t = z.data(e, "velocity");
                return null === t ? H : t
            }

            function a(a, t, u, n) {
                var s = 4,
                    l = 1e-7,
                    c = 10,
                    f = 11,
                    p = 1 / (f - 1),
                    e = "Float32Array" in q;
                if (4 !== arguments.length) return !1;
                for (var r = 0; r < 4; ++r)
                    if ("number" != typeof arguments[r] || isNaN(arguments[r]) || !isFinite(arguments[r])) return !1;
                a = Math.min(a, 1), u = Math.min(u, 1), a = Math.max(a, 0), u = Math.max(u, 0);
                var h = new(e ? Float32Array : Array)(f);

                function i(e, t) {
                    return 1 - 3 * t + 3 * e
                }

                function o(e, t) {
                    return 3 * t - 6 * e
                }

                function d(e) {
                    return 3 * e
                }

                function g(e, t, n) {
                    return ((i(t, n) * e + o(t, n)) * e + d(t)) * e
                }

                function v(e, t, n) {
                    return 3 * i(t, n) * e * e + 2 * o(t, n) * e + d(t)
                }

                function y(e) {
                    for (var t = 0, n = 1, r = f - 1; n != r && h[n] <= e; ++n) t += p;
                    var i = t + (e - h[--n]) / (h[n + 1] - h[n]) * p,
                        o = v(i, a, u);
                    return .001 <= o ? function(e, t) {
                        for (var n = 0; n < s; ++n) {
                            var r = v(t, a, u);
                            if (0 === r) return t;
                            t -= (g(t, a, u) - e) / r
                        }
                        return t
                    }(e, i) : 0 == o ? i : function(e, t, n) {
                        for (var r, i, o = 0; 0 < (r = g(i = t + (n - t) / 2, a, u) - e) ? n = i : t = i, Math.abs(r) > l && ++o < c;);
                        return i
                    }(e, t, t + p)
                }
                var m = !1;

                function b() {
                    m = !0, a == t && u == n || function() {
                        for (var e = 0; e < f; ++e) h[e] = g(e * p, a, u)
                    }()
                }

                function x(e) {
                    return m || b(), a === t && u === n ? e : 0 === e ? 0 : 1 === e ? 1 : g(y(e), t, n)
                }
                x.getControlPoints = function() {
                    return [{
                        x: a,
                        y: t
                    }, {
                        x: u,
                        y: n
                    }]
                };
                var _ = "generateBezier(" + [a, t, u, n] + ")";
                return x.toString = function() {
                    return _
                }, x
            }

            function m(e) {
                return -e.tension * e.x - e.friction * e.v
            }

            function b(e, t, n) {
                var r = {
                    x: e.x + n.dx * t,
                    v: e.v + n.dv * t,
                    tension: e.tension,
                    friction: e.friction
                };
                return {
                    dx: r.v,
                    dv: m(r)
                }
            }

            function B(e, t) {
                var n = e;
                return M.isString(e) ? V.Easings[e] || (n = !1) : n = M.isArray(e) && 1 === e.length ? function(t) {
                    return function(e) {
                        return Math.round(e * t) * (1 / t)
                    }
                }.apply(null, e) : M.isArray(e) && 2 === e.length ? o.apply(null, e.concat([t])) : !(!M.isArray(e) || 4 !== e.length) && a.apply(null, e), !1 === n && (n = V.Easings[V.defaults.easing] ? V.defaults.easing : i), n
            }

            function U(e) {
                if (e) {
                    var t = (new Date).getTime(),
                        n = V.State.calls.length;
                    1e4 < n && (V.State.calls = function(e) {
                        for (var t = -1, n = e ? e.length : 0, r = []; ++t < n;) {
                            var i = e[t];
                            i && r.push(i)
                        }
                        return r
                    }(V.State.calls));
                    for (var r = 0; r < n; r++)
                        if (V.State.calls[r]) {
                            var i = V.State.calls[r],
                                o = i[0],
                                a = i[2],
                                u = i[3],
                                s = !!u,
                                l = null;
                            u = u || (V.State.calls[r][3] = t - 16);
                            for (var c = Math.min((t - u) / a.duration, 1), f = 0, p = o.length; f < p; f++) {
                                var h = o[f],
                                    d = h.element;
                                if (W(d)) {
                                    var g = !1;
                                    if (a.display !== H && null !== a.display && "none" !== a.display) {
                                        if ("flex" === a.display) {
                                            z.each(["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"], function(e, t) {
                                                $.setPropertyValue(d, "display", t)
                                            })
                                        }
                                        $.setPropertyValue(d, "display", a.display)
                                    }
                                    for (var v in a.visibility !== H && "hidden" !== a.visibility && $.setPropertyValue(d, "visibility", a.visibility), h)
                                        if ("element" !== v) {
                                            var y, m = h[v],
                                                b = M.isString(m.easing) ? V.Easings[m.easing] : m.easing;
                                            if (1 === c) y = m.endValue;
                                            else {
                                                var x = m.endValue - m.startValue;
                                                if (y = m.startValue + x * b(c, a, x), !s && y === m.currentValue) continue
                                            }
                                            if (m.currentValue = y, "tween" === v) l = y;
                                            else {
                                                if ($.Hooks.registered[v]) {
                                                    var _ = $.Hooks.getRoot(v),
                                                        w = W(d).rootPropertyValueCache[_];
                                                    w && (m.rootPropertyValue = w)
                                                }
                                                var S = $.setPropertyValue(d, v, m.currentValue + (0 === parseFloat(y) ? "" : m.unitType), m.rootPropertyValue, m.scrollData);
                                                $.Hooks.registered[v] && ($.Normalizations.registered[_] ? W(d).rootPropertyValueCache[_] = $.Normalizations.registered[_]("extract", null, S[1]) : W(d).rootPropertyValueCache[_] = S[1]), "transform" === S[0] && (g = !0)
                                            }
                                        } a.mobileHA && W(d).transformCache.translate3d === H && (W(d).transformCache.translate3d = "(0px, 0px, 0px)", g = !0), g && $.flushTransformCache(d)
                                }
                            }
                            a.display !== H && "none" !== a.display && (V.State.calls[r][2].display = !1), a.visibility !== H && "hidden" !== a.visibility && (V.State.calls[r][2].visibility = !1), a.progress && a.progress.call(i[1], i[1], c, Math.max(0, u + a.duration - t), u, l), 1 === c && C(r)
                        }
                }
                V.State.isTicking && T(U)
            }

            function C(e, t) {
                if (V.State.calls[e]) {
                    for (var n = V.State.calls[e][0], r = V.State.calls[e][1], i = V.State.calls[e][2], o = V.State.calls[e][4], a = !1, u = 0, s = n.length; u < s; u++) {
                        var l = n[u].element;
                        if (t || i.loop || ("none" === i.display && $.setPropertyValue(l, "display", i.display), "hidden" === i.visibility && $.setPropertyValue(l, "visibility", i.visibility)), !0 !== i.loop && (z.queue(l)[1] === H || !/\.velocityQueueEntryFlag/i.test(z.queue(l)[1])) && W(l)) {
                            W(l).isAnimating = !1;
                            var c = !(W(l).rootPropertyValueCache = {});
                            z.each($.Lists.transforms3D, function(e, t) {
                                var n = /^scale/.test(t) ? 1 : 0,
                                    r = W(l).transformCache[t];
                                W(l).transformCache[t] !== H && new RegExp("^\\(" + n + "[^.]").test(r) && (c = !0, delete W(l).transformCache[t])
                            }), i.mobileHA && (c = !0, delete W(l).transformCache.translate3d), c && $.flushTransformCache(l), $.Values.removeClass(l, "velocity-animating")
                        }
                        if (!t && i.complete && !i.loop && u === s - 1) try {
                            i.complete.call(r, r)
                        } catch (e) {
                            setTimeout(function() {
                                throw e
                            }, 1)
                        }
                        o && !0 !== i.loop && o(r), W(l) && !0 === i.loop && !t && (z.each(W(l).tweensContainer, function(e, t) {
                            /^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0, t.startValue = 360), /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100)
                        }), V(l, "reverse", {
                            loop: !0,
                            delay: i.delay
                        })), !1 !== i.queue && z.dequeue(l, i.queue)
                    }
                    V.State.calls[e] = !1;
                    for (var f = 0, p = V.State.calls.length; f < p; f++)
                        if (!1 !== V.State.calls[f]) {
                            a = !0;
                            break
                        }! 1 === a && (V.State.isTicking = !1, delete V.State.calls, V.State.calls = [])
                }
            }
            jQuery.fn.velocity = jQuery.fn.animate
        }(window.jQuery || window.Zepto || window, window, document)
    }), window.Modernizr = function(f, o) {
        function e(e) {
            c.cssText = e
        }

        function a(e, t) {
            return typeof e === t
        }

        function u(e, t) {
            for (var n in e) {
                var r = e[n];
                if (!~("" + r).indexOf("-") && c[r] !== o) return "pfx" != t || r
            }
            return !1
        }

        function r(e, t, n) {
            var r = e.charAt(0).toUpperCase() + e.slice(1),
                i = (e + " " + v.join(r + " ") + r).split(" ");
            return a(t, "string") || a(t, "undefined") ? u(i, t) : function(e, t, n) {
                for (var r in e) {
                    var i = t[e[r]];
                    if (i !== o) return !1 === n ? e[r] : a(i, "function") ? i.bind(n || t) : i
                }
                return !1
            }(i = (e + " " + y.join(r + " ") + r).split(" "), t, n)
        }

        function t(e, t, n, r) {
            var i, o, a, u, s = f.createElement("div"),
                l = f.body,
                c = l || f.createElement("body");
            if (parseInt(n, 10))
                for (; n--;)(a = f.createElement("div")).id = r ? r[n] : h + (n + 1), s.appendChild(a);
            return i = ["&#173;", '<style id="s', h, '">', e, "</style>"].join(""), s.id = h, (l ? s : c).innerHTML += i, c.appendChild(s), l || (c.style.background = "", c.style.overflow = "hidden", u = p.style.overflow, p.style.overflow = "hidden", p.appendChild(c)), o = t(s, e), l ? s.parentNode.removeChild(s) : (c.parentNode.removeChild(c), p.style.overflow = u), !!o
        }
        var n, i, s = {},
            p = f.documentElement,
            h = "modernizr",
            l = f.createElement(h),
            c = l.style,
            d = " -webkit- -moz- -o- -ms- ".split(" "),
            g = "Webkit Moz O ms",
            v = g.split(" "),
            y = g.toLowerCase().split(" "),
            m = {},
            b = [],
            x = b.slice,
            _ = {}.hasOwnProperty;
        for (var w in i = a(_, "undefined") || a(_.call, "undefined") ? function(e, t) {
                return t in e && a(e.constructor.prototype[t], "undefined")
            } : function(e, t) {
                return _.call(e, t)
            }, Function.prototype.bind || (Function.prototype.bind = function(r) {
                var i = this;
                if ("function" != typeof i) throw new TypeError;
                var o = x.call(arguments, 1),
                    a = function() {
                        if (this instanceof a) {
                            function e() {}
                            e.prototype = i.prototype;
                            var t = new e,
                                n = i.apply(t, o.concat(x.call(arguments)));
                            return Object(n) === n ? n : t
                        }
                        return i.apply(r, o.concat(x.call(arguments)))
                    };
                return a
            }), m.csstransforms = function() {
                return !!r("transform")
            }, m.csstransforms3d = function() {
                var n = !!r("perspective");
                return n && "webkitPerspective" in p.style && t("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(e, t) {
                    n = 9 === e.offsetLeft && 3 === e.offsetHeight
                }), n
            }, m.csstransitions = function() {
                return r("transition")
            }, m) i(m, w) && (n = w.toLowerCase(), s[n] = m[w](), b.push((s[n] ? "" : "no-") + n));
        return s.addTest = function(e, t) {
            if ("object" == typeof e)
                for (var n in e) i(e, n) && s.addTest(n, e[n]);
            else {
                if (e = e.toLowerCase(), s[e] !== o) return s;
                t = "function" == typeof t ? t() : t, p.className += " " + (t ? "" : "no-") + e, s[e] = t
            }
            return s
        }, e(""), l = null, s._version = "2.6.2", s._prefixes = d, s._domPrefixes = y, s._cssomPrefixes = v, s.testProp = function(e) {
            return u([e])
        }, s.testAllProps = r, s.testStyles = t, s.prefixed = function(e, t, n) {
            return t ? r(e, t, n) : r(e, "pfx")
        }, p.className = p.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (" js " + b.join(" ")), s
    }(this.document),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery", "modernizr"], e) : "object" == typeof exports ? module.exports = e(require("jquery"), window.Modernizr) : window.Shuffle = e(window.jQuery, window.Modernizr)
    }(function(f, e, a) {
        "use strict";
        if ("object" != typeof e) throw new Error("Shuffle.js requires Modernizr.\nhttp://vestride.github.io/Shuffle/#dependencies");
        var t, n = e.prefixed("transition"),
            r = e.prefixed("transitionDelay"),
            i = e.prefixed("transitionDuration"),
            s = {
                WebkitTransition: "webkitTransitionEnd",
                transition: "transitionend"
            } [n],
            o = e.prefixed("transform"),
            u = (t = o) ? t.replace(/([A-Z])/g, function(e, t) {
                return "-" + t.toLowerCase()
            }).replace(/^ms-/, "-ms-") : "",
            l = e.csstransforms && e.csstransitions,
            c = e.csstransforms3d,
            p = !!window.getComputedStyle,
            h = "shuffle";

        function d(e, t, n) {
            for (var r = 0, i = e.length; r < i; r++)
                if (t.call(n, e[r], r, e) === {}) return
        }

        function g(e, t, n) {
            return setTimeout(f.proxy(e, t), n)
        }

        function v(e) {
            return Math.max.apply(Math, e)
        }

        function y(e) {
            return f.isNumeric(e) ? e : 0
        }

        function m(e, t) {
            this.x = y(e), this.y = y(t)
        }
        var b = window.getComputedStyle || function() {};
        m.equals = function(e, t) {
            return e.x === t.x && e.y === t.y
        };
        var x = function() {
                if (!p) return !1;
                var e = document.body || document.documentElement,
                    t = document.createElement("div");
                t.style.cssText = "width:10px;padding:2px;-webkit-box-sizing:border-box;box-sizing:border-box;", e.appendChild(t);
                var n = "10px" === b(t, null).width;
                return e.removeChild(t), n
            }(),
            _ = 0,
            w = f(window),
            S = function(e, t) {
                t = t || {}, f.extend(this, S.options, t, S.settings), this.$el = f(e), this.element = e, this.unique = "shuffle_" + _++, this._fire(S.EventType.LOADING), this._init(), g(function() {
                    this.initialized = !0, this._fire(S.EventType.DONE)
                }, this, 16)
            };
        return S.EventType = {
            LOADING: "loading",
            DONE: "done",
            LAYOUT: "layout",
            REMOVED: "removed"
        }, S.ClassName = {
            BASE: h,
            SHUFFLE_ITEM: "shuffle-item",
            FILTERED: "filtered",
            CONCEALED: "concealed"
        }, S.options = {
            group: "all",
            speed: 250,
            easing: "ease-out",
            itemSelector: "",
            sizer: null,
            gutterWidth: 0,
            columnWidth: 0,
            delimeter: null,
            buffer: 0,
            columnThreshold: p ? .01 : .1,
            initialSort: null,
            throttle: function(n, r, i) {
                var o, a, u, s = null,
                    l = 0;

                function c() {
                    l = !1 === i.leading ? 0 : f.now(), s = null, u = n.apply(o, a), o = a = null
                }
                return i = i || {},
                    function() {
                        var e = f.now();
                        l || !1 !== i.leading || (l = e);
                        var t = r - (e - l);
                        return o = this, a = arguments, t <= 0 || r < t ? (clearTimeout(s), s = null, l = e, u = n.apply(o, a), o = a = null) : s || !1 === i.trailing || (s = setTimeout(c, t)), u
                    }
            },
            throttleTime: 300,
            sequentialFadeDelay: 150,
            supported: l
        }, S.settings = {
            useSizer: !1,
            itemCss: {
                position: "absolute",
                top: 0,
                left: 0,
                visibility: "visible"
            },
            revealAppendedDelay: 300,
            lastSort: {},
            lastFilter: "all",
            enabled: !0,
            destroyed: !1,
            initialized: !1,
            _animations: [],
            _transitions: [],
            _isMovementCanceled: !1,
            styleQueue: []
        }, S.Point = m, S._getItemTransformString = function(e, t) {
            return c ? "translate3d(" + e.x + "px, " + e.y + "px, 0) scale3d(" + t + ", " + t + ", 1)" : "translate(" + e.x + "px, " + e.y + "px) scale(" + t + ")"
        }, S._getNumberStyle = function(e, t, n) {
            if (p) {
                n = n || b(e, null);
                var r = S._getFloat(n[t]);
                return x || "width" !== t ? x || "height" !== t || (r += S._getFloat(n.paddingTop) + S._getFloat(n.paddingBottom) + S._getFloat(n.borderTopWidth) + S._getFloat(n.borderBottomWidth)) : r += S._getFloat(n.paddingLeft) + S._getFloat(n.paddingRight) + S._getFloat(n.borderLeftWidth) + S._getFloat(n.borderRightWidth), r
            }
            return S._getFloat(f(e).css(t))
        }, S._getFloat = function(e) {
            return y(parseFloat(e))
        }, S._getOuterWidth = function(e, t) {
            var n = b(e, null),
                r = S._getNumberStyle(e, "width", n);
            t && (r += S._getNumberStyle(e, "marginLeft", n) + S._getNumberStyle(e, "marginRight", n));
            return r
        }, S._getOuterHeight = function(e, t) {
            var n = b(e, null),
                r = S._getNumberStyle(e, "height", n);
            t && (r += S._getNumberStyle(e, "marginTop", n) + S._getNumberStyle(e, "marginBottom", n));
            return r
        }, S._skipTransition = function(e, t, n) {
            var r = e.style[i];
            e.style[i] = "0ms", t.call(n);
            e.offsetWidth;
            e.style[i] = r
        }, S.prototype._init = function() {
            this.$items = this._getItems(), this.sizer = this._getElementOption(this.sizer), this.sizer && (this.useSizer = !0), this.$el.addClass(S.ClassName.BASE), this._initItems(), w.on("resize.shuffle." + this.unique, this._getResizeFunction());
            var e = this.$el.css(["position", "overflow"]),
                t = S._getOuterWidth(this.element);
            this._validateStyles(e), this._setColumns(t), this.shuffle(this.group, this.initialSort), this.supported && g(function() {
                this._setTransitions(), this.element.style[n] = "height " + this.speed + "ms " + this.easing
            }, this)
        }, S.prototype._getResizeFunction = function() {
            var e = f.proxy(this._onResize, this);
            return this.throttle ? this.throttle(e, this.throttleTime) : e
        }, S.prototype._getElementOption = function(e) {
            return "string" == typeof e ? this.$el.find(e)[0] || null : e && e.nodeType && 1 === e.nodeType ? e : e && e.jquery ? e[0] : null
        }, S.prototype._validateStyles = function(e) {
            "static" === e.position && (this.element.style.position = "relative"), "hidden" !== e.overflow && (this.element.style.overflow = "hidden")
        }, S.prototype._filter = function(e, t) {
            e = e || this.lastFilter, t = t || this.$items;
            var n = this._getFilteredSets(e, t);
            return this._toggleFilterClasses(n.filtered, n.concealed), "string" == typeof(this.lastFilter = e) && (this.group = e), n.filtered
        }, S.prototype._getFilteredSets = function(n, e) {
            var r = f(),
                i = f();
            return "all" === n ? r = e : d(e, function(e) {
                var t = f(e);
                this._doesPassFilter(n, t) ? r = r.add(t) : i = i.add(t)
            }, this), {
                filtered: r,
                concealed: i
            }
        }, S.prototype._doesPassFilter = function(e, t) {
            if (f.isFunction(e)) return e.call(t[0], t, this);
            var n = t.data("groups"),
                r = this.delimeter && !f.isArray(n) ? n.split(this.delimeter) : n;
            return -1 < f.inArray(e, r)
        }, S.prototype._toggleFilterClasses = function(e, t) {
            e.removeClass(S.ClassName.CONCEALED).addClass(S.ClassName.FILTERED), t.removeClass(S.ClassName.FILTERED).addClass(S.ClassName.CONCEALED)
        }, S.prototype._initItems = function(e) {
            (e = e || this.$items).addClass([S.ClassName.SHUFFLE_ITEM, S.ClassName.FILTERED].join(" ")), e.css(this.itemCss).data("point", new m).data("scale", 1)
        }, S.prototype._updateItemCount = function() {
            this.visibleItems = this._getFilteredItems().length
        }, S.prototype._setTransition = function(e) {
            e.style[n] = u + " " + this.speed + "ms " + this.easing + ", opacity " + this.speed + "ms " + this.easing
        }, S.prototype._setTransitions = function(e) {
            d(e = e || this.$items, function(e) {
                this._setTransition(e)
            }, this)
        }, S.prototype._setSequentialDelay = function(e) {
            this.supported && d(e, function(e, t) {
                e.style[r] = "0ms," + (t + 1) * this.sequentialFadeDelay + "ms"
            }, this)
        }, S.prototype._getItems = function() {
            return this.$el.children(this.itemSelector)
        }, S.prototype._getFilteredItems = function() {
            return this.$items.filter("." + S.ClassName.FILTERED)
        }, S.prototype._getConcealedItems = function() {
            return this.$items.filter("." + S.ClassName.CONCEALED)
        }, S.prototype._getColumnSize = function(e, t) {
            var n;
            return 0 === (n = f.isFunction(this.columnWidth) ? this.columnWidth(e) : this.useSizer ? S._getOuterWidth(this.sizer) : this.columnWidth ? this.columnWidth : 0 < this.$items.length ? S._getOuterWidth(this.$items[0], !0) : e) && (n = e), n + t
        }, S.prototype._getGutterSize = function(e) {
            return f.isFunction(this.gutterWidth) ? this.gutterWidth(e) : this.useSizer ? S._getNumberStyle(this.sizer, "marginLeft") : this.gutterWidth
        }, S.prototype._setColumns = function(e) {
            var t = e || S._getOuterWidth(this.element),
                n = this._getGutterSize(t),
                r = this._getColumnSize(t, n),
                i = (t + n) / r;
            Math.abs(Math.round(i) - i) < this.columnThreshold && (i = Math.round(i)), this.cols = Math.max(Math.floor(i), 1), this.containerWidth = t, this.colWidth = r
        }, S.prototype._setContainerSize = function() {
            this.$el.css("height", this._getContainerSize())
        }, S.prototype._getContainerSize = function() {
            return v(this.positions)
        }, S.prototype._fire = function(e, t) {
            this.$el.trigger(e + "." + h, t && t.length ? t : [this])
        }, S.prototype._resetCols = function() {
            var e = this.cols;
            for (this.positions = []; e--;) this.positions.push(0)
        }, S.prototype._layout = function(e, t) {
            d(e, function(e) {
                this._layoutItem(e, !!t)
            }, this), this._processStyleQueue(), this._setContainerSize()
        }, S.prototype._layoutItem = function(e, t) {
            var n = f(e),
                r = n.data(),
                i = r.point,
                o = r.scale,
                a = {
                    width: S._getOuterWidth(e, !0),
                    height: S._getOuterHeight(e, !0)
                },
                u = this._getItemPosition(a);
            m.equals(i, u) && 1 === o || (r.point = u, r.scale = 1, this.styleQueue.push({
                $item: n,
                point: u,
                scale: 1,
                opacity: t ? 0 : 1,
                skipTransition: t || 0 === this.speed,
                callfront: function() {
                    t || n.css("visibility", "visible")
                },
                callback: function() {
                    t && n.css("visibility", "hidden")
                }
            }))
        }, S.prototype._getItemPosition = function(e) {
            for (var t = this._getColumnSpan(e.width, this.colWidth, this.cols), n = this._getColumnSet(t, this.cols), r = this._getShortColumn(n, this.buffer), i = new m(Math.round(this.colWidth * r), Math.round(n[r])), o = n[r] + e.height, a = this.cols + 1 - n.length, u = 0; u < a; u++) this.positions[r + u] = o;
            return i
        }, S.prototype._getColumnSpan = function(e, t, n) {
            var r = e / t;
            return Math.abs(Math.round(r) - r) < this.columnThreshold && (r = Math.round(r)), Math.min(Math.ceil(r), n)
        }, S.prototype._getColumnSet = function(e, t) {
            if (1 === e) return this.positions;
            for (var n = t + 1 - e, r = [], i = 0; i < n; i++) r[i] = v(this.positions.slice(i, i + e));
            return r
        }, S.prototype._getShortColumn = function(e, t) {
            for (var n, r = (n = e, Math.min.apply(Math, n)), i = 0, o = e.length; i < o; i++)
                if (e[i] >= r - t && e[i] <= r + t) return i;
            return 0
        }, S.prototype._shrink = function(e) {
            d(e || this._getConcealedItems(), function(e) {
                var t = f(e),
                    n = t.data();
                .001 !== n.scale && (n.scale = .001, this.styleQueue.push({
                    $item: t,
                    point: n.point,
                    scale: .001,
                    opacity: 0,
                    callback: function() {
                        t.css("visibility", "hidden")
                    }
                }))
            }, this)
        }, S.prototype._onResize = function() {
            this.enabled && !this.destroyed && S._getOuterWidth(this.element) !== this.containerWidth && this.update()
        }, S.prototype._getStylesForTransition = function(e) {
            var t = {
                opacity: e.opacity
            };
            return this.supported ? t[o] = S._getItemTransformString(e.point, e.scale) : (t.left = e.point.x, t.top = e.point.y), t
        }, S.prototype._transition = function(e) {
            var t = this._getStylesForTransition(e);
            this._startItemAnimation(e.$item, t, e.callfront || f.noop, e.callback || f.noop)
        }, S.prototype._startItemAnimation = function(e, t, n, r) {
            var i = this;

            function o(e) {
                e.target === e.currentTarget && (f(e.target).off(s, o), i._removeTransitionReference(a), r())
            }
            var a = {
                $element: e,
                handler: o
            };
            if (n(), !this.initialized) return e.css(t), void r();
            if (this.supported) e.css(t), e.on(s, o), this._transitions.push(a);
            else {
                var u = e.stop(!0).animate(t, this.speed, "swing", r);
                this._animations.push(u.promise())
            }
        }, S.prototype._processStyleQueue = function(e) {
            this.isTransitioning && this._cancelMovement();
            var t = f();
            d(this.styleQueue, function(e) {
                e.skipTransition ? this._styleImmediately(e) : (t = t.add(e.$item), this._transition(e))
            }, this), 0 < t.length && this.initialized && 0 < this.speed ? (this.isTransitioning = !0, this.supported ? this._whenCollectionDone(t, s, this._movementFinished) : this._whenAnimationsDone(this._movementFinished)) : e || g(this._layoutEnd, this), this.styleQueue.length = 0
        }, S.prototype._cancelMovement = function() {
            this.supported ? d(this._transitions, function(e) {
                e.$element.off(s, e.handler)
            }) : (this._isMovementCanceled = !0, this.$items.stop(!0), this._isMovementCanceled = !1), this._transitions.length = 0, this.isTransitioning = !1
        }, S.prototype._removeTransitionReference = function(e) {
            var t = f.inArray(e, this._transitions); - 1 < t && this._transitions.splice(t, 1)
        }, S.prototype._styleImmediately = function(e) {
            S._skipTransition(e.$item[0], function() {
                e.$item.css(this._getStylesForTransition(e))
            }, this)
        }, S.prototype._movementFinished = function() {
            this.isTransitioning = !1, this._layoutEnd()
        }, S.prototype._layoutEnd = function() {
            this._fire(S.EventType.LAYOUT)
        }, S.prototype._addItems = function(e, t, n) {
            this._initItems(e), this._setTransitions(e), this.$items = this._getItems(), this._shrink(e), d(this.styleQueue, function(e) {
                e.skipTransition = !0
            }), this._processStyleQueue(!0), t ? this._addItemsToEnd(e, n) : this.shuffle(this.lastFilter)
        }, S.prototype._addItemsToEnd = function(e, t) {
            var n = this._filter(null, e).get();
            this._updateItemCount(), this._layout(n, !0), t && this.supported && this._setSequentialDelay(n), this._revealAppended(n)
        }, S.prototype._revealAppended = function(e) {
            g(function() {
                d(e, function(e) {
                    var t = f(e);
                    this._transition({
                        $item: t,
                        opacity: 1,
                        point: t.data("point"),
                        scale: 1
                    })
                }, this), this._whenCollectionDone(f(e), s, function() {
                    f(e).css(r, "0ms"), this._movementFinished()
                })
            }, this, this.revealAppendedDelay)
        }, S.prototype._whenCollectionDone = function(e, t, n) {
            var r = 0,
                i = e.length,
                o = this;

            function a(e) {
                e.target === e.currentTarget && (f(e.target).off(t, a), ++r === i && (o._removeTransitionReference(u), n.call(o)))
            }
            var u = {
                $element: e,
                handler: a
            };
            e.on(t, a), this._transitions.push(u)
        }, S.prototype._whenAnimationsDone = function(e) {
            f.when.apply(null, this._animations).always(f.proxy(function() {
                this._animations.length = 0, this._isMovementCanceled || e.call(this)
            }, this))
        }, S.prototype.shuffle = function(e, t) {
            this.enabled && (e = e || "all", this._filter(e), this._updateItemCount(), this._shrink(), this.sort(t))
        }, S.prototype.sort = function(e) {
            if (this.enabled) {
                this._resetCols();
                var t = e || this.lastSort,
                    n = this._getFilteredItems().sorted(t);
                this._layout(n), this.lastSort = t
            }
        }, S.prototype.update = function(e) {
            this.enabled && (e || this._setColumns(), this.sort())
        }, S.prototype.layout = function() {
            this.update(!0)
        }, S.prototype.appended = function(e, t, n) {
            this._addItems(e, !0 === t, !1 !== n)
        }, S.prototype.disable = function() {
            this.enabled = !1
        }, S.prototype.enable = function(e) {
            !(this.enabled = !0) !== e && this.update()
        }, S.prototype.remove = function(e) {
            e.length && e.jquery && (this._toggleFilterClasses(f(), e), this._shrink(e), this.sort(), this.$el.one(S.EventType.LAYOUT + "." + h, f.proxy(function() {
                e.remove(), this.$items = this._getItems(), this._updateItemCount(), this._fire(S.EventType.REMOVED, [e, this]), e = null
            }, this)))
        }, S.prototype.destroy = function() {
            w.off("." + this.unique), this.$el.removeClass(h).removeAttr("style").removeData(h), this.$items.removeAttr("style").removeData("point").removeData("scale").removeClass([S.ClassName.CONCEALED, S.ClassName.FILTERED, S.ClassName.SHUFFLE_ITEM].join(" ")), this.$items = null, this.$el = null, this.sizer = null, this.element = null, this._transitions = null, this.destroyed = !0
        }, f.fn.shuffle = function(n) {
            var r = Array.prototype.slice.call(arguments, 1);
            return this.each(function() {
                var e = f(this),
                    t = e.data(h);
                t ? "string" == typeof n && t[n] && t[n].apply(t, r) : (t = new S(this, n), e.data(h, t))
            })
        }, f.fn.sorted = function(e) {
            var i = f.extend({}, f.fn.sorted.defaults, e),
                t = this.get(),
                o = !1;
            return t.length ? i.randomize ? function(e) {
                var t, n, r = e.length;
                if (!r) return e;
                for (; --r;) t = e[n = Math.floor(Math.random() * (r + 1))], e[n] = e[r], e[r] = t;
                return e
            }(t) : (f.isFunction(i.by) && t.sort(function(e, t) {
                if (o) return 0;
                var n = i.by(f(e)),
                    r = i.by(f(t));
                return n === a && r === a ? (o = !0, 0) : n < r || "sortFirst" === n || "sortLast" === r ? -1 : r < n || "sortLast" === n || "sortFirst" === r ? 1 : 0
            }), o ? this.get() : (i.reverse && t.reverse(), t)) : []
        }, f.fn.sorted.defaults = {
            reverse: !1,
            by: null,
            randomize: !1
        }, S
    }),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? e(require("jquery")) : e(jQuery)
    }(function(v) {
        function n(e) {
            var t = [],
                n = e.dir && "left" === e.dir ? "scrollLeft" : "scrollTop";
            return this.each(function() {
                var e = v(this);
                if (this !== document && this !== window) return !document.scrollingElement || this !== document.documentElement && this !== document.body ? void(0 < e[n]() ? t.push(this) : (e[n](1), 0 < e[n]() && t.push(this), e[n](0))) : (t.push(document.scrollingElement), !1)
            }), t.length || this.each(function() {
                this === document.documentElement && "smooth" === v(this).css("scrollBehavior") && (t = [this]), t.length || "BODY" !== this.nodeName || (t = [this])
            }), "first" === e.el && 1 < t.length && (t = [t[0]]), t
        }
        var f = {};
        v.fn.extend({
            scrollable: function(e) {
                var t = n.call(this, {
                    dir: e
                });
                return this.pushStack(t)
            },
            firstScrollable: function(e) {
                var t = n.call(this, {
                    el: "first",
                    dir: e
                });
                return this.pushStack(t)
            },
            smoothScroll: function(e, n) {
                if ("options" === (e = e || {})) return n ? this.each(function() {
                    var e = v(this),
                        t = v.extend(e.data("ssOpts") || {}, n);
                    v(this).data("ssOpts", t)
                }) : this.first().data("ssOpts");

                function t(e) {
                    function t(e) {
                        return e.replace(/(:|\.|\/)/g, "\\$1")
                    }
                    var n = v(this),
                        r = v.extend({}, g, n.data("ssOpts") || {}),
                        i = g.exclude,
                        o = r.excludeWithin,
                        a = 0,
                        u = 0,
                        s = !0,
                        l = {},
                        c = v.smoothScroll.filterPath(location.pathname),
                        f = v.smoothScroll.filterPath(this.pathname),
                        p = location.hostname === this.hostname || !this.hostname,
                        h = r.scrollTarget || f === c,
                        d = t(this.hash);
                    if (d && !v(d).length && (s = !1), r.scrollTarget || p && h && d) {
                        for (; s && a < i.length;) n.is(t(i[a++])) && (s = !1);
                        for (; s && u < o.length;) n.closest(o[u++]).length && (s = !1)
                    } else s = !1;
                    s && (r.preventDefault && e.preventDefault(), v.extend(l, r, {
                        scrollTarget: r.scrollTarget || d,
                        link: this
                    }), v.smoothScroll(l))
                }
                var g = v.extend({}, v.fn.smoothScroll.defaults, e);
                return null !== e.delegateSelector ? this.undelegate(e.delegateSelector, "click.smoothscroll").delegate(e.delegateSelector, "click.smoothscroll", t) : this.unbind("click.smoothscroll").bind("click.smoothscroll", t), this
            }
        }), v.smoothScroll = function(e, t) {
            if ("options" === e && "object" == typeof t) return v.extend(f, t);
            var n, r, i, o, a = 0,
                u = "offset",
                s = "scrollTop",
                l = {},
                c = {};
            "number" == typeof e ? (n = v.extend({
                link: null
            }, v.fn.smoothScroll.defaults, f), i = e) : (n = v.extend({
                link: null
            }, v.fn.smoothScroll.defaults, e || {}, f)).scrollElement && (u = "position", "static" === n.scrollElement.css("position") && n.scrollElement.css("position", "relative")), s = "left" === n.direction ? "scrollLeft" : s, n.scrollElement ? (r = n.scrollElement, /^(?:HTML|BODY)$/.test(r[0].nodeName) || (a = r[s]())) : r = v("html, body").firstScrollable(n.direction), n.beforeScroll.call(r, n), i = "number" == typeof e ? e : t || v(n.scrollTarget)[u]() && v(n.scrollTarget)[u]()[n.direction] || 0, l[s] = i + a + n.offset, "auto" === (o = n.speed) && (o = Math.abs(l[s] - r[s]()) / n.autoCoefficient), c = {
                duration: o,
                easing: n.easing,
                complete: function() {
                    n.afterScroll.call(n.link, n)
                }
            }, n.step && (c.step = n.step), r.length ? r.stop().animate(l, c) : n.afterScroll.call(n.link, n)
        }, v.smoothScroll.version = "1.7.2", v.smoothScroll.filterPath = function(e) {
            return (e = e || "").replace(/^\//, "").replace(/(?:index|default).[a-zA-Z]{3,4}$/, "").replace(/\/$/, "")
        }, v.fn.smoothScroll.defaults = {
            exclude: [],
            excludeWithin: [],
            offset: 0,
            direction: "top",
            delegateSelector: null,
            scrollElement: null,
            scrollTarget: null,
            beforeScroll: function() {},
            afterScroll: function() {},
            easing: "swing",
            speed: 400,
            autoCoefficient: 2,
            preventDefault: !0
        }
    });