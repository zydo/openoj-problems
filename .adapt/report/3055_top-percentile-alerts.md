## 3055 — Top Percentile Fraud

- New id / title / slug: 3055 / Top Percentile Alerts / `top-percentile-alerts`
- Old → new API: table `Fraud` → `Alerts`; columns `policy_id` →
  `alert_id`, `state` → `region`, `fraud_score` → `risk_score`
- Core algorithm / difficulty: `PERCENT_RANK()` partitioned by group,
  ordered score-descending, strict `< 0.05` cut in an outer subquery /
  H2 (unchanged)
- Statement rewritten from spec: yes (insurance-claims framing shifted to
  security-alert triage — same per-group top-percentile computation)
- Examples newly constructed: yes (structure-preserving: n/a)
  - 13 alerts across four regions sized 6, 4, 2, 1; the single-row region
    stays in the answer because a lone-row partition ranks at 0
- Constraints: domain unchanged, presentation rewritten (SQL bundle —
  no numeric constraints; the 5% cut is data-fixed, kept)
- Skeletons regenerated: sql
- Figures: none
- Gates: check ✓ verify ✓ (11/11 cases) sandbox pending (batch run)
  compatibility ✓ (manual — see note) stale ✓ overlap ✓
- Sandbox: sql kind, deferred to batch run

### Notes

- **Compatibility was run by hand**, same as 0262: SQL renames live only
  in the ledger `api` map and the fragment is not merged, so
  `adapt_gates.py` staged the source `solution.sql` untouched and failed
  with `no such table: Fraud`. Replicated the gate exactly — word-boundary
  api-map rename of the source `solution.sql`, then
  `verify_solution.py --solution` against the adapted bundle: 11/11.
  Re-run `adapt_gates.py` after `adapt_merge.py` to reproduce formally.
- Hidden datasets changed exactly in the `INSERT INTO Fraud` table name;
  row data, region strings, and scores are byte-identical.
- Public expected rows were computed by executing the adapted
  `solution.sql` on in-memory SQLite exactly as `runner/sql_harness.py`
  does (schema + dataset + `SELECT * FROM (query)`), never by hand.
- The stale gate's `identifiers()` also harvests SQL type words
  (`INTEGER`, `TEXT`, `REAL`) from the schema; they are shared by both
  schemas so they cancel — only genuinely renamed names are tracked.
