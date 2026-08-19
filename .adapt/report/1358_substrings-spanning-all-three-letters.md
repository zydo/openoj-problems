## 1358 — Number of Substrings Containing All Three Characters

- New id / title / slug: 1358 / Substrings Spanning All Three Letters / `substrings-spanning-all-three-letters`
- Old → new API: `numberOfSubstrings` → `countSpans` (go `countSpans`, rust `count_spans`, ts `countSpans`); parameter `s` kept
- Core algorithm / difficulty: single scan with last-seen indices per letter, `min(last) + 1` added per right endpoint / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `"abcab"` → 6 (all six listed), `"ccbaa"` → 4 (leading repeat), `"bca"` → 1 (whole string only)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (bundle check clean) verify ✓ (7/7 languages, 17/17 cases) sandbox n/a (function kind, batch) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- String-input problems produce no array literals, so the stale gate has
  nothing to scan here; the example strings were chosen to differ from the
  source's and from every hidden input.
- Expecteds cross-checked by substring enumeration
  (`.localonly/wave-e-01/pub_1358.py`).
