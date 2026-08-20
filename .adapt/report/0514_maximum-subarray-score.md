## 514 — Maximum Subarray Min-Product

- New id / title / slug: 514 / Maximum Subarray Score / `maximum-subarray-score`
- Old → new API: `maxSumMinProduct` → `maxSubarrayScore` (go `maxSubarrayScore`, rust `max_subarray_score`, ts `maxSubarrayScore`); parameter `nums` kept (conventional)
- Core algorithm / difficulty: monotonic stack for nearest-smaller spans × prefix sums / H3 (unchanged)
- Statement rewritten from spec: yes — "min-product" restated as the subarray's "score" (minimum × sum)
- Examples newly constructed: yes (structure-preserving: yes)
  - `[2,3,5,3] → 33` (winner is the trailing window), `[5,2,4,4,1] → 32` (a short run of equals beats every wide window), `[2,1,4,6,5,3] → 60` (valley left of a peak)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: regenerated — `solution-stack-spans.svg` documents its bar layout in a comment (x = 110 + i·110, w 70, baseline 230, 42 px/unit); re-emitted for `[2,3,5,3]` including the stack-snapshot captions; eyeballed
- Gates: check ✓ verify ✓ (7/7 languages, 13/13 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- First public-case draft wrote a one-parameter input as a bare array; the
  case `input` is the *argument list*, so single-parameter problems wrap it
  (`[[2,3,5,3]]`, not `[2,3,5,3]`). The compatibility gate caught it
  immediately.
