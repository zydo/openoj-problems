## 229 — Binary Search

- New id / title / slug: 229 / Binary Search / `binary-search` — **kept**
- Old → new API: none. `search`, `nums`, `target` all kept
- Core algorithm / difficulty: closed-interval binary search / H1 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figures)
  - `[-8,-3,1,4,6,10,15], target=-3 → 1`; same array, `target=7 → -1`; `[2], target=2 → 0`
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- This is the bundle ADAPT names outright as the exception: *Binary Search* is
  an unavoidable generic term, so title, slug and the `search` entry point are
  all kept and the ledger's `api` map is empty. The gates cope with that
  cleanly — the stale gate subtracts names shared by both bundles, so a
  no-rename bundle passes it vacuously, and compatibility runs the source
  solutions with zero substitutions.
- What that leaves is a pure statement rewrite, and the overlap gate is then
  the only thing standing between "adapted" and "copied". Worth flagging for
  the protocol: for a keep-the-name bundle, two of the three gates prove
  nothing, so the prose has to be visibly independent — here the description
  leads with the array's properties rather than the search verb, and the hints
  talk about a window of positions rather than `lo`/`hi`.
