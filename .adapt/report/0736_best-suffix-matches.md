## 736 — Longest Common Suffix Queries

- New id / title / slug: 736 / Best Suffix Matches / `best-suffix-matches`
- Old → new API: `stringIndices` → `bestSuffixMatches` (go
  `bestSuffixMatches`, rust `best_suffix_matches`, ts `bestSuffixMatches`);
  parameters `wordsContainer` → `entries`, `wordsQuery` → `queries`
- Core algorithm / difficulty: trie over reversed strings with a
  best-index annotation per node (shortest word, then earliest index) /
  H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `["stone","tone","bone","one"]` × `["tone","bone","phone","zzz"]` →
    `[1,2,3,3]`: deep-match beating shorter rivals, a unique deep match,
    a same-depth field won by the shortest word, and the empty-suffix
    case resolved by the globally shortest entry
  - `["mat","cat","hat"]` × `["at","mat","hat"]` → `[0,0,2]`: equal
    lengths resolved by earliest index; a self-match at the tail index
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a
  (function kind) compatibility ✓ stale ✓ overlap ✓

### Notes

- `entries`/`queries` were grepped across all seven ports before the
  rename (the Rust port's `match` expressions make method names containing
  a bare `match` worth avoiding; `best_suffix_matches` is one token, so
  it is safe).
- The all-ties-equal shape (`[1,1,1]`-style outputs like the source's
  Example 1) was deliberately avoided; the first example now exercises
  four different resolution rules across its four queries.
