#!/usr/bin/env node
// master-jev-gemini: run Gemini clients through a local AskAway Model.
import { gemini } from "./clients.mjs";
import { runLauncher } from "./launcher.mjs";

await runLauncher(gemini);
