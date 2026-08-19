## 2781 — Length of the Longest Valid Substring

- New id / title / slug: 2781 / Longest Forbidden-Free Substring / `longest-forbidden-free-substring`
- Old → new API: `longestValidSubstring` → `longestForbiddenFree` (go `longestForbiddenFree`, rust `longest_forbidden_free`, ts `longestForbiddenFree`); parameters `word`, `forbidden` kept — `forbidden` deliberately not renamed to `banned`: every source solution already declares a local `banned`
- Core algorithm / difficulty: two-pointer sweep, hash set of forbidden strings, ≤10-length suffix probes / H3 (unchanged)
- Statement rewritten from spec: yes — "valid substring" → "clean substring" (contains no forbidden string)
- Examples newly constructed: yes (structure-preserving: yes)
  - `"zababars", ["za","aba"] → 4` (hits end at rights 1, 3, 5 — the same bracket cells the figure already drew), `"abacabad", ["cab"] → 5` (single mid-string occurrence), `"xyz", ["x","y","z"] → 0` (empty substring)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated (solution-sliding-window — letters, hit annotations, final-window caption)
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The source figure's middle bracket (drawn over cells 1–3) disagreed with the
  source data (its "aaa" hit for right = 4 actually spans cells 2–4); the new
  example's hits land exactly on the drawn brackets, so the adapted figure is
  both label-edited and now exact.
