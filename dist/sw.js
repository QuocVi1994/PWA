if (!self.define) {
  const e = (e) => {
      "require" !== e && (e += ".js");
      let r = Promise.resolve();
      return (
        s[e] ||
          (r = new Promise(async (r) => {
            if ("document" in self) {
              const s = document.createElement("script");
              (s.src = e), document.head.appendChild(s), (s.onload = r);
            } else importScripts(e), r();
          })),
        r.then(() => {
          if (!s[e]) throw new Error(`Module ${e} didn’t register its module`);
          return s[e];
        })
      );
    },
    r = (r, s) => {
      Promise.all(r.map(e)).then((e) => s(1 === e.length ? e[0] : e));
    },
    s = { require: Promise.resolve(r) };
  self.define = (r, i, t) => {
    s[r] ||
      (s[r] = Promise.resolve().then(() => {
        let s = {};
        const n = { uri: location.origin + r.slice(1) };
        return Promise.all(
          i.map((r) => {
            switch (r) {
              case "exports":
                return s;
              case "module":
                return n;
              default:
                return e(r);
            }
          })
        ).then((e) => {
          const r = t(...e);
          return s.default || (s.default = r), s;
        });
      }));
  };
}
define("./sw.js", ["./workbox-d9ace124"], function (e) {
  "use strict";
  self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "assets/index.88d74c3c.js",
          revision: "74a1e1fd2576b3e2243964ce2e48d149",
        },
        {
          url: "assets/index.f8db8713.css",
          revision: "4487c0a830965c01b1726dfd0c82b184",
        },
        {
          url: "assets/vendor.c514e21a.js",
          revision: "d99cd44a6f0cc9c03043813ab14b83c8",
        },
        { url: "index.html", revision: "66a744573fb401425928cd8fbfa706ab" },
        { url: "registerSW.js", revision: "79a98b435f42793c130125eb2d5e8618" },
        {
          url: "manifest.webmanifest",
          revision: "4240a3ebeaf3523fbf44f69798a57f41",
        },
      ],
      {}
    ),
    e.registerRoute(
      new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))
    );
});
