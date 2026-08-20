## 482 — Stone Game VI

- New id / title / slug: 482 / Stone Draft with Rival Values / `stone-draft-with-rival-values`
- Old → new API: `stoneGameVI` → `stoneDraft` (go `stoneDraft`, rust `stone_draft`, ts `stoneDraft`); parameters `aliceValues`, `bobValues` kept
- Core algorithm / difficulty: sort indices by `aliceValues[i] + bobValues[i]` descending, alternate picks, sign of the ledger / H3 (unchanged)
- Statement rewritten from spec: yes (game reframed as a draft: taking banks your worth and denies the rival theirs)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[2,5] / [3,1]` → 1 (Alice 5, Bob 3), `[3,1] / [1,4]` → 0 (denial pick: Alice takes her 1 to keep Bob from his 4), `[1,2,3] / [4,5,9]` → −1 (Bob by one; reused in the guide)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Family naming: the bank carries only Stone Game II (1140, adapted to
  *Stone Piles Game II*) and III (1406, *Stone Piles Game III*) besides this
  one — no I/IV/V, so a "… Game VI" continuation would dangle. A descriptive
  title in the spirit of 1046/1049 (`greedy-stone-smashing`,
  `optimal-stone-smashing`) keeps the stone kinship while staying
  self-explanatory.
- Example 2 is the pedagogical heart: the mover takes a stone worth little
  to herself purely to deny the rival — the exact fact Hint 1 teaches.
