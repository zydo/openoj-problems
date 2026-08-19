## 1092 — Shortest Common Supersequence

- New id / title / slug: 1092 / Shortest Common Supersequence / `shortest-common-supersequence` — **title kept**
- Old → new API: `shortestCommonSupersequence` kept (canonical algorithm name, per the 0072 Edit Distance precedent); parameters `str1` → `s`, `str2` → `t` (go/ts/rust entrypoints unchanged)
- Core algorithm / difficulty: suffix-pair LCS table + greedy reconstruction walk / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `"mango"`/`"goman"` → `"gomango"` (crossing share), `"piano"`/`"anova"` → `"pianova"` (middle overlap), `"kettle"`/`"tlee"` → `"kettlee"` (second word fragmented through the first)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (tree run) verify ✓ (7/7 languages, 19/19 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- `comparison` is `exact`, so the "answer is unique" guarantee had to be
  *verified* for the new examples, not assumed: a merge-path enumerator
  (frozenset DP over suffix pairs, counting distinct minimal supersequences)
  confirmed each example has exactly one. Scratch: `.localonly/wave-d-02/scs.py`.
- First draft of that checker under-counted (missing the shared-head branch
  when `s[i] == t[j]`); it reported the source's own `"abac"`/`"cab"` as
  non-unique, which was the tell. Sanity-check new tooling against known
  data before trusting it.
- Parameter rename `str1`/`str2` → `s`/`t` grepped safe first: the Rust
  port already uses locals `a`/`b`, so `a`/`b` were unavailable; `s`/`t`
  appear in no source solution.
