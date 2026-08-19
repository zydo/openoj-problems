## 1049 — Last Stone Weight II

- New id / title / slug: 1049 / Optimal Stone Smashing / `optimal-stone-smashing`
- Old → new API: `lastStoneWeightII` → `optimalStoneSmashing` (go `optimalStoneSmashing`, rust `optimal_stone_smashing`, ts `optimalStoneSmashing`); parameter `stones` kept
- Core algorithm / difficulty: signed-sum reduction to 0/1 subset sum / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[4,9,2,7] → 0` (splits evenly), `[3,8,20] → 9` (one stone outweighs the rest), `[7] → 7` (single stone)
- Constraints: domain unchanged (1..30 stones, weights 1..100), presentation rewritten; follow-up rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: compatibility ✓ stale ✓ overlap ✓ check ✓ (verify 7/7 languages, 21/21 cases)

### Notes

- Sibling of 1046, named as a pair (`Greedy` vs `Optimal Stone Smashing`).
  The two statements share my own framing of a collision but were each written
  from the spec; the overlap gate is per-source, and both pass.
- The source's follow-up is functional (it pins the intended complexity), so it
  is kept as a `### Follow-up` section with fresh wording.
