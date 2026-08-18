## 0022 — Generate Parentheses

- New id / title / slug: 22 / All Balanced Bracket Strings / `all-balanced-bracket-strings`
- Old → new API: `generateParenthesis` → `allBalancedBracketStrings` (go `allBalancedBracketStrings`, rust `all_balanced_bracket_strings`, ts `allBalancedBracketStrings`); parameter `n` kept (conventional)
- Core algorithm / difficulty: backtracking under two prefix-validity guards / H2 (unchanged)
- Statement rewritten from spec: yes — balance is defined outright ("no prefix contains more closers than openers") instead of leaning on the phrase "well-formed"
- Examples newly constructed: yes (structure-preserving: n/a — figure dropped)
  - `n = 2 → 2 strings`, `n = 4 → 14 strings`
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: **dropped** — `solution-recursion-tree.svg`
- Gates: check ✓ verify ✓ (7/7 languages, 12/12 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- **The figure had to go, and the reason generalises.** `solution-recursion-tree.svg`
  draws the complete backtracking tree for `n = 3` — which is precisely the
  source's example 1, down to the five leaf strings printed in its caption. Its
  geometry (the branching, the depth, the leaf count) *is* the value 3, so
  there is no label edit that rescues it, and there is no renderer for the
  family. Dropped for phase 2 to judge. A redraw at `n = 4` would be genuinely
  useful; the drawing is one of the better ones in the bank.
- **Single-integer inputs make "newly constructed examples" awkward.** The
  input domain here is `1 <= n <= 12` and the output is fully determined by
  `n`, so freshness can only be expressed by *choosing different values of
  `n`* — `2` and `4` here, against the source's `3` and `1`. `n = 4` costs a
  fourteen-item output line, wrapped across three lines inside the ```text
  block; `check.py` only counts `### Example N` headings and never parses the
  block, so wrapping is safe.
- Naming had to stay clear of `0020_balanced-brackets` (method
  `balancedBrackets`), which is the *decide* version of the same subject. The
  `All …Strings` form separates the enumeration from the predicate, and both
  statements now share one vocabulary — brackets, balanced, openers, closers,
  nested — so the two read as neighbours rather than duplicates.
