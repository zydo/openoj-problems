## 427 — Count All Valid Pickup and Delivery Options

- New id / title / slug: 427 / Counting Start-Before-Finish Sequences / `counting-start-before-finish-sequences`
- Old → new API: `countOrders` → `countTimelines` (go `countTimelines`, rust `count_timelines`, ts `countTimelines`); parameter `n` kept
- Core algorithm / difficulty: product formula `f(i) = f(i−1) · i · (2i − 1)` mod `10⁹ + 7` via the slot-insertion argument / H2 (unchanged)
- Statement rewritten from spec: yes (pickups/deliveries → task start/finish events, P/D notation → S/F)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `n=1` → 1, `n=2` → 6 (all six timelines listed plus an invalid one), `n=3` → 90
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (bundle check clean) verify ✓ (7/7 languages, 16/16 cases) sandbox n/a (function kind, batch) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Example values are forced by mathematics: the only non-duplicating small
  inputs are n = 1, 2, 3 (n = 4 is hidden case 0), and their answers are
  1, 6, 90 regardless of framing. Freshness lives in the notation and
  prose; the n = 2 listing is necessarily the same six permutations
  relabeled S/F.
- Expecteds cross-checked by enumerating all (2n)! orders for n ≤ 3
  (`.localonly/wave-e-01/pub_1359.py`).
