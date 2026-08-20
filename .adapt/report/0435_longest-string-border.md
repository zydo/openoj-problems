## 435 — Longest Happy Prefix

- New id / title / slug: 435 / Longest String Border / `longest-string-border`
- Old → new API: `longestPrefix` → `longestBorder` (go `longestBorder`, rust `longest_border`, ts `longestBorder`); parameter `s` kept
- Core algorithm / difficulty: KMP prefix function, answer length pi[n-1] / H3 (unchanged)
- Statement rewritten from spec: yes (LeetCode's coined "happy prefix" replaced by the standard stringology term "border")
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `"rotator"` → `"r"` (single-character border), `"abcabcabc"` → `"abcabc"` (overlapping, longer than half), `"mississippi"` → `""` (none)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 19/19 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- "Happy prefix" was LeetCode-coined vocabulary, so the rename to the standard
  term ("border") is both a rename and a small pedagogical upgrade.
- Example 1 lists all proper prefixes and suffixes in the explanation, as the
  source did for "level" — the lists were regenerated for "rotator" by hand
  from the definition and cross-checked against the brute force.
