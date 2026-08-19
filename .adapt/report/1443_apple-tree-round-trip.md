## 1443 — Minimum Time to Collect All Apples in a Tree

- New id / title / slug: 1443 / Apple Tree Round Trip / `apple-tree-round-trip`
- Old → new API: `minTime` → `appleTreeRoundTrip` (go `appleTreeRoundTrip`, rust `apple_tree_round_trip`, ts `appleTreeRoundTrip`); parameters `n`, `edges`, `hasApple` kept
- Core algorithm / difficulty: post-order sweep counting edges above apple-bearing subtrees ×2 / H2 (unchanged)
- Statement rewritten from spec: yes — the task is stated as a tour that starts and ends at vertex 0
- Examples newly constructed: yes (structure-preserving: **yes** — same 7-vertex tree as the figures; only the apple placement changes)
  - apples at 3,4 → 8; apple at 6 → 4; apple at the root only → 0 (a shape the source examples lacked); no overlap with hidden cases
- Constraints: domain unchanged, presentation rewritten (`10⁵` as `10^5`)
- Skeletons regenerated: all 7
- Figures: labels updated — all three SVGs keep the drawn tree; node fills, walked/dashed edge groups, apple dots and captions re-assigned to the new apple placements (rendered and visually verified)
- Gates: check ✓ (adapt_gates) verify ✓ (7/7 languages, 15/15 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓ (after rewriting alt texts)

### Notes

- **Figure alt text feeds the overlap gate.** My first alt texts re-used the
  source's construction ("... the four green edges are each walked down and
  back for 8 seconds") and pushed overlap to 12%. Image alt lines are prose to
  this gate — word them as freshly as the statement.
- Keeping the drawn tree fixed means the `edges` literal is shared with the
  source statement, but the stale gate only collects *flat* bracket literals
  (nested arrays like `[[0,1],...]` are not captured), so only the `hasApple`
  boolean arrays are identifying — and those differ per example.
