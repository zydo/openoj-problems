## 636 — Minimum Money Required Before Transactions

- New id / title / slug: 636 / Minimum Starting Cash for Any Deal Order / `minimum-starting-cash-for-any-deal-order`
- Old → new API: `minimumMoney` → `minimumStartingCash` (go `minimumStartingCash`, rust `minimum_starting_cash`, ts `minimumStartingCash`); parameter `transactions` → `deals` (scenario vocabulary: transaction/cost/cashback → deal/price/rebate)
- Core algorithm / difficulty: order-independent peak formula — total drain of net-losing deals plus max(largest losing rebate, largest profitable price), one linear pass / H3 (unchanged)
- Statement rewritten from spec: yes — money/deal scenario kept (the computation genuinely is one), reframed as "cash on hand" surviving every arrival order
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[[7,1],[2,0],[5,6]] → 13` (mixed; profitable price binds at the lowest point), `[[5,5],[0,8]] → 5` (no losing deals), `[[10,0]] → 10` (single outright drain)
- Constraints: domain unchanged (n ≤ 10⁵, values ≤ 10⁹), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Expected values for the public cases were confirmed two ways: brute force
  over all permutations (small n) and the reference algorithm — both agree.
- Source solution.py used snake_case locals, the other six languages camelCase
  or their own; the rename table covers both spellings so comments and code
  stay coherent per language.
