## 1776 — Car Fleet II

- New id / title / slug: 1776 / Rear-End Collision Times / `rear-end-collision-times`
- Old → new API: `getCollisionTimes` → `collisionTimes` (go `collisionTimes`, rust `collision_times`, ts `collisionTimes`); parameter `cars` kept
- Core algorithm / difficulty: right-to-left monotonic stack, popping targets at least as fast and targets that merge first / H4 (unchanged)
- Statement rewritten from spec: yes — merging described as "the two continue as a single fleet at the slower car's original speed"; collisions phrased as drawing level with the traffic ahead
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[[2,3],[5,1],[6,4],[10,2]] → [1.5,-1,2,-1]` (two independent catches), `[[1,5],[4,3],[9,1]] → [1.5,2.5,-1]` (chain), `[[0,4],[3,3],[4,1]] → [1.33333,0.5,-1]` (target merges first, first car catches the slowed pair — exercises the pop)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7 (cpp, go, java, js, py, rust, ts)
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Overlap gate caught 7% on the first draft — the culprit shingles were the
  "You are given an array of length n, where ..." and "answer[i] is the time,
  in seconds" sentence frames. Rewording the input/output framing sentences
  ("The array `cars` describes them, one pair per car", "report the clock time
  ... collected into an array indexed like `cars`") fixed it; the physical
  body text needed no change.
- The family note: source 0853 Car Fleet belongs to Part C and is not yet
  adapted; `families.json` does not bind the pair, so this title was chosen
  standalone ("Rear-End Collision Times" describes the actual task here —
  0853 counts fleets instead). If Part C's 0853 title lands on something with
  "collision" in it, revisit for distinctness.
