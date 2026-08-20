## 157 — Remove K Digits

- New id / title / slug: 157 / Smallest Number After Deletions / `smallest-number-after-deletions`
- Old → new API: `removeKdigits` → `smallestAfterDeletions` (go `smallestAfterDeletions`, rust `smallest_after_deletions`, ts `smallestAfterDeletions`); parameter `num` → `digits`
- Core algorithm / difficulty: monotonic (non-descending) stack greedy / H2 (unchanged)
- Statement rewritten from spec: yes — framed as "erase exactly `k` characters and read what is left", with the no-leading-padding and empty-result rules stated as reporting rules rather than notes on the examples
- Examples newly constructed: yes (structure-preserving: n-a, no figures)
  - `"4275316", 3 → "2316"`, `"20304", 1 → "304"` (leading zero produced by the greedy), `"45", 2 → "0"` (everything erased)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7 (cpp, go, java, js, py, rust, ts)
- Figures: none in the source
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The parameter rename `num` → `digits` is safe here because `digits` occurs in
  the source solutions only inside comments, never as an identifier — checked by
  grep before committing to the name, per the protocol's step 3 warning. Worth
  noting that the *comments* the reference carries ("the digits were
  non-decreasing") survive the rename and read naturally with the new parameter
  name, so no comment edits were needed.
- The compatibility gate derives its renames from `problem.json` plus the
  ledger's `api` map. Since fragments are not merged when a sub-agent runs the
  gate, the parameter rename in the fragment is not exercised locally; it is
  nonetheless correct to apply it to the source solutions (they use `num` for
  the same value and never mention `digits` as a name), so a post-merge re-run
  will still pass.
