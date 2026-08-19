## 2289 — Steps to Make Array Non-decreasing

- New id / title / slug: 2289 / Rounds Until Non-decreasing / `rounds-until-non-decreasing`
- Old → new API: `totalSteps` → `roundsUntilNonDecreasing` (go `roundsUntilNonDecreasing`, rust `rounds_until_non_decreasing`, ts `roundsUntilNonDecreasing`); parameter `nums` kept
- Core algorithm / difficulty: monotonic stack of `(value, removal round)` pairs, answer = max round pushed / H3 (unchanged)
- Statement rewritten from spec: yes — "step" renamed to **round** throughout, removal rule stated as simultaneous trimming of dominated elements
- Examples newly constructed: yes (structure-preserving: yes — solution figure relabeled)
  - `[9,2,4,4,10,3,6,12,9,5,12] → 3` (same removal-round pattern `[0,1,2,3,0,1,2,0,1,1,0]` as the source example so the figure kept its geometry and shading), `[3,6,6,9] → 0` (already non-decreasing, with a tie), `[6,2,2,2] → 3` (equal run clears one per round)
- Constraints: domain unchanged (1–10⁵ length, values 1–10⁹), presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated — `solution-removal-steps.svg` → `solution-removal-rounds.svg` (values, badges, stack snapshot, "step"→"round" wording)
- Gates: check ✓ (static tier clean for this key) verify ✓ (7/7 languages, 20/20 cases) sandbox n/a (function kind) compatibility ✓ stale ✓ overlap ✓

### Notes

- **The source figure carries a factual error**: it badges the 5 at
  position 9 (between 8 and 11) "step 2", but 8 > 5 removes it in round
  1 — the reference algorithm and a brute-force simulation agree on
  badge 1. The adapted figure keeps the source's badge pattern at every
  position except that one, which is corrected (label and shade). Worth
  a central note in case other solution figures were hand-badged.
- Choosing a replacement array with the same *removal-round pattern*
  (not just the same length) is what let the badge-and-shading figure
  survive as a pure label edit; matching only the length would have
  needed a redraw.
- Verified the reference against a brute-force round simulator on 300
  random arrays before trusting the expected values (cheap insurance;
  the simultaneous-removal rule is easy to misread as sequential).
