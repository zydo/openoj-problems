# Part A chunk-agent instructions

Deltas from `.adapt/PROTOCOL.md` for agents dispatched on `wave-a-*`
chunks. Read `openoj/ADAPT.md` and `.adapt/PROTOCOL.md` first — this
file lists only where Part A differs, plus conventions learned since
the pilot. When something here and something there disagree, this file
wins.

## Where your output goes

- Ledger fragments: **`.adapt/incoming/<new-key>.json`** — Part A's
  inbox. Part A keeps the unsuffixed inbox for historical reasons; the
  suffixed ones (`incoming-b/`, `incoming-c/`, `incoming-d/`,
  `incoming-e/`) belong to other sessions, and a fragment written there
  is merged by the wrong part.
- Reports: `.adapt/report/<new-key>.md` as always.
- Scratch (public-case generators, expected-value scripts): under
  `.localonly/` in the problems repo — gitignored, and outside the
  bundle, where `check.py` would reject it.
- Never run `adapt_merge.py` or `adapt_mapping.py`; never touch
  `.adapt/ledger*.json`, `MAPPING.md`, any `incoming-*/` inbox, another
  part's `part-*.json`, or anything under `problems/` (the live tree).
  Do not commit, and do not edit the gates or the scripts — the main
  agent commits per wave and adjudicates gate false positives. Part A's
  territory is `.adapt/part-a-remaining.json`, and only the keys your
  own wave file names.

## Other sessions are working the same tree

Parts B, C, D and E run in this same checkout. You will see unfamiliar
half-written bundles under `problems-adapt/` that are not yours. Leave
them alone: do not read them for guidance, do not "fix" them, do not
stage anything. Only touch the bundle directories for the keys in your
wave file.

## Gates

- `python3 scripts/adapt_gates.py <new-key> --source <source-key>` —
  always pass `--source`. Your bundle has no record in the frozen base
  ledger, so the default lookup cannot resolve it.
- `python3 /Users/dongziyu/code/openoj/.localonly/verify_solution.py
  problems-adapt/<new-key>` is the local judge. Pass the path; there is
  no `--tree` flag.
- Starters are generated with
  `python3 scripts/gen_starters.py problems-adapt/<new-key>` — a path
  argument, not `--tree`.
- Sandbox judging (gate 3) for design and SQL kinds is deferred to the
  central batch run: record `sandbox pending (batch)` in the report.

## Diagnosis traps that have cost hours

- **An opaque, identical traceback in all seven languages is never a
  language problem.** It is the bundle failing to load. The two seen so
  far: no `starter.*` files generated yet (0646), and `statement.md`'s
  `# Title` not matching `problem.json`'s title (0736). Check both
  before reading a single stack frame.
- `check.py --problems <keys>` filters the **runtime tier only**. The
  static tier always walks the whole tree, so with `--skip-runtime` the
  flag does nothing and the run takes ~2 minutes regardless. That is the
  design, not a bug — and it is why every wave sees the same ~23
  failures from other sessions' in-flight bundles. Read past them to
  your own keys.
- This machine has **no `clang-format`** and a mismatched `rustfmt`, so
  `format.py` silently leaves C++ unformatted and can disagree on Rust.
  That is a known, tracked issue — do not chase it, and do not
  hand-format to compensate. A container sweep fixes it centrally.

## Conventions learned since the pilot

- If `invocation.method == invocation.entrypoints.rust` in the source,
  keep that equality in the adaptation. The compatibility gate applies
  renames in a fixed order — method first, then per-language
  entrypoints — so a case-convention split (`rollTen` vs `roll_ten`)
  breaks the staged Rust source with E0599 (0470).
- **`adapt_gates.py --source` does not apply your api rename map.** Your
  bundle has no ledger entry yet, so the compatibility gate you run
  locally never exercises parameter renames — they only bite after the
  merge, in someone else's session. Whenever a rename map contains more
  than the method name, stage the SOURCE bundle's solutions with the
  full map applied and run the local judge on them yourself. Three
  waves have caught real breakage this way.
- If a method name you rename doubles as a *local variable* in the
  source solutions, the gate's uniform rename keeps it compiling, but
  rename that local in your own solutions so the code stays readable
  (0855: `seat` was both the method and a local).
- Before renaming a parameter, grep the source solutions for the
  candidate name as an identifier; a source solution's own locals
  survive the rename (PROTOCOL.md step 3; cost 0587 an hour). This bites
  hardest with names that are also *library members*: `first` and
  `second` are the obvious pair to reach for on a two-argument problem,
  and they silently corrupt any `solution.cpp` that walks a map with
  `it->second` or a `pair` with `.first` (0737). `size`, `data`, `count`,
  `next`, `value`, `key`, `end` and `begin` carry the same hazard. Prefer
  a domain noun (`wordsA`/`wordsB`) and verify it is absent from every
  source solution before committing to it.
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
- **Rewrite the prose; never carry the source's.** The stale gate has
  caught four verbatim-copy bundles (0162, 0307, 0552, 1000) and every
  one was deleted and requeued. A copied title or a copied example is
  the whole failure — do not start from the source statement and edit.
- If a gate failure looks like a false positive, say so in the report
  and move on to the next problem — do not patch the gate or weaken the
  bundle to appease it.
