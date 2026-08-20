## 639 — Bitwise XOR of All Pairings

- New id / title / slug: 639 / XOR Over All Cross Pairs / `xor-over-all-cross-pairs`
- Old → new API: `xorAllNums` → `xorCrossPairs` (go `xorCrossPairs`, rust `xor_cross_pairs`, ts `xorCrossPairs`); parameters `nums1`, `nums2` kept (conventional); intermediate array nums3 dropped from the statement — the task is stated as the grand XOR of all combination results directly
- Core algorithm / difficulty: parity collapse — each element occurs (other array's length) times, even counts cancel, so only odd-length counterparts contribute their overall XOR / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[5,2,10],[6,1,13] → 7` (both odd, nine pair results listed), `[8,3],[5,1,2] → 11` (one odd, one even), `[9,4],[2,7] → 0` (both even, full cancellation)
- Constraints: domain unchanged (lengths ≤ 10⁵, values ≤ 10⁹), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Example values were brute-force verified (enumerate all pair XORs) before
  writing them into the statement, including the nine-element pair list shown
  in Example 1's explanation.
