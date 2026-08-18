## 0440 — K-th Smallest in Lexicographical Order

- New id / title / slug: 440 / Kth Number in Dictionary Order / `kth-number-in-dictionary-order`
- Old → new API: `findKthNumber` → `kthDictionaryNumber` (go `kthDictionaryNumber`, rust `kth_dictionary_number`, ts `kthDictionaryNumber`); parameters `n`, `k` kept (conventional)
- Core algorithm / difficulty: prefix-first walk over the digit-extension structure with O(log n) branch sizing / H4 (unchanged)
- Statement rewritten from spec: yes — framed as sorting the *spellings* of the numbers, with the prefix rule stated outright rather than named
- Examples newly constructed: yes (structure-preserving: no — the figure was redrawn instead)
  - `n = 12, k = 4 → 12`, `n = 25, k = 20 → 4`, `n = 100, k = 15 → 21` (three-digit interleaving)
- Constraints: domain unchanged (`1 <= k <= n <= 10^9`), split into two bullets
- Skeletons regenerated: all 7
- Figures: **redrawn** — `figures/solution-prefix-walk.svg`, new file name, new data (n = 12), fresh alt text. The source figure's geometry encoded n = 13 (four children under prefix 1), so a label edit could not carry the new example.
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The stale gate lifts array literals only out of ```text blocks in the *source
  statement*. Here that is the single lexicographic listing; the `[1, n]` that
  appears in the source constraints and in every solution comment is not
  collected, so the copied comments passed untouched. Do not assume a
  bracketed range in a comment is safe in general — check which literals the
  source's example blocks actually contain.
- `scripts/check.py --problems <key>` still walks the whole tree in the static
  tier (~2 min for 200 bundles); the flag only narrows the runtime tier.
