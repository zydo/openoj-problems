## 0820 — Short Encoding of Words

- New id / title / slug: 820 / Packed Word Store / `packed-word-store`
- Old → new API: `minimumLengthEncoding` → `packedStoreLength` (go `packedStoreLength`, rust `packed_store_length`, ts `packedStoreLength`); parameter `words` kept (conventional)
- Core algorithm / difficulty: keep only the words that are not a proper suffix of another, sum `len + 1` / H2 (unchanged)
- Statement rewritten from spec: yes — recast as "pack the words into one `'#'`-terminated store", which names the object the encoding actually is instead of describing an index array
- Examples newly constructed: yes (structure-preserving: n-a, no figures)
  - `["planet","net","ban","an"] → 11`, `["fox","fox","ox"] → 4` (duplicates share a slot), `["kiwi","plum","fig"] → 14` (nothing merges)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7 (cpp, go, java, js, py, rust, ts)
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n-a compatibility ✓ stale ✓ overlap ✓

### Notes

- The source statement carries an `indices` array that the judged API never sees;
  it is scaffolding for the definition, not part of the task. Dropping it and
  defining readability directly ("read from `p` to the first `'#'`") gave a
  shorter statement with the same spec, and removed the biggest block of shared
  phrasing before the overlap gate ever ran.
- The duplicate-word example is worth keeping in any rewrite of this family: the
  proper-suffix rule is the one thing a reader gets wrong, and `["fox","fox","ox"]`
  makes the distinction visible in four characters.
