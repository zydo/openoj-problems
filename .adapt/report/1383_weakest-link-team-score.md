## 1383 — Maximum Performance of a Team

- New id / title / slug: 1383 / Weakest-Link Team Score / `weakest-link-team-score`
- Old → new API: `maxPerformance` → `bestTeamScore` (go `bestTeamScore`, rust `best_team_score`, ts `bestTeamScore`); parameters `n`, `speed`, `efficiency`, `k` kept
- Core algorithm / difficulty: descending-efficiency sweep, min-heap of the k fastest speeds, score taken at full precision and reduced once / H3 (unchanged)
- Statement rewritten from spec: yes (engineers → candidates; "performance" → "score")
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `k = 2` where the fastest pair loses to a balanced pair (66); same data with `k = n` where the optimum is a strict subset (95); a modulo-exceeding case (999711007)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Examples 1 and 2 share one dataset with different `k` (a shape the source
  also used); the dataset itself is new and each example teaches a different
  failure mode — weakest-link pricing vs. subset-beats-full-roster.
- Public expected values were cross-checked against an exhaustive subset
  enumeration before staging, including the modulo case.
