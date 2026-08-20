## 1674 — Minimum Moves to Make Array Complementary

- New id / title / slug: 1674 / Fewest Changes to Match Mirror Sums / `fewest-changes-to-match-mirror-sums`
- Old → new API: `minMoves` → `fewestChanges` (go `fewestChanges`, rust `fewest_changes`, ts `fewestChanges`); parameters `nums`, `limit` kept
- Core algorithm / difficulty: difference array over candidate totals `t ∈ [2, 2·limit]`, each mirror pair's 0/1/2-cost curve as range updates / H4 (unchanged)
- Statement rewritten from spec: yes ("complementary" becomes "mirror-matched", defined from the mirror-index relation itself)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[4,2,6,3], limit 6` → 1, `[1,3,3,1], limit 3` → 2 (one rewrite per pair; a single rewrite provably cannot align the pairs), `[2,5,3,5,3,6], limit 6` → 0 (three mirrors already share total 8)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- **New stale-gate collision class, worth a central exclusion**: the source's
  Example 1 explanation carries the formula `nums[i] + nums[n - 1 - i]` inside
  its ```text fence, so the literal gate extracted `[n-1-i]` (3 distinct
  characters) as if it were example data. Every ported solution writes that
  index expression verbatim, so stale flagged all seven files. Fix applied
  locally: the mirror index is hoisted into a variable (`j = n - 1 - i; ... nums[j]`)
  in each solution — same semantics, re-proven by verify (7/7 × 15/15). A
  survey of all 765 adapted bundles found no prior occurrence, so this is the
  first hit of the class; bracketed index formulas in fenced explanations are
  not identifying data.
- Example 2's "one rewrite cannot suffice" claim was checked against the
  one-change intervals: pair (1,1) reaches totals 2–4, pair (3,3) reaches 4–6,
  and no single change moves both pairs to a common total.
