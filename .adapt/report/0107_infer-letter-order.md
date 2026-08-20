## 107 — Alien Dictionary

- New id / title / slug: 107 / Infer Letter Order / `infer-letter-order`
- Old → new API: `alienOrder` → `inferLetterOrder` (go `inferLetterOrder`, rust `infer_letter_order`, ts `inferLetterOrder`); parameter `words` kept
- Core algorithm / difficulty: Kahn's topological sort driven by a min-heap so the lexicographically smallest valid order is emitted / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `["won","woo","ox","oxx","xu"] → "nuwox"` (three ready letters, smallest-first drain), `["hi","ha"] → "hia"` (single constraint), `["ba","ab","ba"] → ""` (contradictory claims)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- This bank's variant is stricter than the classic task: several orders
  may be consistent and the *lexicographically smallest* is required, so
  the min-heap (not a FIFO queue) is judged behavior. The rewrite says so
  explicitly in the description.
- Two distinct impossibility modes exist (prefix violation and cycle); the
  example uses the cycle mode, and the hints call out the prefix mode,
  which produces no edge and would otherwise slip past a cycle check.
