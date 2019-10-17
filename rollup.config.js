import * as pkg from "./package.json";
import camelCase from "camelcase";
import { terser } from "rollup-plugin-terser";
import typescript2 from "rollup-plugin-typescript2";

/*
  generate module name for in-browser use
  `module` => `module`
  `my-module` => `myModule`
  `@scope/module` => `scopeModule`
  `@scope/my-module` => `scopeMyModule`
  `@my-scope/my-module` => `myScopeMyModule`
*/
let nameBrowser = pkg.name;
if (/^@.+\//.test(nameBrowser)) {
  nameBrowser = nameBrowser.substring(1).replace("/", "-");
}
nameBrowser = camelCase(nameBrowser);

const config = {
  input: ["src/index.ts"],
  output: {
    name: nameBrowser,
    format: "umd",
    banner: `// ${pkg.homepage} v${
      pkg.version
    } Copyright ${new Date().getFullYear()} ${pkg.author.name}`
  },
  plugins: [typescript2()]
};

export default [
  {
    ...config,
    output: [
      {
        ...config.output,
        file: `dist/${pkg.name}.umd.js`
      },
      {
        ...config.output,
        file: `dist/${pkg.name}.esm.js`,
        format: "esm"
      }
    ]
  },
  {
    ...config,
    output: {
      ...config.output,
      file: `dist/${pkg.name}.umd.min.js`
    },
    plugins: [
      ...config.plugins,
      terser({
        output: {
          preamble: config.output.banner
        }
      })
    ]
  }
];
