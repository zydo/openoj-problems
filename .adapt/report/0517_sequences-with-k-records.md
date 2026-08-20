## 517 — Number of Ways to Rearrange Sticks With K Sticks Visible

- New id / title / slug: 517 / Sequences With K Records / `sequences-with-k-records`
- Old → new API: `rearrangeSticks` → `countKRecordSequences` (go `countKRecordSequences`, rust `count_k_record_sequences`, ts `countKRecordSequences`); parameters `n`, `k` kept (conventional)
- Core algorithm / difficulty: DP on the smallest value, `f(i,j) = f(i-1,j-1) + (i-1)·f(i-1,j)`, one rolling row / H3 (unchanged)
- Statement rewritten from spec: yes — sticks-visibility scenario dropped; framed as rows of the integers 1..n where a **record** is an element larger than everything to its left (left-to-right maxima; the count is the unsigned Stirling number c(n,k))
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `n=4, k=2 → 11`, `n=6, k=1 → 120` (closed form (n-1)!, shows the k=1 boundary), `n=20, k=5 → 745534512` (a reduction-mod case)
- Constraints: domain unchanged (1 ≤ n ≤ 1000, 1 ≤ k ≤ n), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 14/14 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The old "visible from the left" becomes "record"; solution comments
  saying "i sticks, j visible" now read "i values, j records".
- Example 1 lists two qualifying rows rather than all eleven — eye-followable
  without a page of enumeration.
