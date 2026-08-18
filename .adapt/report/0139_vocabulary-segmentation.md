## 0139 — Word Break

- New id / title / slug: 139 / Vocabulary Segmentation / `vocabulary-segmentation`
- Old → new API: `wordBreak` → `canSegment` (go `canSegment`, rust `can_segment`, ts `canSegment`); parameter `wordDict` → `vocabulary`, `s` kept
- Core algorithm / difficulty: prefix reachability, as a DP sweep and as a BFS over cut points / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `"sunflower" + ["sun","flow","er"] → true`, `"dogdogcat" + ["cat","dog"] → true` (an entry reused), `"carpetcarp" + ["car","carpet","pet"] → false` (both openings dead-end)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: compatibility ✓ stale ✓ overlap ✓ check ✓ (verify 14/14 language-variants, 15/15 cases each)

### Notes

- Multi-solution bundle: variant ids `dp` and `bfs` and the `## dp` / `## bfs`
  headings are untouched; both sections were rewritten under them.
- Both variants were run against the three new examples and agreed before the
  public cases were written.
- The false example was picked so that the two obvious greedy openings
  (`carpet` first, `car` first) both fail — the point the DP recurrence makes
  that a greedy scan misses.
