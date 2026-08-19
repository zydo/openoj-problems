# Part B chunk-agent instructions

Deltas from `.adapt/PROTOCOL.md` for agents dispatched on `wave-b-*`
chunks. Read `openoj/ADAPT.md` and `.adapt/PROTOCOL.md` first — this
file lists only where Part B differs, plus conventions learned since
the pilot. When something here and something there disagree, this file
wins.

## Where your output goes

- Ledger fragments: **`.adapt/incoming-b/<new-key>.json`** — Part B's
  inbox. NOT `.adapt/incoming/`, which belongs to Part A; a fragment
  written there is merged by the other part and your bundle is credited
  to the wrong shard.
- Reports: `.adapt/report/<new-key>.md` as always.
- Scratch (public-case generators, expected-value scripts): under
  `.localonly/` in the problems repo — gitignored, and outside the
  bundle, where `check.py` would reject it.
- Never run `adapt_merge.py` or `adapt_mapping.py`; never touch
  `.adapt/ledger*.json`, `MAPPING.md`, `.adapt/incoming/`, `part-a.json`,
  or anything under `problems/` (the live tree). Do not commit, and do
  not edit the gates or the scripts — the main agent commits per wave
  and adjudicates gate false positives.

## Gates

- `python3 scripts/adapt_gates.py <new-key> --source <source-key>` —
  always pass `--source`. Your bundle has no record in the frozen base
  ledger, so the default lookup cannot resolve it.
- `python3 /Users/dongziyu/code/openoj/.localonly/verify_solution.py
  problems-adapt/<new-key>` is the local judge.
- Sandbox judging (gate 3) for design and SQL kinds is deferred to the
  central batch run: record `sandbox pending (batch)` in the report.

## Conventions learned since the pilot

- If `invocation.method == invocation.entrypoints.rust` in the source,
  keep that equality in the adaptation. The compatibility gate applies
  renames in a fixed order — method first, then per-language
  entrypoints — so a case-convention split (`rollTen` vs `roll_ten`)
  breaks the staged Rust source with E0599 (0470).
- Before renaming a parameter, grep the source solutions for the
  candidate name as an identifier; a source solution's own locals
  survive the rename (PROTOCOL.md step 3; cost 0587 an hour).
- Design problems: hidden-case `actions` strings naming the class or
  methods are renamed in place — the one sanctioned hidden-case edit.
  SQL: `INSERT INTO <table>` gets the new table name.
- Public-case generator scripts run with `PYTHONDONTWRITEBYTECODE=1`.
- Variant ids and their `solutions.md` headings never change — the
  Solutions tab pairs them by token match.
- Two or three examples, meaningfully different shapes; when the source
  has figures, prefer structure-preserving examples so the figure needs
  only a label edit, and check your example inputs against the hidden
  cases so no public case duplicates one (0470).
- If a gate failure looks like a false positive, say so in the report
  and move on to the next problem — do not patch the gate or weaken the
  bundle to appease it.
