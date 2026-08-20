## 711 — Maximum Element-Sum of a Complete Subset of Indices

- New id / title / slug: 711 / Maximum Square-Compatible Index Sum / `maximum-square-compatible-index-sum`
- Old → new API: `maximumSum` → `maxSquareIndexSum` (go `maxSquareIndexSum`, rust `max_square_index_sum`, ts `maxSquareIndexSum`); parameter `nums` kept
- Core algorithm / difficulty: bucket 1..n indices by squarefree part (trial division), take the heaviest bucket / H3 (unchanged)
- Statement rewritten from spec: yes — "complete subset" jargon replaced by the direct rule (any two chosen indices multiply to a perfect square)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[5,1,4,2,6,3] → 7` (square indices {1,4} win), `[2,9,9,9,9,9,9,9,2] → 18` (the {2,8} squarefree-part-2 bucket beats the squares {1,4,9} at 13), `[999999999] → 999999999` (single index, rule vacuous) — all brute-verified by full subset enumeration
- Constraints: domain unchanged (1 ≤ n ≤ 10⁴, 1 ≤ nums[i] ≤ 10⁹), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Example 2 was chosen so a non-square index group wins — the natural
  first guess (perfect-square indices) is wrong there, which is the whole
  point of the problem.
