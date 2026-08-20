## 750 — Maximum Total Reward Using Operations II

- New id / title / slug: 750 / Maximum Collectible Reward / `maximum-collectible-reward`
- Old → new API: `maxTotalReward` → `maxCollectibleReward` (go `maxCollectibleReward`, rust `max_collectible_reward`, ts `maxCollectibleReward`); parameter `rewardValues`/`reward_values` → `rewards`
- Core algorithm / difficulty: sort + dedup, bitset 0/1 knapsack over totals via big-int mask/shift/OR / H4 (unchanged)
- Statement rewritten from spec: yes (collect-while-strictly-larger rule stated directly; "II" suffix dropped — the 3180 "I" variant is not in the bank)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[4,3,9,1]` → 16 (skipping the 1 beats taking it), `[2,2,5,5]` → 7 (duplicates never both used), `[3,8,3]` → 11 (simple chain)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Parameter rename exercised for the first time this wave: `rewardValues` → `rewards` (positional invocation means the staged source solutions still run — compatibility stayed green). The rename is recorded in the ledger fragment's `api` map so the central merge can apply it where names matter.
- `[4,3,9,1]` was chosen deliberately: the greedy "always take the smallest available" line fails here (1 + 3 = 4 strands the 4), which the explanation calls out.
