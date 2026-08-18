## 0721 — Accounts Merge

- New id / title / slug: 721 / Merge Contact Records / `merge-contact-records`
- Old → new API: `accountsMerge` → `mergeContactRecords` (go `mergeContactRecords`, rust `merge_contact_records`, ts `mergeContactRecords`); parameter `accounts` → `records`
- Core algorithm / difficulty: disjoint-set union keyed by the address strings, then a reading-order second pass / H3 (unchanged)
- Statement rewritten from spec: yes — it states outright that the name identifies nobody while an address does, and derives the output order from the judge's exact comparison rather than presenting it as an afterthought
- Examples newly constructed: yes (structure-preserving: n-a — no figures)
  - four entries with one shared address plus a same-name stranger; a three-entry chain fused only by the last entry; two same-named people whose output order is deliberately not alphabetical
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7 (cpp, go, java, js, py, rust, ts)
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The domain (people, names, email addresses) is the computation itself, not an
  invented scenario, so it stays; the independence comes from the wording and
  from a parameter rename (`accounts` → `records`, unused as an identifier in
  any source solution).
- The output-order rule is the trap in this problem. Both the statement and the
  guide had to be written to make first-sighting order fall out of the second
  pass, since a pass over the disjoint-set structure would produce a different
  and equally defensible order that the exact comparison would reject.
