/* eslint-disable @typescript-eslint/no-require-imports */
const Module = require("node:module");

require.extensions[".css"] = () => {};

const load = Module._load;

Module._load = function loadForServerRender(request, parent, isMain) {
  if (request === "next/font/google") {
    const font = () => ({ variable: "test-font-variable" });

    return { Geist: font, Geist_Mono: font, Poppins: font };
  }

  return load.call(this, request, parent, isMain);
};
