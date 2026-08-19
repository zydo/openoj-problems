## 1798 — Maximum Number of Consecutive Values You Can Make

- New id / title / slug: 1798 / Reachable Sums From Zero / `reachable-sums-from-zero`
- Old → new API: `getMaximumConsecutive` → `reachableSumRun` (go `reachableSumRun`, rust `reachable_sum_run`, ts `reachableSumRun`); parameter `coins` kept (conventional)
- Core algorithm / difficulty: sort, grow the gap-free interval [0, r] while each coin ≤ r + 1, answer r + 1 / H3 (unchanged)
- Statement rewritten from spec: yes — "make value x" reframed as a value being reachable by a sub-collection, counting the run from 0
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[3,4] → 1` (run ends at 0 immediately), `[1,1,3] → 6` (duplicates widen the run through 5), `[5,1,2] → 4` (a reachable value beyond a hole does not extend the run)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7 (cpp, go, java, js, py, rust, ts)
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- My first gap-example `[2,3]` duplicated a hidden case — the duplicate check
  against hidden inputs caught it before writing anything; `[3,4]` serves the
  same role. Also validated the ported reference against a brute-force subset
  enumerator on 300 random inputs before using it for expected values.
