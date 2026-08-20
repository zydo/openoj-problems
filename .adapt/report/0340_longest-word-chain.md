## 340 — Longest String Chain

- New id / title / slug: 340 / Longest Word Chain / `longest-word-chain`
- Old → new API: `longestStrChain` → `longestWordChain` (go `longestWordChain`, rust `longest_word_chain`, ts `longestWordChain`); parameter `words` kept
- Core algorithm / difficulty: sort by length + DP over one-deletion variants in a hash map / H3 (unchanged)
- Statement rewritten from spec: yes ("predecessor" relation reframed as one word "growing into" another by a single insertion)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `["r","ra","rat","rate","at","te"]` → 4 (chain coexists with unused words); `["me","mel","melo","melon","melons"]` → 5 (whole list is one chain); `["tone","notes"]` → 1 (reordering never qualifies)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- First public-case draft lost one nesting level (`input` must be the
  argument list `[words]`, not the words themselves) — the compatibility
  gate caught it as an argument-count error before check.py ever ran.
- The stale gate's literal scan only collects arrays over alphabets larger
  than two symbols, so single letters like `"r"` in the new examples are
  safe; the three examples deliberately avoid every word from the source's
  public cases.
