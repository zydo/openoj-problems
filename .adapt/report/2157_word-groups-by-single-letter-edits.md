## 2157 — Groups of Strings

- New id / title / slug: 2157 / Word Groups By Single-Letter Edits / `word-groups-by-single-letter-edits`
- Old → new API: `groupStrings` → `groupWords` (go `groupWords`, rust `group_words`, ts `groupWords`); parameter `words` kept
- Core algorithm / difficulty: 26-bit letter masks, union-find over distinct masks with multiplicity folding, 26 + 26·25 neighbor probes per mask / H4 (unchanged)
- Statement rewritten from spec: yes — the three moves restated as add/remove/swap on letter sets, uniqueness of the split noted once
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `["at","bt","ct","pq"] → [2,3]` (swap chain plus isolate), `["m","mn","mno","mnop"] → [1,4]` (add chain), `["uv","uv","uw"] → [1,3]` (duplicates via swap-for-itself)
  - verified no public input duplicates a hidden one
- Constraints: domain unchanged (≤ 2·10⁴ words, lengths 1..26, lowercase, no repeats), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 19/19 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The source's example 1 (`["a","b","ab","cde"]`) is the canonical demo of
  all three moves at once; replacing it with three single-purpose examples
  (swap-only, add-only, duplicate-merge) avoided the letter-rename trap —
  renaming a/b/ab/cde to x/y/xy/mno would have been a paraphrase example.
- The swap-for-itself clause (which is what makes duplicates connect) got
  its own example rather than a parenthetical, since it is the subtlest rule
  in the spec.
