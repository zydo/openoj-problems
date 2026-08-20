## 264 — Number of Matching Subsequences

- New id / title / slug: 264 / Count Candidates Embedded in a Text /
  `count-candidates-embedded-in-a-text`
- Old → new API: `numMatchingSubseq` → `countEmbeddedCandidates` (Go and
  TypeScript `countEmbeddedCandidates`, Rust `num_matching_subseq` →
  `count_embedded_candidates`)
- Core algorithm / difficulty: waiting buckets keyed by the next required
  character / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes)
  - fresh text and candidate collections exercise duplicates, full-string
    matches, repeated letters, and failed orderings
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓; verify ✓ (7/7 solutions, 14/14 cases); sandbox n/a;
  compatibility ✓; stale ✓; overlap ✓ (0%)

### Notes

- An independent two-pointer scan confirms both public expectations.
- The 12 hidden cases are data-identical to the source corpus.
