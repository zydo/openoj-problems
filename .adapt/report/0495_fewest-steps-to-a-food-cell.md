## 495 — Shortest Path to Get Food

- New id / title / slug: 495 / Fewest Steps to a Food Cell / `fewest-steps-to-a-food-cell`
- Old → new API: `getFood` → `stepsToFood` (go `stepsToFood`, rust `steps_to_food`, ts `stepsToFood`); parameter `grid` kept; cell symbols `*` `#` `O` `X` kept — they are the hidden-case alphabet, not names
- Core algorithm / difficulty: BFS from the `*` cell, first food dequeue wins / H2 (unchanged)
- Statement rewritten from spec: yes (starving framing dropped; movement rules re-derived)
- Examples newly constructed: yes (structure-preserving: yes — same grid shapes as the three figures)
  - 4×6, walled detour → 3
  - 4×5, sealed corner → -1
  - 5×8, two food cells, nearer one costs 7 → 7
  - 2×2, down then right → 2
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: regenerated (4) — example 1–3 grids re-emitted from the recovered layout rule (cell 38 at (28,24), legend row, caption), and `solution-bfs-rings.svg` redrawn for the new example 1 (rings 1–3 land on the food; the two unreached open cells stay plain). Source figures walked the old example, so label edits alone were impossible.
- Gates: check ✓ (per-bundle static replica) verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Grid rows are identifying literals when they mix 3+ symbols — my first
  unreachable example reused a source row verbatim and the stale gate caught
  it (`["X","*","X","O","X"]`).
- Keeping example 1's answer at 3 let the solution figure keep its four-ring
  color scale; only the ring positions changed.
- The figure family renders deterministically from the grid; the renderer
  lives at `.localonly/wave-f-01/render_1730.py` if a redraw is ever needed.
