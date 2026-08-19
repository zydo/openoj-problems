## 3482 — Analyze Organization Hierarchy

- New id / title / slug: 3482 / Reporting Tree Rollup / `reporting-tree-rollup`
- Old → new API: table `Employees` → `Staff`; columns `employee_id` → `staff_id`,
  `employee_name` → `staff_name`, `manager_id` → `supervisor_id`; output
  columns `level` → `depth`, `team_size` → `reports`, `budget` → `payroll`
  (`salary`, `department` kept as unavoidable generic terms)
- Core algorithm / difficulty: one recursive CTE enumerating (ancestor,
  descendant, distance) rows; depth/report-count/payroll as three aggregates /
  H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a)
  - 8-person tree, depth 4, asymmetric subtrees (4 vs 1 under the two depth-2
    managers), payroll tie-break shown at depth 3 and a name tie-break at
    depth 4
- Constraints: domain unchanged, presentation rewritten (SQL bundle — no
  numeric constraints in the source)
- Skeletons regenerated: sql
- Figures: none
- Gates: check ✓ verify ✓ (13/13 cases) sandbox pending (batch run — sql kind)
  compatibility ✓ (manual — see note) stale ✓ overlap ✓

### Notes

- **Compatibility ran by hand**, the established SQL convention (0262, 3055):
  the fragment is not merged into the frozen ledger, so `adapt_gates.py`
  staged the source `solution.sql` untouched and failed with
  `no such table: Employees`. Replicated the gate exactly — word-boundary
  api-map rename of the source `solution.sql`, then
  `verify_solution.py --solution` against the adapted bundle: 13/13.
  Re-run `adapt_gates.py` after merging to reproduce formally.
- Hidden datasets changed exactly in the `INSERT INTO Employees` table name;
  row data, names, and salaries are byte-identical.
- Public expected rows computed by executing the adapted `solution.sql` on
  in-memory SQLite exactly as `runner/sql_harness.py` does
  (schema + dataset + `SELECT * FROM (query)`), never by hand.
- Renaming `level` → `depth` required a quick collision scan: the source
  solution's own CTE column is already `depth`, and its CTE is named `levels`
  (plural, outside the `\blevel\b` boundary) — no clash after the rename.
