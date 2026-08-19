## 1916 — Count Ways to Build Rooms in an Ant Colony

- New id / title / slug: 1916 / Count Dependency Tree Orderings / `count-dependency-tree-orderings`
- Old → new API: `waysToBuildRooms` → `countDependencyOrderings` (go `countDependencyOrderings`, rust `count_dependency_orderings`, ts `countDependencyOrderings`); parameter renamed `prevRoom` → `parents` (clearer, and safe: "parent" appears only in comments, never as a local, in every source solution — the 0587 trap checked)
- Core algorithm / difficulty: tree DP counting linear extensions, multinomial interleaving of child-subtree orderings, Fermat inverse factorials, iterative post-order / H4 (unchanged)
- Statement rewritten from spec: yes — ant-colony/rooms scenario replaced by a prerequisite tree of tasks; reachability and one-at-a-time rules restated
- Examples newly constructed: yes (structure-preserving: yes — same drawn tree shapes)
  - `[-1,2,0] → 1` (chain; the only other labeling of a 3-chain), `[-1,0,0,2,1] → 6` (same caterpillar shape, grandchildren relabeled so 3 hangs under 2 and 4 under 1); both brute-force verified
- Constraints: domain unchanged (2 ≤ n ≤ 10⁵, parents[0] = -1, 0 ≤ parents[i] < n, tree reachable from 0), presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated — node labels swapped (1↔2 in example 1; 3↔4 in example 2) so the drawn geometry now encodes the new parent arrays; captions rewritten to task vocabulary
- Gates: check ✓ verify ✓ (7/7 languages, 14/14 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- For a fixed tree shape with labels 0..n-1, "structure-preserving but
  new data" means relabeling: the parent array must describe the same
  drawn tree with different node numbers. Both examples did exactly that,
  and the listed orderings changed accordingly.
- Parameter rename is the first in this wave; the compat gate picked it
  up from the ledger fragment's `api` map and staged the source cleanly.
