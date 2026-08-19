## 0759 — Employee Free Time

- New id / title / slug: 759 / Shared Gaps Across Timelines /
  `shared-gaps-across-timelines`
- Old → new API: `employeeFreeTime` → `sharedIdleGaps` (Go and TypeScript
  `sharedIdleGaps`, Rust `employee_free_time` → `shared_idle_gaps`)
- Core algorithm / difficulty: pooled interval union followed by gap sweep /
  H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes)
  - both multi-timeline examples contain two finite gaps and one touching
    boundary that must not emit a gap
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓; verify ✓ (7/7 languages, 16/16 cases); sandbox n/a;
  compatibility ✓; stale ✓; overlap ✓ (0%)

### Notes

- An independent block-merging sweep confirms both public gap lists.
- The 14 hidden cases are data-identical to the source corpus.
