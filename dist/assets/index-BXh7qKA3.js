(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) n(s);
  new MutationObserver((s) => {
    for (const r of s)
      if (r.type === "childList")
        for (const a of r.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && n(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(s) {
    const r = {};
    return (
      s.integrity && (r.integrity = s.integrity),
      s.referrerPolicy && (r.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (r.credentials = "include")
        : s.crossOrigin === "anonymous"
        ? (r.credentials = "omit")
        : (r.credentials = "same-origin"),
      r
    );
  }
  function n(s) {
    if (s.ep) return;
    s.ep = !0;
    const r = t(s);
    fetch(s.href, r);
  }
})();
const ia = "182",
  ri = { ROTATE: 0, DOLLY: 1, PAN: 2 },
  si = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 },
  Vl = 0,
  Ca = 1,
  Gl = 2,
  us = 1,
  Hl = 2,
  bi = 3,
  wn = 0,
  Lt = 1,
  dn = 2,
  pn = 0,
  ai = 1,
  Pa = 2,
  Da = 3,
  La = 4,
  kl = 5,
  Fn = 100,
  Wl = 101,
  Xl = 102,
  Yl = 103,
  ql = 104,
  Kl = 200,
  Zl = 201,
  jl = 202,
  $l = 203,
  cr = 204,
  hr = 205,
  Jl = 206,
  Ql = 207,
  ec = 208,
  tc = 209,
  nc = 210,
  ic = 211,
  sc = 212,
  rc = 213,
  ac = 214,
  ur = 0,
  dr = 1,
  fr = 2,
  li = 3,
  pr = 4,
  mr = 5,
  _r = 6,
  gr = 7,
  Uo = 0,
  oc = 1,
  lc = 2,
  Qt = 0,
  No = 1,
  Fo = 2,
  Oo = 3,
  Bo = 4,
  zo = 5,
  Vo = 6,
  Go = 7,
  Ho = 300,
  Vn = 301,
  ci = 302,
  xr = 303,
  vr = 304,
  ys = 306,
  Mr = 1e3,
  fn = 1001,
  Sr = 1002,
  vt = 1003,
  cc = 1004,
  Gi = 1005,
  yt = 1006,
  Ps = 1007,
  Bn = 1008,
  Bt = 1009,
  ko = 1010,
  Wo = 1011,
  wi = 1012,
  sa = 1013,
  nn = 1014,
  $t = 1015,
  _n = 1016,
  ra = 1017,
  aa = 1018,
  Ri = 1020,
  Xo = 35902,
  Yo = 35899,
  qo = 1021,
  Ko = 1022,
  qt = 1023,
  gn = 1026,
  zn = 1027,
  Zo = 1028,
  oa = 1029,
  hi = 1030,
  la = 1031,
  ca = 1033,
  ds = 33776,
  fs = 33777,
  ps = 33778,
  ms = 33779,
  Er = 35840,
  yr = 35841,
  Tr = 35842,
  br = 35843,
  Ar = 36196,
  wr = 37492,
  Rr = 37496,
  Cr = 37488,
  Pr = 37489,
  Dr = 37490,
  Lr = 37491,
  Ir = 37808,
  Ur = 37809,
  Nr = 37810,
  Fr = 37811,
  Or = 37812,
  Br = 37813,
  zr = 37814,
  Vr = 37815,
  Gr = 37816,
  Hr = 37817,
  kr = 37818,
  Wr = 37819,
  Xr = 37820,
  Yr = 37821,
  qr = 36492,
  Kr = 36494,
  Zr = 36495,
  jr = 36283,
  $r = 36284,
  Jr = 36285,
  Qr = 36286,
  hc = 3200,
  jo = 0,
  uc = 1,
  bn = "",
  Ht = "srgb",
  ui = "srgb-linear",
  xs = "linear",
  Ze = "srgb",
  Wn = 7680,
  Ia = 519,
  dc = 512,
  fc = 513,
  pc = 514,
  ha = 515,
  mc = 516,
  _c = 517,
  ua = 518,
  gc = 519,
  Ua = 35044,
  Na = "300 es",
  Jt = 2e3,
  vs = 2001;
function $o(i) {
  for (let e = i.length - 1; e >= 0; --e) if (i[e] >= 65535) return !0;
  return !1;
}
function Ms(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function xc() {
  const i = Ms("canvas");
  return (i.style.display = "block"), i;
}
const Fa = {};
function Oa(...i) {
  const e = "THREE." + i.shift();
  console.log(e, ...i);
}
function we(...i) {
  const e = "THREE." + i.shift();
  console.warn(e, ...i);
}
function We(...i) {
  const e = "THREE." + i.shift();
  console.error(e, ...i);
}
function Ci(...i) {
  const e = i.join(" ");
  e in Fa || ((Fa[e] = !0), we(...i));
}
function vc(i, e, t) {
  return new Promise(function (n, s) {
    function r() {
      switch (i.clientWaitSync(e, i.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case i.WAIT_FAILED:
          s();
          break;
        case i.TIMEOUT_EXPIRED:
          setTimeout(r, t);
          break;
        default:
          n();
      }
    }
    setTimeout(r, t);
  });
}
class Hn {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    const n = this._listeners;
    return n === void 0 ? !1 : n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    const n = this._listeners;
    if (n === void 0) return;
    const s = n[e];
    if (s !== void 0) {
      const r = s.indexOf(t);
      r !== -1 && s.splice(r, 1);
    }
  }
  dispatchEvent(e) {
    const t = this._listeners;
    if (t === void 0) return;
    const n = t[e.type];
    if (n !== void 0) {
      e.target = this;
      const s = n.slice(0);
      for (let r = 0, a = s.length; r < a; r++) s[r].call(this, e);
      e.target = null;
    }
  }
}
const St = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "0a",
    "0b",
    "0c",
    "0d",
    "0e",
    "0f",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "1a",
    "1b",
    "1c",
    "1d",
    "1e",
    "1f",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "2a",
    "2b",
    "2c",
    "2d",
    "2e",
    "2f",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "3a",
    "3b",
    "3c",
    "3d",
    "3e",
    "3f",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "4a",
    "4b",
    "4c",
    "4d",
    "4e",
    "4f",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
    "5a",
    "5b",
    "5c",
    "5d",
    "5e",
    "5f",
    "60",
    "61",
    "62",
    "63",
    "64",
    "65",
    "66",
    "67",
    "68",
    "69",
    "6a",
    "6b",
    "6c",
    "6d",
    "6e",
    "6f",
    "70",
    "71",
    "72",
    "73",
    "74",
    "75",
    "76",
    "77",
    "78",
    "79",
    "7a",
    "7b",
    "7c",
    "7d",
    "7e",
    "7f",
    "80",
    "81",
    "82",
    "83",
    "84",
    "85",
    "86",
    "87",
    "88",
    "89",
    "8a",
    "8b",
    "8c",
    "8d",
    "8e",
    "8f",
    "90",
    "91",
    "92",
    "93",
    "94",
    "95",
    "96",
    "97",
    "98",
    "99",
    "9a",
    "9b",
    "9c",
    "9d",
    "9e",
    "9f",
    "a0",
    "a1",
    "a2",
    "a3",
    "a4",
    "a5",
    "a6",
    "a7",
    "a8",
    "a9",
    "aa",
    "ab",
    "ac",
    "ad",
    "ae",
    "af",
    "b0",
    "b1",
    "b2",
    "b3",
    "b4",
    "b5",
    "b6",
    "b7",
    "b8",
    "b9",
    "ba",
    "bb",
    "bc",
    "bd",
    "be",
    "bf",
    "c0",
    "c1",
    "c2",
    "c3",
    "c4",
    "c5",
    "c6",
    "c7",
    "c8",
    "c9",
    "ca",
    "cb",
    "cc",
    "cd",
    "ce",
    "cf",
    "d0",
    "d1",
    "d2",
    "d3",
    "d4",
    "d5",
    "d6",
    "d7",
    "d8",
    "d9",
    "da",
    "db",
    "dc",
    "dd",
    "de",
    "df",
    "e0",
    "e1",
    "e2",
    "e3",
    "e4",
    "e5",
    "e6",
    "e7",
    "e8",
    "e9",
    "ea",
    "eb",
    "ec",
    "ed",
    "ee",
    "ef",
    "f0",
    "f1",
    "f2",
    "f3",
    "f4",
    "f5",
    "f6",
    "f7",
    "f8",
    "f9",
    "fa",
    "fb",
    "fc",
    "fd",
    "fe",
    "ff",
  ],
  _s = Math.PI / 180,
  ea = 180 / Math.PI;
function Li() {
  const i = (Math.random() * 4294967295) | 0,
    e = (Math.random() * 4294967295) | 0,
    t = (Math.random() * 4294967295) | 0,
    n = (Math.random() * 4294967295) | 0;
  return (
    St[i & 255] +
    St[(i >> 8) & 255] +
    St[(i >> 16) & 255] +
    St[(i >> 24) & 255] +
    "-" +
    St[e & 255] +
    St[(e >> 8) & 255] +
    "-" +
    St[((e >> 16) & 15) | 64] +
    St[(e >> 24) & 255] +
    "-" +
    St[(t & 63) | 128] +
    St[(t >> 8) & 255] +
    "-" +
    St[(t >> 16) & 255] +
    St[(t >> 24) & 255] +
    St[n & 255] +
    St[(n >> 8) & 255] +
    St[(n >> 16) & 255] +
    St[(n >> 24) & 255]
  ).toLowerCase();
}
function Be(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
function Mc(i, e) {
  return ((i % e) + e) % e;
}
function Ds(i, e, t) {
  return (1 - t) * i + t * e;
}
function gi(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return i / 4294967295;
    case Uint16Array:
      return i / 65535;
    case Uint8Array:
      return i / 255;
    case Int32Array:
      return Math.max(i / 2147483647, -1);
    case Int16Array:
      return Math.max(i / 32767, -1);
    case Int8Array:
      return Math.max(i / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Pt(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return Math.round(i * 4294967295);
    case Uint16Array:
      return Math.round(i * 65535);
    case Uint8Array:
      return Math.round(i * 255);
    case Int32Array:
      return Math.round(i * 2147483647);
    case Int16Array:
      return Math.round(i * 32767);
    case Int8Array:
      return Math.round(i * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const Sc = { DEG2RAD: _s };
class Ce {
  constructor(e = 0, t = 0) {
    (Ce.prototype.isVector2 = !0), (this.x = e), (this.y = t);
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return (this.x = e), (this.y = t), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), this;
  }
  addVectors(e, t) {
    return (this.x = e.x + t.x), (this.y = e.y + t.y), this;
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), this;
  }
  subVectors(e, t) {
    return (this.x = e.x - t.x), (this.y = e.y - t.y), this;
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), this;
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      s = e.elements;
    return (
      (this.x = s[0] * t + s[3] * n + s[6]),
      (this.y = s[1] * t + s[4] * n + s[7]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)), (this.y = Math.min(this.y, e.y)), this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)), (this.y = Math.max(this.y, e.y)), this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Be(this.x, e.x, t.x)), (this.y = Be(this.y, e.y, t.y)), this
    );
  }
  clampScalar(e, t) {
    return (this.x = Be(this.x, e, t)), (this.y = Be(this.y, e, t)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Be(n, e, t));
  }
  floor() {
    return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
  }
  ceil() {
    return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
  }
  round() {
    return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
  }
  roundToZero() {
    return (this.x = Math.trunc(this.x)), (this.y = Math.trunc(this.y)), this;
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Be(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (this.x += (e.x - this.x) * t), (this.y += (e.y - this.y) * t), this;
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n), (this.y = e.y + (t.y - e.y) * n), this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), e;
  }
  fromBufferAttribute(e, t) {
    return (this.x = e.getX(t)), (this.y = e.getY(t)), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t),
      s = Math.sin(t),
      r = this.x - e.x,
      a = this.y - e.y;
    return (this.x = r * n - a * s + e.x), (this.y = r * s + a * n + e.y), this;
  }
  random() {
    return (this.x = Math.random()), (this.y = Math.random()), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Gn {
  constructor(e = 0, t = 0, n = 0, s = 1) {
    (this.isQuaternion = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = s);
  }
  static slerpFlat(e, t, n, s, r, a, o) {
    let c = n[s + 0],
      l = n[s + 1],
      u = n[s + 2],
      d = n[s + 3],
      f = r[a + 0],
      _ = r[a + 1],
      v = r[a + 2],
      M = r[a + 3];
    if (o <= 0) {
      (e[t + 0] = c), (e[t + 1] = l), (e[t + 2] = u), (e[t + 3] = d);
      return;
    }
    if (o >= 1) {
      (e[t + 0] = f), (e[t + 1] = _), (e[t + 2] = v), (e[t + 3] = M);
      return;
    }
    if (d !== M || c !== f || l !== _ || u !== v) {
      let p = c * f + l * _ + u * v + d * M;
      p < 0 && ((f = -f), (_ = -_), (v = -v), (M = -M), (p = -p));
      let h = 1 - o;
      if (p < 0.9995) {
        const T = Math.acos(p),
          b = Math.sin(T);
        (h = Math.sin(h * T) / b),
          (o = Math.sin(o * T) / b),
          (c = c * h + f * o),
          (l = l * h + _ * o),
          (u = u * h + v * o),
          (d = d * h + M * o);
      } else {
        (c = c * h + f * o),
          (l = l * h + _ * o),
          (u = u * h + v * o),
          (d = d * h + M * o);
        const T = 1 / Math.sqrt(c * c + l * l + u * u + d * d);
        (c *= T), (l *= T), (u *= T), (d *= T);
      }
    }
    (e[t] = c), (e[t + 1] = l), (e[t + 2] = u), (e[t + 3] = d);
  }
  static multiplyQuaternionsFlat(e, t, n, s, r, a) {
    const o = n[s],
      c = n[s + 1],
      l = n[s + 2],
      u = n[s + 3],
      d = r[a],
      f = r[a + 1],
      _ = r[a + 2],
      v = r[a + 3];
    return (
      (e[t] = o * v + u * d + c * _ - l * f),
      (e[t + 1] = c * v + u * f + l * d - o * _),
      (e[t + 2] = l * v + u * _ + o * f - c * d),
      (e[t + 3] = u * v - o * d - c * f - l * _),
      e
    );
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    (this._w = e), this._onChangeCallback();
  }
  set(e, t, n, s) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = s),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return (
      (this._x = e.x),
      (this._y = e.y),
      (this._z = e.z),
      (this._w = e.w),
      this._onChangeCallback(),
      this
    );
  }
  setFromEuler(e, t = !0) {
    const n = e._x,
      s = e._y,
      r = e._z,
      a = e._order,
      o = Math.cos,
      c = Math.sin,
      l = o(n / 2),
      u = o(s / 2),
      d = o(r / 2),
      f = c(n / 2),
      _ = c(s / 2),
      v = c(r / 2);
    switch (a) {
      case "XYZ":
        (this._x = f * u * d + l * _ * v),
          (this._y = l * _ * d - f * u * v),
          (this._z = l * u * v + f * _ * d),
          (this._w = l * u * d - f * _ * v);
        break;
      case "YXZ":
        (this._x = f * u * d + l * _ * v),
          (this._y = l * _ * d - f * u * v),
          (this._z = l * u * v - f * _ * d),
          (this._w = l * u * d + f * _ * v);
        break;
      case "ZXY":
        (this._x = f * u * d - l * _ * v),
          (this._y = l * _ * d + f * u * v),
          (this._z = l * u * v + f * _ * d),
          (this._w = l * u * d - f * _ * v);
        break;
      case "ZYX":
        (this._x = f * u * d - l * _ * v),
          (this._y = l * _ * d + f * u * v),
          (this._z = l * u * v - f * _ * d),
          (this._w = l * u * d + f * _ * v);
        break;
      case "YZX":
        (this._x = f * u * d + l * _ * v),
          (this._y = l * _ * d + f * u * v),
          (this._z = l * u * v - f * _ * d),
          (this._w = l * u * d - f * _ * v);
        break;
      case "XZY":
        (this._x = f * u * d - l * _ * v),
          (this._y = l * _ * d - f * u * v),
          (this._z = l * u * v + f * _ * d),
          (this._w = l * u * d + f * _ * v);
        break;
      default:
        we("Quaternion: .setFromEuler() encountered an unknown order: " + a);
    }
    return t === !0 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2,
      s = Math.sin(n);
    return (
      (this._x = e.x * s),
      (this._y = e.y * s),
      (this._z = e.z * s),
      (this._w = Math.cos(n)),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e) {
    const t = e.elements,
      n = t[0],
      s = t[4],
      r = t[8],
      a = t[1],
      o = t[5],
      c = t[9],
      l = t[2],
      u = t[6],
      d = t[10],
      f = n + o + d;
    if (f > 0) {
      const _ = 0.5 / Math.sqrt(f + 1);
      (this._w = 0.25 / _),
        (this._x = (u - c) * _),
        (this._y = (r - l) * _),
        (this._z = (a - s) * _);
    } else if (n > o && n > d) {
      const _ = 2 * Math.sqrt(1 + n - o - d);
      (this._w = (u - c) / _),
        (this._x = 0.25 * _),
        (this._y = (s + a) / _),
        (this._z = (r + l) / _);
    } else if (o > d) {
      const _ = 2 * Math.sqrt(1 + o - n - d);
      (this._w = (r - l) / _),
        (this._x = (s + a) / _),
        (this._y = 0.25 * _),
        (this._z = (c + u) / _);
    } else {
      const _ = 2 * Math.sqrt(1 + d - n - o);
      (this._w = (a - s) / _),
        (this._x = (r + l) / _),
        (this._y = (c + u) / _),
        (this._z = 0.25 * _);
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return (
      n < 1e-8
        ? ((n = 0),
          Math.abs(e.x) > Math.abs(e.z)
            ? ((this._x = -e.y), (this._y = e.x), (this._z = 0), (this._w = n))
            : ((this._x = 0), (this._y = -e.z), (this._z = e.y), (this._w = n)))
        : ((this._x = e.y * t.z - e.z * t.y),
          (this._y = e.z * t.x - e.x * t.z),
          (this._z = e.x * t.y - e.y * t.x),
          (this._w = n)),
      this.normalize()
    );
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(Be(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const s = Math.min(1, t / n);
    return this.slerp(e, s), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return (
      (this._x *= -1),
      (this._y *= -1),
      (this._z *= -1),
      this._onChangeCallback(),
      this
    );
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return (
      this._x * this._x +
      this._y * this._y +
      this._z * this._z +
      this._w * this._w
    );
  }
  length() {
    return Math.sqrt(
      this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w
    );
  }
  normalize() {
    let e = this.length();
    return (
      e === 0
        ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
        : ((e = 1 / e),
          (this._x = this._x * e),
          (this._y = this._y * e),
          (this._z = this._z * e),
          (this._w = this._w * e)),
      this._onChangeCallback(),
      this
    );
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x,
      s = e._y,
      r = e._z,
      a = e._w,
      o = t._x,
      c = t._y,
      l = t._z,
      u = t._w;
    return (
      (this._x = n * u + a * o + s * l - r * c),
      (this._y = s * u + a * c + r * o - n * l),
      (this._z = r * u + a * l + n * c - s * o),
      (this._w = a * u - n * o - s * c - r * l),
      this._onChangeCallback(),
      this
    );
  }
  slerp(e, t) {
    if (t <= 0) return this;
    if (t >= 1) return this.copy(e);
    let n = e._x,
      s = e._y,
      r = e._z,
      a = e._w,
      o = this.dot(e);
    o < 0 && ((n = -n), (s = -s), (r = -r), (a = -a), (o = -o));
    let c = 1 - t;
    if (o < 0.9995) {
      const l = Math.acos(o),
        u = Math.sin(l);
      (c = Math.sin(c * l) / u),
        (t = Math.sin(t * l) / u),
        (this._x = this._x * c + n * t),
        (this._y = this._y * c + s * t),
        (this._z = this._z * c + r * t),
        (this._w = this._w * c + a * t),
        this._onChangeCallback();
    } else
      (this._x = this._x * c + n * t),
        (this._y = this._y * c + s * t),
        (this._z = this._z * c + r * t),
        (this._w = this._w * c + a * t),
        this.normalize();
    return this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = 2 * Math.PI * Math.random(),
      t = 2 * Math.PI * Math.random(),
      n = Math.random(),
      s = Math.sqrt(1 - n),
      r = Math.sqrt(n);
    return this.set(
      s * Math.sin(e),
      s * Math.cos(e),
      r * Math.sin(t),
      r * Math.cos(t)
    );
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._w === this._w
    );
  }
  fromArray(e, t = 0) {
    return (
      (this._x = e[t]),
      (this._y = e[t + 1]),
      (this._z = e[t + 2]),
      (this._w = e[t + 3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this._x = e.getX(t)),
      (this._y = e.getY(t)),
      (this._z = e.getZ(t)),
      (this._w = e.getW(t)),
      this._onChangeCallback(),
      this
    );
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class U {
  constructor(e = 0, t = 0, n = 0) {
    (U.prototype.isVector3 = !0), (this.x = e), (this.y = t), (this.z = n);
  }
  set(e, t, n) {
    return (
      n === void 0 && (n = this.z),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      this
    );
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), (this.z = e.z), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), (this.z += e.z), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x), (this.y = e.y + t.y), (this.z = e.z + t.z), this
    );
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), (this.z += e.z * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x), (this.y = e.y - t.y), (this.z = e.z - t.z), this
    );
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), this;
  }
  multiplyVectors(e, t) {
    return (
      (this.x = e.x * t.x), (this.y = e.y * t.y), (this.z = e.z * t.z), this
    );
  }
  applyEuler(e) {
    return this.applyQuaternion(Ba.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Ba.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      s = this.z,
      r = e.elements;
    return (
      (this.x = r[0] * t + r[3] * n + r[6] * s),
      (this.y = r[1] * t + r[4] * n + r[7] * s),
      (this.z = r[2] * t + r[5] * n + r[8] * s),
      this
    );
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      s = this.z,
      r = e.elements,
      a = 1 / (r[3] * t + r[7] * n + r[11] * s + r[15]);
    return (
      (this.x = (r[0] * t + r[4] * n + r[8] * s + r[12]) * a),
      (this.y = (r[1] * t + r[5] * n + r[9] * s + r[13]) * a),
      (this.z = (r[2] * t + r[6] * n + r[10] * s + r[14]) * a),
      this
    );
  }
  applyQuaternion(e) {
    const t = this.x,
      n = this.y,
      s = this.z,
      r = e.x,
      a = e.y,
      o = e.z,
      c = e.w,
      l = 2 * (a * s - o * n),
      u = 2 * (o * t - r * s),
      d = 2 * (r * n - a * t);
    return (
      (this.x = t + c * l + a * d - o * u),
      (this.y = n + c * u + o * l - r * d),
      (this.z = s + c * d + r * u - a * l),
      this
    );
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(
      e.projectionMatrix
    );
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(
      e.matrixWorld
    );
  }
  transformDirection(e) {
    const t = this.x,
      n = this.y,
      s = this.z,
      r = e.elements;
    return (
      (this.x = r[0] * t + r[4] * n + r[8] * s),
      (this.y = r[1] * t + r[5] * n + r[9] * s),
      (this.z = r[2] * t + r[6] * n + r[10] * s),
      this.normalize()
    );
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Be(this.x, e.x, t.x)),
      (this.y = Be(this.y, e.y, t.y)),
      (this.z = Be(this.z, e.z, t.z)),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Be(this.x, e, t)),
      (this.y = Be(this.y, e, t)),
      (this.z = Be(this.z, e, t)),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Be(n, e, t));
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      this
    );
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x,
      s = e.y,
      r = e.z,
      a = t.x,
      o = t.y,
      c = t.z;
    return (
      (this.x = s * c - r * o),
      (this.y = r * a - n * c),
      (this.z = n * o - s * a),
      this
    );
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return Ls.copy(this).projectOnVector(e), this.sub(Ls);
  }
  reflect(e) {
    return this.sub(Ls.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Be(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y,
      s = this.z - e.z;
    return t * t + n * n + s * s;
  }
  manhattanDistanceTo(e) {
    return (
      Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
    );
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const s = Math.sin(t) * e;
    return (
      (this.x = s * Math.sin(n)),
      (this.y = Math.cos(t) * e),
      (this.z = s * Math.cos(n)),
      this
    );
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return (
      (this.x = e * Math.sin(t)), (this.y = n), (this.z = e * Math.cos(t)), this
    );
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return (this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(),
      n = this.setFromMatrixColumn(e, 1).length(),
      s = this.setFromMatrixColumn(e, 2).length();
    return (this.x = t), (this.y = n), (this.z = s), this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return (this.x = e._x), (this.y = e._y), (this.z = e._z), this;
  }
  setFromColor(e) {
    return (this.x = e.r), (this.y = e.g), (this.z = e.b), this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)), (this.y = e.getY(t)), (this.z = e.getZ(t)), this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      this
    );
  }
  randomDirection() {
    const e = Math.random() * Math.PI * 2,
      t = Math.random() * 2 - 1,
      n = Math.sqrt(1 - t * t);
    return (
      (this.x = n * Math.cos(e)), (this.y = t), (this.z = n * Math.sin(e)), this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const Ls = new U(),
  Ba = new Gn();
class De {
  constructor(e, t, n, s, r, a, o, c, l) {
    (De.prototype.isMatrix3 = !0),
      (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
      e !== void 0 && this.set(e, t, n, s, r, a, o, c, l);
  }
  set(e, t, n, s, r, a, o, c, l) {
    const u = this.elements;
    return (
      (u[0] = e),
      (u[1] = s),
      (u[2] = o),
      (u[3] = t),
      (u[4] = r),
      (u[5] = c),
      (u[6] = n),
      (u[7] = a),
      (u[8] = l),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrix3Column(this, 0),
      t.setFromMatrix3Column(this, 1),
      n.setFromMatrix3Column(this, 2),
      this
    );
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return (
      this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      s = t.elements,
      r = this.elements,
      a = n[0],
      o = n[3],
      c = n[6],
      l = n[1],
      u = n[4],
      d = n[7],
      f = n[2],
      _ = n[5],
      v = n[8],
      M = s[0],
      p = s[3],
      h = s[6],
      T = s[1],
      b = s[4],
      y = s[7],
      A = s[2],
      w = s[5],
      R = s[8];
    return (
      (r[0] = a * M + o * T + c * A),
      (r[3] = a * p + o * b + c * w),
      (r[6] = a * h + o * y + c * R),
      (r[1] = l * M + u * T + d * A),
      (r[4] = l * p + u * b + d * w),
      (r[7] = l * h + u * y + d * R),
      (r[2] = f * M + _ * T + v * A),
      (r[5] = f * p + _ * b + v * w),
      (r[8] = f * h + _ * y + v * R),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[3] *= e),
      (t[6] *= e),
      (t[1] *= e),
      (t[4] *= e),
      (t[7] *= e),
      (t[2] *= e),
      (t[5] *= e),
      (t[8] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      s = e[2],
      r = e[3],
      a = e[4],
      o = e[5],
      c = e[6],
      l = e[7],
      u = e[8];
    return (
      t * a * u - t * o * l - n * r * u + n * o * c + s * r * l - s * a * c
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      s = e[2],
      r = e[3],
      a = e[4],
      o = e[5],
      c = e[6],
      l = e[7],
      u = e[8],
      d = u * a - o * l,
      f = o * c - u * r,
      _ = l * r - a * c,
      v = t * d + n * f + s * _;
    if (v === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const M = 1 / v;
    return (
      (e[0] = d * M),
      (e[1] = (s * l - u * n) * M),
      (e[2] = (o * n - s * a) * M),
      (e[3] = f * M),
      (e[4] = (u * t - s * c) * M),
      (e[5] = (s * r - o * t) * M),
      (e[6] = _ * M),
      (e[7] = (n * c - l * t) * M),
      (e[8] = (a * t - n * r) * M),
      this
    );
  }
  transpose() {
    let e;
    const t = this.elements;
    return (
      (e = t[1]),
      (t[1] = t[3]),
      (t[3] = e),
      (e = t[2]),
      (t[2] = t[6]),
      (t[6] = e),
      (e = t[5]),
      (t[5] = t[7]),
      (t[7] = e),
      this
    );
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return (
      (e[0] = t[0]),
      (e[1] = t[3]),
      (e[2] = t[6]),
      (e[3] = t[1]),
      (e[4] = t[4]),
      (e[5] = t[7]),
      (e[6] = t[2]),
      (e[7] = t[5]),
      (e[8] = t[8]),
      this
    );
  }
  setUvTransform(e, t, n, s, r, a, o) {
    const c = Math.cos(r),
      l = Math.sin(r);
    return (
      this.set(
        n * c,
        n * l,
        -n * (c * a + l * o) + a + e,
        -s * l,
        s * c,
        -s * (-l * a + c * o) + o + t,
        0,
        0,
        1
      ),
      this
    );
  }
  scale(e, t) {
    return this.premultiply(Is.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(Is.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(Is.makeTranslation(e, t)), this;
  }
  makeTranslation(e, t) {
    return (
      e.isVector2
        ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1)
        : this.set(1, 0, e, 0, 1, t, 0, 0, 1),
      this
    );
  }
  makeRotation(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this;
  }
  makeScale(e, t) {
    return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let s = 0; s < 9; s++) if (t[s] !== n[s]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      e
    );
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Is = new De(),
  za = new De().set(
    0.4123908,
    0.3575843,
    0.1804808,
    0.212639,
    0.7151687,
    0.0721923,
    0.0193308,
    0.1191948,
    0.9505322
  ),
  Va = new De().set(
    3.2409699,
    -1.5373832,
    -0.4986108,
    -0.9692436,
    1.8759675,
    0.0415551,
    0.0556301,
    -0.203977,
    1.0569715
  );
function Ec() {
  const i = {
      enabled: !0,
      workingColorSpace: ui,
      spaces: {},
      convert: function (s, r, a) {
        return (
          this.enabled === !1 ||
            r === a ||
            !r ||
            !a ||
            (this.spaces[r].transfer === Ze &&
              ((s.r = mn(s.r)), (s.g = mn(s.g)), (s.b = mn(s.b))),
            this.spaces[r].primaries !== this.spaces[a].primaries &&
              (s.applyMatrix3(this.spaces[r].toXYZ),
              s.applyMatrix3(this.spaces[a].fromXYZ)),
            this.spaces[a].transfer === Ze &&
              ((s.r = oi(s.r)), (s.g = oi(s.g)), (s.b = oi(s.b)))),
          s
        );
      },
      workingToColorSpace: function (s, r) {
        return this.convert(s, this.workingColorSpace, r);
      },
      colorSpaceToWorking: function (s, r) {
        return this.convert(s, r, this.workingColorSpace);
      },
      getPrimaries: function (s) {
        return this.spaces[s].primaries;
      },
      getTransfer: function (s) {
        return s === bn ? xs : this.spaces[s].transfer;
      },
      getToneMappingMode: function (s) {
        return (
          this.spaces[s].outputColorSpaceConfig.toneMappingMode || "standard"
        );
      },
      getLuminanceCoefficients: function (s, r = this.workingColorSpace) {
        return s.fromArray(this.spaces[r].luminanceCoefficients);
      },
      define: function (s) {
        Object.assign(this.spaces, s);
      },
      _getMatrix: function (s, r, a) {
        return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ);
      },
      _getDrawingBufferColorSpace: function (s) {
        return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace;
      },
      _getUnpackColorSpace: function (s = this.workingColorSpace) {
        return this.spaces[s].workingColorSpaceConfig.unpackColorSpace;
      },
      fromWorkingColorSpace: function (s, r) {
        return (
          Ci(
            "ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."
          ),
          i.workingToColorSpace(s, r)
        );
      },
      toWorkingColorSpace: function (s, r) {
        return (
          Ci(
            "ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."
          ),
          i.colorSpaceToWorking(s, r)
        );
      },
    },
    e = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06],
    t = [0.2126, 0.7152, 0.0722],
    n = [0.3127, 0.329];
  return (
    i.define({
      [ui]: {
        primaries: e,
        whitePoint: n,
        transfer: xs,
        toXYZ: za,
        fromXYZ: Va,
        luminanceCoefficients: t,
        workingColorSpaceConfig: { unpackColorSpace: Ht },
        outputColorSpaceConfig: { drawingBufferColorSpace: Ht },
      },
      [Ht]: {
        primaries: e,
        whitePoint: n,
        transfer: Ze,
        toXYZ: za,
        fromXYZ: Va,
        luminanceCoefficients: t,
        outputColorSpaceConfig: { drawingBufferColorSpace: Ht },
      },
    }),
    i
  );
}
const Ge = Ec();
function mn(i) {
  return i < 0.04045
    ? i * 0.0773993808
    : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function oi(i) {
  return i < 0.0031308 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
let Xn;
class yc {
  static getDataURL(e, t = "image/png") {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let n;
    if (e instanceof HTMLCanvasElement) n = e;
    else {
      Xn === void 0 && (Xn = Ms("canvas")),
        (Xn.width = e.width),
        (Xn.height = e.height);
      const s = Xn.getContext("2d");
      e instanceof ImageData
        ? s.putImageData(e, 0, 0)
        : s.drawImage(e, 0, 0, e.width, e.height),
        (n = Xn);
    }
    return n.toDataURL(t);
  }
  static sRGBToLinear(e) {
    if (
      (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement) ||
      (typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement) ||
      (typeof ImageBitmap < "u" && e instanceof ImageBitmap)
    ) {
      const t = Ms("canvas");
      (t.width = e.width), (t.height = e.height);
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const s = n.getImageData(0, 0, e.width, e.height),
        r = s.data;
      for (let a = 0; a < r.length; a++) r[a] = mn(r[a] / 255) * 255;
      return n.putImageData(s, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray
          ? (t[n] = Math.floor(mn(t[n] / 255) * 255))
          : (t[n] = mn(t[n]));
      return { data: t, width: e.width, height: e.height };
    } else
      return (
        we(
          "ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."
        ),
        e
      );
  }
}
let Tc = 0;
class da {
  constructor(e = null) {
    (this.isSource = !0),
      Object.defineProperty(this, "id", { value: Tc++ }),
      (this.uuid = Li()),
      (this.data = e),
      (this.dataReady = !0),
      (this.version = 0);
  }
  getSize(e) {
    const t = this.data;
    return (
      typeof HTMLVideoElement < "u" && t instanceof HTMLVideoElement
        ? e.set(t.videoWidth, t.videoHeight, 0)
        : typeof VideoFrame < "u" && t instanceof VideoFrame
        ? e.set(t.displayHeight, t.displayWidth, 0)
        : t !== null
        ? e.set(t.width, t.height, t.depth || 0)
        : e.set(0, 0, 0),
      e
    );
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const n = { uuid: this.uuid, url: "" },
      s = this.data;
    if (s !== null) {
      let r;
      if (Array.isArray(s)) {
        r = [];
        for (let a = 0, o = s.length; a < o; a++)
          s[a].isDataTexture ? r.push(Us(s[a].image)) : r.push(Us(s[a]));
      } else r = Us(s);
      n.url = r;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function Us(i) {
  return (typeof HTMLImageElement < "u" && i instanceof HTMLImageElement) ||
    (typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement) ||
    (typeof ImageBitmap < "u" && i instanceof ImageBitmap)
    ? yc.getDataURL(i)
    : i.data
    ? {
        data: Array.from(i.data),
        width: i.width,
        height: i.height,
        type: i.data.constructor.name,
      }
    : (we("Texture: Unable to serialize Texture."), {});
}
let bc = 0;
const Ns = new U();
class At extends Hn {
  constructor(
    e = At.DEFAULT_IMAGE,
    t = At.DEFAULT_MAPPING,
    n = fn,
    s = fn,
    r = yt,
    a = Bn,
    o = qt,
    c = Bt,
    l = At.DEFAULT_ANISOTROPY,
    u = bn
  ) {
    super(),
      (this.isTexture = !0),
      Object.defineProperty(this, "id", { value: bc++ }),
      (this.uuid = Li()),
      (this.name = ""),
      (this.source = new da(e)),
      (this.mipmaps = []),
      (this.mapping = t),
      (this.channel = 0),
      (this.wrapS = n),
      (this.wrapT = s),
      (this.magFilter = r),
      (this.minFilter = a),
      (this.anisotropy = l),
      (this.format = o),
      (this.internalFormat = null),
      (this.type = c),
      (this.offset = new Ce(0, 0)),
      (this.repeat = new Ce(1, 1)),
      (this.center = new Ce(0, 0)),
      (this.rotation = 0),
      (this.matrixAutoUpdate = !0),
      (this.matrix = new De()),
      (this.generateMipmaps = !0),
      (this.premultiplyAlpha = !1),
      (this.flipY = !0),
      (this.unpackAlignment = 4),
      (this.colorSpace = u),
      (this.userData = {}),
      (this.updateRanges = []),
      (this.version = 0),
      (this.onUpdate = null),
      (this.renderTarget = null),
      (this.isRenderTargetTexture = !1),
      (this.isArrayTexture = !!(e && e.depth && e.depth > 1)),
      (this.pmremVersion = 0);
  }
  get width() {
    return this.source.getSize(Ns).x;
  }
  get height() {
    return this.source.getSize(Ns).y;
  }
  get depth() {
    return this.source.getSize(Ns).z;
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(
      this.offset.x,
      this.offset.y,
      this.repeat.x,
      this.repeat.y,
      this.rotation,
      this.center.x,
      this.center.y
    );
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.source = e.source),
      (this.mipmaps = e.mipmaps.slice(0)),
      (this.mapping = e.mapping),
      (this.channel = e.channel),
      (this.wrapS = e.wrapS),
      (this.wrapT = e.wrapT),
      (this.magFilter = e.magFilter),
      (this.minFilter = e.minFilter),
      (this.anisotropy = e.anisotropy),
      (this.format = e.format),
      (this.internalFormat = e.internalFormat),
      (this.type = e.type),
      this.offset.copy(e.offset),
      this.repeat.copy(e.repeat),
      this.center.copy(e.center),
      (this.rotation = e.rotation),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this.matrix.copy(e.matrix),
      (this.generateMipmaps = e.generateMipmaps),
      (this.premultiplyAlpha = e.premultiplyAlpha),
      (this.flipY = e.flipY),
      (this.unpackAlignment = e.unpackAlignment),
      (this.colorSpace = e.colorSpace),
      (this.renderTarget = e.renderTarget),
      (this.isRenderTargetTexture = e.isRenderTargetTexture),
      (this.isArrayTexture = e.isArrayTexture),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      (this.needsUpdate = !0),
      this
    );
  }
  setValues(e) {
    for (const t in e) {
      const n = e[t];
      if (n === void 0) {
        we(`Texture.setValues(): parameter '${t}' has value of undefined.`);
        continue;
      }
      const s = this[t];
      if (s === void 0) {
        we(`Texture.setValues(): property '${t}' does not exist.`);
        continue;
      }
      (s && n && s.isVector2 && n.isVector2) ||
      (s && n && s.isVector3 && n.isVector3) ||
      (s && n && s.isMatrix3 && n.isMatrix3)
        ? s.copy(n)
        : (this[t] = n);
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
    const n = {
      metadata: { version: 4.7, type: "Texture", generator: "Texture.toJSON" },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment,
    };
    return (
      Object.keys(this.userData).length > 0 && (n.userData = this.userData),
      t || (e.textures[this.uuid] = n),
      n
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== Ho) return e;
    if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
      switch (this.wrapS) {
        case Mr:
          e.x = e.x - Math.floor(e.x);
          break;
        case fn:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case Sr:
          Math.abs(Math.floor(e.x) % 2) === 1
            ? (e.x = Math.ceil(e.x) - e.x)
            : (e.x = e.x - Math.floor(e.x));
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case Mr:
          e.y = e.y - Math.floor(e.y);
          break;
        case fn:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case Sr:
          Math.abs(Math.floor(e.y) % 2) === 1
            ? (e.y = Math.ceil(e.y) - e.y)
            : (e.y = e.y - Math.floor(e.y));
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, (this.source.needsUpdate = !0));
  }
  set needsPMREMUpdate(e) {
    e === !0 && this.pmremVersion++;
  }
}
At.DEFAULT_IMAGE = null;
At.DEFAULT_MAPPING = Ho;
At.DEFAULT_ANISOTROPY = 1;
class lt {
  constructor(e = 0, t = 0, n = 0, s = 1) {
    (lt.prototype.isVector4 = !0),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      (this.w = s);
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, s) {
    return (this.x = e), (this.y = t), (this.z = n), (this.w = s), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), (this.w = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setW(e) {
    return (this.w = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return (
      (this.x = e.x),
      (this.y = e.y),
      (this.z = e.z),
      (this.w = e.w !== void 0 ? e.w : 1),
      this
    );
  }
  add(e) {
    return (
      (this.x += e.x), (this.y += e.y), (this.z += e.z), (this.w += e.w), this
    );
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), (this.w += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x),
      (this.y = e.y + t.y),
      (this.z = e.z + t.z),
      (this.w = e.w + t.w),
      this
    );
  }
  addScaledVector(e, t) {
    return (
      (this.x += e.x * t),
      (this.y += e.y * t),
      (this.z += e.z * t),
      (this.w += e.w * t),
      this
    );
  }
  sub(e) {
    return (
      (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), (this.w -= e.w), this
    );
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), (this.w -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x),
      (this.y = e.y - t.y),
      (this.z = e.z - t.z),
      (this.w = e.w - t.w),
      this
    );
  }
  multiply(e) {
    return (
      (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), (this.w *= e.w), this
    );
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e), this;
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      s = this.z,
      r = this.w,
      a = e.elements;
    return (
      (this.x = a[0] * t + a[4] * n + a[8] * s + a[12] * r),
      (this.y = a[1] * t + a[5] * n + a[9] * s + a[13] * r),
      (this.z = a[2] * t + a[6] * n + a[10] * s + a[14] * r),
      (this.w = a[3] * t + a[7] * n + a[11] * s + a[15] * r),
      this
    );
  }
  divide(e) {
    return (
      (this.x /= e.x), (this.y /= e.y), (this.z /= e.z), (this.w /= e.w), this
    );
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return (
      t < 1e-4
        ? ((this.x = 1), (this.y = 0), (this.z = 0))
        : ((this.x = e.x / t), (this.y = e.y / t), (this.z = e.z / t)),
      this
    );
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, s, r;
    const c = e.elements,
      l = c[0],
      u = c[4],
      d = c[8],
      f = c[1],
      _ = c[5],
      v = c[9],
      M = c[2],
      p = c[6],
      h = c[10];
    if (
      Math.abs(u - f) < 0.01 &&
      Math.abs(d - M) < 0.01 &&
      Math.abs(v - p) < 0.01
    ) {
      if (
        Math.abs(u + f) < 0.1 &&
        Math.abs(d + M) < 0.1 &&
        Math.abs(v + p) < 0.1 &&
        Math.abs(l + _ + h - 3) < 0.1
      )
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const b = (l + 1) / 2,
        y = (_ + 1) / 2,
        A = (h + 1) / 2,
        w = (u + f) / 4,
        R = (d + M) / 4,
        F = (v + p) / 4;
      return (
        b > y && b > A
          ? b < 0.01
            ? ((n = 0), (s = 0.707106781), (r = 0.707106781))
            : ((n = Math.sqrt(b)), (s = w / n), (r = R / n))
          : y > A
          ? y < 0.01
            ? ((n = 0.707106781), (s = 0), (r = 0.707106781))
            : ((s = Math.sqrt(y)), (n = w / s), (r = F / s))
          : A < 0.01
          ? ((n = 0.707106781), (s = 0.707106781), (r = 0))
          : ((r = Math.sqrt(A)), (n = R / r), (s = F / r)),
        this.set(n, s, r, t),
        this
      );
    }
    let T = Math.sqrt(
      (p - v) * (p - v) + (d - M) * (d - M) + (f - u) * (f - u)
    );
    return (
      Math.abs(T) < 0.001 && (T = 1),
      (this.x = (p - v) / T),
      (this.y = (d - M) / T),
      (this.z = (f - u) / T),
      (this.w = Math.acos((l + _ + h - 1) / 2)),
      this
    );
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return (
      (this.x = t[12]),
      (this.y = t[13]),
      (this.z = t[14]),
      (this.w = t[15]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      (this.w = Math.min(this.w, e.w)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      (this.w = Math.max(this.w, e.w)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Be(this.x, e.x, t.x)),
      (this.y = Be(this.y, e.y, t.y)),
      (this.z = Be(this.z, e.z, t.z)),
      (this.w = Be(this.w, e.w, t.w)),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Be(this.x, e, t)),
      (this.y = Be(this.y, e, t)),
      (this.z = Be(this.z, e, t)),
      (this.w = Be(this.w, e, t)),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Be(n, e, t));
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      (this.w = Math.floor(this.w)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      (this.w = Math.ceil(this.w)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      (this.w = Math.round(this.w)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      (this.w = Math.trunc(this.w)),
      this
    );
  }
  negate() {
    return (
      (this.x = -this.x),
      (this.y = -this.y),
      (this.z = -this.z),
      (this.w = -this.w),
      this
    );
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return (
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  length() {
    return Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  manhattanLength() {
    return (
      Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    );
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      (this.w += (e.w - this.w) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      (this.w = e.w + (t.w - e.w) * n),
      this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return (
      (this.x = e[t]),
      (this.y = e[t + 1]),
      (this.z = e[t + 2]),
      (this.w = e[t + 3]),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this.x),
      (e[t + 1] = this.y),
      (e[t + 2] = this.z),
      (e[t + 3] = this.w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      (this.z = e.getZ(t)),
      (this.w = e.getW(t)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      (this.w = Math.random()),
      this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class Ac extends Hn {
  constructor(e = 1, t = 1, n = {}) {
    super(),
      (n = Object.assign(
        {
          generateMipmaps: !1,
          internalFormat: null,
          minFilter: yt,
          depthBuffer: !0,
          stencilBuffer: !1,
          resolveDepthBuffer: !0,
          resolveStencilBuffer: !0,
          depthTexture: null,
          samples: 0,
          count: 1,
          depth: 1,
          multiview: !1,
        },
        n
      )),
      (this.isRenderTarget = !0),
      (this.width = e),
      (this.height = t),
      (this.depth = n.depth),
      (this.scissor = new lt(0, 0, e, t)),
      (this.scissorTest = !1),
      (this.viewport = new lt(0, 0, e, t));
    const s = { width: e, height: t, depth: n.depth },
      r = new At(s);
    this.textures = [];
    const a = n.count;
    for (let o = 0; o < a; o++)
      (this.textures[o] = r.clone()),
        (this.textures[o].isRenderTargetTexture = !0),
        (this.textures[o].renderTarget = this);
    this._setTextureOptions(n),
      (this.depthBuffer = n.depthBuffer),
      (this.stencilBuffer = n.stencilBuffer),
      (this.resolveDepthBuffer = n.resolveDepthBuffer),
      (this.resolveStencilBuffer = n.resolveStencilBuffer),
      (this._depthTexture = null),
      (this.depthTexture = n.depthTexture),
      (this.samples = n.samples),
      (this.multiview = n.multiview);
  }
  _setTextureOptions(e = {}) {
    const t = {
      minFilter: yt,
      generateMipmaps: !1,
      flipY: !1,
      internalFormat: null,
    };
    e.mapping !== void 0 && (t.mapping = e.mapping),
      e.wrapS !== void 0 && (t.wrapS = e.wrapS),
      e.wrapT !== void 0 && (t.wrapT = e.wrapT),
      e.wrapR !== void 0 && (t.wrapR = e.wrapR),
      e.magFilter !== void 0 && (t.magFilter = e.magFilter),
      e.minFilter !== void 0 && (t.minFilter = e.minFilter),
      e.format !== void 0 && (t.format = e.format),
      e.type !== void 0 && (t.type = e.type),
      e.anisotropy !== void 0 && (t.anisotropy = e.anisotropy),
      e.colorSpace !== void 0 && (t.colorSpace = e.colorSpace),
      e.flipY !== void 0 && (t.flipY = e.flipY),
      e.generateMipmaps !== void 0 && (t.generateMipmaps = e.generateMipmaps),
      e.internalFormat !== void 0 && (t.internalFormat = e.internalFormat);
    for (let n = 0; n < this.textures.length; n++)
      this.textures[n].setValues(t);
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  set depthTexture(e) {
    this._depthTexture !== null && (this._depthTexture.renderTarget = null),
      e !== null && (e.renderTarget = this),
      (this._depthTexture = e);
  }
  get depthTexture() {
    return this._depthTexture;
  }
  setSize(e, t, n = 1) {
    if (this.width !== e || this.height !== t || this.depth !== n) {
      (this.width = e), (this.height = t), (this.depth = n);
      for (let s = 0, r = this.textures.length; s < r; s++)
        (this.textures[s].image.width = e),
          (this.textures[s].image.height = t),
          (this.textures[s].image.depth = n),
          this.textures[s].isData3DTexture !== !0 &&
            (this.textures[s].isArrayTexture =
              this.textures[s].image.depth > 1);
      this.dispose();
    }
    this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.width = e.width),
      (this.height = e.height),
      (this.depth = e.depth),
      this.scissor.copy(e.scissor),
      (this.scissorTest = e.scissorTest),
      this.viewport.copy(e.viewport),
      (this.textures.length = 0);
    for (let t = 0, n = e.textures.length; t < n; t++) {
      (this.textures[t] = e.textures[t].clone()),
        (this.textures[t].isRenderTargetTexture = !0),
        (this.textures[t].renderTarget = this);
      const s = Object.assign({}, e.textures[t].image);
      this.textures[t].source = new da(s);
    }
    return (
      (this.depthBuffer = e.depthBuffer),
      (this.stencilBuffer = e.stencilBuffer),
      (this.resolveDepthBuffer = e.resolveDepthBuffer),
      (this.resolveStencilBuffer = e.resolveStencilBuffer),
      e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()),
      (this.samples = e.samples),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class en extends Ac {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), (this.isWebGLRenderTarget = !0);
  }
}
class Jo extends At {
  constructor(e = null, t = 1, n = 1, s = 1) {
    super(null),
      (this.isDataArrayTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: s }),
      (this.magFilter = vt),
      (this.minFilter = vt),
      (this.wrapR = fn),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1),
      (this.layerUpdates = new Set());
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class wc extends At {
  constructor(e = null, t = 1, n = 1, s = 1) {
    super(null),
      (this.isData3DTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: s }),
      (this.magFilter = vt),
      (this.minFilter = vt),
      (this.wrapR = fn),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class Ii {
  constructor(
    e = new U(1 / 0, 1 / 0, 1 / 0),
    t = new U(-1 / 0, -1 / 0, -1 / 0)
  ) {
    (this.isBox3 = !0), (this.min = e), (this.max = t);
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(kt.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(kt.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = kt.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return (
      (this.min.x = this.min.y = this.min.z = 1 / 0),
      (this.max.x = this.max.y = this.max.z = -1 / 0),
      this
    );
  }
  isEmpty() {
    return (
      this.max.x < this.min.x ||
      this.max.y < this.min.y ||
      this.max.z < this.min.z
    );
  }
  getCenter(e) {
    return this.isEmpty()
      ? e.set(0, 0, 0)
      : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0) {
      const r = n.getAttribute("position");
      if (t === !0 && r !== void 0 && e.isInstancedMesh !== !0)
        for (let a = 0, o = r.count; a < o; a++)
          e.isMesh === !0
            ? e.getVertexPosition(a, kt)
            : kt.fromBufferAttribute(r, a),
            kt.applyMatrix4(e.matrixWorld),
            this.expandByPoint(kt);
      else
        e.boundingBox !== void 0
          ? (e.boundingBox === null && e.computeBoundingBox(),
            Hi.copy(e.boundingBox))
          : (n.boundingBox === null && n.computeBoundingBox(),
            Hi.copy(n.boundingBox)),
          Hi.applyMatrix4(e.matrixWorld),
          this.union(Hi);
    }
    const s = e.children;
    for (let r = 0, a = s.length; r < a; r++) this.expandByObject(s[r], t);
    return this;
  }
  containsPoint(e) {
    return (
      e.x >= this.min.x &&
      e.x <= this.max.x &&
      e.y >= this.min.y &&
      e.y <= this.max.y &&
      e.z >= this.min.z &&
      e.z <= this.max.z
    );
  }
  containsBox(e) {
    return (
      this.min.x <= e.min.x &&
      e.max.x <= this.max.x &&
      this.min.y <= e.min.y &&
      e.max.y <= this.max.y &&
      this.min.z <= e.min.z &&
      e.max.z <= this.max.z
    );
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return (
      e.max.x >= this.min.x &&
      e.min.x <= this.max.x &&
      e.max.y >= this.min.y &&
      e.min.y <= this.max.y &&
      e.max.z >= this.min.z &&
      e.min.z <= this.max.z
    );
  }
  intersectsSphere(e) {
    return (
      this.clampPoint(e.center, kt),
      kt.distanceToSquared(e.center) <= e.radius * e.radius
    );
  }
  intersectsPlane(e) {
    let t, n;
    return (
      e.normal.x > 0
        ? ((t = e.normal.x * this.min.x), (n = e.normal.x * this.max.x))
        : ((t = e.normal.x * this.max.x), (n = e.normal.x * this.min.x)),
      e.normal.y > 0
        ? ((t += e.normal.y * this.min.y), (n += e.normal.y * this.max.y))
        : ((t += e.normal.y * this.max.y), (n += e.normal.y * this.min.y)),
      e.normal.z > 0
        ? ((t += e.normal.z * this.min.z), (n += e.normal.z * this.max.z))
        : ((t += e.normal.z * this.max.z), (n += e.normal.z * this.min.z)),
      t <= -e.constant && n >= -e.constant
    );
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return !1;
    this.getCenter(xi),
      ki.subVectors(this.max, xi),
      Yn.subVectors(e.a, xi),
      qn.subVectors(e.b, xi),
      Kn.subVectors(e.c, xi),
      xn.subVectors(qn, Yn),
      vn.subVectors(Kn, qn),
      Pn.subVectors(Yn, Kn);
    let t = [
      0,
      -xn.z,
      xn.y,
      0,
      -vn.z,
      vn.y,
      0,
      -Pn.z,
      Pn.y,
      xn.z,
      0,
      -xn.x,
      vn.z,
      0,
      -vn.x,
      Pn.z,
      0,
      -Pn.x,
      -xn.y,
      xn.x,
      0,
      -vn.y,
      vn.x,
      0,
      -Pn.y,
      Pn.x,
      0,
    ];
    return !Fs(t, Yn, qn, Kn, ki) ||
      ((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !Fs(t, Yn, qn, Kn, ki))
      ? !1
      : (Wi.crossVectors(xn, vn),
        (t = [Wi.x, Wi.y, Wi.z]),
        Fs(t, Yn, qn, Kn, ki));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, kt).distanceTo(e);
  }
  getBoundingSphere(e) {
    return (
      this.isEmpty()
        ? e.makeEmpty()
        : (this.getCenter(e.center),
          (e.radius = this.getSize(kt).length() * 0.5)),
      e
    );
  }
  intersect(e) {
    return (
      this.min.max(e.min),
      this.max.min(e.max),
      this.isEmpty() && this.makeEmpty(),
      this
    );
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty()
      ? this
      : (on[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
        on[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
        on[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
        on[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
        on[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
        on[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
        on[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
        on[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
        this.setFromPoints(on),
        this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
  toJSON() {
    return { min: this.min.toArray(), max: this.max.toArray() };
  }
  fromJSON(e) {
    return this.min.fromArray(e.min), this.max.fromArray(e.max), this;
  }
}
const on = [
    new U(),
    new U(),
    new U(),
    new U(),
    new U(),
    new U(),
    new U(),
    new U(),
  ],
  kt = new U(),
  Hi = new Ii(),
  Yn = new U(),
  qn = new U(),
  Kn = new U(),
  xn = new U(),
  vn = new U(),
  Pn = new U(),
  xi = new U(),
  ki = new U(),
  Wi = new U(),
  Dn = new U();
function Fs(i, e, t, n, s) {
  for (let r = 0, a = i.length - 3; r <= a; r += 3) {
    Dn.fromArray(i, r);
    const o =
        s.x * Math.abs(Dn.x) + s.y * Math.abs(Dn.y) + s.z * Math.abs(Dn.z),
      c = e.dot(Dn),
      l = t.dot(Dn),
      u = n.dot(Dn);
    if (Math.max(-Math.max(c, l, u), Math.min(c, l, u)) > o) return !1;
  }
  return !0;
}
const Rc = new Ii(),
  vi = new U(),
  Os = new U();
class Ts {
  constructor(e = new U(), t = -1) {
    (this.isSphere = !0), (this.center = e), (this.radius = t);
  }
  set(e, t) {
    return this.center.copy(e), (this.radius = t), this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : Rc.setFromPoints(e).getCenter(n);
    let s = 0;
    for (let r = 0, a = e.length; r < a; r++)
      s = Math.max(s, n.distanceToSquared(e[r]));
    return (this.radius = Math.sqrt(s)), this;
  }
  copy(e) {
    return this.center.copy(e.center), (this.radius = e.radius), this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), (this.radius = -1), this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return (
      t.copy(e),
      n > this.radius * this.radius &&
        (t.sub(this.center).normalize(),
        t.multiplyScalar(this.radius).add(this.center)),
      t
    );
  }
  getBoundingBox(e) {
    return this.isEmpty()
      ? (e.makeEmpty(), e)
      : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return (
      this.center.applyMatrix4(e),
      (this.radius = this.radius * e.getMaxScaleOnAxis()),
      this
    );
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty()) return this.center.copy(e), (this.radius = 0), this;
    vi.subVectors(e, this.center);
    const t = vi.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t),
        s = (n - this.radius) * 0.5;
      this.center.addScaledVector(vi, s / n), (this.radius += s);
    }
    return this;
  }
  union(e) {
    return e.isEmpty()
      ? this
      : this.isEmpty()
      ? (this.copy(e), this)
      : (this.center.equals(e.center) === !0
          ? (this.radius = Math.max(this.radius, e.radius))
          : (Os.subVectors(e.center, this.center).setLength(e.radius),
            this.expandByPoint(vi.copy(e.center).add(Os)),
            this.expandByPoint(vi.copy(e.center).sub(Os))),
        this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    return { radius: this.radius, center: this.center.toArray() };
  }
  fromJSON(e) {
    return (this.radius = e.radius), this.center.fromArray(e.center), this;
  }
}
const ln = new U(),
  Bs = new U(),
  Xi = new U(),
  Mn = new U(),
  zs = new U(),
  Yi = new U(),
  Vs = new U();
class fa {
  constructor(e = new U(), t = new U(0, 0, -1)) {
    (this.origin = e), (this.direction = t);
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, ln)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0
      ? t.copy(this.origin)
      : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = ln.subVectors(e, this.origin).dot(this.direction);
    return t < 0
      ? this.origin.distanceToSquared(e)
      : (ln.copy(this.origin).addScaledVector(this.direction, t),
        ln.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, s) {
    Bs.copy(e).add(t).multiplyScalar(0.5),
      Xi.copy(t).sub(e).normalize(),
      Mn.copy(this.origin).sub(Bs);
    const r = e.distanceTo(t) * 0.5,
      a = -this.direction.dot(Xi),
      o = Mn.dot(this.direction),
      c = -Mn.dot(Xi),
      l = Mn.lengthSq(),
      u = Math.abs(1 - a * a);
    let d, f, _, v;
    if (u > 0)
      if (((d = a * c - o), (f = a * o - c), (v = r * u), d >= 0))
        if (f >= -v)
          if (f <= v) {
            const M = 1 / u;
            (d *= M),
              (f *= M),
              (_ = d * (d + a * f + 2 * o) + f * (a * d + f + 2 * c) + l);
          } else
            (f = r),
              (d = Math.max(0, -(a * f + o))),
              (_ = -d * d + f * (f + 2 * c) + l);
        else
          (f = -r),
            (d = Math.max(0, -(a * f + o))),
            (_ = -d * d + f * (f + 2 * c) + l);
      else
        f <= -v
          ? ((d = Math.max(0, -(-a * r + o))),
            (f = d > 0 ? -r : Math.min(Math.max(-r, -c), r)),
            (_ = -d * d + f * (f + 2 * c) + l))
          : f <= v
          ? ((d = 0),
            (f = Math.min(Math.max(-r, -c), r)),
            (_ = f * (f + 2 * c) + l))
          : ((d = Math.max(0, -(a * r + o))),
            (f = d > 0 ? r : Math.min(Math.max(-r, -c), r)),
            (_ = -d * d + f * (f + 2 * c) + l));
    else
      (f = a > 0 ? -r : r),
        (d = Math.max(0, -(a * f + o))),
        (_ = -d * d + f * (f + 2 * c) + l);
    return (
      n && n.copy(this.origin).addScaledVector(this.direction, d),
      s && s.copy(Bs).addScaledVector(Xi, f),
      _
    );
  }
  intersectSphere(e, t) {
    ln.subVectors(e.center, this.origin);
    const n = ln.dot(this.direction),
      s = ln.dot(ln) - n * n,
      r = e.radius * e.radius;
    if (s > r) return null;
    const a = Math.sqrt(r - s),
      o = n - a,
      c = n + a;
    return c < 0 ? null : o < 0 ? this.at(c, t) : this.at(o, t);
  }
  intersectsSphere(e) {
    return e.radius < 0
      ? !1
      : this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, s, r, a, o, c;
    const l = 1 / this.direction.x,
      u = 1 / this.direction.y,
      d = 1 / this.direction.z,
      f = this.origin;
    return (
      l >= 0
        ? ((n = (e.min.x - f.x) * l), (s = (e.max.x - f.x) * l))
        : ((n = (e.max.x - f.x) * l), (s = (e.min.x - f.x) * l)),
      u >= 0
        ? ((r = (e.min.y - f.y) * u), (a = (e.max.y - f.y) * u))
        : ((r = (e.max.y - f.y) * u), (a = (e.min.y - f.y) * u)),
      n > a ||
      r > s ||
      ((r > n || isNaN(n)) && (n = r),
      (a < s || isNaN(s)) && (s = a),
      d >= 0
        ? ((o = (e.min.z - f.z) * d), (c = (e.max.z - f.z) * d))
        : ((o = (e.max.z - f.z) * d), (c = (e.min.z - f.z) * d)),
      n > c || o > s) ||
      ((o > n || n !== n) && (n = o), (c < s || s !== s) && (s = c), s < 0)
        ? null
        : this.at(n >= 0 ? n : s, t)
    );
  }
  intersectsBox(e) {
    return this.intersectBox(e, ln) !== null;
  }
  intersectTriangle(e, t, n, s, r) {
    zs.subVectors(t, e), Yi.subVectors(n, e), Vs.crossVectors(zs, Yi);
    let a = this.direction.dot(Vs),
      o;
    if (a > 0) {
      if (s) return null;
      o = 1;
    } else if (a < 0) (o = -1), (a = -a);
    else return null;
    Mn.subVectors(this.origin, e);
    const c = o * this.direction.dot(Yi.crossVectors(Mn, Yi));
    if (c < 0) return null;
    const l = o * this.direction.dot(zs.cross(Mn));
    if (l < 0 || c + l > a) return null;
    const u = -o * Mn.dot(Vs);
    return u < 0 ? null : this.at(u / a, r);
  }
  applyMatrix4(e) {
    return (
      this.origin.applyMatrix4(e), this.direction.transformDirection(e), this
    );
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class rt {
  constructor(e, t, n, s, r, a, o, c, l, u, d, f, _, v, M, p) {
    (rt.prototype.isMatrix4 = !0),
      (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
      e !== void 0 && this.set(e, t, n, s, r, a, o, c, l, u, d, f, _, v, M, p);
  }
  set(e, t, n, s, r, a, o, c, l, u, d, f, _, v, M, p) {
    const h = this.elements;
    return (
      (h[0] = e),
      (h[4] = t),
      (h[8] = n),
      (h[12] = s),
      (h[1] = r),
      (h[5] = a),
      (h[9] = o),
      (h[13] = c),
      (h[2] = l),
      (h[6] = u),
      (h[10] = d),
      (h[14] = f),
      (h[3] = _),
      (h[7] = v),
      (h[11] = M),
      (h[15] = p),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new rt().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      (t[9] = n[9]),
      (t[10] = n[10]),
      (t[11] = n[11]),
      (t[12] = n[12]),
      (t[13] = n[13]),
      (t[14] = n[14]),
      (t[15] = n[15]),
      this
    );
  }
  copyPosition(e) {
    const t = this.elements,
      n = e.elements;
    return (t[12] = n[12]), (t[13] = n[13]), (t[14] = n[14]), this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return (
      this.set(
        t[0],
        t[3],
        t[6],
        0,
        t[1],
        t[4],
        t[7],
        0,
        t[2],
        t[5],
        t[8],
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractBasis(e, t, n) {
    return this.determinant() === 0
      ? (e.set(1, 0, 0), t.set(0, 1, 0), n.set(0, 0, 1), this)
      : (e.setFromMatrixColumn(this, 0),
        t.setFromMatrixColumn(this, 1),
        n.setFromMatrixColumn(this, 2),
        this);
  }
  makeBasis(e, t, n) {
    return (
      this.set(
        e.x,
        t.x,
        n.x,
        0,
        e.y,
        t.y,
        n.y,
        0,
        e.z,
        t.z,
        n.z,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractRotation(e) {
    if (e.determinant() === 0) return this.identity();
    const t = this.elements,
      n = e.elements,
      s = 1 / Zn.setFromMatrixColumn(e, 0).length(),
      r = 1 / Zn.setFromMatrixColumn(e, 1).length(),
      a = 1 / Zn.setFromMatrixColumn(e, 2).length();
    return (
      (t[0] = n[0] * s),
      (t[1] = n[1] * s),
      (t[2] = n[2] * s),
      (t[3] = 0),
      (t[4] = n[4] * r),
      (t[5] = n[5] * r),
      (t[6] = n[6] * r),
      (t[7] = 0),
      (t[8] = n[8] * a),
      (t[9] = n[9] * a),
      (t[10] = n[10] * a),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromEuler(e) {
    const t = this.elements,
      n = e.x,
      s = e.y,
      r = e.z,
      a = Math.cos(n),
      o = Math.sin(n),
      c = Math.cos(s),
      l = Math.sin(s),
      u = Math.cos(r),
      d = Math.sin(r);
    if (e.order === "XYZ") {
      const f = a * u,
        _ = a * d,
        v = o * u,
        M = o * d;
      (t[0] = c * u),
        (t[4] = -c * d),
        (t[8] = l),
        (t[1] = _ + v * l),
        (t[5] = f - M * l),
        (t[9] = -o * c),
        (t[2] = M - f * l),
        (t[6] = v + _ * l),
        (t[10] = a * c);
    } else if (e.order === "YXZ") {
      const f = c * u,
        _ = c * d,
        v = l * u,
        M = l * d;
      (t[0] = f + M * o),
        (t[4] = v * o - _),
        (t[8] = a * l),
        (t[1] = a * d),
        (t[5] = a * u),
        (t[9] = -o),
        (t[2] = _ * o - v),
        (t[6] = M + f * o),
        (t[10] = a * c);
    } else if (e.order === "ZXY") {
      const f = c * u,
        _ = c * d,
        v = l * u,
        M = l * d;
      (t[0] = f - M * o),
        (t[4] = -a * d),
        (t[8] = v + _ * o),
        (t[1] = _ + v * o),
        (t[5] = a * u),
        (t[9] = M - f * o),
        (t[2] = -a * l),
        (t[6] = o),
        (t[10] = a * c);
    } else if (e.order === "ZYX") {
      const f = a * u,
        _ = a * d,
        v = o * u,
        M = o * d;
      (t[0] = c * u),
        (t[4] = v * l - _),
        (t[8] = f * l + M),
        (t[1] = c * d),
        (t[5] = M * l + f),
        (t[9] = _ * l - v),
        (t[2] = -l),
        (t[6] = o * c),
        (t[10] = a * c);
    } else if (e.order === "YZX") {
      const f = a * c,
        _ = a * l,
        v = o * c,
        M = o * l;
      (t[0] = c * u),
        (t[4] = M - f * d),
        (t[8] = v * d + _),
        (t[1] = d),
        (t[5] = a * u),
        (t[9] = -o * u),
        (t[2] = -l * u),
        (t[6] = _ * d + v),
        (t[10] = f - M * d);
    } else if (e.order === "XZY") {
      const f = a * c,
        _ = a * l,
        v = o * c,
        M = o * l;
      (t[0] = c * u),
        (t[4] = -d),
        (t[8] = l * u),
        (t[1] = f * d + M),
        (t[5] = a * u),
        (t[9] = _ * d - v),
        (t[2] = v * d - _),
        (t[6] = o * u),
        (t[10] = M * d + f);
    }
    return (
      (t[3] = 0),
      (t[7] = 0),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromQuaternion(e) {
    return this.compose(Cc, e, Pc);
  }
  lookAt(e, t, n) {
    const s = this.elements;
    return (
      Nt.subVectors(e, t),
      Nt.lengthSq() === 0 && (Nt.z = 1),
      Nt.normalize(),
      Sn.crossVectors(n, Nt),
      Sn.lengthSq() === 0 &&
        (Math.abs(n.z) === 1 ? (Nt.x += 1e-4) : (Nt.z += 1e-4),
        Nt.normalize(),
        Sn.crossVectors(n, Nt)),
      Sn.normalize(),
      qi.crossVectors(Nt, Sn),
      (s[0] = Sn.x),
      (s[4] = qi.x),
      (s[8] = Nt.x),
      (s[1] = Sn.y),
      (s[5] = qi.y),
      (s[9] = Nt.y),
      (s[2] = Sn.z),
      (s[6] = qi.z),
      (s[10] = Nt.z),
      this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      s = t.elements,
      r = this.elements,
      a = n[0],
      o = n[4],
      c = n[8],
      l = n[12],
      u = n[1],
      d = n[5],
      f = n[9],
      _ = n[13],
      v = n[2],
      M = n[6],
      p = n[10],
      h = n[14],
      T = n[3],
      b = n[7],
      y = n[11],
      A = n[15],
      w = s[0],
      R = s[4],
      F = s[8],
      g = s[12],
      S = s[1],
      P = s[5],
      O = s[9],
      B = s[13],
      X = s[2],
      W = s[6],
      H = s[10],
      G = s[14],
      j = s[3],
      he = s[7],
      ae = s[11],
      ue = s[15];
    return (
      (r[0] = a * w + o * S + c * X + l * j),
      (r[4] = a * R + o * P + c * W + l * he),
      (r[8] = a * F + o * O + c * H + l * ae),
      (r[12] = a * g + o * B + c * G + l * ue),
      (r[1] = u * w + d * S + f * X + _ * j),
      (r[5] = u * R + d * P + f * W + _ * he),
      (r[9] = u * F + d * O + f * H + _ * ae),
      (r[13] = u * g + d * B + f * G + _ * ue),
      (r[2] = v * w + M * S + p * X + h * j),
      (r[6] = v * R + M * P + p * W + h * he),
      (r[10] = v * F + M * O + p * H + h * ae),
      (r[14] = v * g + M * B + p * G + h * ue),
      (r[3] = T * w + b * S + y * X + A * j),
      (r[7] = T * R + b * P + y * W + A * he),
      (r[11] = T * F + b * O + y * H + A * ae),
      (r[15] = T * g + b * B + y * G + A * ue),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[4] *= e),
      (t[8] *= e),
      (t[12] *= e),
      (t[1] *= e),
      (t[5] *= e),
      (t[9] *= e),
      (t[13] *= e),
      (t[2] *= e),
      (t[6] *= e),
      (t[10] *= e),
      (t[14] *= e),
      (t[3] *= e),
      (t[7] *= e),
      (t[11] *= e),
      (t[15] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[4],
      s = e[8],
      r = e[12],
      a = e[1],
      o = e[5],
      c = e[9],
      l = e[13],
      u = e[2],
      d = e[6],
      f = e[10],
      _ = e[14],
      v = e[3],
      M = e[7],
      p = e[11],
      h = e[15],
      T = c * _ - l * f,
      b = o * _ - l * d,
      y = o * f - c * d,
      A = a * _ - l * u,
      w = a * f - c * u,
      R = a * d - o * u;
    return (
      t * (M * T - p * b + h * y) -
      n * (v * T - p * A + h * w) +
      s * (v * b - M * A + h * R) -
      r * (v * y - M * w + p * R)
    );
  }
  transpose() {
    const e = this.elements;
    let t;
    return (
      (t = e[1]),
      (e[1] = e[4]),
      (e[4] = t),
      (t = e[2]),
      (e[2] = e[8]),
      (e[8] = t),
      (t = e[6]),
      (e[6] = e[9]),
      (e[9] = t),
      (t = e[3]),
      (e[3] = e[12]),
      (e[12] = t),
      (t = e[7]),
      (e[7] = e[13]),
      (e[13] = t),
      (t = e[11]),
      (e[11] = e[14]),
      (e[14] = t),
      this
    );
  }
  setPosition(e, t, n) {
    const s = this.elements;
    return (
      e.isVector3
        ? ((s[12] = e.x), (s[13] = e.y), (s[14] = e.z))
        : ((s[12] = e), (s[13] = t), (s[14] = n)),
      this
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      s = e[2],
      r = e[3],
      a = e[4],
      o = e[5],
      c = e[6],
      l = e[7],
      u = e[8],
      d = e[9],
      f = e[10],
      _ = e[11],
      v = e[12],
      M = e[13],
      p = e[14],
      h = e[15],
      T = d * p * l - M * f * l + M * c * _ - o * p * _ - d * c * h + o * f * h,
      b = v * f * l - u * p * l - v * c * _ + a * p * _ + u * c * h - a * f * h,
      y = u * M * l - v * d * l + v * o * _ - a * M * _ - u * o * h + a * d * h,
      A = v * d * c - u * M * c - v * o * f + a * M * f + u * o * p - a * d * p,
      w = t * T + n * b + s * y + r * A;
    if (w === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const R = 1 / w;
    return (
      (e[0] = T * R),
      (e[1] =
        (M * f * r -
          d * p * r -
          M * s * _ +
          n * p * _ +
          d * s * h -
          n * f * h) *
        R),
      (e[2] =
        (o * p * r -
          M * c * r +
          M * s * l -
          n * p * l -
          o * s * h +
          n * c * h) *
        R),
      (e[3] =
        (d * c * r -
          o * f * r -
          d * s * l +
          n * f * l +
          o * s * _ -
          n * c * _) *
        R),
      (e[4] = b * R),
      (e[5] =
        (u * p * r -
          v * f * r +
          v * s * _ -
          t * p * _ -
          u * s * h +
          t * f * h) *
        R),
      (e[6] =
        (v * c * r -
          a * p * r -
          v * s * l +
          t * p * l +
          a * s * h -
          t * c * h) *
        R),
      (e[7] =
        (a * f * r -
          u * c * r +
          u * s * l -
          t * f * l -
          a * s * _ +
          t * c * _) *
        R),
      (e[8] = y * R),
      (e[9] =
        (v * d * r -
          u * M * r -
          v * n * _ +
          t * M * _ +
          u * n * h -
          t * d * h) *
        R),
      (e[10] =
        (a * M * r -
          v * o * r +
          v * n * l -
          t * M * l -
          a * n * h +
          t * o * h) *
        R),
      (e[11] =
        (u * o * r -
          a * d * r -
          u * n * l +
          t * d * l +
          a * n * _ -
          t * o * _) *
        R),
      (e[12] = A * R),
      (e[13] =
        (u * M * s -
          v * d * s +
          v * n * f -
          t * M * f -
          u * n * p +
          t * d * p) *
        R),
      (e[14] =
        (v * o * s -
          a * M * s -
          v * n * c +
          t * M * c +
          a * n * p -
          t * o * p) *
        R),
      (e[15] =
        (a * d * s -
          u * o * s +
          u * n * c -
          t * d * c -
          a * n * f +
          t * o * f) *
        R),
      this
    );
  }
  scale(e) {
    const t = this.elements,
      n = e.x,
      s = e.y,
      r = e.z;
    return (
      (t[0] *= n),
      (t[4] *= s),
      (t[8] *= r),
      (t[1] *= n),
      (t[5] *= s),
      (t[9] *= r),
      (t[2] *= n),
      (t[6] *= s),
      (t[10] *= r),
      (t[3] *= n),
      (t[7] *= s),
      (t[11] *= r),
      this
    );
  }
  getMaxScaleOnAxis() {
    const e = this.elements,
      t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
      n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
      s = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, s));
  }
  makeTranslation(e, t, n) {
    return (
      e.isVector3
        ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1)
        : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1),
      this
    );
  }
  makeRotationX(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t),
      s = Math.sin(t),
      r = 1 - n,
      a = e.x,
      o = e.y,
      c = e.z,
      l = r * a,
      u = r * o;
    return (
      this.set(
        l * a + n,
        l * o - s * c,
        l * c + s * o,
        0,
        l * o + s * c,
        u * o + n,
        u * c - s * a,
        0,
        l * c - s * o,
        u * c + s * a,
        r * c * c + n,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  makeScale(e, t, n) {
    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeShear(e, t, n, s, r, a) {
    return this.set(1, n, r, 0, e, 1, a, 0, t, s, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, t, n) {
    const s = this.elements,
      r = t._x,
      a = t._y,
      o = t._z,
      c = t._w,
      l = r + r,
      u = a + a,
      d = o + o,
      f = r * l,
      _ = r * u,
      v = r * d,
      M = a * u,
      p = a * d,
      h = o * d,
      T = c * l,
      b = c * u,
      y = c * d,
      A = n.x,
      w = n.y,
      R = n.z;
    return (
      (s[0] = (1 - (M + h)) * A),
      (s[1] = (_ + y) * A),
      (s[2] = (v - b) * A),
      (s[3] = 0),
      (s[4] = (_ - y) * w),
      (s[5] = (1 - (f + h)) * w),
      (s[6] = (p + T) * w),
      (s[7] = 0),
      (s[8] = (v + b) * R),
      (s[9] = (p - T) * R),
      (s[10] = (1 - (f + M)) * R),
      (s[11] = 0),
      (s[12] = e.x),
      (s[13] = e.y),
      (s[14] = e.z),
      (s[15] = 1),
      this
    );
  }
  decompose(e, t, n) {
    const s = this.elements;
    if (((e.x = s[12]), (e.y = s[13]), (e.z = s[14]), this.determinant() === 0))
      return n.set(1, 1, 1), t.identity(), this;
    let r = Zn.set(s[0], s[1], s[2]).length();
    const a = Zn.set(s[4], s[5], s[6]).length(),
      o = Zn.set(s[8], s[9], s[10]).length();
    this.determinant() < 0 && (r = -r), Wt.copy(this);
    const l = 1 / r,
      u = 1 / a,
      d = 1 / o;
    return (
      (Wt.elements[0] *= l),
      (Wt.elements[1] *= l),
      (Wt.elements[2] *= l),
      (Wt.elements[4] *= u),
      (Wt.elements[5] *= u),
      (Wt.elements[6] *= u),
      (Wt.elements[8] *= d),
      (Wt.elements[9] *= d),
      (Wt.elements[10] *= d),
      t.setFromRotationMatrix(Wt),
      (n.x = r),
      (n.y = a),
      (n.z = o),
      this
    );
  }
  makePerspective(e, t, n, s, r, a, o = Jt, c = !1) {
    const l = this.elements,
      u = (2 * r) / (t - e),
      d = (2 * r) / (n - s),
      f = (t + e) / (t - e),
      _ = (n + s) / (n - s);
    let v, M;
    if (c) (v = r / (a - r)), (M = (a * r) / (a - r));
    else if (o === Jt) (v = -(a + r) / (a - r)), (M = (-2 * a * r) / (a - r));
    else if (o === vs) (v = -a / (a - r)), (M = (-a * r) / (a - r));
    else
      throw new Error(
        "THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o
      );
    return (
      (l[0] = u),
      (l[4] = 0),
      (l[8] = f),
      (l[12] = 0),
      (l[1] = 0),
      (l[5] = d),
      (l[9] = _),
      (l[13] = 0),
      (l[2] = 0),
      (l[6] = 0),
      (l[10] = v),
      (l[14] = M),
      (l[3] = 0),
      (l[7] = 0),
      (l[11] = -1),
      (l[15] = 0),
      this
    );
  }
  makeOrthographic(e, t, n, s, r, a, o = Jt, c = !1) {
    const l = this.elements,
      u = 2 / (t - e),
      d = 2 / (n - s),
      f = -(t + e) / (t - e),
      _ = -(n + s) / (n - s);
    let v, M;
    if (c) (v = 1 / (a - r)), (M = a / (a - r));
    else if (o === Jt) (v = -2 / (a - r)), (M = -(a + r) / (a - r));
    else if (o === vs) (v = -1 / (a - r)), (M = -r / (a - r));
    else
      throw new Error(
        "THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o
      );
    return (
      (l[0] = u),
      (l[4] = 0),
      (l[8] = 0),
      (l[12] = f),
      (l[1] = 0),
      (l[5] = d),
      (l[9] = 0),
      (l[13] = _),
      (l[2] = 0),
      (l[6] = 0),
      (l[10] = v),
      (l[14] = M),
      (l[3] = 0),
      (l[7] = 0),
      (l[11] = 0),
      (l[15] = 1),
      this
    );
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let s = 0; s < 16; s++) if (t[s] !== n[s]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      (e[t + 9] = n[9]),
      (e[t + 10] = n[10]),
      (e[t + 11] = n[11]),
      (e[t + 12] = n[12]),
      (e[t + 13] = n[13]),
      (e[t + 14] = n[14]),
      (e[t + 15] = n[15]),
      e
    );
  }
}
const Zn = new U(),
  Wt = new rt(),
  Cc = new U(0, 0, 0),
  Pc = new U(1, 1, 1),
  Sn = new U(),
  qi = new U(),
  Nt = new U(),
  Ga = new rt(),
  Ha = new Gn();
class sn {
  constructor(e = 0, t = 0, n = 0, s = sn.DEFAULT_ORDER) {
    (this.isEuler = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = s);
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    (this._order = e), this._onChangeCallback();
  }
  set(e, t, n, s = this._order) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = s),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return (
      (this._x = e._x),
      (this._y = e._y),
      (this._z = e._z),
      (this._order = e._order),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const s = e.elements,
      r = s[0],
      a = s[4],
      o = s[8],
      c = s[1],
      l = s[5],
      u = s[9],
      d = s[2],
      f = s[6],
      _ = s[10];
    switch (t) {
      case "XYZ":
        (this._y = Math.asin(Be(o, -1, 1))),
          Math.abs(o) < 0.9999999
            ? ((this._x = Math.atan2(-u, _)), (this._z = Math.atan2(-a, r)))
            : ((this._x = Math.atan2(f, l)), (this._z = 0));
        break;
      case "YXZ":
        (this._x = Math.asin(-Be(u, -1, 1))),
          Math.abs(u) < 0.9999999
            ? ((this._y = Math.atan2(o, _)), (this._z = Math.atan2(c, l)))
            : ((this._y = Math.atan2(-d, r)), (this._z = 0));
        break;
      case "ZXY":
        (this._x = Math.asin(Be(f, -1, 1))),
          Math.abs(f) < 0.9999999
            ? ((this._y = Math.atan2(-d, _)), (this._z = Math.atan2(-a, l)))
            : ((this._y = 0), (this._z = Math.atan2(c, r)));
        break;
      case "ZYX":
        (this._y = Math.asin(-Be(d, -1, 1))),
          Math.abs(d) < 0.9999999
            ? ((this._x = Math.atan2(f, _)), (this._z = Math.atan2(c, r)))
            : ((this._x = 0), (this._z = Math.atan2(-a, l)));
        break;
      case "YZX":
        (this._z = Math.asin(Be(c, -1, 1))),
          Math.abs(c) < 0.9999999
            ? ((this._x = Math.atan2(-u, l)), (this._y = Math.atan2(-d, r)))
            : ((this._x = 0), (this._y = Math.atan2(o, _)));
        break;
      case "XZY":
        (this._z = Math.asin(-Be(a, -1, 1))),
          Math.abs(a) < 0.9999999
            ? ((this._x = Math.atan2(f, l)), (this._y = Math.atan2(o, r)))
            : ((this._x = Math.atan2(-u, _)), (this._y = 0));
        break;
      default:
        we(
          "Euler: .setFromRotationMatrix() encountered an unknown order: " + t
        );
    }
    return (this._order = t), n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return (
      Ga.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Ga, t, n)
    );
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return Ha.setFromEuler(this), this.setFromQuaternion(Ha, e);
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._order === this._order
    );
  }
  fromArray(e) {
    return (
      (this._x = e[0]),
      (this._y = e[1]),
      (this._z = e[2]),
      e[3] !== void 0 && (this._order = e[3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._order),
      e
    );
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
sn.DEFAULT_ORDER = "XYZ";
class Qo {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = ((1 << e) | 0) >>> 0;
  }
  enable(e) {
    this.mask |= (1 << e) | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= (1 << e) | 0;
  }
  disable(e) {
    this.mask &= ~((1 << e) | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & ((1 << e) | 0)) !== 0;
  }
}
let Dc = 0;
const ka = new U(),
  jn = new Gn(),
  cn = new rt(),
  Ki = new U(),
  Mi = new U(),
  Lc = new U(),
  Ic = new Gn(),
  Wa = new U(1, 0, 0),
  Xa = new U(0, 1, 0),
  Ya = new U(0, 0, 1),
  qa = { type: "added" },
  Uc = { type: "removed" },
  $n = { type: "childadded", child: null },
  Gs = { type: "childremoved", child: null };
class Mt extends Hn {
  constructor() {
    super(),
      (this.isObject3D = !0),
      Object.defineProperty(this, "id", { value: Dc++ }),
      (this.uuid = Li()),
      (this.name = ""),
      (this.type = "Object3D"),
      (this.parent = null),
      (this.children = []),
      (this.up = Mt.DEFAULT_UP.clone());
    const e = new U(),
      t = new sn(),
      n = new Gn(),
      s = new U(1, 1, 1);
    function r() {
      n.setFromEuler(t, !1);
    }
    function a() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(r),
      n._onChange(a),
      Object.defineProperties(this, {
        position: { configurable: !0, enumerable: !0, value: e },
        rotation: { configurable: !0, enumerable: !0, value: t },
        quaternion: { configurable: !0, enumerable: !0, value: n },
        scale: { configurable: !0, enumerable: !0, value: s },
        modelViewMatrix: { value: new rt() },
        normalMatrix: { value: new De() },
      }),
      (this.matrix = new rt()),
      (this.matrixWorld = new rt()),
      (this.matrixAutoUpdate = Mt.DEFAULT_MATRIX_AUTO_UPDATE),
      (this.matrixWorldAutoUpdate = Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE),
      (this.matrixWorldNeedsUpdate = !1),
      (this.layers = new Qo()),
      (this.visible = !0),
      (this.castShadow = !1),
      (this.receiveShadow = !1),
      (this.frustumCulled = !0),
      (this.renderOrder = 0),
      (this.animations = []),
      (this.customDepthMaterial = void 0),
      (this.customDistanceMaterial = void 0),
      (this.userData = {});
  }
  onBeforeShadow() {}
  onAfterShadow() {}
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      this.matrix.premultiply(e),
      this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return jn.setFromAxisAngle(e, t), this.quaternion.multiply(jn), this;
  }
  rotateOnWorldAxis(e, t) {
    return jn.setFromAxisAngle(e, t), this.quaternion.premultiply(jn), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(Wa, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Xa, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(Ya, e);
  }
  translateOnAxis(e, t) {
    return (
      ka.copy(e).applyQuaternion(this.quaternion),
      this.position.add(ka.multiplyScalar(t)),
      this
    );
  }
  translateX(e) {
    return this.translateOnAxis(Wa, e);
  }
  translateY(e) {
    return this.translateOnAxis(Xa, e);
  }
  translateZ(e) {
    return this.translateOnAxis(Ya, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      e.applyMatrix4(cn.copy(this.matrixWorld).invert())
    );
  }
  lookAt(e, t, n) {
    e.isVector3 ? Ki.copy(e) : Ki.set(e, t, n);
    const s = this.parent;
    this.updateWorldMatrix(!0, !1),
      Mi.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight
        ? cn.lookAt(Mi, Ki, this.up)
        : cn.lookAt(Ki, Mi, this.up),
      this.quaternion.setFromRotationMatrix(cn),
      s &&
        (cn.extractRotation(s.matrixWorld),
        jn.setFromRotationMatrix(cn),
        this.quaternion.premultiply(jn.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return e === this
      ? (We("Object3D.add: object can't be added as a child of itself.", e),
        this)
      : (e && e.isObject3D
          ? (e.removeFromParent(),
            (e.parent = this),
            this.children.push(e),
            e.dispatchEvent(qa),
            ($n.child = e),
            this.dispatchEvent($n),
            ($n.child = null))
          : We("Object3D.add: object not an instance of THREE.Object3D.", e),
        this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return (
      t !== -1 &&
        ((e.parent = null),
        this.children.splice(t, 1),
        e.dispatchEvent(Uc),
        (Gs.child = e),
        this.dispatchEvent(Gs),
        (Gs.child = null)),
      this
    );
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      cn.copy(this.matrixWorld).invert(),
      e.parent !== null &&
        (e.parent.updateWorldMatrix(!0, !1), cn.multiply(e.parent.matrixWorld)),
      e.applyMatrix4(cn),
      e.removeFromParent(),
      (e.parent = this),
      this.children.push(e),
      e.updateWorldMatrix(!1, !0),
      e.dispatchEvent(qa),
      ($n.child = e),
      this.dispatchEvent($n),
      ($n.child = null),
      this
    );
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, s = this.children.length; n < s; n++) {
      const a = this.children[n].getObjectByProperty(e, t);
      if (a !== void 0) return a;
    }
  }
  getObjectsByProperty(e, t, n = []) {
    this[e] === t && n.push(this);
    const s = this.children;
    for (let r = 0, a = s.length; r < a; r++)
      s[r].getObjectsByProperty(e, t, n);
    return n;
  }
  getWorldPosition(e) {
    return (
      this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld)
    );
  }
  getWorldQuaternion(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Mi, e, Lc), e
    );
  }
  getWorldScale(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Mi, Ic, e), e
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {}
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, s = t.length; n < s; n++) t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, s = t.length; n < s; n++) t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale),
      (this.matrixWorldNeedsUpdate = !0);
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || e) &&
        (this.matrixWorldAutoUpdate === !0 &&
          (this.parent === null
            ? this.matrixWorld.copy(this.matrix)
            : this.matrixWorld.multiplyMatrices(
                this.parent.matrixWorld,
                this.matrix
              )),
        (this.matrixWorldNeedsUpdate = !1),
        (e = !0));
    const t = this.children;
    for (let n = 0, s = t.length; n < s; n++) t[n].updateMatrixWorld(e);
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (
      (e === !0 && n !== null && n.updateWorldMatrix(!0, !1),
      this.matrixAutoUpdate && this.updateMatrix(),
      this.matrixWorldAutoUpdate === !0 &&
        (this.parent === null
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix
            )),
      t === !0)
    ) {
      const s = this.children;
      for (let r = 0, a = s.length; r < a; r++) s[r].updateWorldMatrix(!1, !0);
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string",
      n = {};
    t &&
      ((e = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {},
      }),
      (n.metadata = {
        version: 4.7,
        type: "Object",
        generator: "Object3D.toJSON",
      }));
    const s = {};
    (s.uuid = this.uuid),
      (s.type = this.type),
      this.name !== "" && (s.name = this.name),
      this.castShadow === !0 && (s.castShadow = !0),
      this.receiveShadow === !0 && (s.receiveShadow = !0),
      this.visible === !1 && (s.visible = !1),
      this.frustumCulled === !1 && (s.frustumCulled = !1),
      this.renderOrder !== 0 && (s.renderOrder = this.renderOrder),
      Object.keys(this.userData).length > 0 && (s.userData = this.userData),
      (s.layers = this.layers.mask),
      (s.matrix = this.matrix.toArray()),
      (s.up = this.up.toArray()),
      this.matrixAutoUpdate === !1 && (s.matrixAutoUpdate = !1),
      this.isInstancedMesh &&
        ((s.type = "InstancedMesh"),
        (s.count = this.count),
        (s.instanceMatrix = this.instanceMatrix.toJSON()),
        this.instanceColor !== null &&
          (s.instanceColor = this.instanceColor.toJSON())),
      this.isBatchedMesh &&
        ((s.type = "BatchedMesh"),
        (s.perObjectFrustumCulled = this.perObjectFrustumCulled),
        (s.sortObjects = this.sortObjects),
        (s.drawRanges = this._drawRanges),
        (s.reservedRanges = this._reservedRanges),
        (s.geometryInfo = this._geometryInfo.map((o) => ({
          ...o,
          boundingBox: o.boundingBox ? o.boundingBox.toJSON() : void 0,
          boundingSphere: o.boundingSphere ? o.boundingSphere.toJSON() : void 0,
        }))),
        (s.instanceInfo = this._instanceInfo.map((o) => ({ ...o }))),
        (s.availableInstanceIds = this._availableInstanceIds.slice()),
        (s.availableGeometryIds = this._availableGeometryIds.slice()),
        (s.nextIndexStart = this._nextIndexStart),
        (s.nextVertexStart = this._nextVertexStart),
        (s.geometryCount = this._geometryCount),
        (s.maxInstanceCount = this._maxInstanceCount),
        (s.maxVertexCount = this._maxVertexCount),
        (s.maxIndexCount = this._maxIndexCount),
        (s.geometryInitialized = this._geometryInitialized),
        (s.matricesTexture = this._matricesTexture.toJSON(e)),
        (s.indirectTexture = this._indirectTexture.toJSON(e)),
        this._colorsTexture !== null &&
          (s.colorsTexture = this._colorsTexture.toJSON(e)),
        this.boundingSphere !== null &&
          (s.boundingSphere = this.boundingSphere.toJSON()),
        this.boundingBox !== null &&
          (s.boundingBox = this.boundingBox.toJSON()));
    function r(o, c) {
      return o[c.uuid] === void 0 && (o[c.uuid] = c.toJSON(e)), c.uuid;
    }
    if (this.isScene)
      this.background &&
        (this.background.isColor
          ? (s.background = this.background.toJSON())
          : this.background.isTexture &&
            (s.background = this.background.toJSON(e).uuid)),
        this.environment &&
          this.environment.isTexture &&
          this.environment.isRenderTargetTexture !== !0 &&
          (s.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      s.geometry = r(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const c = o.shapes;
        if (Array.isArray(c))
          for (let l = 0, u = c.length; l < u; l++) {
            const d = c[l];
            r(e.shapes, d);
          }
        else r(e.shapes, c);
      }
    }
    if (
      (this.isSkinnedMesh &&
        ((s.bindMode = this.bindMode),
        (s.bindMatrix = this.bindMatrix.toArray()),
        this.skeleton !== void 0 &&
          (r(e.skeletons, this.skeleton), (s.skeleton = this.skeleton.uuid))),
      this.material !== void 0)
    )
      if (Array.isArray(this.material)) {
        const o = [];
        for (let c = 0, l = this.material.length; c < l; c++)
          o.push(r(e.materials, this.material[c]));
        s.material = o;
      } else s.material = r(e.materials, this.material);
    if (this.children.length > 0) {
      s.children = [];
      for (let o = 0; o < this.children.length; o++)
        s.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      s.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const c = this.animations[o];
        s.animations.push(r(e.animations, c));
      }
    }
    if (t) {
      const o = a(e.geometries),
        c = a(e.materials),
        l = a(e.textures),
        u = a(e.images),
        d = a(e.shapes),
        f = a(e.skeletons),
        _ = a(e.animations),
        v = a(e.nodes);
      o.length > 0 && (n.geometries = o),
        c.length > 0 && (n.materials = c),
        l.length > 0 && (n.textures = l),
        u.length > 0 && (n.images = u),
        d.length > 0 && (n.shapes = d),
        f.length > 0 && (n.skeletons = f),
        _.length > 0 && (n.animations = _),
        v.length > 0 && (n.nodes = v);
    }
    return (n.object = s), n;
    function a(o) {
      const c = [];
      for (const l in o) {
        const u = o[l];
        delete u.metadata, c.push(u);
      }
      return c;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (
      ((this.name = e.name),
      this.up.copy(e.up),
      this.position.copy(e.position),
      (this.rotation.order = e.rotation.order),
      this.quaternion.copy(e.quaternion),
      this.scale.copy(e.scale),
      this.matrix.copy(e.matrix),
      this.matrixWorld.copy(e.matrixWorld),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      (this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate),
      (this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate),
      (this.layers.mask = e.layers.mask),
      (this.visible = e.visible),
      (this.castShadow = e.castShadow),
      (this.receiveShadow = e.receiveShadow),
      (this.frustumCulled = e.frustumCulled),
      (this.renderOrder = e.renderOrder),
      (this.animations = e.animations.slice()),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      t === !0)
    )
      for (let n = 0; n < e.children.length; n++) {
        const s = e.children[n];
        this.add(s.clone());
      }
    return this;
  }
}
Mt.DEFAULT_UP = new U(0, 1, 0);
Mt.DEFAULT_MATRIX_AUTO_UPDATE = !0;
Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const Xt = new U(),
  hn = new U(),
  Hs = new U(),
  un = new U(),
  Jn = new U(),
  Qn = new U(),
  Ka = new U(),
  ks = new U(),
  Ws = new U(),
  Xs = new U(),
  Ys = new lt(),
  qs = new lt(),
  Ks = new lt();
class Yt {
  constructor(e = new U(), t = new U(), n = new U()) {
    (this.a = e), (this.b = t), (this.c = n);
  }
  static getNormal(e, t, n, s) {
    s.subVectors(n, t), Xt.subVectors(e, t), s.cross(Xt);
    const r = s.lengthSq();
    return r > 0 ? s.multiplyScalar(1 / Math.sqrt(r)) : s.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, s, r) {
    Xt.subVectors(s, t), hn.subVectors(n, t), Hs.subVectors(e, t);
    const a = Xt.dot(Xt),
      o = Xt.dot(hn),
      c = Xt.dot(Hs),
      l = hn.dot(hn),
      u = hn.dot(Hs),
      d = a * l - o * o;
    if (d === 0) return r.set(0, 0, 0), null;
    const f = 1 / d,
      _ = (l * c - o * u) * f,
      v = (a * u - o * c) * f;
    return r.set(1 - _ - v, v, _);
  }
  static containsPoint(e, t, n, s) {
    return this.getBarycoord(e, t, n, s, un) === null
      ? !1
      : un.x >= 0 && un.y >= 0 && un.x + un.y <= 1;
  }
  static getInterpolation(e, t, n, s, r, a, o, c) {
    return this.getBarycoord(e, t, n, s, un) === null
      ? ((c.x = 0),
        (c.y = 0),
        "z" in c && (c.z = 0),
        "w" in c && (c.w = 0),
        null)
      : (c.setScalar(0),
        c.addScaledVector(r, un.x),
        c.addScaledVector(a, un.y),
        c.addScaledVector(o, un.z),
        c);
  }
  static getInterpolatedAttribute(e, t, n, s, r, a) {
    return (
      Ys.setScalar(0),
      qs.setScalar(0),
      Ks.setScalar(0),
      Ys.fromBufferAttribute(e, t),
      qs.fromBufferAttribute(e, n),
      Ks.fromBufferAttribute(e, s),
      a.setScalar(0),
      a.addScaledVector(Ys, r.x),
      a.addScaledVector(qs, r.y),
      a.addScaledVector(Ks, r.z),
      a
    );
  }
  static isFrontFacing(e, t, n, s) {
    return Xt.subVectors(n, t), hn.subVectors(e, t), Xt.cross(hn).dot(s) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, s) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[s]), this;
  }
  setFromAttributeAndIndices(e, t, n, s) {
    return (
      this.a.fromBufferAttribute(e, t),
      this.b.fromBufferAttribute(e, n),
      this.c.fromBufferAttribute(e, s),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return (
      Xt.subVectors(this.c, this.b),
      hn.subVectors(this.a, this.b),
      Xt.cross(hn).length() * 0.5
    );
  }
  getMidpoint(e) {
    return e
      .addVectors(this.a, this.b)
      .add(this.c)
      .multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Yt.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Yt.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getInterpolation(e, t, n, s, r) {
    return Yt.getInterpolation(e, this.a, this.b, this.c, t, n, s, r);
  }
  containsPoint(e) {
    return Yt.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Yt.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a,
      s = this.b,
      r = this.c;
    let a, o;
    Jn.subVectors(s, n), Qn.subVectors(r, n), ks.subVectors(e, n);
    const c = Jn.dot(ks),
      l = Qn.dot(ks);
    if (c <= 0 && l <= 0) return t.copy(n);
    Ws.subVectors(e, s);
    const u = Jn.dot(Ws),
      d = Qn.dot(Ws);
    if (u >= 0 && d <= u) return t.copy(s);
    const f = c * d - u * l;
    if (f <= 0 && c >= 0 && u <= 0)
      return (a = c / (c - u)), t.copy(n).addScaledVector(Jn, a);
    Xs.subVectors(e, r);
    const _ = Jn.dot(Xs),
      v = Qn.dot(Xs);
    if (v >= 0 && _ <= v) return t.copy(r);
    const M = _ * l - c * v;
    if (M <= 0 && l >= 0 && v <= 0)
      return (o = l / (l - v)), t.copy(n).addScaledVector(Qn, o);
    const p = u * v - _ * d;
    if (p <= 0 && d - u >= 0 && _ - v >= 0)
      return (
        Ka.subVectors(r, s),
        (o = (d - u) / (d - u + (_ - v))),
        t.copy(s).addScaledVector(Ka, o)
      );
    const h = 1 / (p + M + f);
    return (
      (a = M * h),
      (o = f * h),
      t.copy(n).addScaledVector(Jn, a).addScaledVector(Qn, o)
    );
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const el = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  },
  En = { h: 0, s: 0, l: 0 },
  Zi = { h: 0, s: 0, l: 0 };
function Zs(i, e, t) {
  return (
    t < 0 && (t += 1),
    t > 1 && (t -= 1),
    t < 1 / 6
      ? i + (e - i) * 6 * t
      : t < 1 / 2
      ? e
      : t < 2 / 3
      ? i + (e - i) * 6 * (2 / 3 - t)
      : i
  );
}
class ze {
  constructor(e, t, n) {
    return (
      (this.isColor = !0),
      (this.r = 1),
      (this.g = 1),
      (this.b = 1),
      this.set(e, t, n)
    );
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const s = e;
      s && s.isColor
        ? this.copy(s)
        : typeof s == "number"
        ? this.setHex(s)
        : typeof s == "string" && this.setStyle(s);
    } else this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return (this.r = e), (this.g = e), (this.b = e), this;
  }
  setHex(e, t = Ht) {
    return (
      (e = Math.floor(e)),
      (this.r = ((e >> 16) & 255) / 255),
      (this.g = ((e >> 8) & 255) / 255),
      (this.b = (e & 255) / 255),
      Ge.colorSpaceToWorking(this, t),
      this
    );
  }
  setRGB(e, t, n, s = Ge.workingColorSpace) {
    return (
      (this.r = e),
      (this.g = t),
      (this.b = n),
      Ge.colorSpaceToWorking(this, s),
      this
    );
  }
  setHSL(e, t, n, s = Ge.workingColorSpace) {
    if (((e = Mc(e, 1)), (t = Be(t, 0, 1)), (n = Be(n, 0, 1)), t === 0))
      this.r = this.g = this.b = n;
    else {
      const r = n <= 0.5 ? n * (1 + t) : n + t - n * t,
        a = 2 * n - r;
      (this.r = Zs(a, r, e + 1 / 3)),
        (this.g = Zs(a, r, e)),
        (this.b = Zs(a, r, e - 1 / 3));
    }
    return Ge.colorSpaceToWorking(this, s), this;
  }
  setStyle(e, t = Ht) {
    function n(r) {
      r !== void 0 &&
        parseFloat(r) < 1 &&
        we("Color: Alpha component of " + e + " will be ignored.");
    }
    let s;
    if ((s = /^(\w+)\(([^\)]*)\)/.exec(e))) {
      let r;
      const a = s[1],
        o = s[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (
            (r =
              /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o
              ))
          )
            return (
              n(r[4]),
              this.setRGB(
                Math.min(255, parseInt(r[1], 10)) / 255,
                Math.min(255, parseInt(r[2], 10)) / 255,
                Math.min(255, parseInt(r[3], 10)) / 255,
                t
              )
            );
          if (
            (r =
              /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o
              ))
          )
            return (
              n(r[4]),
              this.setRGB(
                Math.min(100, parseInt(r[1], 10)) / 100,
                Math.min(100, parseInt(r[2], 10)) / 100,
                Math.min(100, parseInt(r[3], 10)) / 100,
                t
              )
            );
          break;
        case "hsl":
        case "hsla":
          if (
            (r =
              /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o
              ))
          )
            return (
              n(r[4]),
              this.setHSL(
                parseFloat(r[1]) / 360,
                parseFloat(r[2]) / 100,
                parseFloat(r[3]) / 100,
                t
              )
            );
          break;
        default:
          we("Color: Unknown color model " + e);
      }
    } else if ((s = /^\#([A-Fa-f\d]+)$/.exec(e))) {
      const r = s[1],
        a = r.length;
      if (a === 3)
        return this.setRGB(
          parseInt(r.charAt(0), 16) / 15,
          parseInt(r.charAt(1), 16) / 15,
          parseInt(r.charAt(2), 16) / 15,
          t
        );
      if (a === 6) return this.setHex(parseInt(r, 16), t);
      we("Color: Invalid hex color " + e);
    } else if (e && e.length > 0) return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = Ht) {
    const n = el[e.toLowerCase()];
    return (
      n !== void 0 ? this.setHex(n, t) : we("Color: Unknown color " + e), this
    );
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return (this.r = e.r), (this.g = e.g), (this.b = e.b), this;
  }
  copySRGBToLinear(e) {
    return (this.r = mn(e.r)), (this.g = mn(e.g)), (this.b = mn(e.b)), this;
  }
  copyLinearToSRGB(e) {
    return (this.r = oi(e.r)), (this.g = oi(e.g)), (this.b = oi(e.b)), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Ht) {
    return (
      Ge.workingToColorSpace(Et.copy(this), e),
      Math.round(Be(Et.r * 255, 0, 255)) * 65536 +
        Math.round(Be(Et.g * 255, 0, 255)) * 256 +
        Math.round(Be(Et.b * 255, 0, 255))
    );
  }
  getHexString(e = Ht) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = Ge.workingColorSpace) {
    Ge.workingToColorSpace(Et.copy(this), t);
    const n = Et.r,
      s = Et.g,
      r = Et.b,
      a = Math.max(n, s, r),
      o = Math.min(n, s, r);
    let c, l;
    const u = (o + a) / 2;
    if (o === a) (c = 0), (l = 0);
    else {
      const d = a - o;
      switch (((l = u <= 0.5 ? d / (a + o) : d / (2 - a - o)), a)) {
        case n:
          c = (s - r) / d + (s < r ? 6 : 0);
          break;
        case s:
          c = (r - n) / d + 2;
          break;
        case r:
          c = (n - s) / d + 4;
          break;
      }
      c /= 6;
    }
    return (e.h = c), (e.s = l), (e.l = u), e;
  }
  getRGB(e, t = Ge.workingColorSpace) {
    return (
      Ge.workingToColorSpace(Et.copy(this), t),
      (e.r = Et.r),
      (e.g = Et.g),
      (e.b = Et.b),
      e
    );
  }
  getStyle(e = Ht) {
    Ge.workingToColorSpace(Et.copy(this), e);
    const t = Et.r,
      n = Et.g,
      s = Et.b;
    return e !== Ht
      ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`
      : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(
          s * 255
        )})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(En), this.setHSL(En.h + e, En.s + t, En.l + n);
  }
  add(e) {
    return (this.r += e.r), (this.g += e.g), (this.b += e.b), this;
  }
  addColors(e, t) {
    return (
      (this.r = e.r + t.r), (this.g = e.g + t.g), (this.b = e.b + t.b), this
    );
  }
  addScalar(e) {
    return (this.r += e), (this.g += e), (this.b += e), this;
  }
  sub(e) {
    return (
      (this.r = Math.max(0, this.r - e.r)),
      (this.g = Math.max(0, this.g - e.g)),
      (this.b = Math.max(0, this.b - e.b)),
      this
    );
  }
  multiply(e) {
    return (this.r *= e.r), (this.g *= e.g), (this.b *= e.b), this;
  }
  multiplyScalar(e) {
    return (this.r *= e), (this.g *= e), (this.b *= e), this;
  }
  lerp(e, t) {
    return (
      (this.r += (e.r - this.r) * t),
      (this.g += (e.g - this.g) * t),
      (this.b += (e.b - this.b) * t),
      this
    );
  }
  lerpColors(e, t, n) {
    return (
      (this.r = e.r + (t.r - e.r) * n),
      (this.g = e.g + (t.g - e.g) * n),
      (this.b = e.b + (t.b - e.b) * n),
      this
    );
  }
  lerpHSL(e, t) {
    this.getHSL(En), e.getHSL(Zi);
    const n = Ds(En.h, Zi.h, t),
      s = Ds(En.s, Zi.s, t),
      r = Ds(En.l, Zi.l, t);
    return this.setHSL(n, s, r), this;
  }
  setFromVector3(e) {
    return (this.r = e.x), (this.g = e.y), (this.b = e.z), this;
  }
  applyMatrix3(e) {
    const t = this.r,
      n = this.g,
      s = this.b,
      r = e.elements;
    return (
      (this.r = r[0] * t + r[3] * n + r[6] * s),
      (this.g = r[1] * t + r[4] * n + r[7] * s),
      (this.b = r[2] * t + r[5] * n + r[8] * s),
      this
    );
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return (this.r = e[t]), (this.g = e[t + 1]), (this.b = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.r), (e[t + 1] = this.g), (e[t + 2] = this.b), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.r = e.getX(t)), (this.g = e.getY(t)), (this.b = e.getZ(t)), this
    );
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const Et = new ze();
ze.NAMES = el;
let Nc = 0;
class fi extends Hn {
  constructor() {
    super(),
      (this.isMaterial = !0),
      Object.defineProperty(this, "id", { value: Nc++ }),
      (this.uuid = Li()),
      (this.name = ""),
      (this.type = "Material"),
      (this.blending = ai),
      (this.side = wn),
      (this.vertexColors = !1),
      (this.opacity = 1),
      (this.transparent = !1),
      (this.alphaHash = !1),
      (this.blendSrc = cr),
      (this.blendDst = hr),
      (this.blendEquation = Fn),
      (this.blendSrcAlpha = null),
      (this.blendDstAlpha = null),
      (this.blendEquationAlpha = null),
      (this.blendColor = new ze(0, 0, 0)),
      (this.blendAlpha = 0),
      (this.depthFunc = li),
      (this.depthTest = !0),
      (this.depthWrite = !0),
      (this.stencilWriteMask = 255),
      (this.stencilFunc = Ia),
      (this.stencilRef = 0),
      (this.stencilFuncMask = 255),
      (this.stencilFail = Wn),
      (this.stencilZFail = Wn),
      (this.stencilZPass = Wn),
      (this.stencilWrite = !1),
      (this.clippingPlanes = null),
      (this.clipIntersection = !1),
      (this.clipShadows = !1),
      (this.shadowSide = null),
      (this.colorWrite = !0),
      (this.precision = null),
      (this.polygonOffset = !1),
      (this.polygonOffsetFactor = 0),
      (this.polygonOffsetUnits = 0),
      (this.dithering = !1),
      (this.alphaToCoverage = !1),
      (this.premultipliedAlpha = !1),
      (this.forceSinglePass = !1),
      (this.allowOverride = !0),
      (this.visible = !0),
      (this.toneMapped = !0),
      (this.userData = {}),
      (this.version = 0),
      (this._alphaTest = 0);
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, (this._alphaTest = e);
  }
  onBeforeRender() {}
  onBeforeCompile() {}
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          we(`Material: parameter '${t}' has value of undefined.`);
          continue;
        }
        const s = this[t];
        if (s === void 0) {
          we(`Material: '${t}' is not a property of THREE.${this.type}.`);
          continue;
        }
        s && s.isColor
          ? s.set(n)
          : s && s.isVector3 && n && n.isVector3
          ? s.copy(n)
          : (this[t] = n);
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = { textures: {}, images: {} });
    const n = {
      metadata: {
        version: 4.7,
        type: "Material",
        generator: "Material.toJSON",
      },
    };
    (n.uuid = this.uuid),
      (n.type = this.type),
      this.name !== "" && (n.name = this.name),
      this.color && this.color.isColor && (n.color = this.color.getHex()),
      this.roughness !== void 0 && (n.roughness = this.roughness),
      this.metalness !== void 0 && (n.metalness = this.metalness),
      this.sheen !== void 0 && (n.sheen = this.sheen),
      this.sheenColor &&
        this.sheenColor.isColor &&
        (n.sheenColor = this.sheenColor.getHex()),
      this.sheenRoughness !== void 0 &&
        (n.sheenRoughness = this.sheenRoughness),
      this.emissive &&
        this.emissive.isColor &&
        (n.emissive = this.emissive.getHex()),
      this.emissiveIntensity !== void 0 &&
        this.emissiveIntensity !== 1 &&
        (n.emissiveIntensity = this.emissiveIntensity),
      this.specular &&
        this.specular.isColor &&
        (n.specular = this.specular.getHex()),
      this.specularIntensity !== void 0 &&
        (n.specularIntensity = this.specularIntensity),
      this.specularColor &&
        this.specularColor.isColor &&
        (n.specularColor = this.specularColor.getHex()),
      this.shininess !== void 0 && (n.shininess = this.shininess),
      this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat),
      this.clearcoatRoughness !== void 0 &&
        (n.clearcoatRoughness = this.clearcoatRoughness),
      this.clearcoatMap &&
        this.clearcoatMap.isTexture &&
        (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
      this.clearcoatRoughnessMap &&
        this.clearcoatRoughnessMap.isTexture &&
        (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
      this.clearcoatNormalMap &&
        this.clearcoatNormalMap.isTexture &&
        ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid),
        (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
      this.sheenColorMap &&
        this.sheenColorMap.isTexture &&
        (n.sheenColorMap = this.sheenColorMap.toJSON(e).uuid),
      this.sheenRoughnessMap &&
        this.sheenRoughnessMap.isTexture &&
        (n.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(e).uuid),
      this.dispersion !== void 0 && (n.dispersion = this.dispersion),
      this.iridescence !== void 0 && (n.iridescence = this.iridescence),
      this.iridescenceIOR !== void 0 &&
        (n.iridescenceIOR = this.iridescenceIOR),
      this.iridescenceThicknessRange !== void 0 &&
        (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
      this.iridescenceMap &&
        this.iridescenceMap.isTexture &&
        (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
      this.iridescenceThicknessMap &&
        this.iridescenceThicknessMap.isTexture &&
        (n.iridescenceThicknessMap =
          this.iridescenceThicknessMap.toJSON(e).uuid),
      this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy),
      this.anisotropyRotation !== void 0 &&
        (n.anisotropyRotation = this.anisotropyRotation),
      this.anisotropyMap &&
        this.anisotropyMap.isTexture &&
        (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid),
      this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid),
      this.matcap &&
        this.matcap.isTexture &&
        (n.matcap = this.matcap.toJSON(e).uuid),
      this.alphaMap &&
        this.alphaMap.isTexture &&
        (n.alphaMap = this.alphaMap.toJSON(e).uuid),
      this.lightMap &&
        this.lightMap.isTexture &&
        ((n.lightMap = this.lightMap.toJSON(e).uuid),
        (n.lightMapIntensity = this.lightMapIntensity)),
      this.aoMap &&
        this.aoMap.isTexture &&
        ((n.aoMap = this.aoMap.toJSON(e).uuid),
        (n.aoMapIntensity = this.aoMapIntensity)),
      this.bumpMap &&
        this.bumpMap.isTexture &&
        ((n.bumpMap = this.bumpMap.toJSON(e).uuid),
        (n.bumpScale = this.bumpScale)),
      this.normalMap &&
        this.normalMap.isTexture &&
        ((n.normalMap = this.normalMap.toJSON(e).uuid),
        (n.normalMapType = this.normalMapType),
        (n.normalScale = this.normalScale.toArray())),
      this.displacementMap &&
        this.displacementMap.isTexture &&
        ((n.displacementMap = this.displacementMap.toJSON(e).uuid),
        (n.displacementScale = this.displacementScale),
        (n.displacementBias = this.displacementBias)),
      this.roughnessMap &&
        this.roughnessMap.isTexture &&
        (n.roughnessMap = this.roughnessMap.toJSON(e).uuid),
      this.metalnessMap &&
        this.metalnessMap.isTexture &&
        (n.metalnessMap = this.metalnessMap.toJSON(e).uuid),
      this.emissiveMap &&
        this.emissiveMap.isTexture &&
        (n.emissiveMap = this.emissiveMap.toJSON(e).uuid),
      this.specularMap &&
        this.specularMap.isTexture &&
        (n.specularMap = this.specularMap.toJSON(e).uuid),
      this.specularIntensityMap &&
        this.specularIntensityMap.isTexture &&
        (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
      this.specularColorMap &&
        this.specularColorMap.isTexture &&
        (n.specularColorMap = this.specularColorMap.toJSON(e).uuid),
      this.envMap &&
        this.envMap.isTexture &&
        ((n.envMap = this.envMap.toJSON(e).uuid),
        this.combine !== void 0 && (n.combine = this.combine)),
      this.envMapRotation !== void 0 &&
        (n.envMapRotation = this.envMapRotation.toArray()),
      this.envMapIntensity !== void 0 &&
        (n.envMapIntensity = this.envMapIntensity),
      this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity),
      this.refractionRatio !== void 0 &&
        (n.refractionRatio = this.refractionRatio),
      this.gradientMap &&
        this.gradientMap.isTexture &&
        (n.gradientMap = this.gradientMap.toJSON(e).uuid),
      this.transmission !== void 0 && (n.transmission = this.transmission),
      this.transmissionMap &&
        this.transmissionMap.isTexture &&
        (n.transmissionMap = this.transmissionMap.toJSON(e).uuid),
      this.thickness !== void 0 && (n.thickness = this.thickness),
      this.thicknessMap &&
        this.thicknessMap.isTexture &&
        (n.thicknessMap = this.thicknessMap.toJSON(e).uuid),
      this.attenuationDistance !== void 0 &&
        this.attenuationDistance !== 1 / 0 &&
        (n.attenuationDistance = this.attenuationDistance),
      this.attenuationColor !== void 0 &&
        (n.attenuationColor = this.attenuationColor.getHex()),
      this.size !== void 0 && (n.size = this.size),
      this.shadowSide !== null && (n.shadowSide = this.shadowSide),
      this.sizeAttenuation !== void 0 &&
        (n.sizeAttenuation = this.sizeAttenuation),
      this.blending !== ai && (n.blending = this.blending),
      this.side !== wn && (n.side = this.side),
      this.vertexColors === !0 && (n.vertexColors = !0),
      this.opacity < 1 && (n.opacity = this.opacity),
      this.transparent === !0 && (n.transparent = !0),
      this.blendSrc !== cr && (n.blendSrc = this.blendSrc),
      this.blendDst !== hr && (n.blendDst = this.blendDst),
      this.blendEquation !== Fn && (n.blendEquation = this.blendEquation),
      this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha),
      this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha),
      this.blendEquationAlpha !== null &&
        (n.blendEquationAlpha = this.blendEquationAlpha),
      this.blendColor &&
        this.blendColor.isColor &&
        (n.blendColor = this.blendColor.getHex()),
      this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha),
      this.depthFunc !== li && (n.depthFunc = this.depthFunc),
      this.depthTest === !1 && (n.depthTest = this.depthTest),
      this.depthWrite === !1 && (n.depthWrite = this.depthWrite),
      this.colorWrite === !1 && (n.colorWrite = this.colorWrite),
      this.stencilWriteMask !== 255 &&
        (n.stencilWriteMask = this.stencilWriteMask),
      this.stencilFunc !== Ia && (n.stencilFunc = this.stencilFunc),
      this.stencilRef !== 0 && (n.stencilRef = this.stencilRef),
      this.stencilFuncMask !== 255 &&
        (n.stencilFuncMask = this.stencilFuncMask),
      this.stencilFail !== Wn && (n.stencilFail = this.stencilFail),
      this.stencilZFail !== Wn && (n.stencilZFail = this.stencilZFail),
      this.stencilZPass !== Wn && (n.stencilZPass = this.stencilZPass),
      this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite),
      this.rotation !== void 0 &&
        this.rotation !== 0 &&
        (n.rotation = this.rotation),
      this.polygonOffset === !0 && (n.polygonOffset = !0),
      this.polygonOffsetFactor !== 0 &&
        (n.polygonOffsetFactor = this.polygonOffsetFactor),
      this.polygonOffsetUnits !== 0 &&
        (n.polygonOffsetUnits = this.polygonOffsetUnits),
      this.linewidth !== void 0 &&
        this.linewidth !== 1 &&
        (n.linewidth = this.linewidth),
      this.dashSize !== void 0 && (n.dashSize = this.dashSize),
      this.gapSize !== void 0 && (n.gapSize = this.gapSize),
      this.scale !== void 0 && (n.scale = this.scale),
      this.dithering === !0 && (n.dithering = !0),
      this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
      this.alphaHash === !0 && (n.alphaHash = !0),
      this.alphaToCoverage === !0 && (n.alphaToCoverage = !0),
      this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0),
      this.forceSinglePass === !0 && (n.forceSinglePass = !0),
      this.allowOverride === !1 && (n.allowOverride = !1),
      this.wireframe === !0 && (n.wireframe = !0),
      this.wireframeLinewidth > 1 &&
        (n.wireframeLinewidth = this.wireframeLinewidth),
      this.wireframeLinecap !== "round" &&
        (n.wireframeLinecap = this.wireframeLinecap),
      this.wireframeLinejoin !== "round" &&
        (n.wireframeLinejoin = this.wireframeLinejoin),
      this.flatShading === !0 && (n.flatShading = !0),
      this.visible === !1 && (n.visible = !1),
      this.toneMapped === !1 && (n.toneMapped = !1),
      this.fog === !1 && (n.fog = !1),
      Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function s(r) {
      const a = [];
      for (const o in r) {
        const c = r[o];
        delete c.metadata, a.push(c);
      }
      return a;
    }
    if (t) {
      const r = s(e.textures),
        a = s(e.images);
      r.length > 0 && (n.textures = r), a.length > 0 && (n.images = a);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.name = e.name),
      (this.blending = e.blending),
      (this.side = e.side),
      (this.vertexColors = e.vertexColors),
      (this.opacity = e.opacity),
      (this.transparent = e.transparent),
      (this.blendSrc = e.blendSrc),
      (this.blendDst = e.blendDst),
      (this.blendEquation = e.blendEquation),
      (this.blendSrcAlpha = e.blendSrcAlpha),
      (this.blendDstAlpha = e.blendDstAlpha),
      (this.blendEquationAlpha = e.blendEquationAlpha),
      this.blendColor.copy(e.blendColor),
      (this.blendAlpha = e.blendAlpha),
      (this.depthFunc = e.depthFunc),
      (this.depthTest = e.depthTest),
      (this.depthWrite = e.depthWrite),
      (this.stencilWriteMask = e.stencilWriteMask),
      (this.stencilFunc = e.stencilFunc),
      (this.stencilRef = e.stencilRef),
      (this.stencilFuncMask = e.stencilFuncMask),
      (this.stencilFail = e.stencilFail),
      (this.stencilZFail = e.stencilZFail),
      (this.stencilZPass = e.stencilZPass),
      (this.stencilWrite = e.stencilWrite);
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const s = t.length;
      n = new Array(s);
      for (let r = 0; r !== s; ++r) n[r] = t[r].clone();
    }
    return (
      (this.clippingPlanes = n),
      (this.clipIntersection = e.clipIntersection),
      (this.clipShadows = e.clipShadows),
      (this.shadowSide = e.shadowSide),
      (this.colorWrite = e.colorWrite),
      (this.precision = e.precision),
      (this.polygonOffset = e.polygonOffset),
      (this.polygonOffsetFactor = e.polygonOffsetFactor),
      (this.polygonOffsetUnits = e.polygonOffsetUnits),
      (this.dithering = e.dithering),
      (this.alphaTest = e.alphaTest),
      (this.alphaHash = e.alphaHash),
      (this.alphaToCoverage = e.alphaToCoverage),
      (this.premultipliedAlpha = e.premultipliedAlpha),
      (this.forceSinglePass = e.forceSinglePass),
      (this.allowOverride = e.allowOverride),
      (this.visible = e.visible),
      (this.toneMapped = e.toneMapped),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
class tl extends fi {
  constructor(e) {
    super(),
      (this.isMeshBasicMaterial = !0),
      (this.type = "MeshBasicMaterial"),
      (this.color = new ze(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapRotation = new sn()),
      (this.combine = Uo),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      this.envMapRotation.copy(e.envMapRotation),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const ut = new U(),
  ji = new Ce();
let Fc = 0;
class tn {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError(
        "THREE.BufferAttribute: array should be a Typed Array."
      );
    (this.isBufferAttribute = !0),
      Object.defineProperty(this, "id", { value: Fc++ }),
      (this.name = ""),
      (this.array = e),
      (this.itemSize = t),
      (this.count = e !== void 0 ? e.length / t : 0),
      (this.normalized = n),
      (this.usage = Ua),
      (this.updateRanges = []),
      (this.gpuType = $t),
      (this.version = 0);
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return (this.usage = e), this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.array = new e.array.constructor(e.array)),
      (this.itemSize = e.itemSize),
      (this.count = e.count),
      (this.normalized = e.normalized),
      (this.usage = e.usage),
      (this.gpuType = e.gpuType),
      this
    );
  }
  copyAt(e, t, n) {
    (e *= this.itemSize), (n *= t.itemSize);
    for (let s = 0, r = this.itemSize; s < r; s++)
      this.array[e + s] = t.array[n + s];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        ji.fromBufferAttribute(this, t),
          ji.applyMatrix3(e),
          this.setXY(t, ji.x, ji.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        ut.fromBufferAttribute(this, t),
          ut.applyMatrix3(e),
          this.setXYZ(t, ut.x, ut.y, ut.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ut.fromBufferAttribute(this, t),
        ut.applyMatrix4(e),
        this.setXYZ(t, ut.x, ut.y, ut.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ut.fromBufferAttribute(this, t),
        ut.applyNormalMatrix(e),
        this.setXYZ(t, ut.x, ut.y, ut.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ut.fromBufferAttribute(this, t),
        ut.transformDirection(e),
        this.setXYZ(t, ut.x, ut.y, ut.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = gi(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return (
      this.normalized && (n = Pt(n, this.array)),
      (this.array[e * this.itemSize + t] = n),
      this
    );
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = gi(t, this.array)), t;
  }
  setX(e, t) {
    return (
      this.normalized && (t = Pt(t, this.array)),
      (this.array[e * this.itemSize] = t),
      this
    );
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = gi(t, this.array)), t;
  }
  setY(e, t) {
    return (
      this.normalized && (t = Pt(t, this.array)),
      (this.array[e * this.itemSize + 1] = t),
      this
    );
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = gi(t, this.array)), t;
  }
  setZ(e, t) {
    return (
      this.normalized && (t = Pt(t, this.array)),
      (this.array[e * this.itemSize + 2] = t),
      this
    );
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = gi(t, this.array)), t;
  }
  setW(e, t) {
    return (
      this.normalized && (t = Pt(t, this.array)),
      (this.array[e * this.itemSize + 3] = t),
      this
    );
  }
  setXY(e, t, n) {
    return (
      (e *= this.itemSize),
      this.normalized && ((t = Pt(t, this.array)), (n = Pt(n, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      this
    );
  }
  setXYZ(e, t, n, s) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = Pt(t, this.array)),
        (n = Pt(n, this.array)),
        (s = Pt(s, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = s),
      this
    );
  }
  setXYZW(e, t, n, s, r) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = Pt(t, this.array)),
        (n = Pt(n, this.array)),
        (s = Pt(s, this.array)),
        (r = Pt(r, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = s),
      (this.array[e + 3] = r),
      this
    );
  }
  onUpload(e) {
    return (this.onUploadCallback = e), this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized,
    };
    return (
      this.name !== "" && (e.name = this.name),
      this.usage !== Ua && (e.usage = this.usage),
      e
    );
  }
}
class nl extends tn {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class il extends tn {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class ft extends tn {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let Oc = 0;
const Gt = new rt(),
  js = new Mt(),
  ei = new U(),
  Ft = new Ii(),
  Si = new Ii(),
  gt = new U();
class zt extends Hn {
  constructor() {
    super(),
      (this.isBufferGeometry = !0),
      Object.defineProperty(this, "id", { value: Oc++ }),
      (this.uuid = Li()),
      (this.name = ""),
      (this.type = "BufferGeometry"),
      (this.index = null),
      (this.indirect = null),
      (this.indirectOffset = 0),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.morphTargetsRelative = !1),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null),
      (this.drawRange = { start: 0, count: 1 / 0 }),
      (this.userData = {});
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return (
      Array.isArray(e)
        ? (this.index = new ($o(e) ? il : nl)(e, 1))
        : (this.index = e),
      this
    );
  }
  setIndirect(e, t = 0) {
    return (this.indirect = e), (this.indirectOffset = t), this;
  }
  getIndirect() {
    return this.indirect;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return (this.attributes[e] = t), this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({ start: e, count: t, materialIndex: n });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    (this.drawRange.start = e), (this.drawRange.count = t);
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), (t.needsUpdate = !0));
    const n = this.attributes.normal;
    if (n !== void 0) {
      const r = new De().getNormalMatrix(e);
      n.applyNormalMatrix(r), (n.needsUpdate = !0);
    }
    const s = this.attributes.tangent;
    return (
      s !== void 0 && (s.transformDirection(e), (s.needsUpdate = !0)),
      this.boundingBox !== null && this.computeBoundingBox(),
      this.boundingSphere !== null && this.computeBoundingSphere(),
      this
    );
  }
  applyQuaternion(e) {
    return Gt.makeRotationFromQuaternion(e), this.applyMatrix4(Gt), this;
  }
  rotateX(e) {
    return Gt.makeRotationX(e), this.applyMatrix4(Gt), this;
  }
  rotateY(e) {
    return Gt.makeRotationY(e), this.applyMatrix4(Gt), this;
  }
  rotateZ(e) {
    return Gt.makeRotationZ(e), this.applyMatrix4(Gt), this;
  }
  translate(e, t, n) {
    return Gt.makeTranslation(e, t, n), this.applyMatrix4(Gt), this;
  }
  scale(e, t, n) {
    return Gt.makeScale(e, t, n), this.applyMatrix4(Gt), this;
  }
  lookAt(e) {
    return js.lookAt(e), js.updateMatrix(), this.applyMatrix4(js.matrix), this;
  }
  center() {
    return (
      this.computeBoundingBox(),
      this.boundingBox.getCenter(ei).negate(),
      this.translate(ei.x, ei.y, ei.z),
      this
    );
  }
  setFromPoints(e) {
    const t = this.getAttribute("position");
    if (t === void 0) {
      const n = [];
      for (let s = 0, r = e.length; s < r; s++) {
        const a = e[s];
        n.push(a.x, a.y, a.z || 0);
      }
      this.setAttribute("position", new ft(n, 3));
    } else {
      const n = Math.min(e.length, t.count);
      for (let s = 0; s < n; s++) {
        const r = e[s];
        t.setXYZ(s, r.x, r.y, r.z || 0);
      }
      e.length > t.count &&
        we(
          "BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."
        ),
        (t.needsUpdate = !0);
    }
    return this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Ii());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      We(
        "BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",
        this
      ),
        this.boundingBox.set(
          new U(-1 / 0, -1 / 0, -1 / 0),
          new U(1 / 0, 1 / 0, 1 / 0)
        );
      return;
    }
    if (e !== void 0) {
      if ((this.boundingBox.setFromBufferAttribute(e), t))
        for (let n = 0, s = t.length; n < s; n++) {
          const r = t[n];
          Ft.setFromBufferAttribute(r),
            this.morphTargetsRelative
              ? (gt.addVectors(this.boundingBox.min, Ft.min),
                this.boundingBox.expandByPoint(gt),
                gt.addVectors(this.boundingBox.max, Ft.max),
                this.boundingBox.expandByPoint(gt))
              : (this.boundingBox.expandByPoint(Ft.min),
                this.boundingBox.expandByPoint(Ft.max));
        }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) ||
      isNaN(this.boundingBox.min.y) ||
      isNaN(this.boundingBox.min.z)) &&
      We(
        'BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
        this
      );
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Ts());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      We(
        "BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",
        this
      ),
        this.boundingSphere.set(new U(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if ((Ft.setFromBufferAttribute(e), t))
        for (let r = 0, a = t.length; r < a; r++) {
          const o = t[r];
          Si.setFromBufferAttribute(o),
            this.morphTargetsRelative
              ? (gt.addVectors(Ft.min, Si.min),
                Ft.expandByPoint(gt),
                gt.addVectors(Ft.max, Si.max),
                Ft.expandByPoint(gt))
              : (Ft.expandByPoint(Si.min), Ft.expandByPoint(Si.max));
        }
      Ft.getCenter(n);
      let s = 0;
      for (let r = 0, a = e.count; r < a; r++)
        gt.fromBufferAttribute(e, r),
          (s = Math.max(s, n.distanceToSquared(gt)));
      if (t)
        for (let r = 0, a = t.length; r < a; r++) {
          const o = t[r],
            c = this.morphTargetsRelative;
          for (let l = 0, u = o.count; l < u; l++)
            gt.fromBufferAttribute(o, l),
              c && (ei.fromBufferAttribute(e, l), gt.add(ei)),
              (s = Math.max(s, n.distanceToSquared(gt)));
        }
      (this.boundingSphere.radius = Math.sqrt(s)),
        isNaN(this.boundingSphere.radius) &&
          We(
            'BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
            this
          );
    }
  }
  computeTangents() {
    const e = this.index,
      t = this.attributes;
    if (
      e === null ||
      t.position === void 0 ||
      t.normal === void 0 ||
      t.uv === void 0
    ) {
      We(
        "BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"
      );
      return;
    }
    const n = t.position,
      s = t.normal,
      r = t.uv;
    this.hasAttribute("tangent") === !1 &&
      this.setAttribute("tangent", new tn(new Float32Array(4 * n.count), 4));
    const a = this.getAttribute("tangent"),
      o = [],
      c = [];
    for (let F = 0; F < n.count; F++) (o[F] = new U()), (c[F] = new U());
    const l = new U(),
      u = new U(),
      d = new U(),
      f = new Ce(),
      _ = new Ce(),
      v = new Ce(),
      M = new U(),
      p = new U();
    function h(F, g, S) {
      l.fromBufferAttribute(n, F),
        u.fromBufferAttribute(n, g),
        d.fromBufferAttribute(n, S),
        f.fromBufferAttribute(r, F),
        _.fromBufferAttribute(r, g),
        v.fromBufferAttribute(r, S),
        u.sub(l),
        d.sub(l),
        _.sub(f),
        v.sub(f);
      const P = 1 / (_.x * v.y - v.x * _.y);
      isFinite(P) &&
        (M.copy(u)
          .multiplyScalar(v.y)
          .addScaledVector(d, -_.y)
          .multiplyScalar(P),
        p
          .copy(d)
          .multiplyScalar(_.x)
          .addScaledVector(u, -v.x)
          .multiplyScalar(P),
        o[F].add(M),
        o[g].add(M),
        o[S].add(M),
        c[F].add(p),
        c[g].add(p),
        c[S].add(p));
    }
    let T = this.groups;
    T.length === 0 && (T = [{ start: 0, count: e.count }]);
    for (let F = 0, g = T.length; F < g; ++F) {
      const S = T[F],
        P = S.start,
        O = S.count;
      for (let B = P, X = P + O; B < X; B += 3)
        h(e.getX(B + 0), e.getX(B + 1), e.getX(B + 2));
    }
    const b = new U(),
      y = new U(),
      A = new U(),
      w = new U();
    function R(F) {
      A.fromBufferAttribute(s, F), w.copy(A);
      const g = o[F];
      b.copy(g),
        b.sub(A.multiplyScalar(A.dot(g))).normalize(),
        y.crossVectors(w, g);
      const P = y.dot(c[F]) < 0 ? -1 : 1;
      a.setXYZW(F, b.x, b.y, b.z, P);
    }
    for (let F = 0, g = T.length; F < g; ++F) {
      const S = T[F],
        P = S.start,
        O = S.count;
      for (let B = P, X = P + O; B < X; B += 3)
        R(e.getX(B + 0)), R(e.getX(B + 1)), R(e.getX(B + 2));
    }
  }
  computeVertexNormals() {
    const e = this.index,
      t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        (n = new tn(new Float32Array(t.count * 3), 3)),
          this.setAttribute("normal", n);
      else for (let f = 0, _ = n.count; f < _; f++) n.setXYZ(f, 0, 0, 0);
      const s = new U(),
        r = new U(),
        a = new U(),
        o = new U(),
        c = new U(),
        l = new U(),
        u = new U(),
        d = new U();
      if (e)
        for (let f = 0, _ = e.count; f < _; f += 3) {
          const v = e.getX(f + 0),
            M = e.getX(f + 1),
            p = e.getX(f + 2);
          s.fromBufferAttribute(t, v),
            r.fromBufferAttribute(t, M),
            a.fromBufferAttribute(t, p),
            u.subVectors(a, r),
            d.subVectors(s, r),
            u.cross(d),
            o.fromBufferAttribute(n, v),
            c.fromBufferAttribute(n, M),
            l.fromBufferAttribute(n, p),
            o.add(u),
            c.add(u),
            l.add(u),
            n.setXYZ(v, o.x, o.y, o.z),
            n.setXYZ(M, c.x, c.y, c.z),
            n.setXYZ(p, l.x, l.y, l.z);
        }
      else
        for (let f = 0, _ = t.count; f < _; f += 3)
          s.fromBufferAttribute(t, f + 0),
            r.fromBufferAttribute(t, f + 1),
            a.fromBufferAttribute(t, f + 2),
            u.subVectors(a, r),
            d.subVectors(s, r),
            u.cross(d),
            n.setXYZ(f + 0, u.x, u.y, u.z),
            n.setXYZ(f + 1, u.x, u.y, u.z),
            n.setXYZ(f + 2, u.x, u.y, u.z);
      this.normalizeNormals(), (n.needsUpdate = !0);
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      gt.fromBufferAttribute(e, t),
        gt.normalize(),
        e.setXYZ(t, gt.x, gt.y, gt.z);
  }
  toNonIndexed() {
    function e(o, c) {
      const l = o.array,
        u = o.itemSize,
        d = o.normalized,
        f = new l.constructor(c.length * u);
      let _ = 0,
        v = 0;
      for (let M = 0, p = c.length; M < p; M++) {
        o.isInterleavedBufferAttribute
          ? (_ = c[M] * o.data.stride + o.offset)
          : (_ = c[M] * u);
        for (let h = 0; h < u; h++) f[v++] = l[_++];
      }
      return new tn(f, u, d);
    }
    if (this.index === null)
      return (
        we(
          "BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."
        ),
        this
      );
    const t = new zt(),
      n = this.index.array,
      s = this.attributes;
    for (const o in s) {
      const c = s[o],
        l = e(c, n);
      t.setAttribute(o, l);
    }
    const r = this.morphAttributes;
    for (const o in r) {
      const c = [],
        l = r[o];
      for (let u = 0, d = l.length; u < d; u++) {
        const f = l[u],
          _ = e(f, n);
        c.push(_);
      }
      t.morphAttributes[o] = c;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, c = a.length; o < c; o++) {
      const l = a[o];
      t.addGroup(l.start, l.count, l.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.7,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON",
      },
    };
    if (
      ((e.uuid = this.uuid),
      (e.type = this.type),
      this.name !== "" && (e.name = this.name),
      Object.keys(this.userData).length > 0 && (e.userData = this.userData),
      this.parameters !== void 0)
    ) {
      const c = this.parameters;
      for (const l in c) c[l] !== void 0 && (e[l] = c[l]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null &&
      (e.data.index = {
        type: t.array.constructor.name,
        array: Array.prototype.slice.call(t.array),
      });
    const n = this.attributes;
    for (const c in n) {
      const l = n[c];
      e.data.attributes[c] = l.toJSON(e.data);
    }
    const s = {};
    let r = !1;
    for (const c in this.morphAttributes) {
      const l = this.morphAttributes[c],
        u = [];
      for (let d = 0, f = l.length; d < f; d++) {
        const _ = l[d];
        u.push(_.toJSON(e.data));
      }
      u.length > 0 && ((s[c] = u), (r = !0));
    }
    r &&
      ((e.data.morphAttributes = s),
      (e.data.morphTargetsRelative = this.morphTargetsRelative));
    const a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return o !== null && (e.data.boundingSphere = o.toJSON()), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null);
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone());
    const s = e.attributes;
    for (const l in s) {
      const u = s[l];
      this.setAttribute(l, u.clone(t));
    }
    const r = e.morphAttributes;
    for (const l in r) {
      const u = [],
        d = r[l];
      for (let f = 0, _ = d.length; f < _; f++) u.push(d[f].clone(t));
      this.morphAttributes[l] = u;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let l = 0, u = a.length; l < u; l++) {
      const d = a[l];
      this.addGroup(d.start, d.count, d.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const c = e.boundingSphere;
    return (
      c !== null && (this.boundingSphere = c.clone()),
      (this.drawRange.start = e.drawRange.start),
      (this.drawRange.count = e.drawRange.count),
      (this.userData = e.userData),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Za = new rt(),
  Ln = new fa(),
  $i = new Ts(),
  ja = new U(),
  Ji = new U(),
  Qi = new U(),
  es = new U(),
  $s = new U(),
  ts = new U(),
  $a = new U(),
  ns = new U();
class xt extends Mt {
  constructor(e = new zt(), t = new tl()) {
    super(),
      (this.isMesh = !0),
      (this.type = "Mesh"),
      (this.geometry = e),
      (this.material = t),
      (this.morphTargetDictionary = void 0),
      (this.morphTargetInfluences = void 0),
      (this.count = 1),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.morphTargetInfluences !== void 0 &&
        (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
      e.morphTargetDictionary !== void 0 &&
        (this.morphTargetDictionary = Object.assign(
          {},
          e.morphTargetDictionary
        )),
      (this.material = Array.isArray(e.material)
        ? e.material.slice()
        : e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const s = t[n[0]];
      if (s !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let r = 0, a = s.length; r < a; r++) {
          const o = s[r].name || String(r);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[o] = r);
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry,
      s = n.attributes.position,
      r = n.morphAttributes.position,
      a = n.morphTargetsRelative;
    t.fromBufferAttribute(s, e);
    const o = this.morphTargetInfluences;
    if (r && o) {
      ts.set(0, 0, 0);
      for (let c = 0, l = r.length; c < l; c++) {
        const u = o[c],
          d = r[c];
        u !== 0 &&
          ($s.fromBufferAttribute(d, e),
          a ? ts.addScaledVector($s, u) : ts.addScaledVector($s.sub(t), u));
      }
      t.add(ts);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry,
      s = this.material,
      r = this.matrixWorld;
    s !== void 0 &&
      (n.boundingSphere === null && n.computeBoundingSphere(),
      $i.copy(n.boundingSphere),
      $i.applyMatrix4(r),
      Ln.copy(e.ray).recast(e.near),
      !(
        $i.containsPoint(Ln.origin) === !1 &&
        (Ln.intersectSphere($i, ja) === null ||
          Ln.origin.distanceToSquared(ja) > (e.far - e.near) ** 2)
      ) &&
        (Za.copy(r).invert(),
        Ln.copy(e.ray).applyMatrix4(Za),
        !(n.boundingBox !== null && Ln.intersectsBox(n.boundingBox) === !1) &&
          this._computeIntersections(e, t, Ln)));
  }
  _computeIntersections(e, t, n) {
    let s;
    const r = this.geometry,
      a = this.material,
      o = r.index,
      c = r.attributes.position,
      l = r.attributes.uv,
      u = r.attributes.uv1,
      d = r.attributes.normal,
      f = r.groups,
      _ = r.drawRange;
    if (o !== null)
      if (Array.isArray(a))
        for (let v = 0, M = f.length; v < M; v++) {
          const p = f[v],
            h = a[p.materialIndex],
            T = Math.max(p.start, _.start),
            b = Math.min(
              o.count,
              Math.min(p.start + p.count, _.start + _.count)
            );
          for (let y = T, A = b; y < A; y += 3) {
            const w = o.getX(y),
              R = o.getX(y + 1),
              F = o.getX(y + 2);
            (s = is(this, h, e, n, l, u, d, w, R, F)),
              s &&
                ((s.faceIndex = Math.floor(y / 3)),
                (s.face.materialIndex = p.materialIndex),
                t.push(s));
          }
        }
      else {
        const v = Math.max(0, _.start),
          M = Math.min(o.count, _.start + _.count);
        for (let p = v, h = M; p < h; p += 3) {
          const T = o.getX(p),
            b = o.getX(p + 1),
            y = o.getX(p + 2);
          (s = is(this, a, e, n, l, u, d, T, b, y)),
            s && ((s.faceIndex = Math.floor(p / 3)), t.push(s));
        }
      }
    else if (c !== void 0)
      if (Array.isArray(a))
        for (let v = 0, M = f.length; v < M; v++) {
          const p = f[v],
            h = a[p.materialIndex],
            T = Math.max(p.start, _.start),
            b = Math.min(
              c.count,
              Math.min(p.start + p.count, _.start + _.count)
            );
          for (let y = T, A = b; y < A; y += 3) {
            const w = y,
              R = y + 1,
              F = y + 2;
            (s = is(this, h, e, n, l, u, d, w, R, F)),
              s &&
                ((s.faceIndex = Math.floor(y / 3)),
                (s.face.materialIndex = p.materialIndex),
                t.push(s));
          }
        }
      else {
        const v = Math.max(0, _.start),
          M = Math.min(c.count, _.start + _.count);
        for (let p = v, h = M; p < h; p += 3) {
          const T = p,
            b = p + 1,
            y = p + 2;
          (s = is(this, a, e, n, l, u, d, T, b, y)),
            s && ((s.faceIndex = Math.floor(p / 3)), t.push(s));
        }
      }
  }
}
function Bc(i, e, t, n, s, r, a, o) {
  let c;
  if (
    (e.side === Lt
      ? (c = n.intersectTriangle(a, r, s, !0, o))
      : (c = n.intersectTriangle(s, r, a, e.side === wn, o)),
    c === null)
  )
    return null;
  ns.copy(o), ns.applyMatrix4(i.matrixWorld);
  const l = t.ray.origin.distanceTo(ns);
  return l < t.near || l > t.far
    ? null
    : { distance: l, point: ns.clone(), object: i };
}
function is(i, e, t, n, s, r, a, o, c, l) {
  i.getVertexPosition(o, Ji),
    i.getVertexPosition(c, Qi),
    i.getVertexPosition(l, es);
  const u = Bc(i, e, t, n, Ji, Qi, es, $a);
  if (u) {
    const d = new U();
    Yt.getBarycoord($a, Ji, Qi, es, d),
      s && (u.uv = Yt.getInterpolatedAttribute(s, o, c, l, d, new Ce())),
      r && (u.uv1 = Yt.getInterpolatedAttribute(r, o, c, l, d, new Ce())),
      a &&
        ((u.normal = Yt.getInterpolatedAttribute(a, o, c, l, d, new U())),
        u.normal.dot(n.direction) > 0 && u.normal.multiplyScalar(-1));
    const f = { a: o, b: c, c: l, normal: new U(), materialIndex: 0 };
    Yt.getNormal(Ji, Qi, es, f.normal), (u.face = f), (u.barycoord = d);
  }
  return u;
}
class Ui extends zt {
  constructor(e = 1, t = 1, n = 1, s = 1, r = 1, a = 1) {
    super(),
      (this.type = "BoxGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        depth: n,
        widthSegments: s,
        heightSegments: r,
        depthSegments: a,
      });
    const o = this;
    (s = Math.floor(s)), (r = Math.floor(r)), (a = Math.floor(a));
    const c = [],
      l = [],
      u = [],
      d = [];
    let f = 0,
      _ = 0;
    v("z", "y", "x", -1, -1, n, t, e, a, r, 0),
      v("z", "y", "x", 1, -1, n, t, -e, a, r, 1),
      v("x", "z", "y", 1, 1, e, n, t, s, a, 2),
      v("x", "z", "y", 1, -1, e, n, -t, s, a, 3),
      v("x", "y", "z", 1, -1, e, t, n, s, r, 4),
      v("x", "y", "z", -1, -1, e, t, -n, s, r, 5),
      this.setIndex(c),
      this.setAttribute("position", new ft(l, 3)),
      this.setAttribute("normal", new ft(u, 3)),
      this.setAttribute("uv", new ft(d, 2));
    function v(M, p, h, T, b, y, A, w, R, F, g) {
      const S = y / R,
        P = A / F,
        O = y / 2,
        B = A / 2,
        X = w / 2,
        W = R + 1,
        H = F + 1;
      let G = 0,
        j = 0;
      const he = new U();
      for (let ae = 0; ae < H; ae++) {
        const ue = ae * P - B;
        for (let Fe = 0; Fe < W; Fe++) {
          const Ie = Fe * S - O;
          (he[M] = Ie * T),
            (he[p] = ue * b),
            (he[h] = X),
            l.push(he.x, he.y, he.z),
            (he[M] = 0),
            (he[p] = 0),
            (he[h] = w > 0 ? 1 : -1),
            u.push(he.x, he.y, he.z),
            d.push(Fe / R),
            d.push(1 - ae / F),
            (G += 1);
        }
      }
      for (let ae = 0; ae < F; ae++)
        for (let ue = 0; ue < R; ue++) {
          const Fe = f + ue + W * ae,
            Ie = f + ue + W * (ae + 1),
            st = f + (ue + 1) + W * (ae + 1),
            it = f + (ue + 1) + W * ae;
          c.push(Fe, Ie, it), c.push(Ie, st, it), (j += 6);
        }
      o.addGroup(_, j, g), (_ += j), (f += G);
    }
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new Ui(
      e.width,
      e.height,
      e.depth,
      e.widthSegments,
      e.heightSegments,
      e.depthSegments
    );
  }
}
function di(i) {
  const e = {};
  for (const t in i) {
    e[t] = {};
    for (const n in i[t]) {
      const s = i[t][n];
      s &&
      (s.isColor ||
        s.isMatrix3 ||
        s.isMatrix4 ||
        s.isVector2 ||
        s.isVector3 ||
        s.isVector4 ||
        s.isTexture ||
        s.isQuaternion)
        ? s.isRenderTargetTexture
          ? (we(
              "UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."
            ),
            (e[t][n] = null))
          : (e[t][n] = s.clone())
        : Array.isArray(s)
        ? (e[t][n] = s.slice())
        : (e[t][n] = s);
    }
  }
  return e;
}
function bt(i) {
  const e = {};
  for (let t = 0; t < i.length; t++) {
    const n = di(i[t]);
    for (const s in n) e[s] = n[s];
  }
  return e;
}
function zc(i) {
  const e = [];
  for (let t = 0; t < i.length; t++) e.push(i[t].clone());
  return e;
}
function sl(i) {
  const e = i.getRenderTarget();
  return e === null
    ? i.outputColorSpace
    : e.isXRRenderTarget === !0
    ? e.texture.colorSpace
    : Ge.workingColorSpace;
}
const Vc = { clone: di, merge: bt };
var Gc = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
  Hc = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class rn extends fi {
  constructor(e) {
    super(),
      (this.isShaderMaterial = !0),
      (this.type = "ShaderMaterial"),
      (this.defines = {}),
      (this.uniforms = {}),
      (this.uniformsGroups = []),
      (this.vertexShader = Gc),
      (this.fragmentShader = Hc),
      (this.linewidth = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      (this.lights = !1),
      (this.clipping = !1),
      (this.forceSinglePass = !0),
      (this.extensions = { clipCullDistance: !1, multiDraw: !1 }),
      (this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv1: [0, 0],
      }),
      (this.index0AttributeName = void 0),
      (this.uniformsNeedUpdate = !1),
      (this.glslVersion = null),
      e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.fragmentShader = e.fragmentShader),
      (this.vertexShader = e.vertexShader),
      (this.uniforms = di(e.uniforms)),
      (this.uniformsGroups = zc(e.uniformsGroups)),
      (this.defines = Object.assign({}, e.defines)),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.fog = e.fog),
      (this.lights = e.lights),
      (this.clipping = e.clipping),
      (this.extensions = Object.assign({}, e.extensions)),
      (this.glslVersion = e.glslVersion),
      (this.defaultAttributeValues = Object.assign(
        {},
        e.defaultAttributeValues
      )),
      (this.index0AttributeName = e.index0AttributeName),
      (this.uniformsNeedUpdate = e.uniformsNeedUpdate),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    (t.glslVersion = this.glslVersion), (t.uniforms = {});
    for (const s in this.uniforms) {
      const a = this.uniforms[s].value;
      a && a.isTexture
        ? (t.uniforms[s] = { type: "t", value: a.toJSON(e).uuid })
        : a && a.isColor
        ? (t.uniforms[s] = { type: "c", value: a.getHex() })
        : a && a.isVector2
        ? (t.uniforms[s] = { type: "v2", value: a.toArray() })
        : a && a.isVector3
        ? (t.uniforms[s] = { type: "v3", value: a.toArray() })
        : a && a.isVector4
        ? (t.uniforms[s] = { type: "v4", value: a.toArray() })
        : a && a.isMatrix3
        ? (t.uniforms[s] = { type: "m3", value: a.toArray() })
        : a && a.isMatrix4
        ? (t.uniforms[s] = { type: "m4", value: a.toArray() })
        : (t.uniforms[s] = { value: a });
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines),
      (t.vertexShader = this.vertexShader),
      (t.fragmentShader = this.fragmentShader),
      (t.lights = this.lights),
      (t.clipping = this.clipping);
    const n = {};
    for (const s in this.extensions) this.extensions[s] === !0 && (n[s] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class rl extends Mt {
  constructor() {
    super(),
      (this.isCamera = !0),
      (this.type = "Camera"),
      (this.matrixWorldInverse = new rt()),
      (this.projectionMatrix = new rt()),
      (this.projectionMatrixInverse = new rt()),
      (this.coordinateSystem = Jt),
      (this._reversedDepth = !1);
  }
  get reversedDepth() {
    return this._reversedDepth;
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      this.matrixWorldInverse.copy(e.matrixWorldInverse),
      this.projectionMatrix.copy(e.projectionMatrix),
      this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
      (this.coordinateSystem = e.coordinateSystem),
      this
    );
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const yn = new U(),
  Ja = new Ce(),
  Qa = new Ce();
class Ot extends rl {
  constructor(e = 50, t = 1, n = 0.1, s = 2e3) {
    super(),
      (this.isPerspectiveCamera = !0),
      (this.type = "PerspectiveCamera"),
      (this.fov = e),
      (this.zoom = 1),
      (this.near = n),
      (this.far = s),
      (this.focus = 10),
      (this.aspect = t),
      (this.view = null),
      (this.filmGauge = 35),
      (this.filmOffset = 0),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.fov = e.fov),
      (this.zoom = e.zoom),
      (this.near = e.near),
      (this.far = e.far),
      (this.focus = e.focus),
      (this.aspect = e.aspect),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      (this.filmGauge = e.filmGauge),
      (this.filmOffset = e.filmOffset),
      this
    );
  }
  setFocalLength(e) {
    const t = (0.5 * this.getFilmHeight()) / e;
    (this.fov = ea * 2 * Math.atan(t)), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(_s * 0.5 * this.fov);
    return (0.5 * this.getFilmHeight()) / e;
  }
  getEffectiveFOV() {
    return ea * 2 * Math.atan(Math.tan(_s * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(e, t, n) {
    yn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse),
      t.set(yn.x, yn.y).multiplyScalar(-e / yn.z),
      yn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse),
      n.set(yn.x, yn.y).multiplyScalar(-e / yn.z);
  }
  getViewSize(e, t) {
    return this.getViewBounds(e, Ja, Qa), t.subVectors(Qa, Ja);
  }
  setViewOffset(e, t, n, s, r, a) {
    (this.aspect = e / t),
      this.view === null &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = s),
      (this.view.width = r),
      (this.view.height = a),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = (e * Math.tan(_s * 0.5 * this.fov)) / this.zoom,
      n = 2 * t,
      s = this.aspect * n,
      r = -0.5 * s;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const c = a.fullWidth,
        l = a.fullHeight;
      (r += (a.offsetX * s) / c),
        (t -= (a.offsetY * n) / l),
        (s *= a.width / c),
        (n *= a.height / l);
    }
    const o = this.filmOffset;
    o !== 0 && (r += (e * o) / this.getFilmWidth()),
      this.projectionMatrix.makePerspective(
        r,
        r + s,
        t,
        t - n,
        e,
        this.far,
        this.coordinateSystem,
        this.reversedDepth
      ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.fov = this.fov),
      (t.object.zoom = this.zoom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      (t.object.focus = this.focus),
      (t.object.aspect = this.aspect),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      (t.object.filmGauge = this.filmGauge),
      (t.object.filmOffset = this.filmOffset),
      t
    );
  }
}
const ti = -90,
  ni = 1;
class kc extends Mt {
  constructor(e, t, n) {
    super(),
      (this.type = "CubeCamera"),
      (this.renderTarget = n),
      (this.coordinateSystem = null),
      (this.activeMipmapLevel = 0);
    const s = new Ot(ti, ni, e, t);
    (s.layers = this.layers), this.add(s);
    const r = new Ot(ti, ni, e, t);
    (r.layers = this.layers), this.add(r);
    const a = new Ot(ti, ni, e, t);
    (a.layers = this.layers), this.add(a);
    const o = new Ot(ti, ni, e, t);
    (o.layers = this.layers), this.add(o);
    const c = new Ot(ti, ni, e, t);
    (c.layers = this.layers), this.add(c);
    const l = new Ot(ti, ni, e, t);
    (l.layers = this.layers), this.add(l);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem,
      t = this.children.concat(),
      [n, s, r, a, o, c] = t;
    for (const l of t) this.remove(l);
    if (e === Jt)
      n.up.set(0, 1, 0),
        n.lookAt(1, 0, 0),
        s.up.set(0, 1, 0),
        s.lookAt(-1, 0, 0),
        r.up.set(0, 0, -1),
        r.lookAt(0, 1, 0),
        a.up.set(0, 0, 1),
        a.lookAt(0, -1, 0),
        o.up.set(0, 1, 0),
        o.lookAt(0, 0, 1),
        c.up.set(0, 1, 0),
        c.lookAt(0, 0, -1);
    else if (e === vs)
      n.up.set(0, -1, 0),
        n.lookAt(-1, 0, 0),
        s.up.set(0, -1, 0),
        s.lookAt(1, 0, 0),
        r.up.set(0, 0, 1),
        r.lookAt(0, 1, 0),
        a.up.set(0, 0, -1),
        a.lookAt(0, -1, 0),
        o.up.set(0, -1, 0),
        o.lookAt(0, 0, 1),
        c.up.set(0, -1, 0),
        c.lookAt(0, 0, -1);
    else
      throw new Error(
        "THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " +
          e
      );
    for (const l of t) this.add(l), l.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: s } = this;
    this.coordinateSystem !== e.coordinateSystem &&
      ((this.coordinateSystem = e.coordinateSystem),
      this.updateCoordinateSystem());
    const [r, a, o, c, l, u] = this.children,
      d = e.getRenderTarget(),
      f = e.getActiveCubeFace(),
      _ = e.getActiveMipmapLevel(),
      v = e.xr.enabled;
    e.xr.enabled = !1;
    const M = n.texture.generateMipmaps;
    (n.texture.generateMipmaps = !1),
      e.setRenderTarget(n, 0, s),
      e.render(t, r),
      e.setRenderTarget(n, 1, s),
      e.render(t, a),
      e.setRenderTarget(n, 2, s),
      e.render(t, o),
      e.setRenderTarget(n, 3, s),
      e.render(t, c),
      e.setRenderTarget(n, 4, s),
      e.render(t, l),
      (n.texture.generateMipmaps = M),
      e.setRenderTarget(n, 5, s),
      e.render(t, u),
      e.setRenderTarget(d, f, _),
      (e.xr.enabled = v),
      (n.texture.needsPMREMUpdate = !0);
  }
}
class al extends At {
  constructor(e = [], t = Vn, n, s, r, a, o, c, l, u) {
    super(e, t, n, s, r, a, o, c, l, u),
      (this.isCubeTexture = !0),
      (this.flipY = !1);
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class ol extends en {
  constructor(e = 1, t = {}) {
    super(e, e, t), (this.isWebGLCubeRenderTarget = !0);
    const n = { width: e, height: e, depth: 1 },
      s = [n, n, n, n, n, n];
    (this.texture = new al(s)),
      this._setTextureOptions(t),
      (this.texture.isRenderTargetTexture = !0);
  }
  fromEquirectangularTexture(e, t) {
    (this.texture.type = t.type),
      (this.texture.colorSpace = t.colorSpace),
      (this.texture.generateMipmaps = t.generateMipmaps),
      (this.texture.minFilter = t.minFilter),
      (this.texture.magFilter = t.magFilter);
    const n = {
        uniforms: { tEquirect: { value: null } },
        vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
        fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`,
      },
      s = new Ui(5, 5, 5),
      r = new rn({
        name: "CubemapFromEquirect",
        uniforms: di(n.uniforms),
        vertexShader: n.vertexShader,
        fragmentShader: n.fragmentShader,
        side: Lt,
        blending: pn,
      });
    r.uniforms.tEquirect.value = t;
    const a = new xt(s, r),
      o = t.minFilter;
    return (
      t.minFilter === Bn && (t.minFilter = yt),
      new kc(1, 10, this).update(e, a),
      (t.minFilter = o),
      a.geometry.dispose(),
      a.material.dispose(),
      this
    );
  }
  clear(e, t = !0, n = !0, s = !0) {
    const r = e.getRenderTarget();
    for (let a = 0; a < 6; a++) e.setRenderTarget(this, a), e.clear(t, n, s);
    e.setRenderTarget(r);
  }
}
class ss extends Mt {
  constructor() {
    super(), (this.isGroup = !0), (this.type = "Group");
  }
}
const Wc = { type: "move" };
class Js {
  constructor() {
    (this._targetRay = null), (this._grip = null), (this._hand = null);
  }
  getHandSpace() {
    return (
      this._hand === null &&
        ((this._hand = new ss()),
        (this._hand.matrixAutoUpdate = !1),
        (this._hand.visible = !1),
        (this._hand.joints = {}),
        (this._hand.inputState = { pinching: !1 })),
      this._hand
    );
  }
  getTargetRaySpace() {
    return (
      this._targetRay === null &&
        ((this._targetRay = new ss()),
        (this._targetRay.matrixAutoUpdate = !1),
        (this._targetRay.visible = !1),
        (this._targetRay.hasLinearVelocity = !1),
        (this._targetRay.linearVelocity = new U()),
        (this._targetRay.hasAngularVelocity = !1),
        (this._targetRay.angularVelocity = new U())),
      this._targetRay
    );
  }
  getGripSpace() {
    return (
      this._grip === null &&
        ((this._grip = new ss()),
        (this._grip.matrixAutoUpdate = !1),
        (this._grip.visible = !1),
        (this._grip.hasLinearVelocity = !1),
        (this._grip.linearVelocity = new U()),
        (this._grip.hasAngularVelocity = !1),
        (this._grip.angularVelocity = new U())),
      this._grip
    );
  }
  dispatchEvent(e) {
    return (
      this._targetRay !== null && this._targetRay.dispatchEvent(e),
      this._grip !== null && this._grip.dispatchEvent(e),
      this._hand !== null && this._hand.dispatchEvent(e),
      this
    );
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t) for (const n of e.hand.values()) this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return (
      this.dispatchEvent({ type: "disconnected", data: e }),
      this._targetRay !== null && (this._targetRay.visible = !1),
      this._grip !== null && (this._grip.visible = !1),
      this._hand !== null && (this._hand.visible = !1),
      this
    );
  }
  update(e, t, n) {
    let s = null,
      r = null,
      a = null;
    const o = this._targetRay,
      c = this._grip,
      l = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (l && e.hand) {
        a = !0;
        for (const M of e.hand.values()) {
          const p = t.getJointPose(M, n),
            h = this._getHandJoint(l, M);
          p !== null &&
            (h.matrix.fromArray(p.transform.matrix),
            h.matrix.decompose(h.position, h.rotation, h.scale),
            (h.matrixWorldNeedsUpdate = !0),
            (h.jointRadius = p.radius)),
            (h.visible = p !== null);
        }
        const u = l.joints["index-finger-tip"],
          d = l.joints["thumb-tip"],
          f = u.position.distanceTo(d.position),
          _ = 0.02,
          v = 0.005;
        l.inputState.pinching && f > _ + v
          ? ((l.inputState.pinching = !1),
            this.dispatchEvent({
              type: "pinchend",
              handedness: e.handedness,
              target: this,
            }))
          : !l.inputState.pinching &&
            f <= _ - v &&
            ((l.inputState.pinching = !0),
            this.dispatchEvent({
              type: "pinchstart",
              handedness: e.handedness,
              target: this,
            }));
      } else
        c !== null &&
          e.gripSpace &&
          ((r = t.getPose(e.gripSpace, n)),
          r !== null &&
            (c.matrix.fromArray(r.transform.matrix),
            c.matrix.decompose(c.position, c.rotation, c.scale),
            (c.matrixWorldNeedsUpdate = !0),
            r.linearVelocity
              ? ((c.hasLinearVelocity = !0),
                c.linearVelocity.copy(r.linearVelocity))
              : (c.hasLinearVelocity = !1),
            r.angularVelocity
              ? ((c.hasAngularVelocity = !0),
                c.angularVelocity.copy(r.angularVelocity))
              : (c.hasAngularVelocity = !1)));
      o !== null &&
        ((s = t.getPose(e.targetRaySpace, n)),
        s === null && r !== null && (s = r),
        s !== null &&
          (o.matrix.fromArray(s.transform.matrix),
          o.matrix.decompose(o.position, o.rotation, o.scale),
          (o.matrixWorldNeedsUpdate = !0),
          s.linearVelocity
            ? ((o.hasLinearVelocity = !0),
              o.linearVelocity.copy(s.linearVelocity))
            : (o.hasLinearVelocity = !1),
          s.angularVelocity
            ? ((o.hasAngularVelocity = !0),
              o.angularVelocity.copy(s.angularVelocity))
            : (o.hasAngularVelocity = !1),
          this.dispatchEvent(Wc)));
    }
    return (
      o !== null && (o.visible = s !== null),
      c !== null && (c.visible = r !== null),
      l !== null && (l.visible = a !== null),
      this
    );
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new ss();
      (n.matrixAutoUpdate = !1),
        (n.visible = !1),
        (e.joints[t.jointName] = n),
        e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class Xc extends Mt {
  constructor() {
    super(),
      (this.isScene = !0),
      (this.type = "Scene"),
      (this.background = null),
      (this.environment = null),
      (this.fog = null),
      (this.backgroundBlurriness = 0),
      (this.backgroundIntensity = 1),
      (this.backgroundRotation = new sn()),
      (this.environmentIntensity = 1),
      (this.environmentRotation = new sn()),
      (this.overrideMaterial = null),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this })
        );
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.background !== null && (this.background = e.background.clone()),
      e.environment !== null && (this.environment = e.environment.clone()),
      e.fog !== null && (this.fog = e.fog.clone()),
      (this.backgroundBlurriness = e.backgroundBlurriness),
      (this.backgroundIntensity = e.backgroundIntensity),
      this.backgroundRotation.copy(e.backgroundRotation),
      (this.environmentIntensity = e.environmentIntensity),
      this.environmentRotation.copy(e.environmentRotation),
      e.overrideMaterial !== null &&
        (this.overrideMaterial = e.overrideMaterial.clone()),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      this.fog !== null && (t.object.fog = this.fog.toJSON()),
      this.backgroundBlurriness > 0 &&
        (t.object.backgroundBlurriness = this.backgroundBlurriness),
      this.backgroundIntensity !== 1 &&
        (t.object.backgroundIntensity = this.backgroundIntensity),
      (t.object.backgroundRotation = this.backgroundRotation.toArray()),
      this.environmentIntensity !== 1 &&
        (t.object.environmentIntensity = this.environmentIntensity),
      (t.object.environmentRotation = this.environmentRotation.toArray()),
      t
    );
  }
}
class Yc extends At {
  constructor(e = null, t = 1, n = 1, s, r, a, o, c, l = vt, u = vt, d, f) {
    super(null, a, o, c, l, u, s, r, d, f),
      (this.isDataTexture = !0),
      (this.image = { data: e, width: t, height: n }),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
const Qs = new U(),
  qc = new U(),
  Kc = new De();
class Tn {
  constructor(e = new U(1, 0, 0), t = 0) {
    (this.isPlane = !0), (this.normal = e), (this.constant = t);
  }
  set(e, t) {
    return this.normal.copy(e), (this.constant = t), this;
  }
  setComponents(e, t, n, s) {
    return this.normal.set(e, t, n), (this.constant = s), this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), (this.constant = -t.dot(this.normal)), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const s = Qs.subVectors(n, t).cross(qc.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(s, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), (this.constant = e.constant), this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), (this.constant *= e), this;
  }
  negate() {
    return (this.constant *= -1), this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(Qs),
      s = this.normal.dot(n);
    if (s === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const r = -(e.start.dot(this.normal) + this.constant) / s;
    return r < 0 || r > 1 ? null : t.copy(e.start).addScaledVector(n, r);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start),
      n = this.distanceToPoint(e.end);
    return (t < 0 && n > 0) || (n < 0 && t > 0);
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || Kc.getNormalMatrix(e),
      s = this.coplanarPoint(Qs).applyMatrix4(e),
      r = this.normal.applyMatrix3(n).normalize();
    return (this.constant = -s.dot(r)), this;
  }
  translate(e) {
    return (this.constant -= e.dot(this.normal)), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const In = new Ts(),
  Zc = new Ce(0.5, 0.5),
  rs = new U();
class pa {
  constructor(
    e = new Tn(),
    t = new Tn(),
    n = new Tn(),
    s = new Tn(),
    r = new Tn(),
    a = new Tn()
  ) {
    this.planes = [e, t, n, s, r, a];
  }
  set(e, t, n, s, r, a) {
    const o = this.planes;
    return (
      o[0].copy(e),
      o[1].copy(t),
      o[2].copy(n),
      o[3].copy(s),
      o[4].copy(r),
      o[5].copy(a),
      this
    );
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = Jt, n = !1) {
    const s = this.planes,
      r = e.elements,
      a = r[0],
      o = r[1],
      c = r[2],
      l = r[3],
      u = r[4],
      d = r[5],
      f = r[6],
      _ = r[7],
      v = r[8],
      M = r[9],
      p = r[10],
      h = r[11],
      T = r[12],
      b = r[13],
      y = r[14],
      A = r[15];
    if (
      (s[0].setComponents(l - a, _ - u, h - v, A - T).normalize(),
      s[1].setComponents(l + a, _ + u, h + v, A + T).normalize(),
      s[2].setComponents(l + o, _ + d, h + M, A + b).normalize(),
      s[3].setComponents(l - o, _ - d, h - M, A - b).normalize(),
      n)
    )
      s[4].setComponents(c, f, p, y).normalize(),
        s[5].setComponents(l - c, _ - f, h - p, A - y).normalize();
    else if (
      (s[4].setComponents(l - c, _ - f, h - p, A - y).normalize(), t === Jt)
    )
      s[5].setComponents(l + c, _ + f, h + p, A + y).normalize();
    else if (t === vs) s[5].setComponents(c, f, p, y).normalize();
    else
      throw new Error(
        "THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " +
          t
      );
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(),
        In.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(),
        In.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(In);
  }
  intersectsSprite(e) {
    In.center.set(0, 0, 0);
    const t = Zc.distanceTo(e.center);
    return (
      (In.radius = 0.7071067811865476 + t),
      In.applyMatrix4(e.matrixWorld),
      this.intersectsSphere(In)
    );
  }
  intersectsSphere(e) {
    const t = this.planes,
      n = e.center,
      s = -e.radius;
    for (let r = 0; r < 6; r++) if (t[r].distanceToPoint(n) < s) return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const s = t[n];
      if (
        ((rs.x = s.normal.x > 0 ? e.max.x : e.min.x),
        (rs.y = s.normal.y > 0 ? e.max.y : e.min.y),
        (rs.z = s.normal.z > 0 ? e.max.z : e.min.z),
        s.distanceToPoint(rs) < 0)
      )
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class ll extends fi {
  constructor(e) {
    super(),
      (this.isLineBasicMaterial = !0),
      (this.type = "LineBasicMaterial"),
      (this.color = new ze(16777215)),
      (this.map = null),
      (this.linewidth = 1),
      (this.linecap = "round"),
      (this.linejoin = "round"),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.linewidth = e.linewidth),
      (this.linecap = e.linecap),
      (this.linejoin = e.linejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const Ss = new U(),
  Es = new U(),
  eo = new rt(),
  Ei = new fa(),
  as = new Ts(),
  er = new U(),
  to = new U();
class jc extends Mt {
  constructor(e = new zt(), t = new ll()) {
    super(),
      (this.isLine = !0),
      (this.type = "Line"),
      (this.geometry = e),
      (this.material = t),
      (this.morphTargetDictionary = void 0),
      (this.morphTargetInfluences = void 0),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.material = Array.isArray(e.material)
        ? e.material.slice()
        : e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position,
        n = [0];
      for (let s = 1, r = t.count; s < r; s++)
        Ss.fromBufferAttribute(t, s - 1),
          Es.fromBufferAttribute(t, s),
          (n[s] = n[s - 1]),
          (n[s] += Ss.distanceTo(Es));
      e.setAttribute("lineDistance", new ft(n, 1));
    } else
      we(
        "Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
      );
    return this;
  }
  raycast(e, t) {
    const n = this.geometry,
      s = this.matrixWorld,
      r = e.params.Line.threshold,
      a = n.drawRange;
    if (
      (n.boundingSphere === null && n.computeBoundingSphere(),
      as.copy(n.boundingSphere),
      as.applyMatrix4(s),
      (as.radius += r),
      e.ray.intersectsSphere(as) === !1)
    )
      return;
    eo.copy(s).invert(), Ei.copy(e.ray).applyMatrix4(eo);
    const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
      c = o * o,
      l = this.isLineSegments ? 2 : 1,
      u = n.index,
      f = n.attributes.position;
    if (u !== null) {
      const _ = Math.max(0, a.start),
        v = Math.min(u.count, a.start + a.count);
      for (let M = _, p = v - 1; M < p; M += l) {
        const h = u.getX(M),
          T = u.getX(M + 1),
          b = os(this, e, Ei, c, h, T, M);
        b && t.push(b);
      }
      if (this.isLineLoop) {
        const M = u.getX(v - 1),
          p = u.getX(_),
          h = os(this, e, Ei, c, M, p, v - 1);
        h && t.push(h);
      }
    } else {
      const _ = Math.max(0, a.start),
        v = Math.min(f.count, a.start + a.count);
      for (let M = _, p = v - 1; M < p; M += l) {
        const h = os(this, e, Ei, c, M, M + 1, M);
        h && t.push(h);
      }
      if (this.isLineLoop) {
        const M = os(this, e, Ei, c, v - 1, _, v - 1);
        M && t.push(M);
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const s = t[n[0]];
      if (s !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let r = 0, a = s.length; r < a; r++) {
          const o = s[r].name || String(r);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[o] = r);
        }
      }
    }
  }
}
function os(i, e, t, n, s, r, a) {
  const o = i.geometry.attributes.position;
  if (
    (Ss.fromBufferAttribute(o, s),
    Es.fromBufferAttribute(o, r),
    t.distanceSqToSegment(Ss, Es, er, to) > n)
  )
    return;
  er.applyMatrix4(i.matrixWorld);
  const l = e.ray.origin.distanceTo(er);
  if (!(l < e.near || l > e.far))
    return {
      distance: l,
      point: to.clone().applyMatrix4(i.matrixWorld),
      index: a,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: i,
    };
}
const no = new U(),
  io = new U();
class $c extends jc {
  constructor(e, t) {
    super(e, t), (this.isLineSegments = !0), (this.type = "LineSegments");
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position,
        n = [];
      for (let s = 0, r = t.count; s < r; s += 2)
        no.fromBufferAttribute(t, s),
          io.fromBufferAttribute(t, s + 1),
          (n[s] = s === 0 ? 0 : n[s - 1]),
          (n[s + 1] = n[s] + no.distanceTo(io));
      e.setAttribute("lineDistance", new ft(n, 1));
    } else
      we(
        "LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
      );
    return this;
  }
}
class Pi extends At {
  constructor(e, t, n = nn, s, r, a, o = vt, c = vt, l, u = gn, d = 1) {
    if (u !== gn && u !== zn)
      throw new Error(
        "DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat"
      );
    const f = { width: e, height: t, depth: d };
    super(f, s, r, a, o, c, u, n, l),
      (this.isDepthTexture = !0),
      (this.flipY = !1),
      (this.generateMipmaps = !1),
      (this.compareFunction = null);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.source = new da(Object.assign({}, e.image))),
      (this.compareFunction = e.compareFunction),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      this.compareFunction !== null &&
        (t.compareFunction = this.compareFunction),
      t
    );
  }
}
class Jc extends Pi {
  constructor(e, t = nn, n = Vn, s, r, a = vt, o = vt, c, l = gn) {
    const u = { width: e, height: e, depth: 1 },
      d = [u, u, u, u, u, u];
    super(e, e, t, n, s, r, a, o, c, l),
      (this.image = d),
      (this.isCubeDepthTexture = !0),
      (this.isCubeTexture = !0);
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class cl extends At {
  constructor(e = null) {
    super(), (this.sourceTexture = e), (this.isExternalTexture = !0);
  }
  copy(e) {
    return super.copy(e), (this.sourceTexture = e.sourceTexture), this;
  }
}
class Ni extends zt {
  constructor(
    e = 1,
    t = 1,
    n = 1,
    s = 32,
    r = 1,
    a = !1,
    o = 0,
    c = Math.PI * 2
  ) {
    super(),
      (this.type = "CylinderGeometry"),
      (this.parameters = {
        radiusTop: e,
        radiusBottom: t,
        height: n,
        radialSegments: s,
        heightSegments: r,
        openEnded: a,
        thetaStart: o,
        thetaLength: c,
      });
    const l = this;
    (s = Math.floor(s)), (r = Math.floor(r));
    const u = [],
      d = [],
      f = [],
      _ = [];
    let v = 0;
    const M = [],
      p = n / 2;
    let h = 0;
    T(),
      a === !1 && (e > 0 && b(!0), t > 0 && b(!1)),
      this.setIndex(u),
      this.setAttribute("position", new ft(d, 3)),
      this.setAttribute("normal", new ft(f, 3)),
      this.setAttribute("uv", new ft(_, 2));
    function T() {
      const y = new U(),
        A = new U();
      let w = 0;
      const R = (t - e) / n;
      for (let F = 0; F <= r; F++) {
        const g = [],
          S = F / r,
          P = S * (t - e) + e;
        for (let O = 0; O <= s; O++) {
          const B = O / s,
            X = B * c + o,
            W = Math.sin(X),
            H = Math.cos(X);
          (A.x = P * W),
            (A.y = -S * n + p),
            (A.z = P * H),
            d.push(A.x, A.y, A.z),
            y.set(W, R, H).normalize(),
            f.push(y.x, y.y, y.z),
            _.push(B, 1 - S),
            g.push(v++);
        }
        M.push(g);
      }
      for (let F = 0; F < s; F++)
        for (let g = 0; g < r; g++) {
          const S = M[g][F],
            P = M[g + 1][F],
            O = M[g + 1][F + 1],
            B = M[g][F + 1];
          (e > 0 || g !== 0) && (u.push(S, P, B), (w += 3)),
            (t > 0 || g !== r - 1) && (u.push(P, O, B), (w += 3));
        }
      l.addGroup(h, w, 0), (h += w);
    }
    function b(y) {
      const A = v,
        w = new Ce(),
        R = new U();
      let F = 0;
      const g = y === !0 ? e : t,
        S = y === !0 ? 1 : -1;
      for (let O = 1; O <= s; O++)
        d.push(0, p * S, 0), f.push(0, S, 0), _.push(0.5, 0.5), v++;
      const P = v;
      for (let O = 0; O <= s; O++) {
        const X = (O / s) * c + o,
          W = Math.cos(X),
          H = Math.sin(X);
        (R.x = g * H),
          (R.y = p * S),
          (R.z = g * W),
          d.push(R.x, R.y, R.z),
          f.push(0, S, 0),
          (w.x = W * 0.5 + 0.5),
          (w.y = H * 0.5 * S + 0.5),
          _.push(w.x, w.y),
          v++;
      }
      for (let O = 0; O < s; O++) {
        const B = A + O,
          X = P + O;
        y === !0 ? u.push(X, X + 1, B) : u.push(X + 1, X, B), (F += 3);
      }
      l.addGroup(h, F, y === !0 ? 1 : 2), (h += F);
    }
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new Ni(
      e.radiusTop,
      e.radiusBottom,
      e.height,
      e.radialSegments,
      e.heightSegments,
      e.openEnded,
      e.thetaStart,
      e.thetaLength
    );
  }
}
class ma extends Ni {
  constructor(e = 1, t = 1, n = 32, s = 1, r = !1, a = 0, o = Math.PI * 2) {
    super(0, e, t, n, s, r, a, o),
      (this.type = "ConeGeometry"),
      (this.parameters = {
        radius: e,
        height: t,
        radialSegments: n,
        heightSegments: s,
        openEnded: r,
        thetaStart: a,
        thetaLength: o,
      });
  }
  static fromJSON(e) {
    return new ma(
      e.radius,
      e.height,
      e.radialSegments,
      e.heightSegments,
      e.openEnded,
      e.thetaStart,
      e.thetaLength
    );
  }
}
class Fi extends zt {
  constructor(e = 1, t = 1, n = 1, s = 1) {
    super(),
      (this.type = "PlaneGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        widthSegments: n,
        heightSegments: s,
      });
    const r = e / 2,
      a = t / 2,
      o = Math.floor(n),
      c = Math.floor(s),
      l = o + 1,
      u = c + 1,
      d = e / o,
      f = t / c,
      _ = [],
      v = [],
      M = [],
      p = [];
    for (let h = 0; h < u; h++) {
      const T = h * f - a;
      for (let b = 0; b < l; b++) {
        const y = b * d - r;
        v.push(y, -T, 0), M.push(0, 0, 1), p.push(b / o), p.push(1 - h / c);
      }
    }
    for (let h = 0; h < c; h++)
      for (let T = 0; T < o; T++) {
        const b = T + l * h,
          y = T + l * (h + 1),
          A = T + 1 + l * (h + 1),
          w = T + 1 + l * h;
        _.push(b, y, w), _.push(y, A, w);
      }
    this.setIndex(_),
      this.setAttribute("position", new ft(v, 3)),
      this.setAttribute("normal", new ft(M, 3)),
      this.setAttribute("uv", new ft(p, 2));
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new Fi(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
class pi extends zt {
  constructor(
    e = 1,
    t = 32,
    n = 16,
    s = 0,
    r = Math.PI * 2,
    a = 0,
    o = Math.PI
  ) {
    super(),
      (this.type = "SphereGeometry"),
      (this.parameters = {
        radius: e,
        widthSegments: t,
        heightSegments: n,
        phiStart: s,
        phiLength: r,
        thetaStart: a,
        thetaLength: o,
      }),
      (t = Math.max(3, Math.floor(t))),
      (n = Math.max(2, Math.floor(n)));
    const c = Math.min(a + o, Math.PI);
    let l = 0;
    const u = [],
      d = new U(),
      f = new U(),
      _ = [],
      v = [],
      M = [],
      p = [];
    for (let h = 0; h <= n; h++) {
      const T = [],
        b = h / n;
      let y = 0;
      h === 0 && a === 0
        ? (y = 0.5 / t)
        : h === n && c === Math.PI && (y = -0.5 / t);
      for (let A = 0; A <= t; A++) {
        const w = A / t;
        (d.x = -e * Math.cos(s + w * r) * Math.sin(a + b * o)),
          (d.y = e * Math.cos(a + b * o)),
          (d.z = e * Math.sin(s + w * r) * Math.sin(a + b * o)),
          v.push(d.x, d.y, d.z),
          f.copy(d).normalize(),
          M.push(f.x, f.y, f.z),
          p.push(w + y, 1 - b),
          T.push(l++);
      }
      u.push(T);
    }
    for (let h = 0; h < n; h++)
      for (let T = 0; T < t; T++) {
        const b = u[h][T + 1],
          y = u[h][T],
          A = u[h + 1][T],
          w = u[h + 1][T + 1];
        (h !== 0 || a > 0) && _.push(b, y, w),
          (h !== n - 1 || c < Math.PI) && _.push(y, A, w);
      }
    this.setIndex(_),
      this.setAttribute("position", new ft(v, 3)),
      this.setAttribute("normal", new ft(M, 3)),
      this.setAttribute("uv", new ft(p, 2));
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new pi(
      e.radius,
      e.widthSegments,
      e.heightSegments,
      e.phiStart,
      e.phiLength,
      e.thetaStart,
      e.thetaLength
    );
  }
}
class Qc extends rn {
  constructor(e) {
    super(e),
      (this.isRawShaderMaterial = !0),
      (this.type = "RawShaderMaterial");
  }
}
class Oi extends fi {
  constructor(e) {
    super(),
      (this.isMeshStandardMaterial = !0),
      (this.type = "MeshStandardMaterial"),
      (this.defines = { STANDARD: "" }),
      (this.color = new ze(16777215)),
      (this.roughness = 1),
      (this.metalness = 0),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new ze(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = jo),
      (this.normalScale = new Ce(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.roughnessMap = null),
      (this.metalnessMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapRotation = new sn()),
      (this.envMapIntensity = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.flatShading = !1),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.defines = { STANDARD: "" }),
      this.color.copy(e.color),
      (this.roughness = e.roughness),
      (this.metalness = e.metalness),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      this.emissive.copy(e.emissive),
      (this.emissiveMap = e.emissiveMap),
      (this.emissiveIntensity = e.emissiveIntensity),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.roughnessMap = e.roughnessMap),
      (this.metalnessMap = e.metalnessMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      this.envMapRotation.copy(e.envMapRotation),
      (this.envMapIntensity = e.envMapIntensity),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.flatShading = e.flatShading),
      (this.fog = e.fog),
      this
    );
  }
}
class eh extends fi {
  constructor(e) {
    super(),
      (this.isMeshDepthMaterial = !0),
      (this.type = "MeshDepthMaterial"),
      (this.depthPacking = hc),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.depthPacking = e.depthPacking),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      this
    );
  }
}
class th extends fi {
  constructor(e) {
    super(),
      (this.isMeshDistanceMaterial = !0),
      (this.type = "MeshDistanceMaterial"),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      this
    );
  }
}
class _a extends Mt {
  constructor(e, t = 1) {
    super(),
      (this.isLight = !0),
      (this.type = "Light"),
      (this.color = new ze(e)),
      (this.intensity = t);
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      this.color.copy(e.color),
      (this.intensity = e.intensity),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.color = this.color.getHex()),
      (t.object.intensity = this.intensity),
      t
    );
  }
}
const tr = new rt(),
  so = new U(),
  ro = new U();
class hl {
  constructor(e) {
    (this.camera = e),
      (this.intensity = 1),
      (this.bias = 0),
      (this.normalBias = 0),
      (this.radius = 1),
      (this.blurSamples = 8),
      (this.mapSize = new Ce(512, 512)),
      (this.mapType = Bt),
      (this.map = null),
      (this.mapPass = null),
      (this.matrix = new rt()),
      (this.autoUpdate = !0),
      (this.needsUpdate = !1),
      (this._frustum = new pa()),
      (this._frameExtents = new Ce(1, 1)),
      (this._viewportCount = 1),
      (this._viewports = [new lt(0, 0, 1, 1)]);
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera,
      n = this.matrix;
    so.setFromMatrixPosition(e.matrixWorld),
      t.position.copy(so),
      ro.setFromMatrixPosition(e.target.matrixWorld),
      t.lookAt(ro),
      t.updateMatrixWorld(),
      tr.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
      this._frustum.setFromProjectionMatrix(
        tr,
        t.coordinateSystem,
        t.reversedDepth
      ),
      t.reversedDepth
        ? n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 1, 0, 0, 0, 0, 1)
        : n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
      n.multiply(tr);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return (
      (this.camera = e.camera.clone()),
      (this.intensity = e.intensity),
      (this.bias = e.bias),
      (this.radius = e.radius),
      (this.autoUpdate = e.autoUpdate),
      (this.needsUpdate = e.needsUpdate),
      (this.normalBias = e.normalBias),
      (this.blurSamples = e.blurSamples),
      this.mapSize.copy(e.mapSize),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return (
      this.intensity !== 1 && (e.intensity = this.intensity),
      this.bias !== 0 && (e.bias = this.bias),
      this.normalBias !== 0 && (e.normalBias = this.normalBias),
      this.radius !== 1 && (e.radius = this.radius),
      (this.mapSize.x !== 512 || this.mapSize.y !== 512) &&
        (e.mapSize = this.mapSize.toArray()),
      (e.camera = this.camera.toJSON(!1).object),
      delete e.camera.matrix,
      e
    );
  }
}
class nh extends hl {
  constructor() {
    super(new Ot(90, 1, 0.5, 500)), (this.isPointLightShadow = !0);
  }
}
class ih extends _a {
  constructor(e, t, n = 0, s = 2) {
    super(e, t),
      (this.isPointLight = !0),
      (this.type = "PointLight"),
      (this.distance = n),
      (this.decay = s),
      (this.shadow = new nh());
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(e) {
    this.intensity = e / (4 * Math.PI);
  }
  dispose() {
    super.dispose(), this.shadow.dispose();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.distance = e.distance),
      (this.decay = e.decay),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.distance = this.distance),
      (t.object.decay = this.decay),
      (t.object.shadow = this.shadow.toJSON()),
      t
    );
  }
}
class ga extends rl {
  constructor(e = -1, t = 1, n = 1, s = -1, r = 0.1, a = 2e3) {
    super(),
      (this.isOrthographicCamera = !0),
      (this.type = "OrthographicCamera"),
      (this.zoom = 1),
      (this.view = null),
      (this.left = e),
      (this.right = t),
      (this.top = n),
      (this.bottom = s),
      (this.near = r),
      (this.far = a),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.left = e.left),
      (this.right = e.right),
      (this.top = e.top),
      (this.bottom = e.bottom),
      (this.near = e.near),
      (this.far = e.far),
      (this.zoom = e.zoom),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      this
    );
  }
  setViewOffset(e, t, n, s, r, a) {
    this.view === null &&
      (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1,
      }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = s),
      (this.view.width = r),
      (this.view.height = a),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom),
      t = (this.top - this.bottom) / (2 * this.zoom),
      n = (this.right + this.left) / 2,
      s = (this.top + this.bottom) / 2;
    let r = n - e,
      a = n + e,
      o = s + t,
      c = s - t;
    if (this.view !== null && this.view.enabled) {
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom,
        u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      (r += l * this.view.offsetX),
        (a = r + l * this.view.width),
        (o -= u * this.view.offsetY),
        (c = o - u * this.view.height);
    }
    this.projectionMatrix.makeOrthographic(
      r,
      a,
      o,
      c,
      this.near,
      this.far,
      this.coordinateSystem,
      this.reversedDepth
    ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.zoom = this.zoom),
      (t.object.left = this.left),
      (t.object.right = this.right),
      (t.object.top = this.top),
      (t.object.bottom = this.bottom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      t
    );
  }
}
class sh extends hl {
  constructor() {
    super(new ga(-5, 5, 5, -5, 0.5, 500)), (this.isDirectionalLightShadow = !0);
  }
}
class rh extends _a {
  constructor(e, t) {
    super(e, t),
      (this.isDirectionalLight = !0),
      (this.type = "DirectionalLight"),
      this.position.copy(Mt.DEFAULT_UP),
      this.updateMatrix(),
      (this.target = new Mt()),
      (this.shadow = new sh());
  }
  dispose() {
    super.dispose(), this.shadow.dispose();
  }
  copy(e) {
    return (
      super.copy(e),
      (this.target = e.target.clone()),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.shadow = this.shadow.toJSON()),
      (t.object.target = this.target.uuid),
      t
    );
  }
}
class ah extends _a {
  constructor(e, t) {
    super(e, t), (this.isAmbientLight = !0), (this.type = "AmbientLight");
  }
}
class oh extends Ot {
  constructor(e = []) {
    super(),
      (this.isArrayCamera = !0),
      (this.isMultiViewCamera = !1),
      (this.cameras = e);
  }
}
class ao {
  constructor(e = 1, t = 0, n = 0) {
    (this.radius = e), (this.phi = t), (this.theta = n);
  }
  set(e, t, n) {
    return (this.radius = e), (this.phi = t), (this.theta = n), this;
  }
  copy(e) {
    return (
      (this.radius = e.radius), (this.phi = e.phi), (this.theta = e.theta), this
    );
  }
  makeSafe() {
    return (this.phi = Be(this.phi, 1e-6, Math.PI - 1e-6)), this;
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, n) {
    return (
      (this.radius = Math.sqrt(e * e + t * t + n * n)),
      this.radius === 0
        ? ((this.theta = 0), (this.phi = 0))
        : ((this.theta = Math.atan2(e, n)),
          (this.phi = Math.acos(Be(t / this.radius, -1, 1)))),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class lh extends $c {
  constructor(e = 1) {
    const t = [0, 0, 0, e, 0, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, 0, e],
      n = [1, 0, 0, 1, 0.6, 0, 0, 1, 0, 0.6, 1, 0, 0, 0, 1, 0, 0.6, 1],
      s = new zt();
    s.setAttribute("position", new ft(t, 3)),
      s.setAttribute("color", new ft(n, 3));
    const r = new ll({ vertexColors: !0, toneMapped: !1 });
    super(s, r), (this.type = "AxesHelper");
  }
  setColors(e, t, n) {
    const s = new ze(),
      r = this.geometry.attributes.color.array;
    return (
      s.set(e),
      s.toArray(r, 0),
      s.toArray(r, 3),
      s.set(t),
      s.toArray(r, 6),
      s.toArray(r, 9),
      s.set(n),
      s.toArray(r, 12),
      s.toArray(r, 15),
      (this.geometry.attributes.color.needsUpdate = !0),
      this
    );
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
class ch extends Hn {
  constructor(e, t = null) {
    super(),
      (this.object = e),
      (this.domElement = t),
      (this.enabled = !0),
      (this.state = -1),
      (this.keys = {}),
      (this.mouseButtons = { LEFT: null, MIDDLE: null, RIGHT: null }),
      (this.touches = { ONE: null, TWO: null });
  }
  connect(e) {
    if (e === void 0) {
      we("Controls: connect() now requires an element.");
      return;
    }
    this.domElement !== null && this.disconnect(), (this.domElement = e);
  }
  disconnect() {}
  dispose() {}
  update() {}
}
function oo(i, e, t, n) {
  const s = hh(n);
  switch (t) {
    case qo:
      return i * e;
    case Zo:
      return ((i * e) / s.components) * s.byteLength;
    case oa:
      return ((i * e) / s.components) * s.byteLength;
    case hi:
      return ((i * e * 2) / s.components) * s.byteLength;
    case la:
      return ((i * e * 2) / s.components) * s.byteLength;
    case Ko:
      return ((i * e * 3) / s.components) * s.byteLength;
    case qt:
      return ((i * e * 4) / s.components) * s.byteLength;
    case ca:
      return ((i * e * 4) / s.components) * s.byteLength;
    case ds:
    case fs:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case ps:
    case ms:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case yr:
    case br:
      return (Math.max(i, 16) * Math.max(e, 8)) / 4;
    case Er:
    case Tr:
      return (Math.max(i, 8) * Math.max(e, 8)) / 2;
    case Ar:
    case wr:
    case Cr:
    case Pr:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case Rr:
    case Dr:
    case Lr:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Ir:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Ur:
      return Math.floor((i + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case Nr:
      return Math.floor((i + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case Fr:
      return Math.floor((i + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case Or:
      return Math.floor((i + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case Br:
      return Math.floor((i + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case zr:
      return Math.floor((i + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case Vr:
      return Math.floor((i + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case Gr:
      return Math.floor((i + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case Hr:
      return Math.floor((i + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case kr:
      return Math.floor((i + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case Wr:
      return Math.floor((i + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case Xr:
      return Math.floor((i + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case Yr:
      return Math.floor((i + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    case qr:
    case Kr:
    case Zr:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
    case jr:
    case $r:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 8;
    case Jr:
    case Qr:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(`Unable to determine texture byte length for ${t} format.`);
}
function hh(i) {
  switch (i) {
    case Bt:
    case ko:
      return { byteLength: 1, components: 1 };
    case wi:
    case Wo:
    case _n:
      return { byteLength: 2, components: 1 };
    case ra:
    case aa:
      return { byteLength: 2, components: 4 };
    case nn:
    case sa:
    case $t:
      return { byteLength: 4, components: 1 };
    case Xo:
    case Yo:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${i}.`);
}
typeof __THREE_DEVTOOLS__ < "u" &&
  __THREE_DEVTOOLS__.dispatchEvent(
    new CustomEvent("register", { detail: { revision: ia } })
  );
typeof window < "u" &&
  (window.__THREE__
    ? we("WARNING: Multiple instances of Three.js being imported.")
    : (window.__THREE__ = ia));
function ul() {
  let i = null,
    e = !1,
    t = null,
    n = null;
  function s(r, a) {
    t(r, a), (n = i.requestAnimationFrame(s));
  }
  return {
    start: function () {
      e !== !0 && t !== null && ((n = i.requestAnimationFrame(s)), (e = !0));
    },
    stop: function () {
      i.cancelAnimationFrame(n), (e = !1);
    },
    setAnimationLoop: function (r) {
      t = r;
    },
    setContext: function (r) {
      i = r;
    },
  };
}
function uh(i) {
  const e = new WeakMap();
  function t(o, c) {
    const l = o.array,
      u = o.usage,
      d = l.byteLength,
      f = i.createBuffer();
    i.bindBuffer(c, f), i.bufferData(c, l, u), o.onUploadCallback();
    let _;
    if (l instanceof Float32Array) _ = i.FLOAT;
    else if (typeof Float16Array < "u" && l instanceof Float16Array)
      _ = i.HALF_FLOAT;
    else if (l instanceof Uint16Array)
      o.isFloat16BufferAttribute ? (_ = i.HALF_FLOAT) : (_ = i.UNSIGNED_SHORT);
    else if (l instanceof Int16Array) _ = i.SHORT;
    else if (l instanceof Uint32Array) _ = i.UNSIGNED_INT;
    else if (l instanceof Int32Array) _ = i.INT;
    else if (l instanceof Int8Array) _ = i.BYTE;
    else if (l instanceof Uint8Array) _ = i.UNSIGNED_BYTE;
    else if (l instanceof Uint8ClampedArray) _ = i.UNSIGNED_BYTE;
    else
      throw new Error(
        "THREE.WebGLAttributes: Unsupported buffer data format: " + l
      );
    return {
      buffer: f,
      type: _,
      bytesPerElement: l.BYTES_PER_ELEMENT,
      version: o.version,
      size: d,
    };
  }
  function n(o, c, l) {
    const u = c.array,
      d = c.updateRanges;
    if ((i.bindBuffer(l, o), d.length === 0)) i.bufferSubData(l, 0, u);
    else {
      d.sort((_, v) => _.start - v.start);
      let f = 0;
      for (let _ = 1; _ < d.length; _++) {
        const v = d[f],
          M = d[_];
        M.start <= v.start + v.count + 1
          ? (v.count = Math.max(v.count, M.start + M.count - v.start))
          : (++f, (d[f] = M));
      }
      d.length = f + 1;
      for (let _ = 0, v = d.length; _ < v; _++) {
        const M = d[_];
        i.bufferSubData(l, M.start * u.BYTES_PER_ELEMENT, u, M.start, M.count);
      }
      c.clearUpdateRanges();
    }
    c.onUploadCallback();
  }
  function s(o) {
    return o.isInterleavedBufferAttribute && (o = o.data), e.get(o);
  }
  function r(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    const c = e.get(o);
    c && (i.deleteBuffer(c.buffer), e.delete(o));
  }
  function a(o, c) {
    if (
      (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute)
    ) {
      const u = e.get(o);
      (!u || u.version < o.version) &&
        e.set(o, {
          buffer: o.buffer,
          type: o.type,
          bytesPerElement: o.elementSize,
          version: o.version,
        });
      return;
    }
    const l = e.get(o);
    if (l === void 0) e.set(o, t(o, c));
    else if (l.version < o.version) {
      if (l.size !== o.array.byteLength)
        throw new Error(
          "THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported."
        );
      n(l.buffer, o, c), (l.version = o.version);
    }
  }
  return { get: s, remove: r, update: a };
}
var dh = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,
  fh = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,
  ph = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,
  mh = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  _h = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,
  gh = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
  xh = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
  vh = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
  Mh = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,
  Sh = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,
  Eh = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,
  yh = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
  Th = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,
  bh = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,
  Ah = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,
  wh = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,
  Rh = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
  Ch = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
  Ph = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
  Dh = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,
  Lh = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,
  Ih = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,
  Uh = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,
  Nh = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,
  Fh = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,
  Oh = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,
  Bh = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
  zh = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,
  Vh = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
  Gh = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
  Hh = "gl_FragColor = linearToOutputTexel( gl_FragColor );",
  kh = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,
  Wh = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,
  Xh = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,
  Yh = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,
  qh = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
  Kh = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
  Zh = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
  jh = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
  $h = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
  Jh = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
  Qh = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,
  eu = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
  tu = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,
  nu = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,
  iu = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,
  su = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,
  ru = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
  au = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,
  ou = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
  lu = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,
  cu = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,
  hu = `uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,
  uu = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
  du = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,
  fu = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,
  pu = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
  mu = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  _u = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  gu = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,
  xu = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
  vu = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
  Mu = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
  Su = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  Eu = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
  yu = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
  Tu = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,
  bu = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
  Au = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,
  wu = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,
  Ru = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,
  Cu = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,
  Pu = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,
  Du = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  Lu = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  Iu = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,
  Uu = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,
  Nu = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,
  Fu = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,
  Ou = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,
  Bu = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,
  zu = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
  Vu = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,
  Gu = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
  Hu = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
  ku = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
  Wu = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
  Xu = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
  Yu = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
  qu = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,
  Ku = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
  Zu = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,
  ju = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,
  $u = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
  Ju = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,
  Qu = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
  ed = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,
  td = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
  nd = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
  id = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
  sd = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,
  rd = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,
  ad = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,
  od = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  ld = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  cd = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,
  hd = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const ud = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
  dd = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  fd = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  pd = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  md = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  _d = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  gd = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,
  xd = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,
  vd = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,
  Md = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,
  Sd = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
  Ed = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  yd = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  Td = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  bd = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,
  Ad = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  wd = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  Rd = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Cd = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,
  Pd = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Dd = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
  Ld = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,
  Id = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  Ud = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Nd = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,
  Fd = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Od = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  Bd = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  zd = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,
  Vd = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  Gd = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  Hd = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,
  kd = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  Wd = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,
  Le = {
    alphahash_fragment: dh,
    alphahash_pars_fragment: fh,
    alphamap_fragment: ph,
    alphamap_pars_fragment: mh,
    alphatest_fragment: _h,
    alphatest_pars_fragment: gh,
    aomap_fragment: xh,
    aomap_pars_fragment: vh,
    batching_pars_vertex: Mh,
    batching_vertex: Sh,
    begin_vertex: Eh,
    beginnormal_vertex: yh,
    bsdfs: Th,
    iridescence_fragment: bh,
    bumpmap_pars_fragment: Ah,
    clipping_planes_fragment: wh,
    clipping_planes_pars_fragment: Rh,
    clipping_planes_pars_vertex: Ch,
    clipping_planes_vertex: Ph,
    color_fragment: Dh,
    color_pars_fragment: Lh,
    color_pars_vertex: Ih,
    color_vertex: Uh,
    common: Nh,
    cube_uv_reflection_fragment: Fh,
    defaultnormal_vertex: Oh,
    displacementmap_pars_vertex: Bh,
    displacementmap_vertex: zh,
    emissivemap_fragment: Vh,
    emissivemap_pars_fragment: Gh,
    colorspace_fragment: Hh,
    colorspace_pars_fragment: kh,
    envmap_fragment: Wh,
    envmap_common_pars_fragment: Xh,
    envmap_pars_fragment: Yh,
    envmap_pars_vertex: qh,
    envmap_physical_pars_fragment: su,
    envmap_vertex: Kh,
    fog_vertex: Zh,
    fog_pars_vertex: jh,
    fog_fragment: $h,
    fog_pars_fragment: Jh,
    gradientmap_pars_fragment: Qh,
    lightmap_pars_fragment: eu,
    lights_lambert_fragment: tu,
    lights_lambert_pars_fragment: nu,
    lights_pars_begin: iu,
    lights_toon_fragment: ru,
    lights_toon_pars_fragment: au,
    lights_phong_fragment: ou,
    lights_phong_pars_fragment: lu,
    lights_physical_fragment: cu,
    lights_physical_pars_fragment: hu,
    lights_fragment_begin: uu,
    lights_fragment_maps: du,
    lights_fragment_end: fu,
    logdepthbuf_fragment: pu,
    logdepthbuf_pars_fragment: mu,
    logdepthbuf_pars_vertex: _u,
    logdepthbuf_vertex: gu,
    map_fragment: xu,
    map_pars_fragment: vu,
    map_particle_fragment: Mu,
    map_particle_pars_fragment: Su,
    metalnessmap_fragment: Eu,
    metalnessmap_pars_fragment: yu,
    morphinstance_vertex: Tu,
    morphcolor_vertex: bu,
    morphnormal_vertex: Au,
    morphtarget_pars_vertex: wu,
    morphtarget_vertex: Ru,
    normal_fragment_begin: Cu,
    normal_fragment_maps: Pu,
    normal_pars_fragment: Du,
    normal_pars_vertex: Lu,
    normal_vertex: Iu,
    normalmap_pars_fragment: Uu,
    clearcoat_normal_fragment_begin: Nu,
    clearcoat_normal_fragment_maps: Fu,
    clearcoat_pars_fragment: Ou,
    iridescence_pars_fragment: Bu,
    opaque_fragment: zu,
    packing: Vu,
    premultiplied_alpha_fragment: Gu,
    project_vertex: Hu,
    dithering_fragment: ku,
    dithering_pars_fragment: Wu,
    roughnessmap_fragment: Xu,
    roughnessmap_pars_fragment: Yu,
    shadowmap_pars_fragment: qu,
    shadowmap_pars_vertex: Ku,
    shadowmap_vertex: Zu,
    shadowmask_pars_fragment: ju,
    skinbase_vertex: $u,
    skinning_pars_vertex: Ju,
    skinning_vertex: Qu,
    skinnormal_vertex: ed,
    specularmap_fragment: td,
    specularmap_pars_fragment: nd,
    tonemapping_fragment: id,
    tonemapping_pars_fragment: sd,
    transmission_fragment: rd,
    transmission_pars_fragment: ad,
    uv_pars_fragment: od,
    uv_pars_vertex: ld,
    uv_vertex: cd,
    worldpos_vertex: hd,
    background_vert: ud,
    background_frag: dd,
    backgroundCube_vert: fd,
    backgroundCube_frag: pd,
    cube_vert: md,
    cube_frag: _d,
    depth_vert: gd,
    depth_frag: xd,
    distance_vert: vd,
    distance_frag: Md,
    equirect_vert: Sd,
    equirect_frag: Ed,
    linedashed_vert: yd,
    linedashed_frag: Td,
    meshbasic_vert: bd,
    meshbasic_frag: Ad,
    meshlambert_vert: wd,
    meshlambert_frag: Rd,
    meshmatcap_vert: Cd,
    meshmatcap_frag: Pd,
    meshnormal_vert: Dd,
    meshnormal_frag: Ld,
    meshphong_vert: Id,
    meshphong_frag: Ud,
    meshphysical_vert: Nd,
    meshphysical_frag: Fd,
    meshtoon_vert: Od,
    meshtoon_frag: Bd,
    points_vert: zd,
    points_frag: Vd,
    shadow_vert: Gd,
    shadow_frag: Hd,
    sprite_vert: kd,
    sprite_frag: Wd,
  },
  oe = {
    common: {
      diffuse: { value: new ze(16777215) },
      opacity: { value: 1 },
      map: { value: null },
      mapTransform: { value: new De() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new De() },
      alphaTest: { value: 0 },
    },
    specularmap: {
      specularMap: { value: null },
      specularMapTransform: { value: new De() },
    },
    envmap: {
      envMap: { value: null },
      envMapRotation: { value: new De() },
      flipEnvMap: { value: -1 },
      reflectivity: { value: 1 },
      ior: { value: 1.5 },
      refractionRatio: { value: 0.98 },
      dfgLUT: { value: null },
    },
    aomap: {
      aoMap: { value: null },
      aoMapIntensity: { value: 1 },
      aoMapTransform: { value: new De() },
    },
    lightmap: {
      lightMap: { value: null },
      lightMapIntensity: { value: 1 },
      lightMapTransform: { value: new De() },
    },
    bumpmap: {
      bumpMap: { value: null },
      bumpMapTransform: { value: new De() },
      bumpScale: { value: 1 },
    },
    normalmap: {
      normalMap: { value: null },
      normalMapTransform: { value: new De() },
      normalScale: { value: new Ce(1, 1) },
    },
    displacementmap: {
      displacementMap: { value: null },
      displacementMapTransform: { value: new De() },
      displacementScale: { value: 1 },
      displacementBias: { value: 0 },
    },
    emissivemap: {
      emissiveMap: { value: null },
      emissiveMapTransform: { value: new De() },
    },
    metalnessmap: {
      metalnessMap: { value: null },
      metalnessMapTransform: { value: new De() },
    },
    roughnessmap: {
      roughnessMap: { value: null },
      roughnessMapTransform: { value: new De() },
    },
    gradientmap: { gradientMap: { value: null } },
    fog: {
      fogDensity: { value: 25e-5 },
      fogNear: { value: 1 },
      fogFar: { value: 2e3 },
      fogColor: { value: new ze(16777215) },
    },
    lights: {
      ambientLightColor: { value: [] },
      lightProbe: { value: [] },
      directionalLights: {
        value: [],
        properties: { direction: {}, color: {} },
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      directionalShadowMap: { value: [] },
      directionalShadowMatrix: { value: [] },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {},
        },
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      spotLightMap: { value: [] },
      spotShadowMap: { value: [] },
      spotLightMatrix: { value: [] },
      pointLights: {
        value: [],
        properties: { color: {}, position: {}, decay: {}, distance: {} },
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {},
        },
      },
      pointShadowMap: { value: [] },
      pointShadowMatrix: { value: [] },
      hemisphereLights: {
        value: [],
        properties: { direction: {}, skyColor: {}, groundColor: {} },
      },
      rectAreaLights: {
        value: [],
        properties: { color: {}, position: {}, width: {}, height: {} },
      },
      ltc_1: { value: null },
      ltc_2: { value: null },
    },
    points: {
      diffuse: { value: new ze(16777215) },
      opacity: { value: 1 },
      size: { value: 1 },
      scale: { value: 1 },
      map: { value: null },
      alphaMap: { value: null },
      alphaMapTransform: { value: new De() },
      alphaTest: { value: 0 },
      uvTransform: { value: new De() },
    },
    sprite: {
      diffuse: { value: new ze(16777215) },
      opacity: { value: 1 },
      center: { value: new Ce(0.5, 0.5) },
      rotation: { value: 0 },
      map: { value: null },
      mapTransform: { value: new De() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new De() },
      alphaTest: { value: 0 },
    },
  },
  jt = {
    basic: {
      uniforms: bt([
        oe.common,
        oe.specularmap,
        oe.envmap,
        oe.aomap,
        oe.lightmap,
        oe.fog,
      ]),
      vertexShader: Le.meshbasic_vert,
      fragmentShader: Le.meshbasic_frag,
    },
    lambert: {
      uniforms: bt([
        oe.common,
        oe.specularmap,
        oe.envmap,
        oe.aomap,
        oe.lightmap,
        oe.emissivemap,
        oe.bumpmap,
        oe.normalmap,
        oe.displacementmap,
        oe.fog,
        oe.lights,
        { emissive: { value: new ze(0) } },
      ]),
      vertexShader: Le.meshlambert_vert,
      fragmentShader: Le.meshlambert_frag,
    },
    phong: {
      uniforms: bt([
        oe.common,
        oe.specularmap,
        oe.envmap,
        oe.aomap,
        oe.lightmap,
        oe.emissivemap,
        oe.bumpmap,
        oe.normalmap,
        oe.displacementmap,
        oe.fog,
        oe.lights,
        {
          emissive: { value: new ze(0) },
          specular: { value: new ze(1118481) },
          shininess: { value: 30 },
        },
      ]),
      vertexShader: Le.meshphong_vert,
      fragmentShader: Le.meshphong_frag,
    },
    standard: {
      uniforms: bt([
        oe.common,
        oe.envmap,
        oe.aomap,
        oe.lightmap,
        oe.emissivemap,
        oe.bumpmap,
        oe.normalmap,
        oe.displacementmap,
        oe.roughnessmap,
        oe.metalnessmap,
        oe.fog,
        oe.lights,
        {
          emissive: { value: new ze(0) },
          roughness: { value: 1 },
          metalness: { value: 0 },
          envMapIntensity: { value: 1 },
        },
      ]),
      vertexShader: Le.meshphysical_vert,
      fragmentShader: Le.meshphysical_frag,
    },
    toon: {
      uniforms: bt([
        oe.common,
        oe.aomap,
        oe.lightmap,
        oe.emissivemap,
        oe.bumpmap,
        oe.normalmap,
        oe.displacementmap,
        oe.gradientmap,
        oe.fog,
        oe.lights,
        { emissive: { value: new ze(0) } },
      ]),
      vertexShader: Le.meshtoon_vert,
      fragmentShader: Le.meshtoon_frag,
    },
    matcap: {
      uniforms: bt([
        oe.common,
        oe.bumpmap,
        oe.normalmap,
        oe.displacementmap,
        oe.fog,
        { matcap: { value: null } },
      ]),
      vertexShader: Le.meshmatcap_vert,
      fragmentShader: Le.meshmatcap_frag,
    },
    points: {
      uniforms: bt([oe.points, oe.fog]),
      vertexShader: Le.points_vert,
      fragmentShader: Le.points_frag,
    },
    dashed: {
      uniforms: bt([
        oe.common,
        oe.fog,
        {
          scale: { value: 1 },
          dashSize: { value: 1 },
          totalSize: { value: 2 },
        },
      ]),
      vertexShader: Le.linedashed_vert,
      fragmentShader: Le.linedashed_frag,
    },
    depth: {
      uniforms: bt([oe.common, oe.displacementmap]),
      vertexShader: Le.depth_vert,
      fragmentShader: Le.depth_frag,
    },
    normal: {
      uniforms: bt([
        oe.common,
        oe.bumpmap,
        oe.normalmap,
        oe.displacementmap,
        { opacity: { value: 1 } },
      ]),
      vertexShader: Le.meshnormal_vert,
      fragmentShader: Le.meshnormal_frag,
    },
    sprite: {
      uniforms: bt([oe.sprite, oe.fog]),
      vertexShader: Le.sprite_vert,
      fragmentShader: Le.sprite_frag,
    },
    background: {
      uniforms: {
        uvTransform: { value: new De() },
        t2D: { value: null },
        backgroundIntensity: { value: 1 },
      },
      vertexShader: Le.background_vert,
      fragmentShader: Le.background_frag,
    },
    backgroundCube: {
      uniforms: {
        envMap: { value: null },
        flipEnvMap: { value: -1 },
        backgroundBlurriness: { value: 0 },
        backgroundIntensity: { value: 1 },
        backgroundRotation: { value: new De() },
      },
      vertexShader: Le.backgroundCube_vert,
      fragmentShader: Le.backgroundCube_frag,
    },
    cube: {
      uniforms: {
        tCube: { value: null },
        tFlip: { value: -1 },
        opacity: { value: 1 },
      },
      vertexShader: Le.cube_vert,
      fragmentShader: Le.cube_frag,
    },
    equirect: {
      uniforms: { tEquirect: { value: null } },
      vertexShader: Le.equirect_vert,
      fragmentShader: Le.equirect_frag,
    },
    distance: {
      uniforms: bt([
        oe.common,
        oe.displacementmap,
        {
          referencePosition: { value: new U() },
          nearDistance: { value: 1 },
          farDistance: { value: 1e3 },
        },
      ]),
      vertexShader: Le.distance_vert,
      fragmentShader: Le.distance_frag,
    },
    shadow: {
      uniforms: bt([
        oe.lights,
        oe.fog,
        { color: { value: new ze(0) }, opacity: { value: 1 } },
      ]),
      vertexShader: Le.shadow_vert,
      fragmentShader: Le.shadow_frag,
    },
  };
jt.physical = {
  uniforms: bt([
    jt.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: new De() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: new De() },
      clearcoatNormalScale: { value: new Ce(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: new De() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: new De() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: new De() },
      sheen: { value: 0 },
      sheenColor: { value: new ze(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: new De() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: new De() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: new De() },
      transmissionSamplerSize: { value: new Ce() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: new De() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: new ze(0) },
      specularColor: { value: new ze(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: new De() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: new De() },
      anisotropyVector: { value: new Ce() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: new De() },
    },
  ]),
  vertexShader: Le.meshphysical_vert,
  fragmentShader: Le.meshphysical_frag,
};
const ls = { r: 0, b: 0, g: 0 },
  Un = new sn(),
  Xd = new rt();
function Yd(i, e, t, n, s, r, a) {
  const o = new ze(0);
  let c = r === !0 ? 0 : 1,
    l,
    u,
    d = null,
    f = 0,
    _ = null;
  function v(b) {
    let y = b.isScene === !0 ? b.background : null;
    return (
      y && y.isTexture && (y = (b.backgroundBlurriness > 0 ? t : e).get(y)), y
    );
  }
  function M(b) {
    let y = !1;
    const A = v(b);
    A === null ? h(o, c) : A && A.isColor && (h(A, 1), (y = !0));
    const w = i.xr.getEnvironmentBlendMode();
    w === "additive"
      ? n.buffers.color.setClear(0, 0, 0, 1, a)
      : w === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a),
      (i.autoClear || y) &&
        (n.buffers.depth.setTest(!0),
        n.buffers.depth.setMask(!0),
        n.buffers.color.setMask(!0),
        i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil));
  }
  function p(b, y) {
    const A = v(y);
    A && (A.isCubeTexture || A.mapping === ys)
      ? (u === void 0 &&
          ((u = new xt(
            new Ui(1, 1, 1),
            new rn({
              name: "BackgroundCubeMaterial",
              uniforms: di(jt.backgroundCube.uniforms),
              vertexShader: jt.backgroundCube.vertexShader,
              fragmentShader: jt.backgroundCube.fragmentShader,
              side: Lt,
              depthTest: !1,
              depthWrite: !1,
              fog: !1,
              allowOverride: !1,
            })
          )),
          u.geometry.deleteAttribute("normal"),
          u.geometry.deleteAttribute("uv"),
          (u.onBeforeRender = function (w, R, F) {
            this.matrixWorld.copyPosition(F.matrixWorld);
          }),
          Object.defineProperty(u.material, "envMap", {
            get: function () {
              return this.uniforms.envMap.value;
            },
          }),
          s.update(u)),
        Un.copy(y.backgroundRotation),
        (Un.x *= -1),
        (Un.y *= -1),
        (Un.z *= -1),
        A.isCubeTexture &&
          A.isRenderTargetTexture === !1 &&
          ((Un.y *= -1), (Un.z *= -1)),
        (u.material.uniforms.envMap.value = A),
        (u.material.uniforms.flipEnvMap.value =
          A.isCubeTexture && A.isRenderTargetTexture === !1 ? -1 : 1),
        (u.material.uniforms.backgroundBlurriness.value =
          y.backgroundBlurriness),
        (u.material.uniforms.backgroundIntensity.value = y.backgroundIntensity),
        u.material.uniforms.backgroundRotation.value.setFromMatrix4(
          Xd.makeRotationFromEuler(Un)
        ),
        (u.material.toneMapped = Ge.getTransfer(A.colorSpace) !== Ze),
        (d !== A || f !== A.version || _ !== i.toneMapping) &&
          ((u.material.needsUpdate = !0),
          (d = A),
          (f = A.version),
          (_ = i.toneMapping)),
        u.layers.enableAll(),
        b.unshift(u, u.geometry, u.material, 0, 0, null))
      : A &&
        A.isTexture &&
        (l === void 0 &&
          ((l = new xt(
            new Fi(2, 2),
            new rn({
              name: "BackgroundMaterial",
              uniforms: di(jt.background.uniforms),
              vertexShader: jt.background.vertexShader,
              fragmentShader: jt.background.fragmentShader,
              side: wn,
              depthTest: !1,
              depthWrite: !1,
              fog: !1,
              allowOverride: !1,
            })
          )),
          l.geometry.deleteAttribute("normal"),
          Object.defineProperty(l.material, "map", {
            get: function () {
              return this.uniforms.t2D.value;
            },
          }),
          s.update(l)),
        (l.material.uniforms.t2D.value = A),
        (l.material.uniforms.backgroundIntensity.value = y.backgroundIntensity),
        (l.material.toneMapped = Ge.getTransfer(A.colorSpace) !== Ze),
        A.matrixAutoUpdate === !0 && A.updateMatrix(),
        l.material.uniforms.uvTransform.value.copy(A.matrix),
        (d !== A || f !== A.version || _ !== i.toneMapping) &&
          ((l.material.needsUpdate = !0),
          (d = A),
          (f = A.version),
          (_ = i.toneMapping)),
        l.layers.enableAll(),
        b.unshift(l, l.geometry, l.material, 0, 0, null));
  }
  function h(b, y) {
    b.getRGB(ls, sl(i)), n.buffers.color.setClear(ls.r, ls.g, ls.b, y, a);
  }
  function T() {
    u !== void 0 && (u.geometry.dispose(), u.material.dispose(), (u = void 0)),
      l !== void 0 &&
        (l.geometry.dispose(), l.material.dispose(), (l = void 0));
  }
  return {
    getClearColor: function () {
      return o;
    },
    setClearColor: function (b, y = 1) {
      o.set(b), (c = y), h(o, c);
    },
    getClearAlpha: function () {
      return c;
    },
    setClearAlpha: function (b) {
      (c = b), h(o, c);
    },
    render: M,
    addToRenderList: p,
    dispose: T,
  };
}
function qd(i, e) {
  const t = i.getParameter(i.MAX_VERTEX_ATTRIBS),
    n = {},
    s = f(null);
  let r = s,
    a = !1;
  function o(S, P, O, B, X) {
    let W = !1;
    const H = d(B, O, P);
    r !== H && ((r = H), l(r.object)),
      (W = _(S, B, O, X)),
      W && v(S, B, O, X),
      X !== null && e.update(X, i.ELEMENT_ARRAY_BUFFER),
      (W || a) &&
        ((a = !1),
        y(S, P, O, B),
        X !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, e.get(X).buffer));
  }
  function c() {
    return i.createVertexArray();
  }
  function l(S) {
    return i.bindVertexArray(S);
  }
  function u(S) {
    return i.deleteVertexArray(S);
  }
  function d(S, P, O) {
    const B = O.wireframe === !0;
    let X = n[S.id];
    X === void 0 && ((X = {}), (n[S.id] = X));
    let W = X[P.id];
    W === void 0 && ((W = {}), (X[P.id] = W));
    let H = W[B];
    return H === void 0 && ((H = f(c())), (W[B] = H)), H;
  }
  function f(S) {
    const P = [],
      O = [],
      B = [];
    for (let X = 0; X < t; X++) (P[X] = 0), (O[X] = 0), (B[X] = 0);
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: P,
      enabledAttributes: O,
      attributeDivisors: B,
      object: S,
      attributes: {},
      index: null,
    };
  }
  function _(S, P, O, B) {
    const X = r.attributes,
      W = P.attributes;
    let H = 0;
    const G = O.getAttributes();
    for (const j in G)
      if (G[j].location >= 0) {
        const ae = X[j];
        let ue = W[j];
        if (
          (ue === void 0 &&
            (j === "instanceMatrix" &&
              S.instanceMatrix &&
              (ue = S.instanceMatrix),
            j === "instanceColor" && S.instanceColor && (ue = S.instanceColor)),
          ae === void 0 || ae.attribute !== ue || (ue && ae.data !== ue.data))
        )
          return !0;
        H++;
      }
    return r.attributesNum !== H || r.index !== B;
  }
  function v(S, P, O, B) {
    const X = {},
      W = P.attributes;
    let H = 0;
    const G = O.getAttributes();
    for (const j in G)
      if (G[j].location >= 0) {
        let ae = W[j];
        ae === void 0 &&
          (j === "instanceMatrix" &&
            S.instanceMatrix &&
            (ae = S.instanceMatrix),
          j === "instanceColor" && S.instanceColor && (ae = S.instanceColor));
        const ue = {};
        (ue.attribute = ae),
          ae && ae.data && (ue.data = ae.data),
          (X[j] = ue),
          H++;
      }
    (r.attributes = X), (r.attributesNum = H), (r.index = B);
  }
  function M() {
    const S = r.newAttributes;
    for (let P = 0, O = S.length; P < O; P++) S[P] = 0;
  }
  function p(S) {
    h(S, 0);
  }
  function h(S, P) {
    const O = r.newAttributes,
      B = r.enabledAttributes,
      X = r.attributeDivisors;
    (O[S] = 1),
      B[S] === 0 && (i.enableVertexAttribArray(S), (B[S] = 1)),
      X[S] !== P && (i.vertexAttribDivisor(S, P), (X[S] = P));
  }
  function T() {
    const S = r.newAttributes,
      P = r.enabledAttributes;
    for (let O = 0, B = P.length; O < B; O++)
      P[O] !== S[O] && (i.disableVertexAttribArray(O), (P[O] = 0));
  }
  function b(S, P, O, B, X, W, H) {
    H === !0
      ? i.vertexAttribIPointer(S, P, O, X, W)
      : i.vertexAttribPointer(S, P, O, B, X, W);
  }
  function y(S, P, O, B) {
    M();
    const X = B.attributes,
      W = O.getAttributes(),
      H = P.defaultAttributeValues;
    for (const G in W) {
      const j = W[G];
      if (j.location >= 0) {
        let he = X[G];
        if (
          (he === void 0 &&
            (G === "instanceMatrix" &&
              S.instanceMatrix &&
              (he = S.instanceMatrix),
            G === "instanceColor" && S.instanceColor && (he = S.instanceColor)),
          he !== void 0)
        ) {
          const ae = he.normalized,
            ue = he.itemSize,
            Fe = e.get(he);
          if (Fe === void 0) continue;
          const Ie = Fe.buffer,
            st = Fe.type,
            it = Fe.bytesPerElement,
            q = st === i.INT || st === i.UNSIGNED_INT || he.gpuType === sa;
          if (he.isInterleavedBufferAttribute) {
            const $ = he.data,
              pe = $.stride,
              Pe = he.offset;
            if ($.isInstancedInterleavedBuffer) {
              for (let ge = 0; ge < j.locationSize; ge++)
                h(j.location + ge, $.meshPerAttribute);
              S.isInstancedMesh !== !0 &&
                B._maxInstanceCount === void 0 &&
                (B._maxInstanceCount = $.meshPerAttribute * $.count);
            } else
              for (let ge = 0; ge < j.locationSize; ge++) p(j.location + ge);
            i.bindBuffer(i.ARRAY_BUFFER, Ie);
            for (let ge = 0; ge < j.locationSize; ge++)
              b(
                j.location + ge,
                ue / j.locationSize,
                st,
                ae,
                pe * it,
                (Pe + (ue / j.locationSize) * ge) * it,
                q
              );
          } else {
            if (he.isInstancedBufferAttribute) {
              for (let $ = 0; $ < j.locationSize; $++)
                h(j.location + $, he.meshPerAttribute);
              S.isInstancedMesh !== !0 &&
                B._maxInstanceCount === void 0 &&
                (B._maxInstanceCount = he.meshPerAttribute * he.count);
            } else for (let $ = 0; $ < j.locationSize; $++) p(j.location + $);
            i.bindBuffer(i.ARRAY_BUFFER, Ie);
            for (let $ = 0; $ < j.locationSize; $++)
              b(
                j.location + $,
                ue / j.locationSize,
                st,
                ae,
                ue * it,
                (ue / j.locationSize) * $ * it,
                q
              );
          }
        } else if (H !== void 0) {
          const ae = H[G];
          if (ae !== void 0)
            switch (ae.length) {
              case 2:
                i.vertexAttrib2fv(j.location, ae);
                break;
              case 3:
                i.vertexAttrib3fv(j.location, ae);
                break;
              case 4:
                i.vertexAttrib4fv(j.location, ae);
                break;
              default:
                i.vertexAttrib1fv(j.location, ae);
            }
        }
      }
    }
    T();
  }
  function A() {
    F();
    for (const S in n) {
      const P = n[S];
      for (const O in P) {
        const B = P[O];
        for (const X in B) u(B[X].object), delete B[X];
        delete P[O];
      }
      delete n[S];
    }
  }
  function w(S) {
    if (n[S.id] === void 0) return;
    const P = n[S.id];
    for (const O in P) {
      const B = P[O];
      for (const X in B) u(B[X].object), delete B[X];
      delete P[O];
    }
    delete n[S.id];
  }
  function R(S) {
    for (const P in n) {
      const O = n[P];
      if (O[S.id] === void 0) continue;
      const B = O[S.id];
      for (const X in B) u(B[X].object), delete B[X];
      delete O[S.id];
    }
  }
  function F() {
    g(), (a = !0), r !== s && ((r = s), l(r.object));
  }
  function g() {
    (s.geometry = null), (s.program = null), (s.wireframe = !1);
  }
  return {
    setup: o,
    reset: F,
    resetDefaultState: g,
    dispose: A,
    releaseStatesOfGeometry: w,
    releaseStatesOfProgram: R,
    initAttributes: M,
    enableAttribute: p,
    disableUnusedAttributes: T,
  };
}
function Kd(i, e, t) {
  let n;
  function s(l) {
    n = l;
  }
  function r(l, u) {
    i.drawArrays(n, l, u), t.update(u, n, 1);
  }
  function a(l, u, d) {
    d !== 0 && (i.drawArraysInstanced(n, l, u, d), t.update(u, n, d));
  }
  function o(l, u, d) {
    if (d === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, l, 0, u, 0, d);
    let _ = 0;
    for (let v = 0; v < d; v++) _ += u[v];
    t.update(_, n, 1);
  }
  function c(l, u, d, f) {
    if (d === 0) return;
    const _ = e.get("WEBGL_multi_draw");
    if (_ === null) for (let v = 0; v < l.length; v++) a(l[v], u[v], f[v]);
    else {
      _.multiDrawArraysInstancedWEBGL(n, l, 0, u, 0, f, 0, d);
      let v = 0;
      for (let M = 0; M < d; M++) v += u[M] * f[M];
      t.update(v, n, 1);
    }
  }
  (this.setMode = s),
    (this.render = r),
    (this.renderInstances = a),
    (this.renderMultiDraw = o),
    (this.renderMultiDrawInstances = c);
}
function Zd(i, e, t, n) {
  let s;
  function r() {
    if (s !== void 0) return s;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const R = e.get("EXT_texture_filter_anisotropic");
      s = i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else s = 0;
    return s;
  }
  function a(R) {
    return !(
      R !== qt &&
      n.convert(R) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT)
    );
  }
  function o(R) {
    const F =
      R === _n &&
      (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(
      R !== Bt &&
      n.convert(R) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE) &&
      R !== $t &&
      !F
    );
  }
  function c(R) {
    if (R === "highp") {
      if (
        i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision >
          0 &&
        i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision >
          0
      )
        return "highp";
      R = "mediump";
    }
    return R === "mediump" &&
      i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision >
        0 &&
      i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision >
        0
      ? "mediump"
      : "lowp";
  }
  let l = t.precision !== void 0 ? t.precision : "highp";
  const u = c(l);
  u !== l &&
    (we("WebGLRenderer:", l, "not supported, using", u, "instead."), (l = u));
  const d = t.logarithmicDepthBuffer === !0,
    f = t.reversedDepthBuffer === !0 && e.has("EXT_clip_control"),
    _ = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),
    v = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
    M = i.getParameter(i.MAX_TEXTURE_SIZE),
    p = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),
    h = i.getParameter(i.MAX_VERTEX_ATTRIBS),
    T = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),
    b = i.getParameter(i.MAX_VARYING_VECTORS),
    y = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),
    A = i.getParameter(i.MAX_SAMPLES),
    w = i.getParameter(i.SAMPLES);
  return {
    isWebGL2: !0,
    getMaxAnisotropy: r,
    getMaxPrecision: c,
    textureFormatReadable: a,
    textureTypeReadable: o,
    precision: l,
    logarithmicDepthBuffer: d,
    reversedDepthBuffer: f,
    maxTextures: _,
    maxVertexTextures: v,
    maxTextureSize: M,
    maxCubemapSize: p,
    maxAttributes: h,
    maxVertexUniforms: T,
    maxVaryings: b,
    maxFragmentUniforms: y,
    maxSamples: A,
    samples: w,
  };
}
function jd(i) {
  const e = this;
  let t = null,
    n = 0,
    s = !1,
    r = !1;
  const a = new Tn(),
    o = new De(),
    c = { value: null, needsUpdate: !1 };
  (this.uniform = c),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (d, f) {
      const _ = d.length !== 0 || f || n !== 0 || s;
      return (s = f), (n = d.length), _;
    }),
    (this.beginShadows = function () {
      (r = !0), u(null);
    }),
    (this.endShadows = function () {
      r = !1;
    }),
    (this.setGlobalState = function (d, f) {
      t = u(d, f, 0);
    }),
    (this.setState = function (d, f, _) {
      const v = d.clippingPlanes,
        M = d.clipIntersection,
        p = d.clipShadows,
        h = i.get(d);
      if (!s || v === null || v.length === 0 || (r && !p)) r ? u(null) : l();
      else {
        const T = r ? 0 : n,
          b = T * 4;
        let y = h.clippingState || null;
        (c.value = y), (y = u(v, f, b, _));
        for (let A = 0; A !== b; ++A) y[A] = t[A];
        (h.clippingState = y),
          (this.numIntersection = M ? this.numPlanes : 0),
          (this.numPlanes += T);
      }
    });
  function l() {
    c.value !== t && ((c.value = t), (c.needsUpdate = n > 0)),
      (e.numPlanes = n),
      (e.numIntersection = 0);
  }
  function u(d, f, _, v) {
    const M = d !== null ? d.length : 0;
    let p = null;
    if (M !== 0) {
      if (((p = c.value), v !== !0 || p === null)) {
        const h = _ + M * 4,
          T = f.matrixWorldInverse;
        o.getNormalMatrix(T),
          (p === null || p.length < h) && (p = new Float32Array(h));
        for (let b = 0, y = _; b !== M; ++b, y += 4)
          a.copy(d[b]).applyMatrix4(T, o),
            a.normal.toArray(p, y),
            (p[y + 3] = a.constant);
      }
      (c.value = p), (c.needsUpdate = !0);
    }
    return (e.numPlanes = M), (e.numIntersection = 0), p;
  }
}
function $d(i) {
  let e = new WeakMap();
  function t(a, o) {
    return o === xr ? (a.mapping = Vn) : o === vr && (a.mapping = ci), a;
  }
  function n(a) {
    if (a && a.isTexture) {
      const o = a.mapping;
      if (o === xr || o === vr)
        if (e.has(a)) {
          const c = e.get(a).texture;
          return t(c, a.mapping);
        } else {
          const c = a.image;
          if (c && c.height > 0) {
            const l = new ol(c.height);
            return (
              l.fromEquirectangularTexture(i, a),
              e.set(a, l),
              a.addEventListener("dispose", s),
              t(l.texture, a.mapping)
            );
          } else return null;
        }
    }
    return a;
  }
  function s(a) {
    const o = a.target;
    o.removeEventListener("dispose", s);
    const c = e.get(o);
    c !== void 0 && (e.delete(o), c.dispose());
  }
  function r() {
    e = new WeakMap();
  }
  return { get: n, dispose: r };
}
const An = 4,
  lo = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
  On = 20,
  Jd = 256,
  yi = new ga(),
  co = new ze();
let nr = null,
  ir = 0,
  sr = 0,
  rr = !1;
const Qd = new U();
class ho {
  constructor(e) {
    (this._renderer = e),
      (this._pingPongRenderTarget = null),
      (this._lodMax = 0),
      (this._cubeSize = 0),
      (this._sizeLods = []),
      (this._sigmas = []),
      (this._lodMeshes = []),
      (this._backgroundBox = null),
      (this._cubemapMaterial = null),
      (this._equirectMaterial = null),
      (this._blurMaterial = null),
      (this._ggxMaterial = null);
  }
  fromScene(e, t = 0, n = 0.1, s = 100, r = {}) {
    const { size: a = 256, position: o = Qd } = r;
    (nr = this._renderer.getRenderTarget()),
      (ir = this._renderer.getActiveCubeFace()),
      (sr = this._renderer.getActiveMipmapLevel()),
      (rr = this._renderer.xr.enabled),
      (this._renderer.xr.enabled = !1),
      this._setSize(a);
    const c = this._allocateTargets();
    return (
      (c.depthBuffer = !0),
      this._sceneToCubeUV(e, n, s, c, o),
      t > 0 && this._blur(c, 0, 0, t),
      this._applyPMREM(c),
      this._cleanup(c),
      c
    );
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null &&
      ((this._cubemapMaterial = po()),
      this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null &&
      ((this._equirectMaterial = fo()),
      this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(),
      this._cubemapMaterial !== null && this._cubemapMaterial.dispose(),
      this._equirectMaterial !== null && this._equirectMaterial.dispose(),
      this._backgroundBox !== null &&
        (this._backgroundBox.geometry.dispose(),
        this._backgroundBox.material.dispose());
  }
  _setSize(e) {
    (this._lodMax = Math.floor(Math.log2(e))),
      (this._cubeSize = Math.pow(2, this._lodMax));
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(),
      this._ggxMaterial !== null && this._ggxMaterial.dispose(),
      this._pingPongRenderTarget !== null &&
        this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodMeshes.length; e++)
      this._lodMeshes[e].geometry.dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(nr, ir, sr),
      (this._renderer.xr.enabled = rr),
      (e.scissorTest = !1),
      ii(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === Vn || e.mapping === ci
      ? this._setSize(
          e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width
        )
      : this._setSize(e.image.width / 4),
      (nr = this._renderer.getRenderTarget()),
      (ir = this._renderer.getActiveCubeFace()),
      (sr = this._renderer.getActiveMipmapLevel()),
      (rr = this._renderer.xr.enabled),
      (this._renderer.xr.enabled = !1);
    const n = t || this._allocateTargets();
    return (
      this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n
    );
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112),
      t = 4 * this._cubeSize,
      n = {
        magFilter: yt,
        minFilter: yt,
        generateMipmaps: !1,
        type: _n,
        format: qt,
        colorSpace: ui,
        depthBuffer: !1,
      },
      s = uo(e, t, n);
    if (
      this._pingPongRenderTarget === null ||
      this._pingPongRenderTarget.width !== e ||
      this._pingPongRenderTarget.height !== t
    ) {
      this._pingPongRenderTarget !== null && this._dispose(),
        (this._pingPongRenderTarget = uo(e, t, n));
      const { _lodMax: r } = this;
      ({
        lodMeshes: this._lodMeshes,
        sizeLods: this._sizeLods,
        sigmas: this._sigmas,
      } = ef(r)),
        (this._blurMaterial = nf(r, e, t)),
        (this._ggxMaterial = tf(r, e, t));
    }
    return s;
  }
  _compileMaterial(e) {
    const t = new xt(new zt(), e);
    this._renderer.compile(t, yi);
  }
  _sceneToCubeUV(e, t, n, s, r) {
    const c = new Ot(90, 1, t, n),
      l = [1, -1, 1, 1, 1, 1],
      u = [1, 1, 1, -1, -1, -1],
      d = this._renderer,
      f = d.autoClear,
      _ = d.toneMapping;
    d.getClearColor(co),
      (d.toneMapping = Qt),
      (d.autoClear = !1),
      d.state.buffers.depth.getReversed() &&
        (d.setRenderTarget(s), d.clearDepth(), d.setRenderTarget(null)),
      this._backgroundBox === null &&
        (this._backgroundBox = new xt(
          new Ui(),
          new tl({
            name: "PMREM.Background",
            side: Lt,
            depthWrite: !1,
            depthTest: !1,
          })
        ));
    const M = this._backgroundBox,
      p = M.material;
    let h = !1;
    const T = e.background;
    T
      ? T.isColor && (p.color.copy(T), (e.background = null), (h = !0))
      : (p.color.copy(co), (h = !0));
    for (let b = 0; b < 6; b++) {
      const y = b % 3;
      y === 0
        ? (c.up.set(0, l[b], 0),
          c.position.set(r.x, r.y, r.z),
          c.lookAt(r.x + u[b], r.y, r.z))
        : y === 1
        ? (c.up.set(0, 0, l[b]),
          c.position.set(r.x, r.y, r.z),
          c.lookAt(r.x, r.y + u[b], r.z))
        : (c.up.set(0, l[b], 0),
          c.position.set(r.x, r.y, r.z),
          c.lookAt(r.x, r.y, r.z + u[b]));
      const A = this._cubeSize;
      ii(s, y * A, b > 2 ? A : 0, A, A),
        d.setRenderTarget(s),
        h && d.render(M, c),
        d.render(e, c);
    }
    (d.toneMapping = _), (d.autoClear = f), (e.background = T);
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer,
      s = e.mapping === Vn || e.mapping === ci;
    s
      ? (this._cubemapMaterial === null && (this._cubemapMaterial = po()),
        (this._cubemapMaterial.uniforms.flipEnvMap.value =
          e.isRenderTargetTexture === !1 ? -1 : 1))
      : this._equirectMaterial === null && (this._equirectMaterial = fo());
    const r = s ? this._cubemapMaterial : this._equirectMaterial,
      a = this._lodMeshes[0];
    a.material = r;
    const o = r.uniforms;
    o.envMap.value = e;
    const c = this._cubeSize;
    ii(t, 0, 0, 3 * c, 2 * c), n.setRenderTarget(t), n.render(a, yi);
  }
  _applyPMREM(e) {
    const t = this._renderer,
      n = t.autoClear;
    t.autoClear = !1;
    const s = this._lodMeshes.length;
    for (let r = 1; r < s; r++) this._applyGGXFilter(e, r - 1, r);
    t.autoClear = n;
  }
  _applyGGXFilter(e, t, n) {
    const s = this._renderer,
      r = this._pingPongRenderTarget,
      a = this._ggxMaterial,
      o = this._lodMeshes[n];
    o.material = a;
    const c = a.uniforms,
      l = n / (this._lodMeshes.length - 1),
      u = t / (this._lodMeshes.length - 1),
      d = Math.sqrt(l * l - u * u),
      f = 0 + l * 1.25,
      _ = d * f,
      { _lodMax: v } = this,
      M = this._sizeLods[n],
      p = 3 * M * (n > v - An ? n - v + An : 0),
      h = 4 * (this._cubeSize - M);
    (c.envMap.value = e.texture),
      (c.roughness.value = _),
      (c.mipInt.value = v - t),
      ii(r, p, h, 3 * M, 2 * M),
      s.setRenderTarget(r),
      s.render(o, yi),
      (c.envMap.value = r.texture),
      (c.roughness.value = 0),
      (c.mipInt.value = v - n),
      ii(e, p, h, 3 * M, 2 * M),
      s.setRenderTarget(e),
      s.render(o, yi);
  }
  _blur(e, t, n, s, r) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(e, a, t, n, s, "latitudinal", r),
      this._halfBlur(a, e, n, n, s, "longitudinal", r);
  }
  _halfBlur(e, t, n, s, r, a, o) {
    const c = this._renderer,
      l = this._blurMaterial;
    a !== "latitudinal" &&
      a !== "longitudinal" &&
      We("blur direction must be either latitudinal or longitudinal!");
    const u = 3,
      d = this._lodMeshes[s];
    d.material = l;
    const f = l.uniforms,
      _ = this._sizeLods[n] - 1,
      v = isFinite(r) ? Math.PI / (2 * _) : (2 * Math.PI) / (2 * On - 1),
      M = r / v,
      p = isFinite(r) ? 1 + Math.floor(u * M) : On;
    p > On &&
      we(
        `sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${On}`
      );
    const h = [];
    let T = 0;
    for (let R = 0; R < On; ++R) {
      const F = R / M,
        g = Math.exp((-F * F) / 2);
      h.push(g), R === 0 ? (T += g) : R < p && (T += 2 * g);
    }
    for (let R = 0; R < h.length; R++) h[R] = h[R] / T;
    (f.envMap.value = e.texture),
      (f.samples.value = p),
      (f.weights.value = h),
      (f.latitudinal.value = a === "latitudinal"),
      o && (f.poleAxis.value = o);
    const { _lodMax: b } = this;
    (f.dTheta.value = v), (f.mipInt.value = b - n);
    const y = this._sizeLods[s],
      A = 3 * y * (s > b - An ? s - b + An : 0),
      w = 4 * (this._cubeSize - y);
    ii(t, A, w, 3 * y, 2 * y), c.setRenderTarget(t), c.render(d, yi);
  }
}
function ef(i) {
  const e = [],
    t = [],
    n = [];
  let s = i;
  const r = i - An + 1 + lo.length;
  for (let a = 0; a < r; a++) {
    const o = Math.pow(2, s);
    e.push(o);
    let c = 1 / o;
    a > i - An ? (c = lo[a - i + An - 1]) : a === 0 && (c = 0), t.push(c);
    const l = 1 / (o - 2),
      u = -l,
      d = 1 + l,
      f = [u, u, d, u, d, d, u, u, d, d, u, d],
      _ = 6,
      v = 6,
      M = 3,
      p = 2,
      h = 1,
      T = new Float32Array(M * v * _),
      b = new Float32Array(p * v * _),
      y = new Float32Array(h * v * _);
    for (let w = 0; w < _; w++) {
      const R = ((w % 3) * 2) / 3 - 1,
        F = w > 2 ? 0 : -1,
        g = [
          R,
          F,
          0,
          R + 2 / 3,
          F,
          0,
          R + 2 / 3,
          F + 1,
          0,
          R,
          F,
          0,
          R + 2 / 3,
          F + 1,
          0,
          R,
          F + 1,
          0,
        ];
      T.set(g, M * v * w), b.set(f, p * v * w);
      const S = [w, w, w, w, w, w];
      y.set(S, h * v * w);
    }
    const A = new zt();
    A.setAttribute("position", new tn(T, M)),
      A.setAttribute("uv", new tn(b, p)),
      A.setAttribute("faceIndex", new tn(y, h)),
      n.push(new xt(A, null)),
      s > An && s--;
  }
  return { lodMeshes: n, sizeLods: e, sigmas: t };
}
function uo(i, e, t) {
  const n = new en(i, e, t);
  return (
    (n.texture.mapping = ys),
    (n.texture.name = "PMREM.cubeUv"),
    (n.scissorTest = !0),
    n
  );
}
function ii(i, e, t, n, s) {
  i.viewport.set(e, t, n, s), i.scissor.set(e, t, n, s);
}
function tf(i, e, t) {
  return new rn({
    name: "PMREMGGXConvolution",
    defines: {
      GGX_SAMPLES: Jd,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${i}.0`,
    },
    uniforms: {
      envMap: { value: null },
      roughness: { value: 0 },
      mipInt: { value: 0 },
    },
    vertexShader: bs(),
    fragmentShader: `

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

					
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

					
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

					
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,
    blending: pn,
    depthTest: !1,
    depthWrite: !1,
  });
}
function nf(i, e, t) {
  const n = new Float32Array(On),
    s = new U(0, 1, 0);
  return new rn({
    name: "SphericalGaussianBlur",
    defines: {
      n: On,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${i}.0`,
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: s },
    },
    vertexShader: bs(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
						
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
    blending: pn,
    depthTest: !1,
    depthWrite: !1,
  });
}
function fo() {
  return new rn({
    name: "EquirectangularToCubeUV",
    uniforms: { envMap: { value: null } },
    vertexShader: bs(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
    blending: pn,
    depthTest: !1,
    depthWrite: !1,
  });
}
function po() {
  return new rn({
    name: "CubemapToCubeUV",
    uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
    vertexShader: bs(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: pn,
    depthTest: !1,
    depthWrite: !1,
  });
}
function bs() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

					
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function sf(i) {
  let e = new WeakMap(),
    t = null;
  function n(o) {
    if (o && o.isTexture) {
      const c = o.mapping,
        l = c === xr || c === vr,
        u = c === Vn || c === ci;
      if (l || u) {
        let d = e.get(o);
        const f = d !== void 0 ? d.texture.pmremVersion : 0;
        if (o.isRenderTargetTexture && o.pmremVersion !== f)
          return (
            t === null && (t = new ho(i)),
            (d = l ? t.fromEquirectangular(o, d) : t.fromCubemap(o, d)),
            (d.texture.pmremVersion = o.pmremVersion),
            e.set(o, d),
            d.texture
          );
        if (d !== void 0) return d.texture;
        {
          const _ = o.image;
          return (l && _ && _.height > 0) || (u && _ && s(_))
            ? (t === null && (t = new ho(i)),
              (d = l ? t.fromEquirectangular(o) : t.fromCubemap(o)),
              (d.texture.pmremVersion = o.pmremVersion),
              e.set(o, d),
              o.addEventListener("dispose", r),
              d.texture)
            : null;
        }
      }
    }
    return o;
  }
  function s(o) {
    let c = 0;
    const l = 6;
    for (let u = 0; u < l; u++) o[u] !== void 0 && c++;
    return c === l;
  }
  function r(o) {
    const c = o.target;
    c.removeEventListener("dispose", r);
    const l = e.get(c);
    l !== void 0 && (e.delete(c), l.dispose());
  }
  function a() {
    (e = new WeakMap()), t !== null && (t.dispose(), (t = null));
  }
  return { get: n, dispose: a };
}
function rf(i) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0) return e[n];
    const s = i.getExtension(n);
    return (e[n] = s), s;
  }
  return {
    has: function (n) {
      return t(n) !== null;
    },
    init: function () {
      t("EXT_color_buffer_float"),
        t("WEBGL_clip_cull_distance"),
        t("OES_texture_float_linear"),
        t("EXT_color_buffer_half_float"),
        t("WEBGL_multisampled_render_to_texture"),
        t("WEBGL_render_shared_exponent");
    },
    get: function (n) {
      const s = t(n);
      return (
        s === null && Ci("WebGLRenderer: " + n + " extension not supported."), s
      );
    },
  };
}
function af(i, e, t, n) {
  const s = {},
    r = new WeakMap();
  function a(d) {
    const f = d.target;
    f.index !== null && e.remove(f.index);
    for (const v in f.attributes) e.remove(f.attributes[v]);
    f.removeEventListener("dispose", a), delete s[f.id];
    const _ = r.get(f);
    _ && (e.remove(_), r.delete(f)),
      n.releaseStatesOfGeometry(f),
      f.isInstancedBufferGeometry === !0 && delete f._maxInstanceCount,
      t.memory.geometries--;
  }
  function o(d, f) {
    return (
      s[f.id] === !0 ||
        (f.addEventListener("dispose", a),
        (s[f.id] = !0),
        t.memory.geometries++),
      f
    );
  }
  function c(d) {
    const f = d.attributes;
    for (const _ in f) e.update(f[_], i.ARRAY_BUFFER);
  }
  function l(d) {
    const f = [],
      _ = d.index,
      v = d.attributes.position;
    let M = 0;
    if (_ !== null) {
      const T = _.array;
      M = _.version;
      for (let b = 0, y = T.length; b < y; b += 3) {
        const A = T[b + 0],
          w = T[b + 1],
          R = T[b + 2];
        f.push(A, w, w, R, R, A);
      }
    } else if (v !== void 0) {
      const T = v.array;
      M = v.version;
      for (let b = 0, y = T.length / 3 - 1; b < y; b += 3) {
        const A = b + 0,
          w = b + 1,
          R = b + 2;
        f.push(A, w, w, R, R, A);
      }
    } else return;
    const p = new ($o(f) ? il : nl)(f, 1);
    p.version = M;
    const h = r.get(d);
    h && e.remove(h), r.set(d, p);
  }
  function u(d) {
    const f = r.get(d);
    if (f) {
      const _ = d.index;
      _ !== null && f.version < _.version && l(d);
    } else l(d);
    return r.get(d);
  }
  return { get: o, update: c, getWireframeAttribute: u };
}
function of(i, e, t) {
  let n;
  function s(f) {
    n = f;
  }
  let r, a;
  function o(f) {
    (r = f.type), (a = f.bytesPerElement);
  }
  function c(f, _) {
    i.drawElements(n, _, r, f * a), t.update(_, n, 1);
  }
  function l(f, _, v) {
    v !== 0 && (i.drawElementsInstanced(n, _, r, f * a, v), t.update(_, n, v));
  }
  function u(f, _, v) {
    if (v === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, _, 0, r, f, 0, v);
    let p = 0;
    for (let h = 0; h < v; h++) p += _[h];
    t.update(p, n, 1);
  }
  function d(f, _, v, M) {
    if (v === 0) return;
    const p = e.get("WEBGL_multi_draw");
    if (p === null) for (let h = 0; h < f.length; h++) l(f[h] / a, _[h], M[h]);
    else {
      p.multiDrawElementsInstancedWEBGL(n, _, 0, r, f, 0, M, 0, v);
      let h = 0;
      for (let T = 0; T < v; T++) h += _[T] * M[T];
      t.update(h, n, 1);
    }
  }
  (this.setMode = s),
    (this.setIndex = o),
    (this.render = c),
    (this.renderInstances = l),
    (this.renderMultiDraw = u),
    (this.renderMultiDrawInstances = d);
}
function lf(i) {
  const e = { geometries: 0, textures: 0 },
    t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function n(r, a, o) {
    switch ((t.calls++, a)) {
      case i.TRIANGLES:
        t.triangles += o * (r / 3);
        break;
      case i.LINES:
        t.lines += o * (r / 2);
        break;
      case i.LINE_STRIP:
        t.lines += o * (r - 1);
        break;
      case i.LINE_LOOP:
        t.lines += o * r;
        break;
      case i.POINTS:
        t.points += o * r;
        break;
      default:
        We("WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function s() {
    (t.calls = 0), (t.triangles = 0), (t.points = 0), (t.lines = 0);
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: s,
    update: n,
  };
}
function cf(i, e, t) {
  const n = new WeakMap(),
    s = new lt();
  function r(a, o, c) {
    const l = a.morphTargetInfluences,
      u =
        o.morphAttributes.position ||
        o.morphAttributes.normal ||
        o.morphAttributes.color,
      d = u !== void 0 ? u.length : 0;
    let f = n.get(o);
    if (f === void 0 || f.count !== d) {
      let S = function () {
        F.dispose(), n.delete(o), o.removeEventListener("dispose", S);
      };
      var _ = S;
      f !== void 0 && f.texture.dispose();
      const v = o.morphAttributes.position !== void 0,
        M = o.morphAttributes.normal !== void 0,
        p = o.morphAttributes.color !== void 0,
        h = o.morphAttributes.position || [],
        T = o.morphAttributes.normal || [],
        b = o.morphAttributes.color || [];
      let y = 0;
      v === !0 && (y = 1), M === !0 && (y = 2), p === !0 && (y = 3);
      let A = o.attributes.position.count * y,
        w = 1;
      A > e.maxTextureSize &&
        ((w = Math.ceil(A / e.maxTextureSize)), (A = e.maxTextureSize));
      const R = new Float32Array(A * w * 4 * d),
        F = new Jo(R, A, w, d);
      (F.type = $t), (F.needsUpdate = !0);
      const g = y * 4;
      for (let P = 0; P < d; P++) {
        const O = h[P],
          B = T[P],
          X = b[P],
          W = A * w * 4 * P;
        for (let H = 0; H < O.count; H++) {
          const G = H * g;
          v === !0 &&
            (s.fromBufferAttribute(O, H),
            (R[W + G + 0] = s.x),
            (R[W + G + 1] = s.y),
            (R[W + G + 2] = s.z),
            (R[W + G + 3] = 0)),
            M === !0 &&
              (s.fromBufferAttribute(B, H),
              (R[W + G + 4] = s.x),
              (R[W + G + 5] = s.y),
              (R[W + G + 6] = s.z),
              (R[W + G + 7] = 0)),
            p === !0 &&
              (s.fromBufferAttribute(X, H),
              (R[W + G + 8] = s.x),
              (R[W + G + 9] = s.y),
              (R[W + G + 10] = s.z),
              (R[W + G + 11] = X.itemSize === 4 ? s.w : 1));
        }
      }
      (f = { count: d, texture: F, size: new Ce(A, w) }),
        n.set(o, f),
        o.addEventListener("dispose", S);
    }
    if (a.isInstancedMesh === !0 && a.morphTexture !== null)
      c.getUniforms().setValue(i, "morphTexture", a.morphTexture, t);
    else {
      let v = 0;
      for (let p = 0; p < l.length; p++) v += l[p];
      const M = o.morphTargetsRelative ? 1 : 1 - v;
      c.getUniforms().setValue(i, "morphTargetBaseInfluence", M),
        c.getUniforms().setValue(i, "morphTargetInfluences", l);
    }
    c.getUniforms().setValue(i, "morphTargetsTexture", f.texture, t),
      c.getUniforms().setValue(i, "morphTargetsTextureSize", f.size);
  }
  return { update: r };
}
function hf(i, e, t, n) {
  let s = new WeakMap();
  function r(c) {
    const l = n.render.frame,
      u = c.geometry,
      d = e.get(c, u);
    if (
      (s.get(d) !== l && (e.update(d), s.set(d, l)),
      c.isInstancedMesh &&
        (c.hasEventListener("dispose", o) === !1 &&
          c.addEventListener("dispose", o),
        s.get(c) !== l &&
          (t.update(c.instanceMatrix, i.ARRAY_BUFFER),
          c.instanceColor !== null && t.update(c.instanceColor, i.ARRAY_BUFFER),
          s.set(c, l))),
      c.isSkinnedMesh)
    ) {
      const f = c.skeleton;
      s.get(f) !== l && (f.update(), s.set(f, l));
    }
    return d;
  }
  function a() {
    s = new WeakMap();
  }
  function o(c) {
    const l = c.target;
    l.removeEventListener("dispose", o),
      t.remove(l.instanceMatrix),
      l.instanceColor !== null && t.remove(l.instanceColor);
  }
  return { update: r, dispose: a };
}
const uf = {
  [No]: "LINEAR_TONE_MAPPING",
  [Fo]: "REINHARD_TONE_MAPPING",
  [Oo]: "CINEON_TONE_MAPPING",
  [Bo]: "ACES_FILMIC_TONE_MAPPING",
  [Vo]: "AGX_TONE_MAPPING",
  [Go]: "NEUTRAL_TONE_MAPPING",
  [zo]: "CUSTOM_TONE_MAPPING",
};
function df(i, e, t, n, s) {
  const r = new en(e, t, { type: i, depthBuffer: n, stencilBuffer: s }),
    a = new en(e, t, { type: _n, depthBuffer: !1, stencilBuffer: !1 }),
    o = new zt();
  o.setAttribute("position", new ft([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)),
    o.setAttribute("uv", new ft([0, 2, 0, 0, 2, 0], 2));
  const c = new Qc({
      uniforms: { tDiffuse: { value: null } },
      vertexShader: `
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,
      fragmentShader: `
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,
      depthTest: !1,
      depthWrite: !1,
    }),
    l = new xt(o, c),
    u = new ga(-1, 1, 1, -1, 0, 1);
  let d = null,
    f = null,
    _ = !1,
    v,
    M = null,
    p = [],
    h = !1;
  (this.setSize = function (T, b) {
    r.setSize(T, b), a.setSize(T, b);
    for (let y = 0; y < p.length; y++) {
      const A = p[y];
      A.setSize && A.setSize(T, b);
    }
  }),
    (this.setEffects = function (T) {
      (p = T), (h = p.length > 0 && p[0].isRenderPass === !0);
      const b = r.width,
        y = r.height;
      for (let A = 0; A < p.length; A++) {
        const w = p[A];
        w.setSize && w.setSize(b, y);
      }
    }),
    (this.begin = function (T, b) {
      if (_ || (T.toneMapping === Qt && p.length === 0)) return !1;
      if (((M = b), b !== null)) {
        const y = b.width,
          A = b.height;
        (r.width !== y || r.height !== A) && this.setSize(y, A);
      }
      return (
        h === !1 && T.setRenderTarget(r),
        (v = T.toneMapping),
        (T.toneMapping = Qt),
        !0
      );
    }),
    (this.hasRenderPass = function () {
      return h;
    }),
    (this.end = function (T, b) {
      (T.toneMapping = v), (_ = !0);
      let y = r,
        A = a;
      for (let w = 0; w < p.length; w++) {
        const R = p[w];
        if (R.enabled !== !1 && (R.render(T, A, y, b), R.needsSwap !== !1)) {
          const F = y;
          (y = A), (A = F);
        }
      }
      if (d !== T.outputColorSpace || f !== T.toneMapping) {
        (d = T.outputColorSpace),
          (f = T.toneMapping),
          (c.defines = {}),
          Ge.getTransfer(d) === Ze && (c.defines.SRGB_TRANSFER = "");
        const w = uf[f];
        w && (c.defines[w] = ""), (c.needsUpdate = !0);
      }
      (c.uniforms.tDiffuse.value = y.texture),
        T.setRenderTarget(M),
        T.render(l, u),
        (M = null),
        (_ = !1);
    }),
    (this.isCompositing = function () {
      return _;
    }),
    (this.dispose = function () {
      r.dispose(), a.dispose(), o.dispose(), c.dispose();
    });
}
const dl = new At(),
  ta = new Pi(1, 1),
  fl = new Jo(),
  pl = new wc(),
  ml = new al(),
  mo = [],
  _o = [],
  go = new Float32Array(16),
  xo = new Float32Array(9),
  vo = new Float32Array(4);
function mi(i, e, t) {
  const n = i[0];
  if (n <= 0 || n > 0) return i;
  const s = e * t;
  let r = mo[s];
  if ((r === void 0 && ((r = new Float32Array(s)), (mo[s] = r)), e !== 0)) {
    n.toArray(r, 0);
    for (let a = 1, o = 0; a !== e; ++a) (o += t), i[a].toArray(r, o);
  }
  return r;
}
function pt(i, e) {
  if (i.length !== e.length) return !1;
  for (let t = 0, n = i.length; t < n; t++) if (i[t] !== e[t]) return !1;
  return !0;
}
function mt(i, e) {
  for (let t = 0, n = e.length; t < n; t++) i[t] = e[t];
}
function As(i, e) {
  let t = _o[e];
  t === void 0 && ((t = new Int32Array(e)), (_o[e] = t));
  for (let n = 0; n !== e; ++n) t[n] = i.allocateTextureUnit();
  return t;
}
function ff(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1f(this.addr, e), (t[0] = e));
}
function pf(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (i.uniform2f(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (pt(t, e)) return;
    i.uniform2fv(this.addr, e), mt(t, e);
  }
}
function mf(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (i.uniform3f(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) &&
      (i.uniform3f(this.addr, e.r, e.g, e.b),
      (t[0] = e.r),
      (t[1] = e.g),
      (t[2] = e.b));
  else {
    if (pt(t, e)) return;
    i.uniform3fv(this.addr, e), mt(t, e);
  }
}
function _f(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (i.uniform4f(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (pt(t, e)) return;
    i.uniform4fv(this.addr, e), mt(t, e);
  }
}
function gf(i, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (pt(t, e)) return;
    i.uniformMatrix2fv(this.addr, !1, e), mt(t, e);
  } else {
    if (pt(t, n)) return;
    vo.set(n), i.uniformMatrix2fv(this.addr, !1, vo), mt(t, n);
  }
}
function xf(i, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (pt(t, e)) return;
    i.uniformMatrix3fv(this.addr, !1, e), mt(t, e);
  } else {
    if (pt(t, n)) return;
    xo.set(n), i.uniformMatrix3fv(this.addr, !1, xo), mt(t, n);
  }
}
function vf(i, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (pt(t, e)) return;
    i.uniformMatrix4fv(this.addr, !1, e), mt(t, e);
  } else {
    if (pt(t, n)) return;
    go.set(n), i.uniformMatrix4fv(this.addr, !1, go), mt(t, n);
  }
}
function Mf(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1i(this.addr, e), (t[0] = e));
}
function Sf(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (i.uniform2i(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (pt(t, e)) return;
    i.uniform2iv(this.addr, e), mt(t, e);
  }
}
function Ef(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (i.uniform3i(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if (pt(t, e)) return;
    i.uniform3iv(this.addr, e), mt(t, e);
  }
}
function yf(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (i.uniform4i(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (pt(t, e)) return;
    i.uniform4iv(this.addr, e), mt(t, e);
  }
}
function Tf(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1ui(this.addr, e), (t[0] = e));
}
function bf(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (i.uniform2ui(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (pt(t, e)) return;
    i.uniform2uiv(this.addr, e), mt(t, e);
  }
}
function Af(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (i.uniform3ui(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if (pt(t, e)) return;
    i.uniform3uiv(this.addr, e), mt(t, e);
  }
}
function wf(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (i.uniform4ui(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (pt(t, e)) return;
    i.uniform4uiv(this.addr, e), mt(t, e);
  }
}
function Rf(i, e, t) {
  const n = this.cache,
    s = t.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), (n[0] = s));
  let r;
  this.type === i.SAMPLER_2D_SHADOW
    ? ((ta.compareFunction = t.isReversedDepthBuffer() ? ua : ha), (r = ta))
    : (r = dl),
    t.setTexture2D(e || r, s);
}
function Cf(i, e, t) {
  const n = this.cache,
    s = t.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), (n[0] = s)),
    t.setTexture3D(e || pl, s);
}
function Pf(i, e, t) {
  const n = this.cache,
    s = t.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), (n[0] = s)),
    t.setTextureCube(e || ml, s);
}
function Df(i, e, t) {
  const n = this.cache,
    s = t.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), (n[0] = s)),
    t.setTexture2DArray(e || fl, s);
}
function Lf(i) {
  switch (i) {
    case 5126:
      return ff;
    case 35664:
      return pf;
    case 35665:
      return mf;
    case 35666:
      return _f;
    case 35674:
      return gf;
    case 35675:
      return xf;
    case 35676:
      return vf;
    case 5124:
    case 35670:
      return Mf;
    case 35667:
    case 35671:
      return Sf;
    case 35668:
    case 35672:
      return Ef;
    case 35669:
    case 35673:
      return yf;
    case 5125:
      return Tf;
    case 36294:
      return bf;
    case 36295:
      return Af;
    case 36296:
      return wf;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Rf;
    case 35679:
    case 36299:
    case 36307:
      return Cf;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Pf;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Df;
  }
}
function If(i, e) {
  i.uniform1fv(this.addr, e);
}
function Uf(i, e) {
  const t = mi(e, this.size, 2);
  i.uniform2fv(this.addr, t);
}
function Nf(i, e) {
  const t = mi(e, this.size, 3);
  i.uniform3fv(this.addr, t);
}
function Ff(i, e) {
  const t = mi(e, this.size, 4);
  i.uniform4fv(this.addr, t);
}
function Of(i, e) {
  const t = mi(e, this.size, 4);
  i.uniformMatrix2fv(this.addr, !1, t);
}
function Bf(i, e) {
  const t = mi(e, this.size, 9);
  i.uniformMatrix3fv(this.addr, !1, t);
}
function zf(i, e) {
  const t = mi(e, this.size, 16);
  i.uniformMatrix4fv(this.addr, !1, t);
}
function Vf(i, e) {
  i.uniform1iv(this.addr, e);
}
function Gf(i, e) {
  i.uniform2iv(this.addr, e);
}
function Hf(i, e) {
  i.uniform3iv(this.addr, e);
}
function kf(i, e) {
  i.uniform4iv(this.addr, e);
}
function Wf(i, e) {
  i.uniform1uiv(this.addr, e);
}
function Xf(i, e) {
  i.uniform2uiv(this.addr, e);
}
function Yf(i, e) {
  i.uniform3uiv(this.addr, e);
}
function qf(i, e) {
  i.uniform4uiv(this.addr, e);
}
function Kf(i, e, t) {
  const n = this.cache,
    s = e.length,
    r = As(t, s);
  pt(n, r) || (i.uniform1iv(this.addr, r), mt(n, r));
  let a;
  this.type === i.SAMPLER_2D_SHADOW ? (a = ta) : (a = dl);
  for (let o = 0; o !== s; ++o) t.setTexture2D(e[o] || a, r[o]);
}
function Zf(i, e, t) {
  const n = this.cache,
    s = e.length,
    r = As(t, s);
  pt(n, r) || (i.uniform1iv(this.addr, r), mt(n, r));
  for (let a = 0; a !== s; ++a) t.setTexture3D(e[a] || pl, r[a]);
}
function jf(i, e, t) {
  const n = this.cache,
    s = e.length,
    r = As(t, s);
  pt(n, r) || (i.uniform1iv(this.addr, r), mt(n, r));
  for (let a = 0; a !== s; ++a) t.setTextureCube(e[a] || ml, r[a]);
}
function $f(i, e, t) {
  const n = this.cache,
    s = e.length,
    r = As(t, s);
  pt(n, r) || (i.uniform1iv(this.addr, r), mt(n, r));
  for (let a = 0; a !== s; ++a) t.setTexture2DArray(e[a] || fl, r[a]);
}
function Jf(i) {
  switch (i) {
    case 5126:
      return If;
    case 35664:
      return Uf;
    case 35665:
      return Nf;
    case 35666:
      return Ff;
    case 35674:
      return Of;
    case 35675:
      return Bf;
    case 35676:
      return zf;
    case 5124:
    case 35670:
      return Vf;
    case 35667:
    case 35671:
      return Gf;
    case 35668:
    case 35672:
      return Hf;
    case 35669:
    case 35673:
      return kf;
    case 5125:
      return Wf;
    case 36294:
      return Xf;
    case 36295:
      return Yf;
    case 36296:
      return qf;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Kf;
    case 35679:
    case 36299:
    case 36307:
      return Zf;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return jf;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return $f;
  }
}
class Qf {
  constructor(e, t, n) {
    (this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.type = t.type),
      (this.setValue = Lf(t.type));
  }
}
class ep {
  constructor(e, t, n) {
    (this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.type = t.type),
      (this.size = t.size),
      (this.setValue = Jf(t.type));
  }
}
class tp {
  constructor(e) {
    (this.id = e), (this.seq = []), (this.map = {});
  }
  setValue(e, t, n) {
    const s = this.seq;
    for (let r = 0, a = s.length; r !== a; ++r) {
      const o = s[r];
      o.setValue(e, t[o.id], n);
    }
  }
}
const ar = /(\w+)(\])?(\[|\.)?/g;
function Mo(i, e) {
  i.seq.push(e), (i.map[e.id] = e);
}
function np(i, e, t) {
  const n = i.name,
    s = n.length;
  for (ar.lastIndex = 0; ; ) {
    const r = ar.exec(n),
      a = ar.lastIndex;
    let o = r[1];
    const c = r[2] === "]",
      l = r[3];
    if ((c && (o = o | 0), l === void 0 || (l === "[" && a + 2 === s))) {
      Mo(t, l === void 0 ? new Qf(o, i, e) : new ep(o, i, e));
      break;
    } else {
      let d = t.map[o];
      d === void 0 && ((d = new tp(o)), Mo(t, d)), (t = d);
    }
  }
}
class gs {
  constructor(e, t) {
    (this.seq = []), (this.map = {});
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let a = 0; a < n; ++a) {
      const o = e.getActiveUniform(t, a),
        c = e.getUniformLocation(t, o.name);
      np(o, c, this);
    }
    const s = [],
      r = [];
    for (const a of this.seq)
      a.type === e.SAMPLER_2D_SHADOW ||
      a.type === e.SAMPLER_CUBE_SHADOW ||
      a.type === e.SAMPLER_2D_ARRAY_SHADOW
        ? s.push(a)
        : r.push(a);
    s.length > 0 && (this.seq = s.concat(r));
  }
  setValue(e, t, n, s) {
    const r = this.map[t];
    r !== void 0 && r.setValue(e, n, s);
  }
  setOptional(e, t, n) {
    const s = t[n];
    s !== void 0 && this.setValue(e, n, s);
  }
  static upload(e, t, n, s) {
    for (let r = 0, a = t.length; r !== a; ++r) {
      const o = t[r],
        c = n[o.id];
      c.needsUpdate !== !1 && o.setValue(e, c.value, s);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let s = 0, r = e.length; s !== r; ++s) {
      const a = e[s];
      a.id in t && n.push(a);
    }
    return n;
  }
}
function So(i, e, t) {
  const n = i.createShader(e);
  return i.shaderSource(n, t), i.compileShader(n), n;
}
const ip = 37297;
let sp = 0;
function rp(i, e) {
  const t = i.split(`
`),
    n = [],
    s = Math.max(e - 6, 0),
    r = Math.min(e + 6, t.length);
  for (let a = s; a < r; a++) {
    const o = a + 1;
    n.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`);
  }
  return n.join(`
`);
}
const Eo = new De();
function ap(i) {
  Ge._getMatrix(Eo, Ge.workingColorSpace, i);
  const e = `mat3( ${Eo.elements.map((t) => t.toFixed(4))} )`;
  switch (Ge.getTransfer(i)) {
    case xs:
      return [e, "LinearTransferOETF"];
    case Ze:
      return [e, "sRGBTransferOETF"];
    default:
      return (
        we("WebGLProgram: Unsupported color space: ", i),
        [e, "LinearTransferOETF"]
      );
  }
}
function yo(i, e, t) {
  const n = i.getShaderParameter(e, i.COMPILE_STATUS),
    r = (i.getShaderInfoLog(e) || "").trim();
  if (n && r === "") return "";
  const a = /ERROR: 0:(\d+)/.exec(r);
  if (a) {
    const o = parseInt(a[1]);
    return (
      t.toUpperCase() +
      `

` +
      r +
      `

` +
      rp(i.getShaderSource(e), o)
    );
  } else return r;
}
function op(i, e) {
  const t = ap(e);
  return [
    `vec4 ${i}( vec4 value ) {`,
    `	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,
    "}",
  ].join(`
`);
}
const lp = {
  [No]: "Linear",
  [Fo]: "Reinhard",
  [Oo]: "Cineon",
  [Bo]: "ACESFilmic",
  [Vo]: "AgX",
  [Go]: "Neutral",
  [zo]: "Custom",
};
function cp(i, e) {
  const t = lp[e];
  return t === void 0
    ? (we("WebGLProgram: Unsupported toneMapping:", e),
      "vec3 " + i + "( vec3 color ) { return LinearToneMapping( color ); }")
    : "vec3 " + i + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
const cs = new U();
function hp() {
  Ge.getLuminanceCoefficients(cs);
  const i = cs.x.toFixed(4),
    e = cs.y.toFixed(4),
    t = cs.z.toFixed(4);
  return [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,
    "	return dot( weights, rgb );",
    "}",
  ].join(`
`);
}
function up(i) {
  return [
    i.extensionClipCullDistance
      ? "#extension GL_ANGLE_clip_cull_distance : require"
      : "",
    i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : "",
  ].filter(Ai).join(`
`);
}
function dp(i) {
  const e = [];
  for (const t in i) {
    const n = i[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function fp(i, e) {
  const t = {},
    n = i.getProgramParameter(e, i.ACTIVE_ATTRIBUTES);
  for (let s = 0; s < n; s++) {
    const r = i.getActiveAttrib(e, s),
      a = r.name;
    let o = 1;
    r.type === i.FLOAT_MAT2 && (o = 2),
      r.type === i.FLOAT_MAT3 && (o = 3),
      r.type === i.FLOAT_MAT4 && (o = 4),
      (t[a] = {
        type: r.type,
        location: i.getAttribLocation(e, a),
        locationSize: o,
      });
  }
  return t;
}
function Ai(i) {
  return i !== "";
}
function To(i, e) {
  const t =
    e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return i
    .replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
    .replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
    .replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps)
    .replace(/NUM_SPOT_LIGHT_COORDS/g, t)
    .replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
    .replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
    .replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
    .replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
    .replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps)
    .replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
    .replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function bo(i, e) {
  return i
    .replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes)
    .replace(
      /UNION_CLIPPING_PLANES/g,
      e.numClippingPlanes - e.numClipIntersection
    );
}
const pp = /^[ \t]*#include +<([\w\d./]+)>/gm;
function na(i) {
  return i.replace(pp, _p);
}
const mp = new Map();
function _p(i, e) {
  let t = Le[e];
  if (t === void 0) {
    const n = mp.get(e);
    if (n !== void 0)
      (t = Le[n]),
        we(
          'WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',
          e,
          n
        );
    else throw new Error("Can not resolve #include <" + e + ">");
  }
  return na(t);
}
const gp =
  /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Ao(i) {
  return i.replace(gp, xp);
}
function xp(i, e, t, n) {
  let s = "";
  for (let r = parseInt(e); r < parseInt(t); r++)
    s += n
      .replace(/\[\s*i\s*\]/g, "[ " + r + " ]")
      .replace(/UNROLLED_LOOP_INDEX/g, r);
  return s;
}
function wo(i) {
  let e = `precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;
  return (
    i.precision === "highp"
      ? (e += `
#define HIGH_PRECISION`)
      : i.precision === "mediump"
      ? (e += `
#define MEDIUM_PRECISION`)
      : i.precision === "lowp" &&
        (e += `
#define LOW_PRECISION`),
    e
  );
}
const vp = { [us]: "SHADOWMAP_TYPE_PCF", [bi]: "SHADOWMAP_TYPE_VSM" };
function Mp(i) {
  return vp[i.shadowMapType] || "SHADOWMAP_TYPE_BASIC";
}
const Sp = {
  [Vn]: "ENVMAP_TYPE_CUBE",
  [ci]: "ENVMAP_TYPE_CUBE",
  [ys]: "ENVMAP_TYPE_CUBE_UV",
};
function Ep(i) {
  return i.envMap === !1
    ? "ENVMAP_TYPE_CUBE"
    : Sp[i.envMapMode] || "ENVMAP_TYPE_CUBE";
}
const yp = { [ci]: "ENVMAP_MODE_REFRACTION" };
function Tp(i) {
  return i.envMap === !1
    ? "ENVMAP_MODE_REFLECTION"
    : yp[i.envMapMode] || "ENVMAP_MODE_REFLECTION";
}
const bp = {
  [Uo]: "ENVMAP_BLENDING_MULTIPLY",
  [oc]: "ENVMAP_BLENDING_MIX",
  [lc]: "ENVMAP_BLENDING_ADD",
};
function Ap(i) {
  return i.envMap === !1
    ? "ENVMAP_BLENDING_NONE"
    : bp[i.combine] || "ENVMAP_BLENDING_NONE";
}
function wp(i) {
  const e = i.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2,
    n = 1 / e;
  return {
    texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 112)),
    texelHeight: n,
    maxMip: t,
  };
}
function Rp(i, e, t, n) {
  const s = i.getContext(),
    r = t.defines;
  let a = t.vertexShader,
    o = t.fragmentShader;
  const c = Mp(t),
    l = Ep(t),
    u = Tp(t),
    d = Ap(t),
    f = wp(t),
    _ = up(t),
    v = dp(r),
    M = s.createProgram();
  let p,
    h,
    T = t.glslVersion
      ? "#version " +
        t.glslVersion +
        `
`
      : "";
  t.isRawShaderMaterial
    ? ((p = [
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        v,
      ].filter(Ai).join(`
`)),
      p.length > 0 &&
        (p += `
`),
      (h = [
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        v,
      ].filter(Ai).join(`
`)),
      h.length > 0 &&
        (h += `
`))
    : ((p = [
        wo(t),
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        v,
        t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
        t.batching ? "#define USE_BATCHING" : "",
        t.batchingColor ? "#define USE_BATCHING_COLOR" : "",
        t.instancing ? "#define USE_INSTANCING" : "",
        t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
        t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.map ? "#define USE_MAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + u : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.anisotropy ? "#define USE_ANISOTROPY" : "",
        t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.alphaHash ? "#define USE_ALPHAHASH" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        t.mapUv ? "#define MAP_UV " + t.mapUv : "",
        t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
        t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
        t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
        t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
        t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
        t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
        t.displacementMapUv
          ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv
          : "",
        t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
        t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
        t.anisotropyMapUv
          ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv
          : "",
        t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
        t.clearcoatNormalMapUv
          ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv
          : "",
        t.clearcoatRoughnessMapUv
          ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv
          : "",
        t.iridescenceMapUv
          ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv
          : "",
        t.iridescenceThicknessMapUv
          ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv
          : "",
        t.sheenColorMapUv
          ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv
          : "",
        t.sheenRoughnessMapUv
          ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv
          : "",
        t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
        t.specularColorMapUv
          ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv
          : "",
        t.specularIntensityMapUv
          ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv
          : "",
        t.transmissionMapUv
          ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv
          : "",
        t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
        t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
        t.vertexColors ? "#define USE_COLOR" : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUv1s ? "#define USE_UV1" : "",
        t.vertexUv2s ? "#define USE_UV2" : "",
        t.vertexUv3s ? "#define USE_UV3" : "",
        t.pointsUvs ? "#define USE_POINTS_UV" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.skinning ? "#define USE_SKINNING" : "",
        t.morphTargets ? "#define USE_MORPHTARGETS" : "",
        t.morphNormals && t.flatShading === !1
          ? "#define USE_MORPHNORMALS"
          : "",
        t.morphColors ? "#define USE_MORPHCOLORS" : "",
        t.morphTargetsCount > 0
          ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride
          : "",
        t.morphTargetsCount > 0
          ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount
          : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + c : "",
        t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
        t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
        t.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
        "uniform mat4 modelMatrix;",
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform mat4 viewMatrix;",
        "uniform mat3 normalMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        "#ifdef USE_INSTANCING",
        "	attribute mat4 instanceMatrix;",
        "#endif",
        "#ifdef USE_INSTANCING_COLOR",
        "	attribute vec3 instanceColor;",
        "#endif",
        "#ifdef USE_INSTANCING_MORPH",
        "	uniform sampler2D morphTexture;",
        "#endif",
        "attribute vec3 position;",
        "attribute vec3 normal;",
        "attribute vec2 uv;",
        "#ifdef USE_UV1",
        "	attribute vec2 uv1;",
        "#endif",
        "#ifdef USE_UV2",
        "	attribute vec2 uv2;",
        "#endif",
        "#ifdef USE_UV3",
        "	attribute vec2 uv3;",
        "#endif",
        "#ifdef USE_TANGENT",
        "	attribute vec4 tangent;",
        "#endif",
        "#if defined( USE_COLOR_ALPHA )",
        "	attribute vec4 color;",
        "#elif defined( USE_COLOR )",
        "	attribute vec3 color;",
        "#endif",
        "#ifdef USE_SKINNING",
        "	attribute vec4 skinIndex;",
        "	attribute vec4 skinWeight;",
        "#endif",
        `
`,
      ].filter(Ai).join(`
`)),
      (h = [
        wo(t),
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        v,
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
        t.map ? "#define USE_MAP" : "",
        t.matcap ? "#define USE_MATCAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + l : "",
        t.envMap ? "#define " + u : "",
        t.envMap ? "#define " + d : "",
        f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "",
        f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "",
        f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.anisotropy ? "#define USE_ANISOTROPY" : "",
        t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
        t.clearcoat ? "#define USE_CLEARCOAT" : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.dispersion ? "#define USE_DISPERSION" : "",
        t.iridescence ? "#define USE_IRIDESCENCE" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.alphaTest ? "#define USE_ALPHATEST" : "",
        t.alphaHash ? "#define USE_ALPHAHASH" : "",
        t.sheen ? "#define USE_SHEEN" : "",
        t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
        t.vertexColors || t.instancingColor || t.batchingColor
          ? "#define USE_COLOR"
          : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUv1s ? "#define USE_UV1" : "",
        t.vertexUv2s ? "#define USE_UV2" : "",
        t.vertexUv3s ? "#define USE_UV3" : "",
        t.pointsUvs ? "#define USE_POINTS_UV" : "",
        t.gradientMap ? "#define USE_GRADIENTMAP" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + c : "",
        t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
        t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
        t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
        t.decodeVideoTextureEmissive
          ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE"
          : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
        t.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
        "uniform mat4 viewMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        t.toneMapping !== Qt ? "#define TONE_MAPPING" : "",
        t.toneMapping !== Qt ? Le.tonemapping_pars_fragment : "",
        t.toneMapping !== Qt ? cp("toneMapping", t.toneMapping) : "",
        t.dithering ? "#define DITHERING" : "",
        t.opaque ? "#define OPAQUE" : "",
        Le.colorspace_pars_fragment,
        op("linearToOutputTexel", t.outputColorSpace),
        hp(),
        t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
        `
`,
      ].filter(Ai).join(`
`))),
    (a = na(a)),
    (a = To(a, t)),
    (a = bo(a, t)),
    (o = na(o)),
    (o = To(o, t)),
    (o = bo(o, t)),
    (a = Ao(a)),
    (o = Ao(o)),
    t.isRawShaderMaterial !== !0 &&
      ((T = `#version 300 es
`),
      (p =
        [
          _,
          "#define attribute in",
          "#define varying out",
          "#define texture2D texture",
        ].join(`
`) +
        `
` +
        p),
      (h =
        [
          "#define varying in",
          t.glslVersion === Na
            ? ""
            : "layout(location = 0) out highp vec4 pc_fragColor;",
          t.glslVersion === Na ? "" : "#define gl_FragColor pc_fragColor",
          "#define gl_FragDepthEXT gl_FragDepth",
          "#define texture2D texture",
          "#define textureCube texture",
          "#define texture2DProj textureProj",
          "#define texture2DLodEXT textureLod",
          "#define texture2DProjLodEXT textureProjLod",
          "#define textureCubeLodEXT textureLod",
          "#define texture2DGradEXT textureGrad",
          "#define texture2DProjGradEXT textureProjGrad",
          "#define textureCubeGradEXT textureGrad",
        ].join(`
`) +
        `
` +
        h));
  const b = T + p + a,
    y = T + h + o,
    A = So(s, s.VERTEX_SHADER, b),
    w = So(s, s.FRAGMENT_SHADER, y);
  s.attachShader(M, A),
    s.attachShader(M, w),
    t.index0AttributeName !== void 0
      ? s.bindAttribLocation(M, 0, t.index0AttributeName)
      : t.morphTargets === !0 && s.bindAttribLocation(M, 0, "position"),
    s.linkProgram(M);
  function R(P) {
    if (i.debug.checkShaderErrors) {
      const O = s.getProgramInfoLog(M) || "",
        B = s.getShaderInfoLog(A) || "",
        X = s.getShaderInfoLog(w) || "",
        W = O.trim(),
        H = B.trim(),
        G = X.trim();
      let j = !0,
        he = !0;
      if (s.getProgramParameter(M, s.LINK_STATUS) === !1)
        if (((j = !1), typeof i.debug.onShaderError == "function"))
          i.debug.onShaderError(s, M, A, w);
        else {
          const ae = yo(s, A, "vertex"),
            ue = yo(s, w, "fragment");
          We(
            "THREE.WebGLProgram: Shader Error " +
              s.getError() +
              " - VALIDATE_STATUS " +
              s.getProgramParameter(M, s.VALIDATE_STATUS) +
              `

Material Name: ` +
              P.name +
              `
Material Type: ` +
              P.type +
              `

Program Info Log: ` +
              W +
              `
` +
              ae +
              `
` +
              ue
          );
        }
      else
        W !== ""
          ? we("WebGLProgram: Program Info Log:", W)
          : (H === "" || G === "") && (he = !1);
      he &&
        (P.diagnostics = {
          runnable: j,
          programLog: W,
          vertexShader: { log: H, prefix: p },
          fragmentShader: { log: G, prefix: h },
        });
    }
    s.deleteShader(A), s.deleteShader(w), (F = new gs(s, M)), (g = fp(s, M));
  }
  let F;
  this.getUniforms = function () {
    return F === void 0 && R(this), F;
  };
  let g;
  this.getAttributes = function () {
    return g === void 0 && R(this), g;
  };
  let S = t.rendererExtensionParallelShaderCompile === !1;
  return (
    (this.isReady = function () {
      return S === !1 && (S = s.getProgramParameter(M, ip)), S;
    }),
    (this.destroy = function () {
      n.releaseStatesOfProgram(this),
        s.deleteProgram(M),
        (this.program = void 0);
    }),
    (this.type = t.shaderType),
    (this.name = t.shaderName),
    (this.id = sp++),
    (this.cacheKey = e),
    (this.usedTimes = 1),
    (this.program = M),
    (this.vertexShader = A),
    (this.fragmentShader = w),
    this
  );
}
let Cp = 0;
class Pp {
  constructor() {
    (this.shaderCache = new Map()), (this.materialCache = new Map());
  }
  update(e) {
    const t = e.vertexShader,
      n = e.fragmentShader,
      s = this._getShaderStage(t),
      r = this._getShaderStage(n),
      a = this._getShaderCacheForMaterial(e);
    return (
      a.has(s) === !1 && (a.add(s), s.usedTimes++),
      a.has(r) === !1 && (a.add(r), r.usedTimes++),
      this
    );
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && ((n = new Set()), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && ((n = new Dp(e)), t.set(e, n)), n;
  }
}
class Dp {
  constructor(e) {
    (this.id = Cp++), (this.code = e), (this.usedTimes = 0);
  }
}
function Lp(i, e, t, n, s, r, a) {
  const o = new Qo(),
    c = new Pp(),
    l = new Set(),
    u = [],
    d = new Map(),
    f = s.logarithmicDepthBuffer;
  let _ = s.precision;
  const v = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distance",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite",
  };
  function M(g) {
    return l.add(g), g === 0 ? "uv" : `uv${g}`;
  }
  function p(g, S, P, O, B) {
    const X = O.fog,
      W = B.geometry,
      H = g.isMeshStandardMaterial ? O.environment : null,
      G = (g.isMeshStandardMaterial ? t : e).get(g.envMap || H),
      j = G && G.mapping === ys ? G.image.height : null,
      he = v[g.type];
    g.precision !== null &&
      ((_ = s.getMaxPrecision(g.precision)),
      _ !== g.precision &&
        we(
          "WebGLProgram.getParameters:",
          g.precision,
          "not supported, using",
          _,
          "instead."
        ));
    const ae =
        W.morphAttributes.position ||
        W.morphAttributes.normal ||
        W.morphAttributes.color,
      ue = ae !== void 0 ? ae.length : 0;
    let Fe = 0;
    W.morphAttributes.position !== void 0 && (Fe = 1),
      W.morphAttributes.normal !== void 0 && (Fe = 2),
      W.morphAttributes.color !== void 0 && (Fe = 3);
    let Ie, st, it, q;
    if (he) {
      const qe = jt[he];
      (Ie = qe.vertexShader), (st = qe.fragmentShader);
    } else
      (Ie = g.vertexShader),
        (st = g.fragmentShader),
        c.update(g),
        (it = c.getVertexShaderID(g)),
        (q = c.getFragmentShaderID(g));
    const $ = i.getRenderTarget(),
      pe = i.state.buffers.depth.getReversed(),
      Pe = B.isInstancedMesh === !0,
      ge = B.isBatchedMesh === !0,
      He = !!g.map,
      _t = !!g.matcap,
      Ve = !!G,
      Ye = !!g.aoMap,
      Je = !!g.lightMap,
      Ue = !!g.bumpMap,
      ct = !!g.normalMap,
      C = !!g.displacementMap,
      ht = !!g.emissiveMap,
      Xe = !!g.metalnessMap,
      et = !!g.roughnessMap,
      ve = g.anisotropy > 0,
      E = g.clearcoat > 0,
      m = g.dispersion > 0,
      L = g.iridescence > 0,
      Y = g.sheen > 0,
      Z = g.transmission > 0,
      k = ve && !!g.anisotropyMap,
      Se = E && !!g.clearcoatMap,
      ne = E && !!g.clearcoatNormalMap,
      xe = E && !!g.clearcoatRoughnessMap,
      Ae = L && !!g.iridescenceMap,
      Q = L && !!g.iridescenceThicknessMap,
      se = Y && !!g.sheenColorMap,
      _e = Y && !!g.sheenRoughnessMap,
      Me = !!g.specularMap,
      ie = !!g.specularColorMap,
      Ne = !!g.specularIntensityMap,
      D = Z && !!g.transmissionMap,
      ce = Z && !!g.thicknessMap,
      ee = !!g.gradientMap,
      de = !!g.alphaMap,
      J = g.alphaTest > 0,
      K = !!g.alphaHash,
      te = !!g.extensions;
    let Re = Qt;
    g.toneMapped &&
      ($ === null || $.isXRRenderTarget === !0) &&
      (Re = i.toneMapping);
    const tt = {
      shaderID: he,
      shaderType: g.type,
      shaderName: g.name,
      vertexShader: Ie,
      fragmentShader: st,
      defines: g.defines,
      customVertexShaderID: it,
      customFragmentShaderID: q,
      isRawShaderMaterial: g.isRawShaderMaterial === !0,
      glslVersion: g.glslVersion,
      precision: _,
      batching: ge,
      batchingColor: ge && B._colorsTexture !== null,
      instancing: Pe,
      instancingColor: Pe && B.instanceColor !== null,
      instancingMorph: Pe && B.morphTexture !== null,
      outputColorSpace:
        $ === null
          ? i.outputColorSpace
          : $.isXRRenderTarget === !0
          ? $.texture.colorSpace
          : ui,
      alphaToCoverage: !!g.alphaToCoverage,
      map: He,
      matcap: _t,
      envMap: Ve,
      envMapMode: Ve && G.mapping,
      envMapCubeUVHeight: j,
      aoMap: Ye,
      lightMap: Je,
      bumpMap: Ue,
      normalMap: ct,
      displacementMap: C,
      emissiveMap: ht,
      normalMapObjectSpace: ct && g.normalMapType === uc,
      normalMapTangentSpace: ct && g.normalMapType === jo,
      metalnessMap: Xe,
      roughnessMap: et,
      anisotropy: ve,
      anisotropyMap: k,
      clearcoat: E,
      clearcoatMap: Se,
      clearcoatNormalMap: ne,
      clearcoatRoughnessMap: xe,
      dispersion: m,
      iridescence: L,
      iridescenceMap: Ae,
      iridescenceThicknessMap: Q,
      sheen: Y,
      sheenColorMap: se,
      sheenRoughnessMap: _e,
      specularMap: Me,
      specularColorMap: ie,
      specularIntensityMap: Ne,
      transmission: Z,
      transmissionMap: D,
      thicknessMap: ce,
      gradientMap: ee,
      opaque:
        g.transparent === !1 && g.blending === ai && g.alphaToCoverage === !1,
      alphaMap: de,
      alphaTest: J,
      alphaHash: K,
      combine: g.combine,
      mapUv: He && M(g.map.channel),
      aoMapUv: Ye && M(g.aoMap.channel),
      lightMapUv: Je && M(g.lightMap.channel),
      bumpMapUv: Ue && M(g.bumpMap.channel),
      normalMapUv: ct && M(g.normalMap.channel),
      displacementMapUv: C && M(g.displacementMap.channel),
      emissiveMapUv: ht && M(g.emissiveMap.channel),
      metalnessMapUv: Xe && M(g.metalnessMap.channel),
      roughnessMapUv: et && M(g.roughnessMap.channel),
      anisotropyMapUv: k && M(g.anisotropyMap.channel),
      clearcoatMapUv: Se && M(g.clearcoatMap.channel),
      clearcoatNormalMapUv: ne && M(g.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: xe && M(g.clearcoatRoughnessMap.channel),
      iridescenceMapUv: Ae && M(g.iridescenceMap.channel),
      iridescenceThicknessMapUv: Q && M(g.iridescenceThicknessMap.channel),
      sheenColorMapUv: se && M(g.sheenColorMap.channel),
      sheenRoughnessMapUv: _e && M(g.sheenRoughnessMap.channel),
      specularMapUv: Me && M(g.specularMap.channel),
      specularColorMapUv: ie && M(g.specularColorMap.channel),
      specularIntensityMapUv: Ne && M(g.specularIntensityMap.channel),
      transmissionMapUv: D && M(g.transmissionMap.channel),
      thicknessMapUv: ce && M(g.thicknessMap.channel),
      alphaMapUv: de && M(g.alphaMap.channel),
      vertexTangents: !!W.attributes.tangent && (ct || ve),
      vertexColors: g.vertexColors,
      vertexAlphas:
        g.vertexColors === !0 &&
        !!W.attributes.color &&
        W.attributes.color.itemSize === 4,
      pointsUvs: B.isPoints === !0 && !!W.attributes.uv && (He || de),
      fog: !!X,
      useFog: g.fog === !0,
      fogExp2: !!X && X.isFogExp2,
      flatShading: g.flatShading === !0 && g.wireframe === !1,
      sizeAttenuation: g.sizeAttenuation === !0,
      logarithmicDepthBuffer: f,
      reversedDepthBuffer: pe,
      skinning: B.isSkinnedMesh === !0,
      morphTargets: W.morphAttributes.position !== void 0,
      morphNormals: W.morphAttributes.normal !== void 0,
      morphColors: W.morphAttributes.color !== void 0,
      morphTargetsCount: ue,
      morphTextureStride: Fe,
      numDirLights: S.directional.length,
      numPointLights: S.point.length,
      numSpotLights: S.spot.length,
      numSpotLightMaps: S.spotLightMap.length,
      numRectAreaLights: S.rectArea.length,
      numHemiLights: S.hemi.length,
      numDirLightShadows: S.directionalShadowMap.length,
      numPointLightShadows: S.pointShadowMap.length,
      numSpotLightShadows: S.spotShadowMap.length,
      numSpotLightShadowsWithMaps: S.numSpotLightShadowsWithMaps,
      numLightProbes: S.numLightProbes,
      numClippingPlanes: a.numPlanes,
      numClipIntersection: a.numIntersection,
      dithering: g.dithering,
      shadowMapEnabled: i.shadowMap.enabled && P.length > 0,
      shadowMapType: i.shadowMap.type,
      toneMapping: Re,
      decodeVideoTexture:
        He &&
        g.map.isVideoTexture === !0 &&
        Ge.getTransfer(g.map.colorSpace) === Ze,
      decodeVideoTextureEmissive:
        ht &&
        g.emissiveMap.isVideoTexture === !0 &&
        Ge.getTransfer(g.emissiveMap.colorSpace) === Ze,
      premultipliedAlpha: g.premultipliedAlpha,
      doubleSided: g.side === dn,
      flipSided: g.side === Lt,
      useDepthPacking: g.depthPacking >= 0,
      depthPacking: g.depthPacking || 0,
      index0AttributeName: g.index0AttributeName,
      extensionClipCullDistance:
        te &&
        g.extensions.clipCullDistance === !0 &&
        n.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw:
        ((te && g.extensions.multiDraw === !0) || ge) &&
        n.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: n.has(
        "KHR_parallel_shader_compile"
      ),
      customProgramCacheKey: g.customProgramCacheKey(),
    };
    return (
      (tt.vertexUv1s = l.has(1)),
      (tt.vertexUv2s = l.has(2)),
      (tt.vertexUv3s = l.has(3)),
      l.clear(),
      tt
    );
  }
  function h(g) {
    const S = [];
    if (
      (g.shaderID
        ? S.push(g.shaderID)
        : (S.push(g.customVertexShaderID), S.push(g.customFragmentShaderID)),
      g.defines !== void 0)
    )
      for (const P in g.defines) S.push(P), S.push(g.defines[P]);
    return (
      g.isRawShaderMaterial === !1 &&
        (T(S, g), b(S, g), S.push(i.outputColorSpace)),
      S.push(g.customProgramCacheKey),
      S.join()
    );
  }
  function T(g, S) {
    g.push(S.precision),
      g.push(S.outputColorSpace),
      g.push(S.envMapMode),
      g.push(S.envMapCubeUVHeight),
      g.push(S.mapUv),
      g.push(S.alphaMapUv),
      g.push(S.lightMapUv),
      g.push(S.aoMapUv),
      g.push(S.bumpMapUv),
      g.push(S.normalMapUv),
      g.push(S.displacementMapUv),
      g.push(S.emissiveMapUv),
      g.push(S.metalnessMapUv),
      g.push(S.roughnessMapUv),
      g.push(S.anisotropyMapUv),
      g.push(S.clearcoatMapUv),
      g.push(S.clearcoatNormalMapUv),
      g.push(S.clearcoatRoughnessMapUv),
      g.push(S.iridescenceMapUv),
      g.push(S.iridescenceThicknessMapUv),
      g.push(S.sheenColorMapUv),
      g.push(S.sheenRoughnessMapUv),
      g.push(S.specularMapUv),
      g.push(S.specularColorMapUv),
      g.push(S.specularIntensityMapUv),
      g.push(S.transmissionMapUv),
      g.push(S.thicknessMapUv),
      g.push(S.combine),
      g.push(S.fogExp2),
      g.push(S.sizeAttenuation),
      g.push(S.morphTargetsCount),
      g.push(S.morphAttributeCount),
      g.push(S.numDirLights),
      g.push(S.numPointLights),
      g.push(S.numSpotLights),
      g.push(S.numSpotLightMaps),
      g.push(S.numHemiLights),
      g.push(S.numRectAreaLights),
      g.push(S.numDirLightShadows),
      g.push(S.numPointLightShadows),
      g.push(S.numSpotLightShadows),
      g.push(S.numSpotLightShadowsWithMaps),
      g.push(S.numLightProbes),
      g.push(S.shadowMapType),
      g.push(S.toneMapping),
      g.push(S.numClippingPlanes),
      g.push(S.numClipIntersection),
      g.push(S.depthPacking);
  }
  function b(g, S) {
    o.disableAll(),
      S.instancing && o.enable(0),
      S.instancingColor && o.enable(1),
      S.instancingMorph && o.enable(2),
      S.matcap && o.enable(3),
      S.envMap && o.enable(4),
      S.normalMapObjectSpace && o.enable(5),
      S.normalMapTangentSpace && o.enable(6),
      S.clearcoat && o.enable(7),
      S.iridescence && o.enable(8),
      S.alphaTest && o.enable(9),
      S.vertexColors && o.enable(10),
      S.vertexAlphas && o.enable(11),
      S.vertexUv1s && o.enable(12),
      S.vertexUv2s && o.enable(13),
      S.vertexUv3s && o.enable(14),
      S.vertexTangents && o.enable(15),
      S.anisotropy && o.enable(16),
      S.alphaHash && o.enable(17),
      S.batching && o.enable(18),
      S.dispersion && o.enable(19),
      S.batchingColor && o.enable(20),
      S.gradientMap && o.enable(21),
      g.push(o.mask),
      o.disableAll(),
      S.fog && o.enable(0),
      S.useFog && o.enable(1),
      S.flatShading && o.enable(2),
      S.logarithmicDepthBuffer && o.enable(3),
      S.reversedDepthBuffer && o.enable(4),
      S.skinning && o.enable(5),
      S.morphTargets && o.enable(6),
      S.morphNormals && o.enable(7),
      S.morphColors && o.enable(8),
      S.premultipliedAlpha && o.enable(9),
      S.shadowMapEnabled && o.enable(10),
      S.doubleSided && o.enable(11),
      S.flipSided && o.enable(12),
      S.useDepthPacking && o.enable(13),
      S.dithering && o.enable(14),
      S.transmission && o.enable(15),
      S.sheen && o.enable(16),
      S.opaque && o.enable(17),
      S.pointsUvs && o.enable(18),
      S.decodeVideoTexture && o.enable(19),
      S.decodeVideoTextureEmissive && o.enable(20),
      S.alphaToCoverage && o.enable(21),
      g.push(o.mask);
  }
  function y(g) {
    const S = v[g.type];
    let P;
    if (S) {
      const O = jt[S];
      P = Vc.clone(O.uniforms);
    } else P = g.uniforms;
    return P;
  }
  function A(g, S) {
    let P = d.get(S);
    return (
      P !== void 0
        ? ++P.usedTimes
        : ((P = new Rp(i, S, g, r)), u.push(P), d.set(S, P)),
      P
    );
  }
  function w(g) {
    if (--g.usedTimes === 0) {
      const S = u.indexOf(g);
      (u[S] = u[u.length - 1]), u.pop(), d.delete(g.cacheKey), g.destroy();
    }
  }
  function R(g) {
    c.remove(g);
  }
  function F() {
    c.dispose();
  }
  return {
    getParameters: p,
    getProgramCacheKey: h,
    getUniforms: y,
    acquireProgram: A,
    releaseProgram: w,
    releaseShaderCache: R,
    programs: u,
    dispose: F,
  };
}
function Ip() {
  let i = new WeakMap();
  function e(a) {
    return i.has(a);
  }
  function t(a) {
    let o = i.get(a);
    return o === void 0 && ((o = {}), i.set(a, o)), o;
  }
  function n(a) {
    i.delete(a);
  }
  function s(a, o, c) {
    i.get(a)[o] = c;
  }
  function r() {
    i = new WeakMap();
  }
  return { has: e, get: t, remove: n, update: s, dispose: r };
}
function Up(i, e) {
  return i.groupOrder !== e.groupOrder
    ? i.groupOrder - e.groupOrder
    : i.renderOrder !== e.renderOrder
    ? i.renderOrder - e.renderOrder
    : i.material.id !== e.material.id
    ? i.material.id - e.material.id
    : i.z !== e.z
    ? i.z - e.z
    : i.id - e.id;
}
function Ro(i, e) {
  return i.groupOrder !== e.groupOrder
    ? i.groupOrder - e.groupOrder
    : i.renderOrder !== e.renderOrder
    ? i.renderOrder - e.renderOrder
    : i.z !== e.z
    ? e.z - i.z
    : i.id - e.id;
}
function Co() {
  const i = [];
  let e = 0;
  const t = [],
    n = [],
    s = [];
  function r() {
    (e = 0), (t.length = 0), (n.length = 0), (s.length = 0);
  }
  function a(d, f, _, v, M, p) {
    let h = i[e];
    return (
      h === void 0
        ? ((h = {
            id: d.id,
            object: d,
            geometry: f,
            material: _,
            groupOrder: v,
            renderOrder: d.renderOrder,
            z: M,
            group: p,
          }),
          (i[e] = h))
        : ((h.id = d.id),
          (h.object = d),
          (h.geometry = f),
          (h.material = _),
          (h.groupOrder = v),
          (h.renderOrder = d.renderOrder),
          (h.z = M),
          (h.group = p)),
      e++,
      h
    );
  }
  function o(d, f, _, v, M, p) {
    const h = a(d, f, _, v, M, p);
    _.transmission > 0
      ? n.push(h)
      : _.transparent === !0
      ? s.push(h)
      : t.push(h);
  }
  function c(d, f, _, v, M, p) {
    const h = a(d, f, _, v, M, p);
    _.transmission > 0
      ? n.unshift(h)
      : _.transparent === !0
      ? s.unshift(h)
      : t.unshift(h);
  }
  function l(d, f) {
    t.length > 1 && t.sort(d || Up),
      n.length > 1 && n.sort(f || Ro),
      s.length > 1 && s.sort(f || Ro);
  }
  function u() {
    for (let d = e, f = i.length; d < f; d++) {
      const _ = i[d];
      if (_.id === null) break;
      (_.id = null),
        (_.object = null),
        (_.geometry = null),
        (_.material = null),
        (_.group = null);
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: s,
    init: r,
    push: o,
    unshift: c,
    finish: u,
    sort: l,
  };
}
function Np() {
  let i = new WeakMap();
  function e(n, s) {
    const r = i.get(n);
    let a;
    return (
      r === void 0
        ? ((a = new Co()), i.set(n, [a]))
        : s >= r.length
        ? ((a = new Co()), r.push(a))
        : (a = r[s]),
      a
    );
  }
  function t() {
    i = new WeakMap();
  }
  return { get: e, dispose: t };
}
function Fp() {
  const i = {};
  return {
    get: function (e) {
      if (i[e.id] !== void 0) return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = { direction: new U(), color: new ze() };
          break;
        case "SpotLight":
          t = {
            position: new U(),
            direction: new U(),
            color: new ze(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          };
          break;
        case "PointLight":
          t = { position: new U(), color: new ze(), distance: 0, decay: 0 };
          break;
        case "HemisphereLight":
          t = { direction: new U(), skyColor: new ze(), groundColor: new ze() };
          break;
        case "RectAreaLight":
          t = {
            color: new ze(),
            position: new U(),
            halfWidth: new U(),
            halfHeight: new U(),
          };
          break;
      }
      return (i[e.id] = t), t;
    },
  };
}
function Op() {
  const i = {};
  return {
    get: function (e) {
      if (i[e.id] !== void 0) return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ce(),
          };
          break;
        case "SpotLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ce(),
          };
          break;
        case "PointLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ce(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3,
          };
          break;
      }
      return (i[e.id] = t), t;
    },
  };
}
let Bp = 0;
function zp(i, e) {
  return (
    (e.castShadow ? 2 : 0) -
    (i.castShadow ? 2 : 0) +
    (e.map ? 1 : 0) -
    (i.map ? 1 : 0)
  );
}
function Vp(i) {
  const e = new Fp(),
    t = Op(),
    n = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1,
        numSpotMaps: -1,
        numLightProbes: -1,
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotLightMap: [],
      spotShadow: [],
      spotShadowMap: [],
      spotLightMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
      numSpotLightShadowsWithMaps: 0,
      numLightProbes: 0,
    };
  for (let l = 0; l < 9; l++) n.probe.push(new U());
  const s = new U(),
    r = new rt(),
    a = new rt();
  function o(l) {
    let u = 0,
      d = 0,
      f = 0;
    for (let g = 0; g < 9; g++) n.probe[g].set(0, 0, 0);
    let _ = 0,
      v = 0,
      M = 0,
      p = 0,
      h = 0,
      T = 0,
      b = 0,
      y = 0,
      A = 0,
      w = 0,
      R = 0;
    l.sort(zp);
    for (let g = 0, S = l.length; g < S; g++) {
      const P = l[g],
        O = P.color,
        B = P.intensity,
        X = P.distance;
      let W = null;
      if (
        (P.shadow &&
          P.shadow.map &&
          (P.shadow.map.texture.format === hi
            ? (W = P.shadow.map.texture)
            : (W = P.shadow.map.depthTexture || P.shadow.map.texture)),
        P.isAmbientLight)
      )
        (u += O.r * B), (d += O.g * B), (f += O.b * B);
      else if (P.isLightProbe) {
        for (let H = 0; H < 9; H++)
          n.probe[H].addScaledVector(P.sh.coefficients[H], B);
        R++;
      } else if (P.isDirectionalLight) {
        const H = e.get(P);
        if ((H.color.copy(P.color).multiplyScalar(P.intensity), P.castShadow)) {
          const G = P.shadow,
            j = t.get(P);
          (j.shadowIntensity = G.intensity),
            (j.shadowBias = G.bias),
            (j.shadowNormalBias = G.normalBias),
            (j.shadowRadius = G.radius),
            (j.shadowMapSize = G.mapSize),
            (n.directionalShadow[_] = j),
            (n.directionalShadowMap[_] = W),
            (n.directionalShadowMatrix[_] = P.shadow.matrix),
            T++;
        }
        (n.directional[_] = H), _++;
      } else if (P.isSpotLight) {
        const H = e.get(P);
        H.position.setFromMatrixPosition(P.matrixWorld),
          H.color.copy(O).multiplyScalar(B),
          (H.distance = X),
          (H.coneCos = Math.cos(P.angle)),
          (H.penumbraCos = Math.cos(P.angle * (1 - P.penumbra))),
          (H.decay = P.decay),
          (n.spot[M] = H);
        const G = P.shadow;
        if (
          (P.map &&
            ((n.spotLightMap[A] = P.map),
            A++,
            G.updateMatrices(P),
            P.castShadow && w++),
          (n.spotLightMatrix[M] = G.matrix),
          P.castShadow)
        ) {
          const j = t.get(P);
          (j.shadowIntensity = G.intensity),
            (j.shadowBias = G.bias),
            (j.shadowNormalBias = G.normalBias),
            (j.shadowRadius = G.radius),
            (j.shadowMapSize = G.mapSize),
            (n.spotShadow[M] = j),
            (n.spotShadowMap[M] = W),
            y++;
        }
        M++;
      } else if (P.isRectAreaLight) {
        const H = e.get(P);
        H.color.copy(O).multiplyScalar(B),
          H.halfWidth.set(P.width * 0.5, 0, 0),
          H.halfHeight.set(0, P.height * 0.5, 0),
          (n.rectArea[p] = H),
          p++;
      } else if (P.isPointLight) {
        const H = e.get(P);
        if (
          (H.color.copy(P.color).multiplyScalar(P.intensity),
          (H.distance = P.distance),
          (H.decay = P.decay),
          P.castShadow)
        ) {
          const G = P.shadow,
            j = t.get(P);
          (j.shadowIntensity = G.intensity),
            (j.shadowBias = G.bias),
            (j.shadowNormalBias = G.normalBias),
            (j.shadowRadius = G.radius),
            (j.shadowMapSize = G.mapSize),
            (j.shadowCameraNear = G.camera.near),
            (j.shadowCameraFar = G.camera.far),
            (n.pointShadow[v] = j),
            (n.pointShadowMap[v] = W),
            (n.pointShadowMatrix[v] = P.shadow.matrix),
            b++;
        }
        (n.point[v] = H), v++;
      } else if (P.isHemisphereLight) {
        const H = e.get(P);
        H.skyColor.copy(P.color).multiplyScalar(B),
          H.groundColor.copy(P.groundColor).multiplyScalar(B),
          (n.hemi[h] = H),
          h++;
      }
    }
    p > 0 &&
      (i.has("OES_texture_float_linear") === !0
        ? ((n.rectAreaLTC1 = oe.LTC_FLOAT_1), (n.rectAreaLTC2 = oe.LTC_FLOAT_2))
        : ((n.rectAreaLTC1 = oe.LTC_HALF_1), (n.rectAreaLTC2 = oe.LTC_HALF_2))),
      (n.ambient[0] = u),
      (n.ambient[1] = d),
      (n.ambient[2] = f);
    const F = n.hash;
    (F.directionalLength !== _ ||
      F.pointLength !== v ||
      F.spotLength !== M ||
      F.rectAreaLength !== p ||
      F.hemiLength !== h ||
      F.numDirectionalShadows !== T ||
      F.numPointShadows !== b ||
      F.numSpotShadows !== y ||
      F.numSpotMaps !== A ||
      F.numLightProbes !== R) &&
      ((n.directional.length = _),
      (n.spot.length = M),
      (n.rectArea.length = p),
      (n.point.length = v),
      (n.hemi.length = h),
      (n.directionalShadow.length = T),
      (n.directionalShadowMap.length = T),
      (n.pointShadow.length = b),
      (n.pointShadowMap.length = b),
      (n.spotShadow.length = y),
      (n.spotShadowMap.length = y),
      (n.directionalShadowMatrix.length = T),
      (n.pointShadowMatrix.length = b),
      (n.spotLightMatrix.length = y + A - w),
      (n.spotLightMap.length = A),
      (n.numSpotLightShadowsWithMaps = w),
      (n.numLightProbes = R),
      (F.directionalLength = _),
      (F.pointLength = v),
      (F.spotLength = M),
      (F.rectAreaLength = p),
      (F.hemiLength = h),
      (F.numDirectionalShadows = T),
      (F.numPointShadows = b),
      (F.numSpotShadows = y),
      (F.numSpotMaps = A),
      (F.numLightProbes = R),
      (n.version = Bp++));
  }
  function c(l, u) {
    let d = 0,
      f = 0,
      _ = 0,
      v = 0,
      M = 0;
    const p = u.matrixWorldInverse;
    for (let h = 0, T = l.length; h < T; h++) {
      const b = l[h];
      if (b.isDirectionalLight) {
        const y = n.directional[d];
        y.direction.setFromMatrixPosition(b.matrixWorld),
          s.setFromMatrixPosition(b.target.matrixWorld),
          y.direction.sub(s),
          y.direction.transformDirection(p),
          d++;
      } else if (b.isSpotLight) {
        const y = n.spot[_];
        y.position.setFromMatrixPosition(b.matrixWorld),
          y.position.applyMatrix4(p),
          y.direction.setFromMatrixPosition(b.matrixWorld),
          s.setFromMatrixPosition(b.target.matrixWorld),
          y.direction.sub(s),
          y.direction.transformDirection(p),
          _++;
      } else if (b.isRectAreaLight) {
        const y = n.rectArea[v];
        y.position.setFromMatrixPosition(b.matrixWorld),
          y.position.applyMatrix4(p),
          a.identity(),
          r.copy(b.matrixWorld),
          r.premultiply(p),
          a.extractRotation(r),
          y.halfWidth.set(b.width * 0.5, 0, 0),
          y.halfHeight.set(0, b.height * 0.5, 0),
          y.halfWidth.applyMatrix4(a),
          y.halfHeight.applyMatrix4(a),
          v++;
      } else if (b.isPointLight) {
        const y = n.point[f];
        y.position.setFromMatrixPosition(b.matrixWorld),
          y.position.applyMatrix4(p),
          f++;
      } else if (b.isHemisphereLight) {
        const y = n.hemi[M];
        y.direction.setFromMatrixPosition(b.matrixWorld),
          y.direction.transformDirection(p),
          M++;
      }
    }
  }
  return { setup: o, setupView: c, state: n };
}
function Po(i) {
  const e = new Vp(i),
    t = [],
    n = [];
  function s(u) {
    (l.camera = u), (t.length = 0), (n.length = 0);
  }
  function r(u) {
    t.push(u);
  }
  function a(u) {
    n.push(u);
  }
  function o() {
    e.setup(t);
  }
  function c(u) {
    e.setupView(t, u);
  }
  const l = {
    lightsArray: t,
    shadowsArray: n,
    camera: null,
    lights: e,
    transmissionRenderTarget: {},
  };
  return {
    init: s,
    state: l,
    setupLights: o,
    setupLightsView: c,
    pushLight: r,
    pushShadow: a,
  };
}
function Gp(i) {
  let e = new WeakMap();
  function t(s, r = 0) {
    const a = e.get(s);
    let o;
    return (
      a === void 0
        ? ((o = new Po(i)), e.set(s, [o]))
        : r >= a.length
        ? ((o = new Po(i)), a.push(o))
        : (o = a[r]),
      o
    );
  }
  function n() {
    e = new WeakMap();
  }
  return { get: t, dispose: n };
}
const Hp = `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
  kp = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,
  Wp = [
    new U(1, 0, 0),
    new U(-1, 0, 0),
    new U(0, 1, 0),
    new U(0, -1, 0),
    new U(0, 0, 1),
    new U(0, 0, -1),
  ],
  Xp = [
    new U(0, -1, 0),
    new U(0, -1, 0),
    new U(0, 0, 1),
    new U(0, 0, -1),
    new U(0, -1, 0),
    new U(0, -1, 0),
  ],
  Do = new rt(),
  Ti = new U(),
  or = new U();
function Yp(i, e, t) {
  let n = new pa();
  const s = new Ce(),
    r = new Ce(),
    a = new lt(),
    o = new eh(),
    c = new th(),
    l = {},
    u = t.maxTextureSize,
    d = { [wn]: Lt, [Lt]: wn, [dn]: dn },
    f = new rn({
      defines: { VSM_SAMPLES: 8 },
      uniforms: {
        shadow_pass: { value: null },
        resolution: { value: new Ce() },
        radius: { value: 4 },
      },
      vertexShader: Hp,
      fragmentShader: kp,
    }),
    _ = f.clone();
  _.defines.HORIZONTAL_PASS = 1;
  const v = new zt();
  v.setAttribute(
    "position",
    new tn(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3)
  );
  const M = new xt(v, f),
    p = this;
  (this.enabled = !1),
    (this.autoUpdate = !0),
    (this.needsUpdate = !1),
    (this.type = us);
  let h = this.type;
  this.render = function (w, R, F) {
    if (
      p.enabled === !1 ||
      (p.autoUpdate === !1 && p.needsUpdate === !1) ||
      w.length === 0
    )
      return;
    w.type === Hl &&
      (we(
        "WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."
      ),
      (w.type = us));
    const g = i.getRenderTarget(),
      S = i.getActiveCubeFace(),
      P = i.getActiveMipmapLevel(),
      O = i.state;
    O.setBlending(pn),
      O.buffers.depth.getReversed() === !0
        ? O.buffers.color.setClear(0, 0, 0, 0)
        : O.buffers.color.setClear(1, 1, 1, 1),
      O.buffers.depth.setTest(!0),
      O.setScissorTest(!1);
    const B = h !== this.type;
    B &&
      R.traverse(function (X) {
        X.material &&
          (Array.isArray(X.material)
            ? X.material.forEach((W) => (W.needsUpdate = !0))
            : (X.material.needsUpdate = !0));
      });
    for (let X = 0, W = w.length; X < W; X++) {
      const H = w[X],
        G = H.shadow;
      if (G === void 0) {
        we("WebGLShadowMap:", H, "has no shadow.");
        continue;
      }
      if (G.autoUpdate === !1 && G.needsUpdate === !1) continue;
      s.copy(G.mapSize);
      const j = G.getFrameExtents();
      if (
        (s.multiply(j),
        r.copy(G.mapSize),
        (s.x > u || s.y > u) &&
          (s.x > u &&
            ((r.x = Math.floor(u / j.x)),
            (s.x = r.x * j.x),
            (G.mapSize.x = r.x)),
          s.y > u &&
            ((r.y = Math.floor(u / j.y)),
            (s.y = r.y * j.y),
            (G.mapSize.y = r.y))),
        G.map === null || B === !0)
      ) {
        if (
          (G.map !== null &&
            (G.map.depthTexture !== null &&
              (G.map.depthTexture.dispose(), (G.map.depthTexture = null)),
            G.map.dispose()),
          this.type === bi)
        ) {
          if (H.isPointLight) {
            we(
              "WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead."
            );
            continue;
          }
          (G.map = new en(s.x, s.y, {
            format: hi,
            type: _n,
            minFilter: yt,
            magFilter: yt,
            generateMipmaps: !1,
          })),
            (G.map.texture.name = H.name + ".shadowMap"),
            (G.map.depthTexture = new Pi(s.x, s.y, $t)),
            (G.map.depthTexture.name = H.name + ".shadowMapDepth"),
            (G.map.depthTexture.format = gn),
            (G.map.depthTexture.compareFunction = null),
            (G.map.depthTexture.minFilter = vt),
            (G.map.depthTexture.magFilter = vt);
        } else {
          H.isPointLight
            ? ((G.map = new ol(s.x)), (G.map.depthTexture = new Jc(s.x, nn)))
            : ((G.map = new en(s.x, s.y)),
              (G.map.depthTexture = new Pi(s.x, s.y, nn))),
            (G.map.depthTexture.name = H.name + ".shadowMap"),
            (G.map.depthTexture.format = gn);
          const ae = i.state.buffers.depth.getReversed();
          this.type === us
            ? ((G.map.depthTexture.compareFunction = ae ? ua : ha),
              (G.map.depthTexture.minFilter = yt),
              (G.map.depthTexture.magFilter = yt))
            : ((G.map.depthTexture.compareFunction = null),
              (G.map.depthTexture.minFilter = vt),
              (G.map.depthTexture.magFilter = vt));
        }
        G.camera.updateProjectionMatrix();
      }
      const he = G.map.isWebGLCubeRenderTarget ? 6 : 1;
      for (let ae = 0; ae < he; ae++) {
        if (G.map.isWebGLCubeRenderTarget)
          i.setRenderTarget(G.map, ae), i.clear();
        else {
          ae === 0 && (i.setRenderTarget(G.map), i.clear());
          const ue = G.getViewport(ae);
          a.set(r.x * ue.x, r.y * ue.y, r.x * ue.z, r.y * ue.w), O.viewport(a);
        }
        if (H.isPointLight) {
          const ue = G.camera,
            Fe = G.matrix,
            Ie = H.distance || ue.far;
          Ie !== ue.far && ((ue.far = Ie), ue.updateProjectionMatrix()),
            Ti.setFromMatrixPosition(H.matrixWorld),
            ue.position.copy(Ti),
            or.copy(ue.position),
            or.add(Wp[ae]),
            ue.up.copy(Xp[ae]),
            ue.lookAt(or),
            ue.updateMatrixWorld(),
            Fe.makeTranslation(-Ti.x, -Ti.y, -Ti.z),
            Do.multiplyMatrices(ue.projectionMatrix, ue.matrixWorldInverse),
            G._frustum.setFromProjectionMatrix(
              Do,
              ue.coordinateSystem,
              ue.reversedDepth
            );
        } else G.updateMatrices(H);
        (n = G.getFrustum()), y(R, F, G.camera, H, this.type);
      }
      G.isPointLightShadow !== !0 && this.type === bi && T(G, F),
        (G.needsUpdate = !1);
    }
    (h = this.type), (p.needsUpdate = !1), i.setRenderTarget(g, S, P);
  };
  function T(w, R) {
    const F = e.update(M);
    f.defines.VSM_SAMPLES !== w.blurSamples &&
      ((f.defines.VSM_SAMPLES = w.blurSamples),
      (_.defines.VSM_SAMPLES = w.blurSamples),
      (f.needsUpdate = !0),
      (_.needsUpdate = !0)),
      w.mapPass === null &&
        (w.mapPass = new en(s.x, s.y, { format: hi, type: _n })),
      (f.uniforms.shadow_pass.value = w.map.depthTexture),
      (f.uniforms.resolution.value = w.mapSize),
      (f.uniforms.radius.value = w.radius),
      i.setRenderTarget(w.mapPass),
      i.clear(),
      i.renderBufferDirect(R, null, F, f, M, null),
      (_.uniforms.shadow_pass.value = w.mapPass.texture),
      (_.uniforms.resolution.value = w.mapSize),
      (_.uniforms.radius.value = w.radius),
      i.setRenderTarget(w.map),
      i.clear(),
      i.renderBufferDirect(R, null, F, _, M, null);
  }
  function b(w, R, F, g) {
    let S = null;
    const P =
      F.isPointLight === !0 ? w.customDistanceMaterial : w.customDepthMaterial;
    if (P !== void 0) S = P;
    else if (
      ((S = F.isPointLight === !0 ? c : o),
      (i.localClippingEnabled &&
        R.clipShadows === !0 &&
        Array.isArray(R.clippingPlanes) &&
        R.clippingPlanes.length !== 0) ||
        (R.displacementMap && R.displacementScale !== 0) ||
        (R.alphaMap && R.alphaTest > 0) ||
        (R.map && R.alphaTest > 0) ||
        R.alphaToCoverage === !0)
    ) {
      const O = S.uuid,
        B = R.uuid;
      let X = l[O];
      X === void 0 && ((X = {}), (l[O] = X));
      let W = X[B];
      W === void 0 &&
        ((W = S.clone()), (X[B] = W), R.addEventListener("dispose", A)),
        (S = W);
    }
    if (
      ((S.visible = R.visible),
      (S.wireframe = R.wireframe),
      g === bi
        ? (S.side = R.shadowSide !== null ? R.shadowSide : R.side)
        : (S.side = R.shadowSide !== null ? R.shadowSide : d[R.side]),
      (S.alphaMap = R.alphaMap),
      (S.alphaTest = R.alphaToCoverage === !0 ? 0.5 : R.alphaTest),
      (S.map = R.map),
      (S.clipShadows = R.clipShadows),
      (S.clippingPlanes = R.clippingPlanes),
      (S.clipIntersection = R.clipIntersection),
      (S.displacementMap = R.displacementMap),
      (S.displacementScale = R.displacementScale),
      (S.displacementBias = R.displacementBias),
      (S.wireframeLinewidth = R.wireframeLinewidth),
      (S.linewidth = R.linewidth),
      F.isPointLight === !0 && S.isMeshDistanceMaterial === !0)
    ) {
      const O = i.properties.get(S);
      O.light = F;
    }
    return S;
  }
  function y(w, R, F, g, S) {
    if (w.visible === !1) return;
    if (
      w.layers.test(R.layers) &&
      (w.isMesh || w.isLine || w.isPoints) &&
      (w.castShadow || (w.receiveShadow && S === bi)) &&
      (!w.frustumCulled || n.intersectsObject(w))
    ) {
      w.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse, w.matrixWorld);
      const B = e.update(w),
        X = w.material;
      if (Array.isArray(X)) {
        const W = B.groups;
        for (let H = 0, G = W.length; H < G; H++) {
          const j = W[H],
            he = X[j.materialIndex];
          if (he && he.visible) {
            const ae = b(w, he, g, S);
            w.onBeforeShadow(i, w, R, F, B, ae, j),
              i.renderBufferDirect(F, null, B, ae, w, j),
              w.onAfterShadow(i, w, R, F, B, ae, j);
          }
        }
      } else if (X.visible) {
        const W = b(w, X, g, S);
        w.onBeforeShadow(i, w, R, F, B, W, null),
          i.renderBufferDirect(F, null, B, W, w, null),
          w.onAfterShadow(i, w, R, F, B, W, null);
      }
    }
    const O = w.children;
    for (let B = 0, X = O.length; B < X; B++) y(O[B], R, F, g, S);
  }
  function A(w) {
    w.target.removeEventListener("dispose", A);
    for (const F in l) {
      const g = l[F],
        S = w.target.uuid;
      S in g && (g[S].dispose(), delete g[S]);
    }
  }
}
const qp = {
  [ur]: dr,
  [fr]: _r,
  [pr]: gr,
  [li]: mr,
  [dr]: ur,
  [_r]: fr,
  [gr]: pr,
  [mr]: li,
};
function Kp(i, e) {
  function t() {
    let D = !1;
    const ce = new lt();
    let ee = null;
    const de = new lt(0, 0, 0, 0);
    return {
      setMask: function (J) {
        ee !== J && !D && (i.colorMask(J, J, J, J), (ee = J));
      },
      setLocked: function (J) {
        D = J;
      },
      setClear: function (J, K, te, Re, tt) {
        tt === !0 && ((J *= Re), (K *= Re), (te *= Re)),
          ce.set(J, K, te, Re),
          de.equals(ce) === !1 && (i.clearColor(J, K, te, Re), de.copy(ce));
      },
      reset: function () {
        (D = !1), (ee = null), de.set(-1, 0, 0, 0);
      },
    };
  }
  function n() {
    let D = !1,
      ce = !1,
      ee = null,
      de = null,
      J = null;
    return {
      setReversed: function (K) {
        if (ce !== K) {
          const te = e.get("EXT_clip_control");
          K
            ? te.clipControlEXT(te.LOWER_LEFT_EXT, te.ZERO_TO_ONE_EXT)
            : te.clipControlEXT(te.LOWER_LEFT_EXT, te.NEGATIVE_ONE_TO_ONE_EXT),
            (ce = K);
          const Re = J;
          (J = null), this.setClear(Re);
        }
      },
      getReversed: function () {
        return ce;
      },
      setTest: function (K) {
        K ? $(i.DEPTH_TEST) : pe(i.DEPTH_TEST);
      },
      setMask: function (K) {
        ee !== K && !D && (i.depthMask(K), (ee = K));
      },
      setFunc: function (K) {
        if ((ce && (K = qp[K]), de !== K)) {
          switch (K) {
            case ur:
              i.depthFunc(i.NEVER);
              break;
            case dr:
              i.depthFunc(i.ALWAYS);
              break;
            case fr:
              i.depthFunc(i.LESS);
              break;
            case li:
              i.depthFunc(i.LEQUAL);
              break;
            case pr:
              i.depthFunc(i.EQUAL);
              break;
            case mr:
              i.depthFunc(i.GEQUAL);
              break;
            case _r:
              i.depthFunc(i.GREATER);
              break;
            case gr:
              i.depthFunc(i.NOTEQUAL);
              break;
            default:
              i.depthFunc(i.LEQUAL);
          }
          de = K;
        }
      },
      setLocked: function (K) {
        D = K;
      },
      setClear: function (K) {
        J !== K && (ce && (K = 1 - K), i.clearDepth(K), (J = K));
      },
      reset: function () {
        (D = !1), (ee = null), (de = null), (J = null), (ce = !1);
      },
    };
  }
  function s() {
    let D = !1,
      ce = null,
      ee = null,
      de = null,
      J = null,
      K = null,
      te = null,
      Re = null,
      tt = null;
    return {
      setTest: function (qe) {
        D || (qe ? $(i.STENCIL_TEST) : pe(i.STENCIL_TEST));
      },
      setMask: function (qe) {
        ce !== qe && !D && (i.stencilMask(qe), (ce = qe));
      },
      setFunc: function (qe, Kt, an) {
        (ee !== qe || de !== Kt || J !== an) &&
          (i.stencilFunc(qe, Kt, an), (ee = qe), (de = Kt), (J = an));
      },
      setOp: function (qe, Kt, an) {
        (K !== qe || te !== Kt || Re !== an) &&
          (i.stencilOp(qe, Kt, an), (K = qe), (te = Kt), (Re = an));
      },
      setLocked: function (qe) {
        D = qe;
      },
      setClear: function (qe) {
        tt !== qe && (i.clearStencil(qe), (tt = qe));
      },
      reset: function () {
        (D = !1),
          (ce = null),
          (ee = null),
          (de = null),
          (J = null),
          (K = null),
          (te = null),
          (Re = null),
          (tt = null);
      },
    };
  }
  const r = new t(),
    a = new n(),
    o = new s(),
    c = new WeakMap(),
    l = new WeakMap();
  let u = {},
    d = {},
    f = new WeakMap(),
    _ = [],
    v = null,
    M = !1,
    p = null,
    h = null,
    T = null,
    b = null,
    y = null,
    A = null,
    w = null,
    R = new ze(0, 0, 0),
    F = 0,
    g = !1,
    S = null,
    P = null,
    O = null,
    B = null,
    X = null;
  const W = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let H = !1,
    G = 0;
  const j = i.getParameter(i.VERSION);
  j.indexOf("WebGL") !== -1
    ? ((G = parseFloat(/^WebGL (\d)/.exec(j)[1])), (H = G >= 1))
    : j.indexOf("OpenGL ES") !== -1 &&
      ((G = parseFloat(/^OpenGL ES (\d)/.exec(j)[1])), (H = G >= 2));
  let he = null,
    ae = {};
  const ue = i.getParameter(i.SCISSOR_BOX),
    Fe = i.getParameter(i.VIEWPORT),
    Ie = new lt().fromArray(ue),
    st = new lt().fromArray(Fe);
  function it(D, ce, ee, de) {
    const J = new Uint8Array(4),
      K = i.createTexture();
    i.bindTexture(D, K),
      i.texParameteri(D, i.TEXTURE_MIN_FILTER, i.NEAREST),
      i.texParameteri(D, i.TEXTURE_MAG_FILTER, i.NEAREST);
    for (let te = 0; te < ee; te++)
      D === i.TEXTURE_3D || D === i.TEXTURE_2D_ARRAY
        ? i.texImage3D(ce, 0, i.RGBA, 1, 1, de, 0, i.RGBA, i.UNSIGNED_BYTE, J)
        : i.texImage2D(ce + te, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, J);
    return K;
  }
  const q = {};
  (q[i.TEXTURE_2D] = it(i.TEXTURE_2D, i.TEXTURE_2D, 1)),
    (q[i.TEXTURE_CUBE_MAP] = it(
      i.TEXTURE_CUBE_MAP,
      i.TEXTURE_CUBE_MAP_POSITIVE_X,
      6
    )),
    (q[i.TEXTURE_2D_ARRAY] = it(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1)),
    (q[i.TEXTURE_3D] = it(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1)),
    r.setClear(0, 0, 0, 1),
    a.setClear(1),
    o.setClear(0),
    $(i.DEPTH_TEST),
    a.setFunc(li),
    Ue(!1),
    ct(Ca),
    $(i.CULL_FACE),
    Ye(pn);
  function $(D) {
    u[D] !== !0 && (i.enable(D), (u[D] = !0));
  }
  function pe(D) {
    u[D] !== !1 && (i.disable(D), (u[D] = !1));
  }
  function Pe(D, ce) {
    return d[D] !== ce
      ? (i.bindFramebuffer(D, ce),
        (d[D] = ce),
        D === i.DRAW_FRAMEBUFFER && (d[i.FRAMEBUFFER] = ce),
        D === i.FRAMEBUFFER && (d[i.DRAW_FRAMEBUFFER] = ce),
        !0)
      : !1;
  }
  function ge(D, ce) {
    let ee = _,
      de = !1;
    if (D) {
      (ee = f.get(ce)), ee === void 0 && ((ee = []), f.set(ce, ee));
      const J = D.textures;
      if (ee.length !== J.length || ee[0] !== i.COLOR_ATTACHMENT0) {
        for (let K = 0, te = J.length; K < te; K++)
          ee[K] = i.COLOR_ATTACHMENT0 + K;
        (ee.length = J.length), (de = !0);
      }
    } else ee[0] !== i.BACK && ((ee[0] = i.BACK), (de = !0));
    de && i.drawBuffers(ee);
  }
  function He(D) {
    return v !== D ? (i.useProgram(D), (v = D), !0) : !1;
  }
  const _t = {
    [Fn]: i.FUNC_ADD,
    [Wl]: i.FUNC_SUBTRACT,
    [Xl]: i.FUNC_REVERSE_SUBTRACT,
  };
  (_t[Yl] = i.MIN), (_t[ql] = i.MAX);
  const Ve = {
    [Kl]: i.ZERO,
    [Zl]: i.ONE,
    [jl]: i.SRC_COLOR,
    [cr]: i.SRC_ALPHA,
    [nc]: i.SRC_ALPHA_SATURATE,
    [ec]: i.DST_COLOR,
    [Jl]: i.DST_ALPHA,
    [$l]: i.ONE_MINUS_SRC_COLOR,
    [hr]: i.ONE_MINUS_SRC_ALPHA,
    [tc]: i.ONE_MINUS_DST_COLOR,
    [Ql]: i.ONE_MINUS_DST_ALPHA,
    [ic]: i.CONSTANT_COLOR,
    [sc]: i.ONE_MINUS_CONSTANT_COLOR,
    [rc]: i.CONSTANT_ALPHA,
    [ac]: i.ONE_MINUS_CONSTANT_ALPHA,
  };
  function Ye(D, ce, ee, de, J, K, te, Re, tt, qe) {
    if (D === pn) {
      M === !0 && (pe(i.BLEND), (M = !1));
      return;
    }
    if ((M === !1 && ($(i.BLEND), (M = !0)), D !== kl)) {
      if (D !== p || qe !== g) {
        if (
          ((h !== Fn || y !== Fn) &&
            (i.blendEquation(i.FUNC_ADD), (h = Fn), (y = Fn)),
          qe)
        )
          switch (D) {
            case ai:
              i.blendFuncSeparate(
                i.ONE,
                i.ONE_MINUS_SRC_ALPHA,
                i.ONE,
                i.ONE_MINUS_SRC_ALPHA
              );
              break;
            case Pa:
              i.blendFunc(i.ONE, i.ONE);
              break;
            case Da:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case La:
              i.blendFuncSeparate(
                i.DST_COLOR,
                i.ONE_MINUS_SRC_ALPHA,
                i.ZERO,
                i.ONE
              );
              break;
            default:
              We("WebGLState: Invalid blending: ", D);
              break;
          }
        else
          switch (D) {
            case ai:
              i.blendFuncSeparate(
                i.SRC_ALPHA,
                i.ONE_MINUS_SRC_ALPHA,
                i.ONE,
                i.ONE_MINUS_SRC_ALPHA
              );
              break;
            case Pa:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE, i.ONE, i.ONE);
              break;
            case Da:
              We(
                "WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true"
              );
              break;
            case La:
              We(
                "WebGLState: MultiplyBlending requires material.premultipliedAlpha = true"
              );
              break;
            default:
              We("WebGLState: Invalid blending: ", D);
              break;
          }
        (T = null),
          (b = null),
          (A = null),
          (w = null),
          R.set(0, 0, 0),
          (F = 0),
          (p = D),
          (g = qe);
      }
      return;
    }
    (J = J || ce),
      (K = K || ee),
      (te = te || de),
      (ce !== h || J !== y) &&
        (i.blendEquationSeparate(_t[ce], _t[J]), (h = ce), (y = J)),
      (ee !== T || de !== b || K !== A || te !== w) &&
        (i.blendFuncSeparate(Ve[ee], Ve[de], Ve[K], Ve[te]),
        (T = ee),
        (b = de),
        (A = K),
        (w = te)),
      (Re.equals(R) === !1 || tt !== F) &&
        (i.blendColor(Re.r, Re.g, Re.b, tt), R.copy(Re), (F = tt)),
      (p = D),
      (g = !1);
  }
  function Je(D, ce) {
    D.side === dn ? pe(i.CULL_FACE) : $(i.CULL_FACE);
    let ee = D.side === Lt;
    ce && (ee = !ee),
      Ue(ee),
      D.blending === ai && D.transparent === !1
        ? Ye(pn)
        : Ye(
            D.blending,
            D.blendEquation,
            D.blendSrc,
            D.blendDst,
            D.blendEquationAlpha,
            D.blendSrcAlpha,
            D.blendDstAlpha,
            D.blendColor,
            D.blendAlpha,
            D.premultipliedAlpha
          ),
      a.setFunc(D.depthFunc),
      a.setTest(D.depthTest),
      a.setMask(D.depthWrite),
      r.setMask(D.colorWrite);
    const de = D.stencilWrite;
    o.setTest(de),
      de &&
        (o.setMask(D.stencilWriteMask),
        o.setFunc(D.stencilFunc, D.stencilRef, D.stencilFuncMask),
        o.setOp(D.stencilFail, D.stencilZFail, D.stencilZPass)),
      ht(D.polygonOffset, D.polygonOffsetFactor, D.polygonOffsetUnits),
      D.alphaToCoverage === !0
        ? $(i.SAMPLE_ALPHA_TO_COVERAGE)
        : pe(i.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function Ue(D) {
    S !== D && (D ? i.frontFace(i.CW) : i.frontFace(i.CCW), (S = D));
  }
  function ct(D) {
    D !== Vl
      ? ($(i.CULL_FACE),
        D !== P &&
          (D === Ca
            ? i.cullFace(i.BACK)
            : D === Gl
            ? i.cullFace(i.FRONT)
            : i.cullFace(i.FRONT_AND_BACK)))
      : pe(i.CULL_FACE),
      (P = D);
  }
  function C(D) {
    D !== O && (H && i.lineWidth(D), (O = D));
  }
  function ht(D, ce, ee) {
    D
      ? ($(i.POLYGON_OFFSET_FILL),
        (B !== ce || X !== ee) && (i.polygonOffset(ce, ee), (B = ce), (X = ee)))
      : pe(i.POLYGON_OFFSET_FILL);
  }
  function Xe(D) {
    D ? $(i.SCISSOR_TEST) : pe(i.SCISSOR_TEST);
  }
  function et(D) {
    D === void 0 && (D = i.TEXTURE0 + W - 1),
      he !== D && (i.activeTexture(D), (he = D));
  }
  function ve(D, ce, ee) {
    ee === void 0 && (he === null ? (ee = i.TEXTURE0 + W - 1) : (ee = he));
    let de = ae[ee];
    de === void 0 && ((de = { type: void 0, texture: void 0 }), (ae[ee] = de)),
      (de.type !== D || de.texture !== ce) &&
        (he !== ee && (i.activeTexture(ee), (he = ee)),
        i.bindTexture(D, ce || q[D]),
        (de.type = D),
        (de.texture = ce));
  }
  function E() {
    const D = ae[he];
    D !== void 0 &&
      D.type !== void 0 &&
      (i.bindTexture(D.type, null), (D.type = void 0), (D.texture = void 0));
  }
  function m() {
    try {
      i.compressedTexImage2D(...arguments);
    } catch (D) {
      We("WebGLState:", D);
    }
  }
  function L() {
    try {
      i.compressedTexImage3D(...arguments);
    } catch (D) {
      We("WebGLState:", D);
    }
  }
  function Y() {
    try {
      i.texSubImage2D(...arguments);
    } catch (D) {
      We("WebGLState:", D);
    }
  }
  function Z() {
    try {
      i.texSubImage3D(...arguments);
    } catch (D) {
      We("WebGLState:", D);
    }
  }
  function k() {
    try {
      i.compressedTexSubImage2D(...arguments);
    } catch (D) {
      We("WebGLState:", D);
    }
  }
  function Se() {
    try {
      i.compressedTexSubImage3D(...arguments);
    } catch (D) {
      We("WebGLState:", D);
    }
  }
  function ne() {
    try {
      i.texStorage2D(...arguments);
    } catch (D) {
      We("WebGLState:", D);
    }
  }
  function xe() {
    try {
      i.texStorage3D(...arguments);
    } catch (D) {
      We("WebGLState:", D);
    }
  }
  function Ae() {
    try {
      i.texImage2D(...arguments);
    } catch (D) {
      We("WebGLState:", D);
    }
  }
  function Q() {
    try {
      i.texImage3D(...arguments);
    } catch (D) {
      We("WebGLState:", D);
    }
  }
  function se(D) {
    Ie.equals(D) === !1 && (i.scissor(D.x, D.y, D.z, D.w), Ie.copy(D));
  }
  function _e(D) {
    st.equals(D) === !1 && (i.viewport(D.x, D.y, D.z, D.w), st.copy(D));
  }
  function Me(D, ce) {
    let ee = l.get(ce);
    ee === void 0 && ((ee = new WeakMap()), l.set(ce, ee));
    let de = ee.get(D);
    de === void 0 && ((de = i.getUniformBlockIndex(ce, D.name)), ee.set(D, de));
  }
  function ie(D, ce) {
    const de = l.get(ce).get(D);
    c.get(ce) !== de &&
      (i.uniformBlockBinding(ce, de, D.__bindingPointIndex), c.set(ce, de));
  }
  function Ne() {
    i.disable(i.BLEND),
      i.disable(i.CULL_FACE),
      i.disable(i.DEPTH_TEST),
      i.disable(i.POLYGON_OFFSET_FILL),
      i.disable(i.SCISSOR_TEST),
      i.disable(i.STENCIL_TEST),
      i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),
      i.blendEquation(i.FUNC_ADD),
      i.blendFunc(i.ONE, i.ZERO),
      i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO),
      i.blendColor(0, 0, 0, 0),
      i.colorMask(!0, !0, !0, !0),
      i.clearColor(0, 0, 0, 0),
      i.depthMask(!0),
      i.depthFunc(i.LESS),
      a.setReversed(!1),
      i.clearDepth(1),
      i.stencilMask(4294967295),
      i.stencilFunc(i.ALWAYS, 0, 4294967295),
      i.stencilOp(i.KEEP, i.KEEP, i.KEEP),
      i.clearStencil(0),
      i.cullFace(i.BACK),
      i.frontFace(i.CCW),
      i.polygonOffset(0, 0),
      i.activeTexture(i.TEXTURE0),
      i.bindFramebuffer(i.FRAMEBUFFER, null),
      i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null),
      i.bindFramebuffer(i.READ_FRAMEBUFFER, null),
      i.useProgram(null),
      i.lineWidth(1),
      i.scissor(0, 0, i.canvas.width, i.canvas.height),
      i.viewport(0, 0, i.canvas.width, i.canvas.height),
      (u = {}),
      (he = null),
      (ae = {}),
      (d = {}),
      (f = new WeakMap()),
      (_ = []),
      (v = null),
      (M = !1),
      (p = null),
      (h = null),
      (T = null),
      (b = null),
      (y = null),
      (A = null),
      (w = null),
      (R = new ze(0, 0, 0)),
      (F = 0),
      (g = !1),
      (S = null),
      (P = null),
      (O = null),
      (B = null),
      (X = null),
      Ie.set(0, 0, i.canvas.width, i.canvas.height),
      st.set(0, 0, i.canvas.width, i.canvas.height),
      r.reset(),
      a.reset(),
      o.reset();
  }
  return {
    buffers: { color: r, depth: a, stencil: o },
    enable: $,
    disable: pe,
    bindFramebuffer: Pe,
    drawBuffers: ge,
    useProgram: He,
    setBlending: Ye,
    setMaterial: Je,
    setFlipSided: Ue,
    setCullFace: ct,
    setLineWidth: C,
    setPolygonOffset: ht,
    setScissorTest: Xe,
    activeTexture: et,
    bindTexture: ve,
    unbindTexture: E,
    compressedTexImage2D: m,
    compressedTexImage3D: L,
    texImage2D: Ae,
    texImage3D: Q,
    updateUBOMapping: Me,
    uniformBlockBinding: ie,
    texStorage2D: ne,
    texStorage3D: xe,
    texSubImage2D: Y,
    texSubImage3D: Z,
    compressedTexSubImage2D: k,
    compressedTexSubImage3D: Se,
    scissor: se,
    viewport: _e,
    reset: Ne,
  };
}
function Zp(i, e, t, n, s, r, a) {
  const o = e.has("WEBGL_multisampled_render_to_texture")
      ? e.get("WEBGL_multisampled_render_to_texture")
      : null,
    c =
      typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent),
    l = new Ce(),
    u = new WeakMap();
  let d;
  const f = new WeakMap();
  let _ = !1;
  try {
    _ =
      typeof OffscreenCanvas < "u" &&
      new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {}
  function v(E, m) {
    return _ ? new OffscreenCanvas(E, m) : Ms("canvas");
  }
  function M(E, m, L) {
    let Y = 1;
    const Z = ve(E);
    if (
      ((Z.width > L || Z.height > L) && (Y = L / Math.max(Z.width, Z.height)),
      Y < 1)
    )
      if (
        (typeof HTMLImageElement < "u" && E instanceof HTMLImageElement) ||
        (typeof HTMLCanvasElement < "u" && E instanceof HTMLCanvasElement) ||
        (typeof ImageBitmap < "u" && E instanceof ImageBitmap) ||
        (typeof VideoFrame < "u" && E instanceof VideoFrame)
      ) {
        const k = Math.floor(Y * Z.width),
          Se = Math.floor(Y * Z.height);
        d === void 0 && (d = v(k, Se));
        const ne = m ? v(k, Se) : d;
        return (
          (ne.width = k),
          (ne.height = Se),
          ne.getContext("2d").drawImage(E, 0, 0, k, Se),
          we(
            "WebGLRenderer: Texture has been resized from (" +
              Z.width +
              "x" +
              Z.height +
              ") to (" +
              k +
              "x" +
              Se +
              ")."
          ),
          ne
        );
      } else
        return (
          "data" in E &&
            we(
              "WebGLRenderer: Image in DataTexture is too big (" +
                Z.width +
                "x" +
                Z.height +
                ")."
            ),
          E
        );
    return E;
  }
  function p(E) {
    return E.generateMipmaps;
  }
  function h(E) {
    i.generateMipmap(E);
  }
  function T(E) {
    return E.isWebGLCubeRenderTarget
      ? i.TEXTURE_CUBE_MAP
      : E.isWebGL3DRenderTarget
      ? i.TEXTURE_3D
      : E.isWebGLArrayRenderTarget || E.isCompressedArrayTexture
      ? i.TEXTURE_2D_ARRAY
      : i.TEXTURE_2D;
  }
  function b(E, m, L, Y, Z = !1) {
    if (E !== null) {
      if (i[E] !== void 0) return i[E];
      we(
        "WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
          E +
          "'"
      );
    }
    let k = m;
    if (
      (m === i.RED &&
        (L === i.FLOAT && (k = i.R32F),
        L === i.HALF_FLOAT && (k = i.R16F),
        L === i.UNSIGNED_BYTE && (k = i.R8)),
      m === i.RED_INTEGER &&
        (L === i.UNSIGNED_BYTE && (k = i.R8UI),
        L === i.UNSIGNED_SHORT && (k = i.R16UI),
        L === i.UNSIGNED_INT && (k = i.R32UI),
        L === i.BYTE && (k = i.R8I),
        L === i.SHORT && (k = i.R16I),
        L === i.INT && (k = i.R32I)),
      m === i.RG &&
        (L === i.FLOAT && (k = i.RG32F),
        L === i.HALF_FLOAT && (k = i.RG16F),
        L === i.UNSIGNED_BYTE && (k = i.RG8)),
      m === i.RG_INTEGER &&
        (L === i.UNSIGNED_BYTE && (k = i.RG8UI),
        L === i.UNSIGNED_SHORT && (k = i.RG16UI),
        L === i.UNSIGNED_INT && (k = i.RG32UI),
        L === i.BYTE && (k = i.RG8I),
        L === i.SHORT && (k = i.RG16I),
        L === i.INT && (k = i.RG32I)),
      m === i.RGB_INTEGER &&
        (L === i.UNSIGNED_BYTE && (k = i.RGB8UI),
        L === i.UNSIGNED_SHORT && (k = i.RGB16UI),
        L === i.UNSIGNED_INT && (k = i.RGB32UI),
        L === i.BYTE && (k = i.RGB8I),
        L === i.SHORT && (k = i.RGB16I),
        L === i.INT && (k = i.RGB32I)),
      m === i.RGBA_INTEGER &&
        (L === i.UNSIGNED_BYTE && (k = i.RGBA8UI),
        L === i.UNSIGNED_SHORT && (k = i.RGBA16UI),
        L === i.UNSIGNED_INT && (k = i.RGBA32UI),
        L === i.BYTE && (k = i.RGBA8I),
        L === i.SHORT && (k = i.RGBA16I),
        L === i.INT && (k = i.RGBA32I)),
      m === i.RGB &&
        (L === i.UNSIGNED_INT_5_9_9_9_REV && (k = i.RGB9_E5),
        L === i.UNSIGNED_INT_10F_11F_11F_REV && (k = i.R11F_G11F_B10F)),
      m === i.RGBA)
    ) {
      const Se = Z ? xs : Ge.getTransfer(Y);
      L === i.FLOAT && (k = i.RGBA32F),
        L === i.HALF_FLOAT && (k = i.RGBA16F),
        L === i.UNSIGNED_BYTE && (k = Se === Ze ? i.SRGB8_ALPHA8 : i.RGBA8),
        L === i.UNSIGNED_SHORT_4_4_4_4 && (k = i.RGBA4),
        L === i.UNSIGNED_SHORT_5_5_5_1 && (k = i.RGB5_A1);
    }
    return (
      (k === i.R16F ||
        k === i.R32F ||
        k === i.RG16F ||
        k === i.RG32F ||
        k === i.RGBA16F ||
        k === i.RGBA32F) &&
        e.get("EXT_color_buffer_float"),
      k
    );
  }
  function y(E, m) {
    let L;
    return (
      E
        ? m === null || m === nn || m === Ri
          ? (L = i.DEPTH24_STENCIL8)
          : m === $t
          ? (L = i.DEPTH32F_STENCIL8)
          : m === wi &&
            ((L = i.DEPTH24_STENCIL8),
            we(
              "DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment."
            ))
        : m === null || m === nn || m === Ri
        ? (L = i.DEPTH_COMPONENT24)
        : m === $t
        ? (L = i.DEPTH_COMPONENT32F)
        : m === wi && (L = i.DEPTH_COMPONENT16),
      L
    );
  }
  function A(E, m) {
    return p(E) === !0 ||
      (E.isFramebufferTexture && E.minFilter !== vt && E.minFilter !== yt)
      ? Math.log2(Math.max(m.width, m.height)) + 1
      : E.mipmaps !== void 0 && E.mipmaps.length > 0
      ? E.mipmaps.length
      : E.isCompressedTexture && Array.isArray(E.image)
      ? m.mipmaps.length
      : 1;
  }
  function w(E) {
    const m = E.target;
    m.removeEventListener("dispose", w), F(m), m.isVideoTexture && u.delete(m);
  }
  function R(E) {
    const m = E.target;
    m.removeEventListener("dispose", R), S(m);
  }
  function F(E) {
    const m = n.get(E);
    if (m.__webglInit === void 0) return;
    const L = E.source,
      Y = f.get(L);
    if (Y) {
      const Z = Y[m.__cacheKey];
      Z.usedTimes--,
        Z.usedTimes === 0 && g(E),
        Object.keys(Y).length === 0 && f.delete(L);
    }
    n.remove(E);
  }
  function g(E) {
    const m = n.get(E);
    i.deleteTexture(m.__webglTexture);
    const L = E.source,
      Y = f.get(L);
    delete Y[m.__cacheKey], a.memory.textures--;
  }
  function S(E) {
    const m = n.get(E);
    if (
      (E.depthTexture && (E.depthTexture.dispose(), n.remove(E.depthTexture)),
      E.isWebGLCubeRenderTarget)
    )
      for (let Y = 0; Y < 6; Y++) {
        if (Array.isArray(m.__webglFramebuffer[Y]))
          for (let Z = 0; Z < m.__webglFramebuffer[Y].length; Z++)
            i.deleteFramebuffer(m.__webglFramebuffer[Y][Z]);
        else i.deleteFramebuffer(m.__webglFramebuffer[Y]);
        m.__webglDepthbuffer && i.deleteRenderbuffer(m.__webglDepthbuffer[Y]);
      }
    else {
      if (Array.isArray(m.__webglFramebuffer))
        for (let Y = 0; Y < m.__webglFramebuffer.length; Y++)
          i.deleteFramebuffer(m.__webglFramebuffer[Y]);
      else i.deleteFramebuffer(m.__webglFramebuffer);
      if (
        (m.__webglDepthbuffer && i.deleteRenderbuffer(m.__webglDepthbuffer),
        m.__webglMultisampledFramebuffer &&
          i.deleteFramebuffer(m.__webglMultisampledFramebuffer),
        m.__webglColorRenderbuffer)
      )
        for (let Y = 0; Y < m.__webglColorRenderbuffer.length; Y++)
          m.__webglColorRenderbuffer[Y] &&
            i.deleteRenderbuffer(m.__webglColorRenderbuffer[Y]);
      m.__webglDepthRenderbuffer &&
        i.deleteRenderbuffer(m.__webglDepthRenderbuffer);
    }
    const L = E.textures;
    for (let Y = 0, Z = L.length; Y < Z; Y++) {
      const k = n.get(L[Y]);
      k.__webglTexture &&
        (i.deleteTexture(k.__webglTexture), a.memory.textures--),
        n.remove(L[Y]);
    }
    n.remove(E);
  }
  let P = 0;
  function O() {
    P = 0;
  }
  function B() {
    const E = P;
    return (
      E >= s.maxTextures &&
        we(
          "WebGLTextures: Trying to use " +
            E +
            " texture units while this GPU supports only " +
            s.maxTextures
        ),
      (P += 1),
      E
    );
  }
  function X(E) {
    const m = [];
    return (
      m.push(E.wrapS),
      m.push(E.wrapT),
      m.push(E.wrapR || 0),
      m.push(E.magFilter),
      m.push(E.minFilter),
      m.push(E.anisotropy),
      m.push(E.internalFormat),
      m.push(E.format),
      m.push(E.type),
      m.push(E.generateMipmaps),
      m.push(E.premultiplyAlpha),
      m.push(E.flipY),
      m.push(E.unpackAlignment),
      m.push(E.colorSpace),
      m.join()
    );
  }
  function W(E, m) {
    const L = n.get(E);
    if (
      (E.isVideoTexture && Xe(E),
      E.isRenderTargetTexture === !1 &&
        E.isExternalTexture !== !0 &&
        E.version > 0 &&
        L.__version !== E.version)
    ) {
      const Y = E.image;
      if (Y === null)
        we("WebGLRenderer: Texture marked for update but no image data found.");
      else if (Y.complete === !1)
        we("WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        q(L, E, m);
        return;
      }
    } else
      E.isExternalTexture &&
        (L.__webglTexture = E.sourceTexture ? E.sourceTexture : null);
    t.bindTexture(i.TEXTURE_2D, L.__webglTexture, i.TEXTURE0 + m);
  }
  function H(E, m) {
    const L = n.get(E);
    if (
      E.isRenderTargetTexture === !1 &&
      E.version > 0 &&
      L.__version !== E.version
    ) {
      q(L, E, m);
      return;
    } else
      E.isExternalTexture &&
        (L.__webglTexture = E.sourceTexture ? E.sourceTexture : null);
    t.bindTexture(i.TEXTURE_2D_ARRAY, L.__webglTexture, i.TEXTURE0 + m);
  }
  function G(E, m) {
    const L = n.get(E);
    if (
      E.isRenderTargetTexture === !1 &&
      E.version > 0 &&
      L.__version !== E.version
    ) {
      q(L, E, m);
      return;
    }
    t.bindTexture(i.TEXTURE_3D, L.__webglTexture, i.TEXTURE0 + m);
  }
  function j(E, m) {
    const L = n.get(E);
    if (
      E.isCubeDepthTexture !== !0 &&
      E.version > 0 &&
      L.__version !== E.version
    ) {
      $(L, E, m);
      return;
    }
    t.bindTexture(i.TEXTURE_CUBE_MAP, L.__webglTexture, i.TEXTURE0 + m);
  }
  const he = { [Mr]: i.REPEAT, [fn]: i.CLAMP_TO_EDGE, [Sr]: i.MIRRORED_REPEAT },
    ae = {
      [vt]: i.NEAREST,
      [cc]: i.NEAREST_MIPMAP_NEAREST,
      [Gi]: i.NEAREST_MIPMAP_LINEAR,
      [yt]: i.LINEAR,
      [Ps]: i.LINEAR_MIPMAP_NEAREST,
      [Bn]: i.LINEAR_MIPMAP_LINEAR,
    },
    ue = {
      [dc]: i.NEVER,
      [gc]: i.ALWAYS,
      [fc]: i.LESS,
      [ha]: i.LEQUAL,
      [pc]: i.EQUAL,
      [ua]: i.GEQUAL,
      [mc]: i.GREATER,
      [_c]: i.NOTEQUAL,
    };
  function Fe(E, m) {
    if (
      (m.type === $t &&
        e.has("OES_texture_float_linear") === !1 &&
        (m.magFilter === yt ||
          m.magFilter === Ps ||
          m.magFilter === Gi ||
          m.magFilter === Bn ||
          m.minFilter === yt ||
          m.minFilter === Ps ||
          m.minFilter === Gi ||
          m.minFilter === Bn) &&
        we(
          "WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."
        ),
      i.texParameteri(E, i.TEXTURE_WRAP_S, he[m.wrapS]),
      i.texParameteri(E, i.TEXTURE_WRAP_T, he[m.wrapT]),
      (E === i.TEXTURE_3D || E === i.TEXTURE_2D_ARRAY) &&
        i.texParameteri(E, i.TEXTURE_WRAP_R, he[m.wrapR]),
      i.texParameteri(E, i.TEXTURE_MAG_FILTER, ae[m.magFilter]),
      i.texParameteri(E, i.TEXTURE_MIN_FILTER, ae[m.minFilter]),
      m.compareFunction &&
        (i.texParameteri(E, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE),
        i.texParameteri(E, i.TEXTURE_COMPARE_FUNC, ue[m.compareFunction])),
      e.has("EXT_texture_filter_anisotropic") === !0)
    ) {
      if (
        m.magFilter === vt ||
        (m.minFilter !== Gi && m.minFilter !== Bn) ||
        (m.type === $t && e.has("OES_texture_float_linear") === !1)
      )
        return;
      if (m.anisotropy > 1 || n.get(m).__currentAnisotropy) {
        const L = e.get("EXT_texture_filter_anisotropic");
        i.texParameterf(
          E,
          L.TEXTURE_MAX_ANISOTROPY_EXT,
          Math.min(m.anisotropy, s.getMaxAnisotropy())
        ),
          (n.get(m).__currentAnisotropy = m.anisotropy);
      }
    }
  }
  function Ie(E, m) {
    let L = !1;
    E.__webglInit === void 0 &&
      ((E.__webglInit = !0), m.addEventListener("dispose", w));
    const Y = m.source;
    let Z = f.get(Y);
    Z === void 0 && ((Z = {}), f.set(Y, Z));
    const k = X(m);
    if (k !== E.__cacheKey) {
      Z[k] === void 0 &&
        ((Z[k] = { texture: i.createTexture(), usedTimes: 0 }),
        a.memory.textures++,
        (L = !0)),
        Z[k].usedTimes++;
      const Se = Z[E.__cacheKey];
      Se !== void 0 &&
        (Z[E.__cacheKey].usedTimes--, Se.usedTimes === 0 && g(m)),
        (E.__cacheKey = k),
        (E.__webglTexture = Z[k].texture);
    }
    return L;
  }
  function st(E, m, L) {
    return Math.floor(Math.floor(E / L) / m);
  }
  function it(E, m, L, Y) {
    const k = E.updateRanges;
    if (k.length === 0)
      t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, m.width, m.height, L, Y, m.data);
    else {
      k.sort((Q, se) => Q.start - se.start);
      let Se = 0;
      for (let Q = 1; Q < k.length; Q++) {
        const se = k[Se],
          _e = k[Q],
          Me = se.start + se.count,
          ie = st(_e.start, m.width, 4),
          Ne = st(se.start, m.width, 4);
        _e.start <= Me + 1 &&
        ie === Ne &&
        st(_e.start + _e.count - 1, m.width, 4) === ie
          ? (se.count = Math.max(se.count, _e.start + _e.count - se.start))
          : (++Se, (k[Se] = _e));
      }
      k.length = Se + 1;
      const ne = i.getParameter(i.UNPACK_ROW_LENGTH),
        xe = i.getParameter(i.UNPACK_SKIP_PIXELS),
        Ae = i.getParameter(i.UNPACK_SKIP_ROWS);
      i.pixelStorei(i.UNPACK_ROW_LENGTH, m.width);
      for (let Q = 0, se = k.length; Q < se; Q++) {
        const _e = k[Q],
          Me = Math.floor(_e.start / 4),
          ie = Math.ceil(_e.count / 4),
          Ne = Me % m.width,
          D = Math.floor(Me / m.width),
          ce = ie,
          ee = 1;
        i.pixelStorei(i.UNPACK_SKIP_PIXELS, Ne),
          i.pixelStorei(i.UNPACK_SKIP_ROWS, D),
          t.texSubImage2D(i.TEXTURE_2D, 0, Ne, D, ce, ee, L, Y, m.data);
      }
      E.clearUpdateRanges(),
        i.pixelStorei(i.UNPACK_ROW_LENGTH, ne),
        i.pixelStorei(i.UNPACK_SKIP_PIXELS, xe),
        i.pixelStorei(i.UNPACK_SKIP_ROWS, Ae);
    }
  }
  function q(E, m, L) {
    let Y = i.TEXTURE_2D;
    (m.isDataArrayTexture || m.isCompressedArrayTexture) &&
      (Y = i.TEXTURE_2D_ARRAY),
      m.isData3DTexture && (Y = i.TEXTURE_3D);
    const Z = Ie(E, m),
      k = m.source;
    t.bindTexture(Y, E.__webglTexture, i.TEXTURE0 + L);
    const Se = n.get(k);
    if (k.version !== Se.__version || Z === !0) {
      t.activeTexture(i.TEXTURE0 + L);
      const ne = Ge.getPrimaries(Ge.workingColorSpace),
        xe = m.colorSpace === bn ? null : Ge.getPrimaries(m.colorSpace),
        Ae =
          m.colorSpace === bn || ne === xe ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, m.flipY),
        i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, m.premultiplyAlpha),
        i.pixelStorei(i.UNPACK_ALIGNMENT, m.unpackAlignment),
        i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, Ae);
      let Q = M(m.image, !1, s.maxTextureSize);
      Q = et(m, Q);
      const se = r.convert(m.format, m.colorSpace),
        _e = r.convert(m.type);
      let Me = b(m.internalFormat, se, _e, m.colorSpace, m.isVideoTexture);
      Fe(Y, m);
      let ie;
      const Ne = m.mipmaps,
        D = m.isVideoTexture !== !0,
        ce = Se.__version === void 0 || Z === !0,
        ee = k.dataReady,
        de = A(m, Q);
      if (m.isDepthTexture)
        (Me = y(m.format === zn, m.type)),
          ce &&
            (D
              ? t.texStorage2D(i.TEXTURE_2D, 1, Me, Q.width, Q.height)
              : t.texImage2D(
                  i.TEXTURE_2D,
                  0,
                  Me,
                  Q.width,
                  Q.height,
                  0,
                  se,
                  _e,
                  null
                ));
      else if (m.isDataTexture)
        if (Ne.length > 0) {
          D &&
            ce &&
            t.texStorage2D(i.TEXTURE_2D, de, Me, Ne[0].width, Ne[0].height);
          for (let J = 0, K = Ne.length; J < K; J++)
            (ie = Ne[J]),
              D
                ? ee &&
                  t.texSubImage2D(
                    i.TEXTURE_2D,
                    J,
                    0,
                    0,
                    ie.width,
                    ie.height,
                    se,
                    _e,
                    ie.data
                  )
                : t.texImage2D(
                    i.TEXTURE_2D,
                    J,
                    Me,
                    ie.width,
                    ie.height,
                    0,
                    se,
                    _e,
                    ie.data
                  );
          m.generateMipmaps = !1;
        } else
          D
            ? (ce && t.texStorage2D(i.TEXTURE_2D, de, Me, Q.width, Q.height),
              ee && it(m, Q, se, _e))
            : t.texImage2D(
                i.TEXTURE_2D,
                0,
                Me,
                Q.width,
                Q.height,
                0,
                se,
                _e,
                Q.data
              );
      else if (m.isCompressedTexture)
        if (m.isCompressedArrayTexture) {
          D &&
            ce &&
            t.texStorage3D(
              i.TEXTURE_2D_ARRAY,
              de,
              Me,
              Ne[0].width,
              Ne[0].height,
              Q.depth
            );
          for (let J = 0, K = Ne.length; J < K; J++)
            if (((ie = Ne[J]), m.format !== qt))
              if (se !== null)
                if (D) {
                  if (ee)
                    if (m.layerUpdates.size > 0) {
                      const te = oo(ie.width, ie.height, m.format, m.type);
                      for (const Re of m.layerUpdates) {
                        const tt = ie.data.subarray(
                          (Re * te) / ie.data.BYTES_PER_ELEMENT,
                          ((Re + 1) * te) / ie.data.BYTES_PER_ELEMENT
                        );
                        t.compressedTexSubImage3D(
                          i.TEXTURE_2D_ARRAY,
                          J,
                          0,
                          0,
                          Re,
                          ie.width,
                          ie.height,
                          1,
                          se,
                          tt
                        );
                      }
                      m.clearLayerUpdates();
                    } else
                      t.compressedTexSubImage3D(
                        i.TEXTURE_2D_ARRAY,
                        J,
                        0,
                        0,
                        0,
                        ie.width,
                        ie.height,
                        Q.depth,
                        se,
                        ie.data
                      );
                } else
                  t.compressedTexImage3D(
                    i.TEXTURE_2D_ARRAY,
                    J,
                    Me,
                    ie.width,
                    ie.height,
                    Q.depth,
                    0,
                    ie.data,
                    0,
                    0
                  );
              else
                we(
                  "WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                );
            else
              D
                ? ee &&
                  t.texSubImage3D(
                    i.TEXTURE_2D_ARRAY,
                    J,
                    0,
                    0,
                    0,
                    ie.width,
                    ie.height,
                    Q.depth,
                    se,
                    _e,
                    ie.data
                  )
                : t.texImage3D(
                    i.TEXTURE_2D_ARRAY,
                    J,
                    Me,
                    ie.width,
                    ie.height,
                    Q.depth,
                    0,
                    se,
                    _e,
                    ie.data
                  );
        } else {
          D &&
            ce &&
            t.texStorage2D(i.TEXTURE_2D, de, Me, Ne[0].width, Ne[0].height);
          for (let J = 0, K = Ne.length; J < K; J++)
            (ie = Ne[J]),
              m.format !== qt
                ? se !== null
                  ? D
                    ? ee &&
                      t.compressedTexSubImage2D(
                        i.TEXTURE_2D,
                        J,
                        0,
                        0,
                        ie.width,
                        ie.height,
                        se,
                        ie.data
                      )
                    : t.compressedTexImage2D(
                        i.TEXTURE_2D,
                        J,
                        Me,
                        ie.width,
                        ie.height,
                        0,
                        ie.data
                      )
                  : we(
                      "WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                    )
                : D
                ? ee &&
                  t.texSubImage2D(
                    i.TEXTURE_2D,
                    J,
                    0,
                    0,
                    ie.width,
                    ie.height,
                    se,
                    _e,
                    ie.data
                  )
                : t.texImage2D(
                    i.TEXTURE_2D,
                    J,
                    Me,
                    ie.width,
                    ie.height,
                    0,
                    se,
                    _e,
                    ie.data
                  );
        }
      else if (m.isDataArrayTexture)
        if (D) {
          if (
            (ce &&
              t.texStorage3D(
                i.TEXTURE_2D_ARRAY,
                de,
                Me,
                Q.width,
                Q.height,
                Q.depth
              ),
            ee)
          )
            if (m.layerUpdates.size > 0) {
              const J = oo(Q.width, Q.height, m.format, m.type);
              for (const K of m.layerUpdates) {
                const te = Q.data.subarray(
                  (K * J) / Q.data.BYTES_PER_ELEMENT,
                  ((K + 1) * J) / Q.data.BYTES_PER_ELEMENT
                );
                t.texSubImage3D(
                  i.TEXTURE_2D_ARRAY,
                  0,
                  0,
                  0,
                  K,
                  Q.width,
                  Q.height,
                  1,
                  se,
                  _e,
                  te
                );
              }
              m.clearLayerUpdates();
            } else
              t.texSubImage3D(
                i.TEXTURE_2D_ARRAY,
                0,
                0,
                0,
                0,
                Q.width,
                Q.height,
                Q.depth,
                se,
                _e,
                Q.data
              );
        } else
          t.texImage3D(
            i.TEXTURE_2D_ARRAY,
            0,
            Me,
            Q.width,
            Q.height,
            Q.depth,
            0,
            se,
            _e,
            Q.data
          );
      else if (m.isData3DTexture)
        D
          ? (ce &&
              t.texStorage3D(i.TEXTURE_3D, de, Me, Q.width, Q.height, Q.depth),
            ee &&
              t.texSubImage3D(
                i.TEXTURE_3D,
                0,
                0,
                0,
                0,
                Q.width,
                Q.height,
                Q.depth,
                se,
                _e,
                Q.data
              ))
          : t.texImage3D(
              i.TEXTURE_3D,
              0,
              Me,
              Q.width,
              Q.height,
              Q.depth,
              0,
              se,
              _e,
              Q.data
            );
      else if (m.isFramebufferTexture) {
        if (ce)
          if (D) t.texStorage2D(i.TEXTURE_2D, de, Me, Q.width, Q.height);
          else {
            let J = Q.width,
              K = Q.height;
            for (let te = 0; te < de; te++)
              t.texImage2D(i.TEXTURE_2D, te, Me, J, K, 0, se, _e, null),
                (J >>= 1),
                (K >>= 1);
          }
      } else if (Ne.length > 0) {
        if (D && ce) {
          const J = ve(Ne[0]);
          t.texStorage2D(i.TEXTURE_2D, de, Me, J.width, J.height);
        }
        for (let J = 0, K = Ne.length; J < K; J++)
          (ie = Ne[J]),
            D
              ? ee && t.texSubImage2D(i.TEXTURE_2D, J, 0, 0, se, _e, ie)
              : t.texImage2D(i.TEXTURE_2D, J, Me, se, _e, ie);
        m.generateMipmaps = !1;
      } else if (D) {
        if (ce) {
          const J = ve(Q);
          t.texStorage2D(i.TEXTURE_2D, de, Me, J.width, J.height);
        }
        ee && t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, se, _e, Q);
      } else t.texImage2D(i.TEXTURE_2D, 0, Me, se, _e, Q);
      p(m) && h(Y), (Se.__version = k.version), m.onUpdate && m.onUpdate(m);
    }
    E.__version = m.version;
  }
  function $(E, m, L) {
    if (m.image.length !== 6) return;
    const Y = Ie(E, m),
      Z = m.source;
    t.bindTexture(i.TEXTURE_CUBE_MAP, E.__webglTexture, i.TEXTURE0 + L);
    const k = n.get(Z);
    if (Z.version !== k.__version || Y === !0) {
      t.activeTexture(i.TEXTURE0 + L);
      const Se = Ge.getPrimaries(Ge.workingColorSpace),
        ne = m.colorSpace === bn ? null : Ge.getPrimaries(m.colorSpace),
        xe =
          m.colorSpace === bn || Se === ne ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, m.flipY),
        i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, m.premultiplyAlpha),
        i.pixelStorei(i.UNPACK_ALIGNMENT, m.unpackAlignment),
        i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, xe);
      const Ae = m.isCompressedTexture || m.image[0].isCompressedTexture,
        Q = m.image[0] && m.image[0].isDataTexture,
        se = [];
      for (let K = 0; K < 6; K++)
        !Ae && !Q
          ? (se[K] = M(m.image[K], !0, s.maxCubemapSize))
          : (se[K] = Q ? m.image[K].image : m.image[K]),
          (se[K] = et(m, se[K]));
      const _e = se[0],
        Me = r.convert(m.format, m.colorSpace),
        ie = r.convert(m.type),
        Ne = b(m.internalFormat, Me, ie, m.colorSpace),
        D = m.isVideoTexture !== !0,
        ce = k.__version === void 0 || Y === !0,
        ee = Z.dataReady;
      let de = A(m, _e);
      Fe(i.TEXTURE_CUBE_MAP, m);
      let J;
      if (Ae) {
        D &&
          ce &&
          t.texStorage2D(i.TEXTURE_CUBE_MAP, de, Ne, _e.width, _e.height);
        for (let K = 0; K < 6; K++) {
          J = se[K].mipmaps;
          for (let te = 0; te < J.length; te++) {
            const Re = J[te];
            m.format !== qt
              ? Me !== null
                ? D
                  ? ee &&
                    t.compressedTexSubImage2D(
                      i.TEXTURE_CUBE_MAP_POSITIVE_X + K,
                      te,
                      0,
                      0,
                      Re.width,
                      Re.height,
                      Me,
                      Re.data
                    )
                  : t.compressedTexImage2D(
                      i.TEXTURE_CUBE_MAP_POSITIVE_X + K,
                      te,
                      Ne,
                      Re.width,
                      Re.height,
                      0,
                      Re.data
                    )
                : we(
                    "WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"
                  )
              : D
              ? ee &&
                t.texSubImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + K,
                  te,
                  0,
                  0,
                  Re.width,
                  Re.height,
                  Me,
                  ie,
                  Re.data
                )
              : t.texImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + K,
                  te,
                  Ne,
                  Re.width,
                  Re.height,
                  0,
                  Me,
                  ie,
                  Re.data
                );
          }
        }
      } else {
        if (((J = m.mipmaps), D && ce)) {
          J.length > 0 && de++;
          const K = ve(se[0]);
          t.texStorage2D(i.TEXTURE_CUBE_MAP, de, Ne, K.width, K.height);
        }
        for (let K = 0; K < 6; K++)
          if (Q) {
            D
              ? ee &&
                t.texSubImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + K,
                  0,
                  0,
                  0,
                  se[K].width,
                  se[K].height,
                  Me,
                  ie,
                  se[K].data
                )
              : t.texImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + K,
                  0,
                  Ne,
                  se[K].width,
                  se[K].height,
                  0,
                  Me,
                  ie,
                  se[K].data
                );
            for (let te = 0; te < J.length; te++) {
              const tt = J[te].image[K].image;
              D
                ? ee &&
                  t.texSubImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + K,
                    te + 1,
                    0,
                    0,
                    tt.width,
                    tt.height,
                    Me,
                    ie,
                    tt.data
                  )
                : t.texImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + K,
                    te + 1,
                    Ne,
                    tt.width,
                    tt.height,
                    0,
                    Me,
                    ie,
                    tt.data
                  );
            }
          } else {
            D
              ? ee &&
                t.texSubImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + K,
                  0,
                  0,
                  0,
                  Me,
                  ie,
                  se[K]
                )
              : t.texImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + K,
                  0,
                  Ne,
                  Me,
                  ie,
                  se[K]
                );
            for (let te = 0; te < J.length; te++) {
              const Re = J[te];
              D
                ? ee &&
                  t.texSubImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + K,
                    te + 1,
                    0,
                    0,
                    Me,
                    ie,
                    Re.image[K]
                  )
                : t.texImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + K,
                    te + 1,
                    Ne,
                    Me,
                    ie,
                    Re.image[K]
                  );
            }
          }
      }
      p(m) && h(i.TEXTURE_CUBE_MAP),
        (k.__version = Z.version),
        m.onUpdate && m.onUpdate(m);
    }
    E.__version = m.version;
  }
  function pe(E, m, L, Y, Z, k) {
    const Se = r.convert(L.format, L.colorSpace),
      ne = r.convert(L.type),
      xe = b(L.internalFormat, Se, ne, L.colorSpace),
      Ae = n.get(m),
      Q = n.get(L);
    if (((Q.__renderTarget = m), !Ae.__hasExternalTextures)) {
      const se = Math.max(1, m.width >> k),
        _e = Math.max(1, m.height >> k);
      Z === i.TEXTURE_3D || Z === i.TEXTURE_2D_ARRAY
        ? t.texImage3D(Z, k, xe, se, _e, m.depth, 0, Se, ne, null)
        : t.texImage2D(Z, k, xe, se, _e, 0, Se, ne, null);
    }
    t.bindFramebuffer(i.FRAMEBUFFER, E),
      ht(m)
        ? o.framebufferTexture2DMultisampleEXT(
            i.FRAMEBUFFER,
            Y,
            Z,
            Q.__webglTexture,
            0,
            C(m)
          )
        : (Z === i.TEXTURE_2D ||
            (Z >= i.TEXTURE_CUBE_MAP_POSITIVE_X &&
              Z <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z)) &&
          i.framebufferTexture2D(i.FRAMEBUFFER, Y, Z, Q.__webglTexture, k),
      t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function Pe(E, m, L) {
    if ((i.bindRenderbuffer(i.RENDERBUFFER, E), m.depthBuffer)) {
      const Y = m.depthTexture,
        Z = Y && Y.isDepthTexture ? Y.type : null,
        k = y(m.stencilBuffer, Z),
        Se = m.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
      ht(m)
        ? o.renderbufferStorageMultisampleEXT(
            i.RENDERBUFFER,
            C(m),
            k,
            m.width,
            m.height
          )
        : L
        ? i.renderbufferStorageMultisample(
            i.RENDERBUFFER,
            C(m),
            k,
            m.width,
            m.height
          )
        : i.renderbufferStorage(i.RENDERBUFFER, k, m.width, m.height),
        i.framebufferRenderbuffer(i.FRAMEBUFFER, Se, i.RENDERBUFFER, E);
    } else {
      const Y = m.textures;
      for (let Z = 0; Z < Y.length; Z++) {
        const k = Y[Z],
          Se = r.convert(k.format, k.colorSpace),
          ne = r.convert(k.type),
          xe = b(k.internalFormat, Se, ne, k.colorSpace);
        ht(m)
          ? o.renderbufferStorageMultisampleEXT(
              i.RENDERBUFFER,
              C(m),
              xe,
              m.width,
              m.height
            )
          : L
          ? i.renderbufferStorageMultisample(
              i.RENDERBUFFER,
              C(m),
              xe,
              m.width,
              m.height
            )
          : i.renderbufferStorage(i.RENDERBUFFER, xe, m.width, m.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function ge(E, m, L) {
    const Y = m.isWebGLCubeRenderTarget === !0;
    if (
      (t.bindFramebuffer(i.FRAMEBUFFER, E),
      !(m.depthTexture && m.depthTexture.isDepthTexture))
    )
      throw new Error(
        "renderTarget.depthTexture must be an instance of THREE.DepthTexture"
      );
    const Z = n.get(m.depthTexture);
    if (
      ((Z.__renderTarget = m),
      (!Z.__webglTexture ||
        m.depthTexture.image.width !== m.width ||
        m.depthTexture.image.height !== m.height) &&
        ((m.depthTexture.image.width = m.width),
        (m.depthTexture.image.height = m.height),
        (m.depthTexture.needsUpdate = !0)),
      Y)
    ) {
      if (
        (Z.__webglInit === void 0 &&
          ((Z.__webglInit = !0), m.depthTexture.addEventListener("dispose", w)),
        Z.__webglTexture === void 0)
      ) {
        (Z.__webglTexture = i.createTexture()),
          t.bindTexture(i.TEXTURE_CUBE_MAP, Z.__webglTexture),
          Fe(i.TEXTURE_CUBE_MAP, m.depthTexture);
        const Ae = r.convert(m.depthTexture.format),
          Q = r.convert(m.depthTexture.type);
        let se;
        m.depthTexture.format === gn
          ? (se = i.DEPTH_COMPONENT24)
          : m.depthTexture.format === zn && (se = i.DEPTH24_STENCIL8);
        for (let _e = 0; _e < 6; _e++)
          i.texImage2D(
            i.TEXTURE_CUBE_MAP_POSITIVE_X + _e,
            0,
            se,
            m.width,
            m.height,
            0,
            Ae,
            Q,
            null
          );
      }
    } else W(m.depthTexture, 0);
    const k = Z.__webglTexture,
      Se = C(m),
      ne = Y ? i.TEXTURE_CUBE_MAP_POSITIVE_X + L : i.TEXTURE_2D,
      xe =
        m.depthTexture.format === zn
          ? i.DEPTH_STENCIL_ATTACHMENT
          : i.DEPTH_ATTACHMENT;
    if (m.depthTexture.format === gn)
      ht(m)
        ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, xe, ne, k, 0, Se)
        : i.framebufferTexture2D(i.FRAMEBUFFER, xe, ne, k, 0);
    else if (m.depthTexture.format === zn)
      ht(m)
        ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, xe, ne, k, 0, Se)
        : i.framebufferTexture2D(i.FRAMEBUFFER, xe, ne, k, 0);
    else throw new Error("Unknown depthTexture format");
  }
  function He(E) {
    const m = n.get(E),
      L = E.isWebGLCubeRenderTarget === !0;
    if (m.__boundDepthTexture !== E.depthTexture) {
      const Y = E.depthTexture;
      if ((m.__depthDisposeCallback && m.__depthDisposeCallback(), Y)) {
        const Z = () => {
          delete m.__boundDepthTexture,
            delete m.__depthDisposeCallback,
            Y.removeEventListener("dispose", Z);
        };
        Y.addEventListener("dispose", Z), (m.__depthDisposeCallback = Z);
      }
      m.__boundDepthTexture = Y;
    }
    if (E.depthTexture && !m.__autoAllocateDepthBuffer)
      if (L) for (let Y = 0; Y < 6; Y++) ge(m.__webglFramebuffer[Y], E, Y);
      else {
        const Y = E.texture.mipmaps;
        Y && Y.length > 0
          ? ge(m.__webglFramebuffer[0], E, 0)
          : ge(m.__webglFramebuffer, E, 0);
      }
    else if (L) {
      m.__webglDepthbuffer = [];
      for (let Y = 0; Y < 6; Y++)
        if (
          (t.bindFramebuffer(i.FRAMEBUFFER, m.__webglFramebuffer[Y]),
          m.__webglDepthbuffer[Y] === void 0)
        )
          (m.__webglDepthbuffer[Y] = i.createRenderbuffer()),
            Pe(m.__webglDepthbuffer[Y], E, !1);
        else {
          const Z = E.stencilBuffer
              ? i.DEPTH_STENCIL_ATTACHMENT
              : i.DEPTH_ATTACHMENT,
            k = m.__webglDepthbuffer[Y];
          i.bindRenderbuffer(i.RENDERBUFFER, k),
            i.framebufferRenderbuffer(i.FRAMEBUFFER, Z, i.RENDERBUFFER, k);
        }
    } else {
      const Y = E.texture.mipmaps;
      if (
        (Y && Y.length > 0
          ? t.bindFramebuffer(i.FRAMEBUFFER, m.__webglFramebuffer[0])
          : t.bindFramebuffer(i.FRAMEBUFFER, m.__webglFramebuffer),
        m.__webglDepthbuffer === void 0)
      )
        (m.__webglDepthbuffer = i.createRenderbuffer()),
          Pe(m.__webglDepthbuffer, E, !1);
      else {
        const Z = E.stencilBuffer
            ? i.DEPTH_STENCIL_ATTACHMENT
            : i.DEPTH_ATTACHMENT,
          k = m.__webglDepthbuffer;
        i.bindRenderbuffer(i.RENDERBUFFER, k),
          i.framebufferRenderbuffer(i.FRAMEBUFFER, Z, i.RENDERBUFFER, k);
      }
    }
    t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function _t(E, m, L) {
    const Y = n.get(E);
    m !== void 0 &&
      pe(
        Y.__webglFramebuffer,
        E,
        E.texture,
        i.COLOR_ATTACHMENT0,
        i.TEXTURE_2D,
        0
      ),
      L !== void 0 && He(E);
  }
  function Ve(E) {
    const m = E.texture,
      L = n.get(E),
      Y = n.get(m);
    E.addEventListener("dispose", R);
    const Z = E.textures,
      k = E.isWebGLCubeRenderTarget === !0,
      Se = Z.length > 1;
    if (
      (Se ||
        (Y.__webglTexture === void 0 && (Y.__webglTexture = i.createTexture()),
        (Y.__version = m.version),
        a.memory.textures++),
      k)
    ) {
      L.__webglFramebuffer = [];
      for (let ne = 0; ne < 6; ne++)
        if (m.mipmaps && m.mipmaps.length > 0) {
          L.__webglFramebuffer[ne] = [];
          for (let xe = 0; xe < m.mipmaps.length; xe++)
            L.__webglFramebuffer[ne][xe] = i.createFramebuffer();
        } else L.__webglFramebuffer[ne] = i.createFramebuffer();
    } else {
      if (m.mipmaps && m.mipmaps.length > 0) {
        L.__webglFramebuffer = [];
        for (let ne = 0; ne < m.mipmaps.length; ne++)
          L.__webglFramebuffer[ne] = i.createFramebuffer();
      } else L.__webglFramebuffer = i.createFramebuffer();
      if (Se)
        for (let ne = 0, xe = Z.length; ne < xe; ne++) {
          const Ae = n.get(Z[ne]);
          Ae.__webglTexture === void 0 &&
            ((Ae.__webglTexture = i.createTexture()), a.memory.textures++);
        }
      if (E.samples > 0 && ht(E) === !1) {
        (L.__webglMultisampledFramebuffer = i.createFramebuffer()),
          (L.__webglColorRenderbuffer = []),
          t.bindFramebuffer(i.FRAMEBUFFER, L.__webglMultisampledFramebuffer);
        for (let ne = 0; ne < Z.length; ne++) {
          const xe = Z[ne];
          (L.__webglColorRenderbuffer[ne] = i.createRenderbuffer()),
            i.bindRenderbuffer(i.RENDERBUFFER, L.__webglColorRenderbuffer[ne]);
          const Ae = r.convert(xe.format, xe.colorSpace),
            Q = r.convert(xe.type),
            se = b(
              xe.internalFormat,
              Ae,
              Q,
              xe.colorSpace,
              E.isXRRenderTarget === !0
            ),
            _e = C(E);
          i.renderbufferStorageMultisample(
            i.RENDERBUFFER,
            _e,
            se,
            E.width,
            E.height
          ),
            i.framebufferRenderbuffer(
              i.FRAMEBUFFER,
              i.COLOR_ATTACHMENT0 + ne,
              i.RENDERBUFFER,
              L.__webglColorRenderbuffer[ne]
            );
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null),
          E.depthBuffer &&
            ((L.__webglDepthRenderbuffer = i.createRenderbuffer()),
            Pe(L.__webglDepthRenderbuffer, E, !0)),
          t.bindFramebuffer(i.FRAMEBUFFER, null);
      }
    }
    if (k) {
      t.bindTexture(i.TEXTURE_CUBE_MAP, Y.__webglTexture),
        Fe(i.TEXTURE_CUBE_MAP, m);
      for (let ne = 0; ne < 6; ne++)
        if (m.mipmaps && m.mipmaps.length > 0)
          for (let xe = 0; xe < m.mipmaps.length; xe++)
            pe(
              L.__webglFramebuffer[ne][xe],
              E,
              m,
              i.COLOR_ATTACHMENT0,
              i.TEXTURE_CUBE_MAP_POSITIVE_X + ne,
              xe
            );
        else
          pe(
            L.__webglFramebuffer[ne],
            E,
            m,
            i.COLOR_ATTACHMENT0,
            i.TEXTURE_CUBE_MAP_POSITIVE_X + ne,
            0
          );
      p(m) && h(i.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (Se) {
      for (let ne = 0, xe = Z.length; ne < xe; ne++) {
        const Ae = Z[ne],
          Q = n.get(Ae);
        let se = i.TEXTURE_2D;
        (E.isWebGL3DRenderTarget || E.isWebGLArrayRenderTarget) &&
          (se = E.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY),
          t.bindTexture(se, Q.__webglTexture),
          Fe(se, Ae),
          pe(L.__webglFramebuffer, E, Ae, i.COLOR_ATTACHMENT0 + ne, se, 0),
          p(Ae) && h(se);
      }
      t.unbindTexture();
    } else {
      let ne = i.TEXTURE_2D;
      if (
        ((E.isWebGL3DRenderTarget || E.isWebGLArrayRenderTarget) &&
          (ne = E.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY),
        t.bindTexture(ne, Y.__webglTexture),
        Fe(ne, m),
        m.mipmaps && m.mipmaps.length > 0)
      )
        for (let xe = 0; xe < m.mipmaps.length; xe++)
          pe(L.__webglFramebuffer[xe], E, m, i.COLOR_ATTACHMENT0, ne, xe);
      else pe(L.__webglFramebuffer, E, m, i.COLOR_ATTACHMENT0, ne, 0);
      p(m) && h(ne), t.unbindTexture();
    }
    E.depthBuffer && He(E);
  }
  function Ye(E) {
    const m = E.textures;
    for (let L = 0, Y = m.length; L < Y; L++) {
      const Z = m[L];
      if (p(Z)) {
        const k = T(E),
          Se = n.get(Z).__webglTexture;
        t.bindTexture(k, Se), h(k), t.unbindTexture();
      }
    }
  }
  const Je = [],
    Ue = [];
  function ct(E) {
    if (E.samples > 0) {
      if (ht(E) === !1) {
        const m = E.textures,
          L = E.width,
          Y = E.height;
        let Z = i.COLOR_BUFFER_BIT;
        const k = E.stencilBuffer
            ? i.DEPTH_STENCIL_ATTACHMENT
            : i.DEPTH_ATTACHMENT,
          Se = n.get(E),
          ne = m.length > 1;
        if (ne)
          for (let Ae = 0; Ae < m.length; Ae++)
            t.bindFramebuffer(i.FRAMEBUFFER, Se.__webglMultisampledFramebuffer),
              i.framebufferRenderbuffer(
                i.FRAMEBUFFER,
                i.COLOR_ATTACHMENT0 + Ae,
                i.RENDERBUFFER,
                null
              ),
              t.bindFramebuffer(i.FRAMEBUFFER, Se.__webglFramebuffer),
              i.framebufferTexture2D(
                i.DRAW_FRAMEBUFFER,
                i.COLOR_ATTACHMENT0 + Ae,
                i.TEXTURE_2D,
                null,
                0
              );
        t.bindFramebuffer(
          i.READ_FRAMEBUFFER,
          Se.__webglMultisampledFramebuffer
        );
        const xe = E.texture.mipmaps;
        xe && xe.length > 0
          ? t.bindFramebuffer(i.DRAW_FRAMEBUFFER, Se.__webglFramebuffer[0])
          : t.bindFramebuffer(i.DRAW_FRAMEBUFFER, Se.__webglFramebuffer);
        for (let Ae = 0; Ae < m.length; Ae++) {
          if (
            (E.resolveDepthBuffer &&
              (E.depthBuffer && (Z |= i.DEPTH_BUFFER_BIT),
              E.stencilBuffer &&
                E.resolveStencilBuffer &&
                (Z |= i.STENCIL_BUFFER_BIT)),
            ne)
          ) {
            i.framebufferRenderbuffer(
              i.READ_FRAMEBUFFER,
              i.COLOR_ATTACHMENT0,
              i.RENDERBUFFER,
              Se.__webglColorRenderbuffer[Ae]
            );
            const Q = n.get(m[Ae]).__webglTexture;
            i.framebufferTexture2D(
              i.DRAW_FRAMEBUFFER,
              i.COLOR_ATTACHMENT0,
              i.TEXTURE_2D,
              Q,
              0
            );
          }
          i.blitFramebuffer(0, 0, L, Y, 0, 0, L, Y, Z, i.NEAREST),
            c === !0 &&
              ((Je.length = 0),
              (Ue.length = 0),
              Je.push(i.COLOR_ATTACHMENT0 + Ae),
              E.depthBuffer &&
                E.resolveDepthBuffer === !1 &&
                (Je.push(k),
                Ue.push(k),
                i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, Ue)),
              i.invalidateFramebuffer(i.READ_FRAMEBUFFER, Je));
        }
        if (
          (t.bindFramebuffer(i.READ_FRAMEBUFFER, null),
          t.bindFramebuffer(i.DRAW_FRAMEBUFFER, null),
          ne)
        )
          for (let Ae = 0; Ae < m.length; Ae++) {
            t.bindFramebuffer(i.FRAMEBUFFER, Se.__webglMultisampledFramebuffer),
              i.framebufferRenderbuffer(
                i.FRAMEBUFFER,
                i.COLOR_ATTACHMENT0 + Ae,
                i.RENDERBUFFER,
                Se.__webglColorRenderbuffer[Ae]
              );
            const Q = n.get(m[Ae]).__webglTexture;
            t.bindFramebuffer(i.FRAMEBUFFER, Se.__webglFramebuffer),
              i.framebufferTexture2D(
                i.DRAW_FRAMEBUFFER,
                i.COLOR_ATTACHMENT0 + Ae,
                i.TEXTURE_2D,
                Q,
                0
              );
          }
        t.bindFramebuffer(
          i.DRAW_FRAMEBUFFER,
          Se.__webglMultisampledFramebuffer
        );
      } else if (E.depthBuffer && E.resolveDepthBuffer === !1 && c) {
        const m = E.stencilBuffer
          ? i.DEPTH_STENCIL_ATTACHMENT
          : i.DEPTH_ATTACHMENT;
        i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [m]);
      }
    }
  }
  function C(E) {
    return Math.min(s.maxSamples, E.samples);
  }
  function ht(E) {
    const m = n.get(E);
    return (
      E.samples > 0 &&
      e.has("WEBGL_multisampled_render_to_texture") === !0 &&
      m.__useRenderToTexture !== !1
    );
  }
  function Xe(E) {
    const m = a.render.frame;
    u.get(E) !== m && (u.set(E, m), E.update());
  }
  function et(E, m) {
    const L = E.colorSpace,
      Y = E.format,
      Z = E.type;
    return (
      E.isCompressedTexture === !0 ||
        E.isVideoTexture === !0 ||
        (L !== ui &&
          L !== bn &&
          (Ge.getTransfer(L) === Ze
            ? (Y !== qt || Z !== Bt) &&
              we(
                "WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."
              )
            : We("WebGLTextures: Unsupported texture color space:", L))),
      m
    );
  }
  function ve(E) {
    return (
      typeof HTMLImageElement < "u" && E instanceof HTMLImageElement
        ? ((l.width = E.naturalWidth || E.width),
          (l.height = E.naturalHeight || E.height))
        : typeof VideoFrame < "u" && E instanceof VideoFrame
        ? ((l.width = E.displayWidth), (l.height = E.displayHeight))
        : ((l.width = E.width), (l.height = E.height)),
      l
    );
  }
  (this.allocateTextureUnit = B),
    (this.resetTextureUnits = O),
    (this.setTexture2D = W),
    (this.setTexture2DArray = H),
    (this.setTexture3D = G),
    (this.setTextureCube = j),
    (this.rebindTextures = _t),
    (this.setupRenderTarget = Ve),
    (this.updateRenderTargetMipmap = Ye),
    (this.updateMultisampleRenderTarget = ct),
    (this.setupDepthRenderbuffer = He),
    (this.setupFrameBufferTexture = pe),
    (this.useMultisampledRTT = ht),
    (this.isReversedDepthBuffer = function () {
      return t.buffers.depth.getReversed();
    });
}
function jp(i, e) {
  function t(n, s = bn) {
    let r;
    const a = Ge.getTransfer(s);
    if (n === Bt) return i.UNSIGNED_BYTE;
    if (n === ra) return i.UNSIGNED_SHORT_4_4_4_4;
    if (n === aa) return i.UNSIGNED_SHORT_5_5_5_1;
    if (n === Xo) return i.UNSIGNED_INT_5_9_9_9_REV;
    if (n === Yo) return i.UNSIGNED_INT_10F_11F_11F_REV;
    if (n === ko) return i.BYTE;
    if (n === Wo) return i.SHORT;
    if (n === wi) return i.UNSIGNED_SHORT;
    if (n === sa) return i.INT;
    if (n === nn) return i.UNSIGNED_INT;
    if (n === $t) return i.FLOAT;
    if (n === _n) return i.HALF_FLOAT;
    if (n === qo) return i.ALPHA;
    if (n === Ko) return i.RGB;
    if (n === qt) return i.RGBA;
    if (n === gn) return i.DEPTH_COMPONENT;
    if (n === zn) return i.DEPTH_STENCIL;
    if (n === Zo) return i.RED;
    if (n === oa) return i.RED_INTEGER;
    if (n === hi) return i.RG;
    if (n === la) return i.RG_INTEGER;
    if (n === ca) return i.RGBA_INTEGER;
    if (n === ds || n === fs || n === ps || n === ms)
      if (a === Ze)
        if (((r = e.get("WEBGL_compressed_texture_s3tc_srgb")), r !== null)) {
          if (n === ds) return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (n === fs) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (n === ps) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (n === ms) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else return null;
      else if (((r = e.get("WEBGL_compressed_texture_s3tc")), r !== null)) {
        if (n === ds) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n === fs) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n === ps) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n === ms) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else return null;
    if (n === Er || n === yr || n === Tr || n === br)
      if (((r = e.get("WEBGL_compressed_texture_pvrtc")), r !== null)) {
        if (n === Er) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === yr) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === Tr) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === br) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else return null;
    if (
      n === Ar ||
      n === wr ||
      n === Rr ||
      n === Cr ||
      n === Pr ||
      n === Dr ||
      n === Lr
    )
      if (((r = e.get("WEBGL_compressed_texture_etc")), r !== null)) {
        if (n === Ar || n === wr)
          return a === Ze ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2;
        if (n === Rr)
          return a === Ze
            ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
            : r.COMPRESSED_RGBA8_ETC2_EAC;
        if (n === Cr) return r.COMPRESSED_R11_EAC;
        if (n === Pr) return r.COMPRESSED_SIGNED_R11_EAC;
        if (n === Dr) return r.COMPRESSED_RG11_EAC;
        if (n === Lr) return r.COMPRESSED_SIGNED_RG11_EAC;
      } else return null;
    if (
      n === Ir ||
      n === Ur ||
      n === Nr ||
      n === Fr ||
      n === Or ||
      n === Br ||
      n === zr ||
      n === Vr ||
      n === Gr ||
      n === Hr ||
      n === kr ||
      n === Wr ||
      n === Xr ||
      n === Yr
    )
      if (((r = e.get("WEBGL_compressed_texture_astc")), r !== null)) {
        if (n === Ir)
          return a === Ze
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
            : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === Ur)
          return a === Ze
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
            : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === Nr)
          return a === Ze
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
            : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === Fr)
          return a === Ze
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
            : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === Or)
          return a === Ze
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
            : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === Br)
          return a === Ze
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
            : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === zr)
          return a === Ze
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
            : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === Vr)
          return a === Ze
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
            : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === Gr)
          return a === Ze
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
            : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === Hr)
          return a === Ze
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
            : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === kr)
          return a === Ze
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
            : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === Wr)
          return a === Ze
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
            : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === Xr)
          return a === Ze
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
            : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === Yr)
          return a === Ze
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
            : r.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else return null;
    if (n === qr || n === Kr || n === Zr)
      if (((r = e.get("EXT_texture_compression_bptc")), r !== null)) {
        if (n === qr)
          return a === Ze
            ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
            : r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === Kr) return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === Zr) return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else return null;
    if (n === jr || n === $r || n === Jr || n === Qr)
      if (((r = e.get("EXT_texture_compression_rgtc")), r !== null)) {
        if (n === jr) return r.COMPRESSED_RED_RGTC1_EXT;
        if (n === $r) return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === Jr) return r.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === Qr) return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else return null;
    return n === Ri ? i.UNSIGNED_INT_24_8 : i[n] !== void 0 ? i[n] : null;
  }
  return { convert: t };
}
const $p = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`,
  Jp = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class Qp {
  constructor() {
    (this.texture = null),
      (this.mesh = null),
      (this.depthNear = 0),
      (this.depthFar = 0);
  }
  init(e, t) {
    if (this.texture === null) {
      const n = new cl(e.texture);
      (e.depthNear !== t.depthNear || e.depthFar !== t.depthFar) &&
        ((this.depthNear = e.depthNear), (this.depthFar = e.depthFar)),
        (this.texture = n);
    }
  }
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport,
        n = new rn({
          vertexShader: $p,
          fragmentShader: Jp,
          uniforms: {
            depthColor: { value: this.texture },
            depthWidth: { value: t.z },
            depthHeight: { value: t.w },
          },
        });
      this.mesh = new xt(new Fi(20, 20), n);
    }
    return this.mesh;
  }
  reset() {
    (this.texture = null), (this.mesh = null);
  }
  getDepthTexture() {
    return this.texture;
  }
}
class em extends Hn {
  constructor(e, t) {
    super();
    const n = this;
    let s = null,
      r = 1,
      a = null,
      o = "local-floor",
      c = 1,
      l = null,
      u = null,
      d = null,
      f = null,
      _ = null,
      v = null;
    const M = typeof XRWebGLBinding < "u",
      p = new Qp(),
      h = {},
      T = t.getContextAttributes();
    let b = null,
      y = null;
    const A = [],
      w = [],
      R = new Ce();
    let F = null;
    const g = new Ot();
    g.viewport = new lt();
    const S = new Ot();
    S.viewport = new lt();
    const P = [g, S],
      O = new oh();
    let B = null,
      X = null;
    (this.cameraAutoUpdate = !0),
      (this.enabled = !1),
      (this.isPresenting = !1),
      (this.getController = function (q) {
        let $ = A[q];
        return (
          $ === void 0 && (($ = new Js()), (A[q] = $)), $.getTargetRaySpace()
        );
      }),
      (this.getControllerGrip = function (q) {
        let $ = A[q];
        return $ === void 0 && (($ = new Js()), (A[q] = $)), $.getGripSpace();
      }),
      (this.getHand = function (q) {
        let $ = A[q];
        return $ === void 0 && (($ = new Js()), (A[q] = $)), $.getHandSpace();
      });
    function W(q) {
      const $ = w.indexOf(q.inputSource);
      if ($ === -1) return;
      const pe = A[$];
      pe !== void 0 &&
        (pe.update(q.inputSource, q.frame, l || a),
        pe.dispatchEvent({ type: q.type, data: q.inputSource }));
    }
    function H() {
      s.removeEventListener("select", W),
        s.removeEventListener("selectstart", W),
        s.removeEventListener("selectend", W),
        s.removeEventListener("squeeze", W),
        s.removeEventListener("squeezestart", W),
        s.removeEventListener("squeezeend", W),
        s.removeEventListener("end", H),
        s.removeEventListener("inputsourceschange", G);
      for (let q = 0; q < A.length; q++) {
        const $ = w[q];
        $ !== null && ((w[q] = null), A[q].disconnect($));
      }
      (B = null), (X = null), p.reset();
      for (const q in h) delete h[q];
      e.setRenderTarget(b),
        (_ = null),
        (f = null),
        (d = null),
        (s = null),
        (y = null),
        it.stop(),
        (n.isPresenting = !1),
        e.setPixelRatio(F),
        e.setSize(R.width, R.height, !1),
        n.dispatchEvent({ type: "sessionend" });
    }
    (this.setFramebufferScaleFactor = function (q) {
      (r = q),
        n.isPresenting === !0 &&
          we("WebXRManager: Cannot change framebuffer scale while presenting.");
    }),
      (this.setReferenceSpaceType = function (q) {
        (o = q),
          n.isPresenting === !0 &&
            we(
              "WebXRManager: Cannot change reference space type while presenting."
            );
      }),
      (this.getReferenceSpace = function () {
        return l || a;
      }),
      (this.setReferenceSpace = function (q) {
        l = q;
      }),
      (this.getBaseLayer = function () {
        return f !== null ? f : _;
      }),
      (this.getBinding = function () {
        return d === null && M && (d = new XRWebGLBinding(s, t)), d;
      }),
      (this.getFrame = function () {
        return v;
      }),
      (this.getSession = function () {
        return s;
      }),
      (this.setSession = async function (q) {
        if (((s = q), s !== null)) {
          if (
            ((b = e.getRenderTarget()),
            s.addEventListener("select", W),
            s.addEventListener("selectstart", W),
            s.addEventListener("selectend", W),
            s.addEventListener("squeeze", W),
            s.addEventListener("squeezestart", W),
            s.addEventListener("squeezeend", W),
            s.addEventListener("end", H),
            s.addEventListener("inputsourceschange", G),
            T.xrCompatible !== !0 && (await t.makeXRCompatible()),
            (F = e.getPixelRatio()),
            e.getSize(R),
            M && "createProjectionLayer" in XRWebGLBinding.prototype)
          ) {
            let pe = null,
              Pe = null,
              ge = null;
            T.depth &&
              ((ge = T.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24),
              (pe = T.stencil ? zn : gn),
              (Pe = T.stencil ? Ri : nn));
            const He = {
              colorFormat: t.RGBA8,
              depthFormat: ge,
              scaleFactor: r,
            };
            (d = this.getBinding()),
              (f = d.createProjectionLayer(He)),
              s.updateRenderState({ layers: [f] }),
              e.setPixelRatio(1),
              e.setSize(f.textureWidth, f.textureHeight, !1),
              (y = new en(f.textureWidth, f.textureHeight, {
                format: qt,
                type: Bt,
                depthTexture: new Pi(
                  f.textureWidth,
                  f.textureHeight,
                  Pe,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  pe
                ),
                stencilBuffer: T.stencil,
                colorSpace: e.outputColorSpace,
                samples: T.antialias ? 4 : 0,
                resolveDepthBuffer: f.ignoreDepthValues === !1,
                resolveStencilBuffer: f.ignoreDepthValues === !1,
              }));
          } else {
            const pe = {
              antialias: T.antialias,
              alpha: !0,
              depth: T.depth,
              stencil: T.stencil,
              framebufferScaleFactor: r,
            };
            (_ = new XRWebGLLayer(s, t, pe)),
              s.updateRenderState({ baseLayer: _ }),
              e.setPixelRatio(1),
              e.setSize(_.framebufferWidth, _.framebufferHeight, !1),
              (y = new en(_.framebufferWidth, _.framebufferHeight, {
                format: qt,
                type: Bt,
                colorSpace: e.outputColorSpace,
                stencilBuffer: T.stencil,
                resolveDepthBuffer: _.ignoreDepthValues === !1,
                resolveStencilBuffer: _.ignoreDepthValues === !1,
              }));
          }
          (y.isXRRenderTarget = !0),
            this.setFoveation(c),
            (l = null),
            (a = await s.requestReferenceSpace(o)),
            it.setContext(s),
            it.start(),
            (n.isPresenting = !0),
            n.dispatchEvent({ type: "sessionstart" });
        }
      }),
      (this.getEnvironmentBlendMode = function () {
        if (s !== null) return s.environmentBlendMode;
      }),
      (this.getDepthTexture = function () {
        return p.getDepthTexture();
      });
    function G(q) {
      for (let $ = 0; $ < q.removed.length; $++) {
        const pe = q.removed[$],
          Pe = w.indexOf(pe);
        Pe >= 0 && ((w[Pe] = null), A[Pe].disconnect(pe));
      }
      for (let $ = 0; $ < q.added.length; $++) {
        const pe = q.added[$];
        let Pe = w.indexOf(pe);
        if (Pe === -1) {
          for (let He = 0; He < A.length; He++)
            if (He >= w.length) {
              w.push(pe), (Pe = He);
              break;
            } else if (w[He] === null) {
              (w[He] = pe), (Pe = He);
              break;
            }
          if (Pe === -1) break;
        }
        const ge = A[Pe];
        ge && ge.connect(pe);
      }
    }
    const j = new U(),
      he = new U();
    function ae(q, $, pe) {
      j.setFromMatrixPosition($.matrixWorld),
        he.setFromMatrixPosition(pe.matrixWorld);
      const Pe = j.distanceTo(he),
        ge = $.projectionMatrix.elements,
        He = pe.projectionMatrix.elements,
        _t = ge[14] / (ge[10] - 1),
        Ve = ge[14] / (ge[10] + 1),
        Ye = (ge[9] + 1) / ge[5],
        Je = (ge[9] - 1) / ge[5],
        Ue = (ge[8] - 1) / ge[0],
        ct = (He[8] + 1) / He[0],
        C = _t * Ue,
        ht = _t * ct,
        Xe = Pe / (-Ue + ct),
        et = Xe * -Ue;
      if (
        ($.matrixWorld.decompose(q.position, q.quaternion, q.scale),
        q.translateX(et),
        q.translateZ(Xe),
        q.matrixWorld.compose(q.position, q.quaternion, q.scale),
        q.matrixWorldInverse.copy(q.matrixWorld).invert(),
        ge[10] === -1)
      )
        q.projectionMatrix.copy($.projectionMatrix),
          q.projectionMatrixInverse.copy($.projectionMatrixInverse);
      else {
        const ve = _t + Xe,
          E = Ve + Xe,
          m = C - et,
          L = ht + (Pe - et),
          Y = ((Ye * Ve) / E) * ve,
          Z = ((Je * Ve) / E) * ve;
        q.projectionMatrix.makePerspective(m, L, Y, Z, ve, E),
          q.projectionMatrixInverse.copy(q.projectionMatrix).invert();
      }
    }
    function ue(q, $) {
      $ === null
        ? q.matrixWorld.copy(q.matrix)
        : q.matrixWorld.multiplyMatrices($.matrixWorld, q.matrix),
        q.matrixWorldInverse.copy(q.matrixWorld).invert();
    }
    this.updateCamera = function (q) {
      if (s === null) return;
      let $ = q.near,
        pe = q.far;
      p.texture !== null &&
        (p.depthNear > 0 && ($ = p.depthNear),
        p.depthFar > 0 && (pe = p.depthFar)),
        (O.near = S.near = g.near = $),
        (O.far = S.far = g.far = pe),
        (B !== O.near || X !== O.far) &&
          (s.updateRenderState({ depthNear: O.near, depthFar: O.far }),
          (B = O.near),
          (X = O.far)),
        (O.layers.mask = q.layers.mask | 6),
        (g.layers.mask = O.layers.mask & 3),
        (S.layers.mask = O.layers.mask & 5);
      const Pe = q.parent,
        ge = O.cameras;
      ue(O, Pe);
      for (let He = 0; He < ge.length; He++) ue(ge[He], Pe);
      ge.length === 2
        ? ae(O, g, S)
        : O.projectionMatrix.copy(g.projectionMatrix),
        Fe(q, O, Pe);
    };
    function Fe(q, $, pe) {
      pe === null
        ? q.matrix.copy($.matrixWorld)
        : (q.matrix.copy(pe.matrixWorld),
          q.matrix.invert(),
          q.matrix.multiply($.matrixWorld)),
        q.matrix.decompose(q.position, q.quaternion, q.scale),
        q.updateMatrixWorld(!0),
        q.projectionMatrix.copy($.projectionMatrix),
        q.projectionMatrixInverse.copy($.projectionMatrixInverse),
        q.isPerspectiveCamera &&
          ((q.fov = ea * 2 * Math.atan(1 / q.projectionMatrix.elements[5])),
          (q.zoom = 1));
    }
    (this.getCamera = function () {
      return O;
    }),
      (this.getFoveation = function () {
        if (!(f === null && _ === null)) return c;
      }),
      (this.setFoveation = function (q) {
        (c = q),
          f !== null && (f.fixedFoveation = q),
          _ !== null && _.fixedFoveation !== void 0 && (_.fixedFoveation = q);
      }),
      (this.hasDepthSensing = function () {
        return p.texture !== null;
      }),
      (this.getDepthSensingMesh = function () {
        return p.getMesh(O);
      }),
      (this.getCameraTexture = function (q) {
        return h[q];
      });
    let Ie = null;
    function st(q, $) {
      if (((u = $.getViewerPose(l || a)), (v = $), u !== null)) {
        const pe = u.views;
        _ !== null &&
          (e.setRenderTargetFramebuffer(y, _.framebuffer),
          e.setRenderTarget(y));
        let Pe = !1;
        pe.length !== O.cameras.length && ((O.cameras.length = 0), (Pe = !0));
        for (let Ve = 0; Ve < pe.length; Ve++) {
          const Ye = pe[Ve];
          let Je = null;
          if (_ !== null) Je = _.getViewport(Ye);
          else {
            const ct = d.getViewSubImage(f, Ye);
            (Je = ct.viewport),
              Ve === 0 &&
                (e.setRenderTargetTextures(
                  y,
                  ct.colorTexture,
                  ct.depthStencilTexture
                ),
                e.setRenderTarget(y));
          }
          let Ue = P[Ve];
          Ue === void 0 &&
            ((Ue = new Ot()),
            Ue.layers.enable(Ve),
            (Ue.viewport = new lt()),
            (P[Ve] = Ue)),
            Ue.matrix.fromArray(Ye.transform.matrix),
            Ue.matrix.decompose(Ue.position, Ue.quaternion, Ue.scale),
            Ue.projectionMatrix.fromArray(Ye.projectionMatrix),
            Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),
            Ue.viewport.set(Je.x, Je.y, Je.width, Je.height),
            Ve === 0 &&
              (O.matrix.copy(Ue.matrix),
              O.matrix.decompose(O.position, O.quaternion, O.scale)),
            Pe === !0 && O.cameras.push(Ue);
        }
        const ge = s.enabledFeatures;
        if (
          ge &&
          ge.includes("depth-sensing") &&
          s.depthUsage == "gpu-optimized" &&
          M
        ) {
          d = n.getBinding();
          const Ve = d.getDepthInformation(pe[0]);
          Ve && Ve.isValid && Ve.texture && p.init(Ve, s.renderState);
        }
        if (ge && ge.includes("camera-access") && M) {
          e.state.unbindTexture(), (d = n.getBinding());
          for (let Ve = 0; Ve < pe.length; Ve++) {
            const Ye = pe[Ve].camera;
            if (Ye) {
              let Je = h[Ye];
              Je || ((Je = new cl()), (h[Ye] = Je));
              const Ue = d.getCameraImage(Ye);
              Je.sourceTexture = Ue;
            }
          }
        }
      }
      for (let pe = 0; pe < A.length; pe++) {
        const Pe = w[pe],
          ge = A[pe];
        Pe !== null && ge !== void 0 && ge.update(Pe, $, l || a);
      }
      Ie && Ie(q, $),
        $.detectedPlanes &&
          n.dispatchEvent({ type: "planesdetected", data: $ }),
        (v = null);
    }
    const it = new ul();
    it.setAnimationLoop(st),
      (this.setAnimationLoop = function (q) {
        Ie = q;
      }),
      (this.dispose = function () {});
  }
}
const Nn = new sn(),
  tm = new rt();
function nm(i, e) {
  function t(p, h) {
    p.matrixAutoUpdate === !0 && p.updateMatrix(), h.value.copy(p.matrix);
  }
  function n(p, h) {
    h.color.getRGB(p.fogColor.value, sl(i)),
      h.isFog
        ? ((p.fogNear.value = h.near), (p.fogFar.value = h.far))
        : h.isFogExp2 && (p.fogDensity.value = h.density);
  }
  function s(p, h, T, b, y) {
    h.isMeshBasicMaterial || h.isMeshLambertMaterial
      ? r(p, h)
      : h.isMeshToonMaterial
      ? (r(p, h), d(p, h))
      : h.isMeshPhongMaterial
      ? (r(p, h), u(p, h))
      : h.isMeshStandardMaterial
      ? (r(p, h), f(p, h), h.isMeshPhysicalMaterial && _(p, h, y))
      : h.isMeshMatcapMaterial
      ? (r(p, h), v(p, h))
      : h.isMeshDepthMaterial
      ? r(p, h)
      : h.isMeshDistanceMaterial
      ? (r(p, h), M(p, h))
      : h.isMeshNormalMaterial
      ? r(p, h)
      : h.isLineBasicMaterial
      ? (a(p, h), h.isLineDashedMaterial && o(p, h))
      : h.isPointsMaterial
      ? c(p, h, T, b)
      : h.isSpriteMaterial
      ? l(p, h)
      : h.isShadowMaterial
      ? (p.color.value.copy(h.color), (p.opacity.value = h.opacity))
      : h.isShaderMaterial && (h.uniformsNeedUpdate = !1);
  }
  function r(p, h) {
    (p.opacity.value = h.opacity),
      h.color && p.diffuse.value.copy(h.color),
      h.emissive &&
        p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),
      h.map && ((p.map.value = h.map), t(h.map, p.mapTransform)),
      h.alphaMap &&
        ((p.alphaMap.value = h.alphaMap), t(h.alphaMap, p.alphaMapTransform)),
      h.bumpMap &&
        ((p.bumpMap.value = h.bumpMap),
        t(h.bumpMap, p.bumpMapTransform),
        (p.bumpScale.value = h.bumpScale),
        h.side === Lt && (p.bumpScale.value *= -1)),
      h.normalMap &&
        ((p.normalMap.value = h.normalMap),
        t(h.normalMap, p.normalMapTransform),
        p.normalScale.value.copy(h.normalScale),
        h.side === Lt && p.normalScale.value.negate()),
      h.displacementMap &&
        ((p.displacementMap.value = h.displacementMap),
        t(h.displacementMap, p.displacementMapTransform),
        (p.displacementScale.value = h.displacementScale),
        (p.displacementBias.value = h.displacementBias)),
      h.emissiveMap &&
        ((p.emissiveMap.value = h.emissiveMap),
        t(h.emissiveMap, p.emissiveMapTransform)),
      h.specularMap &&
        ((p.specularMap.value = h.specularMap),
        t(h.specularMap, p.specularMapTransform)),
      h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest);
    const T = e.get(h),
      b = T.envMap,
      y = T.envMapRotation;
    b &&
      ((p.envMap.value = b),
      Nn.copy(y),
      (Nn.x *= -1),
      (Nn.y *= -1),
      (Nn.z *= -1),
      b.isCubeTexture &&
        b.isRenderTargetTexture === !1 &&
        ((Nn.y *= -1), (Nn.z *= -1)),
      p.envMapRotation.value.setFromMatrix4(tm.makeRotationFromEuler(Nn)),
      (p.flipEnvMap.value =
        b.isCubeTexture && b.isRenderTargetTexture === !1 ? -1 : 1),
      (p.reflectivity.value = h.reflectivity),
      (p.ior.value = h.ior),
      (p.refractionRatio.value = h.refractionRatio)),
      h.lightMap &&
        ((p.lightMap.value = h.lightMap),
        (p.lightMapIntensity.value = h.lightMapIntensity),
        t(h.lightMap, p.lightMapTransform)),
      h.aoMap &&
        ((p.aoMap.value = h.aoMap),
        (p.aoMapIntensity.value = h.aoMapIntensity),
        t(h.aoMap, p.aoMapTransform));
  }
  function a(p, h) {
    p.diffuse.value.copy(h.color),
      (p.opacity.value = h.opacity),
      h.map && ((p.map.value = h.map), t(h.map, p.mapTransform));
  }
  function o(p, h) {
    (p.dashSize.value = h.dashSize),
      (p.totalSize.value = h.dashSize + h.gapSize),
      (p.scale.value = h.scale);
  }
  function c(p, h, T, b) {
    p.diffuse.value.copy(h.color),
      (p.opacity.value = h.opacity),
      (p.size.value = h.size * T),
      (p.scale.value = b * 0.5),
      h.map && ((p.map.value = h.map), t(h.map, p.uvTransform)),
      h.alphaMap &&
        ((p.alphaMap.value = h.alphaMap), t(h.alphaMap, p.alphaMapTransform)),
      h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest);
  }
  function l(p, h) {
    p.diffuse.value.copy(h.color),
      (p.opacity.value = h.opacity),
      (p.rotation.value = h.rotation),
      h.map && ((p.map.value = h.map), t(h.map, p.mapTransform)),
      h.alphaMap &&
        ((p.alphaMap.value = h.alphaMap), t(h.alphaMap, p.alphaMapTransform)),
      h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest);
  }
  function u(p, h) {
    p.specular.value.copy(h.specular),
      (p.shininess.value = Math.max(h.shininess, 1e-4));
  }
  function d(p, h) {
    h.gradientMap && (p.gradientMap.value = h.gradientMap);
  }
  function f(p, h) {
    (p.metalness.value = h.metalness),
      h.metalnessMap &&
        ((p.metalnessMap.value = h.metalnessMap),
        t(h.metalnessMap, p.metalnessMapTransform)),
      (p.roughness.value = h.roughness),
      h.roughnessMap &&
        ((p.roughnessMap.value = h.roughnessMap),
        t(h.roughnessMap, p.roughnessMapTransform)),
      h.envMap && (p.envMapIntensity.value = h.envMapIntensity);
  }
  function _(p, h, T) {
    (p.ior.value = h.ior),
      h.sheen > 0 &&
        (p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),
        (p.sheenRoughness.value = h.sheenRoughness),
        h.sheenColorMap &&
          ((p.sheenColorMap.value = h.sheenColorMap),
          t(h.sheenColorMap, p.sheenColorMapTransform)),
        h.sheenRoughnessMap &&
          ((p.sheenRoughnessMap.value = h.sheenRoughnessMap),
          t(h.sheenRoughnessMap, p.sheenRoughnessMapTransform))),
      h.clearcoat > 0 &&
        ((p.clearcoat.value = h.clearcoat),
        (p.clearcoatRoughness.value = h.clearcoatRoughness),
        h.clearcoatMap &&
          ((p.clearcoatMap.value = h.clearcoatMap),
          t(h.clearcoatMap, p.clearcoatMapTransform)),
        h.clearcoatRoughnessMap &&
          ((p.clearcoatRoughnessMap.value = h.clearcoatRoughnessMap),
          t(h.clearcoatRoughnessMap, p.clearcoatRoughnessMapTransform)),
        h.clearcoatNormalMap &&
          ((p.clearcoatNormalMap.value = h.clearcoatNormalMap),
          t(h.clearcoatNormalMap, p.clearcoatNormalMapTransform),
          p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),
          h.side === Lt && p.clearcoatNormalScale.value.negate())),
      h.dispersion > 0 && (p.dispersion.value = h.dispersion),
      h.iridescence > 0 &&
        ((p.iridescence.value = h.iridescence),
        (p.iridescenceIOR.value = h.iridescenceIOR),
        (p.iridescenceThicknessMinimum.value = h.iridescenceThicknessRange[0]),
        (p.iridescenceThicknessMaximum.value = h.iridescenceThicknessRange[1]),
        h.iridescenceMap &&
          ((p.iridescenceMap.value = h.iridescenceMap),
          t(h.iridescenceMap, p.iridescenceMapTransform)),
        h.iridescenceThicknessMap &&
          ((p.iridescenceThicknessMap.value = h.iridescenceThicknessMap),
          t(h.iridescenceThicknessMap, p.iridescenceThicknessMapTransform))),
      h.transmission > 0 &&
        ((p.transmission.value = h.transmission),
        (p.transmissionSamplerMap.value = T.texture),
        p.transmissionSamplerSize.value.set(T.width, T.height),
        h.transmissionMap &&
          ((p.transmissionMap.value = h.transmissionMap),
          t(h.transmissionMap, p.transmissionMapTransform)),
        (p.thickness.value = h.thickness),
        h.thicknessMap &&
          ((p.thicknessMap.value = h.thicknessMap),
          t(h.thicknessMap, p.thicknessMapTransform)),
        (p.attenuationDistance.value = h.attenuationDistance),
        p.attenuationColor.value.copy(h.attenuationColor)),
      h.anisotropy > 0 &&
        (p.anisotropyVector.value.set(
          h.anisotropy * Math.cos(h.anisotropyRotation),
          h.anisotropy * Math.sin(h.anisotropyRotation)
        ),
        h.anisotropyMap &&
          ((p.anisotropyMap.value = h.anisotropyMap),
          t(h.anisotropyMap, p.anisotropyMapTransform))),
      (p.specularIntensity.value = h.specularIntensity),
      p.specularColor.value.copy(h.specularColor),
      h.specularColorMap &&
        ((p.specularColorMap.value = h.specularColorMap),
        t(h.specularColorMap, p.specularColorMapTransform)),
      h.specularIntensityMap &&
        ((p.specularIntensityMap.value = h.specularIntensityMap),
        t(h.specularIntensityMap, p.specularIntensityMapTransform));
  }
  function v(p, h) {
    h.matcap && (p.matcap.value = h.matcap);
  }
  function M(p, h) {
    const T = e.get(h).light;
    p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),
      (p.nearDistance.value = T.shadow.camera.near),
      (p.farDistance.value = T.shadow.camera.far);
  }
  return { refreshFogUniforms: n, refreshMaterialUniforms: s };
}
function im(i, e, t, n) {
  let s = {},
    r = {},
    a = [];
  const o = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);
  function c(T, b) {
    const y = b.program;
    n.uniformBlockBinding(T, y);
  }
  function l(T, b) {
    let y = s[T.id];
    y === void 0 &&
      (v(T), (y = u(T)), (s[T.id] = y), T.addEventListener("dispose", p));
    const A = b.program;
    n.updateUBOMapping(T, A);
    const w = e.render.frame;
    r[T.id] !== w && (f(T), (r[T.id] = w));
  }
  function u(T) {
    const b = d();
    T.__bindingPointIndex = b;
    const y = i.createBuffer(),
      A = T.__size,
      w = T.usage;
    return (
      i.bindBuffer(i.UNIFORM_BUFFER, y),
      i.bufferData(i.UNIFORM_BUFFER, A, w),
      i.bindBuffer(i.UNIFORM_BUFFER, null),
      i.bindBufferBase(i.UNIFORM_BUFFER, b, y),
      y
    );
  }
  function d() {
    for (let T = 0; T < o; T++) if (a.indexOf(T) === -1) return a.push(T), T;
    return (
      We(
        "WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."
      ),
      0
    );
  }
  function f(T) {
    const b = s[T.id],
      y = T.uniforms,
      A = T.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, b);
    for (let w = 0, R = y.length; w < R; w++) {
      const F = Array.isArray(y[w]) ? y[w] : [y[w]];
      for (let g = 0, S = F.length; g < S; g++) {
        const P = F[g];
        if (_(P, w, g, A) === !0) {
          const O = P.__offset,
            B = Array.isArray(P.value) ? P.value : [P.value];
          let X = 0;
          for (let W = 0; W < B.length; W++) {
            const H = B[W],
              G = M(H);
            typeof H == "number" || typeof H == "boolean"
              ? ((P.__data[0] = H),
                i.bufferSubData(i.UNIFORM_BUFFER, O + X, P.__data))
              : H.isMatrix3
              ? ((P.__data[0] = H.elements[0]),
                (P.__data[1] = H.elements[1]),
                (P.__data[2] = H.elements[2]),
                (P.__data[3] = 0),
                (P.__data[4] = H.elements[3]),
                (P.__data[5] = H.elements[4]),
                (P.__data[6] = H.elements[5]),
                (P.__data[7] = 0),
                (P.__data[8] = H.elements[6]),
                (P.__data[9] = H.elements[7]),
                (P.__data[10] = H.elements[8]),
                (P.__data[11] = 0))
              : (H.toArray(P.__data, X),
                (X += G.storage / Float32Array.BYTES_PER_ELEMENT));
          }
          i.bufferSubData(i.UNIFORM_BUFFER, O, P.__data);
        }
      }
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function _(T, b, y, A) {
    const w = T.value,
      R = b + "_" + y;
    if (A[R] === void 0)
      return (
        typeof w == "number" || typeof w == "boolean"
          ? (A[R] = w)
          : (A[R] = w.clone()),
        !0
      );
    {
      const F = A[R];
      if (typeof w == "number" || typeof w == "boolean") {
        if (F !== w) return (A[R] = w), !0;
      } else if (F.equals(w) === !1) return F.copy(w), !0;
    }
    return !1;
  }
  function v(T) {
    const b = T.uniforms;
    let y = 0;
    const A = 16;
    for (let R = 0, F = b.length; R < F; R++) {
      const g = Array.isArray(b[R]) ? b[R] : [b[R]];
      for (let S = 0, P = g.length; S < P; S++) {
        const O = g[S],
          B = Array.isArray(O.value) ? O.value : [O.value];
        for (let X = 0, W = B.length; X < W; X++) {
          const H = B[X],
            G = M(H),
            j = y % A,
            he = j % G.boundary,
            ae = j + he;
          (y += he),
            ae !== 0 && A - ae < G.storage && (y += A - ae),
            (O.__data = new Float32Array(
              G.storage / Float32Array.BYTES_PER_ELEMENT
            )),
            (O.__offset = y),
            (y += G.storage);
        }
      }
    }
    const w = y % A;
    return w > 0 && (y += A - w), (T.__size = y), (T.__cache = {}), this;
  }
  function M(T) {
    const b = { boundary: 0, storage: 0 };
    return (
      typeof T == "number" || typeof T == "boolean"
        ? ((b.boundary = 4), (b.storage = 4))
        : T.isVector2
        ? ((b.boundary = 8), (b.storage = 8))
        : T.isVector3 || T.isColor
        ? ((b.boundary = 16), (b.storage = 12))
        : T.isVector4
        ? ((b.boundary = 16), (b.storage = 16))
        : T.isMatrix3
        ? ((b.boundary = 48), (b.storage = 48))
        : T.isMatrix4
        ? ((b.boundary = 64), (b.storage = 64))
        : T.isTexture
        ? we(
            "WebGLRenderer: Texture samplers can not be part of an uniforms group."
          )
        : we("WebGLRenderer: Unsupported uniform value type.", T),
      b
    );
  }
  function p(T) {
    const b = T.target;
    b.removeEventListener("dispose", p);
    const y = a.indexOf(b.__bindingPointIndex);
    a.splice(y, 1), i.deleteBuffer(s[b.id]), delete s[b.id], delete r[b.id];
  }
  function h() {
    for (const T in s) i.deleteBuffer(s[T]);
    (a = []), (s = {}), (r = {});
  }
  return { bind: c, update: l, dispose: h };
}
const sm = new Uint16Array([
  12469, 15057, 12620, 14925, 13266, 14620, 13807, 14376, 14323, 13990, 14545,
  13625, 14713, 13328, 14840, 12882, 14931, 12528, 14996, 12233, 15039, 11829,
  15066, 11525, 15080, 11295, 15085, 10976, 15082, 10705, 15073, 10495, 13880,
  14564, 13898, 14542, 13977, 14430, 14158, 14124, 14393, 13732, 14556, 13410,
  14702, 12996, 14814, 12596, 14891, 12291, 14937, 11834, 14957, 11489, 14958,
  11194, 14943, 10803, 14921, 10506, 14893, 10278, 14858, 9960, 14484, 14039,
  14487, 14025, 14499, 13941, 14524, 13740, 14574, 13468, 14654, 13106, 14743,
  12678, 14818, 12344, 14867, 11893, 14889, 11509, 14893, 11180, 14881, 10751,
  14852, 10428, 14812, 10128, 14765, 9754, 14712, 9466, 14764, 13480, 14764,
  13475, 14766, 13440, 14766, 13347, 14769, 13070, 14786, 12713, 14816, 12387,
  14844, 11957, 14860, 11549, 14868, 11215, 14855, 10751, 14825, 10403, 14782,
  10044, 14729, 9651, 14666, 9352, 14599, 9029, 14967, 12835, 14966, 12831,
  14963, 12804, 14954, 12723, 14936, 12564, 14917, 12347, 14900, 11958, 14886,
  11569, 14878, 11247, 14859, 10765, 14828, 10401, 14784, 10011, 14727, 9600,
  14660, 9289, 14586, 8893, 14508, 8533, 15111, 12234, 15110, 12234, 15104,
  12216, 15092, 12156, 15067, 12010, 15028, 11776, 14981, 11500, 14942, 11205,
  14902, 10752, 14861, 10393, 14812, 9991, 14752, 9570, 14682, 9252, 14603,
  8808, 14519, 8445, 14431, 8145, 15209, 11449, 15208, 11451, 15202, 11451,
  15190, 11438, 15163, 11384, 15117, 11274, 15055, 10979, 14994, 10648, 14932,
  10343, 14871, 9936, 14803, 9532, 14729, 9218, 14645, 8742, 14556, 8381, 14461,
  8020, 14365, 7603, 15273, 10603, 15272, 10607, 15267, 10619, 15256, 10631,
  15231, 10614, 15182, 10535, 15118, 10389, 15042, 10167, 14963, 9787, 14883,
  9447, 14800, 9115, 14710, 8665, 14615, 8318, 14514, 7911, 14411, 7507, 14279,
  7198, 15314, 9675, 15313, 9683, 15309, 9712, 15298, 9759, 15277, 9797, 15229,
  9773, 15166, 9668, 15084, 9487, 14995, 9274, 14898, 8910, 14800, 8539, 14697,
  8234, 14590, 7790, 14479, 7409, 14367, 7067, 14178, 6621, 15337, 8619, 15337,
  8631, 15333, 8677, 15325, 8769, 15305, 8871, 15264, 8940, 15202, 8909, 15119,
  8775, 15022, 8565, 14916, 8328, 14804, 8009, 14688, 7614, 14569, 7287, 14448,
  6888, 14321, 6483, 14088, 6171, 15350, 7402, 15350, 7419, 15347, 7480, 15340,
  7613, 15322, 7804, 15287, 7973, 15229, 8057, 15148, 8012, 15046, 7846, 14933,
  7611, 14810, 7357, 14682, 7069, 14552, 6656, 14421, 6316, 14251, 5948, 14007,
  5528, 15356, 5942, 15356, 5977, 15353, 6119, 15348, 6294, 15332, 6551, 15302,
  6824, 15249, 7044, 15171, 7122, 15070, 7050, 14949, 6861, 14818, 6611, 14679,
  6349, 14538, 6067, 14398, 5651, 14189, 5311, 13935, 4958, 15359, 4123, 15359,
  4153, 15356, 4296, 15353, 4646, 15338, 5160, 15311, 5508, 15263, 5829, 15188,
  6042, 15088, 6094, 14966, 6001, 14826, 5796, 14678, 5543, 14527, 5287, 14377,
  4985, 14133, 4586, 13869, 4257, 15360, 1563, 15360, 1642, 15358, 2076, 15354,
  2636, 15341, 3350, 15317, 4019, 15273, 4429, 15203, 4732, 15105, 4911, 14981,
  4932, 14836, 4818, 14679, 4621, 14517, 4386, 14359, 4156, 14083, 3795, 13808,
  3437, 15360, 122, 15360, 137, 15358, 285, 15355, 636, 15344, 1274, 15322,
  2177, 15281, 2765, 15215, 3223, 15120, 3451, 14995, 3569, 14846, 3567, 14681,
  3466, 14511, 3305, 14344, 3121, 14037, 2800, 13753, 2467, 15360, 0, 15360, 1,
  15359, 21, 15355, 89, 15346, 253, 15325, 479, 15287, 796, 15225, 1148, 15133,
  1492, 15008, 1749, 14856, 1882, 14685, 1886, 14506, 1783, 14324, 1608, 13996,
  1398, 13702, 1183,
]);
let Zt = null;
function rm() {
  return (
    Zt === null &&
      ((Zt = new Yc(sm, 16, 16, hi, _n)),
      (Zt.name = "DFG_LUT"),
      (Zt.minFilter = yt),
      (Zt.magFilter = yt),
      (Zt.wrapS = fn),
      (Zt.wrapT = fn),
      (Zt.generateMipmaps = !1),
      (Zt.needsUpdate = !0)),
    Zt
  );
}
class am {
  constructor(e = {}) {
    const {
      canvas: t = xc(),
      context: n = null,
      depth: s = !0,
      stencil: r = !1,
      alpha: a = !1,
      antialias: o = !1,
      premultipliedAlpha: c = !0,
      preserveDrawingBuffer: l = !1,
      powerPreference: u = "default",
      failIfMajorPerformanceCaveat: d = !1,
      reversedDepthBuffer: f = !1,
      outputBufferType: _ = Bt,
    } = e;
    this.isWebGLRenderer = !0;
    let v;
    if (n !== null) {
      if (
        typeof WebGLRenderingContext < "u" &&
        n instanceof WebGLRenderingContext
      )
        throw new Error(
          "THREE.WebGLRenderer: WebGL 1 is not supported since r163."
        );
      v = n.getContextAttributes().alpha;
    } else v = a;
    const M = _,
      p = new Set([ca, la, oa]),
      h = new Set([Bt, nn, wi, Ri, ra, aa]),
      T = new Uint32Array(4),
      b = new Int32Array(4);
    let y = null,
      A = null;
    const w = [],
      R = [];
    let F = null;
    (this.domElement = t),
      (this.debug = { checkShaderErrors: !0, onShaderError: null }),
      (this.autoClear = !0),
      (this.autoClearColor = !0),
      (this.autoClearDepth = !0),
      (this.autoClearStencil = !0),
      (this.sortObjects = !0),
      (this.clippingPlanes = []),
      (this.localClippingEnabled = !1),
      (this.toneMapping = Qt),
      (this.toneMappingExposure = 1),
      (this.transmissionResolutionScale = 1);
    const g = this;
    let S = !1;
    this._outputColorSpace = Ht;
    let P = 0,
      O = 0,
      B = null,
      X = -1,
      W = null;
    const H = new lt(),
      G = new lt();
    let j = null;
    const he = new ze(0);
    let ae = 0,
      ue = t.width,
      Fe = t.height,
      Ie = 1,
      st = null,
      it = null;
    const q = new lt(0, 0, ue, Fe),
      $ = new lt(0, 0, ue, Fe);
    let pe = !1;
    const Pe = new pa();
    let ge = !1,
      He = !1;
    const _t = new rt(),
      Ve = new U(),
      Ye = new lt(),
      Je = {
        background: null,
        fog: null,
        environment: null,
        overrideMaterial: null,
        isScene: !0,
      };
    let Ue = !1;
    function ct() {
      return B === null ? Ie : 1;
    }
    let C = n;
    function ht(x, I) {
      return t.getContext(x, I);
    }
    try {
      const x = {
        alpha: !0,
        depth: s,
        stencil: r,
        antialias: o,
        premultipliedAlpha: c,
        preserveDrawingBuffer: l,
        powerPreference: u,
        failIfMajorPerformanceCaveat: d,
      };
      if (
        ("setAttribute" in t &&
          t.setAttribute("data-engine", `three.js r${ia}`),
        t.addEventListener("webglcontextlost", Re, !1),
        t.addEventListener("webglcontextrestored", tt, !1),
        t.addEventListener("webglcontextcreationerror", qe, !1),
        C === null)
      ) {
        const I = "webgl2";
        if (((C = ht(I, x)), C === null))
          throw ht(I)
            ? new Error(
                "Error creating WebGL context with your selected attributes."
              )
            : new Error("Error creating WebGL context.");
      }
    } catch (x) {
      throw (We("WebGLRenderer: " + x.message), x);
    }
    let Xe,
      et,
      ve,
      E,
      m,
      L,
      Y,
      Z,
      k,
      Se,
      ne,
      xe,
      Ae,
      Q,
      se,
      _e,
      Me,
      ie,
      Ne,
      D,
      ce,
      ee,
      de,
      J;
    function K() {
      (Xe = new rf(C)),
        Xe.init(),
        (ee = new jp(C, Xe)),
        (et = new Zd(C, Xe, e, ee)),
        (ve = new Kp(C, Xe)),
        et.reversedDepthBuffer && f && ve.buffers.depth.setReversed(!0),
        (E = new lf(C)),
        (m = new Ip()),
        (L = new Zp(C, Xe, ve, m, et, ee, E)),
        (Y = new $d(g)),
        (Z = new sf(g)),
        (k = new uh(C)),
        (de = new qd(C, k)),
        (Se = new af(C, k, E, de)),
        (ne = new hf(C, Se, k, E)),
        (Ne = new cf(C, et, L)),
        (_e = new jd(m)),
        (xe = new Lp(g, Y, Z, Xe, et, de, _e)),
        (Ae = new nm(g, m)),
        (Q = new Np()),
        (se = new Gp(Xe)),
        (ie = new Yd(g, Y, Z, ve, ne, v, c)),
        (Me = new Yp(g, ne, et)),
        (J = new im(C, E, et, ve)),
        (D = new Kd(C, Xe, E)),
        (ce = new of(C, Xe, E)),
        (E.programs = xe.programs),
        (g.capabilities = et),
        (g.extensions = Xe),
        (g.properties = m),
        (g.renderLists = Q),
        (g.shadowMap = Me),
        (g.state = ve),
        (g.info = E);
    }
    K(), M !== Bt && (F = new df(M, t.width, t.height, s, r));
    const te = new em(g, C);
    (this.xr = te),
      (this.getContext = function () {
        return C;
      }),
      (this.getContextAttributes = function () {
        return C.getContextAttributes();
      }),
      (this.forceContextLoss = function () {
        const x = Xe.get("WEBGL_lose_context");
        x && x.loseContext();
      }),
      (this.forceContextRestore = function () {
        const x = Xe.get("WEBGL_lose_context");
        x && x.restoreContext();
      }),
      (this.getPixelRatio = function () {
        return Ie;
      }),
      (this.setPixelRatio = function (x) {
        x !== void 0 && ((Ie = x), this.setSize(ue, Fe, !1));
      }),
      (this.getSize = function (x) {
        return x.set(ue, Fe);
      }),
      (this.setSize = function (x, I, V = !0) {
        if (te.isPresenting) {
          we("WebGLRenderer: Can't change size while VR device is presenting.");
          return;
        }
        (ue = x),
          (Fe = I),
          (t.width = Math.floor(x * Ie)),
          (t.height = Math.floor(I * Ie)),
          V === !0 && ((t.style.width = x + "px"), (t.style.height = I + "px")),
          F !== null && F.setSize(t.width, t.height),
          this.setViewport(0, 0, x, I);
      }),
      (this.getDrawingBufferSize = function (x) {
        return x.set(ue * Ie, Fe * Ie).floor();
      }),
      (this.setDrawingBufferSize = function (x, I, V) {
        (ue = x),
          (Fe = I),
          (Ie = V),
          (t.width = Math.floor(x * V)),
          (t.height = Math.floor(I * V)),
          this.setViewport(0, 0, x, I);
      }),
      (this.setEffects = function (x) {
        if (M === Bt) {
          console.error(
            "THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType."
          );
          return;
        }
        if (x) {
          for (let I = 0; I < x.length; I++)
            if (x[I].isOutputPass === !0) {
              console.warn(
                "THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically."
              );
              break;
            }
        }
        F.setEffects(x || []);
      }),
      (this.getCurrentViewport = function (x) {
        return x.copy(H);
      }),
      (this.getViewport = function (x) {
        return x.copy(q);
      }),
      (this.setViewport = function (x, I, V, z) {
        x.isVector4 ? q.set(x.x, x.y, x.z, x.w) : q.set(x, I, V, z),
          ve.viewport(H.copy(q).multiplyScalar(Ie).round());
      }),
      (this.getScissor = function (x) {
        return x.copy($);
      }),
      (this.setScissor = function (x, I, V, z) {
        x.isVector4 ? $.set(x.x, x.y, x.z, x.w) : $.set(x, I, V, z),
          ve.scissor(G.copy($).multiplyScalar(Ie).round());
      }),
      (this.getScissorTest = function () {
        return pe;
      }),
      (this.setScissorTest = function (x) {
        ve.setScissorTest((pe = x));
      }),
      (this.setOpaqueSort = function (x) {
        st = x;
      }),
      (this.setTransparentSort = function (x) {
        it = x;
      }),
      (this.getClearColor = function (x) {
        return x.copy(ie.getClearColor());
      }),
      (this.setClearColor = function () {
        ie.setClearColor(...arguments);
      }),
      (this.getClearAlpha = function () {
        return ie.getClearAlpha();
      }),
      (this.setClearAlpha = function () {
        ie.setClearAlpha(...arguments);
      }),
      (this.clear = function (x = !0, I = !0, V = !0) {
        let z = 0;
        if (x) {
          let N = !1;
          if (B !== null) {
            const re = B.texture.format;
            N = p.has(re);
          }
          if (N) {
            const re = B.texture.type,
              fe = h.has(re),
              le = ie.getClearColor(),
              me = ie.getClearAlpha(),
              Ee = le.r,
              be = le.g,
              ye = le.b;
            fe
              ? ((T[0] = Ee),
                (T[1] = be),
                (T[2] = ye),
                (T[3] = me),
                C.clearBufferuiv(C.COLOR, 0, T))
              : ((b[0] = Ee),
                (b[1] = be),
                (b[2] = ye),
                (b[3] = me),
                C.clearBufferiv(C.COLOR, 0, b));
          } else z |= C.COLOR_BUFFER_BIT;
        }
        I && (z |= C.DEPTH_BUFFER_BIT),
          V &&
            ((z |= C.STENCIL_BUFFER_BIT),
            this.state.buffers.stencil.setMask(4294967295)),
          C.clear(z);
      }),
      (this.clearColor = function () {
        this.clear(!0, !1, !1);
      }),
      (this.clearDepth = function () {
        this.clear(!1, !0, !1);
      }),
      (this.clearStencil = function () {
        this.clear(!1, !1, !0);
      }),
      (this.dispose = function () {
        t.removeEventListener("webglcontextlost", Re, !1),
          t.removeEventListener("webglcontextrestored", tt, !1),
          t.removeEventListener("webglcontextcreationerror", qe, !1),
          ie.dispose(),
          Q.dispose(),
          se.dispose(),
          m.dispose(),
          Y.dispose(),
          Z.dispose(),
          ne.dispose(),
          de.dispose(),
          J.dispose(),
          xe.dispose(),
          te.dispose(),
          te.removeEventListener("sessionstart", Ea),
          te.removeEventListener("sessionend", ya),
          Rn.stop();
      });
    function Re(x) {
      x.preventDefault(), Oa("WebGLRenderer: Context Lost."), (S = !0);
    }
    function tt() {
      Oa("WebGLRenderer: Context Restored."), (S = !1);
      const x = E.autoReset,
        I = Me.enabled,
        V = Me.autoUpdate,
        z = Me.needsUpdate,
        N = Me.type;
      K(),
        (E.autoReset = x),
        (Me.enabled = I),
        (Me.autoUpdate = V),
        (Me.needsUpdate = z),
        (Me.type = N);
    }
    function qe(x) {
      We(
        "WebGLRenderer: A WebGL context could not be created. Reason: ",
        x.statusMessage
      );
    }
    function Kt(x) {
      const I = x.target;
      I.removeEventListener("dispose", Kt), an(I);
    }
    function an(x) {
      Ll(x), m.remove(x);
    }
    function Ll(x) {
      const I = m.get(x).programs;
      I !== void 0 &&
        (I.forEach(function (V) {
          xe.releaseProgram(V);
        }),
        x.isShaderMaterial && xe.releaseShaderCache(x));
    }
    this.renderBufferDirect = function (x, I, V, z, N, re) {
      I === null && (I = Je);
      const fe = N.isMesh && N.matrixWorld.determinant() < 0,
        le = Ul(x, I, V, z, N);
      ve.setMaterial(z, fe);
      let me = V.index,
        Ee = 1;
      if (z.wireframe === !0) {
        if (((me = Se.getWireframeAttribute(V)), me === void 0)) return;
        Ee = 2;
      }
      const be = V.drawRange,
        ye = V.attributes.position;
      let Oe = be.start * Ee,
        je = (be.start + be.count) * Ee;
      re !== null &&
        ((Oe = Math.max(Oe, re.start * Ee)),
        (je = Math.min(je, (re.start + re.count) * Ee))),
        me !== null
          ? ((Oe = Math.max(Oe, 0)), (je = Math.min(je, me.count)))
          : ye != null &&
            ((Oe = Math.max(Oe, 0)), (je = Math.min(je, ye.count)));
      const at = je - Oe;
      if (at < 0 || at === 1 / 0) return;
      de.setup(N, z, le, V, me);
      let ot,
        Qe = D;
      if (
        (me !== null && ((ot = k.get(me)), (Qe = ce), Qe.setIndex(ot)),
        N.isMesh)
      )
        z.wireframe === !0
          ? (ve.setLineWidth(z.wireframeLinewidth * ct()), Qe.setMode(C.LINES))
          : Qe.setMode(C.TRIANGLES);
      else if (N.isLine) {
        let Te = z.linewidth;
        Te === void 0 && (Te = 1),
          ve.setLineWidth(Te * ct()),
          N.isLineSegments
            ? Qe.setMode(C.LINES)
            : N.isLineLoop
            ? Qe.setMode(C.LINE_LOOP)
            : Qe.setMode(C.LINE_STRIP);
      } else
        N.isPoints
          ? Qe.setMode(C.POINTS)
          : N.isSprite && Qe.setMode(C.TRIANGLES);
      if (N.isBatchedMesh)
        if (N._multiDrawInstances !== null)
          Ci(
            "WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."
          ),
            Qe.renderMultiDrawInstances(
              N._multiDrawStarts,
              N._multiDrawCounts,
              N._multiDrawCount,
              N._multiDrawInstances
            );
        else if (Xe.get("WEBGL_multi_draw"))
          Qe.renderMultiDraw(
            N._multiDrawStarts,
            N._multiDrawCounts,
            N._multiDrawCount
          );
        else {
          const Te = N._multiDrawStarts,
            Ke = N._multiDrawCounts,
            ke = N._multiDrawCount,
            It = me ? k.get(me).bytesPerElement : 1,
            kn = m.get(z).currentProgram.getUniforms();
          for (let Ut = 0; Ut < ke; Ut++)
            kn.setValue(C, "_gl_DrawID", Ut), Qe.render(Te[Ut] / It, Ke[Ut]);
        }
      else if (N.isInstancedMesh) Qe.renderInstances(Oe, at, N.count);
      else if (V.isInstancedBufferGeometry) {
        const Te = V._maxInstanceCount !== void 0 ? V._maxInstanceCount : 1 / 0,
          Ke = Math.min(V.instanceCount, Te);
        Qe.renderInstances(Oe, at, Ke);
      } else Qe.render(Oe, at);
    };
    function Sa(x, I, V) {
      x.transparent === !0 && x.side === dn && x.forceSinglePass === !1
        ? ((x.side = Lt),
          (x.needsUpdate = !0),
          Vi(x, I, V),
          (x.side = wn),
          (x.needsUpdate = !0),
          Vi(x, I, V),
          (x.side = dn))
        : Vi(x, I, V);
    }
    (this.compile = function (x, I, V = null) {
      V === null && (V = x),
        (A = se.get(V)),
        A.init(I),
        R.push(A),
        V.traverseVisible(function (N) {
          N.isLight &&
            N.layers.test(I.layers) &&
            (A.pushLight(N), N.castShadow && A.pushShadow(N));
        }),
        x !== V &&
          x.traverseVisible(function (N) {
            N.isLight &&
              N.layers.test(I.layers) &&
              (A.pushLight(N), N.castShadow && A.pushShadow(N));
          }),
        A.setupLights();
      const z = new Set();
      return (
        x.traverse(function (N) {
          if (!(N.isMesh || N.isPoints || N.isLine || N.isSprite)) return;
          const re = N.material;
          if (re)
            if (Array.isArray(re))
              for (let fe = 0; fe < re.length; fe++) {
                const le = re[fe];
                Sa(le, V, N), z.add(le);
              }
            else Sa(re, V, N), z.add(re);
        }),
        (A = R.pop()),
        z
      );
    }),
      (this.compileAsync = function (x, I, V = null) {
        const z = this.compile(x, I, V);
        return new Promise((N) => {
          function re() {
            if (
              (z.forEach(function (fe) {
                m.get(fe).currentProgram.isReady() && z.delete(fe);
              }),
              z.size === 0)
            ) {
              N(x);
              return;
            }
            setTimeout(re, 10);
          }
          Xe.get("KHR_parallel_shader_compile") !== null
            ? re()
            : setTimeout(re, 10);
        });
      });
    let ws = null;
    function Il(x) {
      ws && ws(x);
    }
    function Ea() {
      Rn.stop();
    }
    function ya() {
      Rn.start();
    }
    const Rn = new ul();
    Rn.setAnimationLoop(Il),
      typeof self < "u" && Rn.setContext(self),
      (this.setAnimationLoop = function (x) {
        (ws = x), te.setAnimationLoop(x), x === null ? Rn.stop() : Rn.start();
      }),
      te.addEventListener("sessionstart", Ea),
      te.addEventListener("sessionend", ya),
      (this.render = function (x, I) {
        if (I !== void 0 && I.isCamera !== !0) {
          We(
            "WebGLRenderer.render: camera is not an instance of THREE.Camera."
          );
          return;
        }
        if (S === !0) return;
        const V = te.enabled === !0 && te.isPresenting === !0,
          z = F !== null && (B === null || V) && F.begin(g, B);
        if (
          (x.matrixWorldAutoUpdate === !0 && x.updateMatrixWorld(),
          I.parent === null &&
            I.matrixWorldAutoUpdate === !0 &&
            I.updateMatrixWorld(),
          te.enabled === !0 &&
            te.isPresenting === !0 &&
            (F === null || F.isCompositing() === !1) &&
            (te.cameraAutoUpdate === !0 && te.updateCamera(I),
            (I = te.getCamera())),
          x.isScene === !0 && x.onBeforeRender(g, x, I, B),
          (A = se.get(x, R.length)),
          A.init(I),
          R.push(A),
          _t.multiplyMatrices(I.projectionMatrix, I.matrixWorldInverse),
          Pe.setFromProjectionMatrix(_t, Jt, I.reversedDepth),
          (He = this.localClippingEnabled),
          (ge = _e.init(this.clippingPlanes, He)),
          (y = Q.get(x, w.length)),
          y.init(),
          w.push(y),
          te.enabled === !0 && te.isPresenting === !0)
        ) {
          const fe = g.xr.getDepthSensingMesh();
          fe !== null && Rs(fe, I, -1 / 0, g.sortObjects);
        }
        Rs(x, I, 0, g.sortObjects),
          y.finish(),
          g.sortObjects === !0 && y.sort(st, it),
          (Ue =
            te.enabled === !1 ||
            te.isPresenting === !1 ||
            te.hasDepthSensing() === !1),
          Ue && ie.addToRenderList(y, x),
          this.info.render.frame++,
          ge === !0 && _e.beginShadows();
        const N = A.state.shadowsArray;
        if (
          (Me.render(N, x, I),
          ge === !0 && _e.endShadows(),
          this.info.autoReset === !0 && this.info.reset(),
          (z && F.hasRenderPass()) === !1)
        ) {
          const fe = y.opaque,
            le = y.transmissive;
          if ((A.setupLights(), I.isArrayCamera)) {
            const me = I.cameras;
            if (le.length > 0)
              for (let Ee = 0, be = me.length; Ee < be; Ee++) {
                const ye = me[Ee];
                ba(fe, le, x, ye);
              }
            Ue && ie.render(x);
            for (let Ee = 0, be = me.length; Ee < be; Ee++) {
              const ye = me[Ee];
              Ta(y, x, ye, ye.viewport);
            }
          } else
            le.length > 0 && ba(fe, le, x, I), Ue && ie.render(x), Ta(y, x, I);
        }
        B !== null &&
          O === 0 &&
          (L.updateMultisampleRenderTarget(B), L.updateRenderTargetMipmap(B)),
          z && F.end(g),
          x.isScene === !0 && x.onAfterRender(g, x, I),
          de.resetDefaultState(),
          (X = -1),
          (W = null),
          R.pop(),
          R.length > 0
            ? ((A = R[R.length - 1]),
              ge === !0 && _e.setGlobalState(g.clippingPlanes, A.state.camera))
            : (A = null),
          w.pop(),
          w.length > 0 ? (y = w[w.length - 1]) : (y = null);
      });
    function Rs(x, I, V, z) {
      if (x.visible === !1) return;
      if (x.layers.test(I.layers)) {
        if (x.isGroup) V = x.renderOrder;
        else if (x.isLOD) x.autoUpdate === !0 && x.update(I);
        else if (x.isLight) A.pushLight(x), x.castShadow && A.pushShadow(x);
        else if (x.isSprite) {
          if (!x.frustumCulled || Pe.intersectsSprite(x)) {
            z && Ye.setFromMatrixPosition(x.matrixWorld).applyMatrix4(_t);
            const fe = ne.update(x),
              le = x.material;
            le.visible && y.push(x, fe, le, V, Ye.z, null);
          }
        } else if (
          (x.isMesh || x.isLine || x.isPoints) &&
          (!x.frustumCulled || Pe.intersectsObject(x))
        ) {
          const fe = ne.update(x),
            le = x.material;
          if (
            (z &&
              (x.boundingSphere !== void 0
                ? (x.boundingSphere === null && x.computeBoundingSphere(),
                  Ye.copy(x.boundingSphere.center))
                : (fe.boundingSphere === null && fe.computeBoundingSphere(),
                  Ye.copy(fe.boundingSphere.center)),
              Ye.applyMatrix4(x.matrixWorld).applyMatrix4(_t)),
            Array.isArray(le))
          ) {
            const me = fe.groups;
            for (let Ee = 0, be = me.length; Ee < be; Ee++) {
              const ye = me[Ee],
                Oe = le[ye.materialIndex];
              Oe && Oe.visible && y.push(x, fe, Oe, V, Ye.z, ye);
            }
          } else le.visible && y.push(x, fe, le, V, Ye.z, null);
        }
      }
      const re = x.children;
      for (let fe = 0, le = re.length; fe < le; fe++) Rs(re[fe], I, V, z);
    }
    function Ta(x, I, V, z) {
      const { opaque: N, transmissive: re, transparent: fe } = x;
      A.setupLightsView(V),
        ge === !0 && _e.setGlobalState(g.clippingPlanes, V),
        z && ve.viewport(H.copy(z)),
        N.length > 0 && zi(N, I, V),
        re.length > 0 && zi(re, I, V),
        fe.length > 0 && zi(fe, I, V),
        ve.buffers.depth.setTest(!0),
        ve.buffers.depth.setMask(!0),
        ve.buffers.color.setMask(!0),
        ve.setPolygonOffset(!1);
    }
    function ba(x, I, V, z) {
      if ((V.isScene === !0 ? V.overrideMaterial : null) !== null) return;
      if (A.state.transmissionRenderTarget[z.id] === void 0) {
        const Oe =
          Xe.has("EXT_color_buffer_half_float") ||
          Xe.has("EXT_color_buffer_float");
        A.state.transmissionRenderTarget[z.id] = new en(1, 1, {
          generateMipmaps: !0,
          type: Oe ? _n : Bt,
          minFilter: Bn,
          samples: et.samples,
          stencilBuffer: r,
          resolveDepthBuffer: !1,
          resolveStencilBuffer: !1,
          colorSpace: Ge.workingColorSpace,
        });
      }
      const re = A.state.transmissionRenderTarget[z.id],
        fe = z.viewport || H;
      re.setSize(
        fe.z * g.transmissionResolutionScale,
        fe.w * g.transmissionResolutionScale
      );
      const le = g.getRenderTarget(),
        me = g.getActiveCubeFace(),
        Ee = g.getActiveMipmapLevel();
      g.setRenderTarget(re),
        g.getClearColor(he),
        (ae = g.getClearAlpha()),
        ae < 1 && g.setClearColor(16777215, 0.5),
        g.clear(),
        Ue && ie.render(V);
      const be = g.toneMapping;
      g.toneMapping = Qt;
      const ye = z.viewport;
      if (
        (z.viewport !== void 0 && (z.viewport = void 0),
        A.setupLightsView(z),
        ge === !0 && _e.setGlobalState(g.clippingPlanes, z),
        zi(x, V, z),
        L.updateMultisampleRenderTarget(re),
        L.updateRenderTargetMipmap(re),
        Xe.has("WEBGL_multisampled_render_to_texture") === !1)
      ) {
        let Oe = !1;
        for (let je = 0, at = I.length; je < at; je++) {
          const ot = I[je],
            { object: Qe, geometry: Te, material: Ke, group: ke } = ot;
          if (Ke.side === dn && Qe.layers.test(z.layers)) {
            const It = Ke.side;
            (Ke.side = Lt),
              (Ke.needsUpdate = !0),
              Aa(Qe, V, z, Te, Ke, ke),
              (Ke.side = It),
              (Ke.needsUpdate = !0),
              (Oe = !0);
          }
        }
        Oe === !0 &&
          (L.updateMultisampleRenderTarget(re), L.updateRenderTargetMipmap(re));
      }
      g.setRenderTarget(le, me, Ee),
        g.setClearColor(he, ae),
        ye !== void 0 && (z.viewport = ye),
        (g.toneMapping = be);
    }
    function zi(x, I, V) {
      const z = I.isScene === !0 ? I.overrideMaterial : null;
      for (let N = 0, re = x.length; N < re; N++) {
        const fe = x[N],
          { object: le, geometry: me, group: Ee } = fe;
        let be = fe.material;
        be.allowOverride === !0 && z !== null && (be = z),
          le.layers.test(V.layers) && Aa(le, I, V, me, be, Ee);
      }
    }
    function Aa(x, I, V, z, N, re) {
      x.onBeforeRender(g, I, V, z, N, re),
        x.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse, x.matrixWorld),
        x.normalMatrix.getNormalMatrix(x.modelViewMatrix),
        N.onBeforeRender(g, I, V, z, x, re),
        N.transparent === !0 && N.side === dn && N.forceSinglePass === !1
          ? ((N.side = Lt),
            (N.needsUpdate = !0),
            g.renderBufferDirect(V, I, z, N, x, re),
            (N.side = wn),
            (N.needsUpdate = !0),
            g.renderBufferDirect(V, I, z, N, x, re),
            (N.side = dn))
          : g.renderBufferDirect(V, I, z, N, x, re),
        x.onAfterRender(g, I, V, z, N, re);
    }
    function Vi(x, I, V) {
      I.isScene !== !0 && (I = Je);
      const z = m.get(x),
        N = A.state.lights,
        re = A.state.shadowsArray,
        fe = N.state.version,
        le = xe.getParameters(x, N.state, re, I, V),
        me = xe.getProgramCacheKey(le);
      let Ee = z.programs;
      (z.environment = x.isMeshStandardMaterial ? I.environment : null),
        (z.fog = I.fog),
        (z.envMap = (x.isMeshStandardMaterial ? Z : Y).get(
          x.envMap || z.environment
        )),
        (z.envMapRotation =
          z.environment !== null && x.envMap === null
            ? I.environmentRotation
            : x.envMapRotation),
        Ee === void 0 &&
          (x.addEventListener("dispose", Kt),
          (Ee = new Map()),
          (z.programs = Ee));
      let be = Ee.get(me);
      if (be !== void 0) {
        if (z.currentProgram === be && z.lightsStateVersion === fe)
          return Ra(x, le), be;
      } else
        (le.uniforms = xe.getUniforms(x)),
          x.onBeforeCompile(le, g),
          (be = xe.acquireProgram(le, me)),
          Ee.set(me, be),
          (z.uniforms = le.uniforms);
      const ye = z.uniforms;
      return (
        ((!x.isShaderMaterial && !x.isRawShaderMaterial) ||
          x.clipping === !0) &&
          (ye.clippingPlanes = _e.uniform),
        Ra(x, le),
        (z.needsLights = Fl(x)),
        (z.lightsStateVersion = fe),
        z.needsLights &&
          ((ye.ambientLightColor.value = N.state.ambient),
          (ye.lightProbe.value = N.state.probe),
          (ye.directionalLights.value = N.state.directional),
          (ye.directionalLightShadows.value = N.state.directionalShadow),
          (ye.spotLights.value = N.state.spot),
          (ye.spotLightShadows.value = N.state.spotShadow),
          (ye.rectAreaLights.value = N.state.rectArea),
          (ye.ltc_1.value = N.state.rectAreaLTC1),
          (ye.ltc_2.value = N.state.rectAreaLTC2),
          (ye.pointLights.value = N.state.point),
          (ye.pointLightShadows.value = N.state.pointShadow),
          (ye.hemisphereLights.value = N.state.hemi),
          (ye.directionalShadowMap.value = N.state.directionalShadowMap),
          (ye.directionalShadowMatrix.value = N.state.directionalShadowMatrix),
          (ye.spotShadowMap.value = N.state.spotShadowMap),
          (ye.spotLightMatrix.value = N.state.spotLightMatrix),
          (ye.spotLightMap.value = N.state.spotLightMap),
          (ye.pointShadowMap.value = N.state.pointShadowMap),
          (ye.pointShadowMatrix.value = N.state.pointShadowMatrix)),
        (z.currentProgram = be),
        (z.uniformsList = null),
        be
      );
    }
    function wa(x) {
      if (x.uniformsList === null) {
        const I = x.currentProgram.getUniforms();
        x.uniformsList = gs.seqWithValue(I.seq, x.uniforms);
      }
      return x.uniformsList;
    }
    function Ra(x, I) {
      const V = m.get(x);
      (V.outputColorSpace = I.outputColorSpace),
        (V.batching = I.batching),
        (V.batchingColor = I.batchingColor),
        (V.instancing = I.instancing),
        (V.instancingColor = I.instancingColor),
        (V.instancingMorph = I.instancingMorph),
        (V.skinning = I.skinning),
        (V.morphTargets = I.morphTargets),
        (V.morphNormals = I.morphNormals),
        (V.morphColors = I.morphColors),
        (V.morphTargetsCount = I.morphTargetsCount),
        (V.numClippingPlanes = I.numClippingPlanes),
        (V.numIntersection = I.numClipIntersection),
        (V.vertexAlphas = I.vertexAlphas),
        (V.vertexTangents = I.vertexTangents),
        (V.toneMapping = I.toneMapping);
    }
    function Ul(x, I, V, z, N) {
      I.isScene !== !0 && (I = Je), L.resetTextureUnits();
      const re = I.fog,
        fe = z.isMeshStandardMaterial ? I.environment : null,
        le =
          B === null
            ? g.outputColorSpace
            : B.isXRRenderTarget === !0
            ? B.texture.colorSpace
            : ui,
        me = (z.isMeshStandardMaterial ? Z : Y).get(z.envMap || fe),
        Ee =
          z.vertexColors === !0 &&
          !!V.attributes.color &&
          V.attributes.color.itemSize === 4,
        be = !!V.attributes.tangent && (!!z.normalMap || z.anisotropy > 0),
        ye = !!V.morphAttributes.position,
        Oe = !!V.morphAttributes.normal,
        je = !!V.morphAttributes.color;
      let at = Qt;
      z.toneMapped &&
        (B === null || B.isXRRenderTarget === !0) &&
        (at = g.toneMapping);
      const ot =
          V.morphAttributes.position ||
          V.morphAttributes.normal ||
          V.morphAttributes.color,
        Qe = ot !== void 0 ? ot.length : 0,
        Te = m.get(z),
        Ke = A.state.lights;
      if (ge === !0 && (He === !0 || x !== W)) {
        const Tt = x === W && z.id === X;
        _e.setState(z, x, Tt);
      }
      let ke = !1;
      z.version === Te.__version
        ? ((Te.needsLights && Te.lightsStateVersion !== Ke.state.version) ||
            Te.outputColorSpace !== le ||
            (N.isBatchedMesh && Te.batching === !1) ||
            (!N.isBatchedMesh && Te.batching === !0) ||
            (N.isBatchedMesh &&
              Te.batchingColor === !0 &&
              N.colorTexture === null) ||
            (N.isBatchedMesh &&
              Te.batchingColor === !1 &&
              N.colorTexture !== null) ||
            (N.isInstancedMesh && Te.instancing === !1) ||
            (!N.isInstancedMesh && Te.instancing === !0) ||
            (N.isSkinnedMesh && Te.skinning === !1) ||
            (!N.isSkinnedMesh && Te.skinning === !0) ||
            (N.isInstancedMesh &&
              Te.instancingColor === !0 &&
              N.instanceColor === null) ||
            (N.isInstancedMesh &&
              Te.instancingColor === !1 &&
              N.instanceColor !== null) ||
            (N.isInstancedMesh &&
              Te.instancingMorph === !0 &&
              N.morphTexture === null) ||
            (N.isInstancedMesh &&
              Te.instancingMorph === !1 &&
              N.morphTexture !== null) ||
            Te.envMap !== me ||
            (z.fog === !0 && Te.fog !== re) ||
            (Te.numClippingPlanes !== void 0 &&
              (Te.numClippingPlanes !== _e.numPlanes ||
                Te.numIntersection !== _e.numIntersection)) ||
            Te.vertexAlphas !== Ee ||
            Te.vertexTangents !== be ||
            Te.morphTargets !== ye ||
            Te.morphNormals !== Oe ||
            Te.morphColors !== je ||
            Te.toneMapping !== at ||
            Te.morphTargetsCount !== Qe) &&
          (ke = !0)
        : ((ke = !0), (Te.__version = z.version));
      let It = Te.currentProgram;
      ke === !0 && (It = Vi(z, I, N));
      let kn = !1,
        Ut = !1,
        _i = !1;
      const nt = It.getUniforms(),
        Rt = Te.uniforms;
      if (
        (ve.useProgram(It.program) && ((kn = !0), (Ut = !0), (_i = !0)),
        z.id !== X && ((X = z.id), (Ut = !0)),
        kn || W !== x)
      ) {
        ve.buffers.depth.getReversed() &&
          x.reversedDepth !== !0 &&
          ((x._reversedDepth = !0), x.updateProjectionMatrix()),
          nt.setValue(C, "projectionMatrix", x.projectionMatrix),
          nt.setValue(C, "viewMatrix", x.matrixWorldInverse);
        const Ct = nt.map.cameraPosition;
        Ct !== void 0 &&
          Ct.setValue(C, Ve.setFromMatrixPosition(x.matrixWorld)),
          et.logarithmicDepthBuffer &&
            nt.setValue(
              C,
              "logDepthBufFC",
              2 / (Math.log(x.far + 1) / Math.LN2)
            ),
          (z.isMeshPhongMaterial ||
            z.isMeshToonMaterial ||
            z.isMeshLambertMaterial ||
            z.isMeshBasicMaterial ||
            z.isMeshStandardMaterial ||
            z.isShaderMaterial) &&
            nt.setValue(C, "isOrthographic", x.isOrthographicCamera === !0),
          W !== x && ((W = x), (Ut = !0), (_i = !0));
      }
      if (
        (Te.needsLights &&
          (Ke.state.directionalShadowMap.length > 0 &&
            nt.setValue(
              C,
              "directionalShadowMap",
              Ke.state.directionalShadowMap,
              L
            ),
          Ke.state.spotShadowMap.length > 0 &&
            nt.setValue(C, "spotShadowMap", Ke.state.spotShadowMap, L),
          Ke.state.pointShadowMap.length > 0 &&
            nt.setValue(C, "pointShadowMap", Ke.state.pointShadowMap, L)),
        N.isSkinnedMesh)
      ) {
        nt.setOptional(C, N, "bindMatrix"),
          nt.setOptional(C, N, "bindMatrixInverse");
        const Tt = N.skeleton;
        Tt &&
          (Tt.boneTexture === null && Tt.computeBoneTexture(),
          nt.setValue(C, "boneTexture", Tt.boneTexture, L));
      }
      N.isBatchedMesh &&
        (nt.setOptional(C, N, "batchingTexture"),
        nt.setValue(C, "batchingTexture", N._matricesTexture, L),
        nt.setOptional(C, N, "batchingIdTexture"),
        nt.setValue(C, "batchingIdTexture", N._indirectTexture, L),
        nt.setOptional(C, N, "batchingColorTexture"),
        N._colorsTexture !== null &&
          nt.setValue(C, "batchingColorTexture", N._colorsTexture, L));
      const Vt = V.morphAttributes;
      if (
        ((Vt.position !== void 0 ||
          Vt.normal !== void 0 ||
          Vt.color !== void 0) &&
          Ne.update(N, V, It),
        (Ut || Te.receiveShadow !== N.receiveShadow) &&
          ((Te.receiveShadow = N.receiveShadow),
          nt.setValue(C, "receiveShadow", N.receiveShadow)),
        z.isMeshGouraudMaterial &&
          z.envMap !== null &&
          ((Rt.envMap.value = me),
          (Rt.flipEnvMap.value =
            me.isCubeTexture && me.isRenderTargetTexture === !1 ? -1 : 1)),
        z.isMeshStandardMaterial &&
          z.envMap === null &&
          I.environment !== null &&
          (Rt.envMapIntensity.value = I.environmentIntensity),
        Rt.dfgLUT !== void 0 && (Rt.dfgLUT.value = rm()),
        Ut &&
          (nt.setValue(C, "toneMappingExposure", g.toneMappingExposure),
          Te.needsLights && Nl(Rt, _i),
          re && z.fog === !0 && Ae.refreshFogUniforms(Rt, re),
          Ae.refreshMaterialUniforms(
            Rt,
            z,
            Ie,
            Fe,
            A.state.transmissionRenderTarget[x.id]
          ),
          gs.upload(C, wa(Te), Rt, L)),
        z.isShaderMaterial &&
          z.uniformsNeedUpdate === !0 &&
          (gs.upload(C, wa(Te), Rt, L), (z.uniformsNeedUpdate = !1)),
        z.isSpriteMaterial && nt.setValue(C, "center", N.center),
        nt.setValue(C, "modelViewMatrix", N.modelViewMatrix),
        nt.setValue(C, "normalMatrix", N.normalMatrix),
        nt.setValue(C, "modelMatrix", N.matrixWorld),
        z.isShaderMaterial || z.isRawShaderMaterial)
      ) {
        const Tt = z.uniformsGroups;
        for (let Ct = 0, Cs = Tt.length; Ct < Cs; Ct++) {
          const Cn = Tt[Ct];
          J.update(Cn, It), J.bind(Cn, It);
        }
      }
      return It;
    }
    function Nl(x, I) {
      (x.ambientLightColor.needsUpdate = I),
        (x.lightProbe.needsUpdate = I),
        (x.directionalLights.needsUpdate = I),
        (x.directionalLightShadows.needsUpdate = I),
        (x.pointLights.needsUpdate = I),
        (x.pointLightShadows.needsUpdate = I),
        (x.spotLights.needsUpdate = I),
        (x.spotLightShadows.needsUpdate = I),
        (x.rectAreaLights.needsUpdate = I),
        (x.hemisphereLights.needsUpdate = I);
    }
    function Fl(x) {
      return (
        x.isMeshLambertMaterial ||
        x.isMeshToonMaterial ||
        x.isMeshPhongMaterial ||
        x.isMeshStandardMaterial ||
        x.isShadowMaterial ||
        (x.isShaderMaterial && x.lights === !0)
      );
    }
    (this.getActiveCubeFace = function () {
      return P;
    }),
      (this.getActiveMipmapLevel = function () {
        return O;
      }),
      (this.getRenderTarget = function () {
        return B;
      }),
      (this.setRenderTargetTextures = function (x, I, V) {
        const z = m.get(x);
        (z.__autoAllocateDepthBuffer = x.resolveDepthBuffer === !1),
          z.__autoAllocateDepthBuffer === !1 && (z.__useRenderToTexture = !1),
          (m.get(x.texture).__webglTexture = I),
          (m.get(x.depthTexture).__webglTexture = z.__autoAllocateDepthBuffer
            ? void 0
            : V),
          (z.__hasExternalTextures = !0);
      }),
      (this.setRenderTargetFramebuffer = function (x, I) {
        const V = m.get(x);
        (V.__webglFramebuffer = I), (V.__useDefaultFramebuffer = I === void 0);
      });
    const Ol = C.createFramebuffer();
    (this.setRenderTarget = function (x, I = 0, V = 0) {
      (B = x), (P = I), (O = V);
      let z = null,
        N = !1,
        re = !1;
      if (x) {
        const le = m.get(x);
        if (le.__useDefaultFramebuffer !== void 0) {
          ve.bindFramebuffer(C.FRAMEBUFFER, le.__webglFramebuffer),
            H.copy(x.viewport),
            G.copy(x.scissor),
            (j = x.scissorTest),
            ve.viewport(H),
            ve.scissor(G),
            ve.setScissorTest(j),
            (X = -1);
          return;
        } else if (le.__webglFramebuffer === void 0) L.setupRenderTarget(x);
        else if (le.__hasExternalTextures)
          L.rebindTextures(
            x,
            m.get(x.texture).__webglTexture,
            m.get(x.depthTexture).__webglTexture
          );
        else if (x.depthBuffer) {
          const be = x.depthTexture;
          if (le.__boundDepthTexture !== be) {
            if (
              be !== null &&
              m.has(be) &&
              (x.width !== be.image.width || x.height !== be.image.height)
            )
              throw new Error(
                "WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size."
              );
            L.setupDepthRenderbuffer(x);
          }
        }
        const me = x.texture;
        (me.isData3DTexture ||
          me.isDataArrayTexture ||
          me.isCompressedArrayTexture) &&
          (re = !0);
        const Ee = m.get(x).__webglFramebuffer;
        x.isWebGLCubeRenderTarget
          ? (Array.isArray(Ee[I]) ? (z = Ee[I][V]) : (z = Ee[I]), (N = !0))
          : x.samples > 0 && L.useMultisampledRTT(x) === !1
          ? (z = m.get(x).__webglMultisampledFramebuffer)
          : Array.isArray(Ee)
          ? (z = Ee[V])
          : (z = Ee),
          H.copy(x.viewport),
          G.copy(x.scissor),
          (j = x.scissorTest);
      } else
        H.copy(q).multiplyScalar(Ie).floor(),
          G.copy($).multiplyScalar(Ie).floor(),
          (j = pe);
      if (
        (V !== 0 && (z = Ol),
        ve.bindFramebuffer(C.FRAMEBUFFER, z) && ve.drawBuffers(x, z),
        ve.viewport(H),
        ve.scissor(G),
        ve.setScissorTest(j),
        N)
      ) {
        const le = m.get(x.texture);
        C.framebufferTexture2D(
          C.FRAMEBUFFER,
          C.COLOR_ATTACHMENT0,
          C.TEXTURE_CUBE_MAP_POSITIVE_X + I,
          le.__webglTexture,
          V
        );
      } else if (re) {
        const le = I;
        for (let me = 0; me < x.textures.length; me++) {
          const Ee = m.get(x.textures[me]);
          C.framebufferTextureLayer(
            C.FRAMEBUFFER,
            C.COLOR_ATTACHMENT0 + me,
            Ee.__webglTexture,
            V,
            le
          );
        }
      } else if (x !== null && V !== 0) {
        const le = m.get(x.texture);
        C.framebufferTexture2D(
          C.FRAMEBUFFER,
          C.COLOR_ATTACHMENT0,
          C.TEXTURE_2D,
          le.__webglTexture,
          V
        );
      }
      X = -1;
    }),
      (this.readRenderTargetPixels = function (x, I, V, z, N, re, fe, le = 0) {
        if (!(x && x.isWebGLRenderTarget)) {
          We(
            "WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
          );
          return;
        }
        let me = m.get(x).__webglFramebuffer;
        if ((x.isWebGLCubeRenderTarget && fe !== void 0 && (me = me[fe]), me)) {
          ve.bindFramebuffer(C.FRAMEBUFFER, me);
          try {
            const Ee = x.textures[le],
              be = Ee.format,
              ye = Ee.type;
            if (!et.textureFormatReadable(be)) {
              We(
                "WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."
              );
              return;
            }
            if (!et.textureTypeReadable(ye)) {
              We(
                "WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."
              );
              return;
            }
            I >= 0 &&
              I <= x.width - z &&
              V >= 0 &&
              V <= x.height - N &&
              (x.textures.length > 1 && C.readBuffer(C.COLOR_ATTACHMENT0 + le),
              C.readPixels(I, V, z, N, ee.convert(be), ee.convert(ye), re));
          } finally {
            const Ee = B !== null ? m.get(B).__webglFramebuffer : null;
            ve.bindFramebuffer(C.FRAMEBUFFER, Ee);
          }
        }
      }),
      (this.readRenderTargetPixelsAsync = async function (
        x,
        I,
        V,
        z,
        N,
        re,
        fe,
        le = 0
      ) {
        if (!(x && x.isWebGLRenderTarget))
          throw new Error(
            "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
          );
        let me = m.get(x).__webglFramebuffer;
        if ((x.isWebGLCubeRenderTarget && fe !== void 0 && (me = me[fe]), me))
          if (I >= 0 && I <= x.width - z && V >= 0 && V <= x.height - N) {
            ve.bindFramebuffer(C.FRAMEBUFFER, me);
            const Ee = x.textures[le],
              be = Ee.format,
              ye = Ee.type;
            if (!et.textureFormatReadable(be))
              throw new Error(
                "THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format."
              );
            if (!et.textureTypeReadable(ye))
              throw new Error(
                "THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type."
              );
            const Oe = C.createBuffer();
            C.bindBuffer(C.PIXEL_PACK_BUFFER, Oe),
              C.bufferData(C.PIXEL_PACK_BUFFER, re.byteLength, C.STREAM_READ),
              x.textures.length > 1 && C.readBuffer(C.COLOR_ATTACHMENT0 + le),
              C.readPixels(I, V, z, N, ee.convert(be), ee.convert(ye), 0);
            const je = B !== null ? m.get(B).__webglFramebuffer : null;
            ve.bindFramebuffer(C.FRAMEBUFFER, je);
            const at = C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE, 0);
            return (
              C.flush(),
              await vc(C, at, 4),
              C.bindBuffer(C.PIXEL_PACK_BUFFER, Oe),
              C.getBufferSubData(C.PIXEL_PACK_BUFFER, 0, re),
              C.deleteBuffer(Oe),
              C.deleteSync(at),
              re
            );
          } else
            throw new Error(
              "THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range."
            );
      }),
      (this.copyFramebufferToTexture = function (x, I = null, V = 0) {
        const z = Math.pow(2, -V),
          N = Math.floor(x.image.width * z),
          re = Math.floor(x.image.height * z),
          fe = I !== null ? I.x : 0,
          le = I !== null ? I.y : 0;
        L.setTexture2D(x, 0),
          C.copyTexSubImage2D(C.TEXTURE_2D, V, 0, 0, fe, le, N, re),
          ve.unbindTexture();
      });
    const Bl = C.createFramebuffer(),
      zl = C.createFramebuffer();
    (this.copyTextureToTexture = function (
      x,
      I,
      V = null,
      z = null,
      N = 0,
      re = null
    ) {
      re === null &&
        (N !== 0
          ? (Ci(
              "WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."
            ),
            (re = N),
            (N = 0))
          : (re = 0));
      let fe, le, me, Ee, be, ye, Oe, je, at;
      const ot = x.isCompressedTexture ? x.mipmaps[re] : x.image;
      if (V !== null)
        (fe = V.max.x - V.min.x),
          (le = V.max.y - V.min.y),
          (me = V.isBox3 ? V.max.z - V.min.z : 1),
          (Ee = V.min.x),
          (be = V.min.y),
          (ye = V.isBox3 ? V.min.z : 0);
      else {
        const Vt = Math.pow(2, -N);
        (fe = Math.floor(ot.width * Vt)),
          (le = Math.floor(ot.height * Vt)),
          x.isDataArrayTexture
            ? (me = ot.depth)
            : x.isData3DTexture
            ? (me = Math.floor(ot.depth * Vt))
            : (me = 1),
          (Ee = 0),
          (be = 0),
          (ye = 0);
      }
      z !== null
        ? ((Oe = z.x), (je = z.y), (at = z.z))
        : ((Oe = 0), (je = 0), (at = 0));
      const Qe = ee.convert(I.format),
        Te = ee.convert(I.type);
      let Ke;
      I.isData3DTexture
        ? (L.setTexture3D(I, 0), (Ke = C.TEXTURE_3D))
        : I.isDataArrayTexture || I.isCompressedArrayTexture
        ? (L.setTexture2DArray(I, 0), (Ke = C.TEXTURE_2D_ARRAY))
        : (L.setTexture2D(I, 0), (Ke = C.TEXTURE_2D)),
        C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL, I.flipY),
        C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL, I.premultiplyAlpha),
        C.pixelStorei(C.UNPACK_ALIGNMENT, I.unpackAlignment);
      const ke = C.getParameter(C.UNPACK_ROW_LENGTH),
        It = C.getParameter(C.UNPACK_IMAGE_HEIGHT),
        kn = C.getParameter(C.UNPACK_SKIP_PIXELS),
        Ut = C.getParameter(C.UNPACK_SKIP_ROWS),
        _i = C.getParameter(C.UNPACK_SKIP_IMAGES);
      C.pixelStorei(C.UNPACK_ROW_LENGTH, ot.width),
        C.pixelStorei(C.UNPACK_IMAGE_HEIGHT, ot.height),
        C.pixelStorei(C.UNPACK_SKIP_PIXELS, Ee),
        C.pixelStorei(C.UNPACK_SKIP_ROWS, be),
        C.pixelStorei(C.UNPACK_SKIP_IMAGES, ye);
      const nt = x.isDataArrayTexture || x.isData3DTexture,
        Rt = I.isDataArrayTexture || I.isData3DTexture;
      if (x.isDepthTexture) {
        const Vt = m.get(x),
          Tt = m.get(I),
          Ct = m.get(Vt.__renderTarget),
          Cs = m.get(Tt.__renderTarget);
        ve.bindFramebuffer(C.READ_FRAMEBUFFER, Ct.__webglFramebuffer),
          ve.bindFramebuffer(C.DRAW_FRAMEBUFFER, Cs.__webglFramebuffer);
        for (let Cn = 0; Cn < me; Cn++)
          nt &&
            (C.framebufferTextureLayer(
              C.READ_FRAMEBUFFER,
              C.COLOR_ATTACHMENT0,
              m.get(x).__webglTexture,
              N,
              ye + Cn
            ),
            C.framebufferTextureLayer(
              C.DRAW_FRAMEBUFFER,
              C.COLOR_ATTACHMENT0,
              m.get(I).__webglTexture,
              re,
              at + Cn
            )),
            C.blitFramebuffer(
              Ee,
              be,
              fe,
              le,
              Oe,
              je,
              fe,
              le,
              C.DEPTH_BUFFER_BIT,
              C.NEAREST
            );
        ve.bindFramebuffer(C.READ_FRAMEBUFFER, null),
          ve.bindFramebuffer(C.DRAW_FRAMEBUFFER, null);
      } else if (N !== 0 || x.isRenderTargetTexture || m.has(x)) {
        const Vt = m.get(x),
          Tt = m.get(I);
        ve.bindFramebuffer(C.READ_FRAMEBUFFER, Bl),
          ve.bindFramebuffer(C.DRAW_FRAMEBUFFER, zl);
        for (let Ct = 0; Ct < me; Ct++)
          nt
            ? C.framebufferTextureLayer(
                C.READ_FRAMEBUFFER,
                C.COLOR_ATTACHMENT0,
                Vt.__webglTexture,
                N,
                ye + Ct
              )
            : C.framebufferTexture2D(
                C.READ_FRAMEBUFFER,
                C.COLOR_ATTACHMENT0,
                C.TEXTURE_2D,
                Vt.__webglTexture,
                N
              ),
            Rt
              ? C.framebufferTextureLayer(
                  C.DRAW_FRAMEBUFFER,
                  C.COLOR_ATTACHMENT0,
                  Tt.__webglTexture,
                  re,
                  at + Ct
                )
              : C.framebufferTexture2D(
                  C.DRAW_FRAMEBUFFER,
                  C.COLOR_ATTACHMENT0,
                  C.TEXTURE_2D,
                  Tt.__webglTexture,
                  re
                ),
            N !== 0
              ? C.blitFramebuffer(
                  Ee,
                  be,
                  fe,
                  le,
                  Oe,
                  je,
                  fe,
                  le,
                  C.COLOR_BUFFER_BIT,
                  C.NEAREST
                )
              : Rt
              ? C.copyTexSubImage3D(Ke, re, Oe, je, at + Ct, Ee, be, fe, le)
              : C.copyTexSubImage2D(Ke, re, Oe, je, Ee, be, fe, le);
        ve.bindFramebuffer(C.READ_FRAMEBUFFER, null),
          ve.bindFramebuffer(C.DRAW_FRAMEBUFFER, null);
      } else
        Rt
          ? x.isDataTexture || x.isData3DTexture
            ? C.texSubImage3D(Ke, re, Oe, je, at, fe, le, me, Qe, Te, ot.data)
            : I.isCompressedArrayTexture
            ? C.compressedTexSubImage3D(
                Ke,
                re,
                Oe,
                je,
                at,
                fe,
                le,
                me,
                Qe,
                ot.data
              )
            : C.texSubImage3D(Ke, re, Oe, je, at, fe, le, me, Qe, Te, ot)
          : x.isDataTexture
          ? C.texSubImage2D(C.TEXTURE_2D, re, Oe, je, fe, le, Qe, Te, ot.data)
          : x.isCompressedTexture
          ? C.compressedTexSubImage2D(
              C.TEXTURE_2D,
              re,
              Oe,
              je,
              ot.width,
              ot.height,
              Qe,
              ot.data
            )
          : C.texSubImage2D(C.TEXTURE_2D, re, Oe, je, fe, le, Qe, Te, ot);
      C.pixelStorei(C.UNPACK_ROW_LENGTH, ke),
        C.pixelStorei(C.UNPACK_IMAGE_HEIGHT, It),
        C.pixelStorei(C.UNPACK_SKIP_PIXELS, kn),
        C.pixelStorei(C.UNPACK_SKIP_ROWS, Ut),
        C.pixelStorei(C.UNPACK_SKIP_IMAGES, _i),
        re === 0 && I.generateMipmaps && C.generateMipmap(Ke),
        ve.unbindTexture();
    }),
      (this.initRenderTarget = function (x) {
        m.get(x).__webglFramebuffer === void 0 && L.setupRenderTarget(x);
      }),
      (this.initTexture = function (x) {
        x.isCubeTexture
          ? L.setTextureCube(x, 0)
          : x.isData3DTexture
          ? L.setTexture3D(x, 0)
          : x.isDataArrayTexture || x.isCompressedArrayTexture
          ? L.setTexture2DArray(x, 0)
          : L.setTexture2D(x, 0),
          ve.unbindTexture();
      }),
      (this.resetState = function () {
        (P = 0), (O = 0), (B = null), ve.reset(), de.reset();
      }),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this })
        );
  }
  get coordinateSystem() {
    return Jt;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    (t.drawingBufferColorSpace = Ge._getDrawingBufferColorSpace(e)),
      (t.unpackColorSpace = Ge._getUnpackColorSpace());
  }
}
const Lo = { type: "change" },
  xa = { type: "start" },
  _l = { type: "end" },
  hs = new fa(),
  Io = new Tn(),
  om = Math.cos(70 * Sc.DEG2RAD),
  dt = new U(),
  Dt = 2 * Math.PI,
  $e = {
    NONE: -1,
    ROTATE: 0,
    DOLLY: 1,
    PAN: 2,
    TOUCH_ROTATE: 3,
    TOUCH_PAN: 4,
    TOUCH_DOLLY_PAN: 5,
    TOUCH_DOLLY_ROTATE: 6,
  },
  lr = 1e-6;
class lm extends ch {
  constructor(e, t = null) {
    super(e, t),
      (this.state = $e.NONE),
      (this.target = new U()),
      (this.cursor = new U()),
      (this.minDistance = 0),
      (this.maxDistance = 1 / 0),
      (this.minZoom = 0),
      (this.maxZoom = 1 / 0),
      (this.minTargetRadius = 0),
      (this.maxTargetRadius = 1 / 0),
      (this.minPolarAngle = 0),
      (this.maxPolarAngle = Math.PI),
      (this.minAzimuthAngle = -1 / 0),
      (this.maxAzimuthAngle = 1 / 0),
      (this.enableDamping = !1),
      (this.dampingFactor = 0.05),
      (this.enableZoom = !0),
      (this.zoomSpeed = 1),
      (this.enableRotate = !0),
      (this.rotateSpeed = 1),
      (this.keyRotateSpeed = 1),
      (this.enablePan = !0),
      (this.panSpeed = 1),
      (this.screenSpacePanning = !0),
      (this.keyPanSpeed = 7),
      (this.zoomToCursor = !1),
      (this.autoRotate = !1),
      (this.autoRotateSpeed = 2),
      (this.keys = {
        LEFT: "ArrowLeft",
        UP: "ArrowUp",
        RIGHT: "ArrowRight",
        BOTTOM: "ArrowDown",
      }),
      (this.mouseButtons = {
        LEFT: ri.ROTATE,
        MIDDLE: ri.DOLLY,
        RIGHT: ri.PAN,
      }),
      (this.touches = { ONE: si.ROTATE, TWO: si.DOLLY_PAN }),
      (this.target0 = this.target.clone()),
      (this.position0 = this.object.position.clone()),
      (this.zoom0 = this.object.zoom),
      (this._domElementKeyEvents = null),
      (this._lastPosition = new U()),
      (this._lastQuaternion = new Gn()),
      (this._lastTargetPosition = new U()),
      (this._quat = new Gn().setFromUnitVectors(e.up, new U(0, 1, 0))),
      (this._quatInverse = this._quat.clone().invert()),
      (this._spherical = new ao()),
      (this._sphericalDelta = new ao()),
      (this._scale = 1),
      (this._panOffset = new U()),
      (this._rotateStart = new Ce()),
      (this._rotateEnd = new Ce()),
      (this._rotateDelta = new Ce()),
      (this._panStart = new Ce()),
      (this._panEnd = new Ce()),
      (this._panDelta = new Ce()),
      (this._dollyStart = new Ce()),
      (this._dollyEnd = new Ce()),
      (this._dollyDelta = new Ce()),
      (this._dollyDirection = new U()),
      (this._mouse = new Ce()),
      (this._performCursorZoom = !1),
      (this._pointers = []),
      (this._pointerPositions = {}),
      (this._controlActive = !1),
      (this._onPointerMove = hm.bind(this)),
      (this._onPointerDown = cm.bind(this)),
      (this._onPointerUp = um.bind(this)),
      (this._onContextMenu = xm.bind(this)),
      (this._onMouseWheel = pm.bind(this)),
      (this._onKeyDown = mm.bind(this)),
      (this._onTouchStart = _m.bind(this)),
      (this._onTouchMove = gm.bind(this)),
      (this._onMouseDown = dm.bind(this)),
      (this._onMouseMove = fm.bind(this)),
      (this._interceptControlDown = vm.bind(this)),
      (this._interceptControlUp = Mm.bind(this)),
      this.domElement !== null && this.connect(this.domElement),
      this.update();
  }
  connect(e) {
    super.connect(e),
      this.domElement.addEventListener("pointerdown", this._onPointerDown),
      this.domElement.addEventListener("pointercancel", this._onPointerUp),
      this.domElement.addEventListener("contextmenu", this._onContextMenu),
      this.domElement.addEventListener("wheel", this._onMouseWheel, {
        passive: !1,
      }),
      this.domElement
        .getRootNode()
        .addEventListener("keydown", this._interceptControlDown, {
          passive: !0,
          capture: !0,
        }),
      (this.domElement.style.touchAction = "none");
  }
  disconnect() {
    this.domElement.removeEventListener("pointerdown", this._onPointerDown),
      this.domElement.ownerDocument.removeEventListener(
        "pointermove",
        this._onPointerMove
      ),
      this.domElement.ownerDocument.removeEventListener(
        "pointerup",
        this._onPointerUp
      ),
      this.domElement.removeEventListener("pointercancel", this._onPointerUp),
      this.domElement.removeEventListener("wheel", this._onMouseWheel),
      this.domElement.removeEventListener("contextmenu", this._onContextMenu),
      this.stopListenToKeyEvents(),
      this.domElement
        .getRootNode()
        .removeEventListener("keydown", this._interceptControlDown, {
          capture: !0,
        }),
      (this.domElement.style.touchAction = "auto");
  }
  dispose() {
    this.disconnect();
  }
  getPolarAngle() {
    return this._spherical.phi;
  }
  getAzimuthalAngle() {
    return this._spherical.theta;
  }
  getDistance() {
    return this.object.position.distanceTo(this.target);
  }
  listenToKeyEvents(e) {
    e.addEventListener("keydown", this._onKeyDown),
      (this._domElementKeyEvents = e);
  }
  stopListenToKeyEvents() {
    this._domElementKeyEvents !== null &&
      (this._domElementKeyEvents.removeEventListener(
        "keydown",
        this._onKeyDown
      ),
      (this._domElementKeyEvents = null));
  }
  saveState() {
    this.target0.copy(this.target),
      this.position0.copy(this.object.position),
      (this.zoom0 = this.object.zoom);
  }
  reset() {
    this.target.copy(this.target0),
      this.object.position.copy(this.position0),
      (this.object.zoom = this.zoom0),
      this.object.updateProjectionMatrix(),
      this.dispatchEvent(Lo),
      this.update(),
      (this.state = $e.NONE);
  }
  update(e = null) {
    const t = this.object.position;
    dt.copy(t).sub(this.target),
      dt.applyQuaternion(this._quat),
      this._spherical.setFromVector3(dt),
      this.autoRotate &&
        this.state === $e.NONE &&
        this._rotateLeft(this._getAutoRotationAngle(e)),
      this.enableDamping
        ? ((this._spherical.theta +=
            this._sphericalDelta.theta * this.dampingFactor),
          (this._spherical.phi +=
            this._sphericalDelta.phi * this.dampingFactor))
        : ((this._spherical.theta += this._sphericalDelta.theta),
          (this._spherical.phi += this._sphericalDelta.phi));
    let n = this.minAzimuthAngle,
      s = this.maxAzimuthAngle;
    isFinite(n) &&
      isFinite(s) &&
      (n < -Math.PI ? (n += Dt) : n > Math.PI && (n -= Dt),
      s < -Math.PI ? (s += Dt) : s > Math.PI && (s -= Dt),
      n <= s
        ? (this._spherical.theta = Math.max(
            n,
            Math.min(s, this._spherical.theta)
          ))
        : (this._spherical.theta =
            this._spherical.theta > (n + s) / 2
              ? Math.max(n, this._spherical.theta)
              : Math.min(s, this._spherical.theta))),
      (this._spherical.phi = Math.max(
        this.minPolarAngle,
        Math.min(this.maxPolarAngle, this._spherical.phi)
      )),
      this._spherical.makeSafe(),
      this.enableDamping === !0
        ? this.target.addScaledVector(this._panOffset, this.dampingFactor)
        : this.target.add(this._panOffset),
      this.target.sub(this.cursor),
      this.target.clampLength(this.minTargetRadius, this.maxTargetRadius),
      this.target.add(this.cursor);
    let r = !1;
    if (
      (this.zoomToCursor && this._performCursorZoom) ||
      this.object.isOrthographicCamera
    )
      this._spherical.radius = this._clampDistance(this._spherical.radius);
    else {
      const a = this._spherical.radius;
      (this._spherical.radius = this._clampDistance(
        this._spherical.radius * this._scale
      )),
        (r = a != this._spherical.radius);
    }
    if (
      (dt.setFromSpherical(this._spherical),
      dt.applyQuaternion(this._quatInverse),
      t.copy(this.target).add(dt),
      this.object.lookAt(this.target),
      this.enableDamping === !0
        ? ((this._sphericalDelta.theta *= 1 - this.dampingFactor),
          (this._sphericalDelta.phi *= 1 - this.dampingFactor),
          this._panOffset.multiplyScalar(1 - this.dampingFactor))
        : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)),
      this.zoomToCursor && this._performCursorZoom)
    ) {
      let a = null;
      if (this.object.isPerspectiveCamera) {
        const o = dt.length();
        a = this._clampDistance(o * this._scale);
        const c = o - a;
        this.object.position.addScaledVector(this._dollyDirection, c),
          this.object.updateMatrixWorld(),
          (r = !!c);
      } else if (this.object.isOrthographicCamera) {
        const o = new U(this._mouse.x, this._mouse.y, 0);
        o.unproject(this.object);
        const c = this.object.zoom;
        (this.object.zoom = Math.max(
          this.minZoom,
          Math.min(this.maxZoom, this.object.zoom / this._scale)
        )),
          this.object.updateProjectionMatrix(),
          (r = c !== this.object.zoom);
        const l = new U(this._mouse.x, this._mouse.y, 0);
        l.unproject(this.object),
          this.object.position.sub(l).add(o),
          this.object.updateMatrixWorld(),
          (a = dt.length());
      } else
        console.warn(
          "WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."
        ),
          (this.zoomToCursor = !1);
      a !== null &&
        (this.screenSpacePanning
          ? this.target
              .set(0, 0, -1)
              .transformDirection(this.object.matrix)
              .multiplyScalar(a)
              .add(this.object.position)
          : (hs.origin.copy(this.object.position),
            hs.direction.set(0, 0, -1).transformDirection(this.object.matrix),
            Math.abs(this.object.up.dot(hs.direction)) < om
              ? this.object.lookAt(this.target)
              : (Io.setFromNormalAndCoplanarPoint(this.object.up, this.target),
                hs.intersectPlane(Io, this.target))));
    } else if (this.object.isOrthographicCamera) {
      const a = this.object.zoom;
      (this.object.zoom = Math.max(
        this.minZoom,
        Math.min(this.maxZoom, this.object.zoom / this._scale)
      )),
        a !== this.object.zoom &&
          (this.object.updateProjectionMatrix(), (r = !0));
    }
    return (
      (this._scale = 1),
      (this._performCursorZoom = !1),
      r ||
      this._lastPosition.distanceToSquared(this.object.position) > lr ||
      8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > lr ||
      this._lastTargetPosition.distanceToSquared(this.target) > lr
        ? (this.dispatchEvent(Lo),
          this._lastPosition.copy(this.object.position),
          this._lastQuaternion.copy(this.object.quaternion),
          this._lastTargetPosition.copy(this.target),
          !0)
        : !1
    );
  }
  _getAutoRotationAngle(e) {
    return e !== null
      ? (Dt / 60) * this.autoRotateSpeed * e
      : (Dt / 60 / 60) * this.autoRotateSpeed;
  }
  _getZoomScale(e) {
    const t = Math.abs(e * 0.01);
    return Math.pow(0.95, this.zoomSpeed * t);
  }
  _rotateLeft(e) {
    this._sphericalDelta.theta -= e;
  }
  _rotateUp(e) {
    this._sphericalDelta.phi -= e;
  }
  _panLeft(e, t) {
    dt.setFromMatrixColumn(t, 0),
      dt.multiplyScalar(-e),
      this._panOffset.add(dt);
  }
  _panUp(e, t) {
    this.screenSpacePanning === !0
      ? dt.setFromMatrixColumn(t, 1)
      : (dt.setFromMatrixColumn(t, 0), dt.crossVectors(this.object.up, dt)),
      dt.multiplyScalar(e),
      this._panOffset.add(dt);
  }
  _pan(e, t) {
    const n = this.domElement;
    if (this.object.isPerspectiveCamera) {
      const s = this.object.position;
      dt.copy(s).sub(this.target);
      let r = dt.length();
      (r *= Math.tan(((this.object.fov / 2) * Math.PI) / 180)),
        this._panLeft((2 * e * r) / n.clientHeight, this.object.matrix),
        this._panUp((2 * t * r) / n.clientHeight, this.object.matrix);
    } else
      this.object.isOrthographicCamera
        ? (this._panLeft(
            (e * (this.object.right - this.object.left)) /
              this.object.zoom /
              n.clientWidth,
            this.object.matrix
          ),
          this._panUp(
            (t * (this.object.top - this.object.bottom)) /
              this.object.zoom /
              n.clientHeight,
            this.object.matrix
          ))
        : (console.warn(
            "WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."
          ),
          (this.enablePan = !1));
  }
  _dollyOut(e) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera
      ? (this._scale /= e)
      : (console.warn(
          "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
        ),
        (this.enableZoom = !1));
  }
  _dollyIn(e) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera
      ? (this._scale *= e)
      : (console.warn(
          "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
        ),
        (this.enableZoom = !1));
  }
  _updateZoomParameters(e, t) {
    if (!this.zoomToCursor) return;
    this._performCursorZoom = !0;
    const n = this.domElement.getBoundingClientRect(),
      s = e - n.left,
      r = t - n.top,
      a = n.width,
      o = n.height;
    (this._mouse.x = (s / a) * 2 - 1),
      (this._mouse.y = -(r / o) * 2 + 1),
      this._dollyDirection
        .set(this._mouse.x, this._mouse.y, 1)
        .unproject(this.object)
        .sub(this.object.position)
        .normalize();
  }
  _clampDistance(e) {
    return Math.max(this.minDistance, Math.min(this.maxDistance, e));
  }
  _handleMouseDownRotate(e) {
    this._rotateStart.set(e.clientX, e.clientY);
  }
  _handleMouseDownDolly(e) {
    this._updateZoomParameters(e.clientX, e.clientX),
      this._dollyStart.set(e.clientX, e.clientY);
  }
  _handleMouseDownPan(e) {
    this._panStart.set(e.clientX, e.clientY);
  }
  _handleMouseMoveRotate(e) {
    this._rotateEnd.set(e.clientX, e.clientY),
      this._rotateDelta
        .subVectors(this._rotateEnd, this._rotateStart)
        .multiplyScalar(this.rotateSpeed);
    const t = this.domElement;
    this._rotateLeft((Dt * this._rotateDelta.x) / t.clientHeight),
      this._rotateUp((Dt * this._rotateDelta.y) / t.clientHeight),
      this._rotateStart.copy(this._rotateEnd),
      this.update();
  }
  _handleMouseMoveDolly(e) {
    this._dollyEnd.set(e.clientX, e.clientY),
      this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart),
      this._dollyDelta.y > 0
        ? this._dollyOut(this._getZoomScale(this._dollyDelta.y))
        : this._dollyDelta.y < 0 &&
          this._dollyIn(this._getZoomScale(this._dollyDelta.y)),
      this._dollyStart.copy(this._dollyEnd),
      this.update();
  }
  _handleMouseMovePan(e) {
    this._panEnd.set(e.clientX, e.clientY),
      this._panDelta
        .subVectors(this._panEnd, this._panStart)
        .multiplyScalar(this.panSpeed),
      this._pan(this._panDelta.x, this._panDelta.y),
      this._panStart.copy(this._panEnd),
      this.update();
  }
  _handleMouseWheel(e) {
    this._updateZoomParameters(e.clientX, e.clientY),
      e.deltaY < 0
        ? this._dollyIn(this._getZoomScale(e.deltaY))
        : e.deltaY > 0 && this._dollyOut(this._getZoomScale(e.deltaY)),
      this.update();
  }
  _handleKeyDown(e) {
    let t = !1;
    switch (e.code) {
      case this.keys.UP:
        e.ctrlKey || e.metaKey || e.shiftKey
          ? this.enableRotate &&
            this._rotateUp(
              (Dt * this.keyRotateSpeed) / this.domElement.clientHeight
            )
          : this.enablePan && this._pan(0, this.keyPanSpeed),
          (t = !0);
        break;
      case this.keys.BOTTOM:
        e.ctrlKey || e.metaKey || e.shiftKey
          ? this.enableRotate &&
            this._rotateUp(
              (-Dt * this.keyRotateSpeed) / this.domElement.clientHeight
            )
          : this.enablePan && this._pan(0, -this.keyPanSpeed),
          (t = !0);
        break;
      case this.keys.LEFT:
        e.ctrlKey || e.metaKey || e.shiftKey
          ? this.enableRotate &&
            this._rotateLeft(
              (Dt * this.keyRotateSpeed) / this.domElement.clientHeight
            )
          : this.enablePan && this._pan(this.keyPanSpeed, 0),
          (t = !0);
        break;
      case this.keys.RIGHT:
        e.ctrlKey || e.metaKey || e.shiftKey
          ? this.enableRotate &&
            this._rotateLeft(
              (-Dt * this.keyRotateSpeed) / this.domElement.clientHeight
            )
          : this.enablePan && this._pan(-this.keyPanSpeed, 0),
          (t = !0);
        break;
    }
    t && (e.preventDefault(), this.update());
  }
  _handleTouchStartRotate(e) {
    if (this._pointers.length === 1) this._rotateStart.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e),
        n = 0.5 * (e.pageX + t.x),
        s = 0.5 * (e.pageY + t.y);
      this._rotateStart.set(n, s);
    }
  }
  _handleTouchStartPan(e) {
    if (this._pointers.length === 1) this._panStart.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e),
        n = 0.5 * (e.pageX + t.x),
        s = 0.5 * (e.pageY + t.y);
      this._panStart.set(n, s);
    }
  }
  _handleTouchStartDolly(e) {
    const t = this._getSecondPointerPosition(e),
      n = e.pageX - t.x,
      s = e.pageY - t.y,
      r = Math.sqrt(n * n + s * s);
    this._dollyStart.set(0, r);
  }
  _handleTouchStartDollyPan(e) {
    this.enableZoom && this._handleTouchStartDolly(e),
      this.enablePan && this._handleTouchStartPan(e);
  }
  _handleTouchStartDollyRotate(e) {
    this.enableZoom && this._handleTouchStartDolly(e),
      this.enableRotate && this._handleTouchStartRotate(e);
  }
  _handleTouchMoveRotate(e) {
    if (this._pointers.length == 1) this._rotateEnd.set(e.pageX, e.pageY);
    else {
      const n = this._getSecondPointerPosition(e),
        s = 0.5 * (e.pageX + n.x),
        r = 0.5 * (e.pageY + n.y);
      this._rotateEnd.set(s, r);
    }
    this._rotateDelta
      .subVectors(this._rotateEnd, this._rotateStart)
      .multiplyScalar(this.rotateSpeed);
    const t = this.domElement;
    this._rotateLeft((Dt * this._rotateDelta.x) / t.clientHeight),
      this._rotateUp((Dt * this._rotateDelta.y) / t.clientHeight),
      this._rotateStart.copy(this._rotateEnd);
  }
  _handleTouchMovePan(e) {
    if (this._pointers.length === 1) this._panEnd.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e),
        n = 0.5 * (e.pageX + t.x),
        s = 0.5 * (e.pageY + t.y);
      this._panEnd.set(n, s);
    }
    this._panDelta
      .subVectors(this._panEnd, this._panStart)
      .multiplyScalar(this.panSpeed),
      this._pan(this._panDelta.x, this._panDelta.y),
      this._panStart.copy(this._panEnd);
  }
  _handleTouchMoveDolly(e) {
    const t = this._getSecondPointerPosition(e),
      n = e.pageX - t.x,
      s = e.pageY - t.y,
      r = Math.sqrt(n * n + s * s);
    this._dollyEnd.set(0, r),
      this._dollyDelta.set(
        0,
        Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed)
      ),
      this._dollyOut(this._dollyDelta.y),
      this._dollyStart.copy(this._dollyEnd);
    const a = (e.pageX + t.x) * 0.5,
      o = (e.pageY + t.y) * 0.5;
    this._updateZoomParameters(a, o);
  }
  _handleTouchMoveDollyPan(e) {
    this.enableZoom && this._handleTouchMoveDolly(e),
      this.enablePan && this._handleTouchMovePan(e);
  }
  _handleTouchMoveDollyRotate(e) {
    this.enableZoom && this._handleTouchMoveDolly(e),
      this.enableRotate && this._handleTouchMoveRotate(e);
  }
  _addPointer(e) {
    this._pointers.push(e.pointerId);
  }
  _removePointer(e) {
    delete this._pointerPositions[e.pointerId];
    for (let t = 0; t < this._pointers.length; t++)
      if (this._pointers[t] == e.pointerId) {
        this._pointers.splice(t, 1);
        return;
      }
  }
  _isTrackingPointer(e) {
    for (let t = 0; t < this._pointers.length; t++)
      if (this._pointers[t] == e.pointerId) return !0;
    return !1;
  }
  _trackPointer(e) {
    let t = this._pointerPositions[e.pointerId];
    t === void 0 && ((t = new Ce()), (this._pointerPositions[e.pointerId] = t)),
      t.set(e.pageX, e.pageY);
  }
  _getSecondPointerPosition(e) {
    const t =
      e.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
    return this._pointerPositions[t];
  }
  _customWheelEvent(e) {
    const t = e.deltaMode,
      n = { clientX: e.clientX, clientY: e.clientY, deltaY: e.deltaY };
    switch (t) {
      case 1:
        n.deltaY *= 16;
        break;
      case 2:
        n.deltaY *= 100;
        break;
    }
    return e.ctrlKey && !this._controlActive && (n.deltaY *= 10), n;
  }
}
function cm(i) {
  this.enabled !== !1 &&
    (this._pointers.length === 0 &&
      (this.domElement.setPointerCapture(i.pointerId),
      this.domElement.ownerDocument.addEventListener(
        "pointermove",
        this._onPointerMove
      ),
      this.domElement.ownerDocument.addEventListener(
        "pointerup",
        this._onPointerUp
      )),
    !this._isTrackingPointer(i) &&
      (this._addPointer(i),
      i.pointerType === "touch"
        ? this._onTouchStart(i)
        : this._onMouseDown(i)));
}
function hm(i) {
  this.enabled !== !1 &&
    (i.pointerType === "touch" ? this._onTouchMove(i) : this._onMouseMove(i));
}
function um(i) {
  switch ((this._removePointer(i), this._pointers.length)) {
    case 0:
      this.domElement.releasePointerCapture(i.pointerId),
        this.domElement.ownerDocument.removeEventListener(
          "pointermove",
          this._onPointerMove
        ),
        this.domElement.ownerDocument.removeEventListener(
          "pointerup",
          this._onPointerUp
        ),
        this.dispatchEvent(_l),
        (this.state = $e.NONE);
      break;
    case 1:
      const e = this._pointers[0],
        t = this._pointerPositions[e];
      this._onTouchStart({ pointerId: e, pageX: t.x, pageY: t.y });
      break;
  }
}
function dm(i) {
  let e;
  switch (i.button) {
    case 0:
      e = this.mouseButtons.LEFT;
      break;
    case 1:
      e = this.mouseButtons.MIDDLE;
      break;
    case 2:
      e = this.mouseButtons.RIGHT;
      break;
    default:
      e = -1;
  }
  switch (e) {
    case ri.DOLLY:
      if (this.enableZoom === !1) return;
      this._handleMouseDownDolly(i), (this.state = $e.DOLLY);
      break;
    case ri.ROTATE:
      if (i.ctrlKey || i.metaKey || i.shiftKey) {
        if (this.enablePan === !1) return;
        this._handleMouseDownPan(i), (this.state = $e.PAN);
      } else {
        if (this.enableRotate === !1) return;
        this._handleMouseDownRotate(i), (this.state = $e.ROTATE);
      }
      break;
    case ri.PAN:
      if (i.ctrlKey || i.metaKey || i.shiftKey) {
        if (this.enableRotate === !1) return;
        this._handleMouseDownRotate(i), (this.state = $e.ROTATE);
      } else {
        if (this.enablePan === !1) return;
        this._handleMouseDownPan(i), (this.state = $e.PAN);
      }
      break;
    default:
      this.state = $e.NONE;
  }
  this.state !== $e.NONE && this.dispatchEvent(xa);
}
function fm(i) {
  switch (this.state) {
    case $e.ROTATE:
      if (this.enableRotate === !1) return;
      this._handleMouseMoveRotate(i);
      break;
    case $e.DOLLY:
      if (this.enableZoom === !1) return;
      this._handleMouseMoveDolly(i);
      break;
    case $e.PAN:
      if (this.enablePan === !1) return;
      this._handleMouseMovePan(i);
      break;
  }
}
function pm(i) {
  this.enabled === !1 ||
    this.enableZoom === !1 ||
    this.state !== $e.NONE ||
    (i.preventDefault(),
    this.dispatchEvent(xa),
    this._handleMouseWheel(this._customWheelEvent(i)),
    this.dispatchEvent(_l));
}
function mm(i) {
  this.enabled !== !1 && this._handleKeyDown(i);
}
function _m(i) {
  switch ((this._trackPointer(i), this._pointers.length)) {
    case 1:
      switch (this.touches.ONE) {
        case si.ROTATE:
          if (this.enableRotate === !1) return;
          this._handleTouchStartRotate(i), (this.state = $e.TOUCH_ROTATE);
          break;
        case si.PAN:
          if (this.enablePan === !1) return;
          this._handleTouchStartPan(i), (this.state = $e.TOUCH_PAN);
          break;
        default:
          this.state = $e.NONE;
      }
      break;
    case 2:
      switch (this.touches.TWO) {
        case si.DOLLY_PAN:
          if (this.enableZoom === !1 && this.enablePan === !1) return;
          this._handleTouchStartDollyPan(i), (this.state = $e.TOUCH_DOLLY_PAN);
          break;
        case si.DOLLY_ROTATE:
          if (this.enableZoom === !1 && this.enableRotate === !1) return;
          this._handleTouchStartDollyRotate(i),
            (this.state = $e.TOUCH_DOLLY_ROTATE);
          break;
        default:
          this.state = $e.NONE;
      }
      break;
    default:
      this.state = $e.NONE;
  }
  this.state !== $e.NONE && this.dispatchEvent(xa);
}
function gm(i) {
  switch ((this._trackPointer(i), this.state)) {
    case $e.TOUCH_ROTATE:
      if (this.enableRotate === !1) return;
      this._handleTouchMoveRotate(i), this.update();
      break;
    case $e.TOUCH_PAN:
      if (this.enablePan === !1) return;
      this._handleTouchMovePan(i), this.update();
      break;
    case $e.TOUCH_DOLLY_PAN:
      if (this.enableZoom === !1 && this.enablePan === !1) return;
      this._handleTouchMoveDollyPan(i), this.update();
      break;
    case $e.TOUCH_DOLLY_ROTATE:
      if (this.enableZoom === !1 && this.enableRotate === !1) return;
      this._handleTouchMoveDollyRotate(i), this.update();
      break;
    default:
      this.state = $e.NONE;
  }
}
function xm(i) {
  this.enabled !== !1 && i.preventDefault();
}
function vm(i) {
  i.key === "Control" &&
    ((this._controlActive = !0),
    this.domElement
      .getRootNode()
      .addEventListener("keyup", this._interceptControlUp, {
        passive: !0,
        capture: !0,
      }));
}
function Mm(i) {
  i.key === "Control" &&
    ((this._controlActive = !1),
    this.domElement
      .getRootNode()
      .removeEventListener("keyup", this._interceptControlUp, {
        passive: !0,
        capture: !0,
      }));
}
const wt = new Xc();
wt.background = new ze(8900331);
const Di = new Ot(75, window.innerWidth / window.innerHeight, 0.1, 100);
Di.position.set(5, 4, 6);
const Bi = new am({ antialias: !0 });
Bi.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(Bi.domElement);
const gl = new lm(Di, Bi.domElement);
gl.enableDamping = !0;
const Sm = new lh(5);
wt.add(Sm);
const va = new Oi({ color: 16777215 }),
  xl = new xt(new pi(1, 32, 32), va);
xl.position.y = 1;
wt.add(xl);
const vl = new xt(new pi(0.7, 32, 32), va);
vl.position.y = 2.3;
wt.add(vl);
const Ml = new xt(new pi(0.5, 32, 32), va);
Ml.position.y = 3.3;
wt.add(Ml);
const Sl = new Oi({ color: 0 }),
  El = new pi(0.07, 16, 16),
  yl = new xt(El, Sl);
yl.position.set(-0.17, 3.38, 0.45);
wt.add(yl);
const Tl = new xt(El, Sl);
Tl.position.set(0.17, 3.38, 0.45);
wt.add(Tl);
const Em = new Oi({ color: 16753920 }),
  Ma = new xt(new ma(0.1, 0.6, 16), Em);
Ma.position.set(0, 3.25, 0.55);
Ma.rotation.x = Math.PI / 2;
wt.add(Ma);
const bl = new Oi({ color: 0 }),
  Al = new xt(new Ni(0.7, 0.7, 0.1, 32), bl);
Al.position.y = 3.7;
wt.add(Al);
const wl = new xt(new Ni(0.4, 0.4, 0.8, 32), bl);
wl.position.y = 4.15;
wt.add(wl);
const ym = new ah(16777215, 0.4);
wt.add(ym);
const Rl = new rh(16777215, 1);
Rl.position.set(5, 10, 7);
wt.add(Rl);
const Cl = new ih(16777215, 0.5, 20);
Cl.position.set(-4, 3, -4);
wt.add(Cl);
const Tm = new Oi({ color: 16777215 }),
  Pl = new xt(new Fi(20, 20), Tm);
Pl.rotation.x = -Math.PI / 2;
wt.add(Pl);
window.addEventListener("resize", () => {
  (Di.aspect = window.innerWidth / window.innerHeight),
    Di.updateProjectionMatrix(),
    Bi.setSize(window.innerWidth, window.innerHeight);
});
function Dl() {
  requestAnimationFrame(Dl), gl.update(), Bi.render(wt, Di);
}
Dl();
