## 645 — Create Components With Same Value

- New id / title / slug: 645 / Cutting a Tree Into Equal-Sum Parts / `cutting-a-tree-into-equal-sum-parts`
- Old → new API: `componentValue` → `maxEqualSumCuts` (go `maxEqualSumCuts`, rust `max_equal_sum_cuts`, ts `maxEqualSumCuts`); parameters `nums`, `edges` kept (conventional); vocabulary component → part, value of a component → worth
- Core algorithm / difficulty: enumerate divisors k of the total, count subtree sums divisible by total/k, answer k-1 for the largest k that validates (subtree sums via one iterative DFS) / H4 (unchanged)
- Statement rewritten from spec: yes — edge deletion framed as removing joins to split the tree into equal-worth parts
- Examples newly constructed: yes (structure-preserving: yes — same tree shape, same two removed joins)
  - `[12,3,4,5,12], [[0,1],[1,2],[1,3],[3,4]] → 2` (parts {0}, {1,2,3}, {4} worth 12 each; 4-way split blocked by the 12-valued node), `[5], [] → 0` (single node)
- Constraints: domain unchanged (n ≤ 2·10⁴, values 1–50), presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated — example-1.svg values 6,2,2,2,6 → 12,3,4,5,12; dashed joins and node layout untouched; caption reworded
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Two overlap traps in one problem, both cross-boundary shingles: the
  constraints tail flowing into the Follow-up heading ("…represents a valid
  tree / Follow-up / Can you …"), and the figure alt text flowing into the
  next example heading. Both needed rewording, not just the obvious prose.
- Kept the source's component structure ({0}, {1,2,3}, {4}) with new values,
  so the figure's dashed edges stay correct; wrote the parts with braces
  rather than brackets in prose to dodge the stale-literal check on "[1,2,3]".
