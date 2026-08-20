## 303 — Egg Drop With 2 Eggs and N Floors

- New id / title / slug: 303 / Two Probes, One Threshold / `two-probes-one-threshold`
- Old → new API: `twoEggDrop` → `twoProbeSearch` (go `twoProbeSearch`, rust `two_probe_search`, ts `twoProbeSearch`); parameter `n` kept (conventional)
- Core algorithm / difficulty: least m with m(m+1)/2 ≥ n, found by accumulating triangular numbers / H3 (unchanged)
- Statement rewritten from spec: yes — eggs become fragile probes, the threshold `f` and floor-release rules restated from the spec; floors/tower kept (the level-indexed computation genuinely is one)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `n=21 → 6` (exact triangular case, schedule 6,11,15,18,20,21 shown), `n=25 → 7` (just past a triangular bound), `n=6000 → 110` (formula-scale)
- Constraints: domain unchanged (1 ≤ n ≤ 10⁴), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Family: kin of `0887_super-egg-drop` (k-egg version), **not yet adapted and no family entry exists** — title chosen unilaterally; if 0887 lands with different family vocabulary the main agent should reconcile
- Gates: check ✓ verify ✓ (7/7 languages, 53/53 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The hidden set enumerates every n from 1 to 20, so all public examples
  had to sit at n ≥ 21 — worth knowing before reaching for a tiny example.
- Solution comments said "2 eggs" / "the surviving egg's linear scan"; now
  "two probes" / "the surviving probe's linear scan".
