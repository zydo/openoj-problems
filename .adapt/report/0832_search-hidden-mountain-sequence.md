## 832 — Find in Mountain Array

- New id / title / slug: 832 / Search a Hidden Mountain Sequence / `search-hidden-mountain-sequence` (a deliberate cousin of 0227's "Search a Hidden Sorted Sequence" — same hidden-reader family, distinguishable tasks)
- Old → new API: `findInMountainArray` → `findInMountain` (go `findInMountain`, rust `find_in_mountain`); **oracle `MountainArray` → `MountainReader`**; parameter `target` kept; the oracle operations `get(index)` and `length()` keep their names
- Core algorithm / difficulty: triple binary search (summit by last-true bisection, ascending half first, mirrored descending half) / H3 (unchanged)
- Statement rewritten from spec: yes (mountain framing: rise, summit, fall; the budget paragraph replaces the source's call-cap wording)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[2,4,7,6,3]` target 7 → 2 (summit hit); `[3,6,8,5,1]` target 5 → 3 (descending-only hit); `[1,5,2]` target 3 → -1 (absent)
- Constraints: domain unchanged, presentation rewritten
- Skeletons: all seven languages (python3 + java hand-set in generator shape; cpp/go/rust/js/ts in the 0227 exemplar's shapes)
- Figures: none
- Gates: verify ✓ (7/7 languages, 21/21 cases each) compatibility ✓ (see note) stale ✓ overlap ✓; check pending (see note)
- Sandbox: interactive kind, deferred to batch run

### Notes

- The only non-void problem of the chunk; its seven-language path was
  already sound (0227's shape) and needed no harness change.
- Compatibility verified by running the gate's exact staging with the
  sharded bundle path (flat-path gate bug, see 0489's report): source
  `solution.py` / `solution.java` renamed `findInMountainArray`→
  `findInMountain` and `MountainArray`→`MountainReader` only, 21/21 both.
- `check_bundle` reports "Unsupported interactive oracle:
  MountainReader" — `gen_starters.py`'s `INTERACTIVE_ORACLES` table needs
  the entry (python/java/parameter `reader`).
- With this bundle the interactive set is adapted in all seven
  languages; the remaining central work for the trio is the three
  `INTERACTIVE_ORACLES` entries, seven-language interactive starter
  generation, and the compatibility gate's sharded path.
