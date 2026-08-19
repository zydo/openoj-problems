## 0399 — Evaluate Division

- New id / title / slug: 399 / Resolve Ratios / `resolve-ratios`
- Old → new API: `calcEquation` → `resolveRatios` (go `resolveRatios`, rust `resolve_ratios`, ts `resolveRatios`); parameters `equations` → `pairs`, `values` → `ratios`, `queries` kept
- Core algorithm / difficulty: weighted graph with inverse edges, one BFS per query carrying a running product / H3 (unchanged)
- Statement rewritten from spec: yes — posed as "known ratios between named variables, answer further quotients", with the undetermined cases (unknown name, unlinked groups) stated as one rule instead of two trailing notes
- Examples newly constructed: yes (structure-preserving: **yes** — Example 1 is a three-variable chain built from two stated ratios, matching the figure's three nodes and two edge pairs)
  - `p/q = 4.0, q/r = 0.5` asking `p/r, r/q, p/z, q/q → [2.0,2.0,-1.0,1.0]` (product, inverse, unknown name, self), `m/n = 3.0, u/v = 0.25` asking `m/v, v/u, m/n → [-1.0,4.0,3.0]` (two unconnected groups), `w1/w2 = 6.0, w3/w2 = 2.0` asking `w1/w3, w3/w1 → [3.0,0.333…]` (shared denominator, digits in names, non-terminating answer)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7 (cpp, go, java, js, py, rust, ts)
- Figures: **labels updated** — `figures/solution-division-graph.svg` keeps its geometry and takes the new variable names, edge weights, accent-path arithmetic and caption
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Before renaming `equations` → `pairs` and `values` → `ratios`, both candidates
  were grepped for in all seven source solutions (PROTOCOL step 3). The only
  near-miss is Rust's loop variable `pair`, which a `\bpairs\b` rename leaves
  alone.
- Renamed parameters are recorded in the fragment's `api` map, which the
  compatibility gate applies to the staged source solutions — but only once the
  fragment is merged into `ledger.json`. Run standalone with `--source`, the
  gate sees no api map at all, so a parameter-rename collision would surface
  centrally rather than here. That is an argument for the grep, not against the
  rename — and the check was run by hand: all seven source solutions were staged
  with the *full* api map (`equations` → `pairs`, `values` → `ratios` included)
  and pass, so the post-merge gate run is green too.
- The source solutions' comments call a stated ratio an "equation"; those were
  rewritten in all seven ports. The word is not a stale *identifier* (the gate
  matches `\bequations\b`, case-sensitively), so nothing forced the edit — the
  terminology rule in ADAPT.md did.
