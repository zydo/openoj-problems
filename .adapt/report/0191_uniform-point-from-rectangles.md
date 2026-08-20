## 191 — Random Point in Non-overlapping Rectangles

- New id / title / slug: 191 / Uniform Point From Rectangles / `uniform-point-from-rectangles`
- Old → new API: `pick` → `drawPoint` (renamed in `problem.json`, both solutions, and inside every `actions` entry of public **and hidden** cases); class `Solution` and parameter `rects` kept
- Core algorithm / difficulty: prefix sums over cell counts + binary search for the rectangle, row-major decode for the cell; statistically judged uniformity / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[[-3,-1,-2,2],[0,0,3,3]]` (8 vs 16 cells, 24 points, 1/24 each, 24000 draws), `[[1,1,2,2],[3,1,6,2]]` (4 vs 8 cells, 12 points, 24000 draws)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: python3 + java only (design kind — correct, not a bug)
- Figures: none
- Gates: check ✓ verify ✓ (2/2 languages, 15/15 cases incl. statistical) sandbox — see note compatibility ✓ stale ✓ overlap ✓

### Notes

- Public `expected` for statistical cases is generated mechanically:
  enumerate covered points, `1/total` each, `tolerance 0.12`, `repeat`
  chosen so every point expects ≥1000 draws. Script pattern is in this
  session's history (json.dumps with compact separators for the `"[x,y]"`
  keys).
- First gate failure here was mine: the action-string rename must recurse
  into the whole cases dict (my first pass returned early on dicts without
  a `call` key, leaving hidden cases calling `pick`). The compatibility gate
  caught it exactly as designed.
- Overlap gate also flagged the statistical-judging section (8%): judge
  explanations share too much boilerplate with the source phrasing — rewrite
  them as hard as the task prose. Two constraint lines were part of the
  overlap ("do not overlap" + "calls will be made to") and were reworded.
- Sandbox judging: no local judge API is running in this session; the local
  `verify_solution.py` executes the same statistical comparison the judge
  uses (15/15 green, twice). If the main agent wants the live sandbox pass
  for design problems, this one is a candidate.
- Kin naming for the future: 0519 (random flip matrix) and 0528 (weighted
  random pick) are the sibling samplers and are not yet adapted;
  `drawPoint` here leaves room for `drawCell` / `drawIndex` there.
