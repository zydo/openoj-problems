## 2401 — Longest Nice Subarray

- New id / title / slug: 2401 / Longest Bit-Disjoint Subarray / `longest-bit-disjoint-subarray`
- Old → new API: `longestNiceSubarray` → `longestBitDisjointSubarray` (go `longestBitDisjointSubarray`, rust `longest_bit_disjoint_subarray`, ts `longestBitDisjointSubarray`); parameter `nums` kept
- Core algorithm / difficulty: two-pointer window on a running OR mask, XOR retirement / H2 (unchanged)
- Statement rewritten from spec: yes — the LeetCode-coined "nice" replaced by "bit-disjoint," defined in the statement
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[2,9,32,5] → 3` (binary shown, conflict truncates the block); `[6,6,6] → 1` (equal values share every bit); `[1,2,4,32] → 4` (distinct powers of two, whole array)
  - cross-checked against a brute-force pairwise scan
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
