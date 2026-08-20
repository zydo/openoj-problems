## 567 — Maximum Employees to Be Invited to a Meeting

- New id / title / slug: 567 / Round Table Favorites / `round-table-favorites`
- Old → new API: `maximumInvitations` → `maxSeated` (go `maxSeated`, rust `max_seated`, ts `maxSeated`); parameter `favorite` kept
- Core algorithm / difficulty: functional graph — best whole cycle ≥ 3 vs sum of 2-cycle chain depths, Kahn peel for depths / H4 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: **yes** — same graph shapes as the three figures, employee ids relabeled)
  - `[1,0,1,1] → 3` (mutual pair + one chain + one excluded sibling), `[2,0,1] → 3` (pure 3-ring), `[3,0,1,2,2] → 4` (4-ring with a hanger-on left out)
  - verified no public input duplicates a hidden one
- Constraints: domain unchanged (`2..10⁵`, no self-favorites), presentation rewritten
- Skeletons regenerated: all 7
- Figures: **labels updated** — seat labels, arrows comment, and the worked annotations in `solution-two-cycle-table.svg`; one arrow path redrawn (top→left became top→right) because the relabeled data reverses that edge
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- In a functional-graph problem the array **is** the geometry: preserving a
  figure's seating forces an isomorphic graph, so the only free value is the
  employee-id relabeling. A permutation of ids changes every input literal
  (the stale gate's exact-array check passes) while keeping the drawing
  intact — the sanctioned structure-preserving move for this family.
- The source `solution-two-cycle-table.svg` draws an arrow 1→0 that its own
  data (`favorite = [2,2,1,2]`, where `favorite[1] = 2`) does not have. The
  adapted figure needed a different arrow anyway after relabeling, and the
  new one matches the new data exactly. Flagging in case the live tree's
  figure wants the same fix someday.
- Third confirmation of the 2106 note: figure alt text is prose for the
  overlap gate. Copied alt text cost 7% here; rewriting dropped it to 0.
