## 0198 — House Robber

- New id / title / slug: 198 / Maximum Non-Adjacent Loot / `maximum-non-adjacent-loot`
- Old → new API: `rob` → `maxNonAdjacentLoot` (go `maxNonAdjacentLoot`, rust `max_non_adjacent_loot`, ts `maxNonAdjacentLoot`); parameter `nums` kept (conventional)
- Core algorithm / difficulty: two-term linear recurrence, forward with rolling variables and backward with a cache / H2 (unchanged)
- Statement rewritten from spec: yes — the invented burglary scenario is dropped for the computation it stands for (pick a no-two-adjacent subset of positions, maximise the total), per `ADAPT.md` §Statement style
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[6,1,2,8] → 14`, `[3,10,4,10,2] → 20` (skip-one-between), `[12,15] → 15` (neighbours, only one may count)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Variants: `dp`, `memo_dfs` kept as variant ids (decision 4); guide headings `## dp` / `## memo_dfs` unchanged so the section matcher still resolves them
- Gates: check ✓ verify ✓ (14/14 variant files, 18/18 cases) sandbox n/a compatibility **✓ but reported FAIL by `adapt_gates.py` — gate bug, see below** stale ✓ overlap ✓

### Notes

- **`adapt_gates.py` compatibility gate has a rename-ordering bug that this
  bundle is the first to hit.** The gate builds one flat rename list and
  applies all of it to every source solution file, in the order
  `api map → class_name/method/oracle → entrypoints`. That is fine as long as
  the source's `method` and its rust entrypoint are *different tokens*
  (`twoSum` vs `two_sum`), which is true for every wave-1 bundle. Here both are
  the single word `rob`, so the method rule fires first and rewrites
  `pub fn rob` to `maxNonAdjacentLoot`; the rust rule then finds nothing left
  to rename and the file cannot compile (`E0599`). Two other bundles in this
  chunk hit it identically — `0224` and `0227`, whose source method and rust
  entrypoint are both `calculate`.
  - It is **not** fixable from the bundle side. Putting the pair in the
    ledger's `api` map only moves the same collision earlier, since one source
    token cannot map to two different targets in a global rename.
  - **Suggested fix:** apply the entrypoint renames *per file*, choosing the
    rename by the solution's extension, and let the language-specific rename
    replace the method rename for that file rather than follow it. A working
    version of exactly that is in this session's scratchpad as
    `compat_lang.py`; it takes `<source-key> <adapted-key>` and runs the same
    `verify_solution.py` proof.
  - **Compatibility was verified that way**: all 14 source solution files
    (7 languages × 2 variants), renamed per language, pass 18/18 cases against
    this bundle's data. The mechanical proof decision 5 asks for does hold.
- **Family: `robber`.** The sibling `0213_house-robber-ii` → *Maximum
  Non-Adjacent Loot, Circular* is not on disk yet, and its source shares the
  `rob`/`rob` method-vs-rust-entrypoint collision, so it will fail the same
  gate until the fix lands. Framing vocabulary to inherit: the array is
  **positions** holding **values**, the rule is that no two chosen positions
  are **neighbours**, and choosing nothing is explicitly allowed. Constraints
  are prose (`nums` holds at least `1` and at most `100` values), not
  inequalities.
- The blind word-boundary rename of `rob` mangles the reference solutions'
  comments ("or `rob` it" became "or maxNonAdjacentLoot it") and leaves the
  scenario vocabulary (*house*, *robbed*) behind. Both were rewritten to the
  new terminology — `ADAPT.md`'s solution row asks for exactly this ("update
  comments naming old terminology"), and a scenario-free statement makes it
  mandatory rather than cosmetic. `solution_memo_dfs.rust` also had a local
  binding named `rob`, which became `take`.
