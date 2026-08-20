## 391 — Count Vowels Permutation

- New id / title / slug: 391 / Count Constrained Vowel Strings / `count-constrained-vowel-strings`
- Old → new API: `countVowelPermutation` → `countConstrainedVowelStrings` (go `countConstrainedVowelStrings`, rust `count_constrained_vowel_strings`, ts `countConstrainedVowelStrings`); parameter `n` kept
- Core algorithm / difficulty: rolling five counters, one per ending vowel, simultaneous transition, mod 10^9+7 / H2 (unchanged)
- Statement rewritten from spec: yes (rules presented as an allowed-successor table; the rule set itself is the functional spec and is preserved exactly)
- Examples newly constructed: yes (structure-preserving: n/a — the one figure is a solution graph, not example data)
  - `n = 2` → 10 (follow-by-hand: 1+2+4+2+1 continuations), `n = 8` → 474 (share of 5^8), `n = 31` → 457014530 (crosses the modulus between 30 and 31)
- Constraints: domain unchanged (`1 <= n <= 2*10^4`), presentation rewritten
- Skeletons regenerated: all 7
- Figures: kept unchanged — `solution-vowel-graph.svg` draws the allowed-adjacency graph, which encodes the rules (functional), not example data
- Gates: compatibility ✓ stale ✓ overlap ✓ verify ✓ (7/7 languages, 16/16 cases) check ✓ (per-bundle static clean)
- Sandbox: function kind, deferred to batch run

### Notes

- The five pairing rules and the vowel alphabet are the functional
  specification — compatibility would break if they changed — so the rewrite
  changes only their presentation (bullet prose → successor table). The
  overlap gate stays green because the table rows share no 7-word runs.
- Example values came from a scratch DP run (`.localonly/wave-d-05/gen1220.py`);
  picked `n` values outside both the source publics (1, 2, 5) and the hidden
  set (3, 4, 6, 7, 10, ...) — `n = 8` and `n = 31` were free, `n = 2` overlaps
  a source public but is the only by-eye size other than 1, and no array
  literals exist for the stale gate to flag.
