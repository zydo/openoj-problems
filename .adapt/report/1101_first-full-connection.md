## 1101 — The Earliest Moment When Everyone Become Friends

- New id / title / slug: 1101 / First Full Connection / `first-full-connection`
- Old → new API: `earliestAcq` → `firstFullConnection` (go `firstFullConnection`, rust `first_full_connection`, ts `firstFullConnection`); parameter `logs` → `events`, `n` kept
- Core algorithm / difficulty: sort events by time, disjoint-set replay, counter reaches 1 / H2 (unchanged)
- Statement rewritten from spec: yes (social-group framing replaced by the abstract elements/links task it always was)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[[5,0,1],[2,1,2],[9,0,3],[7,2,3]] n=4` → 7 (unsorted input, final link never needed); `[[900000000,3,4],[5,0,2],[600,1,3],[750000000,2,4]] n=5` → 900000000 (1e9-scale times out of order, completing link listed first); `[[1,0,1],[2,2,3]] n=4` → -1 (never connected)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (tree run; its only failures are other parts' bundles 0736/1039, plus a transient `.compat` from a concurrent gate) verify ✓ (7/7 languages, 15/15 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- My example-2 draft guessed the answer wrong by hand (750000000 vs the
  correct 900000000 — the third link leaves two groups, the last one joins
  them). The computed-expected discipline caught it; explanations were
  written from the computed value, not the guess.
- The whole-tree `check.py` run raced a concurrent compatibility gate (a
  `.compat` staging dir in 1039, another part's bundle). Per-bundle gates
  are unaffected; the main agent's tree run should not overlap chunk gates.
- `events` grepped unused as an identifier in every source solution (only
  prose comments say "events"); `logs` rename is safe.
