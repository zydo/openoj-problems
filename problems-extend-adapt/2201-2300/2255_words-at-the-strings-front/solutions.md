# Solutions — Words at the String's Front

## Single linear scan with a startswith test

A `word` sits at the front of `s` precisely when `s` begins with `word`,
which every language's standard library exposes directly
(`s.startswith(word)`, `word == s.substr(0, word.length)`,
`s.rfind(word) == 0`, and so on). Since the answer is a plain count, the
whole problem is one pass over `words`: for each `word`, test whether `s`
starts with it and add one to the running total when it does.

The subtlety is only that `word` may be longer than `s`. The standard
starts-with test handles that natively — a string can never begin with a
longer string — so no length guard is needed. Duplicates in `words` each
count separately, and an empty comparison never arises because the
constraints fix both `word` and `s` to be non-empty.

Every word is touched exactly once and the starts-with test costs
`O(|word|)`, so the work is linear in the total input. No auxiliary storage
is used.

**Complexity:** `O(Σ|wordᵢ|)` time (each word is compared once), `O(1)` space.
