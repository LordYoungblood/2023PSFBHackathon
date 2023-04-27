var Em = Object.defineProperty;
var Cm = (e, t, n) => t in e ? Em(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Mc = (e, t, n) => (Cm(e, typeof t != "symbol" ? t + "" : t, n), n);
var xm = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Xf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Gf = { exports: {} }, sl = {}, Zf = { exports: {} }, Z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Li = Symbol.for("react.element"), Tm = Symbol.for("react.portal"), Om = Symbol.for("react.fragment"), Nm = Symbol.for("react.strict_mode"), Pm = Symbol.for("react.profiler"), Lm = Symbol.for("react.provider"), Am = Symbol.for("react.context"), Dm = Symbol.for("react.forward_ref"), zm = Symbol.for("react.suspense"), jm = Symbol.for("react.memo"), Im = Symbol.for("react.lazy"), Rc = Symbol.iterator;
function Mm(e) {
  return e === null || typeof e != "object" ? null : (e = Rc && e[Rc] || e["@@iterator"], typeof e == "function" ? e : null);
}
var qf = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Jf = Object.assign, ed = {};
function Ar(e, t, n) {
  this.props = e, this.context = t, this.refs = ed, this.updater = n || qf;
}
Ar.prototype.isReactComponent = {};
Ar.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ar.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function td() {
}
td.prototype = Ar.prototype;
function mu(e, t, n) {
  this.props = e, this.context = t, this.refs = ed, this.updater = n || qf;
}
var gu = mu.prototype = new td();
gu.constructor = mu;
Jf(gu, Ar.prototype);
gu.isPureReactComponent = !0;
var bc = Array.isArray, nd = Object.prototype.hasOwnProperty, vu = { current: null }, rd = { key: !0, ref: !0, __self: !0, __source: !0 };
function id(e, t, n) {
  var r, o = {}, l = null, u = null;
  if (t != null)
    for (r in t.ref !== void 0 && (u = t.ref), t.key !== void 0 && (l = "" + t.key), t)
      nd.call(t, r) && !rd.hasOwnProperty(r) && (o[r] = t[r]);
  var f = arguments.length - 2;
  if (f === 1)
    o.children = n;
  else if (1 < f) {
    for (var d = Array(f), h = 0; h < f; h++)
      d[h] = arguments[h + 2];
    o.children = d;
  }
  if (e && e.defaultProps)
    for (r in f = e.defaultProps, f)
      o[r] === void 0 && (o[r] = f[r]);
  return { $$typeof: Li, type: e, key: l, ref: u, props: o, _owner: vu.current };
}
function Rm(e, t) {
  return { $$typeof: Li, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function yu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Li;
}
function bm(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Fc = /\/+/g;
function Gl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? bm("" + e.key) : t.toString(36);
}
function Co(e, t, n, r, o) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var u = !1;
  if (e === null)
    u = !0;
  else
    switch (l) {
      case "string":
      case "number":
        u = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Li:
          case Tm:
            u = !0;
        }
    }
  if (u)
    return u = e, o = o(u), e = r === "" ? "." + Gl(u, 0) : r, bc(o) ? (n = "", e != null && (n = e.replace(Fc, "$&/") + "/"), Co(o, t, n, "", function(h) {
      return h;
    })) : o != null && (yu(o) && (o = Rm(o, n + (!o.key || u && u.key === o.key ? "" : ("" + o.key).replace(Fc, "$&/") + "/") + e)), t.push(o)), 1;
  if (u = 0, r = r === "" ? "." : r + ":", bc(e))
    for (var f = 0; f < e.length; f++) {
      l = e[f];
      var d = r + Gl(l, f);
      u += Co(l, t, n, d, o);
    }
  else if (d = Mm(e), typeof d == "function")
    for (e = d.call(e), f = 0; !(l = e.next()).done; )
      l = l.value, d = r + Gl(l, f++), u += Co(l, t, n, d, o);
  else if (l === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return u;
}
function oo(e, t, n) {
  if (e == null)
    return e;
  var r = [], o = 0;
  return Co(e, r, "", "", function(l) {
    return t.call(n, l, o++);
  }), r;
}
function Fm(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1)
    return e._result.default;
  throw e._result;
}
var We = { current: null }, xo = { transition: null }, $m = { ReactCurrentDispatcher: We, ReactCurrentBatchConfig: xo, ReactCurrentOwner: vu };
Z.Children = { map: oo, forEach: function(e, t, n) {
  oo(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return oo(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return oo(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!yu(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
Z.Component = Ar;
Z.Fragment = Om;
Z.Profiler = Pm;
Z.PureComponent = mu;
Z.StrictMode = Nm;
Z.Suspense = zm;
Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $m;
Z.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Jf({}, e.props), o = e.key, l = e.ref, u = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (l = t.ref, u = vu.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
      var f = e.type.defaultProps;
    for (d in t)
      nd.call(t, d) && !rd.hasOwnProperty(d) && (r[d] = t[d] === void 0 && f !== void 0 ? f[d] : t[d]);
  }
  var d = arguments.length - 2;
  if (d === 1)
    r.children = n;
  else if (1 < d) {
    f = Array(d);
    for (var h = 0; h < d; h++)
      f[h] = arguments[h + 2];
    r.children = f;
  }
  return { $$typeof: Li, type: e.type, key: o, ref: l, props: r, _owner: u };
};
Z.createContext = function(e) {
  return e = { $$typeof: Am, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Lm, _context: e }, e.Consumer = e;
};
Z.createElement = id;
Z.createFactory = function(e) {
  var t = id.bind(null, e);
  return t.type = e, t;
};
Z.createRef = function() {
  return { current: null };
};
Z.forwardRef = function(e) {
  return { $$typeof: Dm, render: e };
};
Z.isValidElement = yu;
Z.lazy = function(e) {
  return { $$typeof: Im, _payload: { _status: -1, _result: e }, _init: Fm };
};
Z.memo = function(e, t) {
  return { $$typeof: jm, type: e, compare: t === void 0 ? null : t };
};
Z.startTransition = function(e) {
  var t = xo.transition;
  xo.transition = {};
  try {
    e();
  } finally {
    xo.transition = t;
  }
};
Z.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
Z.useCallback = function(e, t) {
  return We.current.useCallback(e, t);
};
Z.useContext = function(e) {
  return We.current.useContext(e);
};
Z.useDebugValue = function() {
};
Z.useDeferredValue = function(e) {
  return We.current.useDeferredValue(e);
};
Z.useEffect = function(e, t) {
  return We.current.useEffect(e, t);
};
Z.useId = function() {
  return We.current.useId();
};
Z.useImperativeHandle = function(e, t, n) {
  return We.current.useImperativeHandle(e, t, n);
};
Z.useInsertionEffect = function(e, t) {
  return We.current.useInsertionEffect(e, t);
};
Z.useLayoutEffect = function(e, t) {
  return We.current.useLayoutEffect(e, t);
};
Z.useMemo = function(e, t) {
  return We.current.useMemo(e, t);
};
Z.useReducer = function(e, t, n) {
  return We.current.useReducer(e, t, n);
};
Z.useRef = function(e) {
  return We.current.useRef(e);
};
Z.useState = function(e) {
  return We.current.useState(e);
};
Z.useSyncExternalStore = function(e, t, n) {
  return We.current.useSyncExternalStore(e, t, n);
};
Z.useTransition = function() {
  return We.current.useTransition();
};
Z.version = "18.2.0";
Zf.exports = Z;
var di = Zf.exports;
const od = /* @__PURE__ */ Xf(di);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Um = di, Hm = Symbol.for("react.element"), Bm = Symbol.for("react.fragment"), Wm = Object.prototype.hasOwnProperty, Vm = Um.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Qm = { key: !0, ref: !0, __self: !0, __source: !0 };
function ld(e, t, n) {
  var r, o = {}, l = null, u = null;
  n !== void 0 && (l = "" + n), t.key !== void 0 && (l = "" + t.key), t.ref !== void 0 && (u = t.ref);
  for (r in t)
    Wm.call(t, r) && !Qm.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Hm, type: e, key: l, ref: u, props: o, _owner: Vm.current };
}
sl.Fragment = Bm;
sl.jsx = ld;
sl.jsxs = ld;
Gf.exports = sl;
var pe = Gf.exports, Ss = {}, sd = { exports: {} }, lt = {}, ud = { exports: {} }, ad = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(z, B) {
    var _ = z.length;
    z.push(B);
    e:
      for (; 0 < _; ) {
        var ae = _ - 1 >>> 1, we = z[ae];
        if (0 < o(we, B))
          z[ae] = B, z[_] = we, _ = ae;
        else
          break e;
      }
  }
  function n(z) {
    return z.length === 0 ? null : z[0];
  }
  function r(z) {
    if (z.length === 0)
      return null;
    var B = z[0], _ = z.pop();
    if (_ !== B) {
      z[0] = _;
      e:
        for (var ae = 0, we = z.length, Zt = we >>> 1; ae < Zt; ) {
          var Le = 2 * (ae + 1) - 1, Mt = z[Le], Ce = Le + 1, qt = z[Ce];
          if (0 > o(Mt, _))
            Ce < we && 0 > o(qt, Mt) ? (z[ae] = qt, z[Ce] = _, ae = Ce) : (z[ae] = Mt, z[Le] = _, ae = Le);
          else if (Ce < we && 0 > o(qt, _))
            z[ae] = qt, z[Ce] = _, ae = Ce;
          else
            break e;
        }
    }
    return B;
  }
  function o(z, B) {
    var _ = z.sortIndex - B.sortIndex;
    return _ !== 0 ? _ : z.id - B.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function() {
      return l.now();
    };
  } else {
    var u = Date, f = u.now();
    e.unstable_now = function() {
      return u.now() - f;
    };
  }
  var d = [], h = [], S = 1, E = null, w = 3, N = !1, P = !1, L = !1, G = typeof setTimeout == "function" ? setTimeout : null, g = typeof clearTimeout == "function" ? clearTimeout : null, p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(z) {
    for (var B = n(h); B !== null; ) {
      if (B.callback === null)
        r(h);
      else if (B.startTime <= z)
        r(h), B.sortIndex = B.expirationTime, t(d, B);
      else
        break;
      B = n(h);
    }
  }
  function x(z) {
    if (L = !1, y(z), !P)
      if (n(d) !== null)
        P = !0, Vn(D);
      else {
        var B = n(h);
        B !== null && Sn(x, B.startTime - z);
      }
  }
  function D(z, B) {
    P = !1, L && (L = !1, g(F), F = -1), N = !0;
    var _ = w;
    try {
      for (y(B), E = n(d); E !== null && (!(E.expirationTime > B) || z && !Ze()); ) {
        var ae = E.callback;
        if (typeof ae == "function") {
          E.callback = null, w = E.priorityLevel;
          var we = ae(E.expirationTime <= B);
          B = e.unstable_now(), typeof we == "function" ? E.callback = we : E === n(d) && r(d), y(B);
        } else
          r(d);
        E = n(d);
      }
      if (E !== null)
        var Zt = !0;
      else {
        var Le = n(h);
        Le !== null && Sn(x, Le.startTime - B), Zt = !1;
      }
      return Zt;
    } finally {
      E = null, w = _, N = !1;
    }
  }
  var R = !1, b = null, F = -1, de = 5, Y = -1;
  function Ze() {
    return !(e.unstable_now() - Y < de);
  }
  function Xt() {
    if (b !== null) {
      var z = e.unstable_now();
      Y = z;
      var B = !0;
      try {
        B = b(!0, z);
      } finally {
        B ? Gt() : (R = !1, b = null);
      }
    } else
      R = !1;
  }
  var Gt;
  if (typeof p == "function")
    Gt = function() {
      p(Xt);
    };
  else if (typeof MessageChannel < "u") {
    var jr = new MessageChannel(), Ii = jr.port2;
    jr.port1.onmessage = Xt, Gt = function() {
      Ii.postMessage(null);
    };
  } else
    Gt = function() {
      G(Xt, 0);
    };
  function Vn(z) {
    b = z, R || (R = !0, Gt());
  }
  function Sn(z, B) {
    F = G(function() {
      z(e.unstable_now());
    }, B);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(z) {
    z.callback = null;
  }, e.unstable_continueExecution = function() {
    P || N || (P = !0, Vn(D));
  }, e.unstable_forceFrameRate = function(z) {
    0 > z || 125 < z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : de = 0 < z ? Math.floor(1e3 / z) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return w;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(d);
  }, e.unstable_next = function(z) {
    switch (w) {
      case 1:
      case 2:
      case 3:
        var B = 3;
        break;
      default:
        B = w;
    }
    var _ = w;
    w = B;
    try {
      return z();
    } finally {
      w = _;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(z, B) {
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
    var _ = w;
    w = z;
    try {
      return B();
    } finally {
      w = _;
    }
  }, e.unstable_scheduleCallback = function(z, B, _) {
    var ae = e.unstable_now();
    switch (typeof _ == "object" && _ !== null ? (_ = _.delay, _ = typeof _ == "number" && 0 < _ ? ae + _ : ae) : _ = ae, z) {
      case 1:
        var we = -1;
        break;
      case 2:
        we = 250;
        break;
      case 5:
        we = 1073741823;
        break;
      case 4:
        we = 1e4;
        break;
      default:
        we = 5e3;
    }
    return we = _ + we, z = { id: S++, callback: B, priorityLevel: z, startTime: _, expirationTime: we, sortIndex: -1 }, _ > ae ? (z.sortIndex = _, t(h, z), n(d) === null && z === n(h) && (L ? (g(F), F = -1) : L = !0, Sn(x, _ - ae))) : (z.sortIndex = we, t(d, z), P || N || (P = !0, Vn(D))), z;
  }, e.unstable_shouldYield = Ze, e.unstable_wrapCallback = function(z) {
    var B = w;
    return function() {
      var _ = w;
      w = B;
      try {
        return z.apply(this, arguments);
      } finally {
        w = _;
      }
    };
  };
})(ad);
ud.exports = ad;
var Km = ud.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cd = di, ot = Km;
function T(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var fd = /* @__PURE__ */ new Set(), pi = {};
function Bn(e, t) {
  Cr(e, t), Cr(e + "Capture", t);
}
function Cr(e, t) {
  for (pi[e] = t, e = 0; e < t.length; e++)
    fd.add(t[e]);
}
var Wt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Es = Object.prototype.hasOwnProperty, Ym = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, $c = {}, Uc = {};
function Xm(e) {
  return Es.call(Uc, e) ? !0 : Es.call($c, e) ? !1 : Ym.test(e) ? Uc[e] = !0 : ($c[e] = !0, !1);
}
function Gm(e, t, n, r) {
  if (n !== null && n.type === 0)
    return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Zm(e, t, n, r) {
  if (t === null || typeof t > "u" || Gm(e, t, n, r))
    return !0;
  if (r)
    return !1;
  if (n !== null)
    switch (n.type) {
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
function Ve(e, t, n, r, o, l, u) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = u;
}
var ze = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ze[e] = new Ve(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ze[t] = new Ve(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ze[e] = new Ve(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ze[e] = new Ve(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ze[e] = new Ve(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ze[e] = new Ve(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ze[e] = new Ve(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ze[e] = new Ve(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ze[e] = new Ve(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var _u = /[\-:]([a-z])/g;
function wu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    _u,
    wu
  );
  ze[t] = new Ve(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(_u, wu);
  ze[t] = new Ve(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(_u, wu);
  ze[t] = new Ve(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ze[e] = new Ve(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ze.xlinkHref = new Ve("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ze[e] = new Ve(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ku(e, t, n, r) {
  var o = ze.hasOwnProperty(t) ? ze[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Zm(t, n, o, r) && (n = null), r || o === null ? Xm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Yt = cd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, lo = Symbol.for("react.element"), or = Symbol.for("react.portal"), lr = Symbol.for("react.fragment"), Su = Symbol.for("react.strict_mode"), Cs = Symbol.for("react.profiler"), dd = Symbol.for("react.provider"), pd = Symbol.for("react.context"), Eu = Symbol.for("react.forward_ref"), xs = Symbol.for("react.suspense"), Ts = Symbol.for("react.suspense_list"), Cu = Symbol.for("react.memo"), nn = Symbol.for("react.lazy"), hd = Symbol.for("react.offscreen"), Hc = Symbol.iterator;
function Vr(e) {
  return e === null || typeof e != "object" ? null : (e = Hc && e[Hc] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ve = Object.assign, Zl;
function Jr(e) {
  if (Zl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Zl = t && t[1] || "";
    }
  return `
` + Zl + e;
}
var ql = !1;
function Jl(e, t) {
  if (!e || ql)
    return "";
  ql = !0;
  var n = Error.prepareStackTrace;
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
        } catch (h) {
          var r = h;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (h) {
          r = h;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (h) {
        r = h;
      }
      e();
    }
  } catch (h) {
    if (h && r && typeof h.stack == "string") {
      for (var o = h.stack.split(`
`), l = r.stack.split(`
`), u = o.length - 1, f = l.length - 1; 1 <= u && 0 <= f && o[u] !== l[f]; )
        f--;
      for (; 1 <= u && 0 <= f; u--, f--)
        if (o[u] !== l[f]) {
          if (u !== 1 || f !== 1)
            do
              if (u--, f--, 0 > f || o[u] !== l[f]) {
                var d = `
` + o[u].replace(" at new ", " at ");
                return e.displayName && d.includes("<anonymous>") && (d = d.replace("<anonymous>", e.displayName)), d;
              }
            while (1 <= u && 0 <= f);
          break;
        }
    }
  } finally {
    ql = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Jr(e) : "";
}
function qm(e) {
  switch (e.tag) {
    case 5:
      return Jr(e.type);
    case 16:
      return Jr("Lazy");
    case 13:
      return Jr("Suspense");
    case 19:
      return Jr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Jl(e.type, !1), e;
    case 11:
      return e = Jl(e.type.render, !1), e;
    case 1:
      return e = Jl(e.type, !0), e;
    default:
      return "";
  }
}
function Os(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case lr:
      return "Fragment";
    case or:
      return "Portal";
    case Cs:
      return "Profiler";
    case Su:
      return "StrictMode";
    case xs:
      return "Suspense";
    case Ts:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case pd:
        return (e.displayName || "Context") + ".Consumer";
      case dd:
        return (e._context.displayName || "Context") + ".Provider";
      case Eu:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Cu:
        return t = e.displayName || null, t !== null ? t : Os(e.type) || "Memo";
      case nn:
        t = e._payload, e = e._init;
        try {
          return Os(e(t));
        } catch {
        }
    }
  return null;
}
function Jm(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
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
      return Os(t);
    case 8:
      return t === Su ? "StrictMode" : "Mode";
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
function vn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function md(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function eg(e) {
  var t = md(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var o = n.get, l = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return o.call(this);
    }, set: function(u) {
      r = "" + u, l.call(this, u);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(u) {
      r = "" + u;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function so(e) {
  e._valueTracker || (e._valueTracker = eg(e));
}
function gd(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = md(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Mo(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ns(e, t) {
  var n = t.checked;
  return ve({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Bc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = vn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function vd(e, t) {
  t = t.checked, t != null && ku(e, "checked", t, !1);
}
function Ps(e, t) {
  vd(e, t);
  var n = vn(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Ls(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ls(e, t.type, vn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Wc(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Ls(e, t, n) {
  (t !== "number" || Mo(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ei = Array.isArray;
function yr(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++)
      t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + vn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function As(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(T(91));
  return ve({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Vc(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(T(92));
      if (ei(n)) {
        if (1 < n.length)
          throw Error(T(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: vn(n) };
}
function yd(e, t) {
  var n = vn(t.value), r = vn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Qc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function _d(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ds(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? _d(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var uo, wd = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (uo = uo || document.createElement("div"), uo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = uo.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function hi(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ri = {
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
}, tg = ["Webkit", "ms", "Moz", "O"];
Object.keys(ri).forEach(function(e) {
  tg.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), ri[t] = ri[e];
  });
});
function kd(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ri.hasOwnProperty(e) && ri[e] ? ("" + t).trim() : t + "px";
}
function Sd(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, o = kd(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    }
}
var ng = ve({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function zs(e, t) {
  if (t) {
    if (ng[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(T(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null)
        throw Error(T(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(T(61));
    }
    if (t.style != null && typeof t.style != "object")
      throw Error(T(62));
  }
}
function js(e, t) {
  if (e.indexOf("-") === -1)
    return typeof t.is == "string";
  switch (e) {
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
var Is = null;
function xu(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Ms = null, _r = null, wr = null;
function Kc(e) {
  if (e = zi(e)) {
    if (typeof Ms != "function")
      throw Error(T(280));
    var t = e.stateNode;
    t && (t = dl(t), Ms(e.stateNode, e.type, t));
  }
}
function Ed(e) {
  _r ? wr ? wr.push(e) : wr = [e] : _r = e;
}
function Cd() {
  if (_r) {
    var e = _r, t = wr;
    if (wr = _r = null, Kc(e), t)
      for (e = 0; e < t.length; e++)
        Kc(t[e]);
  }
}
function xd(e, t) {
  return e(t);
}
function Td() {
}
var es = !1;
function Od(e, t, n) {
  if (es)
    return e(t, n);
  es = !0;
  try {
    return xd(e, t, n);
  } finally {
    es = !1, (_r !== null || wr !== null) && (Td(), Cd());
  }
}
function mi(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = dl(n);
  if (r === null)
    return null;
  n = r[t];
  e:
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
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
  if (e)
    return null;
  if (n && typeof n != "function")
    throw Error(T(231, t, typeof n));
  return n;
}
var Rs = !1;
if (Wt)
  try {
    var Qr = {};
    Object.defineProperty(Qr, "passive", { get: function() {
      Rs = !0;
    } }), window.addEventListener("test", Qr, Qr), window.removeEventListener("test", Qr, Qr);
  } catch {
    Rs = !1;
  }
function rg(e, t, n, r, o, l, u, f, d) {
  var h = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, h);
  } catch (S) {
    this.onError(S);
  }
}
var ii = !1, Ro = null, bo = !1, bs = null, ig = { onError: function(e) {
  ii = !0, Ro = e;
} };
function og(e, t, n, r, o, l, u, f, d) {
  ii = !1, Ro = null, rg.apply(ig, arguments);
}
function lg(e, t, n, r, o, l, u, f, d) {
  if (og.apply(this, arguments), ii) {
    if (ii) {
      var h = Ro;
      ii = !1, Ro = null;
    } else
      throw Error(T(198));
    bo || (bo = !0, bs = h);
  }
}
function Wn(e) {
  var t = e, n = e;
  if (e.alternate)
    for (; t.return; )
      t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Nd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function Yc(e) {
  if (Wn(e) !== e)
    throw Error(T(188));
}
function sg(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Wn(e), t === null)
      throw Error(T(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null)
      break;
    var l = o.alternate;
    if (l === null) {
      if (r = o.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === l.child) {
      for (l = o.child; l; ) {
        if (l === n)
          return Yc(o), e;
        if (l === r)
          return Yc(o), t;
        l = l.sibling;
      }
      throw Error(T(188));
    }
    if (n.return !== r.return)
      n = o, r = l;
    else {
      for (var u = !1, f = o.child; f; ) {
        if (f === n) {
          u = !0, n = o, r = l;
          break;
        }
        if (f === r) {
          u = !0, r = o, n = l;
          break;
        }
        f = f.sibling;
      }
      if (!u) {
        for (f = l.child; f; ) {
          if (f === n) {
            u = !0, n = l, r = o;
            break;
          }
          if (f === r) {
            u = !0, r = l, n = o;
            break;
          }
          f = f.sibling;
        }
        if (!u)
          throw Error(T(189));
      }
    }
    if (n.alternate !== r)
      throw Error(T(190));
  }
  if (n.tag !== 3)
    throw Error(T(188));
  return n.stateNode.current === n ? e : t;
}
function Pd(e) {
  return e = sg(e), e !== null ? Ld(e) : null;
}
function Ld(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = Ld(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var Ad = ot.unstable_scheduleCallback, Xc = ot.unstable_cancelCallback, ug = ot.unstable_shouldYield, ag = ot.unstable_requestPaint, Se = ot.unstable_now, cg = ot.unstable_getCurrentPriorityLevel, Tu = ot.unstable_ImmediatePriority, Dd = ot.unstable_UserBlockingPriority, Fo = ot.unstable_NormalPriority, fg = ot.unstable_LowPriority, zd = ot.unstable_IdlePriority, ul = null, jt = null;
function dg(e) {
  if (jt && typeof jt.onCommitFiberRoot == "function")
    try {
      jt.onCommitFiberRoot(ul, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var Ct = Math.clz32 ? Math.clz32 : mg, pg = Math.log, hg = Math.LN2;
function mg(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (pg(e) / hg | 0) | 0;
}
var ao = 64, co = 4194304;
function ti(e) {
  switch (e & -e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function $o(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, o = e.suspendedLanes, l = e.pingedLanes, u = n & 268435455;
  if (u !== 0) {
    var f = u & ~o;
    f !== 0 ? r = ti(f) : (l &= u, l !== 0 && (r = ti(l)));
  } else
    u = n & ~o, u !== 0 ? r = ti(u) : l !== 0 && (r = ti(l));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, l = t & -t, o >= l || o === 16 && (l & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - Ct(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function gg(e, t) {
  switch (e) {
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
function vg(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, l = e.pendingLanes; 0 < l; ) {
    var u = 31 - Ct(l), f = 1 << u, d = o[u];
    d === -1 ? (!(f & n) || f & r) && (o[u] = gg(f, t)) : d <= t && (e.expiredLanes |= f), l &= ~f;
  }
}
function Fs(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function jd() {
  var e = ao;
  return ao <<= 1, !(ao & 4194240) && (ao = 64), e;
}
function ts(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function Ai(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ct(t), e[t] = n;
}
function yg(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Ct(n), l = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~l;
  }
}
function Ou(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Ct(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var re = 0;
function Id(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Md, Nu, Rd, bd, Fd, $s = !1, fo = [], an = null, cn = null, fn = null, gi = /* @__PURE__ */ new Map(), vi = /* @__PURE__ */ new Map(), on = [], _g = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Gc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      an = null;
      break;
    case "dragenter":
    case "dragleave":
      cn = null;
      break;
    case "mouseover":
    case "mouseout":
      fn = null;
      break;
    case "pointerover":
    case "pointerout":
      gi.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      vi.delete(t.pointerId);
  }
}
function Kr(e, t, n, r, o, l) {
  return e === null || e.nativeEvent !== l ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: l, targetContainers: [o] }, t !== null && (t = zi(t), t !== null && Nu(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function wg(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return an = Kr(an, e, t, n, r, o), !0;
    case "dragenter":
      return cn = Kr(cn, e, t, n, r, o), !0;
    case "mouseover":
      return fn = Kr(fn, e, t, n, r, o), !0;
    case "pointerover":
      var l = o.pointerId;
      return gi.set(l, Kr(gi.get(l) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return l = o.pointerId, vi.set(l, Kr(vi.get(l) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function $d(e) {
  var t = zn(e.target);
  if (t !== null) {
    var n = Wn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Nd(n), t !== null) {
          e.blockedOn = t, Fd(e.priority, function() {
            Rd(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function To(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Us(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Is = r, n.target.dispatchEvent(r), Is = null;
    } else
      return t = zi(n), t !== null && Nu(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Zc(e, t, n) {
  To(e) && n.delete(t);
}
function kg() {
  $s = !1, an !== null && To(an) && (an = null), cn !== null && To(cn) && (cn = null), fn !== null && To(fn) && (fn = null), gi.forEach(Zc), vi.forEach(Zc);
}
function Yr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, $s || ($s = !0, ot.unstable_scheduleCallback(ot.unstable_NormalPriority, kg)));
}
function yi(e) {
  function t(o) {
    return Yr(o, e);
  }
  if (0 < fo.length) {
    Yr(fo[0], e);
    for (var n = 1; n < fo.length; n++) {
      var r = fo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (an !== null && Yr(an, e), cn !== null && Yr(cn, e), fn !== null && Yr(fn, e), gi.forEach(t), vi.forEach(t), n = 0; n < on.length; n++)
    r = on[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < on.length && (n = on[0], n.blockedOn === null); )
    $d(n), n.blockedOn === null && on.shift();
}
var kr = Yt.ReactCurrentBatchConfig, Uo = !0;
function Sg(e, t, n, r) {
  var o = re, l = kr.transition;
  kr.transition = null;
  try {
    re = 1, Pu(e, t, n, r);
  } finally {
    re = o, kr.transition = l;
  }
}
function Eg(e, t, n, r) {
  var o = re, l = kr.transition;
  kr.transition = null;
  try {
    re = 4, Pu(e, t, n, r);
  } finally {
    re = o, kr.transition = l;
  }
}
function Pu(e, t, n, r) {
  if (Uo) {
    var o = Us(e, t, n, r);
    if (o === null)
      fs(e, t, r, Ho, n), Gc(e, r);
    else if (wg(o, e, t, n, r))
      r.stopPropagation();
    else if (Gc(e, r), t & 4 && -1 < _g.indexOf(e)) {
      for (; o !== null; ) {
        var l = zi(o);
        if (l !== null && Md(l), l = Us(e, t, n, r), l === null && fs(e, t, r, Ho, n), l === o)
          break;
        o = l;
      }
      o !== null && r.stopPropagation();
    } else
      fs(e, t, r, null, n);
  }
}
var Ho = null;
function Us(e, t, n, r) {
  if (Ho = null, e = xu(r), e = zn(e), e !== null)
    if (t = Wn(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = Nd(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return Ho = e, null;
}
function Ud(e) {
  switch (e) {
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
      switch (cg()) {
        case Tu:
          return 1;
        case Dd:
          return 4;
        case Fo:
        case fg:
          return 16;
        case zd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var sn = null, Lu = null, Oo = null;
function Hd() {
  if (Oo)
    return Oo;
  var e, t = Lu, n = t.length, r, o = "value" in sn ? sn.value : sn.textContent, l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++)
    ;
  var u = n - e;
  for (r = 1; r <= u && t[n - r] === o[l - r]; r++)
    ;
  return Oo = o.slice(e, 1 < r ? 1 - r : void 0);
}
function No(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function po() {
  return !0;
}
function qc() {
  return !1;
}
function st(e) {
  function t(n, r, o, l, u) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = l, this.target = u, this.currentTarget = null;
    for (var f in e)
      e.hasOwnProperty(f) && (n = e[f], this[f] = n ? n(l) : l[f]);
    return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? po : qc, this.isPropagationStopped = qc, this;
  }
  return ve(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = po);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = po);
  }, persist: function() {
  }, isPersistent: po }), t;
}
var Dr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Au = st(Dr), Di = ve({}, Dr, { view: 0, detail: 0 }), Cg = st(Di), ns, rs, Xr, al = ve({}, Di, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Du, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Xr && (Xr && e.type === "mousemove" ? (ns = e.screenX - Xr.screenX, rs = e.screenY - Xr.screenY) : rs = ns = 0, Xr = e), ns);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : rs;
} }), Jc = st(al), xg = ve({}, al, { dataTransfer: 0 }), Tg = st(xg), Og = ve({}, Di, { relatedTarget: 0 }), is = st(Og), Ng = ve({}, Dr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Pg = st(Ng), Lg = ve({}, Dr, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Ag = st(Lg), Dg = ve({}, Dr, { data: 0 }), ef = st(Dg), zg = {
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
}, jg = {
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
}, Ig = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Mg(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Ig[e]) ? !!t[e] : !1;
}
function Du() {
  return Mg;
}
var Rg = ve({}, Di, { key: function(e) {
  if (e.key) {
    var t = zg[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = No(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? jg[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Du, charCode: function(e) {
  return e.type === "keypress" ? No(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? No(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), bg = st(Rg), Fg = ve({}, al, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), tf = st(Fg), $g = ve({}, Di, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Du }), Ug = st($g), Hg = ve({}, Dr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Bg = st(Hg), Wg = ve({}, al, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Vg = st(Wg), Qg = [9, 13, 27, 32], zu = Wt && "CompositionEvent" in window, oi = null;
Wt && "documentMode" in document && (oi = document.documentMode);
var Kg = Wt && "TextEvent" in window && !oi, Bd = Wt && (!zu || oi && 8 < oi && 11 >= oi), nf = String.fromCharCode(32), rf = !1;
function Wd(e, t) {
  switch (e) {
    case "keyup":
      return Qg.indexOf(t.keyCode) !== -1;
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
function Vd(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var sr = !1;
function Yg(e, t) {
  switch (e) {
    case "compositionend":
      return Vd(t);
    case "keypress":
      return t.which !== 32 ? null : (rf = !0, nf);
    case "textInput":
      return e = t.data, e === nf && rf ? null : e;
    default:
      return null;
  }
}
function Xg(e, t) {
  if (sr)
    return e === "compositionend" || !zu && Wd(e, t) ? (e = Hd(), Oo = Lu = sn = null, sr = !1, e) : null;
  switch (e) {
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
      return Bd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Gg = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function of(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Gg[e.type] : t === "textarea";
}
function Qd(e, t, n, r) {
  Ed(r), t = Bo(t, "onChange"), 0 < t.length && (n = new Au("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var li = null, _i = null;
function Zg(e) {
  rp(e, 0);
}
function cl(e) {
  var t = cr(e);
  if (gd(t))
    return e;
}
function qg(e, t) {
  if (e === "change")
    return t;
}
var Kd = !1;
if (Wt) {
  var os;
  if (Wt) {
    var ls = "oninput" in document;
    if (!ls) {
      var lf = document.createElement("div");
      lf.setAttribute("oninput", "return;"), ls = typeof lf.oninput == "function";
    }
    os = ls;
  } else
    os = !1;
  Kd = os && (!document.documentMode || 9 < document.documentMode);
}
function sf() {
  li && (li.detachEvent("onpropertychange", Yd), _i = li = null);
}
function Yd(e) {
  if (e.propertyName === "value" && cl(_i)) {
    var t = [];
    Qd(t, _i, e, xu(e)), Od(Zg, t);
  }
}
function Jg(e, t, n) {
  e === "focusin" ? (sf(), li = t, _i = n, li.attachEvent("onpropertychange", Yd)) : e === "focusout" && sf();
}
function ev(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return cl(_i);
}
function tv(e, t) {
  if (e === "click")
    return cl(t);
}
function nv(e, t) {
  if (e === "input" || e === "change")
    return cl(t);
}
function rv(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Tt = typeof Object.is == "function" ? Object.is : rv;
function wi(e, t) {
  if (Tt(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Es.call(t, o) || !Tt(e[o], t[o]))
      return !1;
  }
  return !0;
}
function uf(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function af(e, t) {
  var n = uf(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t)
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = uf(n);
  }
}
function Xd(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Xd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Gd() {
  for (var e = window, t = Mo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = Mo(e.document);
  }
  return t;
}
function ju(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function iv(e) {
  var t = Gd(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Xd(n.ownerDocument.documentElement, n)) {
    if (r !== null && ju(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, l = Math.min(r.start, o);
        r = r.end === void 0 ? l : Math.min(r.end, o), !e.extend && l > r && (o = r, r = l, l = o), o = af(n, l);
        var u = af(
          n,
          r
        );
        o && u && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== u.node || e.focusOffset !== u.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), l > r ? (e.addRange(t), e.extend(u.node, u.offset)) : (t.setEnd(u.node, u.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var ov = Wt && "documentMode" in document && 11 >= document.documentMode, ur = null, Hs = null, si = null, Bs = !1;
function cf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Bs || ur == null || ur !== Mo(r) || (r = ur, "selectionStart" in r && ju(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), si && wi(si, r) || (si = r, r = Bo(Hs, "onSelect"), 0 < r.length && (t = new Au("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = ur)));
}
function ho(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var ar = { animationend: ho("Animation", "AnimationEnd"), animationiteration: ho("Animation", "AnimationIteration"), animationstart: ho("Animation", "AnimationStart"), transitionend: ho("Transition", "TransitionEnd") }, ss = {}, Zd = {};
Wt && (Zd = document.createElement("div").style, "AnimationEvent" in window || (delete ar.animationend.animation, delete ar.animationiteration.animation, delete ar.animationstart.animation), "TransitionEvent" in window || delete ar.transitionend.transition);
function fl(e) {
  if (ss[e])
    return ss[e];
  if (!ar[e])
    return e;
  var t = ar[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in Zd)
      return ss[e] = t[n];
  return e;
}
var qd = fl("animationend"), Jd = fl("animationiteration"), ep = fl("animationstart"), tp = fl("transitionend"), np = /* @__PURE__ */ new Map(), ff = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function _n(e, t) {
  np.set(e, t), Bn(t, [e]);
}
for (var us = 0; us < ff.length; us++) {
  var as = ff[us], lv = as.toLowerCase(), sv = as[0].toUpperCase() + as.slice(1);
  _n(lv, "on" + sv);
}
_n(qd, "onAnimationEnd");
_n(Jd, "onAnimationIteration");
_n(ep, "onAnimationStart");
_n("dblclick", "onDoubleClick");
_n("focusin", "onFocus");
_n("focusout", "onBlur");
_n(tp, "onTransitionEnd");
Cr("onMouseEnter", ["mouseout", "mouseover"]);
Cr("onMouseLeave", ["mouseout", "mouseover"]);
Cr("onPointerEnter", ["pointerout", "pointerover"]);
Cr("onPointerLeave", ["pointerout", "pointerover"]);
Bn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Bn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Bn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Bn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Bn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Bn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ni = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), uv = new Set("cancel close invalid load scroll toggle".split(" ").concat(ni));
function df(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, lg(r, t, void 0, e), e.currentTarget = null;
}
function rp(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var u = r.length - 1; 0 <= u; u--) {
          var f = r[u], d = f.instance, h = f.currentTarget;
          if (f = f.listener, d !== l && o.isPropagationStopped())
            break e;
          df(o, f, h), l = d;
        }
      else
        for (u = 0; u < r.length; u++) {
          if (f = r[u], d = f.instance, h = f.currentTarget, f = f.listener, d !== l && o.isPropagationStopped())
            break e;
          df(o, f, h), l = d;
        }
    }
  }
  if (bo)
    throw e = bs, bo = !1, bs = null, e;
}
function ce(e, t) {
  var n = t[Ys];
  n === void 0 && (n = t[Ys] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (ip(t, e, 2, !1), n.add(r));
}
function cs(e, t, n) {
  var r = 0;
  t && (r |= 4), ip(n, e, r, t);
}
var mo = "_reactListening" + Math.random().toString(36).slice(2);
function ki(e) {
  if (!e[mo]) {
    e[mo] = !0, fd.forEach(function(n) {
      n !== "selectionchange" && (uv.has(n) || cs(n, !1, e), cs(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[mo] || (t[mo] = !0, cs("selectionchange", !1, t));
  }
}
function ip(e, t, n, r) {
  switch (Ud(t)) {
    case 1:
      var o = Sg;
      break;
    case 4:
      o = Eg;
      break;
    default:
      o = Pu;
  }
  n = o.bind(null, t, n, e), o = void 0, !Rs || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function fs(e, t, n, r, o) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e:
      for (; ; ) {
        if (r === null)
          return;
        var u = r.tag;
        if (u === 3 || u === 4) {
          var f = r.stateNode.containerInfo;
          if (f === o || f.nodeType === 8 && f.parentNode === o)
            break;
          if (u === 4)
            for (u = r.return; u !== null; ) {
              var d = u.tag;
              if ((d === 3 || d === 4) && (d = u.stateNode.containerInfo, d === o || d.nodeType === 8 && d.parentNode === o))
                return;
              u = u.return;
            }
          for (; f !== null; ) {
            if (u = zn(f), u === null)
              return;
            if (d = u.tag, d === 5 || d === 6) {
              r = l = u;
              continue e;
            }
            f = f.parentNode;
          }
        }
        r = r.return;
      }
  Od(function() {
    var h = l, S = xu(n), E = [];
    e: {
      var w = np.get(e);
      if (w !== void 0) {
        var N = Au, P = e;
        switch (e) {
          case "keypress":
            if (No(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            N = bg;
            break;
          case "focusin":
            P = "focus", N = is;
            break;
          case "focusout":
            P = "blur", N = is;
            break;
          case "beforeblur":
          case "afterblur":
            N = is;
            break;
          case "click":
            if (n.button === 2)
              break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            N = Jc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            N = Tg;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            N = Ug;
            break;
          case qd:
          case Jd:
          case ep:
            N = Pg;
            break;
          case tp:
            N = Bg;
            break;
          case "scroll":
            N = Cg;
            break;
          case "wheel":
            N = Vg;
            break;
          case "copy":
          case "cut":
          case "paste":
            N = Ag;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            N = tf;
        }
        var L = (t & 4) !== 0, G = !L && e === "scroll", g = L ? w !== null ? w + "Capture" : null : w;
        L = [];
        for (var p = h, y; p !== null; ) {
          y = p;
          var x = y.stateNode;
          if (y.tag === 5 && x !== null && (y = x, g !== null && (x = mi(p, g), x != null && L.push(Si(p, x, y)))), G)
            break;
          p = p.return;
        }
        0 < L.length && (w = new N(w, P, null, n, S), E.push({ event: w, listeners: L }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (w = e === "mouseover" || e === "pointerover", N = e === "mouseout" || e === "pointerout", w && n !== Is && (P = n.relatedTarget || n.fromElement) && (zn(P) || P[Vt]))
          break e;
        if ((N || w) && (w = S.window === S ? S : (w = S.ownerDocument) ? w.defaultView || w.parentWindow : window, N ? (P = n.relatedTarget || n.toElement, N = h, P = P ? zn(P) : null, P !== null && (G = Wn(P), P !== G || P.tag !== 5 && P.tag !== 6) && (P = null)) : (N = null, P = h), N !== P)) {
          if (L = Jc, x = "onMouseLeave", g = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (L = tf, x = "onPointerLeave", g = "onPointerEnter", p = "pointer"), G = N == null ? w : cr(N), y = P == null ? w : cr(P), w = new L(x, p + "leave", N, n, S), w.target = G, w.relatedTarget = y, x = null, zn(S) === h && (L = new L(g, p + "enter", P, n, S), L.target = y, L.relatedTarget = G, x = L), G = x, N && P)
            t: {
              for (L = N, g = P, p = 0, y = L; y; y = ir(y))
                p++;
              for (y = 0, x = g; x; x = ir(x))
                y++;
              for (; 0 < p - y; )
                L = ir(L), p--;
              for (; 0 < y - p; )
                g = ir(g), y--;
              for (; p--; ) {
                if (L === g || g !== null && L === g.alternate)
                  break t;
                L = ir(L), g = ir(g);
              }
              L = null;
            }
          else
            L = null;
          N !== null && pf(E, w, N, L, !1), P !== null && G !== null && pf(E, G, P, L, !0);
        }
      }
      e: {
        if (w = h ? cr(h) : window, N = w.nodeName && w.nodeName.toLowerCase(), N === "select" || N === "input" && w.type === "file")
          var D = qg;
        else if (of(w))
          if (Kd)
            D = nv;
          else {
            D = ev;
            var R = Jg;
          }
        else
          (N = w.nodeName) && N.toLowerCase() === "input" && (w.type === "checkbox" || w.type === "radio") && (D = tv);
        if (D && (D = D(e, h))) {
          Qd(E, D, n, S);
          break e;
        }
        R && R(e, w, h), e === "focusout" && (R = w._wrapperState) && R.controlled && w.type === "number" && Ls(w, "number", w.value);
      }
      switch (R = h ? cr(h) : window, e) {
        case "focusin":
          (of(R) || R.contentEditable === "true") && (ur = R, Hs = h, si = null);
          break;
        case "focusout":
          si = Hs = ur = null;
          break;
        case "mousedown":
          Bs = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Bs = !1, cf(E, n, S);
          break;
        case "selectionchange":
          if (ov)
            break;
        case "keydown":
        case "keyup":
          cf(E, n, S);
      }
      var b;
      if (zu)
        e: {
          switch (e) {
            case "compositionstart":
              var F = "onCompositionStart";
              break e;
            case "compositionend":
              F = "onCompositionEnd";
              break e;
            case "compositionupdate":
              F = "onCompositionUpdate";
              break e;
          }
          F = void 0;
        }
      else
        sr ? Wd(e, n) && (F = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (F = "onCompositionStart");
      F && (Bd && n.locale !== "ko" && (sr || F !== "onCompositionStart" ? F === "onCompositionEnd" && sr && (b = Hd()) : (sn = S, Lu = "value" in sn ? sn.value : sn.textContent, sr = !0)), R = Bo(h, F), 0 < R.length && (F = new ef(F, e, null, n, S), E.push({ event: F, listeners: R }), b ? F.data = b : (b = Vd(n), b !== null && (F.data = b)))), (b = Kg ? Yg(e, n) : Xg(e, n)) && (h = Bo(h, "onBeforeInput"), 0 < h.length && (S = new ef("onBeforeInput", "beforeinput", null, n, S), E.push({ event: S, listeners: h }), S.data = b));
    }
    rp(E, t);
  });
}
function Si(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Bo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, l = o.stateNode;
    o.tag === 5 && l !== null && (o = l, l = mi(e, n), l != null && r.unshift(Si(e, l, o)), l = mi(e, t), l != null && r.push(Si(e, l, o))), e = e.return;
  }
  return r;
}
function ir(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function pf(e, t, n, r, o) {
  for (var l = t._reactName, u = []; n !== null && n !== r; ) {
    var f = n, d = f.alternate, h = f.stateNode;
    if (d !== null && d === r)
      break;
    f.tag === 5 && h !== null && (f = h, o ? (d = mi(n, l), d != null && u.unshift(Si(n, d, f))) : o || (d = mi(n, l), d != null && u.push(Si(n, d, f)))), n = n.return;
  }
  u.length !== 0 && e.push({ event: t, listeners: u });
}
var av = /\r\n?/g, cv = /\u0000|\uFFFD/g;
function hf(e) {
  return (typeof e == "string" ? e : "" + e).replace(av, `
`).replace(cv, "");
}
function go(e, t, n) {
  if (t = hf(t), hf(e) !== t && n)
    throw Error(T(425));
}
function Wo() {
}
var Ws = null, Vs = null;
function Qs(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Ks = typeof setTimeout == "function" ? setTimeout : void 0, fv = typeof clearTimeout == "function" ? clearTimeout : void 0, mf = typeof Promise == "function" ? Promise : void 0, dv = typeof queueMicrotask == "function" ? queueMicrotask : typeof mf < "u" ? function(e) {
  return mf.resolve(null).then(e).catch(pv);
} : Ks;
function pv(e) {
  setTimeout(function() {
    throw e;
  });
}
function ds(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8)
      if (n = o.data, n === "/$") {
        if (r === 0) {
          e.removeChild(o), yi(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  yi(t);
}
function dn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3)
      break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?")
        break;
      if (t === "/$")
        return null;
    }
  }
  return e;
}
function gf(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0)
          return e;
        t--;
      } else
        n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var zr = Math.random().toString(36).slice(2), zt = "__reactFiber$" + zr, Ei = "__reactProps$" + zr, Vt = "__reactContainer$" + zr, Ys = "__reactEvents$" + zr, hv = "__reactListeners$" + zr, mv = "__reactHandles$" + zr;
function zn(e) {
  var t = e[zt];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Vt] || n[zt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = gf(e); e !== null; ) {
          if (n = e[zt])
            return n;
          e = gf(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function zi(e) {
  return e = e[zt] || e[Vt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function cr(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(T(33));
}
function dl(e) {
  return e[Ei] || null;
}
var Xs = [], fr = -1;
function wn(e) {
  return { current: e };
}
function fe(e) {
  0 > fr || (e.current = Xs[fr], Xs[fr] = null, fr--);
}
function ue(e, t) {
  fr++, Xs[fr] = e.current, e.current = t;
}
var yn = {}, Re = wn(yn), Ye = wn(!1), bn = yn;
function xr(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return yn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, l;
  for (l in n)
    o[l] = t[l];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function Xe(e) {
  return e = e.childContextTypes, e != null;
}
function Vo() {
  fe(Ye), fe(Re);
}
function vf(e, t, n) {
  if (Re.current !== yn)
    throw Error(T(168));
  ue(Re, t), ue(Ye, n);
}
function op(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var o in r)
    if (!(o in t))
      throw Error(T(108, Jm(e) || "Unknown", o));
  return ve({}, n, r);
}
function Qo(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || yn, bn = Re.current, ue(Re, e), ue(Ye, Ye.current), !0;
}
function yf(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(T(169));
  n ? (e = op(e, t, bn), r.__reactInternalMemoizedMergedChildContext = e, fe(Ye), fe(Re), ue(Re, e)) : fe(Ye), ue(Ye, n);
}
var $t = null, pl = !1, ps = !1;
function lp(e) {
  $t === null ? $t = [e] : $t.push(e);
}
function gv(e) {
  pl = !0, lp(e);
}
function kn() {
  if (!ps && $t !== null) {
    ps = !0;
    var e = 0, t = re;
    try {
      var n = $t;
      for (re = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      $t = null, pl = !1;
    } catch (o) {
      throw $t !== null && ($t = $t.slice(e + 1)), Ad(Tu, kn), o;
    } finally {
      re = t, ps = !1;
    }
  }
  return null;
}
var dr = [], pr = 0, Ko = null, Yo = 0, dt = [], pt = 0, Fn = null, Ut = 1, Ht = "";
function An(e, t) {
  dr[pr++] = Yo, dr[pr++] = Ko, Ko = e, Yo = t;
}
function sp(e, t, n) {
  dt[pt++] = Ut, dt[pt++] = Ht, dt[pt++] = Fn, Fn = e;
  var r = Ut;
  e = Ht;
  var o = 32 - Ct(r) - 1;
  r &= ~(1 << o), n += 1;
  var l = 32 - Ct(t) + o;
  if (30 < l) {
    var u = o - o % 5;
    l = (r & (1 << u) - 1).toString(32), r >>= u, o -= u, Ut = 1 << 32 - Ct(t) + o | n << o | r, Ht = l + e;
  } else
    Ut = 1 << l | n << o | r, Ht = e;
}
function Iu(e) {
  e.return !== null && (An(e, 1), sp(e, 1, 0));
}
function Mu(e) {
  for (; e === Ko; )
    Ko = dr[--pr], dr[pr] = null, Yo = dr[--pr], dr[pr] = null;
  for (; e === Fn; )
    Fn = dt[--pt], dt[pt] = null, Ht = dt[--pt], dt[pt] = null, Ut = dt[--pt], dt[pt] = null;
}
var it = null, rt = null, he = !1, Et = null;
function up(e, t) {
  var n = ht(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function _f(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, it = e, rt = dn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, it = e, rt = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Fn !== null ? { id: Ut, overflow: Ht } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = ht(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, it = e, rt = null, !0) : !1;
    default:
      return !1;
  }
}
function Gs(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Zs(e) {
  if (he) {
    var t = rt;
    if (t) {
      var n = t;
      if (!_f(e, t)) {
        if (Gs(e))
          throw Error(T(418));
        t = dn(n.nextSibling);
        var r = it;
        t && _f(e, t) ? up(r, n) : (e.flags = e.flags & -4097 | 2, he = !1, it = e);
      }
    } else {
      if (Gs(e))
        throw Error(T(418));
      e.flags = e.flags & -4097 | 2, he = !1, it = e;
    }
  }
}
function wf(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  it = e;
}
function vo(e) {
  if (e !== it)
    return !1;
  if (!he)
    return wf(e), he = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Qs(e.type, e.memoizedProps)), t && (t = rt)) {
    if (Gs(e))
      throw ap(), Error(T(418));
    for (; t; )
      up(e, t), t = dn(t.nextSibling);
  }
  if (wf(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(T(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              rt = dn(e.nextSibling);
              break e;
            }
            t--;
          } else
            n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      rt = null;
    }
  } else
    rt = it ? dn(e.stateNode.nextSibling) : null;
  return !0;
}
function ap() {
  for (var e = rt; e; )
    e = dn(e.nextSibling);
}
function Tr() {
  rt = it = null, he = !1;
}
function Ru(e) {
  Et === null ? Et = [e] : Et.push(e);
}
var vv = Yt.ReactCurrentBatchConfig;
function kt(e, t) {
  if (e && e.defaultProps) {
    t = ve({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Xo = wn(null), Go = null, hr = null, bu = null;
function Fu() {
  bu = hr = Go = null;
}
function $u(e) {
  var t = Xo.current;
  fe(Xo), e._currentValue = t;
}
function qs(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function Sr(e, t) {
  Go = e, bu = hr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ke = !0), e.firstContext = null);
}
function gt(e) {
  var t = e._currentValue;
  if (bu !== e)
    if (e = { context: e, memoizedValue: t, next: null }, hr === null) {
      if (Go === null)
        throw Error(T(308));
      hr = e, Go.dependencies = { lanes: 0, firstContext: e };
    } else
      hr = hr.next = e;
  return t;
}
var jn = null;
function Uu(e) {
  jn === null ? jn = [e] : jn.push(e);
}
function cp(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Uu(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Qt(e, r);
}
function Qt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var rn = !1;
function Hu(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function fp(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Bt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function pn(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, J & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Qt(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Uu(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Qt(e, n);
}
function Po(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ou(e, n);
  }
}
function kf(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var o = null, l = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var u = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        l === null ? o = l = u : l = l.next = u, n = n.next;
      } while (n !== null);
      l === null ? o = l = t : l = l.next = t;
    } else
      o = l = t;
    n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: l, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function Zo(e, t, n, r) {
  var o = e.updateQueue;
  rn = !1;
  var l = o.firstBaseUpdate, u = o.lastBaseUpdate, f = o.shared.pending;
  if (f !== null) {
    o.shared.pending = null;
    var d = f, h = d.next;
    d.next = null, u === null ? l = h : u.next = h, u = d;
    var S = e.alternate;
    S !== null && (S = S.updateQueue, f = S.lastBaseUpdate, f !== u && (f === null ? S.firstBaseUpdate = h : f.next = h, S.lastBaseUpdate = d));
  }
  if (l !== null) {
    var E = o.baseState;
    u = 0, S = h = d = null, f = l;
    do {
      var w = f.lane, N = f.eventTime;
      if ((r & w) === w) {
        S !== null && (S = S.next = {
          eventTime: N,
          lane: 0,
          tag: f.tag,
          payload: f.payload,
          callback: f.callback,
          next: null
        });
        e: {
          var P = e, L = f;
          switch (w = t, N = n, L.tag) {
            case 1:
              if (P = L.payload, typeof P == "function") {
                E = P.call(N, E, w);
                break e;
              }
              E = P;
              break e;
            case 3:
              P.flags = P.flags & -65537 | 128;
            case 0:
              if (P = L.payload, w = typeof P == "function" ? P.call(N, E, w) : P, w == null)
                break e;
              E = ve({}, E, w);
              break e;
            case 2:
              rn = !0;
          }
        }
        f.callback !== null && f.lane !== 0 && (e.flags |= 64, w = o.effects, w === null ? o.effects = [f] : w.push(f));
      } else
        N = { eventTime: N, lane: w, tag: f.tag, payload: f.payload, callback: f.callback, next: null }, S === null ? (h = S = N, d = E) : S = S.next = N, u |= w;
      if (f = f.next, f === null) {
        if (f = o.shared.pending, f === null)
          break;
        w = f, f = w.next, w.next = null, o.lastBaseUpdate = w, o.shared.pending = null;
      }
    } while (1);
    if (S === null && (d = E), o.baseState = d, o.firstBaseUpdate = h, o.lastBaseUpdate = S, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        u |= o.lane, o = o.next;
      while (o !== t);
    } else
      l === null && (o.shared.lanes = 0);
    Un |= u, e.lanes = u, e.memoizedState = E;
  }
}
function Sf(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var r = e[t], o = r.callback;
      if (o !== null) {
        if (r.callback = null, r = n, typeof o != "function")
          throw Error(T(191, o));
        o.call(r);
      }
    }
}
var dp = new cd.Component().refs;
function Js(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ve({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var hl = { isMounted: function(e) {
  return (e = e._reactInternals) ? Wn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Be(), o = mn(e), l = Bt(r, o);
  l.payload = t, n != null && (l.callback = n), t = pn(e, l, o), t !== null && (xt(t, e, o, r), Po(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Be(), o = mn(e), l = Bt(r, o);
  l.tag = 1, l.payload = t, n != null && (l.callback = n), t = pn(e, l, o), t !== null && (xt(t, e, o, r), Po(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Be(), r = mn(e), o = Bt(n, r);
  o.tag = 2, t != null && (o.callback = t), t = pn(e, o, r), t !== null && (xt(t, e, r, n), Po(t, e, r));
} };
function Ef(e, t, n, r, o, l, u) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, l, u) : t.prototype && t.prototype.isPureReactComponent ? !wi(n, r) || !wi(o, l) : !0;
}
function pp(e, t, n) {
  var r = !1, o = yn, l = t.contextType;
  return typeof l == "object" && l !== null ? l = gt(l) : (o = Xe(t) ? bn : Re.current, r = t.contextTypes, l = (r = r != null) ? xr(e, o) : yn), t = new t(n, l), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = hl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = l), t;
}
function Cf(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && hl.enqueueReplaceState(t, t.state, null);
}
function eu(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = dp, Hu(e);
  var l = t.contextType;
  typeof l == "object" && l !== null ? o.context = gt(l) : (l = Xe(t) ? bn : Re.current, o.context = xr(e, l)), o.state = e.memoizedState, l = t.getDerivedStateFromProps, typeof l == "function" && (Js(e, t, l, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && hl.enqueueReplaceState(o, o.state, null), Zo(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Gr(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1)
          throw Error(T(309));
        var r = n.stateNode;
      }
      if (!r)
        throw Error(T(147, e));
      var o = r, l = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === l ? t.ref : (t = function(u) {
        var f = o.refs;
        f === dp && (f = o.refs = {}), u === null ? delete f[l] : f[l] = u;
      }, t._stringRef = l, t);
    }
    if (typeof e != "string")
      throw Error(T(284));
    if (!n._owner)
      throw Error(T(290, e));
  }
  return e;
}
function yo(e, t) {
  throw e = Object.prototype.toString.call(t), Error(T(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function xf(e) {
  var t = e._init;
  return t(e._payload);
}
function hp(e) {
  function t(g, p) {
    if (e) {
      var y = g.deletions;
      y === null ? (g.deletions = [p], g.flags |= 16) : y.push(p);
    }
  }
  function n(g, p) {
    if (!e)
      return null;
    for (; p !== null; )
      t(g, p), p = p.sibling;
    return null;
  }
  function r(g, p) {
    for (g = /* @__PURE__ */ new Map(); p !== null; )
      p.key !== null ? g.set(p.key, p) : g.set(p.index, p), p = p.sibling;
    return g;
  }
  function o(g, p) {
    return g = gn(g, p), g.index = 0, g.sibling = null, g;
  }
  function l(g, p, y) {
    return g.index = y, e ? (y = g.alternate, y !== null ? (y = y.index, y < p ? (g.flags |= 2, p) : y) : (g.flags |= 2, p)) : (g.flags |= 1048576, p);
  }
  function u(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function f(g, p, y, x) {
    return p === null || p.tag !== 6 ? (p = ws(y, g.mode, x), p.return = g, p) : (p = o(p, y), p.return = g, p);
  }
  function d(g, p, y, x) {
    var D = y.type;
    return D === lr ? S(g, p, y.props.children, x, y.key) : p !== null && (p.elementType === D || typeof D == "object" && D !== null && D.$$typeof === nn && xf(D) === p.type) ? (x = o(p, y.props), x.ref = Gr(g, p, y), x.return = g, x) : (x = Io(y.type, y.key, y.props, null, g.mode, x), x.ref = Gr(g, p, y), x.return = g, x);
  }
  function h(g, p, y, x) {
    return p === null || p.tag !== 4 || p.stateNode.containerInfo !== y.containerInfo || p.stateNode.implementation !== y.implementation ? (p = ks(y, g.mode, x), p.return = g, p) : (p = o(p, y.children || []), p.return = g, p);
  }
  function S(g, p, y, x, D) {
    return p === null || p.tag !== 7 ? (p = Rn(y, g.mode, x, D), p.return = g, p) : (p = o(p, y), p.return = g, p);
  }
  function E(g, p, y) {
    if (typeof p == "string" && p !== "" || typeof p == "number")
      return p = ws("" + p, g.mode, y), p.return = g, p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case lo:
          return y = Io(p.type, p.key, p.props, null, g.mode, y), y.ref = Gr(g, null, p), y.return = g, y;
        case or:
          return p = ks(p, g.mode, y), p.return = g, p;
        case nn:
          var x = p._init;
          return E(g, x(p._payload), y);
      }
      if (ei(p) || Vr(p))
        return p = Rn(p, g.mode, y, null), p.return = g, p;
      yo(g, p);
    }
    return null;
  }
  function w(g, p, y, x) {
    var D = p !== null ? p.key : null;
    if (typeof y == "string" && y !== "" || typeof y == "number")
      return D !== null ? null : f(g, p, "" + y, x);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case lo:
          return y.key === D ? d(g, p, y, x) : null;
        case or:
          return y.key === D ? h(g, p, y, x) : null;
        case nn:
          return D = y._init, w(
            g,
            p,
            D(y._payload),
            x
          );
      }
      if (ei(y) || Vr(y))
        return D !== null ? null : S(g, p, y, x, null);
      yo(g, y);
    }
    return null;
  }
  function N(g, p, y, x, D) {
    if (typeof x == "string" && x !== "" || typeof x == "number")
      return g = g.get(y) || null, f(p, g, "" + x, D);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case lo:
          return g = g.get(x.key === null ? y : x.key) || null, d(p, g, x, D);
        case or:
          return g = g.get(x.key === null ? y : x.key) || null, h(p, g, x, D);
        case nn:
          var R = x._init;
          return N(g, p, y, R(x._payload), D);
      }
      if (ei(x) || Vr(x))
        return g = g.get(y) || null, S(p, g, x, D, null);
      yo(p, x);
    }
    return null;
  }
  function P(g, p, y, x) {
    for (var D = null, R = null, b = p, F = p = 0, de = null; b !== null && F < y.length; F++) {
      b.index > F ? (de = b, b = null) : de = b.sibling;
      var Y = w(g, b, y[F], x);
      if (Y === null) {
        b === null && (b = de);
        break;
      }
      e && b && Y.alternate === null && t(g, b), p = l(Y, p, F), R === null ? D = Y : R.sibling = Y, R = Y, b = de;
    }
    if (F === y.length)
      return n(g, b), he && An(g, F), D;
    if (b === null) {
      for (; F < y.length; F++)
        b = E(g, y[F], x), b !== null && (p = l(b, p, F), R === null ? D = b : R.sibling = b, R = b);
      return he && An(g, F), D;
    }
    for (b = r(g, b); F < y.length; F++)
      de = N(b, g, F, y[F], x), de !== null && (e && de.alternate !== null && b.delete(de.key === null ? F : de.key), p = l(de, p, F), R === null ? D = de : R.sibling = de, R = de);
    return e && b.forEach(function(Ze) {
      return t(g, Ze);
    }), he && An(g, F), D;
  }
  function L(g, p, y, x) {
    var D = Vr(y);
    if (typeof D != "function")
      throw Error(T(150));
    if (y = D.call(y), y == null)
      throw Error(T(151));
    for (var R = D = null, b = p, F = p = 0, de = null, Y = y.next(); b !== null && !Y.done; F++, Y = y.next()) {
      b.index > F ? (de = b, b = null) : de = b.sibling;
      var Ze = w(g, b, Y.value, x);
      if (Ze === null) {
        b === null && (b = de);
        break;
      }
      e && b && Ze.alternate === null && t(g, b), p = l(Ze, p, F), R === null ? D = Ze : R.sibling = Ze, R = Ze, b = de;
    }
    if (Y.done)
      return n(
        g,
        b
      ), he && An(g, F), D;
    if (b === null) {
      for (; !Y.done; F++, Y = y.next())
        Y = E(g, Y.value, x), Y !== null && (p = l(Y, p, F), R === null ? D = Y : R.sibling = Y, R = Y);
      return he && An(g, F), D;
    }
    for (b = r(g, b); !Y.done; F++, Y = y.next())
      Y = N(b, g, F, Y.value, x), Y !== null && (e && Y.alternate !== null && b.delete(Y.key === null ? F : Y.key), p = l(Y, p, F), R === null ? D = Y : R.sibling = Y, R = Y);
    return e && b.forEach(function(Xt) {
      return t(g, Xt);
    }), he && An(g, F), D;
  }
  function G(g, p, y, x) {
    if (typeof y == "object" && y !== null && y.type === lr && y.key === null && (y = y.props.children), typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case lo:
          e: {
            for (var D = y.key, R = p; R !== null; ) {
              if (R.key === D) {
                if (D = y.type, D === lr) {
                  if (R.tag === 7) {
                    n(g, R.sibling), p = o(R, y.props.children), p.return = g, g = p;
                    break e;
                  }
                } else if (R.elementType === D || typeof D == "object" && D !== null && D.$$typeof === nn && xf(D) === R.type) {
                  n(g, R.sibling), p = o(R, y.props), p.ref = Gr(g, R, y), p.return = g, g = p;
                  break e;
                }
                n(g, R);
                break;
              } else
                t(g, R);
              R = R.sibling;
            }
            y.type === lr ? (p = Rn(y.props.children, g.mode, x, y.key), p.return = g, g = p) : (x = Io(y.type, y.key, y.props, null, g.mode, x), x.ref = Gr(g, p, y), x.return = g, g = x);
          }
          return u(g);
        case or:
          e: {
            for (R = y.key; p !== null; ) {
              if (p.key === R)
                if (p.tag === 4 && p.stateNode.containerInfo === y.containerInfo && p.stateNode.implementation === y.implementation) {
                  n(g, p.sibling), p = o(p, y.children || []), p.return = g, g = p;
                  break e;
                } else {
                  n(g, p);
                  break;
                }
              else
                t(g, p);
              p = p.sibling;
            }
            p = ks(y, g.mode, x), p.return = g, g = p;
          }
          return u(g);
        case nn:
          return R = y._init, G(g, p, R(y._payload), x);
      }
      if (ei(y))
        return P(g, p, y, x);
      if (Vr(y))
        return L(g, p, y, x);
      yo(g, y);
    }
    return typeof y == "string" && y !== "" || typeof y == "number" ? (y = "" + y, p !== null && p.tag === 6 ? (n(g, p.sibling), p = o(p, y), p.return = g, g = p) : (n(g, p), p = ws(y, g.mode, x), p.return = g, g = p), u(g)) : n(g, p);
  }
  return G;
}
var Or = hp(!0), mp = hp(!1), ji = {}, It = wn(ji), Ci = wn(ji), xi = wn(ji);
function In(e) {
  if (e === ji)
    throw Error(T(174));
  return e;
}
function Bu(e, t) {
  switch (ue(xi, t), ue(Ci, e), ue(It, ji), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ds(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ds(t, e);
  }
  fe(It), ue(It, t);
}
function Nr() {
  fe(It), fe(Ci), fe(xi);
}
function gp(e) {
  In(xi.current);
  var t = In(It.current), n = Ds(t, e.type);
  t !== n && (ue(Ci, e), ue(It, n));
}
function Wu(e) {
  Ci.current === e && (fe(It), fe(Ci));
}
var me = wn(0);
function qo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!"))
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128)
        return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e)
      break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e)
        return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var hs = [];
function Vu() {
  for (var e = 0; e < hs.length; e++)
    hs[e]._workInProgressVersionPrimary = null;
  hs.length = 0;
}
var Lo = Yt.ReactCurrentDispatcher, ms = Yt.ReactCurrentBatchConfig, $n = 0, ge = null, xe = null, Ne = null, Jo = !1, ui = !1, Ti = 0, yv = 0;
function je() {
  throw Error(T(321));
}
function Qu(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Tt(e[n], t[n]))
      return !1;
  return !0;
}
function Ku(e, t, n, r, o, l) {
  if ($n = l, ge = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Lo.current = e === null || e.memoizedState === null ? Sv : Ev, e = n(r, o), ui) {
    l = 0;
    do {
      if (ui = !1, Ti = 0, 25 <= l)
        throw Error(T(301));
      l += 1, Ne = xe = null, t.updateQueue = null, Lo.current = Cv, e = n(r, o);
    } while (ui);
  }
  if (Lo.current = el, t = xe !== null && xe.next !== null, $n = 0, Ne = xe = ge = null, Jo = !1, t)
    throw Error(T(300));
  return e;
}
function Yu() {
  var e = Ti !== 0;
  return Ti = 0, e;
}
function Dt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Ne === null ? ge.memoizedState = Ne = e : Ne = Ne.next = e, Ne;
}
function vt() {
  if (xe === null) {
    var e = ge.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = xe.next;
  var t = Ne === null ? ge.memoizedState : Ne.next;
  if (t !== null)
    Ne = t, xe = e;
  else {
    if (e === null)
      throw Error(T(310));
    xe = e, e = { memoizedState: xe.memoizedState, baseState: xe.baseState, baseQueue: xe.baseQueue, queue: xe.queue, next: null }, Ne === null ? ge.memoizedState = Ne = e : Ne = Ne.next = e;
  }
  return Ne;
}
function Oi(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function gs(e) {
  var t = vt(), n = t.queue;
  if (n === null)
    throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = xe, o = r.baseQueue, l = n.pending;
  if (l !== null) {
    if (o !== null) {
      var u = o.next;
      o.next = l.next, l.next = u;
    }
    r.baseQueue = o = l, n.pending = null;
  }
  if (o !== null) {
    l = o.next, r = r.baseState;
    var f = u = null, d = null, h = l;
    do {
      var S = h.lane;
      if (($n & S) === S)
        d !== null && (d = d.next = { lane: 0, action: h.action, hasEagerState: h.hasEagerState, eagerState: h.eagerState, next: null }), r = h.hasEagerState ? h.eagerState : e(r, h.action);
      else {
        var E = {
          lane: S,
          action: h.action,
          hasEagerState: h.hasEagerState,
          eagerState: h.eagerState,
          next: null
        };
        d === null ? (f = d = E, u = r) : d = d.next = E, ge.lanes |= S, Un |= S;
      }
      h = h.next;
    } while (h !== null && h !== l);
    d === null ? u = r : d.next = f, Tt(r, t.memoizedState) || (Ke = !0), t.memoizedState = r, t.baseState = u, t.baseQueue = d, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      l = o.lane, ge.lanes |= l, Un |= l, o = o.next;
    while (o !== e);
  } else
    o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function vs(e) {
  var t = vt(), n = t.queue;
  if (n === null)
    throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, l = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var u = o = o.next;
    do
      l = e(l, u.action), u = u.next;
    while (u !== o);
    Tt(l, t.memoizedState) || (Ke = !0), t.memoizedState = l, t.baseQueue === null && (t.baseState = l), n.lastRenderedState = l;
  }
  return [l, r];
}
function vp() {
}
function yp(e, t) {
  var n = ge, r = vt(), o = t(), l = !Tt(r.memoizedState, o);
  if (l && (r.memoizedState = o, Ke = !0), r = r.queue, Xu(kp.bind(null, n, r, e), [e]), r.getSnapshot !== t || l || Ne !== null && Ne.memoizedState.tag & 1) {
    if (n.flags |= 2048, Ni(9, wp.bind(null, n, r, o, t), void 0, null), Pe === null)
      throw Error(T(349));
    $n & 30 || _p(n, t, o);
  }
  return o;
}
function _p(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ge.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ge.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function wp(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Sp(t) && Ep(e);
}
function kp(e, t, n) {
  return n(function() {
    Sp(t) && Ep(e);
  });
}
function Sp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Tt(e, n);
  } catch {
    return !0;
  }
}
function Ep(e) {
  var t = Qt(e, 1);
  t !== null && xt(t, e, 1, -1);
}
function Tf(e) {
  var t = Dt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Oi, lastRenderedState: e }, t.queue = e, e = e.dispatch = kv.bind(null, ge, e), [t.memoizedState, e];
}
function Ni(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ge.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ge.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Cp() {
  return vt().memoizedState;
}
function Ao(e, t, n, r) {
  var o = Dt();
  ge.flags |= e, o.memoizedState = Ni(1 | t, n, void 0, r === void 0 ? null : r);
}
function ml(e, t, n, r) {
  var o = vt();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (xe !== null) {
    var u = xe.memoizedState;
    if (l = u.destroy, r !== null && Qu(r, u.deps)) {
      o.memoizedState = Ni(t, n, l, r);
      return;
    }
  }
  ge.flags |= e, o.memoizedState = Ni(1 | t, n, l, r);
}
function Of(e, t) {
  return Ao(8390656, 8, e, t);
}
function Xu(e, t) {
  return ml(2048, 8, e, t);
}
function xp(e, t) {
  return ml(4, 2, e, t);
}
function Tp(e, t) {
  return ml(4, 4, e, t);
}
function Op(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function Np(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ml(4, 4, Op.bind(null, t, e), n);
}
function Gu() {
}
function Pp(e, t) {
  var n = vt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Qu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Lp(e, t) {
  var n = vt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Qu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Ap(e, t, n) {
  return $n & 21 ? (Tt(n, t) || (n = jd(), ge.lanes |= n, Un |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ke = !0), e.memoizedState = n);
}
function _v(e, t) {
  var n = re;
  re = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = ms.transition;
  ms.transition = {};
  try {
    e(!1), t();
  } finally {
    re = n, ms.transition = r;
  }
}
function Dp() {
  return vt().memoizedState;
}
function wv(e, t, n) {
  var r = mn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, zp(e))
    jp(t, n);
  else if (n = cp(e, t, n, r), n !== null) {
    var o = Be();
    xt(n, e, r, o), Ip(n, t, r);
  }
}
function kv(e, t, n) {
  var r = mn(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (zp(e))
    jp(t, o);
  else {
    var l = e.alternate;
    if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer, l !== null))
      try {
        var u = t.lastRenderedState, f = l(u, n);
        if (o.hasEagerState = !0, o.eagerState = f, Tt(f, u)) {
          var d = t.interleaved;
          d === null ? (o.next = o, Uu(t)) : (o.next = d.next, d.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
    n = cp(e, t, o, r), n !== null && (o = Be(), xt(n, e, r, o), Ip(n, t, r));
  }
}
function zp(e) {
  var t = e.alternate;
  return e === ge || t !== null && t === ge;
}
function jp(e, t) {
  ui = Jo = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Ip(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ou(e, n);
  }
}
var el = { readContext: gt, useCallback: je, useContext: je, useEffect: je, useImperativeHandle: je, useInsertionEffect: je, useLayoutEffect: je, useMemo: je, useReducer: je, useRef: je, useState: je, useDebugValue: je, useDeferredValue: je, useTransition: je, useMutableSource: je, useSyncExternalStore: je, useId: je, unstable_isNewReconciler: !1 }, Sv = { readContext: gt, useCallback: function(e, t) {
  return Dt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: gt, useEffect: Of, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ao(
    4194308,
    4,
    Op.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Ao(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Ao(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Dt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Dt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = wv.bind(null, ge, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Dt();
  return e = { current: e }, t.memoizedState = e;
}, useState: Tf, useDebugValue: Gu, useDeferredValue: function(e) {
  return Dt().memoizedState = e;
}, useTransition: function() {
  var e = Tf(!1), t = e[0];
  return e = _v.bind(null, e[1]), Dt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = ge, o = Dt();
  if (he) {
    if (n === void 0)
      throw Error(T(407));
    n = n();
  } else {
    if (n = t(), Pe === null)
      throw Error(T(349));
    $n & 30 || _p(r, t, n);
  }
  o.memoizedState = n;
  var l = { value: n, getSnapshot: t };
  return o.queue = l, Of(kp.bind(
    null,
    r,
    l,
    e
  ), [e]), r.flags |= 2048, Ni(9, wp.bind(null, r, l, n, t), void 0, null), n;
}, useId: function() {
  var e = Dt(), t = Pe.identifierPrefix;
  if (he) {
    var n = Ht, r = Ut;
    n = (r & ~(1 << 32 - Ct(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Ti++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = yv++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Ev = {
  readContext: gt,
  useCallback: Pp,
  useContext: gt,
  useEffect: Xu,
  useImperativeHandle: Np,
  useInsertionEffect: xp,
  useLayoutEffect: Tp,
  useMemo: Lp,
  useReducer: gs,
  useRef: Cp,
  useState: function() {
    return gs(Oi);
  },
  useDebugValue: Gu,
  useDeferredValue: function(e) {
    var t = vt();
    return Ap(t, xe.memoizedState, e);
  },
  useTransition: function() {
    var e = gs(Oi)[0], t = vt().memoizedState;
    return [e, t];
  },
  useMutableSource: vp,
  useSyncExternalStore: yp,
  useId: Dp,
  unstable_isNewReconciler: !1
}, Cv = { readContext: gt, useCallback: Pp, useContext: gt, useEffect: Xu, useImperativeHandle: Np, useInsertionEffect: xp, useLayoutEffect: Tp, useMemo: Lp, useReducer: vs, useRef: Cp, useState: function() {
  return vs(Oi);
}, useDebugValue: Gu, useDeferredValue: function(e) {
  var t = vt();
  return xe === null ? t.memoizedState = e : Ap(t, xe.memoizedState, e);
}, useTransition: function() {
  var e = vs(Oi)[0], t = vt().memoizedState;
  return [e, t];
}, useMutableSource: vp, useSyncExternalStore: yp, useId: Dp, unstable_isNewReconciler: !1 };
function Pr(e, t) {
  try {
    var n = "", r = t;
    do
      n += qm(r), r = r.return;
    while (r);
    var o = n;
  } catch (l) {
    o = `
Error generating stack: ` + l.message + `
` + l.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function ys(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function tu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var xv = typeof WeakMap == "function" ? WeakMap : Map;
function Mp(e, t, n) {
  n = Bt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    nl || (nl = !0, fu = r), tu(e, t);
  }, n;
}
function Rp(e, t, n) {
  n = Bt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      tu(e, t);
    };
  }
  var l = e.stateNode;
  return l !== null && typeof l.componentDidCatch == "function" && (n.callback = function() {
    tu(e, t), typeof r != "function" && (hn === null ? hn = /* @__PURE__ */ new Set([this]) : hn.add(this));
    var u = t.stack;
    this.componentDidCatch(t.value, { componentStack: u !== null ? u : "" });
  }), n;
}
function Nf(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new xv();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else
    o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = Fv.bind(null, e, t, n), t.then(e, e));
}
function Pf(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Lf(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Bt(-1, 1), t.tag = 2, pn(n, t, 1))), n.lanes |= 1), e);
}
var Tv = Yt.ReactCurrentOwner, Ke = !1;
function He(e, t, n, r) {
  t.child = e === null ? mp(t, null, n, r) : Or(t, e.child, n, r);
}
function Af(e, t, n, r, o) {
  n = n.render;
  var l = t.ref;
  return Sr(t, o), r = Ku(e, t, n, r, l, o), n = Yu(), e !== null && !Ke ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Kt(e, t, o)) : (he && n && Iu(t), t.flags |= 1, He(e, t, r, o), t.child);
}
function Df(e, t, n, r, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" && !ia(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = l, bp(e, t, l, r, o)) : (e = Io(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (l = e.child, !(e.lanes & o)) {
    var u = l.memoizedProps;
    if (n = n.compare, n = n !== null ? n : wi, n(u, r) && e.ref === t.ref)
      return Kt(e, t, o);
  }
  return t.flags |= 1, e = gn(l, r), e.ref = t.ref, e.return = t, t.child = e;
}
function bp(e, t, n, r, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (wi(l, r) && e.ref === t.ref)
      if (Ke = !1, t.pendingProps = r = l, (e.lanes & o) !== 0)
        e.flags & 131072 && (Ke = !0);
      else
        return t.lanes = e.lanes, Kt(e, t, o);
  }
  return nu(e, t, n, r, o);
}
function Fp(e, t, n) {
  var r = t.pendingProps, o = r.children, l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ue(gr, nt), nt |= n;
    else {
      if (!(n & 1073741824))
        return e = l !== null ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ue(gr, nt), nt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = l !== null ? l.baseLanes : n, ue(gr, nt), nt |= r;
    }
  else
    l !== null ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, ue(gr, nt), nt |= r;
  return He(e, t, o, n), t.child;
}
function $p(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function nu(e, t, n, r, o) {
  var l = Xe(n) ? bn : Re.current;
  return l = xr(t, l), Sr(t, o), n = Ku(e, t, n, r, l, o), r = Yu(), e !== null && !Ke ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Kt(e, t, o)) : (he && r && Iu(t), t.flags |= 1, He(e, t, n, o), t.child);
}
function zf(e, t, n, r, o) {
  if (Xe(n)) {
    var l = !0;
    Qo(t);
  } else
    l = !1;
  if (Sr(t, o), t.stateNode === null)
    Do(e, t), pp(t, n, r), eu(t, n, r, o), r = !0;
  else if (e === null) {
    var u = t.stateNode, f = t.memoizedProps;
    u.props = f;
    var d = u.context, h = n.contextType;
    typeof h == "object" && h !== null ? h = gt(h) : (h = Xe(n) ? bn : Re.current, h = xr(t, h));
    var S = n.getDerivedStateFromProps, E = typeof S == "function" || typeof u.getSnapshotBeforeUpdate == "function";
    E || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (f !== r || d !== h) && Cf(t, u, r, h), rn = !1;
    var w = t.memoizedState;
    u.state = w, Zo(t, r, u, o), d = t.memoizedState, f !== r || w !== d || Ye.current || rn ? (typeof S == "function" && (Js(t, n, S, r), d = t.memoizedState), (f = rn || Ef(t, n, f, r, w, d, h)) ? (E || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = d), u.props = r, u.state = d, u.context = h, r = f) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    u = t.stateNode, fp(e, t), f = t.memoizedProps, h = t.type === t.elementType ? f : kt(t.type, f), u.props = h, E = t.pendingProps, w = u.context, d = n.contextType, typeof d == "object" && d !== null ? d = gt(d) : (d = Xe(n) ? bn : Re.current, d = xr(t, d));
    var N = n.getDerivedStateFromProps;
    (S = typeof N == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (f !== E || w !== d) && Cf(t, u, r, d), rn = !1, w = t.memoizedState, u.state = w, Zo(t, r, u, o);
    var P = t.memoizedState;
    f !== E || w !== P || Ye.current || rn ? (typeof N == "function" && (Js(t, n, N, r), P = t.memoizedState), (h = rn || Ef(t, n, h, r, w, P, d) || !1) ? (S || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(r, P, d), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(r, P, d)), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || f === e.memoizedProps && w === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && w === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = P), u.props = r, u.state = P, u.context = d, r = h) : (typeof u.componentDidUpdate != "function" || f === e.memoizedProps && w === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && w === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return ru(e, t, n, r, l, o);
}
function ru(e, t, n, r, o, l) {
  $p(e, t);
  var u = (t.flags & 128) !== 0;
  if (!r && !u)
    return o && yf(t, n, !1), Kt(e, t, l);
  r = t.stateNode, Tv.current = t;
  var f = u && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && u ? (t.child = Or(t, e.child, null, l), t.child = Or(t, null, f, l)) : He(e, t, f, l), t.memoizedState = r.state, o && yf(t, n, !0), t.child;
}
function Up(e) {
  var t = e.stateNode;
  t.pendingContext ? vf(e, t.pendingContext, t.pendingContext !== t.context) : t.context && vf(e, t.context, !1), Bu(e, t.containerInfo);
}
function jf(e, t, n, r, o) {
  return Tr(), Ru(o), t.flags |= 256, He(e, t, n, r), t.child;
}
var iu = { dehydrated: null, treeContext: null, retryLane: 0 };
function ou(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Hp(e, t, n) {
  var r = t.pendingProps, o = me.current, l = !1, u = (t.flags & 128) !== 0, f;
  if ((f = u) || (f = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), f ? (l = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), ue(me, o & 1), e === null)
    return Zs(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (u = r.children, e = r.fallback, l ? (r = t.mode, l = t.child, u = { mode: "hidden", children: u }, !(r & 1) && l !== null ? (l.childLanes = 0, l.pendingProps = u) : l = yl(u, r, 0, null), e = Rn(e, r, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = ou(n), t.memoizedState = iu, e) : Zu(t, u));
  if (o = e.memoizedState, o !== null && (f = o.dehydrated, f !== null))
    return Ov(e, t, u, r, f, o, n);
  if (l) {
    l = r.fallback, u = t.mode, o = e.child, f = o.sibling;
    var d = { mode: "hidden", children: r.children };
    return !(u & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = d, t.deletions = null) : (r = gn(o, d), r.subtreeFlags = o.subtreeFlags & 14680064), f !== null ? l = gn(f, l) : (l = Rn(l, u, n, null), l.flags |= 2), l.return = t, r.return = t, r.sibling = l, t.child = r, r = l, l = t.child, u = e.child.memoizedState, u = u === null ? ou(n) : { baseLanes: u.baseLanes | n, cachePool: null, transitions: u.transitions }, l.memoizedState = u, l.childLanes = e.childLanes & ~n, t.memoizedState = iu, r;
  }
  return l = e.child, e = l.sibling, r = gn(l, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Zu(e, t) {
  return t = yl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function _o(e, t, n, r) {
  return r !== null && Ru(r), Or(t, e.child, null, n), e = Zu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Ov(e, t, n, r, o, l, u) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = ys(Error(T(422))), _o(e, t, u, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (l = r.fallback, o = t.mode, r = yl({ mode: "visible", children: r.children }, o, 0, null), l = Rn(l, o, u, null), l.flags |= 2, r.return = t, l.return = t, r.sibling = l, t.child = r, t.mode & 1 && Or(t, e.child, null, u), t.child.memoizedState = ou(u), t.memoizedState = iu, l);
  if (!(t.mode & 1))
    return _o(e, t, u, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r)
      var f = r.dgst;
    return r = f, l = Error(T(419)), r = ys(l, r, void 0), _o(e, t, u, r);
  }
  if (f = (u & e.childLanes) !== 0, Ke || f) {
    if (r = Pe, r !== null) {
      switch (u & -u) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
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
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      o = o & (r.suspendedLanes | u) ? 0 : o, o !== 0 && o !== l.retryLane && (l.retryLane = o, Qt(e, o), xt(r, e, o, -1));
    }
    return ra(), r = ys(Error(T(421))), _o(e, t, u, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = $v.bind(null, e), o._reactRetry = t, null) : (e = l.treeContext, rt = dn(o.nextSibling), it = t, he = !0, Et = null, e !== null && (dt[pt++] = Ut, dt[pt++] = Ht, dt[pt++] = Fn, Ut = e.id, Ht = e.overflow, Fn = t), t = Zu(t, r.children), t.flags |= 4096, t);
}
function If(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), qs(e.return, t, n);
}
function _s(e, t, n, r, o) {
  var l = e.memoizedState;
  l === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (l.isBackwards = t, l.rendering = null, l.renderingStartTime = 0, l.last = r, l.tail = n, l.tailMode = o);
}
function Bp(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, l = r.tail;
  if (He(e, t, r.children, n), r = me.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && If(e, n, t);
          else if (e.tag === 19)
            If(e, n, t);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t)
            break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
    r &= 1;
  }
  if (ue(me, r), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          e = n.alternate, e !== null && qo(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), _s(t, !1, o, n, l);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && qo(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        _s(t, !0, n, null, l);
        break;
      case "together":
        _s(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Do(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Kt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Un |= t.lanes, !(n & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(T(153));
  if (t.child !== null) {
    for (e = t.child, n = gn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = gn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Nv(e, t, n) {
  switch (t.tag) {
    case 3:
      Up(t), Tr();
      break;
    case 5:
      gp(t);
      break;
    case 1:
      Xe(t.type) && Qo(t);
      break;
    case 4:
      Bu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      ue(Xo, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (ue(me, me.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Hp(e, t, n) : (ue(me, me.current & 1), e = Kt(e, t, n), e !== null ? e.sibling : null);
      ue(me, me.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return Bp(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), ue(me, me.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Fp(e, t, n);
  }
  return Kt(e, t, n);
}
var Wp, lu, Vp, Qp;
Wp = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6)
      e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t)
      break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t)
        return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
lu = function() {
};
Vp = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, In(It.current);
    var l = null;
    switch (n) {
      case "input":
        o = Ns(e, o), r = Ns(e, r), l = [];
        break;
      case "select":
        o = ve({}, o, { value: void 0 }), r = ve({}, r, { value: void 0 }), l = [];
        break;
      case "textarea":
        o = As(e, o), r = As(e, r), l = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Wo);
    }
    zs(n, r);
    var u;
    n = null;
    for (h in o)
      if (!r.hasOwnProperty(h) && o.hasOwnProperty(h) && o[h] != null)
        if (h === "style") {
          var f = o[h];
          for (u in f)
            f.hasOwnProperty(u) && (n || (n = {}), n[u] = "");
        } else
          h !== "dangerouslySetInnerHTML" && h !== "children" && h !== "suppressContentEditableWarning" && h !== "suppressHydrationWarning" && h !== "autoFocus" && (pi.hasOwnProperty(h) ? l || (l = []) : (l = l || []).push(h, null));
    for (h in r) {
      var d = r[h];
      if (f = o != null ? o[h] : void 0, r.hasOwnProperty(h) && d !== f && (d != null || f != null))
        if (h === "style")
          if (f) {
            for (u in f)
              !f.hasOwnProperty(u) || d && d.hasOwnProperty(u) || (n || (n = {}), n[u] = "");
            for (u in d)
              d.hasOwnProperty(u) && f[u] !== d[u] && (n || (n = {}), n[u] = d[u]);
          } else
            n || (l || (l = []), l.push(
              h,
              n
            )), n = d;
        else
          h === "dangerouslySetInnerHTML" ? (d = d ? d.__html : void 0, f = f ? f.__html : void 0, d != null && f !== d && (l = l || []).push(h, d)) : h === "children" ? typeof d != "string" && typeof d != "number" || (l = l || []).push(h, "" + d) : h !== "suppressContentEditableWarning" && h !== "suppressHydrationWarning" && (pi.hasOwnProperty(h) ? (d != null && h === "onScroll" && ce("scroll", e), l || f === d || (l = [])) : (l = l || []).push(h, d));
    }
    n && (l = l || []).push("style", n);
    var h = l;
    (t.updateQueue = h) && (t.flags |= 4);
  }
};
Qp = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Zr(e, t) {
  if (!he)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
}
function Ie(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else
    for (o = e.child; o !== null; )
      n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Pv(e, t, n) {
  var r = t.pendingProps;
  switch (Mu(t), t.tag) {
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
      return Ie(t), null;
    case 1:
      return Xe(t.type) && Vo(), Ie(t), null;
    case 3:
      return r = t.stateNode, Nr(), fe(Ye), fe(Re), Vu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (vo(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Et !== null && (hu(Et), Et = null))), lu(e, t), Ie(t), null;
    case 5:
      Wu(t);
      var o = In(xi.current);
      if (n = t.type, e !== null && t.stateNode != null)
        Vp(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(T(166));
          return Ie(t), null;
        }
        if (e = In(It.current), vo(t)) {
          r = t.stateNode, n = t.type;
          var l = t.memoizedProps;
          switch (r[zt] = t, r[Ei] = l, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              ce("cancel", r), ce("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ce("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < ni.length; o++)
                ce(ni[o], r);
              break;
            case "source":
              ce("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ce(
                "error",
                r
              ), ce("load", r);
              break;
            case "details":
              ce("toggle", r);
              break;
            case "input":
              Bc(r, l), ce("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!l.multiple }, ce("invalid", r);
              break;
            case "textarea":
              Vc(r, l), ce("invalid", r);
          }
          zs(n, l), o = null;
          for (var u in l)
            if (l.hasOwnProperty(u)) {
              var f = l[u];
              u === "children" ? typeof f == "string" ? r.textContent !== f && (l.suppressHydrationWarning !== !0 && go(r.textContent, f, e), o = ["children", f]) : typeof f == "number" && r.textContent !== "" + f && (l.suppressHydrationWarning !== !0 && go(
                r.textContent,
                f,
                e
              ), o = ["children", "" + f]) : pi.hasOwnProperty(u) && f != null && u === "onScroll" && ce("scroll", r);
            }
          switch (n) {
            case "input":
              so(r), Wc(r, l, !0);
              break;
            case "textarea":
              so(r), Qc(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = Wo);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          u = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = _d(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = u.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = u.createElement(n, { is: r.is }) : (e = u.createElement(n), n === "select" && (u = e, r.multiple ? u.multiple = !0 : r.size && (u.size = r.size))) : e = u.createElementNS(e, n), e[zt] = t, e[Ei] = r, Wp(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (u = js(n, r), n) {
              case "dialog":
                ce("cancel", e), ce("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                ce("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < ni.length; o++)
                  ce(ni[o], e);
                o = r;
                break;
              case "source":
                ce("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                ce(
                  "error",
                  e
                ), ce("load", e), o = r;
                break;
              case "details":
                ce("toggle", e), o = r;
                break;
              case "input":
                Bc(e, r), o = Ns(e, r), ce("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = ve({}, r, { value: void 0 }), ce("invalid", e);
                break;
              case "textarea":
                Vc(e, r), o = As(e, r), ce("invalid", e);
                break;
              default:
                o = r;
            }
            zs(n, o), f = o;
            for (l in f)
              if (f.hasOwnProperty(l)) {
                var d = f[l];
                l === "style" ? Sd(e, d) : l === "dangerouslySetInnerHTML" ? (d = d ? d.__html : void 0, d != null && wd(e, d)) : l === "children" ? typeof d == "string" ? (n !== "textarea" || d !== "") && hi(e, d) : typeof d == "number" && hi(e, "" + d) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (pi.hasOwnProperty(l) ? d != null && l === "onScroll" && ce("scroll", e) : d != null && ku(e, l, d, u));
              }
            switch (n) {
              case "input":
                so(e), Wc(e, r, !1);
                break;
              case "textarea":
                so(e), Qc(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + vn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, l = r.value, l != null ? yr(e, !!r.multiple, l, !1) : r.defaultValue != null && yr(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Wo);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return Ie(t), null;
    case 6:
      if (e && t.stateNode != null)
        Qp(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(T(166));
        if (n = In(xi.current), In(It.current), vo(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[zt] = t, (l = r.nodeValue !== n) && (e = it, e !== null))
            switch (e.tag) {
              case 3:
                go(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && go(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[zt] = t, t.stateNode = r;
      }
      return Ie(t), null;
    case 13:
      if (fe(me), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (he && rt !== null && t.mode & 1 && !(t.flags & 128))
          ap(), Tr(), t.flags |= 98560, l = !1;
        else if (l = vo(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!l)
              throw Error(T(318));
            if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l)
              throw Error(T(317));
            l[zt] = t;
          } else
            Tr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Ie(t), l = !1;
        } else
          Et !== null && (hu(Et), Et = null), l = !0;
        if (!l)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || me.current & 1 ? Te === 0 && (Te = 3) : ra())), t.updateQueue !== null && (t.flags |= 4), Ie(t), null);
    case 4:
      return Nr(), lu(e, t), e === null && ki(t.stateNode.containerInfo), Ie(t), null;
    case 10:
      return $u(t.type._context), Ie(t), null;
    case 17:
      return Xe(t.type) && Vo(), Ie(t), null;
    case 19:
      if (fe(me), l = t.memoizedState, l === null)
        return Ie(t), null;
      if (r = (t.flags & 128) !== 0, u = l.rendering, u === null)
        if (r)
          Zr(l, !1);
        else {
          if (Te !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (u = qo(e), u !== null) {
                for (t.flags |= 128, Zr(l, !1), r = u.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  l = n, e = r, l.flags &= 14680066, u = l.alternate, u === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, e = u.dependencies, l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return ue(me, me.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null && Se() > Lr && (t.flags |= 128, r = !0, Zr(l, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = qo(u), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Zr(l, !0), l.tail === null && l.tailMode === "hidden" && !u.alternate && !he)
              return Ie(t), null;
          } else
            2 * Se() - l.renderingStartTime > Lr && n !== 1073741824 && (t.flags |= 128, r = !0, Zr(l, !1), t.lanes = 4194304);
        l.isBackwards ? (u.sibling = t.child, t.child = u) : (n = l.last, n !== null ? n.sibling = u : t.child = u, l.last = u);
      }
      return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = Se(), t.sibling = null, n = me.current, ue(me, r ? n & 1 | 2 : n & 1), t) : (Ie(t), null);
    case 22:
    case 23:
      return na(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? nt & 1073741824 && (Ie(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ie(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(T(156, t.tag));
}
function Lv(e, t) {
  switch (Mu(t), t.tag) {
    case 1:
      return Xe(t.type) && Vo(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Nr(), fe(Ye), fe(Re), Vu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Wu(t), null;
    case 13:
      if (fe(me), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(T(340));
        Tr();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return fe(me), null;
    case 4:
      return Nr(), null;
    case 10:
      return $u(t.type._context), null;
    case 22:
    case 23:
      return na(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var wo = !1, Me = !1, Av = typeof WeakSet == "function" ? WeakSet : Set, I = null;
function mr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        _e(e, t, r);
      }
    else
      n.current = null;
}
function su(e, t, n) {
  try {
    n();
  } catch (r) {
    _e(e, t, r);
  }
}
var Mf = !1;
function Dv(e, t) {
  if (Ws = Uo, e = Gd(), ju(e)) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset, l = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, l.nodeType;
          } catch {
            n = null;
            break e;
          }
          var u = 0, f = -1, d = -1, h = 0, S = 0, E = e, w = null;
          t:
            for (; ; ) {
              for (var N; E !== n || o !== 0 && E.nodeType !== 3 || (f = u + o), E !== l || r !== 0 && E.nodeType !== 3 || (d = u + r), E.nodeType === 3 && (u += E.nodeValue.length), (N = E.firstChild) !== null; )
                w = E, E = N;
              for (; ; ) {
                if (E === e)
                  break t;
                if (w === n && ++h === o && (f = u), w === l && ++S === r && (d = u), (N = E.nextSibling) !== null)
                  break;
                E = w, w = E.parentNode;
              }
              E = N;
            }
          n = f === -1 || d === -1 ? null : { start: f, end: d };
        } else
          n = null;
      }
    n = n || { start: 0, end: 0 };
  } else
    n = null;
  for (Vs = { focusedElem: e, selectionRange: n }, Uo = !1, I = t; I !== null; )
    if (t = I, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, I = e;
    else
      for (; I !== null; ) {
        t = I;
        try {
          var P = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (P !== null) {
                  var L = P.memoizedProps, G = P.memoizedState, g = t.stateNode, p = g.getSnapshotBeforeUpdate(t.elementType === t.type ? L : kt(t.type, L), G);
                  g.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1 ? y.textContent = "" : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(T(163));
            }
        } catch (x) {
          _e(t, t.return, x);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, I = e;
          break;
        }
        I = t.return;
      }
  return P = Mf, Mf = !1, P;
}
function ai(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy;
        o.destroy = void 0, l !== void 0 && su(t, n, l);
      }
      o = o.next;
    } while (o !== r);
  }
}
function gl(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function uu(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function Kp(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Kp(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[zt], delete t[Ei], delete t[Ys], delete t[hv], delete t[mv])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Yp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Rf(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Yp(e.return))
          return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4)
          continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2))
        return e.stateNode;
    }
}
function au(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Wo));
  else if (r !== 4 && (e = e.child, e !== null))
    for (au(e, t, n), e = e.sibling; e !== null; )
      au(e, t, n), e = e.sibling;
}
function cu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (cu(e, t, n), e = e.sibling; e !== null; )
      cu(e, t, n), e = e.sibling;
}
var Ae = null, St = !1;
function tn(e, t, n) {
  for (n = n.child; n !== null; )
    Xp(e, t, n), n = n.sibling;
}
function Xp(e, t, n) {
  if (jt && typeof jt.onCommitFiberUnmount == "function")
    try {
      jt.onCommitFiberUnmount(ul, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      Me || mr(n, t);
    case 6:
      var r = Ae, o = St;
      Ae = null, tn(e, t, n), Ae = r, St = o, Ae !== null && (St ? (e = Ae, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ae.removeChild(n.stateNode));
      break;
    case 18:
      Ae !== null && (St ? (e = Ae, n = n.stateNode, e.nodeType === 8 ? ds(e.parentNode, n) : e.nodeType === 1 && ds(e, n), yi(e)) : ds(Ae, n.stateNode));
      break;
    case 4:
      r = Ae, o = St, Ae = n.stateNode.containerInfo, St = !0, tn(e, t, n), Ae = r, St = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Me && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var l = o, u = l.destroy;
          l = l.tag, u !== void 0 && (l & 2 || l & 4) && su(n, t, u), o = o.next;
        } while (o !== r);
      }
      tn(e, t, n);
      break;
    case 1:
      if (!Me && (mr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (f) {
          _e(n, t, f);
        }
      tn(e, t, n);
      break;
    case 21:
      tn(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Me = (r = Me) || n.memoizedState !== null, tn(e, t, n), Me = r) : tn(e, t, n);
      break;
    default:
      tn(e, t, n);
  }
}
function bf(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Av()), t.forEach(function(r) {
      var o = Uv.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function wt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var l = e, u = t, f = u;
        e:
          for (; f !== null; ) {
            switch (f.tag) {
              case 5:
                Ae = f.stateNode, St = !1;
                break e;
              case 3:
                Ae = f.stateNode.containerInfo, St = !0;
                break e;
              case 4:
                Ae = f.stateNode.containerInfo, St = !0;
                break e;
            }
            f = f.return;
          }
        if (Ae === null)
          throw Error(T(160));
        Xp(l, u, o), Ae = null, St = !1;
        var d = o.alternate;
        d !== null && (d.return = null), o.return = null;
      } catch (h) {
        _e(o, t, h);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      Gp(t, e), t = t.sibling;
}
function Gp(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (wt(t, e), At(e), r & 4) {
        try {
          ai(3, e, e.return), gl(3, e);
        } catch (L) {
          _e(e, e.return, L);
        }
        try {
          ai(5, e, e.return);
        } catch (L) {
          _e(e, e.return, L);
        }
      }
      break;
    case 1:
      wt(t, e), At(e), r & 512 && n !== null && mr(n, n.return);
      break;
    case 5:
      if (wt(t, e), At(e), r & 512 && n !== null && mr(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          hi(o, "");
        } catch (L) {
          _e(e, e.return, L);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var l = e.memoizedProps, u = n !== null ? n.memoizedProps : l, f = e.type, d = e.updateQueue;
        if (e.updateQueue = null, d !== null)
          try {
            f === "input" && l.type === "radio" && l.name != null && vd(o, l), js(f, u);
            var h = js(f, l);
            for (u = 0; u < d.length; u += 2) {
              var S = d[u], E = d[u + 1];
              S === "style" ? Sd(o, E) : S === "dangerouslySetInnerHTML" ? wd(o, E) : S === "children" ? hi(o, E) : ku(o, S, E, h);
            }
            switch (f) {
              case "input":
                Ps(o, l);
                break;
              case "textarea":
                yd(o, l);
                break;
              case "select":
                var w = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!l.multiple;
                var N = l.value;
                N != null ? yr(o, !!l.multiple, N, !1) : w !== !!l.multiple && (l.defaultValue != null ? yr(
                  o,
                  !!l.multiple,
                  l.defaultValue,
                  !0
                ) : yr(o, !!l.multiple, l.multiple ? [] : "", !1));
            }
            o[Ei] = l;
          } catch (L) {
            _e(e, e.return, L);
          }
      }
      break;
    case 6:
      if (wt(t, e), At(e), r & 4) {
        if (e.stateNode === null)
          throw Error(T(162));
        o = e.stateNode, l = e.memoizedProps;
        try {
          o.nodeValue = l;
        } catch (L) {
          _e(e, e.return, L);
        }
      }
      break;
    case 3:
      if (wt(t, e), At(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          yi(t.containerInfo);
        } catch (L) {
          _e(e, e.return, L);
        }
      break;
    case 4:
      wt(t, e), At(e);
      break;
    case 13:
      wt(t, e), At(e), o = e.child, o.flags & 8192 && (l = o.memoizedState !== null, o.stateNode.isHidden = l, !l || o.alternate !== null && o.alternate.memoizedState !== null || (ea = Se())), r & 4 && bf(e);
      break;
    case 22:
      if (S = n !== null && n.memoizedState !== null, e.mode & 1 ? (Me = (h = Me) || S, wt(t, e), Me = h) : wt(t, e), At(e), r & 8192) {
        if (h = e.memoizedState !== null, (e.stateNode.isHidden = h) && !S && e.mode & 1)
          for (I = e, S = e.child; S !== null; ) {
            for (E = I = S; I !== null; ) {
              switch (w = I, N = w.child, w.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ai(4, w, w.return);
                  break;
                case 1:
                  mr(w, w.return);
                  var P = w.stateNode;
                  if (typeof P.componentWillUnmount == "function") {
                    r = w, n = w.return;
                    try {
                      t = r, P.props = t.memoizedProps, P.state = t.memoizedState, P.componentWillUnmount();
                    } catch (L) {
                      _e(r, n, L);
                    }
                  }
                  break;
                case 5:
                  mr(w, w.return);
                  break;
                case 22:
                  if (w.memoizedState !== null) {
                    $f(E);
                    continue;
                  }
              }
              N !== null ? (N.return = w, I = N) : $f(E);
            }
            S = S.sibling;
          }
        e:
          for (S = null, E = e; ; ) {
            if (E.tag === 5) {
              if (S === null) {
                S = E;
                try {
                  o = E.stateNode, h ? (l = o.style, typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (f = E.stateNode, d = E.memoizedProps.style, u = d != null && d.hasOwnProperty("display") ? d.display : null, f.style.display = kd("display", u));
                } catch (L) {
                  _e(e, e.return, L);
                }
              }
            } else if (E.tag === 6) {
              if (S === null)
                try {
                  E.stateNode.nodeValue = h ? "" : E.memoizedProps;
                } catch (L) {
                  _e(e, e.return, L);
                }
            } else if ((E.tag !== 22 && E.tag !== 23 || E.memoizedState === null || E === e) && E.child !== null) {
              E.child.return = E, E = E.child;
              continue;
            }
            if (E === e)
              break e;
            for (; E.sibling === null; ) {
              if (E.return === null || E.return === e)
                break e;
              S === E && (S = null), E = E.return;
            }
            S === E && (S = null), E.sibling.return = E.return, E = E.sibling;
          }
      }
      break;
    case 19:
      wt(t, e), At(e), r & 4 && bf(e);
      break;
    case 21:
      break;
    default:
      wt(
        t,
        e
      ), At(e);
  }
}
function At(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Yp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(T(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (hi(o, ""), r.flags &= -33);
          var l = Rf(e);
          cu(e, l, o);
          break;
        case 3:
        case 4:
          var u = r.stateNode.containerInfo, f = Rf(e);
          au(e, f, u);
          break;
        default:
          throw Error(T(161));
      }
    } catch (d) {
      _e(e, e.return, d);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function zv(e, t, n) {
  I = e, Zp(e);
}
function Zp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; I !== null; ) {
    var o = I, l = o.child;
    if (o.tag === 22 && r) {
      var u = o.memoizedState !== null || wo;
      if (!u) {
        var f = o.alternate, d = f !== null && f.memoizedState !== null || Me;
        f = wo;
        var h = Me;
        if (wo = u, (Me = d) && !h)
          for (I = o; I !== null; )
            u = I, d = u.child, u.tag === 22 && u.memoizedState !== null ? Uf(o) : d !== null ? (d.return = u, I = d) : Uf(o);
        for (; l !== null; )
          I = l, Zp(l), l = l.sibling;
        I = o, wo = f, Me = h;
      }
      Ff(e);
    } else
      o.subtreeFlags & 8772 && l !== null ? (l.return = o, I = l) : Ff(e);
  }
}
function Ff(e) {
  for (; I !== null; ) {
    var t = I;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Me || gl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Me)
                if (n === null)
                  r.componentDidMount();
                else {
                  var o = t.elementType === t.type ? n.memoizedProps : kt(t.type, n.memoizedProps);
                  r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var l = t.updateQueue;
              l !== null && Sf(t, l, r);
              break;
            case 3:
              var u = t.updateQueue;
              if (u !== null) {
                if (n = null, t.child !== null)
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Sf(t, u, n);
              }
              break;
            case 5:
              var f = t.stateNode;
              if (n === null && t.flags & 4) {
                n = f;
                var d = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    d.autoFocus && n.focus();
                    break;
                  case "img":
                    d.src && (n.src = d.src);
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
                var h = t.alternate;
                if (h !== null) {
                  var S = h.memoizedState;
                  if (S !== null) {
                    var E = S.dehydrated;
                    E !== null && yi(E);
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
              throw Error(T(163));
          }
        Me || t.flags & 512 && uu(t);
      } catch (w) {
        _e(t, t.return, w);
      }
    }
    if (t === e) {
      I = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, I = n;
      break;
    }
    I = t.return;
  }
}
function $f(e) {
  for (; I !== null; ) {
    var t = I;
    if (t === e) {
      I = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, I = n;
      break;
    }
    I = t.return;
  }
}
function Uf(e) {
  for (; I !== null; ) {
    var t = I;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            gl(4, t);
          } catch (d) {
            _e(t, n, d);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (d) {
              _e(t, o, d);
            }
          }
          var l = t.return;
          try {
            uu(t);
          } catch (d) {
            _e(t, l, d);
          }
          break;
        case 5:
          var u = t.return;
          try {
            uu(t);
          } catch (d) {
            _e(t, u, d);
          }
      }
    } catch (d) {
      _e(t, t.return, d);
    }
    if (t === e) {
      I = null;
      break;
    }
    var f = t.sibling;
    if (f !== null) {
      f.return = t.return, I = f;
      break;
    }
    I = t.return;
  }
}
var jv = Math.ceil, tl = Yt.ReactCurrentDispatcher, qu = Yt.ReactCurrentOwner, mt = Yt.ReactCurrentBatchConfig, J = 0, Pe = null, Ee = null, De = 0, nt = 0, gr = wn(0), Te = 0, Pi = null, Un = 0, vl = 0, Ju = 0, ci = null, Qe = null, ea = 0, Lr = 1 / 0, Ft = null, nl = !1, fu = null, hn = null, ko = !1, un = null, rl = 0, fi = 0, du = null, zo = -1, jo = 0;
function Be() {
  return J & 6 ? Se() : zo !== -1 ? zo : zo = Se();
}
function mn(e) {
  return e.mode & 1 ? J & 2 && De !== 0 ? De & -De : vv.transition !== null ? (jo === 0 && (jo = jd()), jo) : (e = re, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ud(e.type)), e) : 1;
}
function xt(e, t, n, r) {
  if (50 < fi)
    throw fi = 0, du = null, Error(T(185));
  Ai(e, n, r), (!(J & 2) || e !== Pe) && (e === Pe && (!(J & 2) && (vl |= n), Te === 4 && ln(e, De)), Ge(e, r), n === 1 && J === 0 && !(t.mode & 1) && (Lr = Se() + 500, pl && kn()));
}
function Ge(e, t) {
  var n = e.callbackNode;
  vg(e, t);
  var r = $o(e, e === Pe ? De : 0);
  if (r === 0)
    n !== null && Xc(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Xc(n), t === 1)
      e.tag === 0 ? gv(Hf.bind(null, e)) : lp(Hf.bind(null, e)), dv(function() {
        !(J & 6) && kn();
      }), n = null;
    else {
      switch (Id(r)) {
        case 1:
          n = Tu;
          break;
        case 4:
          n = Dd;
          break;
        case 16:
          n = Fo;
          break;
        case 536870912:
          n = zd;
          break;
        default:
          n = Fo;
      }
      n = oh(n, qp.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function qp(e, t) {
  if (zo = -1, jo = 0, J & 6)
    throw Error(T(327));
  var n = e.callbackNode;
  if (Er() && e.callbackNode !== n)
    return null;
  var r = $o(e, e === Pe ? De : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = il(e, r);
  else {
    t = r;
    var o = J;
    J |= 2;
    var l = eh();
    (Pe !== e || De !== t) && (Ft = null, Lr = Se() + 500, Mn(e, t));
    do
      try {
        Rv();
        break;
      } catch (f) {
        Jp(e, f);
      }
    while (1);
    Fu(), tl.current = l, J = o, Ee !== null ? t = 0 : (Pe = null, De = 0, t = Te);
  }
  if (t !== 0) {
    if (t === 2 && (o = Fs(e), o !== 0 && (r = o, t = pu(e, o))), t === 1)
      throw n = Pi, Mn(e, 0), ln(e, r), Ge(e, Se()), n;
    if (t === 6)
      ln(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !Iv(o) && (t = il(e, r), t === 2 && (l = Fs(e), l !== 0 && (r = l, t = pu(e, l))), t === 1))
        throw n = Pi, Mn(e, 0), ln(e, r), Ge(e, Se()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(T(345));
        case 2:
          Dn(e, Qe, Ft);
          break;
        case 3:
          if (ln(e, r), (r & 130023424) === r && (t = ea + 500 - Se(), 10 < t)) {
            if ($o(e, 0) !== 0)
              break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              Be(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = Ks(Dn.bind(null, e, Qe, Ft), t);
            break;
          }
          Dn(e, Qe, Ft);
          break;
        case 4:
          if (ln(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var u = 31 - Ct(r);
            l = 1 << u, u = t[u], u > o && (o = u), r &= ~l;
          }
          if (r = o, r = Se() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * jv(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Ks(Dn.bind(null, e, Qe, Ft), r);
            break;
          }
          Dn(e, Qe, Ft);
          break;
        case 5:
          Dn(e, Qe, Ft);
          break;
        default:
          throw Error(T(329));
      }
    }
  }
  return Ge(e, Se()), e.callbackNode === n ? qp.bind(null, e) : null;
}
function pu(e, t) {
  var n = ci;
  return e.current.memoizedState.isDehydrated && (Mn(e, t).flags |= 256), e = il(e, t), e !== 2 && (t = Qe, Qe = n, t !== null && hu(t)), e;
}
function hu(e) {
  Qe === null ? Qe = e : Qe.push.apply(Qe, e);
}
function Iv(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r], l = o.getSnapshot;
          o = o.value;
          try {
            if (!Tt(l(), o))
              return !1;
          } catch {
            return !1;
          }
        }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null)
      n.return = t, t = n;
    else {
      if (t === e)
        break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e)
          return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function ln(e, t) {
  for (t &= ~Ju, t &= ~vl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Ct(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Hf(e) {
  if (J & 6)
    throw Error(T(327));
  Er();
  var t = $o(e, 0);
  if (!(t & 1))
    return Ge(e, Se()), null;
  var n = il(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Fs(e);
    r !== 0 && (t = r, n = pu(e, r));
  }
  if (n === 1)
    throw n = Pi, Mn(e, 0), ln(e, t), Ge(e, Se()), n;
  if (n === 6)
    throw Error(T(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Dn(e, Qe, Ft), Ge(e, Se()), null;
}
function ta(e, t) {
  var n = J;
  J |= 1;
  try {
    return e(t);
  } finally {
    J = n, J === 0 && (Lr = Se() + 500, pl && kn());
  }
}
function Hn(e) {
  un !== null && un.tag === 0 && !(J & 6) && Er();
  var t = J;
  J |= 1;
  var n = mt.transition, r = re;
  try {
    if (mt.transition = null, re = 1, e)
      return e();
  } finally {
    re = r, mt.transition = n, J = t, !(J & 6) && kn();
  }
}
function na() {
  nt = gr.current, fe(gr);
}
function Mn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, fv(n)), Ee !== null)
    for (n = Ee.return; n !== null; ) {
      var r = n;
      switch (Mu(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Vo();
          break;
        case 3:
          Nr(), fe(Ye), fe(Re), Vu();
          break;
        case 5:
          Wu(r);
          break;
        case 4:
          Nr();
          break;
        case 13:
          fe(me);
          break;
        case 19:
          fe(me);
          break;
        case 10:
          $u(r.type._context);
          break;
        case 22:
        case 23:
          na();
      }
      n = n.return;
    }
  if (Pe = e, Ee = e = gn(e.current, null), De = nt = t, Te = 0, Pi = null, Ju = vl = Un = 0, Qe = ci = null, jn !== null) {
    for (t = 0; t < jn.length; t++)
      if (n = jn[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var o = r.next, l = n.pending;
        if (l !== null) {
          var u = l.next;
          l.next = o, r.next = u;
        }
        n.pending = r;
      }
    jn = null;
  }
  return e;
}
function Jp(e, t) {
  do {
    var n = Ee;
    try {
      if (Fu(), Lo.current = el, Jo) {
        for (var r = ge.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        Jo = !1;
      }
      if ($n = 0, Ne = xe = ge = null, ui = !1, Ti = 0, qu.current = null, n === null || n.return === null) {
        Te = 1, Pi = t, Ee = null;
        break;
      }
      e: {
        var l = e, u = n.return, f = n, d = t;
        if (t = De, f.flags |= 32768, d !== null && typeof d == "object" && typeof d.then == "function") {
          var h = d, S = f, E = S.tag;
          if (!(S.mode & 1) && (E === 0 || E === 11 || E === 15)) {
            var w = S.alternate;
            w ? (S.updateQueue = w.updateQueue, S.memoizedState = w.memoizedState, S.lanes = w.lanes) : (S.updateQueue = null, S.memoizedState = null);
          }
          var N = Pf(u);
          if (N !== null) {
            N.flags &= -257, Lf(N, u, f, l, t), N.mode & 1 && Nf(l, h, t), t = N, d = h;
            var P = t.updateQueue;
            if (P === null) {
              var L = /* @__PURE__ */ new Set();
              L.add(d), t.updateQueue = L;
            } else
              P.add(d);
            break e;
          } else {
            if (!(t & 1)) {
              Nf(l, h, t), ra();
              break e;
            }
            d = Error(T(426));
          }
        } else if (he && f.mode & 1) {
          var G = Pf(u);
          if (G !== null) {
            !(G.flags & 65536) && (G.flags |= 256), Lf(G, u, f, l, t), Ru(Pr(d, f));
            break e;
          }
        }
        l = d = Pr(d, f), Te !== 4 && (Te = 2), ci === null ? ci = [l] : ci.push(l), l = u;
        do {
          switch (l.tag) {
            case 3:
              l.flags |= 65536, t &= -t, l.lanes |= t;
              var g = Mp(l, d, t);
              kf(l, g);
              break e;
            case 1:
              f = d;
              var p = l.type, y = l.stateNode;
              if (!(l.flags & 128) && (typeof p.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (hn === null || !hn.has(y)))) {
                l.flags |= 65536, t &= -t, l.lanes |= t;
                var x = Rp(l, f, t);
                kf(l, x);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      nh(n);
    } catch (D) {
      t = D, Ee === n && n !== null && (Ee = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function eh() {
  var e = tl.current;
  return tl.current = el, e === null ? el : e;
}
function ra() {
  (Te === 0 || Te === 3 || Te === 2) && (Te = 4), Pe === null || !(Un & 268435455) && !(vl & 268435455) || ln(Pe, De);
}
function il(e, t) {
  var n = J;
  J |= 2;
  var r = eh();
  (Pe !== e || De !== t) && (Ft = null, Mn(e, t));
  do
    try {
      Mv();
      break;
    } catch (o) {
      Jp(e, o);
    }
  while (1);
  if (Fu(), J = n, tl.current = r, Ee !== null)
    throw Error(T(261));
  return Pe = null, De = 0, Te;
}
function Mv() {
  for (; Ee !== null; )
    th(Ee);
}
function Rv() {
  for (; Ee !== null && !ug(); )
    th(Ee);
}
function th(e) {
  var t = ih(e.alternate, e, nt);
  e.memoizedProps = e.pendingProps, t === null ? nh(e) : Ee = t, qu.current = null;
}
function nh(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Lv(n, t), n !== null) {
        n.flags &= 32767, Ee = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Te = 6, Ee = null;
        return;
      }
    } else if (n = Pv(n, t, nt), n !== null) {
      Ee = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Ee = t;
      return;
    }
    Ee = t = e;
  } while (t !== null);
  Te === 0 && (Te = 5);
}
function Dn(e, t, n) {
  var r = re, o = mt.transition;
  try {
    mt.transition = null, re = 1, bv(e, t, n, r);
  } finally {
    mt.transition = o, re = r;
  }
  return null;
}
function bv(e, t, n, r) {
  do
    Er();
  while (un !== null);
  if (J & 6)
    throw Error(T(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(T(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var l = n.lanes | n.childLanes;
  if (yg(e, l), e === Pe && (Ee = Pe = null, De = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ko || (ko = !0, oh(Fo, function() {
    return Er(), null;
  })), l = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || l) {
    l = mt.transition, mt.transition = null;
    var u = re;
    re = 1;
    var f = J;
    J |= 4, qu.current = null, Dv(e, n), Gp(n, e), iv(Vs), Uo = !!Ws, Vs = Ws = null, e.current = n, zv(n), ag(), J = f, re = u, mt.transition = l;
  } else
    e.current = n;
  if (ko && (ko = !1, un = e, rl = o), l = e.pendingLanes, l === 0 && (hn = null), dg(n.stateNode), Ge(e, Se()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (nl)
    throw nl = !1, e = fu, fu = null, e;
  return rl & 1 && e.tag !== 0 && Er(), l = e.pendingLanes, l & 1 ? e === du ? fi++ : (fi = 0, du = e) : fi = 0, kn(), null;
}
function Er() {
  if (un !== null) {
    var e = Id(rl), t = mt.transition, n = re;
    try {
      if (mt.transition = null, re = 16 > e ? 16 : e, un === null)
        var r = !1;
      else {
        if (e = un, un = null, rl = 0, J & 6)
          throw Error(T(331));
        var o = J;
        for (J |= 4, I = e.current; I !== null; ) {
          var l = I, u = l.child;
          if (I.flags & 16) {
            var f = l.deletions;
            if (f !== null) {
              for (var d = 0; d < f.length; d++) {
                var h = f[d];
                for (I = h; I !== null; ) {
                  var S = I;
                  switch (S.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ai(8, S, l);
                  }
                  var E = S.child;
                  if (E !== null)
                    E.return = S, I = E;
                  else
                    for (; I !== null; ) {
                      S = I;
                      var w = S.sibling, N = S.return;
                      if (Kp(S), S === h) {
                        I = null;
                        break;
                      }
                      if (w !== null) {
                        w.return = N, I = w;
                        break;
                      }
                      I = N;
                    }
                }
              }
              var P = l.alternate;
              if (P !== null) {
                var L = P.child;
                if (L !== null) {
                  P.child = null;
                  do {
                    var G = L.sibling;
                    L.sibling = null, L = G;
                  } while (L !== null);
                }
              }
              I = l;
            }
          }
          if (l.subtreeFlags & 2064 && u !== null)
            u.return = l, I = u;
          else
            e:
              for (; I !== null; ) {
                if (l = I, l.flags & 2048)
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ai(9, l, l.return);
                  }
                var g = l.sibling;
                if (g !== null) {
                  g.return = l.return, I = g;
                  break e;
                }
                I = l.return;
              }
        }
        var p = e.current;
        for (I = p; I !== null; ) {
          u = I;
          var y = u.child;
          if (u.subtreeFlags & 2064 && y !== null)
            y.return = u, I = y;
          else
            e:
              for (u = p; I !== null; ) {
                if (f = I, f.flags & 2048)
                  try {
                    switch (f.tag) {
                      case 0:
                      case 11:
                      case 15:
                        gl(9, f);
                    }
                  } catch (D) {
                    _e(f, f.return, D);
                  }
                if (f === u) {
                  I = null;
                  break e;
                }
                var x = f.sibling;
                if (x !== null) {
                  x.return = f.return, I = x;
                  break e;
                }
                I = f.return;
              }
        }
        if (J = o, kn(), jt && typeof jt.onPostCommitFiberRoot == "function")
          try {
            jt.onPostCommitFiberRoot(ul, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      re = n, mt.transition = t;
    }
  }
  return !1;
}
function Bf(e, t, n) {
  t = Pr(n, t), t = Mp(e, t, 1), e = pn(e, t, 1), t = Be(), e !== null && (Ai(e, 1, t), Ge(e, t));
}
function _e(e, t, n) {
  if (e.tag === 3)
    Bf(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Bf(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (hn === null || !hn.has(r))) {
          e = Pr(n, e), e = Rp(t, e, 1), t = pn(t, e, 1), e = Be(), t !== null && (Ai(t, 1, e), Ge(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Fv(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Be(), e.pingedLanes |= e.suspendedLanes & n, Pe === e && (De & n) === n && (Te === 4 || Te === 3 && (De & 130023424) === De && 500 > Se() - ea ? Mn(e, 0) : Ju |= n), Ge(e, t);
}
function rh(e, t) {
  t === 0 && (e.mode & 1 ? (t = co, co <<= 1, !(co & 130023424) && (co = 4194304)) : t = 1);
  var n = Be();
  e = Qt(e, t), e !== null && (Ai(e, t, n), Ge(e, n));
}
function $v(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), rh(e, n);
}
function Uv(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(T(314));
  }
  r !== null && r.delete(t), rh(e, n);
}
var ih;
ih = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ye.current)
      Ke = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return Ke = !1, Nv(e, t, n);
      Ke = !!(e.flags & 131072);
    }
  else
    Ke = !1, he && t.flags & 1048576 && sp(t, Yo, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Do(e, t), e = t.pendingProps;
      var o = xr(t, Re.current);
      Sr(t, n), o = Ku(null, t, r, e, o, n);
      var l = Yu();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Xe(r) ? (l = !0, Qo(t)) : l = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Hu(t), o.updater = hl, t.stateNode = o, o._reactInternals = t, eu(t, r, e, n), t = ru(null, t, r, !0, l, n)) : (t.tag = 0, he && l && Iu(t), He(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Do(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = Bv(r), e = kt(r, e), o) {
          case 0:
            t = nu(null, t, r, e, n);
            break e;
          case 1:
            t = zf(null, t, r, e, n);
            break e;
          case 11:
            t = Af(null, t, r, e, n);
            break e;
          case 14:
            t = Df(null, t, r, kt(r.type, e), n);
            break e;
        }
        throw Error(T(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : kt(r, o), nu(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : kt(r, o), zf(e, t, r, o, n);
    case 3:
      e: {
        if (Up(t), e === null)
          throw Error(T(387));
        r = t.pendingProps, l = t.memoizedState, o = l.element, fp(e, t), Zo(t, r, null, n);
        var u = t.memoizedState;
        if (r = u.element, l.isDehydrated)
          if (l = { element: r, isDehydrated: !1, cache: u.cache, pendingSuspenseBoundaries: u.pendingSuspenseBoundaries, transitions: u.transitions }, t.updateQueue.baseState = l, t.memoizedState = l, t.flags & 256) {
            o = Pr(Error(T(423)), t), t = jf(e, t, r, n, o);
            break e;
          } else if (r !== o) {
            o = Pr(Error(T(424)), t), t = jf(e, t, r, n, o);
            break e;
          } else
            for (rt = dn(t.stateNode.containerInfo.firstChild), it = t, he = !0, Et = null, n = mp(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Tr(), r === o) {
            t = Kt(e, t, n);
            break e;
          }
          He(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return gp(t), e === null && Zs(t), r = t.type, o = t.pendingProps, l = e !== null ? e.memoizedProps : null, u = o.children, Qs(r, o) ? u = null : l !== null && Qs(r, l) && (t.flags |= 32), $p(e, t), He(e, t, u, n), t.child;
    case 6:
      return e === null && Zs(t), null;
    case 13:
      return Hp(e, t, n);
    case 4:
      return Bu(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Or(t, null, r, n) : He(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : kt(r, o), Af(e, t, r, o, n);
    case 7:
      return He(e, t, t.pendingProps, n), t.child;
    case 8:
      return He(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return He(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, l = t.memoizedProps, u = o.value, ue(Xo, r._currentValue), r._currentValue = u, l !== null)
          if (Tt(l.value, u)) {
            if (l.children === o.children && !Ye.current) {
              t = Kt(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var f = l.dependencies;
              if (f !== null) {
                u = l.child;
                for (var d = f.firstContext; d !== null; ) {
                  if (d.context === r) {
                    if (l.tag === 1) {
                      d = Bt(-1, n & -n), d.tag = 2;
                      var h = l.updateQueue;
                      if (h !== null) {
                        h = h.shared;
                        var S = h.pending;
                        S === null ? d.next = d : (d.next = S.next, S.next = d), h.pending = d;
                      }
                    }
                    l.lanes |= n, d = l.alternate, d !== null && (d.lanes |= n), qs(
                      l.return,
                      n,
                      t
                    ), f.lanes |= n;
                    break;
                  }
                  d = d.next;
                }
              } else if (l.tag === 10)
                u = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (u = l.return, u === null)
                  throw Error(T(341));
                u.lanes |= n, f = u.alternate, f !== null && (f.lanes |= n), qs(u, n, t), u = l.sibling;
              } else
                u = l.child;
              if (u !== null)
                u.return = l;
              else
                for (u = l; u !== null; ) {
                  if (u === t) {
                    u = null;
                    break;
                  }
                  if (l = u.sibling, l !== null) {
                    l.return = u.return, u = l;
                    break;
                  }
                  u = u.return;
                }
              l = u;
            }
        He(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, Sr(t, n), o = gt(o), r = r(o), t.flags |= 1, He(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = kt(r, t.pendingProps), o = kt(r.type, o), Df(e, t, r, o, n);
    case 15:
      return bp(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : kt(r, o), Do(e, t), t.tag = 1, Xe(r) ? (e = !0, Qo(t)) : e = !1, Sr(t, n), pp(t, r, o), eu(t, r, o, n), ru(null, t, r, !0, e, n);
    case 19:
      return Bp(e, t, n);
    case 22:
      return Fp(e, t, n);
  }
  throw Error(T(156, t.tag));
};
function oh(e, t) {
  return Ad(e, t);
}
function Hv(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function ht(e, t, n, r) {
  return new Hv(e, t, n, r);
}
function ia(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Bv(e) {
  if (typeof e == "function")
    return ia(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Eu)
      return 11;
    if (e === Cu)
      return 14;
  }
  return 2;
}
function gn(e, t) {
  var n = e.alternate;
  return n === null ? (n = ht(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Io(e, t, n, r, o, l) {
  var u = 2;
  if (r = e, typeof e == "function")
    ia(e) && (u = 1);
  else if (typeof e == "string")
    u = 5;
  else
    e:
      switch (e) {
        case lr:
          return Rn(n.children, o, l, t);
        case Su:
          u = 8, o |= 8;
          break;
        case Cs:
          return e = ht(12, n, t, o | 2), e.elementType = Cs, e.lanes = l, e;
        case xs:
          return e = ht(13, n, t, o), e.elementType = xs, e.lanes = l, e;
        case Ts:
          return e = ht(19, n, t, o), e.elementType = Ts, e.lanes = l, e;
        case hd:
          return yl(n, o, l, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case dd:
                u = 10;
                break e;
              case pd:
                u = 9;
                break e;
              case Eu:
                u = 11;
                break e;
              case Cu:
                u = 14;
                break e;
              case nn:
                u = 16, r = null;
                break e;
            }
          throw Error(T(130, e == null ? e : typeof e, ""));
      }
  return t = ht(u, n, t, o), t.elementType = e, t.type = r, t.lanes = l, t;
}
function Rn(e, t, n, r) {
  return e = ht(7, e, r, t), e.lanes = n, e;
}
function yl(e, t, n, r) {
  return e = ht(22, e, r, t), e.elementType = hd, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function ws(e, t, n) {
  return e = ht(6, e, null, t), e.lanes = n, e;
}
function ks(e, t, n) {
  return t = ht(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Wv(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ts(0), this.expirationTimes = ts(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ts(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function oa(e, t, n, r, o, l, u, f, d) {
  return e = new Wv(e, t, n, f, d), t === 1 ? (t = 1, l === !0 && (t |= 8)) : t = 0, l = ht(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Hu(l), e;
}
function Vv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: or, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function lh(e) {
  if (!e)
    return yn;
  e = e._reactInternals;
  e: {
    if (Wn(e) !== e || e.tag !== 1)
      throw Error(T(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Xe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(T(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Xe(n))
      return op(e, n, t);
  }
  return t;
}
function sh(e, t, n, r, o, l, u, f, d) {
  return e = oa(n, r, !0, e, o, l, u, f, d), e.context = lh(null), n = e.current, r = Be(), o = mn(n), l = Bt(r, o), l.callback = t ?? null, pn(n, l, o), e.current.lanes = o, Ai(e, o, r), Ge(e, r), e;
}
function _l(e, t, n, r) {
  var o = t.current, l = Be(), u = mn(o);
  return n = lh(n), t.context === null ? t.context = n : t.pendingContext = n, t = Bt(l, u), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = pn(o, t, u), e !== null && (xt(e, o, u, l), Po(e, o, u)), u;
}
function ol(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Wf(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function la(e, t) {
  Wf(e, t), (e = e.alternate) && Wf(e, t);
}
function Qv() {
  return null;
}
var uh = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function sa(e) {
  this._internalRoot = e;
}
wl.prototype.render = sa.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(T(409));
  _l(e, t, null, null);
};
wl.prototype.unmount = sa.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Hn(function() {
      _l(null, e, null, null);
    }), t[Vt] = null;
  }
};
function wl(e) {
  this._internalRoot = e;
}
wl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = bd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < on.length && t !== 0 && t < on[n].priority; n++)
      ;
    on.splice(n, 0, e), n === 0 && $d(e);
  }
};
function ua(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function kl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Vf() {
}
function Kv(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var l = r;
      r = function() {
        var h = ol(u);
        l.call(h);
      };
    }
    var u = sh(t, r, e, 0, null, !1, !1, "", Vf);
    return e._reactRootContainer = u, e[Vt] = u.current, ki(e.nodeType === 8 ? e.parentNode : e), Hn(), u;
  }
  for (; o = e.lastChild; )
    e.removeChild(o);
  if (typeof r == "function") {
    var f = r;
    r = function() {
      var h = ol(d);
      f.call(h);
    };
  }
  var d = oa(e, 0, !1, null, null, !1, !1, "", Vf);
  return e._reactRootContainer = d, e[Vt] = d.current, ki(e.nodeType === 8 ? e.parentNode : e), Hn(function() {
    _l(t, d, n, r);
  }), d;
}
function Sl(e, t, n, r, o) {
  var l = n._reactRootContainer;
  if (l) {
    var u = l;
    if (typeof o == "function") {
      var f = o;
      o = function() {
        var d = ol(u);
        f.call(d);
      };
    }
    _l(t, u, e, o);
  } else
    u = Kv(n, t, e, o, r);
  return ol(u);
}
Md = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ti(t.pendingLanes);
        n !== 0 && (Ou(t, n | 1), Ge(t, Se()), !(J & 6) && (Lr = Se() + 500, kn()));
      }
      break;
    case 13:
      Hn(function() {
        var r = Qt(e, 1);
        if (r !== null) {
          var o = Be();
          xt(r, e, 1, o);
        }
      }), la(e, 1);
  }
};
Nu = function(e) {
  if (e.tag === 13) {
    var t = Qt(e, 134217728);
    if (t !== null) {
      var n = Be();
      xt(t, e, 134217728, n);
    }
    la(e, 134217728);
  }
};
Rd = function(e) {
  if (e.tag === 13) {
    var t = mn(e), n = Qt(e, t);
    if (n !== null) {
      var r = Be();
      xt(n, e, t, r);
    }
    la(e, t);
  }
};
bd = function() {
  return re;
};
Fd = function(e, t) {
  var n = re;
  try {
    return re = e, t();
  } finally {
    re = n;
  }
};
Ms = function(e, t, n) {
  switch (t) {
    case "input":
      if (Ps(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = dl(r);
            if (!o)
              throw Error(T(90));
            gd(r), Ps(r, o);
          }
        }
      }
      break;
    case "textarea":
      yd(e, n);
      break;
    case "select":
      t = n.value, t != null && yr(e, !!n.multiple, t, !1);
  }
};
xd = ta;
Td = Hn;
var Yv = { usingClientEntryPoint: !1, Events: [zi, cr, dl, Ed, Cd, ta] }, qr = { findFiberByHostInstance: zn, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Xv = { bundleType: qr.bundleType, version: qr.version, rendererPackageName: qr.rendererPackageName, rendererConfig: qr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Yt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Pd(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: qr.findFiberByHostInstance || Qv, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var So = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!So.isDisabled && So.supportsFiber)
    try {
      ul = So.inject(Xv), jt = So;
    } catch {
    }
}
lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Yv;
lt.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ua(t))
    throw Error(T(200));
  return Vv(e, t, null, n);
};
lt.createRoot = function(e, t) {
  if (!ua(e))
    throw Error(T(299));
  var n = !1, r = "", o = uh;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = oa(e, 1, !1, null, null, n, !1, r, o), e[Vt] = t.current, ki(e.nodeType === 8 ? e.parentNode : e), new sa(t);
};
lt.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(T(188)) : (e = Object.keys(e).join(","), Error(T(268, e)));
  return e = Pd(t), e = e === null ? null : e.stateNode, e;
};
lt.flushSync = function(e) {
  return Hn(e);
};
lt.hydrate = function(e, t, n) {
  if (!kl(t))
    throw Error(T(200));
  return Sl(null, e, t, !0, n);
};
lt.hydrateRoot = function(e, t, n) {
  if (!ua(e))
    throw Error(T(405));
  var r = n != null && n.hydratedSources || null, o = !1, l = "", u = uh;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (u = n.onRecoverableError)), t = sh(t, null, e, 1, n ?? null, o, !1, l, u), e[Vt] = t.current, ki(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
        n,
        o
      );
  return new wl(t);
};
lt.render = function(e, t, n) {
  if (!kl(t))
    throw Error(T(200));
  return Sl(null, e, t, !1, n);
};
lt.unmountComponentAtNode = function(e) {
  if (!kl(e))
    throw Error(T(40));
  return e._reactRootContainer ? (Hn(function() {
    Sl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Vt] = null;
    });
  }), !0) : !1;
};
lt.unstable_batchedUpdates = ta;
lt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!kl(n))
    throw Error(T(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(T(38));
  return Sl(e, t, n, !1, r);
};
lt.version = "18.2.0-next-9e3b772b8-20220608";
function ah() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ah);
    } catch (e) {
      console.error(e);
    }
}
ah(), sd.exports = lt;
var Gv = sd.exports, Qf = Gv;
Ss.createRoot = Qf.createRoot, Ss.hydrateRoot = Qf.hydrateRoot;
var ch = { exports: {} }, Zv = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", qv = Zv, Jv = qv;
function fh() {
}
function dh() {
}
dh.resetWarningCache = fh;
var ey = function() {
  function e(r, o, l, u, f, d) {
    if (d !== Jv) {
      var h = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw h.name = "Invariant Violation", h;
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: dh,
    resetWarningCache: fh
  };
  return n.PropTypes = n, n;
};
ch.exports = ey();
var ty = ch.exports;
const vr = /* @__PURE__ */ Xf(ty), ll = Symbol.for("r2wc.reactRender"), Kf = Symbol.for("r2wc.shouldRender"), Eo = Symbol.for("r2wc.root");
function ny(e = "") {
  return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function ry(e = "") {
  return e.replace(/-([a-z0-9])/g, function(t) {
    return t[1].toUpperCase();
  });
}
var Yf = {
  expando: function(e, t, n) {
    Object.defineProperty(e, t, {
      enumerable: !0,
      get: function() {
        return n;
      },
      set: function(r) {
        n = r, this[ll]();
      }
    }), e[ll]();
  }
};
function iy(e, t, n, r = {}) {
  var o = {
    isConnected: "isConnected" in HTMLElement.prototype
  }, l = !1, u = function() {
    var h = Reflect.construct(HTMLElement, arguments, this.constructor);
    return typeof r.shadow == "string" ? h.attachShadow({ mode: r.shadow }) : r.shadow && (console.warn(
      'Specifying the "shadow" option as a boolean is deprecated and will be removed in a future version.'
    ), h.attachShadow({ mode: "open" })), h;
  }, f = Object.create(HTMLElement.prototype);
  f.constructor = u;
  var d = new Proxy(f, {
    has: function(h, S) {
      return S in e.propTypes || S in f;
    },
    set: function(h, S, E, w) {
      return l && (o[S] = !0), typeof S == "symbol" || o[S] || S in h ? (e.propTypes && S in e.propTypes && Yf.expando(w, S, E), Reflect.set(h, S, E, w)) : (Yf.expando(w, S, E), !0);
    },
    getOwnPropertyDescriptor: function(h, S) {
      var E = Reflect.getOwnPropertyDescriptor(h, S);
      if (E)
        return E;
      if (S in e.propTypes)
        return {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          value: void 0
        };
    }
  });
  return u.prototype = d, f.connectedCallback = function() {
    this[Kf] = !0, this[ll]();
  }, f.disconnectedCallback = function() {
    typeof n.createRoot == "function" ? this[Eo].unmount() : n.unmountComponentAtNode(this);
  }, f[ll] = function() {
    if (this[Kf] === !0) {
      var h = {};
      Object.keys(this).forEach(function(w) {
        o[w] !== !1 && (h[w] = this[w]);
      }, this), l = !0;
      const S = r.shadow ? this.shadowRoot : this, E = t.createElement(e, h);
      typeof n.createRoot == "function" ? (this[Eo] || (this[Eo] = n.createRoot(S)), this[Eo].render(E)) : n.render(E, S), l = !1;
    }
  }, e.propTypes && (u.observedAttributes = r.dashStyleAttributes ? Object.keys(e.propTypes).map(function(h) {
    return ny(h);
  }) : Object.keys(e.propTypes), f.attributeChangedCallback = function(h, S, E) {
    var w = r.dashStyleAttributes ? ry(h) : h;
    this[w] = E;
  }), u;
}
var oy = { exports: {} };
/*!
  * Bootstrap v5.3.0-alpha3 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(xm, function() {
    const n = /* @__PURE__ */ new Map(), r = { set(a, i, s) {
      n.has(a) || n.set(a, /* @__PURE__ */ new Map());
      const c = n.get(a);
      c.has(i) || c.size === 0 ? c.set(i, s) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(c.keys())[0]}.`);
    }, get: (a, i) => n.has(a) && n.get(a).get(i) || null, remove(a, i) {
      if (!n.has(a))
        return;
      const s = n.get(a);
      s.delete(i), s.size === 0 && n.delete(a);
    } }, o = "transitionend", l = (a) => (a && window.CSS && window.CSS.escape && (a = a.replace(/#([^\s"#']+)/g, (i, s) => `#${CSS.escape(s)}`)), a), u = (a) => {
      a.dispatchEvent(new Event(o));
    }, f = (a) => !(!a || typeof a != "object") && (a.jquery !== void 0 && (a = a[0]), a.nodeType !== void 0), d = (a) => f(a) ? a.jquery ? a[0] : a : typeof a == "string" && a.length > 0 ? document.querySelector(l(a)) : null, h = (a) => {
      if (!f(a) || a.getClientRects().length === 0)
        return !1;
      const i = getComputedStyle(a).getPropertyValue("visibility") === "visible", s = a.closest("details:not([open])");
      if (!s)
        return i;
      if (s !== a) {
        const c = a.closest("summary");
        if (c && c.parentNode !== s || c === null)
          return !1;
      }
      return i;
    }, S = (a) => !a || a.nodeType !== Node.ELEMENT_NODE || !!a.classList.contains("disabled") || (a.disabled !== void 0 ? a.disabled : a.hasAttribute("disabled") && a.getAttribute("disabled") !== "false"), E = (a) => {
      if (!document.documentElement.attachShadow)
        return null;
      if (typeof a.getRootNode == "function") {
        const i = a.getRootNode();
        return i instanceof ShadowRoot ? i : null;
      }
      return a instanceof ShadowRoot ? a : a.parentNode ? E(a.parentNode) : null;
    }, w = () => {
    }, N = (a) => {
      a.offsetHeight;
    }, P = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, L = [], G = () => document.documentElement.dir === "rtl", g = (a) => {
      var i;
      i = () => {
        const s = P();
        if (s) {
          const c = a.NAME, m = s.fn[c];
          s.fn[c] = a.jQueryInterface, s.fn[c].Constructor = a, s.fn[c].noConflict = () => (s.fn[c] = m, a.jQueryInterface);
        }
      }, document.readyState === "loading" ? (L.length || document.addEventListener("DOMContentLoaded", () => {
        for (const s of L)
          s();
      }), L.push(i)) : i();
    }, p = (a, i = [], s = a) => typeof a == "function" ? a(...i) : s, y = (a, i, s = !0) => {
      if (!s)
        return void p(a);
      const c = ((k) => {
        if (!k)
          return 0;
        let { transitionDuration: C, transitionDelay: O } = window.getComputedStyle(k);
        const j = Number.parseFloat(C), M = Number.parseFloat(O);
        return j || M ? (C = C.split(",")[0], O = O.split(",")[0], 1e3 * (Number.parseFloat(C) + Number.parseFloat(O))) : 0;
      })(i) + 5;
      let m = !1;
      const v = ({ target: k }) => {
        k === i && (m = !0, i.removeEventListener(o, v), p(a));
      };
      i.addEventListener(o, v), setTimeout(() => {
        m || u(i);
      }, c);
    }, x = (a, i, s, c) => {
      const m = a.length;
      let v = a.indexOf(i);
      return v === -1 ? !s && c ? a[m - 1] : a[0] : (v += s ? 1 : -1, c && (v = (v + m) % m), a[Math.max(0, Math.min(v, m - 1))]);
    }, D = /[^.]*(?=\..*)\.|.*/, R = /\..*/, b = /::\d+$/, F = {};
    let de = 1;
    const Y = { mouseenter: "mouseover", mouseleave: "mouseout" }, Ze = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
    function Xt(a, i) {
      return i && `${i}::${de++}` || a.uidEvent || de++;
    }
    function Gt(a) {
      const i = Xt(a);
      return a.uidEvent = i, F[i] = F[i] || {}, F[i];
    }
    function jr(a, i, s = null) {
      return Object.values(a).find((c) => c.callable === i && c.delegationSelector === s);
    }
    function Ii(a, i, s) {
      const c = typeof i == "string", m = c ? s : i || s;
      let v = B(a);
      return Ze.has(v) || (v = a), [c, m, v];
    }
    function Vn(a, i, s, c, m) {
      if (typeof i != "string" || !a)
        return;
      let [v, k, C] = Ii(i, s, c);
      i in Y && (k = ((W) => function(H) {
        if (!H.relatedTarget || H.relatedTarget !== H.delegateTarget && !H.delegateTarget.contains(H.relatedTarget))
          return W.call(this, H);
      })(k));
      const O = Gt(a), j = O[C] || (O[C] = {}), M = jr(j, k, v ? s : null);
      if (M)
        return void (M.oneOff = M.oneOff && m);
      const A = Xt(k, i.replace(D, "")), Q = v ? function(U, W, H) {
        return function V(ie) {
          const se = U.querySelectorAll(W);
          for (let { target: X } = ie; X && X !== this; X = X.parentNode)
            for (const ee of se)
              if (ee === X)
                return ae(ie, { delegateTarget: X }), V.oneOff && _.off(U, ie.type, W, H), H.apply(X, [ie]);
        };
      }(a, s, k) : function(U, W) {
        return function H(V) {
          return ae(V, { delegateTarget: U }), H.oneOff && _.off(U, V.type, W), W.apply(U, [V]);
        };
      }(a, k);
      Q.delegationSelector = v ? s : null, Q.callable = k, Q.oneOff = m, Q.uidEvent = A, j[A] = Q, a.addEventListener(C, Q, v);
    }
    function Sn(a, i, s, c, m) {
      const v = jr(i[s], c, m);
      v && (a.removeEventListener(s, v, !!m), delete i[s][v.uidEvent]);
    }
    function z(a, i, s, c) {
      const m = i[s] || {};
      for (const [v, k] of Object.entries(m))
        v.includes(c) && Sn(a, i, s, k.callable, k.delegationSelector);
    }
    function B(a) {
      return a = a.replace(R, ""), Y[a] || a;
    }
    const _ = { on(a, i, s, c) {
      Vn(a, i, s, c, !1);
    }, one(a, i, s, c) {
      Vn(a, i, s, c, !0);
    }, off(a, i, s, c) {
      if (typeof i != "string" || !a)
        return;
      const [m, v, k] = Ii(i, s, c), C = k !== i, O = Gt(a), j = O[k] || {}, M = i.startsWith(".");
      if (v === void 0) {
        if (M)
          for (const A of Object.keys(O))
            z(a, O, A, i.slice(1));
        for (const [A, Q] of Object.entries(j)) {
          const U = A.replace(b, "");
          C && !i.includes(U) || Sn(a, O, k, Q.callable, Q.delegationSelector);
        }
      } else {
        if (!Object.keys(j).length)
          return;
        Sn(a, O, k, v, m ? s : null);
      }
    }, trigger(a, i, s) {
      if (typeof i != "string" || !a)
        return null;
      const c = P();
      let m = null, v = !0, k = !0, C = !1;
      i !== B(i) && c && (m = c.Event(i, s), c(a).trigger(m), v = !m.isPropagationStopped(), k = !m.isImmediatePropagationStopped(), C = m.isDefaultPrevented());
      const O = ae(new Event(i, { bubbles: v, cancelable: !0 }), s);
      return C && O.preventDefault(), k && a.dispatchEvent(O), O.defaultPrevented && m && m.preventDefault(), O;
    } };
    function ae(a, i = {}) {
      for (const [s, c] of Object.entries(i))
        try {
          a[s] = c;
        } catch {
          Object.defineProperty(a, s, { configurable: !0, get: () => c });
        }
      return a;
    }
    function we(a) {
      if (a === "true")
        return !0;
      if (a === "false")
        return !1;
      if (a === Number(a).toString())
        return Number(a);
      if (a === "" || a === "null")
        return null;
      if (typeof a != "string")
        return a;
      try {
        return JSON.parse(decodeURIComponent(a));
      } catch {
        return a;
      }
    }
    function Zt(a) {
      return a.replace(/[A-Z]/g, (i) => `-${i.toLowerCase()}`);
    }
    const Le = { setDataAttribute(a, i, s) {
      a.setAttribute(`data-bs-${Zt(i)}`, s);
    }, removeDataAttribute(a, i) {
      a.removeAttribute(`data-bs-${Zt(i)}`);
    }, getDataAttributes(a) {
      if (!a)
        return {};
      const i = {}, s = Object.keys(a.dataset).filter((c) => c.startsWith("bs") && !c.startsWith("bsConfig"));
      for (const c of s) {
        let m = c.replace(/^bs/, "");
        m = m.charAt(0).toLowerCase() + m.slice(1, m.length), i[m] = we(a.dataset[c]);
      }
      return i;
    }, getDataAttribute: (a, i) => we(a.getAttribute(`data-bs-${Zt(i)}`)) };
    class Mt {
      static get Default() {
        return {};
      }
      static get DefaultType() {
        return {};
      }
      static get NAME() {
        throw new Error('You have to implement the static method "NAME", for each component!');
      }
      _getConfig(i) {
        return i = this._mergeConfigObj(i), i = this._configAfterMerge(i), this._typeCheckConfig(i), i;
      }
      _configAfterMerge(i) {
        return i;
      }
      _mergeConfigObj(i, s) {
        const c = f(s) ? Le.getDataAttribute(s, "config") : {};
        return { ...this.constructor.Default, ...typeof c == "object" ? c : {}, ...f(s) ? Le.getDataAttributes(s) : {}, ...typeof i == "object" ? i : {} };
      }
      _typeCheckConfig(i, s = this.constructor.DefaultType) {
        for (const [m, v] of Object.entries(s)) {
          const k = i[m], C = f(k) ? "element" : (c = k) == null ? `${c}` : Object.prototype.toString.call(c).match(/\s([a-z]+)/i)[1].toLowerCase();
          if (!new RegExp(v).test(C))
            throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${m}" provided type "${C}" but expected type "${v}".`);
        }
        var c;
      }
    }
    class Ce extends Mt {
      constructor(i, s) {
        super(), (i = d(i)) && (this._element = i, this._config = this._getConfig(s), r.set(this._element, this.constructor.DATA_KEY, this));
      }
      dispose() {
        r.remove(this._element, this.constructor.DATA_KEY), _.off(this._element, this.constructor.EVENT_KEY);
        for (const i of Object.getOwnPropertyNames(this))
          this[i] = null;
      }
      _queueCallback(i, s, c = !0) {
        y(i, s, c);
      }
      _getConfig(i) {
        return i = this._mergeConfigObj(i, this._element), i = this._configAfterMerge(i), this._typeCheckConfig(i), i;
      }
      static getInstance(i) {
        return r.get(d(i), this.DATA_KEY);
      }
      static getOrCreateInstance(i, s = {}) {
        return this.getInstance(i) || new this(i, typeof s == "object" ? s : null);
      }
      static get VERSION() {
        return "5.3.0-alpha2";
      }
      static get DATA_KEY() {
        return `bs.${this.NAME}`;
      }
      static get EVENT_KEY() {
        return `.${this.DATA_KEY}`;
      }
      static eventName(i) {
        return `${i}${this.EVENT_KEY}`;
      }
    }
    const qt = (a) => {
      let i = a.getAttribute("data-bs-target");
      if (!i || i === "#") {
        let s = a.getAttribute("href");
        if (!s || !s.includes("#") && !s.startsWith("."))
          return null;
        s.includes("#") && !s.startsWith("#") && (s = `#${s.split("#")[1]}`), i = s && s !== "#" ? s.trim() : null;
      }
      return l(i);
    }, $ = { find: (a, i = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(i, a)), findOne: (a, i = document.documentElement) => Element.prototype.querySelector.call(i, a), children: (a, i) => [].concat(...a.children).filter((s) => s.matches(i)), parents(a, i) {
      const s = [];
      let c = a.parentNode.closest(i);
      for (; c; )
        s.push(c), c = c.parentNode.closest(i);
      return s;
    }, prev(a, i) {
      let s = a.previousElementSibling;
      for (; s; ) {
        if (s.matches(i))
          return [s];
        s = s.previousElementSibling;
      }
      return [];
    }, next(a, i) {
      let s = a.nextElementSibling;
      for (; s; ) {
        if (s.matches(i))
          return [s];
        s = s.nextElementSibling;
      }
      return [];
    }, focusableChildren(a) {
      const i = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((s) => `${s}:not([tabindex^="-"])`).join(",");
      return this.find(i, a).filter((s) => !S(s) && h(s));
    }, getSelectorFromElement(a) {
      const i = qt(a);
      return i && $.findOne(i) ? i : null;
    }, getElementFromSelector(a) {
      const i = qt(a);
      return i ? $.findOne(i) : null;
    }, getMultipleElementsFromSelector(a) {
      const i = qt(a);
      return i ? $.find(i) : [];
    } }, Mi = (a, i = "hide") => {
      const s = `click.dismiss${a.EVENT_KEY}`, c = a.NAME;
      _.on(document, s, `[data-bs-dismiss="${c}"]`, function(m) {
        if (["A", "AREA"].includes(this.tagName) && m.preventDefault(), S(this))
          return;
        const v = $.getElementFromSelector(this) || this.closest(`.${c}`);
        a.getOrCreateInstance(v)[i]();
      });
    };
    class Ir extends Ce {
      static get NAME() {
        return "alert";
      }
      close() {
        if (_.trigger(this._element, "close.bs.alert").defaultPrevented)
          return;
        this._element.classList.remove("show");
        const i = this._element.classList.contains("fade");
        this._queueCallback(() => this._destroyElement(), this._element, i);
      }
      _destroyElement() {
        this._element.remove(), _.trigger(this._element, "closed.bs.alert"), this.dispose();
      }
      static jQueryInterface(i) {
        return this.each(function() {
          const s = Ir.getOrCreateInstance(this);
          if (typeof i == "string") {
            if (s[i] === void 0 || i.startsWith("_") || i === "constructor")
              throw new TypeError(`No method named "${i}"`);
            s[i](this);
          }
        });
      }
    }
    Mi(Ir, "close"), g(Ir);
    const aa = '[data-bs-toggle="button"]';
    class Mr extends Ce {
      static get NAME() {
        return "button";
      }
      toggle() {
        this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
      }
      static jQueryInterface(i) {
        return this.each(function() {
          const s = Mr.getOrCreateInstance(this);
          i === "toggle" && s[i]();
        });
      }
    }
    _.on(document, "click.bs.button.data-api", aa, (a) => {
      a.preventDefault();
      const i = a.target.closest(aa);
      Mr.getOrCreateInstance(i).toggle();
    }), g(Mr);
    const mh = { endCallback: null, leftCallback: null, rightCallback: null }, gh = { endCallback: "(function|null)", leftCallback: "(function|null)", rightCallback: "(function|null)" };
    class Ri extends Mt {
      constructor(i, s) {
        super(), this._element = i, i && Ri.isSupported() && (this._config = this._getConfig(s), this._deltaX = 0, this._supportPointerEvents = !!window.PointerEvent, this._initEvents());
      }
      static get Default() {
        return mh;
      }
      static get DefaultType() {
        return gh;
      }
      static get NAME() {
        return "swipe";
      }
      dispose() {
        _.off(this._element, ".bs.swipe");
      }
      _start(i) {
        this._supportPointerEvents ? this._eventIsPointerPenTouch(i) && (this._deltaX = i.clientX) : this._deltaX = i.touches[0].clientX;
      }
      _end(i) {
        this._eventIsPointerPenTouch(i) && (this._deltaX = i.clientX - this._deltaX), this._handleSwipe(), p(this._config.endCallback);
      }
      _move(i) {
        this._deltaX = i.touches && i.touches.length > 1 ? 0 : i.touches[0].clientX - this._deltaX;
      }
      _handleSwipe() {
        const i = Math.abs(this._deltaX);
        if (i <= 40)
          return;
        const s = i / this._deltaX;
        this._deltaX = 0, s && p(s > 0 ? this._config.rightCallback : this._config.leftCallback);
      }
      _initEvents() {
        this._supportPointerEvents ? (_.on(this._element, "pointerdown.bs.swipe", (i) => this._start(i)), _.on(this._element, "pointerup.bs.swipe", (i) => this._end(i)), this._element.classList.add("pointer-event")) : (_.on(this._element, "touchstart.bs.swipe", (i) => this._start(i)), _.on(this._element, "touchmove.bs.swipe", (i) => this._move(i)), _.on(this._element, "touchend.bs.swipe", (i) => this._end(i)));
      }
      _eventIsPointerPenTouch(i) {
        return this._supportPointerEvents && (i.pointerType === "pen" || i.pointerType === "touch");
      }
      static isSupported() {
        return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
      }
    }
    const Rr = "next", Qn = "prev", Kn = "left", bi = "right", El = "slid.bs.carousel", ca = "carousel", Fi = "active", vh = { ArrowLeft: bi, ArrowRight: Kn }, yh = { interval: 5e3, keyboard: !0, pause: "hover", ride: !1, touch: !0, wrap: !0 }, _h = { interval: "(number|boolean)", keyboard: "boolean", pause: "(string|boolean)", ride: "(boolean|string)", touch: "boolean", wrap: "boolean" };
    class Yn extends Ce {
      constructor(i, s) {
        super(i, s), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = $.findOne(".carousel-indicators", this._element), this._addEventListeners(), this._config.ride === ca && this.cycle();
      }
      static get Default() {
        return yh;
      }
      static get DefaultType() {
        return _h;
      }
      static get NAME() {
        return "carousel";
      }
      next() {
        this._slide(Rr);
      }
      nextWhenVisible() {
        !document.hidden && h(this._element) && this.next();
      }
      prev() {
        this._slide(Qn);
      }
      pause() {
        this._isSliding && u(this._element), this._clearInterval();
      }
      cycle() {
        this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
      }
      _maybeEnableCycle() {
        this._config.ride && (this._isSliding ? _.one(this._element, El, () => this.cycle()) : this.cycle());
      }
      to(i) {
        const s = this._getItems();
        if (i > s.length - 1 || i < 0)
          return;
        if (this._isSliding)
          return void _.one(this._element, El, () => this.to(i));
        const c = this._getItemIndex(this._getActive());
        if (c === i)
          return;
        const m = i > c ? Rr : Qn;
        this._slide(m, s[i]);
      }
      dispose() {
        this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
      }
      _configAfterMerge(i) {
        return i.defaultInterval = i.interval, i;
      }
      _addEventListeners() {
        this._config.keyboard && _.on(this._element, "keydown.bs.carousel", (i) => this._keydown(i)), this._config.pause === "hover" && (_.on(this._element, "mouseenter.bs.carousel", () => this.pause()), _.on(this._element, "mouseleave.bs.carousel", () => this._maybeEnableCycle())), this._config.touch && Ri.isSupported() && this._addTouchEventListeners();
      }
      _addTouchEventListeners() {
        for (const s of $.find(".carousel-item img", this._element))
          _.on(s, "dragstart.bs.carousel", (c) => c.preventDefault());
        const i = { leftCallback: () => this._slide(this._directionToOrder(Kn)), rightCallback: () => this._slide(this._directionToOrder(bi)), endCallback: () => {
          this._config.pause === "hover" && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), 500 + this._config.interval));
        } };
        this._swipeHelper = new Ri(this._element, i);
      }
      _keydown(i) {
        if (/input|textarea/i.test(i.target.tagName))
          return;
        const s = vh[i.key];
        s && (i.preventDefault(), this._slide(this._directionToOrder(s)));
      }
      _getItemIndex(i) {
        return this._getItems().indexOf(i);
      }
      _setActiveIndicatorElement(i) {
        if (!this._indicatorsElement)
          return;
        const s = $.findOne(".active", this._indicatorsElement);
        s.classList.remove(Fi), s.removeAttribute("aria-current");
        const c = $.findOne(`[data-bs-slide-to="${i}"]`, this._indicatorsElement);
        c && (c.classList.add(Fi), c.setAttribute("aria-current", "true"));
      }
      _updateInterval() {
        const i = this._activeElement || this._getActive();
        if (!i)
          return;
        const s = Number.parseInt(i.getAttribute("data-bs-interval"), 10);
        this._config.interval = s || this._config.defaultInterval;
      }
      _slide(i, s = null) {
        if (this._isSliding)
          return;
        const c = this._getActive(), m = i === Rr, v = s || x(this._getItems(), c, m, this._config.wrap);
        if (v === c)
          return;
        const k = this._getItemIndex(v), C = (A) => _.trigger(this._element, A, { relatedTarget: v, direction: this._orderToDirection(i), from: this._getItemIndex(c), to: k });
        if (C("slide.bs.carousel").defaultPrevented || !c || !v)
          return;
        const O = !!this._interval;
        this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(k), this._activeElement = v;
        const j = m ? "carousel-item-start" : "carousel-item-end", M = m ? "carousel-item-next" : "carousel-item-prev";
        v.classList.add(M), N(v), c.classList.add(j), v.classList.add(j), this._queueCallback(() => {
          v.classList.remove(j, M), v.classList.add(Fi), c.classList.remove(Fi, M, j), this._isSliding = !1, C(El);
        }, c, this._isAnimated()), O && this.cycle();
      }
      _isAnimated() {
        return this._element.classList.contains("slide");
      }
      _getActive() {
        return $.findOne(".active.carousel-item", this._element);
      }
      _getItems() {
        return $.find(".carousel-item", this._element);
      }
      _clearInterval() {
        this._interval && (clearInterval(this._interval), this._interval = null);
      }
      _directionToOrder(i) {
        return G() ? i === Kn ? Qn : Rr : i === Kn ? Rr : Qn;
      }
      _orderToDirection(i) {
        return G() ? i === Qn ? Kn : bi : i === Qn ? bi : Kn;
      }
      static jQueryInterface(i) {
        return this.each(function() {
          const s = Yn.getOrCreateInstance(this, i);
          if (typeof i != "number") {
            if (typeof i == "string") {
              if (s[i] === void 0 || i.startsWith("_") || i === "constructor")
                throw new TypeError(`No method named "${i}"`);
              s[i]();
            }
          } else
            s.to(i);
        });
      }
    }
    _.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", function(a) {
      const i = $.getElementFromSelector(this);
      if (!i || !i.classList.contains(ca))
        return;
      a.preventDefault();
      const s = Yn.getOrCreateInstance(i), c = this.getAttribute("data-bs-slide-to");
      return c ? (s.to(c), void s._maybeEnableCycle()) : Le.getDataAttribute(this, "slide") === "next" ? (s.next(), void s._maybeEnableCycle()) : (s.prev(), void s._maybeEnableCycle());
    }), _.on(window, "load.bs.carousel.data-api", () => {
      const a = $.find('[data-bs-ride="carousel"]');
      for (const i of a)
        Yn.getOrCreateInstance(i);
    }), g(Yn);
    const Cl = "show", $i = "collapse", Ui = "collapsing", xl = '[data-bs-toggle="collapse"]', wh = { parent: null, toggle: !0 }, kh = { parent: "(null|element)", toggle: "boolean" };
    class Xn extends Ce {
      constructor(i, s) {
        super(i, s), this._isTransitioning = !1, this._triggerArray = [];
        const c = $.find(xl);
        for (const m of c) {
          const v = $.getSelectorFromElement(m), k = $.find(v).filter((C) => C === this._element);
          v !== null && k.length && this._triggerArray.push(m);
        }
        this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
      }
      static get Default() {
        return wh;
      }
      static get DefaultType() {
        return kh;
      }
      static get NAME() {
        return "collapse";
      }
      toggle() {
        this._isShown() ? this.hide() : this.show();
      }
      show() {
        if (this._isTransitioning || this._isShown())
          return;
        let i = [];
        if (this._config.parent && (i = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((m) => m !== this._element).map((m) => Xn.getOrCreateInstance(m, { toggle: !1 }))), i.length && i[0]._isTransitioning || _.trigger(this._element, "show.bs.collapse").defaultPrevented)
          return;
        for (const m of i)
          m.hide();
        const s = this._getDimension();
        this._element.classList.remove($i), this._element.classList.add(Ui), this._element.style[s] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
        const c = `scroll${s[0].toUpperCase() + s.slice(1)}`;
        this._queueCallback(() => {
          this._isTransitioning = !1, this._element.classList.remove(Ui), this._element.classList.add($i, Cl), this._element.style[s] = "", _.trigger(this._element, "shown.bs.collapse");
        }, this._element, !0), this._element.style[s] = `${this._element[c]}px`;
      }
      hide() {
        if (this._isTransitioning || !this._isShown() || _.trigger(this._element, "hide.bs.collapse").defaultPrevented)
          return;
        const i = this._getDimension();
        this._element.style[i] = `${this._element.getBoundingClientRect()[i]}px`, N(this._element), this._element.classList.add(Ui), this._element.classList.remove($i, Cl);
        for (const s of this._triggerArray) {
          const c = $.getElementFromSelector(s);
          c && !this._isShown(c) && this._addAriaAndCollapsedClass([s], !1);
        }
        this._isTransitioning = !0, this._element.style[i] = "", this._queueCallback(() => {
          this._isTransitioning = !1, this._element.classList.remove(Ui), this._element.classList.add($i), _.trigger(this._element, "hidden.bs.collapse");
        }, this._element, !0);
      }
      _isShown(i = this._element) {
        return i.classList.contains(Cl);
      }
      _configAfterMerge(i) {
        return i.toggle = !!i.toggle, i.parent = d(i.parent), i;
      }
      _getDimension() {
        return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
      }
      _initializeChildren() {
        if (!this._config.parent)
          return;
        const i = this._getFirstLevelChildren(xl);
        for (const s of i) {
          const c = $.getElementFromSelector(s);
          c && this._addAriaAndCollapsedClass([s], this._isShown(c));
        }
      }
      _getFirstLevelChildren(i) {
        const s = $.find(":scope .collapse .collapse", this._config.parent);
        return $.find(i, this._config.parent).filter((c) => !s.includes(c));
      }
      _addAriaAndCollapsedClass(i, s) {
        if (i.length)
          for (const c of i)
            c.classList.toggle("collapsed", !s), c.setAttribute("aria-expanded", s);
      }
      static jQueryInterface(i) {
        const s = {};
        return typeof i == "string" && /show|hide/.test(i) && (s.toggle = !1), this.each(function() {
          const c = Xn.getOrCreateInstance(this, s);
          if (typeof i == "string") {
            if (c[i] === void 0)
              throw new TypeError(`No method named "${i}"`);
            c[i]();
          }
        });
      }
    }
    _.on(document, "click.bs.collapse.data-api", xl, function(a) {
      (a.target.tagName === "A" || a.delegateTarget && a.delegateTarget.tagName === "A") && a.preventDefault();
      for (const i of $.getMultipleElementsFromSelector(this))
        Xn.getOrCreateInstance(i, { toggle: !1 }).toggle();
    }), g(Xn);
    var be = "top", qe = "bottom", Je = "right", Fe = "left", Hi = "auto", Gn = [be, qe, Je, Fe], En = "start", Zn = "end", fa = "clippingParents", Tl = "viewport", qn = "popper", da = "reference", Ol = Gn.reduce(function(a, i) {
      return a.concat([i + "-" + En, i + "-" + Zn]);
    }, []), Nl = [].concat(Gn, [Hi]).reduce(function(a, i) {
      return a.concat([i, i + "-" + En, i + "-" + Zn]);
    }, []), pa = "beforeRead", ha = "read", ma = "afterRead", ga = "beforeMain", va = "main", ya = "afterMain", _a = "beforeWrite", wa = "write", ka = "afterWrite", Sa = [pa, ha, ma, ga, va, ya, _a, wa, ka];
    function Ot(a) {
      return a ? (a.nodeName || "").toLowerCase() : null;
    }
    function et(a) {
      if (a == null)
        return window;
      if (a.toString() !== "[object Window]") {
        var i = a.ownerDocument;
        return i && i.defaultView || window;
      }
      return a;
    }
    function Cn(a) {
      return a instanceof et(a).Element || a instanceof Element;
    }
    function ut(a) {
      return a instanceof et(a).HTMLElement || a instanceof HTMLElement;
    }
    function Pl(a) {
      return typeof ShadowRoot < "u" && (a instanceof et(a).ShadowRoot || a instanceof ShadowRoot);
    }
    const Ll = { name: "applyStyles", enabled: !0, phase: "write", fn: function(a) {
      var i = a.state;
      Object.keys(i.elements).forEach(function(s) {
        var c = i.styles[s] || {}, m = i.attributes[s] || {}, v = i.elements[s];
        ut(v) && Ot(v) && (Object.assign(v.style, c), Object.keys(m).forEach(function(k) {
          var C = m[k];
          C === !1 ? v.removeAttribute(k) : v.setAttribute(k, C === !0 ? "" : C);
        }));
      });
    }, effect: function(a) {
      var i = a.state, s = { popper: { position: i.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
      return Object.assign(i.elements.popper.style, s.popper), i.styles = s, i.elements.arrow && Object.assign(i.elements.arrow.style, s.arrow), function() {
        Object.keys(i.elements).forEach(function(c) {
          var m = i.elements[c], v = i.attributes[c] || {}, k = Object.keys(i.styles.hasOwnProperty(c) ? i.styles[c] : s[c]).reduce(function(C, O) {
            return C[O] = "", C;
          }, {});
          ut(m) && Ot(m) && (Object.assign(m.style, k), Object.keys(v).forEach(function(C) {
            m.removeAttribute(C);
          }));
        });
      };
    }, requires: ["computeStyles"] };
    function Nt(a) {
      return a.split("-")[0];
    }
    var xn = Math.max, Bi = Math.min, Jn = Math.round;
    function Al() {
      var a = navigator.userAgentData;
      return a != null && a.brands && Array.isArray(a.brands) ? a.brands.map(function(i) {
        return i.brand + "/" + i.version;
      }).join(" ") : navigator.userAgent;
    }
    function Ea() {
      return !/^((?!chrome|android).)*safari/i.test(Al());
    }
    function er(a, i, s) {
      i === void 0 && (i = !1), s === void 0 && (s = !1);
      var c = a.getBoundingClientRect(), m = 1, v = 1;
      i && ut(a) && (m = a.offsetWidth > 0 && Jn(c.width) / a.offsetWidth || 1, v = a.offsetHeight > 0 && Jn(c.height) / a.offsetHeight || 1);
      var k = (Cn(a) ? et(a) : window).visualViewport, C = !Ea() && s, O = (c.left + (C && k ? k.offsetLeft : 0)) / m, j = (c.top + (C && k ? k.offsetTop : 0)) / v, M = c.width / m, A = c.height / v;
      return { width: M, height: A, top: j, right: O + M, bottom: j + A, left: O, x: O, y: j };
    }
    function Dl(a) {
      var i = er(a), s = a.offsetWidth, c = a.offsetHeight;
      return Math.abs(i.width - s) <= 1 && (s = i.width), Math.abs(i.height - c) <= 1 && (c = i.height), { x: a.offsetLeft, y: a.offsetTop, width: s, height: c };
    }
    function Ca(a, i) {
      var s = i.getRootNode && i.getRootNode();
      if (a.contains(i))
        return !0;
      if (s && Pl(s)) {
        var c = i;
        do {
          if (c && a.isSameNode(c))
            return !0;
          c = c.parentNode || c.host;
        } while (c);
      }
      return !1;
    }
    function Rt(a) {
      return et(a).getComputedStyle(a);
    }
    function Sh(a) {
      return ["table", "td", "th"].indexOf(Ot(a)) >= 0;
    }
    function Jt(a) {
      return ((Cn(a) ? a.ownerDocument : a.document) || window.document).documentElement;
    }
    function Wi(a) {
      return Ot(a) === "html" ? a : a.assignedSlot || a.parentNode || (Pl(a) ? a.host : null) || Jt(a);
    }
    function xa(a) {
      return ut(a) && Rt(a).position !== "fixed" ? a.offsetParent : null;
    }
    function br(a) {
      for (var i = et(a), s = xa(a); s && Sh(s) && Rt(s).position === "static"; )
        s = xa(s);
      return s && (Ot(s) === "html" || Ot(s) === "body" && Rt(s).position === "static") ? i : s || function(c) {
        var m = /firefox/i.test(Al());
        if (/Trident/i.test(Al()) && ut(c) && Rt(c).position === "fixed")
          return null;
        var v = Wi(c);
        for (Pl(v) && (v = v.host); ut(v) && ["html", "body"].indexOf(Ot(v)) < 0; ) {
          var k = Rt(v);
          if (k.transform !== "none" || k.perspective !== "none" || k.contain === "paint" || ["transform", "perspective"].indexOf(k.willChange) !== -1 || m && k.willChange === "filter" || m && k.filter && k.filter !== "none")
            return v;
          v = v.parentNode;
        }
        return null;
      }(a) || i;
    }
    function zl(a) {
      return ["top", "bottom"].indexOf(a) >= 0 ? "x" : "y";
    }
    function Fr(a, i, s) {
      return xn(a, Bi(i, s));
    }
    function Ta(a) {
      return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, a);
    }
    function Oa(a, i) {
      return i.reduce(function(s, c) {
        return s[c] = a, s;
      }, {});
    }
    const Na = { name: "arrow", enabled: !0, phase: "main", fn: function(a) {
      var i, s = a.state, c = a.name, m = a.options, v = s.elements.arrow, k = s.modifiersData.popperOffsets, C = Nt(s.placement), O = zl(C), j = [Fe, Je].indexOf(C) >= 0 ? "height" : "width";
      if (v && k) {
        var M = function(oe, ne) {
          return Ta(typeof (oe = typeof oe == "function" ? oe(Object.assign({}, ne.rects, { placement: ne.placement })) : oe) != "number" ? oe : Oa(oe, Gn));
        }(m.padding, s), A = Dl(v), Q = O === "y" ? be : Fe, U = O === "y" ? qe : Je, W = s.rects.reference[j] + s.rects.reference[O] - k[O] - s.rects.popper[j], H = k[O] - s.rects.reference[O], V = br(v), ie = V ? O === "y" ? V.clientHeight || 0 : V.clientWidth || 0 : 0, se = W / 2 - H / 2, X = M[Q], ee = ie - A[j] - M[U], K = ie / 2 - A[j] / 2 + se, q = Fr(X, K, ee), te = O;
        s.modifiersData[c] = ((i = {})[te] = q, i.centerOffset = q - K, i);
      }
    }, effect: function(a) {
      var i = a.state, s = a.options.element, c = s === void 0 ? "[data-popper-arrow]" : s;
      c != null && (typeof c != "string" || (c = i.elements.popper.querySelector(c))) && Ca(i.elements.popper, c) && (i.elements.arrow = c);
    }, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
    function tr(a) {
      return a.split("-")[1];
    }
    var Eh = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
    function Pa(a) {
      var i, s = a.popper, c = a.popperRect, m = a.placement, v = a.variation, k = a.offsets, C = a.position, O = a.gpuAcceleration, j = a.adaptive, M = a.roundOffsets, A = a.isFixed, Q = k.x, U = Q === void 0 ? 0 : Q, W = k.y, H = W === void 0 ? 0 : W, V = typeof M == "function" ? M({ x: U, y: H }) : { x: U, y: H };
      U = V.x, H = V.y;
      var ie = k.hasOwnProperty("x"), se = k.hasOwnProperty("y"), X = Fe, ee = be, K = window;
      if (j) {
        var q = br(s), te = "clientHeight", oe = "clientWidth";
        q === et(s) && Rt(q = Jt(s)).position !== "static" && C === "absolute" && (te = "scrollHeight", oe = "scrollWidth"), (m === be || (m === Fe || m === Je) && v === Zn) && (ee = qe, H -= (A && q === K && K.visualViewport ? K.visualViewport.height : q[te]) - c.height, H *= O ? 1 : -1), m !== Fe && (m !== be && m !== qe || v !== Zn) || (X = Je, U -= (A && q === K && K.visualViewport ? K.visualViewport.width : q[oe]) - c.width, U *= O ? 1 : -1);
      }
      var ne, ke = Object.assign({ position: C }, j && Eh), tt = M === !0 ? function(_t, $e) {
        var at = _t.x, ct = _t.y, ye = $e.devicePixelRatio || 1;
        return { x: Jn(at * ye) / ye || 0, y: Jn(ct * ye) / ye || 0 };
      }({ x: U, y: H }, et(s)) : { x: U, y: H };
      return U = tt.x, H = tt.y, O ? Object.assign({}, ke, ((ne = {})[ee] = se ? "0" : "", ne[X] = ie ? "0" : "", ne.transform = (K.devicePixelRatio || 1) <= 1 ? "translate(" + U + "px, " + H + "px)" : "translate3d(" + U + "px, " + H + "px, 0)", ne)) : Object.assign({}, ke, ((i = {})[ee] = se ? H + "px" : "", i[X] = ie ? U + "px" : "", i.transform = "", i));
    }
    const jl = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: function(a) {
      var i = a.state, s = a.options, c = s.gpuAcceleration, m = c === void 0 || c, v = s.adaptive, k = v === void 0 || v, C = s.roundOffsets, O = C === void 0 || C, j = { placement: Nt(i.placement), variation: tr(i.placement), popper: i.elements.popper, popperRect: i.rects.popper, gpuAcceleration: m, isFixed: i.options.strategy === "fixed" };
      i.modifiersData.popperOffsets != null && (i.styles.popper = Object.assign({}, i.styles.popper, Pa(Object.assign({}, j, { offsets: i.modifiersData.popperOffsets, position: i.options.strategy, adaptive: k, roundOffsets: O })))), i.modifiersData.arrow != null && (i.styles.arrow = Object.assign({}, i.styles.arrow, Pa(Object.assign({}, j, { offsets: i.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: O })))), i.attributes.popper = Object.assign({}, i.attributes.popper, { "data-popper-placement": i.placement });
    }, data: {} };
    var Vi = { passive: !0 };
    const Il = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
    }, effect: function(a) {
      var i = a.state, s = a.instance, c = a.options, m = c.scroll, v = m === void 0 || m, k = c.resize, C = k === void 0 || k, O = et(i.elements.popper), j = [].concat(i.scrollParents.reference, i.scrollParents.popper);
      return v && j.forEach(function(M) {
        M.addEventListener("scroll", s.update, Vi);
      }), C && O.addEventListener("resize", s.update, Vi), function() {
        v && j.forEach(function(M) {
          M.removeEventListener("scroll", s.update, Vi);
        }), C && O.removeEventListener("resize", s.update, Vi);
      };
    }, data: {} };
    var Ch = { left: "right", right: "left", bottom: "top", top: "bottom" };
    function Qi(a) {
      return a.replace(/left|right|bottom|top/g, function(i) {
        return Ch[i];
      });
    }
    var xh = { start: "end", end: "start" };
    function La(a) {
      return a.replace(/start|end/g, function(i) {
        return xh[i];
      });
    }
    function Ml(a) {
      var i = et(a);
      return { scrollLeft: i.pageXOffset, scrollTop: i.pageYOffset };
    }
    function Rl(a) {
      return er(Jt(a)).left + Ml(a).scrollLeft;
    }
    function bl(a) {
      var i = Rt(a), s = i.overflow, c = i.overflowX, m = i.overflowY;
      return /auto|scroll|overlay|hidden/.test(s + m + c);
    }
    function Aa(a) {
      return ["html", "body", "#document"].indexOf(Ot(a)) >= 0 ? a.ownerDocument.body : ut(a) && bl(a) ? a : Aa(Wi(a));
    }
    function $r(a, i) {
      var s;
      i === void 0 && (i = []);
      var c = Aa(a), m = c === ((s = a.ownerDocument) == null ? void 0 : s.body), v = et(c), k = m ? [v].concat(v.visualViewport || [], bl(c) ? c : []) : c, C = i.concat(k);
      return m ? C : C.concat($r(Wi(k)));
    }
    function Fl(a) {
      return Object.assign({}, a, { left: a.x, top: a.y, right: a.x + a.width, bottom: a.y + a.height });
    }
    function Da(a, i, s) {
      return i === Tl ? Fl(function(c, m) {
        var v = et(c), k = Jt(c), C = v.visualViewport, O = k.clientWidth, j = k.clientHeight, M = 0, A = 0;
        if (C) {
          O = C.width, j = C.height;
          var Q = Ea();
          (Q || !Q && m === "fixed") && (M = C.offsetLeft, A = C.offsetTop);
        }
        return { width: O, height: j, x: M + Rl(c), y: A };
      }(a, s)) : Cn(i) ? function(c, m) {
        var v = er(c, !1, m === "fixed");
        return v.top = v.top + c.clientTop, v.left = v.left + c.clientLeft, v.bottom = v.top + c.clientHeight, v.right = v.left + c.clientWidth, v.width = c.clientWidth, v.height = c.clientHeight, v.x = v.left, v.y = v.top, v;
      }(i, s) : Fl(function(c) {
        var m, v = Jt(c), k = Ml(c), C = (m = c.ownerDocument) == null ? void 0 : m.body, O = xn(v.scrollWidth, v.clientWidth, C ? C.scrollWidth : 0, C ? C.clientWidth : 0), j = xn(v.scrollHeight, v.clientHeight, C ? C.scrollHeight : 0, C ? C.clientHeight : 0), M = -k.scrollLeft + Rl(c), A = -k.scrollTop;
        return Rt(C || v).direction === "rtl" && (M += xn(v.clientWidth, C ? C.clientWidth : 0) - O), { width: O, height: j, x: M, y: A };
      }(Jt(a)));
    }
    function za(a) {
      var i, s = a.reference, c = a.element, m = a.placement, v = m ? Nt(m) : null, k = m ? tr(m) : null, C = s.x + s.width / 2 - c.width / 2, O = s.y + s.height / 2 - c.height / 2;
      switch (v) {
        case be:
          i = { x: C, y: s.y - c.height };
          break;
        case qe:
          i = { x: C, y: s.y + s.height };
          break;
        case Je:
          i = { x: s.x + s.width, y: O };
          break;
        case Fe:
          i = { x: s.x - c.width, y: O };
          break;
        default:
          i = { x: s.x, y: s.y };
      }
      var j = v ? zl(v) : null;
      if (j != null) {
        var M = j === "y" ? "height" : "width";
        switch (k) {
          case En:
            i[j] = i[j] - (s[M] / 2 - c[M] / 2);
            break;
          case Zn:
            i[j] = i[j] + (s[M] / 2 - c[M] / 2);
        }
      }
      return i;
    }
    function nr(a, i) {
      i === void 0 && (i = {});
      var s = i, c = s.placement, m = c === void 0 ? a.placement : c, v = s.strategy, k = v === void 0 ? a.strategy : v, C = s.boundary, O = C === void 0 ? fa : C, j = s.rootBoundary, M = j === void 0 ? Tl : j, A = s.elementContext, Q = A === void 0 ? qn : A, U = s.altBoundary, W = U !== void 0 && U, H = s.padding, V = H === void 0 ? 0 : H, ie = Ta(typeof V != "number" ? V : Oa(V, Gn)), se = Q === qn ? da : qn, X = a.rects.popper, ee = a.elements[W ? se : Q], K = function($e, at, ct, ye) {
        var Pt = at === "clippingParents" ? function(le) {
          var Ue = $r(Wi(le)), ft = ["absolute", "fixed"].indexOf(Rt(le).position) >= 0 && ut(le) ? br(le) : le;
          return Cn(ft) ? Ue.filter(function(en) {
            return Cn(en) && Ca(en, ft) && Ot(en) !== "body";
          }) : [];
        }($e) : [].concat(at), Lt = [].concat(Pt, [ct]), rr = Lt[0], Oe = Lt.reduce(function(le, Ue) {
          var ft = Da($e, Ue, ye);
          return le.top = xn(ft.top, le.top), le.right = Bi(ft.right, le.right), le.bottom = Bi(ft.bottom, le.bottom), le.left = xn(ft.left, le.left), le;
        }, Da($e, rr, ye));
        return Oe.width = Oe.right - Oe.left, Oe.height = Oe.bottom - Oe.top, Oe.x = Oe.left, Oe.y = Oe.top, Oe;
      }(Cn(ee) ? ee : ee.contextElement || Jt(a.elements.popper), O, M, k), q = er(a.elements.reference), te = za({ reference: q, element: X, strategy: "absolute", placement: m }), oe = Fl(Object.assign({}, X, te)), ne = Q === qn ? oe : q, ke = { top: K.top - ne.top + ie.top, bottom: ne.bottom - K.bottom + ie.bottom, left: K.left - ne.left + ie.left, right: ne.right - K.right + ie.right }, tt = a.modifiersData.offset;
      if (Q === qn && tt) {
        var _t = tt[m];
        Object.keys(ke).forEach(function($e) {
          var at = [Je, qe].indexOf($e) >= 0 ? 1 : -1, ct = [be, qe].indexOf($e) >= 0 ? "y" : "x";
          ke[$e] += _t[ct] * at;
        });
      }
      return ke;
    }
    function Th(a, i) {
      i === void 0 && (i = {});
      var s = i, c = s.placement, m = s.boundary, v = s.rootBoundary, k = s.padding, C = s.flipVariations, O = s.allowedAutoPlacements, j = O === void 0 ? Nl : O, M = tr(c), A = M ? C ? Ol : Ol.filter(function(W) {
        return tr(W) === M;
      }) : Gn, Q = A.filter(function(W) {
        return j.indexOf(W) >= 0;
      });
      Q.length === 0 && (Q = A);
      var U = Q.reduce(function(W, H) {
        return W[H] = nr(a, { placement: H, boundary: m, rootBoundary: v, padding: k })[Nt(H)], W;
      }, {});
      return Object.keys(U).sort(function(W, H) {
        return U[W] - U[H];
      });
    }
    const ja = { name: "flip", enabled: !0, phase: "main", fn: function(a) {
      var i = a.state, s = a.options, c = a.name;
      if (!i.modifiersData[c]._skip) {
        for (var m = s.mainAxis, v = m === void 0 || m, k = s.altAxis, C = k === void 0 || k, O = s.fallbackPlacements, j = s.padding, M = s.boundary, A = s.rootBoundary, Q = s.altBoundary, U = s.flipVariations, W = U === void 0 || U, H = s.allowedAutoPlacements, V = i.options.placement, ie = Nt(V), se = O || (ie !== V && W ? function(le) {
          if (Nt(le) === Hi)
            return [];
          var Ue = Qi(le);
          return [La(le), Ue, La(Ue)];
        }(V) : [Qi(V)]), X = [V].concat(se).reduce(function(le, Ue) {
          return le.concat(Nt(Ue) === Hi ? Th(i, { placement: Ue, boundary: M, rootBoundary: A, padding: j, flipVariations: W, allowedAutoPlacements: H }) : Ue);
        }, []), ee = i.rects.reference, K = i.rects.popper, q = /* @__PURE__ */ new Map(), te = !0, oe = X[0], ne = 0; ne < X.length; ne++) {
          var ke = X[ne], tt = Nt(ke), _t = tr(ke) === En, $e = [be, qe].indexOf(tt) >= 0, at = $e ? "width" : "height", ct = nr(i, { placement: ke, boundary: M, rootBoundary: A, altBoundary: Q, padding: j }), ye = $e ? _t ? Je : Fe : _t ? qe : be;
          ee[at] > K[at] && (ye = Qi(ye));
          var Pt = Qi(ye), Lt = [];
          if (v && Lt.push(ct[tt] <= 0), C && Lt.push(ct[ye] <= 0, ct[Pt] <= 0), Lt.every(function(le) {
            return le;
          })) {
            oe = ke, te = !1;
            break;
          }
          q.set(ke, Lt);
        }
        if (te)
          for (var rr = function(le) {
            var Ue = X.find(function(ft) {
              var en = q.get(ft);
              if (en)
                return en.slice(0, le).every(function(no) {
                  return no;
                });
            });
            if (Ue)
              return oe = Ue, "break";
          }, Oe = W ? 3 : 1; Oe > 0 && rr(Oe) !== "break"; Oe--)
            ;
        i.placement !== oe && (i.modifiersData[c]._skip = !0, i.placement = oe, i.reset = !0);
      }
    }, requiresIfExists: ["offset"], data: { _skip: !1 } };
    function Ia(a, i, s) {
      return s === void 0 && (s = { x: 0, y: 0 }), { top: a.top - i.height - s.y, right: a.right - i.width + s.x, bottom: a.bottom - i.height + s.y, left: a.left - i.width - s.x };
    }
    function Ma(a) {
      return [be, Je, qe, Fe].some(function(i) {
        return a[i] >= 0;
      });
    }
    const Ra = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: function(a) {
      var i = a.state, s = a.name, c = i.rects.reference, m = i.rects.popper, v = i.modifiersData.preventOverflow, k = nr(i, { elementContext: "reference" }), C = nr(i, { altBoundary: !0 }), O = Ia(k, c), j = Ia(C, m, v), M = Ma(O), A = Ma(j);
      i.modifiersData[s] = { referenceClippingOffsets: O, popperEscapeOffsets: j, isReferenceHidden: M, hasPopperEscaped: A }, i.attributes.popper = Object.assign({}, i.attributes.popper, { "data-popper-reference-hidden": M, "data-popper-escaped": A });
    } }, ba = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: function(a) {
      var i = a.state, s = a.options, c = a.name, m = s.offset, v = m === void 0 ? [0, 0] : m, k = Nl.reduce(function(M, A) {
        return M[A] = function(Q, U, W) {
          var H = Nt(Q), V = [Fe, be].indexOf(H) >= 0 ? -1 : 1, ie = typeof W == "function" ? W(Object.assign({}, U, { placement: Q })) : W, se = ie[0], X = ie[1];
          return se = se || 0, X = (X || 0) * V, [Fe, Je].indexOf(H) >= 0 ? { x: X, y: se } : { x: se, y: X };
        }(A, i.rects, v), M;
      }, {}), C = k[i.placement], O = C.x, j = C.y;
      i.modifiersData.popperOffsets != null && (i.modifiersData.popperOffsets.x += O, i.modifiersData.popperOffsets.y += j), i.modifiersData[c] = k;
    } }, $l = { name: "popperOffsets", enabled: !0, phase: "read", fn: function(a) {
      var i = a.state, s = a.name;
      i.modifiersData[s] = za({ reference: i.rects.reference, element: i.rects.popper, strategy: "absolute", placement: i.placement });
    }, data: {} }, Fa = { name: "preventOverflow", enabled: !0, phase: "main", fn: function(a) {
      var i = a.state, s = a.options, c = a.name, m = s.mainAxis, v = m === void 0 || m, k = s.altAxis, C = k !== void 0 && k, O = s.boundary, j = s.rootBoundary, M = s.altBoundary, A = s.padding, Q = s.tether, U = Q === void 0 || Q, W = s.tetherOffset, H = W === void 0 ? 0 : W, V = nr(i, { boundary: O, rootBoundary: j, padding: A, altBoundary: M }), ie = Nt(i.placement), se = tr(i.placement), X = !se, ee = zl(ie), K = ee === "x" ? "y" : "x", q = i.modifiersData.popperOffsets, te = i.rects.reference, oe = i.rects.popper, ne = typeof H == "function" ? H(Object.assign({}, i.rects, { placement: i.placement })) : H, ke = typeof ne == "number" ? { mainAxis: ne, altAxis: ne } : Object.assign({ mainAxis: 0, altAxis: 0 }, ne), tt = i.modifiersData.offset ? i.modifiersData.offset[i.placement] : null, _t = { x: 0, y: 0 };
      if (q) {
        if (v) {
          var $e, at = ee === "y" ? be : Fe, ct = ee === "y" ? qe : Je, ye = ee === "y" ? "height" : "width", Pt = q[ee], Lt = Pt + V[at], rr = Pt - V[ct], Oe = U ? -oe[ye] / 2 : 0, le = se === En ? te[ye] : oe[ye], Ue = se === En ? -oe[ye] : -te[ye], ft = i.elements.arrow, en = U && ft ? Dl(ft) : { width: 0, height: 0 }, no = i.modifiersData["arrow#persistent"] ? i.modifiersData["arrow#persistent"].padding : { top: 0, right: 0, bottom: 0, left: 0 }, Cc = no[at], xc = no[ct], ro = Fr(0, te[ye], en[ye]), mm = X ? te[ye] / 2 - Oe - ro - Cc - ke.mainAxis : le - ro - Cc - ke.mainAxis, gm = X ? -te[ye] / 2 + Oe + ro + xc + ke.mainAxis : Ue + ro + xc + ke.mainAxis, Kl = i.elements.arrow && br(i.elements.arrow), vm = Kl ? ee === "y" ? Kl.clientTop || 0 : Kl.clientLeft || 0 : 0, Tc = ($e = tt == null ? void 0 : tt[ee]) != null ? $e : 0, ym = Pt + gm - Tc, Oc = Fr(U ? Bi(Lt, Pt + mm - Tc - vm) : Lt, Pt, U ? xn(rr, ym) : rr);
          q[ee] = Oc, _t[ee] = Oc - Pt;
        }
        if (C) {
          var Nc, _m = ee === "x" ? be : Fe, wm = ee === "x" ? qe : Je, Ln = q[K], io = K === "y" ? "height" : "width", Pc = Ln + V[_m], Lc = Ln - V[wm], Yl = [be, Fe].indexOf(ie) !== -1, Ac = (Nc = tt == null ? void 0 : tt[K]) != null ? Nc : 0, Dc = Yl ? Pc : Ln - te[io] - oe[io] - Ac + ke.altAxis, zc = Yl ? Ln + te[io] + oe[io] - Ac - ke.altAxis : Lc, jc = U && Yl ? function(km, Sm, Xl) {
            var Ic = Fr(km, Sm, Xl);
            return Ic > Xl ? Xl : Ic;
          }(Dc, Ln, zc) : Fr(U ? Dc : Pc, Ln, U ? zc : Lc);
          q[K] = jc, _t[K] = jc - Ln;
        }
        i.modifiersData[c] = _t;
      }
    }, requiresIfExists: ["offset"] };
    function Oh(a, i, s) {
      s === void 0 && (s = !1);
      var c, m, v = ut(i), k = ut(i) && function(A) {
        var Q = A.getBoundingClientRect(), U = Jn(Q.width) / A.offsetWidth || 1, W = Jn(Q.height) / A.offsetHeight || 1;
        return U !== 1 || W !== 1;
      }(i), C = Jt(i), O = er(a, k, s), j = { scrollLeft: 0, scrollTop: 0 }, M = { x: 0, y: 0 };
      return (v || !v && !s) && ((Ot(i) !== "body" || bl(C)) && (j = (c = i) !== et(c) && ut(c) ? { scrollLeft: (m = c).scrollLeft, scrollTop: m.scrollTop } : Ml(c)), ut(i) ? ((M = er(i, !0)).x += i.clientLeft, M.y += i.clientTop) : C && (M.x = Rl(C))), { x: O.left + j.scrollLeft - M.x, y: O.top + j.scrollTop - M.y, width: O.width, height: O.height };
    }
    function Nh(a) {
      var i = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Set(), c = [];
      function m(v) {
        s.add(v.name), [].concat(v.requires || [], v.requiresIfExists || []).forEach(function(k) {
          if (!s.has(k)) {
            var C = i.get(k);
            C && m(C);
          }
        }), c.push(v);
      }
      return a.forEach(function(v) {
        i.set(v.name, v);
      }), a.forEach(function(v) {
        s.has(v.name) || m(v);
      }), c;
    }
    var $a = { placement: "bottom", modifiers: [], strategy: "absolute" };
    function Ua() {
      for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++)
        i[s] = arguments[s];
      return !i.some(function(c) {
        return !(c && typeof c.getBoundingClientRect == "function");
      });
    }
    function Ki(a) {
      a === void 0 && (a = {});
      var i = a, s = i.defaultModifiers, c = s === void 0 ? [] : s, m = i.defaultOptions, v = m === void 0 ? $a : m;
      return function(k, C, O) {
        O === void 0 && (O = v);
        var j, M, A = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, $a, v), modifiersData: {}, elements: { reference: k, popper: C }, attributes: {}, styles: {} }, Q = [], U = !1, W = { state: A, setOptions: function(V) {
          var ie = typeof V == "function" ? V(A.options) : V;
          H(), A.options = Object.assign({}, v, A.options, ie), A.scrollParents = { reference: Cn(k) ? $r(k) : k.contextElement ? $r(k.contextElement) : [], popper: $r(C) };
          var se, X, ee = function(K) {
            var q = Nh(K);
            return Sa.reduce(function(te, oe) {
              return te.concat(q.filter(function(ne) {
                return ne.phase === oe;
              }));
            }, []);
          }((se = [].concat(c, A.options.modifiers), X = se.reduce(function(K, q) {
            var te = K[q.name];
            return K[q.name] = te ? Object.assign({}, te, q, { options: Object.assign({}, te.options, q.options), data: Object.assign({}, te.data, q.data) }) : q, K;
          }, {}), Object.keys(X).map(function(K) {
            return X[K];
          })));
          return A.orderedModifiers = ee.filter(function(K) {
            return K.enabled;
          }), A.orderedModifiers.forEach(function(K) {
            var q = K.name, te = K.options, oe = te === void 0 ? {} : te, ne = K.effect;
            if (typeof ne == "function") {
              var ke = ne({ state: A, name: q, instance: W, options: oe });
              Q.push(ke || function() {
              });
            }
          }), W.update();
        }, forceUpdate: function() {
          if (!U) {
            var V = A.elements, ie = V.reference, se = V.popper;
            if (Ua(ie, se)) {
              A.rects = { reference: Oh(ie, br(se), A.options.strategy === "fixed"), popper: Dl(se) }, A.reset = !1, A.placement = A.options.placement, A.orderedModifiers.forEach(function(ne) {
                return A.modifiersData[ne.name] = Object.assign({}, ne.data);
              });
              for (var X = 0; X < A.orderedModifiers.length; X++)
                if (A.reset !== !0) {
                  var ee = A.orderedModifiers[X], K = ee.fn, q = ee.options, te = q === void 0 ? {} : q, oe = ee.name;
                  typeof K == "function" && (A = K({ state: A, options: te, name: oe, instance: W }) || A);
                } else
                  A.reset = !1, X = -1;
            }
          }
        }, update: (j = function() {
          return new Promise(function(V) {
            W.forceUpdate(), V(A);
          });
        }, function() {
          return M || (M = new Promise(function(V) {
            Promise.resolve().then(function() {
              M = void 0, V(j());
            });
          })), M;
        }), destroy: function() {
          H(), U = !0;
        } };
        if (!Ua(k, C))
          return W;
        function H() {
          Q.forEach(function(V) {
            return V();
          }), Q = [];
        }
        return W.setOptions(O).then(function(V) {
          !U && O.onFirstUpdate && O.onFirstUpdate(V);
        }), W;
      };
    }
    var Ph = Ki(), Lh = Ki({ defaultModifiers: [Il, $l, jl, Ll] }), Ul = Ki({ defaultModifiers: [Il, $l, jl, Ll, ba, ja, Fa, Na, Ra] });
    const Ha = Object.freeze(Object.defineProperty({ __proto__: null, afterMain: ya, afterRead: ma, afterWrite: ka, applyStyles: Ll, arrow: Na, auto: Hi, basePlacements: Gn, beforeMain: ga, beforeRead: pa, beforeWrite: _a, bottom: qe, clippingParents: fa, computeStyles: jl, createPopper: Ul, createPopperBase: Ph, createPopperLite: Lh, detectOverflow: nr, end: Zn, eventListeners: Il, flip: ja, hide: Ra, left: Fe, main: va, modifierPhases: Sa, offset: ba, placements: Nl, popper: qn, popperGenerator: Ki, popperOffsets: $l, preventOverflow: Fa, read: ha, reference: da, right: Je, start: En, top: be, variationPlacements: Ol, viewport: Tl, write: wa }, Symbol.toStringTag, { value: "Module" })), Ba = "dropdown", Ah = "ArrowUp", Wa = "ArrowDown", Va = "click.bs.dropdown.data-api", Qa = "keydown.bs.dropdown.data-api", Ur = "show", Tn = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', Dh = `${Tn}.show`, Yi = ".dropdown-menu", zh = G() ? "top-end" : "top-start", jh = G() ? "top-start" : "top-end", Ih = G() ? "bottom-end" : "bottom-start", Mh = G() ? "bottom-start" : "bottom-end", Rh = G() ? "left-start" : "right-start", bh = G() ? "right-start" : "left-start", Fh = { autoClose: !0, boundary: "clippingParents", display: "dynamic", offset: [0, 2], popperConfig: null, reference: "toggle" }, $h = { autoClose: "(boolean|string)", boundary: "(string|element)", display: "string", offset: "(array|string|function)", popperConfig: "(null|object|function)", reference: "(string|element|object)" };
    class yt extends Ce {
      constructor(i, s) {
        super(i, s), this._popper = null, this._parent = this._element.parentNode, this._menu = $.next(this._element, Yi)[0] || $.prev(this._element, Yi)[0] || $.findOne(Yi, this._parent), this._inNavbar = this._detectNavbar();
      }
      static get Default() {
        return Fh;
      }
      static get DefaultType() {
        return $h;
      }
      static get NAME() {
        return Ba;
      }
      toggle() {
        return this._isShown() ? this.hide() : this.show();
      }
      show() {
        if (S(this._element) || this._isShown())
          return;
        const i = { relatedTarget: this._element };
        if (!_.trigger(this._element, "show.bs.dropdown", i).defaultPrevented) {
          if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav"))
            for (const s of [].concat(...document.body.children))
              _.on(s, "mouseover", w);
          this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(Ur), this._element.classList.add(Ur), _.trigger(this._element, "shown.bs.dropdown", i);
        }
      }
      hide() {
        if (S(this._element) || !this._isShown())
          return;
        const i = { relatedTarget: this._element };
        this._completeHide(i);
      }
      dispose() {
        this._popper && this._popper.destroy(), super.dispose();
      }
      update() {
        this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
      }
      _completeHide(i) {
        if (!_.trigger(this._element, "hide.bs.dropdown", i).defaultPrevented) {
          if ("ontouchstart" in document.documentElement)
            for (const s of [].concat(...document.body.children))
              _.off(s, "mouseover", w);
          this._popper && this._popper.destroy(), this._menu.classList.remove(Ur), this._element.classList.remove(Ur), this._element.setAttribute("aria-expanded", "false"), Le.removeDataAttribute(this._menu, "popper"), _.trigger(this._element, "hidden.bs.dropdown", i);
        }
      }
      _getConfig(i) {
        if (typeof (i = super._getConfig(i)).reference == "object" && !f(i.reference) && typeof i.reference.getBoundingClientRect != "function")
          throw new TypeError(`${Ba.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
        return i;
      }
      _createPopper() {
        if (Ha === void 0)
          throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
        let i = this._element;
        this._config.reference === "parent" ? i = this._parent : f(this._config.reference) ? i = d(this._config.reference) : typeof this._config.reference == "object" && (i = this._config.reference);
        const s = this._getPopperConfig();
        this._popper = Ul(i, this._menu, s);
      }
      _isShown() {
        return this._menu.classList.contains(Ur);
      }
      _getPlacement() {
        const i = this._parent;
        if (i.classList.contains("dropend"))
          return Rh;
        if (i.classList.contains("dropstart"))
          return bh;
        if (i.classList.contains("dropup-center"))
          return "top";
        if (i.classList.contains("dropdown-center"))
          return "bottom";
        const s = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
        return i.classList.contains("dropup") ? s ? jh : zh : s ? Mh : Ih;
      }
      _detectNavbar() {
        return this._element.closest(".navbar") !== null;
      }
      _getOffset() {
        const { offset: i } = this._config;
        return typeof i == "string" ? i.split(",").map((s) => Number.parseInt(s, 10)) : typeof i == "function" ? (s) => i(s, this._element) : i;
      }
      _getPopperConfig() {
        const i = { placement: this._getPlacement(), modifiers: [{ name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "offset", options: { offset: this._getOffset() } }] };
        return (this._inNavbar || this._config.display === "static") && (Le.setDataAttribute(this._menu, "popper", "static"), i.modifiers = [{ name: "applyStyles", enabled: !1 }]), { ...i, ...p(this._config.popperConfig, [i]) };
      }
      _selectMenuItem({ key: i, target: s }) {
        const c = $.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((m) => h(m));
        c.length && x(c, s, i === Wa, !c.includes(s)).focus();
      }
      static jQueryInterface(i) {
        return this.each(function() {
          const s = yt.getOrCreateInstance(this, i);
          if (typeof i == "string") {
            if (s[i] === void 0)
              throw new TypeError(`No method named "${i}"`);
            s[i]();
          }
        });
      }
      static clearMenus(i) {
        if (i.button === 2 || i.type === "keyup" && i.key !== "Tab")
          return;
        const s = $.find(Dh);
        for (const c of s) {
          const m = yt.getInstance(c);
          if (!m || m._config.autoClose === !1)
            continue;
          const v = i.composedPath(), k = v.includes(m._menu);
          if (v.includes(m._element) || m._config.autoClose === "inside" && !k || m._config.autoClose === "outside" && k || m._menu.contains(i.target) && (i.type === "keyup" && i.key === "Tab" || /input|select|option|textarea|form/i.test(i.target.tagName)))
            continue;
          const C = { relatedTarget: m._element };
          i.type === "click" && (C.clickEvent = i), m._completeHide(C);
        }
      }
      static dataApiKeydownHandler(i) {
        const s = /input|textarea/i.test(i.target.tagName), c = i.key === "Escape", m = [Ah, Wa].includes(i.key);
        if (!m && !c || s && !c)
          return;
        i.preventDefault();
        const v = this.matches(Tn) ? this : $.prev(this, Tn)[0] || $.next(this, Tn)[0] || $.findOne(Tn, i.delegateTarget.parentNode), k = yt.getOrCreateInstance(v);
        if (m)
          return i.stopPropagation(), k.show(), void k._selectMenuItem(i);
        k._isShown() && (i.stopPropagation(), k.hide(), v.focus());
      }
    }
    _.on(document, Qa, Tn, yt.dataApiKeydownHandler), _.on(document, Qa, Yi, yt.dataApiKeydownHandler), _.on(document, Va, yt.clearMenus), _.on(document, "keyup.bs.dropdown.data-api", yt.clearMenus), _.on(document, Va, Tn, function(a) {
      a.preventDefault(), yt.getOrCreateInstance(this).toggle();
    }), g(yt);
    const Ka = "show", Ya = "mousedown.bs.backdrop", Uh = { className: "modal-backdrop", clickCallback: null, isAnimated: !1, isVisible: !0, rootElement: "body" }, Hh = { className: "string", clickCallback: "(function|null)", isAnimated: "boolean", isVisible: "boolean", rootElement: "(element|string)" };
    class Xa extends Mt {
      constructor(i) {
        super(), this._config = this._getConfig(i), this._isAppended = !1, this._element = null;
      }
      static get Default() {
        return Uh;
      }
      static get DefaultType() {
        return Hh;
      }
      static get NAME() {
        return "backdrop";
      }
      show(i) {
        if (!this._config.isVisible)
          return void p(i);
        this._append();
        const s = this._getElement();
        this._config.isAnimated && N(s), s.classList.add(Ka), this._emulateAnimation(() => {
          p(i);
        });
      }
      hide(i) {
        this._config.isVisible ? (this._getElement().classList.remove(Ka), this._emulateAnimation(() => {
          this.dispose(), p(i);
        })) : p(i);
      }
      dispose() {
        this._isAppended && (_.off(this._element, Ya), this._element.remove(), this._isAppended = !1);
      }
      _getElement() {
        if (!this._element) {
          const i = document.createElement("div");
          i.className = this._config.className, this._config.isAnimated && i.classList.add("fade"), this._element = i;
        }
        return this._element;
      }
      _configAfterMerge(i) {
        return i.rootElement = d(i.rootElement), i;
      }
      _append() {
        if (this._isAppended)
          return;
        const i = this._getElement();
        this._config.rootElement.append(i), _.on(i, Ya, () => {
          p(this._config.clickCallback);
        }), this._isAppended = !0;
      }
      _emulateAnimation(i) {
        y(i, this._getElement(), this._config.isAnimated);
      }
    }
    const Ga = ".bs.focustrap", Za = "backward", Bh = { autofocus: !0, trapElement: null }, Wh = { autofocus: "boolean", trapElement: "element" };
    class qa extends Mt {
      constructor(i) {
        super(), this._config = this._getConfig(i), this._isActive = !1, this._lastTabNavDirection = null;
      }
      static get Default() {
        return Bh;
      }
      static get DefaultType() {
        return Wh;
      }
      static get NAME() {
        return "focustrap";
      }
      activate() {
        this._isActive || (this._config.autofocus && this._config.trapElement.focus(), _.off(document, Ga), _.on(document, "focusin.bs.focustrap", (i) => this._handleFocusin(i)), _.on(document, "keydown.tab.bs.focustrap", (i) => this._handleKeydown(i)), this._isActive = !0);
      }
      deactivate() {
        this._isActive && (this._isActive = !1, _.off(document, Ga));
      }
      _handleFocusin(i) {
        const { trapElement: s } = this._config;
        if (i.target === document || i.target === s || s.contains(i.target))
          return;
        const c = $.focusableChildren(s);
        c.length === 0 ? s.focus() : this._lastTabNavDirection === Za ? c[c.length - 1].focus() : c[0].focus();
      }
      _handleKeydown(i) {
        i.key === "Tab" && (this._lastTabNavDirection = i.shiftKey ? Za : "forward");
      }
    }
    const Ja = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", ec = ".sticky-top", Xi = "padding-right", tc = "margin-right";
    class Hl {
      constructor() {
        this._element = document.body;
      }
      getWidth() {
        const i = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - i);
      }
      hide() {
        const i = this.getWidth();
        this._disableOverFlow(), this._setElementAttributes(this._element, Xi, (s) => s + i), this._setElementAttributes(Ja, Xi, (s) => s + i), this._setElementAttributes(ec, tc, (s) => s - i);
      }
      reset() {
        this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, Xi), this._resetElementAttributes(Ja, Xi), this._resetElementAttributes(ec, tc);
      }
      isOverflowing() {
        return this.getWidth() > 0;
      }
      _disableOverFlow() {
        this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
      }
      _setElementAttributes(i, s, c) {
        const m = this.getWidth();
        this._applyManipulationCallback(i, (v) => {
          if (v !== this._element && window.innerWidth > v.clientWidth + m)
            return;
          this._saveInitialAttribute(v, s);
          const k = window.getComputedStyle(v).getPropertyValue(s);
          v.style.setProperty(s, `${c(Number.parseFloat(k))}px`);
        });
      }
      _saveInitialAttribute(i, s) {
        const c = i.style.getPropertyValue(s);
        c && Le.setDataAttribute(i, s, c);
      }
      _resetElementAttributes(i, s) {
        this._applyManipulationCallback(i, (c) => {
          const m = Le.getDataAttribute(c, s);
          m !== null ? (Le.removeDataAttribute(c, s), c.style.setProperty(s, m)) : c.style.removeProperty(s);
        });
      }
      _applyManipulationCallback(i, s) {
        if (f(i))
          s(i);
        else
          for (const c of $.find(i, this._element))
            s(c);
      }
    }
    const nc = ".bs.modal", rc = "hidden.bs.modal", ic = "show.bs.modal", oc = "modal-open", lc = "show", Bl = "modal-static", Vh = { backdrop: !0, focus: !0, keyboard: !0 }, Qh = { backdrop: "(boolean|string)", focus: "boolean", keyboard: "boolean" };
    class On extends Ce {
      constructor(i, s) {
        super(i, s), this._dialog = $.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new Hl(), this._addEventListeners();
      }
      static get Default() {
        return Vh;
      }
      static get DefaultType() {
        return Qh;
      }
      static get NAME() {
        return "modal";
      }
      toggle(i) {
        return this._isShown ? this.hide() : this.show(i);
      }
      show(i) {
        this._isShown || this._isTransitioning || _.trigger(this._element, ic, { relatedTarget: i }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(oc), this._adjustDialog(), this._backdrop.show(() => this._showElement(i)));
      }
      hide() {
        this._isShown && !this._isTransitioning && (_.trigger(this._element, "hide.bs.modal").defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(lc), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated())));
      }
      dispose() {
        _.off(window, nc), _.off(this._dialog, nc), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
      }
      handleUpdate() {
        this._adjustDialog();
      }
      _initializeBackDrop() {
        return new Xa({ isVisible: !!this._config.backdrop, isAnimated: this._isAnimated() });
      }
      _initializeFocusTrap() {
        return new qa({ trapElement: this._element });
      }
      _showElement(i) {
        document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
        const s = $.findOne(".modal-body", this._dialog);
        s && (s.scrollTop = 0), N(this._element), this._element.classList.add(lc), this._queueCallback(() => {
          this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, _.trigger(this._element, "shown.bs.modal", { relatedTarget: i });
        }, this._dialog, this._isAnimated());
      }
      _addEventListeners() {
        _.on(this._element, "keydown.dismiss.bs.modal", (i) => {
          i.key === "Escape" && (this._config.keyboard ? this.hide() : this._triggerBackdropTransition());
        }), _.on(window, "resize.bs.modal", () => {
          this._isShown && !this._isTransitioning && this._adjustDialog();
        }), _.on(this._element, "mousedown.dismiss.bs.modal", (i) => {
          _.one(this._element, "click.dismiss.bs.modal", (s) => {
            this._element === i.target && this._element === s.target && (this._config.backdrop !== "static" ? this._config.backdrop && this.hide() : this._triggerBackdropTransition());
          });
        });
      }
      _hideModal() {
        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(() => {
          document.body.classList.remove(oc), this._resetAdjustments(), this._scrollBar.reset(), _.trigger(this._element, rc);
        });
      }
      _isAnimated() {
        return this._element.classList.contains("fade");
      }
      _triggerBackdropTransition() {
        if (_.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented)
          return;
        const i = this._element.scrollHeight > document.documentElement.clientHeight, s = this._element.style.overflowY;
        s === "hidden" || this._element.classList.contains(Bl) || (i || (this._element.style.overflowY = "hidden"), this._element.classList.add(Bl), this._queueCallback(() => {
          this._element.classList.remove(Bl), this._queueCallback(() => {
            this._element.style.overflowY = s;
          }, this._dialog);
        }, this._dialog), this._element.focus());
      }
      _adjustDialog() {
        const i = this._element.scrollHeight > document.documentElement.clientHeight, s = this._scrollBar.getWidth(), c = s > 0;
        if (c && !i) {
          const m = G() ? "paddingLeft" : "paddingRight";
          this._element.style[m] = `${s}px`;
        }
        if (!c && i) {
          const m = G() ? "paddingRight" : "paddingLeft";
          this._element.style[m] = `${s}px`;
        }
      }
      _resetAdjustments() {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
      }
      static jQueryInterface(i, s) {
        return this.each(function() {
          const c = On.getOrCreateInstance(this, i);
          if (typeof i == "string") {
            if (c[i] === void 0)
              throw new TypeError(`No method named "${i}"`);
            c[i](s);
          }
        });
      }
    }
    _.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function(a) {
      const i = $.getElementFromSelector(this);
      ["A", "AREA"].includes(this.tagName) && a.preventDefault(), _.one(i, ic, (c) => {
        c.defaultPrevented || _.one(i, rc, () => {
          h(this) && this.focus();
        });
      });
      const s = $.findOne(".modal.show");
      s && On.getInstance(s).hide(), On.getOrCreateInstance(i).toggle(this);
    }), Mi(On), g(On);
    const sc = "show", uc = "showing", ac = "hiding", cc = ".offcanvas.show", fc = "hidePrevented.bs.offcanvas", dc = "hidden.bs.offcanvas", Kh = { backdrop: !0, keyboard: !0, scroll: !1 }, Yh = { backdrop: "(boolean|string)", keyboard: "boolean", scroll: "boolean" };
    class bt extends Ce {
      constructor(i, s) {
        super(i, s), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
      }
      static get Default() {
        return Kh;
      }
      static get DefaultType() {
        return Yh;
      }
      static get NAME() {
        return "offcanvas";
      }
      toggle(i) {
        return this._isShown ? this.hide() : this.show(i);
      }
      show(i) {
        this._isShown || _.trigger(this._element, "show.bs.offcanvas", { relatedTarget: i }).defaultPrevented || (this._isShown = !0, this._backdrop.show(), this._config.scroll || new Hl().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(uc), this._queueCallback(() => {
          this._config.scroll && !this._config.backdrop || this._focustrap.activate(), this._element.classList.add(sc), this._element.classList.remove(uc), _.trigger(this._element, "shown.bs.offcanvas", { relatedTarget: i });
        }, this._element, !0));
      }
      hide() {
        this._isShown && (_.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(ac), this._backdrop.hide(), this._queueCallback(() => {
          this._element.classList.remove(sc, ac), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new Hl().reset(), _.trigger(this._element, dc);
        }, this._element, !0)));
      }
      dispose() {
        this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
      }
      _initializeBackDrop() {
        const i = !!this._config.backdrop;
        return new Xa({ className: "offcanvas-backdrop", isVisible: i, isAnimated: !0, rootElement: this._element.parentNode, clickCallback: i ? () => {
          this._config.backdrop !== "static" ? this.hide() : _.trigger(this._element, fc);
        } : null });
      }
      _initializeFocusTrap() {
        return new qa({ trapElement: this._element });
      }
      _addEventListeners() {
        _.on(this._element, "keydown.dismiss.bs.offcanvas", (i) => {
          i.key === "Escape" && (this._config.keyboard ? this.hide() : _.trigger(this._element, fc));
        });
      }
      static jQueryInterface(i) {
        return this.each(function() {
          const s = bt.getOrCreateInstance(this, i);
          if (typeof i == "string") {
            if (s[i] === void 0 || i.startsWith("_") || i === "constructor")
              throw new TypeError(`No method named "${i}"`);
            s[i](this);
          }
        });
      }
    }
    _.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function(a) {
      const i = $.getElementFromSelector(this);
      if (["A", "AREA"].includes(this.tagName) && a.preventDefault(), S(this))
        return;
      _.one(i, dc, () => {
        h(this) && this.focus();
      });
      const s = $.findOne(cc);
      s && s !== i && bt.getInstance(s).hide(), bt.getOrCreateInstance(i).toggle(this);
    }), _.on(window, "load.bs.offcanvas.data-api", () => {
      for (const a of $.find(cc))
        bt.getOrCreateInstance(a).show();
    }), _.on(window, "resize.bs.offcanvas", () => {
      for (const a of $.find("[aria-modal][class*=show][class*=offcanvas-]"))
        getComputedStyle(a).position !== "fixed" && bt.getOrCreateInstance(a).hide();
    }), Mi(bt), g(bt);
    const Xh = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), Gh = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i, Zh = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i, qh = (a, i) => {
      const s = a.nodeName.toLowerCase();
      return i.includes(s) ? !Xh.has(s) || !!(Gh.test(a.nodeValue) || Zh.test(a.nodeValue)) : i.filter((c) => c instanceof RegExp).some((c) => c.test(s));
    }, pc = { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "srcset", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] }, Jh = { allowList: pc, content: {}, extraClass: "", html: !1, sanitize: !0, sanitizeFn: null, template: "<div></div>" }, em = { allowList: "object", content: "object", extraClass: "(string|function)", html: "boolean", sanitize: "boolean", sanitizeFn: "(null|function)", template: "string" }, tm = { entry: "(string|element|function|null)", selector: "(string|element)" };
    class nm extends Mt {
      constructor(i) {
        super(), this._config = this._getConfig(i);
      }
      static get Default() {
        return Jh;
      }
      static get DefaultType() {
        return em;
      }
      static get NAME() {
        return "TemplateFactory";
      }
      getContent() {
        return Object.values(this._config.content).map((i) => this._resolvePossibleFunction(i)).filter(Boolean);
      }
      hasContent() {
        return this.getContent().length > 0;
      }
      changeContent(i) {
        return this._checkContent(i), this._config.content = { ...this._config.content, ...i }, this;
      }
      toHtml() {
        const i = document.createElement("div");
        i.innerHTML = this._maybeSanitize(this._config.template);
        for (const [m, v] of Object.entries(this._config.content))
          this._setContent(i, v, m);
        const s = i.children[0], c = this._resolvePossibleFunction(this._config.extraClass);
        return c && s.classList.add(...c.split(" ")), s;
      }
      _typeCheckConfig(i) {
        super._typeCheckConfig(i), this._checkContent(i.content);
      }
      _checkContent(i) {
        for (const [s, c] of Object.entries(i))
          super._typeCheckConfig({ selector: s, entry: c }, tm);
      }
      _setContent(i, s, c) {
        const m = $.findOne(c, i);
        m && ((s = this._resolvePossibleFunction(s)) ? f(s) ? this._putElementInTemplate(d(s), m) : this._config.html ? m.innerHTML = this._maybeSanitize(s) : m.textContent = s : m.remove());
      }
      _maybeSanitize(i) {
        return this._config.sanitize ? function(s, c, m) {
          if (!s.length)
            return s;
          if (m && typeof m == "function")
            return m(s);
          const v = new window.DOMParser().parseFromString(s, "text/html"), k = [].concat(...v.body.querySelectorAll("*"));
          for (const C of k) {
            const O = C.nodeName.toLowerCase();
            if (!Object.keys(c).includes(O)) {
              C.remove();
              continue;
            }
            const j = [].concat(...C.attributes), M = [].concat(c["*"] || [], c[O] || []);
            for (const A of j)
              qh(A, M) || C.removeAttribute(A.nodeName);
          }
          return v.body.innerHTML;
        }(i, this._config.allowList, this._config.sanitizeFn) : i;
      }
      _resolvePossibleFunction(i) {
        return p(i, [this]);
      }
      _putElementInTemplate(i, s) {
        if (this._config.html)
          return s.innerHTML = "", void s.append(i);
        s.textContent = i.textContent;
      }
    }
    const rm = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]), Wl = "fade", Gi = "show", hc = ".modal", mc = "hide.bs.modal", Zi = "hover", gc = "focus", im = { AUTO: "auto", TOP: "top", RIGHT: G() ? "left" : "right", BOTTOM: "bottom", LEFT: G() ? "right" : "left" }, om = { allowList: pc, animation: !0, boundary: "clippingParents", container: !1, customClass: "", delay: 0, fallbackPlacements: ["top", "right", "bottom", "left"], html: !1, offset: [0, 6], placement: "top", popperConfig: null, sanitize: !0, sanitizeFn: null, selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', title: "", trigger: "hover focus" }, lm = { allowList: "object", animation: "boolean", boundary: "(string|element)", container: "(string|element|boolean)", customClass: "(string|function)", delay: "(number|object)", fallbackPlacements: "array", html: "boolean", offset: "(array|string|function)", placement: "(string|function)", popperConfig: "(null|object|function)", sanitize: "boolean", sanitizeFn: "(null|function)", selector: "(string|boolean)", template: "string", title: "(string|element|function)", trigger: "string" };
    class Nn extends Ce {
      constructor(i, s) {
        if (Ha === void 0)
          throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
        super(i, s), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
      }
      static get Default() {
        return om;
      }
      static get DefaultType() {
        return lm;
      }
      static get NAME() {
        return "tooltip";
      }
      enable() {
        this._isEnabled = !0;
      }
      disable() {
        this._isEnabled = !1;
      }
      toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      }
      toggle() {
        this._isEnabled && (this._activeTrigger.click = !this._activeTrigger.click, this._isShown() ? this._leave() : this._enter());
      }
      dispose() {
        clearTimeout(this._timeout), _.off(this._element.closest(hc), mc, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
      }
      show() {
        if (this._element.style.display === "none")
          throw new Error("Please use show on visible elements");
        if (!this._isWithContent() || !this._isEnabled)
          return;
        const i = _.trigger(this._element, this.constructor.eventName("show")), s = (E(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
        if (i.defaultPrevented || !s)
          return;
        this._disposePopper();
        const c = this._getTipElement();
        this._element.setAttribute("aria-describedby", c.getAttribute("id"));
        const { container: m } = this._config;
        if (this._element.ownerDocument.documentElement.contains(this.tip) || (m.append(c), _.trigger(this._element, this.constructor.eventName("inserted"))), this._popper = this._createPopper(c), c.classList.add(Gi), "ontouchstart" in document.documentElement)
          for (const v of [].concat(...document.body.children))
            _.on(v, "mouseover", w);
        this._queueCallback(() => {
          _.trigger(this._element, this.constructor.eventName("shown")), this._isHovered === !1 && this._leave(), this._isHovered = !1;
        }, this.tip, this._isAnimated());
      }
      hide() {
        if (this._isShown() && !_.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
          if (this._getTipElement().classList.remove(Gi), "ontouchstart" in document.documentElement)
            for (const i of [].concat(...document.body.children))
              _.off(i, "mouseover", w);
          this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, this._isHovered = null, this._queueCallback(() => {
            this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), _.trigger(this._element, this.constructor.eventName("hidden")));
          }, this.tip, this._isAnimated());
        }
      }
      update() {
        this._popper && this._popper.update();
      }
      _isWithContent() {
        return !!this._getTitle();
      }
      _getTipElement() {
        return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip;
      }
      _createTipElement(i) {
        const s = this._getTemplateFactory(i).toHtml();
        if (!s)
          return null;
        s.classList.remove(Wl, Gi), s.classList.add(`bs-${this.constructor.NAME}-auto`);
        const c = ((m) => {
          do
            m += Math.floor(1e6 * Math.random());
          while (document.getElementById(m));
          return m;
        })(this.constructor.NAME).toString();
        return s.setAttribute("id", c), this._isAnimated() && s.classList.add(Wl), s;
      }
      setContent(i) {
        this._newContent = i, this._isShown() && (this._disposePopper(), this.show());
      }
      _getTemplateFactory(i) {
        return this._templateFactory ? this._templateFactory.changeContent(i) : this._templateFactory = new nm({ ...this._config, content: i, extraClass: this._resolvePossibleFunction(this._config.customClass) }), this._templateFactory;
      }
      _getContentForTemplate() {
        return { ".tooltip-inner": this._getTitle() };
      }
      _getTitle() {
        return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
      }
      _initializeOnDelegatedTarget(i) {
        return this.constructor.getOrCreateInstance(i.delegateTarget, this._getDelegateConfig());
      }
      _isAnimated() {
        return this._config.animation || this.tip && this.tip.classList.contains(Wl);
      }
      _isShown() {
        return this.tip && this.tip.classList.contains(Gi);
      }
      _createPopper(i) {
        const s = p(this._config.placement, [this, i, this._element]), c = im[s.toUpperCase()];
        return Ul(this._element, i, this._getPopperConfig(c));
      }
      _getOffset() {
        const { offset: i } = this._config;
        return typeof i == "string" ? i.split(",").map((s) => Number.parseInt(s, 10)) : typeof i == "function" ? (s) => i(s, this._element) : i;
      }
      _resolvePossibleFunction(i) {
        return p(i, [this._element]);
      }
      _getPopperConfig(i) {
        const s = { placement: i, modifiers: [{ name: "flip", options: { fallbackPlacements: this._config.fallbackPlacements } }, { name: "offset", options: { offset: this._getOffset() } }, { name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "arrow", options: { element: `.${this.constructor.NAME}-arrow` } }, { name: "preSetPlacement", enabled: !0, phase: "beforeMain", fn: (c) => {
          this._getTipElement().setAttribute("data-popper-placement", c.state.placement);
        } }] };
        return { ...s, ...p(this._config.popperConfig, [s]) };
      }
      _setListeners() {
        const i = this._config.trigger.split(" ");
        for (const s of i)
          if (s === "click")
            _.on(this._element, this.constructor.eventName("click"), this._config.selector, (c) => {
              this._initializeOnDelegatedTarget(c).toggle();
            });
          else if (s !== "manual") {
            const c = s === Zi ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"), m = s === Zi ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
            _.on(this._element, c, this._config.selector, (v) => {
              const k = this._initializeOnDelegatedTarget(v);
              k._activeTrigger[v.type === "focusin" ? gc : Zi] = !0, k._enter();
            }), _.on(this._element, m, this._config.selector, (v) => {
              const k = this._initializeOnDelegatedTarget(v);
              k._activeTrigger[v.type === "focusout" ? gc : Zi] = k._element.contains(v.relatedTarget), k._leave();
            });
          }
        this._hideModalHandler = () => {
          this._element && this.hide();
        }, _.on(this._element.closest(hc), mc, this._hideModalHandler);
      }
      _fixTitle() {
        const i = this._element.getAttribute("title");
        i && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", i), this._element.setAttribute("data-bs-original-title", i), this._element.removeAttribute("title"));
      }
      _enter() {
        this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0, this._setTimeout(() => {
          this._isHovered && this.show();
        }, this._config.delay.show));
      }
      _leave() {
        this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout(() => {
          this._isHovered || this.hide();
        }, this._config.delay.hide));
      }
      _setTimeout(i, s) {
        clearTimeout(this._timeout), this._timeout = setTimeout(i, s);
      }
      _isWithActiveTrigger() {
        return Object.values(this._activeTrigger).includes(!0);
      }
      _getConfig(i) {
        const s = Le.getDataAttributes(this._element);
        for (const c of Object.keys(s))
          rm.has(c) && delete s[c];
        return i = { ...s, ...typeof i == "object" && i ? i : {} }, i = this._mergeConfigObj(i), i = this._configAfterMerge(i), this._typeCheckConfig(i), i;
      }
      _configAfterMerge(i) {
        return i.container = i.container === !1 ? document.body : d(i.container), typeof i.delay == "number" && (i.delay = { show: i.delay, hide: i.delay }), typeof i.title == "number" && (i.title = i.title.toString()), typeof i.content == "number" && (i.content = i.content.toString()), i;
      }
      _getDelegateConfig() {
        const i = {};
        for (const [s, c] of Object.entries(this._config))
          this.constructor.Default[s] !== c && (i[s] = c);
        return i.selector = !1, i.trigger = "manual", i;
      }
      _disposePopper() {
        this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null);
      }
      static jQueryInterface(i) {
        return this.each(function() {
          const s = Nn.getOrCreateInstance(this, i);
          if (typeof i == "string") {
            if (s[i] === void 0)
              throw new TypeError(`No method named "${i}"`);
            s[i]();
          }
        });
      }
    }
    g(Nn);
    const sm = { ...Nn.Default, content: "", offset: [0, 8], placement: "right", template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>', trigger: "click" }, um = { ...Nn.DefaultType, content: "(null|string|element|function)" };
    class qi extends Nn {
      static get Default() {
        return sm;
      }
      static get DefaultType() {
        return um;
      }
      static get NAME() {
        return "popover";
      }
      _isWithContent() {
        return this._getTitle() || this._getContent();
      }
      _getContentForTemplate() {
        return { ".popover-header": this._getTitle(), ".popover-body": this._getContent() };
      }
      _getContent() {
        return this._resolvePossibleFunction(this._config.content);
      }
      static jQueryInterface(i) {
        return this.each(function() {
          const s = qi.getOrCreateInstance(this, i);
          if (typeof i == "string") {
            if (s[i] === void 0)
              throw new TypeError(`No method named "${i}"`);
            s[i]();
          }
        });
      }
    }
    g(qi);
    const vc = "click.bs.scrollspy", Hr = "active", yc = "[href]", am = { offset: null, rootMargin: "0px 0px -25%", smoothScroll: !1, target: null, threshold: [0.1, 0.5, 1] }, cm = { offset: "(number|null)", rootMargin: "string", smoothScroll: "boolean", target: "element", threshold: "array" };
    class Br extends Ce {
      constructor(i, s) {
        super(i, s), this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map(), this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = { visibleEntryTop: 0, parentScrollTop: 0 }, this.refresh();
      }
      static get Default() {
        return am;
      }
      static get DefaultType() {
        return cm;
      }
      static get NAME() {
        return "scrollspy";
      }
      refresh() {
        this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
        for (const i of this._observableSections.values())
          this._observer.observe(i);
      }
      dispose() {
        this._observer.disconnect(), super.dispose();
      }
      _configAfterMerge(i) {
        return i.target = d(i.target) || document.body, i.rootMargin = i.offset ? `${i.offset}px 0px -30%` : i.rootMargin, typeof i.threshold == "string" && (i.threshold = i.threshold.split(",").map((s) => Number.parseFloat(s))), i;
      }
      _maybeEnableSmoothScroll() {
        this._config.smoothScroll && (_.off(this._config.target, vc), _.on(this._config.target, vc, yc, (i) => {
          const s = this._observableSections.get(i.target.hash);
          if (s) {
            i.preventDefault();
            const c = this._rootElement || window, m = s.offsetTop - this._element.offsetTop;
            if (c.scrollTo)
              return void c.scrollTo({ top: m, behavior: "smooth" });
            c.scrollTop = m;
          }
        }));
      }
      _getNewObserver() {
        const i = { root: this._rootElement, threshold: this._config.threshold, rootMargin: this._config.rootMargin };
        return new IntersectionObserver((s) => this._observerCallback(s), i);
      }
      _observerCallback(i) {
        const s = (k) => this._targetLinks.get(`#${k.target.id}`), c = (k) => {
          this._previousScrollData.visibleEntryTop = k.target.offsetTop, this._process(s(k));
        }, m = (this._rootElement || document.documentElement).scrollTop, v = m >= this._previousScrollData.parentScrollTop;
        this._previousScrollData.parentScrollTop = m;
        for (const k of i) {
          if (!k.isIntersecting) {
            this._activeTarget = null, this._clearActiveClass(s(k));
            continue;
          }
          const C = k.target.offsetTop >= this._previousScrollData.visibleEntryTop;
          if (v && C) {
            if (c(k), !m)
              return;
          } else
            v || C || c(k);
        }
      }
      _initializeTargetsAndObservables() {
        this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map();
        const i = $.find(yc, this._config.target);
        for (const s of i) {
          if (!s.hash || S(s))
            continue;
          const c = $.findOne(s.hash, this._element);
          h(c) && (this._targetLinks.set(s.hash, s), this._observableSections.set(s.hash, c));
        }
      }
      _process(i) {
        this._activeTarget !== i && (this._clearActiveClass(this._config.target), this._activeTarget = i, i.classList.add(Hr), this._activateParents(i), _.trigger(this._element, "activate.bs.scrollspy", { relatedTarget: i }));
      }
      _activateParents(i) {
        if (i.classList.contains("dropdown-item"))
          $.findOne(".dropdown-toggle", i.closest(".dropdown")).classList.add(Hr);
        else
          for (const s of $.parents(i, ".nav, .list-group"))
            for (const c of $.prev(s, ".nav-link, .nav-item > .nav-link, .list-group-item"))
              c.classList.add(Hr);
      }
      _clearActiveClass(i) {
        i.classList.remove(Hr);
        const s = $.find("[href].active", i);
        for (const c of s)
          c.classList.remove(Hr);
      }
      static jQueryInterface(i) {
        return this.each(function() {
          const s = Br.getOrCreateInstance(this, i);
          if (typeof i == "string") {
            if (s[i] === void 0 || i.startsWith("_") || i === "constructor")
              throw new TypeError(`No method named "${i}"`);
            s[i]();
          }
        });
      }
    }
    _.on(window, "load.bs.scrollspy.data-api", () => {
      for (const a of $.find('[data-bs-spy="scroll"]'))
        Br.getOrCreateInstance(a);
    }), g(Br);
    const fm = "ArrowLeft", _c = "ArrowRight", dm = "ArrowUp", wc = "ArrowDown", Ji = "active", kc = "fade", Vl = "show", Sc = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', Ql = `.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${Sc}`;
    class Pn extends Ce {
      constructor(i) {
        super(i), this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), _.on(this._element, "keydown.bs.tab", (s) => this._keydown(s)));
      }
      static get NAME() {
        return "tab";
      }
      show() {
        const i = this._element;
        if (this._elemIsActive(i))
          return;
        const s = this._getActiveElem(), c = s ? _.trigger(s, "hide.bs.tab", { relatedTarget: i }) : null;
        _.trigger(i, "show.bs.tab", { relatedTarget: s }).defaultPrevented || c && c.defaultPrevented || (this._deactivate(s, i), this._activate(i, s));
      }
      _activate(i, s) {
        i && (i.classList.add(Ji), this._activate($.getElementFromSelector(i)), this._queueCallback(() => {
          i.getAttribute("role") === "tab" ? (i.removeAttribute("tabindex"), i.setAttribute("aria-selected", !0), this._toggleDropDown(i, !0), _.trigger(i, "shown.bs.tab", { relatedTarget: s })) : i.classList.add(Vl);
        }, i, i.classList.contains(kc)));
      }
      _deactivate(i, s) {
        i && (i.classList.remove(Ji), i.blur(), this._deactivate($.getElementFromSelector(i)), this._queueCallback(() => {
          i.getAttribute("role") === "tab" ? (i.setAttribute("aria-selected", !1), i.setAttribute("tabindex", "-1"), this._toggleDropDown(i, !1), _.trigger(i, "hidden.bs.tab", { relatedTarget: s })) : i.classList.remove(Vl);
        }, i, i.classList.contains(kc)));
      }
      _keydown(i) {
        if (![fm, _c, dm, wc].includes(i.key))
          return;
        i.stopPropagation(), i.preventDefault();
        const s = [_c, wc].includes(i.key), c = x(this._getChildren().filter((m) => !S(m)), i.target, s, !0);
        c && (c.focus({ preventScroll: !0 }), Pn.getOrCreateInstance(c).show());
      }
      _getChildren() {
        return $.find(Ql, this._parent);
      }
      _getActiveElem() {
        return this._getChildren().find((i) => this._elemIsActive(i)) || null;
      }
      _setInitialAttributes(i, s) {
        this._setAttributeIfNotExists(i, "role", "tablist");
        for (const c of s)
          this._setInitialAttributesOnChild(c);
      }
      _setInitialAttributesOnChild(i) {
        i = this._getInnerElement(i);
        const s = this._elemIsActive(i), c = this._getOuterElement(i);
        i.setAttribute("aria-selected", s), c !== i && this._setAttributeIfNotExists(c, "role", "presentation"), s || i.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(i, "role", "tab"), this._setInitialAttributesOnTargetPanel(i);
      }
      _setInitialAttributesOnTargetPanel(i) {
        const s = $.getElementFromSelector(i);
        s && (this._setAttributeIfNotExists(s, "role", "tabpanel"), i.id && this._setAttributeIfNotExists(s, "aria-labelledby", `${i.id}`));
      }
      _toggleDropDown(i, s) {
        const c = this._getOuterElement(i);
        if (!c.classList.contains("dropdown"))
          return;
        const m = (v, k) => {
          const C = $.findOne(v, c);
          C && C.classList.toggle(k, s);
        };
        m(".dropdown-toggle", Ji), m(".dropdown-menu", Vl), c.setAttribute("aria-expanded", s);
      }
      _setAttributeIfNotExists(i, s, c) {
        i.hasAttribute(s) || i.setAttribute(s, c);
      }
      _elemIsActive(i) {
        return i.classList.contains(Ji);
      }
      _getInnerElement(i) {
        return i.matches(Ql) ? i : $.findOne(Ql, i);
      }
      _getOuterElement(i) {
        return i.closest(".nav-item, .list-group-item") || i;
      }
      static jQueryInterface(i) {
        return this.each(function() {
          const s = Pn.getOrCreateInstance(this);
          if (typeof i == "string") {
            if (s[i] === void 0 || i.startsWith("_") || i === "constructor")
              throw new TypeError(`No method named "${i}"`);
            s[i]();
          }
        });
      }
    }
    _.on(document, "click.bs.tab", Sc, function(a) {
      ["A", "AREA"].includes(this.tagName) && a.preventDefault(), S(this) || Pn.getOrCreateInstance(this).show();
    }), _.on(window, "load.bs.tab", () => {
      for (const a of $.find('.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]'))
        Pn.getOrCreateInstance(a);
    }), g(Pn);
    const Ec = "hide", eo = "show", to = "showing", pm = { animation: "boolean", autohide: "boolean", delay: "number" }, hm = { animation: !0, autohide: !0, delay: 5e3 };
    class Wr extends Ce {
      constructor(i, s) {
        super(i, s), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners();
      }
      static get Default() {
        return hm;
      }
      static get DefaultType() {
        return pm;
      }
      static get NAME() {
        return "toast";
      }
      show() {
        _.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(Ec), N(this._element), this._element.classList.add(eo, to), this._queueCallback(() => {
          this._element.classList.remove(to), _.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide();
        }, this._element, this._config.animation));
      }
      hide() {
        this.isShown() && (_.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.add(to), this._queueCallback(() => {
          this._element.classList.add(Ec), this._element.classList.remove(to, eo), _.trigger(this._element, "hidden.bs.toast");
        }, this._element, this._config.animation)));
      }
      dispose() {
        this._clearTimeout(), this.isShown() && this._element.classList.remove(eo), super.dispose();
      }
      isShown() {
        return this._element.classList.contains(eo);
      }
      _maybeScheduleHide() {
        this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
          this.hide();
        }, this._config.delay)));
      }
      _onInteraction(i, s) {
        switch (i.type) {
          case "mouseover":
          case "mouseout":
            this._hasMouseInteraction = s;
            break;
          case "focusin":
          case "focusout":
            this._hasKeyboardInteraction = s;
        }
        if (s)
          return void this._clearTimeout();
        const c = i.relatedTarget;
        this._element === c || this._element.contains(c) || this._maybeScheduleHide();
      }
      _setListeners() {
        _.on(this._element, "mouseover.bs.toast", (i) => this._onInteraction(i, !0)), _.on(this._element, "mouseout.bs.toast", (i) => this._onInteraction(i, !1)), _.on(this._element, "focusin.bs.toast", (i) => this._onInteraction(i, !0)), _.on(this._element, "focusout.bs.toast", (i) => this._onInteraction(i, !1));
      }
      _clearTimeout() {
        clearTimeout(this._timeout), this._timeout = null;
      }
      static jQueryInterface(i) {
        return this.each(function() {
          const s = Wr.getOrCreateInstance(this, i);
          if (typeof i == "string") {
            if (s[i] === void 0)
              throw new TypeError(`No method named "${i}"`);
            s[i](this);
          }
        });
      }
    }
    return Mi(Wr), g(Wr), { Alert: Ir, Button: Mr, Carousel: Yn, Collapse: Xn, Dropdown: yt, Modal: On, Offcanvas: bt, Popover: qi, ScrollSpy: Br, Tab: Pn, Toast: Wr, Tooltip: Nn };
  });
})(oy);
class ph extends od.Component {
  render() {
    return /* @__PURE__ */ pe.jsxs("div", { className: "wrapper", children: [
      /* @__PURE__ */ pe.jsx("h2", { children: "Road Blocks" }),
      /* @__PURE__ */ pe.jsx(hh, { proxy: this.props.proxy })
    ] });
  }
}
Mc(ph, "propTypes", {
  events: vr.string,
  proxy: vr.string
});
function hh(e) {
  const [t, n] = di.useState([]);
  di.useEffect(() => {
    r().then((u) => n(u));
  }, []);
  async function r() {
  }
  function o(u) {
  }
  const l = ["John Doe", "Jane Smith", "Alice Johnson", "Bob Brown"];
  return /* @__PURE__ */ pe.jsx("div", { className: "container", children: /* @__PURE__ */ pe.jsx("div", { className: "row", children: /* @__PURE__ */ pe.jsxs("div", { className: "col", children: [
    /* @__PURE__ */ pe.jsx("div", { className: "table-responsive", children: /* @__PURE__ */ pe.jsxs("table", { className: "table table-bordered table-hover text-white", children: [
      /* @__PURE__ */ pe.jsx("thead", { children: /* @__PURE__ */ pe.jsxs("tr", { children: [
        /* @__PURE__ */ pe.jsx("th", { children: "Road" }),
        /* @__PURE__ */ pe.jsx("th", { children: "Status" })
      ] }) }),
      /* @__PURE__ */ pe.jsx("tbody", { children: t.map((u, f) => /* @__PURE__ */ pe.jsxs(
        "tr",
        {
          className: u.inUse ? "table-danger" : "table-success",
          children: [
            /* @__PURE__ */ pe.jsx("td", { children: u.road }),
            /* @__PURE__ */ pe.jsx("td", { children: /* @__PURE__ */ pe.jsx(
              "input",
              {
                className: "road-block-checkbox",
                type: "checkbox",
                checked: u.inUse,
                onChange: () => void 0,
                id: `roadBlock-${f}`
              }
            ) })
          ]
        },
        f
      )) })
    ] }) }),
    /* @__PURE__ */ pe.jsx("div", { className: "mt-3", children: t.map(
      (u, f) => u.inUse && /* @__PURE__ */ pe.jsxs("div", { className: "mb-2", children: [
        /* @__PURE__ */ pe.jsx(
          "button",
          {
            className: "btn btn-primary",
            type: "button",
            "data-toggle": "collapse",
            "data-target": `#userDropdown-${f}`,
            "aria-expanded": "false",
            "aria-controls": `userDropdown-${f}`,
            children: `Select user for ${u.road}`
          }
        ),
        /* @__PURE__ */ pe.jsx(
          "div",
          {
            className: "collapse multi-collapse mt-2",
            id: `userDropdown-${f}`,
            children: /* @__PURE__ */ pe.jsx("div", { className: "card card-body", children: /* @__PURE__ */ pe.jsx("ul", { className: "list-group", children: l.map((d, h) => /* @__PURE__ */ pe.jsx("li", { className: "list-group-item", children: d }, h)) }) })
          }
        )
      ] }, f)
    ) })
  ] }) }) });
}
hh.propTypes = {
  roadBlocks: vr.arrayOf(
    vr.shape({
      road: vr.string.isRequired,
      inUse: vr.bool.isRequired
    })
  ).isRequired
};
const sy = iy(ph, od, Ss, {
  dashStyleAttributes: !0
});
export {
  sy as default
};
