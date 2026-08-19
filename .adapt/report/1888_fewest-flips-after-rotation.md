## 1888 — Minimum Number of Flips to Make the Binary String Alternating

- New id / title / slug: 1888 / Fewest Flips After Rotation / `fewest-flips-after-rotation`
- Old → new API: `minFlips` → `fewestFlipsAfterRotation` (go `fewestFlipsAfterRotation`, rust `fewest_flips_after_rotation`, ts `fewestFlipsAfterRotation`); parameter `s` kept (conventional)
- Core algorithm / difficulty: sliding window of mismatch counts against `0101…` over `s+s`, parity correction per shift / H3 (unchanged)
- Statement rewritten from spec: yes — "Type-1/Type-2 operations" replaced by named moves (rotate/flip), rotations declared free up front
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `"10101" → 0` (already alternating), `"1000110" → 1` (rotation drops cost from 3 to 1), `"0110011" → 2`
- Constraints: domain unchanged (1 ≤ |s| ≤ 10⁵, binary alphabet), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Family: shares "Fewest … Flips" vocabulary with 0995 `fewest-window-flips` (on disk) — both are flip-counting problems but not near-twins
- Gates: check ✓ verify ✓ (7/7 languages, 19/19 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Example strings were chosen by script: candidates scored by (answer,
  best rotation, no-rotation cost) so one example shows rotation strictly
  helping; the generator cross-checks the window DP against brute force
  over all rotations.
- The source hidden set is small and string-keyed; checked none of the
  three public strings collide with it.
