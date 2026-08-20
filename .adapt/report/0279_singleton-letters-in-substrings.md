## 279 — Count Unique Characters of All Substrings of a Given String

- New id / title / slug: 279 / Singleton Letters In Substrings / `singleton-letters-in-substrings`
- Old → new API: `uniqueLetterString` → `singletonLetterTotal` (go `singletonLetterTotal`, rust `singleton_letter_total`, ts `singletonLetterTotal`); parameter `s` kept (conventional)
- Core algorithm / difficulty: charge the sum to occurrences — an index with equal letters at `p` and `q` contributes `(i - p) * (q - i)` / H3 (unchanged)
- Statement rewritten from spec: yes — introduces the word *singleton* for "occurs exactly once", which the source spends a paragraph and a worked helper call defining
- Examples newly constructed: yes (structure-preserving: n-a, no figures)
  - `"CODE" → 20` (nothing repeats), `"PEEP" → 10` (two substrings score zero), `"SUCCESS" → 45`
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7 (cpp, go, java, js, py, rust, ts)
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n-a compatibility ✓ stale ✓ overlap ✓
- Naming note: the source's helper name `countUniqueChars` appears only in its prose, never in `problem.json`, so the stale gate does not know about it. It still has to go, and it did.

### Notes

- The trap on this one is example construction, not prose. The source's shapes are
  "all letters distinct" and "one letter twice at the ends", and the obvious
  rewrite — relabelling `"ABC"` to `"XYZ"` and `"ABA"` to `"MOM"` — is a
  permutation in everything but the alphabet, and produces the same outputs (10
  and 8). `"PEEP"` was picked instead because it is the smallest string with two
  substrings whose score is zero, which is a shape the source never shows.
- Hints are shingled along with the description. The source's hints state the
  `(i - p) * (q - i)` formula in near-identical technical English, which is the
  part of the statement most likely to drift into paraphrase; writing the window
  as "admissible starts / admissible ends" kept it clear of the gate.
