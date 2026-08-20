## 745 — Find Products of Elements of Big Array

- New id / title / slug: 745 / Range Products in the Set-Bit Stream / `range-products-in-the-set-bit-stream`
- Old → new API: `findProductsOfElements` → `rangeProducts` (go `rangeProducts`, rust `range_products`, ts `rangeProducts`); parameter `queries` kept
- Core algorithm / difficulty: prefix set-bit counts and exponent sums with closed-form `_count_bit`, binary search for the last whole number, modular pow / H4 (unchanged)
- Statement rewritten from spec: yes (LeetCode's "powerful array" term dropped; the object is introduced as the stream of set-bit powers read off 1, 2, 3, ...)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[[0,4,5]]` → `[1]`, `[[3,6,10]]` → `[2]`, `[[8,12,7],[15,15,3]]` → `[4,2]` (multi-query, single-element range)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- `solution.*` comments referencing `big_nums` were reworded to the new `set_bit_stream` term (comment-only; no identifier in any language used that name).
- The stream prefix `[1, 2, 1, 2, 4, ...]` is stated identically in both statements — it is the task's defining sequence, not copied prose; the overlap gate agreed (it sits in a fenced/prose list and the shingle ratio stayed far below the limit).
