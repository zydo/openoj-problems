## 463 — Last Moment Before All Ants Fall Out of a Plank

- New id / title / slug: 463 / Last Ant Off the Plank / `last-ant-off-the-plank`
- Old → new API: `getLastMoment` → `lastFall` (go `lastFall`, rust `last_fall`, ts `lastFall`); parameters `n`, `left`, `right` kept
- Core algorithm / difficulty: pass-through symmetry — max(p over left, n−p over right) / H2 (unchanged)
- Statement rewritten from spec: yes — ants/plank domain kept (it is the computation), narration new
- Examples newly constructed: yes (structure-preserving: n/a — geometry figures, regenerated)
  - `n=5 left=[4,2] right=[0] → 5` (two clean integer-time meetings, verified by an event-driven bounce simulator), `n=6 all-right → 6`, `n=6 all-left → 6` (mirror pair)
- Constraints: domain unchanged (1 ≤ n ≤ 10⁴, positions 0..n, unique across lists, ≥ 1 ant), presentation rewritten
- Skeletons regenerated: all 7
- Figures: regenerated — example 1's four-panel walkthrough re-emitted as three panels (t = 0, 1, 2) from the same simulation the brute force runs, single-panel grammar reused for examples 2 and 3 (`.localonly/e04/fig_1503.py`); renders eyeballed
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- My first alt texts for examples 2 and 3 paraphrased the source's alt
  text almost verbatim and the overlap gate caught it (12%) — figure
  captions are statement prose and deserve the same from-scratch writing
  as the body.
- The event-driven bounce simulator doubles as figure generator input:
  the panel states at t = 0, 1, 2 come from the same trace that proves
  the expected values, so figure and answer cannot drift apart.
