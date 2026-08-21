# Solutions — Repeated Ten-Letter Windows

Two scans over the same `n - 9` windows, differing in what a window _is_ while
it is being compared. One treats it as the ten letters themselves and stores
those slices; the other compresses the alphabet first — four letters fit in two
bits each, so a whole window becomes one small integer that slides through the
string with a shift and a mask. Both remember what they have seen and collect a
window the moment it is seen twice.

## Hash Set

Every window of ten has a starting index, and there are `len(s) - 9` of them,
so the scan is one question asked at each index: have these exact ten letters
come by already? A `seen` set holds the windows as they pass; the first time a
window arrives it is recorded, and any later arrival finds it there — which is
precisely the definition of occurring more than once — and the window goes to
the answers.

The answers live in a second set, not a list, and the reason is windows that
occur a third and fourth time. `"CCCCCCCCCCCCCC"` holds five windows that are
all the same ten letters; the second through fifth arrivals all qualify, and a
set keeps the answer to a single entry rather than four.

Short inputs need no branch of their own: when fewer than ten letters exist,
the range of starting indices is empty, the loop body never runs, and the
result is empty — `"ACGTTGCAAC"` has exactly one window, which cannot repeat
with itself. Sorting the answer set before returning gives a fixed order
however the duplicates happened to be found.

Each step slices and hashes ten characters, a constant, so the scan is linear
in the string length — the set replaces what would otherwise be comparing
every pair of windows.

**Complexity:** `O(n)` time, `O(n)` space.

## Rolling Bits

The alphabet has exactly four letters, and four states fit in two bits, so the
ten-letter window never has to be stored as letters at all. Fix an encoding —
`A = 00`, `C = 01`, `G = 10`, `T = 11` — and a window reads as twenty bits,
one small integer with `4^10` possible values. Different windows map to
different integers and every integer decodes back to its window, so equality
of integers is exactly equality of windows.

The register slides instead of being rebuilt. When the next letter arrives,
shift the register left by two bits, insert the new letter's pair at the
bottom, and mask off everything past the twentieth bit — the oldest letter
falls out of the top exactly as the new one enters. Two operations per
position maintain the code of the current window, versus slicing and hashing
ten characters; after the tenth letter every position holds a complete code.

The bookkeeping around the codes is the same as before, only cheaper to
compare: a `seen` set of integers, a second set for the ones that arrive
again, and a decode of the survivors back into letters at the very end —
answers must be returned as strings, so the integers are only a working
representation. `"GGGGGTTTTTGGGGGTTTTTGCGCGCATAT"` repeats `GGGGGTTTTT` and
the overlap window `GGGGTTTTTG`; both are caught as integers and both come
back out as letters, sorted for a fixed order.

Twenty-bit integers make the sets smaller than ten-character slices on any
real machine, though both are `O(n)` overall — the honest gain of the
encoding is the constant factor in the comparison and the two-operation
update, not the asymptotics.

**Complexity:** `O(n)` time, `O(n)` space.
