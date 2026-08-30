# problems-extend — the ORIGINAL-form corpus

3,193 bundles, one per crawl problem not covered by the bettercode
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

## Unauthored ids (0)

The roster file was removed in the 2026-08-28 cleanup; this section is
the human-readable copy of what `verify_corpus.py` derives — run it
after any tree surgery. Coverage is complete: all 4,018 crawl problems
are authored. The last two landed 2026-08-30: 1570 via the judge's
multi-instance design contract (`{"new": handle}` actions, `"on"`
dispatch, `{"$ref": handle}` instance arguments), and 2757 as a JS/TS
interactive bundle with a provided `CycleCase` generator driver.

Suspect a corpus/judge-data contradiction? Do not edit frozen
`cases.json` — record it in `../CORPUS-FLAGS.md` with evidence.
