## 15 — Search in Rotated Sorted Array

- New id / title / slug: 15 / Rotated Array Lookup / `rotated-array-lookup`
- Old → new API: `search` → `lookup` (go `lookup`, rust `lookup`, ts `lookup`)
- Core algorithm / difficulty: binary search that keeps the seam-free half / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes — the halving figure draws 7 cells and the trace `[0..6] → [4..6] → [4..4]`, which example 1 reproduces)
  - `[12,15,20,26,3,8,9] target 3` → 4, `[30,40,50,10,20] target 45` → -1 (absent), `[-6,-2,5,11] target 11` → 3 (uncut array, negatives)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated (`solution-binary-search-halving.svg` — cell values in both rows, both range annotations, the found-cell caption)
- Gates: check ✓ verify ✓ (7/7 languages, 24/24 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- **A compatibility-gate limitation the next batches will hit.**
  `gate_compatibility` collects renames into one flat list — ledger `api`
  entries, then `method`/`class_name`/`oracle`, then the per-language
  entrypoints — and applies *all* of them to *every* source solution file, in
  order. When the source's `method` and its rust entrypoint are the same
  string (true for every all-lowercase source method: `search`, `merge`,
  `trap`, …), the `method` rename fires first and consumes the identifier, so
  the rust-specific rename never applies and `solution.rust` compiles against
  the wrong name (`E0599`). Renaming `search` → `rotatedLookup` failed for
  exactly this reason.
  The authoring-side workaround, used here, is to give the adapted bundle a
  single lowercase-word method so that method, go, rust and ts renames are all
  the same string — which is the property the source had. `search` → `lookup`
  is a fair name and the title carries the description. The real fix is to
  apply entrypoint renames per language file rather than globally; that is a
  gate change, so it is reported rather than made.
  The same situation recurs in this chunk at 0042 (`trap`) and 0056 (`merge`).
- The rotation is described as "cut once and re-joined" rather than by an
  index formula; the numeric domain of the constraints is untouched.
- `nums` / `target` kept (conventional identifiers per ADAPT.md §Naming).
