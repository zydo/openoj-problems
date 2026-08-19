## 3068 — Find the Maximum Sum of Node Values

- New id / title / slug: 3068 / Largest Node Sum With Edge XORs / `largest-node-sum-with-edge-xors`
- Old → new API: `maximumValueSum` → `largestNodeSum` (go `largestNodeSum`, rust `largest_node_sum`, ts `largestNodeSum`); parameters `nums`, `k`, `edges` kept
- Core algorithm / difficulty: even-flip parity greedy over XOR deltas (edge list irrelevant beyond connectivity) / H3 (unchanged)
- Statement rewritten from spec: yes (Alice framing dropped)
- Examples newly constructed: yes (structure-preserving: yes)
  - `[2,7,2], k=5, star [[0,1],[0,2]]` → 21 (two gainers one edge apart; same drawn star as the figure — node values, k, arrays, and captions label-edited, geometry untouched); `[4,1], k=3, [[0,1]]` → 9 (both endpoints gain); `[7,7,7,7], k=1, path` → 28 (nothing gains)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated — `figures/example-1.svg` values 1/2/1 → 2/7/2, k = 3 → 5, before/after rows, the XOR annotation, and the sum caption; blue end-cells still mark the two changed positions
- Gates: check ✓ verify ✓ (7/7 languages, 19/19 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓ (after one caption rewording)
- Sandbox: function kind, deferred to batch run

### Notes

- First overlap-gate failure of this wave: the figure caption's "turns both 2s
  into 7s for a sum of 21" matched the source caption's shape because the
  shingle tokenizer strips digits — "turns both s into s for a sum of" is a
  7-word match even with every number changed. Captions need new verbs, not
  just new data.
- The parity-greedy expecteds were cross-checked against a brute force over
  edge subsets (the operational model), not against a second copy of the same
  greedy.
