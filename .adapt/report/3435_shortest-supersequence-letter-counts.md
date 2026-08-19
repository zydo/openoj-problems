## 3435 — Frequencies of Shortest Supersequences

- New id / title / slug: 3435 / Shortest Supersequence Letter Counts / `shortest-supersequence-letter-counts`
- Old → new API: `supersequences` → `supersequenceLetterCounts` (go `supersequenceLetterCounts`, rust `supersequenceLetterCounts`, ts `supersequenceLetterCounts` — the source had method == every entrypoint, and the rust equality is kept per the Part B convention); parameter `words` kept
- Core algorithm / difficulty: enumerate `2^m` doubling masks over the ≤16 letters, forced doubles from `"xx"` words, realizability = acyclicity of the word graph after removing doubled letters, keep all minimum-length frequency rows / H4 (unchanged)
- Statement rewritten from spec: yes (subsequence-embedding definition, rearrangement collapsing, 26-entry row output restated from scratch)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `["cd","dc"]` → 2 rows (either letter doubles; the two rows are not rearrangements), `["bb","bd"]` → 1 row (forced double, two minimal strings collapse), `["ab","cd","ef"]` → 1 row (six-letter floor with no doubling)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Expected values from `.localonly/wave-g-02/cases_3435.py`: the reference
  against a brute force that enumerates *all strings* over the involved
  alphabet up to the minimal length — 14 tiny source cases plus all three new
  examples.
- Hit the documented rust-entrypoint trap for real: the source's method,
  go, rust, and ts names were all `supersequences`, and giving rust a
  snake_case name broke the compatibility gate with E0599 (the staged source
  keeps the method rename, so the entrypoint rename no longer matches). Fix:
  rust entrypoint stays equal to the method, as in 14 existing adapted
  bundles.
- The stale gate's two-symbol-alphabet exclusion means word lists like
  `["cd","dc"]` are never treated as identifying literals — only the
  26-entry frequency rows are, so the example rows must differ from the
  source's (they do).
