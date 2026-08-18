## 0647 — Palindromic Substrings

- New id / title / slug: 647 / Count Palindrome Slices / `count-palindrome-slices`
- Old → new API: `countSubstrings` → `countPalindromeSlices` (go `countPalindromeSlices`, rust `count_palindrome_slices`, ts `countPalindromeSlices`); parameter `s` kept (conventional)
- Core algorithm / difficulty: expand from all `2n - 1` middles / H2 (unchanged)
- Statement rewritten from spec: yes — it defines *slice* once and states the "counted by position, not by spelling" rule outright, which the source left to the second example to imply
- Examples newly constructed: yes (structure-preserving: n/a for the statement — the only figure is a solution figure, redrawn to match)
  - `"noon" → 6`, `"level" → 7`, `"sky" → 3`
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7 (cpp, go, java, js, py, rust, ts)
- Figures: **regenerated** — `solution-center-expansion.svg` walked the source's `"aaa"`, so it was redrawn by hand as `solution-middle-growth.svg` over `"noon"`
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- **Vocabulary reuse across the bank pays off.** `0005_longest-palindrome-slice`
  had already established *slice* as this bank's word for a contiguous run, so
  the rename needed no invention and the two problems now read as siblings even
  though LeetCode does not group them.
- **A solution figure over a degenerate example is worth replacing, not
  relabelling.** The source figure walked `"aaa"`, where every middle succeeds
  and the picture cannot show a walk stopping. Substituting another repeated
  letter would have been a pure permutation. Redrawing over `"noon"` — one
  even seam that grows twice, four odd middles that stop immediately — makes
  the same point and shows the failure case the original could not.
- The source figure also overran its 300-wide canvas with 12px prose starting
  at `x=50` (the same overflow class flagged in the 0053 report). The
  replacement is sized to its text.
