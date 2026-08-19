## 2024 — Maximize the Confusion of an Exam

- New id / title / slug: 2024 / Longest Uniform Run After k Flips / `longest-uniform-run-after-k-flips`
- Old → new API: `maxConsecutiveAnswers` → `longestUniformRunAfterKFlips` (go `longestUniformRunAfterKFlips`, rust `longest_uniform_run_after_k_flips`, ts `longestUniformRunAfterKFlips`); parameter `answerKey` → `s`
- Core algorithm / difficulty: two-pointer window valid iff minority count ≤ k; answer is largest window seen / H2 (unchanged)
- Statement rewritten from spec: yes — teacher/exam scenario dropped; `T`/`F` kept as opaque symbols (hidden data uses them; only the story around them was removed)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `"FTFTF", k=1 → 3` (alternating), `"TTFFTT", k=2 → 6` (whole string), `"FFTFFTF", k=1 → 5` (lone T inside an F block)
- Constraints: domain unchanged (1–5·10⁴ length, T/F alphabet, 1 ≤ k ≤ n), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Parameter rename `answerKey` → `s` (verified unused as an identifier in
  every source solution first). The rust source spells it `answer_key`
  internally — renamed separately; its own param name is not part of the
  public API and the ledger records only `answerKey` → `s`.
- Expected values brute-forced over all ≤ k rewrite patterns (3ⁿ on tiny
  inputs) and cross-checked against the sliding window — agreement on all
  three examples.
- One comment family ("t/f count answers inside the window") updated to
  "symbols"; no other scenario vocabulary survived in the solutions.
