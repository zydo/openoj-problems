## 139 — Longest Substring with At Most K Distinct Characters

- New id / title / slug: 139 / Longest Window of At Most K Symbols / `longest-window-of-at-most-k-symbols`
- Old → new API: `lengthOfLongestSubstringKDistinct` → `longestKSymbolWindow` (go `longestKSymbolWindow`, rust `longest_k_symbol_window`, ts `longestKSymbolWindow`); parameters `s`, `k` kept (conventional)
- Core algorithm / difficulty: sliding window with per-symbol multiplicity map, shrink-on-overrun / H2 (unchanged)
- Statement rewritten from spec: yes — "substring / distinct characters" reframed as window + symbols (hidden cases include digits, so "letters" would have been wrong)
- Examples newly constructed: yes (structure-preserving: yes for the figure)
  - `"opoqr", k=2 → 3`, `"aabb", k=1 → 2`, `"mississippi", k=2 → 7`
  - `"opoqr"` was engineered so the sweep visits the same window shapes as the source figure's walk ("eceba"): same 5 rows, same shrink pattern (drop two, then drop one) — labels only
- Constraints: domain unchanged (1–5·10⁴ characters, 0 ≤ k ≤ 50), presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated — `solution-sliding-window.svg` re-labelled to the `opoqr` walkthrough; geometry untouched
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Choosing the figure example as a *walk shape* (which index triggers which
  shrink) rather than just a string with the same answer is what kept the
  redraw to label edits.
- "mississippi", k=2 was computed by the reference as 7, not the 6 first
  guessed by eye — the m at the front hides that indices 1–7 form a
  7-character two-symbol stretch. Running the reference caught it.
