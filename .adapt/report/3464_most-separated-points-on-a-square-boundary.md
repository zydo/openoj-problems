## 3464 — Maximize the Distance Between Points on a Square

- New id / title / slug: 3464 / Most Separated Points on a Square Boundary / `most-separated-points-on-a-square-boundary`
- Old → new API: `maxDistance` → `mostSeparated` (go `mostSeparated`, rust `most_separated`, ts `mostSeparated`); parameters `side`, `points`, `k` kept
- Core algorithm / difficulty: clockwise rim coordinate per boundary point (Manhattan = shorter rim walk), binary search the distance in [0, 2·side], greedy hop chain over a doubled sorted coordinate array with binary-searched successors and a wrap-around closure check / H4 (unchanged)
- Statement rewritten from spec: yes (selection objective restated as closest-chosen-pair; the rim-pigeonhole bounds — 4 stretches over an 8-unit walk — written from the geometry)
- Examples newly constructed: yes (structure-preserving: yes — all keep side = 2, the drawn 85px-per-unit square)
  - corners + top-mid distractor, k=4 → 2; L-cluster on left/top edges, k=4 → 1; full ring of 7, k=5 → 1 (five stretches summing to 8 force one of length ≤ 1)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: all three **regenerated** (same square geometry, new point sets; chosen/not-chosen legend reused); rendered PNGs verified by image analysis
- Gates: check ✓ (per-bundle static tier clean) verify ✓ (7/7 languages, 15/15 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓ (after one alt-text rewrite)

### Notes

- Third encounter with the alt-text trap: "All four corner points of the 2
  by 2 square are chosen" shared 7-word runs with the source's near-identical
  alt. Alt text needs a from-scratch voice too — describing the *rendering*
  (blue dots vs hollow dots) instead of restating the geometry reads
  naturally and dodges the shingler.
- Side = 2 admits surprisingly many quarter-spaced 4-sets (any four rim
  coordinates at gaps 2,2,2,2); forcing answer 1 with k = 4 requires the
  points to cluster inside a half-rim. The combinations brute force
  (`exp_3464.py`, 300 random grids) agreed with the reference throughout.
