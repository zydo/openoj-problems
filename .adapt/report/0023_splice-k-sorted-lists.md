## 0023 — Merge k Sorted Lists

- New id / title / slug: 23 / Splice K Sorted Lists / `splice-k-sorted-lists`
- Old → new API: `mergeKLists` → `spliceKSortedLists` (go `spliceKSortedLists`, rust `splice_k_sorted_lists`, ts `spliceKSortedLists`)
- Core algorithm / difficulty: pairwise tournament merging of sorted chains / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes — the tournament figure draws 3+3+2 nodes, so the first example keeps those lengths)
  - `[[2,8,9],[3,5,11],[6,7]]`, `[[],[-4,-4,0],[]]` (null heads, negatives, ties), `[[13],[-2],[7],[0]]` (four singletons)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated (`solution-tournament-rounds.svg` — values in all three rows, plus "merge"/"bye" wording)
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Kinship: 0021 was adapted as "Splice Two Sorted Lists", so this one is
  "Splice K Sorted Lists" — the two-list and k-list problems stay a visible
  family, and the verb matches.
- The source showed `lists = []` and `lists = [[]]` as two of its three
  examples. Both are forced by the constraints and cannot be "newly
  constructed", so the degenerate cases moved into the description prose
  ("the array itself may be empty, and any head in it may be null") and the
  three examples are all substantive. Public/hidden counts are unaffected.
- The figure's node boxes are 34px wide and hold a two-digit value (`11`)
  comfortably; label edits on this family do not need geometry changes as
  long as the list lengths match.
- `adapt_gates.py` resolves the source from `.adapt/ledger.json`, which
  batch workers do not write, so every run here passes `--source` explicitly.
