## 301 — Possible Bipartition

- New id / title / slug: 301 / Two Conflict-Free Groups / `two-conflict-free-groups`
- Old → new API: `possibleBipartition` → `canSplitInTwo` (go `canSplitInTwo`,
  rust `can_split_in_two`, ts `canSplitInTwo`); parameter `dislikes` →
  `conflicts`, `n` kept
- Core algorithm / difficulty: 2-colouring by traversal, plus a union-find
  variant / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `n = 5` with a satisfiable star-plus-pendant, `n = 4` with a triangle
    (false), `n = 7` with a six-person chain and one unconstrained person
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages × 2 variants = 14 runs, 18/18 cases
  each) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Variant ids `dfs_color` and `union_find` are untouched, in the file names and
  as the `solutions.md` headings; only the prose under them is fresh.
- `conflicts` was checked against all 14 source solutions before use.
- The statement recasts the split as handing out two badges rather than naming
  bipartiteness; the graph reading appears first in the hints, which is where
  the technique belongs.
- Adapted independently of 0785 (`is-graph-bipartite`), which another session
  holds; no naming was coordinated with it.
