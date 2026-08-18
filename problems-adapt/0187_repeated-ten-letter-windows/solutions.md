# Solutions — Repeated Ten-Letter Windows

## Sliding Window with Hash Set

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
