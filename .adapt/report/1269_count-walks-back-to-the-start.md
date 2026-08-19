## 1269 — Number of Ways to Stay in the Same Place After Some Steps

- New id / title / slug: 1269 / Count Walks Back to the Start / `count-walks-back-to-the-start`
- Old → new API: `numWays` → `countWalks` (go `countWalks`, rust `count_walks`, ts `countWalks`); `steps` kept, `arrLen` → `width`
- Core algorithm / difficulty: 1-D DP over the reachable window `min(width, steps+1)`, mod 1e9+7 / H2 (unchanged)
- Statement rewritten from spec: yes ("pointer in an array" becomes a marker on a line of cells)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `steps=4 width=3` → 9 (walk enumerated in full); `steps=3 width=1` → 1 (single cell, holds only); `steps=6 width=50` → 51 (Motzkin M(6); width beyond `steps` never matters)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (per-bundle static clean) verify ✓ (7/7 languages, 16/16 cases) sandbox pending (batch) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Hand-enumerating example 1 first gave 12; the reference said 9 (walks that
  go negative mid-way are illegal, not just L-first ones). The
  compute-by-script rule earned its keep — never enumerate by hand.
