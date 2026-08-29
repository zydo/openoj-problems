# problems-extend — the ORIGINAL-form corpus

3,179 bundles, one per crawl problem not covered by the bettercode
adapt set: statements verbatim from `~/code/lc-crawl` (restored
superscripts, nothing invented), cases from structurally different
oracle cross-checks, and the canonical solution in every language the
crawl's wire family ships. Conventions and the wire-class map live in
`openoj/docs/AUTHORING-GUIDE.md`; the bundle format is
`../FORMAT.md` (authoritative).

Shard layout: `NNNN-NNNN/` hundreds buckets,
`shard = (id - 1) // 100 * 100 + 1`; bundle key `<id>_<slug>` with the
id zero-padded to 4 digits. Whole-set consistency is checked by
`openoj/.localonly/verify_corpus.py` (coverage, slug parity, shard
placement, file shape) — run it after any tree surgery.

## Unauthored ids (14)

The roster file was removed in the 2026-08-28 cleanup; the set below is
what `verify_corpus.py` derives, and this list is its human-readable
copy. When one is authored, delete its line and re-run the verifier.

- 1474 delete-n-nodes-after-m-nodes-of-a-linked-list
- 1485 clone-binary-tree-with-random-pointer
- 1490 clone-n-ary-tree
- 1506 find-root-of-n-ary-tree
- 1516 move-sub-tree-of-n-ary-tree
- 1522 diameter-of-n-ary-tree
- 1570 dot-product-of-two-sparse-vectors
- 2755 deep-merge-of-two-objects
- 2757 generate-circular-array-values
- 2758 next-day
- 2759 convert-json-string-to-object
- 2773 height-of-special-binary-tree
- 3263 convert-doubly-linked-list-to-array-i
- 3294 convert-doubly-linked-list-to-array-ii

Partial authoring scratch survives for 2755 and 2759 under
`../.localonly/`; the others start fresh. Suspect a corpus/judge-data
contradiction? Do not edit frozen `cases.json` — record it in
`../CORPUS-FLAGS.md` with evidence.
