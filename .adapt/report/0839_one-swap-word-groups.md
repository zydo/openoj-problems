## 0839 — Similar String Groups

- New id / title / slug: 839 / One-Swap Word Groups / `one-swap-word-groups`
- Old → new API: `numSimilarGroups` → `countSwapGroups` (go `countSwapGroups`, rust `count_swap_groups`, ts `countSwapGroups`); parameter `strs` → `words`
- Core algorithm / difficulty: pairwise mismatch test plus union-find over indices / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figures)
  - `["stop","tops","pots","spot"]` → 2 (two separate linked pairs)
  - `["team","meat","meta","mate"]` → 1 (a chain whose ends are not linked)
  - `["arc","car","rca"]` → 3 (three-cycles need two exchanges, so nothing links)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- `strs` → `words` is the only parameter rename in this wave. `words` occurs in
  the source solutions only inside comments, never as an identifier, so the
  post-merge rename pass cannot collide. Verified rather than assumed: the seven
  source solutions were staged with the full api map (including `strs` → `words`)
  and run against the adapted cases — 7/7 pass. Worth doing whenever a parameter
  rename goes into the ledger, since `adapt_gates.py --source` does *not* apply
  the api map (there is no ledger entry yet), so the local run does not exercise it.
- The statement calls the relation "linked" rather than reusing the source's
  adjective. The reference solutions keep their `similar` helper — PROTOCOL says
  rename only API identifiers — so `solutions.md` names that helper once where it
  describes the pair test.
- Hidden case `["xyz","xyz","abc","xyz","abc"]` violates the stated anagram
  guarantee. It is pre-existing hidden data and was left byte-identical; the
  reference algorithm handles it, but it is a latent inconsistency in the source
  bundle rather than something the adaptation introduced.
