## 3782 — Last Remaining Integer After Alternating Deletion Operations

- New id / title / slug: 3782 / Two-Way Thinning Survivor / `two-way-thinning-survivor`
- Old → new API: `lastInteger` → `thinningSurvivor` (go `thinningSurvivor`, rust `thinning_survivor`, ts `thinningSurvivor`); parameter `n` kept
- Core algorithm / difficulty: run bookkeeping — (head, gap, length, direction), halve/double per pass / H2 (unchanged)
- Statement rewritten from spec: yes (deletion passes reframed as alternating thinning sweeps with the keep/cross pattern spelled out)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `n = 11` → 11 (survivor is n itself), `n = 14` → 9, `n = 20` → 3; every intermediate row written out and cross-checked against a brute-force simulation
- Constraints: domain unchanged (`1 <= n <= 10^15`), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 19/19 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Classic elimination-game shape; the sweep semantics (right sweep keeps the
  tail, crossing out the second-from-right first) are easy to mis-trace by
  hand — all three example walkthroughs were validated with a brute-force
  simulator before being written into the statement.
