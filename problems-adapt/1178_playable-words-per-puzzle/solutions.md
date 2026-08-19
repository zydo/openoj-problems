# Solutions — Playable Words per Puzzle

## Bitmask submask enumeration

Whether a word is playable against a puzzle depends on one thing: which
letters the word uses. Repetition and order are irrelevant, so each word
reduces to its 26-bit letter mask, one bit per letter of the alphabet. The
test itself is two containment checks — the word's mask must sit inside the
puzzle's mask, and it must carry the key letter's bit.

The counts are too large to test word by word: every word against every
puzzle is 10⁵ × 10⁴ comparisons. The seven-letter bound on puzzles is the
escape hatch. Bucket the words by mask once (`counts`), summing duplicates
into their shared bucket. Then, per puzzle, enumerate every submask of the
puzzle's mask with the standard descent `sub = (sub - 1) & puzzle_mask`,
which visits exactly the masks a playable word could have — at most 2⁷ − 1 =
127 of them — and add `counts.get(sub, 0)` whenever `sub` carries the key
letter's bit.

The descent starts at the full puzzle mask and stops when it reaches zero,
so only non-empty letter sets are visited; words always have at least four
letters, so the zero mask never appears in a bucket. Each puzzle costs a
bounded 127 steps whatever the word list holds, which is what makes the
whole exchange tractable: the words are read once, during bucketing.

Walked on Example 1: `tide` and `edit` use the same four letters, so they
share one bucket; `tilde` has its own, and `doted` a third with an `o` bit.
For `"tidelrp"`, keyed on `t`, the descent reaches the {t,i,d,e} mask and
the {t,i,l,d,e} mask, both carrying the `t` bit — bucket sizes 2 and 1 —
while every mask containing `o` is skipped because it is not a submask of
the puzzle at all.

**Complexity:** `O(C + 127·P)` time — `C` the total length of the words,
`P` the number of puzzles — and `O(U)` space for the buckets, `U` the
number of distinct word masks.
