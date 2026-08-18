## 0301 — Remove Invalid Parentheses

- New id / title / slug: 301 / Fewest Bracket Deletions / `fewest-bracket-deletions`
- Old → new API: `removeInvalidParentheses` → `fewestBracketDeletions` (go `fewestBracketDeletions`, rust `fewest_bracket_deletions`, ts `fewestBracketDeletions`); parameter `s` kept
- Core algorithm / difficulty: BFS by deletion depth, set-deduplicated levels, balance scan / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `"(()()" → ["(())","()()"]` (two answers at one deletion),
    `"(a(b)c)d)" → ["(a(b)c)d","(a(b)cd)","(a(bc)d)"]` (three answers, letters fixed),
    `")a(" → ["a"]` (every bracket must go)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 21/21 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Title follows the bank's "Fewest …" family (Fewest Palindrome Cuts, Fewest
  Square Summands) and names the cost being minimized; "balanced" is the
  property word already used by 0020 Balanced Brackets, so the pair reads as
  kin without colliding.
- The statement defines balance from scratch (every closing bracket has an open
  one to close; none left open) rather than leaning on a prior problem, and
  states the letters-never-deleted rule in the task sentence where the source
  left it implicit in the examples.
- Solution comments said "parentheses"; the adapted vocabulary says "brackets"
  throughout, matching the new title (all seven languages).
- Multi-answer outputs are `comparison: sorted`, so the examples present their
  lists sorted and note that any order is accepted.
