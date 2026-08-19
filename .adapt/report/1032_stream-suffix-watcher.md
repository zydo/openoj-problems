## 1032 — Stream of Characters

- New id / title / slug: 1032 / Stream Suffix Watcher / `stream-suffix-watcher`
- Old → new API: class `StreamChecker` → `SuffixWatcher`; method `query` → `feed`; parameters `words` and `letter` kept
- Core algorithm / difficulty: character tree of the words plus a trail of the nodes live attempts occupy / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figures)
  - `["moo","on"]` fed `m o o n s` → `[null,false,false,true,true,false]` (two different words match on consecutive characters)
  - `["cat"]` fed `c a r c a t` → `[null,...,true]` (a failed attempt, then a later one that lands)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: python3 + java (design offers only these)
- Figures: none
- Gates: check ✓ verify ✓ (2/2 languages, 16/16 cases) compatibility ✓ stale ✓ overlap ✓ — **sandbox pending (batch)**

### Notes

- Design bundle, so the sanctioned hidden-case edit applies: every `actions`
  string was rewritten in place, `StreamChecker` → `SuffixWatcher` and `query`
  → `feed`, in the hidden cases as well as the public ones. Verified
  afterwards that `cases.json` contains zero occurrences of either source
  identifier, that all 16 cases (2 public + 14 hidden) name `SuffixWatcher` at
  index 0, and that every later action is `feed` — a partial rename passes the
  gates and only fails at judge time.
- The rename also touched `query` inside prose comments in both reference
  solutions; the word-boundary pass caught those, and the surviving text reads
  correctly with `feed`.
- `feed` was chosen over keeping `query`: `query` is LeetCode's API surface
  here, and it is a bare lowercase word, so the stale gate would not have
  forced the issue — the rename is deliberate, not gate-driven.
