## 45 — Palindrome Partitioning

- New id / title / slug: 45 / Palindrome Partitions / `palindrome-partitions`
- Old → new API: `partition` → `palindromePartitions` (go `palindromePartitions`, rust `palindrome_partitions`, ts `palindromePartitions`); parameter `s` kept (conventional)
- Core algorithm / difficulty: interval palindrome table plus backtracking over prefixes / H3 (unchanged)
- Statement rewritten from spec: yes — pieces "read the same in both directions" instead of "is a palindrome", and the deterministic-order paragraph is restated in terms of first-piece length
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `"sees"` (whole string, an interior even piece, all singles → 3 partitions), `"toto"` (two overlapping palindromes giving different partitions), `"abcd"` (no multi-letter palindromes → 1 partition)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility **✓ but reported FAIL by `adapt_gates.py` — same gate bug as 0198, see below** stale ✓ overlap ✓

### Notes

- **Third bundle to hit the `adapt_gates.py` rename collision.** Source method
  `partition` and rust entrypoint `partition` are the same token, so the gate's
  flat rename list rewrites `pub fn partition` to the camelCase name and the
  rust rule then finds nothing. Same class as `rob` (0198) and `calculate`
  (0224/0227). Compatibility was proven with the language-aware variant in
  this session's scratchpad (`compat_lang.py`): all seven source solutions,
  renamed per language, pass 17/17 cases.
- **The same collision bit the bundle's own rust solution.** The scaffold's
  word-boundary rename of `partition → palindromePartitions` applies to
  `solution.rust` too, and the rust harness calls the snake_case entrypoint —
  so verify failed until `solution.rust` was renamed a second time to
  `palindrome_partitions`. Rule for rust: the reference must end at the
  snake_case entrypoint, not the method name. This cost one verify round here
  and would have cost the same on 0198 had `rob`→`rob` not been symmetric.
- **Family: `palin-part`; sibling `0046_fewest-palindrome-cuts` follows.**
  Framing vocabulary fixed here and inherited there: the string is cut into
  consecutive **pieces**, and a qualifying piece **reads the same in both
  directions** — the noun "palindrome" stays in titles and tags but is kept
  out of the task sentences. Constraints collapse to one bullet (the length
  bound and the alphabet), matching how 0127/0126 state theirs.
- `"toto"` was chosen precisely because its two interior palindromes overlap
  (`t|oto` vs `tot|o`), which the source's `"aab"` does not illustrate — the
  ordering guarantee is what keeps those two apart, and the example makes the
  reader confront it.
