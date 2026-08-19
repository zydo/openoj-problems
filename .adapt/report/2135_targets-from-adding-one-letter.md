## 2135 — Count Words Obtained After Adding a Letter

- New id / title / slug: 2135 / Targets From Adding One Letter / `targets-from-adding-one-letter`
- Old → new API: `wordCount` → `reachableTargets` (go `reachableTargets`, rust `reachable_targets`, ts `reachableTargets`); parameters `startWords`, `targetWords` kept
- Core algorithm / difficulty: 26-bit letter masks, hash set of start masks, clear-one-bit probes per target / H3 (unchanged)
- Statement rewritten from spec: yes — the two-step move is restated as attach + shuffle with a fresh inline demo (`"grip"` → `"prigs"`)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `["grip","dot","trap"] / ["prigs","dot","gripd"] → 2` (includes the unchanged-word trap), `["me","to"] / ["team","toe"] → 1` (length bound), `["x","y"] / ["yx","xy","z"] → 2` (single-letter starts, anagram targets)
  - verified no public input duplicates a hidden one
- Constraints: domain unchanged (≤ 5·10⁴ words, lengths 1..26, lowercase, no repeats), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The source's two examples both had output 2; the adapted set deliberately
  varies the outputs (2, 1, 2) so the examples don't telegraph a pattern.
- The definitional demo (`"abc"` + 'd' → `"abcd"` in the source) became
  `"grip"` → `"prigs"` — chosen so the same string does double duty as
  example 1's first target.
