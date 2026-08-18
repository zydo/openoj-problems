## 0588 — Design In-Memory File System

- New id / title / slug: 588 / File Tree / `file-tree`
- Old → new API: class `FileSystem` → `FileTree`;
  `addContentToFile` → `appendToFile`; `readContentFromFile` → `readFile`;
  `ls` and `mkdir` **kept** (the domain's universal vocabulary, cf. the
  `get`/`put` decision in 0146)
- Core algorithm / difficulty: path-compressed tree of hash-mapped children,
  one walk per operation / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - seven ops showing implicit intermediate directories and file-path `ls`;
    eight ops showing sorted multi-child listing and append accumulation;
    four ops showing deep auto-creation and empty-directory listing
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: python3 + java (design problems offer only these)
- Figures: none
- Gates: check ✓ verify ✓ (2/2 languages, 17/17 cases) sandbox deferred to the
  batch run (design) compatibility ✓ stale ✓ overlap ✓

### Notes

- Hidden cases: only the `actions` strings were rewritten (`FileSystem` →
  `FileTree`, plus the two method renames); every parameter list and every
  expected value is byte-identical to the source's, verified programmatically.
- The compatibility gate derives design renames from the structured
  `class_name`/`methods[].name` fields, so it ran green before the fragment
  reached the ledger — no ledger dependency for this kind.
- `appendToFile` was chosen over the source's `addContentToFile` because the
  append-or-create behavior is exactly what the name should say; the statement
  spells both halves of that behavior out.
