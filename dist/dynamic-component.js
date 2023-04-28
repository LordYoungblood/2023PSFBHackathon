var bc = Object.defineProperty;
var fc = (r, t, e) => t in r ? bc(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var Di = (r, t, e) => (fc(r, typeof t != "symbol" ? t + "" : t, e), e);
function Ua(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Yl = { exports: {} }, on = {}, Kl = { exports: {} }, P = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ye = Symbol.for("react.element"), gc = Symbol.for("react.portal"), vc = Symbol.for("react.fragment"), hc = Symbol.for("react.strict_mode"), xc = Symbol.for("react.profiler"), wc = Symbol.for("react.provider"), yc = Symbol.for("react.context"), kc = Symbol.for("react.forward_ref"), zc = Symbol.for("react.suspense"), Sc = Symbol.for("react.memo"), Ec = Symbol.for("react.lazy"), Ai = Symbol.iterator;
function jc(r) {
  return r === null || typeof r != "object" ? null : (r = Ai && r[Ai] || r["@@iterator"], typeof r == "function" ? r : null);
}
var Xl = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Zl = Object.assign, Jl = {};
function ae(r, t, e) {
  this.props = r, this.context = t, this.refs = Jl, this.updater = e || Xl;
}
ae.prototype.isReactComponent = {};
ae.prototype.setState = function(r, t) {
  if (typeof r != "object" && typeof r != "function" && r != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, r, t, "setState");
};
ae.prototype.forceUpdate = function(r) {
  this.updater.enqueueForceUpdate(this, r, "forceUpdate");
};
function ql() {
}
ql.prototype = ae.prototype;
function $a(r, t, e) {
  this.props = r, this.context = t, this.refs = Jl, this.updater = e || Xl;
}
var Va = $a.prototype = new ql();
Va.constructor = $a;
Zl(Va, ae.prototype);
Va.isPureReactComponent = !0;
var Ii = Array.isArray, rs = Object.prototype.hasOwnProperty, Ha = { current: null }, ts = { key: !0, ref: !0, __self: !0, __source: !0 };
function es(r, t, e) {
  var o, n = {}, a = null, i = null;
  if (t != null)
    for (o in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (a = "" + t.key), t)
      rs.call(t, o) && !ts.hasOwnProperty(o) && (n[o] = t[o]);
  var l = arguments.length - 2;
  if (l === 1)
    n.children = e;
  else if (1 < l) {
    for (var s = Array(l), c = 0; c < l; c++)
      s[c] = arguments[c + 2];
    n.children = s;
  }
  if (r && r.defaultProps)
    for (o in l = r.defaultProps, l)
      n[o] === void 0 && (n[o] = l[o]);
  return { $$typeof: Ye, type: r, key: a, ref: i, props: n, _owner: Ha.current };
}
function Cc(r, t) {
  return { $$typeof: Ye, type: r.type, key: t, ref: r.ref, props: r.props, _owner: r._owner };
}
function Ga(r) {
  return typeof r == "object" && r !== null && r.$$typeof === Ye;
}
function _c(r) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + r.replace(/[=:]/g, function(e) {
    return t[e];
  });
}
var Fi = /\/+/g;
function zn(r, t) {
  return typeof r == "object" && r !== null && r.key != null ? _c("" + r.key) : t.toString(36);
}
function wo(r, t, e, o, n) {
  var a = typeof r;
  (a === "undefined" || a === "boolean") && (r = null);
  var i = !1;
  if (r === null)
    i = !0;
  else
    switch (a) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (r.$$typeof) {
          case Ye:
          case gc:
            i = !0;
        }
    }
  if (i)
    return i = r, n = n(i), r = o === "" ? "." + zn(i, 0) : o, Ii(n) ? (e = "", r != null && (e = r.replace(Fi, "$&/") + "/"), wo(n, t, e, "", function(c) {
      return c;
    })) : n != null && (Ga(n) && (n = Cc(n, e + (!n.key || i && i.key === n.key ? "" : ("" + n.key).replace(Fi, "$&/") + "/") + r)), t.push(n)), 1;
  if (i = 0, o = o === "" ? "." : o + ":", Ii(r))
    for (var l = 0; l < r.length; l++) {
      a = r[l];
      var s = o + zn(a, l);
      i += wo(a, t, e, s, n);
    }
  else if (s = jc(r), typeof s == "function")
    for (r = s.call(r), l = 0; !(a = r.next()).done; )
      a = a.value, s = o + zn(a, l++), i += wo(a, t, e, s, n);
  else if (a === "object")
    throw t = String(r), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function to(r, t, e) {
  if (r == null)
    return r;
  var o = [], n = 0;
  return wo(r, o, "", "", function(a) {
    return t.call(e, a, n++);
  }), o;
}
function Pc(r) {
  if (r._status === -1) {
    var t = r._result;
    t = t(), t.then(function(e) {
      (r._status === 0 || r._status === -1) && (r._status = 1, r._result = e);
    }, function(e) {
      (r._status === 0 || r._status === -1) && (r._status = 2, r._result = e);
    }), r._status === -1 && (r._status = 0, r._result = t);
  }
  if (r._status === 1)
    return r._result.default;
  throw r._result;
}
var lr = { current: null }, yo = { transition: null }, Nc = { ReactCurrentDispatcher: lr, ReactCurrentBatchConfig: yo, ReactCurrentOwner: Ha };
P.Children = { map: to, forEach: function(r, t, e) {
  to(r, function() {
    t.apply(this, arguments);
  }, e);
}, count: function(r) {
  var t = 0;
  return to(r, function() {
    t++;
  }), t;
}, toArray: function(r) {
  return to(r, function(t) {
    return t;
  }) || [];
}, only: function(r) {
  if (!Ga(r))
    throw Error("React.Children.only expected to receive a single React element child.");
  return r;
} };
P.Component = ae;
P.Fragment = vc;
P.Profiler = xc;
P.PureComponent = $a;
P.StrictMode = hc;
P.Suspense = zc;
P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Nc;
P.cloneElement = function(r, t, e) {
  if (r == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + r + ".");
  var o = Zl({}, r.props), n = r.key, a = r.ref, i = r._owner;
  if (t != null) {
    if (t.ref !== void 0 && (a = t.ref, i = Ha.current), t.key !== void 0 && (n = "" + t.key), r.type && r.type.defaultProps)
      var l = r.type.defaultProps;
    for (s in t)
      rs.call(t, s) && !ts.hasOwnProperty(s) && (o[s] = t[s] === void 0 && l !== void 0 ? l[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1)
    o.children = e;
  else if (1 < s) {
    l = Array(s);
    for (var c = 0; c < s; c++)
      l[c] = arguments[c + 2];
    o.children = l;
  }
  return { $$typeof: Ye, type: r.type, key: n, ref: a, props: o, _owner: i };
};
P.createContext = function(r) {
  return r = { $$typeof: yc, _currentValue: r, _currentValue2: r, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, r.Provider = { $$typeof: wc, _context: r }, r.Consumer = r;
};
P.createElement = es;
P.createFactory = function(r) {
  var t = es.bind(null, r);
  return t.type = r, t;
};
P.createRef = function() {
  return { current: null };
};
P.forwardRef = function(r) {
  return { $$typeof: kc, render: r };
};
P.isValidElement = Ga;
P.lazy = function(r) {
  return { $$typeof: Ec, _payload: { _status: -1, _result: r }, _init: Pc };
};
P.memo = function(r, t) {
  return { $$typeof: Sc, type: r, compare: t === void 0 ? null : t };
};
P.startTransition = function(r) {
  var t = yo.transition;
  yo.transition = {};
  try {
    r();
  } finally {
    yo.transition = t;
  }
};
P.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
P.useCallback = function(r, t) {
  return lr.current.useCallback(r, t);
};
P.useContext = function(r) {
  return lr.current.useContext(r);
};
P.useDebugValue = function() {
};
P.useDeferredValue = function(r) {
  return lr.current.useDeferredValue(r);
};
P.useEffect = function(r, t) {
  return lr.current.useEffect(r, t);
};
P.useId = function() {
  return lr.current.useId();
};
P.useImperativeHandle = function(r, t, e) {
  return lr.current.useImperativeHandle(r, t, e);
};
P.useInsertionEffect = function(r, t) {
  return lr.current.useInsertionEffect(r, t);
};
P.useLayoutEffect = function(r, t) {
  return lr.current.useLayoutEffect(r, t);
};
P.useMemo = function(r, t) {
  return lr.current.useMemo(r, t);
};
P.useReducer = function(r, t, e) {
  return lr.current.useReducer(r, t, e);
};
P.useRef = function(r) {
  return lr.current.useRef(r);
};
P.useState = function(r) {
  return lr.current.useState(r);
};
P.useSyncExternalStore = function(r, t, e) {
  return lr.current.useSyncExternalStore(r, t, e);
};
P.useTransition = function() {
  return lr.current.useTransition();
};
P.version = "18.2.0";
Kl.exports = P;
var Gt = Kl.exports;
const os = /* @__PURE__ */ Ua(Gt);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rc = Gt, Tc = Symbol.for("react.element"), Lc = Symbol.for("react.fragment"), Mc = Object.prototype.hasOwnProperty, Oc = Rc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Bc = { key: !0, ref: !0, __self: !0, __source: !0 };
function ns(r, t, e) {
  var o, n = {}, a = null, i = null;
  e !== void 0 && (a = "" + e), t.key !== void 0 && (a = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (o in t)
    Mc.call(t, o) && !Bc.hasOwnProperty(o) && (n[o] = t[o]);
  if (r && r.defaultProps)
    for (o in t = r.defaultProps, t)
      n[o] === void 0 && (n[o] = t[o]);
  return { $$typeof: Tc, type: r, key: a, ref: i, props: n, _owner: Oc.current };
}
on.Fragment = Lc;
on.jsx = ns;
on.jsxs = ns;
Yl.exports = on;
var U = Yl.exports, as = { exports: {} }, hr = {}, is = { exports: {} }, ls = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(r) {
  function t(z, C) {
    var _ = z.length;
    z.push(C);
    r:
      for (; 0 < _; ) {
        var H = _ - 1 >>> 1, K = z[H];
        if (0 < n(K, C))
          z[H] = C, z[_] = K, _ = H;
        else
          break r;
      }
  }
  function e(z) {
    return z.length === 0 ? null : z[0];
  }
  function o(z) {
    if (z.length === 0)
      return null;
    var C = z[0], _ = z.pop();
    if (_ !== C) {
      z[0] = _;
      r:
        for (var H = 0, K = z.length, qe = K >>> 1; H < qe; ) {
          var ft = 2 * (H + 1) - 1, kn = z[ft], gt = ft + 1, ro = z[gt];
          if (0 > n(kn, _))
            gt < K && 0 > n(ro, kn) ? (z[H] = ro, z[gt] = _, H = gt) : (z[H] = kn, z[ft] = _, H = ft);
          else if (gt < K && 0 > n(ro, _))
            z[H] = ro, z[gt] = _, H = gt;
          else
            break r;
        }
    }
    return C;
  }
  function n(z, C) {
    var _ = z.sortIndex - C.sortIndex;
    return _ !== 0 ? _ : z.id - C.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var a = performance;
    r.unstable_now = function() {
      return a.now();
    };
  } else {
    var i = Date, l = i.now();
    r.unstable_now = function() {
      return i.now() - l;
    };
  }
  var s = [], c = [], b = 1, f = null, u = 3, h = !1, x = !1, w = !1, B = typeof setTimeout == "function" ? setTimeout : null, p = typeof clearTimeout == "function" ? clearTimeout : null, d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(z) {
    for (var C = e(c); C !== null; ) {
      if (C.callback === null)
        o(c);
      else if (C.startTime <= z)
        o(c), C.sortIndex = C.expirationTime, t(s, C);
      else
        break;
      C = e(c);
    }
  }
  function g(z) {
    if (w = !1, m(z), !x)
      if (e(s) !== null)
        x = !0, wn(k);
      else {
        var C = e(c);
        C !== null && yn(g, C.startTime - z);
      }
  }
  function k(z, C) {
    x = !1, w && (w = !1, p(j), j = -1), h = !0;
    var _ = u;
    try {
      for (m(C), f = e(s); f !== null && (!(f.expirationTime > C) || z && !jr()); ) {
        var H = f.callback;
        if (typeof H == "function") {
          f.callback = null, u = f.priorityLevel;
          var K = H(f.expirationTime <= C);
          C = r.unstable_now(), typeof K == "function" ? f.callback = K : f === e(s) && o(s), m(C);
        } else
          o(s);
        f = e(s);
      }
      if (f !== null)
        var qe = !0;
      else {
        var ft = e(c);
        ft !== null && yn(g, ft.startTime - C), qe = !1;
      }
      return qe;
    } finally {
      f = null, u = _, h = !1;
    }
  }
  var S = !1, E = null, j = -1, V = 5, N = -1;
  function jr() {
    return !(r.unstable_now() - N < V);
  }
  function se() {
    if (E !== null) {
      var z = r.unstable_now();
      N = z;
      var C = !0;
      try {
        C = E(!0, z);
      } finally {
        C ? de() : (S = !1, E = null);
      }
    } else
      S = !1;
  }
  var de;
  if (typeof d == "function")
    de = function() {
      d(se);
    };
  else if (typeof MessageChannel < "u") {
    var Bi = new MessageChannel(), uc = Bi.port2;
    Bi.port1.onmessage = se, de = function() {
      uc.postMessage(null);
    };
  } else
    de = function() {
      B(se, 0);
    };
  function wn(z) {
    E = z, S || (S = !0, de());
  }
  function yn(z, C) {
    j = B(function() {
      z(r.unstable_now());
    }, C);
  }
  r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(z) {
    z.callback = null;
  }, r.unstable_continueExecution = function() {
    x || h || (x = !0, wn(k));
  }, r.unstable_forceFrameRate = function(z) {
    0 > z || 125 < z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : V = 0 < z ? Math.floor(1e3 / z) : 5;
  }, r.unstable_getCurrentPriorityLevel = function() {
    return u;
  }, r.unstable_getFirstCallbackNode = function() {
    return e(s);
  }, r.unstable_next = function(z) {
    switch (u) {
      case 1:
      case 2:
      case 3:
        var C = 3;
        break;
      default:
        C = u;
    }
    var _ = u;
    u = C;
    try {
      return z();
    } finally {
      u = _;
    }
  }, r.unstable_pauseExecution = function() {
  }, r.unstable_requestPaint = function() {
  }, r.unstable_runWithPriority = function(z, C) {
    switch (z) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        z = 3;
    }
    var _ = u;
    u = z;
    try {
      return C();
    } finally {
      u = _;
    }
  }, r.unstable_scheduleCallback = function(z, C, _) {
    var H = r.unstable_now();
    switch (typeof _ == "object" && _ !== null ? (_ = _.delay, _ = typeof _ == "number" && 0 < _ ? H + _ : H) : _ = H, z) {
      case 1:
        var K = -1;
        break;
      case 2:
        K = 250;
        break;
      case 5:
        K = 1073741823;
        break;
      case 4:
        K = 1e4;
        break;
      default:
        K = 5e3;
    }
    return K = _ + K, z = { id: b++, callback: C, priorityLevel: z, startTime: _, expirationTime: K, sortIndex: -1 }, _ > H ? (z.sortIndex = _, t(c, z), e(s) === null && z === e(c) && (w ? (p(j), j = -1) : w = !0, yn(g, _ - H))) : (z.sortIndex = K, t(s, z), x || h || (x = !0, wn(k))), z;
  }, r.unstable_shouldYield = jr, r.unstable_wrapCallback = function(z) {
    var C = u;
    return function() {
      var _ = u;
      u = C;
      try {
        return z.apply(this, arguments);
      } finally {
        u = _;
      }
    };
  };
})(ls);
is.exports = ls;
var Dc = is.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ss = Gt, vr = Dc;
function v(r) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + r, e = 1; e < arguments.length; e++)
    t += "&args[]=" + encodeURIComponent(arguments[e]);
  return "Minified React error #" + r + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var ds = /* @__PURE__ */ new Set(), Re = {};
function Pt(r, t) {
  Jt(r, t), Jt(r + "Capture", t);
}
function Jt(r, t) {
  for (Re[r] = t, r = 0; r < t.length; r++)
    ds.add(t[r]);
}
var Hr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Kn = Object.prototype.hasOwnProperty, Ac = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ui = {}, $i = {};
function Ic(r) {
  return Kn.call($i, r) ? !0 : Kn.call(Ui, r) ? !1 : Ac.test(r) ? $i[r] = !0 : (Ui[r] = !0, !1);
}
function Fc(r, t, e, o) {
  if (e !== null && e.type === 0)
    return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return o ? !1 : e !== null ? !e.acceptsBooleans : (r = r.toLowerCase().slice(0, 5), r !== "data-" && r !== "aria-");
    default:
      return !1;
  }
}
function Uc(r, t, e, o) {
  if (t === null || typeof t > "u" || Fc(r, t, e, o))
    return !0;
  if (o)
    return !1;
  if (e !== null)
    switch (e.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function sr(r, t, e, o, n, a, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = o, this.attributeNamespace = n, this.mustUseProperty = e, this.propertyName = r, this.type = t, this.sanitizeURL = a, this.removeEmptyString = i;
}
var rr = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r) {
  rr[r] = new sr(r, 0, !1, r, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(r) {
  var t = r[0];
  rr[t] = new sr(t, 1, !1, r[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(r) {
  rr[r] = new sr(r, 2, !1, r.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(r) {
  rr[r] = new sr(r, 2, !1, r, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r) {
  rr[r] = new sr(r, 3, !1, r.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(r) {
  rr[r] = new sr(r, 3, !0, r, null, !1, !1);
});
["capture", "download"].forEach(function(r) {
  rr[r] = new sr(r, 4, !1, r, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(r) {
  rr[r] = new sr(r, 6, !1, r, null, !1, !1);
});
["rowSpan", "start"].forEach(function(r) {
  rr[r] = new sr(r, 5, !1, r.toLowerCase(), null, !1, !1);
});
var Wa = /[\-:]([a-z])/g;
function Qa(r) {
  return r[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r) {
  var t = r.replace(
    Wa,
    Qa
  );
  rr[t] = new sr(t, 1, !1, r, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r) {
  var t = r.replace(Wa, Qa);
  rr[t] = new sr(t, 1, !1, r, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(r) {
  var t = r.replace(Wa, Qa);
  rr[t] = new sr(t, 1, !1, r, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(r) {
  rr[r] = new sr(r, 1, !1, r.toLowerCase(), null, !1, !1);
});
rr.xlinkHref = new sr("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(r) {
  rr[r] = new sr(r, 1, !1, r.toLowerCase(), null, !0, !0);
});
function Ya(r, t, e, o) {
  var n = rr.hasOwnProperty(t) ? rr[t] : null;
  (n !== null ? n.type !== 0 : o || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Uc(t, e, n, o) && (e = null), o || n === null ? Ic(t) && (e === null ? r.removeAttribute(t) : r.setAttribute(t, "" + e)) : n.mustUseProperty ? r[n.propertyName] = e === null ? n.type === 3 ? !1 : "" : e : (t = n.attributeName, o = n.attributeNamespace, e === null ? r.removeAttribute(t) : (n = n.type, e = n === 3 || n === 4 && e === !0 ? "" : "" + e, o ? r.setAttributeNS(o, t, e) : r.setAttribute(t, e))));
}
var Yr = ss.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, eo = Symbol.for("react.element"), Tt = Symbol.for("react.portal"), Lt = Symbol.for("react.fragment"), Ka = Symbol.for("react.strict_mode"), Xn = Symbol.for("react.profiler"), cs = Symbol.for("react.provider"), ps = Symbol.for("react.context"), Xa = Symbol.for("react.forward_ref"), Zn = Symbol.for("react.suspense"), Jn = Symbol.for("react.suspense_list"), Za = Symbol.for("react.memo"), Xr = Symbol.for("react.lazy"), ms = Symbol.for("react.offscreen"), Vi = Symbol.iterator;
function ce(r) {
  return r === null || typeof r != "object" ? null : (r = Vi && r[Vi] || r["@@iterator"], typeof r == "function" ? r : null);
}
var F = Object.assign, Sn;
function he(r) {
  if (Sn === void 0)
    try {
      throw Error();
    } catch (e) {
      var t = e.stack.trim().match(/\n( *(at )?)/);
      Sn = t && t[1] || "";
    }
  return `
` + Sn + r;
}
var En = !1;
function jn(r, t) {
  if (!r || En)
    return "";
  En = !0;
  var e = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var o = c;
        }
        Reflect.construct(r, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          o = c;
        }
        r.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        o = c;
      }
      r();
    }
  } catch (c) {
    if (c && o && typeof c.stack == "string") {
      for (var n = c.stack.split(`
`), a = o.stack.split(`
`), i = n.length - 1, l = a.length - 1; 1 <= i && 0 <= l && n[i] !== a[l]; )
        l--;
      for (; 1 <= i && 0 <= l; i--, l--)
        if (n[i] !== a[l]) {
          if (i !== 1 || l !== 1)
            do
              if (i--, l--, 0 > l || n[i] !== a[l]) {
                var s = `
` + n[i].replace(" at new ", " at ");
                return r.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", r.displayName)), s;
              }
            while (1 <= i && 0 <= l);
          break;
        }
    }
  } finally {
    En = !1, Error.prepareStackTrace = e;
  }
  return (r = r ? r.displayName || r.name : "") ? he(r) : "";
}
function $c(r) {
  switch (r.tag) {
    case 5:
      return he(r.type);
    case 16:
      return he("Lazy");
    case 13:
      return he("Suspense");
    case 19:
      return he("SuspenseList");
    case 0:
    case 2:
    case 15:
      return r = jn(r.type, !1), r;
    case 11:
      return r = jn(r.type.render, !1), r;
    case 1:
      return r = jn(r.type, !0), r;
    default:
      return "";
  }
}
function qn(r) {
  if (r == null)
    return null;
  if (typeof r == "function")
    return r.displayName || r.name || null;
  if (typeof r == "string")
    return r;
  switch (r) {
    case Lt:
      return "Fragment";
    case Tt:
      return "Portal";
    case Xn:
      return "Profiler";
    case Ka:
      return "StrictMode";
    case Zn:
      return "Suspense";
    case Jn:
      return "SuspenseList";
  }
  if (typeof r == "object")
    switch (r.$$typeof) {
      case ps:
        return (r.displayName || "Context") + ".Consumer";
      case cs:
        return (r._context.displayName || "Context") + ".Provider";
      case Xa:
        var t = r.render;
        return r = r.displayName, r || (r = t.displayName || t.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
      case Za:
        return t = r.displayName || null, t !== null ? t : qn(r.type) || "Memo";
      case Xr:
        t = r._payload, r = r._init;
        try {
          return qn(r(t));
        } catch {
        }
    }
  return null;
}
function Vc(r) {
  var t = r.type;
  switch (r.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return r = t.render, r = r.displayName || r.name || "", t.displayName || (r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return qn(t);
    case 8:
      return t === Ka ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
  }
  return null;
}
function ct(r) {
  switch (typeof r) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return r;
    case "object":
      return r;
    default:
      return "";
  }
}
function us(r) {
  var t = r.type;
  return (r = r.nodeName) && r.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Hc(r) {
  var t = us(r) ? "checked" : "value", e = Object.getOwnPropertyDescriptor(r.constructor.prototype, t), o = "" + r[t];
  if (!r.hasOwnProperty(t) && typeof e < "u" && typeof e.get == "function" && typeof e.set == "function") {
    var n = e.get, a = e.set;
    return Object.defineProperty(r, t, { configurable: !0, get: function() {
      return n.call(this);
    }, set: function(i) {
      o = "" + i, a.call(this, i);
    } }), Object.defineProperty(r, t, { enumerable: e.enumerable }), { getValue: function() {
      return o;
    }, setValue: function(i) {
      o = "" + i;
    }, stopTracking: function() {
      r._valueTracker = null, delete r[t];
    } };
  }
}
function oo(r) {
  r._valueTracker || (r._valueTracker = Hc(r));
}
function bs(r) {
  if (!r)
    return !1;
  var t = r._valueTracker;
  if (!t)
    return !0;
  var e = t.getValue(), o = "";
  return r && (o = us(r) ? r.checked ? "true" : "false" : r.value), r = o, r !== e ? (t.setValue(r), !0) : !1;
}
function To(r) {
  if (r = r || (typeof document < "u" ? document : void 0), typeof r > "u")
    return null;
  try {
    return r.activeElement || r.body;
  } catch {
    return r.body;
  }
}
function ra(r, t) {
  var e = t.checked;
  return F({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: e ?? r._wrapperState.initialChecked });
}
function Hi(r, t) {
  var e = t.defaultValue == null ? "" : t.defaultValue, o = t.checked != null ? t.checked : t.defaultChecked;
  e = ct(t.value != null ? t.value : e), r._wrapperState = { initialChecked: o, initialValue: e, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function fs(r, t) {
  t = t.checked, t != null && Ya(r, "checked", t, !1);
}
function ta(r, t) {
  fs(r, t);
  var e = ct(t.value), o = t.type;
  if (e != null)
    o === "number" ? (e === 0 && r.value === "" || r.value != e) && (r.value = "" + e) : r.value !== "" + e && (r.value = "" + e);
  else if (o === "submit" || o === "reset") {
    r.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? ea(r, t.type, e) : t.hasOwnProperty("defaultValue") && ea(r, t.type, ct(t.defaultValue)), t.checked == null && t.defaultChecked != null && (r.defaultChecked = !!t.defaultChecked);
}
function Gi(r, t, e) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var o = t.type;
    if (!(o !== "submit" && o !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + r._wrapperState.initialValue, e || t === r.value || (r.value = t), r.defaultValue = t;
  }
  e = r.name, e !== "" && (r.name = ""), r.defaultChecked = !!r._wrapperState.initialChecked, e !== "" && (r.name = e);
}
function ea(r, t, e) {
  (t !== "number" || To(r.ownerDocument) !== r) && (e == null ? r.defaultValue = "" + r._wrapperState.initialValue : r.defaultValue !== "" + e && (r.defaultValue = "" + e));
}
var xe = Array.isArray;
function Wt(r, t, e, o) {
  if (r = r.options, t) {
    t = {};
    for (var n = 0; n < e.length; n++)
      t["$" + e[n]] = !0;
    for (e = 0; e < r.length; e++)
      n = t.hasOwnProperty("$" + r[e].value), r[e].selected !== n && (r[e].selected = n), n && o && (r[e].defaultSelected = !0);
  } else {
    for (e = "" + ct(e), t = null, n = 0; n < r.length; n++) {
      if (r[n].value === e) {
        r[n].selected = !0, o && (r[n].defaultSelected = !0);
        return;
      }
      t !== null || r[n].disabled || (t = r[n]);
    }
    t !== null && (t.selected = !0);
  }
}
function oa(r, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(v(91));
  return F({}, t, { value: void 0, defaultValue: void 0, children: "" + r._wrapperState.initialValue });
}
function Wi(r, t) {
  var e = t.value;
  if (e == null) {
    if (e = t.children, t = t.defaultValue, e != null) {
      if (t != null)
        throw Error(v(92));
      if (xe(e)) {
        if (1 < e.length)
          throw Error(v(93));
        e = e[0];
      }
      t = e;
    }
    t == null && (t = ""), e = t;
  }
  r._wrapperState = { initialValue: ct(e) };
}
function gs(r, t) {
  var e = ct(t.value), o = ct(t.defaultValue);
  e != null && (e = "" + e, e !== r.value && (r.value = e), t.defaultValue == null && r.defaultValue !== e && (r.defaultValue = e)), o != null && (r.defaultValue = "" + o);
}
function Qi(r) {
  var t = r.textContent;
  t === r._wrapperState.initialValue && t !== "" && t !== null && (r.value = t);
}
function vs(r) {
  switch (r) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function na(r, t) {
  return r == null || r === "http://www.w3.org/1999/xhtml" ? vs(t) : r === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : r;
}
var no, hs = function(r) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, e, o, n) {
    MSApp.execUnsafeLocalFunction(function() {
      return r(t, e, o, n);
    });
  } : r;
}(function(r, t) {
  if (r.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in r)
    r.innerHTML = t;
  else {
    for (no = no || document.createElement("div"), no.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = no.firstChild; r.firstChild; )
      r.removeChild(r.firstChild);
    for (; t.firstChild; )
      r.appendChild(t.firstChild);
  }
});
function Te(r, t) {
  if (t) {
    var e = r.firstChild;
    if (e && e === r.lastChild && e.nodeType === 3) {
      e.nodeValue = t;
      return;
    }
  }
  r.textContent = t;
}
var ke = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, Gc = ["Webkit", "ms", "Moz", "O"];
Object.keys(ke).forEach(function(r) {
  Gc.forEach(function(t) {
    t = t + r.charAt(0).toUpperCase() + r.substring(1), ke[t] = ke[r];
  });
});
function xs(r, t, e) {
  return t == null || typeof t == "boolean" || t === "" ? "" : e || typeof t != "number" || t === 0 || ke.hasOwnProperty(r) && ke[r] ? ("" + t).trim() : t + "px";
}
function ws(r, t) {
  r = r.style;
  for (var e in t)
    if (t.hasOwnProperty(e)) {
      var o = e.indexOf("--") === 0, n = xs(e, t[e], o);
      e === "float" && (e = "cssFloat"), o ? r.setProperty(e, n) : r[e] = n;
    }
}
var Wc = F({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function aa(r, t) {
  if (t) {
    if (Wc[r] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(v(137, r));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null)
        throw Error(v(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(v(61));
    }
    if (t.style != null && typeof t.style != "object")
      throw Error(v(62));
  }
}
function ia(r, t) {
  if (r.indexOf("-") === -1)
    return typeof t.is == "string";
  switch (r) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var la = null;
function Ja(r) {
  return r = r.target || r.srcElement || window, r.correspondingUseElement && (r = r.correspondingUseElement), r.nodeType === 3 ? r.parentNode : r;
}
var sa = null, Qt = null, Yt = null;
function Yi(r) {
  if (r = Ze(r)) {
    if (typeof sa != "function")
      throw Error(v(280));
    var t = r.stateNode;
    t && (t = dn(t), sa(r.stateNode, r.type, t));
  }
}
function ys(r) {
  Qt ? Yt ? Yt.push(r) : Yt = [r] : Qt = r;
}
function ks() {
  if (Qt) {
    var r = Qt, t = Yt;
    if (Yt = Qt = null, Yi(r), t)
      for (r = 0; r < t.length; r++)
        Yi(t[r]);
  }
}
function zs(r, t) {
  return r(t);
}
function Ss() {
}
var Cn = !1;
function Es(r, t, e) {
  if (Cn)
    return r(t, e);
  Cn = !0;
  try {
    return zs(r, t, e);
  } finally {
    Cn = !1, (Qt !== null || Yt !== null) && (Ss(), ks());
  }
}
function Le(r, t) {
  var e = r.stateNode;
  if (e === null)
    return null;
  var o = dn(e);
  if (o === null)
    return null;
  e = o[t];
  r:
    switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (o = !o.disabled) || (r = r.type, o = !(r === "button" || r === "input" || r === "select" || r === "textarea")), r = !o;
        break r;
      default:
        r = !1;
    }
  if (r)
    return null;
  if (e && typeof e != "function")
    throw Error(v(231, t, typeof e));
  return e;
}
var da = !1;
if (Hr)
  try {
    var pe = {};
    Object.defineProperty(pe, "passive", { get: function() {
      da = !0;
    } }), window.addEventListener("test", pe, pe), window.removeEventListener("test", pe, pe);
  } catch {
    da = !1;
  }
function Qc(r, t, e, o, n, a, i, l, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(e, c);
  } catch (b) {
    this.onError(b);
  }
}
var ze = !1, Lo = null, Mo = !1, ca = null, Yc = { onError: function(r) {
  ze = !0, Lo = r;
} };
function Kc(r, t, e, o, n, a, i, l, s) {
  ze = !1, Lo = null, Qc.apply(Yc, arguments);
}
function Xc(r, t, e, o, n, a, i, l, s) {
  if (Kc.apply(this, arguments), ze) {
    if (ze) {
      var c = Lo;
      ze = !1, Lo = null;
    } else
      throw Error(v(198));
    Mo || (Mo = !0, ca = c);
  }
}
function Nt(r) {
  var t = r, e = r;
  if (r.alternate)
    for (; t.return; )
      t = t.return;
  else {
    r = t;
    do
      t = r, t.flags & 4098 && (e = t.return), r = t.return;
    while (r);
  }
  return t.tag === 3 ? e : null;
}
function js(r) {
  if (r.tag === 13) {
    var t = r.memoizedState;
    if (t === null && (r = r.alternate, r !== null && (t = r.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function Ki(r) {
  if (Nt(r) !== r)
    throw Error(v(188));
}
function Zc(r) {
  var t = r.alternate;
  if (!t) {
    if (t = Nt(r), t === null)
      throw Error(v(188));
    return t !== r ? null : r;
  }
  for (var e = r, o = t; ; ) {
    var n = e.return;
    if (n === null)
      break;
    var a = n.alternate;
    if (a === null) {
      if (o = n.return, o !== null) {
        e = o;
        continue;
      }
      break;
    }
    if (n.child === a.child) {
      for (a = n.child; a; ) {
        if (a === e)
          return Ki(n), r;
        if (a === o)
          return Ki(n), t;
        a = a.sibling;
      }
      throw Error(v(188));
    }
    if (e.return !== o.return)
      e = n, o = a;
    else {
      for (var i = !1, l = n.child; l; ) {
        if (l === e) {
          i = !0, e = n, o = a;
          break;
        }
        if (l === o) {
          i = !0, o = n, e = a;
          break;
        }
        l = l.sibling;
      }
      if (!i) {
        for (l = a.child; l; ) {
          if (l === e) {
            i = !0, e = a, o = n;
            break;
          }
          if (l === o) {
            i = !0, o = a, e = n;
            break;
          }
          l = l.sibling;
        }
        if (!i)
          throw Error(v(189));
      }
    }
    if (e.alternate !== o)
      throw Error(v(190));
  }
  if (e.tag !== 3)
    throw Error(v(188));
  return e.stateNode.current === e ? r : t;
}
function Cs(r) {
  return r = Zc(r), r !== null ? _s(r) : null;
}
function _s(r) {
  if (r.tag === 5 || r.tag === 6)
    return r;
  for (r = r.child; r !== null; ) {
    var t = _s(r);
    if (t !== null)
      return t;
    r = r.sibling;
  }
  return null;
}
var Ps = vr.unstable_scheduleCallback, Xi = vr.unstable_cancelCallback, Jc = vr.unstable_shouldYield, qc = vr.unstable_requestPaint, G = vr.unstable_now, rp = vr.unstable_getCurrentPriorityLevel, qa = vr.unstable_ImmediatePriority, Ns = vr.unstable_UserBlockingPriority, Oo = vr.unstable_NormalPriority, tp = vr.unstable_LowPriority, Rs = vr.unstable_IdlePriority, nn = null, Dr = null;
function ep(r) {
  if (Dr && typeof Dr.onCommitFiberRoot == "function")
    try {
      Dr.onCommitFiberRoot(nn, r, void 0, (r.current.flags & 128) === 128);
    } catch {
    }
}
var Rr = Math.clz32 ? Math.clz32 : ap, op = Math.log, np = Math.LN2;
function ap(r) {
  return r >>>= 0, r === 0 ? 32 : 31 - (op(r) / np | 0) | 0;
}
var ao = 64, io = 4194304;
function we(r) {
  switch (r & -r) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return r & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return r & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return r;
  }
}
function Bo(r, t) {
  var e = r.pendingLanes;
  if (e === 0)
    return 0;
  var o = 0, n = r.suspendedLanes, a = r.pingedLanes, i = e & 268435455;
  if (i !== 0) {
    var l = i & ~n;
    l !== 0 ? o = we(l) : (a &= i, a !== 0 && (o = we(a)));
  } else
    i = e & ~n, i !== 0 ? o = we(i) : a !== 0 && (o = we(a));
  if (o === 0)
    return 0;
  if (t !== 0 && t !== o && !(t & n) && (n = o & -o, a = t & -t, n >= a || n === 16 && (a & 4194240) !== 0))
    return t;
  if (o & 4 && (o |= e & 16), t = r.entangledLanes, t !== 0)
    for (r = r.entanglements, t &= o; 0 < t; )
      e = 31 - Rr(t), n = 1 << e, o |= r[e], t &= ~n;
  return o;
}
function ip(r, t) {
  switch (r) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function lp(r, t) {
  for (var e = r.suspendedLanes, o = r.pingedLanes, n = r.expirationTimes, a = r.pendingLanes; 0 < a; ) {
    var i = 31 - Rr(a), l = 1 << i, s = n[i];
    s === -1 ? (!(l & e) || l & o) && (n[i] = ip(l, t)) : s <= t && (r.expiredLanes |= l), a &= ~l;
  }
}
function pa(r) {
  return r = r.pendingLanes & -1073741825, r !== 0 ? r : r & 1073741824 ? 1073741824 : 0;
}
function Ts() {
  var r = ao;
  return ao <<= 1, !(ao & 4194240) && (ao = 64), r;
}
function _n(r) {
  for (var t = [], e = 0; 31 > e; e++)
    t.push(r);
  return t;
}
function Ke(r, t, e) {
  r.pendingLanes |= t, t !== 536870912 && (r.suspendedLanes = 0, r.pingedLanes = 0), r = r.eventTimes, t = 31 - Rr(t), r[t] = e;
}
function sp(r, t) {
  var e = r.pendingLanes & ~t;
  r.pendingLanes = t, r.suspendedLanes = 0, r.pingedLanes = 0, r.expiredLanes &= t, r.mutableReadLanes &= t, r.entangledLanes &= t, t = r.entanglements;
  var o = r.eventTimes;
  for (r = r.expirationTimes; 0 < e; ) {
    var n = 31 - Rr(e), a = 1 << n;
    t[n] = 0, o[n] = -1, r[n] = -1, e &= ~a;
  }
}
function ri(r, t) {
  var e = r.entangledLanes |= t;
  for (r = r.entanglements; e; ) {
    var o = 31 - Rr(e), n = 1 << o;
    n & t | r[o] & t && (r[o] |= t), e &= ~n;
  }
}
var T = 0;
function Ls(r) {
  return r &= -r, 1 < r ? 4 < r ? r & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Ms, ti, Os, Bs, Ds, ma = !1, lo = [], et = null, ot = null, nt = null, Me = /* @__PURE__ */ new Map(), Oe = /* @__PURE__ */ new Map(), Jr = [], dp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Zi(r, t) {
  switch (r) {
    case "focusin":
    case "focusout":
      et = null;
      break;
    case "dragenter":
    case "dragleave":
      ot = null;
      break;
    case "mouseover":
    case "mouseout":
      nt = null;
      break;
    case "pointerover":
    case "pointerout":
      Me.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Oe.delete(t.pointerId);
  }
}
function me(r, t, e, o, n, a) {
  return r === null || r.nativeEvent !== a ? (r = { blockedOn: t, domEventName: e, eventSystemFlags: o, nativeEvent: a, targetContainers: [n] }, t !== null && (t = Ze(t), t !== null && ti(t)), r) : (r.eventSystemFlags |= o, t = r.targetContainers, n !== null && t.indexOf(n) === -1 && t.push(n), r);
}
function cp(r, t, e, o, n) {
  switch (t) {
    case "focusin":
      return et = me(et, r, t, e, o, n), !0;
    case "dragenter":
      return ot = me(ot, r, t, e, o, n), !0;
    case "mouseover":
      return nt = me(nt, r, t, e, o, n), !0;
    case "pointerover":
      var a = n.pointerId;
      return Me.set(a, me(Me.get(a) || null, r, t, e, o, n)), !0;
    case "gotpointercapture":
      return a = n.pointerId, Oe.set(a, me(Oe.get(a) || null, r, t, e, o, n)), !0;
  }
  return !1;
}
function As(r) {
  var t = xt(r.target);
  if (t !== null) {
    var e = Nt(t);
    if (e !== null) {
      if (t = e.tag, t === 13) {
        if (t = js(e), t !== null) {
          r.blockedOn = t, Ds(r.priority, function() {
            Os(e);
          });
          return;
        }
      } else if (t === 3 && e.stateNode.current.memoizedState.isDehydrated) {
        r.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
        return;
      }
    }
  }
  r.blockedOn = null;
}
function ko(r) {
  if (r.blockedOn !== null)
    return !1;
  for (var t = r.targetContainers; 0 < t.length; ) {
    var e = ua(r.domEventName, r.eventSystemFlags, t[0], r.nativeEvent);
    if (e === null) {
      e = r.nativeEvent;
      var o = new e.constructor(e.type, e);
      la = o, e.target.dispatchEvent(o), la = null;
    } else
      return t = Ze(e), t !== null && ti(t), r.blockedOn = e, !1;
    t.shift();
  }
  return !0;
}
function Ji(r, t, e) {
  ko(r) && e.delete(t);
}
function pp() {
  ma = !1, et !== null && ko(et) && (et = null), ot !== null && ko(ot) && (ot = null), nt !== null && ko(nt) && (nt = null), Me.forEach(Ji), Oe.forEach(Ji);
}
function ue(r, t) {
  r.blockedOn === t && (r.blockedOn = null, ma || (ma = !0, vr.unstable_scheduleCallback(vr.unstable_NormalPriority, pp)));
}
function Be(r) {
  function t(n) {
    return ue(n, r);
  }
  if (0 < lo.length) {
    ue(lo[0], r);
    for (var e = 1; e < lo.length; e++) {
      var o = lo[e];
      o.blockedOn === r && (o.blockedOn = null);
    }
  }
  for (et !== null && ue(et, r), ot !== null && ue(ot, r), nt !== null && ue(nt, r), Me.forEach(t), Oe.forEach(t), e = 0; e < Jr.length; e++)
    o = Jr[e], o.blockedOn === r && (o.blockedOn = null);
  for (; 0 < Jr.length && (e = Jr[0], e.blockedOn === null); )
    As(e), e.blockedOn === null && Jr.shift();
}
var Kt = Yr.ReactCurrentBatchConfig, Do = !0;
function mp(r, t, e, o) {
  var n = T, a = Kt.transition;
  Kt.transition = null;
  try {
    T = 1, ei(r, t, e, o);
  } finally {
    T = n, Kt.transition = a;
  }
}
function up(r, t, e, o) {
  var n = T, a = Kt.transition;
  Kt.transition = null;
  try {
    T = 4, ei(r, t, e, o);
  } finally {
    T = n, Kt.transition = a;
  }
}
function ei(r, t, e, o) {
  if (Do) {
    var n = ua(r, t, e, o);
    if (n === null)
      An(r, t, o, Ao, e), Zi(r, o);
    else if (cp(n, r, t, e, o))
      o.stopPropagation();
    else if (Zi(r, o), t & 4 && -1 < dp.indexOf(r)) {
      for (; n !== null; ) {
        var a = Ze(n);
        if (a !== null && Ms(a), a = ua(r, t, e, o), a === null && An(r, t, o, Ao, e), a === n)
          break;
        n = a;
      }
      n !== null && o.stopPropagation();
    } else
      An(r, t, o, null, e);
  }
}
var Ao = null;
function ua(r, t, e, o) {
  if (Ao = null, r = Ja(o), r = xt(r), r !== null)
    if (t = Nt(r), t === null)
      r = null;
    else if (e = t.tag, e === 13) {
      if (r = js(t), r !== null)
        return r;
      r = null;
    } else if (e === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      r = null;
    } else
      t !== r && (r = null);
  return Ao = r, null;
}
function Is(r) {
  switch (r) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (rp()) {
        case qa:
          return 1;
        case Ns:
          return 4;
        case Oo:
        case tp:
          return 16;
        case Rs:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var rt = null, oi = null, zo = null;
function Fs() {
  if (zo)
    return zo;
  var r, t = oi, e = t.length, o, n = "value" in rt ? rt.value : rt.textContent, a = n.length;
  for (r = 0; r < e && t[r] === n[r]; r++)
    ;
  var i = e - r;
  for (o = 1; o <= i && t[e - o] === n[a - o]; o++)
    ;
  return zo = n.slice(r, 1 < o ? 1 - o : void 0);
}
function So(r) {
  var t = r.keyCode;
  return "charCode" in r ? (r = r.charCode, r === 0 && t === 13 && (r = 13)) : r = t, r === 10 && (r = 13), 32 <= r || r === 13 ? r : 0;
}
function so() {
  return !0;
}
function qi() {
  return !1;
}
function xr(r) {
  function t(e, o, n, a, i) {
    this._reactName = e, this._targetInst = n, this.type = o, this.nativeEvent = a, this.target = i, this.currentTarget = null;
    for (var l in r)
      r.hasOwnProperty(l) && (e = r[l], this[l] = e ? e(a) : a[l]);
    return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? so : qi, this.isPropagationStopped = qi, this;
  }
  return F(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var e = this.nativeEvent;
    e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = so);
  }, stopPropagation: function() {
    var e = this.nativeEvent;
    e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = so);
  }, persist: function() {
  }, isPersistent: so }), t;
}
var ie = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(r) {
  return r.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, ni = xr(ie), Xe = F({}, ie, { view: 0, detail: 0 }), bp = xr(Xe), Pn, Nn, be, an = F({}, Xe, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ai, button: 0, buttons: 0, relatedTarget: function(r) {
  return r.relatedTarget === void 0 ? r.fromElement === r.srcElement ? r.toElement : r.fromElement : r.relatedTarget;
}, movementX: function(r) {
  return "movementX" in r ? r.movementX : (r !== be && (be && r.type === "mousemove" ? (Pn = r.screenX - be.screenX, Nn = r.screenY - be.screenY) : Nn = Pn = 0, be = r), Pn);
}, movementY: function(r) {
  return "movementY" in r ? r.movementY : Nn;
} }), rl = xr(an), fp = F({}, an, { dataTransfer: 0 }), gp = xr(fp), vp = F({}, Xe, { relatedTarget: 0 }), Rn = xr(vp), hp = F({}, ie, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), xp = xr(hp), wp = F({}, ie, { clipboardData: function(r) {
  return "clipboardData" in r ? r.clipboardData : window.clipboardData;
} }), yp = xr(wp), kp = F({}, ie, { data: 0 }), tl = xr(kp), zp = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Sp = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Ep = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function jp(r) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(r) : (r = Ep[r]) ? !!t[r] : !1;
}
function ai() {
  return jp;
}
var Cp = F({}, Xe, { key: function(r) {
  if (r.key) {
    var t = zp[r.key] || r.key;
    if (t !== "Unidentified")
      return t;
  }
  return r.type === "keypress" ? (r = So(r), r === 13 ? "Enter" : String.fromCharCode(r)) : r.type === "keydown" || r.type === "keyup" ? Sp[r.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ai, charCode: function(r) {
  return r.type === "keypress" ? So(r) : 0;
}, keyCode: function(r) {
  return r.type === "keydown" || r.type === "keyup" ? r.keyCode : 0;
}, which: function(r) {
  return r.type === "keypress" ? So(r) : r.type === "keydown" || r.type === "keyup" ? r.keyCode : 0;
} }), _p = xr(Cp), Pp = F({}, an, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), el = xr(Pp), Np = F({}, Xe, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ai }), Rp = xr(Np), Tp = F({}, ie, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Lp = xr(Tp), Mp = F({}, an, {
  deltaX: function(r) {
    return "deltaX" in r ? r.deltaX : "wheelDeltaX" in r ? -r.wheelDeltaX : 0;
  },
  deltaY: function(r) {
    return "deltaY" in r ? r.deltaY : "wheelDeltaY" in r ? -r.wheelDeltaY : "wheelDelta" in r ? -r.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Op = xr(Mp), Bp = [9, 13, 27, 32], ii = Hr && "CompositionEvent" in window, Se = null;
Hr && "documentMode" in document && (Se = document.documentMode);
var Dp = Hr && "TextEvent" in window && !Se, Us = Hr && (!ii || Se && 8 < Se && 11 >= Se), ol = String.fromCharCode(32), nl = !1;
function $s(r, t) {
  switch (r) {
    case "keyup":
      return Bp.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Vs(r) {
  return r = r.detail, typeof r == "object" && "data" in r ? r.data : null;
}
var Mt = !1;
function Ap(r, t) {
  switch (r) {
    case "compositionend":
      return Vs(t);
    case "keypress":
      return t.which !== 32 ? null : (nl = !0, ol);
    case "textInput":
      return r = t.data, r === ol && nl ? null : r;
    default:
      return null;
  }
}
function Ip(r, t) {
  if (Mt)
    return r === "compositionend" || !ii && $s(r, t) ? (r = Fs(), zo = oi = rt = null, Mt = !1, r) : null;
  switch (r) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length)
          return t.char;
        if (t.which)
          return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Us && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Fp = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function al(r) {
  var t = r && r.nodeName && r.nodeName.toLowerCase();
  return t === "input" ? !!Fp[r.type] : t === "textarea";
}
function Hs(r, t, e, o) {
  ys(o), t = Io(t, "onChange"), 0 < t.length && (e = new ni("onChange", "change", null, e, o), r.push({ event: e, listeners: t }));
}
var Ee = null, De = null;
function Up(r) {
  td(r, 0);
}
function ln(r) {
  var t = Dt(r);
  if (bs(t))
    return r;
}
function $p(r, t) {
  if (r === "change")
    return t;
}
var Gs = !1;
if (Hr) {
  var Tn;
  if (Hr) {
    var Ln = "oninput" in document;
    if (!Ln) {
      var il = document.createElement("div");
      il.setAttribute("oninput", "return;"), Ln = typeof il.oninput == "function";
    }
    Tn = Ln;
  } else
    Tn = !1;
  Gs = Tn && (!document.documentMode || 9 < document.documentMode);
}
function ll() {
  Ee && (Ee.detachEvent("onpropertychange", Ws), De = Ee = null);
}
function Ws(r) {
  if (r.propertyName === "value" && ln(De)) {
    var t = [];
    Hs(t, De, r, Ja(r)), Es(Up, t);
  }
}
function Vp(r, t, e) {
  r === "focusin" ? (ll(), Ee = t, De = e, Ee.attachEvent("onpropertychange", Ws)) : r === "focusout" && ll();
}
function Hp(r) {
  if (r === "selectionchange" || r === "keyup" || r === "keydown")
    return ln(De);
}
function Gp(r, t) {
  if (r === "click")
    return ln(t);
}
function Wp(r, t) {
  if (r === "input" || r === "change")
    return ln(t);
}
function Qp(r, t) {
  return r === t && (r !== 0 || 1 / r === 1 / t) || r !== r && t !== t;
}
var Lr = typeof Object.is == "function" ? Object.is : Qp;
function Ae(r, t) {
  if (Lr(r, t))
    return !0;
  if (typeof r != "object" || r === null || typeof t != "object" || t === null)
    return !1;
  var e = Object.keys(r), o = Object.keys(t);
  if (e.length !== o.length)
    return !1;
  for (o = 0; o < e.length; o++) {
    var n = e[o];
    if (!Kn.call(t, n) || !Lr(r[n], t[n]))
      return !1;
  }
  return !0;
}
function sl(r) {
  for (; r && r.firstChild; )
    r = r.firstChild;
  return r;
}
function dl(r, t) {
  var e = sl(r);
  r = 0;
  for (var o; e; ) {
    if (e.nodeType === 3) {
      if (o = r + e.textContent.length, r <= t && o >= t)
        return { node: e, offset: t - r };
      r = o;
    }
    r: {
      for (; e; ) {
        if (e.nextSibling) {
          e = e.nextSibling;
          break r;
        }
        e = e.parentNode;
      }
      e = void 0;
    }
    e = sl(e);
  }
}
function Qs(r, t) {
  return r && t ? r === t ? !0 : r && r.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Qs(r, t.parentNode) : "contains" in r ? r.contains(t) : r.compareDocumentPosition ? !!(r.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Ys() {
  for (var r = window, t = To(); t instanceof r.HTMLIFrameElement; ) {
    try {
      var e = typeof t.contentWindow.location.href == "string";
    } catch {
      e = !1;
    }
    if (e)
      r = t.contentWindow;
    else
      break;
    t = To(r.document);
  }
  return t;
}
function li(r) {
  var t = r && r.nodeName && r.nodeName.toLowerCase();
  return t && (t === "input" && (r.type === "text" || r.type === "search" || r.type === "tel" || r.type === "url" || r.type === "password") || t === "textarea" || r.contentEditable === "true");
}
function Yp(r) {
  var t = Ys(), e = r.focusedElem, o = r.selectionRange;
  if (t !== e && e && e.ownerDocument && Qs(e.ownerDocument.documentElement, e)) {
    if (o !== null && li(e)) {
      if (t = o.start, r = o.end, r === void 0 && (r = t), "selectionStart" in e)
        e.selectionStart = t, e.selectionEnd = Math.min(r, e.value.length);
      else if (r = (t = e.ownerDocument || document) && t.defaultView || window, r.getSelection) {
        r = r.getSelection();
        var n = e.textContent.length, a = Math.min(o.start, n);
        o = o.end === void 0 ? a : Math.min(o.end, n), !r.extend && a > o && (n = o, o = a, a = n), n = dl(e, a);
        var i = dl(
          e,
          o
        );
        n && i && (r.rangeCount !== 1 || r.anchorNode !== n.node || r.anchorOffset !== n.offset || r.focusNode !== i.node || r.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(n.node, n.offset), r.removeAllRanges(), a > o ? (r.addRange(t), r.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), r.addRange(t)));
      }
    }
    for (t = [], r = e; r = r.parentNode; )
      r.nodeType === 1 && t.push({ element: r, left: r.scrollLeft, top: r.scrollTop });
    for (typeof e.focus == "function" && e.focus(), e = 0; e < t.length; e++)
      r = t[e], r.element.scrollLeft = r.left, r.element.scrollTop = r.top;
  }
}
var Kp = Hr && "documentMode" in document && 11 >= document.documentMode, Ot = null, ba = null, je = null, fa = !1;
function cl(r, t, e) {
  var o = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
  fa || Ot == null || Ot !== To(o) || (o = Ot, "selectionStart" in o && li(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), je && Ae(je, o) || (je = o, o = Io(ba, "onSelect"), 0 < o.length && (t = new ni("onSelect", "select", null, t, e), r.push({ event: t, listeners: o }), t.target = Ot)));
}
function co(r, t) {
  var e = {};
  return e[r.toLowerCase()] = t.toLowerCase(), e["Webkit" + r] = "webkit" + t, e["Moz" + r] = "moz" + t, e;
}
var Bt = { animationend: co("Animation", "AnimationEnd"), animationiteration: co("Animation", "AnimationIteration"), animationstart: co("Animation", "AnimationStart"), transitionend: co("Transition", "TransitionEnd") }, Mn = {}, Ks = {};
Hr && (Ks = document.createElement("div").style, "AnimationEvent" in window || (delete Bt.animationend.animation, delete Bt.animationiteration.animation, delete Bt.animationstart.animation), "TransitionEvent" in window || delete Bt.transitionend.transition);
function sn(r) {
  if (Mn[r])
    return Mn[r];
  if (!Bt[r])
    return r;
  var t = Bt[r], e;
  for (e in t)
    if (t.hasOwnProperty(e) && e in Ks)
      return Mn[r] = t[e];
  return r;
}
var Xs = sn("animationend"), Zs = sn("animationiteration"), Js = sn("animationstart"), qs = sn("transitionend"), rd = /* @__PURE__ */ new Map(), pl = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function mt(r, t) {
  rd.set(r, t), Pt(t, [r]);
}
for (var On = 0; On < pl.length; On++) {
  var Bn = pl[On], Xp = Bn.toLowerCase(), Zp = Bn[0].toUpperCase() + Bn.slice(1);
  mt(Xp, "on" + Zp);
}
mt(Xs, "onAnimationEnd");
mt(Zs, "onAnimationIteration");
mt(Js, "onAnimationStart");
mt("dblclick", "onDoubleClick");
mt("focusin", "onFocus");
mt("focusout", "onBlur");
mt(qs, "onTransitionEnd");
Jt("onMouseEnter", ["mouseout", "mouseover"]);
Jt("onMouseLeave", ["mouseout", "mouseover"]);
Jt("onPointerEnter", ["pointerout", "pointerover"]);
Jt("onPointerLeave", ["pointerout", "pointerover"]);
Pt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Pt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Pt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Pt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Pt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Pt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ye = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Jp = new Set("cancel close invalid load scroll toggle".split(" ").concat(ye));
function ml(r, t, e) {
  var o = r.type || "unknown-event";
  r.currentTarget = e, Xc(o, t, void 0, r), r.currentTarget = null;
}
function td(r, t) {
  t = (t & 4) !== 0;
  for (var e = 0; e < r.length; e++) {
    var o = r[e], n = o.event;
    o = o.listeners;
    r: {
      var a = void 0;
      if (t)
        for (var i = o.length - 1; 0 <= i; i--) {
          var l = o[i], s = l.instance, c = l.currentTarget;
          if (l = l.listener, s !== a && n.isPropagationStopped())
            break r;
          ml(n, l, c), a = s;
        }
      else
        for (i = 0; i < o.length; i++) {
          if (l = o[i], s = l.instance, c = l.currentTarget, l = l.listener, s !== a && n.isPropagationStopped())
            break r;
          ml(n, l, c), a = s;
        }
    }
  }
  if (Mo)
    throw r = ca, Mo = !1, ca = null, r;
}
function M(r, t) {
  var e = t[wa];
  e === void 0 && (e = t[wa] = /* @__PURE__ */ new Set());
  var o = r + "__bubble";
  e.has(o) || (ed(t, r, 2, !1), e.add(o));
}
function Dn(r, t, e) {
  var o = 0;
  t && (o |= 4), ed(e, r, o, t);
}
var po = "_reactListening" + Math.random().toString(36).slice(2);
function Ie(r) {
  if (!r[po]) {
    r[po] = !0, ds.forEach(function(e) {
      e !== "selectionchange" && (Jp.has(e) || Dn(e, !1, r), Dn(e, !0, r));
    });
    var t = r.nodeType === 9 ? r : r.ownerDocument;
    t === null || t[po] || (t[po] = !0, Dn("selectionchange", !1, t));
  }
}
function ed(r, t, e, o) {
  switch (Is(t)) {
    case 1:
      var n = mp;
      break;
    case 4:
      n = up;
      break;
    default:
      n = ei;
  }
  e = n.bind(null, t, e, r), n = void 0, !da || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (n = !0), o ? n !== void 0 ? r.addEventListener(t, e, { capture: !0, passive: n }) : r.addEventListener(t, e, !0) : n !== void 0 ? r.addEventListener(t, e, { passive: n }) : r.addEventListener(t, e, !1);
}
function An(r, t, e, o, n) {
  var a = o;
  if (!(t & 1) && !(t & 2) && o !== null)
    r:
      for (; ; ) {
        if (o === null)
          return;
        var i = o.tag;
        if (i === 3 || i === 4) {
          var l = o.stateNode.containerInfo;
          if (l === n || l.nodeType === 8 && l.parentNode === n)
            break;
          if (i === 4)
            for (i = o.return; i !== null; ) {
              var s = i.tag;
              if ((s === 3 || s === 4) && (s = i.stateNode.containerInfo, s === n || s.nodeType === 8 && s.parentNode === n))
                return;
              i = i.return;
            }
          for (; l !== null; ) {
            if (i = xt(l), i === null)
              return;
            if (s = i.tag, s === 5 || s === 6) {
              o = a = i;
              continue r;
            }
            l = l.parentNode;
          }
        }
        o = o.return;
      }
  Es(function() {
    var c = a, b = Ja(e), f = [];
    r: {
      var u = rd.get(r);
      if (u !== void 0) {
        var h = ni, x = r;
        switch (r) {
          case "keypress":
            if (So(e) === 0)
              break r;
          case "keydown":
          case "keyup":
            h = _p;
            break;
          case "focusin":
            x = "focus", h = Rn;
            break;
          case "focusout":
            x = "blur", h = Rn;
            break;
          case "beforeblur":
          case "afterblur":
            h = Rn;
            break;
          case "click":
            if (e.button === 2)
              break r;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = rl;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = gp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = Rp;
            break;
          case Xs:
          case Zs:
          case Js:
            h = xp;
            break;
          case qs:
            h = Lp;
            break;
          case "scroll":
            h = bp;
            break;
          case "wheel":
            h = Op;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = yp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = el;
        }
        var w = (t & 4) !== 0, B = !w && r === "scroll", p = w ? u !== null ? u + "Capture" : null : u;
        w = [];
        for (var d = c, m; d !== null; ) {
          m = d;
          var g = m.stateNode;
          if (m.tag === 5 && g !== null && (m = g, p !== null && (g = Le(d, p), g != null && w.push(Fe(d, g, m)))), B)
            break;
          d = d.return;
        }
        0 < w.length && (u = new h(u, x, null, e, b), f.push({ event: u, listeners: w }));
      }
    }
    if (!(t & 7)) {
      r: {
        if (u = r === "mouseover" || r === "pointerover", h = r === "mouseout" || r === "pointerout", u && e !== la && (x = e.relatedTarget || e.fromElement) && (xt(x) || x[Gr]))
          break r;
        if ((h || u) && (u = b.window === b ? b : (u = b.ownerDocument) ? u.defaultView || u.parentWindow : window, h ? (x = e.relatedTarget || e.toElement, h = c, x = x ? xt(x) : null, x !== null && (B = Nt(x), x !== B || x.tag !== 5 && x.tag !== 6) && (x = null)) : (h = null, x = c), h !== x)) {
          if (w = rl, g = "onMouseLeave", p = "onMouseEnter", d = "mouse", (r === "pointerout" || r === "pointerover") && (w = el, g = "onPointerLeave", p = "onPointerEnter", d = "pointer"), B = h == null ? u : Dt(h), m = x == null ? u : Dt(x), u = new w(g, d + "leave", h, e, b), u.target = B, u.relatedTarget = m, g = null, xt(b) === c && (w = new w(p, d + "enter", x, e, b), w.target = m, w.relatedTarget = B, g = w), B = g, h && x)
            t: {
              for (w = h, p = x, d = 0, m = w; m; m = Rt(m))
                d++;
              for (m = 0, g = p; g; g = Rt(g))
                m++;
              for (; 0 < d - m; )
                w = Rt(w), d--;
              for (; 0 < m - d; )
                p = Rt(p), m--;
              for (; d--; ) {
                if (w === p || p !== null && w === p.alternate)
                  break t;
                w = Rt(w), p = Rt(p);
              }
              w = null;
            }
          else
            w = null;
          h !== null && ul(f, u, h, w, !1), x !== null && B !== null && ul(f, B, x, w, !0);
        }
      }
      r: {
        if (u = c ? Dt(c) : window, h = u.nodeName && u.nodeName.toLowerCase(), h === "select" || h === "input" && u.type === "file")
          var k = $p;
        else if (al(u))
          if (Gs)
            k = Wp;
          else {
            k = Hp;
            var S = Vp;
          }
        else
          (h = u.nodeName) && h.toLowerCase() === "input" && (u.type === "checkbox" || u.type === "radio") && (k = Gp);
        if (k && (k = k(r, c))) {
          Hs(f, k, e, b);
          break r;
        }
        S && S(r, u, c), r === "focusout" && (S = u._wrapperState) && S.controlled && u.type === "number" && ea(u, "number", u.value);
      }
      switch (S = c ? Dt(c) : window, r) {
        case "focusin":
          (al(S) || S.contentEditable === "true") && (Ot = S, ba = c, je = null);
          break;
        case "focusout":
          je = ba = Ot = null;
          break;
        case "mousedown":
          fa = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          fa = !1, cl(f, e, b);
          break;
        case "selectionchange":
          if (Kp)
            break;
        case "keydown":
        case "keyup":
          cl(f, e, b);
      }
      var E;
      if (ii)
        r: {
          switch (r) {
            case "compositionstart":
              var j = "onCompositionStart";
              break r;
            case "compositionend":
              j = "onCompositionEnd";
              break r;
            case "compositionupdate":
              j = "onCompositionUpdate";
              break r;
          }
          j = void 0;
        }
      else
        Mt ? $s(r, e) && (j = "onCompositionEnd") : r === "keydown" && e.keyCode === 229 && (j = "onCompositionStart");
      j && (Us && e.locale !== "ko" && (Mt || j !== "onCompositionStart" ? j === "onCompositionEnd" && Mt && (E = Fs()) : (rt = b, oi = "value" in rt ? rt.value : rt.textContent, Mt = !0)), S = Io(c, j), 0 < S.length && (j = new tl(j, r, null, e, b), f.push({ event: j, listeners: S }), E ? j.data = E : (E = Vs(e), E !== null && (j.data = E)))), (E = Dp ? Ap(r, e) : Ip(r, e)) && (c = Io(c, "onBeforeInput"), 0 < c.length && (b = new tl("onBeforeInput", "beforeinput", null, e, b), f.push({ event: b, listeners: c }), b.data = E));
    }
    td(f, t);
  });
}
function Fe(r, t, e) {
  return { instance: r, listener: t, currentTarget: e };
}
function Io(r, t) {
  for (var e = t + "Capture", o = []; r !== null; ) {
    var n = r, a = n.stateNode;
    n.tag === 5 && a !== null && (n = a, a = Le(r, e), a != null && o.unshift(Fe(r, a, n)), a = Le(r, t), a != null && o.push(Fe(r, a, n))), r = r.return;
  }
  return o;
}
function Rt(r) {
  if (r === null)
    return null;
  do
    r = r.return;
  while (r && r.tag !== 5);
  return r || null;
}
function ul(r, t, e, o, n) {
  for (var a = t._reactName, i = []; e !== null && e !== o; ) {
    var l = e, s = l.alternate, c = l.stateNode;
    if (s !== null && s === o)
      break;
    l.tag === 5 && c !== null && (l = c, n ? (s = Le(e, a), s != null && i.unshift(Fe(e, s, l))) : n || (s = Le(e, a), s != null && i.push(Fe(e, s, l)))), e = e.return;
  }
  i.length !== 0 && r.push({ event: t, listeners: i });
}
var qp = /\r\n?/g, rm = /\u0000|\uFFFD/g;
function bl(r) {
  return (typeof r == "string" ? r : "" + r).replace(qp, `
`).replace(rm, "");
}
function mo(r, t, e) {
  if (t = bl(t), bl(r) !== t && e)
    throw Error(v(425));
}
function Fo() {
}
var ga = null, va = null;
function ha(r, t) {
  return r === "textarea" || r === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var xa = typeof setTimeout == "function" ? setTimeout : void 0, tm = typeof clearTimeout == "function" ? clearTimeout : void 0, fl = typeof Promise == "function" ? Promise : void 0, em = typeof queueMicrotask == "function" ? queueMicrotask : typeof fl < "u" ? function(r) {
  return fl.resolve(null).then(r).catch(om);
} : xa;
function om(r) {
  setTimeout(function() {
    throw r;
  });
}
function In(r, t) {
  var e = t, o = 0;
  do {
    var n = e.nextSibling;
    if (r.removeChild(e), n && n.nodeType === 8)
      if (e = n.data, e === "/$") {
        if (o === 0) {
          r.removeChild(n), Be(t);
          return;
        }
        o--;
      } else
        e !== "$" && e !== "$?" && e !== "$!" || o++;
    e = n;
  } while (e);
  Be(t);
}
function at(r) {
  for (; r != null; r = r.nextSibling) {
    var t = r.nodeType;
    if (t === 1 || t === 3)
      break;
    if (t === 8) {
      if (t = r.data, t === "$" || t === "$!" || t === "$?")
        break;
      if (t === "/$")
        return null;
    }
  }
  return r;
}
function gl(r) {
  r = r.previousSibling;
  for (var t = 0; r; ) {
    if (r.nodeType === 8) {
      var e = r.data;
      if (e === "$" || e === "$!" || e === "$?") {
        if (t === 0)
          return r;
        t--;
      } else
        e === "/$" && t++;
    }
    r = r.previousSibling;
  }
  return null;
}
var le = Math.random().toString(36).slice(2), Br = "__reactFiber$" + le, Ue = "__reactProps$" + le, Gr = "__reactContainer$" + le, wa = "__reactEvents$" + le, nm = "__reactListeners$" + le, am = "__reactHandles$" + le;
function xt(r) {
  var t = r[Br];
  if (t)
    return t;
  for (var e = r.parentNode; e; ) {
    if (t = e[Gr] || e[Br]) {
      if (e = t.alternate, t.child !== null || e !== null && e.child !== null)
        for (r = gl(r); r !== null; ) {
          if (e = r[Br])
            return e;
          r = gl(r);
        }
      return t;
    }
    r = e, e = r.parentNode;
  }
  return null;
}
function Ze(r) {
  return r = r[Br] || r[Gr], !r || r.tag !== 5 && r.tag !== 6 && r.tag !== 13 && r.tag !== 3 ? null : r;
}
function Dt(r) {
  if (r.tag === 5 || r.tag === 6)
    return r.stateNode;
  throw Error(v(33));
}
function dn(r) {
  return r[Ue] || null;
}
var ya = [], At = -1;
function ut(r) {
  return { current: r };
}
function O(r) {
  0 > At || (r.current = ya[At], ya[At] = null, At--);
}
function L(r, t) {
  At++, ya[At] = r.current, r.current = t;
}
var pt = {}, nr = ut(pt), pr = ut(!1), St = pt;
function qt(r, t) {
  var e = r.type.contextTypes;
  if (!e)
    return pt;
  var o = r.stateNode;
  if (o && o.__reactInternalMemoizedUnmaskedChildContext === t)
    return o.__reactInternalMemoizedMaskedChildContext;
  var n = {}, a;
  for (a in e)
    n[a] = t[a];
  return o && (r = r.stateNode, r.__reactInternalMemoizedUnmaskedChildContext = t, r.__reactInternalMemoizedMaskedChildContext = n), n;
}
function mr(r) {
  return r = r.childContextTypes, r != null;
}
function Uo() {
  O(pr), O(nr);
}
function vl(r, t, e) {
  if (nr.current !== pt)
    throw Error(v(168));
  L(nr, t), L(pr, e);
}
function od(r, t, e) {
  var o = r.stateNode;
  if (t = t.childContextTypes, typeof o.getChildContext != "function")
    return e;
  o = o.getChildContext();
  for (var n in o)
    if (!(n in t))
      throw Error(v(108, Vc(r) || "Unknown", n));
  return F({}, e, o);
}
function $o(r) {
  return r = (r = r.stateNode) && r.__reactInternalMemoizedMergedChildContext || pt, St = nr.current, L(nr, r), L(pr, pr.current), !0;
}
function hl(r, t, e) {
  var o = r.stateNode;
  if (!o)
    throw Error(v(169));
  e ? (r = od(r, t, St), o.__reactInternalMemoizedMergedChildContext = r, O(pr), O(nr), L(nr, r)) : O(pr), L(pr, e);
}
var Fr = null, cn = !1, Fn = !1;
function nd(r) {
  Fr === null ? Fr = [r] : Fr.push(r);
}
function im(r) {
  cn = !0, nd(r);
}
function bt() {
  if (!Fn && Fr !== null) {
    Fn = !0;
    var r = 0, t = T;
    try {
      var e = Fr;
      for (T = 1; r < e.length; r++) {
        var o = e[r];
        do
          o = o(!0);
        while (o !== null);
      }
      Fr = null, cn = !1;
    } catch (n) {
      throw Fr !== null && (Fr = Fr.slice(r + 1)), Ps(qa, bt), n;
    } finally {
      T = t, Fn = !1;
    }
  }
  return null;
}
var It = [], Ft = 0, Vo = null, Ho = 0, wr = [], yr = 0, Et = null, Ur = 1, $r = "";
function vt(r, t) {
  It[Ft++] = Ho, It[Ft++] = Vo, Vo = r, Ho = t;
}
function ad(r, t, e) {
  wr[yr++] = Ur, wr[yr++] = $r, wr[yr++] = Et, Et = r;
  var o = Ur;
  r = $r;
  var n = 32 - Rr(o) - 1;
  o &= ~(1 << n), e += 1;
  var a = 32 - Rr(t) + n;
  if (30 < a) {
    var i = n - n % 5;
    a = (o & (1 << i) - 1).toString(32), o >>= i, n -= i, Ur = 1 << 32 - Rr(t) + n | e << n | o, $r = a + r;
  } else
    Ur = 1 << a | e << n | o, $r = r;
}
function si(r) {
  r.return !== null && (vt(r, 1), ad(r, 1, 0));
}
function di(r) {
  for (; r === Vo; )
    Vo = It[--Ft], It[Ft] = null, Ho = It[--Ft], It[Ft] = null;
  for (; r === Et; )
    Et = wr[--yr], wr[yr] = null, $r = wr[--yr], wr[yr] = null, Ur = wr[--yr], wr[yr] = null;
}
var gr = null, fr = null, D = !1, Nr = null;
function id(r, t) {
  var e = kr(5, null, null, 0);
  e.elementType = "DELETED", e.stateNode = t, e.return = r, t = r.deletions, t === null ? (r.deletions = [e], r.flags |= 16) : t.push(e);
}
function xl(r, t) {
  switch (r.tag) {
    case 5:
      var e = r.type;
      return t = t.nodeType !== 1 || e.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (r.stateNode = t, gr = r, fr = at(t.firstChild), !0) : !1;
    case 6:
      return t = r.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (r.stateNode = t, gr = r, fr = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (e = Et !== null ? { id: Ur, overflow: $r } : null, r.memoizedState = { dehydrated: t, treeContext: e, retryLane: 1073741824 }, e = kr(18, null, null, 0), e.stateNode = t, e.return = r, r.child = e, gr = r, fr = null, !0) : !1;
    default:
      return !1;
  }
}
function ka(r) {
  return (r.mode & 1) !== 0 && (r.flags & 128) === 0;
}
function za(r) {
  if (D) {
    var t = fr;
    if (t) {
      var e = t;
      if (!xl(r, t)) {
        if (ka(r))
          throw Error(v(418));
        t = at(e.nextSibling);
        var o = gr;
        t && xl(r, t) ? id(o, e) : (r.flags = r.flags & -4097 | 2, D = !1, gr = r);
      }
    } else {
      if (ka(r))
        throw Error(v(418));
      r.flags = r.flags & -4097 | 2, D = !1, gr = r;
    }
  }
}
function wl(r) {
  for (r = r.return; r !== null && r.tag !== 5 && r.tag !== 3 && r.tag !== 13; )
    r = r.return;
  gr = r;
}
function uo(r) {
  if (r !== gr)
    return !1;
  if (!D)
    return wl(r), D = !0, !1;
  var t;
  if ((t = r.tag !== 3) && !(t = r.tag !== 5) && (t = r.type, t = t !== "head" && t !== "body" && !ha(r.type, r.memoizedProps)), t && (t = fr)) {
    if (ka(r))
      throw ld(), Error(v(418));
    for (; t; )
      id(r, t), t = at(t.nextSibling);
  }
  if (wl(r), r.tag === 13) {
    if (r = r.memoizedState, r = r !== null ? r.dehydrated : null, !r)
      throw Error(v(317));
    r: {
      for (r = r.nextSibling, t = 0; r; ) {
        if (r.nodeType === 8) {
          var e = r.data;
          if (e === "/$") {
            if (t === 0) {
              fr = at(r.nextSibling);
              break r;
            }
            t--;
          } else
            e !== "$" && e !== "$!" && e !== "$?" || t++;
        }
        r = r.nextSibling;
      }
      fr = null;
    }
  } else
    fr = gr ? at(r.stateNode.nextSibling) : null;
  return !0;
}
function ld() {
  for (var r = fr; r; )
    r = at(r.nextSibling);
}
function re() {
  fr = gr = null, D = !1;
}
function ci(r) {
  Nr === null ? Nr = [r] : Nr.push(r);
}
var lm = Yr.ReactCurrentBatchConfig;
function _r(r, t) {
  if (r && r.defaultProps) {
    t = F({}, t), r = r.defaultProps;
    for (var e in r)
      t[e] === void 0 && (t[e] = r[e]);
    return t;
  }
  return t;
}
var Go = ut(null), Wo = null, Ut = null, pi = null;
function mi() {
  pi = Ut = Wo = null;
}
function ui(r) {
  var t = Go.current;
  O(Go), r._currentValue = t;
}
function Sa(r, t, e) {
  for (; r !== null; ) {
    var o = r.alternate;
    if ((r.childLanes & t) !== t ? (r.childLanes |= t, o !== null && (o.childLanes |= t)) : o !== null && (o.childLanes & t) !== t && (o.childLanes |= t), r === e)
      break;
    r = r.return;
  }
}
function Xt(r, t) {
  Wo = r, pi = Ut = null, r = r.dependencies, r !== null && r.firstContext !== null && (r.lanes & t && (cr = !0), r.firstContext = null);
}
function Sr(r) {
  var t = r._currentValue;
  if (pi !== r)
    if (r = { context: r, memoizedValue: t, next: null }, Ut === null) {
      if (Wo === null)
        throw Error(v(308));
      Ut = r, Wo.dependencies = { lanes: 0, firstContext: r };
    } else
      Ut = Ut.next = r;
  return t;
}
var wt = null;
function bi(r) {
  wt === null ? wt = [r] : wt.push(r);
}
function sd(r, t, e, o) {
  var n = t.interleaved;
  return n === null ? (e.next = e, bi(t)) : (e.next = n.next, n.next = e), t.interleaved = e, Wr(r, o);
}
function Wr(r, t) {
  r.lanes |= t;
  var e = r.alternate;
  for (e !== null && (e.lanes |= t), e = r, r = r.return; r !== null; )
    r.childLanes |= t, e = r.alternate, e !== null && (e.childLanes |= t), e = r, r = r.return;
  return e.tag === 3 ? e.stateNode : null;
}
var Zr = !1;
function fi(r) {
  r.updateQueue = { baseState: r.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function dd(r, t) {
  r = r.updateQueue, t.updateQueue === r && (t.updateQueue = { baseState: r.baseState, firstBaseUpdate: r.firstBaseUpdate, lastBaseUpdate: r.lastBaseUpdate, shared: r.shared, effects: r.effects });
}
function Vr(r, t) {
  return { eventTime: r, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function it(r, t, e) {
  var o = r.updateQueue;
  if (o === null)
    return null;
  if (o = o.shared, R & 2) {
    var n = o.pending;
    return n === null ? t.next = t : (t.next = n.next, n.next = t), o.pending = t, Wr(r, e);
  }
  return n = o.interleaved, n === null ? (t.next = t, bi(o)) : (t.next = n.next, n.next = t), o.interleaved = t, Wr(r, e);
}
function Eo(r, t, e) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (e & 4194240) !== 0)) {
    var o = t.lanes;
    o &= r.pendingLanes, e |= o, t.lanes = e, ri(r, e);
  }
}
function yl(r, t) {
  var e = r.updateQueue, o = r.alternate;
  if (o !== null && (o = o.updateQueue, e === o)) {
    var n = null, a = null;
    if (e = e.firstBaseUpdate, e !== null) {
      do {
        var i = { eventTime: e.eventTime, lane: e.lane, tag: e.tag, payload: e.payload, callback: e.callback, next: null };
        a === null ? n = a = i : a = a.next = i, e = e.next;
      } while (e !== null);
      a === null ? n = a = t : a = a.next = t;
    } else
      n = a = t;
    e = { baseState: o.baseState, firstBaseUpdate: n, lastBaseUpdate: a, shared: o.shared, effects: o.effects }, r.updateQueue = e;
    return;
  }
  r = e.lastBaseUpdate, r === null ? e.firstBaseUpdate = t : r.next = t, e.lastBaseUpdate = t;
}
function Qo(r, t, e, o) {
  var n = r.updateQueue;
  Zr = !1;
  var a = n.firstBaseUpdate, i = n.lastBaseUpdate, l = n.shared.pending;
  if (l !== null) {
    n.shared.pending = null;
    var s = l, c = s.next;
    s.next = null, i === null ? a = c : i.next = c, i = s;
    var b = r.alternate;
    b !== null && (b = b.updateQueue, l = b.lastBaseUpdate, l !== i && (l === null ? b.firstBaseUpdate = c : l.next = c, b.lastBaseUpdate = s));
  }
  if (a !== null) {
    var f = n.baseState;
    i = 0, b = c = s = null, l = a;
    do {
      var u = l.lane, h = l.eventTime;
      if ((o & u) === u) {
        b !== null && (b = b.next = {
          eventTime: h,
          lane: 0,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null
        });
        r: {
          var x = r, w = l;
          switch (u = t, h = e, w.tag) {
            case 1:
              if (x = w.payload, typeof x == "function") {
                f = x.call(h, f, u);
                break r;
              }
              f = x;
              break r;
            case 3:
              x.flags = x.flags & -65537 | 128;
            case 0:
              if (x = w.payload, u = typeof x == "function" ? x.call(h, f, u) : x, u == null)
                break r;
              f = F({}, f, u);
              break r;
            case 2:
              Zr = !0;
          }
        }
        l.callback !== null && l.lane !== 0 && (r.flags |= 64, u = n.effects, u === null ? n.effects = [l] : u.push(l));
      } else
        h = { eventTime: h, lane: u, tag: l.tag, payload: l.payload, callback: l.callback, next: null }, b === null ? (c = b = h, s = f) : b = b.next = h, i |= u;
      if (l = l.next, l === null) {
        if (l = n.shared.pending, l === null)
          break;
        u = l, l = u.next, u.next = null, n.lastBaseUpdate = u, n.shared.pending = null;
      }
    } while (1);
    if (b === null && (s = f), n.baseState = s, n.firstBaseUpdate = c, n.lastBaseUpdate = b, t = n.shared.interleaved, t !== null) {
      n = t;
      do
        i |= n.lane, n = n.next;
      while (n !== t);
    } else
      a === null && (n.shared.lanes = 0);
    Ct |= i, r.lanes = i, r.memoizedState = f;
  }
}
function kl(r, t, e) {
  if (r = t.effects, t.effects = null, r !== null)
    for (t = 0; t < r.length; t++) {
      var o = r[t], n = o.callback;
      if (n !== null) {
        if (o.callback = null, o = e, typeof n != "function")
          throw Error(v(191, n));
        n.call(o);
      }
    }
}
var cd = new ss.Component().refs;
function Ea(r, t, e, o) {
  t = r.memoizedState, e = e(o, t), e = e == null ? t : F({}, t, e), r.memoizedState = e, r.lanes === 0 && (r.updateQueue.baseState = e);
}
var pn = { isMounted: function(r) {
  return (r = r._reactInternals) ? Nt(r) === r : !1;
}, enqueueSetState: function(r, t, e) {
  r = r._reactInternals;
  var o = ir(), n = st(r), a = Vr(o, n);
  a.payload = t, e != null && (a.callback = e), t = it(r, a, n), t !== null && (Tr(t, r, n, o), Eo(t, r, n));
}, enqueueReplaceState: function(r, t, e) {
  r = r._reactInternals;
  var o = ir(), n = st(r), a = Vr(o, n);
  a.tag = 1, a.payload = t, e != null && (a.callback = e), t = it(r, a, n), t !== null && (Tr(t, r, n, o), Eo(t, r, n));
}, enqueueForceUpdate: function(r, t) {
  r = r._reactInternals;
  var e = ir(), o = st(r), n = Vr(e, o);
  n.tag = 2, t != null && (n.callback = t), t = it(r, n, o), t !== null && (Tr(t, r, o, e), Eo(t, r, o));
} };
function zl(r, t, e, o, n, a, i) {
  return r = r.stateNode, typeof r.shouldComponentUpdate == "function" ? r.shouldComponentUpdate(o, a, i) : t.prototype && t.prototype.isPureReactComponent ? !Ae(e, o) || !Ae(n, a) : !0;
}
function pd(r, t, e) {
  var o = !1, n = pt, a = t.contextType;
  return typeof a == "object" && a !== null ? a = Sr(a) : (n = mr(t) ? St : nr.current, o = t.contextTypes, a = (o = o != null) ? qt(r, n) : pt), t = new t(e, a), r.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = pn, r.stateNode = t, t._reactInternals = r, o && (r = r.stateNode, r.__reactInternalMemoizedUnmaskedChildContext = n, r.__reactInternalMemoizedMaskedChildContext = a), t;
}
function Sl(r, t, e, o) {
  r = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(e, o), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(e, o), t.state !== r && pn.enqueueReplaceState(t, t.state, null);
}
function ja(r, t, e, o) {
  var n = r.stateNode;
  n.props = e, n.state = r.memoizedState, n.refs = cd, fi(r);
  var a = t.contextType;
  typeof a == "object" && a !== null ? n.context = Sr(a) : (a = mr(t) ? St : nr.current, n.context = qt(r, a)), n.state = r.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (Ea(r, t, a, e), n.state = r.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (t = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), t !== n.state && pn.enqueueReplaceState(n, n.state, null), Qo(r, e, n, o), n.state = r.memoizedState), typeof n.componentDidMount == "function" && (r.flags |= 4194308);
}
function fe(r, t, e) {
  if (r = e.ref, r !== null && typeof r != "function" && typeof r != "object") {
    if (e._owner) {
      if (e = e._owner, e) {
        if (e.tag !== 1)
          throw Error(v(309));
        var o = e.stateNode;
      }
      if (!o)
        throw Error(v(147, r));
      var n = o, a = "" + r;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === a ? t.ref : (t = function(i) {
        var l = n.refs;
        l === cd && (l = n.refs = {}), i === null ? delete l[a] : l[a] = i;
      }, t._stringRef = a, t);
    }
    if (typeof r != "string")
      throw Error(v(284));
    if (!e._owner)
      throw Error(v(290, r));
  }
  return r;
}
function bo(r, t) {
  throw r = Object.prototype.toString.call(t), Error(v(31, r === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : r));
}
function El(r) {
  var t = r._init;
  return t(r._payload);
}
function md(r) {
  function t(p, d) {
    if (r) {
      var m = p.deletions;
      m === null ? (p.deletions = [d], p.flags |= 16) : m.push(d);
    }
  }
  function e(p, d) {
    if (!r)
      return null;
    for (; d !== null; )
      t(p, d), d = d.sibling;
    return null;
  }
  function o(p, d) {
    for (p = /* @__PURE__ */ new Map(); d !== null; )
      d.key !== null ? p.set(d.key, d) : p.set(d.index, d), d = d.sibling;
    return p;
  }
  function n(p, d) {
    return p = dt(p, d), p.index = 0, p.sibling = null, p;
  }
  function a(p, d, m) {
    return p.index = m, r ? (m = p.alternate, m !== null ? (m = m.index, m < d ? (p.flags |= 2, d) : m) : (p.flags |= 2, d)) : (p.flags |= 1048576, d);
  }
  function i(p) {
    return r && p.alternate === null && (p.flags |= 2), p;
  }
  function l(p, d, m, g) {
    return d === null || d.tag !== 6 ? (d = Qn(m, p.mode, g), d.return = p, d) : (d = n(d, m), d.return = p, d);
  }
  function s(p, d, m, g) {
    var k = m.type;
    return k === Lt ? b(p, d, m.props.children, g, m.key) : d !== null && (d.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Xr && El(k) === d.type) ? (g = n(d, m.props), g.ref = fe(p, d, m), g.return = p, g) : (g = Ro(m.type, m.key, m.props, null, p.mode, g), g.ref = fe(p, d, m), g.return = p, g);
  }
  function c(p, d, m, g) {
    return d === null || d.tag !== 4 || d.stateNode.containerInfo !== m.containerInfo || d.stateNode.implementation !== m.implementation ? (d = Yn(m, p.mode, g), d.return = p, d) : (d = n(d, m.children || []), d.return = p, d);
  }
  function b(p, d, m, g, k) {
    return d === null || d.tag !== 7 ? (d = zt(m, p.mode, g, k), d.return = p, d) : (d = n(d, m), d.return = p, d);
  }
  function f(p, d, m) {
    if (typeof d == "string" && d !== "" || typeof d == "number")
      return d = Qn("" + d, p.mode, m), d.return = p, d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case eo:
          return m = Ro(d.type, d.key, d.props, null, p.mode, m), m.ref = fe(p, null, d), m.return = p, m;
        case Tt:
          return d = Yn(d, p.mode, m), d.return = p, d;
        case Xr:
          var g = d._init;
          return f(p, g(d._payload), m);
      }
      if (xe(d) || ce(d))
        return d = zt(d, p.mode, m, null), d.return = p, d;
      bo(p, d);
    }
    return null;
  }
  function u(p, d, m, g) {
    var k = d !== null ? d.key : null;
    if (typeof m == "string" && m !== "" || typeof m == "number")
      return k !== null ? null : l(p, d, "" + m, g);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case eo:
          return m.key === k ? s(p, d, m, g) : null;
        case Tt:
          return m.key === k ? c(p, d, m, g) : null;
        case Xr:
          return k = m._init, u(
            p,
            d,
            k(m._payload),
            g
          );
      }
      if (xe(m) || ce(m))
        return k !== null ? null : b(p, d, m, g, null);
      bo(p, m);
    }
    return null;
  }
  function h(p, d, m, g, k) {
    if (typeof g == "string" && g !== "" || typeof g == "number")
      return p = p.get(m) || null, l(d, p, "" + g, k);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case eo:
          return p = p.get(g.key === null ? m : g.key) || null, s(d, p, g, k);
        case Tt:
          return p = p.get(g.key === null ? m : g.key) || null, c(d, p, g, k);
        case Xr:
          var S = g._init;
          return h(p, d, m, S(g._payload), k);
      }
      if (xe(g) || ce(g))
        return p = p.get(m) || null, b(d, p, g, k, null);
      bo(d, g);
    }
    return null;
  }
  function x(p, d, m, g) {
    for (var k = null, S = null, E = d, j = d = 0, V = null; E !== null && j < m.length; j++) {
      E.index > j ? (V = E, E = null) : V = E.sibling;
      var N = u(p, E, m[j], g);
      if (N === null) {
        E === null && (E = V);
        break;
      }
      r && E && N.alternate === null && t(p, E), d = a(N, d, j), S === null ? k = N : S.sibling = N, S = N, E = V;
    }
    if (j === m.length)
      return e(p, E), D && vt(p, j), k;
    if (E === null) {
      for (; j < m.length; j++)
        E = f(p, m[j], g), E !== null && (d = a(E, d, j), S === null ? k = E : S.sibling = E, S = E);
      return D && vt(p, j), k;
    }
    for (E = o(p, E); j < m.length; j++)
      V = h(E, p, j, m[j], g), V !== null && (r && V.alternate !== null && E.delete(V.key === null ? j : V.key), d = a(V, d, j), S === null ? k = V : S.sibling = V, S = V);
    return r && E.forEach(function(jr) {
      return t(p, jr);
    }), D && vt(p, j), k;
  }
  function w(p, d, m, g) {
    var k = ce(m);
    if (typeof k != "function")
      throw Error(v(150));
    if (m = k.call(m), m == null)
      throw Error(v(151));
    for (var S = k = null, E = d, j = d = 0, V = null, N = m.next(); E !== null && !N.done; j++, N = m.next()) {
      E.index > j ? (V = E, E = null) : V = E.sibling;
      var jr = u(p, E, N.value, g);
      if (jr === null) {
        E === null && (E = V);
        break;
      }
      r && E && jr.alternate === null && t(p, E), d = a(jr, d, j), S === null ? k = jr : S.sibling = jr, S = jr, E = V;
    }
    if (N.done)
      return e(
        p,
        E
      ), D && vt(p, j), k;
    if (E === null) {
      for (; !N.done; j++, N = m.next())
        N = f(p, N.value, g), N !== null && (d = a(N, d, j), S === null ? k = N : S.sibling = N, S = N);
      return D && vt(p, j), k;
    }
    for (E = o(p, E); !N.done; j++, N = m.next())
      N = h(E, p, j, N.value, g), N !== null && (r && N.alternate !== null && E.delete(N.key === null ? j : N.key), d = a(N, d, j), S === null ? k = N : S.sibling = N, S = N);
    return r && E.forEach(function(se) {
      return t(p, se);
    }), D && vt(p, j), k;
  }
  function B(p, d, m, g) {
    if (typeof m == "object" && m !== null && m.type === Lt && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case eo:
          r: {
            for (var k = m.key, S = d; S !== null; ) {
              if (S.key === k) {
                if (k = m.type, k === Lt) {
                  if (S.tag === 7) {
                    e(p, S.sibling), d = n(S, m.props.children), d.return = p, p = d;
                    break r;
                  }
                } else if (S.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Xr && El(k) === S.type) {
                  e(p, S.sibling), d = n(S, m.props), d.ref = fe(p, S, m), d.return = p, p = d;
                  break r;
                }
                e(p, S);
                break;
              } else
                t(p, S);
              S = S.sibling;
            }
            m.type === Lt ? (d = zt(m.props.children, p.mode, g, m.key), d.return = p, p = d) : (g = Ro(m.type, m.key, m.props, null, p.mode, g), g.ref = fe(p, d, m), g.return = p, p = g);
          }
          return i(p);
        case Tt:
          r: {
            for (S = m.key; d !== null; ) {
              if (d.key === S)
                if (d.tag === 4 && d.stateNode.containerInfo === m.containerInfo && d.stateNode.implementation === m.implementation) {
                  e(p, d.sibling), d = n(d, m.children || []), d.return = p, p = d;
                  break r;
                } else {
                  e(p, d);
                  break;
                }
              else
                t(p, d);
              d = d.sibling;
            }
            d = Yn(m, p.mode, g), d.return = p, p = d;
          }
          return i(p);
        case Xr:
          return S = m._init, B(p, d, S(m._payload), g);
      }
      if (xe(m))
        return x(p, d, m, g);
      if (ce(m))
        return w(p, d, m, g);
      bo(p, m);
    }
    return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, d !== null && d.tag === 6 ? (e(p, d.sibling), d = n(d, m), d.return = p, p = d) : (e(p, d), d = Qn(m, p.mode, g), d.return = p, p = d), i(p)) : e(p, d);
  }
  return B;
}
var te = md(!0), ud = md(!1), Je = {}, Ar = ut(Je), $e = ut(Je), Ve = ut(Je);
function yt(r) {
  if (r === Je)
    throw Error(v(174));
  return r;
}
function gi(r, t) {
  switch (L(Ve, t), L($e, r), L(Ar, Je), r = t.nodeType, r) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : na(null, "");
      break;
    default:
      r = r === 8 ? t.parentNode : t, t = r.namespaceURI || null, r = r.tagName, t = na(t, r);
  }
  O(Ar), L(Ar, t);
}
function ee() {
  O(Ar), O($e), O(Ve);
}
function bd(r) {
  yt(Ve.current);
  var t = yt(Ar.current), e = na(t, r.type);
  t !== e && (L($e, r), L(Ar, e));
}
function vi(r) {
  $e.current === r && (O(Ar), O($e));
}
var A = ut(0);
function Yo(r) {
  for (var t = r; t !== null; ) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e !== null && (e = e.dehydrated, e === null || e.data === "$?" || e.data === "$!"))
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128)
        return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === r)
      break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === r)
        return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var Un = [];
function hi() {
  for (var r = 0; r < Un.length; r++)
    Un[r]._workInProgressVersionPrimary = null;
  Un.length = 0;
}
var jo = Yr.ReactCurrentDispatcher, $n = Yr.ReactCurrentBatchConfig, jt = 0, I = null, Q = null, X = null, Ko = !1, Ce = !1, He = 0, sm = 0;
function tr() {
  throw Error(v(321));
}
function xi(r, t) {
  if (t === null)
    return !1;
  for (var e = 0; e < t.length && e < r.length; e++)
    if (!Lr(r[e], t[e]))
      return !1;
  return !0;
}
function wi(r, t, e, o, n, a) {
  if (jt = a, I = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, jo.current = r === null || r.memoizedState === null ? mm : um, r = e(o, n), Ce) {
    a = 0;
    do {
      if (Ce = !1, He = 0, 25 <= a)
        throw Error(v(301));
      a += 1, X = Q = null, t.updateQueue = null, jo.current = bm, r = e(o, n);
    } while (Ce);
  }
  if (jo.current = Xo, t = Q !== null && Q.next !== null, jt = 0, X = Q = I = null, Ko = !1, t)
    throw Error(v(300));
  return r;
}
function yi() {
  var r = He !== 0;
  return He = 0, r;
}
function Or() {
  var r = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return X === null ? I.memoizedState = X = r : X = X.next = r, X;
}
function Er() {
  if (Q === null) {
    var r = I.alternate;
    r = r !== null ? r.memoizedState : null;
  } else
    r = Q.next;
  var t = X === null ? I.memoizedState : X.next;
  if (t !== null)
    X = t, Q = r;
  else {
    if (r === null)
      throw Error(v(310));
    Q = r, r = { memoizedState: Q.memoizedState, baseState: Q.baseState, baseQueue: Q.baseQueue, queue: Q.queue, next: null }, X === null ? I.memoizedState = X = r : X = X.next = r;
  }
  return X;
}
function Ge(r, t) {
  return typeof t == "function" ? t(r) : t;
}
function Vn(r) {
  var t = Er(), e = t.queue;
  if (e === null)
    throw Error(v(311));
  e.lastRenderedReducer = r;
  var o = Q, n = o.baseQueue, a = e.pending;
  if (a !== null) {
    if (n !== null) {
      var i = n.next;
      n.next = a.next, a.next = i;
    }
    o.baseQueue = n = a, e.pending = null;
  }
  if (n !== null) {
    a = n.next, o = o.baseState;
    var l = i = null, s = null, c = a;
    do {
      var b = c.lane;
      if ((jt & b) === b)
        s !== null && (s = s.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), o = c.hasEagerState ? c.eagerState : r(o, c.action);
      else {
        var f = {
          lane: b,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        s === null ? (l = s = f, i = o) : s = s.next = f, I.lanes |= b, Ct |= b;
      }
      c = c.next;
    } while (c !== null && c !== a);
    s === null ? i = o : s.next = l, Lr(o, t.memoizedState) || (cr = !0), t.memoizedState = o, t.baseState = i, t.baseQueue = s, e.lastRenderedState = o;
  }
  if (r = e.interleaved, r !== null) {
    n = r;
    do
      a = n.lane, I.lanes |= a, Ct |= a, n = n.next;
    while (n !== r);
  } else
    n === null && (e.lanes = 0);
  return [t.memoizedState, e.dispatch];
}
function Hn(r) {
  var t = Er(), e = t.queue;
  if (e === null)
    throw Error(v(311));
  e.lastRenderedReducer = r;
  var o = e.dispatch, n = e.pending, a = t.memoizedState;
  if (n !== null) {
    e.pending = null;
    var i = n = n.next;
    do
      a = r(a, i.action), i = i.next;
    while (i !== n);
    Lr(a, t.memoizedState) || (cr = !0), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), e.lastRenderedState = a;
  }
  return [a, o];
}
function fd() {
}
function gd(r, t) {
  var e = I, o = Er(), n = t(), a = !Lr(o.memoizedState, n);
  if (a && (o.memoizedState = n, cr = !0), o = o.queue, ki(xd.bind(null, e, o, r), [r]), o.getSnapshot !== t || a || X !== null && X.memoizedState.tag & 1) {
    if (e.flags |= 2048, We(9, hd.bind(null, e, o, n, t), void 0, null), Z === null)
      throw Error(v(349));
    jt & 30 || vd(e, t, n);
  }
  return n;
}
function vd(r, t, e) {
  r.flags |= 16384, r = { getSnapshot: t, value: e }, t = I.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, I.updateQueue = t, t.stores = [r]) : (e = t.stores, e === null ? t.stores = [r] : e.push(r));
}
function hd(r, t, e, o) {
  t.value = e, t.getSnapshot = o, wd(t) && yd(r);
}
function xd(r, t, e) {
  return e(function() {
    wd(t) && yd(r);
  });
}
function wd(r) {
  var t = r.getSnapshot;
  r = r.value;
  try {
    var e = t();
    return !Lr(r, e);
  } catch {
    return !0;
  }
}
function yd(r) {
  var t = Wr(r, 1);
  t !== null && Tr(t, r, 1, -1);
}
function jl(r) {
  var t = Or();
  return typeof r == "function" && (r = r()), t.memoizedState = t.baseState = r, r = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ge, lastRenderedState: r }, t.queue = r, r = r.dispatch = pm.bind(null, I, r), [t.memoizedState, r];
}
function We(r, t, e, o) {
  return r = { tag: r, create: t, destroy: e, deps: o, next: null }, t = I.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, I.updateQueue = t, t.lastEffect = r.next = r) : (e = t.lastEffect, e === null ? t.lastEffect = r.next = r : (o = e.next, e.next = r, r.next = o, t.lastEffect = r)), r;
}
function kd() {
  return Er().memoizedState;
}
function Co(r, t, e, o) {
  var n = Or();
  I.flags |= r, n.memoizedState = We(1 | t, e, void 0, o === void 0 ? null : o);
}
function mn(r, t, e, o) {
  var n = Er();
  o = o === void 0 ? null : o;
  var a = void 0;
  if (Q !== null) {
    var i = Q.memoizedState;
    if (a = i.destroy, o !== null && xi(o, i.deps)) {
      n.memoizedState = We(t, e, a, o);
      return;
    }
  }
  I.flags |= r, n.memoizedState = We(1 | t, e, a, o);
}
function Cl(r, t) {
  return Co(8390656, 8, r, t);
}
function ki(r, t) {
  return mn(2048, 8, r, t);
}
function zd(r, t) {
  return mn(4, 2, r, t);
}
function Sd(r, t) {
  return mn(4, 4, r, t);
}
function Ed(r, t) {
  if (typeof t == "function")
    return r = r(), t(r), function() {
      t(null);
    };
  if (t != null)
    return r = r(), t.current = r, function() {
      t.current = null;
    };
}
function jd(r, t, e) {
  return e = e != null ? e.concat([r]) : null, mn(4, 4, Ed.bind(null, t, r), e);
}
function zi() {
}
function Cd(r, t) {
  var e = Er();
  t = t === void 0 ? null : t;
  var o = e.memoizedState;
  return o !== null && t !== null && xi(t, o[1]) ? o[0] : (e.memoizedState = [r, t], r);
}
function _d(r, t) {
  var e = Er();
  t = t === void 0 ? null : t;
  var o = e.memoizedState;
  return o !== null && t !== null && xi(t, o[1]) ? o[0] : (r = r(), e.memoizedState = [r, t], r);
}
function Pd(r, t, e) {
  return jt & 21 ? (Lr(e, t) || (e = Ts(), I.lanes |= e, Ct |= e, r.baseState = !0), t) : (r.baseState && (r.baseState = !1, cr = !0), r.memoizedState = e);
}
function dm(r, t) {
  var e = T;
  T = e !== 0 && 4 > e ? e : 4, r(!0);
  var o = $n.transition;
  $n.transition = {};
  try {
    r(!1), t();
  } finally {
    T = e, $n.transition = o;
  }
}
function Nd() {
  return Er().memoizedState;
}
function cm(r, t, e) {
  var o = st(r);
  if (e = { lane: o, action: e, hasEagerState: !1, eagerState: null, next: null }, Rd(r))
    Td(t, e);
  else if (e = sd(r, t, e, o), e !== null) {
    var n = ir();
    Tr(e, r, o, n), Ld(e, t, o);
  }
}
function pm(r, t, e) {
  var o = st(r), n = { lane: o, action: e, hasEagerState: !1, eagerState: null, next: null };
  if (Rd(r))
    Td(t, n);
  else {
    var a = r.alternate;
    if (r.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null))
      try {
        var i = t.lastRenderedState, l = a(i, e);
        if (n.hasEagerState = !0, n.eagerState = l, Lr(l, i)) {
          var s = t.interleaved;
          s === null ? (n.next = n, bi(t)) : (n.next = s.next, s.next = n), t.interleaved = n;
          return;
        }
      } catch {
      } finally {
      }
    e = sd(r, t, n, o), e !== null && (n = ir(), Tr(e, r, o, n), Ld(e, t, o));
  }
}
function Rd(r) {
  var t = r.alternate;
  return r === I || t !== null && t === I;
}
function Td(r, t) {
  Ce = Ko = !0;
  var e = r.pending;
  e === null ? t.next = t : (t.next = e.next, e.next = t), r.pending = t;
}
function Ld(r, t, e) {
  if (e & 4194240) {
    var o = t.lanes;
    o &= r.pendingLanes, e |= o, t.lanes = e, ri(r, e);
  }
}
var Xo = { readContext: Sr, useCallback: tr, useContext: tr, useEffect: tr, useImperativeHandle: tr, useInsertionEffect: tr, useLayoutEffect: tr, useMemo: tr, useReducer: tr, useRef: tr, useState: tr, useDebugValue: tr, useDeferredValue: tr, useTransition: tr, useMutableSource: tr, useSyncExternalStore: tr, useId: tr, unstable_isNewReconciler: !1 }, mm = { readContext: Sr, useCallback: function(r, t) {
  return Or().memoizedState = [r, t === void 0 ? null : t], r;
}, useContext: Sr, useEffect: Cl, useImperativeHandle: function(r, t, e) {
  return e = e != null ? e.concat([r]) : null, Co(
    4194308,
    4,
    Ed.bind(null, t, r),
    e
  );
}, useLayoutEffect: function(r, t) {
  return Co(4194308, 4, r, t);
}, useInsertionEffect: function(r, t) {
  return Co(4, 2, r, t);
}, useMemo: function(r, t) {
  var e = Or();
  return t = t === void 0 ? null : t, r = r(), e.memoizedState = [r, t], r;
}, useReducer: function(r, t, e) {
  var o = Or();
  return t = e !== void 0 ? e(t) : t, o.memoizedState = o.baseState = t, r = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: r, lastRenderedState: t }, o.queue = r, r = r.dispatch = cm.bind(null, I, r), [o.memoizedState, r];
}, useRef: function(r) {
  var t = Or();
  return r = { current: r }, t.memoizedState = r;
}, useState: jl, useDebugValue: zi, useDeferredValue: function(r) {
  return Or().memoizedState = r;
}, useTransition: function() {
  var r = jl(!1), t = r[0];
  return r = dm.bind(null, r[1]), Or().memoizedState = r, [t, r];
}, useMutableSource: function() {
}, useSyncExternalStore: function(r, t, e) {
  var o = I, n = Or();
  if (D) {
    if (e === void 0)
      throw Error(v(407));
    e = e();
  } else {
    if (e = t(), Z === null)
      throw Error(v(349));
    jt & 30 || vd(o, t, e);
  }
  n.memoizedState = e;
  var a = { value: e, getSnapshot: t };
  return n.queue = a, Cl(xd.bind(
    null,
    o,
    a,
    r
  ), [r]), o.flags |= 2048, We(9, hd.bind(null, o, a, e, t), void 0, null), e;
}, useId: function() {
  var r = Or(), t = Z.identifierPrefix;
  if (D) {
    var e = $r, o = Ur;
    e = (o & ~(1 << 32 - Rr(o) - 1)).toString(32) + e, t = ":" + t + "R" + e, e = He++, 0 < e && (t += "H" + e.toString(32)), t += ":";
  } else
    e = sm++, t = ":" + t + "r" + e.toString(32) + ":";
  return r.memoizedState = t;
}, unstable_isNewReconciler: !1 }, um = {
  readContext: Sr,
  useCallback: Cd,
  useContext: Sr,
  useEffect: ki,
  useImperativeHandle: jd,
  useInsertionEffect: zd,
  useLayoutEffect: Sd,
  useMemo: _d,
  useReducer: Vn,
  useRef: kd,
  useState: function() {
    return Vn(Ge);
  },
  useDebugValue: zi,
  useDeferredValue: function(r) {
    var t = Er();
    return Pd(t, Q.memoizedState, r);
  },
  useTransition: function() {
    var r = Vn(Ge)[0], t = Er().memoizedState;
    return [r, t];
  },
  useMutableSource: fd,
  useSyncExternalStore: gd,
  useId: Nd,
  unstable_isNewReconciler: !1
}, bm = { readContext: Sr, useCallback: Cd, useContext: Sr, useEffect: ki, useImperativeHandle: jd, useInsertionEffect: zd, useLayoutEffect: Sd, useMemo: _d, useReducer: Hn, useRef: kd, useState: function() {
  return Hn(Ge);
}, useDebugValue: zi, useDeferredValue: function(r) {
  var t = Er();
  return Q === null ? t.memoizedState = r : Pd(t, Q.memoizedState, r);
}, useTransition: function() {
  var r = Hn(Ge)[0], t = Er().memoizedState;
  return [r, t];
}, useMutableSource: fd, useSyncExternalStore: gd, useId: Nd, unstable_isNewReconciler: !1 };
function oe(r, t) {
  try {
    var e = "", o = t;
    do
      e += $c(o), o = o.return;
    while (o);
    var n = e;
  } catch (a) {
    n = `
Error generating stack: ` + a.message + `
` + a.stack;
  }
  return { value: r, source: t, stack: n, digest: null };
}
function Gn(r, t, e) {
  return { value: r, source: null, stack: e ?? null, digest: t ?? null };
}
function Ca(r, t) {
  try {
    console.error(t.value);
  } catch (e) {
    setTimeout(function() {
      throw e;
    });
  }
}
var fm = typeof WeakMap == "function" ? WeakMap : Map;
function Md(r, t, e) {
  e = Vr(-1, e), e.tag = 3, e.payload = { element: null };
  var o = t.value;
  return e.callback = function() {
    Jo || (Jo = !0, Da = o), Ca(r, t);
  }, e;
}
function Od(r, t, e) {
  e = Vr(-1, e), e.tag = 3;
  var o = r.type.getDerivedStateFromError;
  if (typeof o == "function") {
    var n = t.value;
    e.payload = function() {
      return o(n);
    }, e.callback = function() {
      Ca(r, t);
    };
  }
  var a = r.stateNode;
  return a !== null && typeof a.componentDidCatch == "function" && (e.callback = function() {
    Ca(r, t), typeof o != "function" && (lt === null ? lt = /* @__PURE__ */ new Set([this]) : lt.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), e;
}
function _l(r, t, e) {
  var o = r.pingCache;
  if (o === null) {
    o = r.pingCache = new fm();
    var n = /* @__PURE__ */ new Set();
    o.set(t, n);
  } else
    n = o.get(t), n === void 0 && (n = /* @__PURE__ */ new Set(), o.set(t, n));
  n.has(e) || (n.add(e), r = Pm.bind(null, r, t, e), t.then(r, r));
}
function Pl(r) {
  do {
    var t;
    if ((t = r.tag === 13) && (t = r.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return r;
    r = r.return;
  } while (r !== null);
  return null;
}
function Nl(r, t, e, o, n) {
  return r.mode & 1 ? (r.flags |= 65536, r.lanes = n, r) : (r === t ? r.flags |= 65536 : (r.flags |= 128, e.flags |= 131072, e.flags &= -52805, e.tag === 1 && (e.alternate === null ? e.tag = 17 : (t = Vr(-1, 1), t.tag = 2, it(e, t, 1))), e.lanes |= 1), r);
}
var gm = Yr.ReactCurrentOwner, cr = !1;
function ar(r, t, e, o) {
  t.child = r === null ? ud(t, null, e, o) : te(t, r.child, e, o);
}
function Rl(r, t, e, o, n) {
  e = e.render;
  var a = t.ref;
  return Xt(t, n), o = wi(r, t, e, o, a, n), e = yi(), r !== null && !cr ? (t.updateQueue = r.updateQueue, t.flags &= -2053, r.lanes &= ~n, Qr(r, t, n)) : (D && e && si(t), t.flags |= 1, ar(r, t, o, n), t.child);
}
function Tl(r, t, e, o, n) {
  if (r === null) {
    var a = e.type;
    return typeof a == "function" && !Ri(a) && a.defaultProps === void 0 && e.compare === null && e.defaultProps === void 0 ? (t.tag = 15, t.type = a, Bd(r, t, a, o, n)) : (r = Ro(e.type, null, o, t, t.mode, n), r.ref = t.ref, r.return = t, t.child = r);
  }
  if (a = r.child, !(r.lanes & n)) {
    var i = a.memoizedProps;
    if (e = e.compare, e = e !== null ? e : Ae, e(i, o) && r.ref === t.ref)
      return Qr(r, t, n);
  }
  return t.flags |= 1, r = dt(a, o), r.ref = t.ref, r.return = t, t.child = r;
}
function Bd(r, t, e, o, n) {
  if (r !== null) {
    var a = r.memoizedProps;
    if (Ae(a, o) && r.ref === t.ref)
      if (cr = !1, t.pendingProps = o = a, (r.lanes & n) !== 0)
        r.flags & 131072 && (cr = !0);
      else
        return t.lanes = r.lanes, Qr(r, t, n);
  }
  return _a(r, t, e, o, n);
}
function Dd(r, t, e) {
  var o = t.pendingProps, n = o.children, a = r !== null ? r.memoizedState : null;
  if (o.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, L(Vt, br), br |= e;
    else {
      if (!(e & 1073741824))
        return r = a !== null ? a.baseLanes | e : e, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: r, cachePool: null, transitions: null }, t.updateQueue = null, L(Vt, br), br |= r, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = a !== null ? a.baseLanes : e, L(Vt, br), br |= o;
    }
  else
    a !== null ? (o = a.baseLanes | e, t.memoizedState = null) : o = e, L(Vt, br), br |= o;
  return ar(r, t, n, e), t.child;
}
function Ad(r, t) {
  var e = t.ref;
  (r === null && e !== null || r !== null && r.ref !== e) && (t.flags |= 512, t.flags |= 2097152);
}
function _a(r, t, e, o, n) {
  var a = mr(e) ? St : nr.current;
  return a = qt(t, a), Xt(t, n), e = wi(r, t, e, o, a, n), o = yi(), r !== null && !cr ? (t.updateQueue = r.updateQueue, t.flags &= -2053, r.lanes &= ~n, Qr(r, t, n)) : (D && o && si(t), t.flags |= 1, ar(r, t, e, n), t.child);
}
function Ll(r, t, e, o, n) {
  if (mr(e)) {
    var a = !0;
    $o(t);
  } else
    a = !1;
  if (Xt(t, n), t.stateNode === null)
    _o(r, t), pd(t, e, o), ja(t, e, o, n), o = !0;
  else if (r === null) {
    var i = t.stateNode, l = t.memoizedProps;
    i.props = l;
    var s = i.context, c = e.contextType;
    typeof c == "object" && c !== null ? c = Sr(c) : (c = mr(e) ? St : nr.current, c = qt(t, c));
    var b = e.getDerivedStateFromProps, f = typeof b == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    f || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (l !== o || s !== c) && Sl(t, i, o, c), Zr = !1;
    var u = t.memoizedState;
    i.state = u, Qo(t, o, i, n), s = t.memoizedState, l !== o || u !== s || pr.current || Zr ? (typeof b == "function" && (Ea(t, e, b, o), s = t.memoizedState), (l = Zr || zl(t, e, l, o, u, s, c)) ? (f || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = o, t.memoizedState = s), i.props = o, i.state = s, i.context = c, o = l) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), o = !1);
  } else {
    i = t.stateNode, dd(r, t), l = t.memoizedProps, c = t.type === t.elementType ? l : _r(t.type, l), i.props = c, f = t.pendingProps, u = i.context, s = e.contextType, typeof s == "object" && s !== null ? s = Sr(s) : (s = mr(e) ? St : nr.current, s = qt(t, s));
    var h = e.getDerivedStateFromProps;
    (b = typeof h == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (l !== f || u !== s) && Sl(t, i, o, s), Zr = !1, u = t.memoizedState, i.state = u, Qo(t, o, i, n);
    var x = t.memoizedState;
    l !== f || u !== x || pr.current || Zr ? (typeof h == "function" && (Ea(t, e, h, o), x = t.memoizedState), (c = Zr || zl(t, e, c, o, u, x, s) || !1) ? (b || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(o, x, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(o, x, s)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || l === r.memoizedProps && u === r.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || l === r.memoizedProps && u === r.memoizedState || (t.flags |= 1024), t.memoizedProps = o, t.memoizedState = x), i.props = o, i.state = x, i.context = s, o = c) : (typeof i.componentDidUpdate != "function" || l === r.memoizedProps && u === r.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || l === r.memoizedProps && u === r.memoizedState || (t.flags |= 1024), o = !1);
  }
  return Pa(r, t, e, o, a, n);
}
function Pa(r, t, e, o, n, a) {
  Ad(r, t);
  var i = (t.flags & 128) !== 0;
  if (!o && !i)
    return n && hl(t, e, !1), Qr(r, t, a);
  o = t.stateNode, gm.current = t;
  var l = i && typeof e.getDerivedStateFromError != "function" ? null : o.render();
  return t.flags |= 1, r !== null && i ? (t.child = te(t, r.child, null, a), t.child = te(t, null, l, a)) : ar(r, t, l, a), t.memoizedState = o.state, n && hl(t, e, !0), t.child;
}
function Id(r) {
  var t = r.stateNode;
  t.pendingContext ? vl(r, t.pendingContext, t.pendingContext !== t.context) : t.context && vl(r, t.context, !1), gi(r, t.containerInfo);
}
function Ml(r, t, e, o, n) {
  return re(), ci(n), t.flags |= 256, ar(r, t, e, o), t.child;
}
var Na = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ra(r) {
  return { baseLanes: r, cachePool: null, transitions: null };
}
function Fd(r, t, e) {
  var o = t.pendingProps, n = A.current, a = !1, i = (t.flags & 128) !== 0, l;
  if ((l = i) || (l = r !== null && r.memoizedState === null ? !1 : (n & 2) !== 0), l ? (a = !0, t.flags &= -129) : (r === null || r.memoizedState !== null) && (n |= 1), L(A, n & 1), r === null)
    return za(t), r = t.memoizedState, r !== null && (r = r.dehydrated, r !== null) ? (t.mode & 1 ? r.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = o.children, r = o.fallback, a ? (o = t.mode, a = t.child, i = { mode: "hidden", children: i }, !(o & 1) && a !== null ? (a.childLanes = 0, a.pendingProps = i) : a = fn(i, o, 0, null), r = zt(r, o, e, null), a.return = t, r.return = t, a.sibling = r, t.child = a, t.child.memoizedState = Ra(e), t.memoizedState = Na, r) : Si(t, i));
  if (n = r.memoizedState, n !== null && (l = n.dehydrated, l !== null))
    return vm(r, t, i, o, l, n, e);
  if (a) {
    a = o.fallback, i = t.mode, n = r.child, l = n.sibling;
    var s = { mode: "hidden", children: o.children };
    return !(i & 1) && t.child !== n ? (o = t.child, o.childLanes = 0, o.pendingProps = s, t.deletions = null) : (o = dt(n, s), o.subtreeFlags = n.subtreeFlags & 14680064), l !== null ? a = dt(l, a) : (a = zt(a, i, e, null), a.flags |= 2), a.return = t, o.return = t, o.sibling = a, t.child = o, o = a, a = t.child, i = r.child.memoizedState, i = i === null ? Ra(e) : { baseLanes: i.baseLanes | e, cachePool: null, transitions: i.transitions }, a.memoizedState = i, a.childLanes = r.childLanes & ~e, t.memoizedState = Na, o;
  }
  return a = r.child, r = a.sibling, o = dt(a, { mode: "visible", children: o.children }), !(t.mode & 1) && (o.lanes = e), o.return = t, o.sibling = null, r !== null && (e = t.deletions, e === null ? (t.deletions = [r], t.flags |= 16) : e.push(r)), t.child = o, t.memoizedState = null, o;
}
function Si(r, t) {
  return t = fn({ mode: "visible", children: t }, r.mode, 0, null), t.return = r, r.child = t;
}
function fo(r, t, e, o) {
  return o !== null && ci(o), te(t, r.child, null, e), r = Si(t, t.pendingProps.children), r.flags |= 2, t.memoizedState = null, r;
}
function vm(r, t, e, o, n, a, i) {
  if (e)
    return t.flags & 256 ? (t.flags &= -257, o = Gn(Error(v(422))), fo(r, t, i, o)) : t.memoizedState !== null ? (t.child = r.child, t.flags |= 128, null) : (a = o.fallback, n = t.mode, o = fn({ mode: "visible", children: o.children }, n, 0, null), a = zt(a, n, i, null), a.flags |= 2, o.return = t, a.return = t, o.sibling = a, t.child = o, t.mode & 1 && te(t, r.child, null, i), t.child.memoizedState = Ra(i), t.memoizedState = Na, a);
  if (!(t.mode & 1))
    return fo(r, t, i, null);
  if (n.data === "$!") {
    if (o = n.nextSibling && n.nextSibling.dataset, o)
      var l = o.dgst;
    return o = l, a = Error(v(419)), o = Gn(a, o, void 0), fo(r, t, i, o);
  }
  if (l = (i & r.childLanes) !== 0, cr || l) {
    if (o = Z, o !== null) {
      switch (i & -i) {
        case 4:
          n = 2;
          break;
        case 16:
          n = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          n = 32;
          break;
        case 536870912:
          n = 268435456;
          break;
        default:
          n = 0;
      }
      n = n & (o.suspendedLanes | i) ? 0 : n, n !== 0 && n !== a.retryLane && (a.retryLane = n, Wr(r, n), Tr(o, r, n, -1));
    }
    return Ni(), o = Gn(Error(v(421))), fo(r, t, i, o);
  }
  return n.data === "$?" ? (t.flags |= 128, t.child = r.child, t = Nm.bind(null, r), n._reactRetry = t, null) : (r = a.treeContext, fr = at(n.nextSibling), gr = t, D = !0, Nr = null, r !== null && (wr[yr++] = Ur, wr[yr++] = $r, wr[yr++] = Et, Ur = r.id, $r = r.overflow, Et = t), t = Si(t, o.children), t.flags |= 4096, t);
}
function Ol(r, t, e) {
  r.lanes |= t;
  var o = r.alternate;
  o !== null && (o.lanes |= t), Sa(r.return, t, e);
}
function Wn(r, t, e, o, n) {
  var a = r.memoizedState;
  a === null ? r.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: o, tail: e, tailMode: n } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = o, a.tail = e, a.tailMode = n);
}
function Ud(r, t, e) {
  var o = t.pendingProps, n = o.revealOrder, a = o.tail;
  if (ar(r, t, o.children, e), o = A.current, o & 2)
    o = o & 1 | 2, t.flags |= 128;
  else {
    if (r !== null && r.flags & 128)
      r:
        for (r = t.child; r !== null; ) {
          if (r.tag === 13)
            r.memoizedState !== null && Ol(r, e, t);
          else if (r.tag === 19)
            Ol(r, e, t);
          else if (r.child !== null) {
            r.child.return = r, r = r.child;
            continue;
          }
          if (r === t)
            break r;
          for (; r.sibling === null; ) {
            if (r.return === null || r.return === t)
              break r;
            r = r.return;
          }
          r.sibling.return = r.return, r = r.sibling;
        }
    o &= 1;
  }
  if (L(A, o), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (n) {
      case "forwards":
        for (e = t.child, n = null; e !== null; )
          r = e.alternate, r !== null && Yo(r) === null && (n = e), e = e.sibling;
        e = n, e === null ? (n = t.child, t.child = null) : (n = e.sibling, e.sibling = null), Wn(t, !1, n, e, a);
        break;
      case "backwards":
        for (e = null, n = t.child, t.child = null; n !== null; ) {
          if (r = n.alternate, r !== null && Yo(r) === null) {
            t.child = n;
            break;
          }
          r = n.sibling, n.sibling = e, e = n, n = r;
        }
        Wn(t, !0, e, null, a);
        break;
      case "together":
        Wn(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function _o(r, t) {
  !(t.mode & 1) && r !== null && (r.alternate = null, t.alternate = null, t.flags |= 2);
}
function Qr(r, t, e) {
  if (r !== null && (t.dependencies = r.dependencies), Ct |= t.lanes, !(e & t.childLanes))
    return null;
  if (r !== null && t.child !== r.child)
    throw Error(v(153));
  if (t.child !== null) {
    for (r = t.child, e = dt(r, r.pendingProps), t.child = e, e.return = t; r.sibling !== null; )
      r = r.sibling, e = e.sibling = dt(r, r.pendingProps), e.return = t;
    e.sibling = null;
  }
  return t.child;
}
function hm(r, t, e) {
  switch (t.tag) {
    case 3:
      Id(t), re();
      break;
    case 5:
      bd(t);
      break;
    case 1:
      mr(t.type) && $o(t);
      break;
    case 4:
      gi(t, t.stateNode.containerInfo);
      break;
    case 10:
      var o = t.type._context, n = t.memoizedProps.value;
      L(Go, o._currentValue), o._currentValue = n;
      break;
    case 13:
      if (o = t.memoizedState, o !== null)
        return o.dehydrated !== null ? (L(A, A.current & 1), t.flags |= 128, null) : e & t.child.childLanes ? Fd(r, t, e) : (L(A, A.current & 1), r = Qr(r, t, e), r !== null ? r.sibling : null);
      L(A, A.current & 1);
      break;
    case 19:
      if (o = (e & t.childLanes) !== 0, r.flags & 128) {
        if (o)
          return Ud(r, t, e);
        t.flags |= 128;
      }
      if (n = t.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), L(A, A.current), o)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Dd(r, t, e);
  }
  return Qr(r, t, e);
}
var $d, Ta, Vd, Hd;
$d = function(r, t) {
  for (var e = t.child; e !== null; ) {
    if (e.tag === 5 || e.tag === 6)
      r.appendChild(e.stateNode);
    else if (e.tag !== 4 && e.child !== null) {
      e.child.return = e, e = e.child;
      continue;
    }
    if (e === t)
      break;
    for (; e.sibling === null; ) {
      if (e.return === null || e.return === t)
        return;
      e = e.return;
    }
    e.sibling.return = e.return, e = e.sibling;
  }
};
Ta = function() {
};
Vd = function(r, t, e, o) {
  var n = r.memoizedProps;
  if (n !== o) {
    r = t.stateNode, yt(Ar.current);
    var a = null;
    switch (e) {
      case "input":
        n = ra(r, n), o = ra(r, o), a = [];
        break;
      case "select":
        n = F({}, n, { value: void 0 }), o = F({}, o, { value: void 0 }), a = [];
        break;
      case "textarea":
        n = oa(r, n), o = oa(r, o), a = [];
        break;
      default:
        typeof n.onClick != "function" && typeof o.onClick == "function" && (r.onclick = Fo);
    }
    aa(e, o);
    var i;
    e = null;
    for (c in n)
      if (!o.hasOwnProperty(c) && n.hasOwnProperty(c) && n[c] != null)
        if (c === "style") {
          var l = n[c];
          for (i in l)
            l.hasOwnProperty(i) && (e || (e = {}), e[i] = "");
        } else
          c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Re.hasOwnProperty(c) ? a || (a = []) : (a = a || []).push(c, null));
    for (c in o) {
      var s = o[c];
      if (l = n != null ? n[c] : void 0, o.hasOwnProperty(c) && s !== l && (s != null || l != null))
        if (c === "style")
          if (l) {
            for (i in l)
              !l.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (e || (e = {}), e[i] = "");
            for (i in s)
              s.hasOwnProperty(i) && l[i] !== s[i] && (e || (e = {}), e[i] = s[i]);
          } else
            e || (a || (a = []), a.push(
              c,
              e
            )), e = s;
        else
          c === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, l = l ? l.__html : void 0, s != null && l !== s && (a = a || []).push(c, s)) : c === "children" ? typeof s != "string" && typeof s != "number" || (a = a || []).push(c, "" + s) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Re.hasOwnProperty(c) ? (s != null && c === "onScroll" && M("scroll", r), a || l === s || (a = [])) : (a = a || []).push(c, s));
    }
    e && (a = a || []).push("style", e);
    var c = a;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Hd = function(r, t, e, o) {
  e !== o && (t.flags |= 4);
};
function ge(r, t) {
  if (!D)
    switch (r.tailMode) {
      case "hidden":
        t = r.tail;
        for (var e = null; t !== null; )
          t.alternate !== null && (e = t), t = t.sibling;
        e === null ? r.tail = null : e.sibling = null;
        break;
      case "collapsed":
        e = r.tail;
        for (var o = null; e !== null; )
          e.alternate !== null && (o = e), e = e.sibling;
        o === null ? t || r.tail === null ? r.tail = null : r.tail.sibling = null : o.sibling = null;
    }
}
function er(r) {
  var t = r.alternate !== null && r.alternate.child === r.child, e = 0, o = 0;
  if (t)
    for (var n = r.child; n !== null; )
      e |= n.lanes | n.childLanes, o |= n.subtreeFlags & 14680064, o |= n.flags & 14680064, n.return = r, n = n.sibling;
  else
    for (n = r.child; n !== null; )
      e |= n.lanes | n.childLanes, o |= n.subtreeFlags, o |= n.flags, n.return = r, n = n.sibling;
  return r.subtreeFlags |= o, r.childLanes = e, t;
}
function xm(r, t, e) {
  var o = t.pendingProps;
  switch (di(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return er(t), null;
    case 1:
      return mr(t.type) && Uo(), er(t), null;
    case 3:
      return o = t.stateNode, ee(), O(pr), O(nr), hi(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (r === null || r.child === null) && (uo(t) ? t.flags |= 4 : r === null || r.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Nr !== null && (Fa(Nr), Nr = null))), Ta(r, t), er(t), null;
    case 5:
      vi(t);
      var n = yt(Ve.current);
      if (e = t.type, r !== null && t.stateNode != null)
        Vd(r, t, e, o, n), r.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!o) {
          if (t.stateNode === null)
            throw Error(v(166));
          return er(t), null;
        }
        if (r = yt(Ar.current), uo(t)) {
          o = t.stateNode, e = t.type;
          var a = t.memoizedProps;
          switch (o[Br] = t, o[Ue] = a, r = (t.mode & 1) !== 0, e) {
            case "dialog":
              M("cancel", o), M("close", o);
              break;
            case "iframe":
            case "object":
            case "embed":
              M("load", o);
              break;
            case "video":
            case "audio":
              for (n = 0; n < ye.length; n++)
                M(ye[n], o);
              break;
            case "source":
              M("error", o);
              break;
            case "img":
            case "image":
            case "link":
              M(
                "error",
                o
              ), M("load", o);
              break;
            case "details":
              M("toggle", o);
              break;
            case "input":
              Hi(o, a), M("invalid", o);
              break;
            case "select":
              o._wrapperState = { wasMultiple: !!a.multiple }, M("invalid", o);
              break;
            case "textarea":
              Wi(o, a), M("invalid", o);
          }
          aa(e, a), n = null;
          for (var i in a)
            if (a.hasOwnProperty(i)) {
              var l = a[i];
              i === "children" ? typeof l == "string" ? o.textContent !== l && (a.suppressHydrationWarning !== !0 && mo(o.textContent, l, r), n = ["children", l]) : typeof l == "number" && o.textContent !== "" + l && (a.suppressHydrationWarning !== !0 && mo(
                o.textContent,
                l,
                r
              ), n = ["children", "" + l]) : Re.hasOwnProperty(i) && l != null && i === "onScroll" && M("scroll", o);
            }
          switch (e) {
            case "input":
              oo(o), Gi(o, a, !0);
              break;
            case "textarea":
              oo(o), Qi(o);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (o.onclick = Fo);
          }
          o = n, t.updateQueue = o, o !== null && (t.flags |= 4);
        } else {
          i = n.nodeType === 9 ? n : n.ownerDocument, r === "http://www.w3.org/1999/xhtml" && (r = vs(e)), r === "http://www.w3.org/1999/xhtml" ? e === "script" ? (r = i.createElement("div"), r.innerHTML = "<script><\/script>", r = r.removeChild(r.firstChild)) : typeof o.is == "string" ? r = i.createElement(e, { is: o.is }) : (r = i.createElement(e), e === "select" && (i = r, o.multiple ? i.multiple = !0 : o.size && (i.size = o.size))) : r = i.createElementNS(r, e), r[Br] = t, r[Ue] = o, $d(r, t, !1, !1), t.stateNode = r;
          r: {
            switch (i = ia(e, o), e) {
              case "dialog":
                M("cancel", r), M("close", r), n = o;
                break;
              case "iframe":
              case "object":
              case "embed":
                M("load", r), n = o;
                break;
              case "video":
              case "audio":
                for (n = 0; n < ye.length; n++)
                  M(ye[n], r);
                n = o;
                break;
              case "source":
                M("error", r), n = o;
                break;
              case "img":
              case "image":
              case "link":
                M(
                  "error",
                  r
                ), M("load", r), n = o;
                break;
              case "details":
                M("toggle", r), n = o;
                break;
              case "input":
                Hi(r, o), n = ra(r, o), M("invalid", r);
                break;
              case "option":
                n = o;
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!o.multiple }, n = F({}, o, { value: void 0 }), M("invalid", r);
                break;
              case "textarea":
                Wi(r, o), n = oa(r, o), M("invalid", r);
                break;
              default:
                n = o;
            }
            aa(e, n), l = n;
            for (a in l)
              if (l.hasOwnProperty(a)) {
                var s = l[a];
                a === "style" ? ws(r, s) : a === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && hs(r, s)) : a === "children" ? typeof s == "string" ? (e !== "textarea" || s !== "") && Te(r, s) : typeof s == "number" && Te(r, "" + s) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Re.hasOwnProperty(a) ? s != null && a === "onScroll" && M("scroll", r) : s != null && Ya(r, a, s, i));
              }
            switch (e) {
              case "input":
                oo(r), Gi(r, o, !1);
                break;
              case "textarea":
                oo(r), Qi(r);
                break;
              case "option":
                o.value != null && r.setAttribute("value", "" + ct(o.value));
                break;
              case "select":
                r.multiple = !!o.multiple, a = o.value, a != null ? Wt(r, !!o.multiple, a, !1) : o.defaultValue != null && Wt(
                  r,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                );
                break;
              default:
                typeof n.onClick == "function" && (r.onclick = Fo);
            }
            switch (e) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                o = !!o.autoFocus;
                break r;
              case "img":
                o = !0;
                break r;
              default:
                o = !1;
            }
          }
          o && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return er(t), null;
    case 6:
      if (r && t.stateNode != null)
        Hd(r, t, r.memoizedProps, o);
      else {
        if (typeof o != "string" && t.stateNode === null)
          throw Error(v(166));
        if (e = yt(Ve.current), yt(Ar.current), uo(t)) {
          if (o = t.stateNode, e = t.memoizedProps, o[Br] = t, (a = o.nodeValue !== e) && (r = gr, r !== null))
            switch (r.tag) {
              case 3:
                mo(o.nodeValue, e, (r.mode & 1) !== 0);
                break;
              case 5:
                r.memoizedProps.suppressHydrationWarning !== !0 && mo(o.nodeValue, e, (r.mode & 1) !== 0);
            }
          a && (t.flags |= 4);
        } else
          o = (e.nodeType === 9 ? e : e.ownerDocument).createTextNode(o), o[Br] = t, t.stateNode = o;
      }
      return er(t), null;
    case 13:
      if (O(A), o = t.memoizedState, r === null || r.memoizedState !== null && r.memoizedState.dehydrated !== null) {
        if (D && fr !== null && t.mode & 1 && !(t.flags & 128))
          ld(), re(), t.flags |= 98560, a = !1;
        else if (a = uo(t), o !== null && o.dehydrated !== null) {
          if (r === null) {
            if (!a)
              throw Error(v(318));
            if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a)
              throw Error(v(317));
            a[Br] = t;
          } else
            re(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          er(t), a = !1;
        } else
          Nr !== null && (Fa(Nr), Nr = null), a = !0;
        if (!a)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = e, t) : (o = o !== null, o !== (r !== null && r.memoizedState !== null) && o && (t.child.flags |= 8192, t.mode & 1 && (r === null || A.current & 1 ? Y === 0 && (Y = 3) : Ni())), t.updateQueue !== null && (t.flags |= 4), er(t), null);
    case 4:
      return ee(), Ta(r, t), r === null && Ie(t.stateNode.containerInfo), er(t), null;
    case 10:
      return ui(t.type._context), er(t), null;
    case 17:
      return mr(t.type) && Uo(), er(t), null;
    case 19:
      if (O(A), a = t.memoizedState, a === null)
        return er(t), null;
      if (o = (t.flags & 128) !== 0, i = a.rendering, i === null)
        if (o)
          ge(a, !1);
        else {
          if (Y !== 0 || r !== null && r.flags & 128)
            for (r = t.child; r !== null; ) {
              if (i = Yo(r), i !== null) {
                for (t.flags |= 128, ge(a, !1), o = i.updateQueue, o !== null && (t.updateQueue = o, t.flags |= 4), t.subtreeFlags = 0, o = e, e = t.child; e !== null; )
                  a = e, r = o, a.flags &= 14680066, i = a.alternate, i === null ? (a.childLanes = 0, a.lanes = r, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = i.childLanes, a.lanes = i.lanes, a.child = i.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = i.memoizedProps, a.memoizedState = i.memoizedState, a.updateQueue = i.updateQueue, a.type = i.type, r = i.dependencies, a.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }), e = e.sibling;
                return L(A, A.current & 1 | 2), t.child;
              }
              r = r.sibling;
            }
          a.tail !== null && G() > ne && (t.flags |= 128, o = !0, ge(a, !1), t.lanes = 4194304);
        }
      else {
        if (!o)
          if (r = Yo(i), r !== null) {
            if (t.flags |= 128, o = !0, e = r.updateQueue, e !== null && (t.updateQueue = e, t.flags |= 4), ge(a, !0), a.tail === null && a.tailMode === "hidden" && !i.alternate && !D)
              return er(t), null;
          } else
            2 * G() - a.renderingStartTime > ne && e !== 1073741824 && (t.flags |= 128, o = !0, ge(a, !1), t.lanes = 4194304);
        a.isBackwards ? (i.sibling = t.child, t.child = i) : (e = a.last, e !== null ? e.sibling = i : t.child = i, a.last = i);
      }
      return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = G(), t.sibling = null, e = A.current, L(A, o ? e & 1 | 2 : e & 1), t) : (er(t), null);
    case 22:
    case 23:
      return Pi(), o = t.memoizedState !== null, r !== null && r.memoizedState !== null !== o && (t.flags |= 8192), o && t.mode & 1 ? br & 1073741824 && (er(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : er(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(v(156, t.tag));
}
function wm(r, t) {
  switch (di(t), t.tag) {
    case 1:
      return mr(t.type) && Uo(), r = t.flags, r & 65536 ? (t.flags = r & -65537 | 128, t) : null;
    case 3:
      return ee(), O(pr), O(nr), hi(), r = t.flags, r & 65536 && !(r & 128) ? (t.flags = r & -65537 | 128, t) : null;
    case 5:
      return vi(t), null;
    case 13:
      if (O(A), r = t.memoizedState, r !== null && r.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(v(340));
        re();
      }
      return r = t.flags, r & 65536 ? (t.flags = r & -65537 | 128, t) : null;
    case 19:
      return O(A), null;
    case 4:
      return ee(), null;
    case 10:
      return ui(t.type._context), null;
    case 22:
    case 23:
      return Pi(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var go = !1, or = !1, ym = typeof WeakSet == "function" ? WeakSet : Set, y = null;
function $t(r, t) {
  var e = r.ref;
  if (e !== null)
    if (typeof e == "function")
      try {
        e(null);
      } catch (o) {
        $(r, t, o);
      }
    else
      e.current = null;
}
function La(r, t, e) {
  try {
    e();
  } catch (o) {
    $(r, t, o);
  }
}
var Bl = !1;
function km(r, t) {
  if (ga = Do, r = Ys(), li(r)) {
    if ("selectionStart" in r)
      var e = { start: r.selectionStart, end: r.selectionEnd };
    else
      r: {
        e = (e = r.ownerDocument) && e.defaultView || window;
        var o = e.getSelection && e.getSelection();
        if (o && o.rangeCount !== 0) {
          e = o.anchorNode;
          var n = o.anchorOffset, a = o.focusNode;
          o = o.focusOffset;
          try {
            e.nodeType, a.nodeType;
          } catch {
            e = null;
            break r;
          }
          var i = 0, l = -1, s = -1, c = 0, b = 0, f = r, u = null;
          t:
            for (; ; ) {
              for (var h; f !== e || n !== 0 && f.nodeType !== 3 || (l = i + n), f !== a || o !== 0 && f.nodeType !== 3 || (s = i + o), f.nodeType === 3 && (i += f.nodeValue.length), (h = f.firstChild) !== null; )
                u = f, f = h;
              for (; ; ) {
                if (f === r)
                  break t;
                if (u === e && ++c === n && (l = i), u === a && ++b === o && (s = i), (h = f.nextSibling) !== null)
                  break;
                f = u, u = f.parentNode;
              }
              f = h;
            }
          e = l === -1 || s === -1 ? null : { start: l, end: s };
        } else
          e = null;
      }
    e = e || { start: 0, end: 0 };
  } else
    e = null;
  for (va = { focusedElem: r, selectionRange: e }, Do = !1, y = t; y !== null; )
    if (t = y, r = t.child, (t.subtreeFlags & 1028) !== 0 && r !== null)
      r.return = t, y = r;
    else
      for (; y !== null; ) {
        t = y;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var w = x.memoizedProps, B = x.memoizedState, p = t.stateNode, d = p.getSnapshotBeforeUpdate(t.elementType === t.type ? w : _r(t.type, w), B);
                  p.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(v(163));
            }
        } catch (g) {
          $(t, t.return, g);
        }
        if (r = t.sibling, r !== null) {
          r.return = t.return, y = r;
          break;
        }
        y = t.return;
      }
  return x = Bl, Bl = !1, x;
}
function _e(r, t, e) {
  var o = t.updateQueue;
  if (o = o !== null ? o.lastEffect : null, o !== null) {
    var n = o = o.next;
    do {
      if ((n.tag & r) === r) {
        var a = n.destroy;
        n.destroy = void 0, a !== void 0 && La(t, e, a);
      }
      n = n.next;
    } while (n !== o);
  }
}
function un(r, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var e = t = t.next;
    do {
      if ((e.tag & r) === r) {
        var o = e.create;
        e.destroy = o();
      }
      e = e.next;
    } while (e !== t);
  }
}
function Ma(r) {
  var t = r.ref;
  if (t !== null) {
    var e = r.stateNode;
    switch (r.tag) {
      case 5:
        r = e;
        break;
      default:
        r = e;
    }
    typeof t == "function" ? t(r) : t.current = r;
  }
}
function Gd(r) {
  var t = r.alternate;
  t !== null && (r.alternate = null, Gd(t)), r.child = null, r.deletions = null, r.sibling = null, r.tag === 5 && (t = r.stateNode, t !== null && (delete t[Br], delete t[Ue], delete t[wa], delete t[nm], delete t[am])), r.stateNode = null, r.return = null, r.dependencies = null, r.memoizedProps = null, r.memoizedState = null, r.pendingProps = null, r.stateNode = null, r.updateQueue = null;
}
function Wd(r) {
  return r.tag === 5 || r.tag === 3 || r.tag === 4;
}
function Dl(r) {
  r:
    for (; ; ) {
      for (; r.sibling === null; ) {
        if (r.return === null || Wd(r.return))
          return null;
        r = r.return;
      }
      for (r.sibling.return = r.return, r = r.sibling; r.tag !== 5 && r.tag !== 6 && r.tag !== 18; ) {
        if (r.flags & 2 || r.child === null || r.tag === 4)
          continue r;
        r.child.return = r, r = r.child;
      }
      if (!(r.flags & 2))
        return r.stateNode;
    }
}
function Oa(r, t, e) {
  var o = r.tag;
  if (o === 5 || o === 6)
    r = r.stateNode, t ? e.nodeType === 8 ? e.parentNode.insertBefore(r, t) : e.insertBefore(r, t) : (e.nodeType === 8 ? (t = e.parentNode, t.insertBefore(r, e)) : (t = e, t.appendChild(r)), e = e._reactRootContainer, e != null || t.onclick !== null || (t.onclick = Fo));
  else if (o !== 4 && (r = r.child, r !== null))
    for (Oa(r, t, e), r = r.sibling; r !== null; )
      Oa(r, t, e), r = r.sibling;
}
function Ba(r, t, e) {
  var o = r.tag;
  if (o === 5 || o === 6)
    r = r.stateNode, t ? e.insertBefore(r, t) : e.appendChild(r);
  else if (o !== 4 && (r = r.child, r !== null))
    for (Ba(r, t, e), r = r.sibling; r !== null; )
      Ba(r, t, e), r = r.sibling;
}
var J = null, Pr = !1;
function Kr(r, t, e) {
  for (e = e.child; e !== null; )
    Qd(r, t, e), e = e.sibling;
}
function Qd(r, t, e) {
  if (Dr && typeof Dr.onCommitFiberUnmount == "function")
    try {
      Dr.onCommitFiberUnmount(nn, e);
    } catch {
    }
  switch (e.tag) {
    case 5:
      or || $t(e, t);
    case 6:
      var o = J, n = Pr;
      J = null, Kr(r, t, e), J = o, Pr = n, J !== null && (Pr ? (r = J, e = e.stateNode, r.nodeType === 8 ? r.parentNode.removeChild(e) : r.removeChild(e)) : J.removeChild(e.stateNode));
      break;
    case 18:
      J !== null && (Pr ? (r = J, e = e.stateNode, r.nodeType === 8 ? In(r.parentNode, e) : r.nodeType === 1 && In(r, e), Be(r)) : In(J, e.stateNode));
      break;
    case 4:
      o = J, n = Pr, J = e.stateNode.containerInfo, Pr = !0, Kr(r, t, e), J = o, Pr = n;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!or && (o = e.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
        n = o = o.next;
        do {
          var a = n, i = a.destroy;
          a = a.tag, i !== void 0 && (a & 2 || a & 4) && La(e, t, i), n = n.next;
        } while (n !== o);
      }
      Kr(r, t, e);
      break;
    case 1:
      if (!or && ($t(e, t), o = e.stateNode, typeof o.componentWillUnmount == "function"))
        try {
          o.props = e.memoizedProps, o.state = e.memoizedState, o.componentWillUnmount();
        } catch (l) {
          $(e, t, l);
        }
      Kr(r, t, e);
      break;
    case 21:
      Kr(r, t, e);
      break;
    case 22:
      e.mode & 1 ? (or = (o = or) || e.memoizedState !== null, Kr(r, t, e), or = o) : Kr(r, t, e);
      break;
    default:
      Kr(r, t, e);
  }
}
function Al(r) {
  var t = r.updateQueue;
  if (t !== null) {
    r.updateQueue = null;
    var e = r.stateNode;
    e === null && (e = r.stateNode = new ym()), t.forEach(function(o) {
      var n = Rm.bind(null, r, o);
      e.has(o) || (e.add(o), o.then(n, n));
    });
  }
}
function Cr(r, t) {
  var e = t.deletions;
  if (e !== null)
    for (var o = 0; o < e.length; o++) {
      var n = e[o];
      try {
        var a = r, i = t, l = i;
        r:
          for (; l !== null; ) {
            switch (l.tag) {
              case 5:
                J = l.stateNode, Pr = !1;
                break r;
              case 3:
                J = l.stateNode.containerInfo, Pr = !0;
                break r;
              case 4:
                J = l.stateNode.containerInfo, Pr = !0;
                break r;
            }
            l = l.return;
          }
        if (J === null)
          throw Error(v(160));
        Qd(a, i, n), J = null, Pr = !1;
        var s = n.alternate;
        s !== null && (s.return = null), n.return = null;
      } catch (c) {
        $(n, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      Yd(t, r), t = t.sibling;
}
function Yd(r, t) {
  var e = r.alternate, o = r.flags;
  switch (r.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Cr(t, r), Mr(r), o & 4) {
        try {
          _e(3, r, r.return), un(3, r);
        } catch (w) {
          $(r, r.return, w);
        }
        try {
          _e(5, r, r.return);
        } catch (w) {
          $(r, r.return, w);
        }
      }
      break;
    case 1:
      Cr(t, r), Mr(r), o & 512 && e !== null && $t(e, e.return);
      break;
    case 5:
      if (Cr(t, r), Mr(r), o & 512 && e !== null && $t(e, e.return), r.flags & 32) {
        var n = r.stateNode;
        try {
          Te(n, "");
        } catch (w) {
          $(r, r.return, w);
        }
      }
      if (o & 4 && (n = r.stateNode, n != null)) {
        var a = r.memoizedProps, i = e !== null ? e.memoizedProps : a, l = r.type, s = r.updateQueue;
        if (r.updateQueue = null, s !== null)
          try {
            l === "input" && a.type === "radio" && a.name != null && fs(n, a), ia(l, i);
            var c = ia(l, a);
            for (i = 0; i < s.length; i += 2) {
              var b = s[i], f = s[i + 1];
              b === "style" ? ws(n, f) : b === "dangerouslySetInnerHTML" ? hs(n, f) : b === "children" ? Te(n, f) : Ya(n, b, f, c);
            }
            switch (l) {
              case "input":
                ta(n, a);
                break;
              case "textarea":
                gs(n, a);
                break;
              case "select":
                var u = n._wrapperState.wasMultiple;
                n._wrapperState.wasMultiple = !!a.multiple;
                var h = a.value;
                h != null ? Wt(n, !!a.multiple, h, !1) : u !== !!a.multiple && (a.defaultValue != null ? Wt(
                  n,
                  !!a.multiple,
                  a.defaultValue,
                  !0
                ) : Wt(n, !!a.multiple, a.multiple ? [] : "", !1));
            }
            n[Ue] = a;
          } catch (w) {
            $(r, r.return, w);
          }
      }
      break;
    case 6:
      if (Cr(t, r), Mr(r), o & 4) {
        if (r.stateNode === null)
          throw Error(v(162));
        n = r.stateNode, a = r.memoizedProps;
        try {
          n.nodeValue = a;
        } catch (w) {
          $(r, r.return, w);
        }
      }
      break;
    case 3:
      if (Cr(t, r), Mr(r), o & 4 && e !== null && e.memoizedState.isDehydrated)
        try {
          Be(t.containerInfo);
        } catch (w) {
          $(r, r.return, w);
        }
      break;
    case 4:
      Cr(t, r), Mr(r);
      break;
    case 13:
      Cr(t, r), Mr(r), n = r.child, n.flags & 8192 && (a = n.memoizedState !== null, n.stateNode.isHidden = a, !a || n.alternate !== null && n.alternate.memoizedState !== null || (Ci = G())), o & 4 && Al(r);
      break;
    case 22:
      if (b = e !== null && e.memoizedState !== null, r.mode & 1 ? (or = (c = or) || b, Cr(t, r), or = c) : Cr(t, r), Mr(r), o & 8192) {
        if (c = r.memoizedState !== null, (r.stateNode.isHidden = c) && !b && r.mode & 1)
          for (y = r, b = r.child; b !== null; ) {
            for (f = y = b; y !== null; ) {
              switch (u = y, h = u.child, u.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  _e(4, u, u.return);
                  break;
                case 1:
                  $t(u, u.return);
                  var x = u.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    o = u, e = u.return;
                    try {
                      t = o, x.props = t.memoizedProps, x.state = t.memoizedState, x.componentWillUnmount();
                    } catch (w) {
                      $(o, e, w);
                    }
                  }
                  break;
                case 5:
                  $t(u, u.return);
                  break;
                case 22:
                  if (u.memoizedState !== null) {
                    Fl(f);
                    continue;
                  }
              }
              h !== null ? (h.return = u, y = h) : Fl(f);
            }
            b = b.sibling;
          }
        r:
          for (b = null, f = r; ; ) {
            if (f.tag === 5) {
              if (b === null) {
                b = f;
                try {
                  n = f.stateNode, c ? (a = n.style, typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (l = f.stateNode, s = f.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, l.style.display = xs("display", i));
                } catch (w) {
                  $(r, r.return, w);
                }
              }
            } else if (f.tag === 6) {
              if (b === null)
                try {
                  f.stateNode.nodeValue = c ? "" : f.memoizedProps;
                } catch (w) {
                  $(r, r.return, w);
                }
            } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === r) && f.child !== null) {
              f.child.return = f, f = f.child;
              continue;
            }
            if (f === r)
              break r;
            for (; f.sibling === null; ) {
              if (f.return === null || f.return === r)
                break r;
              b === f && (b = null), f = f.return;
            }
            b === f && (b = null), f.sibling.return = f.return, f = f.sibling;
          }
      }
      break;
    case 19:
      Cr(t, r), Mr(r), o & 4 && Al(r);
      break;
    case 21:
      break;
    default:
      Cr(
        t,
        r
      ), Mr(r);
  }
}
function Mr(r) {
  var t = r.flags;
  if (t & 2) {
    try {
      r: {
        for (var e = r.return; e !== null; ) {
          if (Wd(e)) {
            var o = e;
            break r;
          }
          e = e.return;
        }
        throw Error(v(160));
      }
      switch (o.tag) {
        case 5:
          var n = o.stateNode;
          o.flags & 32 && (Te(n, ""), o.flags &= -33);
          var a = Dl(r);
          Ba(r, a, n);
          break;
        case 3:
        case 4:
          var i = o.stateNode.containerInfo, l = Dl(r);
          Oa(r, l, i);
          break;
        default:
          throw Error(v(161));
      }
    } catch (s) {
      $(r, r.return, s);
    }
    r.flags &= -3;
  }
  t & 4096 && (r.flags &= -4097);
}
function zm(r, t, e) {
  y = r, Kd(r);
}
function Kd(r, t, e) {
  for (var o = (r.mode & 1) !== 0; y !== null; ) {
    var n = y, a = n.child;
    if (n.tag === 22 && o) {
      var i = n.memoizedState !== null || go;
      if (!i) {
        var l = n.alternate, s = l !== null && l.memoizedState !== null || or;
        l = go;
        var c = or;
        if (go = i, (or = s) && !c)
          for (y = n; y !== null; )
            i = y, s = i.child, i.tag === 22 && i.memoizedState !== null ? Ul(n) : s !== null ? (s.return = i, y = s) : Ul(n);
        for (; a !== null; )
          y = a, Kd(a), a = a.sibling;
        y = n, go = l, or = c;
      }
      Il(r);
    } else
      n.subtreeFlags & 8772 && a !== null ? (a.return = n, y = a) : Il(r);
  }
}
function Il(r) {
  for (; y !== null; ) {
    var t = y;
    if (t.flags & 8772) {
      var e = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              or || un(5, t);
              break;
            case 1:
              var o = t.stateNode;
              if (t.flags & 4 && !or)
                if (e === null)
                  o.componentDidMount();
                else {
                  var n = t.elementType === t.type ? e.memoizedProps : _r(t.type, e.memoizedProps);
                  o.componentDidUpdate(n, e.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
                }
              var a = t.updateQueue;
              a !== null && kl(t, a, o);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (e = null, t.child !== null)
                  switch (t.child.tag) {
                    case 5:
                      e = t.child.stateNode;
                      break;
                    case 1:
                      e = t.child.stateNode;
                  }
                kl(t, i, e);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (e === null && t.flags & 4) {
                e = l;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && e.focus();
                    break;
                  case "img":
                    s.src && (e.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var b = c.memoizedState;
                  if (b !== null) {
                    var f = b.dehydrated;
                    f !== null && Be(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(v(163));
          }
        or || t.flags & 512 && Ma(t);
      } catch (u) {
        $(t, t.return, u);
      }
    }
    if (t === r) {
      y = null;
      break;
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, y = e;
      break;
    }
    y = t.return;
  }
}
function Fl(r) {
  for (; y !== null; ) {
    var t = y;
    if (t === r) {
      y = null;
      break;
    }
    var e = t.sibling;
    if (e !== null) {
      e.return = t.return, y = e;
      break;
    }
    y = t.return;
  }
}
function Ul(r) {
  for (; y !== null; ) {
    var t = y;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var e = t.return;
          try {
            un(4, t);
          } catch (s) {
            $(t, e, s);
          }
          break;
        case 1:
          var o = t.stateNode;
          if (typeof o.componentDidMount == "function") {
            var n = t.return;
            try {
              o.componentDidMount();
            } catch (s) {
              $(t, n, s);
            }
          }
          var a = t.return;
          try {
            Ma(t);
          } catch (s) {
            $(t, a, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Ma(t);
          } catch (s) {
            $(t, i, s);
          }
      }
    } catch (s) {
      $(t, t.return, s);
    }
    if (t === r) {
      y = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      l.return = t.return, y = l;
      break;
    }
    y = t.return;
  }
}
var Sm = Math.ceil, Zo = Yr.ReactCurrentDispatcher, Ei = Yr.ReactCurrentOwner, zr = Yr.ReactCurrentBatchConfig, R = 0, Z = null, W = null, q = 0, br = 0, Vt = ut(0), Y = 0, Qe = null, Ct = 0, bn = 0, ji = 0, Pe = null, dr = null, Ci = 0, ne = 1 / 0, Ir = null, Jo = !1, Da = null, lt = null, vo = !1, tt = null, qo = 0, Ne = 0, Aa = null, Po = -1, No = 0;
function ir() {
  return R & 6 ? G() : Po !== -1 ? Po : Po = G();
}
function st(r) {
  return r.mode & 1 ? R & 2 && q !== 0 ? q & -q : lm.transition !== null ? (No === 0 && (No = Ts()), No) : (r = T, r !== 0 || (r = window.event, r = r === void 0 ? 16 : Is(r.type)), r) : 1;
}
function Tr(r, t, e, o) {
  if (50 < Ne)
    throw Ne = 0, Aa = null, Error(v(185));
  Ke(r, e, o), (!(R & 2) || r !== Z) && (r === Z && (!(R & 2) && (bn |= e), Y === 4 && qr(r, q)), ur(r, o), e === 1 && R === 0 && !(t.mode & 1) && (ne = G() + 500, cn && bt()));
}
function ur(r, t) {
  var e = r.callbackNode;
  lp(r, t);
  var o = Bo(r, r === Z ? q : 0);
  if (o === 0)
    e !== null && Xi(e), r.callbackNode = null, r.callbackPriority = 0;
  else if (t = o & -o, r.callbackPriority !== t) {
    if (e != null && Xi(e), t === 1)
      r.tag === 0 ? im($l.bind(null, r)) : nd($l.bind(null, r)), em(function() {
        !(R & 6) && bt();
      }), e = null;
    else {
      switch (Ls(o)) {
        case 1:
          e = qa;
          break;
        case 4:
          e = Ns;
          break;
        case 16:
          e = Oo;
          break;
        case 536870912:
          e = Rs;
          break;
        default:
          e = Oo;
      }
      e = oc(e, Xd.bind(null, r));
    }
    r.callbackPriority = t, r.callbackNode = e;
  }
}
function Xd(r, t) {
  if (Po = -1, No = 0, R & 6)
    throw Error(v(327));
  var e = r.callbackNode;
  if (Zt() && r.callbackNode !== e)
    return null;
  var o = Bo(r, r === Z ? q : 0);
  if (o === 0)
    return null;
  if (o & 30 || o & r.expiredLanes || t)
    t = rn(r, o);
  else {
    t = o;
    var n = R;
    R |= 2;
    var a = Jd();
    (Z !== r || q !== t) && (Ir = null, ne = G() + 500, kt(r, t));
    do
      try {
        Cm();
        break;
      } catch (l) {
        Zd(r, l);
      }
    while (1);
    mi(), Zo.current = a, R = n, W !== null ? t = 0 : (Z = null, q = 0, t = Y);
  }
  if (t !== 0) {
    if (t === 2 && (n = pa(r), n !== 0 && (o = n, t = Ia(r, n))), t === 1)
      throw e = Qe, kt(r, 0), qr(r, o), ur(r, G()), e;
    if (t === 6)
      qr(r, o);
    else {
      if (n = r.current.alternate, !(o & 30) && !Em(n) && (t = rn(r, o), t === 2 && (a = pa(r), a !== 0 && (o = a, t = Ia(r, a))), t === 1))
        throw e = Qe, kt(r, 0), qr(r, o), ur(r, G()), e;
      switch (r.finishedWork = n, r.finishedLanes = o, t) {
        case 0:
        case 1:
          throw Error(v(345));
        case 2:
          ht(r, dr, Ir);
          break;
        case 3:
          if (qr(r, o), (o & 130023424) === o && (t = Ci + 500 - G(), 10 < t)) {
            if (Bo(r, 0) !== 0)
              break;
            if (n = r.suspendedLanes, (n & o) !== o) {
              ir(), r.pingedLanes |= r.suspendedLanes & n;
              break;
            }
            r.timeoutHandle = xa(ht.bind(null, r, dr, Ir), t);
            break;
          }
          ht(r, dr, Ir);
          break;
        case 4:
          if (qr(r, o), (o & 4194240) === o)
            break;
          for (t = r.eventTimes, n = -1; 0 < o; ) {
            var i = 31 - Rr(o);
            a = 1 << i, i = t[i], i > n && (n = i), o &= ~a;
          }
          if (o = n, o = G() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * Sm(o / 1960)) - o, 10 < o) {
            r.timeoutHandle = xa(ht.bind(null, r, dr, Ir), o);
            break;
          }
          ht(r, dr, Ir);
          break;
        case 5:
          ht(r, dr, Ir);
          break;
        default:
          throw Error(v(329));
      }
    }
  }
  return ur(r, G()), r.callbackNode === e ? Xd.bind(null, r) : null;
}
function Ia(r, t) {
  var e = Pe;
  return r.current.memoizedState.isDehydrated && (kt(r, t).flags |= 256), r = rn(r, t), r !== 2 && (t = dr, dr = e, t !== null && Fa(t)), r;
}
function Fa(r) {
  dr === null ? dr = r : dr.push.apply(dr, r);
}
function Em(r) {
  for (var t = r; ; ) {
    if (t.flags & 16384) {
      var e = t.updateQueue;
      if (e !== null && (e = e.stores, e !== null))
        for (var o = 0; o < e.length; o++) {
          var n = e[o], a = n.getSnapshot;
          n = n.value;
          try {
            if (!Lr(a(), n))
              return !1;
          } catch {
            return !1;
          }
        }
    }
    if (e = t.child, t.subtreeFlags & 16384 && e !== null)
      e.return = t, t = e;
    else {
      if (t === r)
        break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === r)
          return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function qr(r, t) {
  for (t &= ~ji, t &= ~bn, r.suspendedLanes |= t, r.pingedLanes &= ~t, r = r.expirationTimes; 0 < t; ) {
    var e = 31 - Rr(t), o = 1 << e;
    r[e] = -1, t &= ~o;
  }
}
function $l(r) {
  if (R & 6)
    throw Error(v(327));
  Zt();
  var t = Bo(r, 0);
  if (!(t & 1))
    return ur(r, G()), null;
  var e = rn(r, t);
  if (r.tag !== 0 && e === 2) {
    var o = pa(r);
    o !== 0 && (t = o, e = Ia(r, o));
  }
  if (e === 1)
    throw e = Qe, kt(r, 0), qr(r, t), ur(r, G()), e;
  if (e === 6)
    throw Error(v(345));
  return r.finishedWork = r.current.alternate, r.finishedLanes = t, ht(r, dr, Ir), ur(r, G()), null;
}
function _i(r, t) {
  var e = R;
  R |= 1;
  try {
    return r(t);
  } finally {
    R = e, R === 0 && (ne = G() + 500, cn && bt());
  }
}
function _t(r) {
  tt !== null && tt.tag === 0 && !(R & 6) && Zt();
  var t = R;
  R |= 1;
  var e = zr.transition, o = T;
  try {
    if (zr.transition = null, T = 1, r)
      return r();
  } finally {
    T = o, zr.transition = e, R = t, !(R & 6) && bt();
  }
}
function Pi() {
  br = Vt.current, O(Vt);
}
function kt(r, t) {
  r.finishedWork = null, r.finishedLanes = 0;
  var e = r.timeoutHandle;
  if (e !== -1 && (r.timeoutHandle = -1, tm(e)), W !== null)
    for (e = W.return; e !== null; ) {
      var o = e;
      switch (di(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && Uo();
          break;
        case 3:
          ee(), O(pr), O(nr), hi();
          break;
        case 5:
          vi(o);
          break;
        case 4:
          ee();
          break;
        case 13:
          O(A);
          break;
        case 19:
          O(A);
          break;
        case 10:
          ui(o.type._context);
          break;
        case 22:
        case 23:
          Pi();
      }
      e = e.return;
    }
  if (Z = r, W = r = dt(r.current, null), q = br = t, Y = 0, Qe = null, ji = bn = Ct = 0, dr = Pe = null, wt !== null) {
    for (t = 0; t < wt.length; t++)
      if (e = wt[t], o = e.interleaved, o !== null) {
        e.interleaved = null;
        var n = o.next, a = e.pending;
        if (a !== null) {
          var i = a.next;
          a.next = n, o.next = i;
        }
        e.pending = o;
      }
    wt = null;
  }
  return r;
}
function Zd(r, t) {
  do {
    var e = W;
    try {
      if (mi(), jo.current = Xo, Ko) {
        for (var o = I.memoizedState; o !== null; ) {
          var n = o.queue;
          n !== null && (n.pending = null), o = o.next;
        }
        Ko = !1;
      }
      if (jt = 0, X = Q = I = null, Ce = !1, He = 0, Ei.current = null, e === null || e.return === null) {
        Y = 1, Qe = t, W = null;
        break;
      }
      r: {
        var a = r, i = e.return, l = e, s = t;
        if (t = q, l.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var c = s, b = l, f = b.tag;
          if (!(b.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var u = b.alternate;
            u ? (b.updateQueue = u.updateQueue, b.memoizedState = u.memoizedState, b.lanes = u.lanes) : (b.updateQueue = null, b.memoizedState = null);
          }
          var h = Pl(i);
          if (h !== null) {
            h.flags &= -257, Nl(h, i, l, a, t), h.mode & 1 && _l(a, c, t), t = h, s = c;
            var x = t.updateQueue;
            if (x === null) {
              var w = /* @__PURE__ */ new Set();
              w.add(s), t.updateQueue = w;
            } else
              x.add(s);
            break r;
          } else {
            if (!(t & 1)) {
              _l(a, c, t), Ni();
              break r;
            }
            s = Error(v(426));
          }
        } else if (D && l.mode & 1) {
          var B = Pl(i);
          if (B !== null) {
            !(B.flags & 65536) && (B.flags |= 256), Nl(B, i, l, a, t), ci(oe(s, l));
            break r;
          }
        }
        a = s = oe(s, l), Y !== 4 && (Y = 2), Pe === null ? Pe = [a] : Pe.push(a), a = i;
        do {
          switch (a.tag) {
            case 3:
              a.flags |= 65536, t &= -t, a.lanes |= t;
              var p = Md(a, s, t);
              yl(a, p);
              break r;
            case 1:
              l = s;
              var d = a.type, m = a.stateNode;
              if (!(a.flags & 128) && (typeof d.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (lt === null || !lt.has(m)))) {
                a.flags |= 65536, t &= -t, a.lanes |= t;
                var g = Od(a, l, t);
                yl(a, g);
                break r;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      rc(e);
    } catch (k) {
      t = k, W === e && e !== null && (W = e = e.return);
      continue;
    }
    break;
  } while (1);
}
function Jd() {
  var r = Zo.current;
  return Zo.current = Xo, r === null ? Xo : r;
}
function Ni() {
  (Y === 0 || Y === 3 || Y === 2) && (Y = 4), Z === null || !(Ct & 268435455) && !(bn & 268435455) || qr(Z, q);
}
function rn(r, t) {
  var e = R;
  R |= 2;
  var o = Jd();
  (Z !== r || q !== t) && (Ir = null, kt(r, t));
  do
    try {
      jm();
      break;
    } catch (n) {
      Zd(r, n);
    }
  while (1);
  if (mi(), R = e, Zo.current = o, W !== null)
    throw Error(v(261));
  return Z = null, q = 0, Y;
}
function jm() {
  for (; W !== null; )
    qd(W);
}
function Cm() {
  for (; W !== null && !Jc(); )
    qd(W);
}
function qd(r) {
  var t = ec(r.alternate, r, br);
  r.memoizedProps = r.pendingProps, t === null ? rc(r) : W = t, Ei.current = null;
}
function rc(r) {
  var t = r;
  do {
    var e = t.alternate;
    if (r = t.return, t.flags & 32768) {
      if (e = wm(e, t), e !== null) {
        e.flags &= 32767, W = e;
        return;
      }
      if (r !== null)
        r.flags |= 32768, r.subtreeFlags = 0, r.deletions = null;
      else {
        Y = 6, W = null;
        return;
      }
    } else if (e = xm(e, t, br), e !== null) {
      W = e;
      return;
    }
    if (t = t.sibling, t !== null) {
      W = t;
      return;
    }
    W = t = r;
  } while (t !== null);
  Y === 0 && (Y = 5);
}
function ht(r, t, e) {
  var o = T, n = zr.transition;
  try {
    zr.transition = null, T = 1, _m(r, t, e, o);
  } finally {
    zr.transition = n, T = o;
  }
  return null;
}
function _m(r, t, e, o) {
  do
    Zt();
  while (tt !== null);
  if (R & 6)
    throw Error(v(327));
  e = r.finishedWork;
  var n = r.finishedLanes;
  if (e === null)
    return null;
  if (r.finishedWork = null, r.finishedLanes = 0, e === r.current)
    throw Error(v(177));
  r.callbackNode = null, r.callbackPriority = 0;
  var a = e.lanes | e.childLanes;
  if (sp(r, a), r === Z && (W = Z = null, q = 0), !(e.subtreeFlags & 2064) && !(e.flags & 2064) || vo || (vo = !0, oc(Oo, function() {
    return Zt(), null;
  })), a = (e.flags & 15990) !== 0, e.subtreeFlags & 15990 || a) {
    a = zr.transition, zr.transition = null;
    var i = T;
    T = 1;
    var l = R;
    R |= 4, Ei.current = null, km(r, e), Yd(e, r), Yp(va), Do = !!ga, va = ga = null, r.current = e, zm(e), qc(), R = l, T = i, zr.transition = a;
  } else
    r.current = e;
  if (vo && (vo = !1, tt = r, qo = n), a = r.pendingLanes, a === 0 && (lt = null), ep(e.stateNode), ur(r, G()), t !== null)
    for (o = r.onRecoverableError, e = 0; e < t.length; e++)
      n = t[e], o(n.value, { componentStack: n.stack, digest: n.digest });
  if (Jo)
    throw Jo = !1, r = Da, Da = null, r;
  return qo & 1 && r.tag !== 0 && Zt(), a = r.pendingLanes, a & 1 ? r === Aa ? Ne++ : (Ne = 0, Aa = r) : Ne = 0, bt(), null;
}
function Zt() {
  if (tt !== null) {
    var r = Ls(qo), t = zr.transition, e = T;
    try {
      if (zr.transition = null, T = 16 > r ? 16 : r, tt === null)
        var o = !1;
      else {
        if (r = tt, tt = null, qo = 0, R & 6)
          throw Error(v(331));
        var n = R;
        for (R |= 4, y = r.current; y !== null; ) {
          var a = y, i = a.child;
          if (y.flags & 16) {
            var l = a.deletions;
            if (l !== null) {
              for (var s = 0; s < l.length; s++) {
                var c = l[s];
                for (y = c; y !== null; ) {
                  var b = y;
                  switch (b.tag) {
                    case 0:
                    case 11:
                    case 15:
                      _e(8, b, a);
                  }
                  var f = b.child;
                  if (f !== null)
                    f.return = b, y = f;
                  else
                    for (; y !== null; ) {
                      b = y;
                      var u = b.sibling, h = b.return;
                      if (Gd(b), b === c) {
                        y = null;
                        break;
                      }
                      if (u !== null) {
                        u.return = h, y = u;
                        break;
                      }
                      y = h;
                    }
                }
              }
              var x = a.alternate;
              if (x !== null) {
                var w = x.child;
                if (w !== null) {
                  x.child = null;
                  do {
                    var B = w.sibling;
                    w.sibling = null, w = B;
                  } while (w !== null);
                }
              }
              y = a;
            }
          }
          if (a.subtreeFlags & 2064 && i !== null)
            i.return = a, y = i;
          else
            r:
              for (; y !== null; ) {
                if (a = y, a.flags & 2048)
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      _e(9, a, a.return);
                  }
                var p = a.sibling;
                if (p !== null) {
                  p.return = a.return, y = p;
                  break r;
                }
                y = a.return;
              }
        }
        var d = r.current;
        for (y = d; y !== null; ) {
          i = y;
          var m = i.child;
          if (i.subtreeFlags & 2064 && m !== null)
            m.return = i, y = m;
          else
            r:
              for (i = d; y !== null; ) {
                if (l = y, l.flags & 2048)
                  try {
                    switch (l.tag) {
                      case 0:
                      case 11:
                      case 15:
                        un(9, l);
                    }
                  } catch (k) {
                    $(l, l.return, k);
                  }
                if (l === i) {
                  y = null;
                  break r;
                }
                var g = l.sibling;
                if (g !== null) {
                  g.return = l.return, y = g;
                  break r;
                }
                y = l.return;
              }
        }
        if (R = n, bt(), Dr && typeof Dr.onPostCommitFiberRoot == "function")
          try {
            Dr.onPostCommitFiberRoot(nn, r);
          } catch {
          }
        o = !0;
      }
      return o;
    } finally {
      T = e, zr.transition = t;
    }
  }
  return !1;
}
function Vl(r, t, e) {
  t = oe(e, t), t = Md(r, t, 1), r = it(r, t, 1), t = ir(), r !== null && (Ke(r, 1, t), ur(r, t));
}
function $(r, t, e) {
  if (r.tag === 3)
    Vl(r, r, e);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Vl(t, r, e);
        break;
      } else if (t.tag === 1) {
        var o = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (lt === null || !lt.has(o))) {
          r = oe(e, r), r = Od(t, r, 1), t = it(t, r, 1), r = ir(), t !== null && (Ke(t, 1, r), ur(t, r));
          break;
        }
      }
      t = t.return;
    }
}
function Pm(r, t, e) {
  var o = r.pingCache;
  o !== null && o.delete(t), t = ir(), r.pingedLanes |= r.suspendedLanes & e, Z === r && (q & e) === e && (Y === 4 || Y === 3 && (q & 130023424) === q && 500 > G() - Ci ? kt(r, 0) : ji |= e), ur(r, t);
}
function tc(r, t) {
  t === 0 && (r.mode & 1 ? (t = io, io <<= 1, !(io & 130023424) && (io = 4194304)) : t = 1);
  var e = ir();
  r = Wr(r, t), r !== null && (Ke(r, t, e), ur(r, e));
}
function Nm(r) {
  var t = r.memoizedState, e = 0;
  t !== null && (e = t.retryLane), tc(r, e);
}
function Rm(r, t) {
  var e = 0;
  switch (r.tag) {
    case 13:
      var o = r.stateNode, n = r.memoizedState;
      n !== null && (e = n.retryLane);
      break;
    case 19:
      o = r.stateNode;
      break;
    default:
      throw Error(v(314));
  }
  o !== null && o.delete(t), tc(r, e);
}
var ec;
ec = function(r, t, e) {
  if (r !== null)
    if (r.memoizedProps !== t.pendingProps || pr.current)
      cr = !0;
    else {
      if (!(r.lanes & e) && !(t.flags & 128))
        return cr = !1, hm(r, t, e);
      cr = !!(r.flags & 131072);
    }
  else
    cr = !1, D && t.flags & 1048576 && ad(t, Ho, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var o = t.type;
      _o(r, t), r = t.pendingProps;
      var n = qt(t, nr.current);
      Xt(t, e), n = wi(null, t, o, r, n, e);
      var a = yi();
      return t.flags |= 1, typeof n == "object" && n !== null && typeof n.render == "function" && n.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, mr(o) ? (a = !0, $o(t)) : a = !1, t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, fi(t), n.updater = pn, t.stateNode = n, n._reactInternals = t, ja(t, o, r, e), t = Pa(null, t, o, !0, a, e)) : (t.tag = 0, D && a && si(t), ar(null, t, n, e), t = t.child), t;
    case 16:
      o = t.elementType;
      r: {
        switch (_o(r, t), r = t.pendingProps, n = o._init, o = n(o._payload), t.type = o, n = t.tag = Lm(o), r = _r(o, r), n) {
          case 0:
            t = _a(null, t, o, r, e);
            break r;
          case 1:
            t = Ll(null, t, o, r, e);
            break r;
          case 11:
            t = Rl(null, t, o, r, e);
            break r;
          case 14:
            t = Tl(null, t, o, _r(o.type, r), e);
            break r;
        }
        throw Error(v(
          306,
          o,
          ""
        ));
      }
      return t;
    case 0:
      return o = t.type, n = t.pendingProps, n = t.elementType === o ? n : _r(o, n), _a(r, t, o, n, e);
    case 1:
      return o = t.type, n = t.pendingProps, n = t.elementType === o ? n : _r(o, n), Ll(r, t, o, n, e);
    case 3:
      r: {
        if (Id(t), r === null)
          throw Error(v(387));
        o = t.pendingProps, a = t.memoizedState, n = a.element, dd(r, t), Qo(t, o, null, e);
        var i = t.memoizedState;
        if (o = i.element, a.isDehydrated)
          if (a = { element: o, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) {
            n = oe(Error(v(423)), t), t = Ml(r, t, o, e, n);
            break r;
          } else if (o !== n) {
            n = oe(Error(v(424)), t), t = Ml(r, t, o, e, n);
            break r;
          } else
            for (fr = at(t.stateNode.containerInfo.firstChild), gr = t, D = !0, Nr = null, e = ud(t, null, o, e), t.child = e; e; )
              e.flags = e.flags & -3 | 4096, e = e.sibling;
        else {
          if (re(), o === n) {
            t = Qr(r, t, e);
            break r;
          }
          ar(r, t, o, e);
        }
        t = t.child;
      }
      return t;
    case 5:
      return bd(t), r === null && za(t), o = t.type, n = t.pendingProps, a = r !== null ? r.memoizedProps : null, i = n.children, ha(o, n) ? i = null : a !== null && ha(o, a) && (t.flags |= 32), Ad(r, t), ar(r, t, i, e), t.child;
    case 6:
      return r === null && za(t), null;
    case 13:
      return Fd(r, t, e);
    case 4:
      return gi(t, t.stateNode.containerInfo), o = t.pendingProps, r === null ? t.child = te(t, null, o, e) : ar(r, t, o, e), t.child;
    case 11:
      return o = t.type, n = t.pendingProps, n = t.elementType === o ? n : _r(o, n), Rl(r, t, o, n, e);
    case 7:
      return ar(r, t, t.pendingProps, e), t.child;
    case 8:
      return ar(r, t, t.pendingProps.children, e), t.child;
    case 12:
      return ar(r, t, t.pendingProps.children, e), t.child;
    case 10:
      r: {
        if (o = t.type._context, n = t.pendingProps, a = t.memoizedProps, i = n.value, L(Go, o._currentValue), o._currentValue = i, a !== null)
          if (Lr(a.value, i)) {
            if (a.children === n.children && !pr.current) {
              t = Qr(r, t, e);
              break r;
            }
          } else
            for (a = t.child, a !== null && (a.return = t); a !== null; ) {
              var l = a.dependencies;
              if (l !== null) {
                i = a.child;
                for (var s = l.firstContext; s !== null; ) {
                  if (s.context === o) {
                    if (a.tag === 1) {
                      s = Vr(-1, e & -e), s.tag = 2;
                      var c = a.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var b = c.pending;
                        b === null ? s.next = s : (s.next = b.next, b.next = s), c.pending = s;
                      }
                    }
                    a.lanes |= e, s = a.alternate, s !== null && (s.lanes |= e), Sa(
                      a.return,
                      e,
                      t
                    ), l.lanes |= e;
                    break;
                  }
                  s = s.next;
                }
              } else if (a.tag === 10)
                i = a.type === t.type ? null : a.child;
              else if (a.tag === 18) {
                if (i = a.return, i === null)
                  throw Error(v(341));
                i.lanes |= e, l = i.alternate, l !== null && (l.lanes |= e), Sa(i, e, t), i = a.sibling;
              } else
                i = a.child;
              if (i !== null)
                i.return = a;
              else
                for (i = a; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (a = i.sibling, a !== null) {
                    a.return = i.return, i = a;
                    break;
                  }
                  i = i.return;
                }
              a = i;
            }
        ar(r, t, n.children, e), t = t.child;
      }
      return t;
    case 9:
      return n = t.type, o = t.pendingProps.children, Xt(t, e), n = Sr(n), o = o(n), t.flags |= 1, ar(r, t, o, e), t.child;
    case 14:
      return o = t.type, n = _r(o, t.pendingProps), n = _r(o.type, n), Tl(r, t, o, n, e);
    case 15:
      return Bd(r, t, t.type, t.pendingProps, e);
    case 17:
      return o = t.type, n = t.pendingProps, n = t.elementType === o ? n : _r(o, n), _o(r, t), t.tag = 1, mr(o) ? (r = !0, $o(t)) : r = !1, Xt(t, e), pd(t, o, n), ja(t, o, n, e), Pa(null, t, o, !0, r, e);
    case 19:
      return Ud(r, t, e);
    case 22:
      return Dd(r, t, e);
  }
  throw Error(v(156, t.tag));
};
function oc(r, t) {
  return Ps(r, t);
}
function Tm(r, t, e, o) {
  this.tag = r, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function kr(r, t, e, o) {
  return new Tm(r, t, e, o);
}
function Ri(r) {
  return r = r.prototype, !(!r || !r.isReactComponent);
}
function Lm(r) {
  if (typeof r == "function")
    return Ri(r) ? 1 : 0;
  if (r != null) {
    if (r = r.$$typeof, r === Xa)
      return 11;
    if (r === Za)
      return 14;
  }
  return 2;
}
function dt(r, t) {
  var e = r.alternate;
  return e === null ? (e = kr(r.tag, t, r.key, r.mode), e.elementType = r.elementType, e.type = r.type, e.stateNode = r.stateNode, e.alternate = r, r.alternate = e) : (e.pendingProps = t, e.type = r.type, e.flags = 0, e.subtreeFlags = 0, e.deletions = null), e.flags = r.flags & 14680064, e.childLanes = r.childLanes, e.lanes = r.lanes, e.child = r.child, e.memoizedProps = r.memoizedProps, e.memoizedState = r.memoizedState, e.updateQueue = r.updateQueue, t = r.dependencies, e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, e.sibling = r.sibling, e.index = r.index, e.ref = r.ref, e;
}
function Ro(r, t, e, o, n, a) {
  var i = 2;
  if (o = r, typeof r == "function")
    Ri(r) && (i = 1);
  else if (typeof r == "string")
    i = 5;
  else
    r:
      switch (r) {
        case Lt:
          return zt(e.children, n, a, t);
        case Ka:
          i = 8, n |= 8;
          break;
        case Xn:
          return r = kr(12, e, t, n | 2), r.elementType = Xn, r.lanes = a, r;
        case Zn:
          return r = kr(13, e, t, n), r.elementType = Zn, r.lanes = a, r;
        case Jn:
          return r = kr(19, e, t, n), r.elementType = Jn, r.lanes = a, r;
        case ms:
          return fn(e, n, a, t);
        default:
          if (typeof r == "object" && r !== null)
            switch (r.$$typeof) {
              case cs:
                i = 10;
                break r;
              case ps:
                i = 9;
                break r;
              case Xa:
                i = 11;
                break r;
              case Za:
                i = 14;
                break r;
              case Xr:
                i = 16, o = null;
                break r;
            }
          throw Error(v(130, r == null ? r : typeof r, ""));
      }
  return t = kr(i, e, t, n), t.elementType = r, t.type = o, t.lanes = a, t;
}
function zt(r, t, e, o) {
  return r = kr(7, r, o, t), r.lanes = e, r;
}
function fn(r, t, e, o) {
  return r = kr(22, r, o, t), r.elementType = ms, r.lanes = e, r.stateNode = { isHidden: !1 }, r;
}
function Qn(r, t, e) {
  return r = kr(6, r, null, t), r.lanes = e, r;
}
function Yn(r, t, e) {
  return t = kr(4, r.children !== null ? r.children : [], r.key, t), t.lanes = e, t.stateNode = { containerInfo: r.containerInfo, pendingChildren: null, implementation: r.implementation }, t;
}
function Mm(r, t, e, o, n) {
  this.tag = t, this.containerInfo = r, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = _n(0), this.expirationTimes = _n(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = _n(0), this.identifierPrefix = o, this.onRecoverableError = n, this.mutableSourceEagerHydrationData = null;
}
function Ti(r, t, e, o, n, a, i, l, s) {
  return r = new Mm(r, t, e, l, s), t === 1 ? (t = 1, a === !0 && (t |= 8)) : t = 0, a = kr(3, null, null, t), r.current = a, a.stateNode = r, a.memoizedState = { element: o, isDehydrated: e, cache: null, transitions: null, pendingSuspenseBoundaries: null }, fi(a), r;
}
function Om(r, t, e) {
  var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Tt, key: o == null ? null : "" + o, children: r, containerInfo: t, implementation: e };
}
function nc(r) {
  if (!r)
    return pt;
  r = r._reactInternals;
  r: {
    if (Nt(r) !== r || r.tag !== 1)
      throw Error(v(170));
    var t = r;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break r;
        case 1:
          if (mr(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break r;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(v(171));
  }
  if (r.tag === 1) {
    var e = r.type;
    if (mr(e))
      return od(r, e, t);
  }
  return t;
}
function ac(r, t, e, o, n, a, i, l, s) {
  return r = Ti(e, o, !0, r, n, a, i, l, s), r.context = nc(null), e = r.current, o = ir(), n = st(e), a = Vr(o, n), a.callback = t ?? null, it(e, a, n), r.current.lanes = n, Ke(r, n, o), ur(r, o), r;
}
function gn(r, t, e, o) {
  var n = t.current, a = ir(), i = st(n);
  return e = nc(e), t.context === null ? t.context = e : t.pendingContext = e, t = Vr(a, i), t.payload = { element: r }, o = o === void 0 ? null : o, o !== null && (t.callback = o), r = it(n, t, i), r !== null && (Tr(r, n, i, a), Eo(r, n, i)), i;
}
function tn(r) {
  if (r = r.current, !r.child)
    return null;
  switch (r.child.tag) {
    case 5:
      return r.child.stateNode;
    default:
      return r.child.stateNode;
  }
}
function Hl(r, t) {
  if (r = r.memoizedState, r !== null && r.dehydrated !== null) {
    var e = r.retryLane;
    r.retryLane = e !== 0 && e < t ? e : t;
  }
}
function Li(r, t) {
  Hl(r, t), (r = r.alternate) && Hl(r, t);
}
function Bm() {
  return null;
}
var ic = typeof reportError == "function" ? reportError : function(r) {
  console.error(r);
};
function Mi(r) {
  this._internalRoot = r;
}
vn.prototype.render = Mi.prototype.render = function(r) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(v(409));
  gn(r, t, null, null);
};
vn.prototype.unmount = Mi.prototype.unmount = function() {
  var r = this._internalRoot;
  if (r !== null) {
    this._internalRoot = null;
    var t = r.containerInfo;
    _t(function() {
      gn(null, r, null, null);
    }), t[Gr] = null;
  }
};
function vn(r) {
  this._internalRoot = r;
}
vn.prototype.unstable_scheduleHydration = function(r) {
  if (r) {
    var t = Bs();
    r = { blockedOn: null, target: r, priority: t };
    for (var e = 0; e < Jr.length && t !== 0 && t < Jr[e].priority; e++)
      ;
    Jr.splice(e, 0, r), e === 0 && As(r);
  }
};
function Oi(r) {
  return !(!r || r.nodeType !== 1 && r.nodeType !== 9 && r.nodeType !== 11);
}
function hn(r) {
  return !(!r || r.nodeType !== 1 && r.nodeType !== 9 && r.nodeType !== 11 && (r.nodeType !== 8 || r.nodeValue !== " react-mount-point-unstable "));
}
function Gl() {
}
function Dm(r, t, e, o, n) {
  if (n) {
    if (typeof o == "function") {
      var a = o;
      o = function() {
        var c = tn(i);
        a.call(c);
      };
    }
    var i = ac(t, o, r, 0, null, !1, !1, "", Gl);
    return r._reactRootContainer = i, r[Gr] = i.current, Ie(r.nodeType === 8 ? r.parentNode : r), _t(), i;
  }
  for (; n = r.lastChild; )
    r.removeChild(n);
  if (typeof o == "function") {
    var l = o;
    o = function() {
      var c = tn(s);
      l.call(c);
    };
  }
  var s = Ti(r, 0, !1, null, null, !1, !1, "", Gl);
  return r._reactRootContainer = s, r[Gr] = s.current, Ie(r.nodeType === 8 ? r.parentNode : r), _t(function() {
    gn(t, s, e, o);
  }), s;
}
function xn(r, t, e, o, n) {
  var a = e._reactRootContainer;
  if (a) {
    var i = a;
    if (typeof n == "function") {
      var l = n;
      n = function() {
        var s = tn(i);
        l.call(s);
      };
    }
    gn(t, i, r, n);
  } else
    i = Dm(e, t, r, n, o);
  return tn(i);
}
Ms = function(r) {
  switch (r.tag) {
    case 3:
      var t = r.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var e = we(t.pendingLanes);
        e !== 0 && (ri(t, e | 1), ur(t, G()), !(R & 6) && (ne = G() + 500, bt()));
      }
      break;
    case 13:
      _t(function() {
        var o = Wr(r, 1);
        if (o !== null) {
          var n = ir();
          Tr(o, r, 1, n);
        }
      }), Li(r, 1);
  }
};
ti = function(r) {
  if (r.tag === 13) {
    var t = Wr(r, 134217728);
    if (t !== null) {
      var e = ir();
      Tr(t, r, 134217728, e);
    }
    Li(r, 134217728);
  }
};
Os = function(r) {
  if (r.tag === 13) {
    var t = st(r), e = Wr(r, t);
    if (e !== null) {
      var o = ir();
      Tr(e, r, t, o);
    }
    Li(r, t);
  }
};
Bs = function() {
  return T;
};
Ds = function(r, t) {
  var e = T;
  try {
    return T = r, t();
  } finally {
    T = e;
  }
};
sa = function(r, t, e) {
  switch (t) {
    case "input":
      if (ta(r, e), t = e.name, e.type === "radio" && t != null) {
        for (e = r; e.parentNode; )
          e = e.parentNode;
        for (e = e.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < e.length; t++) {
          var o = e[t];
          if (o !== r && o.form === r.form) {
            var n = dn(o);
            if (!n)
              throw Error(v(90));
            bs(o), ta(o, n);
          }
        }
      }
      break;
    case "textarea":
      gs(r, e);
      break;
    case "select":
      t = e.value, t != null && Wt(r, !!e.multiple, t, !1);
  }
};
zs = _i;
Ss = _t;
var Am = { usingClientEntryPoint: !1, Events: [Ze, Dt, dn, ys, ks, _i] }, ve = { findFiberByHostInstance: xt, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Im = { bundleType: ve.bundleType, version: ve.version, rendererPackageName: ve.rendererPackageName, rendererConfig: ve.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Yr.ReactCurrentDispatcher, findHostInstanceByFiber: function(r) {
  return r = Cs(r), r === null ? null : r.stateNode;
}, findFiberByHostInstance: ve.findFiberByHostInstance || Bm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ho = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ho.isDisabled && ho.supportsFiber)
    try {
      nn = ho.inject(Im), Dr = ho;
    } catch {
    }
}
hr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Am;
hr.createPortal = function(r, t) {
  var e = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Oi(t))
    throw Error(v(200));
  return Om(r, t, null, e);
};
hr.createRoot = function(r, t) {
  if (!Oi(r))
    throw Error(v(299));
  var e = !1, o = "", n = ic;
  return t != null && (t.unstable_strictMode === !0 && (e = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (n = t.onRecoverableError)), t = Ti(r, 1, !1, null, null, e, !1, o, n), r[Gr] = t.current, Ie(r.nodeType === 8 ? r.parentNode : r), new Mi(t);
};
hr.findDOMNode = function(r) {
  if (r == null)
    return null;
  if (r.nodeType === 1)
    return r;
  var t = r._reactInternals;
  if (t === void 0)
    throw typeof r.render == "function" ? Error(v(188)) : (r = Object.keys(r).join(","), Error(v(268, r)));
  return r = Cs(t), r = r === null ? null : r.stateNode, r;
};
hr.flushSync = function(r) {
  return _t(r);
};
hr.hydrate = function(r, t, e) {
  if (!hn(t))
    throw Error(v(200));
  return xn(null, r, t, !0, e);
};
hr.hydrateRoot = function(r, t, e) {
  if (!Oi(r))
    throw Error(v(405));
  var o = e != null && e.hydratedSources || null, n = !1, a = "", i = ic;
  if (e != null && (e.unstable_strictMode === !0 && (n = !0), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onRecoverableError !== void 0 && (i = e.onRecoverableError)), t = ac(t, null, r, 1, e ?? null, n, !1, a, i), r[Gr] = t.current, Ie(r), o)
    for (r = 0; r < o.length; r++)
      e = o[r], n = e._getVersion, n = n(e._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [e, n] : t.mutableSourceEagerHydrationData.push(
        e,
        n
      );
  return new vn(t);
};
hr.render = function(r, t, e) {
  if (!hn(t))
    throw Error(v(200));
  return xn(null, r, t, !1, e);
};
hr.unmountComponentAtNode = function(r) {
  if (!hn(r))
    throw Error(v(40));
  return r._reactRootContainer ? (_t(function() {
    xn(null, null, r, !1, function() {
      r._reactRootContainer = null, r[Gr] = null;
    });
  }), !0) : !1;
};
hr.unstable_batchedUpdates = _i;
hr.unstable_renderSubtreeIntoContainer = function(r, t, e, o) {
  if (!hn(e))
    throw Error(v(200));
  if (r == null || r._reactInternals === void 0)
    throw Error(v(38));
  return xn(r, t, e, !1, o);
};
hr.version = "18.2.0-next-9e3b772b8-20220608";
function lc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lc);
    } catch (r) {
      console.error(r);
    }
}
lc(), as.exports = hr;
var Fm = as.exports;
const Um = /* @__PURE__ */ Ua(Fm);
var sc = { exports: {} }, $m = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", Vm = $m, Hm = Vm;
function dc() {
}
function cc() {
}
cc.resetWarningCache = dc;
var Gm = function() {
  function r(o, n, a, i, l, s) {
    if (s !== Hm) {
      var c = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw c.name = "Invariant Violation", c;
    }
  }
  r.isRequired = r;
  function t() {
    return r;
  }
  var e = {
    array: r,
    bigint: r,
    bool: r,
    func: r,
    number: r,
    object: r,
    string: r,
    symbol: r,
    any: r,
    arrayOf: t,
    element: r,
    elementType: r,
    instanceOf: t,
    node: r,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: cc,
    resetWarningCache: dc
  };
  return e.PropTypes = e, e;
};
sc.exports = Gm();
var Wm = sc.exports;
const Ht = /* @__PURE__ */ Ua(Wm), en = Symbol.for("r2wc.reactRender"), Wl = Symbol.for("r2wc.shouldRender"), xo = Symbol.for("r2wc.root");
function Qm(r = "") {
  return r.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function Ym(r = "") {
  return r.replace(/-([a-z0-9])/g, function(t) {
    return t[1].toUpperCase();
  });
}
var Ql = {
  expando: function(r, t, e) {
    Object.defineProperty(r, t, {
      enumerable: !0,
      get: function() {
        return e;
      },
      set: function(o) {
        e = o, this[en]();
      }
    }), r[en]();
  }
};
function Km(r, t, e, o = {}) {
  var n = {
    isConnected: "isConnected" in HTMLElement.prototype
  }, a = !1, i = function() {
    var c = Reflect.construct(HTMLElement, arguments, this.constructor);
    return typeof o.shadow == "string" ? c.attachShadow({ mode: o.shadow }) : o.shadow && (console.warn(
      'Specifying the "shadow" option as a boolean is deprecated and will be removed in a future version.'
    ), c.attachShadow({ mode: "open" })), c;
  }, l = Object.create(HTMLElement.prototype);
  l.constructor = i;
  var s = new Proxy(l, {
    has: function(c, b) {
      return b in r.propTypes || b in l;
    },
    set: function(c, b, f, u) {
      return a && (n[b] = !0), typeof b == "symbol" || n[b] || b in c ? (r.propTypes && b in r.propTypes && Ql.expando(u, b, f), Reflect.set(c, b, f, u)) : (Ql.expando(u, b, f), !0);
    },
    getOwnPropertyDescriptor: function(c, b) {
      var f = Reflect.getOwnPropertyDescriptor(c, b);
      if (f)
        return f;
      if (b in r.propTypes)
        return {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          value: void 0
        };
    }
  });
  return i.prototype = s, l.connectedCallback = function() {
    this[Wl] = !0, this[en]();
  }, l.disconnectedCallback = function() {
    typeof e.createRoot == "function" ? this[xo].unmount() : e.unmountComponentAtNode(this);
  }, l[en] = function() {
    if (this[Wl] === !0) {
      var c = {};
      Object.keys(this).forEach(function(u) {
        n[u] !== !1 && (c[u] = this[u]);
      }, this), a = !0;
      const b = o.shadow ? this.shadowRoot : this, f = t.createElement(r, c);
      typeof e.createRoot == "function" ? (this[xo] || (this[xo] = e.createRoot(b)), this[xo].render(f)) : e.render(f, b), a = !1;
    }
  }, r.propTypes && (i.observedAttributes = o.dashStyleAttributes ? Object.keys(r.propTypes).map(function(c) {
    return Qm(c);
  }) : Object.keys(r.propTypes), l.attributeChangedCallback = function(c, b, f) {
    var u = o.dashStyleAttributes ? Ym(c) : c;
    this[u] = f;
  }), i;
}
const Xm = `@charset "UTF-8";/*!
* Bootstrap  v5.3.0-alpha3 (https://getbootstrap.com/)
* Copyright 2011-2023 The Bootstrap Authors
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
*/:root,[data-bs-theme=light]{--bs-blue:#0d6efd;--bs-indigo:#6610f2;--bs-purple:#6f42c1;--bs-pink:#d63384;--bs-red:#dc3545;--bs-orange:#fd7e14;--bs-yellow:#ffc107;--bs-green:#198754;--bs-teal:#20c997;--bs-cyan:#0dcaf0;--bs-black:#000;--bs-white:#fff;--bs-gray:#6c757d;--bs-gray-dark:#343a40;--bs-gray-100:#f8f9fa;--bs-gray-200:#e9ecef;--bs-gray-300:#dee2e6;--bs-gray-400:#ced4da;--bs-gray-500:#adb5bd;--bs-gray-600:#6c757d;--bs-gray-700:#495057;--bs-gray-800:#343a40;--bs-gray-900:#212529;--bs-primary:#0d6efd;--bs-secondary:#6c757d;--bs-success:#198754;--bs-info:#0dcaf0;--bs-warning:#ffc107;--bs-danger:#dc3545;--bs-light:#f8f9fa;--bs-dark:#212529;--bs-primary-rgb:13,110,253;--bs-secondary-rgb:108,117,125;--bs-success-rgb:25,135,84;--bs-info-rgb:13,202,240;--bs-warning-rgb:255,193,7;--bs-danger-rgb:220,53,69;--bs-light-rgb:248,249,250;--bs-dark-rgb:33,37,41;--bs-primary-text-emphasis:#052c65;--bs-secondary-text-emphasis:#2b2f32;--bs-success-text-emphasis:#0a3622;--bs-info-text-emphasis:#055160;--bs-warning-text-emphasis:#664d03;--bs-danger-text-emphasis:#58151c;--bs-light-text-emphasis:#495057;--bs-dark-text-emphasis:#495057;--bs-primary-bg-subtle:#cfe2ff;--bs-secondary-bg-subtle:#e2e3e5;--bs-success-bg-subtle:#d1e7dd;--bs-info-bg-subtle:#cff4fc;--bs-warning-bg-subtle:#fff3cd;--bs-danger-bg-subtle:#f8d7da;--bs-light-bg-subtle:#fcfcfd;--bs-dark-bg-subtle:#ced4da;--bs-primary-border-subtle:#9ec5fe;--bs-secondary-border-subtle:#c4c8cb;--bs-success-border-subtle:#a3cfbb;--bs-info-border-subtle:#9eeaf9;--bs-warning-border-subtle:#ffe69c;--bs-danger-border-subtle:#f1aeb5;--bs-light-border-subtle:#e9ecef;--bs-dark-border-subtle:#adb5bd;--bs-white-rgb:255,255,255;--bs-black-rgb:0,0,0;--bs-font-sans-serif:system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue","Noto Sans","Liberation Sans",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--bs-font-monospace:SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--bs-gradient:linear-gradient(180deg, rgba(255, 255, 255, .15), rgba(255, 255, 255, 0));--bs-body-font-family:var(--bs-font-sans-serif);--bs-body-font-size:1rem;--bs-body-font-weight:400;--bs-body-line-height:1.5;--bs-body-color:#212529;--bs-body-color-rgb:33,37,41;--bs-body-bg:#fff;--bs-body-bg-rgb:255,255,255;--bs-emphasis-color:#000;--bs-emphasis-color-rgb:0,0,0;--bs-secondary-color:rgba(33, 37, 41, .75);--bs-secondary-color-rgb:33,37,41;--bs-secondary-bg:#e9ecef;--bs-secondary-bg-rgb:233,236,239;--bs-tertiary-color:rgba(33, 37, 41, .5);--bs-tertiary-color-rgb:33,37,41;--bs-tertiary-bg:#f8f9fa;--bs-tertiary-bg-rgb:248,249,250;--bs-link-color:#0d6efd;--bs-link-color-rgb:13,110,253;--bs-link-decoration:underline;--bs-link-hover-color:#0a58ca;--bs-link-hover-color-rgb:10,88,202;--bs-code-color:#d63384;--bs-highlight-bg:#fff3cd;--bs-border-width:1px;--bs-border-style:solid;--bs-border-color:#dee2e6;--bs-border-color-translucent:rgba(0, 0, 0, .175);--bs-border-radius:.375rem;--bs-border-radius-sm:.25rem;--bs-border-radius-lg:.5rem;--bs-border-radius-xl:1rem;--bs-border-radius-xxl:2rem;--bs-border-radius-2xl:var(--bs-border-radius-xxl);--bs-border-radius-pill:50rem;--bs-box-shadow:0 .5rem 1rem rgba(0, 0, 0, .15);--bs-box-shadow-sm:0 .125rem .25rem rgba(0, 0, 0, .075);--bs-box-shadow-lg:0 1rem 3rem rgba(0, 0, 0, .175);--bs-box-shadow-inset:inset 0 1px 2px rgba(0, 0, 0, .075);--bs-focus-ring-width:.25rem;--bs-focus-ring-opacity:.25;--bs-focus-ring-color:rgba(13, 110, 253, .25);--bs-form-valid-color:#198754;--bs-form-valid-border-color:#198754;--bs-form-invalid-color:#dc3545;--bs-form-invalid-border-color:#dc3545}[data-bs-theme=dark]{color-scheme:dark;--bs-body-color:#adb5bd;--bs-body-color-rgb:173,181,189;--bs-body-bg:#212529;--bs-body-bg-rgb:33,37,41;--bs-emphasis-color:#fff;--bs-emphasis-color-rgb:255,255,255;--bs-secondary-color:rgba(173, 181, 189, .75);--bs-secondary-color-rgb:173,181,189;--bs-secondary-bg:#343a40;--bs-secondary-bg-rgb:52,58,64;--bs-tertiary-color:rgba(173, 181, 189, .5);--bs-tertiary-color-rgb:173,181,189;--bs-tertiary-bg:#2b3035;--bs-tertiary-bg-rgb:43,48,53;--bs-primary-text-emphasis:#6ea8fe;--bs-secondary-text-emphasis:#a7acb1;--bs-success-text-emphasis:#75b798;--bs-info-text-emphasis:#6edff6;--bs-warning-text-emphasis:#ffda6a;--bs-danger-text-emphasis:#ea868f;--bs-light-text-emphasis:#f8f9fa;--bs-dark-text-emphasis:#dee2e6;--bs-primary-bg-subtle:#031633;--bs-secondary-bg-subtle:#161719;--bs-success-bg-subtle:#051b11;--bs-info-bg-subtle:#032830;--bs-warning-bg-subtle:#332701;--bs-danger-bg-subtle:#2c0b0e;--bs-light-bg-subtle:#343a40;--bs-dark-bg-subtle:#1a1d20;--bs-primary-border-subtle:#084298;--bs-secondary-border-subtle:#41464b;--bs-success-border-subtle:#0f5132;--bs-info-border-subtle:#087990;--bs-warning-border-subtle:#997404;--bs-danger-border-subtle:#842029;--bs-light-border-subtle:#495057;--bs-dark-border-subtle:#343a40;--bs-link-color:#6ea8fe;--bs-link-hover-color:#8bb9fe;--bs-link-color-rgb:110,168,254;--bs-link-hover-color-rgb:139,185,254;--bs-code-color:#e685b5;--bs-border-color:#495057;--bs-border-color-translucent:rgba(255, 255, 255, .15);--bs-form-valid-color:#75b798;--bs-form-valid-border-color:#75b798;--bs-form-invalid-color:#ea868f;--bs-form-invalid-border-color:#ea868f}*,:after,:before{box-sizing:border-box}@media (prefers-reduced-motion:no-preference){:root{scroll-behavior:smooth}}body{margin:0;font-family:var(--bs-body-font-family);font-size:var(--bs-body-font-size);font-weight:var(--bs-body-font-weight);line-height:var(--bs-body-line-height);color:var(--bs-body-color);text-align:var(--bs-body-text-align);background-color:var(--bs-body-bg);-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}hr{margin:1rem 0;color:inherit;border:0;border-top:var(--bs-border-width) solid;opacity:.25}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem;font-weight:500;line-height:1.2;color:var(--bs-heading-color,inherit)}.h1,h1{font-size:calc(1.375rem + 1.5vw)}@media (min-width:1200px){.h1,h1{font-size:2.5rem}}.h2,h2{font-size:calc(1.325rem + .9vw)}@media (min-width:1200px){.h2,h2{font-size:2rem}}.h3,h3{font-size:calc(1.3rem + .6vw)}@media (min-width:1200px){.h3,h3{font-size:1.75rem}}.h4,h4{font-size:calc(1.275rem + .3vw)}@media (min-width:1200px){.h4,h4{font-size:1.5rem}}.h5,h5{font-size:1.25rem}.h6,h6{font-size:1rem}p{margin-top:0;margin-bottom:1rem}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted;cursor:help;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none}address{margin-bottom:1rem;font-style:normal;line-height:inherit}ol,ul{padding-left:2rem}dl,ol,ul{margin-top:0;margin-bottom:1rem}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}b,strong{font-weight:bolder}.small,small{font-size:.875em}.mark,mark{padding:.1875em;background-color:var(--bs-highlight-bg)}sub,sup{position:relative;font-size:.75em;line-height:0;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}a{color:rgba(var(--bs-link-color-rgb),var(--bs-link-opacity,1));text-decoration:underline}a:hover{--bs-link-color-rgb:var(--bs-link-hover-color-rgb)}a:not([href]):not([class]),a:not([href]):not([class]):hover{color:inherit;text-decoration:none}code,kbd,pre,samp{font-family:var(--bs-font-monospace);font-size:1em}pre{display:block;margin-top:0;margin-bottom:1rem;overflow:auto;font-size:.875em}pre code{font-size:inherit;color:inherit;word-break:normal}code{font-size:.875em;color:var(--bs-code-color);word-wrap:break-word}a>code{color:inherit}kbd{padding:.1875rem .375rem;font-size:.875em;color:var(--bs-body-bg);background-color:var(--bs-body-color);border-radius:.25rem}kbd kbd{padding:0;font-size:1em}figure{margin:0 0 1rem}img,svg{vertical-align:middle}table{caption-side:bottom;border-collapse:collapse}caption{padding-top:.5rem;padding-bottom:.5rem;color:var(--bs-secondary-color);text-align:left}th{text-align:inherit;text-align:-webkit-match-parent}tbody,td,tfoot,th,thead,tr{border-color:inherit;border-style:solid;border-width:0}label{display:inline-block}button{border-radius:0}button:focus:not(:focus-visible){outline:0}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,select{text-transform:none}[role=button]{cursor:pointer}select{word-wrap:normal}select:disabled{opacity:1}[list]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not([type=time])::-webkit-calendar-picker-indicator{display:none!important}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]:not(:disabled),[type=reset]:not(:disabled),[type=submit]:not(:disabled),button:not(:disabled){cursor:pointer}::-moz-focus-inner{padding:0;border-style:none}textarea{resize:vertical}fieldset{min-width:0;padding:0;margin:0;border:0}legend{float:left;width:100%;padding:0;margin-bottom:.5rem;font-size:calc(1.275rem + .3vw);line-height:inherit}@media (min-width:1200px){legend{font-size:1.5rem}}legend+*{clear:left}::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-fields-wrapper,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-text,::-webkit-datetime-edit-year-field{padding:0}::-webkit-inner-spin-button{height:auto}[type=search]{outline-offset:-2px;-webkit-appearance:textfield}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-color-swatch-wrapper{padding:0}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}::file-selector-button{font:inherit;-webkit-appearance:button}output{display:inline-block}iframe{border:0}summary{display:list-item;cursor:pointer}progress{vertical-align:baseline}[hidden]{display:none!important}.lead{font-size:1.25rem;font-weight:300}.display-1{font-size:calc(1.625rem + 4.5vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-1{font-size:5rem}}.display-2{font-size:calc(1.575rem + 3.9vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-2{font-size:4.5rem}}.display-3{font-size:calc(1.525rem + 3.3vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-3{font-size:4rem}}.display-4{font-size:calc(1.475rem + 2.7vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-4{font-size:3.5rem}}.display-5{font-size:calc(1.425rem + 2.1vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-5{font-size:3rem}}.display-6{font-size:calc(1.375rem + 1.5vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-6{font-size:2.5rem}}.list-unstyled,.list-inline{padding-left:0;list-style:none}.list-inline-item{display:inline-block}.list-inline-item:not(:last-child){margin-right:.5rem}.initialism{font-size:.875em;text-transform:uppercase}.blockquote{margin-bottom:1rem;font-size:1.25rem}.blockquote>:last-child{margin-bottom:0}.blockquote-footer{margin-top:-1rem;margin-bottom:1rem;font-size:.875em;color:#6c757d}.blockquote-footer:before{content:"— "}.img-fluid{max-width:100%;height:auto}.img-thumbnail{padding:.25rem;background-color:var(--bs-body-bg);border:var(--bs-border-width) solid var(--bs-border-color);border-radius:var(--bs-border-radius);max-width:100%;height:auto}.figure{display:inline-block}.figure-img{margin-bottom:.5rem;line-height:1}.figure-caption{font-size:.875em;color:var(--bs-secondary-color)}.container,.container-fluid,.container-lg,.container-md,.container-sm,.container-xl,.container-xxl{--bs-gutter-x:1.5rem;--bs-gutter-y:0;width:100%;padding-right:calc(var(--bs-gutter-x) * .5);padding-left:calc(var(--bs-gutter-x) * .5);margin-right:auto;margin-left:auto}@media (min-width:576px){.container,.container-sm{max-width:540px}}@media (min-width:768px){.container,.container-md,.container-sm{max-width:720px}}@media (min-width:992px){.container,.container-lg,.container-md,.container-sm{max-width:960px}}@media (min-width:1200px){.container,.container-lg,.container-md,.container-sm,.container-xl{max-width:1140px}}@media (min-width:1400px){.container,.container-lg,.container-md,.container-sm,.container-xl,.container-xxl{max-width:1320px}}:root{--bs-breakpoint-xs:0;--bs-breakpoint-sm:576px;--bs-breakpoint-md:768px;--bs-breakpoint-lg:992px;--bs-breakpoint-xl:1200px;--bs-breakpoint-xxl:1400px}.row{--bs-gutter-x:1.5rem;--bs-gutter-y:0;display:flex;flex-wrap:wrap;margin-top:calc(-1 * var(--bs-gutter-y));margin-right:calc(-.5 * var(--bs-gutter-x));margin-left:calc(-.5 * var(--bs-gutter-x))}.row>*{flex-shrink:0;width:100%;max-width:100%;padding-right:calc(var(--bs-gutter-x) * .5);padding-left:calc(var(--bs-gutter-x) * .5);margin-top:var(--bs-gutter-y)}.col{flex:1 0 0%}.row-cols-auto>*{flex:0 0 auto;width:auto}.row-cols-1>*{flex:0 0 auto;width:100%}.row-cols-2>*{flex:0 0 auto;width:50%}.row-cols-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-4>*{flex:0 0 auto;width:25%}.row-cols-5>*{flex:0 0 auto;width:20%}.row-cols-6>*{flex:0 0 auto;width:16.6666666667%}.col-auto{flex:0 0 auto;width:auto}.col-1{flex:0 0 auto;width:8.33333333%}.col-2{flex:0 0 auto;width:16.66666667%}.col-3{flex:0 0 auto;width:25%}.col-4{flex:0 0 auto;width:33.33333333%}.col-5{flex:0 0 auto;width:41.66666667%}.col-6{flex:0 0 auto;width:50%}.col-7{flex:0 0 auto;width:58.33333333%}.col-8{flex:0 0 auto;width:66.66666667%}.col-9{flex:0 0 auto;width:75%}.col-10{flex:0 0 auto;width:83.33333333%}.col-11{flex:0 0 auto;width:91.66666667%}.col-12{flex:0 0 auto;width:100%}.offset-1{margin-left:8.33333333%}.offset-2{margin-left:16.66666667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.33333333%}.offset-5{margin-left:41.66666667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.33333333%}.offset-8{margin-left:66.66666667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.33333333%}.offset-11{margin-left:91.66666667%}.g-0,.gx-0{--bs-gutter-x:0}.g-0,.gy-0{--bs-gutter-y:0}.g-1,.gx-1{--bs-gutter-x:.25rem}.g-1,.gy-1{--bs-gutter-y:.25rem}.g-2,.gx-2{--bs-gutter-x:.5rem}.g-2,.gy-2{--bs-gutter-y:.5rem}.g-3,.gx-3{--bs-gutter-x:1rem}.g-3,.gy-3{--bs-gutter-y:1rem}.g-4,.gx-4{--bs-gutter-x:1.5rem}.g-4,.gy-4{--bs-gutter-y:1.5rem}.g-5,.gx-5{--bs-gutter-x:3rem}.g-5,.gy-5{--bs-gutter-y:3rem}@media (min-width:576px){.col-sm{flex:1 0 0%}.row-cols-sm-auto>*{flex:0 0 auto;width:auto}.row-cols-sm-1>*{flex:0 0 auto;width:100%}.row-cols-sm-2>*{flex:0 0 auto;width:50%}.row-cols-sm-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-sm-4>*{flex:0 0 auto;width:25%}.row-cols-sm-5>*{flex:0 0 auto;width:20%}.row-cols-sm-6>*{flex:0 0 auto;width:16.6666666667%}.col-sm-auto{flex:0 0 auto;width:auto}.col-sm-1{flex:0 0 auto;width:8.33333333%}.col-sm-2{flex:0 0 auto;width:16.66666667%}.col-sm-3{flex:0 0 auto;width:25%}.col-sm-4{flex:0 0 auto;width:33.33333333%}.col-sm-5{flex:0 0 auto;width:41.66666667%}.col-sm-6{flex:0 0 auto;width:50%}.col-sm-7{flex:0 0 auto;width:58.33333333%}.col-sm-8{flex:0 0 auto;width:66.66666667%}.col-sm-9{flex:0 0 auto;width:75%}.col-sm-10{flex:0 0 auto;width:83.33333333%}.col-sm-11{flex:0 0 auto;width:91.66666667%}.col-sm-12{flex:0 0 auto;width:100%}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.33333333%}.offset-sm-2{margin-left:16.66666667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.33333333%}.offset-sm-5{margin-left:41.66666667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.33333333%}.offset-sm-8{margin-left:66.66666667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.33333333%}.offset-sm-11{margin-left:91.66666667%}.g-sm-0,.gx-sm-0{--bs-gutter-x:0}.g-sm-0,.gy-sm-0{--bs-gutter-y:0}.g-sm-1,.gx-sm-1{--bs-gutter-x:.25rem}.g-sm-1,.gy-sm-1{--bs-gutter-y:.25rem}.g-sm-2,.gx-sm-2{--bs-gutter-x:.5rem}.g-sm-2,.gy-sm-2{--bs-gutter-y:.5rem}.g-sm-3,.gx-sm-3{--bs-gutter-x:1rem}.g-sm-3,.gy-sm-3{--bs-gutter-y:1rem}.g-sm-4,.gx-sm-4{--bs-gutter-x:1.5rem}.g-sm-4,.gy-sm-4{--bs-gutter-y:1.5rem}.g-sm-5,.gx-sm-5{--bs-gutter-x:3rem}.g-sm-5,.gy-sm-5{--bs-gutter-y:3rem}}@media (min-width:768px){.col-md{flex:1 0 0%}.row-cols-md-auto>*{flex:0 0 auto;width:auto}.row-cols-md-1>*{flex:0 0 auto;width:100%}.row-cols-md-2>*{flex:0 0 auto;width:50%}.row-cols-md-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-md-4>*{flex:0 0 auto;width:25%}.row-cols-md-5>*{flex:0 0 auto;width:20%}.row-cols-md-6>*{flex:0 0 auto;width:16.6666666667%}.col-md-auto{flex:0 0 auto;width:auto}.col-md-1{flex:0 0 auto;width:8.33333333%}.col-md-2{flex:0 0 auto;width:16.66666667%}.col-md-3{flex:0 0 auto;width:25%}.col-md-4{flex:0 0 auto;width:33.33333333%}.col-md-5{flex:0 0 auto;width:41.66666667%}.col-md-6{flex:0 0 auto;width:50%}.col-md-7{flex:0 0 auto;width:58.33333333%}.col-md-8{flex:0 0 auto;width:66.66666667%}.col-md-9{flex:0 0 auto;width:75%}.col-md-10{flex:0 0 auto;width:83.33333333%}.col-md-11{flex:0 0 auto;width:91.66666667%}.col-md-12{flex:0 0 auto;width:100%}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.33333333%}.offset-md-2{margin-left:16.66666667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.33333333%}.offset-md-5{margin-left:41.66666667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.33333333%}.offset-md-8{margin-left:66.66666667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.33333333%}.offset-md-11{margin-left:91.66666667%}.g-md-0,.gx-md-0{--bs-gutter-x:0}.g-md-0,.gy-md-0{--bs-gutter-y:0}.g-md-1,.gx-md-1{--bs-gutter-x:.25rem}.g-md-1,.gy-md-1{--bs-gutter-y:.25rem}.g-md-2,.gx-md-2{--bs-gutter-x:.5rem}.g-md-2,.gy-md-2{--bs-gutter-y:.5rem}.g-md-3,.gx-md-3{--bs-gutter-x:1rem}.g-md-3,.gy-md-3{--bs-gutter-y:1rem}.g-md-4,.gx-md-4{--bs-gutter-x:1.5rem}.g-md-4,.gy-md-4{--bs-gutter-y:1.5rem}.g-md-5,.gx-md-5{--bs-gutter-x:3rem}.g-md-5,.gy-md-5{--bs-gutter-y:3rem}}@media (min-width:992px){.col-lg{flex:1 0 0%}.row-cols-lg-auto>*{flex:0 0 auto;width:auto}.row-cols-lg-1>*{flex:0 0 auto;width:100%}.row-cols-lg-2>*{flex:0 0 auto;width:50%}.row-cols-lg-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-lg-4>*{flex:0 0 auto;width:25%}.row-cols-lg-5>*{flex:0 0 auto;width:20%}.row-cols-lg-6>*{flex:0 0 auto;width:16.6666666667%}.col-lg-auto{flex:0 0 auto;width:auto}.col-lg-1{flex:0 0 auto;width:8.33333333%}.col-lg-2{flex:0 0 auto;width:16.66666667%}.col-lg-3{flex:0 0 auto;width:25%}.col-lg-4{flex:0 0 auto;width:33.33333333%}.col-lg-5{flex:0 0 auto;width:41.66666667%}.col-lg-6{flex:0 0 auto;width:50%}.col-lg-7{flex:0 0 auto;width:58.33333333%}.col-lg-8{flex:0 0 auto;width:66.66666667%}.col-lg-9{flex:0 0 auto;width:75%}.col-lg-10{flex:0 0 auto;width:83.33333333%}.col-lg-11{flex:0 0 auto;width:91.66666667%}.col-lg-12{flex:0 0 auto;width:100%}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.33333333%}.offset-lg-2{margin-left:16.66666667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.33333333%}.offset-lg-5{margin-left:41.66666667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.33333333%}.offset-lg-8{margin-left:66.66666667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.33333333%}.offset-lg-11{margin-left:91.66666667%}.g-lg-0,.gx-lg-0{--bs-gutter-x:0}.g-lg-0,.gy-lg-0{--bs-gutter-y:0}.g-lg-1,.gx-lg-1{--bs-gutter-x:.25rem}.g-lg-1,.gy-lg-1{--bs-gutter-y:.25rem}.g-lg-2,.gx-lg-2{--bs-gutter-x:.5rem}.g-lg-2,.gy-lg-2{--bs-gutter-y:.5rem}.g-lg-3,.gx-lg-3{--bs-gutter-x:1rem}.g-lg-3,.gy-lg-3{--bs-gutter-y:1rem}.g-lg-4,.gx-lg-4{--bs-gutter-x:1.5rem}.g-lg-4,.gy-lg-4{--bs-gutter-y:1.5rem}.g-lg-5,.gx-lg-5{--bs-gutter-x:3rem}.g-lg-5,.gy-lg-5{--bs-gutter-y:3rem}}@media (min-width:1200px){.col-xl{flex:1 0 0%}.row-cols-xl-auto>*{flex:0 0 auto;width:auto}.row-cols-xl-1>*{flex:0 0 auto;width:100%}.row-cols-xl-2>*{flex:0 0 auto;width:50%}.row-cols-xl-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-xl-4>*{flex:0 0 auto;width:25%}.row-cols-xl-5>*{flex:0 0 auto;width:20%}.row-cols-xl-6>*{flex:0 0 auto;width:16.6666666667%}.col-xl-auto{flex:0 0 auto;width:auto}.col-xl-1{flex:0 0 auto;width:8.33333333%}.col-xl-2{flex:0 0 auto;width:16.66666667%}.col-xl-3{flex:0 0 auto;width:25%}.col-xl-4{flex:0 0 auto;width:33.33333333%}.col-xl-5{flex:0 0 auto;width:41.66666667%}.col-xl-6{flex:0 0 auto;width:50%}.col-xl-7{flex:0 0 auto;width:58.33333333%}.col-xl-8{flex:0 0 auto;width:66.66666667%}.col-xl-9{flex:0 0 auto;width:75%}.col-xl-10{flex:0 0 auto;width:83.33333333%}.col-xl-11{flex:0 0 auto;width:91.66666667%}.col-xl-12{flex:0 0 auto;width:100%}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.33333333%}.offset-xl-2{margin-left:16.66666667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.33333333%}.offset-xl-5{margin-left:41.66666667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.33333333%}.offset-xl-8{margin-left:66.66666667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.33333333%}.offset-xl-11{margin-left:91.66666667%}.g-xl-0,.gx-xl-0{--bs-gutter-x:0}.g-xl-0,.gy-xl-0{--bs-gutter-y:0}.g-xl-1,.gx-xl-1{--bs-gutter-x:.25rem}.g-xl-1,.gy-xl-1{--bs-gutter-y:.25rem}.g-xl-2,.gx-xl-2{--bs-gutter-x:.5rem}.g-xl-2,.gy-xl-2{--bs-gutter-y:.5rem}.g-xl-3,.gx-xl-3{--bs-gutter-x:1rem}.g-xl-3,.gy-xl-3{--bs-gutter-y:1rem}.g-xl-4,.gx-xl-4{--bs-gutter-x:1.5rem}.g-xl-4,.gy-xl-4{--bs-gutter-y:1.5rem}.g-xl-5,.gx-xl-5{--bs-gutter-x:3rem}.g-xl-5,.gy-xl-5{--bs-gutter-y:3rem}}@media (min-width:1400px){.col-xxl{flex:1 0 0%}.row-cols-xxl-auto>*{flex:0 0 auto;width:auto}.row-cols-xxl-1>*{flex:0 0 auto;width:100%}.row-cols-xxl-2>*{flex:0 0 auto;width:50%}.row-cols-xxl-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-xxl-4>*{flex:0 0 auto;width:25%}.row-cols-xxl-5>*{flex:0 0 auto;width:20%}.row-cols-xxl-6>*{flex:0 0 auto;width:16.6666666667%}.col-xxl-auto{flex:0 0 auto;width:auto}.col-xxl-1{flex:0 0 auto;width:8.33333333%}.col-xxl-2{flex:0 0 auto;width:16.66666667%}.col-xxl-3{flex:0 0 auto;width:25%}.col-xxl-4{flex:0 0 auto;width:33.33333333%}.col-xxl-5{flex:0 0 auto;width:41.66666667%}.col-xxl-6{flex:0 0 auto;width:50%}.col-xxl-7{flex:0 0 auto;width:58.33333333%}.col-xxl-8{flex:0 0 auto;width:66.66666667%}.col-xxl-9{flex:0 0 auto;width:75%}.col-xxl-10{flex:0 0 auto;width:83.33333333%}.col-xxl-11{flex:0 0 auto;width:91.66666667%}.col-xxl-12{flex:0 0 auto;width:100%}.offset-xxl-0{margin-left:0}.offset-xxl-1{margin-left:8.33333333%}.offset-xxl-2{margin-left:16.66666667%}.offset-xxl-3{margin-left:25%}.offset-xxl-4{margin-left:33.33333333%}.offset-xxl-5{margin-left:41.66666667%}.offset-xxl-6{margin-left:50%}.offset-xxl-7{margin-left:58.33333333%}.offset-xxl-8{margin-left:66.66666667%}.offset-xxl-9{margin-left:75%}.offset-xxl-10{margin-left:83.33333333%}.offset-xxl-11{margin-left:91.66666667%}.g-xxl-0,.gx-xxl-0{--bs-gutter-x:0}.g-xxl-0,.gy-xxl-0{--bs-gutter-y:0}.g-xxl-1,.gx-xxl-1{--bs-gutter-x:.25rem}.g-xxl-1,.gy-xxl-1{--bs-gutter-y:.25rem}.g-xxl-2,.gx-xxl-2{--bs-gutter-x:.5rem}.g-xxl-2,.gy-xxl-2{--bs-gutter-y:.5rem}.g-xxl-3,.gx-xxl-3{--bs-gutter-x:1rem}.g-xxl-3,.gy-xxl-3{--bs-gutter-y:1rem}.g-xxl-4,.gx-xxl-4{--bs-gutter-x:1.5rem}.g-xxl-4,.gy-xxl-4{--bs-gutter-y:1.5rem}.g-xxl-5,.gx-xxl-5{--bs-gutter-x:3rem}.g-xxl-5,.gy-xxl-5{--bs-gutter-y:3rem}}.table{--bs-table-color:var(--bs-body-color);--bs-table-bg:transparent;--bs-table-border-color:var(--bs-border-color);--bs-table-accent-bg:transparent;--bs-table-striped-color:var(--bs-body-color);--bs-table-striped-bg:rgba(0, 0, 0, .05);--bs-table-active-color:var(--bs-body-color);--bs-table-active-bg:rgba(0, 0, 0, .1);--bs-table-hover-color:var(--bs-body-color);--bs-table-hover-bg:rgba(0, 0, 0, .075);width:100%;margin-bottom:1rem;color:var(--bs-table-color);vertical-align:top;border-color:var(--bs-table-border-color)}.table>:not(caption)>*>*{padding:.5rem;background-color:var(--bs-table-bg);border-bottom-width:var(--bs-border-width);box-shadow:inset 0 0 0 9999px var(--bs-table-accent-bg)}.table>tbody{vertical-align:inherit}.table>thead{vertical-align:bottom}.table-group-divider{border-top:calc(var(--bs-border-width) * 2) solid currentcolor}.caption-top{caption-side:top}.table-sm>:not(caption)>*>*{padding:.25rem}.table-bordered>:not(caption)>*{border-width:var(--bs-border-width) 0}.table-bordered>:not(caption)>*>*{border-width:0 var(--bs-border-width)}.table-borderless>:not(caption)>*>*{border-bottom-width:0}.table-borderless>:not(:first-child){border-top-width:0}.table-striped>tbody>tr:nth-of-type(odd)>*{--bs-table-accent-bg:var(--bs-table-striped-bg);color:var(--bs-table-striped-color)}.table-striped-columns>:not(caption)>tr>:nth-child(2n){--bs-table-accent-bg:var(--bs-table-striped-bg);color:var(--bs-table-striped-color)}.table-active{--bs-table-accent-bg:var(--bs-table-active-bg);color:var(--bs-table-active-color)}.table-hover>tbody>tr:hover>*{--bs-table-accent-bg:var(--bs-table-hover-bg);color:var(--bs-table-hover-color)}.table-primary{--bs-table-color:#000;--bs-table-bg:#cfe2ff;--bs-table-border-color:#bacbe6;--bs-table-striped-bg:#c5d7f2;--bs-table-striped-color:#000;--bs-table-active-bg:#bacbe6;--bs-table-active-color:#000;--bs-table-hover-bg:#bfd1ec;--bs-table-hover-color:#000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-secondary{--bs-table-color:#000;--bs-table-bg:#e2e3e5;--bs-table-border-color:#cbccce;--bs-table-striped-bg:#d7d8da;--bs-table-striped-color:#000;--bs-table-active-bg:#cbccce;--bs-table-active-color:#000;--bs-table-hover-bg:#d1d2d4;--bs-table-hover-color:#000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-success{--bs-table-color:#000;--bs-table-bg:#d1e7dd;--bs-table-border-color:#bcd0c7;--bs-table-striped-bg:#c7dbd2;--bs-table-striped-color:#000;--bs-table-active-bg:#bcd0c7;--bs-table-active-color:#000;--bs-table-hover-bg:#c1d6cc;--bs-table-hover-color:#000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-info{--bs-table-color:#000;--bs-table-bg:#cff4fc;--bs-table-border-color:#badce3;--bs-table-striped-bg:#c5e8ef;--bs-table-striped-color:#000;--bs-table-active-bg:#badce3;--bs-table-active-color:#000;--bs-table-hover-bg:#bfe2e9;--bs-table-hover-color:#000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-warning{--bs-table-color:#000;--bs-table-bg:#fff3cd;--bs-table-border-color:#e6dbb9;--bs-table-striped-bg:#f2e7c3;--bs-table-striped-color:#000;--bs-table-active-bg:#e6dbb9;--bs-table-active-color:#000;--bs-table-hover-bg:#ece1be;--bs-table-hover-color:#000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-danger{--bs-table-color:#000;--bs-table-bg:#f8d7da;--bs-table-border-color:#dfc2c4;--bs-table-striped-bg:#eccccf;--bs-table-striped-color:#000;--bs-table-active-bg:#dfc2c4;--bs-table-active-color:#000;--bs-table-hover-bg:#e5c7ca;--bs-table-hover-color:#000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-light{--bs-table-color:#000;--bs-table-bg:#f8f9fa;--bs-table-border-color:#dfe0e1;--bs-table-striped-bg:#ecedee;--bs-table-striped-color:#000;--bs-table-active-bg:#dfe0e1;--bs-table-active-color:#000;--bs-table-hover-bg:#e5e6e7;--bs-table-hover-color:#000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-dark{--bs-table-color:#fff;--bs-table-bg:#212529;--bs-table-border-color:#373b3e;--bs-table-striped-bg:#2c3034;--bs-table-striped-color:#fff;--bs-table-active-bg:#373b3e;--bs-table-active-color:#fff;--bs-table-hover-bg:#323539;--bs-table-hover-color:#fff;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-responsive{overflow-x:auto;-webkit-overflow-scrolling:touch}@media (max-width:575.98px){.table-responsive-sm{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width:767.98px){.table-responsive-md{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width:991.98px){.table-responsive-lg{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width:1199.98px){.table-responsive-xl{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width:1399.98px){.table-responsive-xxl{overflow-x:auto;-webkit-overflow-scrolling:touch}}.form-label{margin-bottom:.5rem}.col-form-label{padding-top:calc(.375rem + var(--bs-border-width));padding-bottom:calc(.375rem + var(--bs-border-width));margin-bottom:0;font-size:inherit;line-height:1.5}.col-form-label-lg{padding-top:calc(.5rem + var(--bs-border-width));padding-bottom:calc(.5rem + var(--bs-border-width));font-size:1.25rem}.col-form-label-sm{padding-top:calc(.25rem + var(--bs-border-width));padding-bottom:calc(.25rem + var(--bs-border-width));font-size:.875rem}.form-text{margin-top:.25rem;font-size:.875em;color:var(--bs-secondary-color)}.form-control{display:block;width:100%;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:var(--bs-body-color);background-color:var(--bs-body-bg);background-clip:padding-box;border:var(--bs-border-width) solid var(--bs-border-color);-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:var(--bs-border-radius);transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-control{transition:none}}.form-control[type=file]{overflow:hidden}.form-control[type=file]:not(:disabled):not([readonly]){cursor:pointer}.form-control:focus{color:var(--bs-body-color);background-color:var(--bs-body-bg);border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem #0d6efd40}.form-control::-webkit-date-and-time-value{min-width:85px;height:1.5em;margin:0}.form-control::-webkit-datetime-edit{display:block;padding:0}.form-control::-moz-placeholder{color:var(--bs-secondary-color);opacity:1}.form-control::placeholder{color:var(--bs-secondary-color);opacity:1}.form-control:disabled{background-color:var(--bs-secondary-bg);opacity:1}.form-control::-webkit-file-upload-button{padding:.375rem .75rem;margin:-.375rem -.75rem;-webkit-margin-end:.75rem;margin-inline-end:.75rem;color:var(--bs-body-color);background-color:var(--bs-tertiary-bg);pointer-events:none;border-color:inherit;border-style:solid;border-width:0;border-inline-end-width:var(--bs-border-width);border-radius:0;-webkit-transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}.form-control::file-selector-button{padding:.375rem .75rem;margin:-.375rem -.75rem;-webkit-margin-end:.75rem;margin-inline-end:.75rem;color:var(--bs-body-color);background-color:var(--bs-tertiary-bg);pointer-events:none;border-color:inherit;border-style:solid;border-width:0;border-inline-end-width:var(--bs-border-width);border-radius:0;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-control::-webkit-file-upload-button{-webkit-transition:none;transition:none}.form-control::file-selector-button{transition:none}}.form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button{background-color:var(--bs-secondary-bg)}.form-control:hover:not(:disabled):not([readonly])::file-selector-button{background-color:var(--bs-secondary-bg)}.form-control-plaintext{display:block;width:100%;padding:.375rem 0;margin-bottom:0;line-height:1.5;color:var(--bs-body-color);background-color:transparent;border:solid transparent;border-width:var(--bs-border-width) 0}.form-control-plaintext:focus{outline:0}.form-control-plaintext.form-control-lg,.form-control-plaintext.form-control-sm{padding-right:0;padding-left:0}.form-control-sm{min-height:calc(1.5em + .5rem + calc(var(--bs-border-width) * 2));padding:.25rem .5rem;font-size:.875rem;border-radius:var(--bs-border-radius-sm)}.form-control-sm::-webkit-file-upload-button{padding:.25rem .5rem;margin:-.25rem -.5rem;-webkit-margin-end:.5rem;margin-inline-end:.5rem}.form-control-sm::file-selector-button{padding:.25rem .5rem;margin:-.25rem -.5rem;-webkit-margin-end:.5rem;margin-inline-end:.5rem}.form-control-lg{min-height:calc(1.5em + 1rem + calc(var(--bs-border-width) * 2));padding:.5rem 1rem;font-size:1.25rem;border-radius:var(--bs-border-radius-lg)}.form-control-lg::-webkit-file-upload-button{padding:.5rem 1rem;margin:-.5rem -1rem;-webkit-margin-end:1rem;margin-inline-end:1rem}.form-control-lg::file-selector-button{padding:.5rem 1rem;margin:-.5rem -1rem;-webkit-margin-end:1rem;margin-inline-end:1rem}textarea.form-control{min-height:calc(1.5em + .75rem + calc(var(--bs-border-width) * 2))}textarea.form-control-sm{min-height:calc(1.5em + .5rem + calc(var(--bs-border-width) * 2))}textarea.form-control-lg{min-height:calc(1.5em + 1rem + calc(var(--bs-border-width) * 2))}.form-control-color{width:3rem;height:calc(1.5em + .75rem + calc(var(--bs-border-width) * 2));padding:.375rem}.form-control-color:not(:disabled):not([readonly]){cursor:pointer}.form-control-color::-moz-color-swatch{border:0!important;border-radius:var(--bs-border-radius)}.form-control-color::-webkit-color-swatch{border:0!important;border-radius:var(--bs-border-radius)}.form-control-color.form-control-sm{height:calc(1.5em + .5rem + calc(var(--bs-border-width) * 2))}.form-control-color.form-control-lg{height:calc(1.5em + 1rem + calc(var(--bs-border-width) * 2))}.form-select{--bs-form-select-bg-img:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");display:block;width:100%;padding:.375rem 2.25rem .375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:var(--bs-body-color);background-color:var(--bs-body-bg);background-image:var(--bs-form-select-bg-img),var(--bs-form-select-bg-icon,none);background-repeat:no-repeat;background-position:right .75rem center;background-size:16px 12px;border:var(--bs-border-width) solid var(--bs-border-color);border-radius:var(--bs-border-radius);transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;-webkit-appearance:none;-moz-appearance:none;appearance:none}@media (prefers-reduced-motion:reduce){.form-select{transition:none}}.form-select:focus{border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem #0d6efd40}.form-select[multiple],.form-select[size]:not([size="1"]){padding-right:.75rem;background-image:none}.form-select:disabled{background-color:var(--bs-secondary-bg)}.form-select:-moz-focusring{color:transparent;text-shadow:0 0 0 var(--bs-body-color)}.form-select-sm{padding-top:.25rem;padding-bottom:.25rem;padding-left:.5rem;font-size:.875rem;border-radius:var(--bs-border-radius-sm)}.form-select-lg{padding-top:.5rem;padding-bottom:.5rem;padding-left:1rem;font-size:1.25rem;border-radius:var(--bs-border-radius-lg)}[data-bs-theme=dark] .form-select{--bs-form-select-bg-img:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23adb5bd' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e")}.form-check{display:block;min-height:1.5rem;padding-left:1.5em;margin-bottom:.125rem}.form-check .form-check-input{float:left;margin-left:-1.5em}.form-check-reverse{padding-right:1.5em;padding-left:0;text-align:right}.form-check-reverse .form-check-input{float:right;margin-right:-1.5em;margin-left:0}.form-check-input{--bs-form-check-bg:var(--bs-body-bg);width:1em;height:1em;margin-top:.25em;vertical-align:top;background-color:var(--bs-form-check-bg);background-image:var(--bs-form-check-bg-image);background-repeat:no-repeat;background-position:center;background-size:contain;border:var(--bs-border-width) solid var(--bs-border-color);-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-print-color-adjust:exact;color-adjust:exact;print-color-adjust:exact}.form-check-input[type=checkbox]{border-radius:.25em}.form-check-input[type=radio]{border-radius:50%}.form-check-input:active{filter:brightness(90%)}.form-check-input:focus{border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem #0d6efd40}.form-check-input:checked{background-color:#0d6efd;border-color:#0d6efd}.form-check-input:checked[type=checkbox]{--bs-form-check-bg-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e")}.form-check-input:checked[type=radio]{--bs-form-check-bg-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e")}.form-check-input[type=checkbox]:indeterminate{background-color:#0d6efd;border-color:#0d6efd;--bs-form-check-bg-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e")}.form-check-input:disabled{pointer-events:none;filter:none;opacity:.5}.form-check-input:disabled~.form-check-label,.form-check-input[disabled]~.form-check-label{cursor:default;opacity:.5}.form-switch{padding-left:2.5em}.form-switch .form-check-input{--bs-form-switch-bg:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e");width:2em;margin-left:-2.5em;background-image:var(--bs-form-switch-bg);background-position:left center;border-radius:2em;transition:background-position .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-switch .form-check-input{transition:none}}.form-switch .form-check-input:focus{--bs-form-switch-bg:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%2386b7fe'/%3e%3c/svg%3e")}.form-switch .form-check-input:checked{background-position:right center;--bs-form-switch-bg:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e")}.form-switch.form-check-reverse{padding-right:2.5em;padding-left:0}.form-switch.form-check-reverse .form-check-input{margin-right:-2.5em;margin-left:0}.form-check-inline{display:inline-block;margin-right:1rem}.btn-check{position:absolute;clip:rect(0,0,0,0);pointer-events:none}.btn-check:disabled+.btn,.btn-check[disabled]+.btn{pointer-events:none;filter:none;opacity:.65}[data-bs-theme=dark] .form-switch .form-check-input:not(:checked):not(:focus){--bs-form-switch-bg:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%28255, 255, 255, 0.25%29'/%3e%3c/svg%3e")}.form-range{width:100%;height:1.5rem;padding:0;background-color:transparent;-webkit-appearance:none;-moz-appearance:none;appearance:none}.form-range:focus{outline:0}.form-range:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .25rem #0d6efd40}.form-range:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .25rem #0d6efd40}.form-range::-moz-focus-outer{border:0}.form-range::-webkit-slider-thumb{width:1rem;height:1rem;margin-top:-.25rem;background-color:#0d6efd;border:0;border-radius:1rem;-webkit-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;-webkit-appearance:none;appearance:none}@media (prefers-reduced-motion:reduce){.form-range::-webkit-slider-thumb{-webkit-transition:none;transition:none}}.form-range::-webkit-slider-thumb:active{background-color:#b6d4fe}.form-range::-webkit-slider-runnable-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:var(--bs-tertiary-bg);border-color:transparent;border-radius:1rem}.form-range::-moz-range-thumb{width:1rem;height:1rem;background-color:#0d6efd;border:0;border-radius:1rem;-moz-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;-moz-appearance:none;appearance:none}@media (prefers-reduced-motion:reduce){.form-range::-moz-range-thumb{-moz-transition:none;transition:none}}.form-range::-moz-range-thumb:active{background-color:#b6d4fe}.form-range::-moz-range-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:var(--bs-tertiary-bg);border-color:transparent;border-radius:1rem}.form-range:disabled{pointer-events:none}.form-range:disabled::-webkit-slider-thumb{background-color:var(--bs-secondary-color)}.form-range:disabled::-moz-range-thumb{background-color:var(--bs-secondary-color)}.form-floating{position:relative}.form-floating>.form-control,.form-floating>.form-control-plaintext,.form-floating>.form-select{height:calc(3.5rem + calc(var(--bs-border-width) * 2));line-height:1.25}.form-floating>label{position:absolute;top:0;left:0;z-index:2;height:100%;padding:1rem .75rem;overflow:hidden;text-align:start;text-overflow:ellipsis;white-space:nowrap;pointer-events:none;border:var(--bs-border-width) solid transparent;transform-origin:0 0;transition:opacity .1s ease-in-out,transform .1s ease-in-out}@media (prefers-reduced-motion:reduce){.form-floating>label{transition:none}}.form-floating>.form-control,.form-floating>.form-control-plaintext{padding:1rem .75rem}.form-floating>.form-control-plaintext::-moz-placeholder,.form-floating>.form-control::-moz-placeholder{color:transparent}.form-floating>.form-control-plaintext::placeholder,.form-floating>.form-control::placeholder{color:transparent}.form-floating>.form-control-plaintext:not(:-moz-placeholder-shown),.form-floating>.form-control:not(:-moz-placeholder-shown){padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-control-plaintext:focus,.form-floating>.form-control-plaintext:not(:placeholder-shown),.form-floating>.form-control:focus,.form-floating>.form-control:not(:placeholder-shown){padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-control-plaintext:-webkit-autofill,.form-floating>.form-control:-webkit-autofill{padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-select{padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-control:not(:-moz-placeholder-shown)~label{color:rgba(var(--bs-body-color-rgb),.65);transform:scale(.85) translateY(-.5rem) translate(.15rem)}.form-floating>.form-control-plaintext~label,.form-floating>.form-control:focus~label,.form-floating>.form-control:not(:placeholder-shown)~label,.form-floating>.form-select~label{color:rgba(var(--bs-body-color-rgb),.65);transform:scale(.85) translateY(-.5rem) translate(.15rem)}.form-floating>.form-control:not(:-moz-placeholder-shown)~label:after{position:absolute;inset:1rem .375rem;z-index:-1;height:1.5em;content:"";background-color:var(--bs-body-bg);border-radius:var(--bs-border-radius)}.form-floating>.form-control-plaintext~label:after,.form-floating>.form-control:focus~label:after,.form-floating>.form-control:not(:placeholder-shown)~label:after,.form-floating>.form-select~label:after{position:absolute;inset:1rem .375rem;z-index:-1;height:1.5em;content:"";background-color:var(--bs-body-bg);border-radius:var(--bs-border-radius)}.form-floating>.form-control:-webkit-autofill~label{color:rgba(var(--bs-body-color-rgb),.65);transform:scale(.85) translateY(-.5rem) translate(.15rem)}.form-floating>.form-control-plaintext~label{border-width:var(--bs-border-width) 0}.form-floating>:disabled~label{color:#6c757d}.form-floating>:disabled~label:after{background-color:var(--bs-secondary-bg)}.input-group{position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%}.input-group>.form-control,.input-group>.form-floating,.input-group>.form-select{position:relative;flex:1 1 auto;width:1%;min-width:0}.input-group>.form-control:focus,.input-group>.form-floating:focus-within,.input-group>.form-select:focus{z-index:5}.input-group .btn{position:relative;z-index:2}.input-group .btn:focus{z-index:5}.input-group-text{display:flex;align-items:center;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:var(--bs-body-color);text-align:center;white-space:nowrap;background-color:var(--bs-tertiary-bg);border:var(--bs-border-width) solid var(--bs-border-color);border-radius:var(--bs-border-radius)}.input-group-lg>.btn,.input-group-lg>.form-control,.input-group-lg>.form-select,.input-group-lg>.input-group-text{padding:.5rem 1rem;font-size:1.25rem;border-radius:var(--bs-border-radius-lg)}.input-group-sm>.btn,.input-group-sm>.form-control,.input-group-sm>.form-select,.input-group-sm>.input-group-text{padding:.25rem .5rem;font-size:.875rem;border-radius:var(--bs-border-radius-sm)}.input-group-lg>.form-select,.input-group-sm>.form-select{padding-right:3rem}.input-group:not(.has-validation)>.dropdown-toggle:nth-last-child(n+3),.input-group:not(.has-validation)>.form-floating:not(:last-child)>.form-control,.input-group:not(.has-validation)>.form-floating:not(:last-child)>.form-select,.input-group:not(.has-validation)>:not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating){border-top-right-radius:0;border-bottom-right-radius:0}.input-group.has-validation>.dropdown-toggle:nth-last-child(n+4),.input-group.has-validation>.form-floating:nth-last-child(n+3)>.form-control,.input-group.has-validation>.form-floating:nth-last-child(n+3)>.form-select,.input-group.has-validation>:nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating){border-top-right-radius:0;border-bottom-right-radius:0}.input-group>:not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback){margin-left:calc(var(--bs-border-width) * -1);border-top-left-radius:0;border-bottom-left-radius:0}.input-group>.form-floating:not(:first-child)>.form-control,.input-group>.form-floating:not(:first-child)>.form-select{border-top-left-radius:0;border-bottom-left-radius:0}.valid-feedback{display:none;width:100%;margin-top:.25rem;font-size:.875em;color:var(--bs-form-valid-color)}.valid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;color:#fff;background-color:var(--bs-success);border-radius:var(--bs-border-radius)}.is-valid~.valid-feedback,.is-valid~.valid-tooltip,.was-validated :valid~.valid-feedback,.was-validated :valid~.valid-tooltip{display:block}.form-control.is-valid,.was-validated .form-control:valid{border-color:var(--bs-form-valid-border-color);padding-right:calc(1.5em + .75rem);background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.form-control.is-valid:focus,.was-validated .form-control:valid:focus{border-color:var(--bs-form-valid-border-color);box-shadow:0 0 0 .25rem rgba(var(--bs-success-rgb),.25)}.was-validated textarea.form-control:valid,textarea.form-control.is-valid{padding-right:calc(1.5em + .75rem);background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}.form-select.is-valid,.was-validated .form-select:valid{border-color:var(--bs-form-valid-border-color)}.form-select.is-valid:not([multiple]):not([size]),.form-select.is-valid:not([multiple])[size="1"],.was-validated .form-select:valid:not([multiple]):not([size]),.was-validated .form-select:valid:not([multiple])[size="1"]{--bs-form-select-bg-icon:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");padding-right:4.125rem;background-position:right .75rem center,center right 2.25rem;background-size:16px 12px,calc(.75em + .375rem) calc(.75em + .375rem)}.form-select.is-valid:focus,.was-validated .form-select:valid:focus{border-color:var(--bs-form-valid-border-color);box-shadow:0 0 0 .25rem rgba(var(--bs-success-rgb),.25)}.form-control-color.is-valid,.was-validated .form-control-color:valid{width:calc(3.75rem + 1.5em)}.form-check-input.is-valid,.was-validated .form-check-input:valid{border-color:var(--bs-form-valid-border-color)}.form-check-input.is-valid:checked,.was-validated .form-check-input:valid:checked{background-color:var(--bs-form-valid-color)}.form-check-input.is-valid:focus,.was-validated .form-check-input:valid:focus{box-shadow:0 0 0 .25rem rgba(var(--bs-success-rgb),.25)}.form-check-input.is-valid~.form-check-label,.was-validated .form-check-input:valid~.form-check-label{color:var(--bs-form-valid-color)}.form-check-inline .form-check-input~.valid-feedback{margin-left:.5em}.input-group>.form-control:not(:focus).is-valid,.input-group>.form-floating:not(:focus-within).is-valid,.input-group>.form-select:not(:focus).is-valid,.was-validated .input-group>.form-control:not(:focus):valid,.was-validated .input-group>.form-floating:not(:focus-within):valid,.was-validated .input-group>.form-select:not(:focus):valid{z-index:3}.invalid-feedback{display:none;width:100%;margin-top:.25rem;font-size:.875em;color:var(--bs-form-invalid-color)}.invalid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;color:#fff;background-color:var(--bs-danger);border-radius:var(--bs-border-radius)}.is-invalid~.invalid-feedback,.is-invalid~.invalid-tooltip,.was-validated :invalid~.invalid-feedback,.was-validated :invalid~.invalid-tooltip{display:block}.form-control.is-invalid,.was-validated .form-control:invalid{border-color:var(--bs-form-invalid-border-color);padding-right:calc(1.5em + .75rem);background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.form-control.is-invalid:focus,.was-validated .form-control:invalid:focus{border-color:var(--bs-form-invalid-border-color);box-shadow:0 0 0 .25rem rgba(var(--bs-danger-rgb),.25)}.was-validated textarea.form-control:invalid,textarea.form-control.is-invalid{padding-right:calc(1.5em + .75rem);background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}.form-select.is-invalid,.was-validated .form-select:invalid{border-color:var(--bs-form-invalid-border-color)}.form-select.is-invalid:not([multiple]):not([size]),.form-select.is-invalid:not([multiple])[size="1"],.was-validated .form-select:invalid:not([multiple]):not([size]),.was-validated .form-select:invalid:not([multiple])[size="1"]{--bs-form-select-bg-icon:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");padding-right:4.125rem;background-position:right .75rem center,center right 2.25rem;background-size:16px 12px,calc(.75em + .375rem) calc(.75em + .375rem)}.form-select.is-invalid:focus,.was-validated .form-select:invalid:focus{border-color:var(--bs-form-invalid-border-color);box-shadow:0 0 0 .25rem rgba(var(--bs-danger-rgb),.25)}.form-control-color.is-invalid,.was-validated .form-control-color:invalid{width:calc(3.75rem + 1.5em)}.form-check-input.is-invalid,.was-validated .form-check-input:invalid{border-color:var(--bs-form-invalid-border-color)}.form-check-input.is-invalid:checked,.was-validated .form-check-input:invalid:checked{background-color:var(--bs-form-invalid-color)}.form-check-input.is-invalid:focus,.was-validated .form-check-input:invalid:focus{box-shadow:0 0 0 .25rem rgba(var(--bs-danger-rgb),.25)}.form-check-input.is-invalid~.form-check-label,.was-validated .form-check-input:invalid~.form-check-label{color:var(--bs-form-invalid-color)}.form-check-inline .form-check-input~.invalid-feedback{margin-left:.5em}.input-group>.form-control:not(:focus).is-invalid,.input-group>.form-floating:not(:focus-within).is-invalid,.input-group>.form-select:not(:focus).is-invalid,.was-validated .input-group>.form-control:not(:focus):invalid,.was-validated .input-group>.form-floating:not(:focus-within):invalid,.was-validated .input-group>.form-select:not(:focus):invalid{z-index:4}.btn{--bs-btn-padding-x:.75rem;--bs-btn-padding-y:.375rem;--bs-btn-font-family: ;--bs-btn-font-size:1rem;--bs-btn-font-weight:400;--bs-btn-line-height:1.5;--bs-btn-color:var(--bs-body-color);--bs-btn-bg:transparent;--bs-btn-border-width:var(--bs-border-width);--bs-btn-border-color:transparent;--bs-btn-border-radius:var(--bs-border-radius);--bs-btn-hover-border-color:transparent;--bs-btn-box-shadow:inset 0 1px 0 rgba(255, 255, 255, .15),0 1px 1px rgba(0, 0, 0, .075);--bs-btn-disabled-opacity:.65;--bs-btn-focus-box-shadow:0 0 0 .25rem rgba(var(--bs-btn-focus-shadow-rgb), .5);display:inline-block;padding:var(--bs-btn-padding-y) var(--bs-btn-padding-x);font-family:var(--bs-btn-font-family);font-size:var(--bs-btn-font-size);font-weight:var(--bs-btn-font-weight);line-height:var(--bs-btn-line-height);color:var(--bs-btn-color);text-align:center;text-decoration:none;vertical-align:middle;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;border:var(--bs-btn-border-width) solid var(--bs-btn-border-color);border-radius:var(--bs-btn-border-radius);background-color:var(--bs-btn-bg);transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.btn{transition:none}}.btn:hover{color:var(--bs-btn-hover-color);background-color:var(--bs-btn-hover-bg);border-color:var(--bs-btn-hover-border-color)}.btn-check+.btn:hover{color:var(--bs-btn-color);background-color:var(--bs-btn-bg);border-color:var(--bs-btn-border-color)}.btn:focus-visible{color:var(--bs-btn-hover-color);background-color:var(--bs-btn-hover-bg);border-color:var(--bs-btn-hover-border-color);outline:0;box-shadow:var(--bs-btn-focus-box-shadow)}.btn-check:focus-visible+.btn{border-color:var(--bs-btn-hover-border-color);outline:0;box-shadow:var(--bs-btn-focus-box-shadow)}.btn-check:checked+.btn,.btn.active,.btn.show,.btn:first-child:active,:not(.btn-check)+.btn:active{color:var(--bs-btn-active-color);background-color:var(--bs-btn-active-bg);border-color:var(--bs-btn-active-border-color)}.btn-check:checked+.btn:focus-visible,.btn.active:focus-visible,.btn.show:focus-visible,.btn:first-child:active:focus-visible,:not(.btn-check)+.btn:active:focus-visible{box-shadow:var(--bs-btn-focus-box-shadow)}.btn.disabled,.btn:disabled,fieldset:disabled .btn{color:var(--bs-btn-disabled-color);pointer-events:none;background-color:var(--bs-btn-disabled-bg);border-color:var(--bs-btn-disabled-border-color);opacity:var(--bs-btn-disabled-opacity)}.btn-primary{--bs-btn-color:#fff;--bs-btn-bg:#0d6efd;--bs-btn-border-color:#0d6efd;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#0b5ed7;--bs-btn-hover-border-color:#0a58ca;--bs-btn-focus-shadow-rgb:49,132,253;--bs-btn-active-color:#fff;--bs-btn-active-bg:#0a58ca;--bs-btn-active-border-color:#0a53be;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, .125);--bs-btn-disabled-color:#fff;--bs-btn-disabled-bg:#0d6efd;--bs-btn-disabled-border-color:#0d6efd}.btn-secondary{--bs-btn-color:#fff;--bs-btn-bg:#6c757d;--bs-btn-border-color:#6c757d;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#5c636a;--bs-btn-hover-border-color:#565e64;--bs-btn-focus-shadow-rgb:130,138,145;--bs-btn-active-color:#fff;--bs-btn-active-bg:#565e64;--bs-btn-active-border-color:#51585e;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, .125);--bs-btn-disabled-color:#fff;--bs-btn-disabled-bg:#6c757d;--bs-btn-disabled-border-color:#6c757d}.btn-success{--bs-btn-color:#fff;--bs-btn-bg:#198754;--bs-btn-border-color:#198754;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#157347;--bs-btn-hover-border-color:#146c43;--bs-btn-focus-shadow-rgb:60,153,110;--bs-btn-active-color:#fff;--bs-btn-active-bg:#146c43;--bs-btn-active-border-color:#13653f;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, .125);--bs-btn-disabled-color:#fff;--bs-btn-disabled-bg:#198754;--bs-btn-disabled-border-color:#198754}.btn-info{--bs-btn-color:#000;--bs-btn-bg:#0dcaf0;--bs-btn-border-color:#0dcaf0;--bs-btn-hover-color:#000;--bs-btn-hover-bg:#31d2f2;--bs-btn-hover-border-color:#25cff2;--bs-btn-focus-shadow-rgb:11,172,204;--bs-btn-active-color:#000;--bs-btn-active-bg:#3dd5f3;--bs-btn-active-border-color:#25cff2;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, .125);--bs-btn-disabled-color:#000;--bs-btn-disabled-bg:#0dcaf0;--bs-btn-disabled-border-color:#0dcaf0}.btn-warning{--bs-btn-color:#000;--bs-btn-bg:#ffc107;--bs-btn-border-color:#ffc107;--bs-btn-hover-color:#000;--bs-btn-hover-bg:#ffca2c;--bs-btn-hover-border-color:#ffc720;--bs-btn-focus-shadow-rgb:217,164,6;--bs-btn-active-color:#000;--bs-btn-active-bg:#ffcd39;--bs-btn-active-border-color:#ffc720;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, .125);--bs-btn-disabled-color:#000;--bs-btn-disabled-bg:#ffc107;--bs-btn-disabled-border-color:#ffc107}.btn-danger{--bs-btn-color:#fff;--bs-btn-bg:#dc3545;--bs-btn-border-color:#dc3545;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#bb2d3b;--bs-btn-hover-border-color:#b02a37;--bs-btn-focus-shadow-rgb:225,83,97;--bs-btn-active-color:#fff;--bs-btn-active-bg:#b02a37;--bs-btn-active-border-color:#a52834;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, .125);--bs-btn-disabled-color:#fff;--bs-btn-disabled-bg:#dc3545;--bs-btn-disabled-border-color:#dc3545}.btn-light{--bs-btn-color:#000;--bs-btn-bg:#f8f9fa;--bs-btn-border-color:#f8f9fa;--bs-btn-hover-color:#000;--bs-btn-hover-bg:#d3d4d5;--bs-btn-hover-border-color:#c6c7c8;--bs-btn-focus-shadow-rgb:211,212,213;--bs-btn-active-color:#000;--bs-btn-active-bg:#c6c7c8;--bs-btn-active-border-color:#babbbc;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, .125);--bs-btn-disabled-color:#000;--bs-btn-disabled-bg:#f8f9fa;--bs-btn-disabled-border-color:#f8f9fa}.btn-dark{--bs-btn-color:#fff;--bs-btn-bg:#212529;--bs-btn-border-color:#212529;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#424649;--bs-btn-hover-border-color:#373b3e;--bs-btn-focus-shadow-rgb:66,70,73;--bs-btn-active-color:#fff;--bs-btn-active-bg:#4d5154;--bs-btn-active-border-color:#373b3e;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, .125);--bs-btn-disabled-color:#fff;--bs-btn-disabled-bg:#212529;--bs-btn-disabled-border-color:#212529}.btn-outline-primary{--bs-btn-color:#0d6efd;--bs-btn-border-color:#0d6efd;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#0d6efd;--bs-btn-hover-border-color:#0d6efd;--bs-btn-focus-shadow-rgb:13,110,253;--bs-btn-active-color:#fff;--bs-btn-active-bg:#0d6efd;--bs-btn-active-border-color:#0d6efd;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, .125);--bs-btn-disabled-color:#0d6efd;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#0d6efd;--bs-gradient:none}.btn-outline-secondary{--bs-btn-color:#6c757d;--bs-btn-border-color:#6c757d;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#6c757d;--bs-btn-hover-border-color:#6c757d;--bs-btn-focus-shadow-rgb:108,117,125;--bs-btn-active-color:#fff;--bs-btn-active-bg:#6c757d;--bs-btn-active-border-color:#6c757d;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, .125);--bs-btn-disabled-color:#6c757d;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#6c757d;--bs-gradient:none}.btn-outline-success{--bs-btn-color:#198754;--bs-btn-border-color:#198754;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#198754;--bs-btn-hover-border-color:#198754;--bs-btn-focus-shadow-rgb:25,135,84;--bs-btn-active-color:#fff;--bs-btn-active-bg:#198754;--bs-btn-active-border-color:#198754;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, .125);--bs-btn-disabled-color:#198754;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#198754;--bs-gradient:none}.btn-outline-info{--bs-btn-color:#0dcaf0;--bs-btn-border-color:#0dcaf0;--bs-btn-hover-color:#000;--bs-btn-hover-bg:#0dcaf0;--bs-btn-hover-border-color:#0dcaf0;--bs-btn-focus-shadow-rgb:13,202,240;--bs-btn-active-color:#000;--bs-btn-active-bg:#0dcaf0;--bs-btn-active-border-color:#0dcaf0;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, .125);--bs-btn-disabled-color:#0dcaf0;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#0dcaf0;--bs-gradient:none}.btn-outline-warning{--bs-btn-color:#ffc107;--bs-btn-border-color:#ffc107;--bs-btn-hover-color:#000;--bs-btn-hover-bg:#ffc107;--bs-btn-hover-border-color:#ffc107;--bs-btn-focus-shadow-rgb:255,193,7;--bs-btn-active-color:#000;--bs-btn-active-bg:#ffc107;--bs-btn-active-border-color:#ffc107;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, .125);--bs-btn-disabled-color:#ffc107;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#ffc107;--bs-gradient:none}.btn-outline-danger{--bs-btn-color:#dc3545;--bs-btn-border-color:#dc3545;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#dc3545;--bs-btn-hover-border-color:#dc3545;--bs-btn-focus-shadow-rgb:220,53,69;--bs-btn-active-color:#fff;--bs-btn-active-bg:#dc3545;--bs-btn-active-border-color:#dc3545;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, .125);--bs-btn-disabled-color:#dc3545;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#dc3545;--bs-gradient:none}.btn-outline-light{--bs-btn-color:#f8f9fa;--bs-btn-border-color:#f8f9fa;--bs-btn-hover-color:#000;--bs-btn-hover-bg:#f8f9fa;--bs-btn-hover-border-color:#f8f9fa;--bs-btn-focus-shadow-rgb:248,249,250;--bs-btn-active-color:#000;--bs-btn-active-bg:#f8f9fa;--bs-btn-active-border-color:#f8f9fa;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, .125);--bs-btn-disabled-color:#f8f9fa;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#f8f9fa;--bs-gradient:none}.btn-outline-dark{--bs-btn-color:#212529;--bs-btn-border-color:#212529;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#212529;--bs-btn-hover-border-color:#212529;--bs-btn-focus-shadow-rgb:33,37,41;--bs-btn-active-color:#fff;--bs-btn-active-bg:#212529;--bs-btn-active-border-color:#212529;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, .125);--bs-btn-disabled-color:#212529;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#212529;--bs-gradient:none}.btn-link{--bs-btn-font-weight:400;--bs-btn-color:var(--bs-link-color);--bs-btn-bg:transparent;--bs-btn-border-color:transparent;--bs-btn-hover-color:var(--bs-link-hover-color);--bs-btn-hover-border-color:transparent;--bs-btn-active-color:var(--bs-link-hover-color);--bs-btn-active-border-color:transparent;--bs-btn-disabled-color:#6c757d;--bs-btn-disabled-border-color:transparent;--bs-btn-box-shadow:0 0 0 #000;--bs-btn-focus-shadow-rgb:49,132,253;text-decoration:underline}.btn-link:focus-visible{color:var(--bs-btn-color)}.btn-link:hover{color:var(--bs-btn-hover-color)}.btn-group-lg>.btn,.btn-lg{--bs-btn-padding-y:.5rem;--bs-btn-padding-x:1rem;--bs-btn-font-size:1.25rem;--bs-btn-border-radius:var(--bs-border-radius-lg)}.btn-group-sm>.btn,.btn-sm{--bs-btn-padding-y:.25rem;--bs-btn-padding-x:.5rem;--bs-btn-font-size:.875rem;--bs-btn-border-radius:var(--bs-border-radius-sm)}.fade{transition:opacity .15s linear}@media (prefers-reduced-motion:reduce){.fade{transition:none}}.fade:not(.show){opacity:0}.collapse:not(.show){display:none}.collapsing{height:0;overflow:hidden;transition:height .35s ease}@media (prefers-reduced-motion:reduce){.collapsing{transition:none}}.collapsing.collapse-horizontal{width:0;height:auto;transition:width .35s ease}@media (prefers-reduced-motion:reduce){.collapsing.collapse-horizontal{transition:none}}.dropdown,.dropdown-center,.dropend,.dropstart,.dropup,.dropup-center{position:relative}.dropdown-toggle{white-space:nowrap}.dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:"";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.dropdown-toggle:empty:after{margin-left:0}.dropdown-menu{--bs-dropdown-zindex:1000;--bs-dropdown-min-width:10rem;--bs-dropdown-padding-x:0;--bs-dropdown-padding-y:.5rem;--bs-dropdown-spacer:.125rem;--bs-dropdown-font-size:1rem;--bs-dropdown-color:var(--bs-body-color);--bs-dropdown-bg:var(--bs-body-bg);--bs-dropdown-border-color:var(--bs-border-color-translucent);--bs-dropdown-border-radius:var(--bs-border-radius);--bs-dropdown-border-width:var(--bs-border-width);--bs-dropdown-inner-border-radius:calc(var(--bs-border-radius) - var(--bs-border-width));--bs-dropdown-divider-bg:var(--bs-border-color-translucent);--bs-dropdown-divider-margin-y:.5rem;--bs-dropdown-box-shadow:0 .5rem 1rem rgba(0, 0, 0, .15);--bs-dropdown-link-color:var(--bs-body-color);--bs-dropdown-link-hover-color:var(--bs-body-color);--bs-dropdown-link-hover-bg:var(--bs-tertiary-bg);--bs-dropdown-link-active-color:#fff;--bs-dropdown-link-active-bg:#0d6efd;--bs-dropdown-link-disabled-color:var(--bs-tertiary-color);--bs-dropdown-item-padding-x:1rem;--bs-dropdown-item-padding-y:.25rem;--bs-dropdown-header-color:#6c757d;--bs-dropdown-header-padding-x:1rem;--bs-dropdown-header-padding-y:.5rem;position:absolute;z-index:var(--bs-dropdown-zindex);display:none;min-width:var(--bs-dropdown-min-width);padding:var(--bs-dropdown-padding-y) var(--bs-dropdown-padding-x);margin:0;font-size:var(--bs-dropdown-font-size);color:var(--bs-dropdown-color);text-align:left;list-style:none;background-color:var(--bs-dropdown-bg);background-clip:padding-box;border:var(--bs-dropdown-border-width) solid var(--bs-dropdown-border-color);border-radius:var(--bs-dropdown-border-radius)}.dropdown-menu[data-bs-popper]{top:100%;left:0;margin-top:var(--bs-dropdown-spacer)}.dropdown-menu-start{--bs-position:start}.dropdown-menu-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-end{--bs-position:end}.dropdown-menu-end[data-bs-popper]{right:0;left:auto}@media (min-width:576px){.dropdown-menu-sm-start{--bs-position:start}.dropdown-menu-sm-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-sm-end{--bs-position:end}.dropdown-menu-sm-end[data-bs-popper]{right:0;left:auto}}@media (min-width:768px){.dropdown-menu-md-start{--bs-position:start}.dropdown-menu-md-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-md-end{--bs-position:end}.dropdown-menu-md-end[data-bs-popper]{right:0;left:auto}}@media (min-width:992px){.dropdown-menu-lg-start{--bs-position:start}.dropdown-menu-lg-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-lg-end{--bs-position:end}.dropdown-menu-lg-end[data-bs-popper]{right:0;left:auto}}@media (min-width:1200px){.dropdown-menu-xl-start{--bs-position:start}.dropdown-menu-xl-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-xl-end{--bs-position:end}.dropdown-menu-xl-end[data-bs-popper]{right:0;left:auto}}@media (min-width:1400px){.dropdown-menu-xxl-start{--bs-position:start}.dropdown-menu-xxl-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-xxl-end{--bs-position:end}.dropdown-menu-xxl-end[data-bs-popper]{right:0;left:auto}}.dropup .dropdown-menu[data-bs-popper]{top:auto;bottom:100%;margin-top:0;margin-bottom:var(--bs-dropdown-spacer)}.dropup .dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:"";border-top:0;border-right:.3em solid transparent;border-bottom:.3em solid;border-left:.3em solid transparent}.dropup .dropdown-toggle:empty:after{margin-left:0}.dropend .dropdown-menu[data-bs-popper]{top:0;right:auto;left:100%;margin-top:0;margin-left:var(--bs-dropdown-spacer)}.dropend .dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:"";border-top:.3em solid transparent;border-right:0;border-bottom:.3em solid transparent;border-left:.3em solid}.dropend .dropdown-toggle:empty:after{margin-left:0}.dropend .dropdown-toggle:after{vertical-align:0}.dropstart .dropdown-menu[data-bs-popper]{top:0;right:100%;left:auto;margin-top:0;margin-right:var(--bs-dropdown-spacer)}.dropstart .dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:""}.dropstart .dropdown-toggle:after{display:none}.dropstart .dropdown-toggle:before{display:inline-block;margin-right:.255em;vertical-align:.255em;content:"";border-top:.3em solid transparent;border-right:.3em solid;border-bottom:.3em solid transparent}.dropstart .dropdown-toggle:empty:after{margin-left:0}.dropstart .dropdown-toggle:before{vertical-align:0}.dropdown-divider{height:0;margin:var(--bs-dropdown-divider-margin-y) 0;overflow:hidden;border-top:1px solid var(--bs-dropdown-divider-bg);opacity:1}.dropdown-item{display:block;width:100%;padding:var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);clear:both;font-weight:400;color:var(--bs-dropdown-link-color);text-align:inherit;text-decoration:none;white-space:nowrap;background-color:transparent;border:0;border-radius:var(--bs-dropdown-item-border-radius,0)}.dropdown-item:focus,.dropdown-item:hover{color:var(--bs-dropdown-link-hover-color);background-color:var(--bs-dropdown-link-hover-bg)}.dropdown-item.active,.dropdown-item:active{color:var(--bs-dropdown-link-active-color);text-decoration:none;background-color:var(--bs-dropdown-link-active-bg)}.dropdown-item.disabled,.dropdown-item:disabled{color:var(--bs-dropdown-link-disabled-color);pointer-events:none;background-color:transparent}.dropdown-menu.show{display:block}.dropdown-header{display:block;padding:var(--bs-dropdown-header-padding-y) var(--bs-dropdown-header-padding-x);margin-bottom:0;font-size:.875rem;color:var(--bs-dropdown-header-color);white-space:nowrap}.dropdown-item-text{display:block;padding:var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);color:var(--bs-dropdown-link-color)}.dropdown-menu-dark{--bs-dropdown-color:#dee2e6;--bs-dropdown-bg:#343a40;--bs-dropdown-border-color:var(--bs-border-color-translucent);--bs-dropdown-box-shadow: ;--bs-dropdown-link-color:#dee2e6;--bs-dropdown-link-hover-color:#fff;--bs-dropdown-divider-bg:var(--bs-border-color-translucent);--bs-dropdown-link-hover-bg:rgba(255, 255, 255, .15);--bs-dropdown-link-active-color:#fff;--bs-dropdown-link-active-bg:#0d6efd;--bs-dropdown-link-disabled-color:#adb5bd;--bs-dropdown-header-color:#adb5bd}.btn-group,.btn-group-vertical{position:relative;display:inline-flex;vertical-align:middle}.btn-group-vertical>.btn,.btn-group>.btn{position:relative;flex:1 1 auto}.btn-group-vertical>.btn-check:checked+.btn,.btn-group-vertical>.btn-check:focus+.btn,.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:hover,.btn-group>.btn-check:checked+.btn,.btn-group>.btn-check:focus+.btn,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus,.btn-group>.btn:hover{z-index:1}.btn-toolbar{display:flex;flex-wrap:wrap;justify-content:flex-start}.btn-toolbar .input-group{width:auto}.btn-group{border-radius:var(--bs-border-radius)}.btn-group>.btn-group:not(:first-child),.btn-group>:not(.btn-check:first-child)+.btn{margin-left:calc(var(--bs-border-width) * -1)}.btn-group>.btn-group:not(:last-child)>.btn,.btn-group>.btn.dropdown-toggle-split:first-child,.btn-group>.btn:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn-group:not(:first-child)>.btn,.btn-group>.btn:nth-child(n+3),.btn-group>:not(.btn-check)+.btn{border-top-left-radius:0;border-bottom-left-radius:0}.dropdown-toggle-split{padding-right:.5625rem;padding-left:.5625rem}.dropdown-toggle-split:after,.dropend .dropdown-toggle-split:after,.dropup .dropdown-toggle-split:after{margin-left:0}.dropstart .dropdown-toggle-split:before{margin-right:0}.btn-group-sm>.btn+.dropdown-toggle-split,.btn-sm+.dropdown-toggle-split{padding-right:.375rem;padding-left:.375rem}.btn-group-lg>.btn+.dropdown-toggle-split,.btn-lg+.dropdown-toggle-split{padding-right:.75rem;padding-left:.75rem}.btn-group-vertical{flex-direction:column;align-items:flex-start;justify-content:center}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group{width:100%}.btn-group-vertical>.btn-group:not(:first-child),.btn-group-vertical>.btn:not(:first-child){margin-top:calc(var(--bs-border-width) * -1)}.btn-group-vertical>.btn-group:not(:last-child)>.btn,.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn-group:not(:first-child)>.btn,.btn-group-vertical>.btn~.btn{border-top-left-radius:0;border-top-right-radius:0}.nav{--bs-nav-link-padding-x:1rem;--bs-nav-link-padding-y:.5rem;--bs-nav-link-font-weight: ;--bs-nav-link-color:var(--bs-link-color);--bs-nav-link-hover-color:var(--bs-link-hover-color);--bs-nav-link-disabled-color:var(--bs-secondary-color);display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}.nav-link{display:block;padding:var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);font-size:var(--bs-nav-link-font-size);font-weight:var(--bs-nav-link-font-weight);color:var(--bs-nav-link-color);text-decoration:none;background:0 0;border:0;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out}@media (prefers-reduced-motion:reduce){.nav-link{transition:none}}.nav-link:focus,.nav-link:hover{color:var(--bs-nav-link-hover-color)}.nav-link:focus-visible{outline:0;box-shadow:0 0 0 .25rem #0d6efd40}.nav-link.disabled{color:var(--bs-nav-link-disabled-color);pointer-events:none;cursor:default}.nav-tabs{--bs-nav-tabs-border-width:var(--bs-border-width);--bs-nav-tabs-border-color:var(--bs-border-color);--bs-nav-tabs-border-radius:var(--bs-border-radius);--bs-nav-tabs-link-hover-border-color:var(--bs-secondary-bg) var(--bs-secondary-bg) var(--bs-border-color);--bs-nav-tabs-link-active-color:var(--bs-emphasis-color);--bs-nav-tabs-link-active-bg:var(--bs-body-bg);--bs-nav-tabs-link-active-border-color:var(--bs-border-color) var(--bs-border-color) var(--bs-body-bg);border-bottom:var(--bs-nav-tabs-border-width) solid var(--bs-nav-tabs-border-color)}.nav-tabs .nav-link{margin-bottom:calc(-1 * var(--bs-nav-tabs-border-width));border:var(--bs-nav-tabs-border-width) solid transparent;border-top-left-radius:var(--bs-nav-tabs-border-radius);border-top-right-radius:var(--bs-nav-tabs-border-radius)}.nav-tabs .nav-link:focus,.nav-tabs .nav-link:hover{isolation:isolate;border-color:var(--bs-nav-tabs-link-hover-border-color)}.nav-tabs .nav-link.disabled,.nav-tabs .nav-link:disabled{color:var(--bs-nav-link-disabled-color);background-color:transparent;border-color:transparent}.nav-tabs .nav-item.show .nav-link,.nav-tabs .nav-link.active{color:var(--bs-nav-tabs-link-active-color);background-color:var(--bs-nav-tabs-link-active-bg);border-color:var(--bs-nav-tabs-link-active-border-color)}.nav-tabs .dropdown-menu{margin-top:calc(-1 * var(--bs-nav-tabs-border-width));border-top-left-radius:0;border-top-right-radius:0}.nav-pills{--bs-nav-pills-border-radius:var(--bs-border-radius);--bs-nav-pills-link-active-color:#fff;--bs-nav-pills-link-active-bg:#0d6efd}.nav-pills .nav-link{border-radius:var(--bs-nav-pills-border-radius)}.nav-pills .nav-link:disabled{color:var(--bs-nav-link-disabled-color);background-color:transparent;border-color:transparent}.nav-pills .nav-link.active,.nav-pills .show>.nav-link{color:var(--bs-nav-pills-link-active-color);background-color:var(--bs-nav-pills-link-active-bg)}.nav-underline{--bs-nav-underline-gap:1rem;--bs-nav-underline-border-width:.125rem;--bs-nav-underline-link-active-color:var(--bs-emphasis-color);gap:var(--bs-nav-underline-gap)}.nav-underline .nav-link{padding-right:0;padding-left:0;border-bottom:var(--bs-nav-underline-border-width) solid transparent}.nav-underline .nav-link:focus,.nav-underline .nav-link:hover{border-bottom-color:currentcolor}.nav-underline .nav-link.active,.nav-underline .show>.nav-link{font-weight:700;color:var(--bs-nav-underline-link-active-color);border-bottom-color:currentcolor}.nav-fill .nav-item,.nav-fill>.nav-link{flex:1 1 auto;text-align:center}.nav-justified .nav-item,.nav-justified>.nav-link{flex-basis:0;flex-grow:1;text-align:center}.nav-fill .nav-item .nav-link,.nav-justified .nav-item .nav-link{width:100%}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.navbar{--bs-navbar-padding-x:0;--bs-navbar-padding-y:.5rem;--bs-navbar-color:rgba(var(--bs-emphasis-color-rgb), .65);--bs-navbar-hover-color:rgba(var(--bs-emphasis-color-rgb), .8);--bs-navbar-disabled-color:rgba(var(--bs-emphasis-color-rgb), .3);--bs-navbar-active-color:rgba(var(--bs-emphasis-color-rgb), 1);--bs-navbar-brand-padding-y:.3125rem;--bs-navbar-brand-margin-end:1rem;--bs-navbar-brand-font-size:1.25rem;--bs-navbar-brand-color:rgba(var(--bs-emphasis-color-rgb), 1);--bs-navbar-brand-hover-color:rgba(var(--bs-emphasis-color-rgb), 1);--bs-navbar-nav-link-padding-x:.5rem;--bs-navbar-toggler-padding-y:.25rem;--bs-navbar-toggler-padding-x:.75rem;--bs-navbar-toggler-font-size:1.25rem;--bs-navbar-toggler-icon-bg:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%2833, 37, 41, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");--bs-navbar-toggler-border-color:rgba(var(--bs-emphasis-color-rgb), .15);--bs-navbar-toggler-border-radius:var(--bs-border-radius);--bs-navbar-toggler-focus-width:.25rem;--bs-navbar-toggler-transition:box-shadow .15s ease-in-out;position:relative;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;padding:var(--bs-navbar-padding-y) var(--bs-navbar-padding-x)}.navbar>.container,.navbar>.container-fluid,.navbar>.container-lg,.navbar>.container-md,.navbar>.container-sm,.navbar>.container-xl,.navbar>.container-xxl{display:flex;flex-wrap:inherit;align-items:center;justify-content:space-between}.navbar-brand{padding-top:var(--bs-navbar-brand-padding-y);padding-bottom:var(--bs-navbar-brand-padding-y);margin-right:var(--bs-navbar-brand-margin-end);font-size:var(--bs-navbar-brand-font-size);color:var(--bs-navbar-brand-color);text-decoration:none;white-space:nowrap}.navbar-brand:focus,.navbar-brand:hover{color:var(--bs-navbar-brand-hover-color)}.navbar-nav{--bs-nav-link-padding-x:0;--bs-nav-link-padding-y:.5rem;--bs-nav-link-font-weight: ;--bs-nav-link-color:var(--bs-navbar-color);--bs-nav-link-hover-color:var(--bs-navbar-hover-color);--bs-nav-link-disabled-color:var(--bs-navbar-disabled-color);display:flex;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.navbar-nav .nav-link.active,.navbar-nav .nav-link.show{color:var(--bs-navbar-active-color)}.navbar-nav .dropdown-menu{position:static}.navbar-text{padding-top:.5rem;padding-bottom:.5rem;color:var(--bs-navbar-color)}.navbar-text a,.navbar-text a:focus,.navbar-text a:hover{color:var(--bs-navbar-active-color)}.navbar-collapse{flex-basis:100%;flex-grow:1;align-items:center}.navbar-toggler{padding:var(--bs-navbar-toggler-padding-y) var(--bs-navbar-toggler-padding-x);font-size:var(--bs-navbar-toggler-font-size);line-height:1;color:var(--bs-navbar-color);background-color:transparent;border:var(--bs-border-width) solid var(--bs-navbar-toggler-border-color);border-radius:var(--bs-navbar-toggler-border-radius);transition:var(--bs-navbar-toggler-transition)}@media (prefers-reduced-motion:reduce){.navbar-toggler{transition:none}}.navbar-toggler:hover{text-decoration:none}.navbar-toggler:focus{text-decoration:none;outline:0;box-shadow:0 0 0 var(--bs-navbar-toggler-focus-width)}.navbar-toggler-icon{display:inline-block;width:1.5em;height:1.5em;vertical-align:middle;background-image:var(--bs-navbar-toggler-icon-bg);background-repeat:no-repeat;background-position:center;background-size:100%}.navbar-nav-scroll{max-height:var(--bs-scroll-height,75vh);overflow-y:auto}@media (min-width:576px){.navbar-expand-sm{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-sm .navbar-nav{flex-direction:row}.navbar-expand-sm .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-sm .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-sm .navbar-nav-scroll{overflow:visible}.navbar-expand-sm .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-sm .navbar-toggler{display:none}.navbar-expand-sm .offcanvas{position:static;z-index:auto;flex-grow:1;width:auto!important;height:auto!important;visibility:visible!important;background-color:transparent!important;border:0!important;transform:none!important;transition:none}.navbar-expand-sm .offcanvas .offcanvas-header{display:none}.navbar-expand-sm .offcanvas .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}}@media (min-width:768px){.navbar-expand-md{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-md .navbar-nav{flex-direction:row}.navbar-expand-md .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-md .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-md .navbar-nav-scroll{overflow:visible}.navbar-expand-md .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-md .navbar-toggler{display:none}.navbar-expand-md .offcanvas{position:static;z-index:auto;flex-grow:1;width:auto!important;height:auto!important;visibility:visible!important;background-color:transparent!important;border:0!important;transform:none!important;transition:none}.navbar-expand-md .offcanvas .offcanvas-header{display:none}.navbar-expand-md .offcanvas .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}}@media (min-width:992px){.navbar-expand-lg{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-lg .navbar-nav{flex-direction:row}.navbar-expand-lg .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-lg .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-lg .navbar-nav-scroll{overflow:visible}.navbar-expand-lg .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-lg .navbar-toggler{display:none}.navbar-expand-lg .offcanvas{position:static;z-index:auto;flex-grow:1;width:auto!important;height:auto!important;visibility:visible!important;background-color:transparent!important;border:0!important;transform:none!important;transition:none}.navbar-expand-lg .offcanvas .offcanvas-header{display:none}.navbar-expand-lg .offcanvas .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}}@media (min-width:1200px){.navbar-expand-xl{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-xl .navbar-nav{flex-direction:row}.navbar-expand-xl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xl .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-xl .navbar-nav-scroll{overflow:visible}.navbar-expand-xl .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-xl .navbar-toggler{display:none}.navbar-expand-xl .offcanvas{position:static;z-index:auto;flex-grow:1;width:auto!important;height:auto!important;visibility:visible!important;background-color:transparent!important;border:0!important;transform:none!important;transition:none}.navbar-expand-xl .offcanvas .offcanvas-header{display:none}.navbar-expand-xl .offcanvas .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}}@media (min-width:1400px){.navbar-expand-xxl{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-xxl .navbar-nav{flex-direction:row}.navbar-expand-xxl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xxl .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-xxl .navbar-nav-scroll{overflow:visible}.navbar-expand-xxl .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-xxl .navbar-toggler{display:none}.navbar-expand-xxl .offcanvas{position:static;z-index:auto;flex-grow:1;width:auto!important;height:auto!important;visibility:visible!important;background-color:transparent!important;border:0!important;transform:none!important;transition:none}.navbar-expand-xxl .offcanvas .offcanvas-header{display:none}.navbar-expand-xxl .offcanvas .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}}.navbar-expand{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand .navbar-nav{flex-direction:row}.navbar-expand .navbar-nav .dropdown-menu{position:absolute}.navbar-expand .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand .navbar-nav-scroll{overflow:visible}.navbar-expand .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand .navbar-toggler{display:none}.navbar-expand .offcanvas{position:static;z-index:auto;flex-grow:1;width:auto!important;height:auto!important;visibility:visible!important;background-color:transparent!important;border:0!important;transform:none!important;transition:none}.navbar-expand .offcanvas .offcanvas-header{display:none}.navbar-expand .offcanvas .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}.navbar-dark{--bs-navbar-color:rgba(255, 255, 255, .55);--bs-navbar-hover-color:rgba(255, 255, 255, .75);--bs-navbar-disabled-color:rgba(255, 255, 255, .25);--bs-navbar-active-color:#fff;--bs-navbar-brand-color:#fff;--bs-navbar-brand-hover-color:#fff;--bs-navbar-toggler-border-color:rgba(255, 255, 255, .1);--bs-navbar-toggler-icon-bg:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")}[data-bs-theme=dark] .navbar-toggler-icon{--bs-navbar-toggler-icon-bg:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")}.card{--bs-card-spacer-y:1rem;--bs-card-spacer-x:1rem;--bs-card-title-spacer-y:.5rem;--bs-card-title-color: ;--bs-card-subtitle-color: ;--bs-card-border-width:var(--bs-border-width);--bs-card-border-color:var(--bs-border-color-translucent);--bs-card-border-radius:var(--bs-border-radius);--bs-card-box-shadow: ;--bs-card-inner-border-radius:calc(var(--bs-border-radius) - (var(--bs-border-width)));--bs-card-cap-padding-y:.5rem;--bs-card-cap-padding-x:1rem;--bs-card-cap-bg:rgba(var(--bs-body-color-rgb), .03);--bs-card-cap-color: ;--bs-card-height: ;--bs-card-color: ;--bs-card-bg:var(--bs-body-bg);--bs-card-img-overlay-padding:1rem;--bs-card-group-margin:.75rem;position:relative;display:flex;flex-direction:column;min-width:0;height:var(--bs-card-height);color:var(--bs-body-color);word-wrap:break-word;background-color:var(--bs-card-bg);background-clip:border-box;border:var(--bs-card-border-width) solid var(--bs-card-border-color);border-radius:var(--bs-card-border-radius)}.card>hr{margin-right:0;margin-left:0}.card>.list-group{border-top:inherit;border-bottom:inherit}.card>.list-group:first-child{border-top-width:0;border-top-left-radius:var(--bs-card-inner-border-radius);border-top-right-radius:var(--bs-card-inner-border-radius)}.card>.list-group:last-child{border-bottom-width:0;border-bottom-right-radius:var(--bs-card-inner-border-radius);border-bottom-left-radius:var(--bs-card-inner-border-radius)}.card>.card-header+.list-group,.card>.list-group+.card-footer{border-top:0}.card-body{flex:1 1 auto;padding:var(--bs-card-spacer-y) var(--bs-card-spacer-x);color:var(--bs-card-color)}.card-title{margin-bottom:var(--bs-card-title-spacer-y);color:var(--bs-card-title-color)}.card-subtitle{margin-top:calc(-.5 * var(--bs-card-title-spacer-y));margin-bottom:0;color:var(--bs-card-subtitle-color)}.card-text:last-child{margin-bottom:0}.card-link+.card-link{margin-left:var(--bs-card-spacer-x)}.card-header{padding:var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x);margin-bottom:0;color:var(--bs-card-cap-color);background-color:var(--bs-card-cap-bg);border-bottom:var(--bs-card-border-width) solid var(--bs-card-border-color)}.card-header:first-child{border-radius:var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius) 0 0}.card-footer{padding:var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x);color:var(--bs-card-cap-color);background-color:var(--bs-card-cap-bg);border-top:var(--bs-card-border-width) solid var(--bs-card-border-color)}.card-footer:last-child{border-radius:0 0 var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius)}.card-header-tabs{margin-right:calc(-.5 * var(--bs-card-cap-padding-x));margin-bottom:calc(-1 * var(--bs-card-cap-padding-y));margin-left:calc(-.5 * var(--bs-card-cap-padding-x));border-bottom:0}.card-header-tabs .nav-link.active{background-color:var(--bs-card-bg);border-bottom-color:var(--bs-card-bg)}.card-header-pills{margin-right:calc(-.5 * var(--bs-card-cap-padding-x));margin-left:calc(-.5 * var(--bs-card-cap-padding-x))}.card-img-overlay{position:absolute;top:0;right:0;bottom:0;left:0;padding:var(--bs-card-img-overlay-padding);border-radius:var(--bs-card-inner-border-radius)}.card-img,.card-img-bottom,.card-img-top{width:100%}.card-img,.card-img-top{border-top-left-radius:var(--bs-card-inner-border-radius);border-top-right-radius:var(--bs-card-inner-border-radius)}.card-img,.card-img-bottom{border-bottom-right-radius:var(--bs-card-inner-border-radius);border-bottom-left-radius:var(--bs-card-inner-border-radius)}.card-group>.card{margin-bottom:var(--bs-card-group-margin)}@media (min-width:576px){.card-group{display:flex;flex-flow:row wrap}.card-group>.card{flex:1 0 0%;margin-bottom:0}.card-group>.card+.card{margin-left:0;border-left:0}.card-group>.card:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.card-group>.card:not(:last-child) .card-header,.card-group>.card:not(:last-child) .card-img-top{border-top-right-radius:0}.card-group>.card:not(:last-child) .card-footer,.card-group>.card:not(:last-child) .card-img-bottom{border-bottom-right-radius:0}.card-group>.card:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.card-group>.card:not(:first-child) .card-header,.card-group>.card:not(:first-child) .card-img-top{border-top-left-radius:0}.card-group>.card:not(:first-child) .card-footer,.card-group>.card:not(:first-child) .card-img-bottom{border-bottom-left-radius:0}}.accordion{--bs-accordion-color:var(--bs-body-color);--bs-accordion-bg:var(--bs-body-bg);--bs-accordion-transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,border-radius .15s ease;--bs-accordion-border-color:var(--bs-border-color);--bs-accordion-border-width:var(--bs-border-width);--bs-accordion-border-radius:var(--bs-border-radius);--bs-accordion-inner-border-radius:calc(var(--bs-border-radius) - (var(--bs-border-width)));--bs-accordion-btn-padding-x:1.25rem;--bs-accordion-btn-padding-y:1rem;--bs-accordion-btn-color:var(--bs-body-color);--bs-accordion-btn-bg:var(--bs-accordion-bg);--bs-accordion-btn-icon:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");--bs-accordion-btn-icon-width:1.25rem;--bs-accordion-btn-icon-transform:rotate(-180deg);--bs-accordion-btn-icon-transition:transform .2s ease-in-out;--bs-accordion-btn-active-icon:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23052c65'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");--bs-accordion-btn-focus-border-color:#86b7fe;--bs-accordion-btn-focus-box-shadow:0 0 0 .25rem rgba(13, 110, 253, .25);--bs-accordion-body-padding-x:1.25rem;--bs-accordion-body-padding-y:1rem;--bs-accordion-active-color:var(--bs-primary-text-emphasis);--bs-accordion-active-bg:var(--bs-primary-bg-subtle)}.accordion-button{position:relative;display:flex;align-items:center;width:100%;padding:var(--bs-accordion-btn-padding-y) var(--bs-accordion-btn-padding-x);font-size:1rem;color:var(--bs-accordion-btn-color);text-align:left;background-color:var(--bs-accordion-btn-bg);border:0;border-radius:0;overflow-anchor:none;transition:var(--bs-accordion-transition)}@media (prefers-reduced-motion:reduce){.accordion-button{transition:none}}.accordion-button:not(.collapsed){color:var(--bs-accordion-active-color);background-color:var(--bs-accordion-active-bg);box-shadow:inset 0 calc(-1 * var(--bs-accordion-border-width)) 0 var(--bs-accordion-border-color)}.accordion-button:not(.collapsed):after{background-image:var(--bs-accordion-btn-active-icon);transform:var(--bs-accordion-btn-icon-transform)}.accordion-button:after{flex-shrink:0;width:var(--bs-accordion-btn-icon-width);height:var(--bs-accordion-btn-icon-width);margin-left:auto;content:"";background-image:var(--bs-accordion-btn-icon);background-repeat:no-repeat;background-size:var(--bs-accordion-btn-icon-width);transition:var(--bs-accordion-btn-icon-transition)}@media (prefers-reduced-motion:reduce){.accordion-button:after{transition:none}}.accordion-button:hover{z-index:2}.accordion-button:focus{z-index:3;border-color:var(--bs-accordion-btn-focus-border-color);outline:0;box-shadow:var(--bs-accordion-btn-focus-box-shadow)}.accordion-header{margin-bottom:0}.accordion-item{color:var(--bs-accordion-color);background-color:var(--bs-accordion-bg);border:var(--bs-accordion-border-width) solid var(--bs-accordion-border-color)}.accordion-item:first-of-type{border-top-left-radius:var(--bs-accordion-border-radius);border-top-right-radius:var(--bs-accordion-border-radius)}.accordion-item:first-of-type .accordion-button{border-top-left-radius:var(--bs-accordion-inner-border-radius);border-top-right-radius:var(--bs-accordion-inner-border-radius)}.accordion-item:not(:first-of-type){border-top:0}.accordion-item:last-of-type{border-bottom-right-radius:var(--bs-accordion-border-radius);border-bottom-left-radius:var(--bs-accordion-border-radius)}.accordion-item:last-of-type .accordion-button.collapsed{border-bottom-right-radius:var(--bs-accordion-inner-border-radius);border-bottom-left-radius:var(--bs-accordion-inner-border-radius)}.accordion-item:last-of-type .accordion-collapse{border-bottom-right-radius:var(--bs-accordion-border-radius);border-bottom-left-radius:var(--bs-accordion-border-radius)}.accordion-body{padding:var(--bs-accordion-body-padding-y) var(--bs-accordion-body-padding-x)}.accordion-flush .accordion-collapse{border-width:0}.accordion-flush .accordion-item{border-right:0;border-left:0;border-radius:0}.accordion-flush .accordion-item:first-child{border-top:0}.accordion-flush .accordion-item:last-child{border-bottom:0}.accordion-flush .accordion-item .accordion-button,.accordion-flush .accordion-item .accordion-button.collapsed{border-radius:0}[data-bs-theme=dark] .accordion-button:after{--bs-accordion-btn-icon:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%236ea8fe'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");--bs-accordion-btn-active-icon:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%236ea8fe'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e")}.breadcrumb{--bs-breadcrumb-padding-x:0;--bs-breadcrumb-padding-y:0;--bs-breadcrumb-margin-bottom:1rem;--bs-breadcrumb-bg: ;--bs-breadcrumb-border-radius: ;--bs-breadcrumb-divider-color:var(--bs-secondary-color);--bs-breadcrumb-item-padding-x:.5rem;--bs-breadcrumb-item-active-color:var(--bs-secondary-color);display:flex;flex-wrap:wrap;padding:var(--bs-breadcrumb-padding-y) var(--bs-breadcrumb-padding-x);margin-bottom:var(--bs-breadcrumb-margin-bottom);font-size:var(--bs-breadcrumb-font-size);list-style:none;background-color:var(--bs-breadcrumb-bg);border-radius:var(--bs-breadcrumb-border-radius)}.breadcrumb-item+.breadcrumb-item{padding-left:var(--bs-breadcrumb-item-padding-x)}.breadcrumb-item+.breadcrumb-item:before{float:left;padding-right:var(--bs-breadcrumb-item-padding-x);color:var(--bs-breadcrumb-divider-color);content:var(--bs-breadcrumb-divider, "/")}.breadcrumb-item.active{color:var(--bs-breadcrumb-item-active-color)}.pagination{--bs-pagination-padding-x:.75rem;--bs-pagination-padding-y:.375rem;--bs-pagination-font-size:1rem;--bs-pagination-color:var(--bs-link-color);--bs-pagination-bg:var(--bs-body-bg);--bs-pagination-border-width:var(--bs-border-width);--bs-pagination-border-color:var(--bs-border-color);--bs-pagination-border-radius:var(--bs-border-radius);--bs-pagination-hover-color:var(--bs-link-hover-color);--bs-pagination-hover-bg:var(--bs-tertiary-bg);--bs-pagination-hover-border-color:var(--bs-border-color);--bs-pagination-focus-color:var(--bs-link-hover-color);--bs-pagination-focus-bg:var(--bs-secondary-bg);--bs-pagination-focus-box-shadow:0 0 0 .25rem rgba(13, 110, 253, .25);--bs-pagination-active-color:#fff;--bs-pagination-active-bg:#0d6efd;--bs-pagination-active-border-color:#0d6efd;--bs-pagination-disabled-color:var(--bs-secondary-color);--bs-pagination-disabled-bg:var(--bs-secondary-bg);--bs-pagination-disabled-border-color:var(--bs-border-color);display:flex;padding-left:0;list-style:none}.page-link{position:relative;display:block;padding:var(--bs-pagination-padding-y) var(--bs-pagination-padding-x);font-size:var(--bs-pagination-font-size);color:var(--bs-pagination-color);text-decoration:none;background-color:var(--bs-pagination-bg);border:var(--bs-pagination-border-width) solid var(--bs-pagination-border-color);transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.page-link{transition:none}}.page-link:hover{z-index:2;color:var(--bs-pagination-hover-color);background-color:var(--bs-pagination-hover-bg);border-color:var(--bs-pagination-hover-border-color)}.page-link:focus{z-index:3;color:var(--bs-pagination-focus-color);background-color:var(--bs-pagination-focus-bg);outline:0;box-shadow:var(--bs-pagination-focus-box-shadow)}.active>.page-link,.page-link.active{z-index:3;color:var(--bs-pagination-active-color);background-color:var(--bs-pagination-active-bg);border-color:var(--bs-pagination-active-border-color)}.disabled>.page-link,.page-link.disabled{color:var(--bs-pagination-disabled-color);pointer-events:none;background-color:var(--bs-pagination-disabled-bg);border-color:var(--bs-pagination-disabled-border-color)}.page-item:not(:first-child) .page-link{margin-left:calc(var(--bs-border-width) * -1)}.page-item:first-child .page-link{border-top-left-radius:var(--bs-pagination-border-radius);border-bottom-left-radius:var(--bs-pagination-border-radius)}.page-item:last-child .page-link{border-top-right-radius:var(--bs-pagination-border-radius);border-bottom-right-radius:var(--bs-pagination-border-radius)}.pagination-lg{--bs-pagination-padding-x:1.5rem;--bs-pagination-padding-y:.75rem;--bs-pagination-font-size:1.25rem;--bs-pagination-border-radius:var(--bs-border-radius-lg)}.pagination-sm{--bs-pagination-padding-x:.5rem;--bs-pagination-padding-y:.25rem;--bs-pagination-font-size:.875rem;--bs-pagination-border-radius:var(--bs-border-radius-sm)}.badge{--bs-badge-padding-x:.65em;--bs-badge-padding-y:.35em;--bs-badge-font-size:.75em;--bs-badge-font-weight:700;--bs-badge-color:#fff;--bs-badge-border-radius:var(--bs-border-radius);display:inline-block;padding:var(--bs-badge-padding-y) var(--bs-badge-padding-x);font-size:var(--bs-badge-font-size);font-weight:var(--bs-badge-font-weight);line-height:1;color:var(--bs-badge-color);text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:var(--bs-badge-border-radius)}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.alert{--bs-alert-bg:transparent;--bs-alert-padding-x:1rem;--bs-alert-padding-y:1rem;--bs-alert-margin-bottom:1rem;--bs-alert-color:inherit;--bs-alert-border-color:transparent;--bs-alert-border:var(--bs-border-width) solid var(--bs-alert-border-color);--bs-alert-border-radius:var(--bs-border-radius);--bs-alert-link-color:inherit;position:relative;padding:var(--bs-alert-padding-y) var(--bs-alert-padding-x);margin-bottom:var(--bs-alert-margin-bottom);color:var(--bs-alert-color);background-color:var(--bs-alert-bg);border:var(--bs-alert-border);border-radius:var(--bs-alert-border-radius)}.alert-heading{color:inherit}.alert-link{font-weight:700;color:var(--bs-alert-link-color)}.alert-dismissible{padding-right:3rem}.alert-dismissible .btn-close{position:absolute;top:0;right:0;z-index:2;padding:1.25rem 1rem}.alert-primary{--bs-alert-color:var(--bs-primary-text-emphasis);--bs-alert-bg:var(--bs-primary-bg-subtle);--bs-alert-border-color:var(--bs-primary-border-subtle);--bs-alert-link-color:var(--bs-primary-text-emphasis)}.alert-secondary{--bs-alert-color:var(--bs-secondary-text-emphasis);--bs-alert-bg:var(--bs-secondary-bg-subtle);--bs-alert-border-color:var(--bs-secondary-border-subtle);--bs-alert-link-color:var(--bs-secondary-text-emphasis)}.alert-success{--bs-alert-color:var(--bs-success-text-emphasis);--bs-alert-bg:var(--bs-success-bg-subtle);--bs-alert-border-color:var(--bs-success-border-subtle);--bs-alert-link-color:var(--bs-success-text-emphasis)}.alert-info{--bs-alert-color:var(--bs-info-text-emphasis);--bs-alert-bg:var(--bs-info-bg-subtle);--bs-alert-border-color:var(--bs-info-border-subtle);--bs-alert-link-color:var(--bs-info-text-emphasis)}.alert-warning{--bs-alert-color:var(--bs-warning-text-emphasis);--bs-alert-bg:var(--bs-warning-bg-subtle);--bs-alert-border-color:var(--bs-warning-border-subtle);--bs-alert-link-color:var(--bs-warning-text-emphasis)}.alert-danger{--bs-alert-color:var(--bs-danger-text-emphasis);--bs-alert-bg:var(--bs-danger-bg-subtle);--bs-alert-border-color:var(--bs-danger-border-subtle);--bs-alert-link-color:var(--bs-danger-text-emphasis)}.alert-light{--bs-alert-color:var(--bs-light-text-emphasis);--bs-alert-bg:var(--bs-light-bg-subtle);--bs-alert-border-color:var(--bs-light-border-subtle);--bs-alert-link-color:var(--bs-light-text-emphasis)}.alert-dark{--bs-alert-color:var(--bs-dark-text-emphasis);--bs-alert-bg:var(--bs-dark-bg-subtle);--bs-alert-border-color:var(--bs-dark-border-subtle);--bs-alert-link-color:var(--bs-dark-text-emphasis)}@keyframes progress-bar-stripes{0%{background-position-x:1rem}}.progress,.progress-stacked{--bs-progress-height:1rem;--bs-progress-font-size:.75rem;--bs-progress-bg:var(--bs-secondary-bg);--bs-progress-border-radius:var(--bs-border-radius);--bs-progress-box-shadow:var(--bs-box-shadow-inset);--bs-progress-bar-color:#fff;--bs-progress-bar-bg:#0d6efd;--bs-progress-bar-transition:width .6s ease;display:flex;height:var(--bs-progress-height);overflow:hidden;font-size:var(--bs-progress-font-size);background-color:var(--bs-progress-bg);border-radius:var(--bs-progress-border-radius)}.progress-bar{display:flex;flex-direction:column;justify-content:center;overflow:hidden;color:var(--bs-progress-bar-color);text-align:center;white-space:nowrap;background-color:var(--bs-progress-bar-bg);transition:var(--bs-progress-bar-transition)}@media (prefers-reduced-motion:reduce){.progress-bar{transition:none}}.progress-bar-striped{background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-size:var(--bs-progress-height) var(--bs-progress-height)}.progress-stacked>.progress{overflow:visible}.progress-stacked>.progress>.progress-bar{width:100%}.progress-bar-animated{animation:1s linear infinite progress-bar-stripes}@media (prefers-reduced-motion:reduce){.progress-bar-animated{animation:none}}.list-group{--bs-list-group-color:var(--bs-body-color);--bs-list-group-bg:var(--bs-body-bg);--bs-list-group-border-color:var(--bs-border-color);--bs-list-group-border-width:var(--bs-border-width);--bs-list-group-border-radius:var(--bs-border-radius);--bs-list-group-item-padding-x:1rem;--bs-list-group-item-padding-y:.5rem;--bs-list-group-action-color:var(--bs-secondary-color);--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-tertiary-bg);--bs-list-group-action-active-color:var(--bs-body-color);--bs-list-group-action-active-bg:var(--bs-secondary-bg);--bs-list-group-disabled-color:var(--bs-secondary-color);--bs-list-group-disabled-bg:var(--bs-body-bg);--bs-list-group-active-color:#fff;--bs-list-group-active-bg:#0d6efd;--bs-list-group-active-border-color:#0d6efd;display:flex;flex-direction:column;padding-left:0;margin-bottom:0;border-radius:var(--bs-list-group-border-radius)}.list-group-numbered{list-style-type:none;counter-reset:section}.list-group-numbered>.list-group-item:before{content:counters(section,".") ". ";counter-increment:section}.list-group-item-action{width:100%;color:var(--bs-list-group-action-color);text-align:inherit}.list-group-item-action:focus,.list-group-item-action:hover{z-index:1;color:var(--bs-list-group-action-hover-color);text-decoration:none;background-color:var(--bs-list-group-action-hover-bg)}.list-group-item-action:active{color:var(--bs-list-group-action-active-color);background-color:var(--bs-list-group-action-active-bg)}.list-group-item{position:relative;display:block;padding:var(--bs-list-group-item-padding-y) var(--bs-list-group-item-padding-x);color:var(--bs-list-group-color);text-decoration:none;background-color:var(--bs-list-group-bg);border:var(--bs-list-group-border-width) solid var(--bs-list-group-border-color)}.list-group-item:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.list-group-item:last-child{border-bottom-right-radius:inherit;border-bottom-left-radius:inherit}.list-group-item.disabled,.list-group-item:disabled{color:var(--bs-list-group-disabled-color);pointer-events:none;background-color:var(--bs-list-group-disabled-bg)}.list-group-item.active{z-index:2;color:var(--bs-list-group-active-color);background-color:var(--bs-list-group-active-bg);border-color:var(--bs-list-group-active-border-color)}.list-group-item+.list-group-item{border-top-width:0}.list-group-item+.list-group-item.active{margin-top:calc(-1 * var(--bs-list-group-border-width));border-top-width:var(--bs-list-group-border-width)}.list-group-horizontal{flex-direction:row}.list-group-horizontal>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal>.list-group-item:last-child:not(:first-child){border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal>.list-group-item.active{margin-top:0}.list-group-horizontal>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal>.list-group-item+.list-group-item.active{margin-left:calc(-1 * var(--bs-list-group-border-width));border-left-width:var(--bs-list-group-border-width)}@media (min-width:576px){.list-group-horizontal-sm{flex-direction:row}.list-group-horizontal-sm>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-sm>.list-group-item:last-child:not(:first-child){border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal-sm>.list-group-item.active{margin-top:0}.list-group-horizontal-sm>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal-sm>.list-group-item+.list-group-item.active{margin-left:calc(-1 * var(--bs-list-group-border-width));border-left-width:var(--bs-list-group-border-width)}}@media (min-width:768px){.list-group-horizontal-md{flex-direction:row}.list-group-horizontal-md>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-md>.list-group-item:last-child:not(:first-child){border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal-md>.list-group-item.active{margin-top:0}.list-group-horizontal-md>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal-md>.list-group-item+.list-group-item.active{margin-left:calc(-1 * var(--bs-list-group-border-width));border-left-width:var(--bs-list-group-border-width)}}@media (min-width:992px){.list-group-horizontal-lg{flex-direction:row}.list-group-horizontal-lg>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-lg>.list-group-item:last-child:not(:first-child){border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal-lg>.list-group-item.active{margin-top:0}.list-group-horizontal-lg>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal-lg>.list-group-item+.list-group-item.active{margin-left:calc(-1 * var(--bs-list-group-border-width));border-left-width:var(--bs-list-group-border-width)}}@media (min-width:1200px){.list-group-horizontal-xl{flex-direction:row}.list-group-horizontal-xl>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-xl>.list-group-item:last-child:not(:first-child){border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal-xl>.list-group-item.active{margin-top:0}.list-group-horizontal-xl>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal-xl>.list-group-item+.list-group-item.active{margin-left:calc(-1 * var(--bs-list-group-border-width));border-left-width:var(--bs-list-group-border-width)}}@media (min-width:1400px){.list-group-horizontal-xxl{flex-direction:row}.list-group-horizontal-xxl>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-xxl>.list-group-item:last-child:not(:first-child){border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal-xxl>.list-group-item.active{margin-top:0}.list-group-horizontal-xxl>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal-xxl>.list-group-item+.list-group-item.active{margin-left:calc(-1 * var(--bs-list-group-border-width));border-left-width:var(--bs-list-group-border-width)}}.list-group-flush{border-radius:0}.list-group-flush>.list-group-item{border-width:0 0 var(--bs-list-group-border-width)}.list-group-flush>.list-group-item:last-child{border-bottom-width:0}.list-group-item-primary{--bs-list-group-color:var(--bs-primary-text-emphasis);--bs-list-group-bg:var(--bs-primary-bg-subtle);--bs-list-group-border-color:var(--bs-primary-border-subtle);--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-primary-border-subtle);--bs-list-group-action-active-color:var(--bs-emphasis-color);--bs-list-group-action-active-bg:var(--bs-primary-border-subtle);--bs-list-group-active-color:var(--bs-primary-bg-subtle);--bs-list-group-active-bg:var(--bs-primary-text-emphasis);--bs-list-group-active-border-color:var(--bs-primary-text-emphasis)}.list-group-item-secondary{--bs-list-group-color:var(--bs-secondary-text-emphasis);--bs-list-group-bg:var(--bs-secondary-bg-subtle);--bs-list-group-border-color:var(--bs-secondary-border-subtle);--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-secondary-border-subtle);--bs-list-group-action-active-color:var(--bs-emphasis-color);--bs-list-group-action-active-bg:var(--bs-secondary-border-subtle);--bs-list-group-active-color:var(--bs-secondary-bg-subtle);--bs-list-group-active-bg:var(--bs-secondary-text-emphasis);--bs-list-group-active-border-color:var(--bs-secondary-text-emphasis)}.list-group-item-success{--bs-list-group-color:var(--bs-success-text-emphasis);--bs-list-group-bg:var(--bs-success-bg-subtle);--bs-list-group-border-color:var(--bs-success-border-subtle);--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-success-border-subtle);--bs-list-group-action-active-color:var(--bs-emphasis-color);--bs-list-group-action-active-bg:var(--bs-success-border-subtle);--bs-list-group-active-color:var(--bs-success-bg-subtle);--bs-list-group-active-bg:var(--bs-success-text-emphasis);--bs-list-group-active-border-color:var(--bs-success-text-emphasis)}.list-group-item-info{--bs-list-group-color:var(--bs-info-text-emphasis);--bs-list-group-bg:var(--bs-info-bg-subtle);--bs-list-group-border-color:var(--bs-info-border-subtle);--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-info-border-subtle);--bs-list-group-action-active-color:var(--bs-emphasis-color);--bs-list-group-action-active-bg:var(--bs-info-border-subtle);--bs-list-group-active-color:var(--bs-info-bg-subtle);--bs-list-group-active-bg:var(--bs-info-text-emphasis);--bs-list-group-active-border-color:var(--bs-info-text-emphasis)}.list-group-item-warning{--bs-list-group-color:var(--bs-warning-text-emphasis);--bs-list-group-bg:var(--bs-warning-bg-subtle);--bs-list-group-border-color:var(--bs-warning-border-subtle);--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-warning-border-subtle);--bs-list-group-action-active-color:var(--bs-emphasis-color);--bs-list-group-action-active-bg:var(--bs-warning-border-subtle);--bs-list-group-active-color:var(--bs-warning-bg-subtle);--bs-list-group-active-bg:var(--bs-warning-text-emphasis);--bs-list-group-active-border-color:var(--bs-warning-text-emphasis)}.list-group-item-danger{--bs-list-group-color:var(--bs-danger-text-emphasis);--bs-list-group-bg:var(--bs-danger-bg-subtle);--bs-list-group-border-color:var(--bs-danger-border-subtle);--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-danger-border-subtle);--bs-list-group-action-active-color:var(--bs-emphasis-color);--bs-list-group-action-active-bg:var(--bs-danger-border-subtle);--bs-list-group-active-color:var(--bs-danger-bg-subtle);--bs-list-group-active-bg:var(--bs-danger-text-emphasis);--bs-list-group-active-border-color:var(--bs-danger-text-emphasis)}.list-group-item-light{--bs-list-group-color:var(--bs-light-text-emphasis);--bs-list-group-bg:var(--bs-light-bg-subtle);--bs-list-group-border-color:var(--bs-light-border-subtle);--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-light-border-subtle);--bs-list-group-action-active-color:var(--bs-emphasis-color);--bs-list-group-action-active-bg:var(--bs-light-border-subtle);--bs-list-group-active-color:var(--bs-light-bg-subtle);--bs-list-group-active-bg:var(--bs-light-text-emphasis);--bs-list-group-active-border-color:var(--bs-light-text-emphasis)}.list-group-item-dark{--bs-list-group-color:var(--bs-dark-text-emphasis);--bs-list-group-bg:var(--bs-dark-bg-subtle);--bs-list-group-border-color:var(--bs-dark-border-subtle);--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-dark-border-subtle);--bs-list-group-action-active-color:var(--bs-emphasis-color);--bs-list-group-action-active-bg:var(--bs-dark-border-subtle);--bs-list-group-active-color:var(--bs-dark-bg-subtle);--bs-list-group-active-bg:var(--bs-dark-text-emphasis);--bs-list-group-active-border-color:var(--bs-dark-text-emphasis)}.btn-close{--bs-btn-close-color:#000;--bs-btn-close-bg:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/%3e%3c/svg%3e");--bs-btn-close-opacity:.5;--bs-btn-close-hover-opacity:.75;--bs-btn-close-focus-shadow:0 0 0 .25rem rgba(13, 110, 253, .25);--bs-btn-close-focus-opacity:1;--bs-btn-close-disabled-opacity:.25;--bs-btn-close-white-filter:invert(1) grayscale(100%) brightness(200%);box-sizing:content-box;width:1em;height:1em;padding:.25em;color:var(--bs-btn-close-color);background:transparent var(--bs-btn-close-bg) center/1em auto no-repeat;border:0;border-radius:.375rem;opacity:var(--bs-btn-close-opacity)}.btn-close:hover{color:var(--bs-btn-close-color);text-decoration:none;opacity:var(--bs-btn-close-hover-opacity)}.btn-close:focus{outline:0;box-shadow:var(--bs-btn-close-focus-shadow);opacity:var(--bs-btn-close-focus-opacity)}.btn-close.disabled,.btn-close:disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:var(--bs-btn-close-disabled-opacity)}.btn-close-white,[data-bs-theme=dark] .btn-close{filter:var(--bs-btn-close-white-filter)}.toast{--bs-toast-zindex:1090;--bs-toast-padding-x:.75rem;--bs-toast-padding-y:.5rem;--bs-toast-spacing:1.5rem;--bs-toast-max-width:350px;--bs-toast-font-size:.875rem;--bs-toast-color: ;--bs-toast-bg:rgba(var(--bs-body-bg-rgb), .85);--bs-toast-border-width:var(--bs-border-width);--bs-toast-border-color:var(--bs-border-color-translucent);--bs-toast-border-radius:var(--bs-border-radius);--bs-toast-box-shadow:var(--bs-box-shadow);--bs-toast-header-color:var(--bs-secondary-color);--bs-toast-header-bg:rgba(var(--bs-body-bg-rgb), .85);--bs-toast-header-border-color:var(--bs-border-color-translucent);width:var(--bs-toast-max-width);max-width:100%;font-size:var(--bs-toast-font-size);color:var(--bs-toast-color);pointer-events:auto;background-color:var(--bs-toast-bg);background-clip:padding-box;border:var(--bs-toast-border-width) solid var(--bs-toast-border-color);box-shadow:var(--bs-toast-box-shadow);border-radius:var(--bs-toast-border-radius)}.toast.showing{opacity:0}.toast:not(.show){display:none}.toast-container{--bs-toast-zindex:1090;position:absolute;z-index:var(--bs-toast-zindex);width:-webkit-max-content;width:-moz-max-content;width:max-content;max-width:100%;pointer-events:none}.toast-container>:not(:last-child){margin-bottom:var(--bs-toast-spacing)}.toast-header{display:flex;align-items:center;padding:var(--bs-toast-padding-y) var(--bs-toast-padding-x);color:var(--bs-toast-header-color);background-color:var(--bs-toast-header-bg);background-clip:padding-box;border-bottom:var(--bs-toast-border-width) solid var(--bs-toast-header-border-color);border-top-left-radius:calc(var(--bs-toast-border-radius) - var(--bs-toast-border-width));border-top-right-radius:calc(var(--bs-toast-border-radius) - var(--bs-toast-border-width))}.toast-header .btn-close{margin-right:calc(-.5 * var(--bs-toast-padding-x));margin-left:var(--bs-toast-padding-x)}.toast-body{padding:var(--bs-toast-padding-x);word-wrap:break-word}.modal{--bs-modal-zindex:1055;--bs-modal-width:500px;--bs-modal-padding:1rem;--bs-modal-margin:.5rem;--bs-modal-color: ;--bs-modal-bg:var(--bs-body-bg);--bs-modal-border-color:var(--bs-border-color-translucent);--bs-modal-border-width:var(--bs-border-width);--bs-modal-border-radius:var(--bs-border-radius-lg);--bs-modal-box-shadow:0 .125rem .25rem rgba(0, 0, 0, .075);--bs-modal-inner-border-radius:calc(var(--bs-border-radius-lg) - (var(--bs-border-width)));--bs-modal-header-padding-x:1rem;--bs-modal-header-padding-y:1rem;--bs-modal-header-padding:1rem 1rem;--bs-modal-header-border-color:var(--bs-border-color);--bs-modal-header-border-width:var(--bs-border-width);--bs-modal-title-line-height:1.5;--bs-modal-footer-gap:.5rem;--bs-modal-footer-bg: ;--bs-modal-footer-border-color:var(--bs-border-color);--bs-modal-footer-border-width:var(--bs-border-width);position:fixed;top:0;left:0;z-index:var(--bs-modal-zindex);display:none;width:100%;height:100%;overflow-x:hidden;overflow-y:auto;outline:0}.modal-dialog{position:relative;width:auto;margin:var(--bs-modal-margin);pointer-events:none}.modal.fade .modal-dialog{transition:transform .3s ease-out;transform:translateY(-50px)}@media (prefers-reduced-motion:reduce){.modal.fade .modal-dialog{transition:none}}.modal.show .modal-dialog{transform:none}.modal.modal-static .modal-dialog{transform:scale(1.02)}.modal-dialog-scrollable{height:calc(100% - var(--bs-modal-margin) * 2)}.modal-dialog-scrollable .modal-content{max-height:100%;overflow:hidden}.modal-dialog-scrollable .modal-body{overflow-y:auto}.modal-dialog-centered{display:flex;align-items:center;min-height:calc(100% - var(--bs-modal-margin) * 2)}.modal-content{position:relative;display:flex;flex-direction:column;width:100%;color:var(--bs-modal-color);pointer-events:auto;background-color:var(--bs-modal-bg);background-clip:padding-box;border:var(--bs-modal-border-width) solid var(--bs-modal-border-color);border-radius:var(--bs-modal-border-radius);outline:0}.modal-backdrop{--bs-backdrop-zindex:1050;--bs-backdrop-bg:#000;--bs-backdrop-opacity:.5;position:fixed;top:0;left:0;z-index:var(--bs-backdrop-zindex);width:100vw;height:100vh;background-color:var(--bs-backdrop-bg)}.modal-backdrop.fade{opacity:0}.modal-backdrop.show{opacity:var(--bs-backdrop-opacity)}.modal-header{display:flex;flex-shrink:0;align-items:center;justify-content:space-between;padding:var(--bs-modal-header-padding);border-bottom:var(--bs-modal-header-border-width) solid var(--bs-modal-header-border-color);border-top-left-radius:var(--bs-modal-inner-border-radius);border-top-right-radius:var(--bs-modal-inner-border-radius)}.modal-header .btn-close{padding:calc(var(--bs-modal-header-padding-y) * .5) calc(var(--bs-modal-header-padding-x) * .5);margin:calc(-.5 * var(--bs-modal-header-padding-y)) calc(-.5 * var(--bs-modal-header-padding-x)) calc(-.5 * var(--bs-modal-header-padding-y)) auto}.modal-title{margin-bottom:0;line-height:var(--bs-modal-title-line-height)}.modal-body{position:relative;flex:1 1 auto;padding:var(--bs-modal-padding)}.modal-footer{display:flex;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;padding:calc(var(--bs-modal-padding) - var(--bs-modal-footer-gap) * .5);background-color:var(--bs-modal-footer-bg);border-top:var(--bs-modal-footer-border-width) solid var(--bs-modal-footer-border-color);border-bottom-right-radius:var(--bs-modal-inner-border-radius);border-bottom-left-radius:var(--bs-modal-inner-border-radius)}.modal-footer>*{margin:calc(var(--bs-modal-footer-gap) * .5)}@media (min-width:576px){.modal{--bs-modal-margin:1.75rem;--bs-modal-box-shadow:0 .5rem 1rem rgba(0, 0, 0, .15)}.modal-dialog{max-width:var(--bs-modal-width);margin-right:auto;margin-left:auto}.modal-sm{--bs-modal-width:300px}}@media (min-width:992px){.modal-lg,.modal-xl{--bs-modal-width:800px}}@media (min-width:1200px){.modal-xl{--bs-modal-width:1140px}}.modal-fullscreen{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen .modal-footer,.modal-fullscreen .modal-header{border-radius:0}.modal-fullscreen .modal-body{overflow-y:auto}@media (max-width:575.98px){.modal-fullscreen-sm-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-sm-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-sm-down .modal-footer,.modal-fullscreen-sm-down .modal-header{border-radius:0}.modal-fullscreen-sm-down .modal-body{overflow-y:auto}}@media (max-width:767.98px){.modal-fullscreen-md-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-md-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-md-down .modal-footer,.modal-fullscreen-md-down .modal-header{border-radius:0}.modal-fullscreen-md-down .modal-body{overflow-y:auto}}@media (max-width:991.98px){.modal-fullscreen-lg-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-lg-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-lg-down .modal-footer,.modal-fullscreen-lg-down .modal-header{border-radius:0}.modal-fullscreen-lg-down .modal-body{overflow-y:auto}}@media (max-width:1199.98px){.modal-fullscreen-xl-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-xl-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-xl-down .modal-footer,.modal-fullscreen-xl-down .modal-header{border-radius:0}.modal-fullscreen-xl-down .modal-body{overflow-y:auto}}@media (max-width:1399.98px){.modal-fullscreen-xxl-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-xxl-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-xxl-down .modal-footer,.modal-fullscreen-xxl-down .modal-header{border-radius:0}.modal-fullscreen-xxl-down .modal-body{overflow-y:auto}}.tooltip{--bs-tooltip-zindex:1080;--bs-tooltip-max-width:200px;--bs-tooltip-padding-x:.5rem;--bs-tooltip-padding-y:.25rem;--bs-tooltip-margin: ;--bs-tooltip-font-size:.875rem;--bs-tooltip-color:var(--bs-body-bg);--bs-tooltip-bg:var(--bs-emphasis-color);--bs-tooltip-border-radius:var(--bs-border-radius);--bs-tooltip-opacity:.9;--bs-tooltip-arrow-width:.8rem;--bs-tooltip-arrow-height:.4rem;z-index:var(--bs-tooltip-zindex);display:block;margin:var(--bs-tooltip-margin);font-family:var(--bs-font-sans-serif);font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;white-space:normal;word-spacing:normal;line-break:auto;font-size:var(--bs-tooltip-font-size);word-wrap:break-word;opacity:0}.tooltip.show{opacity:var(--bs-tooltip-opacity)}.tooltip .tooltip-arrow{display:block;width:var(--bs-tooltip-arrow-width);height:var(--bs-tooltip-arrow-height)}.tooltip .tooltip-arrow:before{position:absolute;content:"";border-color:transparent;border-style:solid}.bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow,.bs-tooltip-top .tooltip-arrow{bottom:calc(-1 * var(--bs-tooltip-arrow-height))}.bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow:before,.bs-tooltip-top .tooltip-arrow:before{top:-1px;border-width:var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width) * .5) 0;border-top-color:var(--bs-tooltip-bg)}.bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow,.bs-tooltip-end .tooltip-arrow{left:calc(-1 * var(--bs-tooltip-arrow-height));width:var(--bs-tooltip-arrow-height);height:var(--bs-tooltip-arrow-width)}.bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow:before,.bs-tooltip-end .tooltip-arrow:before{right:-1px;border-width:calc(var(--bs-tooltip-arrow-width) * .5) var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width) * .5) 0;border-right-color:var(--bs-tooltip-bg)}.bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow,.bs-tooltip-bottom .tooltip-arrow{top:calc(-1 * var(--bs-tooltip-arrow-height))}.bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow:before,.bs-tooltip-bottom .tooltip-arrow:before{bottom:-1px;border-width:0 calc(var(--bs-tooltip-arrow-width) * .5) var(--bs-tooltip-arrow-height);border-bottom-color:var(--bs-tooltip-bg)}.bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow,.bs-tooltip-start .tooltip-arrow{right:calc(-1 * var(--bs-tooltip-arrow-height));width:var(--bs-tooltip-arrow-height);height:var(--bs-tooltip-arrow-width)}.bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow:before,.bs-tooltip-start .tooltip-arrow:before{left:-1px;border-width:calc(var(--bs-tooltip-arrow-width) * .5) 0 calc(var(--bs-tooltip-arrow-width) * .5) var(--bs-tooltip-arrow-height);border-left-color:var(--bs-tooltip-bg)}.tooltip-inner{max-width:var(--bs-tooltip-max-width);padding:var(--bs-tooltip-padding-y) var(--bs-tooltip-padding-x);color:var(--bs-tooltip-color);text-align:center;background-color:var(--bs-tooltip-bg);border-radius:var(--bs-tooltip-border-radius)}.popover{--bs-popover-zindex:1070;--bs-popover-max-width:276px;--bs-popover-font-size:.875rem;--bs-popover-bg:var(--bs-body-bg);--bs-popover-border-width:var(--bs-border-width);--bs-popover-border-color:var(--bs-border-color-translucent);--bs-popover-border-radius:var(--bs-border-radius-lg);--bs-popover-inner-border-radius:calc(var(--bs-border-radius-lg) - var(--bs-border-width));--bs-popover-box-shadow:0 .5rem 1rem rgba(0, 0, 0, .15);--bs-popover-header-padding-x:1rem;--bs-popover-header-padding-y:.5rem;--bs-popover-header-font-size:1rem;--bs-popover-header-color: ;--bs-popover-header-bg:var(--bs-secondary-bg);--bs-popover-body-padding-x:1rem;--bs-popover-body-padding-y:1rem;--bs-popover-body-color:var(--bs-body-color);--bs-popover-arrow-width:1rem;--bs-popover-arrow-height:.5rem;--bs-popover-arrow-border:var(--bs-popover-border-color);z-index:var(--bs-popover-zindex);display:block;max-width:var(--bs-popover-max-width);font-family:var(--bs-font-sans-serif);font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;white-space:normal;word-spacing:normal;line-break:auto;font-size:var(--bs-popover-font-size);word-wrap:break-word;background-color:var(--bs-popover-bg);background-clip:padding-box;border:var(--bs-popover-border-width) solid var(--bs-popover-border-color);border-radius:var(--bs-popover-border-radius)}.popover .popover-arrow{display:block;width:var(--bs-popover-arrow-width);height:var(--bs-popover-arrow-height)}.popover .popover-arrow:after,.popover .popover-arrow:before{position:absolute;display:block;content:"";border-color:transparent;border-style:solid;border-width:0}.bs-popover-auto[data-popper-placement^=top]>.popover-arrow,.bs-popover-top>.popover-arrow{bottom:calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width))}.bs-popover-auto[data-popper-placement^=top]>.popover-arrow:after,.bs-popover-auto[data-popper-placement^=top]>.popover-arrow:before,.bs-popover-top>.popover-arrow:after,.bs-popover-top>.popover-arrow:before{border-width:var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width) * .5) 0}.bs-popover-auto[data-popper-placement^=top]>.popover-arrow:before,.bs-popover-top>.popover-arrow:before{bottom:0;border-top-color:var(--bs-popover-arrow-border)}.bs-popover-auto[data-popper-placement^=top]>.popover-arrow:after,.bs-popover-top>.popover-arrow:after{bottom:var(--bs-popover-border-width);border-top-color:var(--bs-popover-bg)}.bs-popover-auto[data-popper-placement^=right]>.popover-arrow,.bs-popover-end>.popover-arrow{left:calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width));width:var(--bs-popover-arrow-height);height:var(--bs-popover-arrow-width)}.bs-popover-auto[data-popper-placement^=right]>.popover-arrow:after,.bs-popover-auto[data-popper-placement^=right]>.popover-arrow:before,.bs-popover-end>.popover-arrow:after,.bs-popover-end>.popover-arrow:before{border-width:calc(var(--bs-popover-arrow-width) * .5) var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width) * .5) 0}.bs-popover-auto[data-popper-placement^=right]>.popover-arrow:before,.bs-popover-end>.popover-arrow:before{left:0;border-right-color:var(--bs-popover-arrow-border)}.bs-popover-auto[data-popper-placement^=right]>.popover-arrow:after,.bs-popover-end>.popover-arrow:after{left:var(--bs-popover-border-width);border-right-color:var(--bs-popover-bg)}.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow,.bs-popover-bottom>.popover-arrow{top:calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width))}.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow:after,.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow:before,.bs-popover-bottom>.popover-arrow:after,.bs-popover-bottom>.popover-arrow:before{border-width:0 calc(var(--bs-popover-arrow-width) * .5) var(--bs-popover-arrow-height)}.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow:before,.bs-popover-bottom>.popover-arrow:before{top:0;border-bottom-color:var(--bs-popover-arrow-border)}.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow:after,.bs-popover-bottom>.popover-arrow:after{top:var(--bs-popover-border-width);border-bottom-color:var(--bs-popover-bg)}.bs-popover-auto[data-popper-placement^=bottom] .popover-header:before,.bs-popover-bottom .popover-header:before{position:absolute;top:0;left:50%;display:block;width:var(--bs-popover-arrow-width);margin-left:calc(-.5 * var(--bs-popover-arrow-width));content:"";border-bottom:var(--bs-popover-border-width) solid var(--bs-popover-header-bg)}.bs-popover-auto[data-popper-placement^=left]>.popover-arrow,.bs-popover-start>.popover-arrow{right:calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width));width:var(--bs-popover-arrow-height);height:var(--bs-popover-arrow-width)}.bs-popover-auto[data-popper-placement^=left]>.popover-arrow:after,.bs-popover-auto[data-popper-placement^=left]>.popover-arrow:before,.bs-popover-start>.popover-arrow:after,.bs-popover-start>.popover-arrow:before{border-width:calc(var(--bs-popover-arrow-width) * .5) 0 calc(var(--bs-popover-arrow-width) * .5) var(--bs-popover-arrow-height)}.bs-popover-auto[data-popper-placement^=left]>.popover-arrow:before,.bs-popover-start>.popover-arrow:before{right:0;border-left-color:var(--bs-popover-arrow-border)}.bs-popover-auto[data-popper-placement^=left]>.popover-arrow:after,.bs-popover-start>.popover-arrow:after{right:var(--bs-popover-border-width);border-left-color:var(--bs-popover-bg)}.popover-header{padding:var(--bs-popover-header-padding-y) var(--bs-popover-header-padding-x);margin-bottom:0;font-size:var(--bs-popover-header-font-size);color:var(--bs-popover-header-color);background-color:var(--bs-popover-header-bg);border-bottom:var(--bs-popover-border-width) solid var(--bs-popover-border-color);border-top-left-radius:var(--bs-popover-inner-border-radius);border-top-right-radius:var(--bs-popover-inner-border-radius)}.popover-header:empty{display:none}.popover-body{padding:var(--bs-popover-body-padding-y) var(--bs-popover-body-padding-x);color:var(--bs-popover-body-color)}.carousel{position:relative}.carousel.pointer-event{touch-action:pan-y}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-inner:after{display:block;clear:both;content:""}.carousel-item{position:relative;display:none;float:left;width:100%;margin-right:-100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:transform .6s ease-in-out}@media (prefers-reduced-motion:reduce){.carousel-item{transition:none}}.carousel-item-next,.carousel-item-prev,.carousel-item.active{display:block}.active.carousel-item-end,.carousel-item-next:not(.carousel-item-start){transform:translate(100%)}.active.carousel-item-start,.carousel-item-prev:not(.carousel-item-end){transform:translate(-100%)}.carousel-fade .carousel-item{opacity:0;transition-property:opacity;transform:none}.carousel-fade .carousel-item-next.carousel-item-start,.carousel-fade .carousel-item-prev.carousel-item-end,.carousel-fade .carousel-item.active{z-index:1;opacity:1}.carousel-fade .active.carousel-item-end,.carousel-fade .active.carousel-item-start{z-index:0;opacity:0;transition:opacity 0s .6s}@media (prefers-reduced-motion:reduce){.carousel-fade .active.carousel-item-end,.carousel-fade .active.carousel-item-start{transition:none}}.carousel-control-next,.carousel-control-prev{position:absolute;top:0;bottom:0;z-index:1;display:flex;align-items:center;justify-content:center;width:15%;padding:0;color:#fff;text-align:center;background:0 0;border:0;opacity:.5;transition:opacity .15s ease}@media (prefers-reduced-motion:reduce){.carousel-control-next,.carousel-control-prev{transition:none}}.carousel-control-next:focus,.carousel-control-next:hover,.carousel-control-prev:focus,.carousel-control-prev:hover{color:#fff;text-decoration:none;outline:0;opacity:.9}.carousel-control-prev{left:0}.carousel-control-next{right:0}.carousel-control-next-icon,.carousel-control-prev-icon{display:inline-block;width:2rem;height:2rem;background-repeat:no-repeat;background-position:50%;background-size:100% 100%}.carousel-control-prev-icon{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e")}.carousel-control-next-icon{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e")}.carousel-indicators{position:absolute;right:0;bottom:0;left:0;z-index:2;display:flex;justify-content:center;padding:0;margin-right:15%;margin-bottom:1rem;margin-left:15%}.carousel-indicators [data-bs-target]{box-sizing:content-box;flex:0 1 auto;width:30px;height:3px;padding:0;margin-right:3px;margin-left:3px;text-indent:-999px;cursor:pointer;background-color:#fff;background-clip:padding-box;border:0;border-top:10px solid transparent;border-bottom:10px solid transparent;opacity:.5;transition:opacity .6s ease}@media (prefers-reduced-motion:reduce){.carousel-indicators [data-bs-target]{transition:none}}.carousel-indicators .active{opacity:1}.carousel-caption{position:absolute;right:15%;bottom:1.25rem;left:15%;padding-top:1.25rem;padding-bottom:1.25rem;color:#fff;text-align:center}.carousel-dark .carousel-control-next-icon,.carousel-dark .carousel-control-prev-icon{filter:invert(1) grayscale(100)}.carousel-dark .carousel-indicators [data-bs-target]{background-color:#000}.carousel-dark .carousel-caption{color:#000}[data-bs-theme=dark] .carousel .carousel-control-next-icon,[data-bs-theme=dark] .carousel .carousel-control-prev-icon,[data-bs-theme=dark].carousel .carousel-control-next-icon,[data-bs-theme=dark].carousel .carousel-control-prev-icon{filter:invert(1) grayscale(100)}[data-bs-theme=dark] .carousel .carousel-indicators [data-bs-target],[data-bs-theme=dark].carousel .carousel-indicators [data-bs-target]{background-color:#000}[data-bs-theme=dark] .carousel .carousel-caption,[data-bs-theme=dark].carousel .carousel-caption{color:#000}.spinner-border,.spinner-grow{display:inline-block;width:var(--bs-spinner-width);height:var(--bs-spinner-height);vertical-align:var(--bs-spinner-vertical-align);border-radius:50%;animation:var(--bs-spinner-animation-speed) linear infinite var(--bs-spinner-animation-name)}@keyframes spinner-border{to{transform:rotate(360deg)}}.spinner-border{--bs-spinner-width:2rem;--bs-spinner-height:2rem;--bs-spinner-vertical-align:-.125em;--bs-spinner-border-width:.25em;--bs-spinner-animation-speed:.75s;--bs-spinner-animation-name:spinner-border;border:var(--bs-spinner-border-width) solid currentcolor;border-right-color:transparent}.spinner-border-sm{--bs-spinner-width:1rem;--bs-spinner-height:1rem;--bs-spinner-border-width:.2em}@keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1;transform:none}}.spinner-grow{--bs-spinner-width:2rem;--bs-spinner-height:2rem;--bs-spinner-vertical-align:-.125em;--bs-spinner-animation-speed:.75s;--bs-spinner-animation-name:spinner-grow;background-color:currentcolor;opacity:0}.spinner-grow-sm{--bs-spinner-width:1rem;--bs-spinner-height:1rem}@media (prefers-reduced-motion:reduce){.spinner-border,.spinner-grow{--bs-spinner-animation-speed:1.5s}}.offcanvas,.offcanvas-lg,.offcanvas-md,.offcanvas-sm,.offcanvas-xl,.offcanvas-xxl{--bs-offcanvas-zindex:1045;--bs-offcanvas-width:400px;--bs-offcanvas-height:30vh;--bs-offcanvas-padding-x:1rem;--bs-offcanvas-padding-y:1rem;--bs-offcanvas-color:var(--bs-body-color);--bs-offcanvas-bg:var(--bs-body-bg);--bs-offcanvas-border-width:var(--bs-border-width);--bs-offcanvas-border-color:var(--bs-border-color-translucent);--bs-offcanvas-box-shadow:0 .125rem .25rem rgba(0, 0, 0, .075);--bs-offcanvas-transition:transform .3s ease-in-out;--bs-offcanvas-title-line-height:1.5}@media (max-width:575.98px){.offcanvas-sm{position:fixed;bottom:0;z-index:var(--bs-offcanvas-zindex);display:flex;flex-direction:column;max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);background-clip:padding-box;outline:0;transition:var(--bs-offcanvas-transition)}}@media (max-width:575.98px) and (prefers-reduced-motion:reduce){.offcanvas-sm{transition:none}}@media (max-width:575.98px){.offcanvas-sm.offcanvas-start{top:0;left:0;width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translate(-100%)}}@media (max-width:575.98px){.offcanvas-sm.offcanvas-end{top:0;right:0;width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translate(100%)}}@media (max-width:575.98px){.offcanvas-sm.offcanvas-top{top:0;right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(-100%)}}@media (max-width:575.98px){.offcanvas-sm.offcanvas-bottom{right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}}@media (max-width:575.98px){.offcanvas-sm.show:not(.hiding),.offcanvas-sm.showing{transform:none}}@media (max-width:575.98px){.offcanvas-sm.hiding,.offcanvas-sm.show,.offcanvas-sm.showing{visibility:visible}}@media (min-width:576px){.offcanvas-sm{--bs-offcanvas-height:auto;--bs-offcanvas-border-width:0;background-color:transparent!important}.offcanvas-sm .offcanvas-header{display:none}.offcanvas-sm .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible;background-color:transparent!important}}@media (max-width:767.98px){.offcanvas-md{position:fixed;bottom:0;z-index:var(--bs-offcanvas-zindex);display:flex;flex-direction:column;max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);background-clip:padding-box;outline:0;transition:var(--bs-offcanvas-transition)}}@media (max-width:767.98px) and (prefers-reduced-motion:reduce){.offcanvas-md{transition:none}}@media (max-width:767.98px){.offcanvas-md.offcanvas-start{top:0;left:0;width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translate(-100%)}}@media (max-width:767.98px){.offcanvas-md.offcanvas-end{top:0;right:0;width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translate(100%)}}@media (max-width:767.98px){.offcanvas-md.offcanvas-top{top:0;right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(-100%)}}@media (max-width:767.98px){.offcanvas-md.offcanvas-bottom{right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}}@media (max-width:767.98px){.offcanvas-md.show:not(.hiding),.offcanvas-md.showing{transform:none}}@media (max-width:767.98px){.offcanvas-md.hiding,.offcanvas-md.show,.offcanvas-md.showing{visibility:visible}}@media (min-width:768px){.offcanvas-md{--bs-offcanvas-height:auto;--bs-offcanvas-border-width:0;background-color:transparent!important}.offcanvas-md .offcanvas-header{display:none}.offcanvas-md .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible;background-color:transparent!important}}@media (max-width:991.98px){.offcanvas-lg{position:fixed;bottom:0;z-index:var(--bs-offcanvas-zindex);display:flex;flex-direction:column;max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);background-clip:padding-box;outline:0;transition:var(--bs-offcanvas-transition)}}@media (max-width:991.98px) and (prefers-reduced-motion:reduce){.offcanvas-lg{transition:none}}@media (max-width:991.98px){.offcanvas-lg.offcanvas-start{top:0;left:0;width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translate(-100%)}}@media (max-width:991.98px){.offcanvas-lg.offcanvas-end{top:0;right:0;width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translate(100%)}}@media (max-width:991.98px){.offcanvas-lg.offcanvas-top{top:0;right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(-100%)}}@media (max-width:991.98px){.offcanvas-lg.offcanvas-bottom{right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}}@media (max-width:991.98px){.offcanvas-lg.show:not(.hiding),.offcanvas-lg.showing{transform:none}}@media (max-width:991.98px){.offcanvas-lg.hiding,.offcanvas-lg.show,.offcanvas-lg.showing{visibility:visible}}@media (min-width:992px){.offcanvas-lg{--bs-offcanvas-height:auto;--bs-offcanvas-border-width:0;background-color:transparent!important}.offcanvas-lg .offcanvas-header{display:none}.offcanvas-lg .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible;background-color:transparent!important}}@media (max-width:1199.98px){.offcanvas-xl{position:fixed;bottom:0;z-index:var(--bs-offcanvas-zindex);display:flex;flex-direction:column;max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);background-clip:padding-box;outline:0;transition:var(--bs-offcanvas-transition)}}@media (max-width:1199.98px) and (prefers-reduced-motion:reduce){.offcanvas-xl{transition:none}}@media (max-width:1199.98px){.offcanvas-xl.offcanvas-start{top:0;left:0;width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translate(-100%)}}@media (max-width:1199.98px){.offcanvas-xl.offcanvas-end{top:0;right:0;width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translate(100%)}}@media (max-width:1199.98px){.offcanvas-xl.offcanvas-top{top:0;right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(-100%)}}@media (max-width:1199.98px){.offcanvas-xl.offcanvas-bottom{right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}}@media (max-width:1199.98px){.offcanvas-xl.show:not(.hiding),.offcanvas-xl.showing{transform:none}}@media (max-width:1199.98px){.offcanvas-xl.hiding,.offcanvas-xl.show,.offcanvas-xl.showing{visibility:visible}}@media (min-width:1200px){.offcanvas-xl{--bs-offcanvas-height:auto;--bs-offcanvas-border-width:0;background-color:transparent!important}.offcanvas-xl .offcanvas-header{display:none}.offcanvas-xl .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible;background-color:transparent!important}}@media (max-width:1399.98px){.offcanvas-xxl{position:fixed;bottom:0;z-index:var(--bs-offcanvas-zindex);display:flex;flex-direction:column;max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);background-clip:padding-box;outline:0;transition:var(--bs-offcanvas-transition)}}@media (max-width:1399.98px) and (prefers-reduced-motion:reduce){.offcanvas-xxl{transition:none}}@media (max-width:1399.98px){.offcanvas-xxl.offcanvas-start{top:0;left:0;width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translate(-100%)}}@media (max-width:1399.98px){.offcanvas-xxl.offcanvas-end{top:0;right:0;width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translate(100%)}}@media (max-width:1399.98px){.offcanvas-xxl.offcanvas-top{top:0;right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(-100%)}}@media (max-width:1399.98px){.offcanvas-xxl.offcanvas-bottom{right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}}@media (max-width:1399.98px){.offcanvas-xxl.show:not(.hiding),.offcanvas-xxl.showing{transform:none}}@media (max-width:1399.98px){.offcanvas-xxl.hiding,.offcanvas-xxl.show,.offcanvas-xxl.showing{visibility:visible}}@media (min-width:1400px){.offcanvas-xxl{--bs-offcanvas-height:auto;--bs-offcanvas-border-width:0;background-color:transparent!important}.offcanvas-xxl .offcanvas-header{display:none}.offcanvas-xxl .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible;background-color:transparent!important}}.offcanvas{position:fixed;bottom:0;z-index:var(--bs-offcanvas-zindex);display:flex;flex-direction:column;max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);background-clip:padding-box;outline:0;transition:var(--bs-offcanvas-transition)}@media (prefers-reduced-motion:reduce){.offcanvas{transition:none}}.offcanvas.offcanvas-start{top:0;left:0;width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translate(-100%)}.offcanvas.offcanvas-end{top:0;right:0;width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translate(100%)}.offcanvas.offcanvas-top{top:0;right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(-100%)}.offcanvas.offcanvas-bottom{right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}.offcanvas.show:not(.hiding),.offcanvas.showing{transform:none}.offcanvas.hiding,.offcanvas.show,.offcanvas.showing{visibility:visible}.offcanvas-backdrop{position:fixed;top:0;left:0;z-index:1040;width:100vw;height:100vh;background-color:#000}.offcanvas-backdrop.fade{opacity:0}.offcanvas-backdrop.show{opacity:.5}.offcanvas-header{display:flex;align-items:center;justify-content:space-between;padding:var(--bs-offcanvas-padding-y) var(--bs-offcanvas-padding-x)}.offcanvas-header .btn-close{padding:calc(var(--bs-offcanvas-padding-y) * .5) calc(var(--bs-offcanvas-padding-x) * .5);margin-top:calc(-.5 * var(--bs-offcanvas-padding-y));margin-right:calc(-.5 * var(--bs-offcanvas-padding-x));margin-bottom:calc(-.5 * var(--bs-offcanvas-padding-y))}.offcanvas-title{margin-bottom:0;line-height:var(--bs-offcanvas-title-line-height)}.offcanvas-body{flex-grow:1;padding:var(--bs-offcanvas-padding-y) var(--bs-offcanvas-padding-x);overflow-y:auto}.placeholder{display:inline-block;min-height:1em;vertical-align:middle;cursor:wait;background-color:currentcolor;opacity:.5}.placeholder.btn:before{display:inline-block;content:""}.placeholder-xs{min-height:.6em}.placeholder-sm{min-height:.8em}.placeholder-lg{min-height:1.2em}.placeholder-glow .placeholder{animation:placeholder-glow 2s ease-in-out infinite}@keyframes placeholder-glow{50%{opacity:.2}}.placeholder-wave{-webkit-mask-image:linear-gradient(130deg,#000 55%,rgba(0,0,0,.8) 75%,#000 95%);mask-image:linear-gradient(130deg,#000 55%,rgba(0,0,0,.8) 75%,#000 95%);-webkit-mask-size:200% 100%;mask-size:200% 100%;animation:placeholder-wave 2s linear infinite}@keyframes placeholder-wave{to{-webkit-mask-position:-200% 0%;mask-position:-200% 0%}}.clearfix:after{display:block;clear:both;content:""}.text-bg-primary{color:#fff!important;background-color:RGBA(13,110,253,var(--bs-bg-opacity,1))!important}.text-bg-secondary{color:#fff!important;background-color:RGBA(108,117,125,var(--bs-bg-opacity,1))!important}.text-bg-success{color:#fff!important;background-color:RGBA(25,135,84,var(--bs-bg-opacity,1))!important}.text-bg-info{color:#000!important;background-color:RGBA(13,202,240,var(--bs-bg-opacity,1))!important}.text-bg-warning{color:#000!important;background-color:RGBA(255,193,7,var(--bs-bg-opacity,1))!important}.text-bg-danger{color:#fff!important;background-color:RGBA(220,53,69,var(--bs-bg-opacity,1))!important}.text-bg-light{color:#000!important;background-color:RGBA(248,249,250,var(--bs-bg-opacity,1))!important}.text-bg-dark{color:#fff!important;background-color:RGBA(33,37,41,var(--bs-bg-opacity,1))!important}.link-primary{color:RGBA(var(--bs-primary-rgb,var(--bs-link-opacity,1)));-webkit-text-decoration-color:RGBA(var(--bs-primary-rgb),var(--bs-link-underline-opacity,1));text-decoration-color:RGBA(var(--bs-primary-rgb),var(--bs-link-underline-opacity,1))}.link-primary:focus,.link-primary:hover{color:RGBA(10,88,202,var(--bs-link-opacity,1));-webkit-text-decoration-color:RGBA(10,88,202,var(--bs-link-underline-opacity,1));text-decoration-color:RGBA(10,88,202,var(--bs-link-underline-opacity,1))}.link-secondary{color:RGBA(var(--bs-secondary-rgb,var(--bs-link-opacity,1)));-webkit-text-decoration-color:RGBA(var(--bs-secondary-rgb),var(--bs-link-underline-opacity,1));text-decoration-color:RGBA(var(--bs-secondary-rgb),var(--bs-link-underline-opacity,1))}.link-secondary:focus,.link-secondary:hover{color:RGBA(86,94,100,var(--bs-link-opacity,1));-webkit-text-decoration-color:RGBA(86,94,100,var(--bs-link-underline-opacity,1));text-decoration-color:RGBA(86,94,100,var(--bs-link-underline-opacity,1))}.link-success{color:RGBA(var(--bs-success-rgb,var(--bs-link-opacity,1)));-webkit-text-decoration-color:RGBA(var(--bs-success-rgb),var(--bs-link-underline-opacity,1));text-decoration-color:RGBA(var(--bs-success-rgb),var(--bs-link-underline-opacity,1))}.link-success:focus,.link-success:hover{color:RGBA(20,108,67,var(--bs-link-opacity,1));-webkit-text-decoration-color:RGBA(20,108,67,var(--bs-link-underline-opacity,1));text-decoration-color:RGBA(20,108,67,var(--bs-link-underline-opacity,1))}.link-info{color:RGBA(var(--bs-info-rgb,var(--bs-link-opacity,1)));-webkit-text-decoration-color:RGBA(var(--bs-info-rgb),var(--bs-link-underline-opacity,1));text-decoration-color:RGBA(var(--bs-info-rgb),var(--bs-link-underline-opacity,1))}.link-info:focus,.link-info:hover{color:RGBA(61,213,243,var(--bs-link-opacity,1));-webkit-text-decoration-color:RGBA(61,213,243,var(--bs-link-underline-opacity,1));text-decoration-color:RGBA(61,213,243,var(--bs-link-underline-opacity,1))}.link-warning{color:RGBA(var(--bs-warning-rgb,var(--bs-link-opacity,1)));-webkit-text-decoration-color:RGBA(var(--bs-warning-rgb),var(--bs-link-underline-opacity,1));text-decoration-color:RGBA(var(--bs-warning-rgb),var(--bs-link-underline-opacity,1))}.link-warning:focus,.link-warning:hover{color:RGBA(255,205,57,var(--bs-link-opacity,1));-webkit-text-decoration-color:RGBA(255,205,57,var(--bs-link-underline-opacity,1));text-decoration-color:RGBA(255,205,57,var(--bs-link-underline-opacity,1))}.link-danger{color:RGBA(var(--bs-danger-rgb,var(--bs-link-opacity,1)));-webkit-text-decoration-color:RGBA(var(--bs-danger-rgb),var(--bs-link-underline-opacity,1));text-decoration-color:RGBA(var(--bs-danger-rgb),var(--bs-link-underline-opacity,1))}.link-danger:focus,.link-danger:hover{color:RGBA(176,42,55,var(--bs-link-opacity,1));-webkit-text-decoration-color:RGBA(176,42,55,var(--bs-link-underline-opacity,1));text-decoration-color:RGBA(176,42,55,var(--bs-link-underline-opacity,1))}.link-light{color:RGBA(var(--bs-light-rgb,var(--bs-link-opacity,1)));-webkit-text-decoration-color:RGBA(var(--bs-light-rgb),var(--bs-link-underline-opacity,1));text-decoration-color:RGBA(var(--bs-light-rgb),var(--bs-link-underline-opacity,1))}.link-light:focus,.link-light:hover{color:RGBA(249,250,251,var(--bs-link-opacity,1));-webkit-text-decoration-color:RGBA(249,250,251,var(--bs-link-underline-opacity,1));text-decoration-color:RGBA(249,250,251,var(--bs-link-underline-opacity,1))}.link-dark{color:RGBA(var(--bs-dark-rgb,var(--bs-link-opacity,1)));-webkit-text-decoration-color:RGBA(var(--bs-dark-rgb),var(--bs-link-underline-opacity,1));text-decoration-color:RGBA(var(--bs-dark-rgb),var(--bs-link-underline-opacity,1))}.link-dark:focus,.link-dark:hover{color:RGBA(26,30,33,var(--bs-link-opacity,1));-webkit-text-decoration-color:RGBA(26,30,33,var(--bs-link-underline-opacity,1));text-decoration-color:RGBA(26,30,33,var(--bs-link-underline-opacity,1))}.link-body-emphasis{color:RGBA(var(--bs-emphasis-color-rgb),var(--bs-link-opacity,1));-webkit-text-decoration-color:RGBA(var(--bs-emphasis-color-rgb),var(--bs-link-underline-opacity,1));text-decoration-color:RGBA(var(--bs-emphasis-color-rgb),var(--bs-link-underline-opacity,1))}.link-body-emphasis:focus,.link-body-emphasis:hover{color:RGBA(var(--bs-emphasis-color-rgb),var(--bs-link-opacity,.75));-webkit-text-decoration-color:RGBA(var(--bs-emphasis-color-rgb),var(--bs-link-underline-opacity,.75));text-decoration-color:RGBA(var(--bs-emphasis-color-rgb),var(--bs-link-underline-opacity,.75))}.focus-ring:focus{outline:0;box-shadow:var(--bs-focus-ring-x,0) var(--bs-focus-ring-y,0) var(--bs-focus-ring-blur,0) var(--bs-focus-ring-width) var(--bs-focus-ring-color)}.icon-link{display:inline-flex;gap:.375rem;align-items:center;-webkit-text-decoration-color:rgba(var(--bs-link-color-rgb),var(--bs-link-opacity,.5));text-decoration-color:rgba(var(--bs-link-color-rgb),var(--bs-link-opacity,.5));text-underline-offset:.25em;-webkit-backface-visibility:hidden;backface-visibility:hidden}.icon-link>.bi{flex-shrink:0;width:1em;height:1em;fill:currentcolor;transition:.2s ease-in-out transform}@media (prefers-reduced-motion:reduce){.icon-link>.bi{transition:none}}.icon-link-hover:focus-visible>.bi,.icon-link-hover:hover>.bi{transform:var(--bs-icon-link-transform,translate3d(.25em,0,0))}.ratio{position:relative;width:100%}.ratio:before{display:block;padding-top:var(--bs-aspect-ratio);content:""}.ratio>*{position:absolute;top:0;left:0;width:100%;height:100%}.ratio-1x1{--bs-aspect-ratio:100%}.ratio-4x3{--bs-aspect-ratio:75%}.ratio-16x9{--bs-aspect-ratio:56.25%}.ratio-21x9{--bs-aspect-ratio:42.8571428571%}.fixed-top{position:fixed;top:0;right:0;left:0;z-index:1030}.fixed-bottom{position:fixed;right:0;bottom:0;left:0;z-index:1030}.sticky-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}.sticky-bottom{position:-webkit-sticky;position:sticky;bottom:0;z-index:1020}@media (min-width:576px){.sticky-sm-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}.sticky-sm-bottom{position:-webkit-sticky;position:sticky;bottom:0;z-index:1020}}@media (min-width:768px){.sticky-md-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}.sticky-md-bottom{position:-webkit-sticky;position:sticky;bottom:0;z-index:1020}}@media (min-width:992px){.sticky-lg-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}.sticky-lg-bottom{position:-webkit-sticky;position:sticky;bottom:0;z-index:1020}}@media (min-width:1200px){.sticky-xl-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}.sticky-xl-bottom{position:-webkit-sticky;position:sticky;bottom:0;z-index:1020}}@media (min-width:1400px){.sticky-xxl-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}.sticky-xxl-bottom{position:-webkit-sticky;position:sticky;bottom:0;z-index:1020}}.hstack{display:flex;flex-direction:row;align-items:center;align-self:stretch}.vstack{display:flex;flex:1 1 auto;flex-direction:column;align-self:stretch}.visually-hidden,.visually-hidden-focusable:not(:focus):not(:focus-within){width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important}.visually-hidden-focusable:not(:focus):not(:focus-within):not(caption),.visually-hidden:not(caption){position:absolute!important}.stretched-link:after{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;content:""}.text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.vr{display:inline-block;align-self:stretch;width:1px;min-height:1em;background-color:currentcolor;opacity:.25}.align-baseline{vertical-align:baseline!important}.align-top{vertical-align:top!important}.align-middle{vertical-align:middle!important}.align-bottom{vertical-align:bottom!important}.align-text-bottom{vertical-align:text-bottom!important}.align-text-top{vertical-align:text-top!important}.float-start{float:left!important}.float-end{float:right!important}.float-none{float:none!important}.object-fit-contain{-o-object-fit:contain!important;object-fit:contain!important}.object-fit-cover{-o-object-fit:cover!important;object-fit:cover!important}.object-fit-fill{-o-object-fit:fill!important;object-fit:fill!important}.object-fit-scale{-o-object-fit:scale-down!important;object-fit:scale-down!important}.object-fit-none{-o-object-fit:none!important;object-fit:none!important}.opacity-0{opacity:0!important}.opacity-25{opacity:.25!important}.opacity-50{opacity:.5!important}.opacity-75{opacity:.75!important}.opacity-100{opacity:1!important}.overflow-auto{overflow:auto!important}.overflow-hidden{overflow:hidden!important}.overflow-visible{overflow:visible!important}.overflow-scroll{overflow:scroll!important}.overflow-x-auto{overflow-x:auto!important}.overflow-x-hidden{overflow-x:hidden!important}.overflow-x-visible{overflow-x:visible!important}.overflow-x-scroll{overflow-x:scroll!important}.overflow-y-auto{overflow-y:auto!important}.overflow-y-hidden{overflow-y:hidden!important}.overflow-y-visible{overflow-y:visible!important}.overflow-y-scroll{overflow-y:scroll!important}.d-inline{display:inline!important}.d-inline-block{display:inline-block!important}.d-block{display:block!important}.d-grid{display:grid!important}.d-inline-grid{display:inline-grid!important}.d-table{display:table!important}.d-table-row{display:table-row!important}.d-table-cell{display:table-cell!important}.d-flex{display:flex!important}.d-inline-flex{display:inline-flex!important}.d-none{display:none!important}.shadow{box-shadow:0 .5rem 1rem #00000026!important}.shadow-sm{box-shadow:0 .125rem .25rem #00000013!important}.shadow-lg{box-shadow:0 1rem 3rem #0000002d!important}.shadow-none{box-shadow:none!important}.focus-ring-primary{--bs-focus-ring-color:rgba(var(--bs-primary-rgb), var(--bs-focus-ring-opacity))}.focus-ring-secondary{--bs-focus-ring-color:rgba(var(--bs-secondary-rgb), var(--bs-focus-ring-opacity))}.focus-ring-success{--bs-focus-ring-color:rgba(var(--bs-success-rgb), var(--bs-focus-ring-opacity))}.focus-ring-info{--bs-focus-ring-color:rgba(var(--bs-info-rgb), var(--bs-focus-ring-opacity))}.focus-ring-warning{--bs-focus-ring-color:rgba(var(--bs-warning-rgb), var(--bs-focus-ring-opacity))}.focus-ring-danger{--bs-focus-ring-color:rgba(var(--bs-danger-rgb), var(--bs-focus-ring-opacity))}.focus-ring-light{--bs-focus-ring-color:rgba(var(--bs-light-rgb), var(--bs-focus-ring-opacity))}.focus-ring-dark{--bs-focus-ring-color:rgba(var(--bs-dark-rgb), var(--bs-focus-ring-opacity))}.position-static{position:static!important}.position-relative{position:relative!important}.position-absolute{position:absolute!important}.position-fixed{position:fixed!important}.position-sticky{position:-webkit-sticky!important;position:sticky!important}.top-0{top:0!important}.top-50{top:50%!important}.top-100{top:100%!important}.bottom-0{bottom:0!important}.bottom-50{bottom:50%!important}.bottom-100{bottom:100%!important}.start-0{left:0!important}.start-50{left:50%!important}.start-100{left:100%!important}.end-0{right:0!important}.end-50{right:50%!important}.end-100{right:100%!important}.translate-middle{transform:translate(-50%,-50%)!important}.translate-middle-x{transform:translate(-50%)!important}.translate-middle-y{transform:translateY(-50%)!important}.border{border:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color)!important}.border-0{border:0!important}.border-top{border-top:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color)!important}.border-top-0{border-top:0!important}.border-end{border-right:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color)!important}.border-end-0{border-right:0!important}.border-bottom{border-bottom:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color)!important}.border-bottom-0{border-bottom:0!important}.border-start{border-left:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color)!important}.border-start-0{border-left:0!important}.border-primary{--bs-border-opacity:1;border-color:rgba(var(--bs-primary-rgb),var(--bs-border-opacity))!important}.border-secondary{--bs-border-opacity:1;border-color:rgba(var(--bs-secondary-rgb),var(--bs-border-opacity))!important}.border-success{--bs-border-opacity:1;border-color:rgba(var(--bs-success-rgb),var(--bs-border-opacity))!important}.border-info{--bs-border-opacity:1;border-color:rgba(var(--bs-info-rgb),var(--bs-border-opacity))!important}.border-warning{--bs-border-opacity:1;border-color:rgba(var(--bs-warning-rgb),var(--bs-border-opacity))!important}.border-danger{--bs-border-opacity:1;border-color:rgba(var(--bs-danger-rgb),var(--bs-border-opacity))!important}.border-light{--bs-border-opacity:1;border-color:rgba(var(--bs-light-rgb),var(--bs-border-opacity))!important}.border-dark{--bs-border-opacity:1;border-color:rgba(var(--bs-dark-rgb),var(--bs-border-opacity))!important}.border-black{--bs-border-opacity:1;border-color:rgba(var(--bs-black-rgb),var(--bs-border-opacity))!important}.border-white{--bs-border-opacity:1;border-color:rgba(var(--bs-white-rgb),var(--bs-border-opacity))!important}.border-primary-subtle{border-color:var(--bs-primary-border-subtle)!important}.border-secondary-subtle{border-color:var(--bs-secondary-border-subtle)!important}.border-success-subtle{border-color:var(--bs-success-border-subtle)!important}.border-info-subtle{border-color:var(--bs-info-border-subtle)!important}.border-warning-subtle{border-color:var(--bs-warning-border-subtle)!important}.border-danger-subtle{border-color:var(--bs-danger-border-subtle)!important}.border-light-subtle{border-color:var(--bs-light-border-subtle)!important}.border-dark-subtle{border-color:var(--bs-dark-border-subtle)!important}.border-1{border-width:1px!important}.border-2{border-width:2px!important}.border-3{border-width:3px!important}.border-4{border-width:4px!important}.border-5{border-width:5px!important}.border-opacity-10{--bs-border-opacity:.1}.border-opacity-25{--bs-border-opacity:.25}.border-opacity-50{--bs-border-opacity:.5}.border-opacity-75{--bs-border-opacity:.75}.border-opacity-100{--bs-border-opacity:1}.w-25{width:25%!important}.w-50{width:50%!important}.w-75{width:75%!important}.w-100{width:100%!important}.w-auto{width:auto!important}.mw-100{max-width:100%!important}.vw-100{width:100vw!important}.min-vw-100{min-width:100vw!important}.h-25{height:25%!important}.h-50{height:50%!important}.h-75{height:75%!important}.h-100{height:100%!important}.h-auto{height:auto!important}.mh-100{max-height:100%!important}.vh-100{height:100vh!important}.min-vh-100{min-height:100vh!important}.flex-fill{flex:1 1 auto!important}.flex-row{flex-direction:row!important}.flex-column{flex-direction:column!important}.flex-row-reverse{flex-direction:row-reverse!important}.flex-column-reverse{flex-direction:column-reverse!important}.flex-grow-0{flex-grow:0!important}.flex-grow-1{flex-grow:1!important}.flex-shrink-0{flex-shrink:0!important}.flex-shrink-1{flex-shrink:1!important}.flex-wrap{flex-wrap:wrap!important}.flex-nowrap{flex-wrap:nowrap!important}.flex-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-start{justify-content:flex-start!important}.justify-content-end{justify-content:flex-end!important}.justify-content-center{justify-content:center!important}.justify-content-between{justify-content:space-between!important}.justify-content-around{justify-content:space-around!important}.justify-content-evenly{justify-content:space-evenly!important}.align-items-start{align-items:flex-start!important}.align-items-end{align-items:flex-end!important}.align-items-center{align-items:center!important}.align-items-baseline{align-items:baseline!important}.align-items-stretch{align-items:stretch!important}.align-content-start{align-content:flex-start!important}.align-content-end{align-content:flex-end!important}.align-content-center{align-content:center!important}.align-content-between{align-content:space-between!important}.align-content-around{align-content:space-around!important}.align-content-stretch{align-content:stretch!important}.align-self-auto{align-self:auto!important}.align-self-start{align-self:flex-start!important}.align-self-end{align-self:flex-end!important}.align-self-center{align-self:center!important}.align-self-baseline{align-self:baseline!important}.align-self-stretch{align-self:stretch!important}.order-first{order:-1!important}.order-0{order:0!important}.order-1{order:1!important}.order-2{order:2!important}.order-3{order:3!important}.order-4{order:4!important}.order-5{order:5!important}.order-last{order:6!important}.m-0{margin:0!important}.m-1{margin:.25rem!important}.m-2{margin:.5rem!important}.m-3{margin:1rem!important}.m-4{margin:1.5rem!important}.m-5{margin:3rem!important}.m-auto{margin:auto!important}.mx-0{margin-right:0!important;margin-left:0!important}.mx-1{margin-right:.25rem!important;margin-left:.25rem!important}.mx-2{margin-right:.5rem!important;margin-left:.5rem!important}.mx-3{margin-right:1rem!important;margin-left:1rem!important}.mx-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-5{margin-right:3rem!important;margin-left:3rem!important}.mx-auto{margin-right:auto!important;margin-left:auto!important}.my-0{margin-top:0!important;margin-bottom:0!important}.my-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-0{margin-top:0!important}.mt-1{margin-top:.25rem!important}.mt-2{margin-top:.5rem!important}.mt-3{margin-top:1rem!important}.mt-4{margin-top:1.5rem!important}.mt-5{margin-top:3rem!important}.mt-auto{margin-top:auto!important}.me-0{margin-right:0!important}.me-1{margin-right:.25rem!important}.me-2{margin-right:.5rem!important}.me-3{margin-right:1rem!important}.me-4{margin-right:1.5rem!important}.me-5{margin-right:3rem!important}.me-auto{margin-right:auto!important}.mb-0{margin-bottom:0!important}.mb-1{margin-bottom:.25rem!important}.mb-2{margin-bottom:.5rem!important}.mb-3{margin-bottom:1rem!important}.mb-4{margin-bottom:1.5rem!important}.mb-5{margin-bottom:3rem!important}.mb-auto{margin-bottom:auto!important}.ms-0{margin-left:0!important}.ms-1{margin-left:.25rem!important}.ms-2{margin-left:.5rem!important}.ms-3{margin-left:1rem!important}.ms-4{margin-left:1.5rem!important}.ms-5{margin-left:3rem!important}.ms-auto{margin-left:auto!important}.p-0{padding:0!important}.p-1{padding:.25rem!important}.p-2{padding:.5rem!important}.p-3{padding:1rem!important}.p-4{padding:1.5rem!important}.p-5{padding:3rem!important}.px-0{padding-right:0!important;padding-left:0!important}.px-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-3{padding-right:1rem!important;padding-left:1rem!important}.px-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-5{padding-right:3rem!important;padding-left:3rem!important}.py-0{padding-top:0!important;padding-bottom:0!important}.py-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-0{padding-top:0!important}.pt-1{padding-top:.25rem!important}.pt-2{padding-top:.5rem!important}.pt-3{padding-top:1rem!important}.pt-4{padding-top:1.5rem!important}.pt-5{padding-top:3rem!important}.pe-0{padding-right:0!important}.pe-1{padding-right:.25rem!important}.pe-2{padding-right:.5rem!important}.pe-3{padding-right:1rem!important}.pe-4{padding-right:1.5rem!important}.pe-5{padding-right:3rem!important}.pb-0{padding-bottom:0!important}.pb-1{padding-bottom:.25rem!important}.pb-2{padding-bottom:.5rem!important}.pb-3{padding-bottom:1rem!important}.pb-4{padding-bottom:1.5rem!important}.pb-5{padding-bottom:3rem!important}.ps-0{padding-left:0!important}.ps-1{padding-left:.25rem!important}.ps-2{padding-left:.5rem!important}.ps-3{padding-left:1rem!important}.ps-4{padding-left:1.5rem!important}.ps-5{padding-left:3rem!important}.gap-0{gap:0!important}.gap-1{gap:.25rem!important}.gap-2{gap:.5rem!important}.gap-3{gap:1rem!important}.gap-4{gap:1.5rem!important}.gap-5{gap:3rem!important}.row-gap-0{row-gap:0!important}.row-gap-1{row-gap:.25rem!important}.row-gap-2{row-gap:.5rem!important}.row-gap-3{row-gap:1rem!important}.row-gap-4{row-gap:1.5rem!important}.row-gap-5{row-gap:3rem!important}.column-gap-0{-moz-column-gap:0!important;column-gap:0!important}.column-gap-1{-moz-column-gap:.25rem!important;column-gap:.25rem!important}.column-gap-2{-moz-column-gap:.5rem!important;column-gap:.5rem!important}.column-gap-3{-moz-column-gap:1rem!important;column-gap:1rem!important}.column-gap-4{-moz-column-gap:1.5rem!important;column-gap:1.5rem!important}.column-gap-5{-moz-column-gap:3rem!important;column-gap:3rem!important}.font-monospace{font-family:var(--bs-font-monospace)!important}.fs-1{font-size:calc(1.375rem + 1.5vw)!important}.fs-2{font-size:calc(1.325rem + .9vw)!important}.fs-3{font-size:calc(1.3rem + .6vw)!important}.fs-4{font-size:calc(1.275rem + .3vw)!important}.fs-5{font-size:1.25rem!important}.fs-6{font-size:1rem!important}.fst-italic{font-style:italic!important}.fst-normal{font-style:normal!important}.fw-lighter{font-weight:lighter!important}.fw-light{font-weight:300!important}.fw-normal{font-weight:400!important}.fw-medium{font-weight:500!important}.fw-semibold{font-weight:600!important}.fw-bold{font-weight:700!important}.fw-bolder{font-weight:bolder!important}.lh-1{line-height:1!important}.lh-sm{line-height:1.25!important}.lh-base{line-height:1.5!important}.lh-lg{line-height:2!important}.text-start{text-align:left!important}.text-end{text-align:right!important}.text-center{text-align:center!important}.text-decoration-none{text-decoration:none!important}.text-decoration-underline{text-decoration:underline!important}.text-decoration-line-through{text-decoration:line-through!important}.text-lowercase{text-transform:lowercase!important}.text-uppercase{text-transform:uppercase!important}.text-capitalize{text-transform:capitalize!important}.text-wrap{white-space:normal!important}.text-nowrap{white-space:nowrap!important}.text-break{word-wrap:break-word!important;word-break:break-word!important}.text-primary{--bs-text-opacity:1;color:rgba(var(--bs-primary-rgb),var(--bs-text-opacity))!important}.text-secondary{--bs-text-opacity:1;color:rgba(var(--bs-secondary-rgb),var(--bs-text-opacity))!important}.text-success{--bs-text-opacity:1;color:rgba(var(--bs-success-rgb),var(--bs-text-opacity))!important}.text-info{--bs-text-opacity:1;color:rgba(var(--bs-info-rgb),var(--bs-text-opacity))!important}.text-warning{--bs-text-opacity:1;color:rgba(var(--bs-warning-rgb),var(--bs-text-opacity))!important}.text-danger{--bs-text-opacity:1;color:rgba(var(--bs-danger-rgb),var(--bs-text-opacity))!important}.text-light{--bs-text-opacity:1;color:rgba(var(--bs-light-rgb),var(--bs-text-opacity))!important}.text-dark{--bs-text-opacity:1;color:rgba(var(--bs-dark-rgb),var(--bs-text-opacity))!important}.text-black{--bs-text-opacity:1;color:rgba(var(--bs-black-rgb),var(--bs-text-opacity))!important}.text-white{--bs-text-opacity:1;color:rgba(var(--bs-white-rgb),var(--bs-text-opacity))!important}.text-body{--bs-text-opacity:1;color:rgba(var(--bs-body-color-rgb),var(--bs-text-opacity))!important}.text-muted{--bs-text-opacity:1;color:var(--bs-secondary-color)!important}.text-black-50{--bs-text-opacity:1;color:#00000080!important}.text-white-50{--bs-text-opacity:1;color:#ffffff80!important}.text-body-secondary{--bs-text-opacity:1;color:var(--bs-secondary-color)!important}.text-body-tertiary{--bs-text-opacity:1;color:var(--bs-tertiary-color)!important}.text-body-emphasis{--bs-text-opacity:1;color:var(--bs-emphasis-color)!important}.text-reset{--bs-text-opacity:1;color:inherit!important}.text-opacity-25{--bs-text-opacity:.25}.text-opacity-50{--bs-text-opacity:.5}.text-opacity-75{--bs-text-opacity:.75}.text-opacity-100{--bs-text-opacity:1}.text-primary-emphasis{color:var(--bs-primary-text-emphasis)!important}.text-secondary-emphasis{color:var(--bs-secondary-text-emphasis)!important}.text-success-emphasis{color:var(--bs-success-text-emphasis)!important}.text-info-emphasis{color:var(--bs-info-text-emphasis)!important}.text-warning-emphasis{color:var(--bs-warning-text-emphasis)!important}.text-danger-emphasis{color:var(--bs-danger-text-emphasis)!important}.text-light-emphasis{color:var(--bs-light-text-emphasis)!important}.text-dark-emphasis{color:var(--bs-dark-text-emphasis)!important}.link-opacity-10,.link-opacity-10-hover:hover{--bs-link-opacity:.1}.link-opacity-25,.link-opacity-25-hover:hover{--bs-link-opacity:.25}.link-opacity-50,.link-opacity-50-hover:hover{--bs-link-opacity:.5}.link-opacity-75,.link-opacity-75-hover:hover{--bs-link-opacity:.75}.link-opacity-100,.link-opacity-100-hover:hover{--bs-link-opacity:1}.link-offset-1,.link-offset-1-hover:hover{text-underline-offset:.125em!important}.link-offset-2,.link-offset-2-hover:hover{text-underline-offset:.25em!important}.link-offset-3,.link-offset-3-hover:hover{text-underline-offset:.375em!important}.link-underline-primary{--bs-link-underline-opacity:1;-webkit-text-decoration-color:rgba(var(--bs-primary-rgb),var(--bs-link-underline-opacity))!important;text-decoration-color:rgba(var(--bs-primary-rgb),var(--bs-link-underline-opacity))!important}.link-underline-secondary{--bs-link-underline-opacity:1;-webkit-text-decoration-color:rgba(var(--bs-secondary-rgb),var(--bs-link-underline-opacity))!important;text-decoration-color:rgba(var(--bs-secondary-rgb),var(--bs-link-underline-opacity))!important}.link-underline-success{--bs-link-underline-opacity:1;-webkit-text-decoration-color:rgba(var(--bs-success-rgb),var(--bs-link-underline-opacity))!important;text-decoration-color:rgba(var(--bs-success-rgb),var(--bs-link-underline-opacity))!important}.link-underline-info{--bs-link-underline-opacity:1;-webkit-text-decoration-color:rgba(var(--bs-info-rgb),var(--bs-link-underline-opacity))!important;text-decoration-color:rgba(var(--bs-info-rgb),var(--bs-link-underline-opacity))!important}.link-underline-warning{--bs-link-underline-opacity:1;-webkit-text-decoration-color:rgba(var(--bs-warning-rgb),var(--bs-link-underline-opacity))!important;text-decoration-color:rgba(var(--bs-warning-rgb),var(--bs-link-underline-opacity))!important}.link-underline-danger{--bs-link-underline-opacity:1;-webkit-text-decoration-color:rgba(var(--bs-danger-rgb),var(--bs-link-underline-opacity))!important;text-decoration-color:rgba(var(--bs-danger-rgb),var(--bs-link-underline-opacity))!important}.link-underline-light{--bs-link-underline-opacity:1;-webkit-text-decoration-color:rgba(var(--bs-light-rgb),var(--bs-link-underline-opacity))!important;text-decoration-color:rgba(var(--bs-light-rgb),var(--bs-link-underline-opacity))!important}.link-underline-dark{--bs-link-underline-opacity:1;-webkit-text-decoration-color:rgba(var(--bs-dark-rgb),var(--bs-link-underline-opacity))!important;text-decoration-color:rgba(var(--bs-dark-rgb),var(--bs-link-underline-opacity))!important}.link-underline{--bs-link-underline-opacity:1;-webkit-text-decoration-color:rgba(var(--bs-link-color-rgb),var(--bs-link-underline-opacity,1))!important;text-decoration-color:rgba(var(--bs-link-color-rgb),var(--bs-link-underline-opacity,1))!important}.link-underline-opacity-0,.link-underline-opacity-0-hover:hover{--bs-link-underline-opacity:0}.link-underline-opacity-10,.link-underline-opacity-10-hover:hover{--bs-link-underline-opacity:.1}.link-underline-opacity-25,.link-underline-opacity-25-hover:hover{--bs-link-underline-opacity:.25}.link-underline-opacity-50,.link-underline-opacity-50-hover:hover{--bs-link-underline-opacity:.5}.link-underline-opacity-75,.link-underline-opacity-75-hover:hover{--bs-link-underline-opacity:.75}.link-underline-opacity-100,.link-underline-opacity-100-hover:hover{--bs-link-underline-opacity:1}.bg-primary{--bs-bg-opacity:1;background-color:rgba(var(--bs-primary-rgb),var(--bs-bg-opacity))!important}.bg-secondary{--bs-bg-opacity:1;background-color:rgba(var(--bs-secondary-rgb),var(--bs-bg-opacity))!important}.bg-success{--bs-bg-opacity:1;background-color:rgba(var(--bs-success-rgb),var(--bs-bg-opacity))!important}.bg-info{--bs-bg-opacity:1;background-color:rgba(var(--bs-info-rgb),var(--bs-bg-opacity))!important}.bg-warning{--bs-bg-opacity:1;background-color:rgba(var(--bs-warning-rgb),var(--bs-bg-opacity))!important}.bg-danger{--bs-bg-opacity:1;background-color:rgba(var(--bs-danger-rgb),var(--bs-bg-opacity))!important}.bg-light{--bs-bg-opacity:1;background-color:rgba(var(--bs-light-rgb),var(--bs-bg-opacity))!important}.bg-dark{--bs-bg-opacity:1;background-color:rgba(var(--bs-dark-rgb),var(--bs-bg-opacity))!important}.bg-black{--bs-bg-opacity:1;background-color:rgba(var(--bs-black-rgb),var(--bs-bg-opacity))!important}.bg-white{--bs-bg-opacity:1;background-color:rgba(var(--bs-white-rgb),var(--bs-bg-opacity))!important}.bg-body{--bs-bg-opacity:1;background-color:rgba(var(--bs-body-bg-rgb),var(--bs-bg-opacity))!important}.bg-transparent{--bs-bg-opacity:1;background-color:transparent!important}.bg-body-secondary{--bs-bg-opacity:1;background-color:rgba(var(--bs-secondary-bg-rgb),var(--bs-bg-opacity))!important}.bg-body-tertiary{--bs-bg-opacity:1;background-color:rgba(var(--bs-tertiary-bg-rgb),var(--bs-bg-opacity))!important}.bg-opacity-10{--bs-bg-opacity:.1}.bg-opacity-25{--bs-bg-opacity:.25}.bg-opacity-50{--bs-bg-opacity:.5}.bg-opacity-75{--bs-bg-opacity:.75}.bg-opacity-100{--bs-bg-opacity:1}.bg-primary-subtle{background-color:var(--bs-primary-bg-subtle)!important}.bg-secondary-subtle{background-color:var(--bs-secondary-bg-subtle)!important}.bg-success-subtle{background-color:var(--bs-success-bg-subtle)!important}.bg-info-subtle{background-color:var(--bs-info-bg-subtle)!important}.bg-warning-subtle{background-color:var(--bs-warning-bg-subtle)!important}.bg-danger-subtle{background-color:var(--bs-danger-bg-subtle)!important}.bg-light-subtle{background-color:var(--bs-light-bg-subtle)!important}.bg-dark-subtle{background-color:var(--bs-dark-bg-subtle)!important}.bg-gradient{background-image:var(--bs-gradient)!important}.user-select-all{-webkit-user-select:all!important;-moz-user-select:all!important;user-select:all!important}.user-select-auto{-webkit-user-select:auto!important;-moz-user-select:auto!important;user-select:auto!important}.user-select-none{-webkit-user-select:none!important;-moz-user-select:none!important;user-select:none!important}.pe-none{pointer-events:none!important}.pe-auto{pointer-events:auto!important}.rounded{border-radius:var(--bs-border-radius)!important}.rounded-0{border-radius:0!important}.rounded-1{border-radius:var(--bs-border-radius-sm)!important}.rounded-2{border-radius:var(--bs-border-radius)!important}.rounded-3{border-radius:var(--bs-border-radius-lg)!important}.rounded-4{border-radius:var(--bs-border-radius-xl)!important}.rounded-5{border-radius:var(--bs-border-radius-xxl)!important}.rounded-circle{border-radius:50%!important}.rounded-pill{border-radius:var(--bs-border-radius-pill)!important}.rounded-top{border-top-left-radius:var(--bs-border-radius)!important;border-top-right-radius:var(--bs-border-radius)!important}.rounded-top-0{border-top-left-radius:0!important;border-top-right-radius:0!important}.rounded-top-1{border-top-left-radius:var(--bs-border-radius-sm)!important;border-top-right-radius:var(--bs-border-radius-sm)!important}.rounded-top-2{border-top-left-radius:var(--bs-border-radius)!important;border-top-right-radius:var(--bs-border-radius)!important}.rounded-top-3{border-top-left-radius:var(--bs-border-radius-lg)!important;border-top-right-radius:var(--bs-border-radius-lg)!important}.rounded-top-4{border-top-left-radius:var(--bs-border-radius-xl)!important;border-top-right-radius:var(--bs-border-radius-xl)!important}.rounded-top-5{border-top-left-radius:var(--bs-border-radius-xxl)!important;border-top-right-radius:var(--bs-border-radius-xxl)!important}.rounded-top-circle{border-top-left-radius:50%!important;border-top-right-radius:50%!important}.rounded-top-pill{border-top-left-radius:var(--bs-border-radius-pill)!important;border-top-right-radius:var(--bs-border-radius-pill)!important}.rounded-end{border-top-right-radius:var(--bs-border-radius)!important;border-bottom-right-radius:var(--bs-border-radius)!important}.rounded-end-0{border-top-right-radius:0!important;border-bottom-right-radius:0!important}.rounded-end-1{border-top-right-radius:var(--bs-border-radius-sm)!important;border-bottom-right-radius:var(--bs-border-radius-sm)!important}.rounded-end-2{border-top-right-radius:var(--bs-border-radius)!important;border-bottom-right-radius:var(--bs-border-radius)!important}.rounded-end-3{border-top-right-radius:var(--bs-border-radius-lg)!important;border-bottom-right-radius:var(--bs-border-radius-lg)!important}.rounded-end-4{border-top-right-radius:var(--bs-border-radius-xl)!important;border-bottom-right-radius:var(--bs-border-radius-xl)!important}.rounded-end-5{border-top-right-radius:var(--bs-border-radius-xxl)!important;border-bottom-right-radius:var(--bs-border-radius-xxl)!important}.rounded-end-circle{border-top-right-radius:50%!important;border-bottom-right-radius:50%!important}.rounded-end-pill{border-top-right-radius:var(--bs-border-radius-pill)!important;border-bottom-right-radius:var(--bs-border-radius-pill)!important}.rounded-bottom{border-bottom-right-radius:var(--bs-border-radius)!important;border-bottom-left-radius:var(--bs-border-radius)!important}.rounded-bottom-0{border-bottom-right-radius:0!important;border-bottom-left-radius:0!important}.rounded-bottom-1{border-bottom-right-radius:var(--bs-border-radius-sm)!important;border-bottom-left-radius:var(--bs-border-radius-sm)!important}.rounded-bottom-2{border-bottom-right-radius:var(--bs-border-radius)!important;border-bottom-left-radius:var(--bs-border-radius)!important}.rounded-bottom-3{border-bottom-right-radius:var(--bs-border-radius-lg)!important;border-bottom-left-radius:var(--bs-border-radius-lg)!important}.rounded-bottom-4{border-bottom-right-radius:var(--bs-border-radius-xl)!important;border-bottom-left-radius:var(--bs-border-radius-xl)!important}.rounded-bottom-5{border-bottom-right-radius:var(--bs-border-radius-xxl)!important;border-bottom-left-radius:var(--bs-border-radius-xxl)!important}.rounded-bottom-circle{border-bottom-right-radius:50%!important;border-bottom-left-radius:50%!important}.rounded-bottom-pill{border-bottom-right-radius:var(--bs-border-radius-pill)!important;border-bottom-left-radius:var(--bs-border-radius-pill)!important}.rounded-start{border-bottom-left-radius:var(--bs-border-radius)!important;border-top-left-radius:var(--bs-border-radius)!important}.rounded-start-0{border-bottom-left-radius:0!important;border-top-left-radius:0!important}.rounded-start-1{border-bottom-left-radius:var(--bs-border-radius-sm)!important;border-top-left-radius:var(--bs-border-radius-sm)!important}.rounded-start-2{border-bottom-left-radius:var(--bs-border-radius)!important;border-top-left-radius:var(--bs-border-radius)!important}.rounded-start-3{border-bottom-left-radius:var(--bs-border-radius-lg)!important;border-top-left-radius:var(--bs-border-radius-lg)!important}.rounded-start-4{border-bottom-left-radius:var(--bs-border-radius-xl)!important;border-top-left-radius:var(--bs-border-radius-xl)!important}.rounded-start-5{border-bottom-left-radius:var(--bs-border-radius-xxl)!important;border-top-left-radius:var(--bs-border-radius-xxl)!important}.rounded-start-circle{border-bottom-left-radius:50%!important;border-top-left-radius:50%!important}.rounded-start-pill{border-bottom-left-radius:var(--bs-border-radius-pill)!important;border-top-left-radius:var(--bs-border-radius-pill)!important}.visible{visibility:visible!important}.invisible{visibility:hidden!important}.z-n1{z-index:-1!important}.z-0{z-index:0!important}.z-1{z-index:1!important}.z-2{z-index:2!important}.z-3{z-index:3!important}@media (min-width:576px){.float-sm-start{float:left!important}.float-sm-end{float:right!important}.float-sm-none{float:none!important}.object-fit-sm-contain{-o-object-fit:contain!important;object-fit:contain!important}.object-fit-sm-cover{-o-object-fit:cover!important;object-fit:cover!important}.object-fit-sm-fill{-o-object-fit:fill!important;object-fit:fill!important}.object-fit-sm-scale{-o-object-fit:scale-down!important;object-fit:scale-down!important}.object-fit-sm-none{-o-object-fit:none!important;object-fit:none!important}.d-sm-inline{display:inline!important}.d-sm-inline-block{display:inline-block!important}.d-sm-block{display:block!important}.d-sm-grid{display:grid!important}.d-sm-inline-grid{display:inline-grid!important}.d-sm-table{display:table!important}.d-sm-table-row{display:table-row!important}.d-sm-table-cell{display:table-cell!important}.d-sm-flex{display:flex!important}.d-sm-inline-flex{display:inline-flex!important}.d-sm-none{display:none!important}.flex-sm-fill{flex:1 1 auto!important}.flex-sm-row{flex-direction:row!important}.flex-sm-column{flex-direction:column!important}.flex-sm-row-reverse{flex-direction:row-reverse!important}.flex-sm-column-reverse{flex-direction:column-reverse!important}.flex-sm-grow-0{flex-grow:0!important}.flex-sm-grow-1{flex-grow:1!important}.flex-sm-shrink-0{flex-shrink:0!important}.flex-sm-shrink-1{flex-shrink:1!important}.flex-sm-wrap{flex-wrap:wrap!important}.flex-sm-nowrap{flex-wrap:nowrap!important}.flex-sm-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-sm-start{justify-content:flex-start!important}.justify-content-sm-end{justify-content:flex-end!important}.justify-content-sm-center{justify-content:center!important}.justify-content-sm-between{justify-content:space-between!important}.justify-content-sm-around{justify-content:space-around!important}.justify-content-sm-evenly{justify-content:space-evenly!important}.align-items-sm-start{align-items:flex-start!important}.align-items-sm-end{align-items:flex-end!important}.align-items-sm-center{align-items:center!important}.align-items-sm-baseline{align-items:baseline!important}.align-items-sm-stretch{align-items:stretch!important}.align-content-sm-start{align-content:flex-start!important}.align-content-sm-end{align-content:flex-end!important}.align-content-sm-center{align-content:center!important}.align-content-sm-between{align-content:space-between!important}.align-content-sm-around{align-content:space-around!important}.align-content-sm-stretch{align-content:stretch!important}.align-self-sm-auto{align-self:auto!important}.align-self-sm-start{align-self:flex-start!important}.align-self-sm-end{align-self:flex-end!important}.align-self-sm-center{align-self:center!important}.align-self-sm-baseline{align-self:baseline!important}.align-self-sm-stretch{align-self:stretch!important}.order-sm-first{order:-1!important}.order-sm-0{order:0!important}.order-sm-1{order:1!important}.order-sm-2{order:2!important}.order-sm-3{order:3!important}.order-sm-4{order:4!important}.order-sm-5{order:5!important}.order-sm-last{order:6!important}.m-sm-0{margin:0!important}.m-sm-1{margin:.25rem!important}.m-sm-2{margin:.5rem!important}.m-sm-3{margin:1rem!important}.m-sm-4{margin:1.5rem!important}.m-sm-5{margin:3rem!important}.m-sm-auto{margin:auto!important}.mx-sm-0{margin-right:0!important;margin-left:0!important}.mx-sm-1{margin-right:.25rem!important;margin-left:.25rem!important}.mx-sm-2{margin-right:.5rem!important;margin-left:.5rem!important}.mx-sm-3{margin-right:1rem!important;margin-left:1rem!important}.mx-sm-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-sm-5{margin-right:3rem!important;margin-left:3rem!important}.mx-sm-auto{margin-right:auto!important;margin-left:auto!important}.my-sm-0{margin-top:0!important;margin-bottom:0!important}.my-sm-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-sm-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-sm-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-sm-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-sm-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-sm-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-sm-0{margin-top:0!important}.mt-sm-1{margin-top:.25rem!important}.mt-sm-2{margin-top:.5rem!important}.mt-sm-3{margin-top:1rem!important}.mt-sm-4{margin-top:1.5rem!important}.mt-sm-5{margin-top:3rem!important}.mt-sm-auto{margin-top:auto!important}.me-sm-0{margin-right:0!important}.me-sm-1{margin-right:.25rem!important}.me-sm-2{margin-right:.5rem!important}.me-sm-3{margin-right:1rem!important}.me-sm-4{margin-right:1.5rem!important}.me-sm-5{margin-right:3rem!important}.me-sm-auto{margin-right:auto!important}.mb-sm-0{margin-bottom:0!important}.mb-sm-1{margin-bottom:.25rem!important}.mb-sm-2{margin-bottom:.5rem!important}.mb-sm-3{margin-bottom:1rem!important}.mb-sm-4{margin-bottom:1.5rem!important}.mb-sm-5{margin-bottom:3rem!important}.mb-sm-auto{margin-bottom:auto!important}.ms-sm-0{margin-left:0!important}.ms-sm-1{margin-left:.25rem!important}.ms-sm-2{margin-left:.5rem!important}.ms-sm-3{margin-left:1rem!important}.ms-sm-4{margin-left:1.5rem!important}.ms-sm-5{margin-left:3rem!important}.ms-sm-auto{margin-left:auto!important}.p-sm-0{padding:0!important}.p-sm-1{padding:.25rem!important}.p-sm-2{padding:.5rem!important}.p-sm-3{padding:1rem!important}.p-sm-4{padding:1.5rem!important}.p-sm-5{padding:3rem!important}.px-sm-0{padding-right:0!important;padding-left:0!important}.px-sm-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-sm-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-sm-3{padding-right:1rem!important;padding-left:1rem!important}.px-sm-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-sm-5{padding-right:3rem!important;padding-left:3rem!important}.py-sm-0{padding-top:0!important;padding-bottom:0!important}.py-sm-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-sm-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-sm-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-sm-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-sm-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-sm-0{padding-top:0!important}.pt-sm-1{padding-top:.25rem!important}.pt-sm-2{padding-top:.5rem!important}.pt-sm-3{padding-top:1rem!important}.pt-sm-4{padding-top:1.5rem!important}.pt-sm-5{padding-top:3rem!important}.pe-sm-0{padding-right:0!important}.pe-sm-1{padding-right:.25rem!important}.pe-sm-2{padding-right:.5rem!important}.pe-sm-3{padding-right:1rem!important}.pe-sm-4{padding-right:1.5rem!important}.pe-sm-5{padding-right:3rem!important}.pb-sm-0{padding-bottom:0!important}.pb-sm-1{padding-bottom:.25rem!important}.pb-sm-2{padding-bottom:.5rem!important}.pb-sm-3{padding-bottom:1rem!important}.pb-sm-4{padding-bottom:1.5rem!important}.pb-sm-5{padding-bottom:3rem!important}.ps-sm-0{padding-left:0!important}.ps-sm-1{padding-left:.25rem!important}.ps-sm-2{padding-left:.5rem!important}.ps-sm-3{padding-left:1rem!important}.ps-sm-4{padding-left:1.5rem!important}.ps-sm-5{padding-left:3rem!important}.gap-sm-0{gap:0!important}.gap-sm-1{gap:.25rem!important}.gap-sm-2{gap:.5rem!important}.gap-sm-3{gap:1rem!important}.gap-sm-4{gap:1.5rem!important}.gap-sm-5{gap:3rem!important}.row-gap-sm-0{row-gap:0!important}.row-gap-sm-1{row-gap:.25rem!important}.row-gap-sm-2{row-gap:.5rem!important}.row-gap-sm-3{row-gap:1rem!important}.row-gap-sm-4{row-gap:1.5rem!important}.row-gap-sm-5{row-gap:3rem!important}.column-gap-sm-0{-moz-column-gap:0!important;column-gap:0!important}.column-gap-sm-1{-moz-column-gap:.25rem!important;column-gap:.25rem!important}.column-gap-sm-2{-moz-column-gap:.5rem!important;column-gap:.5rem!important}.column-gap-sm-3{-moz-column-gap:1rem!important;column-gap:1rem!important}.column-gap-sm-4{-moz-column-gap:1.5rem!important;column-gap:1.5rem!important}.column-gap-sm-5{-moz-column-gap:3rem!important;column-gap:3rem!important}.text-sm-start{text-align:left!important}.text-sm-end{text-align:right!important}.text-sm-center{text-align:center!important}}@media (min-width:768px){.float-md-start{float:left!important}.float-md-end{float:right!important}.float-md-none{float:none!important}.object-fit-md-contain{-o-object-fit:contain!important;object-fit:contain!important}.object-fit-md-cover{-o-object-fit:cover!important;object-fit:cover!important}.object-fit-md-fill{-o-object-fit:fill!important;object-fit:fill!important}.object-fit-md-scale{-o-object-fit:scale-down!important;object-fit:scale-down!important}.object-fit-md-none{-o-object-fit:none!important;object-fit:none!important}.d-md-inline{display:inline!important}.d-md-inline-block{display:inline-block!important}.d-md-block{display:block!important}.d-md-grid{display:grid!important}.d-md-inline-grid{display:inline-grid!important}.d-md-table{display:table!important}.d-md-table-row{display:table-row!important}.d-md-table-cell{display:table-cell!important}.d-md-flex{display:flex!important}.d-md-inline-flex{display:inline-flex!important}.d-md-none{display:none!important}.flex-md-fill{flex:1 1 auto!important}.flex-md-row{flex-direction:row!important}.flex-md-column{flex-direction:column!important}.flex-md-row-reverse{flex-direction:row-reverse!important}.flex-md-column-reverse{flex-direction:column-reverse!important}.flex-md-grow-0{flex-grow:0!important}.flex-md-grow-1{flex-grow:1!important}.flex-md-shrink-0{flex-shrink:0!important}.flex-md-shrink-1{flex-shrink:1!important}.flex-md-wrap{flex-wrap:wrap!important}.flex-md-nowrap{flex-wrap:nowrap!important}.flex-md-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-md-start{justify-content:flex-start!important}.justify-content-md-end{justify-content:flex-end!important}.justify-content-md-center{justify-content:center!important}.justify-content-md-between{justify-content:space-between!important}.justify-content-md-around{justify-content:space-around!important}.justify-content-md-evenly{justify-content:space-evenly!important}.align-items-md-start{align-items:flex-start!important}.align-items-md-end{align-items:flex-end!important}.align-items-md-center{align-items:center!important}.align-items-md-baseline{align-items:baseline!important}.align-items-md-stretch{align-items:stretch!important}.align-content-md-start{align-content:flex-start!important}.align-content-md-end{align-content:flex-end!important}.align-content-md-center{align-content:center!important}.align-content-md-between{align-content:space-between!important}.align-content-md-around{align-content:space-around!important}.align-content-md-stretch{align-content:stretch!important}.align-self-md-auto{align-self:auto!important}.align-self-md-start{align-self:flex-start!important}.align-self-md-end{align-self:flex-end!important}.align-self-md-center{align-self:center!important}.align-self-md-baseline{align-self:baseline!important}.align-self-md-stretch{align-self:stretch!important}.order-md-first{order:-1!important}.order-md-0{order:0!important}.order-md-1{order:1!important}.order-md-2{order:2!important}.order-md-3{order:3!important}.order-md-4{order:4!important}.order-md-5{order:5!important}.order-md-last{order:6!important}.m-md-0{margin:0!important}.m-md-1{margin:.25rem!important}.m-md-2{margin:.5rem!important}.m-md-3{margin:1rem!important}.m-md-4{margin:1.5rem!important}.m-md-5{margin:3rem!important}.m-md-auto{margin:auto!important}.mx-md-0{margin-right:0!important;margin-left:0!important}.mx-md-1{margin-right:.25rem!important;margin-left:.25rem!important}.mx-md-2{margin-right:.5rem!important;margin-left:.5rem!important}.mx-md-3{margin-right:1rem!important;margin-left:1rem!important}.mx-md-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-md-5{margin-right:3rem!important;margin-left:3rem!important}.mx-md-auto{margin-right:auto!important;margin-left:auto!important}.my-md-0{margin-top:0!important;margin-bottom:0!important}.my-md-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-md-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-md-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-md-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-md-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-md-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-md-0{margin-top:0!important}.mt-md-1{margin-top:.25rem!important}.mt-md-2{margin-top:.5rem!important}.mt-md-3{margin-top:1rem!important}.mt-md-4{margin-top:1.5rem!important}.mt-md-5{margin-top:3rem!important}.mt-md-auto{margin-top:auto!important}.me-md-0{margin-right:0!important}.me-md-1{margin-right:.25rem!important}.me-md-2{margin-right:.5rem!important}.me-md-3{margin-right:1rem!important}.me-md-4{margin-right:1.5rem!important}.me-md-5{margin-right:3rem!important}.me-md-auto{margin-right:auto!important}.mb-md-0{margin-bottom:0!important}.mb-md-1{margin-bottom:.25rem!important}.mb-md-2{margin-bottom:.5rem!important}.mb-md-3{margin-bottom:1rem!important}.mb-md-4{margin-bottom:1.5rem!important}.mb-md-5{margin-bottom:3rem!important}.mb-md-auto{margin-bottom:auto!important}.ms-md-0{margin-left:0!important}.ms-md-1{margin-left:.25rem!important}.ms-md-2{margin-left:.5rem!important}.ms-md-3{margin-left:1rem!important}.ms-md-4{margin-left:1.5rem!important}.ms-md-5{margin-left:3rem!important}.ms-md-auto{margin-left:auto!important}.p-md-0{padding:0!important}.p-md-1{padding:.25rem!important}.p-md-2{padding:.5rem!important}.p-md-3{padding:1rem!important}.p-md-4{padding:1.5rem!important}.p-md-5{padding:3rem!important}.px-md-0{padding-right:0!important;padding-left:0!important}.px-md-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-md-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-md-3{padding-right:1rem!important;padding-left:1rem!important}.px-md-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-md-5{padding-right:3rem!important;padding-left:3rem!important}.py-md-0{padding-top:0!important;padding-bottom:0!important}.py-md-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-md-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-md-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-md-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-md-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-md-0{padding-top:0!important}.pt-md-1{padding-top:.25rem!important}.pt-md-2{padding-top:.5rem!important}.pt-md-3{padding-top:1rem!important}.pt-md-4{padding-top:1.5rem!important}.pt-md-5{padding-top:3rem!important}.pe-md-0{padding-right:0!important}.pe-md-1{padding-right:.25rem!important}.pe-md-2{padding-right:.5rem!important}.pe-md-3{padding-right:1rem!important}.pe-md-4{padding-right:1.5rem!important}.pe-md-5{padding-right:3rem!important}.pb-md-0{padding-bottom:0!important}.pb-md-1{padding-bottom:.25rem!important}.pb-md-2{padding-bottom:.5rem!important}.pb-md-3{padding-bottom:1rem!important}.pb-md-4{padding-bottom:1.5rem!important}.pb-md-5{padding-bottom:3rem!important}.ps-md-0{padding-left:0!important}.ps-md-1{padding-left:.25rem!important}.ps-md-2{padding-left:.5rem!important}.ps-md-3{padding-left:1rem!important}.ps-md-4{padding-left:1.5rem!important}.ps-md-5{padding-left:3rem!important}.gap-md-0{gap:0!important}.gap-md-1{gap:.25rem!important}.gap-md-2{gap:.5rem!important}.gap-md-3{gap:1rem!important}.gap-md-4{gap:1.5rem!important}.gap-md-5{gap:3rem!important}.row-gap-md-0{row-gap:0!important}.row-gap-md-1{row-gap:.25rem!important}.row-gap-md-2{row-gap:.5rem!important}.row-gap-md-3{row-gap:1rem!important}.row-gap-md-4{row-gap:1.5rem!important}.row-gap-md-5{row-gap:3rem!important}.column-gap-md-0{-moz-column-gap:0!important;column-gap:0!important}.column-gap-md-1{-moz-column-gap:.25rem!important;column-gap:.25rem!important}.column-gap-md-2{-moz-column-gap:.5rem!important;column-gap:.5rem!important}.column-gap-md-3{-moz-column-gap:1rem!important;column-gap:1rem!important}.column-gap-md-4{-moz-column-gap:1.5rem!important;column-gap:1.5rem!important}.column-gap-md-5{-moz-column-gap:3rem!important;column-gap:3rem!important}.text-md-start{text-align:left!important}.text-md-end{text-align:right!important}.text-md-center{text-align:center!important}}@media (min-width:992px){.float-lg-start{float:left!important}.float-lg-end{float:right!important}.float-lg-none{float:none!important}.object-fit-lg-contain{-o-object-fit:contain!important;object-fit:contain!important}.object-fit-lg-cover{-o-object-fit:cover!important;object-fit:cover!important}.object-fit-lg-fill{-o-object-fit:fill!important;object-fit:fill!important}.object-fit-lg-scale{-o-object-fit:scale-down!important;object-fit:scale-down!important}.object-fit-lg-none{-o-object-fit:none!important;object-fit:none!important}.d-lg-inline{display:inline!important}.d-lg-inline-block{display:inline-block!important}.d-lg-block{display:block!important}.d-lg-grid{display:grid!important}.d-lg-inline-grid{display:inline-grid!important}.d-lg-table{display:table!important}.d-lg-table-row{display:table-row!important}.d-lg-table-cell{display:table-cell!important}.d-lg-flex{display:flex!important}.d-lg-inline-flex{display:inline-flex!important}.d-lg-none{display:none!important}.flex-lg-fill{flex:1 1 auto!important}.flex-lg-row{flex-direction:row!important}.flex-lg-column{flex-direction:column!important}.flex-lg-row-reverse{flex-direction:row-reverse!important}.flex-lg-column-reverse{flex-direction:column-reverse!important}.flex-lg-grow-0{flex-grow:0!important}.flex-lg-grow-1{flex-grow:1!important}.flex-lg-shrink-0{flex-shrink:0!important}.flex-lg-shrink-1{flex-shrink:1!important}.flex-lg-wrap{flex-wrap:wrap!important}.flex-lg-nowrap{flex-wrap:nowrap!important}.flex-lg-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-lg-start{justify-content:flex-start!important}.justify-content-lg-end{justify-content:flex-end!important}.justify-content-lg-center{justify-content:center!important}.justify-content-lg-between{justify-content:space-between!important}.justify-content-lg-around{justify-content:space-around!important}.justify-content-lg-evenly{justify-content:space-evenly!important}.align-items-lg-start{align-items:flex-start!important}.align-items-lg-end{align-items:flex-end!important}.align-items-lg-center{align-items:center!important}.align-items-lg-baseline{align-items:baseline!important}.align-items-lg-stretch{align-items:stretch!important}.align-content-lg-start{align-content:flex-start!important}.align-content-lg-end{align-content:flex-end!important}.align-content-lg-center{align-content:center!important}.align-content-lg-between{align-content:space-between!important}.align-content-lg-around{align-content:space-around!important}.align-content-lg-stretch{align-content:stretch!important}.align-self-lg-auto{align-self:auto!important}.align-self-lg-start{align-self:flex-start!important}.align-self-lg-end{align-self:flex-end!important}.align-self-lg-center{align-self:center!important}.align-self-lg-baseline{align-self:baseline!important}.align-self-lg-stretch{align-self:stretch!important}.order-lg-first{order:-1!important}.order-lg-0{order:0!important}.order-lg-1{order:1!important}.order-lg-2{order:2!important}.order-lg-3{order:3!important}.order-lg-4{order:4!important}.order-lg-5{order:5!important}.order-lg-last{order:6!important}.m-lg-0{margin:0!important}.m-lg-1{margin:.25rem!important}.m-lg-2{margin:.5rem!important}.m-lg-3{margin:1rem!important}.m-lg-4{margin:1.5rem!important}.m-lg-5{margin:3rem!important}.m-lg-auto{margin:auto!important}.mx-lg-0{margin-right:0!important;margin-left:0!important}.mx-lg-1{margin-right:.25rem!important;margin-left:.25rem!important}.mx-lg-2{margin-right:.5rem!important;margin-left:.5rem!important}.mx-lg-3{margin-right:1rem!important;margin-left:1rem!important}.mx-lg-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-lg-5{margin-right:3rem!important;margin-left:3rem!important}.mx-lg-auto{margin-right:auto!important;margin-left:auto!important}.my-lg-0{margin-top:0!important;margin-bottom:0!important}.my-lg-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-lg-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-lg-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-lg-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-lg-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-lg-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-lg-0{margin-top:0!important}.mt-lg-1{margin-top:.25rem!important}.mt-lg-2{margin-top:.5rem!important}.mt-lg-3{margin-top:1rem!important}.mt-lg-4{margin-top:1.5rem!important}.mt-lg-5{margin-top:3rem!important}.mt-lg-auto{margin-top:auto!important}.me-lg-0{margin-right:0!important}.me-lg-1{margin-right:.25rem!important}.me-lg-2{margin-right:.5rem!important}.me-lg-3{margin-right:1rem!important}.me-lg-4{margin-right:1.5rem!important}.me-lg-5{margin-right:3rem!important}.me-lg-auto{margin-right:auto!important}.mb-lg-0{margin-bottom:0!important}.mb-lg-1{margin-bottom:.25rem!important}.mb-lg-2{margin-bottom:.5rem!important}.mb-lg-3{margin-bottom:1rem!important}.mb-lg-4{margin-bottom:1.5rem!important}.mb-lg-5{margin-bottom:3rem!important}.mb-lg-auto{margin-bottom:auto!important}.ms-lg-0{margin-left:0!important}.ms-lg-1{margin-left:.25rem!important}.ms-lg-2{margin-left:.5rem!important}.ms-lg-3{margin-left:1rem!important}.ms-lg-4{margin-left:1.5rem!important}.ms-lg-5{margin-left:3rem!important}.ms-lg-auto{margin-left:auto!important}.p-lg-0{padding:0!important}.p-lg-1{padding:.25rem!important}.p-lg-2{padding:.5rem!important}.p-lg-3{padding:1rem!important}.p-lg-4{padding:1.5rem!important}.p-lg-5{padding:3rem!important}.px-lg-0{padding-right:0!important;padding-left:0!important}.px-lg-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-lg-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-lg-3{padding-right:1rem!important;padding-left:1rem!important}.px-lg-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-lg-5{padding-right:3rem!important;padding-left:3rem!important}.py-lg-0{padding-top:0!important;padding-bottom:0!important}.py-lg-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-lg-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-lg-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-lg-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-lg-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-lg-0{padding-top:0!important}.pt-lg-1{padding-top:.25rem!important}.pt-lg-2{padding-top:.5rem!important}.pt-lg-3{padding-top:1rem!important}.pt-lg-4{padding-top:1.5rem!important}.pt-lg-5{padding-top:3rem!important}.pe-lg-0{padding-right:0!important}.pe-lg-1{padding-right:.25rem!important}.pe-lg-2{padding-right:.5rem!important}.pe-lg-3{padding-right:1rem!important}.pe-lg-4{padding-right:1.5rem!important}.pe-lg-5{padding-right:3rem!important}.pb-lg-0{padding-bottom:0!important}.pb-lg-1{padding-bottom:.25rem!important}.pb-lg-2{padding-bottom:.5rem!important}.pb-lg-3{padding-bottom:1rem!important}.pb-lg-4{padding-bottom:1.5rem!important}.pb-lg-5{padding-bottom:3rem!important}.ps-lg-0{padding-left:0!important}.ps-lg-1{padding-left:.25rem!important}.ps-lg-2{padding-left:.5rem!important}.ps-lg-3{padding-left:1rem!important}.ps-lg-4{padding-left:1.5rem!important}.ps-lg-5{padding-left:3rem!important}.gap-lg-0{gap:0!important}.gap-lg-1{gap:.25rem!important}.gap-lg-2{gap:.5rem!important}.gap-lg-3{gap:1rem!important}.gap-lg-4{gap:1.5rem!important}.gap-lg-5{gap:3rem!important}.row-gap-lg-0{row-gap:0!important}.row-gap-lg-1{row-gap:.25rem!important}.row-gap-lg-2{row-gap:.5rem!important}.row-gap-lg-3{row-gap:1rem!important}.row-gap-lg-4{row-gap:1.5rem!important}.row-gap-lg-5{row-gap:3rem!important}.column-gap-lg-0{-moz-column-gap:0!important;column-gap:0!important}.column-gap-lg-1{-moz-column-gap:.25rem!important;column-gap:.25rem!important}.column-gap-lg-2{-moz-column-gap:.5rem!important;column-gap:.5rem!important}.column-gap-lg-3{-moz-column-gap:1rem!important;column-gap:1rem!important}.column-gap-lg-4{-moz-column-gap:1.5rem!important;column-gap:1.5rem!important}.column-gap-lg-5{-moz-column-gap:3rem!important;column-gap:3rem!important}.text-lg-start{text-align:left!important}.text-lg-end{text-align:right!important}.text-lg-center{text-align:center!important}}@media (min-width:1200px){.float-xl-start{float:left!important}.float-xl-end{float:right!important}.float-xl-none{float:none!important}.object-fit-xl-contain{-o-object-fit:contain!important;object-fit:contain!important}.object-fit-xl-cover{-o-object-fit:cover!important;object-fit:cover!important}.object-fit-xl-fill{-o-object-fit:fill!important;object-fit:fill!important}.object-fit-xl-scale{-o-object-fit:scale-down!important;object-fit:scale-down!important}.object-fit-xl-none{-o-object-fit:none!important;object-fit:none!important}.d-xl-inline{display:inline!important}.d-xl-inline-block{display:inline-block!important}.d-xl-block{display:block!important}.d-xl-grid{display:grid!important}.d-xl-inline-grid{display:inline-grid!important}.d-xl-table{display:table!important}.d-xl-table-row{display:table-row!important}.d-xl-table-cell{display:table-cell!important}.d-xl-flex{display:flex!important}.d-xl-inline-flex{display:inline-flex!important}.d-xl-none{display:none!important}.flex-xl-fill{flex:1 1 auto!important}.flex-xl-row{flex-direction:row!important}.flex-xl-column{flex-direction:column!important}.flex-xl-row-reverse{flex-direction:row-reverse!important}.flex-xl-column-reverse{flex-direction:column-reverse!important}.flex-xl-grow-0{flex-grow:0!important}.flex-xl-grow-1{flex-grow:1!important}.flex-xl-shrink-0{flex-shrink:0!important}.flex-xl-shrink-1{flex-shrink:1!important}.flex-xl-wrap{flex-wrap:wrap!important}.flex-xl-nowrap{flex-wrap:nowrap!important}.flex-xl-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-xl-start{justify-content:flex-start!important}.justify-content-xl-end{justify-content:flex-end!important}.justify-content-xl-center{justify-content:center!important}.justify-content-xl-between{justify-content:space-between!important}.justify-content-xl-around{justify-content:space-around!important}.justify-content-xl-evenly{justify-content:space-evenly!important}.align-items-xl-start{align-items:flex-start!important}.align-items-xl-end{align-items:flex-end!important}.align-items-xl-center{align-items:center!important}.align-items-xl-baseline{align-items:baseline!important}.align-items-xl-stretch{align-items:stretch!important}.align-content-xl-start{align-content:flex-start!important}.align-content-xl-end{align-content:flex-end!important}.align-content-xl-center{align-content:center!important}.align-content-xl-between{align-content:space-between!important}.align-content-xl-around{align-content:space-around!important}.align-content-xl-stretch{align-content:stretch!important}.align-self-xl-auto{align-self:auto!important}.align-self-xl-start{align-self:flex-start!important}.align-self-xl-end{align-self:flex-end!important}.align-self-xl-center{align-self:center!important}.align-self-xl-baseline{align-self:baseline!important}.align-self-xl-stretch{align-self:stretch!important}.order-xl-first{order:-1!important}.order-xl-0{order:0!important}.order-xl-1{order:1!important}.order-xl-2{order:2!important}.order-xl-3{order:3!important}.order-xl-4{order:4!important}.order-xl-5{order:5!important}.order-xl-last{order:6!important}.m-xl-0{margin:0!important}.m-xl-1{margin:.25rem!important}.m-xl-2{margin:.5rem!important}.m-xl-3{margin:1rem!important}.m-xl-4{margin:1.5rem!important}.m-xl-5{margin:3rem!important}.m-xl-auto{margin:auto!important}.mx-xl-0{margin-right:0!important;margin-left:0!important}.mx-xl-1{margin-right:.25rem!important;margin-left:.25rem!important}.mx-xl-2{margin-right:.5rem!important;margin-left:.5rem!important}.mx-xl-3{margin-right:1rem!important;margin-left:1rem!important}.mx-xl-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-xl-5{margin-right:3rem!important;margin-left:3rem!important}.mx-xl-auto{margin-right:auto!important;margin-left:auto!important}.my-xl-0{margin-top:0!important;margin-bottom:0!important}.my-xl-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-xl-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-xl-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-xl-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-xl-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-xl-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-xl-0{margin-top:0!important}.mt-xl-1{margin-top:.25rem!important}.mt-xl-2{margin-top:.5rem!important}.mt-xl-3{margin-top:1rem!important}.mt-xl-4{margin-top:1.5rem!important}.mt-xl-5{margin-top:3rem!important}.mt-xl-auto{margin-top:auto!important}.me-xl-0{margin-right:0!important}.me-xl-1{margin-right:.25rem!important}.me-xl-2{margin-right:.5rem!important}.me-xl-3{margin-right:1rem!important}.me-xl-4{margin-right:1.5rem!important}.me-xl-5{margin-right:3rem!important}.me-xl-auto{margin-right:auto!important}.mb-xl-0{margin-bottom:0!important}.mb-xl-1{margin-bottom:.25rem!important}.mb-xl-2{margin-bottom:.5rem!important}.mb-xl-3{margin-bottom:1rem!important}.mb-xl-4{margin-bottom:1.5rem!important}.mb-xl-5{margin-bottom:3rem!important}.mb-xl-auto{margin-bottom:auto!important}.ms-xl-0{margin-left:0!important}.ms-xl-1{margin-left:.25rem!important}.ms-xl-2{margin-left:.5rem!important}.ms-xl-3{margin-left:1rem!important}.ms-xl-4{margin-left:1.5rem!important}.ms-xl-5{margin-left:3rem!important}.ms-xl-auto{margin-left:auto!important}.p-xl-0{padding:0!important}.p-xl-1{padding:.25rem!important}.p-xl-2{padding:.5rem!important}.p-xl-3{padding:1rem!important}.p-xl-4{padding:1.5rem!important}.p-xl-5{padding:3rem!important}.px-xl-0{padding-right:0!important;padding-left:0!important}.px-xl-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-xl-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-xl-3{padding-right:1rem!important;padding-left:1rem!important}.px-xl-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-xl-5{padding-right:3rem!important;padding-left:3rem!important}.py-xl-0{padding-top:0!important;padding-bottom:0!important}.py-xl-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-xl-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-xl-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-xl-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-xl-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-xl-0{padding-top:0!important}.pt-xl-1{padding-top:.25rem!important}.pt-xl-2{padding-top:.5rem!important}.pt-xl-3{padding-top:1rem!important}.pt-xl-4{padding-top:1.5rem!important}.pt-xl-5{padding-top:3rem!important}.pe-xl-0{padding-right:0!important}.pe-xl-1{padding-right:.25rem!important}.pe-xl-2{padding-right:.5rem!important}.pe-xl-3{padding-right:1rem!important}.pe-xl-4{padding-right:1.5rem!important}.pe-xl-5{padding-right:3rem!important}.pb-xl-0{padding-bottom:0!important}.pb-xl-1{padding-bottom:.25rem!important}.pb-xl-2{padding-bottom:.5rem!important}.pb-xl-3{padding-bottom:1rem!important}.pb-xl-4{padding-bottom:1.5rem!important}.pb-xl-5{padding-bottom:3rem!important}.ps-xl-0{padding-left:0!important}.ps-xl-1{padding-left:.25rem!important}.ps-xl-2{padding-left:.5rem!important}.ps-xl-3{padding-left:1rem!important}.ps-xl-4{padding-left:1.5rem!important}.ps-xl-5{padding-left:3rem!important}.gap-xl-0{gap:0!important}.gap-xl-1{gap:.25rem!important}.gap-xl-2{gap:.5rem!important}.gap-xl-3{gap:1rem!important}.gap-xl-4{gap:1.5rem!important}.gap-xl-5{gap:3rem!important}.row-gap-xl-0{row-gap:0!important}.row-gap-xl-1{row-gap:.25rem!important}.row-gap-xl-2{row-gap:.5rem!important}.row-gap-xl-3{row-gap:1rem!important}.row-gap-xl-4{row-gap:1.5rem!important}.row-gap-xl-5{row-gap:3rem!important}.column-gap-xl-0{-moz-column-gap:0!important;column-gap:0!important}.column-gap-xl-1{-moz-column-gap:.25rem!important;column-gap:.25rem!important}.column-gap-xl-2{-moz-column-gap:.5rem!important;column-gap:.5rem!important}.column-gap-xl-3{-moz-column-gap:1rem!important;column-gap:1rem!important}.column-gap-xl-4{-moz-column-gap:1.5rem!important;column-gap:1.5rem!important}.column-gap-xl-5{-moz-column-gap:3rem!important;column-gap:3rem!important}.text-xl-start{text-align:left!important}.text-xl-end{text-align:right!important}.text-xl-center{text-align:center!important}}@media (min-width:1400px){.float-xxl-start{float:left!important}.float-xxl-end{float:right!important}.float-xxl-none{float:none!important}.object-fit-xxl-contain{-o-object-fit:contain!important;object-fit:contain!important}.object-fit-xxl-cover{-o-object-fit:cover!important;object-fit:cover!important}.object-fit-xxl-fill{-o-object-fit:fill!important;object-fit:fill!important}.object-fit-xxl-scale{-o-object-fit:scale-down!important;object-fit:scale-down!important}.object-fit-xxl-none{-o-object-fit:none!important;object-fit:none!important}.d-xxl-inline{display:inline!important}.d-xxl-inline-block{display:inline-block!important}.d-xxl-block{display:block!important}.d-xxl-grid{display:grid!important}.d-xxl-inline-grid{display:inline-grid!important}.d-xxl-table{display:table!important}.d-xxl-table-row{display:table-row!important}.d-xxl-table-cell{display:table-cell!important}.d-xxl-flex{display:flex!important}.d-xxl-inline-flex{display:inline-flex!important}.d-xxl-none{display:none!important}.flex-xxl-fill{flex:1 1 auto!important}.flex-xxl-row{flex-direction:row!important}.flex-xxl-column{flex-direction:column!important}.flex-xxl-row-reverse{flex-direction:row-reverse!important}.flex-xxl-column-reverse{flex-direction:column-reverse!important}.flex-xxl-grow-0{flex-grow:0!important}.flex-xxl-grow-1{flex-grow:1!important}.flex-xxl-shrink-0{flex-shrink:0!important}.flex-xxl-shrink-1{flex-shrink:1!important}.flex-xxl-wrap{flex-wrap:wrap!important}.flex-xxl-nowrap{flex-wrap:nowrap!important}.flex-xxl-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-xxl-start{justify-content:flex-start!important}.justify-content-xxl-end{justify-content:flex-end!important}.justify-content-xxl-center{justify-content:center!important}.justify-content-xxl-between{justify-content:space-between!important}.justify-content-xxl-around{justify-content:space-around!important}.justify-content-xxl-evenly{justify-content:space-evenly!important}.align-items-xxl-start{align-items:flex-start!important}.align-items-xxl-end{align-items:flex-end!important}.align-items-xxl-center{align-items:center!important}.align-items-xxl-baseline{align-items:baseline!important}.align-items-xxl-stretch{align-items:stretch!important}.align-content-xxl-start{align-content:flex-start!important}.align-content-xxl-end{align-content:flex-end!important}.align-content-xxl-center{align-content:center!important}.align-content-xxl-between{align-content:space-between!important}.align-content-xxl-around{align-content:space-around!important}.align-content-xxl-stretch{align-content:stretch!important}.align-self-xxl-auto{align-self:auto!important}.align-self-xxl-start{align-self:flex-start!important}.align-self-xxl-end{align-self:flex-end!important}.align-self-xxl-center{align-self:center!important}.align-self-xxl-baseline{align-self:baseline!important}.align-self-xxl-stretch{align-self:stretch!important}.order-xxl-first{order:-1!important}.order-xxl-0{order:0!important}.order-xxl-1{order:1!important}.order-xxl-2{order:2!important}.order-xxl-3{order:3!important}.order-xxl-4{order:4!important}.order-xxl-5{order:5!important}.order-xxl-last{order:6!important}.m-xxl-0{margin:0!important}.m-xxl-1{margin:.25rem!important}.m-xxl-2{margin:.5rem!important}.m-xxl-3{margin:1rem!important}.m-xxl-4{margin:1.5rem!important}.m-xxl-5{margin:3rem!important}.m-xxl-auto{margin:auto!important}.mx-xxl-0{margin-right:0!important;margin-left:0!important}.mx-xxl-1{margin-right:.25rem!important;margin-left:.25rem!important}.mx-xxl-2{margin-right:.5rem!important;margin-left:.5rem!important}.mx-xxl-3{margin-right:1rem!important;margin-left:1rem!important}.mx-xxl-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-xxl-5{margin-right:3rem!important;margin-left:3rem!important}.mx-xxl-auto{margin-right:auto!important;margin-left:auto!important}.my-xxl-0{margin-top:0!important;margin-bottom:0!important}.my-xxl-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-xxl-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-xxl-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-xxl-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-xxl-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-xxl-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-xxl-0{margin-top:0!important}.mt-xxl-1{margin-top:.25rem!important}.mt-xxl-2{margin-top:.5rem!important}.mt-xxl-3{margin-top:1rem!important}.mt-xxl-4{margin-top:1.5rem!important}.mt-xxl-5{margin-top:3rem!important}.mt-xxl-auto{margin-top:auto!important}.me-xxl-0{margin-right:0!important}.me-xxl-1{margin-right:.25rem!important}.me-xxl-2{margin-right:.5rem!important}.me-xxl-3{margin-right:1rem!important}.me-xxl-4{margin-right:1.5rem!important}.me-xxl-5{margin-right:3rem!important}.me-xxl-auto{margin-right:auto!important}.mb-xxl-0{margin-bottom:0!important}.mb-xxl-1{margin-bottom:.25rem!important}.mb-xxl-2{margin-bottom:.5rem!important}.mb-xxl-3{margin-bottom:1rem!important}.mb-xxl-4{margin-bottom:1.5rem!important}.mb-xxl-5{margin-bottom:3rem!important}.mb-xxl-auto{margin-bottom:auto!important}.ms-xxl-0{margin-left:0!important}.ms-xxl-1{margin-left:.25rem!important}.ms-xxl-2{margin-left:.5rem!important}.ms-xxl-3{margin-left:1rem!important}.ms-xxl-4{margin-left:1.5rem!important}.ms-xxl-5{margin-left:3rem!important}.ms-xxl-auto{margin-left:auto!important}.p-xxl-0{padding:0!important}.p-xxl-1{padding:.25rem!important}.p-xxl-2{padding:.5rem!important}.p-xxl-3{padding:1rem!important}.p-xxl-4{padding:1.5rem!important}.p-xxl-5{padding:3rem!important}.px-xxl-0{padding-right:0!important;padding-left:0!important}.px-xxl-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-xxl-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-xxl-3{padding-right:1rem!important;padding-left:1rem!important}.px-xxl-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-xxl-5{padding-right:3rem!important;padding-left:3rem!important}.py-xxl-0{padding-top:0!important;padding-bottom:0!important}.py-xxl-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-xxl-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-xxl-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-xxl-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-xxl-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-xxl-0{padding-top:0!important}.pt-xxl-1{padding-top:.25rem!important}.pt-xxl-2{padding-top:.5rem!important}.pt-xxl-3{padding-top:1rem!important}.pt-xxl-4{padding-top:1.5rem!important}.pt-xxl-5{padding-top:3rem!important}.pe-xxl-0{padding-right:0!important}.pe-xxl-1{padding-right:.25rem!important}.pe-xxl-2{padding-right:.5rem!important}.pe-xxl-3{padding-right:1rem!important}.pe-xxl-4{padding-right:1.5rem!important}.pe-xxl-5{padding-right:3rem!important}.pb-xxl-0{padding-bottom:0!important}.pb-xxl-1{padding-bottom:.25rem!important}.pb-xxl-2{padding-bottom:.5rem!important}.pb-xxl-3{padding-bottom:1rem!important}.pb-xxl-4{padding-bottom:1.5rem!important}.pb-xxl-5{padding-bottom:3rem!important}.ps-xxl-0{padding-left:0!important}.ps-xxl-1{padding-left:.25rem!important}.ps-xxl-2{padding-left:.5rem!important}.ps-xxl-3{padding-left:1rem!important}.ps-xxl-4{padding-left:1.5rem!important}.ps-xxl-5{padding-left:3rem!important}.gap-xxl-0{gap:0!important}.gap-xxl-1{gap:.25rem!important}.gap-xxl-2{gap:.5rem!important}.gap-xxl-3{gap:1rem!important}.gap-xxl-4{gap:1.5rem!important}.gap-xxl-5{gap:3rem!important}.row-gap-xxl-0{row-gap:0!important}.row-gap-xxl-1{row-gap:.25rem!important}.row-gap-xxl-2{row-gap:.5rem!important}.row-gap-xxl-3{row-gap:1rem!important}.row-gap-xxl-4{row-gap:1.5rem!important}.row-gap-xxl-5{row-gap:3rem!important}.column-gap-xxl-0{-moz-column-gap:0!important;column-gap:0!important}.column-gap-xxl-1{-moz-column-gap:.25rem!important;column-gap:.25rem!important}.column-gap-xxl-2{-moz-column-gap:.5rem!important;column-gap:.5rem!important}.column-gap-xxl-3{-moz-column-gap:1rem!important;column-gap:1rem!important}.column-gap-xxl-4{-moz-column-gap:1.5rem!important;column-gap:1.5rem!important}.column-gap-xxl-5{-moz-column-gap:3rem!important;column-gap:3rem!important}.text-xxl-start{text-align:left!important}.text-xxl-end{text-align:right!important}.text-xxl-center{text-align:center!important}}@media (min-width:1200px){.fs-1{font-size:2.5rem!important}.fs-2{font-size:2rem!important}.fs-3{font-size:1.75rem!important}.fs-4{font-size:1.5rem!important}}@media print{.d-print-inline{display:inline!important}.d-print-inline-block{display:inline-block!important}.d-print-block{display:block!important}.d-print-grid{display:grid!important}.d-print-inline-grid{display:inline-grid!important}.d-print-table{display:table!important}.d-print-table-row{display:table-row!important}.d-print-table-cell{display:table-cell!important}.d-print-flex{display:flex!important}.d-print-inline-flex{display:inline-flex!important}.d-print-none{display:none!important}}
`, Zm = `:root{--pal-v1-status-e-200: #4caf50;--pal-v1-neutrals-300: #cccccc;--pal-v1-text-600: #333333;--pal-v1-accent-500: #ff5722}.wrapper{display:flex;flex-direction:column;align-items:center;height:100vh;background-color:#000}.wrapper h1,h2,h5{color:var(--pal-v1-accent-500);margin-block:12px}.scheduling-container{font-family:Arial,sans-serif;width:80%;margin:0 auto}.table-wrapper{width:100%;overflow-x:auto;-ms-overflow-style:none;scrollbar-width:none}.table-wrapper::-webkit-scrollbar{display:none}table{width:100%;border:1px solid var(--pal-v1-neutrals-300);font-size:1rem;border-collapse:collapse;color:#fff}table thead{background-color:var(--pal-v1-accent-500)}table tr{border-top:1px solid var(--pal-v1-text-600);transition:all ease-in-out .1s}table th{text-align:left;padding:1rem}table td{padding:1rem}table tr:not(.checked-row):not(.unchecked-row):not(thead > tr):hover{background-color:var(--pal-v1-accent-500)}.checked-row{background-color:red}.unchecked-row{background-color:green}.road-block-checkbox{margin-right:.5rem}
`;
class pc extends os.Component {
  render() {
    return /* @__PURE__ */ U.jsxs("div", { className: "wrapper", children: [
      /* @__PURE__ */ U.jsx("h2", { children: "Road Blocks" }),
      /* @__PURE__ */ U.jsx(mc, { proxy: this.props.proxy })
    ] });
  }
}
Di(pc, "propTypes", {
  events: Ht.string,
  proxy: Ht.string
});
function mc(r) {
  const [t, e] = Gt.useState([]);
  Gt.useState(!1), Gt.useEffect(() => {
    o().then((i) => e(i));
  }, []);
  async function o() {
    return await (await fetch(`${r.proxy}/road/status`)).json();
  }
  function n(i) {
    const l = t.map((s, c) => c === i ? { ...s, inUse: !s.inUse } : s);
    e(l);
    for (const s of l)
      fetch(`${r.proxy}/road/status`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ road: s.road, inUse: s.inUse })
      });
  }
  function a() {
    window.location.reload();
  }
  return /* @__PURE__ */ U.jsxs("div", { children: [
    /* @__PURE__ */ U.jsx("style", { children: Xm }),
    /* @__PURE__ */ U.jsx("style", { children: Zm }),
    /* @__PURE__ */ U.jsx("div", { className: "container", children: /* @__PURE__ */ U.jsxs("div", { className: "row", children: [
      /* @__PURE__ */ U.jsx("div", { className: "col", children: /* @__PURE__ */ U.jsx("div", { className: "table-responsive", children: /* @__PURE__ */ U.jsxs("table", { className: "table table-bordered table-hover text-white", children: [
        /* @__PURE__ */ U.jsx("thead", { children: /* @__PURE__ */ U.jsxs("tr", { children: [
          /* @__PURE__ */ U.jsx("th", { children: "Road" }),
          /* @__PURE__ */ U.jsx("th", { children: "Status" })
        ] }) }),
        /* @__PURE__ */ U.jsx("tbody", { children: t.map((i, l) => /* @__PURE__ */ U.jsxs(
          "tr",
          {
            className: i.inUse ? "table-success" : "table-danger",
            children: [
              /* @__PURE__ */ U.jsx("td", { children: i.road }),
              /* @__PURE__ */ U.jsx("td", { children: /* @__PURE__ */ U.jsx("div", { className: "form-check form-switch", children: /* @__PURE__ */ U.jsx(
                "input",
                {
                  className: "form-check-input",
                  type: "checkbox",
                  id: `roadBlock-${l}`,
                  checked: i.inUse,
                  onChange: () => n(l)
                }
              ) }) })
            ]
          },
          l
        )) })
      ] }) }) }),
      /* @__PURE__ */ U.jsx("button", { type: "button", class: "btn btn-success", onClick: a, children: "Apply Changes" })
    ] }) })
  ] });
}
mc.propTypes = {
  roadBlocks: Ht.arrayOf(
    Ht.shape({
      road: Ht.string.isRequired,
      inUse: Ht.bool.isRequired
    })
  ).isRequired
};
const qm = Km(pc, os, Um, {
  dashStyleAttributes: !0
});
export {
  qm as default
};
