## 388 — Remove All Adjacent Duplicates in String II

- New id / title / slug: 388 / Collapse Every Run of k Equal Letters / `collapse-every-run-of-k-equal-letters`
- Old → new API: `removeDuplicates` → `collapseRuns` (go `collapseRuns`, rust `collapse_runs`, ts `collapseRuns`); parameters `s`, `k` kept
- Core algorithm / difficulty: run-length stack, pair dropped at count k / H2 (unchanged)
- Statement rewritten from spec: yes ("k duplicate removal" reframed as collapses that weld the two sides together)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `"mammal" k=3` → `"mammal"` (no run applies); `"aabbba" k=3` → `""` (cascade: b-run drop welds the a-runs into a third drop); `"seeeeal" k=2` → `"sal"` (a run of four falls as two pairs)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (per-bundle static clean) verify ✓ (7/7 languages, 18/18 cases) sandbox pending (batch) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- No LeetCode 1047 sibling exists in this bank, so the title had no family
  constraint; "collapse" names the operation the way 1190's adaptation named
  its own.
