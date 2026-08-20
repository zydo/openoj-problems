## 338 — Longest Duplicate Substring

- New id / title / slug: 338 / Longest Repeated Segment / `longest-repeated-segment`
- Old → new API: `longestDupSubstring` → `longestRepeatedSegment` (go `longestRepeatedSegment`, rust `longest_repeated_segment`, ts `longestRepeatedSegment`); parameter `s` kept (conventional)
- Core algorithm / difficulty: binary search on width + double Rabin-Karp rolling hash / H4 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `"tartar" → "tar"` (disjoint), `"lululu" → "lulu"` (overlapping appearances), `"crypt" → ""` (nothing repeats)
- Constraints: domain unchanged (`2 .. 3 * 10^4`, lowercase letters), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: compatibility ✓ stale ✓ overlap ✓ check ✓ (verify 7/7 languages, 19/19 cases)

### Notes

- The judge compares exactly while the task says "any longest one", so every new
  example was chosen to have a **unique** longest repeat — otherwise a source
  solution that picks a different tie could fail the compatibility gate on a
  public case. Verified by construction and confirmed by the gate.
- Sibling of 1062 (same task, length instead of the segment itself); the two
  titles were decided together — `Longest Repeated Segment` /
  `Longest Repeated Segment Length`.
