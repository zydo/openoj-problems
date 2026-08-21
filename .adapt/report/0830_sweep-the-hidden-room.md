## 830 — Robot Room Cleaner

- New id / title / slug: 830 / Sweep the Hidden Room / `sweep-the-hidden-room`
- Old → new API: `cleanRoom` → `sweepRoom` (go `sweepRoom`, rust `sweep_room`); **oracle `Robot` → `Sweeper`**; the four oracle operations (`move`, `turnLeft`, `turnRight`, `clean`) keep their names — they are the task's vocabulary
- Core algorithm / difficulty: iterative spiral DFS over a hidden grid with an explicit frame stack and a five-call back-out / H3 (unchanged)
- Statement rewritten from spec: yes (a cleaning machine on a hidden floor plan; judging paragraph explains the cleaned-set verdict)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - 4x6 room split by interior walls, start `[2,1]` → 19 cells; open 3x3 from the center → 9; 2x4 ring around a blocked middle → 6
- Constraints: domain unchanged, presentation rewritten
- Skeletons: all seven languages (python3 + java hand-set in generator shape; cpp/go/rust/js/ts in the 0227 exemplar's shapes)
- Figures: none
- Gates: verify ✓ (7/7 languages, 17/17 cases each) compatibility ✓ (see note) stale ✓ overlap ✓; check pending (see note)
- Sandbox: interactive kind, deferred to batch run

### Notes

- **The four compiled/dynamic interactive wrappers did not support void
  methods.** `cpp/go/rust/js_interactive.py` decided "returns a value" from
  `bool(invocation.get("return_type"))`, and a `{"kind": "void"}` dict is
  truthy — so a void problem generated `openoj_json_i32(actual)` against a
  `()`-returning method (Rust failed to compile; JS/TS serialized
  `undefined`). Fixed in the harness (openoj repo, uncommitted) by the same
  rule the python/java sides already use: kind `void` means judged by the
  oracle's `verdict()`. 0227 (non-void) re-verified 7/7 after the change.
  0489 is the first void interactive in seven languages; 0843 follows.
- **`adapt_gates.py` compatibility fails on sharded interactive bundles —
  flat-path bug, not a bundle defect.** `gate_compatibility` invokes
  verify_solution with `problems-adapt/<name>` (no shard); for a sharded
  bundle that path does not exist, verify falls back to slug lookup for
  cases but `_assembly_sources` reads the bogus path, so the provided
  oracle silently disappears (`module has no attribute 'Sweeper'` /
  javac cannot find symbol). Function/design/sql Part B problems never
  noticed: they carry no `provided/`. Running the gate's exact staging
  with the sharded path passes: source `solution.py` and `solution.java`,
  renamed `cleanRoom`→`sweepRoom` and `Robot`→`Sweeper` only, 17/17 both.
  Central fix is one line: `problems-adapt/{adapted.parent.name}/{adapted.name}`.
- **`check_bundle` reports "starter generation failed: Unsupported
  interactive oracle: Sweeper"** — `gen_starters.py`'s `INTERACTIVE_ORACLES`
  table must gain `Sweeper` (python/java/parameter `sweeper`), exactly as
  `SequenceReader` was added for 0227. The five non-generated starters will
  then flag "stray" exactly as the exemplar's do today, until interactive
  starter generation covers all seven languages.
- The oracle's constructor cleans the start cell (spending one budget
  unit) in every language — the source python/java behavior, kept so the
  compatibility gate and hidden-case budgets stay byte-honest.
- Rust names the advance `r#move` (keyword collision) with snake_case
  turns; all other languages keep `move`/`turnLeft`/`turnRight`/`clean`
  verbatim.
