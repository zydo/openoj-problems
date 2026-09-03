# Solutions — Smallest String Keeping Every Letter

## Greedy construction against last-occurrence deadlines

The operation can shrink a letter only down to a single occurrence — once a
letter is unique in the string it can no longer be chosen — so the reachable
strings are exactly the subsequences of `s` that keep at least one occurrence
of every letter distinct in `s`. Duplicates may survive, and keeping them can
win: in `"cbacba"` the answer `"acb"` places its `c` immediately after the
required `a` because keeping an early spare `c` beats waiting for the
letter that comes next. Since a proper prefix compares
smaller than any of its extensions, the optimum also stops as soon as every
distinct letter has been placed.

So the result is built one character at a time. At each step, for every
letter, its earliest occurrence after the last picked position is a
candidate, and taking it is safe exactly when every not-yet-placed letter
still has an occurrence after that position. Writing `m1` for the smallest
last occurrence among those letters (and `m2` for the second smallest, used
when the candidate itself is the letter holding the tightest deadline), the
rule is: take the smallest letter whose earliest remaining occurrence lies
strictly before its deadline limit. The globally earliest remaining
occurrence always satisfies this, so the loop never stalls, and an exchange
argument at the first differing position shows this choice is optimal.

Each letter's occurrences live in one position list scanned by a monotone
pointer, so advancing past consumed positions costs `O(n)` overall; every
one of the at most `n` picked characters probes at most 26 letters, and the
needed-letter set shrinks at most 26 times before the loop ends. With the
alphabet a constant, the whole construction is linear.

**Complexity:** `O(n)` time, `O(n)` space.
