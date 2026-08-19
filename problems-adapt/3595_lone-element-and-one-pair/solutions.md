# Solutions — Lone Element and One Pair

## Frequency counting with a hash map

The array's shape is completely rigid: one value once, one value twice,
everything else exactly three times, so both answers can be read straight off
a frequency table. One linear pass tallies each distinct value; a scan over
the (few) distinct keys hands back the key tallied once as the first answer
and the key tallied twice as the second.

The table holds at most one entry per distinct value, and integer keys hash
directly, so the full signed 32-bit range — negatives included — needs no
special casing. The two values come out in the required order
[single-occurrence value, paired value].

For truly constant space there is a per-bit automaton: a pair of masks
updated so each bit column is tracked modulo 3, one mask collecting bits seen
once (mod 3) and the other bits seen twice (mod 3); after the sweep the two
masks are exactly the two requested values. With few distinct values in
practice, the hash map is already linear and simpler, and is what the
reference implementation uses.

**Complexity:** `O(n)` time, `O(n)` space.
