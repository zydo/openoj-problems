## 535 — The Number of the Smallest Unoccupied Chair

- New id / title / slug: 535 / Lowest Free Chair Number / `lowest-free-chair-number`
- Old → new API: `smallestChair` → `lowestFreeChair` (go `lowestFreeChair`, rust `lowest_free_chair`, ts `lowestFreeChair`); parameter `targetFriend` → `targetGuest`; `times` kept
- Core algorithm / difficulty: two-heap chronological simulation, departure-heap + free-label heap / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[[2,5],[3,4],[5,6]], 2 → 0` (double release at the arrival instant), `[[1,7],[2,8],[3,9],[4,10]], 2 → 2` (no reuse), `[[2,3],[1,6],[3,5],[4,7]], 2 → 1` (unsorted `times`, tie handoff)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: compatibility ✓ stale ✓ overlap ✓ verify ✓ (7/7 languages, 17/17 cases) check ✓ (per-bundle static)

### Notes

- First parameter rename of the wave (`targetFriend` → `targetGuest`).
  Verified first that no source solution declares `guest`/`seat` locals (the
  0587 trap); source solutions use `chair`/`nextChair`/`chairHeap` locals,
  which survive untouched because they are not the renamed identifiers.
  Kept "chair" as the domain noun so those locals stay coherent with the
  prose.
- Expectations cross-checked with an independent event-sort brute force that
  processes departures before arrivals on ties — the semantic the `<=` in
  the real solution encodes.
