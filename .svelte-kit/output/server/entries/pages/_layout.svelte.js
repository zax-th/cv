import { c as create_ssr_component } from "../../chunks/ssr.js";
const css = {
  code: "*{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}body{font-family:'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;line-height:1.6;color:#e2e8f0;background:linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);min-height:100vh}",
  map: `{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script>\\n  import '../app.css';\\n<\/script>\\n\\n<slot />\\n\\n<style>\\n  :global(*) {\\n    margin: 0;\\n    padding: 0;\\n    box-sizing: border-box;\\n  }\\n\\n  :global(html) {\\n    scroll-behavior: smooth;\\n  }\\n\\n  :global(body) {\\n    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;\\n    line-height: 1.6;\\n    color: #e2e8f0;\\n    background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);\\n    min-height: 100vh;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAOU,CAAG,CACT,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CAAC,CACV,UAAU,CAAE,UACd,CAEQ,IAAM,CACZ,eAAe,CAAE,MACnB,CAEQ,IAAM,CACZ,WAAW,CAAE,OAAO,CAAC,CAAC,aAAa,CAAC,CAAC,kBAAkB,CAAC,CAAC,UAAU,CAAC,CAAC,MAAM,CAAC,CAAC,MAAM,CAAC,CAAC,MAAM,CAAC,CAAC,UAAU,CACvG,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,OAAO,CACd,UAAU,CAAE,gBAAgB,MAAM,CAAC,CAAC,OAAO,CAAC,EAAE,CAAC,CAAC,OAAO,CAAC,GAAG,CAAC,CAAC,OAAO,CAAC,IAAI,CAAC,CAC1E,UAAU,CAAE,KACd"}`
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
