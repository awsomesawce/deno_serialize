#!/usr/bin/env -S deno run -A

/**
 * @see https://github.com/aaron-bond/better-comments/blob/master/README.md
 * TODO: Use typedoc or another `jsdoc-to-html` renderer.
 * @
 */

/**
 * Add two numbers
 * 
 * * Important
 * ! Depreciated
 * ? Query
 * TODO: Todo msg.
 * 
 */
export function add(a: number, b: number): number {
  return a + b;
}

//! Example alert!

//! This is an alert
//* This is highlighted.
//? Is this a _query_ or **question**? (yes)
//TODO: Here is a todo.


// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log("Add 2 + 3 =", add(2, 3));
}
