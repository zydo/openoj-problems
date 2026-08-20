# Solutions — Substring Palindrome Queries

## Prefix Parity Bitmasks

Shuffling erases everything about a stretch except its letter counts, and a
multiset of letters arranges into a palindrome exactly when at most one
letter has an odd count — that one may sit in the middle. An overwrite
converts one letter into another and so flips two parities at once: the
number of overwrites a stretch needs is therefore `odd / 2`, where `odd`
counts the letters with odd frequency — each overwrite pairs two odd
letters, and a lone survivor takes the centre slot for free.

With up to 10⁵ queries, no query may scan its stretch. Precompute
`prefix[i]`, a 26-bit mask of the parities of the letter counts in
`s[:i]`: each step is one XOR,
`prefix[i+1] = prefix[i] ^ (1 << (ord(ch) - ord('a')))`, since one more
occurrence toggles that letter's parity. The parity mask of the stretch
`s[left..right]` is then simply `prefix[right + 1] ^ prefix[left]` — letters
appearing an even number of times cancel, the odd ones survive.

Each query popcounts that mask and tests `odd // 2 <= k`. The floor
division rather than a plain comparison matters: an odd-length stretch may
keep one odd letter as its centre without spending an overwrite, and every
query draws on the original, unmodified string. For `"missme"` the full
stretch holds one odd `i` and one odd `e`; one overwrite pairs them
(`msssm` after shuffling), so `[0,5,1]` answers true while `"mis"` with no
budget answers false.

**Complexity:** `O(n + q)` time, `O(n)` space.
