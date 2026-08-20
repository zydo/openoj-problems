# Solutions — Widest Letter Spread in a Substring

## Kadane over letter pairs

A substring's spread is the maximum over ordered letter pairs `(high, low)`
of `count(high) - count(low)`, so it is enough to solve a two-letter
subproblem for every ordered pair of letters occurring in `s` and keep the
overall best. For one pair, map `high` to `+1`, `low` to `-1`, every other
letter to `0`; the best substring sum of that mapped array — restricted to
substrings containing at least one `low` — is the pair's best spread. The
restriction is the whole subtlety: the spread is defined over letters
*present* in the substring, and a run of nothing but `high`s contributes 0,
not its length.

That makes Kadane's scan carry a companion value. `diff` is the best subarray
sum ending at the current letter, allowed to lack a `low` and clamped at `0`
whenever it would dip negative; `diff_with_low` is the best sum ending here
that is *guaranteed* to include a `low`. Reading a `high` bumps both. Reading
a `low`, a live companion becomes `max(diff_with_low - 1, diff)` — either
stretch the previous best-with-low across this `-1`, or bolt on the entire
low-free prefix ending here, never worse than starting over — while the first
`low` ever seen simply loads the companion with the current `diff` (this `-1`
included) and raises the flag. Other letters alter nothing. Only the
companion ever feeds the answer.

On `"ooppooop"`, the pair `(o, p)` walks the mapped values `+1 +1 -1 -1 +1
+1 +1`: the companion peaks at `3` across the substring `"ooppooo"`, where
five o's face two p's.

Each pair costs one pass, and only the letters occurring in `s` are paired,
so at most `26 × 25` ordered pairs run (`high == low` skipped). The answer
starts at `0`, which any single-letter substring attains, and the scan keeps
a handful of scalars.

**Complexity:** `O(26² · n)` time, `O(1)` space.
