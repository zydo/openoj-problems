# Solutions — Contains An Anagram

## Sliding Window Frequency Count

Order is exactly the information an anagram test throws away, so replace each
string by its letter census — a vector of 26 counts — and the question becomes
whether any stretch of `text` has the same census as `pattern`. Only stretches
of length `len(pattern)` can, which leaves one candidate per starting position.

Recomputing a census per candidate would be quadratic, but neighbouring
candidates differ by two characters. The solution therefore builds `need` from
`pattern` and `window` from the opening stretch of `text`, then advances the
window one position at a time: the arriving character's count goes up, the
departing character's — the one `len(pattern)` positions back — goes down. After
each move the two vectors are compared outright, and equality means the current
stretch is a rearrangement of `pattern`.

A `pattern` longer than `text` is rejected before any of this begins. That test
is not only an optimisation: it is what keeps the initial slice of `text` from
running off the end.

Each character enters and leaves the window once, and each comparison costs a
fixed 26 steps because the alphabet is fixed. The two count vectors are the only
storage, so the space does not grow with the input at all.

**Complexity:** `O(26n)` time, `O(1)` space.
