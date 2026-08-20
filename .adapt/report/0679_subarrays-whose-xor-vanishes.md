## 679 — Count the Number of Beautiful Subarrays

- New id / title / slug: 679 / Subarrays Whose XOR Vanishes / `subarrays-whose-xor-vanishes`
- Old → new API: `beautifulSubarrays` → `zeroXorSubarrays` (go `zeroXorSubarrays`, rust `zero_xor_subarrays`, ts `zeroXorSubarrays`); parameter `nums` kept
- Core algorithm / difficulty: prefix XOR + hash count seeded with the empty prefix; a move preserves bit parities, so reducible ⟺ subarray XOR 0 / H3 (unchanged)
- Statement rewritten from spec: yes ("beautiful" → "reducible"; the operation restated from the bit-clearing invariant it really is)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[5,6,3,5]` → `2` (two overlapping zero-XOR stretches), `[2,4,8]` → `0` (no shared bits, no legal move), `[0,7,0]` → `2` (single zero elements)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox pending (batch) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- The example-1 walkthrough (`5,4,1` → `1,0,1` → zeros) was checked by hand
  against the bit patterns; the brute force covers the count itself.
- Brute force enumerates all subarrays with a running XOR — independent of
  the prefix-map logic.
