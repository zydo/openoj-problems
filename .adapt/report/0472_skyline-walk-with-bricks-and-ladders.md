## 472 — Furthest Building You Can Reach

- New id / title / slug: 472 / Skyline Walk With Bricks and Ladders / `skyline-walk-with-bricks-and-ladders`
- Old → new API: `furthestBuilding` → `furthestRooftop` (go `furthestRooftop`, rust `furthest_rooftop`, ts `furthestRooftop`); parameters `heights`, `bricks`, `ladders` kept (unavoidable generic terms)
- Core algorithm / difficulty: min-heap of ladder-covered climbs, evict smallest to bricks, first bankruptcy fixes the answer / H3 (unchanged)
- Statement rewritten from spec: yes — a rooftop walk where each upward step is bought with one ladder or its height in bricks
- Examples newly constructed: yes (structure-preserving: yes for Example 1 — seven rooftops, stop at index 4, both figures keep their bar-chart walks)
  - `[2,6,4,9,7,13,11], bricks = 7, ladders = 1 → 4` (bricks pay the +4, ladder takes the +5, the +6 stops the walk — in this data the ladder lands on the taller climb, unlike the source example where arrival order mattered)
  - `[3,10,1,8,5,16,18,4,15], 12, 2 → 7`, `[12,5,20,6], 15, 0 → 3` (no ladders; the one climb costs exactly the stock)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: **regenerated** — both re-emitted by `.localonly/wave-e-05/figs_1642.py` from the maps documented in the source SVGs (14px/unit, baseline 240; 12px/unit, baseline 268); narration block shortened after a render check showed it crowding the +6 annotation
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- When the new example is chosen so the heap's *final* assignment is also the
  intuitive one (ladder on the tallest climb), the statement explanation and
  both figures tell one story instead of needing the "the ladder ends up on
  the smaller climb because it arrived later" aside the source example
  required.
