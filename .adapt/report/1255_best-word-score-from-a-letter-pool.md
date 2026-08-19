## 1255 — Maximum Score Words Formed by Letters

- New id / title / slug: 1255 / Best Word Score From a Letter Pool / `best-word-score-from-a-letter-pool`
- Old → new API: `maxScoreWords` → `bestWordScore` (go `bestWordScore`, rust `best_word_score`, ts `bestWordScore`); parameters `words`, `letters`, `score` kept
- Core algorithm / difficulty: DFS over word subsets with 26-entry count vectors, take-branch gated by a componentwise pool comparison / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `["sun","net","nuts"] / nnuts ee / e5 n1 s2 t4 u3` → 16 (sun+net; nuts blocked by the single s and t); `["ark","ra","kit"]` → 15 (two small words beat the big one); `["egg","gg"] / e g g / e4 g6` → 16 (pool binds)
- Constraints: domain unchanged (`1 <= words.length <= 14`, `1 <= len(w) <= 15`, `1 <= letters.length <= 100`, single chars, `score.length == 26`, `0 <= score[i] <= 10`, lowercase), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: compatibility ✓ stale ✓ overlap ✓ verify ✓ (7/7 languages, 18/18 cases) check ✓ (per-bundle static clean)
- Sandbox: function kind, deferred to batch run

### Notes

- First compatibility failure of the wave, and it was my arithmetic, not the
  gate: I computed the expected value with one letter pool (single t) but
  wrote a different pool (two t's) into the public case, letting nuts+net
  score 20. The statement's hand-typed score arrays also drifted from the
  case data (wrong indices for i and g). Lesson applied for the rest of the
  wave: the public-case JSON is generated from the same Python values the
  explanation quotes, and the statement's arrays are diffed against the
  case data mechanically before the gates run.
