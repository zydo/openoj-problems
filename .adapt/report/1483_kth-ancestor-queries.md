## 1483 — Kth Ancestor of a Tree Node

- New id / title / slug: 1483 / Kth Ancestor Queries / `kth-ancestor-queries`
- Old → new API: class `TreeAncestor` → `AncestorFinder`; method `getKthAncestor` → `kthAncestor`; parameters `n`, `parent`, `node`, `k` kept
- Core algorithm / difficulty: binary lifting, sparse 2ʲ-ancestor table built in the constructor, one jump per set bit of k / H3 (unchanged)
- Statement rewritten from spec: yes — "kth ancestor" kept as the unavoidable generic term; prose, API listing and explanations new
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - 8-node bushy tree `[-1,0,0,1,2,2,4,4]` with queries hitting parent, grandparent, root and an overshoot; 6-node chain from its foot (k = 0, 1, depth, depth+1) — cross-checked by an edge-by-edge climb
- Constraints: domain unchanged (n ≤ 5·10⁴, parent[i] < i, 0 ≤ k ≤ n, ≤ 5·10⁴ calls), presentation rewritten
- Skeletons regenerated: python3, java (design kind)
- Figures: none
- Gates: check ✓ verify ✓ (2/2 languages, 18/18 cases) sandbox pending (batch) compatibility ✓ stale ✓ overlap ✓
- Hidden cases: `actions` strings renamed in place (`TreeAncestor`/`getKthAncestor` → new names) — the sanctioned design-kind edit; params and expected values untouched

### Notes

- `.localonly/adapt_scaffold.py` writes a `method` key into design
  problem.json files (they have `class_name` + `methods[]` instead), which
  `check.py` would reject as a key mismatch — design bundles are cheaper to
  scaffold by hand, as done here.
- First overlap-gate failure of this chunk: the doubling formula ("the 2ʲ-th
  ancestor of v is the 2ʲ⁻¹-th ancestor of …") is genuinely common
  mathematical phrasing, but restating it as "two jumps of 2ʲ⁻¹ add up to
  one jump of 2ʲ" reads better anyway and clears the shingle.
