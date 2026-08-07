//#region node_modules/svelte/src/internal/disclose-version.js
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
//#endregion
//#region node_modules/svelte/src/constants.js
var e = {}, t = Symbol("uninitialized"), n = "http://www.w3.org/1999/xhtml", r = "http://www.w3.org/2000/svg", i = "http://www.w3.org/1998/Math/MathML", a = Array.isArray, o = Array.prototype.indexOf, s = Array.prototype.includes, c = Array.from, l = Object.keys, u = Object.defineProperty, d = Object.getOwnPropertyDescriptor, f = Object.getOwnPropertyDescriptors, p = Object.prototype, m = Array.prototype, h = Object.getPrototypeOf, g = Object.isExtensible, _ = () => {};
function v(e) {
	for (var t = 0; t < e.length; t++) e[t]();
}
function y() {
	var e, t;
	return {
		promise: new Promise((n, r) => {
			e = n, t = r;
		}),
		resolve: e,
		reject: t
	};
}
var b = 1024, x = 2048, S = 4096, C = 8192, ee = 16384, te = 32768, ne = 1 << 25, re = 65536, ie = 1 << 19, ae = 1 << 20, oe = 1 << 25, se = 65536, ce = 1 << 21, le = 1 << 22, ue = 1 << 23, de = Symbol("$state"), fe = Symbol("legacy props"), pe = Symbol(""), me = Symbol("attributes"), he = Symbol("class"), ge = Symbol("style"), _e = Symbol("text"), ve = Symbol("form reset"), ye = new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), be = !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml");
//#endregion
//#region node_modules/svelte/src/internal/client/errors.js
function xe() {
	throw Error("https://svelte.dev/e/async_derived_orphan");
}
function Se(e, t, n) {
	throw Error("https://svelte.dev/e/each_key_duplicate");
}
function Ce(e) {
	throw Error("https://svelte.dev/e/effect_in_teardown");
}
function we() {
	throw Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Te(e) {
	throw Error("https://svelte.dev/e/effect_orphan");
}
function Ee() {
	throw Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function De() {
	throw Error("https://svelte.dev/e/hydration_failed");
}
function Oe(e) {
	throw Error("https://svelte.dev/e/props_invalid_value");
}
function ke() {
	throw Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ae() {
	throw Error("https://svelte.dev/e/state_prototype_fixed");
}
function je() {
	throw Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Me() {
	throw Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Ne() {
	console.warn("https://svelte.dev/e/derived_inert");
}
function Pe(e) {
	console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Fe() {
	console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/hydration.js
var w = !1;
function Ie(e) {
	w = e;
}
var T;
function E(t) {
	if (t === null) throw Pe(), e;
	return T = t;
}
function Le() {
	return E(/* @__PURE__ */ R(T));
}
function D(t) {
	if (w) {
		if (/* @__PURE__ */ R(T) !== null) throw Pe(), e;
		T = t;
	}
}
function Re(e = 1) {
	if (w) {
		for (var t = e, n = T; t--;) n = /* @__PURE__ */ R(n);
		T = n;
	}
}
function ze(e = !0) {
	for (var t = 0, n = T;;) {
		if (n.nodeType === 8) {
			var r = n.data;
			if (r === "]") {
				if (t === 0) return n;
				--t;
			} else (r === "[" || r === "[!" || r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1);
		}
		var i = /* @__PURE__ */ R(n);
		e && n.remove(), n = i;
	}
}
function Be(t) {
	if (!t || t.nodeType !== 8) throw Pe(), e;
	return t.data;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/equality.js
function Ve(e) {
	return e === this.v;
}
function He(e, t) {
	return e == e ? e !== t || typeof e == "object" && !!e || typeof e == "function" : t == t;
}
function Ue(e) {
	return !He(e, this.v);
}
//#endregion
//#region node_modules/svelte/src/internal/client/context.js
var O = null;
function We(e) {
	O = e;
}
function Ge(e, t = !1, n) {
	O = {
		p: O,
		i: !1,
		c: null,
		e: null,
		s: e,
		x: null,
		r: K,
		l: null
	};
}
function Ke(e) {
	var t = O, n = t.e;
	if (n !== null) {
		t.e = null;
		for (var r of n) gn(r);
	}
	return e !== void 0 && (t.x = e), t.i = !0, O = t.p, e ?? {};
}
function qe() {
	return !0;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/task.js
var Je = [];
function Ye() {
	var e = Je;
	Je = [], v(e);
}
function k(e) {
	if (Je.length === 0 && !kt) {
		var t = Je;
		queueMicrotask(() => {
			t === Je && Ye();
		});
	}
	Je.push(e);
}
function Xe() {
	for (; Je.length > 0;) Ye();
}
function Ze(e) {
	var t = K;
	if (t === null) return U.f |= ue, e;
	if (!(t.f & 32768) && !(t.f & 4)) throw e;
	Qe(e, t);
}
function Qe(e, t) {
	if (!(t !== null && t.f & 16384)) {
		for (; t !== null;) {
			if (t.f & 128) {
				if (!(t.f & 32768)) throw e;
				try {
					t.b.error(e);
					return;
				} catch (t) {
					e = t;
				}
			}
			t = t.parent;
		}
		throw e;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/status.js
var $e = ~(x | S | b);
function A(e, t) {
	e.f = e.f & $e | t;
}
function et(e) {
	e.f & 512 || e.deps === null ? A(e, b) : A(e, S);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/utils.js
function tt(e) {
	if (e !== null) for (let t of e) !(t.f & 2) || !(t.f & 65536) || (t.f ^= se, tt(t.deps));
}
function nt(e, t, n) {
	e.f & 2048 ? t.add(e) : e.f & 4096 && n.add(e), tt(e.deps), A(e, b);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/store.js
var rt = !1;
function it(e) {
	var t = rt;
	try {
		return rt = !1, [e(), rt];
	} finally {
		rt = t;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/misc.js
var at = !1;
function ot() {
	at || (at = !0, document.addEventListener("reset", (e) => {
		Promise.resolve().then(() => {
			if (!e.defaultPrevented) for (let t of e.target.elements) t[ve]?.();
		});
	}, { capture: !0 }));
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
function st(e) {
	var t = U, n = K;
	G(null), Rn(null);
	try {
		return e();
	} finally {
		G(t), Rn(n);
	}
}
function ct(e, t, n, r = n) {
	e.addEventListener(t, () => st(n));
	let i = e[ve];
	e[ve] = i ? () => {
		i(), r(!0);
	} : () => r(!0), ot();
}
//#endregion
//#region node_modules/svelte/src/reactivity/create-subscriber.js
function lt(e) {
	let t = 0, n = Kt(0), r;
	return () => {
		pn() && (X(n), xn(() => (t === 0 && (r = nr(() => e(() => Xt(n)))), t += 1, () => {
			k(() => {
				--t, t === 0 && (r?.(), r = void 0, Xt(n));
			});
		})));
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/boundary.js
var ut = re | ie;
function dt(e, t, n, r) {
	new ft(e, t, n, r);
}
var ft = class {
	parent;
	is_pending = !1;
	transform_error;
	#e;
	#t = w ? T : null;
	#n;
	#r;
	#i;
	#a = null;
	#o = null;
	#s = null;
	#c = null;
	#l = 0;
	#u = 0;
	#d = !1;
	#f = /* @__PURE__ */ new Set();
	#p = /* @__PURE__ */ new Set();
	#m = null;
	#h = lt(() => (this.#m = Kt(this.#l), () => {
		this.#m = null;
	}));
	constructor(e, t, n, r) {
		this.#e = e, this.#n = t, this.#r = (e) => {
			var t = K;
			t.b = this, t.f |= 128, n(e);
		}, this.parent = K.b, this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e), this.#i = Cn(() => {
			if (w) {
				let e = this.#t;
				Le();
				let t = e.data === "[!";
				if (e.data.startsWith("[?")) {
					let t = JSON.parse(e.data.slice(2));
					this.#_(t);
				} else t ? this.#y() : this.#g();
			} else this.#b();
		}, ut), w && (this.#e = T);
	}
	#g() {
		try {
			this.#a = V(() => this.#r(this.#e));
		} catch (e) {
			this.error(e);
		}
	}
	#_(e) {
		let t = this.#n.failed, { reset: n, invoke_onerror: r } = this.#v(e);
		k(r), t && (this.#s = V(() => {
			t(this.#e, () => e, () => n);
		}));
	}
	#v(e) {
		var t = !1, n = !1;
		let r = () => {
			if (t) {
				Fe();
				return;
			}
			t = !0, n && Me(), this.#s !== null && kn(this.#s, () => {
				this.#s = null;
			}), this.#S(() => {
				this.#b();
			});
		};
		return {
			reset: r,
			invoke_onerror: () => {
				try {
					n = !0, this.#n.onerror?.(e, r), n = !1;
				} catch (e) {
					Qe(e, this.#i && this.#i.parent);
				}
			}
		};
	}
	#y() {
		let e = this.#n.pending;
		e && (this.is_pending = !0, this.#o = V(() => e(this.#e)), k(() => {
			var e = this.#c = document.createDocumentFragment(), t = I();
			e.append(t), this.#a = this.#S(() => V(() => this.#r(t))), this.#u === 0 && (this.#e.before(e), this.#c = null, kn(this.#o, () => {
				this.#o = null;
			}), this.#x(M));
		}));
	}
	#b() {
		try {
			if (this.is_pending = this.has_pending_snippet(), this.#u = 0, this.#l = 0, this.#a = V(() => {
				this.#r(this.#e);
			}), this.#u > 0) {
				var e = this.#c = document.createDocumentFragment();
				Nn(this.#a, e);
				let t = this.#n.pending;
				this.#o = V(() => t(this.#e));
			} else this.#x(M);
		} catch (e) {
			this.error(e);
		}
	}
	#x(e) {
		this.is_pending = !1, e.transfer_effects(this.#f, this.#p);
	}
	defer_effect(e) {
		nt(e, this.#f, this.#p);
	}
	is_rendered() {
		return !this.is_pending && (!this.parent || this.parent.is_rendered());
	}
	has_pending_snippet() {
		return !!this.#n.pending;
	}
	#S(e) {
		var t = K, n = U, r = O;
		Rn(this.#i), G(this.#i), We(this.#i.ctx);
		try {
			return Ft.ensure(), e();
		} catch (e) {
			return Ze(e), null;
		} finally {
			Rn(t), G(n), We(r);
		}
	}
	#C(e, t) {
		if (!this.has_pending_snippet()) {
			this.parent && this.parent.#C(e, t);
			return;
		}
		this.#u += e, this.#u === 0 && (this.#x(t), this.#o && kn(this.#o, () => {
			this.#o = null;
		}), this.#c &&= (this.#e.before(this.#c), null));
	}
	update_pending_count(e, t) {
		this.#C(e, t), this.#l += e, !(!this.#m || this.#d) && (this.#d = !0, k(() => {
			this.#d = !1, this.#m && Jt(this.#m, this.#l);
		}));
	}
	get_effect_pending() {
		return this.#h(), X(this.#m);
	}
	error(e) {
		if (!this.#n.onerror && !this.#n.failed) throw e;
		M?.is_fork ? (this.#a && M.skip_effect(this.#a), this.#o && M.skip_effect(this.#o), this.#s && M.skip_effect(this.#s), M.oncommit(() => {
			this.#w(e);
		})) : this.#w(e);
	}
	#w(e) {
		this.#a &&= (H(this.#a), null), this.#o &&= (H(this.#o), null), this.#s &&= (H(this.#s), null), w && (E(this.#t), Re(), E(ze()));
		let t = this.#n.failed, n = (e) => {
			let { reset: n, invoke_onerror: r } = this.#v(e);
			r(), t && (this.#s = this.#S(() => {
				try {
					return V(() => {
						var r = K;
						r.b = this, r.f |= 128, t(this.#e, () => e, () => n);
					});
				} catch (e) {
					return Qe(e, this.#i.parent), null;
				}
			}));
		};
		k(() => {
			var t;
			try {
				t = this.transform_error(e);
			} catch (e) {
				Qe(e, this.#i && this.#i.parent);
				return;
			}
			typeof t == "object" && t && typeof t.then == "function" ? t.then(n, (e) => Qe(e, this.#i && this.#i.parent)) : n(t);
		});
	}
};
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/async.js
function pt(e, t, n, r) {
	let i = qe() ? _t : bt;
	var a = e.filter((e) => !e.settled), o = t.map(i);
	if (n.length === 0 && a.length === 0) {
		r(o);
		return;
	}
	var s = K, c = mt(), l = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((e) => e.promise)) : null;
	function u(e) {
		if (!(s.f & 16384)) {
			c();
			try {
				r([...o, ...e]);
			} catch (e) {
				Qe(e, s);
			}
			ht();
		}
	}
	var d = gt();
	if (n.length === 0) {
		l.then(() => u([])).finally(d);
		return;
	}
	function f() {
		Promise.all(n.map((e) => /* @__PURE__ */ yt(e))).then(u).catch((e) => Qe(e, s)).finally(d);
	}
	l ? l.then(() => {
		c(), f(), ht();
	}) : f();
}
function mt() {
	var e = K, t = U, n = O, r = M;
	return function(i = !0) {
		Rn(e), G(t), We(n), i && !(e.f & 16384) && (r?.activate(), r?.apply());
	};
}
function ht(e = !0) {
	Rn(null), G(null), We(null), e && M?.deactivate();
}
function gt() {
	var e = K, t = e.b, n = M, r = !!t?.is_rendered();
	return t?.update_pending_count(1, n), n.increment(r, e), () => {
		t?.update_pending_count(-1, n), n.decrement(r, e);
	};
}
/*#__NO_SIDE_EFFECTS__*/
function _t(e) {
	var n = 2 | x;
	return K !== null && (K.f |= ie), {
		ctx: O,
		deps: null,
		effects: null,
		equals: Ve,
		f: n,
		fn: e,
		reactions: null,
		rv: 0,
		v: t,
		wv: 0,
		parent: K,
		ac: null
	};
}
var vt = Symbol("obsolete");
/*#__NO_SIDE_EFFECTS__*/
function yt(e, n, r) {
	let i = K;
	i === null && xe();
	var a = void 0, o = Kt(t), s = !U, c = /* @__PURE__ */ new Set();
	return bn(() => {
		var t = K, n = y();
		a = n.promise;
		try {
			Promise.resolve(e()).then(n.resolve, (e) => {
				e !== ye && n.reject(e);
			}).finally(ht);
		} catch (e) {
			n.reject(e), ht();
		}
		var r = M;
		if (s) {
			if (t.f & 32768) var l = gt();
			if (i.b?.is_rendered()) r.async_deriveds.get(t)?.reject(vt);
			else for (let e of c.values()) e.reject(vt);
			c.add(n), r.async_deriveds.set(t, n);
		}
		let u = (e, t = void 0) => {
			l?.(), c.delete(n), t !== vt && (r.activate(), t ? (o.f |= ue, Jt(o, t)) : (o.f & 8388608 && (o.f ^= ue), Jt(o, e)), r.deactivate());
		};
		n.promise.then(u, (e) => u(null, e || "unknown"));
	}), mn(() => {
		for (let e of c) e.reject(vt);
	}), new Promise((e) => {
		function t(n) {
			function r() {
				n === a ? e(o) : t(a);
			}
			n.then(r, r);
		}
		t(a);
	});
}
/*#__NO_SIDE_EFFECTS__*/
function j(e) {
	let t = /* @__PURE__ */ _t(e);
	return Bn(t), t;
}
/*#__NO_SIDE_EFFECTS__*/
function bt(e) {
	let t = /* @__PURE__ */ _t(e);
	return t.equals = Ue, t;
}
function xt(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) H(t[n]);
	}
}
function St(e) {
	var n, r = K, i = e.parent;
	if (!In && i !== null && e.v !== t && i.f & 24576) return Ne(), e.v;
	Rn(i);
	try {
		e.f &= ~se, xt(e), n = Yn(e);
	} finally {
		Rn(r);
	}
	return n;
}
function Ct(e) {
	var t = St(e);
	if (!e.equals(t) && (e.wv = Kn(), (!M?.is_fork || e.deps === null) && (M === null ? e.v = t : (M.capture(e, t, !0), Dt?.capture(e, t, !0)), e.deps === null))) {
		A(e, b);
		return;
	}
	In || (N === null ? et(e) : (pn() || M?.is_fork) && N.set(e, t));
}
function wt(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac !== null && st(() => {
		t.ac.abort(ye), t.ac = null;
	}), t.fn !== null && (t.teardown = _), Zn(t, 0), Tn(t));
}
function Tt(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && t.fn !== null && Qn(t);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/batch.js
var Et = null, M = null, Dt = null, N = null, Ot = null, kt = !1, At = !1, jt = null, Mt = null, Nt = 0, Pt = 1, Ft = class e {
	id = Pt++;
	#e = !1;
	linked = !0;
	#t = null;
	#n = null;
	async_deriveds = /* @__PURE__ */ new Map();
	current = /* @__PURE__ */ new Map();
	previous = /* @__PURE__ */ new Map();
	#r = /* @__PURE__ */ new Set();
	#i = /* @__PURE__ */ new Set();
	#a = 0;
	#o = /* @__PURE__ */ new Map();
	#s = null;
	#c = [];
	#l = [];
	#u = /* @__PURE__ */ new Set();
	#d = /* @__PURE__ */ new Set();
	#f = /* @__PURE__ */ new Map();
	#p = /* @__PURE__ */ new Set();
	is_fork = !1;
	#m = !1;
	constructor() {
		Et === null ? Et = this : (Et.#n = this, this.#t = Et), Et = this;
	}
	#h() {
		if (this.is_fork) return !0;
		for (let n of this.#o.keys()) {
			for (var e = n, t = !1; e.parent !== null;) {
				if (this.#f.has(e)) {
					t = !0;
					break;
				}
				e = e.parent;
			}
			if (!t) return !0;
		}
		return !1;
	}
	skip_effect(e) {
		this.#f.has(e) || this.#f.set(e, {
			d: [],
			m: []
		}), this.#p.delete(e);
	}
	unskip_effect(e, t = (e) => this.schedule(e)) {
		var n = this.#f.get(e);
		if (n) {
			this.#f.delete(e);
			for (var r of n.d) A(r, x), t(r);
			for (r of n.m) A(r, S), t(r);
		}
		this.#p.add(e);
	}
	#g() {
		this.#e = !0, Nt++ > 1e3 && (this.#x(), Lt());
		for (let e of this.#u) this.#d.delete(e), A(e, x), this.schedule(e);
		for (let e of this.#d) A(e, S), this.schedule(e);
		let t = this.#c;
		this.#c = [], this.apply();
		var n = jt = [], r = [], i = Mt = [];
		for (let e of t) try {
			this.#_(e, n, r);
		} catch (t) {
			throw Ht(e), this.#h() || this.discard(), t;
		}
		if (M = null, i.length > 0) {
			var a = e.ensure();
			for (let e of i) a.schedule(e);
		}
		if (jt = null, Mt = null, this.#h()) {
			this.#b(r), this.#b(n);
			for (let [e, t] of this.#f) Vt(e, t);
			i.length > 0 && M.#g();
			return;
		}
		let o = this.#v();
		if (o) {
			this.#b(r), this.#b(n), o.#y(this);
			return;
		}
		this.#u.clear(), this.#d.clear();
		for (let e of this.#r) e(this);
		this.#r.clear(), Dt = this, zt(r), zt(n), Dt = null, this.#s?.resolve();
		var s = M;
		if (this.#a === 0 && (this.#c.length === 0 || s !== null) && this.#x(), this.#c.length > 0) {
			if (s !== null) {
				let e = s;
				e.#c.push(...this.#c.filter((t) => !e.#c.includes(t)));
			} else s = this;
		}
		s !== null && s.#g();
	}
	#_(e, t, n) {
		e.f ^= b;
		for (var r = e.first; r !== null;) {
			var i = r.f, a = !!(i & 96);
			if (!(a && i & 1024 || i & 8192 || this.#f.has(r)) && r.fn !== null) {
				a ? r.f ^= b : i & 4 ? t.push(r) : qn(r) && (i & 16 && this.#d.add(r), Qn(r));
				var o = r.first;
				if (o !== null) {
					r = o;
					continue;
				}
			}
			for (; r !== null;) {
				var s = r.next;
				if (s !== null) {
					r = s;
					break;
				}
				r = r.parent;
			}
		}
	}
	#v() {
		for (var e = this.#t; e !== null;) {
			if (!e.is_fork) {
				for (let [t, [, n]] of this.current) if (e.current.has(t) && !n) return e;
			}
			e = e.#t;
		}
		return null;
	}
	#y(e) {
		for (let [t, n] of e.current) !this.previous.has(t) && e.previous.has(t) && this.previous.set(t, e.previous.get(t)), this.current.set(t, n);
		for (let [t, n] of e.async_deriveds) {
			let e = this.async_deriveds.get(t);
			e && n.promise.then(e.resolve).catch(e.reject);
		}
		e.async_deriveds.clear(), this.transfer_effects(e.#u, e.#d);
		let t = (e) => {
			var n = e.reactions;
			if (n !== null && !(e.f & 2 && !(e.f & 6144))) for (let e of n) {
				var r = e.f;
				if (r & 2) t(e);
				else {
					var i = e;
					r & 4194320 && !this.async_deriveds.has(i) && (this.#d.delete(i), A(i, x), this.schedule(i));
				}
			}
		};
		for (let e of this.current.keys()) t(e);
		this.oncommit(() => e.discard()), e.#x(), M = this, this.#g();
	}
	#b(e) {
		for (var t = 0; t < e.length; t += 1) nt(e[t], this.#u, this.#d);
	}
	capture(e, n, r = !1) {
		e.v !== t && !this.previous.has(e) && this.previous.set(e, e.v), e.f & 8388608 || (this.current.set(e, [n, r]), N?.set(e, n)), this.is_fork || (e.v = n);
	}
	activate() {
		M = this;
	}
	deactivate() {
		M = null, N = null;
	}
	flush() {
		try {
			At = !0, M = this, this.#g();
		} finally {
			Nt = 0, Ot = null, jt = null, Mt = null, At = !1, M = null, N = null, Wt.clear();
		}
	}
	discard() {
		for (let e of this.#i) e(this);
		this.#i.clear();
		for (let e of this.async_deriveds.values()) e.reject(vt);
		this.#x(), this.#s?.resolve();
	}
	register_created_effect(e) {
		this.#l.push(e);
	}
	increment(e, t) {
		if (this.#a += 1, e) {
			let e = this.#o.get(t) ?? 0;
			this.#o.set(t, e + 1);
		}
	}
	decrement(e, t) {
		if (--this.#a, e) {
			let e = this.#o.get(t) ?? 0;
			e === 1 ? this.#o.delete(t) : this.#o.set(t, e - 1);
		}
		this.#m || (this.#m = !0, k(() => {
			this.#m = !1, this.linked && this.flush();
		}));
	}
	transfer_effects(e, t) {
		for (let t of e) this.#u.add(t);
		for (let e of t) this.#d.add(e);
		e.clear(), t.clear();
	}
	oncommit(e) {
		this.#r.add(e);
	}
	ondiscard(e) {
		this.#i.add(e);
	}
	settled() {
		return (this.#s ??= y()).promise;
	}
	static ensure() {
		if (M === null) {
			let t = M = new e();
			!At && !kt && k(() => {
				t.#e || t.flush();
			});
		}
		return M;
	}
	apply() {
		N = null;
	}
	schedule(e) {
		if (Ot = e, e.b?.is_pending && e.f & 16777228 && !(e.f & 32768)) {
			e.b.defer_effect(e);
			return;
		}
		for (var t = e; t.parent !== null;) {
			t = t.parent;
			var n = t.f;
			if (jt !== null && t === K && (U === null || !(U.f & 2))) return;
			if (n & 96) {
				if (!(n & 1024)) return;
				t.f ^= b;
			}
		}
		this.#c.push(t);
	}
	#x() {
		if (this.linked) {
			var e = this.#t, t = this.#n;
			e === null || (e.#n = t), t === null ? Et = e : t.#t = e, this.linked = !1;
		}
	}
};
function It(e) {
	var t = kt;
	kt = !0;
	try {
		var n;
		for (e && (M !== null && !M.is_fork && M.flush(), n = e());;) {
			if (Xe(), M === null) return n;
			M.flush();
		}
	} finally {
		kt = t;
	}
}
function Lt() {
	try {
		Ee();
	} catch (e) {
		Qe(e, Ot);
	}
}
var Rt = null;
function zt(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if (!(r.f & 24576) && qn(r) && (Rt = /* @__PURE__ */ new Set(), Qn(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && On(r), Rt?.size > 0)) {
				Wt.clear();
				for (let e of Rt) {
					if (e.f & 24576) continue;
					let t = [e], n = e.parent;
					for (; n !== null;) Rt.has(n) && (Rt.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || Qn(n);
					}
				}
				Rt.clear();
			}
		}
		Rt = null;
	}
}
function Bt(e) {
	M.schedule(e);
}
function Vt(e, t) {
	if (!(e.f & 32 && e.f & 1024)) {
		e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), A(e, b);
		for (var n = e.first; n !== null;) Vt(n, t), n = n.next;
	}
}
function Ht(e) {
	A(e, b);
	for (var t = e.first; t !== null;) Ht(t), t = t.next;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/sources.js
var Ut = /* @__PURE__ */ new Set(), Wt = /* @__PURE__ */ new Map(), Gt = !1;
function Kt(e, t) {
	return {
		f: 0,
		v: e,
		reactions: null,
		equals: Ve,
		rv: 0,
		wv: 0
	};
}
/*#__NO_SIDE_EFFECTS__*/
function P(e, t) {
	let n = Kt(e, t);
	return Bn(n), n;
}
/*#__NO_SIDE_EFFECTS__*/
function qt(e, t = !1, n = !0) {
	let r = Kt(e);
	return t || (r.equals = Ue), r;
}
function F(e, t, n = !1) {
	return U !== null && (!W || U.f & 131072) && qe() && U.f & 4325394 && (zn === null || !zn.has(e)) && je(), Jt(e, n ? Qt(t) : t, Mt);
}
function Jt(e, t, n = null) {
	if (!e.equals(t)) {
		Wt.set(e, In ? t : e.v);
		var r = Ft.ensure();
		if (r.capture(e, t), e.f & 2) {
			let t = e;
			e.f & 2048 && St(t), N === null && et(t);
		}
		e.wv = Kn(), Zt(e, x, n), qe() && K !== null && K.f & 1024 && !(K.f & 96) && (Y === null ? Vn([e]) : Y.push(e)), !r.is_fork && Ut.size > 0 && !Gt && Yt();
	}
	return t;
}
function Yt() {
	Gt = !1;
	for (let e of Ut) {
		e.f & 1024 && A(e, S);
		let t;
		try {
			t = qn(e);
		} catch {
			t = !0;
		}
		t && Qn(e);
	}
	Ut.clear();
}
function Xt(e) {
	F(e, e.v + 1);
}
function Zt(e, t, n) {
	var r = e.reactions;
	if (r !== null) for (var i = qe(), a = r.length, o = 0; o < a; o++) {
		var s = r[o], c = s.f;
		if (!(!i && s === K)) {
			var l = (c & x) === 0;
			if (l && A(s, t), c & 131072) Ut.add(s);
			else if (c & 2) {
				var u = s;
				N?.delete(u), c & 65536 || (c & 512 && (K === null || !(K.f & 2097152)) && (s.f |= se), Zt(u, S, n));
			} else if (l) {
				var d = s;
				c & 16 && Rt !== null && Rt.add(d), n === null ? Bt(d) : n.push(d);
			}
		}
	}
}
function Qt(e) {
	if (typeof e != "object" || !e || de in e) return e;
	let n = h(e);
	if (n !== p && n !== m) return e;
	var r = /* @__PURE__ */ new Map(), i = a(e), o = /* @__PURE__ */ P(0), s = null, c = Wn, l = (e) => {
		if (Wn === c) return e();
		var t = U, n = Wn;
		G(null), Gn(c);
		var r = e();
		return G(t), Gn(n), r;
	};
	return i && r.set("length", /* @__PURE__ */ P(e.length, s)), new Proxy(e, {
		defineProperty(e, t, n) {
			(!("value" in n) || n.configurable === !1 || n.enumerable === !1 || n.writable === !1) && ke();
			var i = r.get(t);
			return i === void 0 ? l(() => {
				var e = /* @__PURE__ */ P(n.value, s);
				return r.set(t, e), e;
			}) : F(i, n.value, !0), !0;
		},
		deleteProperty(e, n) {
			var i = r.get(n);
			if (i === void 0) {
				if (n in e) {
					let e = l(() => /* @__PURE__ */ P(t, s));
					r.set(n, e), Xt(o);
				}
			} else F(i, t), Xt(o);
			return !0;
		},
		get(n, i, a) {
			if (i === de) return e;
			var o = r.get(i), c = i in n;
			if (o === void 0 && (!c || d(n, i)?.writable) && (o = l(() => /* @__PURE__ */ P(Qt(c ? n[i] : t), s)), r.set(i, o)), o !== void 0) {
				var u = X(o);
				return u === t ? void 0 : u;
			}
			return Reflect.get(n, i, a);
		},
		getOwnPropertyDescriptor(e, n) {
			var i = Reflect.getOwnPropertyDescriptor(e, n);
			if (i && "value" in i) {
				var a = r.get(n);
				a && (i.value = X(a));
			} else if (i === void 0) {
				var o = r.get(n), s = o?.v;
				if (o !== void 0 && s !== t) return {
					enumerable: !0,
					configurable: !0,
					value: s,
					writable: !0
				};
			}
			return i;
		},
		has(e, n) {
			if (n === de) return !0;
			var i = r.get(n), a = i !== void 0 && i.v !== t || Reflect.has(e, n);
			return (i !== void 0 || K !== null && (!a || d(e, n)?.writable)) && (i === void 0 && (i = l(() => /* @__PURE__ */ P(a ? Qt(e[n]) : t, s)), r.set(n, i)), X(i) === t) ? !1 : a;
		},
		set(e, n, a, c) {
			var u = r.get(n), f = n in e;
			if (i && n === "length") for (var p = a; p < u.v; p += 1) {
				var m = r.get(p + "");
				m === void 0 ? p in e && (m = l(() => /* @__PURE__ */ P(t, s)), r.set(p + "", m)) : F(m, t);
			}
			if (u === void 0) (!f || d(e, n)?.writable) && (u = l(() => /* @__PURE__ */ P(void 0, s)), F(u, Qt(a)), r.set(n, u));
			else {
				f = u.v !== t;
				var h = l(() => Qt(a));
				F(u, h);
			}
			var g = Reflect.getOwnPropertyDescriptor(e, n);
			if (g?.set && g.set.call(c, a), !f) {
				if (i && typeof n == "string") {
					var _ = r.get("length"), v = Number(n);
					Number.isInteger(v) && v >= _.v && F(_, v + 1);
				}
				Xt(o);
			}
			return !0;
		},
		ownKeys(e) {
			X(o);
			var n = Reflect.ownKeys(e).filter((e) => {
				var n = r.get(e);
				return n === void 0 || n.v !== t;
			});
			for (var [i, a] of r) a.v !== t && !(i in e) && n.push(i);
			return n;
		},
		setPrototypeOf() {
			Ae();
		}
	});
}
var $t, en, tn, nn;
function rn() {
	if ($t === void 0) {
		$t = window, en = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, t = Node.prototype, n = Text.prototype;
		tn = d(t, "firstChild").get, nn = d(t, "nextSibling").get, g(e) && (e[he] = void 0, e[me] = null, e[ge] = void 0, e.__e = void 0), g(n) && (n[_e] = void 0);
	}
}
function I(e = "") {
	return document.createTextNode(e);
}
/*@__NO_SIDE_EFFECTS__*/
function L(e) {
	return tn.call(e);
}
/*@__NO_SIDE_EFFECTS__*/
function R(e) {
	return nn.call(e);
}
function z(e, t) {
	if (!w) return /* @__PURE__ */ L(e);
	var n = /* @__PURE__ */ L(T);
	if (n === null) n = T.appendChild(I());
	else if (t && n.nodeType !== 3) {
		var r = I();
		return n?.before(r), E(r), r;
	}
	return t && ln(n), E(n), n;
}
function an(e, t = !1) {
	if (!w) {
		var n = /* @__PURE__ */ L(e);
		return n instanceof Comment && n.data === "" ? /* @__PURE__ */ R(n) : n;
	}
	if (t) {
		if (T?.nodeType !== 3) {
			var r = I();
			return T?.before(r), E(r), r;
		}
		ln(T);
	}
	return T;
}
function B(e, t = 1, n = !1) {
	let r = w ? T : e;
	for (var i; t--;) i = r, r = /* @__PURE__ */ R(r);
	if (!w) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var a = I();
			return r === null ? i?.after(a) : r.before(a), E(a), a;
		}
		ln(r);
	}
	return E(r), r;
}
function on(e) {
	e.textContent = "";
}
function sn() {
	return !1;
}
function cn(e, t, n) {
	return t == null || t === "http://www.w3.org/1999/xhtml" ? n ? document.createElement(e, { is: n }) : document.createElement(e) : n ? document.createElementNS(t, e, { is: n }) : document.createElementNS(t, e);
}
function ln(e) {
	if (e.nodeValue.length < 65536) return;
	let t = e.nextSibling;
	for (; t !== null && t.nodeType === 3;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/effects.js
function un(e) {
	K === null && (U === null && Te(e), we()), In && Ce(e);
}
function dn(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function fn(e, t) {
	var n = K;
	n !== null && n.f & 8192 && (e |= C);
	var r = {
		ctx: O,
		deps: null,
		nodes: null,
		f: e | x | 512,
		first: null,
		fn: t,
		last: null,
		next: null,
		parent: n,
		b: n && n.b,
		prev: null,
		teardown: null,
		wv: 0,
		ac: null
	};
	M?.register_created_effect(r);
	var i = r;
	if (e & 4) jt === null ? Ft.ensure().schedule(r) : jt.push(r);
	else if (t !== null) {
		try {
			Qn(r);
		} catch (e) {
			throw H(r), e;
		}
		i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && !(i.f & 524288) && (i = i.first, e & 16 && e & 65536 && i !== null && (i.f |= re));
	}
	if (i !== null && (i.parent = n, n !== null && dn(i, n), U !== null && U.f & 2 && !(e & 64))) {
		var a = U;
		(a.effects ??= []).push(i);
	}
	return r;
}
function pn() {
	return U !== null && !W;
}
function mn(e) {
	let t = fn(8, null);
	return A(t, b), t.teardown = e, t;
}
function hn(e) {
	un("$effect");
	var t = K.f;
	if (!U && t & 32 && O !== null && !O.i) {
		var n = O;
		(n.e ??= []).push(e);
	} else return gn(e);
}
function gn(e) {
	return fn(4 | ae, e);
}
function _n(e) {
	Ft.ensure();
	let t = fn(64 | ie, e);
	return () => {
		H(t);
	};
}
function vn(e) {
	Ft.ensure();
	let t = fn(64 | ie, e);
	return (e = {}) => new Promise((n) => {
		e.outro ? kn(t, () => {
			H(t), n(void 0);
		}) : (H(t), n(void 0));
	});
}
function yn(e) {
	return fn(4, e);
}
function bn(e) {
	return fn(le | ie, e);
}
function xn(e, t = 0) {
	return fn(8 | t, e);
}
function Sn(e, t = [], n = [], r = []) {
	pt(r, t, n, (t) => {
		fn(8, () => {
			e(...t.map(X));
		});
	});
}
function Cn(e, t = 0) {
	return fn(16 | t, e);
}
function V(e) {
	return fn(32 | ie, e);
}
function wn(e) {
	var t = e.teardown;
	if (t !== null) {
		let e = In, n = U;
		Ln(!0), G(null);
		try {
			t.call(null);
		} finally {
			Ln(e), G(n);
		}
	}
}
function Tn(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; n !== null;) {
		let e = n.ac;
		e !== null && st(() => {
			e.abort(ye);
		});
		var r = n.next;
		n.f & 64 ? n.parent = null : H(n, t), n = r;
	}
}
function En(e) {
	for (var t = e.first; t !== null;) {
		var n = t.next;
		t.f & 32 || H(t), t = n;
	}
}
function H(e, t = !0) {
	var n = !1;
	(t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (Dn(e.nodes.start, e.nodes.end), n = !0), e.f |= ne, Tn(e, t && !n), Zn(e, 0);
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	wn(e), e.f ^= ne, e.f |= ee;
	var i = e.parent;
	i !== null && i.first !== null && On(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Dn(e, t) {
	for (; e !== null;) {
		var n = e === t ? null : /* @__PURE__ */ R(e);
		e.remove(), e = n;
	}
}
function On(e) {
	var t = e.parent, n = e.prev, r = e.next;
	n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function kn(e, t, n = !0) {
	var r = [];
	An(e, r, !0);
	var i = () => {
		n && H(e), t && t();
	}, a = r.length;
	if (a > 0) {
		var o = () => --a || i();
		for (var s of r) s.out(o);
	} else i();
}
function An(e, t, n) {
	if (!(e.f & 8192)) {
		e.f ^= C;
		var r = e.nodes && e.nodes.t;
		if (r !== null) for (let e of r) (e.is_global || n) && t.push(e);
		for (var i = e.first; i !== null;) {
			var a = i.next;
			if (!(i.f & 64)) {
				var o = !!(i.f & 65536) || !!(i.f & 32) && !!(e.f & 16);
				An(i, t, o ? n : !1);
			}
			i = a;
		}
	}
}
function jn(e) {
	Mn(e, !0);
}
function Mn(e, t) {
	if (e.f & 8192) {
		e.f ^= C, e.f & 1024 || (A(e, x), Ft.ensure().schedule(e));
		for (var n = e.first; n !== null;) {
			var r = n.next, i = !!(n.f & 65536) || !!(n.f & 32);
			Mn(n, i ? t : !1), n = r;
		}
		var a = e.nodes && e.nodes.t;
		if (a !== null) for (let e of a) (e.is_global || t) && e.in();
	}
}
function Nn(e, t) {
	if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
		var i = n === r ? null : /* @__PURE__ */ R(n);
		t.append(n), n = i;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/legacy.js
var Pn = null, Fn = !1, In = !1;
function Ln(e) {
	In = e;
}
var U = null, W = !1;
function G(e) {
	U = e;
}
var K = null;
function Rn(e) {
	K = e;
}
var zn = null;
function Bn(e) {
	U !== null && (zn ??= /* @__PURE__ */ new Set()).add(e);
}
var q = null, J = 0, Y = null;
function Vn(e) {
	Y = e;
}
var Hn = 1, Un = 0, Wn = Un;
function Gn(e) {
	Wn = e;
}
function Kn() {
	return ++Hn;
}
function qn(e) {
	var t = e.f;
	if (t & 2048) return !0;
	if (t & 2 && (e.f &= ~se), t & 4096) {
		for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
			var a = n[i];
			if (qn(a) && Ct(a), a.wv > e.wv) return !0;
		}
		t & 512 && N === null && A(e, b);
	}
	return !1;
}
function Jn(e, t, n = !0) {
	var r = e.reactions;
	if (r !== null && !(zn !== null && zn.has(e))) for (var i = 0; i < r.length; i++) {
		var a = r[i];
		a.f & 2 ? Jn(a, t, !1) : t === a && (n ? A(a, x) : a.f & 1024 && A(a, S), Bt(a));
	}
}
function Yn(e) {
	var t = q, n = J, r = Y, i = U, a = zn, o = O, s = W, c = Wn, l = e.f;
	q = null, J = 0, Y = null, U = l & 96 ? null : e, zn = null, We(e.ctx), W = !1, Wn = ++Un, e.ac !== null && (st(() => {
		e.ac.abort(ye);
	}), e.ac = null);
	try {
		e.f |= ce;
		var u = e.fn, d = u();
		e.f |= te;
		var f = e.deps, p = M?.is_fork;
		if (q !== null) {
			var m;
			if (p || Zn(e, J), f !== null && J > 0) for (f.length = J + q.length, m = 0; m < q.length; m++) f[J + m] = q[m];
			else e.deps = f = q;
			if (pn() && e.f & 512) for (m = J; m < f.length; m++) (f[m].reactions ??= []).push(e);
		} else !p && f !== null && J < f.length && (Zn(e, J), f.length = J);
		if (qe() && Y !== null && !W && f !== null && !(e.f & 6146)) for (m = 0; m < Y.length; m++) Jn(Y[m], e);
		if (i !== null && i !== e) {
			if (Un++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = Un;
			if (t !== null) for (let e of t) e.rv = Un;
			Y !== null && (r === null ? r = Y : r.push(...Y));
		}
		return e.f & 8388608 && (e.f ^= ue), d;
	} catch (e) {
		return Ze(e);
	} finally {
		e.f ^= ce, q = t, J = n, Y = r, U = i, zn = a, We(o), W = s, Wn = c;
	}
}
function Xn(e, n) {
	let r = n.reactions;
	if (r !== null) {
		var i = o.call(r, e);
		if (i !== -1) {
			var a = r.length - 1;
			a === 0 ? r = n.reactions = null : (r[i] = r[a], r.pop());
		}
	}
	if (r === null && n.f & 2 && (q === null || !s.call(q, n))) {
		var c = n;
		c.f & 512 && (c.f ^= 512, c.f &= ~se), c.v !== t && et(c), c.ac !== null && st(() => {
			c.ac.abort(ye), c.ac = null, A(c, x);
		}), wt(c), Zn(c, 0);
	}
}
function Zn(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) Xn(e, n[r]);
}
function Qn(e) {
	var t = e.f;
	if (!(t & 16384)) {
		A(e, b);
		var n = K, r = Fn;
		K = e, Fn = !(t & 96);
		try {
			t & 16777232 ? En(e) : Tn(e), wn(e);
			var i = Yn(e);
			e.teardown = typeof i == "function" ? i : null, e.wv = Hn;
		} finally {
			Fn = r, K = n;
		}
	}
}
async function $n() {
	await Promise.resolve(), It();
}
function X(e) {
	var t = !!(e.f & 2);
	if (Pn?.add(e), U !== null && !W && !(K !== null && K.f & 16384) && (zn === null || !zn.has(e))) {
		var n = U.deps;
		if (U.f & 2097152) e.rv < Un && (e.rv = Un, q === null && n !== null && n[J] === e ? J++ : q === null ? q = [e] : q.push(e));
		else {
			U.deps ??= [], s.call(U.deps, e) || U.deps.push(e);
			var r = e.reactions;
			r === null ? e.reactions = [U] : s.call(r, U) || r.push(U);
		}
	}
	if (In && Wt.has(e)) return Wt.get(e);
	if (t) {
		var i = e;
		if (In) {
			var a = i.v;
			return (!(i.f & 1024) && i.reactions !== null || tr(i)) && (a = St(i)), Wt.set(i, a), a;
		}
		var o = !(i.f & 512) && !W && U !== null && (Fn || !!(U.f & 512)), c = (i.f & te) === 0;
		qn(i) && (o && (i.f |= 512), Ct(i)), o && !c && (Tt(i), er(i));
	}
	if (N?.has(e)) return N.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function er(e) {
	if (e.f |= 512, e.deps !== null) for (let t of e.deps) (t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (Tt(t), er(t));
}
function tr(e) {
	if (e.v === t) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if (Wt.has(t) || t.f & 2 && tr(t)) return !0;
	return !1;
}
function nr(e) {
	var t = W;
	try {
		return W = !0, e();
	} finally {
		W = t;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/events.js
var rr = Symbol("events"), ir = /* @__PURE__ */ new Set(), ar = /* @__PURE__ */ new Set();
function or(e, t, n, r = {}) {
	function i(e) {
		if (r.capture || dr.call(t, e), !e.cancelBubble) return st(() => n?.call(this, e));
	}
	return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? k(() => {
		t.addEventListener(e, i, r);
	}) : t.addEventListener(e, i, r), i;
}
function sr(e, t, n, r, i) {
	var a = {
		capture: r,
		passive: i
	}, o = or(e, t, n, a);
	(t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && mn(() => {
		t.removeEventListener(e, o, a);
	});
}
function cr(e, t, n) {
	(t[rr] ??= {})[e] = n;
}
function lr(e) {
	for (var t = 0; t < e.length; t++) ir.add(e[t]);
	for (var n of ar) n(e);
}
var ur = null;
function dr(e) {
	var t = this, n = t.ownerDocument, r = e.type, i = e.composedPath?.() || [], a = i[0] || e.target;
	ur = e;
	var o = 0, s = ur === e && e[rr];
	if (s) {
		var c = i.indexOf(s);
		if (c !== -1 && (t === document || t === window)) {
			e[rr] = t;
			return;
		}
		var l = i.indexOf(t);
		if (l === -1) return;
		c <= l && (o = c);
	}
	if (a = i[o] || e.target, a !== t) {
		u(e, "currentTarget", {
			configurable: !0,
			get() {
				return a || n;
			}
		});
		var d = U, f = K;
		G(null), Rn(null);
		try {
			for (var p, m = []; a !== null && a !== t;) {
				try {
					var h = a[rr]?.[r];
					h != null && (!a.disabled || e.target === a) && h.call(a, e);
				} catch (e) {
					p ? m.push(e) : p = e;
				}
				if (e.cancelBubble) break;
				o++, a = o < i.length ? i[o] : null;
			}
			if (p) {
				for (let e of m) queueMicrotask(() => {
					throw e;
				});
				throw p;
			}
		} finally {
			e[rr] = t, delete e.currentTarget, G(d), Rn(f);
		}
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/reconciler.js
var fr = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function pr(e) {
	return fr?.createHTML(e) ?? e;
}
function mr(e) {
	var t = cn("template");
	return t.innerHTML = pr(e.replaceAll("<!>", "<!---->")), t.content;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/template.js
function hr(e, t) {
	var n = K;
	n.nodes === null && (n.nodes = {
		start: e,
		end: t,
		a: null,
		t: null
	});
}
/*#__NO_SIDE_EFFECTS__*/
function Z(e, t) {
	var n = !!(t & 1), r = !!(t & 2), i, a = !e.startsWith("<!>");
	return () => {
		if (w) return hr(T, null), T;
		i === void 0 && (i = mr(a ? e : "<!>" + e), n || (i = /* @__PURE__ */ L(i)));
		var t = r || en ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = /* @__PURE__ */ L(t), s = t.lastChild;
			hr(o, s);
		} else hr(t, t);
		return t;
	};
}
function gr() {
	if (w) return hr(T, null), T;
	var e = document.createDocumentFragment(), t = document.createComment(""), n = I();
	return e.append(t, n), hr(t, n), e;
}
function Q(e, t) {
	if (w) {
		var n = K;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = T), Le();
		return;
	}
	e !== null && e.before(t);
}
[.../* @__PURE__ */ "allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback".split(".")];
var _r = ["touchstart", "touchmove"];
function vr(e) {
	return _r.includes(e);
}
function yr(e, t) {
	var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
	n !== (e[_e] ??= e.nodeValue) && (e[_e] = n, e.nodeValue = `${n}`);
}
function br(e, t) {
	return Cr(e, t);
}
function xr(t, n) {
	rn(), n.intro = n.intro ?? !1;
	let r = n.target, i = w, a = T;
	try {
		for (var o = /* @__PURE__ */ L(r); o && (o.nodeType !== 8 || o.data !== "[");) o = /* @__PURE__ */ R(o);
		if (!o) throw e;
		Ie(!0), E(o);
		let i = Cr(t, {
			...n,
			anchor: o
		});
		return Ie(!1), i;
	} catch (i) {
		if (i instanceof Error && i.message.split("\n").some((e) => e.startsWith("https://svelte.dev/e/"))) throw i;
		return i !== e && console.warn("Failed to hydrate: ", i), n.recover === !1 && De(), rn(), on(r), Ie(!1), br(t, n);
	} finally {
		Ie(i), E(a);
	}
}
var Sr = /* @__PURE__ */ new Map();
function Cr(t, { target: n, anchor: r, props: i = {}, events: a, context: o, intro: s = !0, transformError: l }) {
	rn();
	var u = void 0, d = vn(() => {
		var s = r ?? n.appendChild(I());
		dt(s, { pending: () => {} }, (n) => {
			Ge({});
			var r = O;
			if (o && (r.c = o), a && (i.$$events = a), w && hr(n, null), u = t(n, i) || {}, w && (K.nodes.end = T, T === null || T.nodeType !== 8 || T.data !== "]")) throw Pe(), e;
			Ke();
		}, l);
		var d = /* @__PURE__ */ new Set(), f = (e) => {
			for (var t = 0; t < e.length; t++) {
				var r = e[t];
				if (!d.has(r)) {
					d.add(r);
					var i = vr(r);
					for (let e of [n, document]) {
						var a = Sr.get(e);
						a === void 0 && (a = /* @__PURE__ */ new Map(), Sr.set(e, a));
						var o = a.get(r);
						o === void 0 ? (e.addEventListener(r, dr, { passive: i }), a.set(r, 1)) : a.set(r, o + 1);
					}
				}
			}
		};
		return f(c(ir)), ar.add(f), () => {
			for (var e of d) for (let r of [n, document]) {
				var t = Sr.get(r), i = t.get(e);
				--i == 0 ? (r.removeEventListener(e, dr), t.delete(e), t.size === 0 && Sr.delete(r)) : t.set(e, i);
			}
			ar.delete(f), s !== r && s.parentNode?.removeChild(s);
		};
	});
	return wr.set(u, d), u;
}
var wr = /* @__PURE__ */ new WeakMap();
function Tr(e, t) {
	let n = wr.get(e);
	return n ? (wr.delete(e), n(t)) : Promise.resolve();
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/branches.js
var Er = class {
	anchor;
	#e = /* @__PURE__ */ new Map();
	#t = /* @__PURE__ */ new Map();
	#n = /* @__PURE__ */ new Map();
	#r = /* @__PURE__ */ new Set();
	#i = !0;
	constructor(e, t = !0) {
		this.anchor = e, this.#i = t;
	}
	#a = (e) => {
		if (this.#e.has(e)) {
			var t = this.#e.get(e), n = this.#t.get(t);
			if (n) jn(n), this.#r.delete(t);
			else {
				var r = this.#n.get(t);
				r && (jn(r.effect), this.#t.set(t, r.effect), this.#n.delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), n = r.effect);
			}
			for (let [t, n] of this.#e) {
				if (this.#e.delete(t), t === e) break;
				let r = this.#n.get(n);
				r && (H(r.effect), this.#n.delete(n));
			}
			for (let [e, r] of this.#t) {
				if (e === t || this.#r.has(e)) continue;
				let i = () => {
					if (Array.from(this.#e.values()).includes(e)) {
						var t = document.createDocumentFragment();
						Nn(r, t), t.append(I()), this.#n.set(e, {
							effect: r,
							fragment: t
						});
					} else H(r);
					this.#r.delete(e), this.#t.delete(e);
				};
				this.#i || !n ? (this.#r.add(e), kn(r, i, !1)) : i();
			}
		}
	};
	#o = (e) => {
		this.#e.delete(e);
		let t = Array.from(this.#e.values());
		for (let [e, n] of this.#n) t.includes(e) || (H(n.effect), this.#n.delete(e));
	};
	ensure(e, t) {
		var n = M, r = sn();
		if (t && !this.#t.has(e) && !this.#n.has(e)) {
			if (r) {
				var i = document.createDocumentFragment(), a = I();
				i.append(a), this.#n.set(e, {
					effect: V(() => t(a)),
					fragment: i
				});
			} else this.#t.set(e, V(() => t(this.anchor)));
		}
		if (this.#e.set(n, e), r) {
			for (let [t, r] of this.#t) t === e ? n.unskip_effect(r) : n.skip_effect(r);
			for (let [t, r] of this.#n) t === e ? n.unskip_effect(r.effect) : n.skip_effect(r.effect);
			n.oncommit(this.#a), n.ondiscard(this.#o);
		} else w && (this.anchor = T), this.#a(n);
	}
};
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/if.js
function $(e, t, n = !1) {
	var r;
	w && (r = T, Le());
	var i = new Er(e), a = n ? re : 0;
	function o(e, t) {
		if (w) {
			var n = Be(r);
			if (e !== parseInt(n.substring(1))) {
				var a = ze();
				E(a), i.anchor = a, Ie(!1), i.ensure(e, t), Ie(!0);
				return;
			}
		}
		i.ensure(e, t);
	}
	Cn(() => {
		var e = !1;
		t((t, n = 0) => {
			e = !0, o(n, t);
		}), e || o(-1, null);
	}, a);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/each.js
function Dr(e, t, n) {
	for (var r = [], i = t.length, a, o = t.length, s = 0; s < i; s++) {
		let n = t[s];
		kn(n, () => {
			if (a) {
				if (a.pending.delete(n), a.done.add(n), a.pending.size === 0) {
					var t = e.outrogroups;
					Or(e, c(a.done)), t.delete(a), t.size === 0 && (e.outrogroups = null);
				}
			} else --o;
		}, !1);
	}
	if (o === 0) {
		var l = r.length === 0 && n !== null;
		if (l) {
			var u = n, d = u.parentNode;
			on(d), d.append(u), e.items.clear();
		}
		Or(e, t, !l);
	} else a = {
		pending: new Set(t),
		done: /* @__PURE__ */ new Set()
	}, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(a);
}
function Or(e, t, n = !0) {
	var r;
	if (e.pending.size > 0) {
		r = /* @__PURE__ */ new Set();
		for (let t of e.pending.values()) for (let n of t) r.add(e.items.get(n).e);
	}
	for (var i = 0; i < t.length; i++) {
		var a = t[i];
		r?.has(a) ? (a.f |= oe, Nn(a, document.createDocumentFragment())) : H(t[i], n);
	}
}
var kr;
function Ar(e, t, n, r, i, o = null) {
	var s = e, l = /* @__PURE__ */ new Map();
	if (t & 4) {
		var u = e;
		s = w ? E(/* @__PURE__ */ L(u)) : u.appendChild(I());
	}
	w && Le();
	var d = null, f = /* @__PURE__ */ bt(() => {
		var e = n();
		return a(e) ? e : e == null ? [] : c(e);
	}), p, m = /* @__PURE__ */ new Map(), h = !0;
	function g(e) {
		v.effect.f & 16384 || (v.pending.delete(e), v.fallback = d, Mr(v, p, s, t, r), d !== null && (p.length === 0 ? d.f & 33554432 ? (d.f ^= oe, Pr(d, null, s)) : jn(d) : kn(d, () => {
			d = null;
		})));
	}
	function _(e) {
		v.pending.delete(e);
	}
	var v = {
		effect: Cn(() => {
			p = X(f);
			var e = p.length;
			let a = !1;
			w && Be(s) === "[!" != (e === 0) && (s = ze(), E(s), Ie(!1), a = !0);
			for (var c = /* @__PURE__ */ new Set(), u = M, v = sn(), y = 0; y < e; y += 1) {
				w && T.nodeType === 8 && T.data === "]" && (s = T, a = !0, Ie(!1));
				var b = p[y], x = r(b, y), S = h ? null : l.get(x);
				S ? (S.v && Jt(S.v, b), S.i && Jt(S.i, y), v && u.unskip_effect(S.e)) : (S = Nr(l, h ? s : kr ??= I(), b, x, y, i, t, n), h || (S.e.f |= oe), l.set(x, S)), c.add(x);
			}
			if (e === 0 && o && !d && (h ? d = V(() => o(s)) : (d = V(() => o(kr ??= I())), d.f |= oe)), e > c.size && Se("", "", ""), w && e > 0 && E(ze()), !h) {
				if (m.set(u, c), v) {
					for (let [e, t] of l) c.has(e) || u.skip_effect(t.e);
					u.oncommit(g), u.ondiscard(_);
				} else g(u);
			}
			a && Ie(!0), X(f);
		}),
		flags: t,
		items: l,
		pending: m,
		outrogroups: null,
		fallback: d
	};
	h = !1, w && (s = T);
}
function jr(e) {
	for (; e !== null && !(e.f & 32);) e = e.next;
	return e;
}
function Mr(e, t, n, r, i) {
	var a = !!(r & 8), o = t.length, s = e.items, l = jr(e.effect.first), u, d = null, f, p = [], m = [], h, g, _, v;
	if (a) for (v = 0; v < o; v += 1) h = t[v], g = i(h, v), _ = s.get(g).e, _.f & 33554432 || (_.nodes?.a?.measure(), (f ??= /* @__PURE__ */ new Set()).add(_));
	for (v = 0; v < o; v += 1) {
		if (h = t[v], g = i(h, v), _ = s.get(g).e, e.outrogroups !== null) for (let t of e.outrogroups) t.pending.delete(_), t.done.delete(_);
		if (_.f & 8192 && (jn(_), a && (_.nodes?.a?.unfix(), (f ??= /* @__PURE__ */ new Set()).delete(_))), _.f & 33554432) {
			if (_.f ^= oe, _ === l) Pr(_, null, n);
			else {
				var y = d ? d.next : l;
				_ === e.effect.last && (e.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), Fr(e, d, _), Fr(e, _, y), Pr(_, y, n), d = _, p = [], m = [], l = jr(d.next);
				continue;
			}
		}
		if (_ !== l) {
			if (u !== void 0 && u.has(_)) {
				if (p.length < m.length) {
					var b = m[0], x;
					d = b.prev;
					var S = p[0], C = p[p.length - 1];
					for (x = 0; x < p.length; x += 1) Pr(p[x], b, n);
					for (x = 0; x < m.length; x += 1) u.delete(m[x]);
					Fr(e, S.prev, C.next), Fr(e, d, S), Fr(e, C, b), l = b, d = C, --v, p = [], m = [];
				} else u.delete(_), Pr(_, l, n), Fr(e, _.prev, _.next), Fr(e, _, d === null ? e.effect.first : d.next), Fr(e, d, _), d = _;
				continue;
			}
			for (p = [], m = []; l !== null && l !== _;) (u ??= /* @__PURE__ */ new Set()).add(l), m.push(l), l = jr(l.next);
			if (l === null) continue;
		}
		_.f & 33554432 || p.push(_), d = _, l = jr(_.next);
	}
	if (e.outrogroups !== null) {
		for (let t of e.outrogroups) t.pending.size === 0 && (Or(e, c(t.done)), e.outrogroups?.delete(t));
		e.outrogroups.size === 0 && (e.outrogroups = null);
	}
	if (l !== null || u !== void 0) {
		var ee = [];
		if (u !== void 0) for (_ of u) _.f & 8192 || ee.push(_);
		for (; l !== null;) !(l.f & 8192) && l !== e.fallback && ee.push(l), l = jr(l.next);
		var te = ee.length;
		if (te > 0) {
			var ne = r & 4 && o === 0 ? n : null;
			if (a) {
				for (v = 0; v < te; v += 1) ee[v].nodes?.a?.measure();
				for (v = 0; v < te; v += 1) ee[v].nodes?.a?.fix();
			}
			Dr(e, ee, ne);
		}
	}
	a && k(() => {
		if (f !== void 0) for (_ of f) _.nodes?.a?.apply();
	});
}
function Nr(e, t, n, r, i, a, o, s) {
	var c = o & 1 ? o & 16 ? Kt(n) : /* @__PURE__ */ qt(n, !1, !1) : null, l = o & 2 ? Kt(i) : null;
	return {
		v: c,
		i: l,
		e: V(() => (a(t, c ?? n, l ?? i, s), () => {
			e.delete(r);
		}))
	};
}
function Pr(e, t, n) {
	if (e.nodes) for (var r = e.nodes.start, i = e.nodes.end, a = t && !(t.f & 33554432) ? t.nodes.start : n; r !== null;) {
		var o = /* @__PURE__ */ R(r);
		if (a.before(r), r === i) return;
		r = o;
	}
}
function Fr(e, t, n) {
	t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function Ir(t, n, a = !1, o = !1, s = !1, c = !1) {
	var l = t, u = "";
	if (a) {
		var d = t;
		w && (l = E(/* @__PURE__ */ L(d)));
	}
	Sn(() => {
		var t = K;
		if (u === (u = n() ?? "")) {
			w && Le();
			return;
		}
		if (a && !w) {
			t.nodes = null, d.innerHTML = u, u !== "" && hr(/* @__PURE__ */ L(d), d.lastChild);
			return;
		}
		if (t.nodes !== null && (Dn(t.nodes.start, t.nodes.end), t.nodes = null), u !== "") {
			if (w) {
				for (var c = T.data, f = Le(), p = f; f !== null && (f.nodeType !== 8 || f.data !== "");) p = f, f = /* @__PURE__ */ R(f);
				if (f === null) throw Pe(), e;
				hr(T, p), l = E(f);
				return;
			}
			var m = cn(o ? "svg" : s ? "math" : "template", o ? r : s ? i : void 0);
			m.innerHTML = u;
			var h = o || s ? m : m.content;
			if (hr(/* @__PURE__ */ L(h), h.lastChild), o || s) for (; /* @__PURE__ */ L(h);) l.before(/* @__PURE__ */ L(h));
			else l.before(h);
		}
	});
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/css.js
function Lr(e, t) {
	yn(() => {
		var n = e.getRootNode(), r = n.host ? n : n.head ?? n.ownerDocument.head;
		if (!r.querySelector("#" + t.hash)) {
			let e = cn("style");
			e.id = t.hash, e.textContent = t.code, r.appendChild(e);
		}
	});
}
//#endregion
//#region node_modules/svelte/src/internal/shared/attributes.js
var Rr = [..." 	\n\r\f\xA0\v﻿"];
function zr(e, t, n) {
	var r = e == null ? "" : "" + e;
	if (t && (r = r ? r + " " + t : t), n) {
		for (var i of Object.keys(n)) if (n[i]) r = r ? r + " " + i : i;
		else if (r.length) for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0;) {
			var s = o + a;
			(o === 0 || Rr.includes(r[o - 1])) && (s === r.length || Rr.includes(r[s])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(s + 1) : o = s;
		}
	}
	return r === "" ? null : r;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/class.js
function Br(e, t, n, r, i, a) {
	var o = e[he];
	if (w || o !== n || o === void 0) {
		var s = zr(n, r, a);
		(!w || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e[he] = n;
	} else if (a && i !== a) for (var c in a) {
		var l = !!a[c];
		(i == null || l !== !!i[c]) && e.classList.toggle(c, l);
	}
	return a;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/attributes.js
var Vr = Symbol("is custom element"), Hr = Symbol("is html"), Ur = be ? "link" : "LINK";
function Wr(e) {
	if (w) {
		var t = !1, n = () => {
			if (!t) {
				if (t = !0, e.hasAttribute("value")) {
					var n = e.value;
					Gr(e, "value", null), e.value = n;
				}
				if (e.hasAttribute("checked")) {
					var r = e.checked;
					Gr(e, "checked", null), e.checked = r;
				}
			}
		};
		e[ve] = n, k(n), ot();
	}
}
function Gr(e, t, n, r) {
	var i = Kr(e);
	w && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === Ur) || i[t] !== (i[t] = n) && (t === "loading" && (e[pe] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Jr(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Kr(e) {
	return e[me] ??= {
		[Vr]: e.nodeName.includes("-"),
		[Hr]: e.namespaceURI === n
	};
}
var qr = /* @__PURE__ */ new Map();
function Jr(e) {
	var t = e.getAttribute("is") || e.nodeName, n = qr.get(t);
	if (n) return n;
	qr.set(t, n = []);
	for (var r, i = e, a = Element.prototype; a !== i;) {
		for (var o in r = f(i), r) r[o].set && o !== "innerHTML" && o !== "textContent" && o !== "innerText" && n.push(o);
		i = h(i);
	}
	return n;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/input.js
function Yr(e, t, n = t) {
	var r = /* @__PURE__ */ new WeakSet();
	ct(e, "input", async (i) => {
		var a = i ? e.defaultValue : e.value;
		if (a = Xr(e) ? Zr(a) : a, n(a), M !== null && r.add(M), await $n(), a !== (a = t())) {
			var o = e.selectionStart, s = e.selectionEnd, c = e.value.length;
			if (e.value = a ?? "", s !== null) {
				var l = e.value.length;
				o === s && s === c && l > c ? (e.selectionStart = l, e.selectionEnd = l) : (e.selectionStart = o, e.selectionEnd = Math.min(s, l));
			}
		}
	}), (w && e.defaultValue !== e.value || nr(t) == null && e.value) && (n(Xr(e) ? Zr(e.value) : e.value), M !== null && r.add(M)), xn(() => {
		var n = t();
		if (e === document.activeElement) {
			var i = M;
			if (r.has(i)) return;
		}
		Xr(e) && n === Zr(e.value) || e.type === "date" && !n && !e.value || n !== e.value && (e.value = n ?? "");
	});
}
function Xr(e) {
	var t = e.type;
	return t === "number" || t === "range";
}
function Zr(e) {
	return e === "" ? null : +e;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/this.js
function Qr(e, t) {
	return e === t || e?.[de] === t;
}
function $r(e = {}, t, n, r) {
	var i = O.r, a = K;
	return yn(() => {
		var o, s;
		return xn(() => {
			o = s, s = r?.() || [], nr(() => {
				Qr(n(...s), e) || (t(e, ...s), o && Qr(n(...o), e) && t(null, ...o));
			});
		}), () => {
			let r = a;
			for (; r !== i && r.parent !== null && r.parent.f & 33554432;) r = r.parent;
			let o = () => {
				s && Qr(n(...s), e) && t(null, ...s);
			}, c = r.teardown;
			r.teardown = () => {
				o(), c?.();
			};
		};
	}), e;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/props.js
function ei(e, t, n, r) {
	var i = !0, a = !!(n & 8), o = !!(n & 16), s = r, c = !0, l = void 0, u = () => o && i ? (l ??= /* @__PURE__ */ _t(r), X(l)) : (c && (c = !1, s = o ? nr(r) : r), s);
	let f;
	if (a) {
		var p = de in e || fe in e;
		f = d(e, t)?.set ?? (p && t in e ? (n) => e[t] = n : void 0);
	}
	var m, h = !1;
	a ? [m, h] = it(() => e[t]) : m = e[t], m === void 0 && r !== void 0 && (m = u(), f && (i && Oe(t), f(m)));
	var g = i ? () => {
		var n = e[t];
		return n === void 0 ? u() : (c = !0, n);
	} : () => {
		var n = e[t];
		return n !== void 0 && (s = void 0), n === void 0 ? s : n;
	};
	if (i && !(n & 4)) return g;
	if (f) {
		var _ = e.$$legacy;
		return (function(e, t) {
			return arguments.length > 0 ? ((!i || !t || _ || h) && f(t ? g() : e), e) : g();
		});
	}
	var v = !1, y = (n & 1 ? _t : bt)(() => (v = !1, g()));
	a && X(y);
	var b = K;
	return (function(e, t) {
		if (arguments.length > 0) {
			let n = t ? X(y) : i && a ? Qt(e) : e;
			return F(y, n), v = !0, s !== void 0 && (s = n), e;
		}
		return In && v || b.f & 16384 ? y.v : X(y);
	});
}
//#endregion
//#region node_modules/svelte/src/legacy/legacy-client.js
function ti(e) {
	return new ni(e);
}
var ni = class {
	#e;
	#t;
	constructor(e) {
		var t = /* @__PURE__ */ new Map(), n = (e, n) => {
			var r = /* @__PURE__ */ qt(n, !1, !1);
			return t.set(e, r), r;
		};
		let r = new Proxy({
			...e.props || {},
			$$events: {}
		}, {
			get(e, r) {
				return X(t.get(r) ?? n(r, Reflect.get(e, r)));
			},
			has(e, r) {
				return r === fe || (X(t.get(r) ?? n(r, Reflect.get(e, r))), Reflect.has(e, r));
			},
			set(e, r, i) {
				return F(t.get(r) ?? n(r, i), i), Reflect.set(e, r, i);
			}
		});
		this.#t = (e.hydrate ? xr : br)(e.component, {
			target: e.target,
			anchor: e.anchor,
			props: r,
			context: e.context,
			intro: e.intro ?? !1,
			recover: e.recover,
			transformError: e.transformError
		}), (!e?.props?.$$host || e.sync === !1) && It(), this.#e = r.$$events;
		for (let e of Object.keys(this.#t)) e !== "$set" && e !== "$destroy" && e !== "$on" && u(this, e, {
			get() {
				return this.#t[e];
			},
			set(t) {
				this.#t[e] = t;
			},
			enumerable: !0
		});
		this.#t.$set = (e) => {
			Object.assign(r, e);
		}, this.#t.$destroy = () => {
			Tr(this.#t);
		};
	}
	$set(e) {
		this.#t.$set(e);
	}
	$on(e, t) {
		this.#e[e] = this.#e[e] || [];
		let n = (...e) => t.call(this, ...e);
		return this.#e[e].push(n), () => {
			this.#e[e] = this.#e[e].filter((e) => e !== n);
		};
	}
	$destroy() {
		this.#t.$destroy();
	}
}, ri;
typeof HTMLElement == "function" && (ri = class extends HTMLElement {
	$$ctor;
	$$s;
	$$c;
	$$cn = !1;
	$$d = {};
	$$r = !1;
	$$p_d = {};
	$$l = {};
	$$l_u = /* @__PURE__ */ new Map();
	$$me;
	$$shadowRoot = null;
	constructor(e, t, n) {
		super(), this.$$ctor = e, this.$$s = t, n && (this.$$shadowRoot = this.attachShadow(n));
	}
	addEventListener(e, t, n) {
		if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
			let n = this.$$c.$on(e, t);
			this.$$l_u.set(t, n);
		}
		super.addEventListener(e, t, n);
	}
	removeEventListener(e, t, n) {
		if (super.removeEventListener(e, t, n), this.$$c) {
			let e = this.$$l_u.get(t);
			e && (e(), this.$$l_u.delete(t));
		}
	}
	async connectedCallback() {
		if (this.$$cn = !0, !this.$$c) {
			if (await Promise.resolve(), !this.$$cn || this.$$c) return;
			function e(e) {
				return (t) => {
					let n = cn("slot");
					e !== "default" && (n.name = e), Q(t, n);
				};
			}
			let t = {}, n = ai(this);
			for (let r of this.$$s) r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
			for (let e of this.attributes) {
				let t = this.$$g_p(e.name);
				t in this.$$d || (this.$$d[t] = ii(t, e.value, this.$$p_d, "toProp"));
			}
			for (let e in this.$$p_d) !(e in this.$$d) && this[e] !== void 0 && (this.$$d[e] = this[e], delete this[e]);
			this.$$c = ti({
				component: this.$$ctor,
				target: this.$$shadowRoot || this,
				props: {
					...this.$$d,
					$$slots: t,
					$$host: this
				}
			}), this.$$me = _n(() => {
				xn(() => {
					this.$$r = !0;
					for (let e of l(this.$$c)) {
						if (!this.$$p_d[e]?.reflect) continue;
						this.$$d[e] = this.$$c[e];
						let t = ii(e, this.$$d[e], this.$$p_d, "toAttribute");
						t == null ? this.removeAttribute(this.$$p_d[e].attribute || e) : this.setAttribute(this.$$p_d[e].attribute || e, t);
					}
					this.$$r = !1;
				});
			});
			for (let e in this.$$l) for (let t of this.$$l[e]) {
				let n = this.$$c.$on(e, t);
				this.$$l_u.set(t, n);
			}
			this.$$l = {};
		}
	}
	attributeChangedCallback(e, t, n) {
		this.$$r || (e = this.$$g_p(e), this.$$d[e] = ii(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
	}
	disconnectedCallback() {
		this.$$cn = !1, Promise.resolve().then(() => {
			!this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
		});
	}
	$$g_p(e) {
		return l(this.$$p_d).find((t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e) || e;
	}
});
function ii(e, t, n, r) {
	let i = n[e]?.type;
	if (t = i === "Boolean" && typeof t != "boolean" ? t != null : t, !r || !n[e]) return t;
	if (r === "toAttribute") switch (i) {
		case "Object":
		case "Array": return t == null ? null : JSON.stringify(t);
		case "Boolean": return t ? "" : null;
		case "Number": return t ?? null;
		default: return t;
	}
	else switch (i) {
		case "Object":
		case "Array": return t && JSON.parse(t);
		case "Boolean": return t;
		case "Number": return t == null ? t : +t;
		default: return t;
	}
}
function ai(e) {
	let t = {};
	return e.childNodes.forEach((e) => {
		t[e.slot || "default"] = !0;
	}), t;
}
function oi(e, t, n, r, i, a) {
	let o = class extends ri {
		constructor() {
			super(e, n, i), this.$$p_d = t;
		}
		static get observedAttributes() {
			return l(t).map((e) => (t[e].attribute || e).toLowerCase());
		}
	};
	return l(t).forEach((e) => {
		u(o.prototype, e, {
			get() {
				return this.$$c && e in this.$$c ? this.$$c[e] : this.$$d[e];
			},
			set(n) {
				n = ii(e, n, t), this.$$d[e] = n;
				var r = this.$$c;
				r && (d(r, e)?.get ? r[e] = n : r.$set({ [e]: n }));
			}
		});
	}), r.forEach((e) => {
		u(o.prototype, e, { get() {
			return this.$$c?.[e];
		} });
	}), a && (o = a(o)), e.element = o, o;
}
//#endregion
//#region src/sections.ts
function si(e) {
	let t = [];
	for (let n of e) n.children && t.push(n.id);
	return t;
}
function ci(e, t) {
	return t && e.find((e) => e.children?.some((e) => e.href === t)) || null;
}
function li(e, t) {
	return Array.isArray(t) ? new Set(t) : new Set(si(e));
}
//#endregion
//#region src/Sidebar.svelte
var ui = /* @__PURE__ */ Z("<span class=\"worn-nav-icon svelte-1hv280f\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" class=\"svelte-1hv280f\"></svg></span>"), di = /* @__PURE__ */ Z("<span> </span>"), fi = /* @__PURE__ */ Z("<button type=\"button\" class=\"worn-reorder-btn svelte-1hv280f\" title=\"Move up\">▲</button>"), pi = /* @__PURE__ */ Z("<button type=\"button\" class=\"worn-reorder-btn svelte-1hv280f\" title=\"Move down\">▼</button>"), mi = /* @__PURE__ */ Z("<span class=\"worn-nav-reorder\"><!> <!></span>"), hi = /* @__PURE__ */ Z("<a><!> <span class=\"worn-nav-label svelte-1hv280f\"> </span> <!> <!></a>"), gi = /* @__PURE__ */ Z("<button type=\"button\" class=\"worn-filter-clear svelte-1hv280f\" aria-label=\"Clear filter\">×</button>"), _i = /* @__PURE__ */ Z("<div class=\"worn-section-label svelte-1hv280f\">Recent</div> <!> <div class=\"worn-section-divider svelte-1hv280f\"></div>", 1), vi = /* @__PURE__ */ Z("<div class=\"worn-section-label svelte-1hv280f\">Needs attention</div> <!> <div class=\"worn-section-divider svelte-1hv280f\"></div>", 1), yi = /* @__PURE__ */ Z("<div class=\"worn-section-label svelte-1hv280f\">You might want</div> <!> <div class=\"worn-section-divider svelte-1hv280f\"></div>", 1), bi = /* @__PURE__ */ Z("<div class=\"worn-section-label svelte-1hv280f\">Pinned</div> <!> <div class=\"worn-section-divider svelte-1hv280f\"></div>", 1), xi = /* @__PURE__ */ Z("<details class=\"worn-nav-group svelte-1hv280f\"><summary><span class=\"worn-nav-icon svelte-1hv280f\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" class=\"svelte-1hv280f\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span><span class=\"worn-nav-label svelte-1hv280f\"> </span></summary> <!></details>"), Si = /* @__PURE__ */ Z("<div class=\"worn-menu-backdrop svelte-1hv280f\"></div> <div class=\"worn-context-menu svelte-1hv280f\"><button type=\"button\" class=\"svelte-1hv280f\"> </button> <button type=\"button\" class=\"svelte-1hv280f\">👁 Hide</button> <button type=\"button\" class=\"svelte-1hv280f\">🔄 Reset all</button></div>", 1), Ci = /* @__PURE__ */ Z("<div><div class=\"worn-sidebar-filter svelte-1hv280f\"><input type=\"search\" class=\"worn-filter-input svelte-1hv280f\" placeholder=\"Filter…\"/> <!></div> <nav class=\"worn-nav svelte-1hv280f\"><div class=\"worn-active-indicator svelte-1hv280f\"></div> <!> <!> <!> <!> <!></nav> <!></div>"), wi = {
	hash: "svelte-1hv280f",
	code: ".worn-sidebar-filter.svelte-1hv280f {position:relative;margin:4px 8px 8px;}.worn-filter-input.svelte-1hv280f {width:100%;padding:6px 28px 6px 10px;border:1px solid var(--worn-sidebar-border, var(--cockpit-border, #ddd));border-radius:6px;background:var(--worn-sidebar-bg, var(--cockpit-bg, #f5f5f5));color:var(--worn-sidebar-text, var(--cockpit-text, #000));font:inherit;font-size:12px;box-sizing:border-box;}.worn-filter-input.svelte-1hv280f:focus {outline:2px dashed var(--worn-sidebar-accent, var(--cockpit-accent, #0d9488));outline-offset:-2px;}.worn-filter-clear.svelte-1hv280f {position:absolute;right:4px;top:50%;transform:translateY(-50%);background:none;border:0;color:var(--worn-sidebar-text-muted, var(--cockpit-text-muted, #666));cursor:pointer;font-size:16px;padding:2px 6px;line-height:1;}.worn-nav.svelte-1hv280f {position:relative;}.worn-nav-item.svelte-1hv280f {display:flex;align-items:center;gap:8px;padding:6px 12px;border-radius:var(--worn-nav-radius, 8px);color:var(--worn-sidebar-text, var(--cockpit-text, #000));text-decoration:none;font-size:13px;position:relative;cursor:pointer;min-height:36px;}.worn-nav-item.svelte-1hv280f:hover {background:var(--worn-sidebar-hover, var(--cockpit-hover-bg, rgba(0,0,0,0.05)));}.worn-nav-item.active.svelte-1hv280f {background:var(--worn-sidebar-accent, var(--cockpit-accent, #0d9488));color:var(--worn-sidebar-accent-text, var(--cockpit-accent-text, #fff));anchor-name:--worn-active-item;}.worn-nav-item.is-context-anchor.svelte-1hv280f {anchor-name:--worn-ctx;}.worn-sidebar[data-radius=\"sm\"].svelte-1hv280f {--worn-nav-radius: 4px;}.worn-sidebar[data-radius=\"md\"].svelte-1hv280f {--worn-nav-radius: 8px;}.worn-sidebar[data-radius=\"lg\"].svelte-1hv280f {--worn-nav-radius: 12px;}.worn-sidebar[data-radius=\"pill\"].svelte-1hv280f {--worn-nav-radius: 999px;}.worn-nav-icon.svelte-1hv280f {flex-shrink:0;display:flex;}.worn-nav-icon.svelte-1hv280f svg:where(.svelte-1hv280f) {display:block;}.worn-nav-label.svelte-1hv280f {flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.worn-nav-badge.svelte-1hv280f {display:inline-flex;align-items:center;justify-content:center;min-width:16px;height:16px;padding:0 5px;border-radius:8px;background:var(--worn-sidebar-accent, var(--cockpit-accent, #0d9488));color:var(--worn-sidebar-accent-text, var(--cockpit-accent-text, #fff));font-size:9px;font-weight:700;line-height:16px;text-align:center;}.worn-nav-badge.is-danger.svelte-1hv280f {background:var(--worn-sidebar-danger, var(--cockpit-danger-text, #e74c3c));color:#fff;}.worn-nav-badge.is-warning.svelte-1hv280f {background:var(--worn-sidebar-warning, var(--cockpit-warning-text, #d97706));color:#fff;}.worn-section-label.svelte-1hv280f {font-size:9px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:var(--worn-sidebar-text-muted, var(--cockpit-text-muted, #666));padding:4px 12px 2px;}.worn-section-divider.svelte-1hv280f {height:1px;background:var(--worn-sidebar-border, var(--cockpit-border, #ddd));margin:4px 8px;}.worn-nav-summary.svelte-1hv280f {font-weight:600;\r\n		/* The summary is the SECTION TITLE, not a child row: it stays flush\r\n		   with the base 12px padding instead of inheriting the child indent.\r\n		   (Previously .worn-nav-group > .worn-nav-item set 24px on BOTH the\r\n		   summary and its children, so section titles sat at the same indent\r\n		   as the rows inside them.) */padding-left:12px;}.worn-nav-group.svelte-1hv280f {border-top:1px solid var(--worn-sidebar-border, var(--cockpit-border, #ddd));margin-top:4px;padding-top:4px;}.worn-nav-group.svelte-1hv280f > .worn-nav-item:where(.svelte-1hv280f):not(.worn-nav-summary) {padding-left:24px;}\r\n\r\n	/* Section title selected state: the summary highlights when the group is\r\n	   open (the arrow row the user clicked) or holds the active page. The\r\n	   chevron rotates to point at the expanded children. */.worn-nav-group.svelte-1hv280f > .worn-nav-summary.active:where(.svelte-1hv280f) {background:var(--worn-sidebar-hover, var(--cockpit-hover-bg, rgba(0,0,0,0.05)));color:var(--worn-sidebar-accent, var(--cockpit-accent, #0d9488));}.worn-nav-group.svelte-1hv280f > .worn-nav-summary:where(.svelte-1hv280f) .worn-nav-icon:where(.svelte-1hv280f) {transition:transform 0.18s var(--worn-ease, ease);}.worn-nav-group[open].svelte-1hv280f > .worn-nav-summary:where(.svelte-1hv280f) .worn-nav-icon:where(.svelte-1hv280f) {transform:rotate(90deg);}.worn-active-indicator.svelte-1hv280f {position:absolute;left:2px;width:calc(100% - 4px);position-anchor:--worn-active-item;top:anchor(--worn-active-item top);height:anchor(--worn-active-item height);background:var(--worn-sidebar-accent, var(--cockpit-accent, #0d9488));border-radius:999px;transition:opacity 0.15s ease;pointer-events:none;z-index:0;opacity:0;}.worn-sidebar.svelte-1hv280f:not(.is-collapsed) .worn-nav:where(.svelte-1hv280f):has(.worn-nav-item.active:where(.svelte-1hv280f)) .worn-active-indicator:where(.svelte-1hv280f) {opacity:0.15;}.worn-reorder-btn.svelte-1hv280f {background:none;border:0;color:var(--worn-sidebar-text-muted, var(--cockpit-text-muted, #666));cursor:pointer;font-size:8px;padding:2px;opacity:0;transition:opacity 0.15s;min-height:unset;line-height:1;}.worn-nav-item.svelte-1hv280f:hover .worn-reorder-btn:where(.svelte-1hv280f) {opacity:0.7;}.worn-nav-item.svelte-1hv280f:hover .worn-reorder-btn:where(.svelte-1hv280f):hover {opacity:1;}.worn-menu-backdrop.svelte-1hv280f {position:fixed;inset:0;z-index:100;}.worn-context-menu.svelte-1hv280f {position:fixed;z-index:101;position-anchor:--worn-ctx;left:anchor(right);top:anchor(bottom);background:var(--worn-sidebar-surface, var(--cockpit-surface, #fff));border:1px solid var(--worn-sidebar-border, var(--cockpit-border, #ddd));border-radius:6px;box-shadow:0 4px 12px rgba(0,0,0,0.15);min-width:140px;overflow:hidden;transform:translate(4px, 4px);}.worn-context-menu.svelte-1hv280f button:where(.svelte-1hv280f) {display:flex;align-items:center;gap:8px;width:100%;padding:8px 12px;border:0;background:transparent;color:var(--worn-sidebar-text, var(--cockpit-text, #000));font:inherit;font-size:12px;cursor:pointer;text-align:left;min-height:36px;}.worn-context-menu.svelte-1hv280f button:where(.svelte-1hv280f):hover {background:var(--worn-sidebar-hover, var(--cockpit-hover-bg, rgba(0,0,0,0.05)));}"
};
function Ti(e, t) {
	Ge(t, !0), Lr(e, wi);
	let n = (e, t = _) => {
		var n = hi();
		let r;
		var i = z(n), a = (e) => {
			var n = ui(), r = z(n);
			Ir(r, () => t().icon, !0), D(r), D(n), Q(e, n);
		};
		$(i, (e) => {
			t().icon && e(a);
		});
		var o = B(i, 2), s = z(o, !0);
		D(o);
		var l = B(o, 2), d = (e) => {
			var n = di();
			let r;
			var i = z(n, !0);
			D(n), Sn(() => {
				r = Br(n, 1, "worn-nav-badge svelte-1hv280f", null, r, {
					"is-danger": t().badgeVariant === "danger",
					"is-warning": t().badgeVariant === "warning"
				}), yr(i, t().badge);
			}), Q(e, n);
		};
		$(l, (e) => {
			t().badge !== void 0 && t().badge > 0 && e(d);
		});
		var f = B(l, 2), p = (e) => {
			var n = mi(), r = z(n), i = (e) => {
				var n = fi();
				cr("click", n, (e) => {
					e.stopPropagation(), e.preventDefault(), h(t().id, -1);
				}), Q(e, n);
			}, a = /* @__PURE__ */ j(() => X(C).indexOf(t()) > 0);
			$(r, (e) => {
				X(a) && e(i);
			});
			var o = B(r, 2), s = (e) => {
				var n = pi();
				cr("click", n, (e) => {
					e.stopPropagation(), e.preventDefault(), h(t().id, 1);
				}), Q(e, n);
			}, c = /* @__PURE__ */ j(() => X(C).indexOf(t()) < X(C).length - 1);
			$(o, (e) => {
				X(c) && e(s);
			}), D(n), Q(e, n);
		}, m = /* @__PURE__ */ j(() => X(c).has(t().id));
		$(f, (e) => {
			X(m) && e(p);
		}), D(n), Sn((e, i) => {
			Gr(n, "href", t().href || "#"), r = Br(n, 1, "worn-nav-item svelte-1hv280f", null, r, e), Gr(n, "data-nav-id", t().id), Gr(n, "aria-current", i), yr(s, t().label);
		}, [() => ({
			active: le(t()),
			"is-context-anchor": X(u) === t().id
		}), () => le(t()) ? "page" : void 0]), cr("click", n, (e) => ce(e, t().href)), cr("contextmenu", n, (e) => g(e, t().id)), Q(e, n);
	}, r = ei(t, "activeHref", 3, ""), i = ei(t, "collapsed", 15, !1), a = ei(t, "rounded", 3, "md"), o = /* @__PURE__ */ P(""), s = /* @__PURE__ */ P(-1), c = /* @__PURE__ */ P(Qt(/* @__PURE__ */ new Set())), l = /* @__PURE__ */ P(Qt([])), u = /* @__PURE__ */ P(null), d = /* @__PURE__ */ P(Qt(/* @__PURE__ */ new Set()));
	hn(() => {
		try {
			let e = localStorage.getItem("wornpage-sidebar-open-sections"), n = e ? JSON.parse(e) : null;
			F(d, li(t.items, n), !0);
		} catch {
			F(d, new Set(t.items.filter((e) => e.children).map((e) => e.id)), !0);
		}
	}), hn(() => {
		if (!r()) return;
		let e = ci(t.items, r());
		e && F(d, new Set(X(d)).add(e.id), !0);
	});
	function f(e, t) {
		let n = new Set(X(d));
		t ? n.add(e) : n.delete(e), F(d, n, !0);
	}
	hn(() => {
		try {
			localStorage.setItem("wornpage-sidebar-open-sections", JSON.stringify([...X(d)]));
		} catch {}
	}), hn(() => {
		let e = r();
		if (!(!e || e === "/" || e === X(l)[0])) try {
			let t = JSON.parse(localStorage.getItem("wornpage-sidebar-recent") || "[]");
			F(l, [e, ...t.filter((t) => t !== e)].slice(0, 5), !0), localStorage.setItem("wornpage-sidebar-recent", JSON.stringify(X(l)));
		} catch {}
	}), hn(() => {
		try {
			let e = localStorage.getItem("wornpage-sidebar-favorites");
			e && F(c, new Set(JSON.parse(e)), !0);
		} catch {}
		try {
			let e = localStorage.getItem("wornpage-sidebar-recent");
			e && F(l, JSON.parse(e), !0);
		} catch {}
		try {
			let e = localStorage.getItem("wornpage-sidebar-more-open"), t = localStorage.getItem("wornpage-sidebar-open-sections") !== null;
			e === "0" && !t && F(d, /* @__PURE__ */ new Set(), !0);
		} catch {}
	});
	function p(e) {
		try {
			localStorage.setItem("wornpage-sidebar-favorites", JSON.stringify([...e]));
		} catch {}
	}
	function m(e) {
		let t = new Set(X(c));
		t.has(e) ? t.delete(e) : t.add(e), F(c, t, !0), p(t);
	}
	function h(e, t) {
		let n = [...X(c)], r = n.indexOf(e);
		if (r < 0) return;
		let i = r + t;
		i < 0 || i >= n.length || ([n[r], n[i]] = [n[i], n[r]], F(c, new Set(n), !0), p(X(c)));
	}
	function g(e, t) {
		e.preventDefault(), F(u, t, !0);
	}
	function v() {
		F(u, null);
	}
	function y(e) {
		let t = new Set(X(c));
		t.delete(e), F(c, t, !0), p(t), F(l, X(l).filter((t) => t !== "/" + e), !0), v();
	}
	function b() {
		F(c, /* @__PURE__ */ new Set(), !0), p(/* @__PURE__ */ new Set()), F(l, [], !0);
		try {
			localStorage.removeItem("wornpage-sidebar-recent");
		} catch {}
		v();
	}
	function x(e) {
		let t = [];
		for (let n of e) t.push(n), n.children && t.push(...x(n.children));
		return t;
	}
	let S = /* @__PURE__ */ j(() => x(t.items)), C = /* @__PURE__ */ j(() => X(S).filter((e) => X(c).has(e.id) && (!X(o) || e.label.toLowerCase().includes(X(o).toLowerCase()))));
	function ee(e) {
		if (!X(o)) return e;
		let t = X(o).toLowerCase();
		return e.filter((e) => e.label.toLowerCase().includes(t));
	}
	let te = /* @__PURE__ */ j(() => ee(t.items)), ne = /* @__PURE__ */ j(() => X(l).map((e) => X(S).find((t) => t.href === e)).filter(Boolean)), re = /* @__PURE__ */ j(() => X(S).filter((e) => e.attention || e.badge && e.badge > 0)), ie = /* @__PURE__ */ j(() => r() ? X(S).filter((e) => {
		let t = X(S).find((e) => e.href === r());
		return t && e.relatedTo?.includes(t.id);
	}) : []), ae = /* @__PURE__ */ j(() => [
		...X(C),
		...X(te).filter((e) => !X(c).has(e.id) && !e.children),
		...X(te).filter((e) => !X(c).has(e.id) && e.children && X(d).has(e.id))
	]);
	function oe(e) {
		let n = X(ae).length;
		if (n !== 0) {
			if (e.key === "ArrowDown") e.preventDefault(), F(s, Math.min(X(s) + 1, n - 1), !0), se(X(s));
			else if (e.key === "ArrowUp") e.preventDefault(), F(s, Math.max(X(s) - 1, 0), !0), se(X(s));
			else if (e.key === "Home") e.preventDefault(), F(s, 0), se(0);
			else if (e.key === "End") e.preventDefault(), F(s, n - 1), se(n - 1);
			else if ((e.key === "Enter" || e.key === " ") && X(s) >= 0) {
				e.preventDefault();
				let n = X(ae)[X(s)];
				n?.href && t.onnavigate?.(n.href);
			}
		}
	}
	function se(e) {
		(X(ue)?.querySelectorAll("[data-nav-id]")[e])?.focus();
	}
	function ce(e, n) {
		e.preventDefault(), n && t.onnavigate?.(n);
	}
	function le(e) {
		return e.href ? r() === e.href : !1;
	}
	let ue = /* @__PURE__ */ P(void 0);
	var de = Ci();
	let fe;
	var pe = z(de), me = z(pe);
	Wr(me);
	var he = B(me, 2), ge = (e) => {
		var t = gi();
		cr("click", t, () => F(o, "")), Q(e, t);
	};
	$(he, (e) => {
		X(o) && e(ge);
	}), D(pe);
	var _e = B(pe, 2), ve = B(z(_e), 2), ye = (e) => {
		var t = _i();
		Ar(B(an(t), 2), 17, () => X(ne).slice(0, 3), (e) => e.id, (e, t) => {
			n(e, () => X(t));
		}), Re(2), Q(e, t);
	};
	$(ve, (e) => {
		X(ne).length > 0 && !X(o) && e(ye);
	});
	var be = B(ve, 2), xe = (e) => {
		var t = vi();
		Ar(B(an(t), 2), 17, () => X(re).slice(0, 3), (e) => e.id, (e, t) => {
			n(e, () => X(t));
		}), Re(2), Q(e, t);
	};
	$(be, (e) => {
		X(re).length > 0 && !X(o) && e(xe);
	});
	var Se = B(be, 2), Ce = (e) => {
		var t = yi();
		Ar(B(an(t), 2), 17, () => X(ie).slice(0, 3), (e) => e.id, (e, t) => {
			n(e, () => X(t));
		}), Re(2), Q(e, t);
	};
	$(Se, (e) => {
		X(ie).length > 0 && !X(o) && e(Ce);
	});
	var we = B(Se, 2), Te = (e) => {
		var t = bi();
		Ar(B(an(t), 2), 17, () => X(C), (e) => e.id, (e, t) => {
			n(e, () => X(t));
		}), Re(2), Q(e, t);
	};
	$(we, (e) => {
		X(C).length > 0 && e(Te);
	}), Ar(B(we, 2), 17, () => X(te).filter((e) => !X(c).has(e.id)), (e) => e.id, (e, i) => {
		var a = gr(), o = an(a), s = (e) => {
			var a = xi(), o = z(a);
			let s;
			var l = B(z(o)), u = z(l, !0);
			D(l), D(o), Ar(B(o, 2), 17, () => ee(X(i).children).filter((e) => !X(c).has(e.id)), (e) => e.id, (e, t) => {
				n(e, () => X(t));
			}), D(a), Sn((e, t) => {
				a.open = e, s = Br(o, 1, "worn-nav-item worn-nav-summary svelte-1hv280f", null, s, t), yr(u, X(i).label);
			}, [() => X(d).has(X(i).id), () => ({ active: ci(t.items, r())?.id === X(i).id })]), sr("toggle", a, (e) => f(X(i).id, e.currentTarget.open)), Q(e, a);
		}, l = (e) => {
			n(e, () => X(i));
		};
		$(o, (e) => {
			X(i).children ? e(s) : e(l, -1);
		}), Q(e, a);
	}), D(_e), $r(_e, (e) => F(ue, e), () => X(ue));
	var Ee = B(_e, 2), De = (e) => {
		var t = Si(), n = an(t), r = B(n, 2), i = z(r), a = z(i, !0);
		D(i);
		var o = B(i, 2), s = B(o, 2);
		D(r), Sn((e) => yr(a, e), [() => X(c).has(X(u)) ? "📌 Unpin" : "📌 Pin"]), cr("click", n, v), cr("click", i, () => {
			m(X(u)), v();
		}), cr("click", o, () => y(X(u))), cr("click", s, b), Q(e, t);
	};
	$(Ee, (e) => {
		X(u) && e(De);
	}), D(de), Sn(() => {
		fe = Br(de, 1, "worn-sidebar svelte-1hv280f", null, fe, { "is-collapsed": i() }), Gr(de, "data-radius", a());
	}), cr("keydown", me, oe), Yr(me, () => X(o), (e) => F(o, e)), Q(e, de), Ke();
}
lr([
	"click",
	"contextmenu",
	"keydown"
]);
//#endregion
//#region src/SidebarElement.svelte
var Ei = /* @__PURE__ */ Z("<div class=\"worn-sidebar-element svelte-1i49h1f\"><!></div>"), Di = {
	hash: "svelte-1i49h1f",
	code: ".worn-sidebar-element.svelte-1i49h1f {height:100%;}"
};
function Oi(e, t) {
	Ge(t, !0), Lr(e, Di);
	let n = ei(t, "items", 23, () => []), r = ei(t, "activehref", 7, ""), i = ei(t, "collapsed", 7, !1), a = ei(t, "rounded", 7, "md"), o;
	function s(e, t) {
		o?.dispatchEvent(new CustomEvent(e, {
			detail: t,
			bubbles: !0
		}));
	}
	var c = {
		get items() {
			return n();
		},
		set items(e = []) {
			n(e), It();
		},
		get activehref() {
			return r();
		},
		set activehref(e = "") {
			r(e), It();
		},
		get collapsed() {
			return i();
		},
		set collapsed(e = !1) {
			i(e), It();
		},
		get rounded() {
			return a();
		},
		set rounded(e = "md") {
			a(e), It();
		}
	}, l = Ei();
	return Ti(z(l), {
		get items() {
			return n();
		},
		get activeHref() {
			return r();
		},
		get rounded() {
			return a();
		},
		onnavigate: (e) => s("worn-nav", { href: e }),
		oncollapsed: (e) => s("worn-collapse", { collapsed: e }),
		get collapsed() {
			return i();
		},
		set collapsed(e) {
			i(e);
		}
	}), D(l), $r(l, (e) => o = e, () => o), Q(e, l), Ke(c);
}
customElements.define("worn-sidebar", oi(Oi, {
	items: { type: "Array" },
	activehref: {},
	collapsed: { type: "Boolean" },
	rounded: {}
}, [], []));
//#endregion
export { Oi as default };
