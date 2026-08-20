## 252 — Couples Holding Hands

- New id / title / slug: 252 / Fewest Pairing Swaps / `fewest-pairing-swaps`
- Old → new API: `minSwapsCouples` → `fewestPairingSwaps` (go
  `fewestPairingSwaps`, rust `fewest_pairing_swaps`, ts `fewestPairingSwaps`);
  parameter `row` → `line`
- Core algorithm / difficulty: greedy left-to-right slot repair with a
  value→index table, optimal by the slot-graph cycle bound / H4 (unchanged)
- Statement rewritten from spec: yes — dropped the seating scenario entirely
  and states the task over an array of `0 .. 2n-1` with `x ^ 1` partnership
  described arithmetically
- Examples newly constructed: yes (structure-preserving: n/a — no figures)
  - `[2,0,3,1,4,5] → 1` (one exchange), `[3,1,4,0,2,5] → 2` (all three slots
    in a single group), `[5,4,1,0,3,2] → 0` (already settled)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a
  compatibility ✓ stale ✓ overlap ✓

### Notes

- The source's whole vocabulary — couples, seats, rows, people — is scenario,
  not computation, so the rewrite keeps only the arithmetic: a permutation of
  `0 .. 2n-1`, partnership by the low bit, width-two slots. That removes the
  overlap risk at the root rather than paraphrasing around it.
- `line` was grepped against all seven source solutions before adoption; none
  of them declares such a local, so the staged source solutions rename cleanly.
- The reference's comments named the old terminology ("couples are (0,1),
  (2,3), …") and its `person` locals carried the seating framing; both were
  updated with the API rename, which is the one edit the protocol allows to a
  copied `solution.*`.
