function N1(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const o in r)
        if (o !== 'default' && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
  );
}
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === 'childList')
        for (const s of i.addedNodes)
          s.tagName === 'LINK' && s.rel === 'modulepreload' && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : o.crossOrigin === 'anonymous'
          ? (i.credentials = 'omit')
          : (i.credentials = 'same-origin'),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function _1(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var zp = { exports: {} },
  Is = {},
  Bp = { exports: {} },
  W = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var oi = Symbol.for('react.element'),
  T1 = Symbol.for('react.portal'),
  b1 = Symbol.for('react.fragment'),
  j1 = Symbol.for('react.strict_mode'),
  D1 = Symbol.for('react.profiler'),
  A1 = Symbol.for('react.provider'),
  M1 = Symbol.for('react.context'),
  $1 = Symbol.for('react.forward_ref'),
  F1 = Symbol.for('react.suspense'),
  I1 = Symbol.for('react.memo'),
  U1 = Symbol.for('react.lazy'),
  Sf = Symbol.iterator;
function z1(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Sf && e[Sf]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var Vp = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Hp = Object.assign,
  Wp = {};
function Hr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Wp),
    (this.updater = n || Vp);
}
Hr.prototype.isReactComponent = {};
Hr.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
Hr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Kp() {}
Kp.prototype = Hr.prototype;
function zu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Wp),
    (this.updater = n || Vp);
}
var Bu = (zu.prototype = new Kp());
Bu.constructor = zu;
Hp(Bu, Hr.prototype);
Bu.isPureReactComponent = !0;
var xf = Array.isArray,
  Qp = Object.prototype.hasOwnProperty,
  Vu = { current: null },
  Jp = { key: !0, ref: !0, __self: !0, __source: !0 };
function qp(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = '' + t.key),
    t))
      Qp.call(t, r) && !Jp.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return {
    $$typeof: oi,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: Vu.current,
  };
}
function B1(e, t) {
  return {
    $$typeof: oi,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Hu(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === oi;
}
function V1(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Cf = /\/+/g;
function Ia(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? V1('' + e.key)
    : t.toString(36);
}
function $i(e, t, n, r, o) {
  var i = typeof e;
  (i === 'undefined' || i === 'boolean') && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case 'string':
      case 'number':
        s = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case oi:
          case T1:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === '' ? '.' + Ia(s, 0) : r),
      xf(o)
        ? ((n = ''),
          e != null && (n = e.replace(Cf, '$&/') + '/'),
          $i(o, t, n, '', function (u) {
            return u;
          }))
        : o != null &&
          (Hu(o) &&
            (o = B1(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ''
                  : ('' + o.key).replace(Cf, '$&/') + '/') +
                e
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === '' ? '.' : r + ':'), xf(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var l = r + Ia(i, a);
      s += $i(i, t, n, l, o);
    }
  else if (((l = z1(e)), typeof l == 'function'))
    for (e = l.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (l = r + Ia(i, a++)), (s += $i(i, t, n, l, o));
  else if (i === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return s;
}
function vi(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    $i(e, r, '', '', function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function H1(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var We = { current: null },
  Fi = { transition: null },
  W1 = {
    ReactCurrentDispatcher: We,
    ReactCurrentBatchConfig: Fi,
    ReactCurrentOwner: Vu,
  };
W.Children = {
  map: vi,
  forEach: function (e, t, n) {
    vi(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      vi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      vi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Hu(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
W.Component = Hr;
W.Fragment = b1;
W.Profiler = D1;
W.PureComponent = zu;
W.StrictMode = j1;
W.Suspense = F1;
W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W1;
W.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = Hp({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = Vu.current)),
      t.key !== void 0 && (o = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      Qp.call(t, l) &&
        !Jp.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: oi, type: e.type, key: o, ref: i, props: r, _owner: s };
};
W.createContext = function (e) {
  return (
    (e = {
      $$typeof: M1,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: A1, _context: e }),
    (e.Consumer = e)
  );
};
W.createElement = qp;
W.createFactory = function (e) {
  var t = qp.bind(null, e);
  return (t.type = e), t;
};
W.createRef = function () {
  return { current: null };
};
W.forwardRef = function (e) {
  return { $$typeof: $1, render: e };
};
W.isValidElement = Hu;
W.lazy = function (e) {
  return { $$typeof: U1, _payload: { _status: -1, _result: e }, _init: H1 };
};
W.memo = function (e, t) {
  return { $$typeof: I1, type: e, compare: t === void 0 ? null : t };
};
W.startTransition = function (e) {
  var t = Fi.transition;
  Fi.transition = {};
  try {
    e();
  } finally {
    Fi.transition = t;
  }
};
W.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
W.useCallback = function (e, t) {
  return We.current.useCallback(e, t);
};
W.useContext = function (e) {
  return We.current.useContext(e);
};
W.useDebugValue = function () {};
W.useDeferredValue = function (e) {
  return We.current.useDeferredValue(e);
};
W.useEffect = function (e, t) {
  return We.current.useEffect(e, t);
};
W.useId = function () {
  return We.current.useId();
};
W.useImperativeHandle = function (e, t, n) {
  return We.current.useImperativeHandle(e, t, n);
};
W.useInsertionEffect = function (e, t) {
  return We.current.useInsertionEffect(e, t);
};
W.useLayoutEffect = function (e, t) {
  return We.current.useLayoutEffect(e, t);
};
W.useMemo = function (e, t) {
  return We.current.useMemo(e, t);
};
W.useReducer = function (e, t, n) {
  return We.current.useReducer(e, t, n);
};
W.useRef = function (e) {
  return We.current.useRef(e);
};
W.useState = function (e) {
  return We.current.useState(e);
};
W.useSyncExternalStore = function (e, t, n) {
  return We.current.useSyncExternalStore(e, t, n);
};
W.useTransition = function () {
  return We.current.useTransition();
};
W.version = '18.2.0';
Bp.exports = W;
var k = Bp.exports;
const Gp = _1(k),
  K1 = N1({ __proto__: null, default: Gp }, [k]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Q1 = k,
  J1 = Symbol.for('react.element'),
  q1 = Symbol.for('react.fragment'),
  G1 = Object.prototype.hasOwnProperty,
  Y1 = Q1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  X1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Yp(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  n !== void 0 && (i = '' + n),
    t.key !== void 0 && (i = '' + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) G1.call(t, r) && !X1.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: J1,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: Y1.current,
  };
}
Is.Fragment = q1;
Is.jsx = Yp;
Is.jsxs = Yp;
zp.exports = Is;
var R = zp.exports,
  _l = {},
  Xp = { exports: {} },
  it = {},
  Zp = { exports: {} },
  eh = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(b, $) {
    var B = b.length;
    b.push($);
    e: for (; 0 < B; ) {
      var ne = (B - 1) >>> 1,
        ie = b[ne];
      if (0 < o(ie, $)) (b[ne] = $), (b[B] = ie), (B = ne);
      else break e;
    }
  }
  function n(b) {
    return b.length === 0 ? null : b[0];
  }
  function r(b) {
    if (b.length === 0) return null;
    var $ = b[0],
      B = b.pop();
    if (B !== $) {
      b[0] = B;
      e: for (var ne = 0, ie = b.length, lt = ie >>> 1; ne < lt; ) {
        var Be = 2 * (ne + 1) - 1,
          Mn = b[Be],
          It = Be + 1,
          sr = b[It];
        if (0 > o(Mn, B))
          It < ie && 0 > o(sr, Mn)
            ? ((b[ne] = sr), (b[It] = B), (ne = It))
            : ((b[ne] = Mn), (b[Be] = B), (ne = Be));
        else if (It < ie && 0 > o(sr, B)) (b[ne] = sr), (b[It] = B), (ne = It);
        else break e;
      }
    }
    return $;
  }
  function o(b, $) {
    var B = b.sortIndex - $.sortIndex;
    return B !== 0 ? B : b.id - $.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    w = !1,
    p = !1,
    y = !1,
    S = typeof setTimeout == 'function' ? setTimeout : null,
    g = typeof clearTimeout == 'function' ? clearTimeout : null,
    h = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(b) {
    for (var $ = n(u); $ !== null; ) {
      if ($.callback === null) r(u);
      else if ($.startTime <= b)
        r(u), ($.sortIndex = $.expirationTime), t(l, $);
      else break;
      $ = n(u);
    }
  }
  function m(b) {
    if (((y = !1), v(b), !p))
      if (n(l) !== null) (p = !0), wt(C);
      else {
        var $ = n(u);
        $ !== null && fe(m, $.startTime - b);
      }
  }
  function C(b, $) {
    (p = !1), y && ((y = !1), g(T), (T = -1)), (w = !0);
    var B = d;
    try {
      for (
        v($), f = n(l);
        f !== null && (!(f.expirationTime > $) || (b && !q()));

      ) {
        var ne = f.callback;
        if (typeof ne == 'function') {
          (f.callback = null), (d = f.priorityLevel);
          var ie = ne(f.expirationTime <= $);
          ($ = e.unstable_now()),
            typeof ie == 'function' ? (f.callback = ie) : f === n(l) && r(l),
            v($);
        } else r(l);
        f = n(l);
      }
      if (f !== null) var lt = !0;
      else {
        var Be = n(u);
        Be !== null && fe(m, Be.startTime - $), (lt = !1);
      }
      return lt;
    } finally {
      (f = null), (d = B), (w = !1);
    }
  }
  var O = !1,
    P = null,
    T = -1,
    M = 5,
    D = -1;
  function q() {
    return !(e.unstable_now() - D < M);
  }
  function Te() {
    if (P !== null) {
      var b = e.unstable_now();
      D = b;
      var $ = !0;
      try {
        $ = P(!0, b);
      } finally {
        $ ? Ae() : ((O = !1), (P = null));
      }
    } else O = !1;
  }
  var Ae;
  if (typeof h == 'function')
    Ae = function () {
      h(Te);
    };
  else if (typeof MessageChannel < 'u') {
    var Xe = new MessageChannel(),
      te = Xe.port2;
    (Xe.port1.onmessage = Te),
      (Ae = function () {
        te.postMessage(null);
      });
  } else
    Ae = function () {
      S(Te, 0);
    };
  function wt(b) {
    (P = b), O || ((O = !0), Ae());
  }
  function fe(b, $) {
    T = S(function () {
      b(e.unstable_now());
    }, $);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (b) {
      b.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      p || w || ((p = !0), wt(C));
    }),
    (e.unstable_forceFrameRate = function (b) {
      0 > b || 125 < b
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (M = 0 < b ? Math.floor(1e3 / b) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (b) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var $ = 3;
          break;
        default:
          $ = d;
      }
      var B = d;
      d = $;
      try {
        return b();
      } finally {
        d = B;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (b, $) {
      switch (b) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          b = 3;
      }
      var B = d;
      d = b;
      try {
        return $();
      } finally {
        d = B;
      }
    }),
    (e.unstable_scheduleCallback = function (b, $, B) {
      var ne = e.unstable_now();
      switch (
        (typeof B == 'object' && B !== null
          ? ((B = B.delay), (B = typeof B == 'number' && 0 < B ? ne + B : ne))
          : (B = ne),
        b)
      ) {
        case 1:
          var ie = -1;
          break;
        case 2:
          ie = 250;
          break;
        case 5:
          ie = 1073741823;
          break;
        case 4:
          ie = 1e4;
          break;
        default:
          ie = 5e3;
      }
      return (
        (ie = B + ie),
        (b = {
          id: c++,
          callback: $,
          priorityLevel: b,
          startTime: B,
          expirationTime: ie,
          sortIndex: -1,
        }),
        B > ne
          ? ((b.sortIndex = B),
            t(u, b),
            n(l) === null &&
              b === n(u) &&
              (y ? (g(T), (T = -1)) : (y = !0), fe(m, B - ne)))
          : ((b.sortIndex = ie), t(l, b), p || w || ((p = !0), wt(C))),
        b
      );
    }),
    (e.unstable_shouldYield = q),
    (e.unstable_wrapCallback = function (b) {
      var $ = d;
      return function () {
        var B = d;
        d = $;
        try {
          return b.apply(this, arguments);
        } finally {
          d = B;
        }
      };
    });
})(eh);
Zp.exports = eh;
var Z1 = Zp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var th = k,
  rt = Z1;
function _(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var nh = new Set(),
  Ao = {};
function rr(e, t) {
  jr(e, t), jr(e + 'Capture', t);
}
function jr(e, t) {
  for (Ao[e] = t, e = 0; e < t.length; e++) nh.add(t[e]);
}
var Jt = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Tl = Object.prototype.hasOwnProperty,
  e0 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ef = {},
  kf = {};
function t0(e) {
  return Tl.call(kf, e)
    ? !0
    : Tl.call(Ef, e)
      ? !1
      : e0.test(e)
        ? (kf[e] = !0)
        : ((Ef[e] = !0), !1);
}
function n0(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function r0(e, t, n, r) {
  if (t === null || typeof t > 'u' || n0(e, t, n, r)) return !0;
  if (r) return !1;
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
function Ke(e, t, n, r, o, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}
var De = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    De[e] = new Ke(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  De[t] = new Ke(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  De[e] = new Ke(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  De[e] = new Ke(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    De[e] = new Ke(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  De[e] = new Ke(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  De[e] = new Ke(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  De[e] = new Ke(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  De[e] = new Ke(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Wu = /[\-:]([a-z])/g;
function Ku(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Wu, Ku);
    De[t] = new Ke(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Wu, Ku);
    De[t] = new Ke(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Wu, Ku);
  De[t] = new Ke(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  De[e] = new Ke(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
De.xlinkHref = new Ke(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  De[e] = new Ke(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Qu(e, t, n, r) {
  var o = De.hasOwnProperty(t) ? De[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (r0(t, n, o, r) && (n = null),
    r || o === null
      ? t0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : o.mustUseProperty
        ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : '') : n)
        : ((t = o.attributeName),
          (r = o.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((o = o.type),
              (n = o === 3 || (o === 4 && n === !0) ? '' : '' + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Zt = th.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  wi = Symbol.for('react.element'),
  cr = Symbol.for('react.portal'),
  fr = Symbol.for('react.fragment'),
  Ju = Symbol.for('react.strict_mode'),
  bl = Symbol.for('react.profiler'),
  rh = Symbol.for('react.provider'),
  oh = Symbol.for('react.context'),
  qu = Symbol.for('react.forward_ref'),
  jl = Symbol.for('react.suspense'),
  Dl = Symbol.for('react.suspense_list'),
  Gu = Symbol.for('react.memo'),
  ln = Symbol.for('react.lazy'),
  ih = Symbol.for('react.offscreen'),
  Pf = Symbol.iterator;
function to(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Pf && e[Pf]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var me = Object.assign,
  Ua;
function wo(e) {
  if (Ua === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ua = (t && t[1]) || '';
    }
  return (
    `
` +
    Ua +
    e
  );
}
var za = !1;
function Ba(e, t) {
  if (!e || za) return '';
  za = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == 'string') {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          a = i.length - 1;
        1 <= s && 0 <= a && o[s] !== i[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (o[s] !== i[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || o[s] !== i[a])) {
                var l =
                  `
` + o[s].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    l.includes('<anonymous>') &&
                    (l = l.replace('<anonymous>', e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (za = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? wo(e) : '';
}
function o0(e) {
  switch (e.tag) {
    case 5:
      return wo(e.type);
    case 16:
      return wo('Lazy');
    case 13:
      return wo('Suspense');
    case 19:
      return wo('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = Ba(e.type, !1)), e;
    case 11:
      return (e = Ba(e.type.render, !1)), e;
    case 1:
      return (e = Ba(e.type, !0)), e;
    default:
      return '';
  }
}
function Al(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case fr:
      return 'Fragment';
    case cr:
      return 'Portal';
    case bl:
      return 'Profiler';
    case Ju:
      return 'StrictMode';
    case jl:
      return 'Suspense';
    case Dl:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case oh:
        return (e.displayName || 'Context') + '.Consumer';
      case rh:
        return (e._context.displayName || 'Context') + '.Provider';
      case qu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case Gu:
        return (
          (t = e.displayName || null), t !== null ? t : Al(e.type) || 'Memo'
        );
      case ln:
        (t = e._payload), (e = e._init);
        try {
          return Al(e(t));
        } catch {}
    }
  return null;
}
function i0(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return Al(t);
    case 8:
      return t === Ju ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function Pn(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function sh(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function s0(e) {
  var t = sh(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          (r = '' + s), i.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = '' + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Si(e) {
  e._valueTracker || (e._valueTracker = s0(e));
}
function ah(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = sh(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ts(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ml(e, t) {
  var n = t.checked;
  return me({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Rf(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Pn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function lh(e, t) {
  (t = t.checked), t != null && Qu(e, 'checked', t, !1);
}
function $l(e, t) {
  lh(e, t);
  var n = Pn(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? Fl(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && Fl(e, t.type, Pn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Lf(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function Fl(e, t, n) {
  (t !== 'number' || ts(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var So = Array.isArray;
function Er(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + Pn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Il(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(_(91));
  return me({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function Of(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(_(92));
      if (So(n)) {
        if (1 < n.length) throw Error(_(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: Pn(n) };
}
function uh(e, t) {
  var n = Pn(t.value),
    r = Pn(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function Nf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function ch(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function Ul(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? ch(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e;
}
var xi,
  fh = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        xi = xi || document.createElement('div'),
          xi.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = xi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Mo(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ko = {
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
    strokeWidth: !0,
  },
  a0 = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(ko).forEach(function (e) {
  a0.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ko[t] = ko[e]);
  });
});
function dh(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (ko.hasOwnProperty(e) && ko[e])
      ? ('' + t).trim()
      : t + 'px';
}
function ph(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        o = dh(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var l0 = me(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function zl(e, t) {
  if (t) {
    if (l0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(_(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(_(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(_(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(_(62));
  }
}
function Bl(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var Vl = null;
function Yu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Hl = null,
  kr = null,
  Pr = null;
function _f(e) {
  if ((e = ai(e))) {
    if (typeof Hl != 'function') throw Error(_(280));
    var t = e.stateNode;
    t && ((t = Hs(t)), Hl(e.stateNode, e.type, t));
  }
}
function hh(e) {
  kr ? (Pr ? Pr.push(e) : (Pr = [e])) : (kr = e);
}
function mh() {
  if (kr) {
    var e = kr,
      t = Pr;
    if (((Pr = kr = null), _f(e), t)) for (e = 0; e < t.length; e++) _f(t[e]);
  }
}
function gh(e, t) {
  return e(t);
}
function yh() {}
var Va = !1;
function vh(e, t, n) {
  if (Va) return e(t, n);
  Va = !0;
  try {
    return gh(e, t, n);
  } finally {
    (Va = !1), (kr !== null || Pr !== null) && (yh(), mh());
  }
}
function $o(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Hs(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(_(231, t, typeof n));
  return n;
}
var Wl = !1;
if (Jt)
  try {
    var no = {};
    Object.defineProperty(no, 'passive', {
      get: function () {
        Wl = !0;
      },
    }),
      window.addEventListener('test', no, no),
      window.removeEventListener('test', no, no);
  } catch {
    Wl = !1;
  }
function u0(e, t, n, r, o, i, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Po = !1,
  ns = null,
  rs = !1,
  Kl = null,
  c0 = {
    onError: function (e) {
      (Po = !0), (ns = e);
    },
  };
function f0(e, t, n, r, o, i, s, a, l) {
  (Po = !1), (ns = null), u0.apply(c0, arguments);
}
function d0(e, t, n, r, o, i, s, a, l) {
  if ((f0.apply(this, arguments), Po)) {
    if (Po) {
      var u = ns;
      (Po = !1), (ns = null);
    } else throw Error(_(198));
    rs || ((rs = !0), (Kl = u));
  }
}
function or(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function wh(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Tf(e) {
  if (or(e) !== e) throw Error(_(188));
}
function p0(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = or(e)), t === null)) throw Error(_(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Tf(o), e;
        if (i === r) return Tf(o), t;
        i = i.sibling;
      }
      throw Error(_(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var s = !1, a = o.child; a; ) {
        if (a === n) {
          (s = !0), (n = o), (r = i);
          break;
        }
        if (a === r) {
          (s = !0), (r = o), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = i.child; a; ) {
          if (a === n) {
            (s = !0), (n = i), (r = o);
            break;
          }
          if (a === r) {
            (s = !0), (r = i), (n = o);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(_(189));
      }
    }
    if (n.alternate !== r) throw Error(_(190));
  }
  if (n.tag !== 3) throw Error(_(188));
  return n.stateNode.current === n ? e : t;
}
function Sh(e) {
  return (e = p0(e)), e !== null ? xh(e) : null;
}
function xh(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = xh(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ch = rt.unstable_scheduleCallback,
  bf = rt.unstable_cancelCallback,
  h0 = rt.unstable_shouldYield,
  m0 = rt.unstable_requestPaint,
  xe = rt.unstable_now,
  g0 = rt.unstable_getCurrentPriorityLevel,
  Xu = rt.unstable_ImmediatePriority,
  Eh = rt.unstable_UserBlockingPriority,
  os = rt.unstable_NormalPriority,
  y0 = rt.unstable_LowPriority,
  kh = rt.unstable_IdlePriority,
  Us = null,
  At = null;
function v0(e) {
  if (At && typeof At.onCommitFiberRoot == 'function')
    try {
      At.onCommitFiberRoot(Us, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Lt = Math.clz32 ? Math.clz32 : x0,
  w0 = Math.log,
  S0 = Math.LN2;
function x0(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((w0(e) / S0) | 0)) | 0;
}
var Ci = 64,
  Ei = 4194304;
function xo(e) {
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
function is(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~o;
    a !== 0 ? (r = xo(a)) : ((i &= s), i !== 0 && (r = xo(i)));
  } else (s = n & ~o), s !== 0 ? (r = xo(s)) : i !== 0 && (r = xo(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Lt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function C0(e, t) {
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
function E0(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var s = 31 - Lt(i),
      a = 1 << s,
      l = o[s];
    l === -1
      ? (!(a & n) || a & r) && (o[s] = C0(a, t))
      : l <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function Ql(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ph() {
  var e = Ci;
  return (Ci <<= 1), !(Ci & 4194240) && (Ci = 64), e;
}
function Ha(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ii(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Lt(t)),
    (e[t] = n);
}
function k0(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Lt(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function Zu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Lt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var Y = 0;
function Rh(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Lh,
  ec,
  Oh,
  Nh,
  _h,
  Jl = !1,
  ki = [],
  mn = null,
  gn = null,
  yn = null,
  Fo = new Map(),
  Io = new Map(),
  cn = [],
  P0 =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function jf(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      mn = null;
      break;
    case 'dragenter':
    case 'dragleave':
      gn = null;
      break;
    case 'mouseover':
    case 'mouseout':
      yn = null;
      break;
    case 'pointerover':
    case 'pointerout':
      Fo.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Io.delete(t.pointerId);
  }
}
function ro(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = ai(t)), t !== null && ec(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function R0(e, t, n, r, o) {
  switch (t) {
    case 'focusin':
      return (mn = ro(mn, e, t, n, r, o)), !0;
    case 'dragenter':
      return (gn = ro(gn, e, t, n, r, o)), !0;
    case 'mouseover':
      return (yn = ro(yn, e, t, n, r, o)), !0;
    case 'pointerover':
      var i = o.pointerId;
      return Fo.set(i, ro(Fo.get(i) || null, e, t, n, r, o)), !0;
    case 'gotpointercapture':
      return (
        (i = o.pointerId), Io.set(i, ro(Io.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function Th(e) {
  var t = Vn(e.target);
  if (t !== null) {
    var n = or(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = wh(n)), t !== null)) {
          (e.blockedOn = t),
            _h(e.priority, function () {
              Oh(n);
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
function Ii(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ql(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Vl = r), n.target.dispatchEvent(r), (Vl = null);
    } else return (t = ai(n)), t !== null && ec(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Df(e, t, n) {
  Ii(e) && n.delete(t);
}
function L0() {
  (Jl = !1),
    mn !== null && Ii(mn) && (mn = null),
    gn !== null && Ii(gn) && (gn = null),
    yn !== null && Ii(yn) && (yn = null),
    Fo.forEach(Df),
    Io.forEach(Df);
}
function oo(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Jl ||
      ((Jl = !0),
      rt.unstable_scheduleCallback(rt.unstable_NormalPriority, L0)));
}
function Uo(e) {
  function t(o) {
    return oo(o, e);
  }
  if (0 < ki.length) {
    oo(ki[0], e);
    for (var n = 1; n < ki.length; n++) {
      var r = ki[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    mn !== null && oo(mn, e),
      gn !== null && oo(gn, e),
      yn !== null && oo(yn, e),
      Fo.forEach(t),
      Io.forEach(t),
      n = 0;
    n < cn.length;
    n++
  )
    (r = cn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < cn.length && ((n = cn[0]), n.blockedOn === null); )
    Th(n), n.blockedOn === null && cn.shift();
}
var Rr = Zt.ReactCurrentBatchConfig,
  ss = !0;
function O0(e, t, n, r) {
  var o = Y,
    i = Rr.transition;
  Rr.transition = null;
  try {
    (Y = 1), tc(e, t, n, r);
  } finally {
    (Y = o), (Rr.transition = i);
  }
}
function N0(e, t, n, r) {
  var o = Y,
    i = Rr.transition;
  Rr.transition = null;
  try {
    (Y = 4), tc(e, t, n, r);
  } finally {
    (Y = o), (Rr.transition = i);
  }
}
function tc(e, t, n, r) {
  if (ss) {
    var o = ql(e, t, n, r);
    if (o === null) el(e, t, r, as, n), jf(e, r);
    else if (R0(o, e, t, n, r)) r.stopPropagation();
    else if ((jf(e, r), t & 4 && -1 < P0.indexOf(e))) {
      for (; o !== null; ) {
        var i = ai(o);
        if (
          (i !== null && Lh(i),
          (i = ql(e, t, n, r)),
          i === null && el(e, t, r, as, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else el(e, t, r, null, n);
  }
}
var as = null;
function ql(e, t, n, r) {
  if (((as = null), (e = Yu(r)), (e = Vn(e)), e !== null))
    if (((t = or(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = wh(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (as = e), null;
}
function bh(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (g0()) {
        case Xu:
          return 1;
        case Eh:
          return 4;
        case os:
        case y0:
          return 16;
        case kh:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var pn = null,
  nc = null,
  Ui = null;
function jh() {
  if (Ui) return Ui;
  var e,
    t = nc,
    n = t.length,
    r,
    o = 'value' in pn ? pn.value : pn.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (Ui = o.slice(e, 1 < r ? 1 - r : void 0));
}
function zi(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Pi() {
  return !0;
}
function Af() {
  return !1;
}
function st(e) {
  function t(n, r, o, i, s) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Pi
        : Af),
      (this.isPropagationStopped = Af),
      this
    );
  }
  return (
    me(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Pi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Pi));
      },
      persist: function () {},
      isPersistent: Pi,
    }),
    t
  );
}
var Wr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  rc = st(Wr),
  si = me({}, Wr, { view: 0, detail: 0 }),
  _0 = st(si),
  Wa,
  Ka,
  io,
  zs = me({}, si, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: oc,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== io &&
            (io && e.type === 'mousemove'
              ? ((Wa = e.screenX - io.screenX), (Ka = e.screenY - io.screenY))
              : (Ka = Wa = 0),
            (io = e)),
          Wa);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Ka;
    },
  }),
  Mf = st(zs),
  T0 = me({}, zs, { dataTransfer: 0 }),
  b0 = st(T0),
  j0 = me({}, si, { relatedTarget: 0 }),
  Qa = st(j0),
  D0 = me({}, Wr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  A0 = st(D0),
  M0 = me({}, Wr, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  $0 = st(M0),
  F0 = me({}, Wr, { data: 0 }),
  $f = st(F0),
  I0 = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  U0 = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  z0 = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function B0(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = z0[e]) ? !!t[e] : !1;
}
function oc() {
  return B0;
}
var V0 = me({}, si, {
    key: function (e) {
      if (e.key) {
        var t = I0[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = zi(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? U0[e.keyCode] || 'Unidentified'
          : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: oc,
    charCode: function (e) {
      return e.type === 'keypress' ? zi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? zi(e)
        : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0;
    },
  }),
  H0 = st(V0),
  W0 = me({}, zs, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Ff = st(W0),
  K0 = me({}, si, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: oc,
  }),
  Q0 = st(K0),
  J0 = me({}, Wr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  q0 = st(J0),
  G0 = me({}, zs, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
          ? -e.wheelDeltaY
          : 'wheelDelta' in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Y0 = st(G0),
  X0 = [9, 13, 27, 32],
  ic = Jt && 'CompositionEvent' in window,
  Ro = null;
Jt && 'documentMode' in document && (Ro = document.documentMode);
var Z0 = Jt && 'TextEvent' in window && !Ro,
  Dh = Jt && (!ic || (Ro && 8 < Ro && 11 >= Ro)),
  If = String.fromCharCode(32),
  Uf = !1;
function Ah(e, t) {
  switch (e) {
    case 'keyup':
      return X0.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function Mh(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var dr = !1;
function ey(e, t) {
  switch (e) {
    case 'compositionend':
      return Mh(t);
    case 'keypress':
      return t.which !== 32 ? null : ((Uf = !0), If);
    case 'textInput':
      return (e = t.data), e === If && Uf ? null : e;
    default:
      return null;
  }
}
function ty(e, t) {
  if (dr)
    return e === 'compositionend' || (!ic && Ah(e, t))
      ? ((e = jh()), (Ui = nc = pn = null), (dr = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return Dh && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var ny = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function zf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!ny[e.type] : t === 'textarea';
}
function $h(e, t, n, r) {
  hh(r),
    (t = ls(t, 'onChange')),
    0 < t.length &&
      ((n = new rc('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Lo = null,
  zo = null;
function ry(e) {
  Jh(e, 0);
}
function Bs(e) {
  var t = mr(e);
  if (ah(t)) return e;
}
function oy(e, t) {
  if (e === 'change') return t;
}
var Fh = !1;
if (Jt) {
  var Ja;
  if (Jt) {
    var qa = 'oninput' in document;
    if (!qa) {
      var Bf = document.createElement('div');
      Bf.setAttribute('oninput', 'return;'),
        (qa = typeof Bf.oninput == 'function');
    }
    Ja = qa;
  } else Ja = !1;
  Fh = Ja && (!document.documentMode || 9 < document.documentMode);
}
function Vf() {
  Lo && (Lo.detachEvent('onpropertychange', Ih), (zo = Lo = null));
}
function Ih(e) {
  if (e.propertyName === 'value' && Bs(zo)) {
    var t = [];
    $h(t, zo, e, Yu(e)), vh(ry, t);
  }
}
function iy(e, t, n) {
  e === 'focusin'
    ? (Vf(), (Lo = t), (zo = n), Lo.attachEvent('onpropertychange', Ih))
    : e === 'focusout' && Vf();
}
function sy(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return Bs(zo);
}
function ay(e, t) {
  if (e === 'click') return Bs(t);
}
function ly(e, t) {
  if (e === 'input' || e === 'change') return Bs(t);
}
function uy(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Nt = typeof Object.is == 'function' ? Object.is : uy;
function Bo(e, t) {
  if (Nt(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Tl.call(t, o) || !Nt(e[o], t[o])) return !1;
  }
  return !0;
}
function Hf(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Wf(e, t) {
  var n = Hf(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
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
    n = Hf(n);
  }
}
function Uh(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Uh(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function zh() {
  for (var e = window, t = ts(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ts(e.document);
  }
  return t;
}
function sc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function cy(e) {
  var t = zh(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Uh(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && sc(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Wf(n, i));
        var s = Wf(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var fy = Jt && 'documentMode' in document && 11 >= document.documentMode,
  pr = null,
  Gl = null,
  Oo = null,
  Yl = !1;
function Kf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Yl ||
    pr == null ||
    pr !== ts(r) ||
    ((r = pr),
    'selectionStart' in r && sc(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Oo && Bo(Oo, r)) ||
      ((Oo = r),
      (r = ls(Gl, 'onSelect')),
      0 < r.length &&
        ((t = new rc('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = pr))));
}
function Ri(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var hr = {
    animationend: Ri('Animation', 'AnimationEnd'),
    animationiteration: Ri('Animation', 'AnimationIteration'),
    animationstart: Ri('Animation', 'AnimationStart'),
    transitionend: Ri('Transition', 'TransitionEnd'),
  },
  Ga = {},
  Bh = {};
Jt &&
  ((Bh = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete hr.animationend.animation,
    delete hr.animationiteration.animation,
    delete hr.animationstart.animation),
  'TransitionEvent' in window || delete hr.transitionend.transition);
function Vs(e) {
  if (Ga[e]) return Ga[e];
  if (!hr[e]) return e;
  var t = hr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Bh) return (Ga[e] = t[n]);
  return e;
}
var Vh = Vs('animationend'),
  Hh = Vs('animationiteration'),
  Wh = Vs('animationstart'),
  Kh = Vs('transitionend'),
  Qh = new Map(),
  Qf =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function _n(e, t) {
  Qh.set(e, t), rr(t, [e]);
}
for (var Ya = 0; Ya < Qf.length; Ya++) {
  var Xa = Qf[Ya],
    dy = Xa.toLowerCase(),
    py = Xa[0].toUpperCase() + Xa.slice(1);
  _n(dy, 'on' + py);
}
_n(Vh, 'onAnimationEnd');
_n(Hh, 'onAnimationIteration');
_n(Wh, 'onAnimationStart');
_n('dblclick', 'onDoubleClick');
_n('focusin', 'onFocus');
_n('focusout', 'onBlur');
_n(Kh, 'onTransitionEnd');
jr('onMouseEnter', ['mouseout', 'mouseover']);
jr('onMouseLeave', ['mouseout', 'mouseover']);
jr('onPointerEnter', ['pointerout', 'pointerover']);
jr('onPointerLeave', ['pointerout', 'pointerover']);
rr(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
rr(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
rr('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
rr(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
rr(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
rr(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var Co =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  hy = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Co));
function Jf(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), d0(r, t, void 0, e), (e.currentTarget = null);
}
function Jh(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== i && o.isPropagationStopped())) break e;
          Jf(o, a, u), (i = l);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== i && o.isPropagationStopped())
          )
            break e;
          Jf(o, a, u), (i = l);
        }
    }
  }
  if (rs) throw ((e = Kl), (rs = !1), (Kl = null), e);
}
function ae(e, t) {
  var n = t[nu];
  n === void 0 && (n = t[nu] = new Set());
  var r = e + '__bubble';
  n.has(r) || (qh(t, e, 2, !1), n.add(r));
}
function Za(e, t, n) {
  var r = 0;
  t && (r |= 4), qh(n, e, r, t);
}
var Li = '_reactListening' + Math.random().toString(36).slice(2);
function Vo(e) {
  if (!e[Li]) {
    (e[Li] = !0),
      nh.forEach(function (n) {
        n !== 'selectionchange' && (hy.has(n) || Za(n, !1, e), Za(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Li] || ((t[Li] = !0), Za('selectionchange', !1, t));
  }
}
function qh(e, t, n, r) {
  switch (bh(t)) {
    case 1:
      var o = O0;
      break;
    case 4:
      o = N0;
      break;
    default:
      o = tc;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Wl ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1);
}
function el(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === o || (l.nodeType === 8 && l.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = Vn(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = i = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  vh(function () {
    var u = i,
      c = Yu(n),
      f = [];
    e: {
      var d = Qh.get(e);
      if (d !== void 0) {
        var w = rc,
          p = e;
        switch (e) {
          case 'keypress':
            if (zi(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            w = H0;
            break;
          case 'focusin':
            (p = 'focus'), (w = Qa);
            break;
          case 'focusout':
            (p = 'blur'), (w = Qa);
            break;
          case 'beforeblur':
          case 'afterblur':
            w = Qa;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            w = Mf;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            w = b0;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            w = Q0;
            break;
          case Vh:
          case Hh:
          case Wh:
            w = A0;
            break;
          case Kh:
            w = q0;
            break;
          case 'scroll':
            w = _0;
            break;
          case 'wheel':
            w = Y0;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            w = $0;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            w = Ff;
        }
        var y = (t & 4) !== 0,
          S = !y && e === 'scroll',
          g = y ? (d !== null ? d + 'Capture' : null) : d;
        y = [];
        for (var h = u, v; h !== null; ) {
          v = h;
          var m = v.stateNode;
          if (
            (v.tag === 5 &&
              m !== null &&
              ((v = m),
              g !== null && ((m = $o(h, g)), m != null && y.push(Ho(h, m, v)))),
            S)
          )
            break;
          h = h.return;
        }
        0 < y.length &&
          ((d = new w(d, p, null, n, c)), f.push({ event: d, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === 'mouseover' || e === 'pointerover'),
          (w = e === 'mouseout' || e === 'pointerout'),
          d &&
            n !== Vl &&
            (p = n.relatedTarget || n.fromElement) &&
            (Vn(p) || p[qt]))
        )
          break e;
        if (
          (w || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
                ? d.defaultView || d.parentWindow
                : window),
          w
            ? ((p = n.relatedTarget || n.toElement),
              (w = u),
              (p = p ? Vn(p) : null),
              p !== null &&
                ((S = or(p)), p !== S || (p.tag !== 5 && p.tag !== 6)) &&
                (p = null))
            : ((w = null), (p = u)),
          w !== p)
        ) {
          if (
            ((y = Mf),
            (m = 'onMouseLeave'),
            (g = 'onMouseEnter'),
            (h = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((y = Ff),
              (m = 'onPointerLeave'),
              (g = 'onPointerEnter'),
              (h = 'pointer')),
            (S = w == null ? d : mr(w)),
            (v = p == null ? d : mr(p)),
            (d = new y(m, h + 'leave', w, n, c)),
            (d.target = S),
            (d.relatedTarget = v),
            (m = null),
            Vn(c) === u &&
              ((y = new y(g, h + 'enter', p, n, c)),
              (y.target = v),
              (y.relatedTarget = S),
              (m = y)),
            (S = m),
            w && p)
          )
            t: {
              for (y = w, g = p, h = 0, v = y; v; v = ar(v)) h++;
              for (v = 0, m = g; m; m = ar(m)) v++;
              for (; 0 < h - v; ) (y = ar(y)), h--;
              for (; 0 < v - h; ) (g = ar(g)), v--;
              for (; h--; ) {
                if (y === g || (g !== null && y === g.alternate)) break t;
                (y = ar(y)), (g = ar(g));
              }
              y = null;
            }
          else y = null;
          w !== null && qf(f, d, w, y, !1),
            p !== null && S !== null && qf(f, S, p, y, !0);
        }
      }
      e: {
        if (
          ((d = u ? mr(u) : window),
          (w = d.nodeName && d.nodeName.toLowerCase()),
          w === 'select' || (w === 'input' && d.type === 'file'))
        )
          var C = oy;
        else if (zf(d))
          if (Fh) C = ly;
          else {
            C = sy;
            var O = iy;
          }
        else
          (w = d.nodeName) &&
            w.toLowerCase() === 'input' &&
            (d.type === 'checkbox' || d.type === 'radio') &&
            (C = ay);
        if (C && (C = C(e, u))) {
          $h(f, C, n, c);
          break e;
        }
        O && O(e, d, u),
          e === 'focusout' &&
            (O = d._wrapperState) &&
            O.controlled &&
            d.type === 'number' &&
            Fl(d, 'number', d.value);
      }
      switch (((O = u ? mr(u) : window), e)) {
        case 'focusin':
          (zf(O) || O.contentEditable === 'true') &&
            ((pr = O), (Gl = u), (Oo = null));
          break;
        case 'focusout':
          Oo = Gl = pr = null;
          break;
        case 'mousedown':
          Yl = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (Yl = !1), Kf(f, n, c);
          break;
        case 'selectionchange':
          if (fy) break;
        case 'keydown':
        case 'keyup':
          Kf(f, n, c);
      }
      var P;
      if (ic)
        e: {
          switch (e) {
            case 'compositionstart':
              var T = 'onCompositionStart';
              break e;
            case 'compositionend':
              T = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              T = 'onCompositionUpdate';
              break e;
          }
          T = void 0;
        }
      else
        dr
          ? Ah(e, n) && (T = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (T = 'onCompositionStart');
      T &&
        (Dh &&
          n.locale !== 'ko' &&
          (dr || T !== 'onCompositionStart'
            ? T === 'onCompositionEnd' && dr && (P = jh())
            : ((pn = c),
              (nc = 'value' in pn ? pn.value : pn.textContent),
              (dr = !0))),
        (O = ls(u, T)),
        0 < O.length &&
          ((T = new $f(T, e, null, n, c)),
          f.push({ event: T, listeners: O }),
          P ? (T.data = P) : ((P = Mh(n)), P !== null && (T.data = P)))),
        (P = Z0 ? ey(e, n) : ty(e, n)) &&
          ((u = ls(u, 'onBeforeInput')),
          0 < u.length &&
            ((c = new $f('onBeforeInput', 'beforeinput', null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = P)));
    }
    Jh(f, t);
  });
}
function Ho(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ls(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = $o(e, n)),
      i != null && r.unshift(Ho(e, i, o)),
      (i = $o(e, t)),
      i != null && r.push(Ho(e, i, o))),
      (e = e.return);
  }
  return r;
}
function ar(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function qf(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      o
        ? ((l = $o(n, i)), l != null && s.unshift(Ho(n, l, a)))
        : o || ((l = $o(n, i)), l != null && s.push(Ho(n, l, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var my = /\r\n?/g,
  gy = /\u0000|\uFFFD/g;
function Gf(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      my,
      `
`
    )
    .replace(gy, '');
}
function Oi(e, t, n) {
  if (((t = Gf(t)), Gf(e) !== t && n)) throw Error(_(425));
}
function us() {}
var Xl = null,
  Zl = null;
function eu(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var tu = typeof setTimeout == 'function' ? setTimeout : void 0,
  yy = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Yf = typeof Promise == 'function' ? Promise : void 0,
  vy =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Yf < 'u'
        ? function (e) {
            return Yf.resolve(null).then(e).catch(wy);
          }
        : tu;
function wy(e) {
  setTimeout(function () {
    throw e;
  });
}
function tl(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(o), Uo(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = o;
  } while (n);
  Uo(t);
}
function vn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function Xf(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Kr = Math.random().toString(36).slice(2),
  bt = '__reactFiber$' + Kr,
  Wo = '__reactProps$' + Kr,
  qt = '__reactContainer$' + Kr,
  nu = '__reactEvents$' + Kr,
  Sy = '__reactListeners$' + Kr,
  xy = '__reactHandles$' + Kr;
function Vn(e) {
  var t = e[bt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[qt] || n[bt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Xf(e); e !== null; ) {
          if ((n = e[bt])) return n;
          e = Xf(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ai(e) {
  return (
    (e = e[bt] || e[qt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function mr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(_(33));
}
function Hs(e) {
  return e[Wo] || null;
}
var ru = [],
  gr = -1;
function Tn(e) {
  return { current: e };
}
function le(e) {
  0 > gr || ((e.current = ru[gr]), (ru[gr] = null), gr--);
}
function se(e, t) {
  gr++, (ru[gr] = e.current), (e.current = t);
}
var Rn = {},
  Ue = Tn(Rn),
  qe = Tn(!1),
  qn = Rn;
function Dr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Rn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Ge(e) {
  return (e = e.childContextTypes), e != null;
}
function cs() {
  le(qe), le(Ue);
}
function Zf(e, t, n) {
  if (Ue.current !== Rn) throw Error(_(168));
  se(Ue, t), se(qe, n);
}
function Gh(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(_(108, i0(e) || 'Unknown', o));
  return me({}, n, r);
}
function fs(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Rn),
    (qn = Ue.current),
    se(Ue, e),
    se(qe, qe.current),
    !0
  );
}
function ed(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(_(169));
  n
    ? ((e = Gh(e, t, qn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      le(qe),
      le(Ue),
      se(Ue, e))
    : le(qe),
    se(qe, n);
}
var Bt = null,
  Ws = !1,
  nl = !1;
function Yh(e) {
  Bt === null ? (Bt = [e]) : Bt.push(e);
}
function Cy(e) {
  (Ws = !0), Yh(e);
}
function bn() {
  if (!nl && Bt !== null) {
    nl = !0;
    var e = 0,
      t = Y;
    try {
      var n = Bt;
      for (Y = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Bt = null), (Ws = !1);
    } catch (o) {
      throw (Bt !== null && (Bt = Bt.slice(e + 1)), Ch(Xu, bn), o);
    } finally {
      (Y = t), (nl = !1);
    }
  }
  return null;
}
var yr = [],
  vr = 0,
  ds = null,
  ps = 0,
  ft = [],
  dt = 0,
  Gn = null,
  Vt = 1,
  Ht = '';
function Un(e, t) {
  (yr[vr++] = ps), (yr[vr++] = ds), (ds = e), (ps = t);
}
function Xh(e, t, n) {
  (ft[dt++] = Vt), (ft[dt++] = Ht), (ft[dt++] = Gn), (Gn = e);
  var r = Vt;
  e = Ht;
  var o = 32 - Lt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - Lt(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    (i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (Vt = (1 << (32 - Lt(t) + o)) | (n << o) | r),
      (Ht = i + e);
  } else (Vt = (1 << i) | (n << o) | r), (Ht = e);
}
function ac(e) {
  e.return !== null && (Un(e, 1), Xh(e, 1, 0));
}
function lc(e) {
  for (; e === ds; )
    (ds = yr[--vr]), (yr[vr] = null), (ps = yr[--vr]), (yr[vr] = null);
  for (; e === Gn; )
    (Gn = ft[--dt]),
      (ft[dt] = null),
      (Ht = ft[--dt]),
      (ft[dt] = null),
      (Vt = ft[--dt]),
      (ft[dt] = null);
}
var nt = null,
  tt = null,
  ce = !1,
  Pt = null;
function Zh(e, t) {
  var n = pt(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function td(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (nt = e), (tt = vn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (nt = e), (tt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Gn !== null ? { id: Vt, overflow: Ht } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = pt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (nt = e),
            (tt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ou(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function iu(e) {
  if (ce) {
    var t = tt;
    if (t) {
      var n = t;
      if (!td(e, t)) {
        if (ou(e)) throw Error(_(418));
        t = vn(n.nextSibling);
        var r = nt;
        t && td(e, t)
          ? Zh(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ce = !1), (nt = e));
      }
    } else {
      if (ou(e)) throw Error(_(418));
      (e.flags = (e.flags & -4097) | 2), (ce = !1), (nt = e);
    }
  }
}
function nd(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  nt = e;
}
function Ni(e) {
  if (e !== nt) return !1;
  if (!ce) return nd(e), (ce = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !eu(e.type, e.memoizedProps))),
    t && (t = tt))
  ) {
    if (ou(e)) throw (em(), Error(_(418)));
    for (; t; ) Zh(e, t), (t = vn(t.nextSibling));
  }
  if ((nd(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(_(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              tt = vn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      tt = null;
    }
  } else tt = nt ? vn(e.stateNode.nextSibling) : null;
  return !0;
}
function em() {
  for (var e = tt; e; ) e = vn(e.nextSibling);
}
function Ar() {
  (tt = nt = null), (ce = !1);
}
function uc(e) {
  Pt === null ? (Pt = [e]) : Pt.push(e);
}
var Ey = Zt.ReactCurrentBatchConfig;
function Ct(e, t) {
  if (e && e.defaultProps) {
    (t = me({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var hs = Tn(null),
  ms = null,
  wr = null,
  cc = null;
function fc() {
  cc = wr = ms = null;
}
function dc(e) {
  var t = hs.current;
  le(hs), (e._currentValue = t);
}
function su(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Lr(e, t) {
  (ms = e),
    (cc = wr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Je = !0), (e.firstContext = null));
}
function gt(e) {
  var t = e._currentValue;
  if (cc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), wr === null)) {
      if (ms === null) throw Error(_(308));
      (wr = e), (ms.dependencies = { lanes: 0, firstContext: e });
    } else wr = wr.next = e;
  return t;
}
var Hn = null;
function pc(e) {
  Hn === null ? (Hn = [e]) : Hn.push(e);
}
function tm(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), pc(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Gt(e, r)
  );
}
function Gt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var un = !1;
function hc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function nm(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Wt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function wn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), J & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Gt(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), pc(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Gt(e, n)
  );
}
function Bi(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Zu(e, n);
  }
}
function rd(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function gs(e, t, n, r) {
  var o = e.updateQueue;
  un = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), s === null ? (i = u) : (s.next = u), (s = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== s &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var f = o.baseState;
    (s = 0), (c = u = l = null), (a = i);
    do {
      var d = a.lane,
        w = a.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: w,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var p = e,
            y = a;
          switch (((d = t), (w = n), y.tag)) {
            case 1:
              if (((p = y.payload), typeof p == 'function')) {
                f = p.call(w, f, d);
                break e;
              }
              f = p;
              break e;
            case 3:
              p.flags = (p.flags & -65537) | 128;
            case 0:
              if (
                ((p = y.payload),
                (d = typeof p == 'function' ? p.call(w, f, d) : p),
                d == null)
              )
                break e;
              f = me({}, f, d);
              break e;
            case 2:
              un = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (d = o.effects),
          d === null ? (o.effects = [a]) : d.push(a));
      } else
        (w = {
          eventTime: w,
          lane: d,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = w), (l = f)) : (c = c.next = w),
          (s |= d);
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        (d = a),
          (a = d.next),
          (d.next = null),
          (o.lastBaseUpdate = d),
          (o.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (l = f),
      (o.baseState = l),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (s |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (Xn |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function od(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != 'function'))
          throw Error(_(191, o));
        o.call(r);
      }
    }
}
var rm = new th.Component().refs;
function au(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : me({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ks = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? or(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = He(),
      o = xn(e),
      i = Wt(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = wn(e, i, o)),
      t !== null && (Ot(t, e, o, r), Bi(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = He(),
      o = xn(e),
      i = Wt(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = wn(e, i, o)),
      t !== null && (Ot(t, e, o, r), Bi(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = He(),
      r = xn(e),
      o = Wt(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = wn(e, o, r)),
      t !== null && (Ot(t, e, r, n), Bi(t, e, r));
  },
};
function id(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Bo(n, r) || !Bo(o, i)
        : !0
  );
}
function om(e, t, n) {
  var r = !1,
    o = Rn,
    i = t.contextType;
  return (
    typeof i == 'object' && i !== null
      ? (i = gt(i))
      : ((o = Ge(t) ? qn : Ue.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Dr(e, o) : Rn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ks),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function sd(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ks.enqueueReplaceState(t, t.state, null);
}
function lu(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = rm), hc(e);
  var i = t.contextType;
  typeof i == 'object' && i !== null
    ? (o.context = gt(i))
    : ((i = Ge(t) ? qn : Ue.current), (o.context = Dr(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (au(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' &&
        typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Ks.enqueueReplaceState(o, o.state, null),
      gs(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308);
}
function so(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(_(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(_(147, e));
      var o = r,
        i = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var a = o.refs;
            a === rm && (a = o.refs = {}),
              s === null ? delete a[i] : (a[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != 'string') throw Error(_(284));
    if (!n._owner) throw Error(_(290, e));
  }
  return e;
}
function _i(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      _(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  );
}
function ad(e) {
  var t = e._init;
  return t(e._payload);
}
function im(e) {
  function t(g, h) {
    if (e) {
      var v = g.deletions;
      v === null ? ((g.deletions = [h]), (g.flags |= 16)) : v.push(h);
    }
  }
  function n(g, h) {
    if (!e) return null;
    for (; h !== null; ) t(g, h), (h = h.sibling);
    return null;
  }
  function r(g, h) {
    for (g = new Map(); h !== null; )
      h.key !== null ? g.set(h.key, h) : g.set(h.index, h), (h = h.sibling);
    return g;
  }
  function o(g, h) {
    return (g = Cn(g, h)), (g.index = 0), (g.sibling = null), g;
  }
  function i(g, h, v) {
    return (
      (g.index = v),
      e
        ? ((v = g.alternate),
          v !== null
            ? ((v = v.index), v < h ? ((g.flags |= 2), h) : v)
            : ((g.flags |= 2), h))
        : ((g.flags |= 1048576), h)
    );
  }
  function s(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function a(g, h, v, m) {
    return h === null || h.tag !== 6
      ? ((h = ul(v, g.mode, m)), (h.return = g), h)
      : ((h = o(h, v)), (h.return = g), h);
  }
  function l(g, h, v, m) {
    var C = v.type;
    return C === fr
      ? c(g, h, v.props.children, m, v.key)
      : h !== null &&
          (h.elementType === C ||
            (typeof C == 'object' &&
              C !== null &&
              C.$$typeof === ln &&
              ad(C) === h.type))
        ? ((m = o(h, v.props)), (m.ref = so(g, h, v)), (m.return = g), m)
        : ((m = Ji(v.type, v.key, v.props, null, g.mode, m)),
          (m.ref = so(g, h, v)),
          (m.return = g),
          m);
  }
  function u(g, h, v, m) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== v.containerInfo ||
      h.stateNode.implementation !== v.implementation
      ? ((h = cl(v, g.mode, m)), (h.return = g), h)
      : ((h = o(h, v.children || [])), (h.return = g), h);
  }
  function c(g, h, v, m, C) {
    return h === null || h.tag !== 7
      ? ((h = Jn(v, g.mode, m, C)), (h.return = g), h)
      : ((h = o(h, v)), (h.return = g), h);
  }
  function f(g, h, v) {
    if ((typeof h == 'string' && h !== '') || typeof h == 'number')
      return (h = ul('' + h, g.mode, v)), (h.return = g), h;
    if (typeof h == 'object' && h !== null) {
      switch (h.$$typeof) {
        case wi:
          return (
            (v = Ji(h.type, h.key, h.props, null, g.mode, v)),
            (v.ref = so(g, null, h)),
            (v.return = g),
            v
          );
        case cr:
          return (h = cl(h, g.mode, v)), (h.return = g), h;
        case ln:
          var m = h._init;
          return f(g, m(h._payload), v);
      }
      if (So(h) || to(h))
        return (h = Jn(h, g.mode, v, null)), (h.return = g), h;
      _i(g, h);
    }
    return null;
  }
  function d(g, h, v, m) {
    var C = h !== null ? h.key : null;
    if ((typeof v == 'string' && v !== '') || typeof v == 'number')
      return C !== null ? null : a(g, h, '' + v, m);
    if (typeof v == 'object' && v !== null) {
      switch (v.$$typeof) {
        case wi:
          return v.key === C ? l(g, h, v, m) : null;
        case cr:
          return v.key === C ? u(g, h, v, m) : null;
        case ln:
          return (C = v._init), d(g, h, C(v._payload), m);
      }
      if (So(v) || to(v)) return C !== null ? null : c(g, h, v, m, null);
      _i(g, v);
    }
    return null;
  }
  function w(g, h, v, m, C) {
    if ((typeof m == 'string' && m !== '') || typeof m == 'number')
      return (g = g.get(v) || null), a(h, g, '' + m, C);
    if (typeof m == 'object' && m !== null) {
      switch (m.$$typeof) {
        case wi:
          return (g = g.get(m.key === null ? v : m.key) || null), l(h, g, m, C);
        case cr:
          return (g = g.get(m.key === null ? v : m.key) || null), u(h, g, m, C);
        case ln:
          var O = m._init;
          return w(g, h, v, O(m._payload), C);
      }
      if (So(m) || to(m)) return (g = g.get(v) || null), c(h, g, m, C, null);
      _i(h, m);
    }
    return null;
  }
  function p(g, h, v, m) {
    for (
      var C = null, O = null, P = h, T = (h = 0), M = null;
      P !== null && T < v.length;
      T++
    ) {
      P.index > T ? ((M = P), (P = null)) : (M = P.sibling);
      var D = d(g, P, v[T], m);
      if (D === null) {
        P === null && (P = M);
        break;
      }
      e && P && D.alternate === null && t(g, P),
        (h = i(D, h, T)),
        O === null ? (C = D) : (O.sibling = D),
        (O = D),
        (P = M);
    }
    if (T === v.length) return n(g, P), ce && Un(g, T), C;
    if (P === null) {
      for (; T < v.length; T++)
        (P = f(g, v[T], m)),
          P !== null &&
            ((h = i(P, h, T)), O === null ? (C = P) : (O.sibling = P), (O = P));
      return ce && Un(g, T), C;
    }
    for (P = r(g, P); T < v.length; T++)
      (M = w(P, g, T, v[T], m)),
        M !== null &&
          (e && M.alternate !== null && P.delete(M.key === null ? T : M.key),
          (h = i(M, h, T)),
          O === null ? (C = M) : (O.sibling = M),
          (O = M));
    return (
      e &&
        P.forEach(function (q) {
          return t(g, q);
        }),
      ce && Un(g, T),
      C
    );
  }
  function y(g, h, v, m) {
    var C = to(v);
    if (typeof C != 'function') throw Error(_(150));
    if (((v = C.call(v)), v == null)) throw Error(_(151));
    for (
      var O = (C = null), P = h, T = (h = 0), M = null, D = v.next();
      P !== null && !D.done;
      T++, D = v.next()
    ) {
      P.index > T ? ((M = P), (P = null)) : (M = P.sibling);
      var q = d(g, P, D.value, m);
      if (q === null) {
        P === null && (P = M);
        break;
      }
      e && P && q.alternate === null && t(g, P),
        (h = i(q, h, T)),
        O === null ? (C = q) : (O.sibling = q),
        (O = q),
        (P = M);
    }
    if (D.done) return n(g, P), ce && Un(g, T), C;
    if (P === null) {
      for (; !D.done; T++, D = v.next())
        (D = f(g, D.value, m)),
          D !== null &&
            ((h = i(D, h, T)), O === null ? (C = D) : (O.sibling = D), (O = D));
      return ce && Un(g, T), C;
    }
    for (P = r(g, P); !D.done; T++, D = v.next())
      (D = w(P, g, T, D.value, m)),
        D !== null &&
          (e && D.alternate !== null && P.delete(D.key === null ? T : D.key),
          (h = i(D, h, T)),
          O === null ? (C = D) : (O.sibling = D),
          (O = D));
    return (
      e &&
        P.forEach(function (Te) {
          return t(g, Te);
        }),
      ce && Un(g, T),
      C
    );
  }
  function S(g, h, v, m) {
    if (
      (typeof v == 'object' &&
        v !== null &&
        v.type === fr &&
        v.key === null &&
        (v = v.props.children),
      typeof v == 'object' && v !== null)
    ) {
      switch (v.$$typeof) {
        case wi:
          e: {
            for (var C = v.key, O = h; O !== null; ) {
              if (O.key === C) {
                if (((C = v.type), C === fr)) {
                  if (O.tag === 7) {
                    n(g, O.sibling),
                      (h = o(O, v.props.children)),
                      (h.return = g),
                      (g = h);
                    break e;
                  }
                } else if (
                  O.elementType === C ||
                  (typeof C == 'object' &&
                    C !== null &&
                    C.$$typeof === ln &&
                    ad(C) === O.type)
                ) {
                  n(g, O.sibling),
                    (h = o(O, v.props)),
                    (h.ref = so(g, O, v)),
                    (h.return = g),
                    (g = h);
                  break e;
                }
                n(g, O);
                break;
              } else t(g, O);
              O = O.sibling;
            }
            v.type === fr
              ? ((h = Jn(v.props.children, g.mode, m, v.key)),
                (h.return = g),
                (g = h))
              : ((m = Ji(v.type, v.key, v.props, null, g.mode, m)),
                (m.ref = so(g, h, v)),
                (m.return = g),
                (g = m));
          }
          return s(g);
        case cr:
          e: {
            for (O = v.key; h !== null; ) {
              if (h.key === O)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === v.containerInfo &&
                  h.stateNode.implementation === v.implementation
                ) {
                  n(g, h.sibling),
                    (h = o(h, v.children || [])),
                    (h.return = g),
                    (g = h);
                  break e;
                } else {
                  n(g, h);
                  break;
                }
              else t(g, h);
              h = h.sibling;
            }
            (h = cl(v, g.mode, m)), (h.return = g), (g = h);
          }
          return s(g);
        case ln:
          return (O = v._init), S(g, h, O(v._payload), m);
      }
      if (So(v)) return p(g, h, v, m);
      if (to(v)) return y(g, h, v, m);
      _i(g, v);
    }
    return (typeof v == 'string' && v !== '') || typeof v == 'number'
      ? ((v = '' + v),
        h !== null && h.tag === 6
          ? (n(g, h.sibling), (h = o(h, v)), (h.return = g), (g = h))
          : (n(g, h), (h = ul(v, g.mode, m)), (h.return = g), (g = h)),
        s(g))
      : n(g, h);
  }
  return S;
}
var Mr = im(!0),
  sm = im(!1),
  li = {},
  Mt = Tn(li),
  Ko = Tn(li),
  Qo = Tn(li);
function Wn(e) {
  if (e === li) throw Error(_(174));
  return e;
}
function mc(e, t) {
  switch ((se(Qo, t), se(Ko, e), se(Mt, li), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ul(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ul(t, e));
  }
  le(Mt), se(Mt, t);
}
function $r() {
  le(Mt), le(Ko), le(Qo);
}
function am(e) {
  Wn(Qo.current);
  var t = Wn(Mt.current),
    n = Ul(t, e.type);
  t !== n && (se(Ko, e), se(Mt, n));
}
function gc(e) {
  Ko.current === e && (le(Mt), le(Ko));
}
var pe = Tn(0);
function ys(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var rl = [];
function yc() {
  for (var e = 0; e < rl.length; e++)
    rl[e]._workInProgressVersionPrimary = null;
  rl.length = 0;
}
var Vi = Zt.ReactCurrentDispatcher,
  ol = Zt.ReactCurrentBatchConfig,
  Yn = 0,
  he = null,
  Re = null,
  Oe = null,
  vs = !1,
  No = !1,
  Jo = 0,
  ky = 0;
function Me() {
  throw Error(_(321));
}
function vc(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Nt(e[n], t[n])) return !1;
  return !0;
}
function wc(e, t, n, r, o, i) {
  if (
    ((Yn = i),
    (he = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Vi.current = e === null || e.memoizedState === null ? Oy : Ny),
    (e = n(r, o)),
    No)
  ) {
    i = 0;
    do {
      if (((No = !1), (Jo = 0), 25 <= i)) throw Error(_(301));
      (i += 1),
        (Oe = Re = null),
        (t.updateQueue = null),
        (Vi.current = _y),
        (e = n(r, o));
    } while (No);
  }
  if (
    ((Vi.current = ws),
    (t = Re !== null && Re.next !== null),
    (Yn = 0),
    (Oe = Re = he = null),
    (vs = !1),
    t)
  )
    throw Error(_(300));
  return e;
}
function Sc() {
  var e = Jo !== 0;
  return (Jo = 0), e;
}
function Tt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Oe === null ? (he.memoizedState = Oe = e) : (Oe = Oe.next = e), Oe;
}
function yt() {
  if (Re === null) {
    var e = he.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Re.next;
  var t = Oe === null ? he.memoizedState : Oe.next;
  if (t !== null) (Oe = t), (Re = e);
  else {
    if (e === null) throw Error(_(310));
    (Re = e),
      (e = {
        memoizedState: Re.memoizedState,
        baseState: Re.baseState,
        baseQueue: Re.baseQueue,
        queue: Re.queue,
        next: null,
      }),
      Oe === null ? (he.memoizedState = Oe = e) : (Oe = Oe.next = e);
  }
  return Oe;
}
function qo(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function il(e) {
  var t = yt(),
    n = t.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = e;
  var r = Re,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      (o.next = i.next), (i.next = s);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var a = (s = null),
      l = null,
      u = i;
    do {
      var c = u.lane;
      if ((Yn & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = f), (s = r)) : (l = l.next = f),
          (he.lanes |= c),
          (Xn |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? (s = r) : (l.next = a),
      Nt(r, t.memoizedState) || (Je = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (he.lanes |= i), (Xn |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function sl(e) {
  var t = yt(),
    n = t.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== o);
    Nt(i, t.memoizedState) || (Je = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function lm() {}
function um(e, t) {
  var n = he,
    r = yt(),
    o = t(),
    i = !Nt(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Je = !0)),
    (r = r.queue),
    xc(dm.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Oe !== null && Oe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Go(9, fm.bind(null, n, r, o, t), void 0, null),
      Ne === null)
    )
      throw Error(_(349));
    Yn & 30 || cm(n, t, o);
  }
  return o;
}
function cm(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = he.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (he.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function fm(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), pm(t) && hm(e);
}
function dm(e, t, n) {
  return n(function () {
    pm(t) && hm(e);
  });
}
function pm(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Nt(e, n);
  } catch {
    return !0;
  }
}
function hm(e) {
  var t = Gt(e, 1);
  t !== null && Ot(t, e, 1, -1);
}
function ld(e) {
  var t = Tt();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: qo,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Ly.bind(null, he, e)),
    [t.memoizedState, e]
  );
}
function Go(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = he.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (he.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function mm() {
  return yt().memoizedState;
}
function Hi(e, t, n, r) {
  var o = Tt();
  (he.flags |= e),
    (o.memoizedState = Go(1 | t, n, void 0, r === void 0 ? null : r));
}
function Qs(e, t, n, r) {
  var o = yt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Re !== null) {
    var s = Re.memoizedState;
    if (((i = s.destroy), r !== null && vc(r, s.deps))) {
      o.memoizedState = Go(t, n, i, r);
      return;
    }
  }
  (he.flags |= e), (o.memoizedState = Go(1 | t, n, i, r));
}
function ud(e, t) {
  return Hi(8390656, 8, e, t);
}
function xc(e, t) {
  return Qs(2048, 8, e, t);
}
function gm(e, t) {
  return Qs(4, 2, e, t);
}
function ym(e, t) {
  return Qs(4, 4, e, t);
}
function vm(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function wm(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Qs(4, 4, vm.bind(null, t, e), n)
  );
}
function Cc() {}
function Sm(e, t) {
  var n = yt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && vc(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function xm(e, t) {
  var n = yt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && vc(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Cm(e, t, n) {
  return Yn & 21
    ? (Nt(n, t) || ((n = Ph()), (he.lanes |= n), (Xn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Je = !0)), (e.memoizedState = n));
}
function Py(e, t) {
  var n = Y;
  (Y = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ol.transition;
  ol.transition = {};
  try {
    e(!1), t();
  } finally {
    (Y = n), (ol.transition = r);
  }
}
function Em() {
  return yt().memoizedState;
}
function Ry(e, t, n) {
  var r = xn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    km(e))
  )
    Pm(t, n);
  else if (((n = tm(e, t, n, r)), n !== null)) {
    var o = He();
    Ot(n, e, r, o), Rm(n, t, r);
  }
}
function Ly(e, t, n) {
  var r = xn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (km(e)) Pm(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = i(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = a), Nt(a, s))) {
          var l = t.interleaved;
          l === null
            ? ((o.next = o), pc(t))
            : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = tm(e, t, o, r)),
      n !== null && ((o = He()), Ot(n, e, r, o), Rm(n, t, r));
  }
}
function km(e) {
  var t = e.alternate;
  return e === he || (t !== null && t === he);
}
function Pm(e, t) {
  No = vs = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Rm(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Zu(e, n);
  }
}
var ws = {
    readContext: gt,
    useCallback: Me,
    useContext: Me,
    useEffect: Me,
    useImperativeHandle: Me,
    useInsertionEffect: Me,
    useLayoutEffect: Me,
    useMemo: Me,
    useReducer: Me,
    useRef: Me,
    useState: Me,
    useDebugValue: Me,
    useDeferredValue: Me,
    useTransition: Me,
    useMutableSource: Me,
    useSyncExternalStore: Me,
    useId: Me,
    unstable_isNewReconciler: !1,
  },
  Oy = {
    readContext: gt,
    useCallback: function (e, t) {
      return (Tt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: gt,
    useEffect: ud,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Hi(4194308, 4, vm.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Hi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Hi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Tt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Tt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Ry.bind(null, he, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Tt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: ld,
    useDebugValue: Cc,
    useDeferredValue: function (e) {
      return (Tt().memoizedState = e);
    },
    useTransition: function () {
      var e = ld(!1),
        t = e[0];
      return (e = Py.bind(null, e[1])), (Tt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = he,
        o = Tt();
      if (ce) {
        if (n === void 0) throw Error(_(407));
        n = n();
      } else {
        if (((n = t()), Ne === null)) throw Error(_(349));
        Yn & 30 || cm(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        ud(dm.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Go(9, fm.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Tt(),
        t = Ne.identifierPrefix;
      if (ce) {
        var n = Ht,
          r = Vt;
        (n = (r & ~(1 << (32 - Lt(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Jo++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = ky++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Ny = {
    readContext: gt,
    useCallback: Sm,
    useContext: gt,
    useEffect: xc,
    useImperativeHandle: wm,
    useInsertionEffect: gm,
    useLayoutEffect: ym,
    useMemo: xm,
    useReducer: il,
    useRef: mm,
    useState: function () {
      return il(qo);
    },
    useDebugValue: Cc,
    useDeferredValue: function (e) {
      var t = yt();
      return Cm(t, Re.memoizedState, e);
    },
    useTransition: function () {
      var e = il(qo)[0],
        t = yt().memoizedState;
      return [e, t];
    },
    useMutableSource: lm,
    useSyncExternalStore: um,
    useId: Em,
    unstable_isNewReconciler: !1,
  },
  _y = {
    readContext: gt,
    useCallback: Sm,
    useContext: gt,
    useEffect: xc,
    useImperativeHandle: wm,
    useInsertionEffect: gm,
    useLayoutEffect: ym,
    useMemo: xm,
    useReducer: sl,
    useRef: mm,
    useState: function () {
      return sl(qo);
    },
    useDebugValue: Cc,
    useDeferredValue: function (e) {
      var t = yt();
      return Re === null ? (t.memoizedState = e) : Cm(t, Re.memoizedState, e);
    },
    useTransition: function () {
      var e = sl(qo)[0],
        t = yt().memoizedState;
      return [e, t];
    },
    useMutableSource: lm,
    useSyncExternalStore: um,
    useId: Em,
    unstable_isNewReconciler: !1,
  };
function Fr(e, t) {
  try {
    var n = '',
      r = t;
    do (n += o0(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function al(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function uu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Ty = typeof WeakMap == 'function' ? WeakMap : Map;
function Lm(e, t, n) {
  (n = Wt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      xs || ((xs = !0), (wu = r)), uu(e, t);
    }),
    n
  );
}
function Om(e, t, n) {
  (n = Wt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        uu(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        uu(e, t),
          typeof r != 'function' &&
            (Sn === null ? (Sn = new Set([this])) : Sn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : '',
        });
      }),
    n
  );
}
function cd(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Ty();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = Wy.bind(null, e, t, n)), t.then(e, e));
}
function fd(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function dd(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Wt(-1, 1)), (t.tag = 2), wn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var by = Zt.ReactCurrentOwner,
  Je = !1;
function Ve(e, t, n, r) {
  t.child = e === null ? sm(t, null, n, r) : Mr(t, e.child, n, r);
}
function pd(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Lr(t, o),
    (r = wc(e, t, n, r, i, o)),
    (n = Sc()),
    e !== null && !Je
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Yt(e, t, o))
      : (ce && n && ac(t), (t.flags |= 1), Ve(e, t, r, o), t.child)
  );
}
function hd(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == 'function' &&
      !_c(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Nm(e, t, i, r, o))
      : ((e = Ji(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Bo), n(s, r) && e.ref === t.ref)
    )
      return Yt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Cn(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Nm(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Bo(i, r) && e.ref === t.ref)
      if (((Je = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Je = !0);
      else return (t.lanes = e.lanes), Yt(e, t, o);
  }
  return cu(e, t, n, r, o);
}
function _m(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        se(xr, et),
        (et |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          se(xr, et),
          (et |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        se(xr, et),
        (et |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      se(xr, et),
      (et |= r);
  return Ve(e, t, o, n), t.child;
}
function Tm(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function cu(e, t, n, r, o) {
  var i = Ge(n) ? qn : Ue.current;
  return (
    (i = Dr(t, i)),
    Lr(t, o),
    (n = wc(e, t, n, r, i, o)),
    (r = Sc()),
    e !== null && !Je
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Yt(e, t, o))
      : (ce && r && ac(t), (t.flags |= 1), Ve(e, t, n, o), t.child)
  );
}
function md(e, t, n, r, o) {
  if (Ge(n)) {
    var i = !0;
    fs(t);
  } else i = !1;
  if ((Lr(t, o), t.stateNode === null))
    Wi(e, t), om(t, n, r), lu(t, n, r, o), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = n.contextType;
    typeof u == 'object' && u !== null
      ? (u = gt(u))
      : ((u = Ge(n) ? qn : Ue.current), (u = Dr(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == 'function' ||
        typeof s.getSnapshotBeforeUpdate == 'function';
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof s.componentWillReceiveProps != 'function') ||
      ((a !== r || l !== u) && sd(t, s, r, u)),
      (un = !1);
    var d = t.memoizedState;
    (s.state = d),
      gs(t, r, s, o),
      (l = t.memoizedState),
      a !== r || d !== l || qe.current || un
        ? (typeof c == 'function' && (au(t, n, c, r), (l = t.memoizedState)),
          (a = un || id(t, n, a, r, d, l, u))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != 'function' &&
                  typeof s.componentWillMount != 'function') ||
                (typeof s.componentWillMount == 'function' &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == 'function' &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = u),
          (r = a))
        : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      nm(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : Ct(t.type, a)),
      (s.props = u),
      (f = t.pendingProps),
      (d = s.context),
      (l = n.contextType),
      typeof l == 'object' && l !== null
        ? (l = gt(l))
        : ((l = Ge(n) ? qn : Ue.current), (l = Dr(t, l)));
    var w = n.getDerivedStateFromProps;
    (c =
      typeof w == 'function' ||
      typeof s.getSnapshotBeforeUpdate == 'function') ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof s.componentWillReceiveProps != 'function') ||
      ((a !== f || d !== l) && sd(t, s, r, l)),
      (un = !1),
      (d = t.memoizedState),
      (s.state = d),
      gs(t, r, s, o);
    var p = t.memoizedState;
    a !== f || d !== p || qe.current || un
      ? (typeof w == 'function' && (au(t, n, w, r), (p = t.memoizedState)),
        (u = un || id(t, n, u, r, d, p, l) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != 'function' &&
                typeof s.componentWillUpdate != 'function') ||
              (typeof s.componentWillUpdate == 'function' &&
                s.componentWillUpdate(r, p, l),
              typeof s.UNSAFE_componentWillUpdate == 'function' &&
                s.UNSAFE_componentWillUpdate(r, p, l)),
            typeof s.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != 'function' ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != 'function' ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = p)),
        (s.props = r),
        (s.state = p),
        (s.context = l),
        (r = u))
      : (typeof s.componentDidUpdate != 'function' ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != 'function' ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return fu(e, t, n, r, i, o);
}
function fu(e, t, n, r, o, i) {
  Tm(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && ed(t, n, !1), Yt(e, t, i);
  (r = t.stateNode), (by.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Mr(t, e.child, null, i)), (t.child = Mr(t, null, a, i)))
      : Ve(e, t, a, i),
    (t.memoizedState = r.state),
    o && ed(t, n, !0),
    t.child
  );
}
function bm(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Zf(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Zf(e, t.context, !1),
    mc(e, t.containerInfo);
}
function gd(e, t, n, r, o) {
  return Ar(), uc(o), (t.flags |= 256), Ve(e, t, n, r), t.child;
}
var du = { dehydrated: null, treeContext: null, retryLane: 0 };
function pu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function jm(e, t, n) {
  var r = t.pendingProps,
    o = pe.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    se(pe, o & 1),
    e === null)
  )
    return (
      iu(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: 'hidden', children: s }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = Gs(s, r, 0, null)),
              (e = Jn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = pu(n)),
              (t.memoizedState = du),
              e)
            : Ec(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return jy(e, t, s, r, a, o, n);
  if (i) {
    (i = r.fallback), (s = t.mode), (o = e.child), (a = o.sibling);
    var l = { mode: 'hidden', children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = Cn(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (i = Cn(a, i)) : ((i = Jn(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? pu(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = du),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Cn(i, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Ec(e, t) {
  return (
    (t = Gs({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ti(e, t, n, r) {
  return (
    r !== null && uc(r),
    Mr(t, e.child, null, n),
    (e = Ec(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function jy(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = al(Error(_(422)))), Ti(e, t, s, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (o = t.mode),
          (r = Gs({ mode: 'visible', children: r.children }, o, 0, null)),
          (i = Jn(i, o, s, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && Mr(t, e.child, null, s),
          (t.child.memoizedState = pu(s)),
          (t.memoizedState = du),
          i);
  if (!(t.mode & 1)) return Ti(e, t, s, null);
  if (o.data === '$!') {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(_(419))), (r = al(i, r, void 0)), Ti(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), Je || a)) {
    if (((r = Ne), r !== null)) {
      switch (s & -s) {
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
      (o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), Gt(e, o), Ot(r, e, o, -1));
    }
    return Nc(), (r = al(Error(_(421)))), Ti(e, t, s, r);
  }
  return o.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Ky.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (tt = vn(o.nextSibling)),
      (nt = t),
      (ce = !0),
      (Pt = null),
      e !== null &&
        ((ft[dt++] = Vt),
        (ft[dt++] = Ht),
        (ft[dt++] = Gn),
        (Vt = e.id),
        (Ht = e.overflow),
        (Gn = t)),
      (t = Ec(t, r.children)),
      (t.flags |= 4096),
      t);
}
function yd(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), su(e.return, t, n);
}
function ll(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function Dm(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Ve(e, t, r.children, n), (r = pe.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && yd(e, n, t);
        else if (e.tag === 19) yd(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((se(pe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case 'forwards':
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && ys(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          ll(t, !1, o, n, i);
        break;
      case 'backwards':
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && ys(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        ll(t, !0, n, null, i);
        break;
      case 'together':
        ll(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Wi(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Yt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Xn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(_(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Cn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Cn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Dy(e, t, n) {
  switch (t.tag) {
    case 3:
      bm(t), Ar();
      break;
    case 5:
      am(t);
      break;
    case 1:
      Ge(t.type) && fs(t);
      break;
    case 4:
      mc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      se(hs, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (se(pe, pe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? jm(e, t, n)
            : (se(pe, pe.current & 1),
              (e = Yt(e, t, n)),
              e !== null ? e.sibling : null);
      se(pe, pe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Dm(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        se(pe, pe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), _m(e, t, n);
  }
  return Yt(e, t, n);
}
var Am, hu, Mm, $m;
Am = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
hu = function () {};
Mm = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Wn(Mt.current);
    var i = null;
    switch (n) {
      case 'input':
        (o = Ml(e, o)), (r = Ml(e, r)), (i = []);
        break;
      case 'select':
        (o = me({}, o, { value: void 0 })),
          (r = me({}, r, { value: void 0 })),
          (i = []);
        break;
      case 'textarea':
        (o = Il(e, o)), (r = Il(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = us);
    }
    zl(n, r);
    var s;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === 'style') {
          var a = o[u];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ''));
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (Ao.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === 'style')
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ''));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else n || (i || (i = []), i.push(u, n)), (n = l);
        else
          u === 'dangerouslySetInnerHTML'
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (i = i || []).push(u, l))
            : u === 'children'
              ? (typeof l != 'string' && typeof l != 'number') ||
                (i = i || []).push(u, '' + l)
              : u !== 'suppressContentEditableWarning' &&
                u !== 'suppressHydrationWarning' &&
                (Ao.hasOwnProperty(u)
                  ? (l != null && u === 'onScroll' && ae('scroll', e),
                    i || a === l || (i = []))
                  : (i = i || []).push(u, l));
    }
    n && (i = i || []).push('style', n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
$m = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ao(e, t) {
  if (!ce)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function $e(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Ay(e, t, n) {
  var r = t.pendingProps;
  switch ((lc(t), t.tag)) {
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
      return $e(t), null;
    case 1:
      return Ge(t.type) && cs(), $e(t), null;
    case 3:
      return (
        (r = t.stateNode),
        $r(),
        le(qe),
        le(Ue),
        yc(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ni(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Pt !== null && (Cu(Pt), (Pt = null)))),
        hu(e, t),
        $e(t),
        null
      );
    case 5:
      gc(t);
      var o = Wn(Qo.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Mm(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(_(166));
          return $e(t), null;
        }
        if (((e = Wn(Mt.current)), Ni(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[bt] = t), (r[Wo] = i), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              ae('cancel', r), ae('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              ae('load', r);
              break;
            case 'video':
            case 'audio':
              for (o = 0; o < Co.length; o++) ae(Co[o], r);
              break;
            case 'source':
              ae('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              ae('error', r), ae('load', r);
              break;
            case 'details':
              ae('toggle', r);
              break;
            case 'input':
              Rf(r, i), ae('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                ae('invalid', r);
              break;
            case 'textarea':
              Of(r, i), ae('invalid', r);
          }
          zl(n, i), (o = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var a = i[s];
              s === 'children'
                ? typeof a == 'string'
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Oi(r.textContent, a, e),
                    (o = ['children', a]))
                  : typeof a == 'number' &&
                    r.textContent !== '' + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Oi(r.textContent, a, e),
                    (o = ['children', '' + a]))
                : Ao.hasOwnProperty(s) &&
                  a != null &&
                  s === 'onScroll' &&
                  ae('scroll', r);
            }
          switch (n) {
            case 'input':
              Si(r), Lf(r, i, !0);
              break;
            case 'textarea':
              Si(r), Nf(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof i.onClick == 'function' && (r.onclick = us);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = o.nodeType === 9 ? o : o.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = ch(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = s.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                  ? (e = s.createElement(n, { is: r.is }))
                  : ((e = s.createElement(n)),
                    n === 'select' &&
                      ((s = e),
                      r.multiple
                        ? (s.multiple = !0)
                        : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[bt] = t),
            (e[Wo] = r),
            Am(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Bl(n, r)), n)) {
              case 'dialog':
                ae('cancel', e), ae('close', e), (o = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                ae('load', e), (o = r);
                break;
              case 'video':
              case 'audio':
                for (o = 0; o < Co.length; o++) ae(Co[o], e);
                o = r;
                break;
              case 'source':
                ae('error', e), (o = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                ae('error', e), ae('load', e), (o = r);
                break;
              case 'details':
                ae('toggle', e), (o = r);
                break;
              case 'input':
                Rf(e, r), (o = Ml(e, r)), ae('invalid', e);
                break;
              case 'option':
                o = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = me({}, r, { value: void 0 })),
                  ae('invalid', e);
                break;
              case 'textarea':
                Of(e, r), (o = Il(e, r)), ae('invalid', e);
                break;
              default:
                o = r;
            }
            zl(n, o), (a = o);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var l = a[i];
                i === 'style'
                  ? ph(e, l)
                  : i === 'dangerouslySetInnerHTML'
                    ? ((l = l ? l.__html : void 0), l != null && fh(e, l))
                    : i === 'children'
                      ? typeof l == 'string'
                        ? (n !== 'textarea' || l !== '') && Mo(e, l)
                        : typeof l == 'number' && Mo(e, '' + l)
                      : i !== 'suppressContentEditableWarning' &&
                        i !== 'suppressHydrationWarning' &&
                        i !== 'autoFocus' &&
                        (Ao.hasOwnProperty(i)
                          ? l != null && i === 'onScroll' && ae('scroll', e)
                          : l != null && Qu(e, i, l, s));
              }
            switch (n) {
              case 'input':
                Si(e), Lf(e, r, !1);
                break;
              case 'textarea':
                Si(e), Nf(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + Pn(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Er(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Er(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == 'function' && (e.onclick = us);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return $e(t), null;
    case 6:
      if (e && t.stateNode != null) $m(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(_(166));
        if (((n = Wn(Qo.current)), Wn(Mt.current), Ni(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[bt] = t),
            (i = r.nodeValue !== n) && ((e = nt), e !== null))
          )
            switch (e.tag) {
              case 3:
                Oi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Oi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[bt] = t),
            (t.stateNode = r);
      }
      return $e(t), null;
    case 13:
      if (
        (le(pe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ce && tt !== null && t.mode & 1 && !(t.flags & 128))
          em(), Ar(), (t.flags |= 98560), (i = !1);
        else if (((i = Ni(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(_(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(_(317));
            i[bt] = t;
          } else
            Ar(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          $e(t), (i = !1);
        } else Pt !== null && (Cu(Pt), (Pt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || pe.current & 1 ? Le === 0 && (Le = 3) : Nc())),
          t.updateQueue !== null && (t.flags |= 4),
          $e(t),
          null);
    case 4:
      return (
        $r(), hu(e, t), e === null && Vo(t.stateNode.containerInfo), $e(t), null
      );
    case 10:
      return dc(t.type._context), $e(t), null;
    case 17:
      return Ge(t.type) && cs(), $e(t), null;
    case 19:
      if ((le(pe), (i = t.memoizedState), i === null)) return $e(t), null;
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) ao(i, !1);
        else {
          if (Le !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = ys(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    ao(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return se(pe, (pe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            xe() > Ir &&
            ((t.flags |= 128), (r = !0), ao(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ys(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ao(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !s.alternate && !ce)
            )
              return $e(t), null;
          } else
            2 * xe() - i.renderingStartTime > Ir &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ao(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = xe()),
          (t.sibling = null),
          (n = pe.current),
          se(pe, r ? (n & 1) | 2 : n & 1),
          t)
        : ($e(t), null);
    case 22:
    case 23:
      return (
        Oc(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? et & 1073741824 && ($e(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : $e(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(_(156, t.tag));
}
function My(e, t) {
  switch ((lc(t), t.tag)) {
    case 1:
      return (
        Ge(t.type) && cs(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        $r(),
        le(qe),
        le(Ue),
        yc(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return gc(t), null;
    case 13:
      if (
        (le(pe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(_(340));
        Ar();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return le(pe), null;
    case 4:
      return $r(), null;
    case 10:
      return dc(t.type._context), null;
    case 22:
    case 23:
      return Oc(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var bi = !1,
  Ie = !1,
  $y = typeof WeakSet == 'function' ? WeakSet : Set,
  A = null;
function Sr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        ge(e, t, r);
      }
    else n.current = null;
}
function mu(e, t, n) {
  try {
    n();
  } catch (r) {
    ge(e, t, r);
  }
}
var vd = !1;
function Fy(e, t) {
  if (((Xl = ss), (e = zh()), sc(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var w;
              f !== n || (o !== 0 && f.nodeType !== 3) || (a = s + o),
                f !== i || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (w = f.firstChild) !== null;

            )
              (d = f), (f = w);
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++u === o && (a = s),
                d === i && ++c === r && (l = s),
                (w = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = w;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Zl = { focusedElem: e, selectionRange: n }, ss = !1, A = t; A !== null; )
    if (((t = A), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (A = e);
    else
      for (; A !== null; ) {
        t = A;
        try {
          var p = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (p !== null) {
                  var y = p.memoizedProps,
                    S = p.memoizedState,
                    g = t.stateNode,
                    h = g.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : Ct(t.type, y),
                      S
                    );
                  g.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = '')
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(_(163));
            }
        } catch (m) {
          ge(t, t.return, m);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (A = e);
          break;
        }
        A = t.return;
      }
  return (p = vd), (vd = !1), p;
}
function _o(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && mu(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Js(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function gu(e) {
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
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function Fm(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Fm(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[bt], delete t[Wo], delete t[nu], delete t[Sy], delete t[xy])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Im(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function wd(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Im(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function yu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = us));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (yu(e, t, n), e = e.sibling; e !== null; ) yu(e, t, n), (e = e.sibling);
}
function vu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (vu(e, t, n), e = e.sibling; e !== null; ) vu(e, t, n), (e = e.sibling);
}
var be = null,
  Et = !1;
function on(e, t, n) {
  for (n = n.child; n !== null; ) Um(e, t, n), (n = n.sibling);
}
function Um(e, t, n) {
  if (At && typeof At.onCommitFiberUnmount == 'function')
    try {
      At.onCommitFiberUnmount(Us, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ie || Sr(n, t);
    case 6:
      var r = be,
        o = Et;
      (be = null),
        on(e, t, n),
        (be = r),
        (Et = o),
        be !== null &&
          (Et
            ? ((e = be),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : be.removeChild(n.stateNode));
      break;
    case 18:
      be !== null &&
        (Et
          ? ((e = be),
            (n = n.stateNode),
            e.nodeType === 8
              ? tl(e.parentNode, n)
              : e.nodeType === 1 && tl(e, n),
            Uo(e))
          : tl(be, n.stateNode));
      break;
    case 4:
      (r = be),
        (o = Et),
        (be = n.stateNode.containerInfo),
        (Et = !0),
        on(e, t, n),
        (be = r),
        (Et = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ie &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          (i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && mu(n, t, s),
            (o = o.next);
        } while (o !== r);
      }
      on(e, t, n);
      break;
    case 1:
      if (
        !Ie &&
        (Sr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          ge(n, t, a);
        }
      on(e, t, n);
      break;
    case 21:
      on(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ie = (r = Ie) || n.memoizedState !== null), on(e, t, n), (Ie = r))
        : on(e, t, n);
      break;
    default:
      on(e, t, n);
  }
}
function Sd(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new $y()),
      t.forEach(function (r) {
        var o = Qy.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function xt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (be = a.stateNode), (Et = !1);
              break e;
            case 3:
              (be = a.stateNode.containerInfo), (Et = !0);
              break e;
            case 4:
              (be = a.stateNode.containerInfo), (Et = !0);
              break e;
          }
          a = a.return;
        }
        if (be === null) throw Error(_(160));
        Um(i, s, o), (be = null), (Et = !1);
        var l = o.alternate;
        l !== null && (l.return = null), (o.return = null);
      } catch (u) {
        ge(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) zm(t, e), (t = t.sibling);
}
function zm(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((xt(t, e), _t(e), r & 4)) {
        try {
          _o(3, e, e.return), Js(3, e);
        } catch (y) {
          ge(e, e.return, y);
        }
        try {
          _o(5, e, e.return);
        } catch (y) {
          ge(e, e.return, y);
        }
      }
      break;
    case 1:
      xt(t, e), _t(e), r & 512 && n !== null && Sr(n, n.return);
      break;
    case 5:
      if (
        (xt(t, e),
        _t(e),
        r & 512 && n !== null && Sr(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Mo(o, '');
        } catch (y) {
          ge(e, e.return, y);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === 'input' && i.type === 'radio' && i.name != null && lh(o, i),
              Bl(a, s);
            var u = Bl(a, i);
            for (s = 0; s < l.length; s += 2) {
              var c = l[s],
                f = l[s + 1];
              c === 'style'
                ? ph(o, f)
                : c === 'dangerouslySetInnerHTML'
                  ? fh(o, f)
                  : c === 'children'
                    ? Mo(o, f)
                    : Qu(o, c, f, u);
            }
            switch (a) {
              case 'input':
                $l(o, i);
                break;
              case 'textarea':
                uh(o, i);
                break;
              case 'select':
                var d = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var w = i.value;
                w != null
                  ? Er(o, !!i.multiple, w, !1)
                  : d !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Er(o, !!i.multiple, i.defaultValue, !0)
                      : Er(o, !!i.multiple, i.multiple ? [] : '', !1));
            }
            o[Wo] = i;
          } catch (y) {
            ge(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((xt(t, e), _t(e), r & 4)) {
        if (e.stateNode === null) throw Error(_(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (y) {
          ge(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (xt(t, e), _t(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Uo(t.containerInfo);
        } catch (y) {
          ge(e, e.return, y);
        }
      break;
    case 4:
      xt(t, e), _t(e);
      break;
    case 13:
      xt(t, e),
        _t(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Rc = xe())),
        r & 4 && Sd(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ie = (u = Ie) || c), xt(t, e), (Ie = u)) : xt(t, e),
        _t(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (A = e, c = e.child; c !== null; ) {
            for (f = A = c; A !== null; ) {
              switch (((d = A), (w = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  _o(4, d, d.return);
                  break;
                case 1:
                  Sr(d, d.return);
                  var p = d.stateNode;
                  if (typeof p.componentWillUnmount == 'function') {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (p.props = t.memoizedProps),
                        (p.state = t.memoizedState),
                        p.componentWillUnmount();
                    } catch (y) {
                      ge(r, n, y);
                    }
                  }
                  break;
                case 5:
                  Sr(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    Cd(f);
                    continue;
                  }
              }
              w !== null ? ((w.return = d), (A = w)) : Cd(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (o = f.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((a = f.stateNode),
                      (l = f.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty('display')
                          ? l.display
                          : null),
                      (a.style.display = dh('display', s)));
              } catch (y) {
                ge(e, e.return, y);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? '' : f.memoizedProps;
              } catch (y) {
                ge(e, e.return, y);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      xt(t, e), _t(e), r & 4 && Sd(e);
      break;
    case 21:
      break;
    default:
      xt(t, e), _t(e);
  }
}
function _t(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Im(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(_(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Mo(o, ''), (r.flags &= -33));
          var i = wd(e);
          vu(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = wd(e);
          yu(e, a, s);
          break;
        default:
          throw Error(_(161));
      }
    } catch (l) {
      ge(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Iy(e, t, n) {
  (A = e), Bm(e);
}
function Bm(e, t, n) {
  for (var r = (e.mode & 1) !== 0; A !== null; ) {
    var o = A,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || bi;
      if (!s) {
        var a = o.alternate,
          l = (a !== null && a.memoizedState !== null) || Ie;
        a = bi;
        var u = Ie;
        if (((bi = s), (Ie = l) && !u))
          for (A = o; A !== null; )
            (s = A),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Ed(o)
                : l !== null
                  ? ((l.return = s), (A = l))
                  : Ed(o);
        for (; i !== null; ) (A = i), Bm(i), (i = i.sibling);
        (A = o), (bi = a), (Ie = u);
      }
      xd(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (A = i)) : xd(e);
  }
}
function xd(e) {
  for (; A !== null; ) {
    var t = A;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ie || Js(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ie)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ct(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && od(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                od(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    l.autoFocus && n.focus();
                    break;
                  case 'img':
                    l.src && (n.src = l.src);
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
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && Uo(f);
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
              throw Error(_(163));
          }
        Ie || (t.flags & 512 && gu(t));
      } catch (d) {
        ge(t, t.return, d);
      }
    }
    if (t === e) {
      A = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (A = n);
      break;
    }
    A = t.return;
  }
}
function Cd(e) {
  for (; A !== null; ) {
    var t = A;
    if (t === e) {
      A = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (A = n);
      break;
    }
    A = t.return;
  }
}
function Ed(e) {
  for (; A !== null; ) {
    var t = A;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Js(4, t);
          } catch (l) {
            ge(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              ge(t, o, l);
            }
          }
          var i = t.return;
          try {
            gu(t);
          } catch (l) {
            ge(t, i, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            gu(t);
          } catch (l) {
            ge(t, s, l);
          }
      }
    } catch (l) {
      ge(t, t.return, l);
    }
    if (t === e) {
      A = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (A = a);
      break;
    }
    A = t.return;
  }
}
var Uy = Math.ceil,
  Ss = Zt.ReactCurrentDispatcher,
  kc = Zt.ReactCurrentOwner,
  ht = Zt.ReactCurrentBatchConfig,
  J = 0,
  Ne = null,
  Ee = null,
  je = 0,
  et = 0,
  xr = Tn(0),
  Le = 0,
  Yo = null,
  Xn = 0,
  qs = 0,
  Pc = 0,
  To = null,
  Qe = null,
  Rc = 0,
  Ir = 1 / 0,
  zt = null,
  xs = !1,
  wu = null,
  Sn = null,
  ji = !1,
  hn = null,
  Cs = 0,
  bo = 0,
  Su = null,
  Ki = -1,
  Qi = 0;
function He() {
  return J & 6 ? xe() : Ki !== -1 ? Ki : (Ki = xe());
}
function xn(e) {
  return e.mode & 1
    ? J & 2 && je !== 0
      ? je & -je
      : Ey.transition !== null
        ? (Qi === 0 && (Qi = Ph()), Qi)
        : ((e = Y),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : bh(e.type))),
          e)
    : 1;
}
function Ot(e, t, n, r) {
  if (50 < bo) throw ((bo = 0), (Su = null), Error(_(185)));
  ii(e, n, r),
    (!(J & 2) || e !== Ne) &&
      (e === Ne && (!(J & 2) && (qs |= n), Le === 4 && fn(e, je)),
      Ye(e, r),
      n === 1 && J === 0 && !(t.mode & 1) && ((Ir = xe() + 500), Ws && bn()));
}
function Ye(e, t) {
  var n = e.callbackNode;
  E0(e, t);
  var r = is(e, e === Ne ? je : 0);
  if (r === 0)
    n !== null && bf(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && bf(n), t === 1))
      e.tag === 0 ? Cy(kd.bind(null, e)) : Yh(kd.bind(null, e)),
        vy(function () {
          !(J & 6) && bn();
        }),
        (n = null);
    else {
      switch (Rh(r)) {
        case 1:
          n = Xu;
          break;
        case 4:
          n = Eh;
          break;
        case 16:
          n = os;
          break;
        case 536870912:
          n = kh;
          break;
        default:
          n = os;
      }
      n = Gm(n, Vm.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Vm(e, t) {
  if (((Ki = -1), (Qi = 0), J & 6)) throw Error(_(327));
  var n = e.callbackNode;
  if (Or() && e.callbackNode !== n) return null;
  var r = is(e, e === Ne ? je : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Es(e, r);
  else {
    t = r;
    var o = J;
    J |= 2;
    var i = Wm();
    (Ne !== e || je !== t) && ((zt = null), (Ir = xe() + 500), Qn(e, t));
    do
      try {
        Vy();
        break;
      } catch (a) {
        Hm(e, a);
      }
    while (1);
    fc(),
      (Ss.current = i),
      (J = o),
      Ee !== null ? (t = 0) : ((Ne = null), (je = 0), (t = Le));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Ql(e)), o !== 0 && ((r = o), (t = xu(e, o)))), t === 1)
    )
      throw ((n = Yo), Qn(e, 0), fn(e, r), Ye(e, xe()), n);
    if (t === 6) fn(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !zy(o) &&
          ((t = Es(e, r)),
          t === 2 && ((i = Ql(e)), i !== 0 && ((r = i), (t = xu(e, i)))),
          t === 1))
      )
        throw ((n = Yo), Qn(e, 0), fn(e, r), Ye(e, xe()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(_(345));
        case 2:
          zn(e, Qe, zt);
          break;
        case 3:
          if (
            (fn(e, r), (r & 130023424) === r && ((t = Rc + 500 - xe()), 10 < t))
          ) {
            if (is(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              He(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = tu(zn.bind(null, e, Qe, zt), t);
            break;
          }
          zn(e, Qe, zt);
          break;
        case 4:
          if ((fn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - Lt(r);
            (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
          }
          if (
            ((r = o),
            (r = xe() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * Uy(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = tu(zn.bind(null, e, Qe, zt), r);
            break;
          }
          zn(e, Qe, zt);
          break;
        case 5:
          zn(e, Qe, zt);
          break;
        default:
          throw Error(_(329));
      }
    }
  }
  return Ye(e, xe()), e.callbackNode === n ? Vm.bind(null, e) : null;
}
function xu(e, t) {
  var n = To;
  return (
    e.current.memoizedState.isDehydrated && (Qn(e, t).flags |= 256),
    (e = Es(e, t)),
    e !== 2 && ((t = Qe), (Qe = n), t !== null && Cu(t)),
    e
  );
}
function Cu(e) {
  Qe === null ? (Qe = e) : Qe.push.apply(Qe, e);
}
function zy(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!Nt(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function fn(e, t) {
  for (
    t &= ~Pc,
      t &= ~qs,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Lt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function kd(e) {
  if (J & 6) throw Error(_(327));
  Or();
  var t = is(e, 0);
  if (!(t & 1)) return Ye(e, xe()), null;
  var n = Es(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ql(e);
    r !== 0 && ((t = r), (n = xu(e, r)));
  }
  if (n === 1) throw ((n = Yo), Qn(e, 0), fn(e, t), Ye(e, xe()), n);
  if (n === 6) throw Error(_(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    zn(e, Qe, zt),
    Ye(e, xe()),
    null
  );
}
function Lc(e, t) {
  var n = J;
  J |= 1;
  try {
    return e(t);
  } finally {
    (J = n), J === 0 && ((Ir = xe() + 500), Ws && bn());
  }
}
function Zn(e) {
  hn !== null && hn.tag === 0 && !(J & 6) && Or();
  var t = J;
  J |= 1;
  var n = ht.transition,
    r = Y;
  try {
    if (((ht.transition = null), (Y = 1), e)) return e();
  } finally {
    (Y = r), (ht.transition = n), (J = t), !(J & 6) && bn();
  }
}
function Oc() {
  (et = xr.current), le(xr);
}
function Qn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), yy(n)), Ee !== null))
    for (n = Ee.return; n !== null; ) {
      var r = n;
      switch ((lc(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && cs();
          break;
        case 3:
          $r(), le(qe), le(Ue), yc();
          break;
        case 5:
          gc(r);
          break;
        case 4:
          $r();
          break;
        case 13:
          le(pe);
          break;
        case 19:
          le(pe);
          break;
        case 10:
          dc(r.type._context);
          break;
        case 22:
        case 23:
          Oc();
      }
      n = n.return;
    }
  if (
    ((Ne = e),
    (Ee = e = Cn(e.current, null)),
    (je = et = t),
    (Le = 0),
    (Yo = null),
    (Pc = qs = Xn = 0),
    (Qe = To = null),
    Hn !== null)
  ) {
    for (t = 0; t < Hn.length; t++)
      if (((n = Hn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = o), (r.next = s);
        }
        n.pending = r;
      }
    Hn = null;
  }
  return e;
}
function Hm(e, t) {
  do {
    var n = Ee;
    try {
      if ((fc(), (Vi.current = ws), vs)) {
        for (var r = he.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        vs = !1;
      }
      if (
        ((Yn = 0),
        (Oe = Re = he = null),
        (No = !1),
        (Jo = 0),
        (kc.current = null),
        n === null || n.return === null)
      ) {
        (Le = 1), (Yo = t), (Ee = null);
        break;
      }
      e: {
        var i = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = je),
          (a.flags |= 32768),
          l !== null && typeof l == 'object' && typeof l.then == 'function')
        ) {
          var u = l,
            c = a,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var w = fd(s);
          if (w !== null) {
            (w.flags &= -257),
              dd(w, s, a, i, t),
              w.mode & 1 && cd(i, u, t),
              (t = w),
              (l = u);
            var p = t.updateQueue;
            if (p === null) {
              var y = new Set();
              y.add(l), (t.updateQueue = y);
            } else p.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              cd(i, u, t), Nc();
              break e;
            }
            l = Error(_(426));
          }
        } else if (ce && a.mode & 1) {
          var S = fd(s);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256),
              dd(S, s, a, i, t),
              uc(Fr(l, a));
            break e;
          }
        }
        (i = l = Fr(l, a)),
          Le !== 4 && (Le = 2),
          To === null ? (To = [i]) : To.push(i),
          (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var g = Lm(i, l, t);
              rd(i, g);
              break e;
            case 1:
              a = l;
              var h = i.type,
                v = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof h.getDerivedStateFromError == 'function' ||
                  (v !== null &&
                    typeof v.componentDidCatch == 'function' &&
                    (Sn === null || !Sn.has(v))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var m = Om(i, a, t);
                rd(i, m);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Qm(n);
    } catch (C) {
      (t = C), Ee === n && n !== null && (Ee = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Wm() {
  var e = Ss.current;
  return (Ss.current = ws), e === null ? ws : e;
}
function Nc() {
  (Le === 0 || Le === 3 || Le === 2) && (Le = 4),
    Ne === null || (!(Xn & 268435455) && !(qs & 268435455)) || fn(Ne, je);
}
function Es(e, t) {
  var n = J;
  J |= 2;
  var r = Wm();
  (Ne !== e || je !== t) && ((zt = null), Qn(e, t));
  do
    try {
      By();
      break;
    } catch (o) {
      Hm(e, o);
    }
  while (1);
  if ((fc(), (J = n), (Ss.current = r), Ee !== null)) throw Error(_(261));
  return (Ne = null), (je = 0), Le;
}
function By() {
  for (; Ee !== null; ) Km(Ee);
}
function Vy() {
  for (; Ee !== null && !h0(); ) Km(Ee);
}
function Km(e) {
  var t = qm(e.alternate, e, et);
  (e.memoizedProps = e.pendingProps),
    t === null ? Qm(e) : (Ee = t),
    (kc.current = null);
}
function Qm(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = My(n, t)), n !== null)) {
        (n.flags &= 32767), (Ee = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Le = 6), (Ee = null);
        return;
      }
    } else if (((n = Ay(n, t, et)), n !== null)) {
      Ee = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Ee = t;
      return;
    }
    Ee = t = e;
  } while (t !== null);
  Le === 0 && (Le = 5);
}
function zn(e, t, n) {
  var r = Y,
    o = ht.transition;
  try {
    (ht.transition = null), (Y = 1), Hy(e, t, n, r);
  } finally {
    (ht.transition = o), (Y = r);
  }
  return null;
}
function Hy(e, t, n, r) {
  do Or();
  while (hn !== null);
  if (J & 6) throw Error(_(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(_(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (k0(e, i),
    e === Ne && ((Ee = Ne = null), (je = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ji ||
      ((ji = !0),
      Gm(os, function () {
        return Or(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = ht.transition), (ht.transition = null);
    var s = Y;
    Y = 1;
    var a = J;
    (J |= 4),
      (kc.current = null),
      Fy(e, n),
      zm(n, e),
      cy(Zl),
      (ss = !!Xl),
      (Zl = Xl = null),
      (e.current = n),
      Iy(n),
      m0(),
      (J = a),
      (Y = s),
      (ht.transition = i);
  } else e.current = n;
  if (
    (ji && ((ji = !1), (hn = e), (Cs = o)),
    (i = e.pendingLanes),
    i === 0 && (Sn = null),
    v0(n.stateNode),
    Ye(e, xe()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (xs) throw ((xs = !1), (e = wu), (wu = null), e);
  return (
    Cs & 1 && e.tag !== 0 && Or(),
    (i = e.pendingLanes),
    i & 1 ? (e === Su ? bo++ : ((bo = 0), (Su = e))) : (bo = 0),
    bn(),
    null
  );
}
function Or() {
  if (hn !== null) {
    var e = Rh(Cs),
      t = ht.transition,
      n = Y;
    try {
      if (((ht.transition = null), (Y = 16 > e ? 16 : e), hn === null))
        var r = !1;
      else {
        if (((e = hn), (hn = null), (Cs = 0), J & 6)) throw Error(_(331));
        var o = J;
        for (J |= 4, A = e.current; A !== null; ) {
          var i = A,
            s = i.child;
          if (A.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (A = u; A !== null; ) {
                  var c = A;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      _o(8, c, i);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (A = f);
                  else
                    for (; A !== null; ) {
                      c = A;
                      var d = c.sibling,
                        w = c.return;
                      if ((Fm(c), c === u)) {
                        A = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = w), (A = d);
                        break;
                      }
                      A = w;
                    }
                }
              }
              var p = i.alternate;
              if (p !== null) {
                var y = p.child;
                if (y !== null) {
                  p.child = null;
                  do {
                    var S = y.sibling;
                    (y.sibling = null), (y = S);
                  } while (y !== null);
                }
              }
              A = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (A = s);
          else
            e: for (; A !== null; ) {
              if (((i = A), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    _o(9, i, i.return);
                }
              var g = i.sibling;
              if (g !== null) {
                (g.return = i.return), (A = g);
                break e;
              }
              A = i.return;
            }
        }
        var h = e.current;
        for (A = h; A !== null; ) {
          s = A;
          var v = s.child;
          if (s.subtreeFlags & 2064 && v !== null) (v.return = s), (A = v);
          else
            e: for (s = h; A !== null; ) {
              if (((a = A), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Js(9, a);
                  }
                } catch (C) {
                  ge(a, a.return, C);
                }
              if (a === s) {
                A = null;
                break e;
              }
              var m = a.sibling;
              if (m !== null) {
                (m.return = a.return), (A = m);
                break e;
              }
              A = a.return;
            }
        }
        if (
          ((J = o), bn(), At && typeof At.onPostCommitFiberRoot == 'function')
        )
          try {
            At.onPostCommitFiberRoot(Us, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Y = n), (ht.transition = t);
    }
  }
  return !1;
}
function Pd(e, t, n) {
  (t = Fr(n, t)),
    (t = Lm(e, t, 1)),
    (e = wn(e, t, 1)),
    (t = He()),
    e !== null && (ii(e, 1, t), Ye(e, t));
}
function ge(e, t, n) {
  if (e.tag === 3) Pd(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Pd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (Sn === null || !Sn.has(r)))
        ) {
          (e = Fr(n, e)),
            (e = Om(t, e, 1)),
            (t = wn(t, e, 1)),
            (e = He()),
            t !== null && (ii(t, 1, e), Ye(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Wy(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = He()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ne === e &&
      (je & n) === n &&
      (Le === 4 || (Le === 3 && (je & 130023424) === je && 500 > xe() - Rc)
        ? Qn(e, 0)
        : (Pc |= n)),
    Ye(e, t);
}
function Jm(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ei), (Ei <<= 1), !(Ei & 130023424) && (Ei = 4194304))
      : (t = 1));
  var n = He();
  (e = Gt(e, t)), e !== null && (ii(e, t, n), Ye(e, n));
}
function Ky(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Jm(e, n);
}
function Qy(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(_(314));
  }
  r !== null && r.delete(t), Jm(e, n);
}
var qm;
qm = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || qe.current) Je = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Je = !1), Dy(e, t, n);
      Je = !!(e.flags & 131072);
    }
  else (Je = !1), ce && t.flags & 1048576 && Xh(t, ps, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Wi(e, t), (e = t.pendingProps);
      var o = Dr(t, Ue.current);
      Lr(t, n), (o = wc(null, t, r, e, o, n));
      var i = Sc();
      return (
        (t.flags |= 1),
        typeof o == 'object' &&
        o !== null &&
        typeof o.render == 'function' &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ge(r) ? ((i = !0), fs(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            hc(t),
            (o.updater = Ks),
            (t.stateNode = o),
            (o._reactInternals = t),
            lu(t, r, e, n),
            (t = fu(null, t, r, !0, i, n)))
          : ((t.tag = 0), ce && i && ac(t), Ve(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Wi(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = qy(r)),
          (e = Ct(r, e)),
          o)
        ) {
          case 0:
            t = cu(null, t, r, e, n);
            break e;
          case 1:
            t = md(null, t, r, e, n);
            break e;
          case 11:
            t = pd(null, t, r, e, n);
            break e;
          case 14:
            t = hd(null, t, r, Ct(r.type, e), n);
            break e;
        }
        throw Error(_(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ct(r, o)),
        cu(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ct(r, o)),
        md(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((bm(t), e === null)) throw Error(_(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          nm(e, t),
          gs(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = Fr(Error(_(423)), t)), (t = gd(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Fr(Error(_(424)), t)), (t = gd(e, t, r, n, o));
            break e;
          } else
            for (
              tt = vn(t.stateNode.containerInfo.firstChild),
                nt = t,
                ce = !0,
                Pt = null,
                n = sm(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Ar(), r === o)) {
            t = Yt(e, t, n);
            break e;
          }
          Ve(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        am(t),
        e === null && iu(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        eu(r, o) ? (s = null) : i !== null && eu(r, i) && (t.flags |= 32),
        Tm(e, t),
        Ve(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && iu(t), null;
    case 13:
      return jm(e, t, n);
    case 4:
      return (
        mc(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Mr(t, null, r, n)) : Ve(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ct(r, o)),
        pd(e, t, r, o, n)
      );
    case 7:
      return Ve(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ve(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ve(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          se(hs, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (Nt(i.value, s)) {
            if (i.children === o.children && !qe.current) {
              t = Yt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                s = i.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      (l = Wt(-1, n & -n)), (l.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (i.lanes |= n),
                      (l = i.alternate),
                      l !== null && (l.lanes |= n),
                      su(i.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(_(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  su(s, n, t),
                  (s = i.sibling);
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    (i.return = s.return), (s = i);
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        Ve(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Lr(t, n),
        (o = gt(o)),
        (r = r(o)),
        (t.flags |= 1),
        Ve(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = Ct(r, t.pendingProps)),
        (o = Ct(r.type, o)),
        hd(e, t, r, o, n)
      );
    case 15:
      return Nm(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ct(r, o)),
        Wi(e, t),
        (t.tag = 1),
        Ge(r) ? ((e = !0), fs(t)) : (e = !1),
        Lr(t, n),
        om(t, r, o),
        lu(t, r, o, n),
        fu(null, t, r, !0, e, n)
      );
    case 19:
      return Dm(e, t, n);
    case 22:
      return _m(e, t, n);
  }
  throw Error(_(156, t.tag));
};
function Gm(e, t) {
  return Ch(e, t);
}
function Jy(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function pt(e, t, n, r) {
  return new Jy(e, t, n, r);
}
function _c(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function qy(e) {
  if (typeof e == 'function') return _c(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === qu)) return 11;
    if (e === Gu) return 14;
  }
  return 2;
}
function Cn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = pt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ji(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == 'function')) _c(e) && (s = 1);
  else if (typeof e == 'string') s = 5;
  else
    e: switch (e) {
      case fr:
        return Jn(n.children, o, i, t);
      case Ju:
        (s = 8), (o |= 8);
        break;
      case bl:
        return (
          (e = pt(12, n, t, o | 2)), (e.elementType = bl), (e.lanes = i), e
        );
      case jl:
        return (e = pt(13, n, t, o)), (e.elementType = jl), (e.lanes = i), e;
      case Dl:
        return (e = pt(19, n, t, o)), (e.elementType = Dl), (e.lanes = i), e;
      case ih:
        return Gs(n, o, i, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case rh:
              s = 10;
              break e;
            case oh:
              s = 9;
              break e;
            case qu:
              s = 11;
              break e;
            case Gu:
              s = 14;
              break e;
            case ln:
              (s = 16), (r = null);
              break e;
          }
        throw Error(_(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = pt(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Jn(e, t, n, r) {
  return (e = pt(7, e, r, t)), (e.lanes = n), e;
}
function Gs(e, t, n, r) {
  return (
    (e = pt(22, e, r, t)),
    (e.elementType = ih),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ul(e, t, n) {
  return (e = pt(6, e, null, t)), (e.lanes = n), e;
}
function cl(e, t, n) {
  return (
    (t = pt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Gy(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ha(0)),
    (this.expirationTimes = Ha(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ha(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Tc(e, t, n, r, o, i, s, a, l) {
  return (
    (e = new Gy(e, t, n, a, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = pt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    hc(i),
    e
  );
}
function Yy(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: cr,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Ym(e) {
  if (!e) return Rn;
  e = e._reactInternals;
  e: {
    if (or(e) !== e || e.tag !== 1) throw Error(_(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ge(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(_(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ge(n)) return Gh(e, n, t);
  }
  return t;
}
function Xm(e, t, n, r, o, i, s, a, l) {
  return (
    (e = Tc(n, r, !0, e, o, i, s, a, l)),
    (e.context = Ym(null)),
    (n = e.current),
    (r = He()),
    (o = xn(n)),
    (i = Wt(r, o)),
    (i.callback = t ?? null),
    wn(n, i, o),
    (e.current.lanes = o),
    ii(e, o, r),
    Ye(e, r),
    e
  );
}
function Ys(e, t, n, r) {
  var o = t.current,
    i = He(),
    s = xn(o);
  return (
    (n = Ym(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Wt(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = wn(o, t, s)),
    e !== null && (Ot(e, o, s, i), Bi(e, o, s)),
    s
  );
}
function ks(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Rd(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function bc(e, t) {
  Rd(e, t), (e = e.alternate) && Rd(e, t);
}
function Xy() {
  return null;
}
var Zm =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function jc(e) {
  this._internalRoot = e;
}
Xs.prototype.render = jc.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(_(409));
  Ys(e, t, null, null);
};
Xs.prototype.unmount = jc.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Zn(function () {
      Ys(null, e, null, null);
    }),
      (t[qt] = null);
  }
};
function Xs(e) {
  this._internalRoot = e;
}
Xs.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Nh();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < cn.length && t !== 0 && t < cn[n].priority; n++);
    cn.splice(n, 0, e), n === 0 && Th(e);
  }
};
function Dc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Zs(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function Ld() {}
function Zy(e, t, n, r, o) {
  if (o) {
    if (typeof r == 'function') {
      var i = r;
      r = function () {
        var u = ks(s);
        i.call(u);
      };
    }
    var s = Xm(t, r, e, 0, null, !1, !1, '', Ld);
    return (
      (e._reactRootContainer = s),
      (e[qt] = s.current),
      Vo(e.nodeType === 8 ? e.parentNode : e),
      Zn(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == 'function') {
    var a = r;
    r = function () {
      var u = ks(l);
      a.call(u);
    };
  }
  var l = Tc(e, 0, !1, null, null, !1, !1, '', Ld);
  return (
    (e._reactRootContainer = l),
    (e[qt] = l.current),
    Vo(e.nodeType === 8 ? e.parentNode : e),
    Zn(function () {
      Ys(t, l, n, r);
    }),
    l
  );
}
function ea(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == 'function') {
      var a = o;
      o = function () {
        var l = ks(s);
        a.call(l);
      };
    }
    Ys(t, s, e, o);
  } else s = Zy(n, t, e, o, r);
  return ks(s);
}
Lh = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = xo(t.pendingLanes);
        n !== 0 &&
          (Zu(t, n | 1), Ye(t, xe()), !(J & 6) && ((Ir = xe() + 500), bn()));
      }
      break;
    case 13:
      Zn(function () {
        var r = Gt(e, 1);
        if (r !== null) {
          var o = He();
          Ot(r, e, 1, o);
        }
      }),
        bc(e, 1);
  }
};
ec = function (e) {
  if (e.tag === 13) {
    var t = Gt(e, 134217728);
    if (t !== null) {
      var n = He();
      Ot(t, e, 134217728, n);
    }
    bc(e, 134217728);
  }
};
Oh = function (e) {
  if (e.tag === 13) {
    var t = xn(e),
      n = Gt(e, t);
    if (n !== null) {
      var r = He();
      Ot(n, e, t, r);
    }
    bc(e, t);
  }
};
Nh = function () {
  return Y;
};
_h = function (e, t) {
  var n = Y;
  try {
    return (Y = e), t();
  } finally {
    Y = n;
  }
};
Hl = function (e, t, n) {
  switch (t) {
    case 'input':
      if (($l(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Hs(r);
            if (!o) throw Error(_(90));
            ah(r), $l(r, o);
          }
        }
      }
      break;
    case 'textarea':
      uh(e, n);
      break;
    case 'select':
      (t = n.value), t != null && Er(e, !!n.multiple, t, !1);
  }
};
gh = Lc;
yh = Zn;
var ev = { usingClientEntryPoint: !1, Events: [ai, mr, Hs, hh, mh, Lc] },
  lo = {
    findFiberByHostInstance: Vn,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  tv = {
    bundleType: lo.bundleType,
    version: lo.version,
    rendererPackageName: lo.rendererPackageName,
    rendererConfig: lo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Zt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Sh(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: lo.findFiberByHostInstance || Xy,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Di = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Di.isDisabled && Di.supportsFiber)
    try {
      (Us = Di.inject(tv)), (At = Di);
    } catch {}
}
it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ev;
it.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Dc(t)) throw Error(_(200));
  return Yy(e, t, null, n);
};
it.createRoot = function (e, t) {
  if (!Dc(e)) throw Error(_(299));
  var n = !1,
    r = '',
    o = Zm;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Tc(e, 1, !1, null, null, n, !1, r, o)),
    (e[qt] = t.current),
    Vo(e.nodeType === 8 ? e.parentNode : e),
    new jc(t)
  );
};
it.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(_(188))
      : ((e = Object.keys(e).join(',')), Error(_(268, e)));
  return (e = Sh(t)), (e = e === null ? null : e.stateNode), e;
};
it.flushSync = function (e) {
  return Zn(e);
};
it.hydrate = function (e, t, n) {
  if (!Zs(t)) throw Error(_(200));
  return ea(null, e, t, !0, n);
};
it.hydrateRoot = function (e, t, n) {
  if (!Dc(e)) throw Error(_(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = '',
    s = Zm;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Xm(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[qt] = t.current),
    Vo(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Xs(t);
};
it.render = function (e, t, n) {
  if (!Zs(t)) throw Error(_(200));
  return ea(null, e, t, !1, n);
};
it.unmountComponentAtNode = function (e) {
  if (!Zs(e)) throw Error(_(40));
  return e._reactRootContainer
    ? (Zn(function () {
        ea(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[qt] = null);
        });
      }),
      !0)
    : !1;
};
it.unstable_batchedUpdates = Lc;
it.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Zs(n)) throw Error(_(200));
  if (e == null || e._reactInternals === void 0) throw Error(_(38));
  return ea(e, t, n, !1, r);
};
it.version = '18.2.0-next-9e3b772b8-20220608';
function eg() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(eg);
    } catch (e) {
      console.error(e);
    }
}
eg(), (Xp.exports = it);
var Ac = Xp.exports,
  Od = Ac;
(_l.createRoot = Od.createRoot), (_l.hydrateRoot = Od.hydrateRoot);
var tg = { exports: {} },
  ng = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ur = k;
function nv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var rv = typeof Object.is == 'function' ? Object.is : nv,
  ov = Ur.useState,
  iv = Ur.useEffect,
  sv = Ur.useLayoutEffect,
  av = Ur.useDebugValue;
function lv(e, t) {
  var n = t(),
    r = ov({ inst: { value: n, getSnapshot: t } }),
    o = r[0].inst,
    i = r[1];
  return (
    sv(
      function () {
        (o.value = n), (o.getSnapshot = t), fl(o) && i({ inst: o });
      },
      [e, n, t]
    ),
    iv(
      function () {
        return (
          fl(o) && i({ inst: o }),
          e(function () {
            fl(o) && i({ inst: o });
          })
        );
      },
      [e]
    ),
    av(n),
    n
  );
}
function fl(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !rv(e, n);
  } catch {
    return !0;
  }
}
function uv(e, t) {
  return t();
}
var cv =
  typeof window > 'u' ||
  typeof window.document > 'u' ||
  typeof window.document.createElement > 'u'
    ? uv
    : lv;
ng.useSyncExternalStore =
  Ur.useSyncExternalStore !== void 0 ? Ur.useSyncExternalStore : cv;
tg.exports = ng;
var fv = tg.exports,
  rg = { exports: {} },
  og = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ta = k,
  dv = fv;
function pv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var hv = typeof Object.is == 'function' ? Object.is : pv,
  mv = dv.useSyncExternalStore,
  gv = ta.useRef,
  yv = ta.useEffect,
  vv = ta.useMemo,
  wv = ta.useDebugValue;
og.useSyncExternalStoreWithSelector = function (e, t, n, r, o) {
  var i = gv(null);
  if (i.current === null) {
    var s = { hasValue: !1, value: null };
    i.current = s;
  } else s = i.current;
  i = vv(
    function () {
      function l(w) {
        if (!u) {
          if (((u = !0), (c = w), (w = r(w)), o !== void 0 && s.hasValue)) {
            var p = s.value;
            if (o(p, w)) return (f = p);
          }
          return (f = w);
        }
        if (((p = f), hv(c, w))) return p;
        var y = r(w);
        return o !== void 0 && o(p, y) ? p : ((c = w), (f = y));
      }
      var u = !1,
        c,
        f,
        d = n === void 0 ? null : n;
      return [
        function () {
          return l(t());
        },
        d === null
          ? void 0
          : function () {
              return l(d());
            },
      ];
    },
    [t, n, r, o]
  );
  var a = mv(e, i[0], i[1]);
  return (
    yv(
      function () {
        (s.hasValue = !0), (s.value = a);
      },
      [a]
    ),
    wv(a),
    a
  );
};
rg.exports = og;
var Sv = rg.exports;
function xv(e) {
  e();
}
let ig = xv;
const Cv = (e) => (ig = e),
  Ev = () => ig,
  Nd = Symbol.for('react-redux-context'),
  _d = typeof globalThis < 'u' ? globalThis : {};
function kv() {
  var e;
  if (!k.createContext) return {};
  const t = (e = _d[Nd]) != null ? e : (_d[Nd] = new Map());
  let n = t.get(k.createContext);
  return n || ((n = k.createContext(null)), t.set(k.createContext, n)), n;
}
const Ln = kv();
function Mc(e = Ln) {
  return function () {
    return k.useContext(e);
  };
}
const sg = Mc(),
  Pv = () => {
    throw new Error('uSES not initialized!');
  };
let ag = Pv;
const Rv = (e) => {
    ag = e;
  },
  Lv = (e, t) => e === t;
function Ov(e = Ln) {
  const t = e === Ln ? sg : Mc(e);
  return function (r, o = {}) {
    const {
        equalityFn: i = Lv,
        stabilityCheck: s = void 0,
        noopCheck: a = void 0,
      } = typeof o == 'function' ? { equalityFn: o } : o,
      {
        store: l,
        subscription: u,
        getServerState: c,
        stabilityCheck: f,
        noopCheck: d,
      } = t();
    k.useRef(!0);
    const w = k.useCallback(
        {
          [r.name](y) {
            return r(y);
          },
        }[r.name],
        [r, f, s]
      ),
      p = ag(u.addNestedSub, l.getState, c || l.getState, w, i);
    return k.useDebugValue(p), p;
  };
}
const jn = Ov();
var lg = { exports: {} },
  X = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _e = typeof Symbol == 'function' && Symbol.for,
  $c = _e ? Symbol.for('react.element') : 60103,
  Fc = _e ? Symbol.for('react.portal') : 60106,
  na = _e ? Symbol.for('react.fragment') : 60107,
  ra = _e ? Symbol.for('react.strict_mode') : 60108,
  oa = _e ? Symbol.for('react.profiler') : 60114,
  ia = _e ? Symbol.for('react.provider') : 60109,
  sa = _e ? Symbol.for('react.context') : 60110,
  Ic = _e ? Symbol.for('react.async_mode') : 60111,
  aa = _e ? Symbol.for('react.concurrent_mode') : 60111,
  la = _e ? Symbol.for('react.forward_ref') : 60112,
  ua = _e ? Symbol.for('react.suspense') : 60113,
  Nv = _e ? Symbol.for('react.suspense_list') : 60120,
  ca = _e ? Symbol.for('react.memo') : 60115,
  fa = _e ? Symbol.for('react.lazy') : 60116,
  _v = _e ? Symbol.for('react.block') : 60121,
  Tv = _e ? Symbol.for('react.fundamental') : 60117,
  bv = _e ? Symbol.for('react.responder') : 60118,
  jv = _e ? Symbol.for('react.scope') : 60119;
function at(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case $c:
        switch (((e = e.type), e)) {
          case Ic:
          case aa:
          case na:
          case oa:
          case ra:
          case ua:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case sa:
              case la:
              case fa:
              case ca:
              case ia:
                return e;
              default:
                return t;
            }
        }
      case Fc:
        return t;
    }
  }
}
function ug(e) {
  return at(e) === aa;
}
X.AsyncMode = Ic;
X.ConcurrentMode = aa;
X.ContextConsumer = sa;
X.ContextProvider = ia;
X.Element = $c;
X.ForwardRef = la;
X.Fragment = na;
X.Lazy = fa;
X.Memo = ca;
X.Portal = Fc;
X.Profiler = oa;
X.StrictMode = ra;
X.Suspense = ua;
X.isAsyncMode = function (e) {
  return ug(e) || at(e) === Ic;
};
X.isConcurrentMode = ug;
X.isContextConsumer = function (e) {
  return at(e) === sa;
};
X.isContextProvider = function (e) {
  return at(e) === ia;
};
X.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === $c;
};
X.isForwardRef = function (e) {
  return at(e) === la;
};
X.isFragment = function (e) {
  return at(e) === na;
};
X.isLazy = function (e) {
  return at(e) === fa;
};
X.isMemo = function (e) {
  return at(e) === ca;
};
X.isPortal = function (e) {
  return at(e) === Fc;
};
X.isProfiler = function (e) {
  return at(e) === oa;
};
X.isStrictMode = function (e) {
  return at(e) === ra;
};
X.isSuspense = function (e) {
  return at(e) === ua;
};
X.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === na ||
    e === aa ||
    e === oa ||
    e === ra ||
    e === ua ||
    e === Nv ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === fa ||
        e.$$typeof === ca ||
        e.$$typeof === ia ||
        e.$$typeof === sa ||
        e.$$typeof === la ||
        e.$$typeof === Tv ||
        e.$$typeof === bv ||
        e.$$typeof === jv ||
        e.$$typeof === _v))
  );
};
X.typeOf = at;
lg.exports = X;
var Dv = lg.exports,
  cg = Dv,
  Av = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  Mv = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  fg = {};
fg[cg.ForwardRef] = Av;
fg[cg.Memo] = Mv;
var ee = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Uc = Symbol.for('react.element'),
  zc = Symbol.for('react.portal'),
  da = Symbol.for('react.fragment'),
  pa = Symbol.for('react.strict_mode'),
  ha = Symbol.for('react.profiler'),
  ma = Symbol.for('react.provider'),
  ga = Symbol.for('react.context'),
  $v = Symbol.for('react.server_context'),
  ya = Symbol.for('react.forward_ref'),
  va = Symbol.for('react.suspense'),
  wa = Symbol.for('react.suspense_list'),
  Sa = Symbol.for('react.memo'),
  xa = Symbol.for('react.lazy'),
  Fv = Symbol.for('react.offscreen'),
  dg;
dg = Symbol.for('react.module.reference');
function vt(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Uc:
        switch (((e = e.type), e)) {
          case da:
          case ha:
          case pa:
          case va:
          case wa:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case $v:
              case ga:
              case ya:
              case xa:
              case Sa:
              case ma:
                return e;
              default:
                return t;
            }
        }
      case zc:
        return t;
    }
  }
}
ee.ContextConsumer = ga;
ee.ContextProvider = ma;
ee.Element = Uc;
ee.ForwardRef = ya;
ee.Fragment = da;
ee.Lazy = xa;
ee.Memo = Sa;
ee.Portal = zc;
ee.Profiler = ha;
ee.StrictMode = pa;
ee.Suspense = va;
ee.SuspenseList = wa;
ee.isAsyncMode = function () {
  return !1;
};
ee.isConcurrentMode = function () {
  return !1;
};
ee.isContextConsumer = function (e) {
  return vt(e) === ga;
};
ee.isContextProvider = function (e) {
  return vt(e) === ma;
};
ee.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Uc;
};
ee.isForwardRef = function (e) {
  return vt(e) === ya;
};
ee.isFragment = function (e) {
  return vt(e) === da;
};
ee.isLazy = function (e) {
  return vt(e) === xa;
};
ee.isMemo = function (e) {
  return vt(e) === Sa;
};
ee.isPortal = function (e) {
  return vt(e) === zc;
};
ee.isProfiler = function (e) {
  return vt(e) === ha;
};
ee.isStrictMode = function (e) {
  return vt(e) === pa;
};
ee.isSuspense = function (e) {
  return vt(e) === va;
};
ee.isSuspenseList = function (e) {
  return vt(e) === wa;
};
ee.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === da ||
    e === ha ||
    e === pa ||
    e === va ||
    e === wa ||
    e === Fv ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === xa ||
        e.$$typeof === Sa ||
        e.$$typeof === ma ||
        e.$$typeof === ga ||
        e.$$typeof === ya ||
        e.$$typeof === dg ||
        e.getModuleId !== void 0))
  );
};
ee.typeOf = vt;
function Iv() {
  const e = Ev();
  let t = null,
    n = null;
  return {
    clear() {
      (t = null), (n = null);
    },
    notify() {
      e(() => {
        let r = t;
        for (; r; ) r.callback(), (r = r.next);
      });
    },
    get() {
      let r = [],
        o = t;
      for (; o; ) r.push(o), (o = o.next);
      return r;
    },
    subscribe(r) {
      let o = !0,
        i = (n = { callback: r, next: null, prev: n });
      return (
        i.prev ? (i.prev.next = i) : (t = i),
        function () {
          !o ||
            t === null ||
            ((o = !1),
            i.next ? (i.next.prev = i.prev) : (n = i.prev),
            i.prev ? (i.prev.next = i.next) : (t = i.next));
        }
      );
    },
  };
}
const Td = { notify() {}, get: () => [] };
function Uv(e, t) {
  let n,
    r = Td,
    o = 0,
    i = !1;
  function s(y) {
    c();
    const S = r.subscribe(y);
    let g = !1;
    return () => {
      g || ((g = !0), S(), f());
    };
  }
  function a() {
    r.notify();
  }
  function l() {
    p.onStateChange && p.onStateChange();
  }
  function u() {
    return i;
  }
  function c() {
    o++, n || ((n = t ? t.addNestedSub(l) : e.subscribe(l)), (r = Iv()));
  }
  function f() {
    o--, n && o === 0 && (n(), (n = void 0), r.clear(), (r = Td));
  }
  function d() {
    i || ((i = !0), c());
  }
  function w() {
    i && ((i = !1), f());
  }
  const p = {
    addNestedSub: s,
    notifyNestedSubs: a,
    handleChangeWrapper: l,
    isSubscribed: u,
    trySubscribe: d,
    tryUnsubscribe: w,
    getListeners: () => r,
  };
  return p;
}
const zv =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  Bv = zv ? k.useLayoutEffect : k.useEffect;
function Vv({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: o = 'once',
  noopCheck: i = 'once',
}) {
  const s = k.useMemo(() => {
      const u = Uv(e);
      return {
        store: e,
        subscription: u,
        getServerState: r ? () => r : void 0,
        stabilityCheck: o,
        noopCheck: i,
      };
    }, [e, r, o, i]),
    a = k.useMemo(() => e.getState(), [e]);
  Bv(() => {
    const { subscription: u } = s;
    return (
      (u.onStateChange = u.notifyNestedSubs),
      u.trySubscribe(),
      a !== e.getState() && u.notifyNestedSubs(),
      () => {
        u.tryUnsubscribe(), (u.onStateChange = void 0);
      }
    );
  }, [s, a]);
  const l = t || Ln;
  return k.createElement(l.Provider, { value: s }, n);
}
function pg(e = Ln) {
  const t = e === Ln ? sg : Mc(e);
  return function () {
    const { store: r } = t();
    return r;
  };
}
const Hv = pg();
function Wv(e = Ln) {
  const t = e === Ln ? Hv : pg(e);
  return function () {
    return t().dispatch;
  };
}
const ui = Wv();
Rv(Sv.useSyncExternalStoreWithSelector);
Cv(Ac.unstable_batchedUpdates);
/**
 * @remix-run/router v1.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ye() {
  return (
    (ye = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ye.apply(this, arguments)
  );
}
var we;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(we || (we = {}));
const bd = 'popstate';
function Kv(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: s, hash: a } = r.location;
    return Xo(
      '',
      { pathname: i, search: s, hash: a },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || 'default'
    );
  }
  function n(r, o) {
    return typeof o == 'string' ? o : tr(o);
  }
  return Jv(t, n, null, e);
}
function H(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function er(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Qv() {
  return Math.random().toString(36).substr(2, 8);
}
function jd(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Xo(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ye(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? en(t) : t,
      { state: n, key: (t && t.key) || r || Qv() }
    )
  );
}
function tr(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  );
}
function en(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf('?');
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Jv(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    s = o.history,
    a = we.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), s.replaceState(ye({}, s.state, { idx: u }), ''));
  function c() {
    return (s.state || { idx: null }).idx;
  }
  function f() {
    a = we.Pop;
    let S = c(),
      g = S == null ? null : S - u;
    (u = S), l && l({ action: a, location: y.location, delta: g });
  }
  function d(S, g) {
    a = we.Push;
    let h = Xo(y.location, S, g);
    n && n(h, S), (u = c() + 1);
    let v = jd(h, u),
      m = y.createHref(h);
    try {
      s.pushState(v, '', m);
    } catch (C) {
      if (C instanceof DOMException && C.name === 'DataCloneError') throw C;
      o.location.assign(m);
    }
    i && l && l({ action: a, location: y.location, delta: 1 });
  }
  function w(S, g) {
    a = we.Replace;
    let h = Xo(y.location, S, g);
    n && n(h, S), (u = c());
    let v = jd(h, u),
      m = y.createHref(h);
    s.replaceState(v, '', m),
      i && l && l({ action: a, location: y.location, delta: 0 });
  }
  function p(S) {
    let g = o.location.origin !== 'null' ? o.location.origin : o.location.href,
      h = typeof S == 'string' ? S : tr(S);
    return (
      H(
        g,
        'No window.location.(origin|href) available to create URL for href: ' +
          h
      ),
      new URL(h, g)
    );
  }
  let y = {
    get action() {
      return a;
    },
    get location() {
      return e(o, s);
    },
    listen(S) {
      if (l) throw new Error('A history only accepts one active listener');
      return (
        o.addEventListener(bd, f),
        (l = S),
        () => {
          o.removeEventListener(bd, f), (l = null);
        }
      );
    },
    createHref(S) {
      return t(o, S);
    },
    createURL: p,
    encodeLocation(S) {
      let g = p(S);
      return { pathname: g.pathname, search: g.search, hash: g.hash };
    },
    push: d,
    replace: w,
    go(S) {
      return s.go(S);
    },
  };
  return y;
}
var Se;
(function (e) {
  (e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error');
})(Se || (Se = {}));
const qv = new Set([
  'lazy',
  'caseSensitive',
  'path',
  'id',
  'index',
  'children',
]);
function Gv(e) {
  return e.index === !0;
}
function Eu(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((o, i) => {
      let s = [...n, i],
        a = typeof o.id == 'string' ? o.id : s.join('-');
      if (
        (H(
          o.index !== !0 || !o.children,
          'Cannot specify children on an index route'
        ),
        H(
          !r[a],
          'Found a route id collision on id "' +
            a +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        Gv(o))
      ) {
        let l = ye({}, o, t(o), { id: a });
        return (r[a] = l), l;
      } else {
        let l = ye({}, o, t(o), { id: a, children: void 0 });
        return (
          (r[a] = l), o.children && (l.children = Eu(o.children, t, s, r)), l
        );
      }
    })
  );
}
function Cr(e, t, n) {
  n === void 0 && (n = '/');
  let r = typeof t == 'string' ? en(t) : t,
    o = On(r.pathname || '/', n);
  if (o == null) return null;
  let i = hg(e);
  Xv(i);
  let s = null;
  for (let a = 0; s == null && a < i.length; ++a) s = aw(i[a], uw(o));
  return s;
}
function Yv(e, t) {
  let { route: n, pathname: r, params: o } = e;
  return { id: n.id, pathname: r, params: o, data: t[n.id], handle: n.handle };
}
function hg(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
  let o = (i, s, a) => {
    let l = {
      relativePath: a === void 0 ? i.path || '' : a,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: s,
      route: i,
    };
    l.relativePath.startsWith('/') &&
      (H(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = Kt([r, l.relativePath]),
      c = n.concat(l);
    i.children &&
      i.children.length > 0 &&
      (H(
        i.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + u + '".')
      ),
      hg(i.children, t, c, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: iw(u, i.index), routesMeta: c });
  };
  return (
    e.forEach((i, s) => {
      var a;
      if (i.path === '' || !((a = i.path) != null && a.includes('?'))) o(i, s);
      else for (let l of mg(i.path)) o(i, s, l);
    }),
    t
  );
}
function mg(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith('?'),
    i = n.replace(/\?$/, '');
  if (r.length === 0) return o ? [i, ''] : [i];
  let s = mg(r.join('/')),
    a = [];
  return (
    a.push(...s.map((l) => (l === '' ? i : [i, l].join('/')))),
    o && a.push(...s),
    a.map((l) => (e.startsWith('/') && l === '' ? '/' : l))
  );
}
function Xv(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : sw(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Zv = /^:\w+$/,
  ew = 3,
  tw = 2,
  nw = 1,
  rw = 10,
  ow = -2,
  Dd = (e) => e === '*';
function iw(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(Dd) && (r += ow),
    t && (r += tw),
    n
      .filter((o) => !Dd(o))
      .reduce((o, i) => o + (Zv.test(i) ? ew : i === '' ? nw : rw), r)
  );
}
function sw(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function aw(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = '/',
    i = [];
  for (let s = 0; s < n.length; ++s) {
    let a = n[s],
      l = s === n.length - 1,
      u = o === '/' ? t : t.slice(o.length) || '/',
      c = ku(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: l },
        u
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let f = a.route;
    i.push({
      params: r,
      pathname: Kt([o, c.pathname]),
      pathnameBase: pw(Kt([o, c.pathnameBase])),
      route: f,
    }),
      c.pathnameBase !== '/' && (o = Kt([o, c.pathnameBase]));
  }
  return i;
}
function ku(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = lw(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    s = i.replace(/(.)\/+$/, '$1'),
    a = o.slice(1);
  return {
    params: r.reduce((u, c, f) => {
      let { paramName: d, isOptional: w } = c;
      if (d === '*') {
        let y = a[f] || '';
        s = i.slice(0, i.length - y.length).replace(/(.)\/+$/, '$1');
      }
      const p = a[f];
      return w && !p ? (u[d] = void 0) : (u[d] = cw(p || '', d)), u;
    }, {}),
    pathname: i,
    pathnameBase: s,
    pattern: e,
  };
}
function lw(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    er(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
    );
  let r = [],
    o =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:(\w+)(\?)?/g,
          (s, a, l) => (
            r.push({ paramName: a, isOptional: l != null }),
            l ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        );
  return (
    e.endsWith('*')
      ? (r.push({ paramName: '*' }),
        (o += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
        ? (o += '\\/*$')
        : e !== '' && e !== '/' && (o += '(?:(?=\\/|$))'),
    [new RegExp(o, t ? void 0 : 'i'), r]
  );
}
function uw(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      er(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').')
      ),
      e
    );
  }
}
function cw(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      er(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (' due to a bad percent encoding (' + n + ').')
      ),
      e
    );
  }
}
function On(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function fw(e, t) {
  t === void 0 && (t = '/');
  let {
    pathname: n,
    search: r = '',
    hash: o = '',
  } = typeof e == 'string' ? en(e) : e;
  return {
    pathname: n ? (n.startsWith('/') ? n : dw(n, t)) : t,
    search: hw(r),
    hash: mw(o),
  };
}
function dw(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((o) => {
      o === '..' ? n.length > 1 && n.pop() : o !== '.' && n.push(o);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function dl(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' +
      t +
      '` field [' +
      JSON.stringify(r) +
      '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Ca(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Bc(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == 'string'
    ? (o = en(e))
    : ((o = ye({}, e)),
      H(
        !o.pathname || !o.pathname.includes('?'),
        dl('?', 'pathname', 'search', o)
      ),
      H(
        !o.pathname || !o.pathname.includes('#'),
        dl('#', 'pathname', 'hash', o)
      ),
      H(!o.search || !o.search.includes('#'), dl('#', 'search', 'hash', o)));
  let i = e === '' || o.pathname === '',
    s = i ? '/' : o.pathname,
    a;
  if (r || s == null) a = n;
  else {
    let f = t.length - 1;
    if (s.startsWith('..')) {
      let d = s.split('/');
      for (; d[0] === '..'; ) d.shift(), (f -= 1);
      o.pathname = d.join('/');
    }
    a = f >= 0 ? t[f] : '/';
  }
  let l = fw(o, a),
    u = s && s !== '/' && s.endsWith('/'),
    c = (i || s === '.') && n.endsWith('/');
  return !l.pathname.endsWith('/') && (u || c) && (l.pathname += '/'), l;
}
const Kt = (e) => e.join('/').replace(/\/\/+/g, '/'),
  pw = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  hw = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  mw = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
class Vc {
  constructor(t, n, r, o) {
    o === void 0 && (o = !1),
      (this.status = t),
      (this.statusText = n || ''),
      (this.internal = o),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function gg(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
const yg = ['post', 'put', 'patch', 'delete'],
  gw = new Set(yg),
  yw = ['get', ...yg],
  vw = new Set(yw),
  ww = new Set([301, 302, 303, 307, 308]),
  Sw = new Set([307, 308]),
  pl = {
    state: 'idle',
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  xw = {
    state: 'idle',
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  uo = { state: 'unblocked', proceed: void 0, reset: void 0, location: void 0 },
  vg = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Cw = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  wg = 'remix-router-transitions';
function Ew(e) {
  const t = e.window ? e.window : typeof window < 'u' ? window : void 0,
    n =
      typeof t < 'u' &&
      typeof t.document < 'u' &&
      typeof t.document.createElement < 'u',
    r = !n;
  H(
    e.routes.length > 0,
    'You must provide a non-empty routes array to createRouter'
  );
  let o;
  if (e.mapRouteProperties) o = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let x = e.detectErrorBoundary;
    o = (E) => ({ hasErrorBoundary: x(E) });
  } else o = Cw;
  let i = {},
    s = Eu(e.routes, o, void 0, i),
    a,
    l = e.basename || '/',
    u = ye(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_prependBasename: !1,
      },
      e.future
    ),
    c = null,
    f = new Set(),
    d = null,
    w = null,
    p = null,
    y = e.hydrationData != null,
    S = Cr(s, e.history.location, l),
    g = null;
  if (S == null) {
    let x = ct(404, { pathname: e.history.location.pathname }),
      { matches: E, route: N } = Bd(s);
    (S = E), (g = { [N.id]: x });
  }
  let h =
      !S.some((x) => x.route.lazy) &&
      (!S.some((x) => x.route.loader) || e.hydrationData != null),
    v,
    m = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: S,
      initialized: h,
      navigation: pl,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: 'idle',
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || g,
      fetchers: new Map(),
      blockers: new Map(),
    },
    C = we.Pop,
    O = !1,
    P,
    T = !1,
    M = new Map(),
    D = null,
    q = !1,
    Te = !1,
    Ae = [],
    Xe = [],
    te = new Map(),
    wt = 0,
    fe = -1,
    b = new Map(),
    $ = new Set(),
    B = new Map(),
    ne = new Map(),
    ie = new Set(),
    lt = new Map(),
    Be = new Map(),
    Mn = !1;
  function It() {
    if (
      ((c = e.history.listen((x) => {
        let { action: E, location: N, delta: j } = x;
        if (Mn) {
          Mn = !1;
          return;
        }
        er(
          Be.size === 0 || j != null,
          'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.'
        );
        let I = gf({
          currentLocation: m.location,
          nextLocation: N,
          historyAction: E,
        });
        if (I && j != null) {
          (Mn = !0),
            e.history.go(j * -1),
            gi(I, {
              state: 'blocked',
              location: N,
              proceed() {
                gi(I, {
                  state: 'proceeding',
                  proceed: void 0,
                  reset: void 0,
                  location: N,
                }),
                  e.history.go(j);
              },
              reset() {
                let U = new Map(m.blockers);
                U.set(I, uo), Ce({ blockers: U });
              },
            });
          return;
        }
        return $n(E, N);
      })),
      n)
    ) {
      Dw(t, M);
      let x = () => Aw(t, M);
      t.addEventListener('pagehide', x),
        (D = () => t.removeEventListener('pagehide', x));
    }
    return m.initialized || $n(we.Pop, m.location), v;
  }
  function sr() {
    c && c(),
      D && D(),
      f.clear(),
      P && P.abort(),
      m.fetchers.forEach((x, E) => mi(E)),
      m.blockers.forEach((x, E) => mf(E));
  }
  function g1(x) {
    return f.add(x), () => f.delete(x);
  }
  function Ce(x, E) {
    m = ye({}, m, x);
    let N = [],
      j = [];
    u.v7_fetcherPersist &&
      m.fetchers.forEach((I, U) => {
        I.state === 'idle' && (ie.has(U) ? j.push(U) : N.push(U));
      }),
      f.forEach((I) =>
        I(m, { deletedFetchers: j, unstable_viewTransitionOpts: E })
      ),
      u.v7_fetcherPersist &&
        (N.forEach((I) => m.fetchers.delete(I)), j.forEach((I) => mi(I)));
  }
  function Gr(x, E) {
    var N, j;
    let I =
        m.actionData != null &&
        m.navigation.formMethod != null &&
        kt(m.navigation.formMethod) &&
        m.navigation.state === 'loading' &&
        ((N = x.state) == null ? void 0 : N._isRedirect) !== !0,
      U;
    E.actionData
      ? Object.keys(E.actionData).length > 0
        ? (U = E.actionData)
        : (U = null)
      : I
        ? (U = m.actionData)
        : (U = null);
    let V = E.loaderData
        ? zd(m.loaderData, E.loaderData, E.matches || [], E.errors)
        : m.loaderData,
      z = m.blockers;
    z.size > 0 && ((z = new Map(z)), z.forEach((de, K) => z.set(K, uo)));
    let F =
      O === !0 ||
      (m.navigation.formMethod != null &&
        kt(m.navigation.formMethod) &&
        ((j = x.state) == null ? void 0 : j._isRedirect) !== !0);
    a && ((s = a), (a = void 0)),
      q ||
        C === we.Pop ||
        (C === we.Push
          ? e.history.push(x, x.state)
          : C === we.Replace && e.history.replace(x, x.state));
    let re;
    if (C === we.Pop) {
      let de = M.get(m.location.pathname);
      de && de.has(x.pathname)
        ? (re = { currentLocation: m.location, nextLocation: x })
        : M.has(x.pathname) &&
          (re = { currentLocation: x, nextLocation: m.location });
    } else if (T) {
      let de = M.get(m.location.pathname);
      de
        ? de.add(x.pathname)
        : ((de = new Set([x.pathname])), M.set(m.location.pathname, de)),
        (re = { currentLocation: m.location, nextLocation: x });
    }
    Ce(
      ye({}, E, {
        actionData: U,
        loaderData: V,
        historyAction: C,
        location: x,
        initialized: !0,
        navigation: pl,
        revalidation: 'idle',
        restoreScrollPosition: vf(x, E.matches || m.matches),
        preventScrollReset: F,
        blockers: z,
      }),
      re
    ),
      (C = we.Pop),
      (O = !1),
      (T = !1),
      (q = !1),
      (Te = !1),
      (Ae = []),
      (Xe = []);
  }
  async function uf(x, E) {
    if (typeof x == 'number') {
      e.history.go(x);
      return;
    }
    let N = Pu(
        m.location,
        m.matches,
        l,
        u.v7_prependBasename,
        x,
        E == null ? void 0 : E.fromRouteId,
        E == null ? void 0 : E.relative
      ),
      {
        path: j,
        submission: I,
        error: U,
      } = Ad(u.v7_normalizeFormMethod, !1, N, E),
      V = m.location,
      z = Xo(m.location, j, E && E.state);
    z = ye({}, z, e.history.encodeLocation(z));
    let F = E && E.replace != null ? E.replace : void 0,
      re = we.Push;
    F === !0
      ? (re = we.Replace)
      : F === !1 ||
        (I != null &&
          kt(I.formMethod) &&
          I.formAction === m.location.pathname + m.location.search &&
          (re = we.Replace));
    let de =
        E && 'preventScrollReset' in E ? E.preventScrollReset === !0 : void 0,
      K = gf({ currentLocation: V, nextLocation: z, historyAction: re });
    if (K) {
      gi(K, {
        state: 'blocked',
        location: z,
        proceed() {
          gi(K, {
            state: 'proceeding',
            proceed: void 0,
            reset: void 0,
            location: z,
          }),
            uf(x, E);
        },
        reset() {
          let oe = new Map(m.blockers);
          oe.set(K, uo), Ce({ blockers: oe });
        },
      });
      return;
    }
    return await $n(re, z, {
      submission: I,
      pendingError: U,
      preventScrollReset: de,
      replace: E && E.replace,
      enableViewTransition: E && E.unstable_viewTransition,
    });
  }
  function y1() {
    if (
      (ja(),
      Ce({ revalidation: 'loading' }),
      m.navigation.state !== 'submitting')
    ) {
      if (m.navigation.state === 'idle') {
        $n(m.historyAction, m.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      $n(C || m.historyAction, m.navigation.location, {
        overrideNavigation: m.navigation,
      });
    }
  }
  async function $n(x, E, N) {
    P && P.abort(),
      (P = null),
      (C = x),
      (q = (N && N.startUninterruptedRevalidation) === !0),
      R1(m.location, m.matches),
      (O = (N && N.preventScrollReset) === !0),
      (T = (N && N.enableViewTransition) === !0);
    let j = a || s,
      I = N && N.overrideNavigation,
      U = Cr(j, E, l);
    if (!U) {
      let oe = ct(404, { pathname: E.pathname }),
        { matches: Pe, route: Fn } = Bd(j);
      Da(), Gr(E, { matches: Pe, loaderData: {}, errors: { [Fn.id]: oe } });
      return;
    }
    if (
      m.initialized &&
      !Te &&
      Ow(m.location, E) &&
      !(N && N.submission && kt(N.submission.formMethod))
    ) {
      Gr(E, { matches: U });
      return;
    }
    P = new AbortController();
    let V = fo(e.history, E, P.signal, N && N.submission),
      z,
      F;
    if (N && N.pendingError) F = { [jo(U).route.id]: N.pendingError };
    else if (N && N.submission && kt(N.submission.formMethod)) {
      let oe = await v1(V, E, N.submission, U, { replace: N.replace });
      if (oe.shortCircuited) return;
      (z = oe.pendingActionData),
        (F = oe.pendingActionError),
        (I = hl(E, N.submission)),
        (V = new Request(V.url, { signal: V.signal }));
    }
    let {
      shortCircuited: re,
      loaderData: de,
      errors: K,
    } = await w1(
      V,
      E,
      U,
      I,
      N && N.submission,
      N && N.fetcherSubmission,
      N && N.replace,
      z,
      F
    );
    re ||
      ((P = null),
      Gr(
        E,
        ye({ matches: U }, z ? { actionData: z } : {}, {
          loaderData: de,
          errors: K,
        })
      ));
  }
  async function v1(x, E, N, j, I) {
    I === void 0 && (I = {}), ja();
    let U = bw(E, N);
    Ce({ navigation: U });
    let V,
      z = Lu(j, E);
    if (!z.route.action && !z.route.lazy)
      V = {
        type: Se.error,
        error: ct(405, {
          method: x.method,
          pathname: E.pathname,
          routeId: z.route.id,
        }),
      };
    else if (((V = await co('action', x, z, j, i, o, l)), x.signal.aborted))
      return { shortCircuited: !0 };
    if (Nr(V)) {
      let F;
      return (
        I && I.replace != null
          ? (F = I.replace)
          : (F = V.location === m.location.pathname + m.location.search),
        await Yr(m, V, { submission: N, replace: F }),
        { shortCircuited: !0 }
      );
    }
    if (Do(V)) {
      let F = jo(j, z.route.id);
      return (
        (I && I.replace) !== !0 && (C = we.Push),
        { pendingActionData: {}, pendingActionError: { [F.route.id]: V.error } }
      );
    }
    if (Kn(V)) throw ct(400, { type: 'defer-action' });
    return { pendingActionData: { [z.route.id]: V.data } };
  }
  async function w1(x, E, N, j, I, U, V, z, F) {
    let re = j || hl(E, I),
      de = I || U || Wd(re),
      K = a || s,
      [oe, Pe] = Md(e.history, m, N, de, E, Te, Ae, Xe, B, $, K, l, z, F);
    if (
      (Da(
        (Z) =>
          !(N && N.some((St) => St.route.id === Z)) ||
          (oe && oe.some((St) => St.route.id === Z))
      ),
      (fe = ++wt),
      oe.length === 0 && Pe.length === 0)
    ) {
      let Z = pf();
      return (
        Gr(
          E,
          ye(
            { matches: N, loaderData: {}, errors: F || null },
            z ? { actionData: z } : {},
            Z ? { fetchers: new Map(m.fetchers) } : {}
          )
        ),
        { shortCircuited: !0 }
      );
    }
    if (!q) {
      Pe.forEach((St) => {
        let rn = m.fetchers.get(St.key),
          ve = po(void 0, rn ? rn.data : void 0);
        m.fetchers.set(St.key, ve);
      });
      let Z = z || m.actionData;
      Ce(
        ye(
          { navigation: re },
          Z
            ? Object.keys(Z).length === 0
              ? { actionData: null }
              : { actionData: Z }
            : {},
          Pe.length > 0 ? { fetchers: new Map(m.fetchers) } : {}
        )
      );
    }
    Pe.forEach((Z) => {
      te.has(Z.key) && tn(Z.key), Z.controller && te.set(Z.key, Z.controller);
    });
    let Fn = () => Pe.forEach((Z) => tn(Z.key));
    P && P.signal.addEventListener('abort', Fn);
    let {
      results: In,
      loaderResults: Zr,
      fetcherResults: Aa,
    } = await ff(m.matches, N, oe, Pe, x);
    if (x.signal.aborted) return { shortCircuited: !0 };
    P && P.signal.removeEventListener('abort', Fn),
      Pe.forEach((Z) => te.delete(Z.key));
    let Ut = Vd(In);
    if (Ut) {
      if (Ut.idx >= oe.length) {
        let Z = Pe[Ut.idx - oe.length].key;
        $.add(Z);
      }
      return await Yr(m, Ut.result, { replace: V }), { shortCircuited: !0 };
    }
    let { loaderData: nn, errors: yi } = Ud(m, N, oe, Zr, F, Pe, Aa, lt);
    lt.forEach((Z, St) => {
      Z.subscribe((rn) => {
        (rn || Z.done) && lt.delete(St);
      });
    });
    let Ma = pf(),
      $a = hf(fe),
      Fa = Ma || $a || Pe.length > 0;
    return ye(
      { loaderData: nn, errors: yi },
      Fa ? { fetchers: new Map(m.fetchers) } : {}
    );
  }
  function cf(x) {
    return (
      u.v7_fetcherPersist &&
        (ne.set(x, (ne.get(x) || 0) + 1), ie.has(x) && ie.delete(x)),
      m.fetchers.get(x) || xw
    );
  }
  function S1(x, E, N, j) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    te.has(x) && tn(x);
    let I = a || s,
      U = Pu(
        m.location,
        m.matches,
        l,
        u.v7_prependBasename,
        N,
        E,
        j == null ? void 0 : j.relative
      ),
      V = Cr(I, U, l);
    if (!V) {
      Xr(x, E, ct(404, { pathname: U }));
      return;
    }
    let {
      path: z,
      submission: F,
      error: re,
    } = Ad(u.v7_normalizeFormMethod, !0, U, j);
    if (re) {
      Xr(x, E, re);
      return;
    }
    let de = Lu(V, z);
    if (((O = (j && j.preventScrollReset) === !0), F && kt(F.formMethod))) {
      x1(x, E, z, de, V, F);
      return;
    }
    B.set(x, { routeId: E, path: z }), C1(x, E, z, de, V, F);
  }
  async function x1(x, E, N, j, I, U) {
    if ((ja(), B.delete(x), !j.route.action && !j.route.lazy)) {
      let ve = ct(405, { method: U.formMethod, pathname: N, routeId: E });
      Xr(x, E, ve);
      return;
    }
    let V = m.fetchers.get(x),
      z = jw(U, V);
    m.fetchers.set(x, z), Ce({ fetchers: new Map(m.fetchers) });
    let F = new AbortController(),
      re = fo(e.history, N, F.signal, U);
    te.set(x, F);
    let de = wt,
      K = await co('action', re, j, I, i, o, l);
    if (re.signal.aborted) {
      te.get(x) === F && te.delete(x);
      return;
    }
    if (ie.has(x)) {
      m.fetchers.set(x, an(void 0)), Ce({ fetchers: new Map(m.fetchers) });
      return;
    }
    if (Nr(K))
      if ((te.delete(x), fe > de)) {
        let ve = an(void 0);
        m.fetchers.set(x, ve), Ce({ fetchers: new Map(m.fetchers) });
        return;
      } else {
        $.add(x);
        let ve = po(U);
        return (
          m.fetchers.set(x, ve),
          Ce({ fetchers: new Map(m.fetchers) }),
          Yr(m, K, { fetcherSubmission: U })
        );
      }
    if (Do(K)) {
      Xr(x, E, K.error);
      return;
    }
    if (Kn(K)) throw ct(400, { type: 'defer-action' });
    let oe = m.navigation.location || m.location,
      Pe = fo(e.history, oe, F.signal),
      Fn = a || s,
      In =
        m.navigation.state !== 'idle'
          ? Cr(Fn, m.navigation.location, l)
          : m.matches;
    H(In, "Didn't find any matches after fetcher action");
    let Zr = ++wt;
    b.set(x, Zr);
    let Aa = po(U, K.data);
    m.fetchers.set(x, Aa);
    let [Ut, nn] = Md(
      e.history,
      m,
      In,
      U,
      oe,
      Te,
      Ae,
      Xe,
      B,
      $,
      Fn,
      l,
      { [j.route.id]: K.data },
      void 0
    );
    nn
      .filter((ve) => ve.key !== x)
      .forEach((ve) => {
        let eo = ve.key,
          wf = m.fetchers.get(eo),
          O1 = po(void 0, wf ? wf.data : void 0);
        m.fetchers.set(eo, O1),
          te.has(eo) && tn(eo),
          ve.controller && te.set(eo, ve.controller);
      }),
      Ce({ fetchers: new Map(m.fetchers) });
    let yi = () => nn.forEach((ve) => tn(ve.key));
    F.signal.addEventListener('abort', yi);
    let {
      results: Ma,
      loaderResults: $a,
      fetcherResults: Fa,
    } = await ff(m.matches, In, Ut, nn, Pe);
    if (F.signal.aborted) return;
    F.signal.removeEventListener('abort', yi),
      b.delete(x),
      te.delete(x),
      nn.forEach((ve) => te.delete(ve.key));
    let Z = Vd(Ma);
    if (Z) {
      if (Z.idx >= Ut.length) {
        let ve = nn[Z.idx - Ut.length].key;
        $.add(ve);
      }
      return Yr(m, Z.result);
    }
    let { loaderData: St, errors: rn } = Ud(
      m,
      m.matches,
      Ut,
      $a,
      void 0,
      nn,
      Fa,
      lt
    );
    if (m.fetchers.has(x)) {
      let ve = an(K.data);
      m.fetchers.set(x, ve);
    }
    hf(Zr),
      m.navigation.state === 'loading' && Zr > fe
        ? (H(C, 'Expected pending action'),
          P && P.abort(),
          Gr(m.navigation.location, {
            matches: In,
            loaderData: St,
            errors: rn,
            fetchers: new Map(m.fetchers),
          }))
        : (Ce({
            errors: rn,
            loaderData: zd(m.loaderData, St, In, rn),
            fetchers: new Map(m.fetchers),
          }),
          (Te = !1));
  }
  async function C1(x, E, N, j, I, U) {
    let V = m.fetchers.get(x),
      z = po(U, V ? V.data : void 0);
    m.fetchers.set(x, z), Ce({ fetchers: new Map(m.fetchers) });
    let F = new AbortController(),
      re = fo(e.history, N, F.signal);
    te.set(x, F);
    let de = wt,
      K = await co('loader', re, j, I, i, o, l);
    if (
      (Kn(K) && (K = (await Cg(K, re.signal, !0)) || K),
      te.get(x) === F && te.delete(x),
      re.signal.aborted)
    )
      return;
    if (ie.has(x)) {
      m.fetchers.set(x, an(void 0)), Ce({ fetchers: new Map(m.fetchers) });
      return;
    }
    if (Nr(K))
      if (fe > de) {
        let Pe = an(void 0);
        m.fetchers.set(x, Pe), Ce({ fetchers: new Map(m.fetchers) });
        return;
      } else {
        $.add(x), await Yr(m, K);
        return;
      }
    if (Do(K)) {
      Xr(x, E, K.error);
      return;
    }
    H(!Kn(K), 'Unhandled fetcher deferred data');
    let oe = an(K.data);
    m.fetchers.set(x, oe), Ce({ fetchers: new Map(m.fetchers) });
  }
  async function Yr(x, E, N) {
    let {
      submission: j,
      fetcherSubmission: I,
      replace: U,
    } = N === void 0 ? {} : N;
    E.revalidate && (Te = !0);
    let V = Xo(x.location, E.location, { _isRedirect: !0 });
    if ((H(V, 'Expected a location on the redirect navigation'), n)) {
      let oe = !1;
      if (E.reloadDocument) oe = !0;
      else if (vg.test(E.location)) {
        const Pe = e.history.createURL(E.location);
        oe = Pe.origin !== t.location.origin || On(Pe.pathname, l) == null;
      }
      if (oe) {
        U ? t.location.replace(E.location) : t.location.assign(E.location);
        return;
      }
    }
    P = null;
    let z = U === !0 ? we.Replace : we.Push,
      { formMethod: F, formAction: re, formEncType: de } = x.navigation;
    !j && !I && F && re && de && (j = Wd(x.navigation));
    let K = j || I;
    if (Sw.has(E.status) && K && kt(K.formMethod))
      await $n(z, V, {
        submission: ye({}, K, { formAction: E.location }),
        preventScrollReset: O,
      });
    else {
      let oe = hl(V, j);
      await $n(z, V, {
        overrideNavigation: oe,
        fetcherSubmission: I,
        preventScrollReset: O,
      });
    }
  }
  async function ff(x, E, N, j, I) {
    let U = await Promise.all([
        ...N.map((F) => co('loader', I, F, E, i, o, l)),
        ...j.map((F) =>
          F.matches && F.match && F.controller
            ? co(
                'loader',
                fo(e.history, F.path, F.controller.signal),
                F.match,
                F.matches,
                i,
                o,
                l
              )
            : { type: Se.error, error: ct(404, { pathname: F.path }) }
        ),
      ]),
      V = U.slice(0, N.length),
      z = U.slice(N.length);
    return (
      await Promise.all([
        Hd(
          x,
          N,
          V,
          V.map(() => I.signal),
          !1,
          m.loaderData
        ),
        Hd(
          x,
          j.map((F) => F.match),
          z,
          j.map((F) => (F.controller ? F.controller.signal : null)),
          !0
        ),
      ]),
      { results: U, loaderResults: V, fetcherResults: z }
    );
  }
  function ja() {
    (Te = !0),
      Ae.push(...Da()),
      B.forEach((x, E) => {
        te.has(E) && (Xe.push(E), tn(E));
      });
  }
  function Xr(x, E, N) {
    let j = jo(m.matches, E);
    mi(x), Ce({ errors: { [j.route.id]: N }, fetchers: new Map(m.fetchers) });
  }
  function mi(x) {
    let E = m.fetchers.get(x);
    te.has(x) && !(E && E.state === 'loading' && b.has(x)) && tn(x),
      B.delete(x),
      b.delete(x),
      $.delete(x),
      ie.delete(x),
      m.fetchers.delete(x);
  }
  function E1(x) {
    if (u.v7_fetcherPersist) {
      let E = (ne.get(x) || 0) - 1;
      E <= 0 ? (ne.delete(x), ie.add(x)) : ne.set(x, E);
    } else mi(x);
    Ce({ fetchers: new Map(m.fetchers) });
  }
  function tn(x) {
    let E = te.get(x);
    H(E, 'Expected fetch controller: ' + x), E.abort(), te.delete(x);
  }
  function df(x) {
    for (let E of x) {
      let N = cf(E),
        j = an(N.data);
      m.fetchers.set(E, j);
    }
  }
  function pf() {
    let x = [],
      E = !1;
    for (let N of $) {
      let j = m.fetchers.get(N);
      H(j, 'Expected fetcher: ' + N),
        j.state === 'loading' && ($.delete(N), x.push(N), (E = !0));
    }
    return df(x), E;
  }
  function hf(x) {
    let E = [];
    for (let [N, j] of b)
      if (j < x) {
        let I = m.fetchers.get(N);
        H(I, 'Expected fetcher: ' + N),
          I.state === 'loading' && (tn(N), b.delete(N), E.push(N));
      }
    return df(E), E.length > 0;
  }
  function k1(x, E) {
    let N = m.blockers.get(x) || uo;
    return Be.get(x) !== E && Be.set(x, E), N;
  }
  function mf(x) {
    m.blockers.delete(x), Be.delete(x);
  }
  function gi(x, E) {
    let N = m.blockers.get(x) || uo;
    H(
      (N.state === 'unblocked' && E.state === 'blocked') ||
        (N.state === 'blocked' && E.state === 'blocked') ||
        (N.state === 'blocked' && E.state === 'proceeding') ||
        (N.state === 'blocked' && E.state === 'unblocked') ||
        (N.state === 'proceeding' && E.state === 'unblocked'),
      'Invalid blocker state transition: ' + N.state + ' -> ' + E.state
    );
    let j = new Map(m.blockers);
    j.set(x, E), Ce({ blockers: j });
  }
  function gf(x) {
    let { currentLocation: E, nextLocation: N, historyAction: j } = x;
    if (Be.size === 0) return;
    Be.size > 1 && er(!1, 'A router only supports one blocker at a time');
    let I = Array.from(Be.entries()),
      [U, V] = I[I.length - 1],
      z = m.blockers.get(U);
    if (
      !(z && z.state === 'proceeding') &&
      V({ currentLocation: E, nextLocation: N, historyAction: j })
    )
      return U;
  }
  function Da(x) {
    let E = [];
    return (
      lt.forEach((N, j) => {
        (!x || x(j)) && (N.cancel(), E.push(j), lt.delete(j));
      }),
      E
    );
  }
  function P1(x, E, N) {
    if (((d = x), (p = E), (w = N || null), !y && m.navigation === pl)) {
      y = !0;
      let j = vf(m.location, m.matches);
      j != null && Ce({ restoreScrollPosition: j });
    }
    return () => {
      (d = null), (p = null), (w = null);
    };
  }
  function yf(x, E) {
    return (
      (w &&
        w(
          x,
          E.map((j) => Yv(j, m.loaderData))
        )) ||
      x.key
    );
  }
  function R1(x, E) {
    if (d && p) {
      let N = yf(x, E);
      d[N] = p();
    }
  }
  function vf(x, E) {
    if (d) {
      let N = yf(x, E),
        j = d[N];
      if (typeof j == 'number') return j;
    }
    return null;
  }
  function L1(x) {
    (i = {}), (a = Eu(x, o, void 0, i));
  }
  return (
    (v = {
      get basename() {
        return l;
      },
      get state() {
        return m;
      },
      get routes() {
        return s;
      },
      get window() {
        return t;
      },
      initialize: It,
      subscribe: g1,
      enableScrollRestoration: P1,
      navigate: uf,
      fetch: S1,
      revalidate: y1,
      createHref: (x) => e.history.createHref(x),
      encodeLocation: (x) => e.history.encodeLocation(x),
      getFetcher: cf,
      deleteFetcher: E1,
      dispose: sr,
      getBlocker: k1,
      deleteBlocker: mf,
      _internalFetchControllers: te,
      _internalActiveDeferreds: lt,
      _internalSetRoutes: L1,
    }),
    v
  );
}
function kw(e) {
  return (
    e != null &&
    (('formData' in e && e.formData != null) ||
      ('body' in e && e.body !== void 0))
  );
}
function Pu(e, t, n, r, o, i, s) {
  let a, l;
  if (i != null && s !== 'path') {
    a = [];
    for (let c of t)
      if ((a.push(c), c.route.id === i)) {
        l = c;
        break;
      }
  } else (a = t), (l = t[t.length - 1]);
  let u = Bc(
    o || '.',
    Ca(a).map((c) => c.pathnameBase),
    On(e.pathname, n) || e.pathname,
    s === 'path'
  );
  return (
    o == null && ((u.search = e.search), (u.hash = e.hash)),
    (o == null || o === '' || o === '.') &&
      l &&
      l.route.index &&
      !Hc(u.search) &&
      (u.search = u.search ? u.search.replace(/^\?/, '?index&') : '?index'),
    r &&
      n !== '/' &&
      (u.pathname = u.pathname === '/' ? n : Kt([n, u.pathname])),
    tr(u)
  );
}
function Ad(e, t, n, r) {
  if (!r || !kw(r)) return { path: n };
  if (r.formMethod && !Tw(r.formMethod))
    return { path: n, error: ct(405, { method: r.formMethod }) };
  let o = () => ({ path: n, error: ct(400, { type: 'invalid-body' }) }),
    i = r.formMethod || 'get',
    s = e ? i.toUpperCase() : i.toLowerCase(),
    a = xg(n);
  if (r.body !== void 0) {
    if (r.formEncType === 'text/plain') {
      if (!kt(s)) return o();
      let d =
        typeof r.body == 'string'
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
            ? Array.from(r.body.entries()).reduce((w, p) => {
                let [y, S] = p;
                return (
                  '' +
                  w +
                  y +
                  '=' +
                  S +
                  `
`
                );
              }, '')
            : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: s,
          formAction: a,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: d,
        },
      };
    } else if (r.formEncType === 'application/json') {
      if (!kt(s)) return o();
      try {
        let d = typeof r.body == 'string' ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: s,
            formAction: a,
            formEncType: r.formEncType,
            formData: void 0,
            json: d,
            text: void 0,
          },
        };
      } catch {
        return o();
      }
    }
  }
  H(
    typeof FormData == 'function',
    'FormData is not available in this environment'
  );
  let l, u;
  if (r.formData) (l = Ru(r.formData)), (u = r.formData);
  else if (r.body instanceof FormData) (l = Ru(r.body)), (u = r.body);
  else if (r.body instanceof URLSearchParams) (l = r.body), (u = Id(l));
  else if (r.body == null) (l = new URLSearchParams()), (u = new FormData());
  else
    try {
      (l = new URLSearchParams(r.body)), (u = Id(l));
    } catch {
      return o();
    }
  let c = {
    formMethod: s,
    formAction: a,
    formEncType: (r && r.formEncType) || 'application/x-www-form-urlencoded',
    formData: u,
    json: void 0,
    text: void 0,
  };
  if (kt(c.formMethod)) return { path: n, submission: c };
  let f = en(n);
  return (
    t && f.search && Hc(f.search) && l.append('index', ''),
    (f.search = '?' + l),
    { path: tr(f), submission: c }
  );
}
function Pw(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((o) => o.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function Md(e, t, n, r, o, i, s, a, l, u, c, f, d, w) {
  let p = w ? Object.values(w)[0] : d ? Object.values(d)[0] : void 0,
    y = e.createURL(t.location),
    S = e.createURL(o),
    g = w ? Object.keys(w)[0] : void 0,
    v = Pw(n, g).filter((C, O) => {
      if (C.route.lazy) return !0;
      if (C.route.loader == null) return !1;
      if (Rw(t.loaderData, t.matches[O], C) || s.some((M) => M === C.route.id))
        return !0;
      let P = t.matches[O],
        T = C;
      return $d(
        C,
        ye(
          {
            currentUrl: y,
            currentParams: P.params,
            nextUrl: S,
            nextParams: T.params,
          },
          r,
          {
            actionResult: p,
            defaultShouldRevalidate:
              i ||
              y.pathname + y.search === S.pathname + S.search ||
              y.search !== S.search ||
              Sg(P, T),
          }
        )
      );
    }),
    m = [];
  return (
    l.forEach((C, O) => {
      if (!n.some((q) => q.route.id === C.routeId)) return;
      let P = Cr(c, C.path, f);
      if (!P) {
        m.push({
          key: O,
          routeId: C.routeId,
          path: C.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let T = t.fetchers.get(O),
        M = Lu(P, C.path),
        D = !1;
      u.has(O)
        ? (D = !1)
        : a.includes(O)
          ? (D = !0)
          : T && T.state !== 'idle' && T.data === void 0
            ? (D = i)
            : (D = $d(
                M,
                ye(
                  {
                    currentUrl: y,
                    currentParams: t.matches[t.matches.length - 1].params,
                    nextUrl: S,
                    nextParams: n[n.length - 1].params,
                  },
                  r,
                  { actionResult: p, defaultShouldRevalidate: i }
                )
              )),
        D &&
          m.push({
            key: O,
            routeId: C.routeId,
            path: C.path,
            matches: P,
            match: M,
            controller: new AbortController(),
          });
    }),
    [v, m]
  );
}
function Rw(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    o = e[n.route.id] === void 0;
  return r || o;
}
function Sg(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith('*') && e.params['*'] !== t.params['*'])
  );
}
function $d(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == 'boolean') return n;
  }
  return t.defaultShouldRevalidate;
}
async function Fd(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let o = n[e.id];
  H(o, 'No route found in manifest');
  let i = {};
  for (let s in r) {
    let l = o[s] !== void 0 && s !== 'hasErrorBoundary';
    er(
      !l,
      'Route "' +
        o.id +
        '" has a static property "' +
        s +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + s + '" will be ignored.')
    ),
      !l && !qv.has(s) && (i[s] = r[s]);
  }
  Object.assign(o, i), Object.assign(o, ye({}, t(o), { lazy: void 0 }));
}
async function co(e, t, n, r, o, i, s, a) {
  a === void 0 && (a = {});
  let l,
    u,
    c,
    f = (p) => {
      let y,
        S = new Promise((g, h) => (y = h));
      return (
        (c = () => y()),
        t.signal.addEventListener('abort', c),
        Promise.race([
          p({ request: t, params: n.params, context: a.requestContext }),
          S,
        ])
      );
    };
  try {
    let p = n.route[e];
    if (n.route.lazy)
      if (p) {
        let y,
          S = await Promise.all([
            f(p).catch((g) => {
              y = g;
            }),
            Fd(n.route, i, o),
          ]);
        if (y) throw y;
        u = S[0];
      } else if ((await Fd(n.route, i, o), (p = n.route[e]), p)) u = await f(p);
      else if (e === 'action') {
        let y = new URL(t.url),
          S = y.pathname + y.search;
        throw ct(405, { method: t.method, pathname: S, routeId: n.route.id });
      } else return { type: Se.data, data: void 0 };
    else if (p) u = await f(p);
    else {
      let y = new URL(t.url),
        S = y.pathname + y.search;
      throw ct(404, { pathname: S });
    }
    H(
      u !== void 0,
      'You defined ' +
        (e === 'action' ? 'an action' : 'a loader') +
        ' for route ' +
        ('"' +
          n.route.id +
          '" but didn\'t return anything from your `' +
          e +
          '` ') +
        'function. Please return a value or `null`.'
    );
  } catch (p) {
    (l = Se.error), (u = p);
  } finally {
    c && t.signal.removeEventListener('abort', c);
  }
  if (_w(u)) {
    let p = u.status;
    if (ww.has(p)) {
      let g = u.headers.get('Location');
      if (
        (H(
          g,
          'Redirects returned/thrown from loaders/actions must have a Location header'
        ),
        !vg.test(g))
      )
        g = Pu(new URL(t.url), r.slice(0, r.indexOf(n) + 1), s, !0, g);
      else if (!a.isStaticRequest) {
        let h = new URL(t.url),
          v = g.startsWith('//') ? new URL(h.protocol + g) : new URL(g),
          m = On(v.pathname, s) != null;
        v.origin === h.origin && m && (g = v.pathname + v.search + v.hash);
      }
      if (a.isStaticRequest) throw (u.headers.set('Location', g), u);
      return {
        type: Se.redirect,
        status: p,
        location: g,
        revalidate: u.headers.get('X-Remix-Revalidate') !== null,
        reloadDocument: u.headers.get('X-Remix-Reload-Document') !== null,
      };
    }
    if (a.isRouteRequest)
      throw { type: l === Se.error ? Se.error : Se.data, response: u };
    let y,
      S = u.headers.get('Content-Type');
    return (
      S && /\bapplication\/json\b/.test(S)
        ? (y = await u.json())
        : (y = await u.text()),
      l === Se.error
        ? { type: l, error: new Vc(p, u.statusText, y), headers: u.headers }
        : { type: Se.data, data: y, statusCode: u.status, headers: u.headers }
    );
  }
  if (l === Se.error) return { type: l, error: u };
  if (Nw(u)) {
    var d, w;
    return {
      type: Se.deferred,
      deferredData: u,
      statusCode: (d = u.init) == null ? void 0 : d.status,
      headers:
        ((w = u.init) == null ? void 0 : w.headers) &&
        new Headers(u.init.headers),
    };
  }
  return { type: Se.data, data: u };
}
function fo(e, t, n, r) {
  let o = e.createURL(xg(t)).toString(),
    i = { signal: n };
  if (r && kt(r.formMethod)) {
    let { formMethod: s, formEncType: a } = r;
    (i.method = s.toUpperCase()),
      a === 'application/json'
        ? ((i.headers = new Headers({ 'Content-Type': a })),
          (i.body = JSON.stringify(r.json)))
        : a === 'text/plain'
          ? (i.body = r.text)
          : a === 'application/x-www-form-urlencoded' && r.formData
            ? (i.body = Ru(r.formData))
            : (i.body = r.formData);
  }
  return new Request(o, i);
}
function Ru(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == 'string' ? r : r.name);
  return t;
}
function Id(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function Lw(e, t, n, r, o) {
  let i = {},
    s = null,
    a,
    l = !1,
    u = {};
  return (
    n.forEach((c, f) => {
      let d = t[f].route.id;
      if (
        (H(!Nr(c), 'Cannot handle redirect results in processLoaderData'),
        Do(c))
      ) {
        let w = jo(e, d),
          p = c.error;
        r && ((p = Object.values(r)[0]), (r = void 0)),
          (s = s || {}),
          s[w.route.id] == null && (s[w.route.id] = p),
          (i[d] = void 0),
          l || ((l = !0), (a = gg(c.error) ? c.error.status : 500)),
          c.headers && (u[d] = c.headers);
      } else
        Kn(c)
          ? (o.set(d, c.deferredData), (i[d] = c.deferredData.data))
          : (i[d] = c.data),
          c.statusCode != null &&
            c.statusCode !== 200 &&
            !l &&
            (a = c.statusCode),
          c.headers && (u[d] = c.headers);
    }),
    r && ((s = r), (i[Object.keys(r)[0]] = void 0)),
    { loaderData: i, errors: s, statusCode: a || 200, loaderHeaders: u }
  );
}
function Ud(e, t, n, r, o, i, s, a) {
  let { loaderData: l, errors: u } = Lw(t, n, r, o, a);
  for (let c = 0; c < i.length; c++) {
    let { key: f, match: d, controller: w } = i[c];
    H(
      s !== void 0 && s[c] !== void 0,
      'Did not find corresponding fetcher result'
    );
    let p = s[c];
    if (!(w && w.signal.aborted))
      if (Do(p)) {
        let y = jo(e.matches, d == null ? void 0 : d.route.id);
        (u && u[y.route.id]) || (u = ye({}, u, { [y.route.id]: p.error })),
          e.fetchers.delete(f);
      } else if (Nr(p)) H(!1, 'Unhandled fetcher revalidation redirect');
      else if (Kn(p)) H(!1, 'Unhandled fetcher deferred data');
      else {
        let y = an(p.data);
        e.fetchers.set(f, y);
      }
  }
  return { loaderData: l, errors: u };
}
function zd(e, t, n, r) {
  let o = ye({}, t);
  for (let i of n) {
    let s = i.route.id;
    if (
      (t.hasOwnProperty(s)
        ? t[s] !== void 0 && (o[s] = t[s])
        : e[s] !== void 0 && i.route.loader && (o[s] = e[s]),
      r && r.hasOwnProperty(s))
    )
      break;
  }
  return o;
}
function jo(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function Bd(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === '/') || {
          id: '__shim-error-route__',
        };
  return {
    matches: [{ params: {}, pathname: '', pathnameBase: '', route: t }],
    route: t,
  };
}
function ct(e, t) {
  let { pathname: n, routeId: r, method: o, type: i } = t === void 0 ? {} : t,
    s = 'Unknown Server Error',
    a = 'Unknown @remix-run/router error';
  return (
    e === 400
      ? ((s = 'Bad Request'),
        o && n && r
          ? (a =
              'You made a ' +
              o +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              'so there is no way to handle the request.')
          : i === 'defer-action'
            ? (a = 'defer() is not supported in actions')
            : i === 'invalid-body' && (a = 'Unable to encode submission body'))
      : e === 403
        ? ((s = 'Forbidden'),
          (a = 'Route "' + r + '" does not match URL "' + n + '"'))
        : e === 404
          ? ((s = 'Not Found'), (a = 'No route matches URL "' + n + '"'))
          : e === 405 &&
            ((s = 'Method Not Allowed'),
            o && n && r
              ? (a =
                  'You made a ' +
                  o.toUpperCase() +
                  ' request to "' +
                  n +
                  '" but ' +
                  ('did not provide an `action` for route "' + r + '", ') +
                  'so there is no way to handle the request.')
              : o && (a = 'Invalid request method "' + o.toUpperCase() + '"')),
    new Vc(e || 500, s, new Error(a), !0)
  );
}
function Vd(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (Nr(n)) return { result: n, idx: t };
  }
}
function xg(e) {
  let t = typeof e == 'string' ? en(e) : e;
  return tr(ye({}, t, { hash: '' }));
}
function Ow(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ''
      ? t.hash !== ''
      : e.hash === t.hash
        ? !0
        : t.hash !== '';
}
function Kn(e) {
  return e.type === Se.deferred;
}
function Do(e) {
  return e.type === Se.error;
}
function Nr(e) {
  return (e && e.type) === Se.redirect;
}
function Nw(e) {
  let t = e;
  return (
    t &&
    typeof t == 'object' &&
    typeof t.data == 'object' &&
    typeof t.subscribe == 'function' &&
    typeof t.cancel == 'function' &&
    typeof t.resolveData == 'function'
  );
}
function _w(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.headers == 'object' &&
    typeof e.body < 'u'
  );
}
function Tw(e) {
  return vw.has(e.toLowerCase());
}
function kt(e) {
  return gw.has(e.toLowerCase());
}
async function Hd(e, t, n, r, o, i) {
  for (let s = 0; s < n.length; s++) {
    let a = n[s],
      l = t[s];
    if (!l) continue;
    let u = e.find((f) => f.route.id === l.route.id),
      c = u != null && !Sg(u, l) && (i && i[l.route.id]) !== void 0;
    if (Kn(a) && (o || c)) {
      let f = r[s];
      H(f, 'Expected an AbortSignal for revalidating fetcher deferred result'),
        await Cg(a, f, o).then((d) => {
          d && (n[s] = d || n[s]);
        });
    }
  }
}
async function Cg(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: Se.data, data: e.deferredData.unwrappedData };
      } catch (o) {
        return { type: Se.error, error: o };
      }
    return { type: Se.data, data: e.deferredData.data };
  }
}
function Hc(e) {
  return new URLSearchParams(e).getAll('index').some((t) => t === '');
}
function Lu(e, t) {
  let n = typeof t == 'string' ? en(t).search : t.search;
  if (e[e.length - 1].route.index && Hc(n || '')) return e[e.length - 1];
  let r = Ca(e);
  return r[r.length - 1];
}
function Wd(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: o,
    formData: i,
    json: s,
  } = e;
  if (!(!t || !n || !r)) {
    if (o != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: o,
      };
    if (i != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: i,
        json: void 0,
        text: void 0,
      };
    if (s !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: s,
        text: void 0,
      };
  }
}
function hl(e, t) {
  return t
    ? {
        state: 'loading',
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: 'loading',
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function bw(e, t) {
  return {
    state: 'submitting',
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function po(e, t) {
  return e
    ? {
        state: 'loading',
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: 'loading',
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function jw(e, t) {
  return {
    state: 'submitting',
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function an(e) {
  return {
    state: 'idle',
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function Dw(e, t) {
  try {
    let n = e.sessionStorage.getItem(wg);
    if (n) {
      let r = JSON.parse(n);
      for (let [o, i] of Object.entries(r || {}))
        i && Array.isArray(i) && t.set(o, new Set(i || []));
    }
  } catch {}
}
function Aw(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, o] of t) n[r] = [...o];
    try {
      e.sessionStorage.setItem(wg, JSON.stringify(n));
    } catch (r) {
      er(
        !1,
        'Failed to save applied view transitions in sessionStorage (' + r + ').'
      );
    }
  }
}
/**
 * React Router v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ps() {
  return (
    (Ps = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ps.apply(this, arguments)
  );
}
const ci = k.createContext(null),
  Wc = k.createContext(null),
  ir = k.createContext(null),
  Ea = k.createContext(null),
  Dn = k.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Eg = k.createContext(null);
function Mw(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  fi() || H(!1);
  let { basename: r, navigator: o } = k.useContext(ir),
    { hash: i, pathname: s, search: a } = ka(e, { relative: n }),
    l = s;
  return (
    r !== '/' && (l = s === '/' ? r : Kt([r, s])),
    o.createHref({ pathname: l, search: a, hash: i })
  );
}
function fi() {
  return k.useContext(Ea) != null;
}
function di() {
  return fi() || H(!1), k.useContext(Ea).location;
}
function kg(e) {
  k.useContext(ir).static || k.useLayoutEffect(e);
}
function Pg() {
  let { isDataRoute: e } = k.useContext(Dn);
  return e ? Gw() : $w();
}
function $w() {
  fi() || H(!1);
  let e = k.useContext(ci),
    { basename: t, navigator: n } = k.useContext(ir),
    { matches: r } = k.useContext(Dn),
    { pathname: o } = di(),
    i = JSON.stringify(Ca(r).map((l) => l.pathnameBase)),
    s = k.useRef(!1);
  return (
    kg(() => {
      s.current = !0;
    }),
    k.useCallback(
      function (l, u) {
        if ((u === void 0 && (u = {}), !s.current)) return;
        if (typeof l == 'number') {
          n.go(l);
          return;
        }
        let c = Bc(l, JSON.parse(i), o, u.relative === 'path');
        e == null &&
          t !== '/' &&
          (c.pathname = c.pathname === '/' ? t : Kt([t, c.pathname])),
          (u.replace ? n.replace : n.push)(c, u.state, u);
      },
      [t, n, i, o, e]
    )
  );
}
const Fw = k.createContext(null);
function Iw(e) {
  let t = k.useContext(Dn).outlet;
  return t && k.createElement(Fw.Provider, { value: e }, t);
}
function ka(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = k.useContext(Dn),
    { pathname: o } = di(),
    i = JSON.stringify(Ca(r).map((s) => s.pathnameBase));
  return k.useMemo(() => Bc(e, JSON.parse(i), o, n === 'path'), [e, i, o, n]);
}
function Uw(e, t, n) {
  fi() || H(!1);
  let { navigator: r } = k.useContext(ir),
    { matches: o } = k.useContext(Dn),
    i = o[o.length - 1],
    s = i ? i.params : {};
  i && i.pathname;
  let a = i ? i.pathnameBase : '/';
  i && i.route;
  let l = di(),
    u;
  if (t) {
    var c;
    let y = typeof t == 'string' ? en(t) : t;
    a === '/' || ((c = y.pathname) != null && c.startsWith(a)) || H(!1),
      (u = y);
  } else u = l;
  let f = u.pathname || '/',
    d = a === '/' ? f : f.slice(a.length) || '/',
    w = Cr(e, { pathname: d }),
    p = Ww(
      w &&
        w.map((y) =>
          Object.assign({}, y, {
            params: Object.assign({}, s, y.params),
            pathname: Kt([
              a,
              r.encodeLocation
                ? r.encodeLocation(y.pathname).pathname
                : y.pathname,
            ]),
            pathnameBase:
              y.pathnameBase === '/'
                ? a
                : Kt([
                    a,
                    r.encodeLocation
                      ? r.encodeLocation(y.pathnameBase).pathname
                      : y.pathnameBase,
                  ]),
          })
        ),
      o,
      n
    );
  return t && p
    ? k.createElement(
        Ea.Provider,
        {
          value: {
            location: Ps(
              {
                pathname: '/',
                search: '',
                hash: '',
                state: null,
                key: 'default',
              },
              u
            ),
            navigationType: we.Pop,
          },
        },
        p
      )
    : p;
}
function zw() {
  let e = qw(),
    t = gg(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' },
    i = null;
  return k.createElement(
    k.Fragment,
    null,
    k.createElement('h2', null, 'Unexpected Application Error!'),
    k.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? k.createElement('pre', { style: o }, n) : null,
    i
  );
}
const Bw = k.createElement(zw, null);
class Vw extends k.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== 'idle' && t.revalidation === 'idle')
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      'React Router caught the following error during render',
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? k.createElement(
          Dn.Provider,
          { value: this.props.routeContext },
          k.createElement(Eg.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Hw(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = k.useContext(ci);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    k.createElement(Dn.Provider, { value: t }, r)
  );
}
function Ww(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var o;
    if ((o = n) != null && o.errors) e = n.matches;
    else return null;
  }
  let i = e,
    s = (r = n) == null ? void 0 : r.errors;
  if (s != null) {
    let a = i.findIndex(
      (l) => l.route.id && (s == null ? void 0 : s[l.route.id])
    );
    a >= 0 || H(!1), (i = i.slice(0, Math.min(i.length, a + 1)));
  }
  return i.reduceRight((a, l, u) => {
    let c = l.route.id ? (s == null ? void 0 : s[l.route.id]) : null,
      f = null;
    n && (f = l.route.errorElement || Bw);
    let d = t.concat(i.slice(0, u + 1)),
      w = () => {
        let p;
        return (
          c
            ? (p = f)
            : l.route.Component
              ? (p = k.createElement(l.route.Component, null))
              : l.route.element
                ? (p = l.route.element)
                : (p = a),
          k.createElement(Hw, {
            match: l,
            routeContext: { outlet: a, matches: d, isDataRoute: n != null },
            children: p,
          })
        );
      };
    return n && (l.route.ErrorBoundary || l.route.errorElement || u === 0)
      ? k.createElement(Vw, {
          location: n.location,
          revalidation: n.revalidation,
          component: f,
          error: c,
          children: w(),
          routeContext: { outlet: null, matches: d, isDataRoute: !0 },
        })
      : w();
  }, null);
}
var Rg = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      e
    );
  })(Rg || {}),
  Rs = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseLoaderData = 'useLoaderData'),
      (e.UseActionData = 'useActionData'),
      (e.UseRouteError = 'useRouteError'),
      (e.UseNavigation = 'useNavigation'),
      (e.UseRouteLoaderData = 'useRouteLoaderData'),
      (e.UseMatches = 'useMatches'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      (e.UseRouteId = 'useRouteId'),
      e
    );
  })(Rs || {});
function Kw(e) {
  let t = k.useContext(ci);
  return t || H(!1), t;
}
function Qw(e) {
  let t = k.useContext(Wc);
  return t || H(!1), t;
}
function Jw(e) {
  let t = k.useContext(Dn);
  return t || H(!1), t;
}
function Lg(e) {
  let t = Jw(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || H(!1), n.route.id;
}
function qw() {
  var e;
  let t = k.useContext(Eg),
    n = Qw(Rs.UseRouteError),
    r = Lg(Rs.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function Gw() {
  let { router: e } = Kw(Rg.UseNavigateStable),
    t = Lg(Rs.UseNavigateStable),
    n = k.useRef(!1);
  return (
    kg(() => {
      n.current = !0;
    }),
    k.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof o == 'number'
              ? e.navigate(o)
              : e.navigate(o, Ps({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
function Yw(e) {
  return Iw(e.context);
}
function Xw(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: o = we.Pop,
    navigator: i,
    static: s = !1,
  } = e;
  fi() && H(!1);
  let a = t.replace(/^\/*/, '/'),
    l = k.useMemo(() => ({ basename: a, navigator: i, static: s }), [a, i, s]);
  typeof r == 'string' && (r = en(r));
  let {
      pathname: u = '/',
      search: c = '',
      hash: f = '',
      state: d = null,
      key: w = 'default',
    } = r,
    p = k.useMemo(() => {
      let y = On(u, a);
      return y == null
        ? null
        : {
            location: { pathname: y, search: c, hash: f, state: d, key: w },
            navigationType: o,
          };
    }, [a, u, c, f, d, w, o]);
  return p == null
    ? null
    : k.createElement(
        ir.Provider,
        { value: l },
        k.createElement(Ea.Provider, { children: n, value: p })
      );
}
new Promise(() => {});
function Zw(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: k.createElement(e.Component),
        Component: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: k.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function zr() {
  return (
    (zr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    zr.apply(this, arguments)
  );
}
function Og(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function e2(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function t2(e, t) {
  return e.button === 0 && (!t || t === '_self') && !e2(e);
}
const n2 = [
    'onClick',
    'relative',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'preventScrollReset',
    'unstable_viewTransition',
  ],
  r2 = [
    'aria-current',
    'caseSensitive',
    'className',
    'end',
    'style',
    'to',
    'unstable_viewTransition',
    'children',
  ];
function o2(e, t) {
  return Ew({
    basename: t == null ? void 0 : t.basename,
    future: zr({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: Kv({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || i2(),
    routes: e,
    mapRouteProperties: Zw,
    window: t == null ? void 0 : t.window,
  }).initialize();
}
function i2() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = zr({}, t, { errors: s2(t.errors) })), t;
}
function s2(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, o] of t)
    if (o && o.__type === 'RouteErrorResponse')
      n[r] = new Vc(o.status, o.statusText, o.data, o.internal === !0);
    else if (o && o.__type === 'Error') {
      if (o.__subType) {
        let i = window[o.__subType];
        if (typeof i == 'function')
          try {
            let s = new i(o.message);
            (s.stack = ''), (n[r] = s);
          } catch {}
      }
      if (n[r] == null) {
        let i = new Error(o.message);
        (i.stack = ''), (n[r] = i);
      }
    } else n[r] = o;
  return n;
}
const Ng = k.createContext({ isTransitioning: !1 }),
  a2 = k.createContext(new Map()),
  l2 = 'startTransition',
  Kd = K1[l2];
function u2(e) {
  Kd ? Kd(e) : e();
}
class c2 {
  constructor() {
    (this.status = 'pending'),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === 'pending' && ((this.status = 'resolved'), t(r));
        }),
          (this.reject = (r) => {
            this.status === 'pending' && ((this.status = 'rejected'), n(r));
          });
      }));
  }
}
function f2(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [o, i] = k.useState(n.state),
    [s, a] = k.useState(),
    [l, u] = k.useState({ isTransitioning: !1 }),
    [c, f] = k.useState(),
    [d, w] = k.useState(),
    [p, y] = k.useState(),
    S = k.useRef(new Map()),
    { v7_startTransition: g } = r || {},
    h = k.useCallback(
      (P) => {
        g ? u2(P) : P();
      },
      [g]
    ),
    v = k.useCallback(
      (P, T) => {
        let { deletedFetchers: M, unstable_viewTransitionOpts: D } = T;
        M.forEach((q) => S.current.delete(q)),
          P.fetchers.forEach((q, Te) => {
            q.data !== void 0 && S.current.set(Te, q.data);
          }),
          !D ||
          n.window == null ||
          typeof n.window.document.startViewTransition != 'function'
            ? h(() => i(P))
            : d && c
              ? (c.resolve(),
                d.skipTransition(),
                y({
                  state: P,
                  currentLocation: D.currentLocation,
                  nextLocation: D.nextLocation,
                }))
              : (a(P),
                u({
                  isTransitioning: !0,
                  currentLocation: D.currentLocation,
                  nextLocation: D.nextLocation,
                }));
      },
      [n.window, d, c, S, h]
    );
  k.useLayoutEffect(() => n.subscribe(v), [n, v]),
    k.useEffect(() => {
      l.isTransitioning && f(new c2());
    }, [l.isTransitioning]),
    k.useEffect(() => {
      if (c && s && n.window) {
        let P = s,
          T = c.promise,
          M = n.window.document.startViewTransition(async () => {
            h(() => i(P)), await T;
          });
        M.finished.finally(() => {
          f(void 0), w(void 0), a(void 0), u({ isTransitioning: !1 });
        }),
          w(M);
      }
    }, [h, s, c, n.window]),
    k.useEffect(() => {
      c && s && o.location.key === s.location.key && c.resolve();
    }, [c, d, o.location, s]),
    k.useEffect(() => {
      !l.isTransitioning &&
        p &&
        (a(p.state),
        u({
          isTransitioning: !0,
          currentLocation: p.currentLocation,
          nextLocation: p.nextLocation,
        }),
        y(void 0));
    }, [l.isTransitioning, p]);
  let m = k.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (P) => n.navigate(P),
        push: (P, T, M) =>
          n.navigate(P, {
            state: T,
            preventScrollReset: M == null ? void 0 : M.preventScrollReset,
          }),
        replace: (P, T, M) =>
          n.navigate(P, {
            replace: !0,
            state: T,
            preventScrollReset: M == null ? void 0 : M.preventScrollReset,
          }),
      }),
      [n]
    ),
    C = n.basename || '/',
    O = k.useMemo(
      () => ({ router: n, navigator: m, static: !1, basename: C }),
      [n, m, C]
    );
  return k.createElement(
    k.Fragment,
    null,
    k.createElement(
      ci.Provider,
      { value: O },
      k.createElement(
        Wc.Provider,
        { value: o },
        k.createElement(
          a2.Provider,
          { value: S.current },
          k.createElement(
            Ng.Provider,
            { value: l },
            k.createElement(
              Xw,
              {
                basename: C,
                location: o.location,
                navigationType: o.historyAction,
                navigator: m,
              },
              o.initialized
                ? k.createElement(d2, { routes: n.routes, state: o })
                : t
            )
          )
        )
      )
    ),
    null
  );
}
function d2(e) {
  let { routes: t, state: n } = e;
  return Uw(t, void 0, n);
}
const p2 =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  h2 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  m2 = k.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: i,
        replace: s,
        state: a,
        target: l,
        to: u,
        preventScrollReset: c,
        unstable_viewTransition: f,
      } = t,
      d = Og(t, n2),
      { basename: w } = k.useContext(ir),
      p,
      y = !1;
    if (typeof u == 'string' && h2.test(u) && ((p = u), p2))
      try {
        let v = new URL(window.location.href),
          m = u.startsWith('//') ? new URL(v.protocol + u) : new URL(u),
          C = On(m.pathname, w);
        m.origin === v.origin && C != null
          ? (u = C + m.search + m.hash)
          : (y = !0);
      } catch {}
    let S = Mw(u, { relative: o }),
      g = y2(u, {
        replace: s,
        state: a,
        target: l,
        preventScrollReset: c,
        relative: o,
        unstable_viewTransition: f,
      });
    function h(v) {
      r && r(v), v.defaultPrevented || g(v);
    }
    return k.createElement(
      'a',
      zr({}, d, { href: p || S, onClick: y || i ? r : h, ref: n, target: l })
    );
  }),
  Ls = k.forwardRef(function (t, n) {
    let {
        'aria-current': r = 'page',
        caseSensitive: o = !1,
        className: i = '',
        end: s = !1,
        style: a,
        to: l,
        unstable_viewTransition: u,
        children: c,
      } = t,
      f = Og(t, r2),
      d = ka(l, { relative: f.relative }),
      w = di(),
      p = k.useContext(Wc),
      { navigator: y } = k.useContext(ir),
      S = p != null && v2(d) && u === !0,
      g = y.encodeLocation ? y.encodeLocation(d).pathname : d.pathname,
      h = w.pathname,
      v =
        p && p.navigation && p.navigation.location
          ? p.navigation.location.pathname
          : null;
    o ||
      ((h = h.toLowerCase()),
      (v = v ? v.toLowerCase() : null),
      (g = g.toLowerCase()));
    let m = h === g || (!s && h.startsWith(g) && h.charAt(g.length) === '/'),
      C =
        v != null &&
        (v === g || (!s && v.startsWith(g) && v.charAt(g.length) === '/')),
      O = { isActive: m, isPending: C, isTransitioning: S },
      P = m ? r : void 0,
      T;
    typeof i == 'function'
      ? (T = i(O))
      : (T = [
          i,
          m ? 'active' : null,
          C ? 'pending' : null,
          S ? 'transitioning' : null,
        ]
          .filter(Boolean)
          .join(' '));
    let M = typeof a == 'function' ? a(O) : a;
    return k.createElement(
      m2,
      zr({}, f, {
        'aria-current': P,
        className: T,
        ref: n,
        style: M,
        to: l,
        unstable_viewTransition: u,
      }),
      typeof c == 'function' ? c(O) : c
    );
  });
var Ou;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState');
})(Ou || (Ou = {}));
var Qd;
(function (e) {
  (e.UseFetcher = 'useFetcher'),
    (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration');
})(Qd || (Qd = {}));
function g2(e) {
  let t = k.useContext(ci);
  return t || H(!1), t;
}
function y2(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: i,
      relative: s,
      unstable_viewTransition: a,
    } = t === void 0 ? {} : t,
    l = Pg(),
    u = di(),
    c = ka(e, { relative: s });
  return k.useCallback(
    (f) => {
      if (t2(f, n)) {
        f.preventDefault();
        let d = r !== void 0 ? r : tr(u) === tr(c);
        l(e, {
          replace: d,
          state: o,
          preventScrollReset: i,
          relative: s,
          unstable_viewTransition: a,
        });
      }
    },
    [u, l, c, r, o, n, e, i, s, a]
  );
}
function v2(e, t) {
  t === void 0 && (t = {});
  let n = k.useContext(Ng);
  n == null && H(!1);
  let { basename: r } = g2(Ou.useViewTransitionState),
    o = ka(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let i = On(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    s = On(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return ku(o.pathname, s) != null || ku(o.pathname, i) != null;
}
function Rt(e) {
  for (
    var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  throw Error(
    '[Immer] minified error nr: ' +
      e +
      (n.length
        ? ' ' +
          n
            .map(function (o) {
              return "'" + o + "'";
            })
            .join(',')
        : '') +
      '. Find the full error at: https://bit.ly/3cXEKWf'
  );
}
function Nn(e) {
  return !!e && !!e[ue];
}
function Xt(e) {
  var t;
  return (
    !!e &&
    ((function (n) {
      if (!n || typeof n != 'object') return !1;
      var r = Object.getPrototypeOf(n);
      if (r === null) return !0;
      var o = Object.hasOwnProperty.call(r, 'constructor') && r.constructor;
      return (
        o === Object ||
        (typeof o == 'function' && Function.toString.call(o) === L2)
      );
    })(e) ||
      Array.isArray(e) ||
      !!e[ep] ||
      !!(!((t = e.constructor) === null || t === void 0) && t[ep]) ||
      Kc(e) ||
      Qc(e))
  );
}
function nr(e, t, n) {
  n === void 0 && (n = !1),
    Qr(e) === 0
      ? (n ? Object.keys : Tr)(e).forEach(function (r) {
          (n && typeof r == 'symbol') || t(r, e[r], e);
        })
      : e.forEach(function (r, o) {
          return t(o, r, e);
        });
}
function Qr(e) {
  var t = e[ue];
  return t
    ? t.i > 3
      ? t.i - 4
      : t.i
    : Array.isArray(e)
      ? 1
      : Kc(e)
        ? 2
        : Qc(e)
          ? 3
          : 0;
}
function _r(e, t) {
  return Qr(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function w2(e, t) {
  return Qr(e) === 2 ? e.get(t) : e[t];
}
function _g(e, t, n) {
  var r = Qr(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
}
function Tg(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t;
}
function Kc(e) {
  return P2 && e instanceof Map;
}
function Qc(e) {
  return R2 && e instanceof Set;
}
function Bn(e) {
  return e.o || e.t;
}
function Jc(e) {
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  var t = jg(e);
  delete t[ue];
  for (var n = Tr(t), r = 0; r < n.length; r++) {
    var o = n[r],
      i = t[o];
    i.writable === !1 && ((i.writable = !0), (i.configurable = !0)),
      (i.get || i.set) &&
        (t[o] = {
          configurable: !0,
          writable: !0,
          enumerable: i.enumerable,
          value: e[o],
        });
  }
  return Object.create(Object.getPrototypeOf(e), t);
}
function qc(e, t) {
  return (
    t === void 0 && (t = !1),
    Gc(e) ||
      Nn(e) ||
      !Xt(e) ||
      (Qr(e) > 1 && (e.set = e.add = e.clear = e.delete = S2),
      Object.freeze(e),
      t &&
        nr(
          e,
          function (n, r) {
            return qc(r, !0);
          },
          !0
        )),
    e
  );
}
function S2() {
  Rt(2);
}
function Gc(e) {
  return e == null || typeof e != 'object' || Object.isFrozen(e);
}
function $t(e) {
  var t = bu[e];
  return t || Rt(18, e), t;
}
function x2(e, t) {
  bu[e] || (bu[e] = t);
}
function Nu() {
  return Zo;
}
function ml(e, t) {
  t && ($t('Patches'), (e.u = []), (e.s = []), (e.v = t));
}
function Os(e) {
  _u(e), e.p.forEach(C2), (e.p = null);
}
function _u(e) {
  e === Zo && (Zo = e.l);
}
function Jd(e) {
  return (Zo = { p: [], l: Zo, h: e, m: !0, _: 0 });
}
function C2(e) {
  var t = e[ue];
  t.i === 0 || t.i === 1 ? t.j() : (t.g = !0);
}
function gl(e, t) {
  t._ = t.p.length;
  var n = t.p[0],
    r = e !== void 0 && e !== n;
  return (
    t.h.O || $t('ES5').S(t, e, r),
    r
      ? (n[ue].P && (Os(t), Rt(4)),
        Xt(e) && ((e = Ns(t, e)), t.l || _s(t, e)),
        t.u && $t('Patches').M(n[ue].t, e, t.u, t.s))
      : (e = Ns(t, n, [])),
    Os(t),
    t.u && t.v(t.u, t.s),
    e !== bg ? e : void 0
  );
}
function Ns(e, t, n) {
  if (Gc(t)) return t;
  var r = t[ue];
  if (!r)
    return (
      nr(
        t,
        function (a, l) {
          return qd(e, r, t, a, l, n);
        },
        !0
      ),
      t
    );
  if (r.A !== e) return t;
  if (!r.P) return _s(e, r.t, !0), r.t;
  if (!r.I) {
    (r.I = !0), r.A._--;
    var o = r.i === 4 || r.i === 5 ? (r.o = Jc(r.k)) : r.o,
      i = o,
      s = !1;
    r.i === 3 && ((i = new Set(o)), o.clear(), (s = !0)),
      nr(i, function (a, l) {
        return qd(e, r, o, a, l, n, s);
      }),
      _s(e, o, !1),
      n && e.u && $t('Patches').N(r, n, e.u, e.s);
  }
  return r.o;
}
function qd(e, t, n, r, o, i, s) {
  if (Nn(o)) {
    var a = Ns(e, o, i && t && t.i !== 3 && !_r(t.R, r) ? i.concat(r) : void 0);
    if ((_g(n, r, a), !Nn(a))) return;
    e.m = !1;
  } else s && n.add(o);
  if (Xt(o) && !Gc(o)) {
    if (!e.h.D && e._ < 1) return;
    Ns(e, o), (t && t.A.l) || _s(e, o);
  }
}
function _s(e, t, n) {
  n === void 0 && (n = !1), !e.l && e.h.D && e.m && qc(t, n);
}
function yl(e, t) {
  var n = e[ue];
  return (n ? Bn(n) : e)[t];
}
function Gd(e, t) {
  if (t in e)
    for (var n = Object.getPrototypeOf(e); n; ) {
      var r = Object.getOwnPropertyDescriptor(n, t);
      if (r) return r;
      n = Object.getPrototypeOf(n);
    }
}
function dn(e) {
  e.P || ((e.P = !0), e.l && dn(e.l));
}
function vl(e) {
  e.o || (e.o = Jc(e.t));
}
function Tu(e, t, n) {
  var r = Kc(t)
    ? $t('MapSet').F(t, n)
    : Qc(t)
      ? $t('MapSet').T(t, n)
      : e.O
        ? (function (o, i) {
            var s = Array.isArray(o),
              a = {
                i: s ? 1 : 0,
                A: i ? i.A : Nu(),
                P: !1,
                I: !1,
                R: {},
                l: i,
                t: o,
                k: null,
                o: null,
                j: null,
                C: !1,
              },
              l = a,
              u = ei;
            s && ((l = [a]), (u = Eo));
            var c = Proxy.revocable(l, u),
              f = c.revoke,
              d = c.proxy;
            return (a.k = d), (a.j = f), d;
          })(t, n)
        : $t('ES5').J(t, n);
  return (n ? n.A : Nu()).p.push(r), r;
}
function E2(e) {
  return (
    Nn(e) || Rt(22, e),
    (function t(n) {
      if (!Xt(n)) return n;
      var r,
        o = n[ue],
        i = Qr(n);
      if (o) {
        if (!o.P && (o.i < 4 || !$t('ES5').K(o))) return o.t;
        (o.I = !0), (r = Yd(n, i)), (o.I = !1);
      } else r = Yd(n, i);
      return (
        nr(r, function (s, a) {
          (o && w2(o.t, s) === a) || _g(r, s, t(a));
        }),
        i === 3 ? new Set(r) : r
      );
    })(e)
  );
}
function Yd(e, t) {
  switch (t) {
    case 2:
      return new Map(e);
    case 3:
      return Array.from(e);
  }
  return Jc(e);
}
function k2() {
  function e(i, s) {
    var a = o[i];
    return (
      a
        ? (a.enumerable = s)
        : (o[i] = a =
            {
              configurable: !0,
              enumerable: s,
              get: function () {
                var l = this[ue];
                return ei.get(l, i);
              },
              set: function (l) {
                var u = this[ue];
                ei.set(u, i, l);
              },
            }),
      a
    );
  }
  function t(i) {
    for (var s = i.length - 1; s >= 0; s--) {
      var a = i[s][ue];
      if (!a.P)
        switch (a.i) {
          case 5:
            r(a) && dn(a);
            break;
          case 4:
            n(a) && dn(a);
        }
    }
  }
  function n(i) {
    for (var s = i.t, a = i.k, l = Tr(a), u = l.length - 1; u >= 0; u--) {
      var c = l[u];
      if (c !== ue) {
        var f = s[c];
        if (f === void 0 && !_r(s, c)) return !0;
        var d = a[c],
          w = d && d[ue];
        if (w ? w.t !== f : !Tg(d, f)) return !0;
      }
    }
    var p = !!s[ue];
    return l.length !== Tr(s).length + (p ? 0 : 1);
  }
  function r(i) {
    var s = i.k;
    if (s.length !== i.t.length) return !0;
    var a = Object.getOwnPropertyDescriptor(s, s.length - 1);
    if (a && !a.get) return !0;
    for (var l = 0; l < s.length; l++) if (!s.hasOwnProperty(l)) return !0;
    return !1;
  }
  var o = {};
  x2('ES5', {
    J: function (i, s) {
      var a = Array.isArray(i),
        l = (function (c, f) {
          if (c) {
            for (var d = Array(f.length), w = 0; w < f.length; w++)
              Object.defineProperty(d, '' + w, e(w, !0));
            return d;
          }
          var p = jg(f);
          delete p[ue];
          for (var y = Tr(p), S = 0; S < y.length; S++) {
            var g = y[S];
            p[g] = e(g, c || !!p[g].enumerable);
          }
          return Object.create(Object.getPrototypeOf(f), p);
        })(a, i),
        u = {
          i: a ? 5 : 4,
          A: s ? s.A : Nu(),
          P: !1,
          I: !1,
          R: {},
          l: s,
          t: i,
          k: l,
          o: null,
          g: !1,
          C: !1,
        };
      return Object.defineProperty(l, ue, { value: u, writable: !0 }), l;
    },
    S: function (i, s, a) {
      a
        ? Nn(s) && s[ue].A === i && t(i.p)
        : (i.u &&
            (function l(u) {
              if (u && typeof u == 'object') {
                var c = u[ue];
                if (c) {
                  var f = c.t,
                    d = c.k,
                    w = c.R,
                    p = c.i;
                  if (p === 4)
                    nr(d, function (v) {
                      v !== ue &&
                        (f[v] !== void 0 || _r(f, v)
                          ? w[v] || l(d[v])
                          : ((w[v] = !0), dn(c)));
                    }),
                      nr(f, function (v) {
                        d[v] !== void 0 || _r(d, v) || ((w[v] = !1), dn(c));
                      });
                  else if (p === 5) {
                    if ((r(c) && (dn(c), (w.length = !0)), d.length < f.length))
                      for (var y = d.length; y < f.length; y++) w[y] = !1;
                    else for (var S = f.length; S < d.length; S++) w[S] = !0;
                    for (
                      var g = Math.min(d.length, f.length), h = 0;
                      h < g;
                      h++
                    )
                      d.hasOwnProperty(h) || (w[h] = !0),
                        w[h] === void 0 && l(d[h]);
                  }
                }
              }
            })(i.p[0]),
          t(i.p));
    },
    K: function (i) {
      return i.i === 4 ? n(i) : r(i);
    },
  });
}
var Xd,
  Zo,
  Yc = typeof Symbol < 'u' && typeof Symbol('x') == 'symbol',
  P2 = typeof Map < 'u',
  R2 = typeof Set < 'u',
  Zd = typeof Proxy < 'u' && Proxy.revocable !== void 0 && typeof Reflect < 'u',
  bg = Yc
    ? Symbol.for('immer-nothing')
    : (((Xd = {})['immer-nothing'] = !0), Xd),
  ep = Yc ? Symbol.for('immer-draftable') : '__$immer_draftable',
  ue = Yc ? Symbol.for('immer-state') : '__$immer_state',
  L2 = '' + Object.prototype.constructor,
  Tr =
    typeof Reflect < 'u' && Reflect.ownKeys
      ? Reflect.ownKeys
      : Object.getOwnPropertySymbols !== void 0
        ? function (e) {
            return Object.getOwnPropertyNames(e).concat(
              Object.getOwnPropertySymbols(e)
            );
          }
        : Object.getOwnPropertyNames,
  jg =
    Object.getOwnPropertyDescriptors ||
    function (e) {
      var t = {};
      return (
        Tr(e).forEach(function (n) {
          t[n] = Object.getOwnPropertyDescriptor(e, n);
        }),
        t
      );
    },
  bu = {},
  ei = {
    get: function (e, t) {
      if (t === ue) return e;
      var n = Bn(e);
      if (!_r(n, t))
        return (function (o, i, s) {
          var a,
            l = Gd(i, s);
          return l
            ? 'value' in l
              ? l.value
              : (a = l.get) === null || a === void 0
                ? void 0
                : a.call(o.k)
            : void 0;
        })(e, n, t);
      var r = n[t];
      return e.I || !Xt(r)
        ? r
        : r === yl(e.t, t)
          ? (vl(e), (e.o[t] = Tu(e.A.h, r, e)))
          : r;
    },
    has: function (e, t) {
      return t in Bn(e);
    },
    ownKeys: function (e) {
      return Reflect.ownKeys(Bn(e));
    },
    set: function (e, t, n) {
      var r = Gd(Bn(e), t);
      if (r != null && r.set) return r.set.call(e.k, n), !0;
      if (!e.P) {
        var o = yl(Bn(e), t),
          i = o == null ? void 0 : o[ue];
        if (i && i.t === n) return (e.o[t] = n), (e.R[t] = !1), !0;
        if (Tg(n, o) && (n !== void 0 || _r(e.t, t))) return !0;
        vl(e), dn(e);
      }
      return (
        (e.o[t] === n && (n !== void 0 || t in e.o)) ||
          (Number.isNaN(n) && Number.isNaN(e.o[t])) ||
          ((e.o[t] = n), (e.R[t] = !0)),
        !0
      );
    },
    deleteProperty: function (e, t) {
      return (
        yl(e.t, t) !== void 0 || t in e.t
          ? ((e.R[t] = !1), vl(e), dn(e))
          : delete e.R[t],
        e.o && delete e.o[t],
        !0
      );
    },
    getOwnPropertyDescriptor: function (e, t) {
      var n = Bn(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return (
        r && {
          writable: !0,
          configurable: e.i !== 1 || t !== 'length',
          enumerable: r.enumerable,
          value: n[t],
        }
      );
    },
    defineProperty: function () {
      Rt(11);
    },
    getPrototypeOf: function (e) {
      return Object.getPrototypeOf(e.t);
    },
    setPrototypeOf: function () {
      Rt(12);
    },
  },
  Eo = {};
nr(ei, function (e, t) {
  Eo[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
}),
  (Eo.deleteProperty = function (e, t) {
    return Eo.set.call(this, e, t, void 0);
  }),
  (Eo.set = function (e, t, n) {
    return ei.set.call(this, e[0], t, n, e[0]);
  });
var O2 = (function () {
    function e(n) {
      var r = this;
      (this.O = Zd),
        (this.D = !0),
        (this.produce = function (o, i, s) {
          if (typeof o == 'function' && typeof i != 'function') {
            var a = i;
            i = o;
            var l = r;
            return function (y) {
              var S = this;
              y === void 0 && (y = a);
              for (
                var g = arguments.length, h = Array(g > 1 ? g - 1 : 0), v = 1;
                v < g;
                v++
              )
                h[v - 1] = arguments[v];
              return l.produce(y, function (m) {
                var C;
                return (C = i).call.apply(C, [S, m].concat(h));
              });
            };
          }
          var u;
          if (
            (typeof i != 'function' && Rt(6),
            s !== void 0 && typeof s != 'function' && Rt(7),
            Xt(o))
          ) {
            var c = Jd(r),
              f = Tu(r, o, void 0),
              d = !0;
            try {
              (u = i(f)), (d = !1);
            } finally {
              d ? Os(c) : _u(c);
            }
            return typeof Promise < 'u' && u instanceof Promise
              ? u.then(
                  function (y) {
                    return ml(c, s), gl(y, c);
                  },
                  function (y) {
                    throw (Os(c), y);
                  }
                )
              : (ml(c, s), gl(u, c));
          }
          if (!o || typeof o != 'object') {
            if (
              ((u = i(o)) === void 0 && (u = o),
              u === bg && (u = void 0),
              r.D && qc(u, !0),
              s)
            ) {
              var w = [],
                p = [];
              $t('Patches').M(o, u, w, p), s(w, p);
            }
            return u;
          }
          Rt(21, o);
        }),
        (this.produceWithPatches = function (o, i) {
          if (typeof o == 'function')
            return function (u) {
              for (
                var c = arguments.length, f = Array(c > 1 ? c - 1 : 0), d = 1;
                d < c;
                d++
              )
                f[d - 1] = arguments[d];
              return r.produceWithPatches(u, function (w) {
                return o.apply(void 0, [w].concat(f));
              });
            };
          var s,
            a,
            l = r.produce(o, i, function (u, c) {
              (s = u), (a = c);
            });
          return typeof Promise < 'u' && l instanceof Promise
            ? l.then(function (u) {
                return [u, s, a];
              })
            : [l, s, a];
        }),
        typeof (n == null ? void 0 : n.useProxies) == 'boolean' &&
          this.setUseProxies(n.useProxies),
        typeof (n == null ? void 0 : n.autoFreeze) == 'boolean' &&
          this.setAutoFreeze(n.autoFreeze);
    }
    var t = e.prototype;
    return (
      (t.createDraft = function (n) {
        Xt(n) || Rt(8), Nn(n) && (n = E2(n));
        var r = Jd(this),
          o = Tu(this, n, void 0);
        return (o[ue].C = !0), _u(r), o;
      }),
      (t.finishDraft = function (n, r) {
        var o = n && n[ue],
          i = o.A;
        return ml(i, r), gl(void 0, i);
      }),
      (t.setAutoFreeze = function (n) {
        this.D = n;
      }),
      (t.setUseProxies = function (n) {
        n && !Zd && Rt(20), (this.O = n);
      }),
      (t.applyPatches = function (n, r) {
        var o;
        for (o = r.length - 1; o >= 0; o--) {
          var i = r[o];
          if (i.path.length === 0 && i.op === 'replace') {
            n = i.value;
            break;
          }
        }
        o > -1 && (r = r.slice(o + 1));
        var s = $t('Patches').$;
        return Nn(n)
          ? s(n, r)
          : this.produce(n, function (a) {
              return s(a, r);
            });
      }),
      e
    );
  })(),
  ot = new O2(),
  Dg = ot.produce;
ot.produceWithPatches.bind(ot);
ot.setAutoFreeze.bind(ot);
ot.setUseProxies.bind(ot);
ot.applyPatches.bind(ot);
ot.createDraft.bind(ot);
ot.finishDraft.bind(ot);
function ti(e) {
  '@babel/helpers - typeof';
  return (
    (ti =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          }),
    ti(e)
  );
}
function N2(e, t) {
  if (ti(e) !== 'object' || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || 'default');
    if (ti(r) !== 'object') return r;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function Ag(e) {
  var t = N2(e, 'string');
  return ti(t) === 'symbol' ? t : String(t);
}
function _2(e, t, n) {
  return (
    (t = Ag(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function tp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function np(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? tp(Object(n), !0).forEach(function (r) {
          _2(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : tp(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function Fe(e) {
  return (
    'Minified Redux error #' +
    e +
    '; visit https://redux.js.org/Errors?code=' +
    e +
    ' for the full message or use the non-minified dev environment for full errors. '
  );
}
var rp = (function () {
    return (typeof Symbol == 'function' && Symbol.observable) || '@@observable';
  })(),
  wl = function () {
    return Math.random().toString(36).substring(7).split('').join('.');
  },
  Ts = {
    INIT: '@@redux/INIT' + wl(),
    REPLACE: '@@redux/REPLACE' + wl(),
    PROBE_UNKNOWN_ACTION: function () {
      return '@@redux/PROBE_UNKNOWN_ACTION' + wl();
    },
  };
function T2(e) {
  if (typeof e != 'object' || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Mg(e, t, n) {
  var r;
  if (
    (typeof t == 'function' && typeof n == 'function') ||
    (typeof n == 'function' && typeof arguments[3] == 'function')
  )
    throw new Error(Fe(0));
  if (
    (typeof t == 'function' && typeof n > 'u' && ((n = t), (t = void 0)),
    typeof n < 'u')
  ) {
    if (typeof n != 'function') throw new Error(Fe(1));
    return n(Mg)(e, t);
  }
  if (typeof e != 'function') throw new Error(Fe(2));
  var o = e,
    i = t,
    s = [],
    a = s,
    l = !1;
  function u() {
    a === s && (a = s.slice());
  }
  function c() {
    if (l) throw new Error(Fe(3));
    return i;
  }
  function f(y) {
    if (typeof y != 'function') throw new Error(Fe(4));
    if (l) throw new Error(Fe(5));
    var S = !0;
    return (
      u(),
      a.push(y),
      function () {
        if (S) {
          if (l) throw new Error(Fe(6));
          (S = !1), u();
          var h = a.indexOf(y);
          a.splice(h, 1), (s = null);
        }
      }
    );
  }
  function d(y) {
    if (!T2(y)) throw new Error(Fe(7));
    if (typeof y.type > 'u') throw new Error(Fe(8));
    if (l) throw new Error(Fe(9));
    try {
      (l = !0), (i = o(i, y));
    } finally {
      l = !1;
    }
    for (var S = (s = a), g = 0; g < S.length; g++) {
      var h = S[g];
      h();
    }
    return y;
  }
  function w(y) {
    if (typeof y != 'function') throw new Error(Fe(10));
    (o = y), d({ type: Ts.REPLACE });
  }
  function p() {
    var y,
      S = f;
    return (
      (y = {
        subscribe: function (h) {
          if (typeof h != 'object' || h === null) throw new Error(Fe(11));
          function v() {
            h.next && h.next(c());
          }
          v();
          var m = S(v);
          return { unsubscribe: m };
        },
      }),
      (y[rp] = function () {
        return this;
      }),
      y
    );
  }
  return (
    d({ type: Ts.INIT }),
    (r = { dispatch: d, subscribe: f, getState: c, replaceReducer: w }),
    (r[rp] = p),
    r
  );
}
function b2(e) {
  Object.keys(e).forEach(function (t) {
    var n = e[t],
      r = n(void 0, { type: Ts.INIT });
    if (typeof r > 'u') throw new Error(Fe(12));
    if (typeof n(void 0, { type: Ts.PROBE_UNKNOWN_ACTION() }) > 'u')
      throw new Error(Fe(13));
  });
}
function j2(e) {
  for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
    var o = t[r];
    typeof e[o] == 'function' && (n[o] = e[o]);
  }
  var i = Object.keys(n),
    s;
  try {
    b2(n);
  } catch (a) {
    s = a;
  }
  return function (l, u) {
    if ((l === void 0 && (l = {}), s)) throw s;
    for (var c = !1, f = {}, d = 0; d < i.length; d++) {
      var w = i[d],
        p = n[w],
        y = l[w],
        S = p(y, u);
      if (typeof S > 'u') throw (u && u.type, new Error(Fe(14)));
      (f[w] = S), (c = c || S !== y);
    }
    return (c = c || i.length !== Object.keys(l).length), c ? f : l;
  };
}
function bs() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t.length === 0
    ? function (r) {
        return r;
      }
    : t.length === 1
      ? t[0]
      : t.reduce(function (r, o) {
          return function () {
            return r(o.apply(void 0, arguments));
          };
        });
}
function D2() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function (r) {
    return function () {
      var o = r.apply(void 0, arguments),
        i = function () {
          throw new Error(Fe(15));
        },
        s = {
          getState: o.getState,
          dispatch: function () {
            return i.apply(void 0, arguments);
          },
        },
        a = t.map(function (l) {
          return l(s);
        });
      return (
        (i = bs.apply(void 0, a)(o.dispatch)),
        np(np({}, o), {}, { dispatch: i })
      );
    };
  };
}
function $g(e) {
  var t = function (r) {
    var o = r.dispatch,
      i = r.getState;
    return function (s) {
      return function (a) {
        return typeof a == 'function' ? a(o, i, e) : s(a);
      };
    };
  };
  return t;
}
var Fg = $g();
Fg.withExtraArgument = $g;
const op = Fg;
var Ig =
    (globalThis && globalThis.__extends) ||
    (function () {
      var e = function (t, n) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (r, o) {
                r.__proto__ = o;
              }) ||
            function (r, o) {
              for (var i in o)
                Object.prototype.hasOwnProperty.call(o, i) && (r[i] = o[i]);
            }),
          e(t, n)
        );
      };
      return function (t, n) {
        if (typeof n != 'function' && n !== null)
          throw new TypeError(
            'Class extends value ' + String(n) + ' is not a constructor or null'
          );
        e(t, n);
        function r() {
          this.constructor = t;
        }
        t.prototype =
          n === null
            ? Object.create(n)
            : ((r.prototype = n.prototype), new r());
      };
    })(),
  A2 =
    (globalThis && globalThis.__generator) ||
    function (e, t) {
      var n = {
          label: 0,
          sent: function () {
            if (i[0] & 1) throw i[1];
            return i[1];
          },
          trys: [],
          ops: [],
        },
        r,
        o,
        i,
        s;
      return (
        (s = { next: a(0), throw: a(1), return: a(2) }),
        typeof Symbol == 'function' &&
          (s[Symbol.iterator] = function () {
            return this;
          }),
        s
      );
      function a(u) {
        return function (c) {
          return l([u, c]);
        };
      }
      function l(u) {
        if (r) throw new TypeError('Generator is already executing.');
        for (; n; )
          try {
            if (
              ((r = 1),
              o &&
                (i =
                  u[0] & 2
                    ? o.return
                    : u[0]
                      ? o.throw || ((i = o.return) && i.call(o), 0)
                      : o.next) &&
                !(i = i.call(o, u[1])).done)
            )
              return i;
            switch (((o = 0), i && (u = [u[0] & 2, i.value]), u[0])) {
              case 0:
              case 1:
                i = u;
                break;
              case 4:
                return n.label++, { value: u[1], done: !1 };
              case 5:
                n.label++, (o = u[1]), (u = [0]);
                continue;
              case 7:
                (u = n.ops.pop()), n.trys.pop();
                continue;
              default:
                if (
                  ((i = n.trys),
                  !(i = i.length > 0 && i[i.length - 1]) &&
                    (u[0] === 6 || u[0] === 2))
                ) {
                  n = 0;
                  continue;
                }
                if (u[0] === 3 && (!i || (u[1] > i[0] && u[1] < i[3]))) {
                  n.label = u[1];
                  break;
                }
                if (u[0] === 6 && n.label < i[1]) {
                  (n.label = i[1]), (i = u);
                  break;
                }
                if (i && n.label < i[2]) {
                  (n.label = i[2]), n.ops.push(u);
                  break;
                }
                i[2] && n.ops.pop(), n.trys.pop();
                continue;
            }
            u = t.call(e, n);
          } catch (c) {
            (u = [6, c]), (o = 0);
          } finally {
            r = i = 0;
          }
        if (u[0] & 5) throw u[1];
        return { value: u[0] ? u[1] : void 0, done: !0 };
      }
    },
  Br =
    (globalThis && globalThis.__spreadArray) ||
    function (e, t) {
      for (var n = 0, r = t.length, o = e.length; n < r; n++, o++) e[o] = t[n];
      return e;
    },
  M2 = Object.defineProperty,
  $2 = Object.defineProperties,
  F2 = Object.getOwnPropertyDescriptors,
  ip = Object.getOwnPropertySymbols,
  I2 = Object.prototype.hasOwnProperty,
  U2 = Object.prototype.propertyIsEnumerable,
  sp = function (e, t, n) {
    return t in e
      ? M2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  En = function (e, t) {
    for (var n in t || (t = {})) I2.call(t, n) && sp(e, n, t[n]);
    if (ip)
      for (var r = 0, o = ip(t); r < o.length; r++) {
        var n = o[r];
        U2.call(t, n) && sp(e, n, t[n]);
      }
    return e;
  },
  Sl = function (e, t) {
    return $2(e, F2(t));
  },
  z2 = function (e, t, n) {
    return new Promise(function (r, o) {
      var i = function (l) {
          try {
            a(n.next(l));
          } catch (u) {
            o(u);
          }
        },
        s = function (l) {
          try {
            a(n.throw(l));
          } catch (u) {
            o(u);
          }
        },
        a = function (l) {
          return l.done ? r(l.value) : Promise.resolve(l.value).then(i, s);
        };
      a((n = n.apply(e, t)).next());
    });
  },
  B2 =
    typeof window < 'u' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == 'object'
              ? bs
              : bs.apply(null, arguments);
        };
function V2(e) {
  if (typeof e != 'object' || e === null) return !1;
  var t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  for (var n = t; Object.getPrototypeOf(n) !== null; )
    n = Object.getPrototypeOf(n);
  return t === n;
}
function kn(e, t) {
  function n() {
    for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
    if (t) {
      var i = t.apply(void 0, r);
      if (!i) throw new Error('prepareAction did not return an object');
      return En(
        En({ type: e, payload: i.payload }, 'meta' in i && { meta: i.meta }),
        'error' in i && { error: i.error }
      );
    }
    return { type: e, payload: r[0] };
  }
  return (
    (n.toString = function () {
      return '' + e;
    }),
    (n.type = e),
    (n.match = function (r) {
      return r.type === e;
    }),
    n
  );
}
var H2 = (function (e) {
    Ig(t, e);
    function t() {
      for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
      var o = e.apply(this, n) || this;
      return Object.setPrototypeOf(o, t.prototype), o;
    }
    return (
      Object.defineProperty(t, Symbol.species, {
        get: function () {
          return t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.concat = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        return e.prototype.concat.apply(this, n);
      }),
      (t.prototype.prepend = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        return n.length === 1 && Array.isArray(n[0])
          ? new (t.bind.apply(t, Br([void 0], n[0].concat(this))))()
          : new (t.bind.apply(t, Br([void 0], n.concat(this))))();
      }),
      t
    );
  })(Array),
  W2 = (function (e) {
    Ig(t, e);
    function t() {
      for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
      var o = e.apply(this, n) || this;
      return Object.setPrototypeOf(o, t.prototype), o;
    }
    return (
      Object.defineProperty(t, Symbol.species, {
        get: function () {
          return t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.concat = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        return e.prototype.concat.apply(this, n);
      }),
      (t.prototype.prepend = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        return n.length === 1 && Array.isArray(n[0])
          ? new (t.bind.apply(t, Br([void 0], n[0].concat(this))))()
          : new (t.bind.apply(t, Br([void 0], n.concat(this))))();
      }),
      t
    );
  })(Array);
function ju(e) {
  return Xt(e) ? Dg(e, function () {}) : e;
}
function K2(e) {
  return typeof e == 'boolean';
}
function Q2() {
  return function (t) {
    return J2(t);
  };
}
function J2(e) {
  e === void 0 && (e = {});
  var t = e.thunk,
    n = t === void 0 ? !0 : t;
  e.immutableCheck, e.serializableCheck, e.actionCreatorCheck;
  var r = new H2();
  return (
    n && (K2(n) ? r.push(op) : r.push(op.withExtraArgument(n.extraArgument))), r
  );
}
var q2 = !0;
function G2(e) {
  var t = Q2(),
    n = e || {},
    r = n.reducer,
    o = r === void 0 ? void 0 : r,
    i = n.middleware,
    s = i === void 0 ? t() : i,
    a = n.devTools,
    l = a === void 0 ? !0 : a,
    u = n.preloadedState,
    c = u === void 0 ? void 0 : u,
    f = n.enhancers,
    d = f === void 0 ? void 0 : f,
    w;
  if (typeof o == 'function') w = o;
  else if (V2(o)) w = j2(o);
  else
    throw new Error(
      '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers'
    );
  var p = s;
  typeof p == 'function' && (p = p(t));
  var y = D2.apply(void 0, p),
    S = bs;
  l && (S = B2(En({ trace: !q2 }, typeof l == 'object' && l)));
  var g = new W2(y),
    h = g;
  Array.isArray(d) ? (h = Br([y], d)) : typeof d == 'function' && (h = d(g));
  var v = S.apply(void 0, h);
  return Mg(w, c, v);
}
function Ug(e) {
  var t = {},
    n = [],
    r,
    o = {
      addCase: function (i, s) {
        var a = typeof i == 'string' ? i : i.type;
        if (!a)
          throw new Error(
            '`builder.addCase` cannot be called with an empty action type'
          );
        if (a in t)
          throw new Error(
            '`builder.addCase` cannot be called with two reducers for the same action type'
          );
        return (t[a] = s), o;
      },
      addMatcher: function (i, s) {
        return n.push({ matcher: i, reducer: s }), o;
      },
      addDefaultCase: function (i) {
        return (r = i), o;
      },
    };
  return e(o), [t, n, r];
}
function Y2(e) {
  return typeof e == 'function';
}
function X2(e, t, n, r) {
  n === void 0 && (n = []);
  var o = typeof t == 'function' ? Ug(t) : [t, n, r],
    i = o[0],
    s = o[1],
    a = o[2],
    l;
  if (Y2(e))
    l = function () {
      return ju(e());
    };
  else {
    var u = ju(e);
    l = function () {
      return u;
    };
  }
  function c(f, d) {
    f === void 0 && (f = l());
    var w = Br(
      [i[d.type]],
      s
        .filter(function (p) {
          var y = p.matcher;
          return y(d);
        })
        .map(function (p) {
          var y = p.reducer;
          return y;
        })
    );
    return (
      w.filter(function (p) {
        return !!p;
      }).length === 0 && (w = [a]),
      w.reduce(function (p, y) {
        if (y)
          if (Nn(p)) {
            var S = p,
              g = y(S, d);
            return g === void 0 ? p : g;
          } else {
            if (Xt(p))
              return Dg(p, function (h) {
                return y(h, d);
              });
            var g = y(p, d);
            if (g === void 0) {
              if (p === null) return p;
              throw Error(
                'A case reducer on a non-draftable value must not return undefined'
              );
            }
            return g;
          }
        return p;
      }, f)
    );
  }
  return (c.getInitialState = l), c;
}
function Z2(e, t) {
  return e + '/' + t;
}
function Xc(e) {
  var t = e.name;
  if (!t) throw new Error('`name` is a required option for createSlice');
  typeof process < 'u';
  var n =
      typeof e.initialState == 'function' ? e.initialState : ju(e.initialState),
    r = e.reducers || {},
    o = Object.keys(r),
    i = {},
    s = {},
    a = {};
  o.forEach(function (c) {
    var f = r[c],
      d = Z2(t, c),
      w,
      p;
    'reducer' in f ? ((w = f.reducer), (p = f.prepare)) : (w = f),
      (i[c] = w),
      (s[d] = w),
      (a[c] = p ? kn(d, p) : kn(d));
  });
  function l() {
    var c =
        typeof e.extraReducers == 'function'
          ? Ug(e.extraReducers)
          : [e.extraReducers],
      f = c[0],
      d = f === void 0 ? {} : f,
      w = c[1],
      p = w === void 0 ? [] : w,
      y = c[2],
      S = y === void 0 ? void 0 : y,
      g = En(En({}, d), s);
    return X2(n, function (h) {
      for (var v in g) h.addCase(v, g[v]);
      for (var m = 0, C = p; m < C.length; m++) {
        var O = C[m];
        h.addMatcher(O.matcher, O.reducer);
      }
      S && h.addDefaultCase(S);
    });
  }
  var u;
  return {
    name: t,
    reducer: function (c, f) {
      return u || (u = l()), u(c, f);
    },
    actions: a,
    caseReducers: i,
    getInitialState: function () {
      return u || (u = l()), u.getInitialState();
    },
  };
}
var eS = 'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW',
  tS = function (e) {
    e === void 0 && (e = 21);
    for (var t = '', n = e; n--; ) t += eS[(Math.random() * 64) | 0];
    return t;
  },
  nS = ['name', 'message', 'stack', 'code'],
  xl = (function () {
    function e(t, n) {
      (this.payload = t), (this.meta = n);
    }
    return e;
  })(),
  ap = (function () {
    function e(t, n) {
      (this.payload = t), (this.meta = n);
    }
    return e;
  })(),
  rS = function (e) {
    if (typeof e == 'object' && e !== null) {
      for (var t = {}, n = 0, r = nS; n < r.length; n++) {
        var o = r[n];
        typeof e[o] == 'string' && (t[o] = e[o]);
      }
      return t;
    }
    return { message: String(e) };
  },
  qi = (function () {
    function e(t, n, r) {
      var o = kn(t + '/fulfilled', function (u, c, f, d) {
          return {
            payload: u,
            meta: Sl(En({}, d || {}), {
              arg: f,
              requestId: c,
              requestStatus: 'fulfilled',
            }),
          };
        }),
        i = kn(t + '/pending', function (u, c, f) {
          return {
            payload: void 0,
            meta: Sl(En({}, f || {}), {
              arg: c,
              requestId: u,
              requestStatus: 'pending',
            }),
          };
        }),
        s = kn(t + '/rejected', function (u, c, f, d, w) {
          return {
            payload: d,
            error: ((r && r.serializeError) || rS)(u || 'Rejected'),
            meta: Sl(En({}, w || {}), {
              arg: f,
              requestId: c,
              rejectedWithValue: !!d,
              requestStatus: 'rejected',
              aborted: (u == null ? void 0 : u.name) === 'AbortError',
              condition: (u == null ? void 0 : u.name) === 'ConditionError',
            }),
          };
        }),
        a =
          typeof AbortController < 'u'
            ? AbortController
            : (function () {
                function u() {
                  this.signal = {
                    aborted: !1,
                    addEventListener: function () {},
                    dispatchEvent: function () {
                      return !1;
                    },
                    onabort: function () {},
                    removeEventListener: function () {},
                    reason: void 0,
                    throwIfAborted: function () {},
                  };
                }
                return (u.prototype.abort = function () {}), u;
              })();
      function l(u) {
        return function (c, f, d) {
          var w = r != null && r.idGenerator ? r.idGenerator(u) : tS(),
            p = new a(),
            y;
          function S(h) {
            (y = h), p.abort();
          }
          var g = (function () {
            return z2(this, null, function () {
              var h, v, m, C, O, P, T;
              return A2(this, function (M) {
                switch (M.label) {
                  case 0:
                    return (
                      M.trys.push([0, 4, , 5]),
                      (C =
                        (h = r == null ? void 0 : r.condition) == null
                          ? void 0
                          : h.call(r, u, { getState: f, extra: d })),
                      iS(C) ? [4, C] : [3, 2]
                    );
                  case 1:
                    (C = M.sent()), (M.label = 2);
                  case 2:
                    if (C === !1 || p.signal.aborted)
                      throw {
                        name: 'ConditionError',
                        message:
                          'Aborted due to condition callback returning false.',
                      };
                    return (
                      (O = new Promise(function (D, q) {
                        return p.signal.addEventListener('abort', function () {
                          return q({
                            name: 'AbortError',
                            message: y || 'Aborted',
                          });
                        });
                      })),
                      c(
                        i(
                          w,
                          u,
                          (v = r == null ? void 0 : r.getPendingMeta) == null
                            ? void 0
                            : v.call(
                                r,
                                { requestId: w, arg: u },
                                { getState: f, extra: d }
                              )
                        )
                      ),
                      [
                        4,
                        Promise.race([
                          O,
                          Promise.resolve(
                            n(u, {
                              dispatch: c,
                              getState: f,
                              extra: d,
                              requestId: w,
                              signal: p.signal,
                              abort: S,
                              rejectWithValue: function (D, q) {
                                return new xl(D, q);
                              },
                              fulfillWithValue: function (D, q) {
                                return new ap(D, q);
                              },
                            })
                          ).then(function (D) {
                            if (D instanceof xl) throw D;
                            return D instanceof ap
                              ? o(D.payload, w, u, D.meta)
                              : o(D, w, u);
                          }),
                        ]),
                      ]
                    );
                  case 3:
                    return (m = M.sent()), [3, 5];
                  case 4:
                    return (
                      (P = M.sent()),
                      (m =
                        P instanceof xl
                          ? s(null, w, u, P.payload, P.meta)
                          : s(P, w, u)),
                      [3, 5]
                    );
                  case 5:
                    return (
                      (T =
                        r &&
                        !r.dispatchConditionRejection &&
                        s.match(m) &&
                        m.meta.condition),
                      T || c(m),
                      [2, m]
                    );
                }
              });
            });
          })();
          return Object.assign(g, {
            abort: S,
            requestId: w,
            arg: u,
            unwrap: function () {
              return g.then(oS);
            },
          });
        };
      }
      return Object.assign(l, {
        pending: i,
        rejected: s,
        fulfilled: o,
        typePrefix: t,
      });
    }
    return (
      (e.withTypes = function () {
        return e;
      }),
      e
    );
  })();
function oS(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
function iS(e) {
  return e !== null && typeof e == 'object' && typeof e.then == 'function';
}
var Zc = 'listenerMiddleware';
kn(Zc + '/add');
kn(Zc + '/removeAll');
kn(Zc + '/remove');
var lp;
typeof queueMicrotask == 'function' &&
  queueMicrotask.bind(
    typeof window < 'u' ? window : typeof global < 'u' ? global : globalThis
  );
k2();
function zg(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: sS } = Object.prototype,
  { getPrototypeOf: ef } = Object,
  Pa = ((e) => (t) => {
    const n = sS.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Ft = (e) => ((e = e.toLowerCase()), (t) => Pa(t) === e),
  Ra = (e) => (t) => typeof t === e,
  { isArray: Jr } = Array,
  ni = Ra('undefined');
function aS(e) {
  return (
    e !== null &&
    !ni(e) &&
    e.constructor !== null &&
    !ni(e.constructor) &&
    mt(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Bg = Ft('ArrayBuffer');
function lS(e) {
  let t;
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Bg(e.buffer)),
    t
  );
}
const uS = Ra('string'),
  mt = Ra('function'),
  Vg = Ra('number'),
  La = (e) => e !== null && typeof e == 'object',
  cS = (e) => e === !0 || e === !1,
  Gi = (e) => {
    if (Pa(e) !== 'object') return !1;
    const t = ef(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  fS = Ft('Date'),
  dS = Ft('File'),
  pS = Ft('Blob'),
  hS = Ft('FileList'),
  mS = (e) => La(e) && mt(e.pipe),
  gS = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == 'function' && e instanceof FormData) ||
        (mt(e.append) &&
          ((t = Pa(e)) === 'formdata' ||
            (t === 'object' &&
              mt(e.toString) &&
              e.toString() === '[object FormData]'))))
    );
  },
  yS = Ft('URLSearchParams'),
  vS = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
function pi(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > 'u') return;
  let r, o;
  if ((typeof e != 'object' && (e = [e]), Jr(e)))
    for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      s = i.length;
    let a;
    for (r = 0; r < s; r++) (a = i[r]), t.call(null, e[a], a, e);
  }
}
function Hg(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    o;
  for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o;
  return null;
}
const Wg = (() =>
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : global)(),
  Kg = (e) => !ni(e) && e !== Wg;
function Du() {
  const { caseless: e } = (Kg(this) && this) || {},
    t = {},
    n = (r, o) => {
      const i = (e && Hg(t, o)) || o;
      Gi(t[i]) && Gi(r)
        ? (t[i] = Du(t[i], r))
        : Gi(r)
          ? (t[i] = Du({}, r))
          : Jr(r)
            ? (t[i] = r.slice())
            : (t[i] = r);
    };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && pi(arguments[r], n);
  return t;
}
const wS = (e, t, n, { allOwnKeys: r } = {}) => (
    pi(
      t,
      (o, i) => {
        n && mt(o) ? (e[i] = zg(o, n)) : (e[i] = o);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  SS = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  xS = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, 'super', { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  CS = (e, t, n, r) => {
    let o, i, s;
    const a = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
        (s = o[i]), (!r || r(s, e, t)) && !a[s] && ((t[s] = e[s]), (a[s] = !0));
      e = n !== !1 && ef(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  ES = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  kS = (e) => {
    if (!e) return null;
    if (Jr(e)) return e;
    let t = e.length;
    if (!Vg(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  PS = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < 'u' && ef(Uint8Array)),
  RS = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
      const i = o.value;
      t.call(e, i[0], i[1]);
    }
  },
  LS = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  OS = Ft('HTMLFormElement'),
  NS = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o;
    }),
  up = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  _S = Ft('RegExp'),
  Qg = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    pi(n, (o, i) => {
      let s;
      (s = t(o, i, e)) !== !1 && (r[i] = s || o);
    }),
      Object.defineProperties(e, r);
  },
  TS = (e) => {
    Qg(e, (t, n) => {
      if (mt(e) && ['arguments', 'caller', 'callee'].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (mt(r)) {
        if (((t.enumerable = !1), 'writable' in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  bS = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((i) => {
          n[i] = !0;
        });
      };
    return Jr(e) ? r(e) : r(String(e).split(t)), n;
  },
  jS = () => {},
  DS = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  Cl = 'abcdefghijklmnopqrstuvwxyz',
  cp = '0123456789',
  Jg = { DIGIT: cp, ALPHA: Cl, ALPHA_DIGIT: Cl + Cl.toUpperCase() + cp },
  AS = (e = 16, t = Jg.ALPHA_DIGIT) => {
    let n = '';
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function MS(e) {
  return !!(
    e &&
    mt(e.append) &&
    e[Symbol.toStringTag] === 'FormData' &&
    e[Symbol.iterator]
  );
}
const $S = (e) => {
    const t = new Array(10),
      n = (r, o) => {
        if (La(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!('toJSON' in r)) {
            t[o] = r;
            const i = Jr(r) ? [] : {};
            return (
              pi(r, (s, a) => {
                const l = n(s, o + 1);
                !ni(l) && (i[a] = l);
              }),
              (t[o] = void 0),
              i
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  FS = Ft('AsyncFunction'),
  IS = (e) => e && (La(e) || mt(e)) && mt(e.then) && mt(e.catch),
  L = {
    isArray: Jr,
    isArrayBuffer: Bg,
    isBuffer: aS,
    isFormData: gS,
    isArrayBufferView: lS,
    isString: uS,
    isNumber: Vg,
    isBoolean: cS,
    isObject: La,
    isPlainObject: Gi,
    isUndefined: ni,
    isDate: fS,
    isFile: dS,
    isBlob: pS,
    isRegExp: _S,
    isFunction: mt,
    isStream: mS,
    isURLSearchParams: yS,
    isTypedArray: PS,
    isFileList: hS,
    forEach: pi,
    merge: Du,
    extend: wS,
    trim: vS,
    stripBOM: SS,
    inherits: xS,
    toFlatObject: CS,
    kindOf: Pa,
    kindOfTest: Ft,
    endsWith: ES,
    toArray: kS,
    forEachEntry: RS,
    matchAll: LS,
    isHTMLForm: OS,
    hasOwnProperty: up,
    hasOwnProp: up,
    reduceDescriptors: Qg,
    freezeMethods: TS,
    toObjectSet: bS,
    toCamelCase: NS,
    noop: jS,
    toFiniteNumber: DS,
    findKey: Hg,
    global: Wg,
    isContextDefined: Kg,
    ALPHABET: Jg,
    generateString: AS,
    isSpecCompliantForm: MS,
    toJSONObject: $S,
    isAsyncFn: FS,
    isThenable: IS,
  };
function Q(e, t, n, r, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = 'AxiosError'),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && (this.response = o);
}
L.inherits(Q, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: L.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const qg = Q.prototype,
  Gg = {};
[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL',
].forEach((e) => {
  Gg[e] = { value: e };
});
Object.defineProperties(Q, Gg);
Object.defineProperty(qg, 'isAxiosError', { value: !0 });
Q.from = (e, t, n, r, o, i) => {
  const s = Object.create(qg);
  return (
    L.toFlatObject(
      e,
      s,
      function (l) {
        return l !== Error.prototype;
      },
      (a) => a !== 'isAxiosError'
    ),
    Q.call(s, e.message, t, n, r, o),
    (s.cause = e),
    (s.name = e.name),
    i && Object.assign(s, i),
    s
  );
};
const US = null;
function Au(e) {
  return L.isPlainObject(e) || L.isArray(e);
}
function Yg(e) {
  return L.endsWith(e, '[]') ? e.slice(0, -2) : e;
}
function fp(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, i) {
          return (o = Yg(o)), !n && i ? '[' + o + ']' : o;
        })
        .join(n ? '.' : '')
    : t;
}
function zS(e) {
  return L.isArray(e) && !e.some(Au);
}
const BS = L.toFlatObject(L, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Oa(e, t, n) {
  if (!L.isObject(e)) throw new TypeError('target must be an object');
  (t = t || new FormData()),
    (n = L.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (y, S) {
        return !L.isUndefined(S[y]);
      }
    ));
  const r = n.metaTokens,
    o = n.visitor || c,
    i = n.dots,
    s = n.indexes,
    l = (n.Blob || (typeof Blob < 'u' && Blob)) && L.isSpecCompliantForm(t);
  if (!L.isFunction(o)) throw new TypeError('visitor must be a function');
  function u(p) {
    if (p === null) return '';
    if (L.isDate(p)) return p.toISOString();
    if (!l && L.isBlob(p))
      throw new Q('Blob is not supported. Use a Buffer instead.');
    return L.isArrayBuffer(p) || L.isTypedArray(p)
      ? l && typeof Blob == 'function'
        ? new Blob([p])
        : Buffer.from(p)
      : p;
  }
  function c(p, y, S) {
    let g = p;
    if (p && !S && typeof p == 'object') {
      if (L.endsWith(y, '{}'))
        (y = r ? y : y.slice(0, -2)), (p = JSON.stringify(p));
      else if (
        (L.isArray(p) && zS(p)) ||
        ((L.isFileList(p) || L.endsWith(y, '[]')) && (g = L.toArray(p)))
      )
        return (
          (y = Yg(y)),
          g.forEach(function (v, m) {
            !(L.isUndefined(v) || v === null) &&
              t.append(
                s === !0 ? fp([y], m, i) : s === null ? y : y + '[]',
                u(v)
              );
          }),
          !1
        );
    }
    return Au(p) ? !0 : (t.append(fp(S, y, i), u(p)), !1);
  }
  const f = [],
    d = Object.assign(BS, {
      defaultVisitor: c,
      convertValue: u,
      isVisitable: Au,
    });
  function w(p, y) {
    if (!L.isUndefined(p)) {
      if (f.indexOf(p) !== -1)
        throw Error('Circular reference detected in ' + y.join('.'));
      f.push(p),
        L.forEach(p, function (g, h) {
          (!(L.isUndefined(g) || g === null) &&
            o.call(t, g, L.isString(h) ? h.trim() : h, y, d)) === !0 &&
            w(g, y ? y.concat(h) : [h]);
        }),
        f.pop();
    }
  }
  if (!L.isObject(e)) throw new TypeError('data must be an object');
  return w(e), t;
}
function dp(e) {
  const t = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\0',
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function tf(e, t) {
  (this._pairs = []), e && Oa(e, this, t);
}
const Xg = tf.prototype;
Xg.append = function (t, n) {
  this._pairs.push([t, n]);
};
Xg.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, dp);
      }
    : dp;
  return this._pairs
    .map(function (o) {
      return n(o[0]) + '=' + n(o[1]);
    }, '')
    .join('&');
};
function VS(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']');
}
function Zg(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || VS,
    o = n && n.serialize;
  let i;
  if (
    (o
      ? (i = o(t, n))
      : (i = L.isURLSearchParams(t) ? t.toString() : new tf(t, n).toString(r)),
    i)
  ) {
    const s = e.indexOf('#');
    s !== -1 && (e = e.slice(0, s)),
      (e += (e.indexOf('?') === -1 ? '?' : '&') + i);
  }
  return e;
}
class HS {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    L.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const pp = HS,
  e1 = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  WS = typeof URLSearchParams < 'u' ? URLSearchParams : tf,
  KS = typeof FormData < 'u' ? FormData : null,
  QS = typeof Blob < 'u' ? Blob : null,
  JS = {
    isBrowser: !0,
    classes: { URLSearchParams: WS, FormData: KS, Blob: QS },
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  },
  t1 = typeof window < 'u' && typeof document < 'u',
  qS = ((e) => t1 && ['ReactNative', 'NativeScript', 'NS'].indexOf(e) < 0)(
    typeof navigator < 'u' && navigator.product
  ),
  GS = (() =>
    typeof WorkerGlobalScope < 'u' &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == 'function')(),
  YS = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: t1,
        hasStandardBrowserEnv: qS,
        hasStandardBrowserWebWorkerEnv: GS,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  jt = { ...YS, ...JS };
function XS(e, t) {
  return Oa(
    e,
    new jt.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, o, i) {
          return jt.isNode && L.isBuffer(n)
            ? (this.append(r, n.toString('base64')), !1)
            : i.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function ZS(e) {
  return L.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === '[]' ? '' : t[1] || t[0]
  );
}
function ex(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++) (i = n[r]), (t[i] = e[i]);
  return t;
}
function n1(e) {
  function t(n, r, o, i) {
    let s = n[i++];
    const a = Number.isFinite(+s),
      l = i >= n.length;
    return (
      (s = !s && L.isArray(o) ? o.length : s),
      l
        ? (L.hasOwnProp(o, s) ? (o[s] = [o[s], r]) : (o[s] = r), !a)
        : ((!o[s] || !L.isObject(o[s])) && (o[s] = []),
          t(n, r, o[s], i) && L.isArray(o[s]) && (o[s] = ex(o[s])),
          !a)
    );
  }
  if (L.isFormData(e) && L.isFunction(e.entries)) {
    const n = {};
    return (
      L.forEachEntry(e, (r, o) => {
        t(ZS(r), o, n, 0);
      }),
      n
    );
  }
  return null;
}
function tx(e, t, n) {
  if (L.isString(e))
    try {
      return (t || JSON.parse)(e), L.trim(e);
    } catch (r) {
      if (r.name !== 'SyntaxError') throw r;
    }
  return (n || JSON.stringify)(e);
}
const nf = {
  transitional: e1,
  adapter: ['xhr', 'http'],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || '',
        o = r.indexOf('application/json') > -1,
        i = L.isObject(t);
      if ((i && L.isHTMLForm(t) && (t = new FormData(t)), L.isFormData(t)))
        return o && o ? JSON.stringify(n1(t)) : t;
      if (
        L.isArrayBuffer(t) ||
        L.isBuffer(t) ||
        L.isStream(t) ||
        L.isFile(t) ||
        L.isBlob(t)
      )
        return t;
      if (L.isArrayBufferView(t)) return t.buffer;
      if (L.isURLSearchParams(t))
        return (
          n.setContentType(
            'application/x-www-form-urlencoded;charset=utf-8',
            !1
          ),
          t.toString()
        );
      let a;
      if (i) {
        if (r.indexOf('application/x-www-form-urlencoded') > -1)
          return XS(t, this.formSerializer).toString();
        if ((a = L.isFileList(t)) || r.indexOf('multipart/form-data') > -1) {
          const l = this.env && this.env.FormData;
          return Oa(
            a ? { 'files[]': t } : t,
            l && new l(),
            this.formSerializer
          );
        }
      }
      return i || o ? (n.setContentType('application/json', !1), tx(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || nf.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === 'json';
      if (t && L.isString(t) && ((r && !this.responseType) || o)) {
        const s = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t);
        } catch (a) {
          if (s)
            throw a.name === 'SyntaxError'
              ? Q.from(a, Q.ERR_BAD_RESPONSE, this, null, this.response)
              : a;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: jt.classes.FormData, Blob: jt.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': void 0,
    },
  },
};
L.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (e) => {
  nf.headers[e] = {};
});
const rf = nf,
  nx = L.toObjectSet([
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent',
  ]),
  rx = (e) => {
    const t = {};
    let n, r, o;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (s) {
            (o = s.indexOf(':')),
              (n = s.substring(0, o).trim().toLowerCase()),
              (r = s.substring(o + 1).trim()),
              !(!n || (t[n] && nx[n])) &&
                (n === 'set-cookie'
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ', ' + r : r));
          }),
      t
    );
  },
  hp = Symbol('internals');
function ho(e) {
  return e && String(e).trim().toLowerCase();
}
function Yi(e) {
  return e === !1 || e == null ? e : L.isArray(e) ? e.map(Yi) : String(e);
}
function ox(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const ix = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function El(e, t, n, r, o) {
  if (L.isFunction(r)) return r.call(this, t, n);
  if ((o && (t = n), !!L.isString(t))) {
    if (L.isString(r)) return t.indexOf(r) !== -1;
    if (L.isRegExp(r)) return r.test(t);
  }
}
function sx(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function ax(e, t) {
  const n = L.toCamelCase(' ' + t);
  ['get', 'set', 'has'].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (o, i, s) {
        return this[r].call(this, t, o, i, s);
      },
      configurable: !0,
    });
  });
}
class Na {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function i(a, l, u) {
      const c = ho(l);
      if (!c) throw new Error('header name must be a non-empty string');
      const f = L.findKey(o, c);
      (!f || o[f] === void 0 || u === !0 || (u === void 0 && o[f] !== !1)) &&
        (o[f || l] = Yi(a));
    }
    const s = (a, l) => L.forEach(a, (u, c) => i(u, c, l));
    return (
      L.isPlainObject(t) || t instanceof this.constructor
        ? s(t, n)
        : L.isString(t) && (t = t.trim()) && !ix(t)
          ? s(rx(t), n)
          : t != null && i(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = ho(t)), t)) {
      const r = L.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n) return o;
        if (n === !0) return ox(o);
        if (L.isFunction(n)) return n.call(this, o, r);
        if (L.isRegExp(n)) return n.exec(o);
        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }
  has(t, n) {
    if (((t = ho(t)), t)) {
      const r = L.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || El(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function i(s) {
      if (((s = ho(s)), s)) {
        const a = L.findKey(r, s);
        a && (!n || El(r, r[a], a, n)) && (delete r[a], (o = !0));
      }
    }
    return L.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      o = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || El(this, this[i], i, t, !0)) && (delete this[i], (o = !0));
    }
    return o;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      L.forEach(this, (o, i) => {
        const s = L.findKey(r, i);
        if (s) {
          (n[s] = Yi(o)), delete n[i];
          return;
        }
        const a = t ? sx(i) : String(i).trim();
        a !== i && delete n[i], (n[a] = Yi(o)), (r[a] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      L.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = t && L.isArray(r) ? r.join(', ') : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ': ' + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[hp] = this[hp] = { accessors: {} }).accessors,
      o = this.prototype;
    function i(s) {
      const a = ho(s);
      r[a] || (ax(o, s), (r[a] = !0));
    }
    return L.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
Na.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
  'Authorization',
]);
L.reduceDescriptors(Na.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
L.freezeMethods(Na);
const Qt = Na;
function kl(e, t) {
  const n = this || rf,
    r = t || n,
    o = Qt.from(r.headers);
  let i = r.data;
  return (
    L.forEach(e, function (a) {
      i = a.call(n, i, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    i
  );
}
function r1(e) {
  return !!(e && e.__CANCEL__);
}
function hi(e, t, n) {
  Q.call(this, e ?? 'canceled', Q.ERR_CANCELED, t, n),
    (this.name = 'CanceledError');
}
L.inherits(hi, Q, { __CANCEL__: !0 });
function lx(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new Q(
          'Request failed with status code ' + n.status,
          [Q.ERR_BAD_REQUEST, Q.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
const ux = jt.hasStandardBrowserEnv
  ? {
      write(e, t, n, r, o, i) {
        const s = [e + '=' + encodeURIComponent(t)];
        L.isNumber(n) && s.push('expires=' + new Date(n).toGMTString()),
          L.isString(r) && s.push('path=' + r),
          L.isString(o) && s.push('domain=' + o),
          i === !0 && s.push('secure'),
          (document.cookie = s.join('; '));
      },
      read(e) {
        const t = document.cookie.match(
          new RegExp('(^|;\\s*)(' + e + ')=([^;]*)')
        );
        return t ? decodeURIComponent(t[3]) : null;
      },
      remove(e) {
        this.write(e, '', Date.now() - 864e5);
      },
    }
  : {
      write() {},
      read() {
        return null;
      },
      remove() {},
    };
function cx(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function fx(e, t) {
  return t ? e.replace(/\/+$/, '') + '/' + t.replace(/^\/+/, '') : e;
}
function o1(e, t) {
  return e && !cx(t) ? fx(e, t) : t;
}
const dx = jt.hasStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement('a');
      let r;
      function o(i) {
        let s = i;
        return (
          t && (n.setAttribute('href', s), (s = n.href)),
          n.setAttribute('href', s),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, '') : '',
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, '') : '',
            hash: n.hash ? n.hash.replace(/^#/, '') : '',
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === '/' ? n.pathname : '/' + n.pathname,
          }
        );
      }
      return (
        (r = o(window.location.href)),
        function (s) {
          const a = L.isString(s) ? o(s) : s;
          return a.protocol === r.protocol && a.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function px(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || '';
}
function hx(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let o = 0,
    i = 0,
    s;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (l) {
      const u = Date.now(),
        c = r[i];
      s || (s = u), (n[o] = l), (r[o] = u);
      let f = i,
        d = 0;
      for (; f !== o; ) (d += n[f++]), (f = f % e);
      if (((o = (o + 1) % e), o === i && (i = (i + 1) % e), u - s < t)) return;
      const w = c && u - c;
      return w ? Math.round((d * 1e3) / w) : void 0;
    }
  );
}
function mp(e, t) {
  let n = 0;
  const r = hx(50, 250);
  return (o) => {
    const i = o.loaded,
      s = o.lengthComputable ? o.total : void 0,
      a = i - n,
      l = r(a),
      u = i <= s;
    n = i;
    const c = {
      loaded: i,
      total: s,
      progress: s ? i / s : void 0,
      bytes: a,
      rate: l || void 0,
      estimated: l && s && u ? (s - i) / l : void 0,
      event: o,
    };
    (c[t ? 'download' : 'upload'] = !0), e(c);
  };
}
const mx = typeof XMLHttpRequest < 'u',
  gx =
    mx &&
    function (e) {
      return new Promise(function (n, r) {
        let o = e.data;
        const i = Qt.from(e.headers).normalize();
        let { responseType: s, withXSRFToken: a } = e,
          l;
        function u() {
          e.cancelToken && e.cancelToken.unsubscribe(l),
            e.signal && e.signal.removeEventListener('abort', l);
        }
        let c;
        if (L.isFormData(o)) {
          if (jt.hasStandardBrowserEnv || jt.hasStandardBrowserWebWorkerEnv)
            i.setContentType(!1);
          else if ((c = i.getContentType()) !== !1) {
            const [y, ...S] = c
              ? c
                  .split(';')
                  .map((g) => g.trim())
                  .filter(Boolean)
              : [];
            i.setContentType([y || 'multipart/form-data', ...S].join('; '));
          }
        }
        let f = new XMLHttpRequest();
        if (e.auth) {
          const y = e.auth.username || '',
            S = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : '';
          i.set('Authorization', 'Basic ' + btoa(y + ':' + S));
        }
        const d = o1(e.baseURL, e.url);
        f.open(e.method.toUpperCase(), Zg(d, e.params, e.paramsSerializer), !0),
          (f.timeout = e.timeout);
        function w() {
          if (!f) return;
          const y = Qt.from(
              'getAllResponseHeaders' in f && f.getAllResponseHeaders()
            ),
            g = {
              data:
                !s || s === 'text' || s === 'json'
                  ? f.responseText
                  : f.response,
              status: f.status,
              statusText: f.statusText,
              headers: y,
              config: e,
              request: f,
            };
          lx(
            function (v) {
              n(v), u();
            },
            function (v) {
              r(v), u();
            },
            g
          ),
            (f = null);
        }
        if (
          ('onloadend' in f
            ? (f.onloadend = w)
            : (f.onreadystatechange = function () {
                !f ||
                  f.readyState !== 4 ||
                  (f.status === 0 &&
                    !(f.responseURL && f.responseURL.indexOf('file:') === 0)) ||
                  setTimeout(w);
              }),
          (f.onabort = function () {
            f &&
              (r(new Q('Request aborted', Q.ECONNABORTED, e, f)), (f = null));
          }),
          (f.onerror = function () {
            r(new Q('Network Error', Q.ERR_NETWORK, e, f)), (f = null);
          }),
          (f.ontimeout = function () {
            let S = e.timeout
              ? 'timeout of ' + e.timeout + 'ms exceeded'
              : 'timeout exceeded';
            const g = e.transitional || e1;
            e.timeoutErrorMessage && (S = e.timeoutErrorMessage),
              r(
                new Q(
                  S,
                  g.clarifyTimeoutError ? Q.ETIMEDOUT : Q.ECONNABORTED,
                  e,
                  f
                )
              ),
              (f = null);
          }),
          jt.hasStandardBrowserEnv &&
            (a && L.isFunction(a) && (a = a(e)), a || (a !== !1 && dx(d))))
        ) {
          const y =
            e.xsrfHeaderName && e.xsrfCookieName && ux.read(e.xsrfCookieName);
          y && i.set(e.xsrfHeaderName, y);
        }
        o === void 0 && i.setContentType(null),
          'setRequestHeader' in f &&
            L.forEach(i.toJSON(), function (S, g) {
              f.setRequestHeader(g, S);
            }),
          L.isUndefined(e.withCredentials) ||
            (f.withCredentials = !!e.withCredentials),
          s && s !== 'json' && (f.responseType = e.responseType),
          typeof e.onDownloadProgress == 'function' &&
            f.addEventListener('progress', mp(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == 'function' &&
            f.upload &&
            f.upload.addEventListener('progress', mp(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((l = (y) => {
              f &&
                (r(!y || y.type ? new hi(null, e, f) : y),
                f.abort(),
                (f = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(l),
            e.signal &&
              (e.signal.aborted ? l() : e.signal.addEventListener('abort', l)));
        const p = px(d);
        if (p && jt.protocols.indexOf(p) === -1) {
          r(new Q('Unsupported protocol ' + p + ':', Q.ERR_BAD_REQUEST, e));
          return;
        }
        f.send(o || null);
      });
    },
  Mu = { http: US, xhr: gx };
L.forEach(Mu, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, 'name', { value: t });
    } catch {}
    Object.defineProperty(e, 'adapterName', { value: t });
  }
});
const gp = (e) => `- ${e}`,
  yx = (e) => L.isFunction(e) || e === null || e === !1,
  i1 = {
    getAdapter: (e) => {
      e = L.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const o = {};
      for (let i = 0; i < t; i++) {
        n = e[i];
        let s;
        if (
          ((r = n),
          !yx(n) && ((r = Mu[(s = String(n)).toLowerCase()]), r === void 0))
        )
          throw new Q(`Unknown adapter '${s}'`);
        if (r) break;
        o[s || '#' + i] = r;
      }
      if (!r) {
        const i = Object.entries(o).map(
          ([a, l]) =>
            `adapter ${a} ` +
            (l === !1
              ? 'is not supported by the environment'
              : 'is not available in the build')
        );
        let s = t
          ? i.length > 1
            ? `since :
` +
              i.map(gp).join(`
`)
            : ' ' + gp(i[0])
          : 'as no adapter specified';
        throw new Q(
          'There is no suitable adapter to dispatch the request ' + s,
          'ERR_NOT_SUPPORT'
        );
      }
      return r;
    },
    adapters: Mu,
  };
function Pl(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new hi(null, e);
}
function yp(e) {
  return (
    Pl(e),
    (e.headers = Qt.from(e.headers)),
    (e.data = kl.call(e, e.transformRequest)),
    ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
      e.headers.setContentType('application/x-www-form-urlencoded', !1),
    i1
      .getAdapter(e.adapter || rf.adapter)(e)
      .then(
        function (r) {
          return (
            Pl(e),
            (r.data = kl.call(e, e.transformResponse, r)),
            (r.headers = Qt.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            r1(r) ||
              (Pl(e),
              r &&
                r.response &&
                ((r.response.data = kl.call(
                  e,
                  e.transformResponse,
                  r.response
                )),
                (r.response.headers = Qt.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
  );
}
const vp = (e) => (e instanceof Qt ? e.toJSON() : e);
function Vr(e, t) {
  t = t || {};
  const n = {};
  function r(u, c, f) {
    return L.isPlainObject(u) && L.isPlainObject(c)
      ? L.merge.call({ caseless: f }, u, c)
      : L.isPlainObject(c)
        ? L.merge({}, c)
        : L.isArray(c)
          ? c.slice()
          : c;
  }
  function o(u, c, f) {
    if (L.isUndefined(c)) {
      if (!L.isUndefined(u)) return r(void 0, u, f);
    } else return r(u, c, f);
  }
  function i(u, c) {
    if (!L.isUndefined(c)) return r(void 0, c);
  }
  function s(u, c) {
    if (L.isUndefined(c)) {
      if (!L.isUndefined(u)) return r(void 0, u);
    } else return r(void 0, c);
  }
  function a(u, c, f) {
    if (f in t) return r(u, c);
    if (f in e) return r(void 0, u);
  }
  const l = {
    url: i,
    method: i,
    data: i,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    withXSRFToken: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: a,
    headers: (u, c) => o(vp(u), vp(c), !0),
  };
  return (
    L.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
      const f = l[c] || o,
        d = f(e[c], t[c], c);
      (L.isUndefined(d) && f !== a) || (n[c] = d);
    }),
    n
  );
}
const s1 = '1.6.2',
  of = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
  (e, t) => {
    of[e] = function (r) {
      return typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
    };
  }
);
const wp = {};
of.transitional = function (t, n, r) {
  function o(i, s) {
    return (
      '[Axios v' +
      s1 +
      "] Transitional option '" +
      i +
      "'" +
      s +
      (r ? '. ' + r : '')
    );
  }
  return (i, s, a) => {
    if (t === !1)
      throw new Q(
        o(s, ' has been removed' + (n ? ' in ' + n : '')),
        Q.ERR_DEPRECATED
      );
    return (
      n &&
        !wp[s] &&
        ((wp[s] = !0),
        console.warn(
          o(
            s,
            ' has been deprecated since v' +
              n +
              ' and will be removed in the near future'
          )
        )),
      t ? t(i, s, a) : !0
    );
  };
};
function vx(e, t, n) {
  if (typeof e != 'object')
    throw new Q('options must be an object', Q.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o],
      s = t[i];
    if (s) {
      const a = e[i],
        l = a === void 0 || s(a, i, e);
      if (l !== !0)
        throw new Q('option ' + i + ' must be ' + l, Q.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new Q('Unknown option ' + i, Q.ERR_BAD_OPTION);
  }
}
const $u = { assertOptions: vx, validators: of },
  sn = $u.validators;
class js {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new pp(), response: new pp() });
  }
  request(t, n) {
    typeof t == 'string' ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = Vr(this.defaults, n));
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    r !== void 0 &&
      $u.assertOptions(
        r,
        {
          silentJSONParsing: sn.transitional(sn.boolean),
          forcedJSONParsing: sn.transitional(sn.boolean),
          clarifyTimeoutError: sn.transitional(sn.boolean),
        },
        !1
      ),
      o != null &&
        (L.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : $u.assertOptions(
              o,
              { encode: sn.function, serialize: sn.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || 'get').toLowerCase());
    let s = i && L.merge(i.common, i[n.method]);
    i &&
      L.forEach(
        ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
        (p) => {
          delete i[p];
        }
      ),
      (n.headers = Qt.concat(s, i));
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function (y) {
      (typeof y.runWhen == 'function' && y.runWhen(n) === !1) ||
        ((l = l && y.synchronous), a.unshift(y.fulfilled, y.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (y) {
      u.push(y.fulfilled, y.rejected);
    });
    let c,
      f = 0,
      d;
    if (!l) {
      const p = [yp.bind(this), void 0];
      for (
        p.unshift.apply(p, a),
          p.push.apply(p, u),
          d = p.length,
          c = Promise.resolve(n);
        f < d;

      )
        c = c.then(p[f++], p[f++]);
      return c;
    }
    d = a.length;
    let w = n;
    for (f = 0; f < d; ) {
      const p = a[f++],
        y = a[f++];
      try {
        w = p(w);
      } catch (S) {
        y.call(this, S);
        break;
      }
    }
    try {
      c = yp.call(this, w);
    } catch (p) {
      return Promise.reject(p);
    }
    for (f = 0, d = u.length; f < d; ) c = c.then(u[f++], u[f++]);
    return c;
  }
  getUri(t) {
    t = Vr(this.defaults, t);
    const n = o1(t.baseURL, t.url);
    return Zg(n, t.params, t.paramsSerializer);
  }
}
L.forEach(['delete', 'get', 'head', 'options'], function (t) {
  js.prototype[t] = function (n, r) {
    return this.request(
      Vr(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
L.forEach(['post', 'put', 'patch'], function (t) {
  function n(r) {
    return function (i, s, a) {
      return this.request(
        Vr(a || {}, {
          method: t,
          headers: r ? { 'Content-Type': 'multipart/form-data' } : {},
          url: i,
          data: s,
        })
      );
    };
  }
  (js.prototype[t] = n()), (js.prototype[t + 'Form'] = n(!0));
});
const Xi = js;
class sf {
  constructor(t) {
    if (typeof t != 'function')
      throw new TypeError('executor must be a function.');
    let n;
    this.promise = new Promise(function (i) {
      n = i;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; ) r._listeners[i](o);
      r._listeners = null;
    }),
      (this.promise.then = (o) => {
        let i;
        const s = new Promise((a) => {
          r.subscribe(a), (i = a);
        }).then(o);
        return (
          (s.cancel = function () {
            r.unsubscribe(i);
          }),
          s
        );
      }),
      t(function (i, s, a) {
        r.reason || ((r.reason = new hi(i, s, a)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new sf(function (o) {
        t = o;
      }),
      cancel: t,
    };
  }
}
const wx = sf;
function Sx(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function xx(e) {
  return L.isObject(e) && e.isAxiosError === !0;
}
const Fu = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Fu).forEach(([e, t]) => {
  Fu[t] = e;
});
const Cx = Fu;
function a1(e) {
  const t = new Xi(e),
    n = zg(Xi.prototype.request, t);
  return (
    L.extend(n, Xi.prototype, t, { allOwnKeys: !0 }),
    L.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return a1(Vr(e, o));
    }),
    n
  );
}
const ke = a1(rf);
ke.Axios = Xi;
ke.CanceledError = hi;
ke.CancelToken = wx;
ke.isCancel = r1;
ke.VERSION = s1;
ke.toFormData = Oa;
ke.AxiosError = Q;
ke.Cancel = ke.CanceledError;
ke.all = function (t) {
  return Promise.all(t);
};
ke.spread = Sx;
ke.isAxiosError = xx;
ke.mergeConfig = Vr;
ke.AxiosHeaders = Qt;
ke.formToJSON = (e) => n1(L.isHTMLForm(e) ? new FormData(e) : e);
ke.getAdapter = i1.getAdapter;
ke.HttpStatusCode = Cx;
ke.default = ke;
const _a = ke,
  Ai = 'https://teamchallenge-chat-api.onrender.com/api',
  Ta = {
    register: `${Ai}/users/register`,
    logout: `${Ai}/users/logout`,
    current: `${Ai}/users/current`,
    publicRooms: `${Ai}/rooms/public`,
  },
  Ex = async (e) => (await _a.post(Ta.register, e)).data,
  kx = async (e) => {
    await _a.post(Ta.logout, null, { headers: { ApiKey: e } });
  },
  Px = async (e) => (await _a.get(Ta.current, { headers: { ApiKey: e } })).data,
  Rx = async () => (await _a.get(Ta.publicRooms)).data,
  Zi = {
    user: { registration: Ex, logout: kx, getCurrentUser: Px },
    rooms: { getPublicRooms: Rx },
  },
  af = 'userToken',
  Lx = (e) => {
    localStorage.setItem(af, e);
  },
  Sp = () => localStorage.getItem(af),
  Ox = () => {
    localStorage.removeItem(af);
  };
var G = ((e) => (
  (e.Idle = 'idle'),
  (e.Loading = 'loading'),
  (e.Succeeded = 'succeeded'),
  (e.Failed = 'failed'),
  e
))(G || {});
const Nx = { userData: null, status: G.Idle, error: null },
  ut = {
    register: qi('user/register', async (e) => {
      const t = await Zi.user.registration(e);
      return Lx(t.token), t;
    }),
    logout: qi('user/logout', async () => {
      const e = Sp();
      if (!e) throw new Error();
      Ox(), await Zi.user.logout(e);
    }),
    currentUser: qi('user/current', async () => {
      const e = Sp();
      if (!e) throw new Error();
      const t = await Zi.user.getCurrentUser(e);
      return { token: e, user: { ...t } };
    }),
  },
  _x = Xc({
    name: 'users',
    initialState: Nx,
    reducers: {},
    extraReducers(e) {
      e.addCase(ut.register.pending, (t) => ({ ...t, status: G.Loading }))
        .addCase(ut.register.fulfilled, (t, n) => ({
          ...t,
          status: G.Succeeded,
          userData: n.payload,
        }))
        .addCase(ut.register.rejected, (t, n) => ({
          ...t,
          status: G.Failed,
          error: n.error.message || null,
        }))
        .addCase(ut.logout.pending, (t) => ({ ...t, status: G.Loading }))
        .addCase(ut.logout.fulfilled, () => ({
          status: G.Idle,
          userData: null,
          error: null,
        }))
        .addCase(ut.logout.rejected, (t) => ({
          ...t,
          status: G.Idle,
          error: null,
        }))
        .addCase(ut.currentUser.pending, (t) => ({ ...t, status: G.Loading }))
        .addCase(ut.currentUser.fulfilled, (t, n) => ({
          ...t,
          status: G.Succeeded,
          userData: { user: n.payload.user, token: n.payload.token },
        }))
        .addCase(ut.currentUser.rejected, (t, n) => ({
          ...t,
          status: G.Idle,
          error: n.error.message || null,
        }));
    },
  }),
  qr = (e) => e.user;
var br = ((e) => ((e.LIGHT = 'light'), (e.DARK = 'dark'), e))(br || {});
const Tx = { mode: br.LIGHT },
  l1 = Xc({
    name: 'theme',
    initialState: Tx,
    reducers: {
      TOGGLE_THEME: (e) => {
        e.mode = e.mode === br.LIGHT ? br.DARK : br.LIGHT;
      },
    },
  }),
  { TOGGLE_THEME: bx } = l1.actions,
  jx = (e) => e.theme;
function Dx() {
  if (console && console.warn) {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    typeof t[0] == 'string' && (t[0] = `react-i18next:: ${t[0]}`),
      console.warn(...t);
  }
}
const xp = {};
function Iu() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  (typeof t[0] == 'string' && xp[t[0]]) ||
    (typeof t[0] == 'string' && (xp[t[0]] = new Date()), Dx(...t));
}
const u1 = (e, t) => () => {
  if (e.isInitialized) t();
  else {
    const n = () => {
      setTimeout(() => {
        e.off('initialized', n);
      }, 0),
        t();
    };
    e.on('initialized', n);
  }
};
function Cp(e, t, n) {
  e.loadNamespaces(t, u1(e, n));
}
function Ep(e, t, n, r) {
  typeof n == 'string' && (n = [n]),
    n.forEach((o) => {
      e.options.ns.indexOf(o) < 0 && e.options.ns.push(o);
    }),
    e.loadLanguages(t, u1(e, r));
}
function Ax(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const r = t.languages[0],
    o = t.options ? t.options.fallbackLng : !1,
    i = t.languages[t.languages.length - 1];
  if (r.toLowerCase() === 'cimode') return !0;
  const s = (a, l) => {
    const u = t.services.backendConnector.state[`${a}|${l}`];
    return u === -1 || u === 2;
  };
  return n.bindI18n &&
    n.bindI18n.indexOf('languageChanging') > -1 &&
    t.services.backendConnector.backend &&
    t.isLanguageChangingTo &&
    !s(t.isLanguageChangingTo, e)
    ? !1
    : !!(
        t.hasResourceBundle(r, e) ||
        !t.services.backendConnector.backend ||
        (t.options.resources && !t.options.partialBundledLanguages) ||
        (s(r, e) && (!o || s(i, e)))
      );
}
function Mx(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return !t.languages || !t.languages.length
    ? (Iu('i18n.languages were undefined or empty', t.languages), !0)
    : t.options.ignoreJSONStructure !== void 0
      ? t.hasLoadedNamespace(e, {
          lng: n.lng,
          precheck: (o, i) => {
            if (
              n.bindI18n &&
              n.bindI18n.indexOf('languageChanging') > -1 &&
              o.services.backendConnector.backend &&
              o.isLanguageChangingTo &&
              !i(o.isLanguageChangingTo, e)
            )
              return !1;
          },
        })
      : Ax(e, t, n);
}
const $x =
    /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  Fx = {
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
    '&nbsp;': ' ',
    '&#160;': ' ',
    '&copy;': '©',
    '&#169;': '©',
    '&reg;': '®',
    '&#174;': '®',
    '&hellip;': '…',
    '&#8230;': '…',
    '&#x2F;': '/',
    '&#47;': '/',
  },
  Ix = (e) => Fx[e],
  Ux = (e) => e.replace($x, Ix);
let Uu = {
  bindI18n: 'languageChanged',
  bindI18nStore: '',
  transEmptyNodeValue: '',
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: '',
  transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
  useSuspense: !0,
  unescape: Ux,
};
function zx() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  Uu = { ...Uu, ...e };
}
function Bx() {
  return Uu;
}
let c1;
function Vx(e) {
  c1 = e;
}
function Hx() {
  return c1;
}
const Wx = {
    type: '3rdParty',
    init(e) {
      zx(e.options.react), Vx(e);
    },
  },
  Kx = k.createContext();
class Qx {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(t) {
    t.forEach((n) => {
      this.usedNamespaces[n] || (this.usedNamespaces[n] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const Jx = (e, t) => {
  const n = k.useRef();
  return (
    k.useEffect(() => {
      n.current = t ? n.current : e;
    }, [e, t]),
    n.current
  );
};
function An(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { i18n: n } = t,
    { i18n: r, defaultNS: o } = k.useContext(Kx) || {},
    i = n || r || Hx();
  if ((i && !i.reportNamespaces && (i.reportNamespaces = new Qx()), !i)) {
    Iu(
      'You will need to pass in an i18next instance by using initReactI18next'
    );
    const v = (C, O) =>
        typeof O == 'string'
          ? O
          : O && typeof O == 'object' && typeof O.defaultValue == 'string'
            ? O.defaultValue
            : Array.isArray(C)
              ? C[C.length - 1]
              : C,
      m = [v, {}, !1];
    return (m.t = v), (m.i18n = {}), (m.ready = !1), m;
  }
  i.options.react &&
    i.options.react.wait !== void 0 &&
    Iu(
      'It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.'
    );
  const s = { ...Bx(), ...i.options.react, ...t },
    { useSuspense: a, keyPrefix: l } = s;
  let u = e || o || (i.options && i.options.defaultNS);
  (u = typeof u == 'string' ? [u] : u || ['translation']),
    i.reportNamespaces.addUsedNamespaces &&
      i.reportNamespaces.addUsedNamespaces(u);
  const c =
    (i.isInitialized || i.initializedStoreOnce) && u.every((v) => Mx(v, i, s));
  function f() {
    return i.getFixedT(t.lng || null, s.nsMode === 'fallback' ? u : u[0], l);
  }
  const [d, w] = k.useState(f);
  let p = u.join();
  t.lng && (p = `${t.lng}${p}`);
  const y = Jx(p),
    S = k.useRef(!0);
  k.useEffect(() => {
    const { bindI18n: v, bindI18nStore: m } = s;
    (S.current = !0),
      !c &&
        !a &&
        (t.lng
          ? Ep(i, t.lng, u, () => {
              S.current && w(f);
            })
          : Cp(i, u, () => {
              S.current && w(f);
            })),
      c && y && y !== p && S.current && w(f);
    function C() {
      S.current && w(f);
    }
    return (
      v && i && i.on(v, C),
      m && i && i.store.on(m, C),
      () => {
        (S.current = !1),
          v && i && v.split(' ').forEach((O) => i.off(O, C)),
          m && i && m.split(' ').forEach((O) => i.store.off(O, C));
      }
    );
  }, [i, p]);
  const g = k.useRef(!0);
  k.useEffect(() => {
    S.current && !g.current && w(f), (g.current = !1);
  }, [i, l]);
  const h = [d, i, c];
  if (((h.t = d), (h.i18n = i), (h.ready = c), c || (!c && !a))) return h;
  throw new Promise((v) => {
    t.lng ? Ep(i, t.lng, u, () => v()) : Cp(i, u, () => v());
  });
}
const qx = '_backdrop_q6inq_1',
  Gx = { backdrop: qx },
  Yx = ({ onClick: e }) => (
    k.useEffect(() => {
      function t(n) {
        n.code === 'Escape' && e();
      }
      return (
        document.addEventListener('keydown', t),
        () => document.removeEventListener('keydown', t)
      );
    }, [e]),
    R.jsx('div', {
      role: 'presentation',
      className: Gx.backdrop,
      onClick: () => e(),
    })
  ),
  Xx = '_form_18wzb_1',
  Zx = '_input_18wzb_8',
  e4 = '_submit_18wzb_17',
  t4 = '_formText_18wzb_33',
  n4 = '_error_18wzb_43',
  mo = { form: Xx, input: Zx, submit: e4, formText: t4, error: n4 },
  r4 = () => {
    const [e, t] = k.useState(null),
      n = k.useRef(null),
      r = ui(),
      { status: o, error: i } = jn(qr),
      { t: s } = An(),
      a = async (l) => {
        var f;
        l.preventDefault();
        const u = (f = n.current) == null ? void 0 : f.value;
        if (!u || u.length < 2 || u.length > 30) {
          t(s('errors.inputValidation'));
          return;
        }
        const c = { name: u };
        await r(ut.register(c));
      };
    return R.jsxs('form', {
      className: mo.form,
      onSubmit: a,
      children: [
        R.jsx('div', { className: mo.formText, children: s('auth.formText') }),
        R.jsx('input', {
          className: mo.input,
          type: 'name',
          placeholder: s('auth.inputPlaceholder'),
          ref: n,
          disabled: o === G.Loading,
        }),
        R.jsx('div', { className: mo.error, children: e || i }),
        R.jsx('button', {
          className: mo.submit,
          type: 'submit',
          disabled: o === G.Loading,
          children: o === G.Loading ? 'Loading...' : s('auth.join'),
        }),
      ],
    });
  },
  o4 = '_greetings_1dh9j_1',
  i4 = '_greetingsText_1dh9j_8',
  s4 = '_greetingsAction_1dh9j_18',
  Rl = { greetings: o4, greetingsText: i4, greetingsAction: s4 },
  a4 = ({ okOnClick: e }) => {
    const { t } = An();
    return R.jsxs('div', {
      className: Rl.greetings,
      children: [
        R.jsx('div', {
          className: Rl.greetingsText,
          children: t('auth.greetingText'),
        }),
        R.jsx('div', {
          className: Rl.greetingsAction,
          children: R.jsx('button', {
            type: 'button',
            onClick: e,
            children: 'Ok',
          }),
        }),
      ],
    });
  },
  l4 = '_authPopup_1q2jg_1',
  u4 = '_exitButton_1q2jg_16',
  kp = { authPopup: l4, exitButton: u4 },
  f1 = ({ open: e = !1, setIsOpen: t }) => {
    const { status: n } = jn(qr);
    return (
      e &&
      Ac.createPortal(
        R.jsxs(R.Fragment, {
          children: [
            R.jsxs('div', {
              className: kp.authPopup,
              children: [
                R.jsx('button', {
                  type: 'button',
                  className: kp.exitButton,
                  onClick: () => t(!1),
                  children: '✖',
                }),
                n !== G.Succeeded && R.jsx(r4, {}),
                n === G.Succeeded && R.jsx(a4, { okOnClick: () => t(!1) }),
              ],
            }),
            R.jsx(Yx, { onClick: () => t(!1) }),
          ],
        }),
        document.querySelector('.app')
      )
    );
  },
  c4 = '_header_1dn92_1',
  f4 = '_headerContent_1dn92_12',
  d4 = '_logoLink_1dn92_18',
  Ll = { header: c4, headerContent: f4, logoLink: d4 },
  p4 = () =>
    R.jsxs('svg', {
      width: '82',
      height: '44',
      viewBox: '0 0 82 44',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      children: [
        R.jsx('path', {
          d: 'M34.5218 14.72V15.5572H31.4466V27.4224H29.5758V15.5572H26.475V14.72H34.5218ZM45.5157 27.4224H43.5424L42.8419 25.7737H35.8971L35.2137 27.4224H34.1801L38.8356 16.3516L38.1522 14.72H40.1511L45.5157 27.4224ZM36.2473 24.9366H42.4917L39.3396 17.5561L36.2473 24.9366ZM48.9923 26.5852H54.2202V27.4224H47.1216V14.72H48.9923V26.5852ZM58.0813 19.3585L63.3433 14.72H64.6418L59.9008 18.8887L65.3764 27.4224H63.1896L58.534 20.1102L58.0813 20.5117V27.4224H56.2106V14.72H58.0813V19.3585ZM68.7506 27.4224H66.8713V14.72H68.7506V27.4224ZM79.7359 14.72V15.5572H73.8332V19.4097H79.5565V20.2469H73.8332V26.5852H79.7359V27.4224H71.9625V14.72H79.7359Z',
          fill: '#00F0FF',
        }),
        R.jsx('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M11.2262 29.3572L10.8789 28.4657L10.1372 27.8612C5.36031 23.9686 3.29986 19.6546 3.67284 15.9048C4.03527 12.261 6.73951 8.78942 11.937 6.38998C17.1011 4.00596 24.2658 2.9582 32.1741 4.07897C40.0773 5.19902 46.886 8.22557 51.5085 12.0442C51.5869 12.1089 51.6645 12.1738 51.7414 12.2388H56.9278C51.862 6.48844 43.0319 1.9523 32.6833 0.485688C15.733 -1.91653 1.1277 4.82603 0.0614714 15.5456C-0.477047 20.9597 2.54116 26.3528 7.84455 30.6746L12.8603 43.5502L25.8496 38.7917C26.8247 38.9906 27.8163 39.1622 28.8221 39.3047C42.4934 41.2422 54.6392 37.2308 59.3862 29.982H54.7027C53.401 31.2596 51.693 32.4196 49.5684 33.4004C44.4043 35.7844 37.2397 36.8322 29.3314 35.7114C28.3979 35.5791 27.4784 35.42 26.5747 35.2357L25.567 35.0302L24.6012 35.384L14.9511 38.9192L11.2262 29.3572Z',
          fill: '#00F0FF',
        }),
      ],
    }),
  h4 = () => {
    const [e, t] = k.useState(!1),
      { status: n, userData: r } = jn(qr),
      { t: o } = An();
    return R.jsxs(R.Fragment, {
      children: [
        R.jsx(f1, { open: e, setIsOpen: t }),
        R.jsx('header', {
          className: Ll.header,
          children: R.jsx('div', {
            className: 'container',
            children: R.jsxs('div', {
              className: Ll.headerContent,
              children: [
                R.jsx('div', {
                  style: { opacity: 0, width: '30px' },
                  children: 'Menu',
                }),
                R.jsx(Ls, {
                  className: Ll.logoLink,
                  to: '/',
                  children: R.jsx(p4, {}),
                }),
                R.jsxs('div', {
                  children: [
                    n === G.Idle &&
                      R.jsx('button', {
                        type: 'button',
                        onClick: () => t(!0),
                        children: o('auth.join'),
                      }),
                    r &&
                      n === G.Succeeded &&
                      R.jsx('div', { children: r.user.name }),
                  ],
                }),
              ],
            }),
          }),
        }),
      ],
    });
  },
  m4 = '_footer_4jnxz_1',
  g4 = '_footerContainer_4jnxz_11',
  Pp = { footer: m4, footerContainer: g4 },
  y4 = () => {
    const { t: e } = An();
    return R.jsx('footer', {
      className: Pp.footer,
      children: R.jsxs('div', {
        className: `container ${Pp.footerContainer}`,
        children: [
          R.jsx(Ls, { to: '/', children: 'Logo' }),
          R.jsx(Ls, { to: '/', children: e('main.ourTeem') }),
          R.jsx('span', { children: '2023' }),
        ],
      }),
    });
  },
  v4 = '_layout_1xtcm_1',
  w4 = '_container_1xtcm_10',
  S4 = '_main_1xtcm_17',
  x4 = { layout: v4, container: w4, main: S4 },
  C4 = '_sidebar_1e59h_1',
  E4 = '_btnMenu_1e59h_26',
  k4 = '_btnClose_1e59h_39',
  P4 = '_userWrap_1e59h_52',
  R4 = '_user_1e59h_52',
  L4 = '_userAvatarWrap_1e59h_63',
  O4 = '_userAvatar_1e59h_63',
  N4 = '_navLink_1e59h_83',
  _4 = '_navLinkActive_1e59h_101',
  T4 = '_wrapThemLang_1e59h_105',
  b4 = '_bottomWrap_1e59h_113',
  j4 = '_bottomList_1e59h_118',
  D4 = '_logout_1e59h_121',
  Ze = {
    sidebar: C4,
    btnMenu: E4,
    btnClose: k4,
    userWrap: P4,
    user: R4,
    userAvatarWrap: L4,
    userAvatar: O4,
    navLink: N4,
    navLinkActive: _4,
    wrapThemLang: T4,
    bottomWrap: b4,
    bottomList: j4,
    logout: D4,
  },
  A4 = () =>
    R.jsxs('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '25',
      height: '25',
      viewBox: '0 0 25 25',
      fill: 'none',
      children: [
        R.jsx('g', {
          clipPath: 'url(#clip0_207_2688)',
          children: R.jsx('path', {
            d: 'M11.7188 3.90625V1.5625C11.7188 1.3553 11.8011 1.15659 11.9476 1.01007C12.0941 0.86356 12.2928 0.78125 12.5 0.78125C12.7072 0.78125 12.9059 0.86356 13.0524 1.01007C13.1989 1.15659 13.2812 1.3553 13.2812 1.5625V3.90625C13.2812 4.11345 13.1989 4.31216 13.0524 4.45868C12.9059 4.60519 12.7072 4.6875 12.5 4.6875C12.2928 4.6875 12.0941 4.60519 11.9476 4.45868C11.8011 4.31216 11.7188 4.11345 11.7188 3.90625ZM18.75 12.5C18.75 13.7361 18.3834 14.9445 17.6967 15.9723C17.0099 17.0001 16.0338 17.8012 14.8918 18.2742C13.7497 18.7473 12.4931 18.8711 11.2807 18.6299C10.0683 18.3888 8.95466 17.7935 8.08058 16.9194C7.2065 16.0453 6.61125 14.9317 6.37009 13.7193C6.12893 12.5069 6.25271 11.2503 6.72575 10.1082C7.1988 8.96619 7.99988 7.99007 9.02769 7.30331C10.0555 6.61656 11.2639 6.25 12.5 6.25C14.157 6.25181 15.7457 6.91087 16.9174 8.08258C18.0891 9.25429 18.7482 10.843 18.75 12.5ZM17.1875 12.5C17.1875 11.5729 16.9126 10.6666 16.3975 9.89576C15.8824 9.12491 15.1504 8.5241 14.2938 8.16931C13.4373 7.81453 12.4948 7.7217 11.5855 7.90257C10.6762 8.08344 9.841 8.52988 9.18544 9.18544C8.52988 9.841 8.08344 10.6762 7.90257 11.5855C7.7217 12.4948 7.81453 13.4373 8.16931 14.2938C8.5241 15.1504 9.12491 15.8824 9.89576 16.3975C10.6666 16.9126 11.5729 17.1875 12.5 17.1875C13.7428 17.1862 14.9343 16.6919 15.8131 15.8131C16.6919 14.9343 17.1862 13.7428 17.1875 12.5ZM5.69727 6.80273C5.84386 6.94933 6.04268 7.03168 6.25 7.03168C6.45732 7.03168 6.65614 6.94933 6.80273 6.80273C6.94933 6.65614 7.03168 6.45732 7.03168 6.25C7.03168 6.04268 6.94933 5.84386 6.80273 5.69727L5.24023 4.13477C5.09364 3.98817 4.89482 3.90582 4.6875 3.90582C4.48018 3.90582 4.28136 3.98817 4.13477 4.13477C3.98817 4.28136 3.90582 4.48018 3.90582 4.6875C3.90582 4.89482 3.98817 5.09364 4.13477 5.24023L5.69727 6.80273ZM5.69727 18.1973L4.13477 19.7598C3.98817 19.9064 3.90582 20.1052 3.90582 20.3125C3.90582 20.5198 3.98817 20.7186 4.13477 20.8652C4.28136 21.0118 4.48018 21.0942 4.6875 21.0942C4.89482 21.0942 5.09364 21.0118 5.24023 20.8652L6.80273 19.3027C6.87532 19.2301 6.9329 19.144 6.97218 19.0491C7.01147 18.9543 7.03168 18.8527 7.03168 18.75C7.03168 18.6473 7.01147 18.5457 6.97218 18.4509C6.9329 18.356 6.87532 18.2699 6.80273 18.1973C6.73015 18.1247 6.64398 18.0671 6.54914 18.0278C6.4543 17.9885 6.35265 17.9683 6.25 17.9683C6.14735 17.9683 6.0457 17.9885 5.95086 18.0278C5.85602 18.0671 5.76985 18.1247 5.69727 18.1973ZM18.75 7.03125C18.8526 7.03133 18.9543 7.01119 19.0491 6.97198C19.1439 6.93277 19.2301 6.87526 19.3027 6.80273L20.8652 5.24023C21.0118 5.09364 21.0942 4.89482 21.0942 4.6875C21.0942 4.48018 21.0118 4.28136 20.8652 4.13477C20.7186 3.98817 20.5198 3.90582 20.3125 3.90582C20.1052 3.90582 19.9064 3.98817 19.7598 4.13477L18.1973 5.69727C18.0879 5.80653 18.0134 5.94579 17.9832 6.09742C17.953 6.24905 17.9685 6.40622 18.0276 6.54906C18.0868 6.69189 18.187 6.81394 18.3156 6.89978C18.4442 6.98562 18.5954 7.03137 18.75 7.03125ZM19.3027 18.1973C19.1561 18.0507 18.9573 17.9683 18.75 17.9683C18.5427 17.9683 18.3439 18.0507 18.1973 18.1973C18.0507 18.3439 17.9683 18.5427 17.9683 18.75C17.9683 18.9573 18.0507 19.1561 18.1973 19.3027L19.7598 20.8652C19.8324 20.9378 19.9185 20.9954 20.0134 21.0347C20.1082 21.074 20.2098 21.0942 20.3125 21.0942C20.4152 21.0942 20.5168 21.074 20.6116 21.0347C20.7065 20.9954 20.7926 20.9378 20.8652 20.8652C20.9378 20.7926 20.9954 20.7065 21.0347 20.6116C21.074 20.5168 21.0942 20.4152 21.0942 20.3125C21.0942 20.2098 21.074 20.1082 21.0347 20.0134C20.9954 19.9185 20.9378 19.8324 20.8652 19.7598L19.3027 18.1973ZM4.6875 12.5C4.6875 12.2928 4.60519 12.0941 4.45868 11.9476C4.31216 11.8011 4.11345 11.7188 3.90625 11.7188H1.5625C1.3553 11.7188 1.15659 11.8011 1.01007 11.9476C0.86356 12.0941 0.78125 12.2928 0.78125 12.5C0.78125 12.7072 0.86356 12.9059 1.01007 13.0524C1.15659 13.1989 1.3553 13.2812 1.5625 13.2812H3.90625C4.11345 13.2812 4.31216 13.1989 4.45868 13.0524C4.60519 12.9059 4.6875 12.7072 4.6875 12.5ZM12.5 20.3125C12.2928 20.3125 12.0941 20.3948 11.9476 20.5413C11.8011 20.6878 11.7188 20.8865 11.7188 21.0938V23.4375C11.7188 23.6447 11.8011 23.8434 11.9476 23.9899C12.0941 24.1364 12.2928 24.2188 12.5 24.2188C12.7072 24.2188 12.9059 24.1364 13.0524 23.9899C13.1989 23.8434 13.2812 23.6447 13.2812 23.4375V21.0938C13.2812 20.8865 13.1989 20.6878 13.0524 20.5413C12.9059 20.3948 12.7072 20.3125 12.5 20.3125ZM23.4375 11.7188H21.0938C20.8865 11.7188 20.6878 11.8011 20.5413 11.9476C20.3948 12.0941 20.3125 12.2928 20.3125 12.5C20.3125 12.7072 20.3948 12.9059 20.5413 13.0524C20.6878 13.1989 20.8865 13.2812 21.0938 13.2812H23.4375C23.6447 13.2812 23.8434 13.1989 23.9899 13.0524C24.1364 12.9059 24.2188 12.7072 24.2188 12.5C24.2188 12.2928 24.1364 12.0941 23.9899 11.9476C23.8434 11.8011 23.6447 11.7188 23.4375 11.7188Z',
            fill: 'black',
          }),
        }),
        R.jsx('defs', {
          children: R.jsx('clipPath', {
            id: 'clip0_207_2688',
            children: R.jsx('rect', {
              width: '25',
              height: '25',
              fill: 'white',
            }),
          }),
        }),
      ],
    }),
  M4 = () =>
    R.jsx('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '24',
      height: '24',
      viewBox: '0 0 24 24',
      fill: 'none',
      children: R.jsx('path', {
        d: 'M15.3 5.70998C15.2075 5.61728 15.0976 5.54373 14.9766 5.49355C14.8556 5.44337 14.7259 5.41754 14.595 5.41754C14.464 5.41754 14.3343 5.44337 14.2134 5.49355C14.0924 5.54373 13.9825 5.61728 13.89 5.70998L8.99998 10.59L4.10998 5.69998C4.0174 5.6074 3.90749 5.53396 3.78652 5.48385C3.66556 5.43375 3.53591 5.40796 3.40498 5.40796C3.27405 5.40796 3.1444 5.43375 3.02344 5.48385C2.90247 5.53396 2.79256 5.6074 2.69998 5.69998C2.6074 5.79256 2.53396 5.90247 2.48385 6.02344C2.43375 6.1444 2.40796 6.27405 2.40796 6.40498C2.40796 6.53591 2.43375 6.66556 2.48385 6.78652C2.53396 6.90749 2.6074 7.0174 2.69998 7.10998L7.58998 12L2.69998 16.89C2.6074 16.9826 2.53396 17.0925 2.48385 17.2134C2.43375 17.3344 2.40796 17.464 2.40796 17.595C2.40796 17.7259 2.43375 17.8556 2.48385 17.9765C2.53396 18.0975 2.6074 18.2074 2.69998 18.3C2.79256 18.3926 2.90247 18.466 3.02344 18.5161C3.1444 18.5662 3.27405 18.592 3.40498 18.592C3.53591 18.592 3.66556 18.5662 3.78652 18.5161C3.90749 18.466 4.0174 18.3926 4.10998 18.3L8.99998 13.41L13.89 18.3C13.9826 18.3926 14.0925 18.466 14.2134 18.5161C14.3344 18.5662 14.464 18.592 14.595 18.592C14.7259 18.592 14.8556 18.5662 14.9765 18.5161C15.0975 18.466 15.2074 18.3926 15.3 18.3C15.3926 18.2074 15.466 18.0975 15.5161 17.9765C15.5662 17.8556 15.592 17.7259 15.592 17.595C15.592 17.464 15.5662 17.3344 15.5161 17.2134C15.466 17.0925 15.3926 16.9826 15.3 16.89L10.41 12L15.3 7.10998C15.68 6.72998 15.68 6.08998 15.3 5.70998Z',
        fill: '#414453',
      }),
    }),
  $4 = () =>
    R.jsxs('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '24',
      height: '24',
      viewBox: '0 0 24 24',
      fill: 'none',
      children: [
        R.jsx('path', {
          d: 'M17.8933 6H1.40479',
          stroke: '#414453',
          strokeWidth: '2',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        }),
        R.jsx('path', {
          d: 'M17.8933 12H1.40479',
          stroke: '#414453',
          strokeWidth: '2',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        }),
        R.jsx('path', {
          d: 'M17.8933 18H1.40479',
          stroke: '#414453',
          strokeWidth: '2',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        }),
      ],
    }),
  F4 = () => {
    const e = Pg(),
      t = ui(),
      n = () => {
        t(ut.logout()), e('/');
      },
      { t: r } = An();
    return R.jsx('button', {
      type: 'button',
      onClick: n,
      children: r('auth.logout'),
    });
  },
  I4 = '/assets/avatar-37c61c10.png',
  U4 = () => {
    const [e, t] = k.useState(!1),
      n = ui(),
      { status: r, userData: o } = jn(qr),
      { t: i, i18n: s } = An(),
      a = () => {
        t(!e);
      },
      l = { transform: e ? 'translate(0, 0)' : ' translate(-100%, 0)' },
      u = () => {
        t(!1);
      },
      c = () => {
        n(bx());
      };
    return R.jsxs('div', {
      className: Ze.sidebar,
      style: l,
      children: [
        e
          ? R.jsx('button', {
              type: 'button',
              className: Ze.btnClose,
              onClick: a,
              children: R.jsx(M4, {}),
            })
          : R.jsx('button', {
              type: 'button',
              className: Ze.btnMenu,
              onClick: a,
              children: R.jsx($4, {}),
            }),
        R.jsx('div', {
          className: Ze.userWrap,
          children:
            o &&
            r === G.Succeeded &&
            R.jsxs('div', {
              className: Ze.user,
              children: [
                R.jsx('div', {
                  className: Ze.userAvatarWrap,
                  children: R.jsx('img', {
                    className: Ze.userAvatar,
                    src: (o == null ? void 0 : o.user.avatarURL) || I4,
                    alt: o.user.name,
                  }),
                }),
                R.jsx('div', { children: o.user.name }),
              ],
            }),
        }),
        R.jsxs('nav', {
          children: [
            R.jsx('a', {
              href: '/#public-rooms',
              onClick: u,
              className: Ze.navLink,
              children: R.jsx('span', { children: i('sidebar.publicRooms') }),
            }),
            o &&
              r === G.Succeeded &&
              R.jsx('a', {
                href: '/#private-rooms',
                onClick: u,
                className: Ze.navLink,
                children: R.jsx('span', {
                  children: i('sidebar.privateRooms'),
                }),
              }),
            R.jsx('a', {
              href: '/#create-room',
              onClick: u,
              className: Ze.navLink,
              children: R.jsx('span', { children: i('sidebar.createRoom') }),
            }),
          ],
        }),
        R.jsxs('div', {
          className: Ze.wrapThemLang,
          children: [
            R.jsx('button', {
              type: 'button',
              onClick: () =>
                s.changeLanguage(s.language === 'en' ? 'ua' : 'en'),
              children: s.language === 'en' ? 'UA >' : 'EN >',
            }),
            R.jsx('button', {
              type: 'button',
              onClick: () => c(),
              children: R.jsx(A4, {}),
            }),
          ],
        }),
        R.jsx('div', {
          className: Ze.bottomWrap,
          children: R.jsx('div', {
            className: Ze.bottomList,
            children: o && r === G.Succeeded && R.jsx(F4, {}),
          }),
        }),
      ],
    });
  },
  z4 = () =>
    R.jsxs('div', {
      className: 'layout',
      children: [
        R.jsx(h4, {}),
        R.jsx(U4, {}),
        R.jsx('main', { className: x4.main, children: R.jsx(Yw, {}) }),
        R.jsx(y4, {}),
      ],
    }),
  B4 = () => {
    const { mode: e } = jn(jx),
      t = ui();
    return (
      k.useEffect(() => {
        t(ut.currentUser());
      }, [t]),
      R.jsx('div', {
        className: `app ${e === br.LIGHT ? 'lightTheme' : ''}`,
        children: R.jsx(z4, {}),
      })
    );
  },
  V4 = { publicRoomsData: null, status: G.Idle, error: null },
  es = {
    getPublicRooms: qi(
      'rooms/getPublicRooms',
      async () => await Zi.rooms.getPublicRooms()
    ),
  },
  H4 = Xc({
    name: 'rooms',
    initialState: { ...V4 },
    reducers: {},
    extraReducers: (e) => {
      e.addCase(es.getPublicRooms.pending, (t) => ({ ...t, status: G.Loading }))
        .addCase(es.getPublicRooms.fulfilled, (t, { payload: n }) => ({
          ...t,
          status: G.Succeeded,
          publicRoomsData: n,
        }))
        .addCase(es.getPublicRooms.rejected, (t, { error: n }) => ({
          ...t,
          status: G.Failed,
          error: n.message || null,
        }));
    },
  }),
  W4 = (e) => e.rooms,
  K4 = G2({
    reducer: { user: _x.reducer, theme: l1.reducer, rooms: H4.reducer },
  });
const Q4 = '_homeContainer_hx04x_1',
  J4 = '_sectionHero_hx04x_7',
  Rp = { homeContainer: Q4, sectionHero: J4 },
  q4 = '_sectionPublic_1dotn_1',
  G4 = '_list_1dotn_18',
  Y4 = '_listItem_1dotn_25',
  Ol = { sectionPublic: q4, list: G4, listItem: Y4 },
  X4 = ({ rooms: e }) => {
    const { status: t, userData: n } = jn(qr),
      [r, o] = k.useState(!1);
    return R.jsxs(R.Fragment, {
      children: [
        R.jsx(f1, { open: r, setIsOpen: o }),
        R.jsx('div', {
          className: Ol.list,
          children:
            n && t === G.Succeeded
              ? e.map((i) =>
                  R.jsxs(
                    Ls,
                    {
                      to: `/public-chat/${i._id}`,
                      className: Ol.listItem,
                      children: [
                        R.jsx('div', { children: i.title }),
                        R.jsx('div', { children: i.description }),
                        R.jsx('div', { children: i.topic }),
                      ],
                    },
                    i._id
                  )
                )
              : e.map((i) =>
                  R.jsxs(
                    'button',
                    {
                      type: 'button',
                      className: Ol.listItem,
                      onClick: () => o(!0),
                      children: [
                        R.jsx('div', { children: i.title }),
                        R.jsx('div', { children: i.description }),
                        R.jsx('div', { children: i.topic }),
                      ],
                    },
                    i._id
                  )
                ),
        }),
      ],
    });
  },
  Z4 = '_loader_li5lx_1',
  e3 = { loader: Z4 };
function t3() {
  return R.jsx('div', { className: e3.loader, children: 'Loading...' });
}
const n3 = '_sectionPublic_19xzw_1',
  r3 = { sectionPublic: n3 },
  o3 = () => {
    const { t: e } = An(),
      t = ui(),
      { publicRoomsData: n, status: r } = jn(W4);
    return (
      k.useEffect(() => {
        (async () => {
          await t(es.getPublicRooms());
        })();
      }, [t]),
      R.jsxs('section', {
        id: 'public-rooms',
        className: r3.sectionPublic,
        children: [
          R.jsx('h2', { children: e('rooms.public') }),
          r === G.Loading && R.jsx(t3, {}),
          n && r === G.Succeeded && R.jsx(X4, { rooms: n.rooms }),
        ],
      })
    );
  },
  i3 = () => {
    const { status: e, userData: t } = jn(qr),
      { t: n } = An();
    return R.jsxs('div', {
      className: `container ${Rp.homeContainer}`,
      children: [
        R.jsxs('section', {
          className: Rp.sectionHero,
          children: [
            R.jsx('h1', { children: n('main.title') }),
            R.jsx('h3', { children: n('main.description') }),
            R.jsx('div', {
              children: R.jsx('input', {
                type: 'text',
                placeholder: 'search...',
              }),
            }),
          ],
        }),
        R.jsx(o3, {}),
        t &&
          e === G.Succeeded &&
          R.jsx('section', {
            id: 'private-rooms',
            style: { marginTop: '50px' },
            children: R.jsx('h2', { children: n('rooms.private') }),
          }),
      ],
    });
  },
  s3 = {
    type: 'logger',
    log(e) {
      this.output('log', e);
    },
    warn(e) {
      this.output('warn', e);
    },
    error(e) {
      this.output('error', e);
    },
    output(e, t) {
      console && console[e] && console[e].apply(console, t);
    },
  };
class Ds {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(t, n);
  }
  init(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.prefix = n.prefix || 'i18next:'),
      (this.logger = t || s3),
      (this.options = n),
      (this.debug = n.debug);
  }
  log() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, 'log', '', !0);
  }
  warn() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, 'warn', '', !0);
  }
  error() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, 'error', '');
  }
  deprecate() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, 'warn', 'WARNING DEPRECATED: ', !0);
  }
  forward(t, n, r, o) {
    return o && !this.debug
      ? null
      : (typeof t[0] == 'string' && (t[0] = `${r}${this.prefix} ${t[0]}`),
        this.logger[n](t));
  }
  create(t) {
    return new Ds(this.logger, {
      prefix: `${this.prefix}:${t}:`,
      ...this.options,
    });
  }
  clone(t) {
    return (
      (t = t || this.options),
      (t.prefix = t.prefix || this.prefix),
      new Ds(this.logger, t)
    );
  }
}
var Dt = new Ds();
class ba {
  constructor() {
    this.observers = {};
  }
  on(t, n) {
    return (
      t.split(' ').forEach((r) => {
        (this.observers[r] = this.observers[r] || []),
          this.observers[r].push(n);
      }),
      this
    );
  }
  off(t, n) {
    if (this.observers[t]) {
      if (!n) {
        delete this.observers[t];
        return;
      }
      this.observers[t] = this.observers[t].filter((r) => r !== n);
    }
  }
  emit(t) {
    for (
      var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1;
      o < n;
      o++
    )
      r[o - 1] = arguments[o];
    this.observers[t] &&
      [].concat(this.observers[t]).forEach((s) => {
        s(...r);
      }),
      this.observers['*'] &&
        [].concat(this.observers['*']).forEach((s) => {
          s.apply(s, [t, ...r]);
        });
  }
}
function go() {
  let e, t;
  const n = new Promise((r, o) => {
    (e = r), (t = o);
  });
  return (n.resolve = e), (n.reject = t), n;
}
function Lp(e) {
  return e == null ? '' : '' + e;
}
function a3(e, t, n) {
  e.forEach((r) => {
    t[r] && (n[r] = t[r]);
  });
}
function lf(e, t, n) {
  function r(s) {
    return s && s.indexOf('###') > -1 ? s.replace(/###/g, '.') : s;
  }
  function o() {
    return !e || typeof e == 'string';
  }
  const i = typeof t != 'string' ? [].concat(t) : t.split('.');
  for (; i.length > 1; ) {
    if (o()) return {};
    const s = r(i.shift());
    !e[s] && n && (e[s] = new n()),
      Object.prototype.hasOwnProperty.call(e, s) ? (e = e[s]) : (e = {});
  }
  return o() ? {} : { obj: e, k: r(i.shift()) };
}
function Op(e, t, n) {
  const { obj: r, k: o } = lf(e, t, Object);
  r[o] = n;
}
function l3(e, t, n, r) {
  const { obj: o, k: i } = lf(e, t, Object);
  (o[i] = o[i] || []), r && (o[i] = o[i].concat(n)), r || o[i].push(n);
}
function As(e, t) {
  const { obj: n, k: r } = lf(e, t);
  if (n) return n[r];
}
function u3(e, t, n) {
  const r = As(e, n);
  return r !== void 0 ? r : As(t, n);
}
function d1(e, t, n) {
  for (const r in t)
    r !== '__proto__' &&
      r !== 'constructor' &&
      (r in e
        ? typeof e[r] == 'string' ||
          e[r] instanceof String ||
          typeof t[r] == 'string' ||
          t[r] instanceof String
          ? n && (e[r] = t[r])
          : d1(e[r], t[r], n)
        : (e[r] = t[r]));
  return e;
}
function lr(e) {
  return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}
var c3 = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;',
};
function f3(e) {
  return typeof e == 'string' ? e.replace(/[&<>"'\/]/g, (t) => c3[t]) : e;
}
const d3 = [' ', ',', '?', '!', ';'];
function p3(e, t, n) {
  (t = t || ''), (n = n || '');
  const r = d3.filter((s) => t.indexOf(s) < 0 && n.indexOf(s) < 0);
  if (r.length === 0) return !0;
  const o = new RegExp(`(${r.map((s) => (s === '?' ? '\\?' : s)).join('|')})`);
  let i = !o.test(e);
  if (!i) {
    const s = e.indexOf(n);
    s > 0 && !o.test(e.substring(0, s)) && (i = !0);
  }
  return i;
}
function Ms(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '.';
  if (!e) return;
  if (e[t]) return e[t];
  const r = t.split(n);
  let o = e;
  for (let i = 0; i < r.length; ++i) {
    if (!o || (typeof o[r[i]] == 'string' && i + 1 < r.length)) return;
    if (o[r[i]] === void 0) {
      let s = 2,
        a = r.slice(i, i + s).join(n),
        l = o[a];
      for (; l === void 0 && r.length > i + s; )
        s++, (a = r.slice(i, i + s).join(n)), (l = o[a]);
      if (l === void 0) return;
      if (l === null) return null;
      if (t.endsWith(a)) {
        if (typeof l == 'string') return l;
        if (a && typeof l[a] == 'string') return l[a];
      }
      const u = r.slice(i + s).join(n);
      return u ? Ms(l, u, n) : void 0;
    }
    o = o[r[i]];
  }
  return o;
}
function $s(e) {
  return e && e.indexOf('_') > 0 ? e.replace('_', '-') : e;
}
class Np extends ba {
  constructor(t) {
    let n =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { ns: ['translation'], defaultNS: 'translation' };
    super(),
      (this.data = t || {}),
      (this.options = n),
      this.options.keySeparator === void 0 && (this.options.keySeparator = '.'),
      this.options.ignoreJSONStructure === void 0 &&
        (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(t) {
    this.options.ns.indexOf(t) < 0 && this.options.ns.push(t);
  }
  removeNamespaces(t) {
    const n = this.options.ns.indexOf(t);
    n > -1 && this.options.ns.splice(n, 1);
  }
  getResource(t, n, r) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const i =
        o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator,
      s =
        o.ignoreJSONStructure !== void 0
          ? o.ignoreJSONStructure
          : this.options.ignoreJSONStructure;
    let a = [t, n];
    r && typeof r != 'string' && (a = a.concat(r)),
      r && typeof r == 'string' && (a = a.concat(i ? r.split(i) : r)),
      t.indexOf('.') > -1 && (a = t.split('.'));
    const l = As(this.data, a);
    return l || !s || typeof r != 'string'
      ? l
      : Ms(this.data && this.data[t] && this.data[t][n], r, i);
  }
  addResource(t, n, r, o) {
    let i =
      arguments.length > 4 && arguments[4] !== void 0
        ? arguments[4]
        : { silent: !1 };
    const s =
      i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator;
    let a = [t, n];
    r && (a = a.concat(s ? r.split(s) : r)),
      t.indexOf('.') > -1 && ((a = t.split('.')), (o = n), (n = a[1])),
      this.addNamespaces(n),
      Op(this.data, a, o),
      i.silent || this.emit('added', t, n, r, o);
  }
  addResources(t, n, r) {
    let o =
      arguments.length > 3 && arguments[3] !== void 0
        ? arguments[3]
        : { silent: !1 };
    for (const i in r)
      (typeof r[i] == 'string' ||
        Object.prototype.toString.apply(r[i]) === '[object Array]') &&
        this.addResource(t, n, i, r[i], { silent: !0 });
    o.silent || this.emit('added', t, n, r);
  }
  addResourceBundle(t, n, r, o, i) {
    let s =
        arguments.length > 5 && arguments[5] !== void 0
          ? arguments[5]
          : { silent: !1 },
      a = [t, n];
    t.indexOf('.') > -1 && ((a = t.split('.')), (o = r), (r = n), (n = a[1])),
      this.addNamespaces(n);
    let l = As(this.data, a) || {};
    o ? d1(l, r, i) : (l = { ...l, ...r }),
      Op(this.data, a, l),
      s.silent || this.emit('added', t, n, r);
  }
  removeResourceBundle(t, n) {
    this.hasResourceBundle(t, n) && delete this.data[t][n],
      this.removeNamespaces(n),
      this.emit('removed', t, n);
  }
  hasResourceBundle(t, n) {
    return this.getResource(t, n) !== void 0;
  }
  getResourceBundle(t, n) {
    return (
      n || (n = this.options.defaultNS),
      this.options.compatibilityAPI === 'v1'
        ? { ...this.getResource(t, n) }
        : this.getResource(t, n)
    );
  }
  getDataByLanguage(t) {
    return this.data[t];
  }
  hasLanguageSomeTranslations(t) {
    const n = this.getDataByLanguage(t);
    return !!((n && Object.keys(n)) || []).find(
      (o) => n[o] && Object.keys(n[o]).length > 0
    );
  }
  toJSON() {
    return this.data;
  }
}
var p1 = {
  processors: {},
  addPostProcessor(e) {
    this.processors[e.name] = e;
  },
  handle(e, t, n, r, o) {
    return (
      e.forEach((i) => {
        this.processors[i] && (t = this.processors[i].process(t, n, r, o));
      }),
      t
    );
  },
};
const _p = {};
class Fs extends ba {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(),
      a3(
        [
          'resourceStore',
          'languageUtils',
          'pluralResolver',
          'interpolator',
          'backendConnector',
          'i18nFormat',
          'utils',
        ],
        t,
        this
      ),
      (this.options = n),
      this.options.keySeparator === void 0 && (this.options.keySeparator = '.'),
      (this.logger = Dt.create('translator'));
  }
  changeLanguage(t) {
    t && (this.language = t);
  }
  exists(t) {
    let n =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { interpolation: {} };
    if (t == null) return !1;
    const r = this.resolve(t, n);
    return r && r.res !== void 0;
  }
  extractFromKey(t, n) {
    let r = n.nsSeparator !== void 0 ? n.nsSeparator : this.options.nsSeparator;
    r === void 0 && (r = ':');
    const o =
      n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator;
    let i = n.ns || this.options.defaultNS || [];
    const s = r && t.indexOf(r) > -1,
      a =
        !this.options.userDefinedKeySeparator &&
        !n.keySeparator &&
        !this.options.userDefinedNsSeparator &&
        !n.nsSeparator &&
        !p3(t, r, o);
    if (s && !a) {
      const l = t.match(this.interpolator.nestingRegexp);
      if (l && l.length > 0) return { key: t, namespaces: i };
      const u = t.split(r);
      (r !== o || (r === o && this.options.ns.indexOf(u[0]) > -1)) &&
        (i = u.shift()),
        (t = u.join(o));
    }
    return typeof i == 'string' && (i = [i]), { key: t, namespaces: i };
  }
  translate(t, n, r) {
    if (
      (typeof n != 'object' &&
        this.options.overloadTranslationOptionHandler &&
        (n = this.options.overloadTranslationOptionHandler(arguments)),
      typeof n == 'object' && (n = { ...n }),
      n || (n = {}),
      t == null)
    )
      return '';
    Array.isArray(t) || (t = [String(t)]);
    const o =
        n.returnDetails !== void 0
          ? n.returnDetails
          : this.options.returnDetails,
      i =
        n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator,
      { key: s, namespaces: a } = this.extractFromKey(t[t.length - 1], n),
      l = a[a.length - 1],
      u = n.lng || this.language,
      c = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (u && u.toLowerCase() === 'cimode') {
      if (c) {
        const m = n.nsSeparator || this.options.nsSeparator;
        return o
          ? {
              res: `${l}${m}${s}`,
              usedKey: s,
              exactUsedKey: s,
              usedLng: u,
              usedNS: l,
              usedParams: this.getUsedParamsDetails(n),
            }
          : `${l}${m}${s}`;
      }
      return o
        ? {
            res: s,
            usedKey: s,
            exactUsedKey: s,
            usedLng: u,
            usedNS: l,
            usedParams: this.getUsedParamsDetails(n),
          }
        : s;
    }
    const f = this.resolve(t, n);
    let d = f && f.res;
    const w = (f && f.usedKey) || s,
      p = (f && f.exactUsedKey) || s,
      y = Object.prototype.toString.apply(d),
      S = ['[object Number]', '[object Function]', '[object RegExp]'],
      g = n.joinArrays !== void 0 ? n.joinArrays : this.options.joinArrays,
      h = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (
      h &&
      d &&
      typeof d != 'string' &&
      typeof d != 'boolean' &&
      typeof d != 'number' &&
      S.indexOf(y) < 0 &&
      !(typeof g == 'string' && y === '[object Array]')
    ) {
      if (!n.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler ||
          this.logger.warn(
            'accessing an object - but returnObjects options is not enabled!'
          );
        const m = this.options.returnedObjectHandler
          ? this.options.returnedObjectHandler(w, d, { ...n, ns: a })
          : `key '${s} (${this.language})' returned an object instead of string.`;
        return o
          ? ((f.res = m), (f.usedParams = this.getUsedParamsDetails(n)), f)
          : m;
      }
      if (i) {
        const m = y === '[object Array]',
          C = m ? [] : {},
          O = m ? p : w;
        for (const P in d)
          if (Object.prototype.hasOwnProperty.call(d, P)) {
            const T = `${O}${i}${P}`;
            (C[P] = this.translate(T, { ...n, joinArrays: !1, ns: a })),
              C[P] === T && (C[P] = d[P]);
          }
        d = C;
      }
    } else if (h && typeof g == 'string' && y === '[object Array]')
      (d = d.join(g)), d && (d = this.extendTranslation(d, t, n, r));
    else {
      let m = !1,
        C = !1;
      const O = n.count !== void 0 && typeof n.count != 'string',
        P = Fs.hasDefaultValue(n),
        T = O ? this.pluralResolver.getSuffix(u, n.count, n) : '',
        M =
          n.ordinal && O
            ? this.pluralResolver.getSuffix(u, n.count, { ordinal: !1 })
            : '',
        D = n[`defaultValue${T}`] || n[`defaultValue${M}`] || n.defaultValue;
      !this.isValidLookup(d) && P && ((m = !0), (d = D)),
        this.isValidLookup(d) || ((C = !0), (d = s));
      const Te =
          (n.missingKeyNoValueFallbackToKey ||
            this.options.missingKeyNoValueFallbackToKey) &&
          C
            ? void 0
            : d,
        Ae = P && D !== d && this.options.updateMissing;
      if (C || m || Ae) {
        if (
          (this.logger.log(
            Ae ? 'updateKey' : 'missingKey',
            u,
            l,
            s,
            Ae ? D : d
          ),
          i)
        ) {
          const fe = this.resolve(s, { ...n, keySeparator: !1 });
          fe &&
            fe.res &&
            this.logger.warn(
              'Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.'
            );
        }
        let Xe = [];
        const te = this.languageUtils.getFallbackCodes(
          this.options.fallbackLng,
          n.lng || this.language
        );
        if (this.options.saveMissingTo === 'fallback' && te && te[0])
          for (let fe = 0; fe < te.length; fe++) Xe.push(te[fe]);
        else
          this.options.saveMissingTo === 'all'
            ? (Xe = this.languageUtils.toResolveHierarchy(
                n.lng || this.language
              ))
            : Xe.push(n.lng || this.language);
        const wt = (fe, b, $) => {
          const B = P && $ !== d ? $ : Te;
          this.options.missingKeyHandler
            ? this.options.missingKeyHandler(fe, l, b, B, Ae, n)
            : this.backendConnector &&
              this.backendConnector.saveMissing &&
              this.backendConnector.saveMissing(fe, l, b, B, Ae, n),
            this.emit('missingKey', fe, l, b, d);
        };
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && O
            ? Xe.forEach((fe) => {
                this.pluralResolver.getSuffixes(fe, n).forEach((b) => {
                  wt([fe], s + b, n[`defaultValue${b}`] || D);
                });
              })
            : wt(Xe, s, D));
      }
      (d = this.extendTranslation(d, t, n, f, r)),
        C &&
          d === s &&
          this.options.appendNamespaceToMissingKey &&
          (d = `${l}:${s}`),
        (C || m) &&
          this.options.parseMissingKeyHandler &&
          (this.options.compatibilityAPI !== 'v1'
            ? (d = this.options.parseMissingKeyHandler(
                this.options.appendNamespaceToMissingKey ? `${l}:${s}` : s,
                m ? d : void 0
              ))
            : (d = this.options.parseMissingKeyHandler(d)));
    }
    return o
      ? ((f.res = d), (f.usedParams = this.getUsedParamsDetails(n)), f)
      : d;
  }
  extendTranslation(t, n, r, o, i) {
    var s = this;
    if (this.i18nFormat && this.i18nFormat.parse)
      t = this.i18nFormat.parse(
        t,
        { ...this.options.interpolation.defaultVariables, ...r },
        r.lng || this.language || o.usedLng,
        o.usedNS,
        o.usedKey,
        { resolved: o }
      );
    else if (!r.skipInterpolation) {
      r.interpolation &&
        this.interpolator.init({
          ...r,
          interpolation: { ...this.options.interpolation, ...r.interpolation },
        });
      const u =
        typeof t == 'string' &&
        (r && r.interpolation && r.interpolation.skipOnVariables !== void 0
          ? r.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables);
      let c;
      if (u) {
        const d = t.match(this.interpolator.nestingRegexp);
        c = d && d.length;
      }
      let f = r.replace && typeof r.replace != 'string' ? r.replace : r;
      if (
        (this.options.interpolation.defaultVariables &&
          (f = { ...this.options.interpolation.defaultVariables, ...f }),
        (t = this.interpolator.interpolate(t, f, r.lng || this.language, r)),
        u)
      ) {
        const d = t.match(this.interpolator.nestingRegexp),
          w = d && d.length;
        c < w && (r.nest = !1);
      }
      !r.lng &&
        this.options.compatibilityAPI !== 'v1' &&
        o &&
        o.res &&
        (r.lng = o.usedLng),
        r.nest !== !1 &&
          (t = this.interpolator.nest(
            t,
            function () {
              for (
                var d = arguments.length, w = new Array(d), p = 0;
                p < d;
                p++
              )
                w[p] = arguments[p];
              return i && i[0] === w[0] && !r.context
                ? (s.logger.warn(
                    `It seems you are nesting recursively key: ${w[0]} in key: ${n[0]}`
                  ),
                  null)
                : s.translate(...w, n);
            },
            r
          )),
        r.interpolation && this.interpolator.reset();
    }
    const a = r.postProcess || this.options.postProcess,
      l = typeof a == 'string' ? [a] : a;
    return (
      t != null &&
        l &&
        l.length &&
        r.applyPostProcessor !== !1 &&
        (t = p1.handle(
          l,
          t,
          n,
          this.options && this.options.postProcessPassResolved
            ? {
                i18nResolved: {
                  ...o,
                  usedParams: this.getUsedParamsDetails(r),
                },
                ...r,
              }
            : r,
          this
        )),
      t
    );
  }
  resolve(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r,
      o,
      i,
      s,
      a;
    return (
      typeof t == 'string' && (t = [t]),
      t.forEach((l) => {
        if (this.isValidLookup(r)) return;
        const u = this.extractFromKey(l, n),
          c = u.key;
        o = c;
        let f = u.namespaces;
        this.options.fallbackNS && (f = f.concat(this.options.fallbackNS));
        const d = n.count !== void 0 && typeof n.count != 'string',
          w =
            d &&
            !n.ordinal &&
            n.count === 0 &&
            this.pluralResolver.shouldUseIntlApi(),
          p =
            n.context !== void 0 &&
            (typeof n.context == 'string' || typeof n.context == 'number') &&
            n.context !== '',
          y = n.lngs
            ? n.lngs
            : this.languageUtils.toResolveHierarchy(
                n.lng || this.language,
                n.fallbackLng
              );
        f.forEach((S) => {
          this.isValidLookup(r) ||
            ((a = S),
            !_p[`${y[0]}-${S}`] &&
              this.utils &&
              this.utils.hasLoadedNamespace &&
              !this.utils.hasLoadedNamespace(a) &&
              ((_p[`${y[0]}-${S}`] = !0),
              this.logger.warn(
                `key "${o}" for languages "${y.join(
                  ', '
                )}" won't get resolved as namespace "${a}" was not yet loaded`,
                'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!'
              )),
            y.forEach((g) => {
              if (this.isValidLookup(r)) return;
              s = g;
              const h = [c];
              if (this.i18nFormat && this.i18nFormat.addLookupKeys)
                this.i18nFormat.addLookupKeys(h, c, g, S, n);
              else {
                let m;
                d && (m = this.pluralResolver.getSuffix(g, n.count, n));
                const C = `${this.options.pluralSeparator}zero`,
                  O = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                if (
                  (d &&
                    (h.push(c + m),
                    n.ordinal &&
                      m.indexOf(O) === 0 &&
                      h.push(c + m.replace(O, this.options.pluralSeparator)),
                    w && h.push(c + C)),
                  p)
                ) {
                  const P = `${c}${this.options.contextSeparator}${n.context}`;
                  h.push(P),
                    d &&
                      (h.push(P + m),
                      n.ordinal &&
                        m.indexOf(O) === 0 &&
                        h.push(P + m.replace(O, this.options.pluralSeparator)),
                      w && h.push(P + C));
                }
              }
              let v;
              for (; (v = h.pop()); )
                this.isValidLookup(r) ||
                  ((i = v), (r = this.getResource(g, S, v, n)));
            }));
        });
      }),
      { res: r, usedKey: o, exactUsedKey: i, usedLng: s, usedNS: a }
    );
  }
  isValidLookup(t) {
    return (
      t !== void 0 &&
      !(!this.options.returnNull && t === null) &&
      !(!this.options.returnEmptyString && t === '')
    );
  }
  getResource(t, n, r) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource
      ? this.i18nFormat.getResource(t, n, r, o)
      : this.resourceStore.getResource(t, n, r, o);
  }
  getUsedParamsDetails() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const n = [
        'defaultValue',
        'ordinal',
        'context',
        'replace',
        'lng',
        'lngs',
        'fallbackLng',
        'ns',
        'keySeparator',
        'nsSeparator',
        'returnObjects',
        'returnDetails',
        'joinArrays',
        'postProcess',
        'interpolation',
      ],
      r = t.replace && typeof t.replace != 'string';
    let o = r ? t.replace : t;
    if (
      (r && typeof t.count < 'u' && (o.count = t.count),
      this.options.interpolation.defaultVariables &&
        (o = { ...this.options.interpolation.defaultVariables, ...o }),
      !r)
    ) {
      o = { ...o };
      for (const i of n) delete o[i];
    }
    return o;
  }
  static hasDefaultValue(t) {
    const n = 'defaultValue';
    for (const r in t)
      if (
        Object.prototype.hasOwnProperty.call(t, r) &&
        n === r.substring(0, n.length) &&
        t[r] !== void 0
      )
        return !0;
    return !1;
  }
}
function Nl(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
class Tp {
  constructor(t) {
    (this.options = t),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = Dt.create('languageUtils'));
  }
  getScriptPartFromCode(t) {
    if (((t = $s(t)), !t || t.indexOf('-') < 0)) return null;
    const n = t.split('-');
    return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === 'x')
      ? null
      : this.formatLanguageCode(n.join('-'));
  }
  getLanguagePartFromCode(t) {
    if (((t = $s(t)), !t || t.indexOf('-') < 0)) return t;
    const n = t.split('-');
    return this.formatLanguageCode(n[0]);
  }
  formatLanguageCode(t) {
    if (typeof t == 'string' && t.indexOf('-') > -1) {
      const n = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab'];
      let r = t.split('-');
      return (
        this.options.lowerCaseLng
          ? (r = r.map((o) => o.toLowerCase()))
          : r.length === 2
            ? ((r[0] = r[0].toLowerCase()),
              (r[1] = r[1].toUpperCase()),
              n.indexOf(r[1].toLowerCase()) > -1 &&
                (r[1] = Nl(r[1].toLowerCase())))
            : r.length === 3 &&
              ((r[0] = r[0].toLowerCase()),
              r[1].length === 2 && (r[1] = r[1].toUpperCase()),
              r[0] !== 'sgn' &&
                r[2].length === 2 &&
                (r[2] = r[2].toUpperCase()),
              n.indexOf(r[1].toLowerCase()) > -1 &&
                (r[1] = Nl(r[1].toLowerCase())),
              n.indexOf(r[2].toLowerCase()) > -1 &&
                (r[2] = Nl(r[2].toLowerCase()))),
        r.join('-')
      );
    }
    return this.options.cleanCode || this.options.lowerCaseLng
      ? t.toLowerCase()
      : t;
  }
  isSupportedCode(t) {
    return (
      (this.options.load === 'languageOnly' ||
        this.options.nonExplicitSupportedLngs) &&
        (t = this.getLanguagePartFromCode(t)),
      !this.supportedLngs ||
        !this.supportedLngs.length ||
        this.supportedLngs.indexOf(t) > -1
    );
  }
  getBestMatchFromCodes(t) {
    if (!t) return null;
    let n;
    return (
      t.forEach((r) => {
        if (n) return;
        const o = this.formatLanguageCode(r);
        (!this.options.supportedLngs || this.isSupportedCode(o)) && (n = o);
      }),
      !n &&
        this.options.supportedLngs &&
        t.forEach((r) => {
          if (n) return;
          const o = this.getLanguagePartFromCode(r);
          if (this.isSupportedCode(o)) return (n = o);
          n = this.options.supportedLngs.find((i) => {
            if (i === o) return i;
            if (
              !(i.indexOf('-') < 0 && o.indexOf('-') < 0) &&
              i.indexOf(o) === 0
            )
              return i;
          });
        }),
      n || (n = this.getFallbackCodes(this.options.fallbackLng)[0]),
      n
    );
  }
  getFallbackCodes(t, n) {
    if (!t) return [];
    if (
      (typeof t == 'function' && (t = t(n)),
      typeof t == 'string' && (t = [t]),
      Object.prototype.toString.apply(t) === '[object Array]')
    )
      return t;
    if (!n) return t.default || [];
    let r = t[n];
    return (
      r || (r = t[this.getScriptPartFromCode(n)]),
      r || (r = t[this.formatLanguageCode(n)]),
      r || (r = t[this.getLanguagePartFromCode(n)]),
      r || (r = t.default),
      r || []
    );
  }
  toResolveHierarchy(t, n) {
    const r = this.getFallbackCodes(n || this.options.fallbackLng || [], t),
      o = [],
      i = (s) => {
        s &&
          (this.isSupportedCode(s)
            ? o.push(s)
            : this.logger.warn(
                `rejecting language code not found in supportedLngs: ${s}`
              ));
      };
    return (
      typeof t == 'string' && (t.indexOf('-') > -1 || t.indexOf('_') > -1)
        ? (this.options.load !== 'languageOnly' &&
            i(this.formatLanguageCode(t)),
          this.options.load !== 'languageOnly' &&
            this.options.load !== 'currentOnly' &&
            i(this.getScriptPartFromCode(t)),
          this.options.load !== 'currentOnly' &&
            i(this.getLanguagePartFromCode(t)))
        : typeof t == 'string' && i(this.formatLanguageCode(t)),
      r.forEach((s) => {
        o.indexOf(s) < 0 && i(this.formatLanguageCode(s));
      }),
      o
    );
  }
}
let h3 = [
    {
      lngs: [
        'ach',
        'ak',
        'am',
        'arn',
        'br',
        'fil',
        'gun',
        'ln',
        'mfe',
        'mg',
        'mi',
        'oc',
        'pt',
        'pt-BR',
        'tg',
        'tl',
        'ti',
        'tr',
        'uz',
        'wa',
      ],
      nr: [1, 2],
      fc: 1,
    },
    {
      lngs: [
        'af',
        'an',
        'ast',
        'az',
        'bg',
        'bn',
        'ca',
        'da',
        'de',
        'dev',
        'el',
        'en',
        'eo',
        'es',
        'et',
        'eu',
        'fi',
        'fo',
        'fur',
        'fy',
        'gl',
        'gu',
        'ha',
        'hi',
        'hu',
        'hy',
        'ia',
        'it',
        'kk',
        'kn',
        'ku',
        'lb',
        'mai',
        'ml',
        'mn',
        'mr',
        'nah',
        'nap',
        'nb',
        'ne',
        'nl',
        'nn',
        'no',
        'nso',
        'pa',
        'pap',
        'pms',
        'ps',
        'pt-PT',
        'rm',
        'sco',
        'se',
        'si',
        'so',
        'son',
        'sq',
        'sv',
        'sw',
        'ta',
        'te',
        'tk',
        'ur',
        'yo',
      ],
      nr: [1, 2],
      fc: 2,
    },
    {
      lngs: [
        'ay',
        'bo',
        'cgg',
        'fa',
        'ht',
        'id',
        'ja',
        'jbo',
        'ka',
        'km',
        'ko',
        'ky',
        'lo',
        'ms',
        'sah',
        'su',
        'th',
        'tt',
        'ug',
        'vi',
        'wo',
        'zh',
      ],
      nr: [1],
      fc: 3,
    },
    {
      lngs: ['be', 'bs', 'cnr', 'dz', 'hr', 'ru', 'sr', 'uk'],
      nr: [1, 2, 5],
      fc: 4,
    },
    { lngs: ['ar'], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
    { lngs: ['cs', 'sk'], nr: [1, 2, 5], fc: 6 },
    { lngs: ['csb', 'pl'], nr: [1, 2, 5], fc: 7 },
    { lngs: ['cy'], nr: [1, 2, 3, 8], fc: 8 },
    { lngs: ['fr'], nr: [1, 2], fc: 9 },
    { lngs: ['ga'], nr: [1, 2, 3, 7, 11], fc: 10 },
    { lngs: ['gd'], nr: [1, 2, 3, 20], fc: 11 },
    { lngs: ['is'], nr: [1, 2], fc: 12 },
    { lngs: ['jv'], nr: [0, 1], fc: 13 },
    { lngs: ['kw'], nr: [1, 2, 3, 4], fc: 14 },
    { lngs: ['lt'], nr: [1, 2, 10], fc: 15 },
    { lngs: ['lv'], nr: [1, 2, 0], fc: 16 },
    { lngs: ['mk'], nr: [1, 2], fc: 17 },
    { lngs: ['mnk'], nr: [0, 1, 2], fc: 18 },
    { lngs: ['mt'], nr: [1, 2, 11, 20], fc: 19 },
    { lngs: ['or'], nr: [2, 1], fc: 2 },
    { lngs: ['ro'], nr: [1, 2, 20], fc: 20 },
    { lngs: ['sl'], nr: [5, 1, 2, 3], fc: 21 },
    { lngs: ['he', 'iw'], nr: [1, 2, 20, 21], fc: 22 },
  ],
  m3 = {
    1: function (e) {
      return +(e > 1);
    },
    2: function (e) {
      return +(e != 1);
    },
    3: function (e) {
      return 0;
    },
    4: function (e) {
      return e % 10 == 1 && e % 100 != 11
        ? 0
        : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
          ? 1
          : 2;
    },
    5: function (e) {
      return e == 0
        ? 0
        : e == 1
          ? 1
          : e == 2
            ? 2
            : e % 100 >= 3 && e % 100 <= 10
              ? 3
              : e % 100 >= 11
                ? 4
                : 5;
    },
    6: function (e) {
      return e == 1 ? 0 : e >= 2 && e <= 4 ? 1 : 2;
    },
    7: function (e) {
      return e == 1
        ? 0
        : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
          ? 1
          : 2;
    },
    8: function (e) {
      return e == 1 ? 0 : e == 2 ? 1 : e != 8 && e != 11 ? 2 : 3;
    },
    9: function (e) {
      return +(e >= 2);
    },
    10: function (e) {
      return e == 1 ? 0 : e == 2 ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4;
    },
    11: function (e) {
      return e == 1 || e == 11
        ? 0
        : e == 2 || e == 12
          ? 1
          : e > 2 && e < 20
            ? 2
            : 3;
    },
    12: function (e) {
      return +(e % 10 != 1 || e % 100 == 11);
    },
    13: function (e) {
      return +(e !== 0);
    },
    14: function (e) {
      return e == 1 ? 0 : e == 2 ? 1 : e == 3 ? 2 : 3;
    },
    15: function (e) {
      return e % 10 == 1 && e % 100 != 11
        ? 0
        : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20)
          ? 1
          : 2;
    },
    16: function (e) {
      return e % 10 == 1 && e % 100 != 11 ? 0 : e !== 0 ? 1 : 2;
    },
    17: function (e) {
      return e == 1 || (e % 10 == 1 && e % 100 != 11) ? 0 : 1;
    },
    18: function (e) {
      return e == 0 ? 0 : e == 1 ? 1 : 2;
    },
    19: function (e) {
      return e == 1
        ? 0
        : e == 0 || (e % 100 > 1 && e % 100 < 11)
          ? 1
          : e % 100 > 10 && e % 100 < 20
            ? 2
            : 3;
    },
    20: function (e) {
      return e == 1 ? 0 : e == 0 || (e % 100 > 0 && e % 100 < 20) ? 1 : 2;
    },
    21: function (e) {
      return e % 100 == 1
        ? 1
        : e % 100 == 2
          ? 2
          : e % 100 == 3 || e % 100 == 4
            ? 3
            : 0;
    },
    22: function (e) {
      return e == 1 ? 0 : e == 2 ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3;
    },
  };
const g3 = ['v1', 'v2', 'v3'],
  y3 = ['v4'],
  bp = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 };
function v3() {
  const e = {};
  return (
    h3.forEach((t) => {
      t.lngs.forEach((n) => {
        e[n] = { numbers: t.nr, plurals: m3[t.fc] };
      });
    }),
    e
  );
}
class w3 {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.languageUtils = t),
      (this.options = n),
      (this.logger = Dt.create('pluralResolver')),
      (!this.options.compatibilityJSON ||
        y3.includes(this.options.compatibilityJSON)) &&
        (typeof Intl > 'u' || !Intl.PluralRules) &&
        ((this.options.compatibilityJSON = 'v3'),
        this.logger.error(
          'Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.'
        )),
      (this.rules = v3());
  }
  addRule(t, n) {
    this.rules[t] = n;
  }
  getRule(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi())
      try {
        return new Intl.PluralRules($s(t), {
          type: n.ordinal ? 'ordinal' : 'cardinal',
        });
      } catch {
        return;
      }
    return (
      this.rules[t] || this.rules[this.languageUtils.getLanguagePartFromCode(t)]
    );
  }
  needsPlural(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.getRule(t, n);
    return this.shouldUseIntlApi()
      ? r && r.resolvedOptions().pluralCategories.length > 1
      : r && r.numbers.length > 1;
  }
  getPluralFormsOfKey(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(t, r).map((o) => `${n}${o}`);
  }
  getSuffixes(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.getRule(t, n);
    return r
      ? this.shouldUseIntlApi()
        ? r
            .resolvedOptions()
            .pluralCategories.sort((o, i) => bp[o] - bp[i])
            .map(
              (o) =>
                `${this.options.prepend}${
                  n.ordinal ? `ordinal${this.options.prepend}` : ''
                }${o}`
            )
        : r.numbers.map((o) => this.getSuffix(t, o, n))
      : [];
  }
  getSuffix(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const o = this.getRule(t, r);
    return o
      ? this.shouldUseIntlApi()
        ? `${this.options.prepend}${
            r.ordinal ? `ordinal${this.options.prepend}` : ''
          }${o.select(n)}`
        : this.getSuffixRetroCompatible(o, n)
      : (this.logger.warn(`no plural rule found for: ${t}`), '');
  }
  getSuffixRetroCompatible(t, n) {
    const r = t.noAbs ? t.plurals(n) : t.plurals(Math.abs(n));
    let o = t.numbers[r];
    this.options.simplifyPluralSuffix &&
      t.numbers.length === 2 &&
      t.numbers[0] === 1 &&
      (o === 2 ? (o = 'plural') : o === 1 && (o = ''));
    const i = () =>
      this.options.prepend && o.toString()
        ? this.options.prepend + o.toString()
        : o.toString();
    return this.options.compatibilityJSON === 'v1'
      ? o === 1
        ? ''
        : typeof o == 'number'
          ? `_plural_${o.toString()}`
          : i()
      : this.options.compatibilityJSON === 'v2' ||
          (this.options.simplifyPluralSuffix &&
            t.numbers.length === 2 &&
            t.numbers[0] === 1)
        ? i()
        : this.options.prepend && r.toString()
          ? this.options.prepend + r.toString()
          : r.toString();
  }
  shouldUseIntlApi() {
    return !g3.includes(this.options.compatibilityJSON);
  }
}
function jp(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : '.',
    o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
    i = u3(e, t, n);
  return (
    !i &&
      o &&
      typeof n == 'string' &&
      ((i = Ms(e, n, r)), i === void 0 && (i = Ms(t, n, r))),
    i
  );
}
class S3 {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.logger = Dt.create('interpolator')),
      (this.options = t),
      (this.format = (t.interpolation && t.interpolation.format) || ((n) => n)),
      this.init(t);
  }
  init() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    t.interpolation || (t.interpolation = { escapeValue: !0 });
    const n = t.interpolation;
    (this.escape = n.escape !== void 0 ? n.escape : f3),
      (this.escapeValue = n.escapeValue !== void 0 ? n.escapeValue : !0),
      (this.useRawValueToEscape =
        n.useRawValueToEscape !== void 0 ? n.useRawValueToEscape : !1),
      (this.prefix = n.prefix ? lr(n.prefix) : n.prefixEscaped || '{{'),
      (this.suffix = n.suffix ? lr(n.suffix) : n.suffixEscaped || '}}'),
      (this.formatSeparator = n.formatSeparator
        ? n.formatSeparator
        : n.formatSeparator || ','),
      (this.unescapePrefix = n.unescapeSuffix ? '' : n.unescapePrefix || '-'),
      (this.unescapeSuffix = this.unescapePrefix ? '' : n.unescapeSuffix || ''),
      (this.nestingPrefix = n.nestingPrefix
        ? lr(n.nestingPrefix)
        : n.nestingPrefixEscaped || lr('$t(')),
      (this.nestingSuffix = n.nestingSuffix
        ? lr(n.nestingSuffix)
        : n.nestingSuffixEscaped || lr(')')),
      (this.nestingOptionsSeparator = n.nestingOptionsSeparator
        ? n.nestingOptionsSeparator
        : n.nestingOptionsSeparator || ','),
      (this.maxReplaces = n.maxReplaces ? n.maxReplaces : 1e3),
      (this.alwaysFormat = n.alwaysFormat !== void 0 ? n.alwaysFormat : !1),
      this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const t = `${this.prefix}(.+?)${this.suffix}`;
    this.regexp = new RegExp(t, 'g');
    const n = `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`;
    this.regexpUnescape = new RegExp(n, 'g');
    const r = `${this.nestingPrefix}(.+?)${this.nestingSuffix}`;
    this.nestingRegexp = new RegExp(r, 'g');
  }
  interpolate(t, n, r, o) {
    let i, s, a;
    const l =
      (this.options &&
        this.options.interpolation &&
        this.options.interpolation.defaultVariables) ||
      {};
    function u(p) {
      return p.replace(/\$/g, '$$$$');
    }
    const c = (p) => {
      if (p.indexOf(this.formatSeparator) < 0) {
        const h = jp(
          n,
          l,
          p,
          this.options.keySeparator,
          this.options.ignoreJSONStructure
        );
        return this.alwaysFormat
          ? this.format(h, void 0, r, { ...o, ...n, interpolationkey: p })
          : h;
      }
      const y = p.split(this.formatSeparator),
        S = y.shift().trim(),
        g = y.join(this.formatSeparator).trim();
      return this.format(
        jp(
          n,
          l,
          S,
          this.options.keySeparator,
          this.options.ignoreJSONStructure
        ),
        g,
        r,
        { ...o, ...n, interpolationkey: S }
      );
    };
    this.resetRegExp();
    const f =
        (o && o.missingInterpolationHandler) ||
        this.options.missingInterpolationHandler,
      d =
        o && o.interpolation && o.interpolation.skipOnVariables !== void 0
          ? o.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables;
    return (
      [
        { regex: this.regexpUnescape, safeValue: (p) => u(p) },
        {
          regex: this.regexp,
          safeValue: (p) => (this.escapeValue ? u(this.escape(p)) : u(p)),
        },
      ].forEach((p) => {
        for (a = 0; (i = p.regex.exec(t)); ) {
          const y = i[1].trim();
          if (((s = c(y)), s === void 0))
            if (typeof f == 'function') {
              const g = f(t, i, o);
              s = typeof g == 'string' ? g : '';
            } else if (o && Object.prototype.hasOwnProperty.call(o, y)) s = '';
            else if (d) {
              s = i[0];
              continue;
            } else
              this.logger.warn(
                `missed to pass in variable ${y} for interpolating ${t}`
              ),
                (s = '');
          else typeof s != 'string' && !this.useRawValueToEscape && (s = Lp(s));
          const S = p.safeValue(s);
          if (
            ((t = t.replace(i[0], S)),
            d
              ? ((p.regex.lastIndex += s.length),
                (p.regex.lastIndex -= i[0].length))
              : (p.regex.lastIndex = 0),
            a++,
            a >= this.maxReplaces)
          )
            break;
        }
      }),
      t
    );
  }
  nest(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      o,
      i,
      s;
    function a(l, u) {
      const c = this.nestingOptionsSeparator;
      if (l.indexOf(c) < 0) return l;
      const f = l.split(new RegExp(`${c}[ ]*{`));
      let d = `{${f[1]}`;
      (l = f[0]), (d = this.interpolate(d, s));
      const w = d.match(/'/g),
        p = d.match(/"/g);
      ((w && w.length % 2 === 0 && !p) || p.length % 2 !== 0) &&
        (d = d.replace(/'/g, '"'));
      try {
        (s = JSON.parse(d)), u && (s = { ...u, ...s });
      } catch (y) {
        return (
          this.logger.warn(
            `failed parsing options string in nesting for key ${l}`,
            y
          ),
          `${l}${c}${d}`
        );
      }
      return delete s.defaultValue, l;
    }
    for (; (o = this.nestingRegexp.exec(t)); ) {
      let l = [];
      (s = { ...r }),
        (s = s.replace && typeof s.replace != 'string' ? s.replace : s),
        (s.applyPostProcessor = !1),
        delete s.defaultValue;
      let u = !1;
      if (o[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(o[1])) {
        const c = o[1].split(this.formatSeparator).map((f) => f.trim());
        (o[1] = c.shift()), (l = c), (u = !0);
      }
      if (
        ((i = n(a.call(this, o[1].trim(), s), s)),
        i && o[0] === t && typeof i != 'string')
      )
        return i;
      typeof i != 'string' && (i = Lp(i)),
        i ||
          (this.logger.warn(`missed to resolve ${o[1]} for nesting ${t}`),
          (i = '')),
        u &&
          (i = l.reduce(
            (c, f) =>
              this.format(c, f, r.lng, { ...r, interpolationkey: o[1].trim() }),
            i.trim()
          )),
        (t = t.replace(o[0], i)),
        (this.regexp.lastIndex = 0);
    }
    return t;
  }
}
function x3(e) {
  let t = e.toLowerCase().trim();
  const n = {};
  if (e.indexOf('(') > -1) {
    const r = e.split('(');
    t = r[0].toLowerCase().trim();
    const o = r[1].substring(0, r[1].length - 1);
    t === 'currency' && o.indexOf(':') < 0
      ? n.currency || (n.currency = o.trim())
      : t === 'relativetime' && o.indexOf(':') < 0
        ? n.range || (n.range = o.trim())
        : o.split(';').forEach((s) => {
            if (!s) return;
            const [a, ...l] = s.split(':'),
              u = l
                .join(':')
                .trim()
                .replace(/^'+|'+$/g, '');
            n[a.trim()] || (n[a.trim()] = u),
              u === 'false' && (n[a.trim()] = !1),
              u === 'true' && (n[a.trim()] = !0),
              isNaN(u) || (n[a.trim()] = parseInt(u, 10));
          });
  }
  return { formatName: t, formatOptions: n };
}
function ur(e) {
  const t = {};
  return function (r, o, i) {
    const s = o + JSON.stringify(i);
    let a = t[s];
    return a || ((a = e($s(o), i)), (t[s] = a)), a(r);
  };
}
class C3 {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.logger = Dt.create('formatter')),
      (this.options = t),
      (this.formats = {
        number: ur((n, r) => {
          const o = new Intl.NumberFormat(n, { ...r });
          return (i) => o.format(i);
        }),
        currency: ur((n, r) => {
          const o = new Intl.NumberFormat(n, { ...r, style: 'currency' });
          return (i) => o.format(i);
        }),
        datetime: ur((n, r) => {
          const o = new Intl.DateTimeFormat(n, { ...r });
          return (i) => o.format(i);
        }),
        relativetime: ur((n, r) => {
          const o = new Intl.RelativeTimeFormat(n, { ...r });
          return (i) => o.format(i, r.range || 'day');
        }),
        list: ur((n, r) => {
          const o = new Intl.ListFormat(n, { ...r });
          return (i) => o.format(i);
        }),
      }),
      this.init(t);
  }
  init(t) {
    const r = (
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { interpolation: {} }
    ).interpolation;
    this.formatSeparator = r.formatSeparator
      ? r.formatSeparator
      : r.formatSeparator || ',';
  }
  add(t, n) {
    this.formats[t.toLowerCase().trim()] = n;
  }
  addCached(t, n) {
    this.formats[t.toLowerCase().trim()] = ur(n);
  }
  format(t, n, r) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return n.split(this.formatSeparator).reduce((a, l) => {
      const { formatName: u, formatOptions: c } = x3(l);
      if (this.formats[u]) {
        let f = a;
        try {
          const d =
              (o && o.formatParams && o.formatParams[o.interpolationkey]) || {},
            w = d.locale || d.lng || o.locale || o.lng || r;
          f = this.formats[u](a, w, { ...c, ...o, ...d });
        } catch (d) {
          this.logger.warn(d);
        }
        return f;
      } else this.logger.warn(`there was no format function for ${u}`);
      return a;
    }, t);
  }
}
function E3(e, t) {
  e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--);
}
class k3 extends ba {
  constructor(t, n, r) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(),
      (this.backend = t),
      (this.store = n),
      (this.services = r),
      (this.languageUtils = r.languageUtils),
      (this.options = o),
      (this.logger = Dt.create('backendConnector')),
      (this.waitingReads = []),
      (this.maxParallelReads = o.maxParallelReads || 10),
      (this.readingCalls = 0),
      (this.maxRetries = o.maxRetries >= 0 ? o.maxRetries : 5),
      (this.retryTimeout = o.retryTimeout >= 1 ? o.retryTimeout : 350),
      (this.state = {}),
      (this.queue = []),
      this.backend && this.backend.init && this.backend.init(r, o.backend, o);
  }
  queueLoad(t, n, r, o) {
    const i = {},
      s = {},
      a = {},
      l = {};
    return (
      t.forEach((u) => {
        let c = !0;
        n.forEach((f) => {
          const d = `${u}|${f}`;
          !r.reload && this.store.hasResourceBundle(u, f)
            ? (this.state[d] = 2)
            : this.state[d] < 0 ||
              (this.state[d] === 1
                ? s[d] === void 0 && (s[d] = !0)
                : ((this.state[d] = 1),
                  (c = !1),
                  s[d] === void 0 && (s[d] = !0),
                  i[d] === void 0 && (i[d] = !0),
                  l[f] === void 0 && (l[f] = !0)));
        }),
          c || (a[u] = !0);
      }),
      (Object.keys(i).length || Object.keys(s).length) &&
        this.queue.push({
          pending: s,
          pendingCount: Object.keys(s).length,
          loaded: {},
          errors: [],
          callback: o,
        }),
      {
        toLoad: Object.keys(i),
        pending: Object.keys(s),
        toLoadLanguages: Object.keys(a),
        toLoadNamespaces: Object.keys(l),
      }
    );
  }
  loaded(t, n, r) {
    const o = t.split('|'),
      i = o[0],
      s = o[1];
    n && this.emit('failedLoading', i, s, n),
      r && this.store.addResourceBundle(i, s, r),
      (this.state[t] = n ? -1 : 2);
    const a = {};
    this.queue.forEach((l) => {
      l3(l.loaded, [i], s),
        E3(l, t),
        n && l.errors.push(n),
        l.pendingCount === 0 &&
          !l.done &&
          (Object.keys(l.loaded).forEach((u) => {
            a[u] || (a[u] = {});
            const c = l.loaded[u];
            c.length &&
              c.forEach((f) => {
                a[u][f] === void 0 && (a[u][f] = !0);
              });
          }),
          (l.done = !0),
          l.errors.length ? l.callback(l.errors) : l.callback());
    }),
      this.emit('loaded', a),
      (this.queue = this.queue.filter((l) => !l.done));
  }
  read(t, n, r) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
      i =
        arguments.length > 4 && arguments[4] !== void 0
          ? arguments[4]
          : this.retryTimeout,
      s = arguments.length > 5 ? arguments[5] : void 0;
    if (!t.length) return s(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: t,
        ns: n,
        fcName: r,
        tried: o,
        wait: i,
        callback: s,
      });
      return;
    }
    this.readingCalls++;
    const a = (u, c) => {
        if ((this.readingCalls--, this.waitingReads.length > 0)) {
          const f = this.waitingReads.shift();
          this.read(f.lng, f.ns, f.fcName, f.tried, f.wait, f.callback);
        }
        if (u && c && o < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, t, n, r, o + 1, i * 2, s);
          }, i);
          return;
        }
        s(u, c);
      },
      l = this.backend[r].bind(this.backend);
    if (l.length === 2) {
      try {
        const u = l(t, n);
        u && typeof u.then == 'function'
          ? u.then((c) => a(null, c)).catch(a)
          : a(null, u);
      } catch (u) {
        a(u);
      }
      return;
    }
    return l(t, n, a);
  }
  prepareLoading(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      o = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return (
        this.logger.warn(
          'No backend was added via i18next.use. Will not load resources.'
        ),
        o && o()
      );
    typeof t == 'string' && (t = this.languageUtils.toResolveHierarchy(t)),
      typeof n == 'string' && (n = [n]);
    const i = this.queueLoad(t, n, r, o);
    if (!i.toLoad.length) return i.pending.length || o(), null;
    i.toLoad.forEach((s) => {
      this.loadOne(s);
    });
  }
  load(t, n, r) {
    this.prepareLoading(t, n, {}, r);
  }
  reload(t, n, r) {
    this.prepareLoading(t, n, { reload: !0 }, r);
  }
  loadOne(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
    const r = t.split('|'),
      o = r[0],
      i = r[1];
    this.read(o, i, 'read', void 0, void 0, (s, a) => {
      s &&
        this.logger.warn(
          `${n}loading namespace ${i} for language ${o} failed`,
          s
        ),
        !s &&
          a &&
          this.logger.log(`${n}loaded namespace ${i} for language ${o}`, a),
        this.loaded(t, s, a);
    });
  }
  saveMissing(t, n, r, o, i) {
    let s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {},
      a =
        arguments.length > 6 && arguments[6] !== void 0
          ? arguments[6]
          : () => {};
    if (
      this.services.utils &&
      this.services.utils.hasLoadedNamespace &&
      !this.services.utils.hasLoadedNamespace(n)
    ) {
      this.logger.warn(
        `did not save key "${r}" as the namespace "${n}" was not yet loaded`,
        'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!'
      );
      return;
    }
    if (!(r == null || r === '')) {
      if (this.backend && this.backend.create) {
        const l = { ...s, isUpdate: i },
          u = this.backend.create.bind(this.backend);
        if (u.length < 6)
          try {
            let c;
            u.length === 5 ? (c = u(t, n, r, o, l)) : (c = u(t, n, r, o)),
              c && typeof c.then == 'function'
                ? c.then((f) => a(null, f)).catch(a)
                : a(null, c);
          } catch (c) {
            a(c);
          }
        else u(t, n, r, o, a, l);
      }
      !t || !t[0] || this.store.addResource(t[0], n, r, o);
    }
  }
}
function Dp() {
  return {
    debug: !1,
    initImmediate: !0,
    ns: ['translation'],
    defaultNS: ['translation'],
    fallbackLng: ['dev'],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: 'all',
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: '.',
    nsSeparator: ':',
    pluralSeparator: '_',
    contextSeparator: '_',
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: 'fallback',
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: function (t) {
      let n = {};
      if (
        (typeof t[1] == 'object' && (n = t[1]),
        typeof t[1] == 'string' && (n.defaultValue = t[1]),
        typeof t[2] == 'string' && (n.tDescription = t[2]),
        typeof t[2] == 'object' || typeof t[3] == 'object')
      ) {
        const r = t[3] || t[2];
        Object.keys(r).forEach((o) => {
          n[o] = r[o];
        });
      }
      return n;
    },
    interpolation: {
      escapeValue: !0,
      format: (e, t, n, r) => e,
      prefix: '{{',
      suffix: '}}',
      formatSeparator: ',',
      unescapePrefix: '-',
      nestingPrefix: '$t(',
      nestingSuffix: ')',
      nestingOptionsSeparator: ',',
      maxReplaces: 1e3,
      skipOnVariables: !0,
    },
  };
}
function Ap(e) {
  return (
    typeof e.ns == 'string' && (e.ns = [e.ns]),
    typeof e.fallbackLng == 'string' && (e.fallbackLng = [e.fallbackLng]),
    typeof e.fallbackNS == 'string' && (e.fallbackNS = [e.fallbackNS]),
    e.supportedLngs &&
      e.supportedLngs.indexOf('cimode') < 0 &&
      (e.supportedLngs = e.supportedLngs.concat(['cimode'])),
    e
  );
}
function Mi() {}
function P3(e) {
  Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((n) => {
    typeof e[n] == 'function' && (e[n] = e[n].bind(e));
  });
}
class ri extends ba {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0;
    if (
      (super(),
      (this.options = Ap(t)),
      (this.services = {}),
      (this.logger = Dt),
      (this.modules = { external: [] }),
      P3(this),
      n && !this.isInitialized && !t.isClone)
    ) {
      if (!this.options.initImmediate) return this.init(t, n), this;
      setTimeout(() => {
        this.init(t, n);
      }, 0);
    }
  }
  init() {
    var t = this;
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = arguments.length > 1 ? arguments[1] : void 0;
    typeof n == 'function' && ((r = n), (n = {})),
      !n.defaultNS &&
        n.defaultNS !== !1 &&
        n.ns &&
        (typeof n.ns == 'string'
          ? (n.defaultNS = n.ns)
          : n.ns.indexOf('translation') < 0 && (n.defaultNS = n.ns[0]));
    const o = Dp();
    (this.options = { ...o, ...this.options, ...Ap(n) }),
      this.options.compatibilityAPI !== 'v1' &&
        (this.options.interpolation = {
          ...o.interpolation,
          ...this.options.interpolation,
        }),
      n.keySeparator !== void 0 &&
        (this.options.userDefinedKeySeparator = n.keySeparator),
      n.nsSeparator !== void 0 &&
        (this.options.userDefinedNsSeparator = n.nsSeparator);
    function i(c) {
      return c ? (typeof c == 'function' ? new c() : c) : null;
    }
    if (!this.options.isClone) {
      this.modules.logger
        ? Dt.init(i(this.modules.logger), this.options)
        : Dt.init(null, this.options);
      let c;
      this.modules.formatter
        ? (c = this.modules.formatter)
        : typeof Intl < 'u' && (c = C3);
      const f = new Tp(this.options);
      this.store = new Np(this.options.resources, this.options);
      const d = this.services;
      (d.logger = Dt),
        (d.resourceStore = this.store),
        (d.languageUtils = f),
        (d.pluralResolver = new w3(f, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        c &&
          (!this.options.interpolation.format ||
            this.options.interpolation.format === o.interpolation.format) &&
          ((d.formatter = i(c)),
          d.formatter.init(d, this.options),
          (this.options.interpolation.format = d.formatter.format.bind(
            d.formatter
          ))),
        (d.interpolator = new S3(this.options)),
        (d.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
        (d.backendConnector = new k3(
          i(this.modules.backend),
          d.resourceStore,
          d,
          this.options
        )),
        d.backendConnector.on('*', function (w) {
          for (
            var p = arguments.length, y = new Array(p > 1 ? p - 1 : 0), S = 1;
            S < p;
            S++
          )
            y[S - 1] = arguments[S];
          t.emit(w, ...y);
        }),
        this.modules.languageDetector &&
          ((d.languageDetector = i(this.modules.languageDetector)),
          d.languageDetector.init &&
            d.languageDetector.init(d, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((d.i18nFormat = i(this.modules.i18nFormat)),
          d.i18nFormat.init && d.i18nFormat.init(this)),
        (this.translator = new Fs(this.services, this.options)),
        this.translator.on('*', function (w) {
          for (
            var p = arguments.length, y = new Array(p > 1 ? p - 1 : 0), S = 1;
            S < p;
            S++
          )
            y[S - 1] = arguments[S];
          t.emit(w, ...y);
        }),
        this.modules.external.forEach((w) => {
          w.init && w.init(this);
        });
    }
    if (
      ((this.format = this.options.interpolation.format),
      r || (r = Mi),
      this.options.fallbackLng &&
        !this.services.languageDetector &&
        !this.options.lng)
    ) {
      const c = this.services.languageUtils.getFallbackCodes(
        this.options.fallbackLng
      );
      c.length > 0 && c[0] !== 'dev' && (this.options.lng = c[0]);
    }
    !this.services.languageDetector &&
      !this.options.lng &&
      this.logger.warn(
        'init: no languageDetector is used and no lng is defined'
      ),
      [
        'getResource',
        'hasResourceBundle',
        'getResourceBundle',
        'getDataByLanguage',
      ].forEach((c) => {
        this[c] = function () {
          return t.store[c](...arguments);
        };
      }),
      [
        'addResource',
        'addResources',
        'addResourceBundle',
        'removeResourceBundle',
      ].forEach((c) => {
        this[c] = function () {
          return t.store[c](...arguments), t;
        };
      });
    const l = go(),
      u = () => {
        const c = (f, d) => {
          this.isInitialized &&
            !this.initializedStoreOnce &&
            this.logger.warn(
              'init: i18next is already initialized. You should call init just once!'
            ),
            (this.isInitialized = !0),
            this.options.isClone ||
              this.logger.log('initialized', this.options),
            this.emit('initialized', this.options),
            l.resolve(d),
            r(f, d);
        };
        if (
          this.languages &&
          this.options.compatibilityAPI !== 'v1' &&
          !this.isInitialized
        )
          return c(null, this.t.bind(this));
        this.changeLanguage(this.options.lng, c);
      };
    return (
      this.options.resources || !this.options.initImmediate
        ? u()
        : setTimeout(u, 0),
      l
    );
  }
  loadResources(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Mi;
    const o = typeof t == 'string' ? t : this.language;
    if (
      (typeof t == 'function' && (r = t),
      !this.options.resources || this.options.partialBundledLanguages)
    ) {
      if (
        o &&
        o.toLowerCase() === 'cimode' &&
        (!this.options.preload || this.options.preload.length === 0)
      )
        return r();
      const i = [],
        s = (a) => {
          if (!a || a === 'cimode') return;
          this.services.languageUtils.toResolveHierarchy(a).forEach((u) => {
            u !== 'cimode' && i.indexOf(u) < 0 && i.push(u);
          });
        };
      o
        ? s(o)
        : this.services.languageUtils
            .getFallbackCodes(this.options.fallbackLng)
            .forEach((l) => s(l)),
        this.options.preload && this.options.preload.forEach((a) => s(a)),
        this.services.backendConnector.load(i, this.options.ns, (a) => {
          !a &&
            !this.resolvedLanguage &&
            this.language &&
            this.setResolvedLanguage(this.language),
            r(a);
        });
    } else r(null);
  }
  reloadResources(t, n, r) {
    const o = go();
    return (
      t || (t = this.languages),
      n || (n = this.options.ns),
      r || (r = Mi),
      this.services.backendConnector.reload(t, n, (i) => {
        o.resolve(), r(i);
      }),
      o
    );
  }
  use(t) {
    if (!t)
      throw new Error(
        'You are passing an undefined module! Please check the object you are passing to i18next.use()'
      );
    if (!t.type)
      throw new Error(
        'You are passing a wrong module! Please check the object you are passing to i18next.use()'
      );
    return (
      t.type === 'backend' && (this.modules.backend = t),
      (t.type === 'logger' || (t.log && t.warn && t.error)) &&
        (this.modules.logger = t),
      t.type === 'languageDetector' && (this.modules.languageDetector = t),
      t.type === 'i18nFormat' && (this.modules.i18nFormat = t),
      t.type === 'postProcessor' && p1.addPostProcessor(t),
      t.type === 'formatter' && (this.modules.formatter = t),
      t.type === '3rdParty' && this.modules.external.push(t),
      this
    );
  }
  setResolvedLanguage(t) {
    if (!(!t || !this.languages) && !(['cimode', 'dev'].indexOf(t) > -1))
      for (let n = 0; n < this.languages.length; n++) {
        const r = this.languages[n];
        if (
          !(['cimode', 'dev'].indexOf(r) > -1) &&
          this.store.hasLanguageSomeTranslations(r)
        ) {
          this.resolvedLanguage = r;
          break;
        }
      }
  }
  changeLanguage(t, n) {
    var r = this;
    this.isLanguageChangingTo = t;
    const o = go();
    this.emit('languageChanging', t);
    const i = (l) => {
        (this.language = l),
          (this.languages = this.services.languageUtils.toResolveHierarchy(l)),
          (this.resolvedLanguage = void 0),
          this.setResolvedLanguage(l);
      },
      s = (l, u) => {
        u
          ? (i(u),
            this.translator.changeLanguage(u),
            (this.isLanguageChangingTo = void 0),
            this.emit('languageChanged', u),
            this.logger.log('languageChanged', u))
          : (this.isLanguageChangingTo = void 0),
          o.resolve(function () {
            return r.t(...arguments);
          }),
          n &&
            n(l, function () {
              return r.t(...arguments);
            });
      },
      a = (l) => {
        !t && !l && this.services.languageDetector && (l = []);
        const u =
          typeof l == 'string'
            ? l
            : this.services.languageUtils.getBestMatchFromCodes(l);
        u &&
          (this.language || i(u),
          this.translator.language || this.translator.changeLanguage(u),
          this.services.languageDetector &&
            this.services.languageDetector.cacheUserLanguage &&
            this.services.languageDetector.cacheUserLanguage(u)),
          this.loadResources(u, (c) => {
            s(c, u);
          });
      };
    return (
      !t &&
      this.services.languageDetector &&
      !this.services.languageDetector.async
        ? a(this.services.languageDetector.detect())
        : !t &&
            this.services.languageDetector &&
            this.services.languageDetector.async
          ? this.services.languageDetector.detect.length === 0
            ? this.services.languageDetector.detect().then(a)
            : this.services.languageDetector.detect(a)
          : a(t),
      o
    );
  }
  getFixedT(t, n, r) {
    var o = this;
    const i = function (s, a) {
      let l;
      if (typeof a != 'object') {
        for (
          var u = arguments.length, c = new Array(u > 2 ? u - 2 : 0), f = 2;
          f < u;
          f++
        )
          c[f - 2] = arguments[f];
        l = o.options.overloadTranslationOptionHandler([s, a].concat(c));
      } else l = { ...a };
      (l.lng = l.lng || i.lng),
        (l.lngs = l.lngs || i.lngs),
        (l.ns = l.ns || i.ns),
        (l.keyPrefix = l.keyPrefix || r || i.keyPrefix);
      const d = o.options.keySeparator || '.';
      let w;
      return (
        l.keyPrefix && Array.isArray(s)
          ? (w = s.map((p) => `${l.keyPrefix}${d}${p}`))
          : (w = l.keyPrefix ? `${l.keyPrefix}${d}${s}` : s),
        o.t(w, l)
      );
    };
    return (
      typeof t == 'string' ? (i.lng = t) : (i.lngs = t),
      (i.ns = n),
      (i.keyPrefix = r),
      i
    );
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
  }
  setDefaultNamespace(t) {
    this.options.defaultNS = t;
  }
  hasLoadedNamespace(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return (
        this.logger.warn(
          'hasLoadedNamespace: i18next was not initialized',
          this.languages
        ),
        !1
      );
    if (!this.languages || !this.languages.length)
      return (
        this.logger.warn(
          'hasLoadedNamespace: i18n.languages were undefined or empty',
          this.languages
        ),
        !1
      );
    const r = n.lng || this.resolvedLanguage || this.languages[0],
      o = this.options ? this.options.fallbackLng : !1,
      i = this.languages[this.languages.length - 1];
    if (r.toLowerCase() === 'cimode') return !0;
    const s = (a, l) => {
      const u = this.services.backendConnector.state[`${a}|${l}`];
      return u === -1 || u === 2;
    };
    if (n.precheck) {
      const a = n.precheck(this, s);
      if (a !== void 0) return a;
    }
    return !!(
      this.hasResourceBundle(r, t) ||
      !this.services.backendConnector.backend ||
      (this.options.resources && !this.options.partialBundledLanguages) ||
      (s(r, t) && (!o || s(i, t)))
    );
  }
  loadNamespaces(t, n) {
    const r = go();
    return this.options.ns
      ? (typeof t == 'string' && (t = [t]),
        t.forEach((o) => {
          this.options.ns.indexOf(o) < 0 && this.options.ns.push(o);
        }),
        this.loadResources((o) => {
          r.resolve(), n && n(o);
        }),
        r)
      : (n && n(), Promise.resolve());
  }
  loadLanguages(t, n) {
    const r = go();
    typeof t == 'string' && (t = [t]);
    const o = this.options.preload || [],
      i = t.filter((s) => o.indexOf(s) < 0);
    return i.length
      ? ((this.options.preload = o.concat(i)),
        this.loadResources((s) => {
          r.resolve(), n && n(s);
        }),
        r)
      : (n && n(), Promise.resolve());
  }
  dir(t) {
    if (
      (t ||
        (t =
          this.resolvedLanguage ||
          (this.languages && this.languages.length > 0
            ? this.languages[0]
            : this.language)),
      !t)
    )
      return 'rtl';
    const n = [
        'ar',
        'shu',
        'sqr',
        'ssh',
        'xaa',
        'yhd',
        'yud',
        'aao',
        'abh',
        'abv',
        'acm',
        'acq',
        'acw',
        'acx',
        'acy',
        'adf',
        'ads',
        'aeb',
        'aec',
        'afb',
        'ajp',
        'apc',
        'apd',
        'arb',
        'arq',
        'ars',
        'ary',
        'arz',
        'auz',
        'avl',
        'ayh',
        'ayl',
        'ayn',
        'ayp',
        'bbz',
        'pga',
        'he',
        'iw',
        'ps',
        'pbt',
        'pbu',
        'pst',
        'prp',
        'prd',
        'ug',
        'ur',
        'ydd',
        'yds',
        'yih',
        'ji',
        'yi',
        'hbo',
        'men',
        'xmn',
        'fa',
        'jpr',
        'peo',
        'pes',
        'prs',
        'dv',
        'sam',
        'ckb',
      ],
      r = (this.services && this.services.languageUtils) || new Tp(Dp());
    return n.indexOf(r.getLanguagePartFromCode(t)) > -1 ||
      t.toLowerCase().indexOf('-arab') > 1
      ? 'rtl'
      : 'ltr';
  }
  static createInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0;
    return new ri(t, n);
  }
  cloneInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Mi;
    const r = t.forkResourceStore;
    r && delete t.forkResourceStore;
    const o = { ...this.options, ...t, isClone: !0 },
      i = new ri(o);
    return (
      (t.debug !== void 0 || t.prefix !== void 0) &&
        (i.logger = i.logger.clone(t)),
      ['store', 'services', 'language'].forEach((a) => {
        i[a] = this[a];
      }),
      (i.services = { ...this.services }),
      (i.services.utils = { hasLoadedNamespace: i.hasLoadedNamespace.bind(i) }),
      r &&
        ((i.store = new Np(this.store.data, o)),
        (i.services.resourceStore = i.store)),
      (i.translator = new Fs(i.services, o)),
      i.translator.on('*', function (a) {
        for (
          var l = arguments.length, u = new Array(l > 1 ? l - 1 : 0), c = 1;
          c < l;
          c++
        )
          u[c - 1] = arguments[c];
        i.emit(a, ...u);
      }),
      i.init(o, n),
      (i.translator.options = o),
      (i.translator.backendConnector.services.utils = {
        hasLoadedNamespace: i.hasLoadedNamespace.bind(i),
      }),
      i
    );
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage,
    };
  }
}
const ze = ri.createInstance();
ze.createInstance = ri.createInstance;
ze.createInstance;
ze.dir;
ze.init;
ze.loadResources;
ze.reloadResources;
ze.use;
ze.changeLanguage;
ze.getFixedT;
ze.t;
ze.exists;
ze.setDefaultNamespace;
ze.hasLoadedNamespace;
ze.loadNamespaces;
ze.loadLanguages;
function R3(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function Mp(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      'value' in r && (r.writable = !0),
      Object.defineProperty(e, Ag(r.key), r);
  }
}
function L3(e, t, n) {
  return (
    t && Mp(e.prototype, t),
    n && Mp(e, n),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
var h1 = [],
  O3 = h1.forEach,
  N3 = h1.slice;
function _3(e) {
  return (
    O3.call(N3.call(arguments, 1), function (t) {
      if (t) for (var n in t) e[n] === void 0 && (e[n] = t[n]);
    }),
    e
  );
}
var $p = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
  T3 = function (t, n, r) {
    var o = r || {};
    o.path = o.path || '/';
    var i = encodeURIComponent(n),
      s = ''.concat(t, '=').concat(i);
    if (o.maxAge > 0) {
      var a = o.maxAge - 0;
      if (Number.isNaN(a)) throw new Error('maxAge should be a Number');
      s += '; Max-Age='.concat(Math.floor(a));
    }
    if (o.domain) {
      if (!$p.test(o.domain)) throw new TypeError('option domain is invalid');
      s += '; Domain='.concat(o.domain);
    }
    if (o.path) {
      if (!$p.test(o.path)) throw new TypeError('option path is invalid');
      s += '; Path='.concat(o.path);
    }
    if (o.expires) {
      if (typeof o.expires.toUTCString != 'function')
        throw new TypeError('option expires is invalid');
      s += '; Expires='.concat(o.expires.toUTCString());
    }
    if (
      (o.httpOnly && (s += '; HttpOnly'),
      o.secure && (s += '; Secure'),
      o.sameSite)
    ) {
      var l =
        typeof o.sameSite == 'string' ? o.sameSite.toLowerCase() : o.sameSite;
      switch (l) {
        case !0:
          s += '; SameSite=Strict';
          break;
        case 'lax':
          s += '; SameSite=Lax';
          break;
        case 'strict':
          s += '; SameSite=Strict';
          break;
        case 'none':
          s += '; SameSite=None';
          break;
        default:
          throw new TypeError('option sameSite is invalid');
      }
    }
    return s;
  },
  Fp = {
    create: function (t, n, r, o) {
      var i =
        arguments.length > 4 && arguments[4] !== void 0
          ? arguments[4]
          : { path: '/', sameSite: 'strict' };
      r &&
        ((i.expires = new Date()),
        i.expires.setTime(i.expires.getTime() + r * 60 * 1e3)),
        o && (i.domain = o),
        (document.cookie = T3(t, encodeURIComponent(n), i));
    },
    read: function (t) {
      for (
        var n = ''.concat(t, '='), r = document.cookie.split(';'), o = 0;
        o < r.length;
        o++
      ) {
        for (var i = r[o]; i.charAt(0) === ' '; ) i = i.substring(1, i.length);
        if (i.indexOf(n) === 0) return i.substring(n.length, i.length);
      }
      return null;
    },
    remove: function (t) {
      this.create(t, '', -1);
    },
  },
  b3 = {
    name: 'cookie',
    lookup: function (t) {
      var n;
      if (t.lookupCookie && typeof document < 'u') {
        var r = Fp.read(t.lookupCookie);
        r && (n = r);
      }
      return n;
    },
    cacheUserLanguage: function (t, n) {
      n.lookupCookie &&
        typeof document < 'u' &&
        Fp.create(
          n.lookupCookie,
          t,
          n.cookieMinutes,
          n.cookieDomain,
          n.cookieOptions
        );
    },
  },
  j3 = {
    name: 'querystring',
    lookup: function (t) {
      var n;
      if (typeof window < 'u') {
        var r = window.location.search;
        !window.location.search &&
          window.location.hash &&
          window.location.hash.indexOf('?') > -1 &&
          (r = window.location.hash.substring(
            window.location.hash.indexOf('?')
          ));
        for (
          var o = r.substring(1), i = o.split('&'), s = 0;
          s < i.length;
          s++
        ) {
          var a = i[s].indexOf('=');
          if (a > 0) {
            var l = i[s].substring(0, a);
            l === t.lookupQuerystring && (n = i[s].substring(a + 1));
          }
        }
      }
      return n;
    },
  },
  yo = null,
  Ip = function () {
    if (yo !== null) return yo;
    try {
      yo = window !== 'undefined' && window.localStorage !== null;
      var t = 'i18next.translate.boo';
      window.localStorage.setItem(t, 'foo'), window.localStorage.removeItem(t);
    } catch {
      yo = !1;
    }
    return yo;
  },
  D3 = {
    name: 'localStorage',
    lookup: function (t) {
      var n;
      if (t.lookupLocalStorage && Ip()) {
        var r = window.localStorage.getItem(t.lookupLocalStorage);
        r && (n = r);
      }
      return n;
    },
    cacheUserLanguage: function (t, n) {
      n.lookupLocalStorage &&
        Ip() &&
        window.localStorage.setItem(n.lookupLocalStorage, t);
    },
  },
  vo = null,
  Up = function () {
    if (vo !== null) return vo;
    try {
      vo = window !== 'undefined' && window.sessionStorage !== null;
      var t = 'i18next.translate.boo';
      window.sessionStorage.setItem(t, 'foo'),
        window.sessionStorage.removeItem(t);
    } catch {
      vo = !1;
    }
    return vo;
  },
  A3 = {
    name: 'sessionStorage',
    lookup: function (t) {
      var n;
      if (t.lookupSessionStorage && Up()) {
        var r = window.sessionStorage.getItem(t.lookupSessionStorage);
        r && (n = r);
      }
      return n;
    },
    cacheUserLanguage: function (t, n) {
      n.lookupSessionStorage &&
        Up() &&
        window.sessionStorage.setItem(n.lookupSessionStorage, t);
    },
  },
  M3 = {
    name: 'navigator',
    lookup: function (t) {
      var n = [];
      if (typeof navigator < 'u') {
        if (navigator.languages)
          for (var r = 0; r < navigator.languages.length; r++)
            n.push(navigator.languages[r]);
        navigator.userLanguage && n.push(navigator.userLanguage),
          navigator.language && n.push(navigator.language);
      }
      return n.length > 0 ? n : void 0;
    },
  },
  $3 = {
    name: 'htmlTag',
    lookup: function (t) {
      var n,
        r =
          t.htmlTag ||
          (typeof document < 'u' ? document.documentElement : null);
      return (
        r &&
          typeof r.getAttribute == 'function' &&
          (n = r.getAttribute('lang')),
        n
      );
    },
  },
  F3 = {
    name: 'path',
    lookup: function (t) {
      var n;
      if (typeof window < 'u') {
        var r = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
        if (r instanceof Array)
          if (typeof t.lookupFromPathIndex == 'number') {
            if (typeof r[t.lookupFromPathIndex] != 'string') return;
            n = r[t.lookupFromPathIndex].replace('/', '');
          } else n = r[0].replace('/', '');
      }
      return n;
    },
  },
  I3 = {
    name: 'subdomain',
    lookup: function (t) {
      var n =
          typeof t.lookupFromSubdomainIndex == 'number'
            ? t.lookupFromSubdomainIndex + 1
            : 1,
        r =
          typeof window < 'u' &&
          window.location &&
          window.location.hostname &&
          window.location.hostname.match(
            /^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i
          );
      if (r) return r[n];
    },
  };
function U3() {
  return {
    order: [
      'querystring',
      'cookie',
      'localStorage',
      'sessionStorage',
      'navigator',
      'htmlTag',
    ],
    lookupQuerystring: 'lng',
    lookupCookie: 'i18next',
    lookupLocalStorage: 'i18nextLng',
    lookupSessionStorage: 'i18nextLng',
    caches: ['localStorage'],
    excludeCacheFor: ['cimode'],
    convertDetectedLanguage: function (t) {
      return t;
    },
  };
}
var m1 = (function () {
  function e(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    R3(this, e),
      (this.type = 'languageDetector'),
      (this.detectors = {}),
      this.init(t, n);
  }
  return (
    L3(e, [
      {
        key: 'init',
        value: function (n) {
          var r =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            o =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : {};
          (this.services = n || { languageUtils: {} }),
            (this.options = _3(r, this.options || {}, U3())),
            typeof this.options.convertDetectedLanguage == 'string' &&
              this.options.convertDetectedLanguage.indexOf('15897') > -1 &&
              (this.options.convertDetectedLanguage = function (i) {
                return i.replace('-', '_');
              }),
            this.options.lookupFromUrlIndex &&
              (this.options.lookupFromPathIndex =
                this.options.lookupFromUrlIndex),
            (this.i18nOptions = o),
            this.addDetector(b3),
            this.addDetector(j3),
            this.addDetector(D3),
            this.addDetector(A3),
            this.addDetector(M3),
            this.addDetector($3),
            this.addDetector(F3),
            this.addDetector(I3);
        },
      },
      {
        key: 'addDetector',
        value: function (n) {
          this.detectors[n.name] = n;
        },
      },
      {
        key: 'detect',
        value: function (n) {
          var r = this;
          n || (n = this.options.order);
          var o = [];
          return (
            n.forEach(function (i) {
              if (r.detectors[i]) {
                var s = r.detectors[i].lookup(r.options);
                s && typeof s == 'string' && (s = [s]), s && (o = o.concat(s));
              }
            }),
            (o = o.map(function (i) {
              return r.options.convertDetectedLanguage(i);
            })),
            this.services.languageUtils.getBestMatchFromCodes
              ? o
              : o.length > 0
                ? o[0]
                : null
          );
        },
      },
      {
        key: 'cacheUserLanguage',
        value: function (n, r) {
          var o = this;
          r || (r = this.options.caches),
            r &&
              ((this.options.excludeCacheFor &&
                this.options.excludeCacheFor.indexOf(n) > -1) ||
                r.forEach(function (i) {
                  o.detectors[i] &&
                    o.detectors[i].cacheUserLanguage(n, o.options);
                }));
        },
      },
    ]),
    e
  );
})();
m1.type = 'languageDetector';
const z3 = {
    main: {
      title: 'Welcome to chat',
      description:
        'Chat, connect, Stay in touch and make communication simple.',
      ourTeem: 'Our Team',
    },
    sidebar: {
      publicRooms: 'Public Rooms',
      privateRooms: 'Private Rooms',
      createRoom: 'Create Room',
    },
    auth: {
      join: 'Join',
      logout: 'Logout',
      inputPlaceholder: 'Name',
      formText: 'Enter your name to start',
      greetingText: 'Thank you for joining Talkie',
    },
    rooms: { public: 'Public Rooms', private: 'Private Rooms' },
    errors: {
      inputValidation:
        'The username must have at least 2 characters, but no more than 30.',
    },
  },
  B3 = {
    main: {
      title: 'Вітаємо у чаті',
      description:
        "Спілкуйтеся, підключайтеся, залишайтеся на зв'язку і робіть спілкування простим.",
      ourTeem: 'Наша команда',
    },
    sidebar: {
      publicRooms: 'Публічні кімнати',
      privateRooms: 'Приватні кімнати',
      createRoom: 'Створити кімнату',
    },
    auth: {
      join: 'Приєднатися',
      logout: 'Вихід',
      inputPlaceholder: "Ім'я",
      formText: "Введіть своє ім'я",
      greetingText: 'Дякуємо, що приєдналися до Talkie',
    },
    rooms: { public: 'Публічні кімнати', private: 'Приватні кімнати' },
    errors: {
      inputValidation: 'Імя має бути не менше 2 символів і не більше 30',
    },
  };
ze.use(m1)
  .use(Wx)
  .init({
    debug: !0,
    fallbackLng: 'en',
    interpolation: { escapeValue: !1 },
    resources: { en: { translation: z3 }, ua: { translation: B3 } },
  });
const V3 = o2([
  {
    path: '/',
    element: R.jsx(B4, {}),
    children: [
      { path: '/', element: R.jsx(i3, {}) },
      {
        path: '*',
        element: R.jsx('div', {
          style: { textAlign: 'center' },
          children: 'Error 404',
        }),
      },
    ],
  },
]);
_l.createRoot(document.getElementById('root')).render(
  R.jsx(Gp.StrictMode, {
    children: R.jsx(Vv, { store: K4, children: R.jsx(f2, { router: V3 }) }),
  })
);
