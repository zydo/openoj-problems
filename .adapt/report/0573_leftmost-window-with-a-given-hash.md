## 573 — Find Substring With Given Hash Value

- New id / title / slug: 573 / Leftmost Window With a Given Hash / `leftmost-window-with-a-given-hash`
- Old → new API: `subStrHash` → `firstHashWindow` (go `firstHashWindow`, rust `first_hash_window`, ts `firstHashWindow`); parameters `s`, `power`, `modulo`, `k`, `hashValue` kept
- Core algorithm / difficulty: rolling hash swept right-to-left, drop `val · power^(k-1)` / multiply by `power` / add incoming / H3 (unchanged)
- Statement rewritten from spec: yes — the hash formula restated with the alphabet-seat valuation spelled out
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `"coffee", 3, 20, 2, 4 → "ff"` (mid-string first hit), `"banana", 7, 50, 3, 48 → "ana"` (repeat window; leftmost wins), `"data", 5, 1000, 4, 634 → "data"` (whole-string window)
  - verified no public input duplicates a hidden one
- Constraints: domain unchanged (`k ≤ |s| ≤ 2·10⁴`, `power`/`modulo` up to `10⁹`, `hashValue < modulo`, lowercase, existence guarantee), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Example construction needs a helper: pick the word first, compute every
  window's hash with the formula, then choose a `hashValue` whose first
  occurrence sits where you want it (and, for the repeat-window example,
  occurs twice). Doing this by hand invites off-by-one hashes; the scratch
  script lives in `.localonly/wave-b-05/exp_2156.py`.
- The hash formula itself is functional spec, not prose — kept numerically
  identical, formatting and surrounding language rewritten.
