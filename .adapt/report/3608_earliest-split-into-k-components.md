## 3608 — Minimum Time for K Connected Components

- New id / title / slug: 3608 / Earliest Split Into K Components / `earliest-split-into-k-components`
- Old → new API: `minTime` → `earliestSplitTime` (go `earliestSplitTime`, rust `earliest_split_time`, ts `earliestSplitTime`); parameters `n`, `edges`, `k` kept
- Core algorithm / difficulty: reverse-Kruskal sweep over vanishing times with a union-find, counting components before each equal-time group merges / H2 (unchanged)
- Statement rewritten from spec: yes (removal framing → edges that vanish as the clock advances)
- Examples newly constructed: yes (structure-preserving: yes — all three drawn graphs keep their shapes, only times change)
  - `[[0,1,6]] k 2` → `6`, chain `[[0,1,5],[1,2,9]] k 3` → `9`, already-split `[[0,2,7]] k 2` → `0`
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated (3) — geometry untouched; times, captions, data comments, and alt texts rewritten
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a (function) compatibility ✓ stale ✓ overlap ✓

### Notes

- Cleanest bundle of the wave: pure label-edit figures (the drawn structures
  are single edges/small chains, immune to the par-array trap since these
  examples are edge-list based).
- Expected values from a threshold-simulation brute force (check every
  distinct time plus 0); it reproduced all source public cases first.
