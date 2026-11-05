# Changelog

All notable changes to AskAway Model. The format follows Keep a Changelog 1.1.0; versions follow SemVer.
Versions before 1.0.0 are not listed.

## [1.2.2] - 2026-11-05

### Documentation

- **Changelog:** the repository now has a changelog that lists each stable release from 1.0.0 to this one.

## [1.2.1] - 2026-09-28

### Added

- **Session start tool load:** at session start the agent loads the five JEV tools in one call before its first answer,
  as a workaround for a Claude Desktop bug that defers MCP tools.

### Changed

- **Always loaded tools:** the five JEV tools are marked as always loaded in Claude Code, so they are in the model's
  tool list from the start of the session.

### Fixed

- **Decision trigger restored:** the JEV rule again asks for a call to the request decision tool and a wait for the
  result when a decision has explicit alternatives. The 1.2.0 wording had cut the model-side calls almost to zero.

### Documentation

- **Experiment log:** the log records the 1.2.0 rule regression and the tool loading findings.

## [1.2.0] - 2026-09-28

### Added

- **Rule file install:** the Claude Code guide is installed as its own rule file, not as a managed block inside the
  user's global instructions file.

### Changed

- **Trigger based JEV rule:** the rule tells the agent when to consult the JEV, for decisions with explicit
  alternatives and for batch checks, and to write lean queries, to save Claude tokens.
- **Self-test verdicts:** the session start self-test shows one verdict per JEV mode.

### Fixed

- **Drift detector context:** the drift detector receives the earlier prompts, the last reply and the failed actions,
  and checks every 30 tool calls instead of every 15.
- **Removed hook modes:** reinstalling removes the hooks of modes that no longer exist.

### Documentation

- **Experiment log:** the log records the ideas that were measured and rejected in the 1.2.0 cycle, with their numbers.

## [1.1.0] - 2026-09-26

### Added

- **Live self-test:** at session start the JEV is asked one choice question, one score question and one probability
  question, and the result says whether each answer is as expected.

### Documentation

- **AI agent install spec:** the README gives an AI agent a step table for installing the project from scratch.
- **Separate language READMEs:** the README is split into English and Brazilian Portuguese files, each with a switch
  to the other.
- **TypeSafe SDK usage:** the README documents how the SDK is used and how a question makes the round trip, with a
  diagram.

## [1.0.0] - 2026-09-26

### Added

- **JEV decisions for agents:** Claude Code hooks, an MCP server for Claude Code, Claude Desktop and Codex, and a local
  gateway that talks to the TypeSafe API and serves a monitoring dashboard.
- **JEV first Bash gate:** risky shell commands go to the JEV first, with the user's recent request as context, and
  secrets are redacted before anything leaves the machine.

### Changed

- **English MCP tools:** the MCP tools, parameters and identifiers are in English. This is a breaking change for
  callers that used the earlier names.
- **Bash gate criteria:** the gate uses the routine and confirm criteria, and the destructive criterion is removed.

### Fixed

- **Specific fallback reasons:** the gateway reports the exact cause of a fallback, such as an invalid context or a
  request that is too large, instead of one generic reason.
- **Score ranking and risk:** score weights are normalized, the rank answer lists the abstained candidates, and the
  request decision tool accepts a top level risk.

### Security

- **Cross site calls blocked:** the gateway refuses requests from other sites, caps request body sizes, and refuses a
  non-loopback host without a key.

### Documentation

- **GitHub Flow and SemVer:** the README describes the branching model and the SemVer rules for releases.
- **Bilingual READMEs:** the README and the gateway README are written in English first, with Brazilian Portuguese.
