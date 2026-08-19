## 1094 — Car Pooling

- New id / title / slug: 1094 / Seat Load on a Route / `seat-load-on-a-route`
- Old → new API: `carPooling` → `seatLoadFits` (go `seatLoadFits`, rust `seat_load_fits`, ts `seatLoadFits`); parameter `trips` → `groups`, `capacity` kept
- Core algorithm / difficulty: difference array over the 1001 marks, sweep the running load / H2 (unchanged)
- Statement rewritten from spec: yes (same genuine task — a one-way vehicle, seats, boarding groups — fresh prose and marks terminology)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[[3,0,4],[4,2,6]] c=5` → false (overlap over capacity); `[[4,1,3],[4,3,6]] c=4` → true (alight-before-board at a shared mark); `[[1,0,5],[3,2,8],[1,6,9]] c=4` → true (three groups, load touches the limit twice, never crosses)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (tree run) verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- The dropoff-before-pickup rule is functional semantics, not flavour — the
  statement states it outright (source hid it in a hint) and one example
  exercises it with matching marks.
- The stale gate pins the source's public literals `[2,1,5]` / `[3,3,7]`;
  the new examples avoid them, and their inputs were checked against all 14
  hidden cases for collisions.
- `groups` grepped unused in every source solution before the rename (Rust
  and Go use local `t`, Python uses `num/start/end`).
