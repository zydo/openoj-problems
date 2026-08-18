# The per-problem recipe

Distilled from the Phase 0 pilot. Read `openoj/ADAPT.md` first — this file
is the mechanical steps, not the reasoning. Read one finished exemplar
before starting: `.adapt/report/0001_pair-sum.md` and its bundle.

## The loop

For one source bundle `problems/<key>`:

1. **Read the source** completely: `statement.md`, `problem.json`,
   `cases.json` (structure, not necessarily every hidden case),
   `solutions.md`, one `solution.*`, and any `figures/*.svg`.
2. **Write the spec** (in your head or notes): inputs, output, conditions,
   guarantees, intended technique, complexity. Then close the source
   statement — you will not look at its prose again.
3. **Choose the new identity**: title, slug, method name (+ entrypoints),
   class name if design, oracle if interactive, parameter renames only when
   they improve clarity. Names follow `ADAPT.md` §Naming: rename unless the
   name is an unavoidable generic term; never rename merely to differ.
   Sibling problems (near-twins sharing a family) must keep recognizably
   related titles — for batch work the family titles are pre-decided in
   your instructions; do not improvise them.
4. **Choose the examples first, figures second.** Two or three examples,
   meaningfully different shapes, followable by eye. If a figure exists,
   prefer an example that preserves the drawn structure (same lengths /
   shape / grid size) so the figure needs only label edits. If the figure's
   geometry encodes the data and no renderer exists for its family, drop
   the figure and say so in the report.
5. **Write the artifacts**:
   - `problem.json` — copy the source, change `id`, `slug`, `title`, and
     the API fields you are renaming (`method`, `class_name`, `oracle`,
     `entrypoints`, `methods[].name`, parameter names). Everything else —
     `difficulty`, `tags`, `limits`, `comparison`, codecs, types — is kept
     byte-for-byte.
   - `cases.json` — hidden cases stay **data-identical**, with exactly two
     exceptions: design/concurrent `actions`/`threads[].call` strings that
     name the renamed class or methods are renamed in place; SQL
     `INSERT INTO <table>` statements get the new table name. Public cases
     are regenerated from your new examples, expected values computed by
     the reference algorithm (write a tiny local script and run it — never
     compute expectations by hand). Public case objects hold exactly
     `input` and `expected`. Run that script with
     `PYTHONDONTWRITEBYTECODE=1` — importing a bundle's `solution.py`
     otherwise drops a `__pycache__` directory inside the bundle, which
     `check.py` rejects as an unexpected file.
   - `statement.md` — written from the spec alone: `# Title`, `##
     Description` in the house voice (look at 0001 for the register),
     examples as `### Example N` with ```text blocks, `### Constraints`
     (same numeric domain, fresh presentation), `### Follow-up` when the
     source had one, `## Hints` as `### Hint N` following the reasoning
     path. Interactive problems keep an explanatory "how judging works"
     paragraph. Concurrent problems keep the concurrent-judging section.
   - `solution.*` — copy from source; rename only the API identifiers
     (word-boundary regex), including in comments. Do not otherwise edit.
   - `solutions.md` — keep the source's expository structure and insights
     but write it fresh; every worked example must use your new data, and
     no sentence should share a 7-word run with the source.
   - figures: label-edit, or `scripts/adapt_figures.py <family>` if the
     family has a renderer (`container-lines`, `kadane-walk`), or drop.
6. **Generate starters**: `python3 scripts/gen_starters.py
   problems-adapt/<new-key>` — never hand-edit starters.
7. **Record the ledger fragment** at `.adapt/incoming/<new-key>.json`
   (do not edit `.adapt/ledger.json` directly — fragments are merged
   centrally):
   ```json
   {"source": "<source-key>", "source_id": <n>, "source_title": "<old>",
    "adapted": "<new-key>", "id": <n>, "title": "<new>",
    "api": {"<old>": "<new>", ...}, "kind": "function|design|interactive|concurrent|sql",
    "figures": "none|labels updated|regenerated|dropped"}
   ```
   `id` is the source number for now (pilot convention); renumbering
   happens centrally later. Every identifier you renamed goes in `api`,
   including SQL table/columns and oracle class names.
8. **Run the gates until clean**:
   ```
   python3 scripts/adapt_gates.py <new-key>
   python3 /Users/dongziyu/code/openoj/.localonly/verify_solution.py problems-adapt/<new-key>
   python3 scripts/check.py --tree problems-adapt --skip-runtime
   ```
   All three must be fully green. When a gate fails, the gate is usually
   right — rework the artifact, don't argue with it. The known
   false-positive classes are already excluded (framework `Solution`
   wrapper, two-symbol-alphabet example lists, corpus boilerplate,
   bare-English-word names outside identifier positions); new
   false positives go to the main agent, not a local edit of the gates.
9. **Write the report** `.adapt/report/<new-key>.md` in the pilot's shape
   (see any existing report): the header block with every field, gates
   status, and a `### Notes` section for anything the next 800 will hit.

## Hard rules

- Never regenerate or alter hidden case data. The compatibility gate runs
  the *source's* solutions against your cases; that is the proof your
  rewrite preserved the problem, and it only means something if the data
  is untouched.
- Constraints keep their numeric domain exactly.
- Variant ids (`kadane`, `divide_and_conquer`, …) and their `solutions.md`
  section headings stay — the Solutions tab pairs them by token match.
- Do not edit anything under `problems/` (the live tree), the gates, or
  the ledger directly. Do not commit; the main agent commits per wave.
- Every sentence you write, you write from the spec. If you catch
  yourself translating the source sentence by sentence, stop and restart
  the section from the spec.
