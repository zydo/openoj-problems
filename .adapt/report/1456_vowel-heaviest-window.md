## 1456 — Maximum Number of Vowels in a Substring of Given Length

- New id / title / slug: 1456 / Vowel-Heaviest Window / `vowel-heaviest-window`
- Old → new API: `maxVowels` → `vowelHeaviestWindow` (go `vowelHeaviestWindow`, rust `vowel_heaviest_window`, ts `vowelHeaviestWindow`); parameters `s`, `k` kept
- Core algorithm / difficulty: fixed-size sliding window with ±1 edge updates / H1 (unchanged)
- Statement rewritten from spec: yes — "stretch of k consecutive characters" replaces "substring of length k" phrasing, and the y-is-not-a-vowel point is stated
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `"queueing", k=4 → 4` (dense run), `"rhythms", k=3 → 0` (no vowels at all), `"toyboat", k=2 → 2` (mid); brute-force cross-checked; no overlap with hidden cases
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (adapt_gates) verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- None beyond the routine.
