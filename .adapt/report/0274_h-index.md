## 0274 — H-Index

- New id / title / slug: 274 / H-Index / `h-index` (kept — see notes)
- Old → new API: none; `hIndex` kept in every language (go `hIndex`, rust
  `h_index`, ts `hIndex`), parameter `citations` kept
- Core algorithm / difficulty: counting buckets clamped at n, downward
  sweep / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[2,7,4,0,5,9] → 4`, `[1000,999,3] → 3` (clamping), `[0,0,0] → 0`
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Title kept under ADAPT.md's "unavoidable generic term" rule: the h-index
  is Hirsch's standard bibliometric name for the quantity being computed,
  not LeetCode's phrasing — renaming would mean inventing terminology.
  The statement prose, examples, and guide are fully rewritten.
- 0275_h-index-ii is the kin problem (sorted-input variant) and is *not*
  in chunk-5; whoever adapts it should keep the same base name for the
  family to stay recognizably related.
