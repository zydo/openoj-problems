## 0855 — Exam Room

- New id / title / slug: 855 / Spread Seating / `spread-seating`
- Old → new API: class `ExamRoom` → `SpreadSeating`; methods `seat` → `assign`,
  `leave` → `vacate`; constructor parameter `n` and `vacate`'s `p` kept
- Core algorithm / difficulty: priority queue over gaps between occupied seats,
  lazily deleted through a live-pair set / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `n = 12` with a release at seat `0`, showing an end seat becoming the best
    candidate again; `n = 5` filled completely, showing the lowest-number
    tie-break and a single release
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: python3 + java (design bundles offer only these)
- Figures: none
- Gates: check ✓ verify ✓ (2/2 languages, 15/15 cases) sandbox pending (batch)
  compatibility ✓ stale ✓ overlap ✓

### Notes

- Both method names were renamed, unlike 0146 where `get`/`put` were kept:
  `seat`/`leave` are this problem's own vocabulary rather than universal
  container verbs, so they follow the class rename.
- The 13 hidden cases had their `actions` strings renamed in place (the one
  sanctioned hidden-case edit); the data is otherwise untouched, and the
  compatibility gate running the source's Python and Java solutions against
  them is the proof.
- `seat` is also a *local variable* in both source solutions. The compatibility
  gate's word-boundary rename turns those locals into `assign`, which still
  compiles because the rename is uniform — but the adapted solutions instead
  name that local `spot`, keeping the code readable while the method is
  `assign`. Worth copying for any design problem whose method name doubles as a
  variable.
