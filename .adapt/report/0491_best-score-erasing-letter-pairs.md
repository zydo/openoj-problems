## 491 — Maximum Score From Removing Substrings

- New id / title / slug: 491 / Best Score Erasing Letter Pairs / `best-score-erasing-letter-pairs`
- Old → new API: `maximumGain` → `bestEraseScore` (go `bestEraseScore`, rust `best_erase_score`, ts `bestEraseScore`); parameters `s`, `x`, `y` kept
- Core algorithm / difficulty: two stack passes, pricier pair type first / H3 (unchanged)
- Statement rewritten from spec: yes (the splice-creates-new-pairs rule is re-explained with a different mini-example)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `"aababbab"`, x=4, y=5 → 18 (both pair types, four erasures, listed stepwise)
  - `"abba"`, x=1, y=10 → 11 (asymmetric prices; both pairs still collected)
  - `"cbbaacb"`, x=4, y=5 → 10 (inert foreign letters)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (per-bundle static replica) verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Expected values were computed by both the source reference and an
  exhaustive-removal brute force; they agreed on all three examples (hand
  tracing the stack pass is error-prone — two slips were caught this way).
- `"abba"` with cheap `x` is worth keeping as an example shape: it shows the
  stack collecting both pair types even when prices are lopsided.
