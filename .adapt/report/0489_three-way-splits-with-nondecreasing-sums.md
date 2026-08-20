## 489 — Ways to Split Array Into Three Subarrays

- New id / title / slug: 489 / Three-Way Splits With Nondecreasing Sums / `three-way-splits-with-nondecreasing-sums`
- Old → new API: `waysToSplit` → `countThreeWaySplits` (go `countThreeWaySplits`, rust `count_three_way_splits`, ts `countThreeWaySplits`); parameter `nums` kept
- Core algorithm / difficulty: prefix sums + two binary searches per first cut / H3 (unchanged)
- Statement rewritten from spec: yes (`left`/`mid`/`right` became `head`/`body`/`tail` in prose only — they are not judge-visible names)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[1,1,2,1,2]` → 3 (three cuts, one with a tied boundary)
  - `[1,0,1,0,1]` → 4 (zeros; all four cuts tie at 1,1,1)
  - `[4,2,1,1]` → 0 (front-heavy array admits nothing)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (per-bundle static replica) verify ✓ (7/7 languages, 15/15 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Title kept distinct from 1977's adapted "Count Non-Decreasing Splits"
  (digit-string problem) by leading with "Three-Way" and putting the
  condition in a trailing phrase.
- The source's `[0,0,0,0]` shape is a hidden case, so the zeros example uses
  `[1,0,1,0,1]` instead of an all-zero array.
