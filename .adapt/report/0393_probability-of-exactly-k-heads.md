## 393 — Toss Strange Coins

- New id / title / slug: 393 / Probability of Exactly K Heads / `probability-of-exactly-k-heads`
- Old → new API: `probabilityOfHeads` → `probabilityOfExactHeads` (go `probabilityOfExactHeads`, rust `probability_of_exact_heads`, ts `probabilityOfExactHeads`); parameters `prob`, `target` kept
- Core algorithm / difficulty: one-array distribution DP on the running head count, downward sweep, counts above target never stored / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[0.25] target 1` → 0.25 (single coin); `[0.2,0.6,0.9] target 2` → 0.516 (three tails-choices summed by hand); `[0.5]*6 target 2` → 0.234375 (binomial C(6,2)/64)
- Constraints: domain unchanged (`1 <= len <= 1000`, `0 <= prob[i] <= 1`, `0 <= target <= len`, tolerance `10^-5`), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: compatibility ✓ stale ✓ overlap ✓ verify ✓ (7/7 languages, 18/18 cases) check ✓ (per-bundle static clean)
- Sandbox: function kind, deferred to batch run

### Notes

- `comparison` is `close` (tolerance 1e-5), so public-case floats come
  straight from the scratch DP (`gen1230.py`), not rounded; the statement
  still prints outputs to five decimals as the source did.
