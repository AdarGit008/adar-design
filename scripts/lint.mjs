#!/usr/bin/env node
// adar-design lint — validates data/ (modes + mixes + skill) against the refine spec.
// _template.json is intentionally skipped: it carries type-correct placeholders, not real modes.

import { loadAll, validate } from "./lib.mjs";

const { skill, modes, modeFiles, mixes } = loadAll();
const errors = validate({ skill, modes, modeFiles, mixes });

if (errors.length) {
  console.error(`VALIDATION FAILED (${errors.length}):\n- ` + errors.join("\n- "));
  process.exit(1);
}

console.log(`OK: ${modes.length} mode(s) + ${mixes.length} mix(es) lint clean.`);
