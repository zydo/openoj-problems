## 0753 — Cracking the Safe

- New id / title / slug: 753 / Shortest String With Every Code /
  `shortest-string-with-every-code`
- Old → new API: `crackSafe` → `shortestCoveringString` (go
  `shortestCoveringString`, rust `shortest_covering_string`, ts
  `shortestCoveringString`); parameters `n` and `k` kept
- Core algorithm / difficulty: iterative Hierholzer walk over the de Bruijn
  graph, digits tried in ascending order, digit emitted on pop / H4 (unchanged)
- Statement rewritten from spec: yes — the safe-and-password scenario is
  dropped for the plain combinatorial statement (shortest string containing
  every length-`n` string over a `k`-symbol alphabet)
- Examples newly constructed: yes (structure-preserving: n/a — figure dropped)
  - `n = 1, k = 3` → `"210"` (no overlap possible at width 1),
    `n = 2, k = 4` → `"03322312113020100"` (16 codes in 17 characters; the
    explanation lists the 16 windows)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: dropped — `solution-de-bruijn.svg` walks through the source's
  Example 2 (`n = 2, k = 2`, circuit spelling its published answer). Its
  geometry is two nodes and four edges, so it encodes `k = 2` structurally and
  cannot be relabelled onto a new example; and `n = 2, k = 2` is unusable as one
  of my examples because it *is* the source's. Left for the phase-two redraw
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a
  compatibility ✓ stale ✓ overlap ✓

### Notes

- **Pre-existing bundle issue, not introduced here:** `comparison` is `exact`
  while the task genuinely admits many shortest answers (for `n = 2, k = 2` the
  reference emits `01100`, but `00110` is equally valid and lexicographically
  smaller, so there is no clean tie-break to state either). The judge therefore
  accepts only the reference walk's output. `comparison` is a kept field, so it
  was not touched, and the statement says an answer of minimum length is wanted
  without promising that every such answer is accepted. Worth an entry on the
  central list if these are being collected.
- Example inputs were picked to avoid the fourteen hidden `(n, k)` pairs and the
  source's two public ones; `(1,3)` and `(2,4)` were the small survivors.
