## 2272 — Substring With Largest Variance

- New id / title / slug: 2272 / Widest Letter Spread in a Substring / `widest-letter-spread-in-a-substring`
- Old → new API: `largestVariance` → `widestLetterSpread` (go `widestLetterSpread`, rust `widest_letter_spread`, ts `widestLetterSpread`); parameter `s` kept
- Core algorithm / difficulty: Kadane per ordered letter pair with a has-low companion value (`diff` vs `diff_with_low`) / H4 (unchanged)
- Statement rewritten from spec: yes ("variance" re-coined as "spread", defined from scratch — real variance never enters)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `"ooppooop"` → 3 (best substring "ooppooo": five o's vs two p's), `"tuwxyzq"` → 0 (all letters single), `"edcaeed"` → 2 (third letters count as 0 in the pair scan)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Example answers were found by brute force over all substrings/pairs, with
  the argmax substring printed alongside so the explanation names a real
  witness.
- Sweeping coined terminology needed two passes in the solutions: lowercase
  `\bvariance\b` and sentence-initial `\bVariance\b` — one class of leftover
  per capitalization.
