# Corpus flags — deferred decisions on judge data and statement wording

Each item below is a place where committed judge data or statement prose
contradicts something an authoring pass proved. An item belongs here only
when fixing it needs an authored-content decision (frozen cases.json /
statement wording), not a code change; resolve top-down and remove the
entry once it is fixed (see git history for the resolved entries this
file has carried).

## Open items

### 3983_nesting-with-one-wildcard (3901-4000): reference is a heuristic that the frozen data never exposes

`3983_nesting-with-one-wildcard` (adapted from source
`problems-originals/3901-4000/3983_subsequence-after-one-replacement`): the stated semantics
are "replace any one character with any letter, is target then a
subsequence?", but the reference solution in every language implements a
rightmost-greedy suffix match, which is not exact (counterexample:
`s="hole"`, `t="hello"` — replacing `s[1]` with `e` gives `"hele"`, a
genuine subsequence, yet the reference answers false). Authoring-pass
audit: all 1,046 frozen hidden cases agree with BOTH the reference and a
brute-force any-letter oracle (zero disagreements), and the fresh public
cases are truthful under both semantics, so the committed bundle is fully
self-consistent today. Risk: any future case generation for this bundle
that samples adversarial `(s, t)` pairs could expose the blind spot and
make the reference "fail" its own cases. Decision deferred: either keep
the heuristic (and constrain future case generation) or re-derive an
exact reference (any-position scan) across all 7 languages. Do NOT edit
the frozen cases.json or swap the reference quietly.

No other items are currently open.

## Resolution log

(empty — no items are currently open)
