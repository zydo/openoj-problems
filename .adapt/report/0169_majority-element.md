## 0169 — Majority Element

- New id / title / slug: 169 / Majority Element / `majority-element` — **name kept**
- Old → new API: none — `majorityElement` (go `majorityElement`, rust `majority_element`, ts `majorityElement`) and parameter `nums` all kept
- Core algorithm / difficulty: Boyer–Moore voting, one sweep with a tally / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[5,8,8,2,8,6,8] → 8` (majority that never leads at position 0), `[-4,-9,-4,-4] → -4` (negatives), `[12] → 12` (minimal)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: compatibility ✓ stale ✓ overlap ✓ (verify 7/7 languages, 14/14 cases)

### Notes

- **Why the name is kept:** "majority element" is the term of art for this
  concept — the Boyer–Moore majority vote literature (1980 onward) and every
  algorithms treatment uses exactly it, and it predates LeetCode. Renaming
  would mean inventing terminology, the failure mode the "Happy Number" and
  "H-Index" precedents warn against. Everything else in the bundle is written
  fresh; the kept name is the whole of the overlap.
- **Family flag for the main agent:** `0229_majority-element-ii` exists in
  `problems/` and is not yet in any chunk. If it keeps kinship with this one,
  its title should stay "Majority Element II" (or whatever the family decision
  is) — decided together with this bundle, per ADAPT §Naming.
