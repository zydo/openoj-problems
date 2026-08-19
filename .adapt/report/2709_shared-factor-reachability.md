## 2709 — Greatest Common Divisor Traversal

- New id / title / slug: 2709 / Shared Factor Reachability / `shared-factor-reachability`
- Old → new API: `canTraverseAllPairs` → `allIndicesReachable` (go `allIndicesReachable`, rust `all_indices_reachable`, ts `allIndicesReachable`); parameter `nums` kept
- Core algorithm / difficulty: SPF sieve + union-find with per-prime last-seen chaining, one-component check / H4 (unchanged)
- Statement rewritten from spec: yes — "traverse between indices" → "neighbour positions connected through shared prime factors"
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[10,21,15] → true` (indirect reachability through a bridge), `[4,9,25] → false` (pairwise coprime), `[6,1,3] → false` (the value-1 rule)
- Constraints: domain unchanged (1 ≤ n ≤ 10⁵, 1 ≤ values ≤ 10⁵), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 20/20 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Boolean return type; expecteds serialize as true/false and the scaffold
  copies hidden ones untouched.
