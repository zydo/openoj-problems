# Solutions — Distinct Doubled Substrings

## Exhaustive Half Comparison with a Set

A substring qualifies precisely when its length is even and its front half
equals its back half, so every doubled substring corresponds to one pair of
numbers: a half length `half` and a starting index `i` at which
`text[i .. i+half)` and `text[i+half .. i+2·half)` agree. The solution
walks `half` from 1 up to `n/2`, tries every start that leaves room for the
full two halves, tests equality with a plain slice comparison, and on
success drops the whole substring into a set. Duplicates are absorbed by
the set — equal strings land in the same bucket — so its final size is
exactly the count asked for.

Nothing is missed and nothing slips in: each doubled substring registers at
its own `(half, i)` and nothing else, and a substring whose halves differ
cannot pass the comparison.

In `moonmoonmoonmoon`, `half = 4` and `i = 0` compares `moon` with `moon`
and records `moonmoon`; the same string reappears at `i = 4` and `i = 8`,
adding nothing new, while `half = 1` catches `oo` wherever two `o`s meet.

The loops visit O(n²) `(i, half)` pairs and each visit may compare `half`
characters, so the adversarial bound is Θ(n³) — reached only by highly
repetitive text where halves match again and again. At n ≤ 2000 this
remains workable: the comparisons run at memcmp speed and a mismatch
usually dies on the first character.

A string consisting of one letter repeated shows the worst storage shape:
it yields exactly one doubled substring per even length, so the set ends
up holding `n/2` strings of growing length.

**Complexity:** `O(n³)` time worst case, `O(n²)` space.
