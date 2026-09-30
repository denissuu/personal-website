import {
  ConsentBanner,
  FounderSection,
  CAPACITY_NOTICE,
  SHOW_CAPACITY_NOTICE,
  _ as e,
  d as t,
  f as n,
  g as r,
  h as i,
  i as a,
  m as o,
  n as s,
  o as c,
  p as l,
  r as u,
  t as d,
} from "./MobileStickyCta-iHeYPVvF.js";
var f = e(r(), 1),
  p = (e) => e?.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase();
function m(e, t, n = []) {
  if (t == null) throw Error(`[lucide]: iconNode is required when icon name is used`);
  return { name: p(e), size: 24, node: t, ...(n.length > 0 ? { aliases: n } : {}) };
}
var h = (e) => {
    let t = ``,
      n = !1;
    for (let r of e) {
      if (r === `-` || r === `_` || r <= ` `) {
        n = t.length > 0;
        continue;
      }
      (t.length === 0 ? (t += r.toLowerCase()) : (t += n ? r.toUpperCase() : r), (n = !1));
    }
    return t;
  },
  g = (e) => {
    let t = h(e);
    return t.charAt(0).toUpperCase() + t.slice(1);
  },
  _ = (...e) =>
    e
      .filter((e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t)
      .join(` `)
      .trim(),
  v = {
    xmlns: `http://www.w3.org/2000/svg`,
    width: 24,
    height: 24,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    "stroke-width": 2,
    "stroke-linecap": `round`,
    "stroke-linejoin": `round`,
  };
function y(e) {
  return e != null;
}
function b(e, t = {}) {
  let n = t.attributeNames ?? {},
    r = (e) => n[e] ?? e,
    i = e.size ?? e.width ?? v.width,
    a = e.size ?? e.height ?? v.height,
    o = e.aliases?.filter((e) => typeof e == `string` && e.trim() !== ``).map((e) => `lucide-${e}`) ?? [],
    s = [...(e.name ? [`lucide-${e.name}`] : []), ...o],
    c = t.className?.split(` `).filter(Boolean) ?? [],
    l = t.includeDefaultClasses === !1 ? _(...c) : _(`lucide`, ...s, ...c),
    u = t.absoluteStrokeWidth
      ? (Number(t.strokeWidth ?? v[`stroke-width`]) * Number(e.size ?? e.width ?? v.width)) / Number(t.size ?? t.width ?? v.width)
      : (t.strokeWidth ?? v[`stroke-width`]);
  return [
    `svg`,
    {
      ...Object.entries(v).reduce((e, [t, n]) => ((e[r(t)] = n), e), {}),
      ...(`color` in t && t.color && { [r(`stroke`)]: t.color }),
      ...(`size` in t && y(t.size) && { [r(`width`)]: t.size, [r(`height`)]: t.size }),
      ...(`width` in t && y(t.width) && { [r(`width`)]: t.width }),
      ...(`height` in t && y(t.height) && { [r(`height`)]: t.height }),
      [r(`stroke-width`)]: u,
      ...(l && { [r(`class`)]: l }),
      [r(`viewBox`)]: `0 0 ${i} ${a}`,
      ...(t.hasA11yProp === !1 ? { [r(`aria-hidden`)]: `true` } : {}),
      ...(`attributes` in t && t.attributes),
    },
    e.node.map((e) => {
      let [n, i, a] = e,
        o = t.nonScalingStroke ? { [r(`vector-effect`)]: `non-scaling-stroke`, ...i } : i;
      return a ? [n, o, a] : [n, o];
    }),
  ];
}
function x(e, t = {}) {
  return b(e, {
    ...t,
    attributeNames: {
      ...t.attributeNames,
      class: `className`,
      "stroke-width": `strokeWidth`,
      "stroke-linecap": `strokeLinecap`,
      "stroke-linejoin": `strokeLinejoin`,
      "vector-effect": `vectorEffect`,
    },
  });
}
var ee = (e) => {
    for (let t in e) if (t.startsWith(`aria-`) || t === `role` || t === `title`) return !0;
    return !1;
  },
  S = (0, f.createContext)({}),
  te = () => (0, f.useContext)(S),
  C = (0, f.forwardRef)(
    (
      {
        color: e,
        size: t,
        width: n,
        height: r,
        strokeWidth: i,
        absoluteStrokeWidth: a,
        nonScalingStroke: o,
        className: s = ``,
        children: c,
        iconNode: l = [],
        icon: u = { node: l, aliases: [], size: 24 },
        ...d
      },
      p,
    ) => {
      let {
          size: m = 24,
          strokeWidth: h = 2,
          absoluteStrokeWidth: g = !1,
          nonScalingStroke: v = !1,
          color: y = `currentColor`,
          className: b = ``,
        } = te() ?? {},
        S = !!c || ee(d),
        [C, w, T = []] = x(u, {
          color: e ?? y,
          width: n ?? t ?? m,
          height: r ?? t ?? m,
          strokeWidth: i ?? h,
          absoluteStrokeWidth: a ?? g,
          nonScalingStroke: o ?? v,
          className: _(b, s),
          hasA11yProp: S,
          attributes: d,
        });
      return (0, f.createElement)(C, { ref: p, ...w }, [...T.map(([e, t]) => (0, f.createElement)(e, t)), ...(Array.isArray(c) ? c : [c])]);
    },
  );
function w(e, t = [], n = []) {
  let r = typeof e == `string` ? m(e, t, n) : e,
    i = (0, f.forwardRef)(({ className: e, ...t }, n) => (0, f.createElement)(C, { ref: n, icon: r, className: e, ...t }));
  return (r.name && (i.displayName = g(r.name)), i);
}
var T = {
  name: `arrow-right`,
  size: 24,
  node: [
    [`path`, { d: `M5 12h14`, key: `1ays0h` }],
    [`path`, { d: `m12 5 7 7-7 7`, key: `xquz4c` }],
  ],
};
T.node;
var E = w(T),
  D = {
    name: `bot`,
    size: 24,
    node: [
      [`path`, { d: `M12 8V4H8`, key: `hb8ula` }],
      [`rect`, { width: `16`, height: `12`, x: `4`, y: `8`, rx: `2`, key: `enze0r` }],
      [`path`, { d: `M2 14h2`, key: `vft8re` }],
      [`path`, { d: `M20 14h2`, key: `4cs60a` }],
      [`path`, { d: `M15 13v2`, key: `1xurst` }],
      [`path`, { d: `M9 13v2`, key: `rq6x2g` }],
    ],
  };
D.node;
var O = w(D),
  k = {
    name: `briefcase`,
    size: 24,
    node: [
      [`path`, { d: `M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16`, key: `jecpp` }],
      [`rect`, { width: `20`, height: `14`, x: `2`, y: `6`, rx: `2`, key: `i6l2r4` }],
    ],
  };
k.node;
var A = w(k),
  j = {
    name: `circle-check`,
    size: 24,
    node: [
      [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
      [`path`, { d: `m16 9-5.5 5.5L8 12`, key: `xofnsj` }],
    ],
    aliases: [`check-circle-2`],
  };
j.node;
var M = w(j),
  N = {
    name: `circle-x`,
    size: 24,
    node: [
      [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
      [`path`, { d: `m15 9-6 6`, key: `1uzhvr` }],
      [`path`, { d: `m9 9 6 6`, key: `z0biqf` }],
    ],
    aliases: [`x-circle`],
  };
N.node;
var ne = w(N),
  P = {
    name: `clock`,
    size: 24,
    node: [
      [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
      [`path`, { d: `M12 6v6l4 2`, key: `mmk7yg` }],
    ],
  };
P.node;
var F = w(P),
  I = {
    name: `graduation-cap`,
    size: 24,
    node: [
      [
        `path`,
        {
          d: `M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z`,
          key: `j76jl0`,
        },
      ],
      [`path`, { d: `M22 10v6`, key: `1lu8f3` }],
      [`path`, { d: `M6 12.5V16a6 3 0 0 0 12 0v-3.5`, key: `1r8lef` }],
    ],
  };
I.node;
var L = w(I),
  R = { name: `minus`, size: 24, node: [[`path`, { d: `M5 12h14`, key: `1ays0h` }]] };
R.node;
var re = w(R),
  z = {
    name: `plus`,
    size: 24,
    node: [
      [`path`, { d: `M5 12h14`, key: `1ays0h` }],
      [`path`, { d: `M12 5v14`, key: `s699le` }],
    ],
  };
z.node;
var ie = w(z),
  B = {
    name: `shopping-bag`,
    size: 24,
    node: [
      [`path`, { d: `M16 10a4 4 0 0 1-8 0`, key: `1ltviw` }],
      [`path`, { d: `M3.103 6.034h17.794`, key: `awc11p` }],
      [
        `path`,
        {
          d: `M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z`,
          key: `o988cm`,
        },
      ],
    ],
  };
B.node;
var ae = w(B),
  V = {
    name: `sparkles`,
    size: 24,
    node: [
      [
        `path`,
        {
          d: `M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,
          key: `1s2grr`,
        },
      ],
      [`path`, { d: `M20 2v4`, key: `1rf3ol` }],
      [`path`, { d: `M22 4h-4`, key: `gwowj6` }],
      [`circle`, { cx: `4`, cy: `20`, r: `2`, key: `6kqj1y` }],
    ],
    aliases: [`stars`],
  };
V.node;
var H = w(V),
  U = {
    name: `stethoscope`,
    size: 24,
    node: [
      [`path`, { d: `M11 2v2`, key: `1539x4` }],
      [`path`, { d: `M5 2v2`, key: `1yf1q8` }],
      [`path`, { d: `M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1`, key: `rb5t3r` }],
      [`path`, { d: `M8 15a6 6 0 0 0 12 0v-3`, key: `x18d4x` }],
      [`circle`, { cx: `20`, cy: `10`, r: `2`, key: `ts1r5v` }],
    ],
  };
U.node;
var W = w(U),
  G = {
    name: `trending-down`,
    size: 24,
    node: [
      [`path`, { d: `M16 17h6v-6`, key: `t6n2it` }],
      [`path`, { d: `m22 17-8.5-8.5-5 5L2 7`, key: `x473p` }],
    ],
  };
G.node;
var K = w(G),
  q = {
    name: `trending-up`,
    size: 24,
    node: [
      [`path`, { d: `M16 7h6v6`, key: `box55l` }],
      [`path`, { d: `m22 7-8.5 8.5-5-5L2 17`, key: `1t1m79` }],
    ],
  };
q.node;
var oe = w(q),
  J = {
    name: `triangle-alert`,
    size: 24,
    node: [
      [`path`, { d: `m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3`, key: `wmoenq` }],
      [`path`, { d: `M12 9v4`, key: `juzpu7` }],
      [`path`, { d: `M12 17h.01`, key: `p32p05` }],
    ],
    aliases: [`alert-triangle`],
  };
J.node;
var se = w(J),
  Y = {
    name: `user`,
    size: 24,
    node: [
      [`path`, { d: `M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2`, key: `975kel` }],
      [`circle`, { cx: `12`, cy: `7`, r: `4`, key: `17ys0d` }],
    ],
  };
Y.node;
var ce = w(Y),
  X = {
    name: `zap`,
    size: 24,
    node: [
      [
        `path`,
        {
          d: `M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z`,
          key: `1v7up4`,
        },
      ],
    ],
  };
X.node;
var Z = w(X),
  le = i(),
  Q = l();
// Iconițe lucide adăugate pentru cardurile noi (noduri copiate din lucide-react: map-pin, wrench).
var idlMapPin = w({
    name: `map-pin`,
    size: 24,
    node: [
      [
        `path`,
        {
          d: `M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0`,
          key: `1r0f0z`,
        },
      ],
      [`circle`, { cx: `12`, cy: `10`, r: `3`, key: `ilqhr7` }],
    ],
  }),
  idlWrench = w({
    name: `wrench`,
    size: 24,
    node: [
      [
        `path`,
        {
          d: `M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z`,
          key: `1ngwbx`,
        },
      ],
    ],
  });
function ue() {
  return (0, Q.jsx)(`div`, {
    className: `double-bezel`,
    children: (0, Q.jsxs)(`div`, {
      className: `double-bezel-inner p-6 md:p-8`,
      children: [
        (0, Q.jsxs)(`div`, {
          className: `pb-4 mb-6 border-b border-black/5 flex items-center justify-between`,
          children: [
            (0, Q.jsxs)(`div`, {
              className: `flex items-center gap-1.5`,
              children: [
                (0, Q.jsx)(`div`, { className: `w-2.5 h-2.5 rounded-full bg-red-400` }),
                (0, Q.jsx)(`div`, { className: `w-2.5 h-2.5 rounded-full bg-amber-400` }),
                (0, Q.jsx)(`div`, { className: `w-2.5 h-2.5 rounded-full bg-emerald-400` }),
              ],
            }),
            (0, Q.jsxs)(`div`, {
              className: `inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-canvas text-[11px] font-semibold text-ink border border-black/5`,
              children: [(0, Q.jsx)(O, { className: `w-3.5 h-3.5 text-blue-600` }), `ChatGPT`],
            }),
            (0, Q.jsx)(`span`, { className: `text-[10px] text-steel font-semibold tracking-widest uppercase`, children: `Exemplu ilustrativ` }),
          ],
        }),
        (0, Q.jsxs)(`div`, {
          className: `space-y-5 text-sm`,
          children: [
            (0, Q.jsxs)(`div`, {
              className: `flex items-start gap-3 justify-end`,
              children: [
                (0, Q.jsx)(`div`, {
                  className: `max-w-[85%] bg-blue-50/80 text-ink rounded-2xl rounded-tr-none p-3.5 border border-blue-100/80`,
                  children: (0, Q.jsx)(`p`, {
                    className: `leading-relaxed text-xs sm:text-sm`,
                    children: `Căutăm o pensiune la munte pentru un weekend prelungit, cu doi copii mici. Ceva la maxim 3 ore de București?`,
                  }),
                }),
                (0, Q.jsx)(`div`, {
                  className: `w-7 h-7 rounded-full bg-ink text-white flex items-center justify-center shrink-0`,
                  children: (0, Q.jsx)(ce, { className: `w-3.5 h-3.5` }),
                }),
              ],
            }),
            (0, Q.jsxs)(`div`, {
              className: `flex items-start gap-3`,
              children: [
                (0, Q.jsx)(`div`, {
                  className: `w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0`,
                  children: (0, Q.jsx)(O, { className: `w-3.5 h-3.5` }),
                }),
                (0, Q.jsxs)(`div`, {
                  className: `flex-1 space-y-3`,
                  children: [
                    (0, Q.jsx)(`p`, {
                      className: `text-steel text-xs sm:text-sm leading-relaxed`,
                      children: `Valea Prahovei și zona Rucăr-Bran sunt cele mai accesibile. Uită-te după locuri cu mic dejun inclus, spațiu de joacă pentru copii și anulare gratuită.`,
                    }),
                    (0, Q.jsxs)(`div`, {
                      className: `p-4 rounded-2xl bg-canvas border border-black/10`,
                      children: [
                        (0, Q.jsx)(`span`, {
                          className: `inline-block text-[10px] font-bold uppercase tracking-widest text-steel mb-2`,
                          children: `Sponsorizat`,
                        }),
                        (0, Q.jsx)(`h4`, {
                          className: `text-ink font-bold text-sm tracking-tight mb-1`,
                          children: `Pensiunea Ta · Valea Prahovei`,
                        }),
                        (0, Q.jsx)(`p`, {
                          className: `text-steel text-xs leading-relaxed mb-3`,
                          children: `Mic dejun inclus, loc de joacă pentru copii. Rezervi direct, fără comision.`,
                        }),
                        (0, Q.jsx)(`span`, { className: `text-blue-600 text-xs font-semibold`, children: `Vezi disponibilitatea →` }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, Q.jsx)(`p`, {
          className: `mt-6 pt-4 border-t border-black/5 text-[11px] text-steel leading-relaxed`,
          children: `Reclama apare în conversație, marcată ca sponsorizată, separat de răspunsul ChatGPT.`,
        }),
      ],
    }),
  });
}
function de() {
  return (0, Q.jsx)(`section`, {
    id: `arbitraj`,
    className: `scroll-mt-24 py-32 px-6 bg-surface border-y border-black/5 relative overflow-hidden`,
    children: (0, Q.jsxs)(`div`, {
      className: `max-w-[1400px] mx-auto relative z-10`,
      children: [
        (0, Q.jsxs)(`div`, {
          className: `grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-6xl mx-auto mb-24`,
          children: [
            (0, Q.jsxs)(`div`, {
              className: `lg:col-span-6`,
              children: [
                (0, Q.jsx)(t.div, {
                  initial: { opacity: 0, y: 15 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0 },
                  className: `inline-flex items-center bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-6 border border-blue-100/50 shadow-sm`,
                  children: `Cum funcționează`,
                }),
                (0, Q.jsxs)(t.h2, {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0 },
                  transition: { delay: 0.1 },
                  className: `text-4xl md:text-5xl font-bold mb-6 text-ink tracking-tight font-display text-balance`,
                  children: [
                    `Meta creează cerere.`,
                    ` `,
                    (0, Q.jsx)(`span`, { className: `text-blue-600`, children: `ChatGPT prinde cererea deja formulată.` }),
                  ],
                }),
                (0, Q.jsx)(t.p, {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0 },
                  transition: { delay: 0.2 },
                  className: `text-lg text-steel leading-relaxed font-sans`,
                  children: `Omul îi descrie lui ChatGPT exact ce are nevoie. Reclama ta apare în acea conversație, marcată ca sponsorizată, chiar în momentul în care decizia se formează.`,
                }),
              ],
            }),
            (0, Q.jsx)(t.div, {
              initial: { opacity: 0, y: 40 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0, margin: `-80px` },
              transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] },
              className: `lg:col-span-6`,
              children: (0, Q.jsx)(ue, {}),
            }),
          ],
        }),
        (0, Q.jsxs)(`div`, {
          className: `grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto`,
          children: [
            (0, Q.jsxs)(t.div, {
              initial: { opacity: 0, y: 40 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0, margin: `-80px` },
              transition: { duration: 0.6, type: `spring`, damping: 20 },
              className: `rounded-[2.5rem] p-8 md:p-10 bg-canvas border border-black/5 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] flex flex-col justify-between relative`,
              children: [
                (0, Q.jsxs)(`div`, {
                  children: [
                    (0, Q.jsxs)(`div`, {
                      className: `flex items-center justify-between pb-6 mb-8 border-b border-black/5`,
                      children: [
                        (0, Q.jsxs)(`div`, {
                          children: [
                            (0, Q.jsx)(`span`, {
                              className: `text-[10px] font-bold uppercase tracking-widest text-red-700 bg-red-50 px-3 py-1.5 rounded-full border border-red-200`,
                              children: `Canale mature`,
                            }),
                            (0, Q.jsx)(`h3`, { className: `text-2xl font-bold text-ink mt-3`, children: `Meta / TikTok Ads` }),
                          ],
                        }),
                        (0, Q.jsx)(`div`, {
                          className: `w-12 h-12 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center shrink-0`,
                          children: (0, Q.jsx)(K, { className: `w-6 h-6 text-red-500` }),
                        }),
                      ],
                    }),
                    (0, Q.jsx)(`ul`, {
                      className: `space-y-6`,
                      children: [
                        {
                          title: `Omul nu caută încă`,
                          desc: `Oamenii intră pe Meta și TikTok ca să se relaxeze sau să vadă ce fac alții. Reclama ta le apare în feed și poate stârni interes înainte ca ei să caute ceva.`,
                        },
                        {
                          title: `Licitații cu mulți advertiseri`,
                          desc: `Mulți advertiseri concurează pe aceleași audiențe, iar costul atenției poate crește de la an la an.`,
                        },
                        {
                          title: `Formate cunoscute`,
                          desc: `Formatele sunt familiare și apar des în feed, așa că mesajele și creațiile trebuie reînnoite periodic.`,
                        },
                      ].map((e, t) =>
                        (0, Q.jsxs)(
                          `li`,
                          {
                            className: `flex items-start gap-3.5`,
                            children: [
                              (0, Q.jsx)(ne, { className: `w-5 h-5 text-red-500 shrink-0 mt-0.5` }),
                              (0, Q.jsxs)(`div`, {
                                children: [
                                  (0, Q.jsx)(`h4`, { className: `text-sm font-bold text-ink`, children: e.title }),
                                  (0, Q.jsx)(`p`, { className: `text-sm text-steel mt-1 leading-relaxed`, children: e.desc }),
                                ],
                              }),
                            ],
                          },
                          t,
                        ),
                      ),
                    }),
                  ],
                }),
                (0, Q.jsxs)(`div`, {
                  className: `mt-10 pt-6 border-t border-black/5 flex items-center gap-1.5 text-xs text-red-700 font-semibold`,
                  children: [(0, Q.jsx)(se, { className: `w-4 h-4 text-red-500` }), `Tendință: costuri în creștere`],
                }),
              ],
            }),
            (0, Q.jsxs)(t.div, {
              initial: { opacity: 0, y: 40 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0, margin: `-80px` },
              transition: { duration: 0.6, delay: 0.15, type: `spring`, damping: 20 },
              className: `rounded-[2.5rem] p-8 md:p-10 bg-blue-600 text-white border border-blue-500 shadow-[0_20px_40px_-15px_rgba(37,99,235,0.4)] md:-translate-y-3 flex flex-col justify-between relative`,
              children: [
                (0, Q.jsx)(`div`, {
                  className: `absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-surface text-blue-600 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase shadow-md border border-black/5 whitespace-nowrap`,
                  children: `Oportunitate 2026`,
                }),
                (0, Q.jsxs)(`div`, {
                  children: [
                    (0, Q.jsxs)(`div`, {
                      className: `flex items-center justify-between pb-6 mb-8 border-b border-blue-500/50`,
                      children: [
                        (0, Q.jsxs)(`div`, {
                          children: [
                            (0, Q.jsxs)(`span`, {
                              className: `inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-widest text-blue-900 bg-white px-3 py-1 rounded-full shadow-xs`,
                              children: [(0, Q.jsx)(H, { className: `w-3 h-3 text-blue-600` }), `Canal nou`],
                            }),
                            (0, Q.jsx)(`h3`, { className: `text-2xl font-bold text-white mt-3`, children: `ChatGPT Ads` }),
                          ],
                        }),
                        (0, Q.jsx)(`div`, {
                          className: `w-12 h-12 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center shrink-0`,
                          children: (0, Q.jsx)(oe, { className: `w-6 h-6 text-white` }),
                        }),
                      ],
                    }),
                    (0, Q.jsx)(`ul`, {
                      className: `space-y-6`,
                      children: [
                        {
                          title: `Intenție clară`,
                          desc: `Omul descrie exact ce are nevoie. Reclama ta apare când problema e deja formulată, nu în mijlocul unui scroll.`,
                        },
                        {
                          title: `Concurență încă mică`,
                          desc: `Formatul e nou în România. Puțini advertiseri din nișa ta rulează deja campanii aici.`,
                        },
                        {
                          title: `Avantajul primului venit`,
                          desc: `Cine intră devreme strânge date, testează mesaje și află ce convertește înainte ca licitațiile să se aglomereze.`,
                        },
                      ].map((e, t) =>
                        (0, Q.jsxs)(
                          `li`,
                          {
                            className: `flex items-start gap-3.5`,
                            children: [
                              (0, Q.jsx)(M, { className: `w-5 h-5 text-blue-200 shrink-0 mt-0.5` }),
                              (0, Q.jsxs)(`div`, {
                                children: [
                                  (0, Q.jsx)(`h4`, { className: `text-sm font-bold text-white`, children: e.title }),
                                  (0, Q.jsx)(`p`, { className: `text-sm text-blue-100 mt-1 leading-relaxed`, children: e.desc }),
                                ],
                              }),
                            ],
                          },
                          t,
                        ),
                      ),
                    }),
                  ],
                }),
                (0, Q.jsxs)(`div`, {
                  className: `mt-10 pt-6 border-t border-blue-500/50 flex items-center justify-between gap-4 text-xs`,
                  children: [
                    (0, Q.jsxs)(`span`, {
                      className: `flex items-center gap-1.5 font-bold text-white`,
                      children: [
                        (0, Q.jsx)(`span`, { className: `w-2 h-2 rounded-full bg-emerald-400 animate-ping` }),
                        `Fereastră de early-adopter`,
                      ],
                    }),
                    (0, Q.jsxs)(`a`, {
                      href: `#booking`,
                      className: `inline-flex items-center gap-1 font-bold text-white hover:text-blue-100 transition-colors underline underline-offset-4`,
                      children: [`Verifică nișa ta`, (0, Q.jsx)(E, { className: `w-3.5 h-3.5` })],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, Q.jsx)(t.p, {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0 },
          className: `text-center text-lg font-semibold text-ink mt-16 max-w-2xl mx-auto`,
          children: `Cele mai bune rezultate vin când le folosești împreună.`,
        }),
      ],
    }),
  });
}
function fe() {
  return (0, Q.jsx)(`section`, {
    id: `urgency`,
    className: `scroll-mt-28 py-32 px-6 bg-canvas relative overflow-hidden`,
    children: (0, Q.jsxs)(`div`, {
      className: `max-w-[1400px] mx-auto relative z-10`,
      children: [
        (0, Q.jsxs)(`div`, {
          className: `text-center max-w-3xl mx-auto mb-20`,
          children: [
            (0, Q.jsxs)(t.div, {
              initial: { opacity: 0, y: 15 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0 },
              className: `inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-6 border border-blue-100/50 shadow-sm`,
              children: [
                (0, Q.jsx)(F, { className: `w-3.5 h-3.5` }),
                (0, Q.jsx)(`span`, { children: `Ciclul de viață al unei platforme publicitare` }),
              ],
            }),
            (0, Q.jsxs)(t.h2, {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0 },
              transition: { delay: 0.1 },
              className: `text-4xl md:text-5xl font-bold mb-6 text-ink tracking-tight font-display`,
              children: [`De ce contează`, ` `, (0, Q.jsx)(`span`, { className: `text-blue-600`, children: `când intri pe un canal nou` })],
            }),
            (0, Q.jsx)(t.p, {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0 },
              transition: { delay: 0.2 },
              className: `text-lg text-steel leading-relaxed font-sans`,
              children: `Google Ads la început de drum, Facebook Ads în 2012, TikTok în 2020: la fiecare canal nou, primii advertiseri au avut timp să învețe canalul înainte ca licitațiile să se aglomereze. ChatGPT Ads este acum în prima fază.`,
            }),
          ],
        }),
        (0, Q.jsx)(`div`, {
          className: `grid grid-cols-1 md:grid-cols-3 gap-8 relative items-stretch`,
          children: [
            {
              step: `01`,
              phase: `Faza 1: Primii advertiseri`,
              window: `Acum`,
              badge: `FEREASTRA ACTUALĂ`,
              badgeType: `active`,
              headline: `Concurență mică • Licitații liniștite • Timp pentru testare`,
              desc: `Puține afaceri au deja buget și proces pentru ChatGPT Ads. Cine intră acum își construiește datele și mesajele câștigătoare înainte ca licitațiile să se aglomereze.`,
              highlight: !0,
            },
            {
              step: `02`,
              phase: `Faza 2: Adoptarea în masă`,
              window: `Următoarele luni`,
              badge: `COSTURI ÎN CREȘTERE`,
              badgeType: `warning`,
              headline: `Intră agențiile mari • Licitațiile se aglomerează`,
              desc: `Studiile de caz încep să circule, agențiile propun canalul tuturor clienților, iar costurile se apropie treptat de cele din Google și Meta.`,
              highlight: !1,
            },
            {
              step: `03`,
              phase: `Faza 3: Canal matur`,
              window: `Pe termen lung`,
              badge: `CANAL SATURAT`,
              badgeType: `closed`,
              headline: `Bugete mari • Avantajul timpuriu dispare`,
              desc: `Brandurile mari mută bugete serioase în reclamele AI. Cine a intrat devreme are deja date și mesaje testate. Cine intră acum pornește de la zero, la costuri mai mari.`,
              highlight: !1,
            },
          ].map((e, n) =>
            (0, Q.jsxs)(
              t.div,
              {
                initial: { opacity: 0, y: 40 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !0, margin: `-60px` },
                transition: { delay: n * 0.15, duration: 0.6, type: `spring`, damping: 20 },
                className: `rounded-[2.5rem] p-8 md:p-10 relative flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 border ${e.highlight ? `bg-blue-600 text-white border-blue-500 shadow-[0_20px_40px_-15px_rgba(37,99,235,0.4)] md:-translate-y-4 md:hover:-translate-y-6 z-10` : `bg-surface text-ink border-black/5 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]`}`,
                children: [
                  e.highlight &&
                    (0, Q.jsx)(`div`, {
                      className: `absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-surface text-blue-600 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase shadow-md border border-black/5`,
                      children: `FEREASTRA ACTIVĂ`,
                    }),
                  (0, Q.jsxs)(`div`, {
                    children: [
                      (0, Q.jsxs)(`div`, {
                        className: `flex items-center justify-between mb-6`,
                        children: [
                          (0, Q.jsx)(`span`, {
                            className: `text-4xl font-display font-black tracking-tight ${e.highlight ? `text-blue-200` : `text-blue-600/30`}`,
                            children: e.step,
                          }),
                          e.badgeType === `warning` &&
                            (0, Q.jsx)(`span`, {
                              className: `inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-amber-50 text-amber-800 border border-amber-200`,
                              children: e.badge,
                            }),
                          e.badgeType === `closed` &&
                            (0, Q.jsx)(`span`, {
                              className: `inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-red-50 text-red-700 border border-red-200`,
                              children: e.badge,
                            }),
                        ],
                      }),
                      (0, Q.jsx)(`div`, {
                        className: `text-xs font-mono uppercase tracking-wider mb-2 font-semibold ${e.highlight ? `text-blue-100` : `text-blue-600`}`,
                        children: e.window,
                      }),
                      (0, Q.jsx)(`h3`, { className: `text-2xl font-bold mb-3`, children: e.phase }),
                      (0, Q.jsx)(`div`, {
                        className: `text-sm font-semibold mb-4 leading-snug ${e.highlight ? `text-white` : `text-ink`}`,
                        children: e.headline,
                      }),
                      (0, Q.jsx)(`p`, {
                        className: `text-xs leading-relaxed ${e.highlight ? `text-blue-100` : `text-steel`}`,
                        children: e.desc,
                      }),
                    ],
                  }),
                  e.highlight &&
                    (0, Q.jsx)(`div`, {
                      className: `mt-8 pt-6 border-t border-blue-500/50`,
                      children: (0, Q.jsxs)(`a`, {
                        href: `#booking`,
                        className: `inline-flex items-center justify-between w-full text-xs font-bold text-white hover:text-blue-100 uppercase tracking-wider group`,
                        children: [
                          (0, Q.jsx)(`span`, { children: `Intră în Faza 1` }),
                          (0, Q.jsx)(E, { className: `w-4 h-4 transition-transform group-hover:translate-x-1` }),
                        ],
                      }),
                    }),
                ],
              },
              e.step,
            ),
          ),
        }),
        SHOW_CAPACITY_NOTICE &&
          (0, Q.jsxs)(t.div, {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0 },
            className: `mt-16 p-8 rounded-[2rem] bg-surface border border-black/5 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.05)] max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left`,
            children: [
              (0, Q.jsxs)(`div`, {
                className: `flex items-center gap-4`,
                children: [
                  (0, Q.jsx)(`div`, {
                    className: `w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0`,
                    children: (0, Q.jsx)(Z, { className: `w-6 h-6 text-blue-600` }),
                  }),
                  (0, Q.jsxs)(`div`, {
                    children: [
                      (0, Q.jsx)(`h4`, {
                        className: `text-base font-bold text-ink`,
                        children: `Capacitate limitată: ${CAPACITY_NOTICE.toLowerCase()}`,
                      }),
                      (0, Q.jsx)(`p`, {
                        className: `text-sm text-steel mt-1`,
                        children: `Implementăm fiecare campanie cap-coadă, așa că lucrăm cu puțini clienți în același timp.`,
                      }),
                    ],
                  }),
                ],
              }),
              (0, Q.jsx)(`a`, {
                href: `#booking`,
                className: `shrink-0 px-6 py-3 rounded-full text-xs font-bold bg-ink text-white hover:bg-black transition-colors uppercase tracking-wider shadow-sm`,
                children: `Aplică pentru analiză`,
              }),
            ],
          }),
      ],
    }),
  });
}
function pe() {
  let e = [
    {
      icon: (0, Q.jsx)(idlMapPin, { className: `w-8 h-8 text-teal-600` }),
      title: `Turism, cazare & experiențe`,
      subtitle: `Pensiuni, hoteluri, agenții de turism, evenimente`,
      desc: `Oamenii îi cer lui ChatGPT să le planifice weekendul sau concediul. Locul tău apare ca opțiune concretă chiar când se decid unde să meargă.`,
      metrics: `Potrivit pentru: cazare și experiențe cu rezervare directă`,
    },
    {
      icon: (0, Q.jsx)(ae, { className: `w-8 h-8 text-blue-600` }),
      title: `E-commerce cu produse căutate`,
      subtitle: `Branduri D2C și magazine de nișă`,
      desc: `Oamenii cer comparații, alternative și recomandări de produse. Reclama ta apare în conversația în care se ia decizia de cumpărare.`,
      metrics: `Potrivit pentru: coș mediu peste 200 RON`,
    },
    {
      icon: (0, Q.jsx)(A, { className: `w-8 h-8 text-indigo-600` }),
      title: `Servicii B2B & high-ticket`,
      subtitle: `Software, consultanță, servicii pentru companii (fără servicii financiare sau juridice)`,
      desc: `Antreprenorii și managerii folosesc ChatGPT zilnic pentru research. Un singur contract câștigat poate acoperi costul campaniei pe luni întregi.`,
      metrics: `Potrivit pentru: contracte peste 2.000 €`,
    },
    {
      icon: (0, Q.jsx)(L, { className: `w-8 h-8 text-blue-700` }),
      title: `Cursuri, academii & educație`,
      subtitle: `Formare profesională și programe premium`,
      desc: `Oamenii cer de la AI planuri de învățare și recomandări de cursuri. Programul tău apare ca opțiune concretă, în momentul potrivit.`,
      metrics: `Potrivit pentru: programe cu ofertă validată`,
    },
    {
      icon: (0, Q.jsx)(idlWrench, { className: `w-8 h-8 text-teal-600` }),
      title: `Servicii locale`,
      subtitle: `Instalatori, centrale termice, fotovoltaice, amenajări, service auto`,
      desc: `Când i se strică centrala sau vrea panouri solare, omul întreabă ChatGPT de unde să înceapă. Firma ta apare exact atunci.`,
      metrics: `Potrivit pentru: lucrări cu valoare mare per client`,
    },
  ];
  return (0, Q.jsx)(`section`, {
    id: `audience`,
    className: `scroll-mt-28 py-32 px-6 bg-surface border-t border-black/5 relative`,
    children: (0, Q.jsxs)(`div`, {
      className: `max-w-[1400px] mx-auto relative z-10`,
      children: [
        (0, Q.jsxs)(`div`, {
          className: `text-center max-w-3xl mx-auto mb-20`,
          children: [
            (0, Q.jsx)(t.div, {
              initial: { opacity: 0, y: 15 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0 },
              className: `inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-6 border border-blue-100/50 shadow-sm`,
              children: (0, Q.jsx)(`span`, { children: `Pentru cine` }),
            }),
            (0, Q.jsxs)(t.h2, {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0 },
              transition: { delay: 0.1 },
              className: `text-4xl md:text-5xl font-bold mb-6 text-ink tracking-tight font-display`,
              children: [
                `Unde funcționează`,
                ` `,
                (0, Q.jsx)(`span`, { className: `text-blue-600`, children: `cel mai bine ChatGPT Ads` }),
              ],
            }),
            (0, Q.jsx)(t.p, {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0 },
              transition: { delay: 0.2 },
              className: `text-lg text-steel leading-relaxed font-sans`,
              children: `ChatGPT Ads nu e pentru oricine. Are cel mai mult sens pentru afacerile cu o ofertă validată în piață și o valoare mare per client.`,
            }),
          ],
        }),
        (0, Q.jsx)(`div`, {
          className: `grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto`,
          children: e.map((e, n) =>
            (0, Q.jsxs)(
              t.div,
              {
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !0, margin: `-50px` },
                transition: { delay: n * 0.1, duration: 0.5, type: `spring`, damping: 20 },
                className: `p-8 md:p-10 rounded-[2.5rem] bg-canvas border border-black/5 hover:border-blue-500/30 hover:bg-blue-50/20 transition-all duration-300 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.03)] flex flex-col justify-between group`,
                children: [
                  (0, Q.jsxs)(`div`, {
                    children: [
                      (0, Q.jsx)(`div`, {
                        className: `w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300`,
                        children: e.icon,
                      }),
                      (0, Q.jsx)(`h3`, {
                        className: `text-xl font-bold text-ink mb-1.5 tracking-tight group-hover:text-blue-600 transition-colors`,
                        children: e.title,
                      }),
                      (0, Q.jsx)(`div`, { className: `text-xs text-blue-700 font-semibold mb-4`, children: e.subtitle }),
                      (0, Q.jsx)(`p`, { className: `text-sm text-steel leading-relaxed`, children: e.desc }),
                    ],
                  }),
                  (0, Q.jsxs)(`div`, {
                    className: `mt-8 pt-4 border-t border-black/5 flex items-center gap-2 text-xs text-blue-600 font-semibold font-mono`,
                    children: [(0, Q.jsx)(M, { className: `w-4 h-4 text-blue-600 shrink-0` }), (0, Q.jsx)(`span`, { children: e.metrics })],
                  }),
                ],
              },
              n,
            ),
          ),
        }),
        (0, Q.jsx)(`p`, {
          className: `text-center text-xs text-steel/70 mt-12 max-w-3xl mx-auto leading-relaxed`,
          children: `Medical, financiar, juridic, pariuri, alcool și tutun nu sunt eligibile acum în România. Îți spunem sincer dacă domeniul tău intră sau nu.`,
        }),
      ],
    }),
  });
}
function me() {
  return (0, Q.jsx)(`section`, {
    id: `process`,
    className: `scroll-mt-28 py-32 px-6 bg-canvas border-t border-black/5 relative overflow-hidden`,
    children: (0, Q.jsxs)(`div`, {
      className: `max-w-[1200px] mx-auto relative z-10`,
      children: [
        (0, Q.jsxs)(`div`, {
          className: `text-center max-w-3xl mx-auto mb-20`,
          children: [
            (0, Q.jsx)(t.div, {
              initial: { opacity: 0, y: 15 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0 },
              className: `inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-6 border border-blue-100/50 shadow-sm`,
              children: (0, Q.jsx)(`span`, { children: `Cum lucrăm` }),
            }),
            (0, Q.jsxs)(t.h2, {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0 },
              transition: { delay: 0.1 },
              className: `text-4xl md:text-5xl font-bold mb-6 text-ink tracking-tight font-display`,
              children: [
                `De la zero la primele lead-uri,`,
                ` `,
                (0, Q.jsx)(`span`, { className: `text-blue-600`, children: `în 3 etape` }),
              ],
            }),
            (0, Q.jsx)(t.p, {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0 },
              transition: { delay: 0.2 },
              className: `text-lg text-steel leading-relaxed font-sans`,
              children: `ChatGPT Ads face parte din sistemul nostru complet de achiziție: reclamă, pagină care convertește și follow-up automat. Tu aprobi, noi executăm.`,
            }),
          ],
        }),
        (0, Q.jsx)(`div`, {
          className: `max-w-4xl mx-auto space-y-6`,
          children: [
            {
              num: `01`,
              title: `Audit & maparea întrebărilor`,
              timeline: `Săptămâna 1`,
              badge: `Cercetare`,
              desc: `Aflăm ce întreabă clienții tăi ideali în ChatGPT înainte să cumpere și unde apare intenția reală de cumpărare în nișa ta.`,
              deliverables: [
                `Lista întrebărilor cu intenție mare din nișa ta`,
                `Verificarea eligibilității domeniului tău și a site-ului (acces pentru boții OpenAI, tracking)`,
                `Unghiuri de mesaj pentru fiecare tip de întrebare`,
              ],
            },
            {
              num: `02`,
              title: `Configurare & lansare`,
              timeline: `Săptămâna 1 – 2`,
              badge: `Lansare`,
              desc: `Construim campania, pagina de destinație și tracking-ul de conversii, ca să știi exact ce aduce fiecare leu investit.`,
              deliverables: [
                `Structura campaniei și reclamele`,
                `Landing page dedicat & tracking conversii`,
                `Follow-up automat al lead-urilor (SMS / WhatsApp / CRM)`,
              ],
            },
            {
              num: `03`,
              title: `Sprint de test 14 zile`,
              timeline: `Săptămâna 2 – 4`,
              badge: `Decizie`,
              desc: `Rulăm un test cu buget mic și structură completă. La final primești un raport cu cifre reale: câte afișări, câte clickuri, câte lead-uri și cât a costat fiecare. Plus recomandarea noastră clară: continuăm sau oprim.`,
              deliverables: [
                `Cifre reale din contul tău, nu estimări`,
                `Comparație cu Google și Meta pe aceeași ofertă`,
                `Recomandare de continuare sau oprire`,
              ],
            },
          ].map((e, n) =>
            (0, Q.jsxs)(
              t.div,
              {
                initial: { opacity: 0, y: 20, scale: 0.98 },
                whileInView: { opacity: 1, y: 0, scale: 1 },
                viewport: { once: !0, margin: `-50px` },
                transition: { delay: n * 0.1, duration: 0.5, type: `spring`, stiffness: 100 },
                className: `group flex flex-col md:flex-row items-start md:items-center p-8 md:p-10 rounded-[2rem] bg-surface border border-black/5 hover:border-blue-500/30 hover:bg-blue-50/10 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]`,
                children: [
                  (0, Q.jsx)(`div`, {
                    className: `text-5xl md:text-6xl font-black text-blue-100 group-hover:text-blue-500 mb-6 md:mb-0 md:mr-10 md:w-20 shrink-0 transition-colors duration-500 font-display`,
                    children: e.num,
                  }),
                  (0, Q.jsxs)(`div`, {
                    className: `flex-1`,
                    children: [
                      (0, Q.jsxs)(`div`, {
                        className: `flex items-center gap-3 mb-2 flex-wrap`,
                        children: [
                          (0, Q.jsx)(`h3`, { className: `font-bold text-xl text-ink tracking-tight`, children: e.title }),
                          (0, Q.jsxs)(`span`, {
                            className: `inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-100`,
                            children: [e.timeline, ` • `, e.badge],
                          }),
                        ],
                      }),
                      (0, Q.jsx)(`p`, { className: `text-steel leading-relaxed text-sm md:text-base mb-4`, children: e.desc }),
                      (0, Q.jsx)(`div`, {
                        className: `pt-3 border-t border-black/5 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-steel`,
                        children: e.deliverables.map((e, t) =>
                          (0, Q.jsxs)(
                            `div`,
                            {
                              className: `flex items-center gap-1.5`,
                              children: [
                                (0, Q.jsx)(M, { className: `w-3.5 h-3.5 text-blue-600 shrink-0` }),
                                (0, Q.jsx)(`span`, { children: e }),
                              ],
                            },
                            t,
                          ),
                        ),
                      }),
                    ],
                  }),
                ],
              },
              e.num,
            ),
          ),
        }),
        (0, Q.jsx)(`div`, {
          className: `mt-16 flex justify-center`,
          children: (0, Q.jsxs)(t.a, {
            whileHover: { scale: 0.98 },
            whileTap: { scale: 0.95 },
            href: `#booking`,
            className: `group relative inline-flex items-center justify-center px-8 py-4 bg-ink text-white rounded-full font-semibold shadow-[0_10px_40px_-10px_rgba(24,24,27,0.5)] hover:bg-black transition-colors`,
            children: [
              (0, Q.jsx)(`span`, { className: `pr-12`, children: `Aplică pentru analiza gratuită` }),
              (0, Q.jsx)(`div`, {
                className: `absolute right-2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-[1px] transition-transform duration-300`,
                children: (0, Q.jsx)(E, { className: `w-4 h-4 text-white` }),
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
function he() {
  let [e, r] = (0, f.useState)(0),
    i = [
      {
        q: `Chiar se pot face reclame în ChatGPT?`,
        a: `Da, pentru domeniile eligibile. Reclamele apar direct în conversații, marcate clar ca sponsorizate, separat de răspunsul ChatGPT. Formatul este nou în România, iar disponibilitatea și regulile se pot schimba.`,
      },
      {
        q: `Ce domenii nu pot face reclame în ChatGPT?`,
        a: `În România nu sunt eligibile acum: servicii medicale (inclusiv stomatologie, optică și estetică), servicii financiare (credite, asigurări, investiții), servicii juridice, pariuri, alcool și tutun, plus produse cu promisiuni de sănătate nesusținute. Merg bine turismul, magazinele online, serviciile locale, cursurile și software-ul. Regulile se schimbă des, așa că verificăm eligibilitatea pentru fiecare afacere înainte să lucrăm.`,
      },
      {
        q: `Cum diferă de o reclamă pe Google Search?`,
        a: `Pe Google, omul primește o listă de linkuri și reclame și compară singur. În ChatGPT, descrie în detaliu ce are nevoie, iar reclama ta apare în contextul acelei conversații. Mesajul tău ajunge la cineva care și-a formulat deja problema.`,
      },
      {
        q: `Cât timp mai durează perioada cu concurență mică?`,
        a: `Nimeni nu știe exact. Estimarea noastră e de câteva luni, până când agențiile mari își mută bugetele de test.`,
      },
      {
        q: `Ce buget minim este necesar?`,
        a: `Minimul zilnic pentru România nu e publicat de OpenAI; apare în cont după aprobare. Pentru un prim test de 14 zile îți recomandăm un buget cu care să strângi date reale, pe care îl stabilim împreună după analiză.`,
      },
      {
        q: `Lucrați doar cu ChatGPT Ads?`,
        a: `Nu. ChatGPT Ads face parte din sistemul nostru complet de achiziție, alături de Google Ads, Meta Ads, landing page-uri care convertesc și follow-up automat. Dacă are sens pentru afacerea ta, combinăm canalele.`,
      },
      {
        q: `Ce se întâmplă după ce completez formularul?`,
        a: `Verificăm dacă domeniul tău e eligibil, analizăm afacerea și nișa ta, apoi te contactăm pentru o discuție de 15 minute. Îți spunem sincer dacă ChatGPT Ads are sens pentru tine acum. Dacă nu are, îți spunem și asta.`,
      },
    ],
    a = (t) => {
      r(e === t ? null : t);
    };
  return (0, Q.jsx)(`section`, {
    id: `faq`,
    className: `scroll-mt-28 py-32 px-6 bg-canvas border-t border-black/5 relative`,
    children: (0, Q.jsxs)(`div`, {
      className: `max-w-[800px] mx-auto relative z-10`,
      children: [
        (0, Q.jsxs)(`div`, {
          className: `text-center max-w-3xl mx-auto mb-16`,
          children: [
            (0, Q.jsx)(t.div, {
              initial: { opacity: 0, y: 15 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0 },
              className: `inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-6 border border-blue-100/50 shadow-sm`,
              children: (0, Q.jsx)(`span`, { children: `Întrebări frecvente` }),
            }),
            (0, Q.jsxs)(t.h2, {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0 },
              transition: { delay: 0.1 },
              className: `text-4xl md:text-5xl font-bold mb-6 text-center text-ink tracking-tight font-display`,
              children: [`Ce trebuie să știi despre`, ` `, (0, Q.jsx)(`span`, { className: `text-blue-600`, children: `ChatGPT Ads` })],
            }),
            (0, Q.jsx)(t.p, {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0 },
              transition: { delay: 0.2 },
              className: `text-steel text-lg leading-relaxed text-center`,
              children: `Răspunsuri scurte la întrebările pe care le primim cel mai des.`,
            }),
          ],
        }),
        (0, Q.jsx)(`div`, {
          className: `space-y-4`,
          children: i.map((r, i) => {
            let o = e === i;
            return (0, Q.jsxs)(
              t.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !0, margin: `-50px` },
                transition: { delay: i * 0.08, duration: 0.5, type: `spring` },
                className: `border rounded-2xl overflow-hidden transition-all duration-300 ${o ? `bg-surface border-blue-200/50 shadow-sm` : `bg-surface border-black/10 hover:border-blue-200`}`,
                children: [
                  (0, Q.jsxs)(`button`, {
                    onClick: () => a(i),
                    className: `w-full px-6 md:px-8 py-6 text-left flex justify-between items-center group focus:outline-none`,
                    children: [
                      (0, Q.jsx)(`span`, {
                        className: `font-semibold text-lg md:text-xl transition-colors duration-300 ${o ? `text-blue-600` : `text-ink group-hover:text-blue-600`}`,
                        children: r.q,
                      }),
                      (0, Q.jsx)(`div`, {
                        className: `shrink-0 ml-6 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${o ? `bg-blue-100 text-blue-600 rotate-180` : `bg-black/5 text-steel group-hover:bg-blue-50 group-hover:text-blue-600`}`,
                        children: o
                          ? (0, Q.jsx)(re, { className: `w-5 h-5 stroke-[2.5]` })
                          : (0, Q.jsx)(ie, { className: `w-5 h-5 stroke-[2.5]` }),
                      }),
                    ],
                  }),
                  (0, Q.jsx)(n, {
                    initial: !1,
                    children:
                      o &&
                      (0, Q.jsx)(t.div, {
                        initial: `collapsed`,
                        animate: `open`,
                        exit: `collapsed`,
                        variants: { open: { opacity: 1, height: `auto` }, collapsed: { opacity: 0, height: 0 } },
                        transition: { duration: 0.3, ease: [0.32, 0.72, 0, 1] },
                        children: (0, Q.jsxs)(`div`, {
                          className: `px-6 md:px-8 pb-8 pt-2 text-steel text-base md:text-lg leading-relaxed`,
                          children: [(0, Q.jsx)(`div`, { className: `w-full h-px bg-black/5 mb-6` }), r.a],
                        }),
                      }),
                  }),
                ],
              },
              i,
            );
          }),
        }),
      ],
    }),
  });
}
var $ = {
  source: `ChatGPT Ads`,
  title: `Verifică potențialul ChatGPT Ads în nișa ta`,
  niches: [
    `Turism & cazare`,
    `Magazin online`,
    `Servicii locale (instalații, fotovoltaice, amenajări, service auto)`,
    `Cursuri & educație`,
    `Software & servicii B2B`,
    `Alt domeniu`,
  ],
  services: [`Landing page-uri pentru conversii`, `Servicii de producție & strategie de marketing`, `Paid traffic (Google, Meta, ChatGPT Ads)`],
  otherNote: `Unele domenii nu pot face acum reclame în ChatGPT în România (medical, financiar, juridic, pariuri, alcool și tutun). Verificăm eligibilitatea gratuit înainte de orice discuție despre buget.`,
  otherExample: `imobiliare, transport`,
  leadName: `chatgpt-ads`,
};
function ge() {
  return (
    (0, f.useEffect)(() => {
      let e = new o({ lerp: 0.1, smoothWheel: !0 });
      function t(n) {
        (e.raf(n), requestAnimationFrame(t));
      }
      return (
        requestAnimationFrame(t),
        () => {
          e.destroy();
        }
      );
    }, []),
    (0, Q.jsxs)(`div`, {
      className: `overflow-x-clip min-h-screen bg-canvas text-ink font-sans antialiased selection:bg-blue-200 selection:text-blue-900`,
      children: [
        (0, Q.jsx)(c, {
          links: [
            { href: `#arbitraj`, label: `De ce ChatGPT Ads` },
            { href: `#audience`, label: `Pentru cine` },
            { href: `#process`, label: `Cum lucrăm` },
            { href: `#faq`, label: `Întrebări` },
          ],
          switchTo: { href: `/`, label: `Toate serviciile` },
          cta: { href: `#booking`, label: `Analiză gratuită` },
        }),
        (0, Q.jsxs)(`main`, {
          children: [
            (0, Q.jsx)(a, {
              eyebrow: `ChatGPT Ads · canal nou în România`,
              title: (0, Q.jsxs)(Q.Fragment, {
                children: [
                  `Clienții tăi cer recomandări în ChatGPT. `,
                  (0, Q.jsx)(`span`, { className: `text-blue-600`, children: `Fii acolo înaintea concurenței.` }),
                ],
              }),
              text: `Reclamele din ChatGPT apar direct în conversație, exact când cineva descrie problema pe care o rezolvi. Canalul e la început, concurența e încă mică, iar cine intră primul învață cel mai repede ce aduce clienți.`,
              points: [
                `Setup complet: campanie, landing page și tracking de conversii`,
                `Lead-urile ajung instant la tine, cu follow-up automat în 60 de secunde`,
                `Raportare pe lead-uri și vânzări, nu pe click-uri`,
              ],
              note: `Analiza e gratuită. Îți spunem sincer dacă ChatGPT Ads are sens pentru afacerea ta acum și ce buget ar fi realist.`,
              form: $,
            }),
            (0, Q.jsx)(de, {}),
            (0, Q.jsx)(fe, {}),
            (0, Q.jsx)(pe, {}),
            (0, Q.jsx)(me, {}),
            (0, Q.jsx)(he, {}),
            (0, Q.jsx)(FounderSection, {}),
            (0, Q.jsx)(u, {
              id: `booking`,
              title: (0, Q.jsxs)(Q.Fragment, {
                children: [
                  `Află dacă ChatGPT Ads `,
                  (0, Q.jsx)(`span`, { className: `text-blue-600`, children: `are sens pentru afacerea ta.` }),
                ],
              }),
              text: `Completează formularul în circa un minut. Verificăm dacă domeniul tău e eligibil și, înainte de apel, îți analizăm nișa. Îți spunem direct ce potențial vedem și cum am porni.`,
              form: $,
            }),
          ],
        }),
        (0, Q.jsx)(s, {
          link: { href: `/`, label: `← Toate serviciile IDL Media` },
          text: `Sisteme de achiziție clienți: reclame în ChatGPT, Google și Meta, pagini dedicate și follow-up automat.`,
        }),
        (0, Q.jsx)(d, { href: `#booking`, label: `Verifică nișa ta în circa un minut` }),
        (0, Q.jsx)(ConsentBanner, {}),
      ],
    })
  );
}
(0, le.createRoot)(document.getElementById(`root`)).render((0, Q.jsx)(f.StrictMode, { children: (0, Q.jsx)(ge, {}) }));
