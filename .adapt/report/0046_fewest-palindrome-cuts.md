## 46 — Palindrome Partitioning II

- New id / title / slug: 46 / Fewest Palindrome Cuts / `fewest-palindrome-cuts`
- Old → new API: `minCut` → `fewestPalindromeCuts` (rust `fewest_palindrome_cuts`; the source's `entrypoints` names rust only, and the adapted bundle keeps that shape); parameter `s` kept (conventional)
- Core algorithm / difficulty: prefix cut DP relaxed by centre expansion instead of a palindrome table / H3 (unchanged)
- Statement rewritten from spec: yes — inherits `0045_palindrome-partitions`' framing (consecutive **pieces** that "read the same in both directions") and adds the counting question
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `"sever" → 2` (one interior stretch, `s|eve|r`), `"otto" → 0` (whole string qualifies), `"abcdef" → 5` (nothing longer than one letter qualifies)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ (both the stock gate and the per-language variant) stale ✓ overlap ✓

### Notes

- **Family: `palin-part`, written straight after `0045_palindrome-partitions`.**
  The first sentence of the description is the sibling's first sentence with
  the enumeration ask replaced by the counting ask — same pieces vocabulary,
  same constraint bullet, follow-up in the same place. The two titles pair as
  *Palindrome Partitions* / *Fewest Palindrome Cuts*.
- Unlike 0131, this source has distinct method and rust tokens (`minCut` /
  `min_cut`), so the stock compatibility gate passes unaided — confirming the
  collision is purely about token identity, not about anything else in the
  bundle. The per-language variant was run anyway and agrees.
- Example 1 was corrected by running the reference: I first wrote `"sever"`
  expecting `1`, but a two-piece split never qualifies — `sev|er`, `se|ver`,
  `s|ever` all fail — so the answer is `2` (`s|eve|r`). Cuts are pieces minus
  one; the example explanation now says so explicitly, which the source never
  did.
- The guide's worked trace (`cut[1] + 1 = 1` feeding `cut[5] = 2`) was
  recomputed on paper against the actual relaxation order and then checked
  against the code — the first draft had the indices wrong, and a wrong trace
  in `solutions.md` is worse than none since the Solutions tab is read as
  ground truth.
