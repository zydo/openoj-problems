## 6 — Regular Expression Matching

- New id / title / slug: 6 / Dot-Star Pattern Matching / `dot-star-pattern-matching`
- Old → new API: `isMatch` → `dotStarMatch` (go `dotStarMatch`, rust `dot_star_match`, ts `dotStarMatch`)
- Core algorithm / difficulty: prefix-pair DP over `.`/`*` semantics / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `("seed", "see")` → false (cover must be total), `("moo", "mo*")` → true (star
    takes two copies), `("drum", ".*um")` → true (dot-star head + literal tail)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 24/24 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The mini-language (`.` = one arbitrary character, `*` = zero-or-more of the
  previous symbol, pair acting as a unit) is functional spec, not prose — the
  statement re-derives it in fresh wording.
- Reference cross-check: DP port vs an independent recursive backtracking matcher.
