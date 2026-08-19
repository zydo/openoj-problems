## 2208 — Minimum Operations to Halve Array Sum

- New id / title / slug: 2208 / Least Steps to Halve the Sum / `least-steps-to-halve-the-sum`
- Old → new API: `halveArray` → `leastStepsToHalve` (go `leastStepsToHalve`, rust `least_steps_to_halve`, ts `leastStepsToHalve`); parameter `nums` kept
- Core algorithm / difficulty: greedy — always halve the current maximum, tracked in a max-heap of negated floats / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[16,4,4]` (exact hit on half, 2 steps), `[10,2]` (same entry halved twice, fractional values), `[12,12,3]` (spread across equal maxima, 3 steps)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a (function kind) compatibility ✓ stale ✓ overlap ✓

### Notes

- Greedy optimality checked with exact `Fraction` arithmetic: for 120
  random small inputs, no sequence of ref−1 halvings reaches the target
  while the greedy count always does.
- Hidden cases include 10^5-element arrays; kept byte-identical.
