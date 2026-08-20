## 637 — Sum of Prefix Scores of Strings

- New id / title / slug: 637 / Total Prefix Hits / `total-prefix-hits`
- Old → new API: `sumPrefixScores` → `totalPrefixHits` (go `totalPrefixHits`, rust `total_prefix_hits`, ts `totalPrefixHits`); parameter `words` kept (conventional); vocabulary score → hit count
- Core algorithm / difficulty: one shared trie with a pass counter per node; each word's answer is the sum of counters along its root-to-node path / H3 (unchanged)
- Statement rewritten from spec: yes — score-of-a-prefix defined freshly as "hit count" (how many entries begin with `p`)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `["ab","ab","abc"] → [6,6,7]` (duplicate entries count separately), `["code","co","debit"] → [6,4,5]` (shared lead-in plus unrelated word), `["zz"] → [2]` (single entry)
- Constraints: domain unchanged (n ≤ 1000, lengths ≤ 1000, lowercase letters), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Rename order matters for the comment pass: the phrase "scores its own
  prefixes" must be rewritten before the bare identifier `scores` (the
  results array) is renamed to `hits`, or the comment turns to mush.
- Example candidates were brute-force checked (per-prefix `startswith` scan)
  against the hidden inputs; no public case duplicates a hidden one.
