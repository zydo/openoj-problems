## 675 — Handling Sum Queries After Update

- New id / title / slug: 675 / Range Flips and Running Totals / `range-flips-and-running-totals`
- Old → new API: `handleQuery` → `runningTotals` (go `runningTotals`, rust `running_totals`, ts `runningTotals`); parameters `nums1` → `bits`, `nums2` → `values`, `queries` kept
- Core algorithm / difficulty: lazy segment tree over the bit array (range flip = length − sum, flag deferred), running total of `values` shifted by `p * popcount` / H4 (unchanged)
- Statement rewritten from spec: yes (queries framed as instructions `[1,l,r]` / `[2,p,0]` / `[3,0,0]` — the encoding is functional and kept exact)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - flip + two adds + two records → `[20,24]`, record-first then flip-all → `[14,19]`, single element where the second add lands after a flip → `[13]`
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox pending (batch) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Parameter rename trap honored: grepped the source solutions for `bits` /
  `values` as identifiers first — only comment prose matched.
- The stale gate tracks the source's `[2,1,0]` query literal; my first draft
  of example 1 used an add with `p = 1` and tripped it. Any `[2,p,0]`-style
  query in a new example must differ from `[2,1,0]` as a character sequence.
- Brute force is a plain simulation (materialize both arrays), which
  validated the segment tree on all three examples.
