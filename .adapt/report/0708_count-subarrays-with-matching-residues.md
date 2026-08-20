## 708 — Count of Interesting Subarrays

- New id / title / slug: 708 / Count Subarrays with Matching Residues / `count-subarrays-with-matching-residues`
- Old → new API: `countInterestingSubarrays` → `countResidueMatches` (go `countResidueMatches`, rust `count_residue_matches`, ts `countResidueMatches`); parameters `nums`, `modulo`, `k` kept (conventional)
- Core algorithm / difficulty: indicator reduction, prefix hit counts, hash map over residues / H3 (unchanged)
- Statement rewritten from spec: yes — "interesting" → "qualifying", the double-residue condition stated as hits and counts sharing remainder k
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[1,4,2,5], modulo=2, k=1 → 6` (odd values as hits), `[2,7,4], modulo=3, k=0 → 6` (zero hits everywhere, k = 0), `[5,9,13], modulo=4, k=1 → 3` (all hits, length ≡ 1)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The kept solutions' comment prose said "interesting"; renamed to
  "qualifying" in comments only.
