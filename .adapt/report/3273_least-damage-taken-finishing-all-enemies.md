## 3273 — Minimum Amount of Damage Dealt to Bob

- New id / title / slug: 3273 / Least Damage Taken Finishing All Enemies / `least-damage-taken-finishing-all-enemies`
- Old → new API: `minDamage` → `leastDamage` (go `leastDamage`, rust `least_damage`, ts `leastDamage`); parameters `power`, `damage`, `health` kept
- Core algorithm / difficulty: exchange argument on adjacent kills, sort by descending damage/kill-time ratio, one sweep accumulating `remaining · t_i` / H3 (unchanged)
- Statement rewritten from spec: yes (second-person fight framing replaces the named Bob; the strike-after-taking-damage order kept explicit)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `p=1,d=[9,3],h=[9,1]` → 93 (bigger damage has the worse ratio — naive order pays 111), `p=1,d=[6,2],h=[3,1]` → 26 (equal ratios, order-immune), `p=5,d=[7],h=[12]` → 21 (lone enemy, ceiling division)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (static tier full-tree run — bundle absent from failure list) verify ✓ (7/7 languages, 15/15 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The first example is constructed so that "biggest damage first" is visibly
  wrong (111 vs 93), which the source's examples never demonstrated — its
  example 1 happens to have ratio order equal to damage order.
