## 3171 — Find Subarray With Bitwise OR Closest to K

- New id / title / slug: 3171 / Nearest Subarray OR to a Target / `nearest-subarray-or-to-a-target`
- Old → new API: `minimumDifference` → `nearestOr` (go `nearestOr`, rust `nearest_or`, ts `nearestOr`); parameters `nums`, `k` kept
- Core algorithm / difficulty: per-right-end frontier of ORs (≤ ~31 values since OR only sets bits) / H3 (unchanged)
- Statement rewritten from spec: yes ("stretch" framing; target language instead of "closest to k" phrasing)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[2,8,4,16] k=12` → 0 (exact hit from a 2-element stretch), `[6,6,6] k=5` → 1 (uniform array), `[3] k=20` → 17 (single element)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- `minimumDifference` is a recycled LeetCode method name across several problems; `nearestOr` is specific enough to stay collision-free if a bitwise-AND sibling gets adapted later (an AND twin would want `nearestAnd`).
- The guide's worked frontier ({4, 12, 14} at the third step of Example 1) was recomputed before writing — the first draft said "second step" and was wrong.
