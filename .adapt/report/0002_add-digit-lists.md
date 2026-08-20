## 2 — Add Two Numbers

- New id / title / slug: 2 / Add Digit Lists / `add-digit-lists`
- Old → new API: `addTwoNumbers` → `addDigitLists` (go `addDigitLists`, rust `add_digit_lists`, ts `addDigitLists`); parameters `l1`, `l2` → `first`, `second`
- Core algorithm / difficulty: column addition with a carry over two linked lists / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: **yes** — example 1 keeps two three-node lists)
  - `[6,1,7] + [3,9,2] → [9,0,0,1]` (carry out), `[5] + [5] → [0,1]` (single digit), `[8,8,8,8,8] + [4,7] → [2,6,9,8,8]` (unequal lengths)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: **labels updated** — six digit `<text>` nodes, two structural comments, one carry annotation. No geometry touched.
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes for the pilot review

- The figure rule works as designed and is cheap: choosing a three-digit
  example first made the SVG a nine-line text edit. Picking the example to fit
  the picture, rather than the picture to fit the example, is the whole trick.
- The carry annotation `(2) + (5) = 7` had to become `(6) + (3) = 9` — same
  character count, so no re-layout. Worth preferring column sums that stay
  single-digit when the figure annotates one.
- Renaming parameters is free for the compatibility gate: the harness passes
  arguments positionally, so the source solution's own `l1`/`l2` still bind.
  But the bundle's *own* solutions must be renamed to match the regenerated
  starters, or the two disagree.
