## 188 — Reverse Pairs

- New id / title / slug: 188 / Inversions Beyond Double / `inversions-beyond-double`
- Old → new API: `reversePairs` → `countInversionsBeyondDouble` (go `countInversionsBeyondDouble`, rust `count_inversions_beyond_double`, ts `countInversionsBeyondDouble`); parameter `nums` kept
- Core algorithm / difficulty: merge-sort cross-pair counting with a monotone two-pointer sweep / H4 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[3,8,1,5,2] → 4`, `[5,-4,0,1] → 3` (negatives sink when doubled), `[6,3,1] → 2` (strictness: 6 > 2·3 is false)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The `2 * nums[j]` overflow trap (int32 extremes) is surfaced in both the
  statement and Hint 4 — the ported solutions already widen where needed.
- "reverse pair" also appeared as terminology inside solution comments; those
  were reworded to "pairs beyond double" (comment-only, no judged effect).
