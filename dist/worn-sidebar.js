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
var b = 1024, x = 2048, S = 4096, ee = 8192, C = 16384, w = 32768, te = 1 << 25, ne = 65536, re = 1 << 19, ie = 1 << 20, ae = 1 << 25, oe = 65536, se = 1 << 21, ce = 1 << 22, le = 1 << 23, ue = Symbol("$state"), de = Symbol("legacy props"), fe = Symbol(""), pe = Symbol("attributes"), me = Symbol("class"), he = Symbol("style"), ge = Symbol("text"), _e = Symbol("form reset"), ve = new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), ye = !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml");
//#endregion
//#region node_modules/svelte/src/internal/client/errors.js
function be() {
	throw Error("https://svelte.dev/e/async_derived_orphan");
}
function xe(e, t, n) {
	throw Error("https://svelte.dev/e/each_key_duplicate");
}
function Se(e) {
	throw Error("https://svelte.dev/e/effect_in_teardown");
}
function Ce() {
	throw Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function we(e) {
	throw Error("https://svelte.dev/e/effect_orphan");
}
function Te() {
	throw Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ee() {
	throw Error("https://svelte.dev/e/hydration_failed");
}
function De(e) {
	throw Error("https://svelte.dev/e/props_invalid_value");
}
function Oe() {
	throw Error("https://svelte.dev/e/state_descriptors_fixed");
}
function ke() {
	throw Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ae() {
	throw Error("https://svelte.dev/e/state_unsafe_mutation");
}
function je() {
	throw Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Me() {
	console.warn("https://svelte.dev/e/derived_inert");
}
function Ne(e) {
	console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Pe() {
	console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/hydration.js
var T = !1;
function Fe(e) {
	T = e;
}
var E;
function D(t) {
	if (t === null) throw Ne(), e;
	return E = t;
}
function Ie() {
	return D(/* @__PURE__ */ R(E));
}
function O(t) {
	if (T) {
		if (/* @__PURE__ */ R(E) !== null) throw Ne(), e;
		E = t;
	}
}
function Le(e = 1) {
	if (T) {
		for (var t = e, n = E; t--;) n = /* @__PURE__ */ R(n);
		E = n;
	}
}
function Re(e = !0) {
	for (var t = 0, n = E;;) {
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
function ze(t) {
	if (!t || t.nodeType !== 8) throw Ne(), e;
	return t.data;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/equality.js
function Be(e) {
	return e === this.v;
}
function Ve(e, t) {
	return e == e ? e !== t || typeof e == "object" && !!e || typeof e == "function" : t == t;
}
function He(e) {
	return !Ve(e, this.v);
}
//#endregion
//#region node_modules/svelte/src/internal/client/context.js
var k = null;
function Ue(e) {
	k = e;
}
function We(e, t = !1, n) {
	k = {
		p: k,
		i: !1,
		c: null,
		e: null,
		s: e,
		x: null,
		r: K,
		l: null
	};
}
function Ge(e) {
	var t = k, n = t.e;
	if (n !== null) {
		t.e = null;
		for (var r of n) gn(r);
	}
	return e !== void 0 && (t.x = e), t.i = !0, k = t.p, e ?? {};
}
function Ke() {
	return !0;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/task.js
var qe = [];
function Je() {
	var e = qe;
	qe = [], v(e);
}
function Ye(e) {
	if (qe.length === 0 && !At) {
		var t = qe;
		queueMicrotask(() => {
			t === qe && Je();
		});
	}
	qe.push(e);
}
function Xe() {
	for (; qe.length > 0;) Je();
}
function Ze(e) {
	var t = K;
	if (t === null) return U.f |= le, e;
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
	if (e !== null) for (let t of e) !(t.f & 2) || !(t.f & 65536) || (t.f ^= oe, tt(t.deps));
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
			if (!e.defaultPrevented) for (let t of e.target.elements) t[_e]?.();
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
	let i = e[_e];
	e[_e] = i ? () => {
		i(), r(!0);
	} : () => r(!0), ot();
}
//#endregion
//#region node_modules/svelte/src/reactivity/create-subscriber.js
function lt(e) {
	let t = 0, n = Kt(0), r;
	return () => {
		pn() && (X(n), xn(() => (t === 0 && (r = nr(() => e(() => Xt(n)))), t += 1, () => {
			Ye(() => {
				--t, t === 0 && (r?.(), r = void 0, Xt(n));
			});
		})));
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/boundary.js
var ut = ne | re;
function dt(e, t, n, r) {
	new ft(e, t, n, r);
}
var ft = class {
	parent;
	is_pending = !1;
	transform_error;
	#e;
	#t = T ? E : null;
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
			if (T) {
				let e = this.#t;
				Ie();
				let t = e.data === "[!";
				if (e.data.startsWith("[?")) {
					let t = JSON.parse(e.data.slice(2));
					this.#_(t);
				} else t ? this.#y() : this.#g();
			} else this.#b();
		}, ut), T && (this.#e = E);
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
		Ye(r), t && (this.#s = V(() => {
			t(this.#e, () => e, () => n);
		}));
	}
	#v(e) {
		var t = !1, n = !1;
		let r = () => {
			if (t) {
				Pe();
				return;
			}
			t = !0, n && je(), this.#s !== null && kn(this.#s, () => {
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
		e && (this.is_pending = !0, this.#o = V(() => e(this.#e)), Ye(() => {
			var e = this.#c = document.createDocumentFragment(), t = I();
			e.append(t), this.#a = this.#S(() => V(() => this.#r(t))), this.#u === 0 && (this.#e.before(e), this.#c = null, kn(this.#o, () => {
				this.#o = null;
			}), this.#x(j));
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
			} else this.#x(j);
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
		var t = K, n = U, r = k;
		Rn(this.#i), G(this.#i), Ue(this.#i.ctx);
		try {
			return It.ensure(), e();
		} catch (e) {
			return Ze(e), null;
		} finally {
			Rn(t), G(n), Ue(r);
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
		this.#C(e, t), this.#l += e, !(!this.#m || this.#d) && (this.#d = !0, Ye(() => {
			this.#d = !1, this.#m && Jt(this.#m, this.#l);
		}));
	}
	get_effect_pending() {
		return this.#h(), X(this.#m);
	}
	error(e) {
		if (!this.#n.onerror && !this.#n.failed) throw e;
		j?.is_fork ? (this.#a && j.skip_effect(this.#a), this.#o && j.skip_effect(this.#o), this.#s && j.skip_effect(this.#s), j.oncommit(() => {
			this.#w(e);
		})) : this.#w(e);
	}
	#w(e) {
		this.#a &&= (H(this.#a), null), this.#o &&= (H(this.#o), null), this.#s &&= (H(this.#s), null), T && (D(this.#t), Le(), D(Re()));
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
		Ye(() => {
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
	let i = Ke() ? _t : xt;
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
	var e = K, t = U, n = k, r = j;
	return function(i = !0) {
		Rn(e), G(t), Ue(n), i && !(e.f & 16384) && (r?.activate(), r?.apply());
	};
}
function ht(e = !0) {
	Rn(null), G(null), Ue(null), e && j?.deactivate();
}
function gt() {
	var e = K, t = e.b, n = j, r = !!t?.is_rendered();
	return t?.update_pending_count(1, n), n.increment(r, e), () => {
		t?.update_pending_count(-1, n), n.decrement(r, e);
	};
}
/*#__NO_SIDE_EFFECTS__*/
function _t(e) {
	var n = 2 | x;
	return K !== null && (K.f |= re), {
		ctx: k,
		deps: null,
		effects: null,
		equals: Be,
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
	i === null && be();
	var a = void 0, o = Kt(t), s = !U, c = /* @__PURE__ */ new Set();
	return bn(() => {
		var t = K, n = y();
		a = n.promise;
		try {
			Promise.resolve(e()).then(n.resolve, (e) => {
				e !== ve && n.reject(e);
			}).finally(ht);
		} catch (e) {
			n.reject(e), ht();
		}
		var r = j;
		if (s) {
			if (t.f & 32768) var l = gt();
			if (i.b?.is_rendered()) r.async_deriveds.get(t)?.reject(vt);
			else for (let e of c.values()) e.reject(vt);
			c.add(n), r.async_deriveds.set(t, n);
		}
		let u = (e, t = void 0) => {
			l?.(), c.delete(n), t !== vt && (r.activate(), t ? (o.f |= le, Jt(o, t)) : (o.f & 8388608 && (o.f ^= le), Jt(o, e)), r.deactivate());
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
function bt(e) {
	let t = /* @__PURE__ */ _t(e);
	return Bn(t), t;
}
/*#__NO_SIDE_EFFECTS__*/
function xt(e) {
	let t = /* @__PURE__ */ _t(e);
	return t.equals = He, t;
}
function St(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) H(t[n]);
	}
}
function Ct(e) {
	var n, r = K, i = e.parent;
	if (!In && i !== null && e.v !== t && i.f & 24576) return Me(), e.v;
	Rn(i);
	try {
		e.f &= ~oe, St(e), n = Yn(e);
	} finally {
		Rn(r);
	}
	return n;
}
function wt(e) {
	var t = Ct(e);
	if (!e.equals(t) && (e.wv = Kn(), (!j?.is_fork || e.deps === null) && (j === null ? e.v = t : (j.capture(e, t, !0), Ot?.capture(e, t, !0)), e.deps === null))) {
		A(e, b);
		return;
	}
	In || (M === null ? et(e) : (pn() || j?.is_fork) && M.set(e, t));
}
function Tt(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac !== null && st(() => {
		t.ac.abort(ve), t.ac = null;
	}), t.fn !== null && (t.teardown = _), Zn(t, 0), Tn(t));
}
function Et(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && t.fn !== null && Qn(t);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/batch.js
var Dt = null, j = null, Ot = null, M = null, kt = null, At = !1, jt = !1, Mt = null, Nt = null, Pt = 0, Ft = 1, It = class e {
	id = Ft++;
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
		Dt === null ? Dt = this : (Dt.#n = this, this.#t = Dt), Dt = this;
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
		this.#e = !0, Pt++ > 1e3 && (this.#x(), Lt());
		for (let e of this.#u) this.#d.delete(e), A(e, x), this.schedule(e);
		for (let e of this.#d) A(e, S), this.schedule(e);
		let t = this.#c;
		this.#c = [], this.apply();
		var n = Mt = [], r = [], i = Nt = [];
		for (let e of t) try {
			this.#_(e, n, r);
		} catch (t) {
			throw Ht(e), this.#h() || this.discard(), t;
		}
		if (j = null, i.length > 0) {
			var a = e.ensure();
			for (let e of i) a.schedule(e);
		}
		if (Mt = null, Nt = null, this.#h()) {
			this.#b(r), this.#b(n);
			for (let [e, t] of this.#f) Vt(e, t);
			i.length > 0 && j.#g();
			return;
		}
		let o = this.#v();
		if (o) {
			this.#b(r), this.#b(n), o.#y(this);
			return;
		}
		this.#u.clear(), this.#d.clear();
		for (let e of this.#r) e(this);
		this.#r.clear(), Ot = this, zt(r), zt(n), Ot = null, this.#s?.resolve();
		var s = j;
		if (this.#a === 0 && (this.#c.length === 0 || s !== null) && this.#x(), this.#c.length > 0) if (s !== null) {
			let e = s;
			e.#c.push(...this.#c.filter((t) => !e.#c.includes(t)));
		} else s = this;
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
		this.oncommit(() => e.discard()), e.#x(), j = this, this.#g();
	}
	#b(e) {
		for (var t = 0; t < e.length; t += 1) nt(e[t], this.#u, this.#d);
	}
	capture(e, n, r = !1) {
		e.v !== t && !this.previous.has(e) && this.previous.set(e, e.v), e.f & 8388608 || (this.current.set(e, [n, r]), M?.set(e, n)), this.is_fork || (e.v = n);
	}
	activate() {
		j = this;
	}
	deactivate() {
		j = null, M = null;
	}
	flush() {
		try {
			jt = !0, j = this, this.#g();
		} finally {
			Pt = 0, kt = null, Mt = null, Nt = null, jt = !1, j = null, M = null, Wt.clear();
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
		this.#m || (this.#m = !0, Ye(() => {
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
		if (j === null) {
			let t = j = new e();
			!jt && !At && Ye(() => {
				t.#e || t.flush();
			});
		}
		return j;
	}
	apply() {
		M = null;
	}
	schedule(e) {
		if (kt = e, e.b?.is_pending && e.f & 16777228 && !(e.f & 32768)) {
			e.b.defer_effect(e);
			return;
		}
		for (var t = e; t.parent !== null;) {
			t = t.parent;
			var n = t.f;
			if (Mt !== null && t === K && (U === null || !(U.f & 2))) return;
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
			e === null || (e.#n = t), t === null ? Dt = e : t.#t = e, this.linked = !1;
		}
	}
};
function N(e) {
	var t = At;
	At = !0;
	try {
		var n;
		for (e && (j !== null && !j.is_fork && j.flush(), n = e());;) {
			if (Xe(), j === null) return n;
			j.flush();
		}
	} finally {
		At = t;
	}
}
function Lt() {
	try {
		Te();
	} catch (e) {
		Qe(e, kt);
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
	j.schedule(e);
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
		equals: Be,
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
	return t || (r.equals = He), r;
}
function F(e, t, n = !1) {
	return U !== null && (!W || U.f & 131072) && Ke() && U.f & 4325394 && (zn === null || !zn.has(e)) && Ae(), Jt(e, n ? Qt(t) : t, Nt);
}
function Jt(e, t, n = null) {
	if (!e.equals(t)) {
		Wt.set(e, In ? t : e.v);
		var r = It.ensure();
		if (r.capture(e, t), e.f & 2) {
			let t = e;
			e.f & 2048 && Ct(t), M === null && et(t);
		}
		e.wv = Kn(), Zt(e, x, n), Ke() && K !== null && K.f & 1024 && !(K.f & 96) && (Y === null ? Vn([e]) : Y.push(e)), !r.is_fork && Ut.size > 0 && !Gt && Yt();
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
	if (r !== null) for (var i = Ke(), a = r.length, o = 0; o < a; o++) {
		var s = r[o], c = s.f;
		if (!(!i && s === K)) {
			var l = (c & x) === 0;
			if (l && A(s, t), c & 131072) Ut.add(s);
			else if (c & 2) {
				var u = s;
				M?.delete(u), c & 65536 || (c & 512 && (K === null || !(K.f & 2097152)) && (s.f |= oe), Zt(u, S, n));
			} else if (l) {
				var d = s;
				c & 16 && Rt !== null && Rt.add(d), n === null ? Bt(d) : n.push(d);
			}
		}
	}
}
function Qt(e) {
	if (typeof e != "object" || !e || ue in e) return e;
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
			(!("value" in n) || n.configurable === !1 || n.enumerable === !1 || n.writable === !1) && Oe();
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
			if (i === ue) return e;
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
			if (n === ue) return !0;
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
			ke();
		}
	});
}
var $t, en, tn, nn;
function rn() {
	if ($t === void 0) {
		$t = window, en = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, t = Node.prototype, n = Text.prototype;
		tn = d(t, "firstChild").get, nn = d(t, "nextSibling").get, g(e) && (e[me] = void 0, e[pe] = null, e[he] = void 0, e.__e = void 0), g(n) && (n[ge] = void 0);
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
	if (!T) return /* @__PURE__ */ L(e);
	var n = /* @__PURE__ */ L(E);
	if (n === null) n = E.appendChild(I());
	else if (t && n.nodeType !== 3) {
		var r = I();
		return n?.before(r), D(r), r;
	}
	return t && ln(n), D(n), n;
}
function an(e, t = !1) {
	if (!T) {
		var n = /* @__PURE__ */ L(e);
		return n instanceof Comment && n.data === "" ? /* @__PURE__ */ R(n) : n;
	}
	if (t) {
		if (E?.nodeType !== 3) {
			var r = I();
			return E?.before(r), D(r), r;
		}
		ln(E);
	}
	return E;
}
function B(e, t = 1, n = !1) {
	let r = T ? E : e;
	for (var i; t--;) i = r, r = /* @__PURE__ */ R(r);
	if (!T) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var a = I();
			return r === null ? i?.after(a) : r.before(a), D(a), a;
		}
		ln(r);
	}
	return D(r), r;
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
	K === null && (U === null && we(e), Ce()), In && Se(e);
}
function dn(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function fn(e, t) {
	var n = K;
	n !== null && n.f & 8192 && (e |= ee);
	var r = {
		ctx: k,
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
	j?.register_created_effect(r);
	var i = r;
	if (e & 4) Mt === null ? It.ensure().schedule(r) : Mt.push(r);
	else if (t !== null) {
		try {
			Qn(r);
		} catch (e) {
			throw H(r), e;
		}
		i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && !(i.f & 524288) && (i = i.first, e & 16 && e & 65536 && i !== null && (i.f |= ne));
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
	if (!U && t & 32 && k !== null && !k.i) {
		var n = k;
		(n.e ??= []).push(e);
	} else return gn(e);
}
function gn(e) {
	return fn(4 | ie, e);
}
function _n(e) {
	It.ensure();
	let t = fn(64 | re, e);
	return () => {
		H(t);
	};
}
function vn(e) {
	It.ensure();
	let t = fn(64 | re, e);
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
	return fn(ce | re, e);
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
	return fn(32 | re, e);
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
			e.abort(ve);
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
	(t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (Dn(e.nodes.start, e.nodes.end), n = !0), e.f |= te, Tn(e, t && !n), Zn(e, 0);
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	wn(e), e.f ^= te, e.f |= C;
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
		e.f ^= ee;
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
		e.f ^= ee, e.f & 1024 || (A(e, x), It.ensure().schedule(e));
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
	if (t & 2 && (e.f &= ~oe), t & 4096) {
		for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
			var a = n[i];
			if (qn(a) && wt(a), a.wv > e.wv) return !0;
		}
		t & 512 && M === null && A(e, b);
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
	var t = q, n = J, r = Y, i = U, a = zn, o = k, s = W, c = Wn, l = e.f;
	q = null, J = 0, Y = null, U = l & 96 ? null : e, zn = null, Ue(e.ctx), W = !1, Wn = ++Un, e.ac !== null && (st(() => {
		e.ac.abort(ve);
	}), e.ac = null);
	try {
		e.f |= se;
		var u = e.fn, d = u();
		e.f |= w;
		var f = e.deps, p = j?.is_fork;
		if (q !== null) {
			var m;
			if (p || Zn(e, J), f !== null && J > 0) for (f.length = J + q.length, m = 0; m < q.length; m++) f[J + m] = q[m];
			else e.deps = f = q;
			if (pn() && e.f & 512) for (m = J; m < f.length; m++) (f[m].reactions ??= []).push(e);
		} else !p && f !== null && J < f.length && (Zn(e, J), f.length = J);
		if (Ke() && Y !== null && !W && f !== null && !(e.f & 6146)) for (m = 0; m < Y.length; m++) Jn(Y[m], e);
		if (i !== null && i !== e) {
			if (Un++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = Un;
			if (t !== null) for (let e of t) e.rv = Un;
			Y !== null && (r === null ? r = Y : r.push(...Y));
		}
		return e.f & 8388608 && (e.f ^= le), d;
	} catch (e) {
		return Ze(e);
	} finally {
		e.f ^= se, q = t, J = n, Y = r, U = i, zn = a, Ue(o), W = s, Wn = c;
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
		c.f & 512 && (c.f ^= 512, c.f &= ~oe), c.v !== t && et(c), c.ac !== null && st(() => {
			c.ac.abort(ve), c.ac = null, A(c, x);
		}), Tt(c), Zn(c, 0);
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
	await Promise.resolve(), N();
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
			return (!(i.f & 1024) && i.reactions !== null || tr(i)) && (a = Ct(i)), Wt.set(i, a), a;
		}
		var o = !(i.f & 512) && !W && U !== null && (Fn || !!(U.f & 512)), c = (i.f & w) === 0;
		qn(i) && (o && (i.f |= 512), wt(i)), o && !c && (Et(i), er(i));
	}
	if (M?.has(e)) return M.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function er(e) {
	if (e.f |= 512, e.deps !== null) for (let t of e.deps) (t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (Et(t), er(t));
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
function or(e, t, n) {
	(t[rr] ??= {})[e] = n;
}
function sr(e) {
	for (var t = 0; t < e.length; t++) ir.add(e[t]);
	for (var n of ar) n(e);
}
var cr = null;
function lr(e) {
	var t = this, n = t.ownerDocument, r = e.type, i = e.composedPath?.() || [], a = i[0] || e.target;
	cr = e;
	var o = 0, s = cr === e && e[rr];
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
var ur = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function dr(e) {
	return ur?.createHTML(e) ?? e;
}
function fr(e) {
	var t = cn("template");
	return t.innerHTML = dr(e.replaceAll("<!>", "<!---->")), t.content;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/template.js
function pr(e, t) {
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
		if (T) return pr(E, null), E;
		i === void 0 && (i = fr(a ? e : "<!>" + e), n || (i = /* @__PURE__ */ L(i)));
		var t = r || en ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = /* @__PURE__ */ L(t), s = t.lastChild;
			pr(o, s);
		} else pr(t, t);
		return t;
	};
}
function mr() {
	if (T) return pr(E, null), E;
	var e = document.createDocumentFragment(), t = document.createComment(""), n = I();
	return e.append(t, n), pr(t, n), e;
}
function Q(e, t) {
	if (T) {
		var n = K;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = E), Ie();
		return;
	}
	e !== null && e.before(t);
}
[.../* @__PURE__ */ "allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback".split(".")];
var hr = ["touchstart", "touchmove"];
function gr(e) {
	return hr.includes(e);
}
function _r(e, t) {
	var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
	n !== (e[ge] ??= e.nodeValue) && (e[ge] = n, e.nodeValue = `${n}`);
}
function vr(e, t) {
	return xr(e, t);
}
function yr(t, n) {
	rn(), n.intro = n.intro ?? !1;
	let r = n.target, i = T, a = E;
	try {
		for (var o = /* @__PURE__ */ L(r); o && (o.nodeType !== 8 || o.data !== "[");) o = /* @__PURE__ */ R(o);
		if (!o) throw e;
		Fe(!0), D(o);
		let i = xr(t, {
			...n,
			anchor: o
		});
		return Fe(!1), i;
	} catch (i) {
		if (i instanceof Error && i.message.split("\n").some((e) => e.startsWith("https://svelte.dev/e/"))) throw i;
		return i !== e && console.warn("Failed to hydrate: ", i), n.recover === !1 && Ee(), rn(), on(r), Fe(!1), vr(t, n);
	} finally {
		Fe(i), D(a);
	}
}
var br = /* @__PURE__ */ new Map();
function xr(t, { target: n, anchor: r, props: i = {}, events: a, context: o, intro: s = !0, transformError: l }) {
	rn();
	var u = void 0, d = vn(() => {
		var s = r ?? n.appendChild(I());
		dt(s, { pending: () => {} }, (n) => {
			We({});
			var r = k;
			if (o && (r.c = o), a && (i.$$events = a), T && pr(n, null), u = t(n, i) || {}, T && (K.nodes.end = E, E === null || E.nodeType !== 8 || E.data !== "]")) throw Ne(), e;
			Ge();
		}, l);
		var d = /* @__PURE__ */ new Set(), f = (e) => {
			for (var t = 0; t < e.length; t++) {
				var r = e[t];
				if (!d.has(r)) {
					d.add(r);
					var i = gr(r);
					for (let e of [n, document]) {
						var a = br.get(e);
						a === void 0 && (a = /* @__PURE__ */ new Map(), br.set(e, a));
						var o = a.get(r);
						o === void 0 ? (e.addEventListener(r, lr, { passive: i }), a.set(r, 1)) : a.set(r, o + 1);
					}
				}
			}
		};
		return f(c(ir)), ar.add(f), () => {
			for (var e of d) for (let r of [n, document]) {
				var t = br.get(r), i = t.get(e);
				--i == 0 ? (r.removeEventListener(e, lr), t.delete(e), t.size === 0 && br.delete(r)) : t.set(e, i);
			}
			ar.delete(f), s !== r && s.parentNode?.removeChild(s);
		};
	});
	return Sr.set(u, d), u;
}
var Sr = /* @__PURE__ */ new WeakMap();
function Cr(e, t) {
	let n = Sr.get(e);
	return n ? (Sr.delete(e), n(t)) : Promise.resolve();
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/branches.js
var wr = class {
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
		var n = j, r = sn();
		if (t && !this.#t.has(e) && !this.#n.has(e)) if (r) {
			var i = document.createDocumentFragment(), a = I();
			i.append(a), this.#n.set(e, {
				effect: V(() => t(a)),
				fragment: i
			});
		} else this.#t.set(e, V(() => t(this.anchor)));
		if (this.#e.set(n, e), r) {
			for (let [t, r] of this.#t) t === e ? n.unskip_effect(r) : n.skip_effect(r);
			for (let [t, r] of this.#n) t === e ? n.unskip_effect(r.effect) : n.skip_effect(r.effect);
			n.oncommit(this.#a), n.ondiscard(this.#o);
		} else T && (this.anchor = E), this.#a(n);
	}
};
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/if.js
function $(e, t, n = !1) {
	var r;
	T && (r = E, Ie());
	var i = new wr(e), a = n ? ne : 0;
	function o(e, t) {
		if (T) {
			var n = ze(r);
			if (e !== parseInt(n.substring(1))) {
				var a = Re();
				D(a), i.anchor = a, Fe(!1), i.ensure(e, t), Fe(!0);
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
function Tr(e, t, n) {
	for (var r = [], i = t.length, a, o = t.length, s = 0; s < i; s++) {
		let n = t[s];
		kn(n, () => {
			if (a) {
				if (a.pending.delete(n), a.done.add(n), a.pending.size === 0) {
					var t = e.outrogroups;
					Er(e, c(a.done)), t.delete(a), t.size === 0 && (e.outrogroups = null);
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
		Er(e, t, !l);
	} else a = {
		pending: new Set(t),
		done: /* @__PURE__ */ new Set()
	}, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(a);
}
function Er(e, t, n = !0) {
	var r;
	if (e.pending.size > 0) {
		r = /* @__PURE__ */ new Set();
		for (let t of e.pending.values()) for (let n of t) r.add(e.items.get(n).e);
	}
	for (var i = 0; i < t.length; i++) {
		var a = t[i];
		r?.has(a) ? (a.f |= ae, Nn(a, document.createDocumentFragment())) : H(t[i], n);
	}
}
var Dr;
function Or(e, t, n, r, i, o = null) {
	var s = e, l = /* @__PURE__ */ new Map();
	if (t & 4) {
		var u = e;
		s = T ? D(/* @__PURE__ */ L(u)) : u.appendChild(I());
	}
	T && Ie();
	var d = null, f = /* @__PURE__ */ xt(() => {
		var e = n();
		return a(e) ? e : e == null ? [] : c(e);
	}), p, m = /* @__PURE__ */ new Map(), h = !0;
	function g(e) {
		v.effect.f & 16384 || (v.pending.delete(e), v.fallback = d, Ar(v, p, s, t, r), d !== null && (p.length === 0 ? d.f & 33554432 ? (d.f ^= ae, Mr(d, null, s)) : jn(d) : kn(d, () => {
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
			T && ze(s) === "[!" != (e === 0) && (s = Re(), D(s), Fe(!1), a = !0);
			for (var c = /* @__PURE__ */ new Set(), u = j, v = sn(), y = 0; y < e; y += 1) {
				T && E.nodeType === 8 && E.data === "]" && (s = E, a = !0, Fe(!1));
				var b = p[y], x = r(b, y), S = h ? null : l.get(x);
				S ? (S.v && Jt(S.v, b), S.i && Jt(S.i, y), v && u.unskip_effect(S.e)) : (S = jr(l, h ? s : Dr ??= I(), b, x, y, i, t, n), h || (S.e.f |= ae), l.set(x, S)), c.add(x);
			}
			if (e === 0 && o && !d && (h ? d = V(() => o(s)) : (d = V(() => o(Dr ??= I())), d.f |= ae)), e > c.size && xe("", "", ""), T && e > 0 && D(Re()), !h) if (m.set(u, c), v) {
				for (let [e, t] of l) c.has(e) || u.skip_effect(t.e);
				u.oncommit(g), u.ondiscard(_);
			} else g(u);
			a && Fe(!0), X(f);
		}),
		flags: t,
		items: l,
		pending: m,
		outrogroups: null,
		fallback: d
	};
	h = !1, T && (s = E);
}
function kr(e) {
	for (; e !== null && !(e.f & 32);) e = e.next;
	return e;
}
function Ar(e, t, n, r, i) {
	var a = !!(r & 8), o = t.length, s = e.items, l = kr(e.effect.first), u, d = null, f, p = [], m = [], h, g, _, v;
	if (a) for (v = 0; v < o; v += 1) h = t[v], g = i(h, v), _ = s.get(g).e, _.f & 33554432 || (_.nodes?.a?.measure(), (f ??= /* @__PURE__ */ new Set()).add(_));
	for (v = 0; v < o; v += 1) {
		if (h = t[v], g = i(h, v), _ = s.get(g).e, e.outrogroups !== null) for (let t of e.outrogroups) t.pending.delete(_), t.done.delete(_);
		if (_.f & 8192 && (jn(_), a && (_.nodes?.a?.unfix(), (f ??= /* @__PURE__ */ new Set()).delete(_))), _.f & 33554432) if (_.f ^= ae, _ === l) Mr(_, null, n);
		else {
			var y = d ? d.next : l;
			_ === e.effect.last && (e.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), Nr(e, d, _), Nr(e, _, y), Mr(_, y, n), d = _, p = [], m = [], l = kr(d.next);
			continue;
		}
		if (_ !== l) {
			if (u !== void 0 && u.has(_)) {
				if (p.length < m.length) {
					var b = m[0], x;
					d = b.prev;
					var S = p[0], ee = p[p.length - 1];
					for (x = 0; x < p.length; x += 1) Mr(p[x], b, n);
					for (x = 0; x < m.length; x += 1) u.delete(m[x]);
					Nr(e, S.prev, ee.next), Nr(e, d, S), Nr(e, ee, b), l = b, d = ee, --v, p = [], m = [];
				} else u.delete(_), Mr(_, l, n), Nr(e, _.prev, _.next), Nr(e, _, d === null ? e.effect.first : d.next), Nr(e, d, _), d = _;
				continue;
			}
			for (p = [], m = []; l !== null && l !== _;) (u ??= /* @__PURE__ */ new Set()).add(l), m.push(l), l = kr(l.next);
			if (l === null) continue;
		}
		_.f & 33554432 || p.push(_), d = _, l = kr(_.next);
	}
	if (e.outrogroups !== null) {
		for (let t of e.outrogroups) t.pending.size === 0 && (Er(e, c(t.done)), e.outrogroups?.delete(t));
		e.outrogroups.size === 0 && (e.outrogroups = null);
	}
	if (l !== null || u !== void 0) {
		var C = [];
		if (u !== void 0) for (_ of u) _.f & 8192 || C.push(_);
		for (; l !== null;) !(l.f & 8192) && l !== e.fallback && C.push(l), l = kr(l.next);
		var w = C.length;
		if (w > 0) {
			var te = r & 4 && o === 0 ? n : null;
			if (a) {
				for (v = 0; v < w; v += 1) C[v].nodes?.a?.measure();
				for (v = 0; v < w; v += 1) C[v].nodes?.a?.fix();
			}
			Tr(e, C, te);
		}
	}
	a && Ye(() => {
		if (f !== void 0) for (_ of f) _.nodes?.a?.apply();
	});
}
function jr(e, t, n, r, i, a, o, s) {
	var c = o & 1 ? o & 16 ? Kt(n) : /* @__PURE__ */ qt(n, !1, !1) : null, l = o & 2 ? Kt(i) : null;
	return {
		v: c,
		i: l,
		e: V(() => (a(t, c ?? n, l ?? i, s), () => {
			e.delete(r);
		}))
	};
}
function Mr(e, t, n) {
	if (e.nodes) for (var r = e.nodes.start, i = e.nodes.end, a = t && !(t.f & 33554432) ? t.nodes.start : n; r !== null;) {
		var o = /* @__PURE__ */ R(r);
		if (a.before(r), r === i) return;
		r = o;
	}
}
function Nr(e, t, n) {
	t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function Pr(t, n, a = !1, o = !1, s = !1, c = !1) {
	var l = t, u = "";
	if (a) {
		var d = t;
		T && (l = D(/* @__PURE__ */ L(d)));
	}
	Sn(() => {
		var t = K;
		if (u === (u = n() ?? "")) {
			T && Ie();
			return;
		}
		if (a && !T) {
			t.nodes = null, d.innerHTML = u, u !== "" && pr(/* @__PURE__ */ L(d), d.lastChild);
			return;
		}
		if (t.nodes !== null && (Dn(t.nodes.start, t.nodes.end), t.nodes = null), u !== "") {
			if (T) {
				for (var c = E.data, f = Ie(), p = f; f !== null && (f.nodeType !== 8 || f.data !== "");) p = f, f = /* @__PURE__ */ R(f);
				if (f === null) throw Ne(), e;
				pr(E, p), l = D(f);
				return;
			}
			var m = cn(o ? "svg" : s ? "math" : "template", o ? r : s ? i : void 0);
			m.innerHTML = u;
			var h = o || s ? m : m.content;
			if (pr(/* @__PURE__ */ L(h), h.lastChild), o || s) for (; /* @__PURE__ */ L(h);) l.before(/* @__PURE__ */ L(h));
			else l.before(h);
		}
	});
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/css.js
function Fr(e, t) {
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
var Ir = [..." 	\n\r\f\xA0\v﻿"];
function Lr(e, t, n) {
	var r = e == null ? "" : "" + e;
	if (t && (r = r ? r + " " + t : t), n) {
		for (var i of Object.keys(n)) if (n[i]) r = r ? r + " " + i : i;
		else if (r.length) for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0;) {
			var s = o + a;
			(o === 0 || Ir.includes(r[o - 1])) && (s === r.length || Ir.includes(r[s])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(s + 1) : o = s;
		}
	}
	return r === "" ? null : r;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/class.js
function Rr(e, t, n, r, i, a) {
	var o = e[me];
	if (T || o !== n || o === void 0) {
		var s = Lr(n, r, a);
		(!T || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e[me] = n;
	} else if (a && i !== a) for (var c in a) {
		var l = !!a[c];
		(i == null || l !== !!i[c]) && e.classList.toggle(c, l);
	}
	return a;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/attributes.js
var zr = Symbol("is custom element"), Br = Symbol("is html"), Vr = ye ? "link" : "LINK";
function Hr(e) {
	if (T) {
		var t = !1, n = () => {
			if (!t) {
				if (t = !0, e.hasAttribute("value")) {
					var n = e.value;
					Ur(e, "value", null), e.value = n;
				}
				if (e.hasAttribute("checked")) {
					var r = e.checked;
					Ur(e, "checked", null), e.checked = r;
				}
			}
		};
		e[_e] = n, Ye(n), ot();
	}
}
function Ur(e, t, n, r) {
	var i = Wr(e);
	T && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === Vr) || i[t] !== (i[t] = n) && (t === "loading" && (e[fe] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Kr(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Wr(e) {
	return e[pe] ??= {
		[zr]: e.nodeName.includes("-"),
		[Br]: e.namespaceURI === n
	};
}
var Gr = /* @__PURE__ */ new Map();
function Kr(e) {
	var t = e.getAttribute("is") || e.nodeName, n = Gr.get(t);
	if (n) return n;
	Gr.set(t, n = []);
	for (var r, i = e, a = Element.prototype; a !== i;) {
		for (var o in r = f(i), r) r[o].set && o !== "innerHTML" && o !== "textContent" && o !== "innerText" && n.push(o);
		i = h(i);
	}
	return n;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/input.js
function qr(e, t, n = t) {
	var r = /* @__PURE__ */ new WeakSet();
	ct(e, "input", async (i) => {
		var a = i ? e.defaultValue : e.value;
		if (a = Jr(e) ? Yr(a) : a, n(a), j !== null && r.add(j), await $n(), a !== (a = t())) {
			var o = e.selectionStart, s = e.selectionEnd, c = e.value.length;
			if (e.value = a ?? "", s !== null) {
				var l = e.value.length;
				o === s && s === c && l > c ? (e.selectionStart = l, e.selectionEnd = l) : (e.selectionStart = o, e.selectionEnd = Math.min(s, l));
			}
		}
	}), (T && e.defaultValue !== e.value || nr(t) == null && e.value) && (n(Jr(e) ? Yr(e.value) : e.value), j !== null && r.add(j)), xn(() => {
		var n = t();
		if (e === document.activeElement) {
			var i = j;
			if (r.has(i)) return;
		}
		Jr(e) && n === Yr(e.value) || e.type === "date" && !n && !e.value || n !== e.value && (e.value = n ?? "");
	});
}
function Jr(e) {
	var t = e.type;
	return t === "number" || t === "range";
}
function Yr(e) {
	return e === "" ? null : +e;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/this.js
function Xr(e, t) {
	return e === t || e?.[ue] === t;
}
function Zr(e = {}, t, n, r) {
	var i = k.r, a = K;
	return yn(() => {
		var o, s;
		return xn(() => {
			o = s, s = r?.() || [], nr(() => {
				Xr(n(...s), e) || (t(e, ...s), o && Xr(n(...o), e) && t(null, ...o));
			});
		}), () => {
			let r = a;
			for (; r !== i && r.parent !== null && r.parent.f & 33554432;) r = r.parent;
			let o = () => {
				s && Xr(n(...s), e) && t(null, ...s);
			}, c = r.teardown;
			r.teardown = () => {
				o(), c?.();
			};
		};
	}), e;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/universal.js
function Qr(e, t, n, r, i) {
	var a = () => {
		r(n[e]);
	};
	n.addEventListener(t, a), i ? xn(() => {
		n[e] = i();
	}) : a(), (n === document.body || n === window || n === document) && mn(() => {
		n.removeEventListener(t, a);
	});
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/props.js
function $r(e, t, n, r) {
	var i = !0, a = !!(n & 8), o = !!(n & 16), s = r, c = !0, l = void 0, u = () => o && i ? (l ??= /* @__PURE__ */ _t(r), X(l)) : (c && (c = !1, s = o ? nr(r) : r), s);
	let f;
	if (a) {
		var p = ue in e || de in e;
		f = d(e, t)?.set ?? (p && t in e ? (n) => e[t] = n : void 0);
	}
	var m, h = !1;
	a ? [m, h] = it(() => e[t]) : m = e[t], m === void 0 && r !== void 0 && (m = u(), f && (i && De(t), f(m)));
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
	var v = !1, y = (n & 1 ? _t : xt)(() => (v = !1, g()));
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
function ei(e) {
	return new ti(e);
}
var ti = class {
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
				return r === de || (X(t.get(r) ?? n(r, Reflect.get(e, r))), Reflect.has(e, r));
			},
			set(e, r, i) {
				return F(t.get(r) ?? n(r, i), i), Reflect.set(e, r, i);
			}
		});
		this.#t = (e.hydrate ? yr : vr)(e.component, {
			target: e.target,
			anchor: e.anchor,
			props: r,
			context: e.context,
			intro: e.intro ?? !1,
			recover: e.recover,
			transformError: e.transformError
		}), (!e?.props?.$$host || e.sync === !1) && N(), this.#e = r.$$events;
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
			Cr(this.#t);
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
}, ni;
typeof HTMLElement == "function" && (ni = class extends HTMLElement {
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
			let t = {}, n = ii(this);
			for (let r of this.$$s) r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
			for (let e of this.attributes) {
				let t = this.$$g_p(e.name);
				t in this.$$d || (this.$$d[t] = ri(t, e.value, this.$$p_d, "toProp"));
			}
			for (let e in this.$$p_d) !(e in this.$$d) && this[e] !== void 0 && (this.$$d[e] = this[e], delete this[e]);
			this.$$c = ei({
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
						let t = ri(e, this.$$d[e], this.$$p_d, "toAttribute");
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
		this.$$r || (e = this.$$g_p(e), this.$$d[e] = ri(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
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
function ri(e, t, n, r) {
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
function ii(e) {
	let t = {};
	return e.childNodes.forEach((e) => {
		t[e.slot || "default"] = !0;
	}), t;
}
function ai(e, t, n, r, i, a) {
	let o = class extends ni {
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
				n = ri(e, n, t), this.$$d[e] = n;
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
//#region src/Sidebar.svelte
var oi = /* @__PURE__ */ Z("<span class=\"worn-nav-icon svelte-1hv280f\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" class=\"svelte-1hv280f\"></svg></span>"), si = /* @__PURE__ */ Z("<span> </span>"), ci = /* @__PURE__ */ Z("<button type=\"button\" class=\"worn-reorder-btn svelte-1hv280f\" title=\"Move up\">▲</button>"), li = /* @__PURE__ */ Z("<button type=\"button\" class=\"worn-reorder-btn svelte-1hv280f\" title=\"Move down\">▼</button>"), ui = /* @__PURE__ */ Z("<span class=\"worn-nav-reorder\"><!> <!></span>"), di = /* @__PURE__ */ Z("<a><!> <span class=\"worn-nav-label svelte-1hv280f\"> </span> <!> <!></a>"), fi = /* @__PURE__ */ Z("<button type=\"button\" class=\"worn-filter-clear svelte-1hv280f\" aria-label=\"Clear filter\">×</button>"), pi = /* @__PURE__ */ Z("<div class=\"worn-section-label svelte-1hv280f\">Recent</div> <!> <div class=\"worn-section-divider svelte-1hv280f\"></div>", 1), mi = /* @__PURE__ */ Z("<div class=\"worn-section-label svelte-1hv280f\">Needs attention</div> <!> <div class=\"worn-section-divider svelte-1hv280f\"></div>", 1), hi = /* @__PURE__ */ Z("<div class=\"worn-section-label svelte-1hv280f\">You might want</div> <!> <div class=\"worn-section-divider svelte-1hv280f\"></div>", 1), gi = /* @__PURE__ */ Z("<div class=\"worn-section-label svelte-1hv280f\">Pinned</div> <!> <div class=\"worn-section-divider svelte-1hv280f\"></div>", 1), _i = /* @__PURE__ */ Z("<details class=\"worn-nav-group svelte-1hv280f\"><summary class=\"worn-nav-item worn-nav-summary svelte-1hv280f\"><span class=\"worn-nav-icon svelte-1hv280f\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" class=\"svelte-1hv280f\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span><span class=\"worn-nav-label svelte-1hv280f\"> </span></summary> <!></details>"), vi = /* @__PURE__ */ Z("<div class=\"worn-menu-backdrop svelte-1hv280f\"></div> <div class=\"worn-context-menu svelte-1hv280f\"><button type=\"button\" class=\"svelte-1hv280f\"> </button> <button type=\"button\" class=\"svelte-1hv280f\">👁 Hide</button> <button type=\"button\" class=\"svelte-1hv280f\">🔄 Reset all</button></div>", 1), yi = /* @__PURE__ */ Z("<div><div class=\"worn-sidebar-filter svelte-1hv280f\"><input type=\"search\" class=\"worn-filter-input svelte-1hv280f\" placeholder=\"Filter…\"/> <!></div> <nav class=\"worn-nav svelte-1hv280f\"><div class=\"worn-active-indicator svelte-1hv280f\"></div> <!> <!> <!> <!> <!></nav> <!></div>"), bi = {
	hash: "svelte-1hv280f",
	code: ".worn-sidebar-filter.svelte-1hv280f {position:relative;margin:4px 8px 8px;}.worn-filter-input.svelte-1hv280f {width:100%;padding:6px 28px 6px 10px;border:1px solid var(--worn-sidebar-border, var(--cockpit-border, #ddd));border-radius:6px;background:var(--worn-sidebar-bg, var(--cockpit-bg, #f5f5f5));color:var(--worn-sidebar-text, var(--cockpit-text, #000));font:inherit;font-size:12px;box-sizing:border-box;}.worn-filter-input.svelte-1hv280f:focus {outline:2px dashed var(--worn-sidebar-accent, var(--cockpit-accent, #0d9488));outline-offset:-2px;}.worn-filter-clear.svelte-1hv280f {position:absolute;right:4px;top:50%;transform:translateY(-50%);background:none;border:0;color:var(--worn-sidebar-text-muted, var(--cockpit-text-muted, #666));cursor:pointer;font-size:16px;padding:2px 6px;line-height:1;}.worn-nav.svelte-1hv280f {position:relative;}.worn-nav-item.svelte-1hv280f {display:flex;align-items:center;gap:8px;padding:6px 12px;border-radius:var(--worn-nav-radius, 8px);color:var(--worn-sidebar-text, var(--cockpit-text, #000));text-decoration:none;font-size:13px;position:relative;cursor:pointer;min-height:36px;}.worn-nav-item.svelte-1hv280f:hover {background:var(--worn-sidebar-hover, var(--cockpit-hover-bg, rgba(0,0,0,0.05)));}.worn-nav-item.active.svelte-1hv280f {background:var(--worn-sidebar-accent, var(--cockpit-accent, #0d9488));color:var(--worn-sidebar-accent-text, var(--cockpit-accent-text, #fff));anchor-name:--worn-active-item;}.worn-nav-item.is-context-anchor.svelte-1hv280f {anchor-name:--worn-ctx;}.worn-sidebar[data-radius=\"sm\"].svelte-1hv280f {--worn-nav-radius: 4px;}.worn-sidebar[data-radius=\"md\"].svelte-1hv280f {--worn-nav-radius: 8px;}.worn-sidebar[data-radius=\"lg\"].svelte-1hv280f {--worn-nav-radius: 12px;}.worn-sidebar[data-radius=\"pill\"].svelte-1hv280f {--worn-nav-radius: 999px;}.worn-nav-icon.svelte-1hv280f {flex-shrink:0;display:flex;}.worn-nav-icon.svelte-1hv280f svg:where(.svelte-1hv280f) {display:block;}.worn-nav-label.svelte-1hv280f {flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.worn-nav-badge.svelte-1hv280f {display:inline-flex;align-items:center;justify-content:center;min-width:16px;height:16px;padding:0 5px;border-radius:8px;background:var(--worn-sidebar-accent, var(--cockpit-accent, #0d9488));color:var(--worn-sidebar-accent-text, var(--cockpit-accent-text, #fff));font-size:9px;font-weight:700;line-height:16px;text-align:center;}.worn-nav-badge.is-danger.svelte-1hv280f {background:var(--worn-sidebar-danger, var(--cockpit-danger-text, #e74c3c));color:#fff;}.worn-section-label.svelte-1hv280f {font-size:9px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:var(--worn-sidebar-text-muted, var(--cockpit-text-muted, #666));padding:4px 12px 2px;}.worn-section-divider.svelte-1hv280f {height:1px;background:var(--worn-sidebar-border, var(--cockpit-border, #ddd));margin:4px 8px;}.worn-nav-summary.svelte-1hv280f {font-weight:600;}.worn-nav-group.svelte-1hv280f {border-top:1px solid var(--worn-sidebar-border, var(--cockpit-border, #ddd));margin-top:4px;padding-top:4px;}.worn-nav-group.svelte-1hv280f > .worn-nav-item:where(.svelte-1hv280f) {padding-left:24px;}.worn-active-indicator.svelte-1hv280f {position:absolute;left:2px;width:calc(100% - 4px);position-anchor:--worn-active-item;top:anchor(--worn-active-item top);height:anchor(--worn-active-item height);background:var(--worn-sidebar-accent, var(--cockpit-accent, #0d9488));border-radius:999px;transition:opacity 0.15s ease;pointer-events:none;z-index:0;opacity:0;}.worn-sidebar.svelte-1hv280f:not(.is-collapsed) .worn-nav:where(.svelte-1hv280f):has(.worn-nav-item.active:where(.svelte-1hv280f)) .worn-active-indicator:where(.svelte-1hv280f) {opacity:0.15;}.worn-reorder-btn.svelte-1hv280f {background:none;border:0;color:var(--worn-sidebar-text-muted, var(--cockpit-text-muted, #666));cursor:pointer;font-size:8px;padding:2px;opacity:0;transition:opacity 0.15s;min-height:unset;line-height:1;}.worn-nav-item.svelte-1hv280f:hover .worn-reorder-btn:where(.svelte-1hv280f) {opacity:0.7;}.worn-nav-item.svelte-1hv280f:hover .worn-reorder-btn:where(.svelte-1hv280f):hover {opacity:1;}.worn-menu-backdrop.svelte-1hv280f {position:fixed;inset:0;z-index:100;}.worn-context-menu.svelte-1hv280f {position:fixed;z-index:101;position-anchor:--worn-ctx;left:anchor(right);top:anchor(bottom);background:var(--worn-sidebar-surface, var(--cockpit-surface, #fff));border:1px solid var(--worn-sidebar-border, var(--cockpit-border, #ddd));border-radius:6px;box-shadow:0 4px 12px rgba(0,0,0,0.15);min-width:140px;overflow:hidden;transform:translate(4px, 4px);}.worn-context-menu.svelte-1hv280f button:where(.svelte-1hv280f) {display:flex;align-items:center;gap:8px;width:100%;padding:8px 12px;border:0;background:transparent;color:var(--worn-sidebar-text, var(--cockpit-text, #000));font:inherit;font-size:12px;cursor:pointer;text-align:left;min-height:36px;}.worn-context-menu.svelte-1hv280f button:where(.svelte-1hv280f):hover {background:var(--worn-sidebar-hover, var(--cockpit-hover-bg, rgba(0,0,0,0.05)));}"
};
function xi(e, t) {
	We(t, !0), Fr(e, bi);
	let n = (e, t = _) => {
		var n = di();
		let r;
		var i = z(n), a = (e) => {
			var n = oi(), r = z(n);
			Pr(r, () => t().icon, !0), O(r), O(n), Q(e, n);
		};
		$(i, (e) => {
			t().icon && e(a);
		});
		var o = B(i, 2), s = z(o, !0);
		O(o);
		var c = B(o, 2), l = (e) => {
			var n = si();
			let r;
			var i = z(n, !0);
			O(n), Sn(() => {
				r = Rr(n, 1, "worn-nav-badge svelte-1hv280f", null, r, { "is-danger": t().badgeVariant === "danger" }), _r(i, t().badge);
			}), Q(e, n);
		};
		$(c, (e) => {
			t().badge !== void 0 && t().badge > 0 && e(l);
		});
		var u = B(c, 2), d = (e) => {
			var n = ui(), r = z(n), i = (e) => {
				var n = ci();
				or("click", n, (e) => {
					e.stopPropagation(), e.preventDefault(), v(t().id, -1);
				}), Q(e, n);
			}, a = /* @__PURE__ */ bt(() => X(w).indexOf(t()) > 0);
			$(r, (e) => {
				X(a) && e(i);
			});
			var o = B(r, 2), s = (e) => {
				var n = li();
				or("click", n, (e) => {
					e.stopPropagation(), e.preventDefault(), v(t().id, 1);
				}), Q(e, n);
			}, c = /* @__PURE__ */ bt(() => X(w).indexOf(t()) < X(w).length - 1);
			$(o, (e) => {
				X(c) && e(s);
			}), O(n), Q(e, n);
		}, p = /* @__PURE__ */ bt(() => X(f).has(t().id));
		$(u, (e) => {
			X(p) && e(d);
		}), O(n), Sn((e, i) => {
			Ur(n, "href", t().href || "#"), r = Rr(n, 1, "worn-nav-item svelte-1hv280f", null, r, e), Ur(n, "data-nav-id", t().id), Ur(n, "aria-current", i), _r(s, t().label);
		}, [() => ({
			active: ue(t()),
			"is-context-anchor": X(m) === t().id
		}), () => ue(t()) ? "page" : void 0]), or("click", n, (e) => le(e, t().href)), or("contextmenu", n, (e) => y(e, t().id)), Q(e, n);
	}, r = $r(t, "items", 7), i = $r(t, "activeHref", 7, ""), a = $r(t, "collapsed", 15, !1), o = $r(t, "rounded", 7, "md"), s = $r(t, "onnavigate", 7), c = $r(t, "oncollapsed", 7), l = /* @__PURE__ */ P(!0), u = /* @__PURE__ */ P(""), d = /* @__PURE__ */ P(-1), f = /* @__PURE__ */ P(Qt(/* @__PURE__ */ new Set())), p = /* @__PURE__ */ P(Qt([])), m = /* @__PURE__ */ P(null);
	hn(() => {
		let e = i();
		if (!(!e || e === "/" || e === X(p)[0])) try {
			let t = JSON.parse(localStorage.getItem("wornpage-sidebar-recent") || "[]");
			F(p, [e, ...t.filter((t) => t !== e)].slice(0, 5), !0), localStorage.setItem("wornpage-sidebar-recent", JSON.stringify(X(p)));
		} catch {}
	}), hn(() => {
		try {
			let e = localStorage.getItem("wornpage-sidebar-favorites");
			e && F(f, new Set(JSON.parse(e)), !0);
		} catch {}
		try {
			let e = localStorage.getItem("wornpage-sidebar-recent");
			e && F(p, JSON.parse(e), !0);
		} catch {}
		try {
			localStorage.getItem("wornpage-sidebar-more-open") === "0" && F(l, !1);
		} catch {}
	});
	function h(e) {
		try {
			localStorage.setItem("wornpage-sidebar-favorites", JSON.stringify([...e]));
		} catch {}
	}
	function g(e) {
		let t = new Set(X(f));
		t.has(e) ? t.delete(e) : t.add(e), F(f, t, !0), h(t);
	}
	function v(e, t) {
		let n = [...X(f)], r = n.indexOf(e);
		if (r < 0) return;
		let i = r + t;
		i < 0 || i >= n.length || ([n[r], n[i]] = [n[i], n[r]], F(f, new Set(n), !0), h(X(f)));
	}
	function y(e, t) {
		e.preventDefault(), F(m, t, !0);
	}
	function b() {
		F(m, null);
	}
	function x(e) {
		let t = new Set(X(f));
		t.delete(e), F(f, t, !0), h(t), F(p, X(p).filter((t) => t !== "/" + e), !0), b();
	}
	function S() {
		F(f, /* @__PURE__ */ new Set(), !0), h(/* @__PURE__ */ new Set()), F(p, [], !0);
		try {
			localStorage.removeItem("wornpage-sidebar-recent");
		} catch {}
		b();
	}
	function ee(e) {
		let t = [];
		for (let n of e) t.push(n), n.children && t.push(...ee(n.children));
		return t;
	}
	let C = /* @__PURE__ */ bt(() => ee(r())), w = /* @__PURE__ */ bt(() => X(C).filter((e) => X(f).has(e.id) && (!X(u) || e.label.toLowerCase().includes(X(u).toLowerCase()))));
	function te(e) {
		if (!X(u)) return e;
		let t = X(u).toLowerCase();
		return e.filter((e) => e.label.toLowerCase().includes(t));
	}
	let ne = /* @__PURE__ */ bt(() => te(r())), re = /* @__PURE__ */ bt(() => X(p).map((e) => X(C).find((t) => t.href === e)).filter(Boolean)), ie = /* @__PURE__ */ bt(() => X(C).filter((e) => e.attention || e.badge && e.badge > 0)), ae = /* @__PURE__ */ bt(() => i() ? X(C).filter((e) => {
		let t = X(C).find((e) => e.href === i());
		return t && e.relatedTo?.includes(t.id);
	}) : []), oe = /* @__PURE__ */ bt(() => [
		...X(w),
		...X(ne).filter((e) => !X(f).has(e.id) && !e.children),
		...X(l) ? X(ne).filter((e) => !X(f).has(e.id) && e.children) : []
	]);
	function se(e) {
		let t = X(oe).length;
		if (t !== 0) {
			if (e.key === "ArrowDown") e.preventDefault(), F(d, Math.min(X(d) + 1, t - 1), !0), ce(X(d));
			else if (e.key === "ArrowUp") e.preventDefault(), F(d, Math.max(X(d) - 1, 0), !0), ce(X(d));
			else if (e.key === "Home") e.preventDefault(), F(d, 0), ce(0);
			else if (e.key === "End") e.preventDefault(), F(d, t - 1), ce(t - 1);
			else if ((e.key === "Enter" || e.key === " ") && X(d) >= 0) {
				e.preventDefault();
				let t = X(oe)[X(d)];
				t?.href && s()?.(t.href);
			}
		}
	}
	function ce(e) {
		(X(de)?.querySelectorAll("[data-nav-id]")[e])?.focus();
	}
	function le(e, t) {
		e.preventDefault(), t && s()?.(t);
	}
	function ue(e) {
		return e.href ? i() === e.href : !1;
	}
	let de = /* @__PURE__ */ P(void 0);
	var fe = {
		get items() {
			return r();
		},
		set items(e) {
			r(e), N();
		},
		get activeHref() {
			return i();
		},
		set activeHref(e = "") {
			i(e), N();
		},
		get collapsed() {
			return a();
		},
		set collapsed(e = !1) {
			a(e), N();
		},
		get rounded() {
			return o();
		},
		set rounded(e = "md") {
			o(e), N();
		},
		get onnavigate() {
			return s();
		},
		set onnavigate(e) {
			s(e), N();
		},
		get oncollapsed() {
			return c();
		},
		set oncollapsed(e) {
			c(e), N();
		}
	}, pe = yi();
	let me;
	var he = z(pe), ge = z(he);
	Hr(ge);
	var _e = B(ge, 2), ve = (e) => {
		var t = fi();
		or("click", t, () => F(u, "")), Q(e, t);
	};
	$(_e, (e) => {
		X(u) && e(ve);
	}), O(he);
	var ye = B(he, 2), be = B(z(ye), 2), xe = (e) => {
		var t = pi();
		Or(B(an(t), 2), 17, () => X(re).slice(0, 3), (e) => e.id, (e, t) => {
			n(e, () => X(t));
		}), Le(2), Q(e, t);
	};
	$(be, (e) => {
		X(re).length > 0 && !X(u) && e(xe);
	});
	var Se = B(be, 2), Ce = (e) => {
		var t = mi();
		Or(B(an(t), 2), 17, () => X(ie).slice(0, 3), (e) => e.id, (e, t) => {
			n(e, () => X(t));
		}), Le(2), Q(e, t);
	};
	$(Se, (e) => {
		X(ie).length > 0 && !X(u) && e(Ce);
	});
	var we = B(Se, 2), Te = (e) => {
		var t = hi();
		Or(B(an(t), 2), 17, () => X(ae).slice(0, 3), (e) => e.id, (e, t) => {
			n(e, () => X(t));
		}), Le(2), Q(e, t);
	};
	$(we, (e) => {
		X(ae).length > 0 && !X(u) && e(Te);
	});
	var Ee = B(we, 2), De = (e) => {
		var t = gi();
		Or(B(an(t), 2), 17, () => X(w), (e) => e.id, (e, t) => {
			n(e, () => X(t));
		}), Le(2), Q(e, t);
	};
	$(Ee, (e) => {
		X(w).length > 0 && e(De);
	}), Or(B(Ee, 2), 17, () => X(ne).filter((e) => !X(f).has(e.id)), (e) => e.id, (e, t) => {
		var r = mr(), i = an(r), a = (e) => {
			var r = _i(), i = z(r), a = B(z(i)), o = z(a, !0);
			O(a), O(i), Or(B(i, 2), 17, () => te(X(t).children).filter((e) => !X(f).has(e.id)), (e) => e.id, (e, t) => {
				n(e, () => X(t));
			}), O(r), Sn(() => _r(o, X(t).label)), Qr("open", "toggle", r, (e) => F(l, e), () => X(l)), Q(e, r);
		}, o = (e) => {
			n(e, () => X(t));
		};
		$(i, (e) => {
			X(t).children ? e(a) : e(o, -1);
		}), Q(e, r);
	}), O(ye), Zr(ye, (e) => F(de, e), () => X(de));
	var Oe = B(ye, 2), ke = (e) => {
		var t = vi(), n = an(t), r = B(n, 2), i = z(r), a = z(i, !0);
		O(i);
		var o = B(i, 2), s = B(o, 2);
		O(r), Sn((e) => _r(a, e), [() => X(f).has(X(m)) ? "📌 Unpin" : "📌 Pin"]), or("click", n, b), or("click", i, () => {
			g(X(m)), b();
		}), or("click", o, () => x(X(m))), or("click", s, S), Q(e, t);
	};
	return $(Oe, (e) => {
		X(m) && e(ke);
	}), O(pe), Sn(() => {
		me = Rr(pe, 1, "worn-sidebar svelte-1hv280f", null, me, { "is-collapsed": a() }), Ur(pe, "data-radius", o());
	}), or("keydown", ge, se), qr(ge, () => X(u), (e) => F(u, e)), Q(e, pe), Ge(fe);
}
sr([
	"click",
	"contextmenu",
	"keydown"
]), ai(xi, {
	items: {},
	activeHref: {},
	collapsed: {},
	rounded: {},
	onnavigate: {},
	oncollapsed: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/SidebarElement.svelte
var Si = /* @__PURE__ */ Z("<div class=\"worn-sidebar-element svelte-1i49h1f\"><!></div>"), Ci = {
	hash: "svelte-1i49h1f",
	code: ".worn-sidebar-element.svelte-1i49h1f {height:100%;}"
};
function wi(e, t) {
	We(t, !0), Fr(e, Ci);
	let n = $r(t, "items", 23, () => []), r = $r(t, "activehref", 7, ""), i = $r(t, "collapsed", 7, !1), a = $r(t, "rounded", 7, "md"), o;
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
			n(e), N();
		},
		get activehref() {
			return r();
		},
		set activehref(e = "") {
			r(e), N();
		},
		get collapsed() {
			return i();
		},
		set collapsed(e = !1) {
			i(e), N();
		},
		get rounded() {
			return a();
		},
		set rounded(e = "md") {
			a(e), N();
		}
	}, l = Si();
	return xi(z(l), {
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
	}), O(l), Zr(l, (e) => o = e, () => o), Q(e, l), Ge(c);
}
customElements.define("worn-sidebar", ai(wi, {
	items: { type: "Array" },
	activehref: {},
	collapsed: { type: "Boolean" },
	rounded: {}
}, [], []));
//#endregion
export { wi as default };
