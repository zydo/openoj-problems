## 596 — Total Appeal of A String

- New id / title / slug: 596 / Distinct Letters Over All Substrings / `distinct-letters-over-all-substrings`
- Old → new API: `appealSum` → `distinctLetterSum` (go `distinctLetterSum`, rust `distinct_letter_sum`, ts `distinctLetterSum`); parameter `s` kept
- Core algorithm / difficulty: per-index last-occurrence contribution with an incrementally maintained `current` (variety-sum of substrings ending at i) / H2 (unchanged)
- Statement rewritten from spec: yes ("appeal" re-coined as "variety", defined from scratch)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `"sees"` → 15 (repeat pattern abba), `"warp"` → 20 (all letters distinct, variety = length), `"tote"` → 18 (one repeat plus two singles)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Renaming the coined concept ("appeal") meant sweeping comments in all seven
  solutions, not just the method name — `\bappeal\b` after the identifier
  rename, plus one capitalized `Variance`-style leftover class of hit in 2272
  (do `\bX\b` and `\Bpropercase` both when a term starts sentences).
- The solutions.md walk-through (`current` runs 1, 3, 4, 7 on `"sees"`) was
  verified by tracing the actual loop, same discipline as expected values.
