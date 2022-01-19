#!/usr/bin/env node

import { program } from "commander";
import { hello } from "./hello";

// prettier-ignore
program.name("my-commander-cli")
  .version("0.0.1", "-v, --version")
  .argument("<arg1>", "My argument")
  .argument("<arg2>", "My argument")
  .option("-s, --string-option <str>", "My string option", String, "")
  .option("-i, --int-option <int>", "My integer option", parseInt, 0)
  .action(handler);

async function handler(arg1: string, arg2: string) {
  const options = program.opts();

  console.log(typeof options.stringOption === "string");
  console.log(typeof options.intOption === "number");

  await hello({ who: "Programmer Dood" });
}

program.parse();
