## 545 — Find the Longest Valid Obstacle Course at Each Position

- New id / title / slug: 545 / Longest Non-Decreasing Chain at Each Index / `longest-non-decreasing-chain-at-each-index`
- Old → new API: `longestObstacleCourseAtEachPosition` → `longestChainAtEachIndex` (go `longestChainAtEachIndex`, rust `longest_chain_at_each_index`, ts `longestChainAtEachIndex`); parameter `obstacles` → `heights`
- Core algorithm / difficulty: patience tails array with bisect_right, O(n log n) / H2 (unchanged)
- Statement rewritten from spec: yes (obstacle-course story dropped; "chain" = order-preserving, skipping allowed)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[4,7,4,9]` → `[1,2,2,3]` (repeat value), `[6,5,4]` → `[1,1,1]` (strictly down), `[5,9,2,3,7]` → `[1,2,1,2,3]` (restart after a tall peak)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- "Chain" chosen over "run"/"streak" deliberately — those imply contiguity,
  which the subsequence here does not have.
- `heights` grepped as an identifier in the source solutions before the
  rename: no hits (obstacle-course wording survived only in prose comments).
- Wording of example 3 required care: the source's walkthrough style lists
  the prefix then the chain; mine describes chains without restating
  prefixes, which also keeps the overlap gate comfortably clear.
