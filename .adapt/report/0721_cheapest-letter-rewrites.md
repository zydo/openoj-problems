## 721 — Minimum Cost to Convert String I

- New id / title / slug: 721 / Cheapest Letter Rewrites / `cheapest-letter-rewrites`
- Old → new API: `minimumCost` → `leastRewriteCost` (go `leastRewriteCost`, rust `least_rewrite_cost`, ts `leastRewriteCost`); parameters `source`, `target`, `original`, `changed`, `cost` kept
- Core algorithm / difficulty: Floyd–Warshall over the 26-letter rewrite graph, summed per position / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `peck → puck` with a direct rule losing to a two-rule chain (5), `dodo → nono` where the per-letter chain price doubles on a repeated letter (14), `rug → run` unreachable (-1)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- No sibling: LeetCode's "... Convert String II" (3545) is not in this bank, so
  the "I" suffix was dropped without breaking a family.
- The title says "rewrites" rather than "conversion" and the statement frames
  the rules as a priced menu; the 26-node shortest-path reading is unchanged.
