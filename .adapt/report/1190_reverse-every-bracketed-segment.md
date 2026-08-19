## 1190 — Reverse Substrings Between Each Pair of Parentheses

- New id / title / slug: 1190 / Reverse Every Bracketed Segment / `reverse-every-bracketed-segment`
- Old → new API: `reverseParentheses` → `reverseBracketedSegments` (go `reverseBracketedSegments`, rust `reverse_bracketed_segments`, ts `reverseBracketedSegments`); parameter `s` kept
- Core algorithm / difficulty: stack of fragments, pop-flip-merge on each close / H2 (unchanged)
- Statement rewritten from spec: yes ("parentheses" replaced by the house term brackets, reversal of matched segments described from the spec)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `"(stop)"` → `"pots"`; `"(no(is)op)"` → `"poison"` (two nesting levels, readable outcome); `"d((on))e"` → `"done"` (double flip restores order)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (per-bundle static clean) verify ✓ (7/7 languages, 18/18 cases) sandbox pending (batch) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- First-pass expected value for example 2 was hand-miscomputed ("poisson");
  the generator script corrected it to "poison" — worth always printing the
  script output before writing cases.json.
- Kinship: "brackets" follows the adapted 0020/0022/0032 family naming for
  parentheses-flavored problems.
