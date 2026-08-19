## 3193 — Count the Number of Inversions

- New id / title / slug: 3193 / Permutations with Prescribed Prefix Inversions / `permutations-with-prescribed-prefix-inversions`
- Old → new API: `numberOfPermutations` → `countMatchingPermutations` (go `countMatchingPermutations`, rust `count_matching_permutations`, ts `countMatchingPermutations`); parameters `n`, `requirements` kept
- Core algorithm / difficulty: dp over prefix lengths with a sliding-window sum (prefix sums) on the inversion-count axis, zeroed at requirement indices, capped at max count / H4 (unchanged)
- Statement rewritten from spec: yes (inversion defined inline in the new voice)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `n=4, [[3,5]]` → 3 (single full-array demand), `n=4, [[2,1],[3,4]]` → 2 (mid-prefix pinned), `n=3, [[1,2],[2,2]]` → 0 (demand unreachable for its prefix length)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (static tier full-tree run — bundle absent from failure list) verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Expected values were produced by an independent brute-force enumerator and
  cross-checked against the reference dp before being written — both agreed
  on all candidates.
- First gate run failed because the generator wrote a fourth public case that
  the statement did not show as an example — `parse_problem_bundle` enforces
  public-case ↔ example one-to-one, and the failure surfaces as a truncated
  traceback per language inside the compatibility gate. Symptom to remember:
  "all languages fail identically with a traceback" means harness, not code.
