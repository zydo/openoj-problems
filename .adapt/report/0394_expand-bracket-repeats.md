## 0394 — Decode String

- New id / title / slug: 394 / Expand Bracket Repeats / `expand-bracket-repeats`
- Old → new API: `decodeString` → `expandRepeats` (go `expandRepeats`, rust
  `expand_repeats`, ts `expandRepeats`); parameter `s` kept (conventional)
- Core algorithm / difficulty: one pass with a stack of
  (outer text, count) frames / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `2[ab]3[c]f` (flat groups plus a loose letter), `2[x3[y]z]` (nesting),
    `10[ab]c` (multi-digit count) — the source's three shapes, new data
- Constraints: domain unchanged, presentation rewritten (the `10⁵` output
  bound moved into the constraints list; it is stated once, not twice)
- Skeletons regenerated: all 7
- Figures: none
- Gates: compatibility ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a
  stale ✓ overlap ✓

### Notes

- The validity paragraph (balanced brackets, digits only as counts, no `3a`
  / `2[4]` shapes) is part of the functional spec and is preserved
  semantically — it defines the input domain — but rewritten from the
  spec's own terms ("the original text contains no digits").
- Solutions.md keeps the source's frame-by-frame trace structure with the
  new nested example; the trace values all come from the reference run.
