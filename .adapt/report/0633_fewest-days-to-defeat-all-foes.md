## 633 — Minimum Time to Kill All Monsters

- New id / title / slug: 633 / Fewest Days to Defeat All Foes / `fewest-days-to-defeat-all-foes`
- Old → new API: `minimumTime` → `fewestDaysToDefeatAll` (go `fewestDaysToDefeatAll`, rust `fewest_days_to_defeat_all`, ts `fewestDaysToDefeatAll`); parameter `power` kept
- Core algorithm / difficulty: bitmask DP over defeated sets, `ceil(power/gain)` per transition / H3 (unchanged)
- Statement rewritten from spec: yes — monsters/mana retold as foes/energy with fresh mechanics prose; the defeat-and-regrow loop is the computation itself, so a light scenario remains
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[2,7,1] → 5` (weakest-first, rate grows), `[5] → 5` (lone foe, rate stays 1), `[1,1,1,1] → 4` (one kill per day)
  - cross-checked against a brute-force search over defeat orders
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
