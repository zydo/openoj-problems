## 1823 — Find the Winner of the Circular Game

- New id / title / slug: 1823 / Last One Standing In A Circle / `last-one-standing-in-a-circle`
- Old → new API: `findTheWinner` → `circleSurvivor` (go `circleSurvivor`, rust `circle_survivor`, ts `circleSurvivor`); parameters `n`, `k` kept (conventional)
- Core algorithm / difficulty: list simulation, `idx = (idx + k - 1) % len` then pop; Josephus recurrence noted as the O(n)/O(1) alternative / H2 (unchanged)
- Statement rewritten from spec: yes — counting-out game described as five rules; the source's follow-up kept, reworded
- Examples newly constructed: yes (structure-preserving: **n=5 kept for the figures**)
  - `n = 5, k = 3 → 4` (figure's walk; final count wraps the last two and lands back where it started), `n = 6, k = 4 → 5` (leaving order 4,2,1,3,6), `n = 7, k = 2 → 7` (every second friend goes)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7 (cpp, go, java, js, py, rust, ts)
- Figures: **regenerated** — both figures re-emitted by `.localonly/wave-f-02/gen1823fig.py` from the recovered layout rules: example-1's five panels (regular pentagon→square→triangle→2-gon→winner at fixed panel centers, remaining members ascending from the top vertex clockwise, eliminated member red with a radial "leaves" label) and solution-circle-count's fixed pentagon with per-count arrows (chords trimmed at node edges, control point pushed 25 px outward from center), strikes, radial order badges. The k = 3 final count is a genuine self-loop (start 2, circle [2,4], count 2,4,2) and is drawn as a small open arc — every k ≠ 2 has at least one self-loop count at n = 5, so this is inherent, not a defect. Renders eyeballed via qlmanage thumbnails + image check: no overlaps or clipping
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The self-loop discovery: at n = 5 the only k whose four counts are all
  start ≠ end is k = 2 (the source's data); for any other k the drawn "count
  k clockwise" arrows must include at least one loop (k ≡ 1 mod the current
  circle size, or odd k on the final pair). Deriving that before choosing k=3
  saved redrawing.
- Layout rules worth reusing for any polygon-of-remaining-players figure:
  panel centers fixed, first remaining member at angle −90°, others clockwise
  at 360/j·i; radial labels at node + 29 px along the outward radius.
- `qlmanage -t -s 900 -o <dir> <svg>` renders a thumbnail for the eyeball
  check without any extra tooling.
