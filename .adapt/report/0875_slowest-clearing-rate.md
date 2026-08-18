## 0875 — Koko Eating Bananas

- New id / title / slug: 875 / Slowest Clearing Rate / `slowest-clearing-rate`
- Old → new API: `minEatingSpeed` → `slowestClearingRate` (go `slowestClearingRate`, rust `slowest_clearing_rate`, ts `slowestClearingRate`); parameter `piles` → `batches`; `h` kept
- Core algorithm / difficulty: binary search on the answer over a monotone feasibility predicate / H2 (unchanged)
- Statement rewritten from spec: yes — the scenario is now a sorting machine aimed at one batch per hour, which states the "an hour is spent on one batch only" rule directly instead of leaving it to a clause about leftovers
- Examples newly constructed: yes (structure-preserving: n-a, no figures)
  - `[4,9,5], h=6 → 4`, `[8,2,6,5], h=4 → 8` (n == h forces the maximum), `[15,7,20,9], h=10 → 7`
- Constraints: domain unchanged, presentation rewritten (the `n <= h` bound restated as a bound on `h`)
- Skeletons regenerated: all 7 (cpp, go, java, js, py, rust, ts)
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- **Do not rename a single-letter parameter like `h`.** The compatibility gate
  applies the ledger's `api` map to the *source* solutions with a word-boundary
  regex, and `\bh\b` matches the `h` in `#include <bits/stdc++.h>` — renaming it
  would rewrite the include and make the C++ source solution uncompilable. Single
  letters are conventional identifiers anyway (ADAPT §Naming); leave them alone.
- Grepping the source solutions before choosing parameter names paid off here:
  `speed`, `hours` and `k` are all local identifiers in the source solutions, so
  none of them was available as a parameter name. `batches` was clean.
- `check.py --problems <one-key>` still runs the tree-wide duplicate-slug check,
  so it costs the same ~2 minutes as a full run. Two pre-existing failures in
  `problems-adapt` (0308 missing starters, 0547/0323 duplicate slug) are not from
  this bundle.
