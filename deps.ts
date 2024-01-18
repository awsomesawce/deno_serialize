/**
 * @summary deps for `serialize`
 *
 * TODO: When setting up `deps.ts`, `import` dependencies first, then export at end of file.
 */

export * as cflags from "https://deno.land/x/cliffy@v1.0.0-rc.3/flags/mod.ts";
export { Command } from "https://deno.land/x/cliffy@v1.0.0-rc.3/command/command.ts";

export * as yaml from "$std/yaml/mod.ts";
export * as fs from "$std/fs/mod.ts";
export * as path from "$std/path/mod.ts";
export * as toml from "$std/toml/mod.ts";
export * as JSON5 from "https://esm.sh/json5@2.2.3";
export * as JSONC from "$std/jsonc/mod.ts";
export * as A from "https://esm.sh/asciidoctor@3.0.2";
export * as log from "https://deno.land/std@0.207.0/log/mod.ts";

import * as mongo from "https://deno.land/x/mongo@v0.32.0/mod.ts"

export {
    mongo
}