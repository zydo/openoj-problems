## 10 — Valid Parentheses

- New id / title / slug: 10 / Balanced Brackets / `balanced-brackets` (title pinned in ADAPT.md §Naming)
- Old → new API: `isValid` → `balancedBrackets` (go `balancedBrackets`, rust `balanced_brackets`, ts `balancedBrackets`)
- Core algorithm / difficulty: one stack, closer-to-opener map, pop folded into the match test / H1 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `"{[()]}"` → true (nesting depth 3), `"{}[]()"` → true (side-by-side pairs),
    `"([)]"` → false (crossed pairs, a different failure than the source's
    shape-mismatch example)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- ADAPT.md names this problem's new title explicitly, so it was taken verbatim.
- Reference cross-check: stack port vs a pair-erasing reduction (`"{}"`,
  `"[]"`, `"()"` removed to a fixed point).
