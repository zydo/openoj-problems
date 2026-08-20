## 305 — Maximum Frequency Stack

- New id / title / slug: 305 / Popularity Stack / `popularity-stack`
- Old → new API: class `FreqStack` → `PopularityStack`; methods `push`/`pop`
  **kept**, parameter `val` kept
- Core algorithm / difficulty: one stack per occurrence count, plus a count map
  and a running top level / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - a twelve-call sequence covering the tie-break, the demotion of a popped
    value to the level below, and a re-push that restores a lead; a short
    all-distinct sequence showing plain stack order
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: python3 + java (design bundles offer only these)
- Figures: none
- Gates: check ✓ verify ✓ (2/2 languages, 16/16 cases) sandbox pending (batch)
  compatibility ✓ stale ✓ overlap ✓

### Notes

- `push`/`pop` follow the 0146 reading of "never rename merely to differ": they
  are universal container vocabulary, not this problem's invention. Only the
  class name — the distinctive part of the API — moves, so the hidden-case
  `actions` edit was confined to the constructor entry of all 14 cases.
- The statement avoids "frequency" as the headline word and states the rule as
  "most often inserted, ties to the latest insertion", which is both further
  from the source and easier to read against the examples.
