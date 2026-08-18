## 0494 — Target Sum

- New id / title / slug: 494 / Signed Totals To A Target / `signed-totals-to-a-target`
- Old → new API: `findTargetSumWays` → `countSignedTotals` (go `countSignedTotals`, rust `count_signed_totals`, ts `countSignedTotals`); parameters `nums`/`target` kept
- Core algorithm / difficulty: sparse counting DP over reachable signed totals / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[2,2,2,2] target=0 → 6` (choose-two combinatorics), `[3,0,3] target=6 → 2` (zero's two placements), `[4,2] target=1 → 0` (unreachable, parity)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Register kin: `0039_combination-sum` became "Summands To A Target", so this
  one takes "Signed Totals To A Target" — same grammatical family, clearly
  distinguishable task words.
- The double-counting rule for zeros (+0 vs −0) is stated in the description
  and given its own example, since it is the subtlest judged semantic.
