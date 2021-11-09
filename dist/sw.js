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
          url: "assets/index.08fbfe68.css",
          revision: "0741ee476a77c263132f68d561f4a5dc",
        },
        {
          url: "assets/index.53a6e89d.js",
          revision: "7b2b9e08981b22ffe30e79dc1b3a628e",
        },
        {
          url: "assets/vendor.3703a7b3.js",
          revision: "51b73b2417c403fb3e223b900965ae4c",
        },
        { url: "index.html", revision: "7ce9800eaeea17ea7d5034f885b4b453" },
        { url: "registerSW.js", revision: "79a98b435f42793c130125eb2d5e8618" },
        {
          url: "manifest.webmanifest",
          revision: "44dfe9c6ff571114a7eb9a1e52d34b03",
        },
      ],
      {}
    ),
    e.registerRoute(
      new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))
    );
});
//# sourceMappingURL=sw.js.map
