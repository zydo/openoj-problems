## 182 — Encode String with Shortest Length

- New id / title / slug: 182 / Shortest Repetition Encoding /
  `shortest-repetition-encoding`
- Old → new API: `encode` → `shortestEncoding` in every language
- Core algorithm / difficulty: interval dynamic programming over splits and
  repeating periods / H4 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a)
  - literal retained on a length tie; a three-copy word; a six-copy
    two-letter pattern
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓; verify ✓ (7/7 languages, 18/18 cases); sandbox n/a;
  compatibility ✓; stale ✓; overlap ✓ (0%)

### Notes

- The source uses `encode` as both method and Rust entrypoint. The adaptation
  preserves that equality with `shortestEncoding`, as required by the
  compatibility staging order.
