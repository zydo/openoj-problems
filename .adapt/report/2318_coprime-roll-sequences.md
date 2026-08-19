## 2318 — Number of Distinct Roll Sequences

- New id / title / slug: 2318 / Coprime Roll Sequences / `coprime-roll-sequences`
- Old → new API: `distinctSequences` → `countCoprimeRollSequences` (go `countCoprimeRollSequences`, rust `count_coprime_roll_sequences`, ts `countCoprimeRollSequences`); parameter `n` kept
- Core algorithm / difficulty: DP over the last two rolls (`dp[a][b]` tables, 6×6×6 transitions per step, zero-state pruning), mod 10⁹+7 / H3 (unchanged)
- Statement rewritten from spec: yes — rules restated as coprime neighbours plus spacing of equal faces; singular "die"
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `n = 9 → 33008`, `n = 11 → 262912` — the smallest free inputs: hidden cases already cover n ∈ {1,3,5,6,7,8,10,…} and the source's public examples own n ∈ {2,4}, leaving 9 as the first n available for a new example
- Constraints: domain unchanged (1 ≤ n ≤ 10⁴), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (static tier clean for this key) verify ✓ (7/7 languages, 17/17 cases) sandbox n/a (function kind) compatibility ✓ stale ✓ overlap ✓

### Notes

- Single-integer-input problems leave no room to vary an example except
  the input itself, and the deterministic output pins the pair — so
  "newly constructed" reduces to choosing inputs untouched by both the
  hidden set and the source's public cases. Here that forced n ≥ 9,
  whose counts nobody verifies by eye; the explanations lean on small
  valid/invalid fragments instead of enumerating sequences.
