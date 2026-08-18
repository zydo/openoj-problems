## 0702 — Search in a Sorted Array of Unknown Size

- New id / title / slug: 702 / Search a Hidden Sorted Sequence / `search-hidden-sorted-sequence`
- Old → new API: `search` → `findInSequence`; **oracle `ArrayReader` → `SequenceReader`** (the first oracle rename)
- Core algorithm / difficulty: exponential bound then binary search over a hidden sorted sequence / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[-8,-3,0,4,9,15,22]` hit at 9; same sequence missing 7 (gap case); single-element `[5]`
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: python3 + java (interactive offers only these)
- Figures: none
- Gates: check ✓ verify ✓ (2/2 languages, 22/22 cases) sandbox **pending** compatibility ✓ stale ✓ overlap ✓
- Alias regression: the original 0702 still passes 21/21 in both languages under the old `ArrayReader` name

### Notes for the pilot review

- **The oracle rename touches the judge, as predicted.** Both harnesses now
  dispatch `SequenceReader` and inject/bind the name; the old name survives —
  Python as an assignment alias, Java as an empty subclass — for as long as
  both trees are served. The eight remaining oracles follow this exact
  pattern in Phase 1.
- **The stale gate gained a "distinctive identifier" rule.** The source method
  was named `search`, an ordinary English word that no rewrite of a binary
  search guide can avoid. Distinctive names (`twoSum`, `max_area`, `Two Sum`)
  are stale anywhere; bare lowercase words count only at identifier positions
  — backticks in Markdown, `name(` in code, exact values in JSON. A slug
  legitimately containing the word (`search-hidden-sorted-sequence`) is not a
  leak.
- The compatibility gate caught a stale local build, not a bundle bug: the
  prebuilt `InteractiveOracles.class` in `.localonly/java-classes` predated
  the rename. Rebuilt, both gates pass. A reminder that the gate harness
  itself has build state.
