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

## Unauthored ids (2)

The roster file was removed in the 2026-08-28 cleanup; the set below is
what `verify_corpus.py` derives, and this list is its human-readable
copy. When one is authored, delete its line and re-run the verifier.
Both remain unauthored by design pending new judge contracts: 1570
(two-class interactive) and 2757 (generator semantics).

- 1570 dot-product-of-two-sparse-vectors
- 2757 generate-circular-array-values

Suspect a corpus/judge-data contradiction? Do not edit frozen
`cases.json` — record it in `../CORPUS-FLAGS.md` with evidence.
