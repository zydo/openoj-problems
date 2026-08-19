## 2940 — Find Building Where Alice and Bob Can Meet

- New id / title / slug: 2940 / Leftmost Reachable Point From Two Positions / `leftmost-reachable-point-from-two-positions`
- Old → new API: `leftmostBuildingQueries` → `leftmostMeetingPoints` (go `leftmostMeetingPoints`, rust `leftmost_meeting_points`, ts `leftmostMeetingPoints`); parameters `heights`, `queries` kept
- Core algorithm / difficulty: endpoint ordering + two instant cases, else first index above max(a,b) via max-segment-tree descent / H4 (unchanged)
- Statement rewritten from spec: yes — Alice/Bob scenario replaced by two anonymous "walkers"; the move rule (strictly rightward, strictly upward) and the stay-put option are stated directly
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `heights=[3,7,2,5,6,4]` with 5 queries `→ [3,-1,2,4,-1]`, `heights=[9,2,6,2,10,3]` with 5 queries `→ [4,4,4,0,5]`, `heights=[4,4,4] → [-1,-1,1]` (flat array, never meet) — all brute-verified by per-index reachability scan
- Constraints: domain unchanged (1 ≤ n, q ≤ 5·10⁴, 1 ≤ heights[i] ≤ 10⁹), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The brute model (`t == p or (p < t and heights[p] < heights[t])` for both
  walkers) makes the "meeting at b without moving" semantics explicit and
  is a good template for any two-walker reachability rewrite.
