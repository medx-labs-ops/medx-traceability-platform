/** MedX Tailwind plugins loaded at CSS build time. */
const { readdirSync } = require("fs");
const { join } = require("path");

const UI_MODULE_FOLDERS = ["runtime", "theme", "layout", "forms", "a11y"];
const UI_ROOT = join(__dirname, "../components/ui");

/**
 * UI modules export either a Tailwind plugin `({ addBase }) => {}` or a
 * runtime bootstrap `runMedx*()`. Only single-argument exports are invoked
 * as Tailwind plugins; runtime runners are loaded but registered as no-ops.
 */
function adaptUiModuleExport(exp) {
  if (typeof exp !== "function") return () => { };
  if (exp.length === 1) return exp;
  return () => { };
}

function loadUiFolderPlugins() {
  const plugins = [];

  for (const folder of UI_MODULE_FOLDERS) {
    const dir = join(UI_ROOT, folder);
    const files = readdirSync(dir)
      .filter((name) => name.endsWith(".min.js"))
      .sort();

    for (const file of files) {
      plugins.push(adaptUiModuleExport(require(join(dir, file))));
    }
  }

  return plugins;
}

module.exports = [
  ...loadUiFolderPlugins(),
];
