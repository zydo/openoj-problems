## 180 — Optimal Account Balancing

- New id / title / slug: 180 / Fewest Debt Settlements / `fewest-debt-settlements`
- Old → new API: `minTransfers` → `fewestSettlements` (go `fewestSettlements`, rust `fewest_settlements`, ts `fewestSettlements`); parameter `transactions` → `ledger`
- Core algorithm / difficulty: net the balances, then subset DP maximizing the number of zero-summing groups / H4 (unchanged)
- Statement rewritten from spec: yes — the settlement payments are described as new money movements distinct from the recorded ones, which the source left to inference
- Examples newly constructed: yes (structure-preserving: n/a — no figures)
  - `[[0,1,15],[2,3,8]] → 2` (two unrelated pairs), `[[0,1,20],[1,2,20]] → 1` (middleman nets out), `[[0,1,2],[0,2,4],[3,4,5]] → 3` (a three-person group plus a pair)
- Constraints: domain unchanged (8 entries, ids under 12, amounts 1..100), presentation rewritten with the id bound split per field
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Renaming the parameter with a word-boundary regex rewrote prose inside a
  comment as well: "Fewest transactions = n balances …" became "Fewest ledger =
  …" in all seven solutions. The rename is still the right tool, but every
  solution needs a read-through afterwards — a mechanical rename can produce
  grammatical nonsense that no gate catches.
- `ledger` was chosen after grepping all seven source solutions for it as an
  identifier (zero hits). `transfers`, the more obvious rename, appears in a
  comment in every source solution and would have been a needless risk.
