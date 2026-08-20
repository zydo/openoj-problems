## 138 — Counting Bits

- New id / title / slug: 138 / Set-Bit Counts to N / `set-bit-counts-to-n`
- Old → new API: `countBits` → `setBitCounts` (go `setBitCounts`, rust `set_bit_counts`, ts `setBitCounts`); parameter `n` kept (conventional)
- Core algorithm / difficulty: linear recurrence `ans[i] = ans[i & (i-1)] + 1`, plus a per-value Kernighan baseline / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `n=8 → [0,1,1,2,1,2,2,3,1]` (power-of-two reset visible), `n=4 → [0,1,1,2,1]`, `n=0 → [0]` (single-entry edge)
  - Source used n=2 and n=5; the leading run `0,1,1,2,1,2` of any answer array is forced by the task itself, so distinctness is carried by the choice of `n`
- Constraints: domain unchanged (`0 <= n <= 10⁵`), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Variants: `dp_lowest_bit`, `kernighan` kept as variant ids (decision 4); guide headings unchanged so the Solutions-tab matcher still resolves them; 14 solution files verified (7 languages × 2 variants)
- Gates: check ✓ verify ✓ (14/14 variant files, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Multi-solution bundles keep one starter set; variant solution files carry
  the variant suffix (`solution_dp_lowest_bit.py`), matching the shape of
  the already-adapted `0003` / `0053`.
