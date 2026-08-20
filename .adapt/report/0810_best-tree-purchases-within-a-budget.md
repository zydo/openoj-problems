## 810 — Maximum Profit from Trading Stocks with Discounts

- New id / title / slug: 810 / Best Tree Purchases Within a Budget / `best-tree-purchases-within-a-budget`
- Old → new API: `maxProfit` → `bestTreePurchases` (go `bestTreePurchases`, rust `best_tree_purchases`, ts `bestTreePurchases`); parameters `present` → `price`, `future` → `reward`, `hierarchy` → `edges` (`n`, `budget` kept)
- Core algorithm / difficulty: tree knapsack, two budget profiles per node (parent bought / not) merged by bounded convolution with prefix maxima / H4 (unchanged)
- Statement rewritten from spec: yes (employee/CEO/stock story removed; items with price, reward, and a parent-purchase discount)
- Examples newly constructed: yes (structure-preserving: yes — same three drawn topologies: 2-chain, 3-star, 3-chain)
  - `[2,5]/[7,6] b 4` → `9` (both bought, spend hits budget exactly), `[5,7,4]/[9,10,6] b 9` → `11` (third child skipped: 5+3+2 = 10 > 9), `[6,2,7]/[10,5,11] b 10` → `16` (whole chain, cascading discounts, exact spend)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated (3) — arrow geometry untouched; "direct boss" → "direct parent", pay/reward/gain labels, data comments, and captions rewritten
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a (function) compatibility ✓ stale ✓ overlap ✓

### Notes

- Parameter renames (`present`→`price` etc.) are recorded in the ledger `api`
  map, so the compatibility gate renames them in the staged source too —
  harmless there, and it keeps `present`/`future`/`hierarchy` out of the
  adapted tree entirely. Candidate names were grepped against all seven source
  solutions first (`price`/`reward`/`edges` appear only in prose comments).
- Comment terminology beyond identifiers ("boss", "CEO") was rewritten to
  parent/root per ADAPT.md's "update comments naming old terminology".
- Every example optimum verified by a subsets brute force that first
  reproduced all source public cases.
